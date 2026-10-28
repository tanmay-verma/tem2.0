# Table Components API Quick Reference

Use this together with [search and sort guidelines](./search-sort-guidelines.md) and [filter UX guidelines](./filter-ux-guidelines.md).

---

## mc-table

- **Tag**: `<mc-table>`
- **Data**: set `columns` and `data` as **JS DOM properties** — never as attribute strings

### Key props

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| `data` | `object[]` | — | Array of row objects. **Property only** — never set as attribute string |
| `columns` | `TableColumn[]` | — | Array of column definitions. **Property only** |
| `datakey` | string | `'id'` | Field name used as unique row identifier for slots, selection, expansion |
| `fit` | `'small' \| 'medium' \| 'large'` | `'medium'` | Controls row density |
| `caption` | string | — | Accessible table caption (or use `<div slot="caption">`) |
| `headersticky` | boolean | false | Pins the header row when scrolling. ⚠️ NOT `stickyheader` |
| `headerstickyviewport` | boolean | false | Attaches sticky header to viewport instead of inner scroll container |
| `headerstickyoffsetselector` | string | — | CSS selector of element whose height offsets the sticky header (e.g. `.toolbar`) |
| `footer` | boolean | false | Enables footer row. Use `{columnId}_footer` slots to add content |
| `footersticky` | boolean | false | Pins the footer row when scrolling |
| `height` | string | `'auto'` | Table height (e.g. `'400px'`). Enables inner scroll when set |
| `stateslotheight` | string | `'auto'` | Height of the `state` slot area (for loading/empty states) |
| `select` | boolean | false | Adds row selection checkboxes. ⚠️ NOT `selectable` |
| `selectsticky` | boolean | false | Pins the select column when scrolling horizontally |
| `selected` | `object[]` | — | Pre-select rows programmatically. Property only |
| `expand` | boolean | false | Enables row expansion. ⚠️ NOT `expandable` |
| `expandopened` | `object[]` | — | Pre-expand rows programmatically. Property only |
| `expandpadding` | `'default' \| 'none'` | `'default'` | Padding inside expanded row area |
| `expandsticky` | boolean | false | Pins the expand column when scrolling horizontally |
| `sortmanual` | boolean | false | Disables built-in sort; you re-sort data on `sortchange` (server-side sort) |
| `sortdefaultcolumnid` | string | — | Column `id` to sort by on initial load |
| `sortdefaultdirection` | `'ascending' \| 'descending'` | `'ascending'` | Initial sort direction |
| `sortdisabled` | boolean | false | Removes all sort arrows and sort behaviour |
| `sortdisableoninitialload` | boolean | false | Shows sort arrows but does not sort on first render |
| `pagination` | `'none' \| 'input' \| 'select'` | `'none'` | `input` = text-input page selector; `select` = dropdown. **All `pagination*` props below are inactive when this is `'none'`** |
| `paginationmode` | `'static' \| 'dynamic'` | `'static'` | `static`: pass full dataset once, table paginates client-side. `dynamic`: pass one page at a time — you **must** handle `paginationpagechange`, fetch from server, and update `table.data` + `paginationcurrentpage` |
| `paginationtotalrecords` | number | — | **`dynamic` mode only** — total record count across all pages so the table can calculate page count. Ignored in `static` mode (table uses `data.length` instead) |
| `paginationcurrentpage` | number | `1` | In `dynamic` mode: update programmatically after each server fetch to keep controls in sync |
| `paginationpagesize` | number | `10` | Rows per page |
| `paginationpagesizeoptions` | `number[]` | `[10,20,50,100]` | Page size options |
| `zebrastripes` | boolean | false | Alternating row background colours |
| `columnresize` | boolean | false | Enables column width resizing by dragging |
| `truncate` | boolean | false | Global truncate — overridden per column by column-level `truncate` |
| `hidecolumns` | `string[]` | `[]` | Column `id`s to hide. Property only |
| `verticallinestyle` | `'none' \| 'solid' \| 'dashed' \| 'dotted'` | `'none'` | Vertical cell borders |
| `horizontallinestyle` | `'none' \| 'solid' \| 'dashed' \| 'dotted'` | `'solid'` | Horizontal cell borders |
| `outerborderstyle` | `'solid' \| 'dashed' \| 'dotted' \| 'none'` | `'solid'` | Outer table border |

### Events

| Event | Detail | When |
| --- | --- | --- |
| `sortchange` | `{ column: string, direction: 'ascending' \| 'descending' }` | Sort column or direction changes |
| `selectchange` | `object[]` — **all currently selected rows** | Any row is selected or deselected |
| `rowselected` | single row object | One row is selected |
| `rowdeselected` | single row object | One row is deselected |
| `expandchange` | `object[]` — all currently expanded rows | Any row is expanded or collapsed |
| `rowexpanded` | single row object | One row is expanded |
| `rowcollapsed` | single row object | One row is collapsed |
| `rowclick` | `{ row, event }` | A row is clicked |
| `paginationpagechange` | `{ currentPage, pageSize, ... }` | Page changes (pagination enabled) |
| `paginationpagesizechange` | new page size | Page size changed |

### Slots

| Slot | Purpose |
| --- | --- |
| `toolbar` | Place `<mc-toolbar>` here for search/filter/action bar |
| `toolbar-bulk-actions` | Content shown instead of toolbar when rows are selected (bulk actions) |
| `state` | Loading indicator or empty state — `stateslotheight` controls the area height |
| `{rowId}_{columnId}` | Custom content in a cell. `rowId` = the row's `datakey` value; `columnId` = column `id` |
| `{columnId}_header` | Custom column header (e.g. adding an inline filter popover) |
| `{rowId}_expanded` | Content shown when a row is expanded (requires `expand` prop) |
| `{columnId}_footer` | Footer cell content for a column (requires `footer` prop) |
| `caption` | Rich HTML table caption |

