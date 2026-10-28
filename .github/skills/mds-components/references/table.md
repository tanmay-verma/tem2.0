# table

## Overview

 
 
Foundational classes for styling HTML tables. Use it if you use native HTML table elements like `<table>`, or using external libraries like Tanstack Table or AG Grid and you make your own customizations. We recommend using the `mc-table` component for better accessibility and styling control, with multiple features working out of the box and option to high customization.

## Usage & code examples

### Installation

```bash
npm install @maersk-global/mds-foundations
```

### Imports

```html
<link rel="stylesheet" href="./node_modules/@maersk-global/mds-foundations/css/foundations.min.css" />
```

```css
@import url("@maersk-global/mds-foundations/css/foundations.min.css");
```

```javascript
import "@maersk-global/mds-foundations/css/foundations.min.css";
```

```css
@use url("@maersk-global/mds-foundations/sass/_table.scss") as *;
```

### Examples

#### Basic

```html
<body class="mds">
  <div class="mds-table mds-table--scrollable">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Last port</th>
          <th class="mds-table__cell--number">Built (year)</th>
          <th class="mds-table__cell--number">Length (m)</th>
          <th class="mds-table__cell--number">Capacity (TEU)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Madrid Maersk</td>
          <td>Shanghai</td>
          <td class="mds-table__cell--number">2017</td>
          <td class="mds-table__cell--number">399</td>
          <td class="mds-table__cell--number">19,630</td>
        </tr>
        <tr>
          <td>Mary Maersk</td>
          <td>Busan</td>
          <td class="mds-table__cell--number">2013</td>
          <td class="mds-table__cell--number">399</td>
          <td class="mds-table__cell--number">18,270</td>
        </tr>
      </tbody>
    </table>
  </div>
</body>
```

#### Advanced

```html
<mc-table .data=[{id: 1, name: 'Madrid Maersk', type: 'Container ship', built: '2017', length: 399, capacity: 19630, inService: true, status: 'On schedule', speed: '16.2', position: 'Track on map', lastPort: 'Shanghai', lastCountry: 'China', lastUpdate: '06/08/2025'}, {id: 2, name: 'Mary Maersk', type: 'Container ship', built: '2013', length: 399, capacity: 18270, inService: true, status: 'Delayed', speed: '2.1', position: 'Track on map', lastPort: 'Busan', lastCountry: 'South Korea', lastUpdate: '07/08/2025'}, {id: 3, name: 'Gerner Maersk', type: 'Container ship', built: '2008', length: 367, capacity: 9038, inService: true, status: 'On schedule', speed: '10.7', position: 'Track on map', lastPort: 'Rotterdam', lastCountry: 'Netherlands', lastUpdate: '08/08/2025'}]></mc-table>
```

## API / CSS classes

### `mds-table`

**Category:** Table
**Usage:** Use mds-table class to style HTML tables with consistent design and behavior.

#### Example:
```html
<div class="mds-table">
<table>...</table>
</div>
```

### `mds-table`

**Category:** No categry available
**Usage:** null

#### Example:
```html
N/A
```

### `mds-table__subtext`

**Category:** Table
**Usage:** Use mds-table__subtext class to style subtext within table cells.

#### Example:
```html
<td>
<span class="mds-table__subtext">Subtext here</span>
</td>
```

### `mds-table`

**Category:** No categry available
**Usage:** null

#### Example:
```html
N/A
```

### `mds-table`

**Category:** No categry available
**Usage:** null

#### Example:
```html
N/A
```

### `mds-table`

**Category:** No categry available
**Usage:** null

#### Example:
```html
N/A
```

### `mds-table`

**Category:** No categry available
**Usage:** null

#### Example:
```html
N/A
```

### `mds-table`

**Category:** No categry available
**Usage:** null

#### Example:
```html
N/A
```

### `mds-table--large`

**Category:** Table
**Usage:** Use mds-table--large class to style tables that are displayed in a more spacious format.

#### Example:
```html
<table class="mds-table mds-table--large">...</table>
```

### `mds-table`

**Category:** No categry available
**Usage:** null

#### Example:
```html
N/A
```

### `mds-table--small`

**Category:** Table
**Usage:** Use mds-table--small class to style tables that are displayed in a more compact format.

