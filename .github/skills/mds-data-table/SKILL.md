---
name: mds-data-table
description: 'Build data tables with MDS components. Use for: table, data grid, sorting, filtering, pagination, row selection, expandable rows, column configuration, tabular data display, bulk actions, server-side data, static table styling.'
related-skills: ['mds-layout', 'mds-form', 'mds-content', 'mds-dashboard', 'mds-feedback']
related-components:
  [
    'mc-badge',
    'mc-button',
    'mc-drawer',
    'mc-input',
    'mc-loading-indicator',
    'mc-multi-select',
    'mc-pagination',
    'mc-popover',
    'mc-select',
    'mc-table',
    'mc-tag',
    'mc-toolbar',
    'mc-tooltip',
    'mc-typeahead',
  ]
---

# Build Data Tables with MDS

## When to Use

- Displaying tabular data (bookings, containers, invoices, users, logs)
- Adding sorting, filtering, or pagination to a table
- Row selection with bulk actions (export, delete, archive)
- Expandable rows with detail content
- Server-side data loading with dynamic pagination or sorting
- Simple static table with MDS styling only (no interaction)

---

## Decision Table

| Need | Use | Notes |
| --- | --- | --- |
| Interactive table (sort, filter, select, paginate) | `mc-table` web component | Configure via `columns` and `data` JS properties |
| Simple static table, MDS styling only | `mds-table` CSS class on `<table>` | No interaction; pure HTML + CSS |
| Custom cell content (tags, buttons, icons) | `mc-table` + `{rowId}_{columnId}` slots | Slot name = row's `datakey` value + `_` + column `id` |
| Row expansion / detail view | `mc-table expand` + `{rowId}_expanded` slots | Max 1 level of nesting |
| Row selection + bulk actions | `mc-table select` + `toolbar-bulk-actions` slot | `selectchange` event fires with all selected rows |
| Server-side sort | `mc-table sortmanual` | Handle `sortchange`, re-fetch data, update `table.data` |
| Server-side pagination | `mc-table pagination="input" paginationmode="dynamic"` | Handle `paginationpagechange`, re-fetch, update `table.data` |
| Loading state | `<mc-loading-indicator slot="state">` inside `mc-table` | No `loading` prop — use the `state` slot |
| Empty / no-results state | Custom HTML inside `slot="state"` | Same slot as loading — swap content based on state |
| Toolbar (search + filters + actions) | `<mc-toolbar slot="toolbar">` inside `mc-table` | Slotted inside the table, not placed above it |
| In-column header filter | `{columnId}_header` slot + `mc-popover` + `mc-checkbox-group` | See table-components.md for the pattern |

---

## When NOT to Use

- **Raw `<table>` HTML with custom CSS** for interactive tables — use `mc-table`
- **`mc-table` for simple read-only tables** with no sort/filter/select — use `mds-table` CSS class for less overhead
- **Setting `columns` or `data` as HTML attribute strings** — they are JS array properties; always set via `.columns = [...]` and `.data = [...]`
- **`loading` or `nodata` props** — these do not exist; use `<mc-loading-indicator slot="state">` and empty-state HTML in `slot="state"` instead
- **`selectable`, `expandable`, `stickyheader`** — wrong prop names; correct names are `select`, `expand`, `headersticky`
- **Nesting `mc-toolbar` outside `mc-table` as a sibling** — toolbar should be slotted inside the table with `slot="toolbar"` for correct integration
- **More than 1 level of row expansion** — increases cognitive load; use a side panel or modal for deeper detail

---

## Procedure

### Step 1 — Define columns

`mc-table` requires a `columns` JS array. Always set it as a DOM property, never as an attribute string.

```ts
const columns = [
  { id: 'vessel', label: 'Vessel name', sortable: true },
  { id: 'status', label: 'Status', sortable: false },
  { id: 'departure', label: 'Departure', sortable: true, align: 'right' },
  { id: 'capacity', label: 'Capacity (TEU)', sortable: true, align: 'right' },
  { id: 'actions', label: '', sortable: false, width: '80px' },
];
```

**Column properties:**
| Property | Type | Notes |
| --- | --- | --- |
| `id` | string | **Required** — matches key in data objects |
| `label` | string | Column header text |
| `sortable` | boolean | Enables sort arrow on this column |
| `width` | string | e.g. `'120px'`, `'20%'` |
| `align` | `'left' \| 'center' \| 'right'` | Cell content alignment |
| `sticky` | boolean | Pins column when table scrolls horizontally |
| `noWrap` | boolean | Prevents text wrapping in cells |
| `truncate` | boolean | Truncates cell text with ellipsis; tooltip shows full value on hover |

---

### Step 2 — Provide data and render

