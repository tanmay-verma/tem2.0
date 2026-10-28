---
name: mds-components
description: 'Use when picking, naming, or wiring up Maersk Design System (MDS) components. Covers the full component catalog, component selection between similar components (dropdown, modal, button, navigation, feedback), tag-to-React name mapping, lowercase prop and event rules, common shared props, and pointers to per-component API references. Open this skill any time you are unsure whether a component exists or which component to use.'
related-skills:
  [
    'mds-form',
    'mds-data-table',
    'mds-layout',
    'mds-content',
    'mds-icons',
    'mds-design-tokens',
    'mds-overlays',
    'mds-feedback',
    'mds-navigation',
    'mds-a11y',
  ]
---

# MDS Components

## When to use this skill

Use this skill whenever you need to:

- pick the right MDS component for a UI need
- check whether an MDS component exists for something
- map a web component tag to its React name
- look up shared props (`fit`, `appearance`, `disabled`, `loading`, `invalid`)
- find the correct per-component API reference

For framework-specific import patterns and event handling, defer to:

- [React instruction](../../instructions/mds-react.instructions.md),
- [Vue instruction](../../instructions/mds-vue.instructions.md),
- [Angular instruction](../../instructions/mds-angular.instructions.md).

## Decision Table — Component Selection

Use the catalog below for the full list. For the most common forks, use this short decision table:

| Need                                      | Pick                                                 | Notes                                                                            |
| ----------------------------------------- | ---------------------------------------------------- | -------------------------------------------------------------------------------- |
| Dropdown, fixed list                      | `mc-select`                                          | Use `mc-select-native` on mobile-only flows.                                     |
| Dropdown, searchable                      | `mc-typeahead`                                       | Use `mc-typeahead-multi-select` for multi-select with search.                    |
| Multi-select, no search                   | `mc-multi-select`                                    |                                                                                  |
| Single-line text                          | `mc-input`                                           | Use `type` attribute for email, password, etc.                                   |
| Multi-line text                           | `mc-textarea`                                        |                                                                                  |
| Date / time / range                       | `mc-input-date`, `mc-input-time`, `mc-date-range`    | Use `mc-calendar` or `mc-month-year-picker` only when a full picker is required. |
| Number entry                              | `mc-number-stepper`                                  |                                                                                  |
| Standard button                           | `mc-button`                                          | Use `appearance` for visual style, not `variant`.                                |
| Link styled as button                     | `mc-link-button`                                     | Anchor semantics, button look.                                                   |
| Button with dropdown                      | `mc-split-button`                                    |                                                                                  |
| Confirm action                            | `mc-dialog`                                          | Short, focused decision.                                                         |
| Rich content overlay                      | `mc-modal`                                           | Forms, multi-step flows.                                                         |
| Side panel                                | `mc-drawer`                                          | Filters, details panels.                                                         |
| Hover-only info                           | `mc-tooltip`                                         | Non-interactive.                                                                 |
| Interactive overlay anchored to a trigger | `mc-popover`                                         | Menus, rich tooltips, inline editors.                                            |
| App header                                | `mc-top-bar`                                         |                                                                                  |
| Side navigation                           | `mc-side-bar`                                        | Combine with `mds-tree-nav` CSS for nested nav.                                  |
| Tabs                                      | `mc-tab-bar` + `mc-tab`                              |                                                                                  |
| Context menu                              | `mc-menu`                                            |                                                                                  |
| Pagination                                | `mc-pagination`                                      |                                                                                  |
| View toggle / filter                      | `mc-segmented-control` + `mc-segmented-control-item` |                                                                                  |
| Persistent inline message                 | `mc-notification`                                    | Use `appearance` for severity.                                                   |
| Temporary floating message                | `mc-toast`                                           |                                                                                  |
| Loading spinner                           | `mc-loading-indicator`                               |                                                                                  |
| Progress                                  | `mc-progress-indicator`                              |                                                                                  |
| Status label                              | `mc-tag`                                             | Use `appearance` for semantic color.                                             |
| Counter / dot                             | `mc-badge`                                           |                                                                                  |
| Avatar                                    | `mc-avatar`                                          |                                                                                  |
| Card container                            | `mc-card`                                            |                                                                                  |
| Expandable sections                       | `mc-accordion` + `mc-accordion-item`                 | Use `heading` prop on `mc-accordion-item`, not `label`.                          |
| Multi-step process indicator              | `mc-step-indicator` + `mc-step-indicator-item`       | Read-only progress display; not a form stepper.                                  |
| Chronological activity / events           | `mc-timeline` + `mc-timeline-item`                   |                                                                                  |
| Action bar above a table or content area  | `mc-toolbar`                                         | Slot inside `mc-table` with `slot="toolbar"`. See mds-data-table skill.          |
| Grouped related buttons                   | `mc-button-group` + `mc-button-group-item`           | Use for binary or small-set choices alongside each other.                        |