#### Example:
```html
<table class="mds-table mds-table--small">...</table>
```

### `mds-table`

**Category:** No categry available
**Usage:** null

#### Example:
```html
N/A
```

### `mds-table--zebra-stripes`

**Category:** Table
**Usage:** Use mds-table--zebra-stripes class to style tables with alternating row colors.

#### Example:
```html
<table class="mds-table mds-table--zebra-stripes">...</table>
```

### `mds-table--zebra-stripes-with-expand`

**Category:** Table
**Usage:** Use row pairs (main row + expanded row) for zebra striping.

#### Example:
```html
<table class="mds-table mds-table--zebra-stripes-with-expand">...</table>
```

### `mds-table`

**Category:** No categry available
**Usage:** null

#### Example:
```html
N/A
```

### `mds-table`

**Category:** No categry available
**Usage:** null

#### Example:
```html
N/A
```

### `mds-table`

**Category:** No categry available
**Usage:** null

#### Example:
```html
N/A
```

### `mds-table--horizontal-lines-dashed`

**Category:** Table
**Usage:** Use mds-table--horizontal-lines-dashed class to style tables with dashed horizontal lines.

#### Example:
```html
<table class="mds-table mds-table--horizontal-lines-dashed">...</table>
```

### `mds-table--horizontal-lines-dotted`

**Category:** Table
**Usage:** Use mds-table--horizontal-lines-dotted class to style tables with dotted horizontal lines.

#### Example:
```html
<table class="mds-table mds-table--horizontal-lines-dotted">...</table>
```

### `mds-table--vertical-lines-solid`

**Category:** Table
**Usage:** Use mds-table--vertical-lines-solid class to style tables with solid vertical lines.

#### Example:
```html
<table class="mds-table mds-table--vertical-lines-solid">...</table>
```

### `mds-table--vertical-lines-dashed`

**Category:** Table
**Usage:** Use mds-table--vertical-lines-dashed class to style tables with dashed vertical lines.

#### Example:
```html
<table class="mds-table mds-table--vertical-lines-dashed">...</table>
```

### `mds-table--vertical-lines-dotted`

**Category:** Table
**Usage:** Use mds-table--vertical-lines-dotted class to style tables with dotted vertical lines.

#### Example:
```html
<table class="mds-table mds-table--vertical-lines-dotted">...</table>
```

### `mds-table--horizontal-lines-none`

**Category:** Table
**Usage:** Use mds-table--horizontal-lines-none class to style tables with no horizontal lines.

#### Example:
```html
<table class="mds-table mds-table--horizontal-lines-none">...</table>
```

### `mds-table--vertical-lines-none`

**Category:** Table
**Usage:** Use mds-table--vertical-lines-none class to style tables with no vertical lines.

#### Example:
```html
<table class="mds-table mds-table--vertical-lines-none">...</table>
```

### `mds-table--outer-border-none`

**Category:** Table
**Usage:** Use mds-table--outer-border-none class to style tables with no outer border.

#### Example:
```html
<table class="mds-table mds-table--outer-border-none">...</table>
```

### `mds-table--outer-border-dashed`

**Category:** Table
**Usage:** Use mds-table--outer-border-dashed class to style tables with a dashed outer border.

#### Example:
```html
<table class="mds-table mds-table--outer-border-dashed">...</table>
```

### `mds-table--outer-border-dotted`

**Category:** Table
**Usage:** Use mds-table--outer-border-dotted class to style tables with a dotted outer border.

#### Example:
```html
<table class="mds-table mds-table--outer-border-dotted">...</table>
```

### `mds-table--outer-border-corners-square`

**Category:** Table
**Usage:** Use mds-table--outer-border-corners-square class to style tables with square outer border corners.

#### Example:
```html
<table class="mds-table mds-table--outer-border-corners-square">...</table>
```

### `mds-table`

**Category:** No categry available
**Usage:** null

#### Example:
```html
N/A
```

### `mds-table--nowrap`

**Category:** Table
**Usage:** Use mds-table--nowrap class to prevent text wrapping in table cells.

#### Example:
```html
<table class="mds-table mds-table--nowrap">...</table>
```

### `mds-table__cell--nowrap`

