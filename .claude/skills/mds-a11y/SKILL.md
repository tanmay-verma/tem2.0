---
name: mds-a11y
description: 'Review and implement MDS accessibility requirements. Use for: accessibility audit, WCAG 2.2 AA, keyboard navigation, focus management, labels, hints, errors, aria attributes, skip links, touch targets, screen reader support, status messages.'
related-skills: ['mds-components', 'mds-form', 'mds-feedback', 'mds-layout', 'mds-overlays']
related-components: ['mc-loading-indicator', 'mc-progress-indicator', 'mc-pagination', 'mc-timeline', 'mc-dialog']
---

# Review Accessibility with MDS

## When to Use

- Auditing a screen or component for WCAG 2.2 Level AA
- Checking form accessibility before shipping
- Verifying keyboard navigation and focus behavior
- Reviewing overlays, notifications, or status messages
- Adding skip links, accessible labels, or error messaging

**Core rule:** Prefer built-in MDS accessibility patterns before adding custom ARIA. Use MDS components that already manage focus, announcements, and keyboard behavior instead of building custom solutions.

## Decision Table

Use the table below to find the right accessibility mechanism for a given need.

| Need                                                              | MDS mechanism                                                    | Notes                                                 |
| ----------------------------------------------------------------- | ---------------------------------------------------------------- | ----------------------------------------------------- |
| Visible label for form fields                                     | `label` prop                                                     | Always use unless hidden-label pattern is justified   |
| Hidden label on form fields                                       | `hiddenlabel` prop                                               | Only when another accessible naming mechanism exists  |
| Accessible name for MDS components (`mc-loading-indicator`, etc.) | `arialabel` prop                                                 | Passes value to the correct ARIA attribute internally |
| Accessible name on semantic HTML (`nav`, `mc-list`, `mc-picker`)  | Raw `aria-label` attribute                                       | Only when no MDS component API for naming exists      |
| Error message on form field                                       | `errormessage` + `invalid` props                                 | Never use standalone `mc-error`                       |
| Hint text on form field                                           | `hint` prop or `<span slot="hint">`                              | Never use standalone `mc-hint`                        |
| Icon-only label                                                   | `title` attribute on `mc-icon`                                   |                                                       |
| Skip navigation links                                             | `class="mds-skip-to"` on `<a>`                                   | For content-heavy pages                               |
| Overlays with focus management                                    | `mc-dialog`, `mc-modal`, `mc-drawer`, `mc-popover`, `mc-tooltip` | MDS handles focus trapping and restoration            |

See [MDS Accessible Naming](./references/mds-accessible-naming.md) for code examples for each case.

## When NOT to Use

- Adding custom ARIA when an MDS component already handles focus, announcements, and keyboard behavior
- Building custom dialogs, menus, or tooltips — use MDS overlay components instead
- Replacing documented MDS props with raw HTML attributes when the component exposes an accessibility prop
- Overriding `role` or ARIA attributes that MDS components set internally

## Procedure

### 1. Check Labels and Field Support

- Every field must have a visible `label` unless a hidden-label pattern is justified
- Use `hiddenlabel` only when another accessible naming mechanism is present
- Use `hint` prop or `<span slot="hint">` for supplementary guidance — never standalone `mc-hint`
- Use `errormessage` + `invalid` for errors — never standalone `mc-error`

```html
<mc-input
  label="Email"
  invalid
  errormessage="Please enter a valid email address"
  hint="We will only use this for account communication"
></mc-input>
```

### 2. Check Keyboard Navigation

Verify the full interaction can be completed with the keyboard:

- `Tab` / `Shift+Tab` move in logical order
- `Enter` and `Space` activate buttons and toggles where expected
- `Escape` closes dismissible overlays
- Arrow keys work in controls that MDS supports (radio groups, tab bars, menus)
- Focus is restored sensibly after closing dialogs or drawers

Prefer MDS components that already manage focus instead of building custom focus traps.

### 3. Check Status and Error Messaging

- Use `errormessage` + `invalid` for field-level errors
- Use `mc-notification` for persistent inline status messages
- Use `mc-toast` for temporary feedback that should not interrupt flow
- Use `arialabel` on loading and progress components for descriptive assistive text

```html
<mc-loading-indicator label="Loading" arialabel="Loading shipment data"></mc-loading-indicator>
```

