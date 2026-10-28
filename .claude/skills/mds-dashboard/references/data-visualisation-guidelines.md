# Data Visualisation Guidelines

Distilled from the MDS data visualisation UX documentation. Apply when adding charts to dashboards.

## MDS has no chart component

**MDS does not provide a chart web component.** Use [Apache ECharts](https://echarts.apache.org/) and apply MDS design tokens to style charts consistently with the rest of the product.

Never invent `mc-chart`, `mc-bar-chart`, `mc-graph`, `mc-line-chart`, `mc-pie-chart`, or any other chart web component — they do not exist.

## MDS chart colour palettes (ECharts config)

### Categorical — distinguishing unrelated data series

```js
const categoricalColors = [
  '#42B0D5', // Blue-300-Maersk
  '#00243D', // Blue-900-Dark
  '#CFCFCF', // Grey-400
  '#FA6A55', // Red-300-Accent
  '#4DB5AB', // Teal-300-Accent
];
```

### Sequential — showing magnitude / progression in one hue

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
```

### Sentiment — positive / neutral / negative states

```js
const sentimentColors = {
  positive: '#40AB35', // Success
  neutral: '#FFD029', // Warning
  negative: '#B80012', // Danger
};
```

## Chart styling rules

### Lines and points (line charts)

- Line width: **2px solid**
- Data point markers: **4px solid circle**

### Typography (use MDS font stack)

- Chart title: Maersk Headline, 20px, regular weight, `#141414`
- Subtitle: Maersk Text, font-size matches body, regular, `#878787`
- Axis labels and titles: Maersk Text, 14px, **bold for axis titles**
- Numeric labels on bars/lines: Maersk Text, 12px

### Axes and grid lines

- Use grid lines — they help users compare values without imagining imaginary reference points.
- Format axis labels to be readable at the chart's rendered size.
- Both axes must have clear titles when the meaning is not self-evident.

## Chart best practices

### Reduce clutter

- Remove decorative backgrounds, drop shadows, heavy borders on chart containers.
- Remove redundant labels (if a legend already labels a series, do not also label every data point).
- Avoid 3D effects — they distort visual comparison.

### Add clarity

- Always include a **title** — it frames the chart's story ("Monthly shipments" not "Chart 1").
- Add a **subtitle** when the data source or time period needs explanation.
- Sort data meaningfully: alphabetically (for lookup), ascending/descending (for comparison/story).
- Use annotations and reference lines to highlight targets, thresholds, or anomalies.

### Highlight what's important

- Use conditional colour to flag values above or below a threshold.
- Use reference lines to show goals or baselines.
- Avoid using too many colours — differentiate only what needs differentiating.

## Choosing chart type

| Question                           | Chart type                                   |
| ---------------------------------- | -------------------------------------------- |
| Compare values across categories   | Bar chart / Column chart                     |
| Show change over time              | Line chart                                   |
| Show part-to-whole                 | Pie / Donut chart (max 5 slices)             |
| Show distribution                  | Scatter / Bubble chart                       |
| Show progress to a target          | Bullet chart / Progress gauge                |
| Show a single large KPI number     | Big Number chart (plain `mds-headline` text) |
| Compare across multiple dimensions | Stacked bar / Stacked area                   |

See `guidelines-data-visualisation-chart-types.md` in the UX docs for detailed per-type guidance.

## KPI numbers — use MDS typography, not charts

For a single summary number (e.g. "Total Shipments: 1,248"), use `mc-card` with `mds-headline` typography — no chart needed:

```html
<mc-card heading="Total Shipments" variant="bordered">
  <span class="mds-headline mds-headline--large">1,248</span>
  <mc-tag appearance="success-weak">+12% vs last month</mc-tag>
</mc-card>
```

## Common mistakes

| Mistake                                                    | Fix                                                                                              |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Inventing `<mc-chart>` or `<mc-graph>`                     | Use ECharts — no MDS chart component exists                                                      |
| Using `var(--mds_brand_...)` inside ECharts `color` arrays | CSS vars are not resolved by ECharts; use hardcoded hex from the Maersk brand palette            |
| Using invented hex colours in chart configs                | Only official Maersk brand palette hex is permitted — see `brand-colors.md`                     |
| 3D bar/pie charts                                          | Use flat 2D charts — 3D distorts perception                                                      |
| No chart title                                             | Always include a title that describes the data story                                             |
| Pie chart with 8+ slices                                   | Limit to 5 slices max; group the rest as "Other"                                                 |
| Using charts for single KPI numbers                        | Use `mc-card` + `mds-headline` text instead                                                     |
| Custom spinner CSS inside chart loading state              | Use `mc-loading-indicator`                                                                       |
