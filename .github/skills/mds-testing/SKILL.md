---
name: mds-testing
description: 'Write tests for UI pages and apps that use MDS components. Use for: Jest, Testing Library, Cypress, unit tests, integration tests, E2E tests, shadow DOM, web components, fireEvent, realClick, component props testing.'
related-skills: ['mds-setup', 'mds-a11y', 'mds-components', 'mds-form']
related-components: []
---

# Write Tests for UI Pages That Use MDS Components

## When to Use

- Writing unit or integration tests for React/Vue/Angular pages that render MDS components
- Setting up Jest + Testing Library for a project that uses MDS
- Setting up Cypress for E2E or integration testing of MDS-based UIs
- Querying or interacting with MDS web components and their shadow DOM in tests
- Verifying that MDS component props change correctly in response to user actions

## Decision Table

| Testing need                                          | Tool                               | Notes                                                               |
| ----------------------------------------------------- | ---------------------------------- | ------------------------------------------------------------------- |
| Component renders correctly, props set correctly      | Jest + Testing Library             | Fast, runs in jsdom                                                 |
| User interaction (click, type) on MDS component       | Jest + Testing Library (fireEvent) | `fireEvent.click` on the host element                               |
| Query text or labels inside MDS shadow DOM            | Jest + shadow-dom-testing-library  | Standard `screen.getByText` cannot see inside shadow DOM            |
| Full page or flow integration test                    | Cypress                            | Real browser, full shadow DOM support with `includeShadowDom: true` |
| Native keyboard/mouse simulation (focus, hover, keys) | Cypress + cypress-real-events      | `cy.realClick()`, `cy.realType()` — required for native events      |

## When NOT to Use

- Testing non-MDS code — this skill covers MDS-specific patterns only
- Setting up testing frameworks from scratch — this skill assumes a working test environment; for project setup see `mds-setup` skill
- Troubleshooting framework-specific test failures unrelated to MDS (e.g. async state, routing)
- Testing inside the MDS monorepo itself — that uses Cypress component tests, Vitest, and different conventions

## Procedure

### 1. Configure Jest for MDS

The critical requirement is `transformIgnorePatterns` — without it Jest cannot parse the ESM modules used by MDS and Lit.

See [Jest Setup Reference](./references/jest-setup.md) for the full `jest.config.js`, `jest.setup.js`, `babel.config.js`, and CSS mock files.

Key entries to verify in `jest.config.js`:

```js
transformIgnorePatterns: [
  'node_modules/(?!(@maersk-global)|(@material)|(lit)|(@lit)|(@lit-labs)|(lit-element)|(lit-html)|(.*\\.mjs$))',
],
```

And in `jest.setup.js` — mocks required by MDS components in jsdom:

```js
window.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
}));

HTMLDialogElement.prototype.showModal = jest.fn(function () {
  this.open = true;
});
HTMLDialogElement.prototype.close = jest.fn(function () {
  this.open = false;
});
```

### 2. Render and Assert with Jest

Basic render test:

```tsx
import { render } from '@testing-library/react';
import App from '../src/App';

it('renders without crashing', () => {
  const { baseElement } = render(<App />);
  expect(baseElement).toBeTruthy();
});
```

Test an MDS component prop after a user interaction. Cast to `IMcXxx & HTMLElement` to access the typed component API:

```tsx
import { fireEvent, render, screen } from '@testing-library/react';
import type { IMcButton } from '@maersk-global/mds-components-core-button/types';

it('updates label on click', () => {
  render(<App />);
  const button = screen.getByTestId('my-button') as IMcButton & HTMLElement;
  fireEvent.click(button);
  expect(button.label).toBe('Clicked');
});
```

### 3. Query Inside Shadow DOM with Jest

Standard `screen.getByText` cannot see inside MDS shadow DOM. Use `shadow-dom-testing-library` for shadow DOM queries:

```bash
npm i -D shadow-dom-testing-library
```

```tsx
import { render } from '@testing-library/react';
import { screen, findByShadowText, findByShadowLabelText } from 'shadow-dom-testing-library';
import type { IMcButton } from '@maersk-global/mds-components-core-button/types';

it('finds text inside shadow DOM', async () => {
  render(<App />);
  const button = await screen.findByShadowText('Submit');
  expect(button).toBeInTheDocument();
});

it('finds label inside shadow DOM', async () => {
  const { container } = render(<App />);
  const mcButton = container.querySelector('mc-button') as IMcButton & HTMLElement;
  const label = await findByShadowLabelText(mcButton, 'Submit');
  expect(label).toBeInTheDocument();
});
```

