# Search & Sort UX Guidelines

Distilled from the MDS search, filter and sort UX documentation.

## Search Patterns

### Search field setup

- Use `mc-input` with a magnifying-glass icon or `mc-typeahead` for the search field.
- Use concise label + placeholder that describe **what** can be searched, e.g. `label="Search" placeholder="Container ID, booking number"`.
- Match the field width to the expected query length.
- Keep the search query visible in the input after submission so users can refine it.

### Enhancing search

| Pattern | When to use | MDS component |
| --- | --- | --- |
| Keyword search | Default / minimum expected | `mc-input` with search icon |
| Autocomplete / Typeahead | Large data sets, reduce errors | `mc-typeahead` |
| Faceted search | Search + filters combined | `mc-typeahead` + filter controls in `mc-toolbar` |

- Use `mc-typeahead` when possible — suggestions reduce typos and no-result states.
- For multi-value search ("add multiple values separated by a comma"), use `mc-typeahead-multi-select`.

### Loading and no-results

- If results take > 1–2 seconds, show `mc-loading-indicator`.
- If query returns no results:
  - Show clear feedback using `mc-notification` (appearance `info` or `warning`) explaining why.
  - Keep the query in the input field so users can adjust.
  - Suggest corrections or alternative terms when possible.
- Prevent no-results proactively: use autocomplete/suggestions, communicate accepted formats via `hint` and `placeholder`, apply input masks when a specific format is required.

## Sort Patterns

### Data table sorting

- Provide a default sort based on context (e.g. most recent first, alphabetical).
- Indicate the sorted column and direction clearly — `mc-table` handles this via the `sortable` column config and sort icons.
- Allow ascending/descending toggle on each sortable column.
- Keep cell content to one data type per column (numeric, alphabetical, or chronological) for predictable sorting.
- Handle `sortchange` event on `mc-table` to re-fetch or re-sort data.

### List / card sorting

- For non-table lists (e.g. card grids), provide a single sort `mc-select` above the content: "Sort by: Newest first".
- Provide sorting for long lists — it helps users surface the information they need.
- Provide a sensible default sort option based on context.

### Combining sort + filter

- Place sort and filter controls together in `mc-toolbar` when it makes sense (saves space, logical grouping).
- Filters go in `slot="start"`, sort + actions go in `slot="end"`.

## Applied Filters + Search Integration

When combining search with filters (faceted search):

```html
<mc-toolbar>
  <mc-typeahead label="Search" placeholder="Container ID" slot="start"></mc-typeahead>
  <mc-select label="Status" slot="start">
    <mc-option value="active">Active</mc-option>
    <mc-option value="delayed">Delayed</mc-option>
  </mc-select>
  <mc-button label="Export" slot="end" appearance="neutral" variant="outlined"></mc-button>
</mc-toolbar>
```

## No-Results Page Checklist

- [ ] Clear feedback explaining no results were found
- [ ] The original query remains visible for editing
- [ ] Suggestions for recovery (check spelling, broaden filters, try fewer keywords)
- [ ] Option to clear all applied filters with a single action