**Category:** Table
**Usage:** Use mds-table__cell--nowrap class to prevent text wrapping in specific table cells.

#### Example:
```html
<td class="mds-table__cell--nowrap">This cell will not wrap text</td>
```

### `mds-table`

**Category:** No categry available
**Usage:** null

#### Example:
```html
N/A
```

### `mds-table--vertical-align-top`

**Category:** Table
**Usage:** Use mds-table--vertical-align-top class to align table cell content to the top.

#### Example:
```html
<table class="mds-table mds-table--vertical-align-top">...</table>
```

### `mds-table--vertical-align-baseline`

**Category:** Table
**Usage:** Use mds-table--vertical-align-baseline class to align table cell content to the baseline.

#### Example:
```html
<table class="mds-table mds-table--vertical-align-baseline">...</table>
```

### `mds-table--vertical-align-bottom`

**Category:** Table
**Usage:** Use mds-table--vertical-align-bottom class to align table cell content to the bottom.

#### Example:
```html
<table class="mds-table mds-table--vertical-align-bottom">...</table>
```

### `mds-table`

**Category:** No categry available
**Usage:** null

#### Example:
```html
N/A
```

### `mds-table__column--row-selector`

**Category:** Table
**Usage:** Use mds-table__column--row-selector class to add a column for row selection checkboxes.

#### Example:
```html
<table class="mds-table">
<thead>
<tr>
<th class="mds-table__column--row-selector">
<mc-checkbox></mc-checkbox>
</th>
<th>Name</th>
</tr>
</thead>
<tbody>...</tbody>
</table>
```

### `mds_table__row--selected`

**Category:** Table
**Usage:** Use mds_table__row--selected class to style selected rows in a table.

#### Example:
```html
<tr class="mds_table__row--selected">...</tr>
```

### `mds-table`

**Category:** No categry available
**Usage:** null

#### Example:
```html
N/A
```

### `mds-table__column--row-expander`

**Category:** Table
**Usage:** Use mds-table__column--row-expander class to add a column for row expander buttons.

#### Example:
```html
<table class="mds-table">
<thead>
<tr>
<th class="mds-table__column--row-expander">
<mc-button icon="chevron-down" variant="text"></mc-button>
</th>
<th>Name</th>
</tr>
</thead>
<tbody>...</tbody>
</table>
```

### `mds-table`

**Category:** No categry available
**Usage:** null

#### Example:
```html
N/A
```

### `mds-table__header-cell--sortable`

**Category:** Table
**Usage:** Use mds-table__header-cell--sortable class to make table headers sortable.

#### Example:
```html
<th class="mds-table__header-cell--sortable">Name</th>
```

### `mds-table`

**Category:** No categry available
**Usage:** null

#### Example:
```html
N/A
```

### `mds-table--scrollable`

**Category:** Table
**Usage:** Use mds-table--scrollable class to make the table scrollable when it exceeds the available space.

#### Example:
```html
<div class="mds-table mds-table--scrollable">
<table>...</table>
</div>
```

### `mds-table`

**Category:** No categry available
**Usage:** null

#### Example:
```html
N/A
```

### `mds-table--header-sticky-viewport`

**Category:** Table
**Usage:** Use mds-table--header-sticky-viewport class when the sticky header should attach to the viewport rather than an inner scroll container.

#### Example:
```html
<div class="mds-table mds-table--header-sticky mds-table--header-sticky-viewport">
<table>...</table>
</div>
```

### `mds-table`

**Category:** No categry available
**Usage:** null

#### Example:
```html
N/A
```

### `mds-table--header-none`

**Category:** Table
**Usage:** Use mds-table--header-none class to hide the table header.

#### Example:
```html
<table class="mds-table mds-table--header-none">...</table>
```

### `mds-table`

**Category:** No categry available
**Usage:** null

#### Example:
```html
N/A
```

### `mds-table--footer`

**Category:** Table
**Usage:** Use mds-table--footer class to add a footer to the table.

#### Example:
```html
<table class="mds-table mds-table--footer">
<tfoot>
<tr>
<td>Total</td>
<td>...</td>
</tr>
</tfoot>
</table>
```

### `mds-table`

**Category:** No categry available
**Usage:** null

#### Example:
```html
N/A
```

### `mds-table__column--sticky`

