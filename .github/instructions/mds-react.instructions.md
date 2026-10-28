---
description: 'Use when writing React code with Maersk Design System (MDS) components. Covers React wrapper imports, property binding, event handling, and TypeScript types.'
applyTo: '**/*.{tsx,jsx}'
---

# MDS React Integration

This file covers React-specific patterns. For the full component catalog, design tokens, anti-patterns, and general guidelines see `mds-general.instructions.md` (loaded automatically for all UI files).
Follow React best practices for component structure, property binding, and event handling.
For details on MDS setup in React, see the [mds-setup skill](../skills/mds-setup/SKILL.md).

## Import Pattern

React uses the `@maersk-global/mds-react-wrapper` package. Each component has a dedicated import path:

```tsx
import { McButton } from '@maersk-global/mds-react-wrapper/mc-button';
import { McInput } from '@maersk-global/mds-react-wrapper/mc-input';
import { McSelect } from '@maersk-global/mds-react-wrapper/mc-select';
import { McDialog } from '@maersk-global/mds-react-wrapper/mc-dialog';
import { McTable } from '@maersk-global/mds-react-wrapper/mc-table';
```

### Import Rules

- Always prefer individual imports for tree-shaking and bundle size: `@maersk-global/mds-react-wrapper/mc-{name}`
- The longer path `@maersk-global/mds-react-wrapper/components-core/mc-{name}` also works but prefer the shorthand
- NEVER import from `@maersk-global/mds-components-core-{name}` in React — that's for Vue/Angular
- Do not use default or namespace imports for MDS components
- Component names are PascalCase with `Mc` prefix: `McButton`, `McInput`, `McSelect`
- Use the bundled component references, for example [button](../skills/mds-components/references/mc-button.md), [typeahead](../skills/mds-components/references/mc-typeahead.md), and [form components](../skills/mds-form/references/form-components.md), to confirm the exact import path for a component

## Type Imports

Import TypeScript types directly from the core package. Props are strictly typed and may require special typings in state hooks:

```tsx
import type { IMcSelectData } from '@maersk-global/mds-components-core-select/types';
import type { IMcTableColumn } from '@maersk-global/mds-components-core-table/types';
import type { IconPosition } from '@maersk-global/mds-components-core-button/types';

const [buttonIconPosition, setButtonIconPosition] = React.useState<IconPosition>('left');
<McButton iconposition={buttonIconPosition}></McButton>;
```

## Property Binding

MDS component properties are lowercase (not camelCase):

```tsx
// String properties — pass directly
<McButton label="Submit" appearance="primary" variant="filled" />

// Boolean properties — pass as boolean
<McButton loading={true} disabled={isDisabled} rounded={false} />

// Int properties — pass as number
<McCalendar yearcap={20} />

// Complex types (objects, arrays) — pass as props
<McSelect data={options} label="Choose country" />
<McTable data={rows} columns={columns} />

// Property names are always lowercase, even multi-word:
<McInput label="Email" clearactionlabel="Clear" hiddenlabel={false} />
<McDialog escapecloseactiondisabled={true} />
```

Always confirm prop names against the per-component reference, by checking the [component documentation](../skills/mds-components/SKILL.md). Don't guess property names or their values.

### Common Property Name Mistakes

- `clearActionLabel` → WRONG. Use `clearactionlabel`
- `hiddenLabel="false"` → WRONG. Just skip the attribute for false, or use `hiddenlabel={false}`
- `escapeCloseActionDisabled` → WRONG. Use `escapecloseactiondisabled`
- `ariaLabel` → WRONG. Use `arialabel`

## Event Handling

MDS custom events use lowercase event names. Use MDS event prop names (`click`, `focus`) NOT React's `onClick`, `onFocus` convention:

```tsx
// ✅ Correct — use MDS event names
<McButton
  label="Click me"
  click={(e) => handleClick(e)}
  focus={(e) => handleFocus(e)}
/>

// ❌ Incorrect — do NOT use React event conventions for MDS components
<McButton label="Click me" onClick={handleClick} />
```

Common MDS event props: `click`, `focus`, `blur`, `change`, `input`.

```tsx
<McSelect
  label="Country"
  data={countries}
  optionselected={(e) => handleSelect(e.detail)}
/>

<McInput
  label="Search"
  input={(e) => handleInput(e.detail)}
  change={(e) => handleChange(e.detail)}
/>

<McDialog
  open={isOpen}
  closed={(e) => setIsOpen(false)}
  opened={(e) => console.log("dialog opened")}
/>
```

Always confirm available event names against the per-component reference, by checking the [component documentation](../skills/mds-components/SKILL.md). Don't guess events names, or what they are dispatching.

### Event Detail Access

For custom event like `optionselected`, the `event.detail` is dispatched, not `event.target.value`:

```tsx
const handleSelect = (e: CustomEvent) => {
  const selectedValue = e.detail; // { label: "...", value: "..." }
};
```

## Slots and Children

For components that use slots, pass React children as you normally would.
MDS supports both default slots:

```tsx
<McButton>Save Changes</McButton>
```

And named slots for example, `mc-button` supports an `icon` slot:

```tsx
<McButton label="Save">
  <span slot="icon">💾</span>
</McButton>
```

Prefer to use attribute props for simple cases, but for complex content or when using slots, use children and the `slot` attribute as needed. Always check the per-component reference for slot names and usage details.

## Styling and Customization

Use CSS parts for styling and customization. Use it very sparingly, as any overrides may derive from the MDS design language and cause inconsistency. Always check the per-component reference for available CSS parts and their intended use.
When overriding styles, prefer to use design tokens and CSS custom properties where possible, to maintain consistency with the MDS design language. For example, instead of hardcoding a color, use the appropriate MDS color token:

```css
mc-button::part(label) {
  color: var(--mds_brand_appearance_primary_default_color);
}
```
