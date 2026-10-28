---
name: mds-dashboard
description: 'Design and build dashboards with MDS components. Use for: data visualization, charts, graphs, ECharts, tables, KPI cards, metrics, tags, status, filter toolbar, segmented control, tab navigation, loading state, empty state, error state, responsive dashboards, analytics, operations, logistics.'
related-skills:
  ['mds-layout', 'mds-design-tokens', 'mds-data-table', 'mds-feedback', 'mds-form', 'mds-navigation', 'mds-theming']
related-components:
  [
    'mc-card',
    'mc-tag',
    'mc-toolbar',
    'mc-tab-bar',
    'mc-tab',
    'mc-segmented-control',
    'mc-loading-indicator',
    'mc-notification',
    'mc-toast',
    'mc-progress-indicator',
    'mc-badge',
    'mc-accordion',
    'mc-popover',
  ]
---

# Build Dashboards with MDS Components

## When to Use

- Creating an analytics, operations, logistics, or monitoring dashboard
- Displaying KPI cards, metric summaries, or status overviews
- Composing data charts (bar, line, pie) using ECharts with Maersk brand colors
- Building filter bars with date ranges, selects, and search
- Displaying status-driven data with semantic color (success, warning, error)
- Adding multi-section tab navigation, view toggles, or collapsible sections
- Handling loading, empty, and error states for data-fetching UI

## Decision Table

| Dashboard element                 | Component(s)                                            | Notes                                                                                          |
| --------------------------------- | ------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Page shell (top bar + sidebar)    | `mc-top-bar`, `mc-side-bar`, `mds-layout`               | See [mds-navigation](../mds-navigation/SKILL.md) and [mds-layout](../mds-layout/SKILL.md)      |
| KPI / metric card                 | `mc-card`                                               | Use `heading` prop for label; default slot for value; `variant="bordered"`                     |
| KPI trend / delta                 | `mc-tag` inside `mc-card`                               | `appearance="success"` / `"warning"` / `"error"` — see kpi-card-patterns.md                    |
| KPI with progress bar             | `mc-card` + `mc-progress-indicator`                     | Use `fit="small"` on indicator; value 0–100                                                    |
| Bar / line / pie / scatter chart  | ECharts (external) + brand palette hex                  | MDS has no chart component — use ECharts; CSS vars are invalid in `color` arrays               |
| Single large number (KPI)         | `mds-headline mds-headline--large` inside `mc-card`     | Do not use a chart for a single metric number                                                  |
| Status pill / label               | `mc-tag`                                                | Semantic appearances: `success`, `warning`, `error`, `info`, `neutral-default`, `neutral-weak` |
| Notification count on icon        | `mc-badge`                                              | Attach to trigger element                                                                      |
| Progress / completion indicator   | `mc-progress-indicator`                                 | `value` = 0–100; `fit="small"` for compact rows                                                |
| Loading spinner                   | `mc-loading-indicator`                                  | Never use a custom CSS spinner                                                                 |
| Filter bar (date, select, search) | `mc-toolbar` + `mc-input`, `mc-select`, `mc-date-range` | `slot="start"` for filters; `slot="end"` for actions                                           |
| In-page section tabs              | `mc-tab-bar` + `mc-tab`                                 | Only for in-page sections — not top-level navigation                                           |
| View toggle (list / grid / map)   | `mc-segmented-control` + `mc-segmented-control-item`    | Listen to `selectionchange` event                                                              |
| Collapsible section               | `mc-accordion` + `mc-accordion-item`                    | Use for advanced filters or grouped detail sections                                            |
| Contextual detail / actions       | `mc-popover`                                            | Row action menus, column info; requires `trigger` slot                                         |
| Persistent alert / banner         | `mc-notification`                                       | Place before main grid; appearances: `info`, `warning`, `error`, `success`                     |
| Transient / toast feedback        | `mc-toast`                                              | For actions (export, save, refresh) — not for persistent data state                            |
| Data table                        | `mc-table` + `mc-toolbar`                               | See [mds-data-table](../mds-data-table/SKILL.md) for full table API                            |

## When NOT to Use

