# viewport-grid

## Overview

 
 
Viewport-based grid system utilities for responsive layouts. Viewport-based grid respond to the width of the viewport rather than the entire container (to use container-based grid, see _container-grid.scss). This enables more global control over layout behavior—allowing components to adapt based on the entire viewport. It’s especially effective in simpler layouts where the entire page needs to remain visually consistent across different screen sizes. It includes utilities for defining rows, columns, and spans, enabling developers to create complex layouts with ease.

## Usage & code examples

### Installation

```bash
npm install @maersk-global/mds-foundations
```

## API / CSS classes

- `mds-grid-xs-col-{n}` (n = 1-12) -- Use `mds-grid-xs-col-{n}` class to position the cell in the {n} column of the grid in xs breakpoint. The class is dependent of the breakpoint, so when applied, the cell will only be in column {n} for xs breakpoint.
- `mds-grid-xs-col-{n}-reverse` (n = 1-12) -- Use `mds-grid-xs-col-{n}-reverse` class to position the cell in the reverse order in the {n} column (from the end) in xs breakpoint. The class is dependent of the breakpoint, so when applied, the cell will be only in column {n} from the end for xs breakpoint.
- `mds-grid-xs-col-span-{n}` (n = 1-12) -- Use `mds-grid-xs-col-span-{n}` class to span multiple cells in your grid for xs breakpoint. The class is dependent of the breakpoint, so when applied, the cells spanning will apply only for xs breakpoint. Use it in combination with mds-grid-xs-col-{n} class to position the cell in the {n} column of the grid in xs breakpoint.
- `mds-grid-xs-cols-{n}` (n = 1-12) -- Use `mds-grid-xs-cols-{n}` class to define a grid with {n} columns for xs breakpoint. The default number of columns is: - {n} columns for for 1025px + viewport and MDS breakpoints: md and above, - {n} columns for viewport between 641px - 1024px, and MDS breakpoints: sm, - {n} columns for viewport below 640px, and MDS breakpoints: xs. But you can override it using this class. The class is dependent of the breakpoint, so when applied, the column layout will apply only for xs breakpoint.
- `mds-grid-xs-row-{n}` (n = 1-24) -- Use `mds-grid-xs-row-{n}` class to position the cell in the {n} row of the grid in xs breakpoint. The class is dependent of the breakpoint, so when applied, the cell will only be in row {n} for xs breakpoint.
- `mds-grid-xs-row-span-{n}` (n = 1-24) -- Use `mds-grid-xs-row-span-{n}` class to span multiple rows in your grid for xs breakpoint. The class is dependent of the breakpoint, so when applied, the rows spanning will apply only for xs breakpoint.
- `mds-grid-xs-rows-{n}` (n = 1-24) -- Use `mds-grid-xs-rows-{n}` class to define a grid with {n} rows for xs breakpoint. The class is dependent of the breakpoint, so when applied, the row layout will apply only for xs breakpoint.
- `mds-grid-sm-col-{n}` (n = 1-12) -- Use `mds-grid-sm-col-{n}` class to position the cell in the {n} column of the grid in sm breakpoint. The class is dependent of the breakpoint, so when applied, the cell will only be in column {n} for sm breakpoint.
- `mds-grid-sm-col-{n}-reverse` (n = 1-12) -- Use `mds-grid-sm-col-{n}-reverse` class to position the cell in the reverse order in the {n} column (from the end) in sm breakpoint. The class is dependent of the breakpoint, so when applied, the cell will be only in column {n} from the end for sm breakpoint.
- `mds-grid-sm-col-span-{n}` (n = 1-12) -- Use `mds-grid-sm-col-span-{n}` class to span multiple cells in your grid for sm breakpoint. The class is dependent of the breakpoint, so when applied, the cells spanning will apply only for sm breakpoint. Use it in combination with mds-grid-sm-col-{n} class to position the cell in the {n} column of the grid in sm breakpoint.
- `mds-grid-sm-cols-{n}` (n = 1-12) -- Use `mds-grid-sm-cols-{n}` class to define a grid with {n} columns for sm breakpoint. The default number of columns is: - {n} columns for for 1025px + viewport and MDS breakpoints: md and above, - {n} columns for viewport between 641px - 1024px, and MDS breakpoints: sm, - {n} columns for viewport below 640px, and MDS breakpoints: xs. But you can override it using this class. The class is dependent of the breakpoint, so when applied, the column layout will apply only for sm breakpoint.
- `mds-grid-sm-row-{n}` (n = 1-24) -- Use `mds-grid-sm-row-{n}` class to position the cell in the {n} row of the grid in sm breakpoint. The class is dependent of the breakpoint, so when applied, the cell will only be in row {n} for sm breakpoint.
- `mds-grid-sm-row-span-{n}` (n = 1-24) -- Use `mds-grid-sm-row-span-{n}` class to span multiple rows in your grid for sm breakpoint. The class is dependent of the breakpoint, so when applied, the rows spanning will apply only for sm breakpoint.
- `mds-grid-sm-rows-{n}` (n = 1-24) -- Use `mds-grid-sm-rows-{n}` class to define a grid with {n} rows for sm breakpoint. The class is dependent of the breakpoint, so when applied, the row layout will apply only for sm breakpoint.
- `mds-grid-md-col-{n}` (n = 1-12) -- Use `mds-grid-md-col-{n}` class to position the cell in the {n} column of the grid in md breakpoint. The class is dependent of the breakpoint, so when applied, the cell will only be in column {n} for md breakpoint.
- `mds-grid-md-col-{n}-reverse` (n = 1-12) -- Use `mds-grid-md-col-{n}-reverse` class to position the cell in the reverse order in the {n} column (from the end) in md breakpoint. The class is dependent of the breakpoint, so when applied, the cell will be only in column {n} from the end for md breakpoint.
- `mds-grid-md-col-span-{n}` (n = 1-12) -- Use `mds-grid-md-col-span-{n}` class to span multiple cells in your grid for md breakpoint. The class is dependent of the breakpoint, so when applied, the cells spanning will apply only for md breakpoint. Use it in combination with mds-grid-md-col-{n} class to position the cell in the {n} column of the grid in md breakpoint.
- `mds-grid-md-cols-{n}` (n = 1-12) -- Use `mds-grid-md-cols-{n}` class to define a grid with {n} columns for md breakpoint. The default number of columns is: - {n} columns for for 1025px + viewport and MDS breakpoints: md and above, - {n} columns for viewport between 641px - 1024px, and MDS breakpoints: sm, - {n} columns for viewport below 640px, and MDS breakpoints: xs. But you can override it using this class. The class is dependent of the breakpoint, so when applied, the column layout will apply only for md breakpoint.
- `mds-grid-md-row-{n}` (n = 1-24) -- Use `mds-grid-md-row-{n}` class to position the cell in the {n} row of the grid in md breakpoint. The class is dependent of the breakpoint, so when applied, the cell will only be in row {n} for md breakpoint.
- `mds-grid-md-row-span-{n}` (n = 1-24) -- Use `mds-grid-md-row-span-{n}` class to span multiple rows in your grid for md breakpoint. The class is dependent of the breakpoint, so when applied, the rows spanning will apply only for md breakpoint.
- `mds-grid-md-rows-{n}` (n = 1-24) -- Use `mds-grid-md-rows-{n}` class to define a grid with {n} rows for md breakpoint. The class is dependent of the breakpoint, so when applied, the row layout will apply only for md breakpoint.