### 4. Check Layout Accessibility

- Add `class="mds"` on the body or root app container
- Add skip links for content-heavy pages
- Use semantic landmarks: `<header>`, `<nav>`, `<main>`, `<footer>`
- Keep heading order logical

```html
<body class="mds">
  <a href="#main-content" class="mds-skip-to">Skip to content</a>
  <a href="#footer" class="mds-skip-to">Skip to footer</a>
  <div class="mds-layout">
    <mc-top-bar product="My App" productshort="MA"></mc-top-bar>
    <main id="main-content" class="mds-page mds-container mds-content">
      <h1>Page title</h1>
      <footer id="footer">Footer</footer>
    </main>
  </div>
</body>
```

### 5. Check Contrast and Touch Targets

- Use MDS design tokens and foundation classes instead of custom colours
- Do not reduce contrast by overriding component styles with custom colours unless verified
- Ensure clickable targets are at least 24×24 px minimum, preferably 44×44 px for touch-heavy flows

### 6. Use MDS as the First Accessibility Strategy

If unsure whether a component already handles focus, announcements, or keyboard behavior, check the relevant reference before adding custom ARIA:

- [Form components reference](../mds-form/references/form-components.md) — field props and error support
- [Content components reference](../mds-content/references/content-components.md) — cards, tabs, and content primitives
- [Table components reference](../mds-data-table/references/table-components.md) — interactive table behaviour
- [WCAG 2.2 Level AA checklist](./references/accessibility-checklist.md) — global review criteria

## Hard Constraints

### ❌ Raw aria-label on MDS component vs ✅ arialabel prop

```html
<!-- ❌ -->
<mc-loading-indicator label="Loading" aria-label="Loading vessels data"></mc-loading-indicator>

<!-- ✅ -->
<mc-loading-indicator label="Loading" arialabel="Loading vessels data"></mc-loading-indicator>
```

### ❌ Standalone mc-error vs ✅ errormessage + invalid

```html
<!-- ❌ -->
<mc-input id="email" type="email"></mc-input>
<mc-error>Please enter a valid email</mc-error>

<!-- ✅ -->
<mc-input label="Email" type="email" invalid errormessage="Please enter a valid email"></mc-input>
```

### ❌ Placeholder as label vs ✅ visible label

```html
<!-- ❌ -->
<mc-input placeholder="Email address"></mc-input>

<!-- ✅ -->
<mc-input label="Email address"></mc-input>
```

### ❌ Custom overlay vs ✅ MDS overlay component

```html
<!-- ❌ -->
<div role="dialog" aria-modal="true" tabindex="-1">
  <button onclick="closeDialog()">Close</button>
</div>

<!-- ✅ -->
<mc-dialog heading="Confirm deletion">
  <mc-button slot="primaryAction" label="Delete" appearance="primary"></mc-button>
  <mc-button slot="secondaryAction" label="Cancel" appearance="neutral" variant="outlined"></mc-button>
</mc-dialog>
```

### Absolute rules

- **NEVER** use `mc-error`, `mc-hint`, or `mc-label` as standalone elements — use the form field's built-in props
- **NEVER** show `errormessage` without also setting `invalid` to `true`
- **NEVER** add `aria-label` directly on an MDS component that exposes an `arialabel` prop
- **NEVER** build custom focus traps — use MDS overlay components

## Common Mistakes

- Using placeholder text instead of a label
- Showing an error message without setting `invalid`
- Using raw HTML controls when an MDS component already exists
- Building custom dialogs, menus, or tooltips instead of using MDS overlays
- Adding unnecessary ARIA that conflicts with native semantics or MDS behaviour
- Using `mc-error` or `mc-hint` as standalone elements instead of the field's `errormessage` and `hint` props

## Reference Files

- [WCAG 2.2 Level AA checklist](./references/accessibility-checklist.md) — global code, keyboard nav, contrast ratios, forms, motion, common failures
- [MDS Accessible Naming](./references/mds-accessible-naming.md) — when to use label, arialabel, aria-label, and title with code examples
- [Accessibility review checklist](./references/review-checklist.md) — quick MDS-specific checklist for auditing a screen before shipping
- [Component skill](../mds-components/SKILL.md) — overview of all components with references to detail component's API