- **`mc-tab-bar` for top-level page navigation** — use `mc-side-bar` tree nav or router links or `mc-top-bar`; `mc-tab-bar` is for in-page section switching only
- **Custom `<div>` filter rows** — use `mc-toolbar`; custom rows have no consistent spacing, alignment, or overflow handling
- **Custom CSS spinners or skeleton loaders** — use `mc-loading-indicator`; it handles accessibility and theming
- **Custom-styled `<span>` or `<div>` for status badges** — use `mc-tag` with semantic `appearance`; custom badges don't adapt to theme changes
- **Charts for single KPI numbers** — use `mc-card` + `mds-headline` text; a chart adds complexity with no information gain
- **Inline `style` attributes for KPI values or headings** — use `mds-headline--*` classes
- **`mc-notification` for transient feedback** — use `mc-toast`; notifications are for persistent or system-level status

## Procedure

### 1. Set Up the Dashboard Shell

Every dashboard starts with a page shell. Use `mds-layout` with `mc-top-bar` and, optionally, `mc-side-bar`. Stack sections vertically with `mds-flex mds-flex-column mds-gap-800`:

```html
<body class="mds">
  <a href="#main-content" class="mds-skip-to">Skip to content</a>
  <a href="#footer" class="mds-skip-to">Skip to footer</a>
  <div class="mds-layout">
    <mc-top-bar product="Operations Dashboard" productshort="OD"></mc-top-bar>

    <mc-side-bar>
      <nav class="mds-tree-nav" role="navigation" aria-label="Side navigation">
        <ul>
          <li><a href="/overview" aria-current="page">Overview</a></li>
          <li><a href="/shipments">Shipments</a></li>
          <li><a href="/analytics">Analytics</a></li>
        </ul>
      </nav>
    </mc-side-bar>

    <main id="main-content" class="mds-page mds-container">
      <div class="mds-flex mds-flex-column mds-gap-800">
        <h1 class="mds-headline mds-headline--medium">Operations Overview</h1>

        <!-- System alert (conditional) -->
        <mc-notification appearance="warning" heading="Data is 2 hours old" body="Last refreshed at 10:30 AM.">
          <mc-button slot="actions" label="Refresh" fit="small"></mc-button>
        </mc-notification>

        <!-- KPI row, filter bar, charts, tables... -->
      </div>
    </main>

    <footer id="footer" class="mds-footer"></footer>
  </div>
</body>
```

For sidebar-less pages, add `mds-layout-no-side-bar` to `.mds-layout`. For full-width content (e.g. a wide table), replace `mds-page mds-container` with `mds-page-full-width`.

### 2. Build the KPI Row

Use `mc-card` inside an `mds-grid` for KPI metrics. Always define all 3 breakpoints (xs, sm, md) per cell.

For a 4-column KPI row:

```html
<div class="mds-grid">
  <!-- KPI 1: Total Shipments -->
  <div
    class="mds-grid-md-col-1 mds-grid-md-col-span-3 mds-grid-md-row-1
               mds-grid-sm-col-1 mds-grid-sm-col-span-3 mds-grid-sm-row-1
               mds-grid-xs-col-1 mds-grid-xs-col-span-2 mds-grid-xs-row-1"
  >
    <mc-card heading="Total Shipments" variant="bordered">
      <span class="mds-headline mds-headline--large">1,248</span>
      <mc-tag appearance="success">+12% vs last month</mc-tag>
    </mc-card>
  </div>

  <!-- KPI 2: On Time Delivery -->
  <div
    class="mds-grid-md-col-4 mds-grid-md-col-span-3 mds-grid-md-row-1
               mds-grid-sm-col-4 mds-grid-sm-col-span-3 mds-grid-sm-row-1
               mds-grid-xs-col-1 mds-grid-xs-col-span-2 mds-grid-xs-row-2"
  >
    <mc-card heading="On Time Delivery" variant="bordered">
      <span class="mds-headline mds-headline--large">94.3%</span>
      <mc-progress-indicator value="94" fit="small"></mc-progress-indicator>
    </mc-card>
  </div>

  <!-- KPI 3: Exceptions -->
  <div
    class="mds-grid-md-col-7 mds-grid-md-col-span-3 mds-grid-md-row-1
               mds-grid-sm-col-1 mds-grid-sm-col-span-3 mds-grid-sm-row-2
               mds-grid-xs-col-1 mds-grid-xs-col-span-2 mds-grid-xs-row-3"
  >
    <mc-card heading="Exceptions" variant="bordered">
      <span class="mds-headline mds-headline--large">17</span>
      <mc-tag appearance="error">Needs review</mc-tag>
    </mc-card>
  </div>

  <!-- KPI 4: CO₂ Emissions -->
  <div
    class="mds-grid-md-col-10 mds-grid-md-col-span-3 mds-grid-md-row-1
               mds-grid-sm-col-4 mds-grid-sm-col-span-3 mds-grid-sm-row-2
               mds-grid-xs-col-1 mds-grid-xs-col-span-2 mds-grid-xs-row-4"
  >
    <mc-card heading="CO₂ Emissions" variant="bordered">
      <span class="mds-headline mds-headline--large">2.4t</span>
      <mc-tag appearance="neutral-weak">vs 2.6t last month</mc-tag>
    </mc-card>
  </div>
</div>
```