### 4. Configure Cypress for MDS

Enable shadow DOM traversal globally in `cypress.config.js`:

```js
module.exports = {
  e2e: {
    includeShadowDom: true,
  },
};
```

With `includeShadowDom: true`, Cypress queries traverse into shadow roots automatically — no `.shadow()` calls needed.

Install `cypress-real-events` for native interaction simulation:

```bash
npm i -D cypress-real-events
```

```js
// cypress/support/e2e.js
import 'cypress-real-events';
```

### 5. Query and Interact with MDS Components in Cypress

Set a component prop via attribute:

```js
cy.get('mc-button').invoke('attr', 'label', 'New Label');
```

Query inside shadow DOM (works automatically with `includeShadowDom: true`):

```js
cy.get('mc-button')
  .find('[data-cy="label"]')
  .then(($label) => {
    expect($label.text().trim()).to.equal('Submit');
  });
```

Use `cypress-real-events` for native interactions — required for MDS components that listen to native events:

```js
// Typing into mc-input
cy.get('mc-input').realClick();
cy.realType('Hello World');
cy.get('mc-input').should('have.value', 'Hello World');

// Clicking mc-button
cy.get('mc-button').realClick();
```

## Hard Constraints

### ❌ Missing transformIgnorePatterns vs ✅ including lit/MDS in transform

```js
// ❌ — Jest cannot parse MDS/Lit ESM, tests crash with "Unexpected token"
module.exports = { testEnvironment: 'jest-environment-jsdom' };

// ✅
module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transformIgnorePatterns: [
    'node_modules/(?!(@maersk-global)|(@material)|(lit)|(@lit)|(@lit-labs)|(lit-element)|(lit-html)|(.*\\.mjs$))',
  ],
};
```

### ❌ Standard screen query for shadow DOM text vs ✅ shadow-dom-testing-library

```tsx
// ❌ — returns null, MDS text is inside shadow DOM
const button = screen.getByText('Submit');

// ✅
import { screen } from 'shadow-dom-testing-library';
const button = await screen.findByShadowText('Submit');
```

### ❌ No TypeScript cast vs ✅ cast to IMcXxx & HTMLElement

```tsx
// ❌ — element is typed as HTMLElement, no access to MDS props
const button = screen.getByTestId('btn');
expect(button.label).toBe('Submit'); // TS error

// ✅ — use import type to avoid runtime overhead
import type { IMcButton } from '@maersk-global/mds-components-core-button/types';
const button = screen.getByTestId('btn') as IMcButton & HTMLElement;
expect(button.label).toBe('Submit');
```

### ❌ cy.click() for native interaction vs ✅ cy.realClick()

```js
// ❌ — synthetic click, may not trigger MDS component event listeners correctly
cy.get('mc-input').click();

// ✅ — native browser event, required for MDS web components
cy.get('mc-input').realClick();
```

### Absolute rules

- **NEVER** query MDS internal shadow DOM structure by CSS class or element tag — it is subject to change and not part of the public API
- **NEVER** use `cy.wait()` — use assertions (`.should('be.visible')`, `.should('have.value', ...)`)
- **NEVER** omit the `IntersectionObserver` and `HTMLDialogElement` mocks in `jest.setup.js` — MDS components require them

## Common Mistakes

- Missing `transformIgnorePatterns` in `jest.config.js` — causes "Unexpected token" errors when importing MDS or Lit packages
- Using `screen.getByText()` to find text inside MDS components — it cannot traverse shadow DOM, use `shadow-dom-testing-library`
- Forgetting to cast to `IMcXxx & HTMLElement` when asserting on component props — plain `HTMLElement` has no MDS-specific props
- Testing MDS shadow DOM internals (inner buttons, spans) by structure — these are private implementation details and will break when MDS updates
- Using `cy.click()` instead of `cy.realClick()` for components that need native browser events to respond
- Importing CSS directly in test files without the `styleMock.js` mock — causes Jest to fail on CSS parsing

## Reference Files

- [Jest Setup Reference](./references/jest-setup.md) — full `jest.config.js`, `jest.setup.js`, `babel.config.js`, CSS and file mocks, TypeScript config additions
- [Component skill](../mds-components/SKILL.md) — overview of all components with references to detail component's API
