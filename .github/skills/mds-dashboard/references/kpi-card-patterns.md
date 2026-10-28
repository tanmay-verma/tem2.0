# KPI Card Patterns

Reusable patterns for KPI and metric cards in MDS dashboards. All patterns use `mc-card` + MDS typography. Never use inline `style` or hardcoded colors.

---

## 1. Basic Metric with Trend Badge

A single large number with a delta badge indicating change vs. a reference period.

```html
<mc-card heading="Total Shipments" subheading="vs. last month" variant="bordered">
  <span class="mds-headline mds-headline--large">1,248</span>
  <mc-tag appearance="success">+12%</mc-tag>
</mc-card>
```

**Appearance rules for trend badges:**

| Trend direction          | `appearance`      |
| ------------------------ | ----------------- |
| Positive / above target  | `success`         |
| Slightly off / warning   | `warning`         |
| Negative / below target  | `error`           |
| Neutral / no change      | `neutral-default` |

---

## 2. Metric with Progress Indicator

Useful when the KPI has a known target (e.g. 94.3% on a 100% scale).

```html
<mc-card heading="On Time Delivery" subheading="Target: 95%" variant="bordered">
  <span class="mds-headline mds-headline--large">94.3%</span>
  <mc-progress-indicator value="94" fit="small"></mc-progress-indicator>
</mc-card>
```

Use `fit="small"` on `mc-progress-indicator` to keep it compact inside a card.

---

## 3. Comparison Metric (Current vs. Previous)

Shows two values side by side — current period and reference period.

```html
<mc-card heading="Revenue" variant="bordered">
  <div class="mds-flex mds-flex-items-baseline mds-gap-400">
    <span class="mds-headline mds-headline--large">$4.2M</span>
    <span class="mds-text mds-text--small-normal mds-neutral__text-color">vs $3.8M last quarter</span>
  </div>
  <mc-tag appearance="success">+10.5%</mc-tag>
</mc-card>
```

---

## 4. Status Count Card

Shows counts broken down by status — useful for exception/alert summaries.

```html
<mc-card heading="Shipment Status" variant="bordered">
  <div class="mds-flex mds-flex-column mds-gap-200">
    <div class="mds-flex mds-flex-items-center mds-gap-200">
      <mc-tag appearance="success">On time</mc-tag>
      <span class="mds-headline mds-headline--small">1,182</span>
    </div>
    <div class="mds-flex mds-flex-items-center mds-gap-200">
      <mc-tag appearance="warning">At risk</mc-tag>
      <span class="mds-headline mds-headline--small">49</span>
    </div>
    <div class="mds-flex mds-flex-items-center mds-gap-200">
      <mc-tag appearance="error">Delayed</mc-tag>
      <span class="mds-headline mds-headline--small">17</span>
    </div>
  </div>
</mc-card>
```

---

## 5. Icon + Metric Card

Adds a leading icon to give the metric type a visual anchor.

```html
<mc-card heading="CO₂ Emissions" variant="bordered">
  <div class="mds-flex mds-flex-items-center mds-gap-400">
    <mc-icon name="leaf" size="32"></mc-icon>
    <span class="mds-headline mds-headline--large">2.4t</span>
  </div>
  <mc-tag appearance="neutral-weak">vs 2.6t last month</mc-tag>
</mc-card>
```

---

## 6. Loading State for KPI Card

Show while data is fetching. Replace with real content on load.

```html
<mc-card heading="Total Shipments" variant="bordered">
  <mc-loading-indicator fit="small" aria-label="Loading metric"></mc-loading-indicator>
</mc-card>
```

In frameworks, conditionally render based on loading state:

```tsx
// React
<McCard heading="Total Shipments" variant="bordered">
  {isLoading
    ? <McLoadingIndicator fit="small" aria-label="Loading metric" />
    : <span className="mds-headline mds-headline--large">{value}</span>
  }
</McCard>
```

---

## 7. Error State for KPI Card

Show when the data request fails.

```html
<mc-card heading="Total Shipments" variant="bordered">
  <mc-tag appearance="error">Failed to load</mc-tag>
  <mc-button label="Retry" fit="small" appearance="neutral" variant="plain"></mc-button>
</mc-card>
```

---

## 4-Column KPI Row — Grid Layout

Full 3-breakpoint grid for a standard 4-KPI row. Always define all breakpoints (xs, sm, md):

```html
<div class="mds-grid">
  <div class="mds-grid-md-col-1  mds-grid-md-col-span-3  mds-grid-md-row-1
               mds-grid-sm-col-1  mds-grid-sm-col-span-3  mds-grid-sm-row-1
               mds-grid-xs-col-1  mds-grid-xs-col-span-2  mds-grid-xs-row-1">
    <!-- KPI 1 -->
  </div>
  <div class="mds-grid-md-col-4  mds-grid-md-col-span-3  mds-grid-md-row-1
               mds-grid-sm-col-4  mds-grid-sm-col-span-3  mds-grid-sm-row-1
               mds-grid-xs-col-1  mds-grid-xs-col-span-2  mds-grid-xs-row-2">
    <!-- KPI 2 -->
  </div>
  <div class="mds-grid-md-col-7  mds-grid-md-col-span-3  mds-grid-md-row-1
               mds-grid-sm-col-1  mds-grid-sm-col-span-3  mds-grid-sm-row-2
               mds-grid-xs-col-1  mds-grid-xs-col-span-2  mds-grid-xs-row-3">
    <!-- KPI 3 -->
  </div>
  <div class="mds-grid-md-col-10 mds-grid-md-col-span-3  mds-grid-md-row-1
               mds-grid-sm-col-4  mds-grid-sm-col-span-3  mds-grid-sm-row-2
               mds-grid-xs-col-1  mds-grid-xs-col-span-2  mds-grid-xs-row-4">
    <!-- KPI 4 -->
  </div>
</div>
```

**Breakpoint column counts:** `md` = 12 columns, `sm` = 6 columns, `xs` = 2 columns.

---

## Anti-Patterns

| Mistake                                       | Fix                                                      |
| --------------------------------------------- | -------------------------------------------------------- |
| `<div style="font-size: 32px; color: #00243D">` | Use `<span class="mds-headline mds-headline--large">`   |
| `<span class="badge badge-success">`          | Use `<mc-tag appearance="success">`                      |
| Using a chart for a single number             | Use `mc-card` + `mds-headline--large`                    |
| No loading state                              | Always show `mc-loading-indicator` while fetching        |
| No error state                                | Always handle failed data fetch with retry option        |
| Missing xs/sm grid breakpoints                | Always define all 3 breakpoints per grid cell            |