## Procedure

When adding or selecting a component:

1. **Before writing any custom UI code, check the decision table and full catalog below.** If an MDS component covers the need, use it. Do not build custom accordions, expandable sections, modals, drawers, tooltips, tabs, dropdowns, or any other pattern that MDS already provides.
2. Find the component in the decision table or catalog below.
3. Open its per-component reference under `./references/mc-{name}.md` to confirm props, events, slots, and CSS parts. Never guess these.
4. Apply naming rules:
   - Web component tag is kebab-case: `mc-button`, `mc-typeahead-multi-select`.
   - React component is PascalCase with `Mc` prefix: `McButton`, `McTypeaheadMultiSelect`.
   - Props are always lowercase: `errormessage`, `clearactionlabel`, `hiddenlabel`.
   - Events are lowercase: `click`, `input`, `optionselected`, `closed`.
   - Event payload is on `event.detail`, not `event.target.value`.
5. Use `appearance` for visual style on most components (buttons, tags, notifications). Use `variant` only when the per-component reference explicitly defines it.
6. For form fields, use `label`, `errormessage`, and `hint` props or named slots. Do not use standalone `mc-label`, `mc-error`, or `mc-hint` elements in application code.
7. For framework-specific import paths and event binding syntax, follow the matching framework instructions file. Do not assume React patterns in Vue or Angular code.

## Hard Constraints

- **Always check the catalog first.** Before building any UI element from scratch, verify whether an MDS component exists for it. If it does, you MUST use it — no exceptions. This includes non-obvious components such as accordions (`mc-accordion`/`mc-accordion-item`), timelines (`mc-timeline`), step indicators (`mc-step-indicator`), and pickers (`mc-picker`). Custom implementations of existing MDS components are never acceptable.
- Never invent component names. If a component is not in the catalog below, it does not exist in MDS.
- Never use raw HTML equivalents (`<button>`, `<input>`, `<select>`, `<dialog>`, `<table>`) when an MDS component exists.
- Never build a custom accordion, modal, drawer, tooltip, tabs, select, or any other pattern covered by an MDS component.
- Never guess props, events, slots, or CSS parts. Confirm against the per-component reference.
- Never guess icon names. Verify through the [mds-icons skill](../mds-icons/SKILL.md).
- Never set visual style with a `variant` prop where the component does not define one. Use `appearance`.
- Never use standalone `mc-error`, `mc-hint`, or `mc-label` in application code.

## Reference Files

- Per-component API: `./references/mc-{name}.md` (for example `./references/mc-button.md`, `./references/mc-typeahead.md`)
- CSS-only component references: `./references/breadcrumb.md`, `./references/tree-nav.md`
- Component catalog and shared props: [component-catalog reference](./references/component-catalog.md)
- Forms: [mds-form skill](../mds-form/SKILL.md), [form components reference](../mds-form/references/form-components.md)
- Tables: [mds-data-table skill](../mds-data-table/SKILL.md), [table components reference](../mds-data-table/references/table-components.md)
- Layout, grid, and breakpoints: [mds-layout skill](../mds-layout/SKILL.md)
- Tokens: [mds-design-tokens skill](../mds-design-tokens/SKILL.md)
- Icons: [mds-icons skill](../mds-icons/SKILL.md)

If this skill conflicts with the per-component reference or the current MDS source, the reference and source win.

---

### Component References

