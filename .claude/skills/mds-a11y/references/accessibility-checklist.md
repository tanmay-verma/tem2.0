# Accessibility Checklist (WCAG 2.2 Level AA)

Distilled from the MDS accessibility checklist. Use this as a quick-pass review when implementing any UI.

## Global / page-level

- [ ] `<html lang="en">` — set the language attribute on the root element.
- [ ] Unique `<title>` for every page or view — it is the first thing screen readers announce.
- [ ] Do not disable viewport zoom (`user-scalable=no` is forbidden).
- [ ] Use landmark elements: `<main>`, `<nav>`, `<footer>`, `<header>` — not just `<div>`.
- [ ] Add `<a href="#main-content" class="mds-skip-to">Skip to content</a>` as the first element in `<body>`.
- [ ] No `tabindex` values other than `0` or `-1` — do not manage tab order manually.
- [ ] No `autofocus` — it disorients keyboard and screen reader users.

## Keyboard navigation

- [ ] All interactive elements (buttons, links, inputs, dialogs) reachable and operable via Tab/Enter/Space.
- [ ] Visible focus indicator on all interactive elements — MDS components provide this; do not suppress with `outline: none`.
- [ ] Tab order matches the visual reading order (top → bottom, left → right).
- [ ] No invisible focusable elements (e.g. hidden dropdowns still in the tab flow).
- [ ] Modals/dialogs trap focus while open and restore focus to the trigger element on close — `mc-dialog` and `mc-drawer` handle this automatically.

## Colour contrast

- [ ] Normal text (< 18pt / 14pt bold): contrast ratio ≥ **4.5:1**
- [ ] Large text (≥ 18pt / 14pt bold): contrast ratio ≥ **3:1**
- [ ] UI components and icons: contrast ratio ≥ **3:1** (borders, form field outlines, icon-only buttons)
- [ ] Never use **colour alone** to convey meaning — always pair with text or icon.
- [ ] Always use MDS design tokens for colour — they are pre-tested for contrast in both light and dark themes.

## Text and typography

- [ ] Text must remain readable at 200% browser zoom without content overlap.
- [ ] Left-align large blocks of text — do not justify.
- [ ] Right-align numeric values in table columns for easy comparison.
- [ ] Do not use images of text — use actual HTML text with MDS typography classes.
- [ ] Avoid truncation; when necessary, ensure the full content is still accessible (tooltip, expand, title).

## Images and icons

- [ ] Every `<img>` has an `alt` attribute. Decorative images use `alt=""`.
- [ ] Icon-only buttons have an accessible name — use `hiddenlabel` prop on `mc-button` or `aria-label`.
- [ ] SVG icons used inline have `aria-hidden="true"` when decorative, or `role="img"` + `aria-label` when meaningful.

## Forms

- [ ] Every form field has a visible `label` — use the component's `label` prop, never standalone `<mc-label>`.
- [ ] Error messages use `errormessage` prop (not a separate element) — automatically associated via ARIA.
- [ ] Hint text uses `hint` prop — shown at all times, not only on error.
- [ ] Group related options: `mc-checkbox-group`, `mc-radio-group`, `mc-switch-group` (provide `legend` prop).
- [ ] `required` fields are communicated beyond colour alone — use "(optional)" on non-required fields instead.

## Motion and animation

- [ ] Respect `prefers-reduced-motion` — do not add custom CSS `@keyframes` animations without respecting this media query.
- [ ] No content that flashes more than 3 times per second.

## Content appearance

- [ ] Content must reflow at 400% zoom on a 1280px-wide viewport (single-column, no horizontal scroll).
- [ ] Text spacing adjustments (1.5x line height, 2x letter spacing) must not cause content loss.
- [ ] Content visible on hover or focus (`mc-tooltip`, `mc-popover`) must:
  - Be dismissible without moving focus.
  - Remain visible while the pointer is on the revealed content.
  - Not auto-disappear after a timeout.

## Common WCAG failures to avoid

| Failure                                  | Fix                                                                 |
| ---------------------------------------- | ------------------------------------------------------------------- |
| `outline: none` on focused elements      | Never suppress focus outline — MDS provides accessible focus styles |
| `<div onclick>` for interactive elements | Use `<button>` / `mc-button` — divs are not keyboard-accessible     |
| Colour-only status indicators            | Always pair colour with a text label or icon                        |
| `aria-label` on a non-interactive div    | Apply ARIA roles only to interactive or semantic elements           |
| Icon-only button with no accessible name | Add `hiddenlabel` prop to `mc-button`                               |
| `<table>` without headers                | Use `mc-table` — it handles `<th scope>` automatically              |
| Custom modals that don't trap focus      | Use `mc-dialog` or `mc-drawer` — they manage focus trapping         |