```html
<mc-table></mc-table>

<script>
  const table = document.querySelector('mc-table');
  table.columns = columns;
  table.data = [
    { id: 1, vessel: 'Madrid Maersk', status: 'On schedule', departure: '4 Mar 2025', capacity: 19630 },
    { id: 2, vessel: 'Mary Maersk',   status: 'Delayed',     departure: '5 Mar 2025', capacity: 18270 },
  ];
</script>
```

**`datakey` prop** (default: `'id'`): the field used as the unique row identifier for slots, selection, and expansion. If your data uses a different unique field (e.g. `bookingRef`), set `datakey="bookingRef"` on the table.

---

### Step 3 — Custom cell content with `{rowId}_{columnId}` slots

To render components (tags, buttons, icons) inside cells, use named slots. The slot name is `{rowDatakeyValue}_{columnId}`:

```html
<mc-table id="bookings-table"></mc-table>

<script>
  const table = document.getElementById('bookings-table');
  table.columns = [
    { id: 'booking', label: 'Booking' },
    { id: 'status', label: 'Status' },
    { id: 'actions', label: '' },
  ];
  table.data = [
    { id: 1, booking: 'BK-001', status: 'Active' },
    { id: 2, booking: 'BK-002', status: 'Delayed' },
  ];
</script>

<!-- Slot name = {id value}_{column id} -->
<mc-table id="bookings-table">
  <mc-tag slot="1_status" appearance="success">Active</mc-tag>
  <mc-tag slot="2_status" appearance="error">Delayed</mc-tag>

  <mc-button slot="1_actions" icon="eye" hiddenlabel label="View" appearance="neutral" variant="plain" fit="small"></mc-button>
  <mc-button slot="2_actions" icon="eye" hiddenlabel label="View" appearance="neutral" variant="plain" fit="small"></mc-button>
</mc-table>
```

In frameworks, generate slots dynamically in a loop using the row's datakey value:

```jsx
// React
{data.map(row => (
  <McTag key={row.id} slot={`${row.id}_status`} appearance={row.status === 'Active' ? 'success' : 'error'}>
    {row.status}
  </McTag>
))}
```

---

### Step 4 — Toolbar, search, and filters

Slot `mc-toolbar` **inside** `mc-table`:

```html
<mc-table select>
  <!-- Standard toolbar shown when NO rows selected -->
  <mc-toolbar slot="toolbar">
    <div slot="start">
      <mc-input hiddenlabel label="Search" placeholder="Vessel name, booking ID..." clearbutton></mc-input>
      <mc-select label="Status" hiddenlabel>
        <mc-option value="">All statuses</mc-option>
        <mc-option value="active">Active</mc-option>
        <mc-option value="delayed">Delayed</mc-option>
      </mc-select>
    </div>
    <div slot="end">
      <mc-button icon="tray-arrow-up" label="Export" appearance="neutral" variant="outlined"></mc-button>
    </div>
  </mc-toolbar>

  <!-- Bulk actions toolbar shown when rows ARE selected -->
  <div slot="toolbar-bulk-actions">
    <mc-button icon="tray-arrow-up" label="Export selected" appearance="inverse" variant="plain"></mc-button>
    <mc-button icon="trash" label="Delete selected" appearance="inverse" variant="plain"></mc-button>
  </div>
</mc-table>
```

See [filter-ux-guidelines.md](./references/filter-ux-guidelines.md) for the full pattern (exposed vs hidden filters, applied filter tags, live vs batch filtering).

---

### Step 5 — Row selection

```html
<mc-table select></mc-table>
```

```js
// selectchange fires with all currently selected rows as detail
table.addEventListener('selectchange', (e) => {
  const selectedRows = e.detail; // array of selected row objects
  console.log(`${selectedRows.length} rows selected`);
});

// Per-row events
table.addEventListener('rowselected', (e) => { /* single row selected */ });
table.addEventListener('rowdeselected', (e) => { /* single row deselected */ });
```

Pre-select rows programmatically: `table.selected = [rowObject1, rowObject2]`

---

### Step 6 — Row expansion

```html
<mc-table expand id="vessels-table"></mc-table>

<!-- Slot: {rowDatakeyValue}_expanded -->
<mc-table expand id="vessels-table">
  <div slot="1_expanded">
    <p class="mds-text mds-text--medium-normal">Vessel details for Madrid Maersk...</p>
  </div>
  <div slot="2_expanded">
    <p class="mds-text mds-text--medium-normal">Vessel details for Mary Maersk...</p>
  </div>
</mc-table>
```

```js
table.addEventListener('expandchange', (e) => {
  const expandedRows = e.detail; // array of currently expanded row objects
});
```

Pre-expand rows: `table.expandopened = [rowObject1]`

---

### Step 7 — Pagination

