# Selection Component UX Guidelines

Distilled from the MDS selection components UX documentation.

## Quick decision table

| Scenario                                       | Component                                  | Key rule                                   |
| ---------------------------------------------- | ------------------------------------------ | ------------------------------------------ |
| 1 choice, 2–6 options, all visible             | `mc-radio-group` + `mc-radio`              | Do not use for on/off — that's `mc-switch` |
| 1 choice, 7+ options                           | `mc-select`                                | Enable `listsearch` if 10–15+ options      |
| 1 choice, very large list (ports, commodities) | `mc-typeahead`                             | Filters-as-you-type, not full list         |
| Multiple choices, 2–6 options, all visible     | `mc-checkbox-group` + `mc-checkbox`        |                                            |
| Multiple choices, 7+ options                   | `mc-multi-select`                          |                                            |
| Multiple choices, very large list              | `mc-typeahead-multi-select`                |                                            |
| On/off toggle, single setting                  | `mc-switch`                                | Applied immediately, no Submit needed      |
| Group of on/off settings                       | `mc-switch-group`                          |                                            |
| Filter/switch between views (list/grid/map)    | `mc-segmented-control`                     |                                            |
| Compact radio or checkbox alternative          | `mc-button-group` + `mc-button-group-item` | Avoid mixing with standard form fields     |
| Agree to terms (single)                        | `mc-checkbox` (standalone)                 |                                            |

## Selection controls (≤6 options)

### Radio Group

- Use when the user must pick **exactly one** from 2–6 mutually exclusive options.
- **Do NOT use** for on/off binary choices — use `mc-switch`.
- **Do NOT use** for switching between views (list/grid) — use `mc-segmented-control`.
- Move to `mc-select` or `mc-typeahead` when options exceed 6.

### Checkbox Group

- Use when the user can pick **one or more** from a logically related set of ≤6 options.
- Use `mc-switch-group` if the options represent feature on/off toggles.
- Move to `mc-multi-select` or `mc-typeahead-multi-select` when options exceed 6.

### Switch / Switch Group

- Use `mc-switch` (single) when the selection takes effect **immediately** (e.g. dark mode).
- Use `mc-switch-group` for a group of independent on/off settings.
- **Do NOT use** `mc-switch` inside a form where the setting only applies on Submit — use `mc-checkbox` instead.
- **Do NOT use** `mc-radio-group` for on/off controls — that is the switch's job.

### Segmented Control

- Use to filter content or **change the presentation of the same data** (e.g. list vs. card view).
- **Do NOT use** for binary on/off — use `mc-switch`.
- **Do NOT use** for navigating between different types of content on the same page — use `mc-tab-bar`.

### Button Group

- Alternative to radio/checkbox for a compact, aesthetically clean appearance in dense UIs.
- Not a standard form component — use consistently within a form if used at all.
- Prefer `mc-segmented-control` for view-switching.

## Selection inputs (7+ options)

### Select

- Use for **single selection** from a list of 7–several hundred items.
- Activate `listsearch` prop when the list has 10–15+ items.
- Users can browse the full list by scrolling. Best for lists where browsing is useful (e.g. country picker).
- **Do NOT use** for thousands of items where browsing is impractical — use `mc-typeahead`.

### Typeahead

- Use for **single selection** from very large lists (hundreds to thousands of items, e.g. ports, commodity codes).
- Presents only the top 10–15 matches for the typed input; does not show the full list.
- **Requires the user to know what they are looking for** — not suitable when users need to browse.
- Use `mc-select` with `listsearch` when users may benefit from browsing the list.

### Multi Select vs. Typeahead Multi Select

- `mc-multi-select`: medium-length lists where the user may want to see all options.
- `mc-typeahead-multi-select`: very long lists (same principle as typeahead vs. select).

## Common mistakes

| Mistake                                                             | Correct approach                                      |
| ------------------------------------------------------------------- | ----------------------------------------------------- |
| Using `mc-radio-group` for an on/off toggle                         | Use `mc-switch`                                       |
| Using `mc-segmented-control` for page navigation                    | Use `mc-tab-bar` or sidebar nav                       |
| Using `mc-segmented-control` for on/off                             | Use `mc-switch`                                       |
| Using `mc-select` for 2–3 options                                   | Use `mc-radio-group` — keep options visible           |
| Using `mc-typeahead` for <10 items                                  | Use `mc-select` — typeahead is for large datasets     |
| Using `mc-checkbox` for on/off settings                             | Use `mc-switch` — checkbox is for agreement/selection |
| Using `<select>`, `<input type="radio">`, `<input type="checkbox">` | Use the corresponding MDS components                  |