- [mc-accordion-item](./references/mc-accordion-item.md)
- [mc-accordion](./references/mc-accordion.md)
- [mc-avatar](./references/mc-avatar.md)
- [mc-badge](./references/mc-badge.md)
- [mc-button-group-item](./references/mc-button-group-item.md)
- [mc-button-group](./references/mc-button-group.md)
- [mc-button](./references/mc-button.md)
- [mc-calendar](./references/mc-calendar.md)
- [mc-card](./references/mc-card.md)
- [mc-chat](./references/mc-chat.md)
- [mc-checkbox-group](./references/mc-checkbox-group.md)
- [mc-checkbox](./references/mc-checkbox.md)
- [mc-code-preview](./references/mc-code-preview.md)
- [mc-copy-button](./references/mc-copy-button.md)
- [mc-date-range](./references/mc-date-range.md)
- [mc-dialog](./references/mc-dialog.md)
- [mc-drawer](./references/mc-drawer.md)
- [mc-error](./references/mc-error.md)
- [mc-file-upload](./references/mc-file-upload.md)
- [mc-hint](./references/mc-hint.md)
- [mc-icon](./references/mc-icon.md)
- [mc-input-date](./references/mc-input-date.md)
- [mc-input-group](./references/mc-input-group.md)
- [mc-input-time](./references/mc-input-time.md)
- [mc-input](./references/mc-input.md)
- [mc-label](./references/mc-label.md)
- [mc-link-button](./references/mc-link-button.md)
- [mc-list-item](./references/mc-list-item.md)
- [mc-list](./references/mc-list.md)
- [mc-loading-indicator](./references/mc-loading-indicator.md)
- [mc-menu](./references/mc-menu.md)
- [mc-modal](./references/mc-modal.md)
- [mc-month-year-picker](./references/mc-month-year-picker.md)
- [mc-multi-choice-fieldset](./references/mc-multi-choice-fieldset.md)
- [mc-multi-select](./references/mc-multi-select.md)
- [mc-notification](./references/mc-notification.md)
- [mc-number-stepper](./references/mc-number-stepper.md)
- [mc-option](./references/mc-option.md)
- [mc-pagination](./references/mc-pagination.md)
- [mc-picker-item](./references/mc-picker-item.md)
- [mc-picker](./references/mc-picker.md)
- [mc-popover](./references/mc-popover.md)
- [mc-progress-indicator](./references/mc-progress-indicator.md)
- [mc-radio-group](./references/mc-radio-group.md)
- [mc-radio](./references/mc-radio.md)
- [mc-segmented-control-item](./references/mc-segmented-control-item.md)
- [mc-segmented-control](./references/mc-segmented-control.md)
- [mc-select-native](./references/mc-select-native.md)
- [mc-select](./references/mc-select.md)
- [mc-side-bar](./references/mc-side-bar.md)
- [mc-split-button](./references/mc-split-button.md)
- [mc-step-indicator-item](./references/mc-step-indicator-item.md)
- [mc-step-indicator](./references/mc-step-indicator.md)
- [mc-switch-group](./references/mc-switch-group.md)
- [mc-switch](./references/mc-switch.md)
- [mc-tab-bar](./references/mc-tab-bar.md)
- [mc-tab](./references/mc-tab.md)
- [mc-table](./references/mc-table.md)
- [mc-tag](./references/mc-tag.md)
- [mc-text-and-icon](./references/mc-text-and-icon.md)
- [mc-textarea](./references/mc-textarea.md)
- [mc-theme-switch](./references/mc-theme-switch.md)
- [mc-time-picker](./references/mc-time-picker.md)
- [mc-timeline-item](./references/mc-timeline-item.md)
- [mc-timeline](./references/mc-timeline.md)
- [mc-toast](./references/mc-toast.md)
- [mc-toolbar](./references/mc-toolbar.md)
- [mc-tooltip](./references/mc-tooltip.md)
- [mc-top-bar](./references/mc-top-bar.md)
- [mc-typeahead-multi-select](./references/mc-typeahead-multi-select.md)
- [mc-typeahead](./references/mc-typeahead.md)

### Foundation CSS References

- [breadcrumb](./references/breadcrumb.md)
- [link](./references/link.md)
- [list](./references/list.md)
- [table](./references/table.md)
- [tree-nav](./references/tree-nav.md)
## Detailed Catalog

The full component catalog, React tag mapping, internal-only components, quick selection reference, and common shared props are in [component-catalog reference](./references/component-catalog.md).