See [`kpi-card-patterns.md`](./references/kpi-card-patterns.md) for more KPI variants (comparison, sparkline container, status count, loading skeleton).

### 3. Add a Filter Toolbar

Use `mc-toolbar` to contain filters and actions. Place filters in `slot="start"` and actions in `slot="end"`:

```html
<mc-toolbar>
  <mc-date-range slot="start" label="Date range" startlabel="From" endlabel="To"></mc-date-range>
  <mc-select slot="start" label="Status" placeholder="All statuses">
    <mc-option value="">All</mc-option>
    <mc-option value="in-transit">In Transit</mc-option>
    <mc-option value="delayed">Delayed</mc-option>
    <mc-option value="completed">Completed</mc-option>
  </mc-select>
  <mc-input slot="start" label="Search" type="search" placeholder="Search shipments..."></mc-input>
  <mc-button slot="end" label="Export" icon="tray-arrow-down" appearance="neutral" variant="outlined"></mc-button>
</mc-toolbar>
```

For advanced filter sets, put them inside an `mc-accordion` that users can expand:

```html
<mc-accordion>
  <mc-accordion-item label="Advanced filters">
    <div class="mds-flex mds-flex-row mds-gap-400">
      <mc-select label="Origin port" placeholder="All ports">...</mc-select>
      <mc-select label="Vessel" placeholder="All vessels">...</mc-select>
      <mc-select label="Carrier" placeholder="All carriers">...</mc-select>
    </div>
  </mc-accordion-item>
</mc-accordion>
```

### 4. Add Charts with ECharts