**Static (client-side):** pass the full dataset once, the table paginates it internally.

```html
<mc-table pagination="input" paginationmode="static"></mc-table>
<!-- or pagination="select" for a dropdown page selector -->
```

**Dynamic (server-side):** fetch one page at a time on each page change.

```html
<mc-table
  pagination="input"
  paginationmode="dynamic"
  paginationtotalrecords="500"
  paginationcurrentpage="1"
  paginationpagesize="20"
></mc-table>
```

```js
table.addEventListener('paginationpagechange', async (e) => {
  const { currentPage, pageSize } = e.detail;
  const rows = await fetchPage(currentPage, pageSize);
  table.data = rows;
  table.paginationcurrentpage = currentPage;
});
```

---

### Step 8 — Server-side sorting

```html
<mc-table sortmanual sortdefaultdirection="ascending" sortdefaultcolumnid="departure"></mc-table>
```

```js
table.addEventListener('sortchange', async (e) => {
  const { column, direction } = e.detail; // direction: 'ascending' | 'descending'
  const rows = await fetchSorted(column, direction);
  table.data = rows;
});
```

---

### Step 9 — Loading and empty states

```html
<mc-table stateslotheight="300px">
  <!-- Loading state -->
  <mc-loading-indicator slot="state" label="Loading bookings..."></mc-loading-indicator>
</mc-table>
```

```html
<mc-table stateslotheight="200px">
  <!-- Empty / no-results state -->
  <div slot="state" style="text-align: center; padding: 32px;">
    <mc-icon icon="magnifying-glass" size="large"></mc-icon>
    <p class="mds-text mds-text--medium-normal">No bookings found.</p>
    <mc-button label="Clear filters" appearance="neutral" variant="outlined"></mc-button>
  </div>
</mc-table>
```

---

## Hard Constraints

| ✅ Do | ❌ Never |
| --- | --- |
| Set `columns` and `data` as JS DOM properties: `table.columns = [...]` | Set as HTML attribute strings: `columns="[{...}]"` |
| Use `select` (boolean) for row selection | Use `selectable` — it does not exist |
| Use `expand` (boolean) for row expansion | Use `expandable` — it does not exist |
| Use `headersticky` for sticky header | Use `stickyheader` — it does not exist |
| Use `<mc-loading-indicator slot="state">` for loading | Use a `loading` prop — it does not exist |
| Slot `mc-toolbar` inside `mc-table` with `slot="toolbar"` | Place `mc-toolbar` as a sibling above `mc-table` |
| Use `selectchange` to track the full selection state | Rely only on `rowselected` — it fires per row, not on bulk changes |
| Use `sortmanual` for server-side sorting | Mutate `table.data` without `sortmanual` — the built-in sort will fight your changes |
| Use `mds-table` CSS class for simple static tables | Use `mc-table` for static data — it's unnecessary overhead |
| Use `{rowId}_{columnId}` named slots for custom cell content | Use `customstyles` to inject HTML markup into cells |

---

## Common Mistakes

| Mistake | Fix |
| --- | --- |
| `<mc-table selectable>` | `<mc-table select>` |
| `<mc-table expandable>` | `<mc-table expand>` |
| `<mc-table stickyheader>` | `<mc-table headersticky>` |
| `table.setAttribute('data', JSON.stringify(rows))` | `table.data = rows` (DOM property, not HTML attribute) |
| `table.setAttribute('columns', JSON.stringify(cols))` | `table.columns = cols` |
| No `loading` prop available | Use `<mc-loading-indicator slot="state">` inside `mc-table` |
| Standalone `<mc-toolbar>` placed above `<mc-table>` | Slot it inside: `<mc-table><mc-toolbar slot="toolbar">...</mc-toolbar></mc-table>` |
| `sortchange` not handled for server-side data | Add `sortmanual` attribute + `sortchange` event handler to re-fetch sorted data |
| Using `rowselected` to get all selected rows | Use `selectchange` — its `e.detail` is the full current selection array |
| Empty state shown with `v-if` / `*ngIf` on a sibling div | Put empty-state HTML inside `<div slot="state">` inside `mc-table` |
| Custom `<table>` element with manual sort/pagination logic | Use `mc-table` for all interactive table features |
| Missing `datakey` when rows don't have an `id` field | Set `datakey="myUniqueField"` matching your data's unique identifier |

---

## Reference Files

- [Table components API](./references/table-components.md) — mc-table props, events, slots, column definition, mc-toolbar, mc-pagination
- [Filter UX guidelines](./references/filter-ux-guidelines.md) — exposed vs hidden filters, live vs batch filtering, applied filters display, in-column header filters
- [Search & sort guidelines](./references/search-sort-guidelines.md) — keyword/typeahead/faceted search, sorting patterns, no-results handling
