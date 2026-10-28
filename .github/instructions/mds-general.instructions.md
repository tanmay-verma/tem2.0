---
description: 'Use when working with Maersk Design System (MDS) in any UI file. Provides the core rules: never invent components, always use design tokens, lowercase props and events, plus required base setup. For the full component catalog and selection guide, the `mds-components` skill is the source of truth.'
applyTo: '**/*.{ts,tsx,jsx,vue,html,svelte,astro,mdx}'
---

# Maersk Design System (MDS) — Core Rules

These rules apply to every MDS-related file. The full catalog, selection guide, and per-component API live in the `mds-components` skill and the bundled reference files. If anything below conflicts with the bundled references or the current MDS source, the references and source win.

## Where to find detail

- Component catalog, selection, and APIs: [mds-components skill](../skills/mds-components/SKILL.md)
- Full list of all available components, React tag mapping, internal-only components, quick selection reference, and common shared props: [component-catalog reference](../skills/mds-components/references/component-catalog.md)
- Per-component API references: bundled under `../skills/mds-components/references/`
- Content related components and elements: [mds-content skill](../skills/mds-content/SKILL.md)
- Forms: [mds-form skill](../skills/mds-form/SKILL.md), [form components reference](../skills/mds-form/references/form-components.md)
- Tables: [mds-data-table skill](../skills/mds-data-table/SKILL.md), [table components reference](../skills/mds-data-table/references/table-components.md)
- Feedback (toasts, notifications, loading): [mds-feedback skill](../skills/mds-feedback/SKILL.md)
- Dashboards and data visualization: [mds-dashboard skill](../skills/mds-dashboard/SKILL.md)
- Dialog and overlays: [mds-overlays skill](../skills/mds-overlays/SKILL.md)
- Layout, grid, and breakpoints: [mds-layout skill](../skills/mds-layout/SKILL.md)
- Navigation components: [mds-navigation skill](../skills/mds-navigation/SKILL.md)
- Styling content, like text colour and typography: [mds-content skill](../skills/mds-content/SKILL.md)
- Design tokens: [mds-design-tokens skill](../skills/mds-design-tokens/SKILL.md)
- Accessibility: [mds-a11y skill](../skills/mds-a11y/SKILL.md)
- Icons: [mds-icons skill](../skills/mds-icons/SKILL.md)
- Setup and icons: [mds-setup skill](../skills/mds-setup/SKILL.md), [mds-icons skill](../skills/mds-icons/SKILL.md)
- For testing MDS-based code, including test setup, best practices, and troubleshooting: [mds-testing skill](../skills/mds-testing/SKILL.md)

Use skills (type `/`) for complex tasks like building forms, layouts, data tables, dashboards, or a11y audits.

## Hard Rules

1. Use MDS components first. Never invent names like `mc-dropdown`, `mc-alert`, `mc-textfield`, `mc-banner`, `mc-snackbar`, or `mc-chart`. If unsure whether a component exists, check the [components catalog](../skills/mds-components/references/component-catalog.md).
2. Component **properties are always lowercase** (`errormessage`, `clearactionlabel`, `hiddenlabel`), not camelCase.
3. Component **events use lowercase names** (`click`, `input`, `optionselected`, `closed`), not React conventions like `onClick`.
4. Event payload data lives on `event.detail`, not `event.target.value`.
5. Use the `appearance` prop for visual style on most components (for example `appearance="primary"` on `mc-button`). Do not invent a `variant` prop where the component does not define one. Always confirm prop names against the per-component reference.
6. Use the `label`, `errormessage`, and `hint` props (or their named slots) on form fields. Do not use standalone `mc-label`, `mc-error`, or `mc-hint` elements in application code.
7. Never override MDS styles with `!important`. Use CSS parts and slots when customization is needed.
8. Always verify icon names through the [mds-icons skill](../skills/mds-icons/SKILL.md). Do not guess icon names.

## Design Token & Styling Rules

- Never hardcode colors. Use MDS CSS custom properties such as `var(--mds_brand_appearance_primary_default_background-color)` or MDS color classes from foundations. See the [mds-design-tokens skill](../skills/mds-design-tokens/SKILL.md) for exact values.
- Never hardcode font sizes, font families, or font weights. Use MDS typography classes or SCSS mixins from `@maersk-global/mds-foundations`. See the [typography reference](../skills/mds-content/references/typography.md) for available class names.
- Never hardcode spacing values. Use the MDS spacing scale via foundation classes (for example `mds-gap-800`). See the [mds-layout skill](../skills/mds-layout/SKILL.md) for exact values and class patterns.
- Use the MDS grid and flex utilities (`mds-grid`, `mds-container`, `mds-flex`, `mds-flex-column`) for page layouts. Do not write custom CSS Grid or Flexbox for layout. See the [mds-layout skill](../skills/mds-layout/SKILL.md) for exact values and class patterns.
- Use MDS breakpoints for responsive design. See the [mds-layout skill](../skills/mds-layout/SKILL.md) for exact values and class patterns.

## Anti-Patterns — NEVER Do These

- Never replace MDS components with raw HTML (`<button>`, `<input>`, `<select>`, `<dialog>`, `<table>`).
- Never use Bootstrap, Tailwind, or other utility-class frameworks for things MDS already provides.
- Never write custom styled `<div>` for success, warning, or error messages. Use `mc-notification` with the appropriate `appearance`.
- Never write custom CSS for layout, typography, or spacing when an MDS class or token covers the case.
- Never create a custom theme. MDS light and dark themes ship out of the box.

## Installation and Required Base Setup

To set up MDS in a project, follow the instructions in the [mds-setup skill](../skills/mds-setup/SKILL.md). It covers the required package installations, CSS imports for fonts, tokens, and foundations, icon configuration, and the base HTML structure needed for MDS to work correctly.

To set up testing for MDS-based code, see the [mds-testing skill](../skills/mds-testing/SKILL.md).

## Framework-Specific Notes

Framework-specific property patterns and event handling are documented in the framework instruction files (`mds-react.instructions.md`, `mds-vue.instructions.md`, `mds-angular.instructions.md`).