MDS has **no chart web component**. Use [Apache ECharts](https://echarts.apache.org/). CSS custom properties (CSS vars) cannot be used inside ECharts `option` objects — use hardcoded hex values from the official Maersk brand palette only.

**Install ECharts:**

```bash
npm install echarts
```

**Bar chart example — categorical palette:**

```html
<mc-card heading="Shipments by Port" variant="bordered">
  <div id="port-chart" style="height: 320px;"></div>
</mc-card>

<script type="module">
  import * as echarts from 'echarts';

  // Maersk categorical palette — from brand-colors.md
  const categoricalColors = [
    '#42B0D5', // Blue-300-Maersk
    '#00243D', // Blue-900-Dark
    '#CFCFCF', // Grey-400
    '#FA6A55', // Red-300-Accent
    '#4DB5AB', // Teal-300-Accent
  ];

  const chart = echarts.init(document.getElementById('port-chart'));

  chart.setOption({
    color: categoricalColors,
    title: {
      text: 'Shipments by Port',
      textStyle: { color: '#141414', fontSize: 16, fontWeight: 'normal' },
    },
    tooltip: { trigger: 'axis' },
    xAxis: {
      type: 'category',
      data: ['Rotterdam', 'Hamburg', 'Shanghai', 'Singapore', 'Felixstowe'],
      axisLabel: { color: '#141414' },
      axisLine: { lineStyle: { color: '#CFCFCF' } },
    },
    yAxis: {
      type: 'value',
      axisLabel: { color: '#141414' },
      splitLine: { lineStyle: { color: '#CFCFCF' } },
    },
    series: [{ type: 'bar', data: [820, 700, 1100, 640, 420] }],
  });

  // Resize chart when window resizes
  window.addEventListener('resize', () => chart.resize());
</script>
```

**Line chart example — sequential palette for a single metric over time:**

```js
const sequentialColors = [
  '#00243D',
  '#003D6D',
  '#005487',
  '#0073AB',
  '#058EC6',
  '#0CA0CE',
  '#42B0D5',
  '#77C6E0',
  '#91D8F2',
  '#B5E0F5',
];

chart.setOption({
  color: sequentialColors,
  series: [
    {
      type: 'line',
      lineStyle: { width: 2 },
      symbol: 'circle',
      symbolSize: 4,
      data: [120, 145, 132, 178, 160, 195],
    },
  ],
});
```

**Sentiment colors for positive/neutral/negative:**

```js
// Use directly in series itemStyle.color for threshold-driven coloring
const sentimentColors = {
  positive: '#40AB35',
  neutral: '#FFD029',
  negative: '#B80012',
};

series: [
  {
    type: 'bar',
    data: data.map((value) => ({
      value,
      itemStyle: {
        color:
          value >= target
            ? sentimentColors.positive
            : value >= target * 0.8
              ? sentimentColors.neutral
              : sentimentColors.negative,
      },
    })),
  },
];
```

See [`data-visualisation-guidelines.md`](./references/data-visualisation-guidelines.md) for chart type selection, full palettes, typography, and anti-patterns.

### 5. View Toggle and Section Tabs

**View toggle (list / grid / map):**

```html
<mc-segmented-control>
  <mc-segmented-control-item
    label="List"
    value="list"
    icon="bars-horizontal-bullets"
    selected
  ></mc-segmented-control-item>
  <mc-segmented-control-item label="Grid" value="grid" icon="grid"></mc-segmented-control-item>
  <mc-segmented-control-item label="Map" value="map" icon="map"></mc-segmented-control-item>
</mc-segmented-control>

<script>
  document.querySelector('mc-segmented-control').addEventListener('selectionchange', (e) => {
    const view = e.detail.value; // 'list' | 'grid' | 'map'
    switchView(view);
  });
</script>
```

**In-page section tabs:**

```html
<mc-tab-bar>
  <mc-tab slot="tab" label="Overview" icon="chart-bars-vertical"></mc-tab>
  <div slot="panel">
    <!-- KPI cards, summary charts -->
  </div>

  <mc-tab slot="tab" label="Shipments" icon="container"></mc-tab>
  <div slot="panel">
    <!-- Table with filters -->
  </div>

  <mc-tab slot="tab" label="Analytics" icon="chart-line-up"></mc-tab>
  <div slot="panel">
    <!-- Chart content -->
  </div>
</mc-tab-bar>
```

### 6. Handle Loading, Empty, and Error States

**Always** implement all three states — never render a blank section.

**Loading:**

```html
<mc-card heading="Shipments by Port" variant="bordered">
  <div class="mds-flex mds-flex-content-center" style="height: 320px;">
    <mc-loading-indicator fit="large" aria-label="Loading chart data"></mc-loading-indicator>
  </div>
</mc-card>
```

**Empty:**

```html
<mc-card heading="No results found" body="Try adjusting your filters or date range." variant="bordered"> </mc-card>
```

**Error:**

```html
<mc-notification appearance="error" heading="Failed to load shipment data" body="Please try again or contact support.">
  <mc-button slot="actions" label="Retry" fit="small"></mc-button>
</mc-notification>
```

### 7. Add Feedback — Notifications and Toasts

Use `mc-notification` for **persistent** dashboard alerts (data staleness, system status):

```html
<!-- Placed at the top of main content, before the grid -->
<mc-notification appearance="warning" heading="Delays detected" body="3 shipments require your attention.">
  <mc-button slot="actions" label="View shipments" fit="small"></mc-button>
</mc-notification>
```

Use `mc-toast` for **transient** action feedback (export complete, filter applied):

```html
<mc-toast appearance="success" heading="Export complete" body="Your data has been exported to CSV." position="top">
</mc-toast>
```

## Hard Constraints

### ❌ Inventing chart web components vs ✅ ECharts

```html
<!-- ❌ — these components do not exist -->
<mc-chart type="bar" data="..."></mc-chart>
<mc-bar-chart></mc-bar-chart>
<mc-line-chart></mc-line-chart>
<mc-pie-chart></mc-pie-chart>

<!-- ✅ -->
<div id="my-chart" style="height: 320px;"></div>
<script type="module">
  import * as echarts from 'echarts';
  const chart = echarts.init(document.getElementById('my-chart'));
  chart.setOption({ ... });
</script>
```

### ❌ CSS vars in ECharts color arrays vs ✅ Brand palette hex

```js
// ❌ — CSS vars are not resolved inside ECharts option objects
chart.setOption({
  color: ['var(--mds_brand_appearance_secondary_default_background-color)'],
});

// ✅ — use hardcoded hex from the official Maersk brand palette only
chart.setOption({
  color: ['#42B0D5', '#00243D', '#CFCFCF', '#FA6A55', '#4DB5AB'],
});
```

### ❌ Invented hex colors in charts vs ✅ Brand palette only

```js
// ❌ — invented colors, not from the Maersk brand palette
chart.setOption({ color: ['#FF6B35', '#4ECDC4', '#45B7D1'] });

// ✅ — only values from brand-colors.md are permitted
chart.setOption({ color: ['#42B0D5', '#00243D', '#CFCFCF'] });
```

### ❌ Hardcoded hex in UI CSS vs ✅ MDS tokens

```css
/* ❌ */
.kpi-value {
  color: #00243d;
  font-size: 32px;
  font-weight: 700;
}

/* ✅ */
/* Use mc-card + mds-headline classes — no custom CSS needed */
```

```html
<!-- ✅ -->
<mc-card heading="Total Shipments" variant="bordered">
  <span class="mds-headline mds-headline--large">1,248</span>
</mc-card>
```

### ❌ Custom status badges vs ✅ mc-tag

```html
<!-- ❌ -->
<span class="status-badge status-delayed" style="background: orange; color: white;">Delayed</span>

<!-- ✅ -->
<mc-tag appearance="warning">Delayed</mc-tag>
```

### ❌ Custom filter row vs ✅ mc-toolbar

```html
<!-- ❌ -->
<div style="display: flex; gap: 16px; align-items: flex-end; margin-bottom: 24px;">
  <input type="text" placeholder="Search..." />
  <select>
    ...
  </select>
</div>

<!-- ✅ -->
<mc-toolbar>
  <mc-input slot="start" label="Search" type="search"></mc-input>
  <mc-select slot="start" label="Status"></mc-select>
</mc-toolbar>
```

### ❌ Custom spinner vs ✅ mc-loading-indicator

```html
<!-- ❌ -->
<div class="spinner"></div>

<!-- ✅ -->
<mc-loading-indicator fit="large" aria-label="Loading shipments"></mc-loading-indicator>
```

## Common Mistakes

- **Custom CSS grid** instead of `mds-grid` classes — the grid system won't be responsive
- **Defining only `md` breakpoint** on grid cells — always define all 3: `xs`, `sm`, `md`
- **Forgetting `mds-container`** alongside `mds-page` — grid breakpoints won't trigger
- **Binding `mc-table` `data`/`columns` as HTML attributes** (strings) instead of DOM properties — use `table.data = [...]` in JS
- **`mc-tab-bar` for top-level navigation** — use `mc-side-bar` tree nav or router links
- **Forgetting accessibility skip links** on pages with `mc-side-bar`
- **No loading, empty, or error states** — results in a blank or broken UI during data fetching
- **Inline `style` on KPI values** (`font-size: 32px; color: #00243D`) — use `mds-headline--large` inside `mc-card`
- **`variant` instead of `appearance`** on `mc-button` or `mc-tag` — `variant` controls shape/style, `appearance` controls color
- **Charts for single KPI numbers** — a single metric needs `mc-card` + `mds-headline`, not a chart
- **CSS vars in ECharts `color` arrays** — ECharts cannot resolve CSS custom properties; use brand palette hex
- **Invented hex values in chart configs** (`#FF6B35`) — only official Maersk brand palette hex is permitted
- **`mc-notification` for transient action feedback** — use `mc-toast`; `mc-notification` is for persistent system-level status
- **Pie charts with more than 5 slices** — group remaining items as "Other"
- **3D chart effects** — they distort perception; use flat 2D charts

## Reference Files

- [KPI card patterns](./references/kpi-card-patterns.md) — metric variants, trend badges, progress cards, status count, loading states
- [Data visualisation guidelines](./references/data-visualisation-guidelines.md) — ECharts colour palettes, chart type selection, chart styling rules, anti-patterns
- [Brand colour palette](../mds-design-tokens/references/brand-colors.md) — full list of permitted Maersk hex values for chart configs (categorical, sequential, sentiment, gradual)
- [Layout guide](../mds-layout/SKILL.md) — `mds-grid`, `mds-flex`, gap tokens, breakpoints
- [Data table guide](../mds-data-table/SKILL.md) — `mc-table` column config, sorting, pagination, custom cell renderers
- [Tokens & styling guide](../mds-design-tokens/SKILL.md) — design tokens, color CSS classes, typography, spacing
- [Feedback & notifications guide](../mds-feedback/SKILL.md) — `mc-notification`, `mc-toast`, `mc-banner`
- [Form components guide](../mds-form/SKILL.md) — `mc-input`, `mc-select`, `mc-date-range`, `mc-toolbar`