**Category:** Table
**Usage:** Use mds-table__column--sticky class to make a column sticky.

#### Example:
```html
<th class="mds-table__column--sticky">Sticky Column</th>
```

### `mds-table--header-sticky`

**Category:** Table
**Usage:** Use mds-table--header-sticky class to make the table header sticky.

#### Example:
```html
<table class="mds-table mds-table--header-sticky">...</table>
```

### `mds-table--footer-sticky`

**Category:** Table
**Usage:** Use mds-table--footer-sticky class to make the table footer sticky.

#### Example:
```html
<table class="mds-table mds-table--footer-sticky"></table>
```

### `mds-table__cell--text-center`

**Category:** Table
**Usage:** Use mds-table__cell--text-center class to center-align text in table cells.

#### Example:
```html
<td class="mds-table__cell--text-center">Centered Text</td>
```

### `mds-table__cell--text-right`

**Category:** Table
**Usage:** Use mds-table__cell--text-right class to right-align text in table cells.

#### Example:
```html
<td class="mds-table__cell--text-right">Right Aligned Text</td>
```

### `mds-table__cell--tabular-figures`

**Category:** Table
**Usage:** Use mds-table__cell--tabular-figures class to apply tabular figures font feature to table cells.

#### Example:
```html
<td class="mds-table__cell--tabular-figures">1234567890</td>
```

### `mds-table__cell--number`

**Category:** Table
**Usage:** Use mds-table__cell--number class to style table cells containing numbers.

#### Example:
```html
<td class="mds-table__cell--number">12345</td>
```

### `mds-table__cell--content-top`

**Category:** Table
**Usage:** Use mds-table__cell--content-top class to align content to the top of table cells.

#### Example:
```html
<td class="mds-table__cell--content-top">Content aligned to the top</td>
```

### `mds-table__cell--content-center`

**Category:** Table
**Usage:** Use mds-table__cell--content-center class to center-align content vertically in table cells.

#### Example:
```html
<td class="mds-table__cell--content-center">Content centered vertically</td>
```

### `mds-table__cell--content-bottom`

**Category:** Table
**Usage:** Use mds-table__cell--content-bottom class to align content to the bottom of table cells.

#### Example:
```html
<td class="mds-table__cell--content-bottom">Content aligned to the bottom</td>
```

### `mds-table`

**Category:** No categry available
**Usage:** null

#### Example:
```html
N/A
```

### `mds-table__expanded-row`

**Category:** Table
**Usage:** Use mds-table__expanded-row class to style expanded rows in a table.

#### Example:
```html
<tr class="mds-table__expanded-row--visible">
<td colspan="5">Expanded content here</td>
</tr>
<tr class="mds-table__expanded-row--hidden">
<td colspan="5">Expanded content here</td>
</tr>
```

### `mds-table--medium`

**Category:** Table
**Usage:** Use mds-table--medium class to style tables with medium size.

#### Example:
```html
<table class="mds-table mds-table--medium">...</table>
```

### `mds-table__expanded-row__trigger`

**Category:** Table
**Usage:** Use mds-table__expanded-row__trigger class to style the trigger for expanded rows.

#### Example:
```html
<td class="mds-table__expanded-row__trigger">
<mc-button icon="chevron-down" variant="text"></mc-button>
</td>
```

### `mds-table-and-caption`

**Category:** Table
**Usage:** Use mds-table-and-caption class to style a table with a caption.

#### Example:
```html
<div class="mds-table-and-caption">
<div class="mds-table">
<table>...</table>
</div>
<div class="mds-table-caption">Table Caption</div>
</div>
```

### `mds-table-caption`

**Category:** Table
**Usage:** Use mds-table-caption class to style the caption of a table.

#### Example:
```html
<div class="mds-table-caption">Table Caption</div>
```

### `mds-table-caption--small`

**Category:** Table
**Usage:** Use mds-table-caption--small class to style small captions for tables.

#### Example:
```html
<div class="mds-table-caption mds-table-caption--small">Small Table Caption</div>
```

### `mds-table-caption--large`

**Category:** Table
**Usage:** Use mds-table-caption--large class to style large captions for tables.

#### Example:
```html
<div class="mds-table-caption mds-table-caption--large">Large Table Caption</div>
```