### Column definition

```ts
interface TableColumn {
  id: string;           // Required — matches key in data objects
  label: string;        // Column header text
  sortable?: boolean;   // Show sort arrow
  width?: string;       // e.g. '120px', '15%'
  align?: 'left' | 'center' | 'right';
  sticky?: boolean;     // Pin column on horizontal scroll
  noWrap?: boolean;     // Prevent text wrap in cells
  truncate?: boolean;   // Truncate cell text with ellipsis + auto tooltip on hover
}
```

---

## Complete Example (Vanilla JS)

```html
<mc-table id="vessels" select expand headersticky height="500px" pagination="input" paginationmode="static">
  <!-- Toolbar (search + actions) -->
  <mc-toolbar slot="toolbar">
    <div slot="start">
      <mc-input hiddenlabel label="Search" placeholder="Vessel name..." clearbutton></mc-input>
      <mc-select hiddenlabel label="Status">
        <mc-option value="">All</mc-option>
        <mc-option value="active">On schedule</mc-option>
        <mc-option value="delayed">Delayed</mc-option>
      </mc-select>
    </div>
    <div slot="end">
      <mc-button icon="tray-arrow-up" label="Export" appearance="neutral" variant="outlined"></mc-button>
    </div>
  </mc-toolbar>

  <!-- Bulk actions (shown when rows selected) -->
  <div slot="toolbar-bulk-actions">
    <mc-button icon="tray-arrow-up" label="Export selected" appearance="inverse" variant="plain"></mc-button>
    <mc-button icon="trash" label="Delete selected" appearance="inverse" variant="plain"></mc-button>
  </div>

  <!-- Loading state -->
  <!-- <mc-loading-indicator slot="state" label="Loading..."></mc-loading-indicator> -->

  <!-- Custom status cell for row id=1 -->
  <mc-tag slot="1_status" appearance="success">On schedule</mc-tag>
  <mc-tag slot="2_status" appearance="error">Delayed</mc-tag>

  <!-- Expanded row content -->
  <div slot="1_expanded">
    <p class="mds-text mds-text--medium-normal">Last port: Shanghai — arrived 4 Mar 2025</p>
  </div>
</mc-table>

<script>
  const table = document.getElementById('vessels');

  table.columns = [
    { id: 'name', label: 'Vessel', sortable: true },
    { id: 'status', label: 'Status', sortable: false },
    { id: 'departure', label: 'Departure', sortable: true, align: 'right' },
    { id: 'capacity', label: 'TEU', sortable: true, align: 'right' },
  ];

  table.data = [
    { id: 1, name: 'Madrid Maersk', status: 'On schedule', departure: '4 Mar 2025', capacity: 19630 },
    { id: 2, name: 'Mary Maersk',   status: 'Delayed',     departure: '5 Mar 2025', capacity: 18270 },
  ];

  // Track selection
  table.addEventListener('selectchange', (e) => {
    console.log('Selected rows:', e.detail.length);
  });

  // Handle sort (client-side here — for server-side add sortmanual attr)
  table.addEventListener('sortchange', (e) => {
    const { column, direction } = e.detail;
    console.log(`Sort by ${column} ${direction}`);
  });
</script>
```

---

## Server-Side Sorting + Pagination

```html
<mc-table
  id="server-table"
  sortmanual
  sortdefaultcolumnid="departure"
  sortdefaultdirection="descending"
  pagination="input"
  paginationmode="dynamic"
  paginationtotalrecords="500"
  paginationcurrentpage="1"
  paginationpagesize="20"
></mc-table>

<script>
  const table = document.getElementById('server-table');

  async function loadData(page = 1, pageSize = 20, sortCol = 'departure', sortDir = 'descending') {
    const rows = await api.getVessels({ page, pageSize, sortCol, sortDir });
    table.data = rows;
    table.paginationcurrentpage = page;
  }

  table.addEventListener('sortchange', (e) => {
    const { column, direction } = e.detail;
    loadData(1, 20, column, direction);
  });

  table.addEventListener('paginationpagechange', (e) => {
    const { currentPage, pageSize } = e.detail;
    loadData(currentPage, pageSize);
  });

  // Initial load
  table.columns = [ /* ... */ ];
  loadData();
</script>
```

---

## mc-toolbar

- **Tag**: `<mc-toolbar>`
- **Slots**: `start` (filters, search), `end` (actions like export/add)
- **Usage**: Slot it **inside** `mc-table` with `slot="toolbar"` — do NOT place it as a sibling above the table

```html
<mc-table>
  <mc-toolbar slot="toolbar">
    <div slot="start">
      <mc-input hiddenlabel label="Search" clearbutton></mc-input>
    </div>
    <div slot="end">
      <mc-button label="Add booking" appearance="primary"></mc-button>
    </div>
  </mc-toolbar>
</mc-table>
```

---

## mds-table (CSS class — static tables only)

For read-only tables with no interaction, apply `class="mds-table"` to a plain `<table>` element:

```html
<table class="mds-table">
  <thead>
    <tr>
      <th>Vessel</th>
      <th>Status</th>
      <th class="mds-table__cell--number">TEU</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Madrid Maersk</td>
      <td>On schedule</td>
      <td class="mds-table__cell--number">19,630</td>
    </tr>
  </tbody>
</table>
```

Use `mds-table__cell--number` on cells with numeric values — right-aligns and uses tabular figures for column comparison.
