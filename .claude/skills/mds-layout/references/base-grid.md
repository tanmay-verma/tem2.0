# base-grid

## Overview

 
 
Base grid system utilities for layouts. The grid system provides a flexible layout structure, allowing for consistent alignment and spacing of elements and is independent of container or viewport size. It includes utilities for defining rows, columns, and spans, enabling developers to create complex layouts with ease. For responsive layouts, use the container-based grid system in _container-grid.css or viewport-based grid system in _viewport-grid.css.

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
@use url("@maersk-global/mds-foundations/sass/_base-grid.scss") as *;
```

### Examples

#### Basic

```html
// Basic grid layout with: 12 columns grid system in all breakpoints. If you need a grid that depends on the screen size, use container grid.
<main class="mds-container">
  <div class="mds-grid">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
    <div>9</div>
    <div>10</div>
    <div>11</div>
    <div>12</div>
  </div>
</main>
```

#### Advanced

```html
<div class="mds-container">
  <div class="mds-grid ">
    <div class="mds-grid-col-1">Cell 1 (always at the beginning)</div>
    <div class="mds-grid-col-1-reverse">Cell 2 (always at the end)</div>
  </div>
  <div class="mds-grid ">
    <div class="mds-grid-col-1 mds-grid-col-span-to-end mds-grid-row-1">Cell 1 (first row, spans over 12 columns)</div>
    <div>Cell 2 (second row, cell don't span)</div>
    <div class="mds-grid-col-1 mds-grid-col-span-to-end mds-grid-row-3">Cell 3 (third row, spans over 12 columns)</div>
  </div>
</div>
```

## API / CSS classes

### `mds-grid-row-1`

**Category:** Grid
**Usage:** Use mds-grid-row-1 class to position the cell in the 1 row of the grid. The class is independent of the breakpoint, so when applied, the cell will only be in row 1 for all breakpoints.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid">
<div class="mds-grid-row-1">Cell in row 1</div>
<div class="mds-grid-row-2">Cell in row 2</div>
...
</div>
</div>
```

### `mds-grid-row-2`

**Category:** Grid
**Usage:** Use mds-grid-row-2 class to position the cell in the 2 row of the grid. The class is independent of the breakpoint, so when applied, the cell will only be in row 2 for all breakpoints.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid">
<div class="mds-grid-row-1">Cell in row 1</div>
<div class="mds-grid-row-2">Cell in row 2</div>
...
</div>
</div>
```

### `mds-grid-row-3`

**Category:** Grid
**Usage:** Use mds-grid-row-3 class to position the cell in the 3 row of the grid. The class is independent of the breakpoint, so when applied, the cell will only be in row 3 for all breakpoints.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid">
<div class="mds-grid-row-1">Cell in row 1</div>
<div class="mds-grid-row-2">Cell in row 2</div>
...
</div>
</div>
```

### `mds-grid-row-4`

**Category:** Grid
**Usage:** Use mds-grid-row-4 class to position the cell in the 4 row of the grid. The class is independent of the breakpoint, so when applied, the cell will only be in row 4 for all breakpoints.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid">
<div class="mds-grid-row-1">Cell in row 1</div>
<div class="mds-grid-row-2">Cell in row 2</div>
...
</div>
</div>
```

### `mds-grid-row-5`

**Category:** Grid
**Usage:** Use mds-grid-row-5 class to position the cell in the 5 row of the grid. The class is independent of the breakpoint, so when applied, the cell will only be in row 5 for all breakpoints.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid">
<div class="mds-grid-row-1">Cell in row 1</div>
<div class="mds-grid-row-2">Cell in row 2</div>
...
</div>
</div>
```

### `mds-grid-row-6`

**Category:** Grid
**Usage:** Use mds-grid-row-6 class to position the cell in the 6 row of the grid. The class is independent of the breakpoint, so when applied, the cell will only be in row 6 for all breakpoints.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid">
<div class="mds-grid-row-1">Cell in row 1</div>
<div class="mds-grid-row-2">Cell in row 2</div>
...
</div>
</div>
```

### `mds-grid-row-7`

**Category:** Grid
**Usage:** Use mds-grid-row-7 class to position the cell in the 7 row of the grid. The class is independent of the breakpoint, so when applied, the cell will only be in row 7 for all breakpoints.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid">
<div class="mds-grid-row-1">Cell in row 1</div>
<div class="mds-grid-row-2">Cell in row 2</div>
...
</div>
</div>
```

### `mds-grid-row-8`

**Category:** Grid
**Usage:** Use mds-grid-row-8 class to position the cell in the 8 row of the grid. The class is independent of the breakpoint, so when applied, the cell will only be in row 8 for all breakpoints.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid">
<div class="mds-grid-row-1">Cell in row 1</div>
<div class="mds-grid-row-2">Cell in row 2</div>
...
</div>
</div>
```

### `mds-grid-row-9`

**Category:** Grid
**Usage:** Use mds-grid-row-9 class to position the cell in the 9 row of the grid. The class is independent of the breakpoint, so when applied, the cell will only be in row 9 for all breakpoints.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid">
<div class="mds-grid-row-1">Cell in row 1</div>
<div class="mds-grid-row-2">Cell in row 2</div>
...
</div>
</div>
```

### `mds-grid-row-10`

**Category:** Grid
**Usage:** Use mds-grid-row-10 class to position the cell in the 10 row of the grid. The class is independent of the breakpoint, so when applied, the cell will only be in row 10 for all breakpoints.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid">
<div class="mds-grid-row-1">Cell in row 1</div>
<div class="mds-grid-row-2">Cell in row 2</div>
...
</div>
</div>
```

### `mds-grid-row-11`

**Category:** Grid
**Usage:** Use mds-grid-row-11 class to position the cell in the 11 row of the grid. The class is independent of the breakpoint, so when applied, the cell will only be in row 11 for all breakpoints.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid">
<div class="mds-grid-row-1">Cell in row 1</div>
<div class="mds-grid-row-2">Cell in row 2</div>
...
</div>
</div>
```

### `mds-grid-row-12`

**Category:** Grid
**Usage:** Use mds-grid-row-12 class to position the cell in the 12 row of the grid. The class is independent of the breakpoint, so when applied, the cell will only be in row 12 for all breakpoints.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid">
<div class="mds-grid-row-1">Cell in row 1</div>
<div class="mds-grid-row-2">Cell in row 2</div>
...
</div>
</div>
```

### `mds-grid-row-13`

**Category:** Grid
**Usage:** Use mds-grid-row-13 class to position the cell in the 13 row of the grid. The class is independent of the breakpoint, so when applied, the cell will only be in row 13 for all breakpoints.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid">
<div class="mds-grid-row-1">Cell in row 1</div>
<div class="mds-grid-row-2">Cell in row 2</div>
...
</div>
</div>
```

### `mds-grid-row-14`

**Category:** Grid
**Usage:** Use mds-grid-row-14 class to position the cell in the 14 row of the grid. The class is independent of the breakpoint, so when applied, the cell will only be in row 14 for all breakpoints.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid">
<div class="mds-grid-row-1">Cell in row 1</div>
<div class="mds-grid-row-2">Cell in row 2</div>
...
</div>
</div>
```

### `mds-grid-row-15`

**Category:** Grid
**Usage:** Use mds-grid-row-15 class to position the cell in the 15 row of the grid. The class is independent of the breakpoint, so when applied, the cell will only be in row 15 for all breakpoints.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid">
<div class="mds-grid-row-1">Cell in row 1</div>
<div class="mds-grid-row-2">Cell in row 2</div>
...
</div>
</div>
```

### `mds-grid-row-16`

**Category:** Grid
**Usage:** Use mds-grid-row-16 class to position the cell in the 16 row of the grid. The class is independent of the breakpoint, so when applied, the cell will only be in row 16 for all breakpoints.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid">
<div class="mds-grid-row-1">Cell in row 1</div>
<div class="mds-grid-row-2">Cell in row 2</div>
...
</div>
</div>
```

### `mds-grid-row-17`

**Category:** Grid
**Usage:** Use mds-grid-row-17 class to position the cell in the 17 row of the grid. The class is independent of the breakpoint, so when applied, the cell will only be in row 17 for all breakpoints.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid">
<div class="mds-grid-row-1">Cell in row 1</div>
<div class="mds-grid-row-2">Cell in row 2</div>
...
</div>
</div>
```

### `mds-grid-row-18`

**Category:** Grid
**Usage:** Use mds-grid-row-18 class to position the cell in the 18 row of the grid. The class is independent of the breakpoint, so when applied, the cell will only be in row 18 for all breakpoints.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid">
<div class="mds-grid-row-1">Cell in row 1</div>
<div class="mds-grid-row-2">Cell in row 2</div>
...
</div>
</div>
```

### `mds-grid-row-19`

**Category:** Grid
**Usage:** Use mds-grid-row-19 class to position the cell in the 19 row of the grid. The class is independent of the breakpoint, so when applied, the cell will only be in row 19 for all breakpoints.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid">
<div class="mds-grid-row-1">Cell in row 1</div>
<div class="mds-grid-row-2">Cell in row 2</div>
...
</div>
</div>
```

### `mds-grid-row-20`

**Category:** Grid
**Usage:** Use mds-grid-row-20 class to position the cell in the 20 row of the grid. The class is independent of the breakpoint, so when applied, the cell will only be in row 20 for all breakpoints.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid">
<div class="mds-grid-row-1">Cell in row 1</div>
<div class="mds-grid-row-2">Cell in row 2</div>
...
</div>
</div>
```

### `mds-grid-row-21`

**Category:** Grid
**Usage:** Use mds-grid-row-21 class to position the cell in the 21 row of the grid. The class is independent of the breakpoint, so when applied, the cell will only be in row 21 for all breakpoints.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid">
<div class="mds-grid-row-1">Cell in row 1</div>
<div class="mds-grid-row-2">Cell in row 2</div>
...
</div>
</div>
```

### `mds-grid-row-22`

**Category:** Grid
**Usage:** Use mds-grid-row-22 class to position the cell in the 22 row of the grid. The class is independent of the breakpoint, so when applied, the cell will only be in row 22 for all breakpoints.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid">
<div class="mds-grid-row-1">Cell in row 1</div>
<div class="mds-grid-row-2">Cell in row 2</div>
...
</div>
</div>
```

### `mds-grid-row-23`

**Category:** Grid
**Usage:** Use mds-grid-row-23 class to position the cell in the 23 row of the grid. The class is independent of the breakpoint, so when applied, the cell will only be in row 23 for all breakpoints.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid">
<div class="mds-grid-row-1">Cell in row 1</div>
<div class="mds-grid-row-2">Cell in row 2</div>
...
</div>
</div>
```

### `mds-grid-row-24`

**Category:** Grid
**Usage:** Use mds-grid-row-24 class to position the cell in the 24 row of the grid. The class is independent of the breakpoint, so when applied, the cell will only be in row 24 for all breakpoints.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid">
<div class="mds-grid-row-1">Cell in row 1</div>
<div class="mds-grid-row-2">Cell in row 2</div>
...
</div>
</div>
```

### `mds-grid-col-1`

**Category:** Grid
**Usage:** Use mds-grid-col-1 class to position the cell in the 1 column of the grid. The class is independent of the breakpoint, so when applied, the cell will persist to be in column 1 in all screen sizes.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid">
<div class="mds-grid-col-1">Cell in column 1 in all breakpoints</div>
<div class="mds-grid-col-2">Cell in column 2 in all breakpoints</div>
...
</div>
</div>
```

### `mds-grid-col-2`

**Category:** Grid
**Usage:** Use mds-grid-col-2 class to position the cell in the 2 column of the grid. The class is independent of the breakpoint, so when applied, the cell will persist to be in column 2 in all screen sizes.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid">
<div class="mds-grid-col-1">Cell in column 1 in all breakpoints</div>
<div class="mds-grid-col-2">Cell in column 2 in all breakpoints</div>
...
</div>
</div>
```

### `mds-grid-col-3`

**Category:** Grid
**Usage:** Use mds-grid-col-3 class to position the cell in the 3 column of the grid. The class is independent of the breakpoint, so when applied, the cell will persist to be in column 3 in all screen sizes.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid">
<div class="mds-grid-col-1">Cell in column 1 in all breakpoints</div>
<div class="mds-grid-col-2">Cell in column 2 in all breakpoints</div>
...
</div>
</div>
```

### `mds-grid-col-4`

**Category:** Grid
**Usage:** Use mds-grid-col-4 class to position the cell in the 4 column of the grid. The class is independent of the breakpoint, so when applied, the cell will persist to be in column 4 in all screen sizes.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid">
<div class="mds-grid-col-1">Cell in column 1 in all breakpoints</div>
<div class="mds-grid-col-2">Cell in column 2 in all breakpoints</div>
...
</div>
</div>
```

### `mds-grid-col-5`

**Category:** Grid
**Usage:** Use mds-grid-col-5 class to position the cell in the 5 column of the grid. The class is independent of the breakpoint, so when applied, the cell will persist to be in column 5 in all screen sizes.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid">
<div class="mds-grid-col-1">Cell in column 1 in all breakpoints</div>
<div class="mds-grid-col-2">Cell in column 2 in all breakpoints</div>
...
</div>
</div>
```

### `mds-grid-col-6`

**Category:** Grid
**Usage:** Use mds-grid-col-6 class to position the cell in the 6 column of the grid. The class is independent of the breakpoint, so when applied, the cell will persist to be in column 6 in all screen sizes.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid">
<div class="mds-grid-col-1">Cell in column 1 in all breakpoints</div>
<div class="mds-grid-col-2">Cell in column 2 in all breakpoints</div>
...
</div>
</div>
```

### `mds-grid-col-7`

**Category:** Grid
**Usage:** Use mds-grid-col-7 class to position the cell in the 7 column of the grid. The class is independent of the breakpoint, so when applied, the cell will persist to be in column 7 in all screen sizes.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid">
<div class="mds-grid-col-1">Cell in column 1 in all breakpoints</div>
<div class="mds-grid-col-2">Cell in column 2 in all breakpoints</div>
...
</div>
</div>
```

### `mds-grid-col-8`

**Category:** Grid
**Usage:** Use mds-grid-col-8 class to position the cell in the 8 column of the grid. The class is independent of the breakpoint, so when applied, the cell will persist to be in column 8 in all screen sizes.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid">
<div class="mds-grid-col-1">Cell in column 1 in all breakpoints</div>
<div class="mds-grid-col-2">Cell in column 2 in all breakpoints</div>
...
</div>
</div>
```

### `mds-grid-col-9`

**Category:** Grid
**Usage:** Use mds-grid-col-9 class to position the cell in the 9 column of the grid. The class is independent of the breakpoint, so when applied, the cell will persist to be in column 9 in all screen sizes.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid">
<div class="mds-grid-col-1">Cell in column 1 in all breakpoints</div>
<div class="mds-grid-col-2">Cell in column 2 in all breakpoints</div>
...
</div>
</div>
```

### `mds-grid-col-10`

**Category:** Grid
**Usage:** Use mds-grid-col-10 class to position the cell in the 10 column of the grid. The class is independent of the breakpoint, so when applied, the cell will persist to be in column 10 in all screen sizes.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid">
<div class="mds-grid-col-1">Cell in column 1 in all breakpoints</div>
<div class="mds-grid-col-2">Cell in column 2 in all breakpoints</div>
...
</div>
</div>
```

### `mds-grid-col-11`

**Category:** Grid
**Usage:** Use mds-grid-col-11 class to position the cell in the 11 column of the grid. The class is independent of the breakpoint, so when applied, the cell will persist to be in column 11 in all screen sizes.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid">
<div class="mds-grid-col-1">Cell in column 1 in all breakpoints</div>
<div class="mds-grid-col-2">Cell in column 2 in all breakpoints</div>
...
</div>
</div>
```

### `mds-grid-col-12`

**Category:** Grid
**Usage:** Use mds-grid-col-12 class to position the cell in the 12 column of the grid. The class is independent of the breakpoint, so when applied, the cell will persist to be in column 12 in all screen sizes.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid">
<div class="mds-grid-col-1">Cell in column 1 in all breakpoints</div>
<div class="mds-grid-col-2">Cell in column 2 in all breakpoints</div>
...
</div>
</div>
```

### `mds-grid-col-1-reverse`

**Category:** Grid
**Usage:** Use mds-grid-col-1-reverse class to position the cell in the reverse order in the 1 column (from the end) of the grid. The class is independent of the breakpoint, so when applied, the cell will persist to be in column 1 from the end in all screen sizes.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid">
<div class="mds-grid-col-2-reverse">Cell in column 2 from the end in all breakpoints</div>
<div class="mds-grid-col-1-reverse">Cell in column 1 from the end in all breakpoints</div>
...
</div>
</div>
```

### `mds-grid-col-2-reverse`

**Category:** Grid
**Usage:** Use mds-grid-col-2-reverse class to position the cell in the reverse order in the 2 column (from the end) of the grid. The class is independent of the breakpoint, so when applied, the cell will persist to be in column 2 from the end in all screen sizes.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid">
<div class="mds-grid-col-2-reverse">Cell in column 2 from the end in all breakpoints</div>
<div class="mds-grid-col-1-reverse">Cell in column 1 from the end in all breakpoints</div>
...
</div>
</div>
```

### `mds-grid-col-3-reverse`

**Category:** Grid
**Usage:** Use mds-grid-col-3-reverse class to position the cell in the reverse order in the 3 column (from the end) of the grid. The class is independent of the breakpoint, so when applied, the cell will persist to be in column 3 from the end in all screen sizes.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid">
<div class="mds-grid-col-2-reverse">Cell in column 2 from the end in all breakpoints</div>
<div class="mds-grid-col-1-reverse">Cell in column 1 from the end in all breakpoints</div>
...
</div>
</div>
```

### `mds-grid-col-4-reverse`

**Category:** Grid
**Usage:** Use mds-grid-col-4-reverse class to position the cell in the reverse order in the 4 column (from the end) of the grid. The class is independent of the breakpoint, so when applied, the cell will persist to be in column 4 from the end in all screen sizes.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid">
<div class="mds-grid-col-2-reverse">Cell in column 2 from the end in all breakpoints</div>
<div class="mds-grid-col-1-reverse">Cell in column 1 from the end in all breakpoints</div>
...
</div>
</div>
```

### `mds-grid-col-5-reverse`

**Category:** Grid
**Usage:** Use mds-grid-col-5-reverse class to position the cell in the reverse order in the 5 column (from the end) of the grid. The class is independent of the breakpoint, so when applied, the cell will persist to be in column 5 from the end in all screen sizes.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid">
<div class="mds-grid-col-2-reverse">Cell in column 2 from the end in all breakpoints</div>
<div class="mds-grid-col-1-reverse">Cell in column 1 from the end in all breakpoints</div>
...
</div>
</div>
```

### `mds-grid-col-6-reverse`

**Category:** Grid
**Usage:** Use mds-grid-col-6-reverse class to position the cell in the reverse order in the 6 column (from the end) of the grid. The class is independent of the breakpoint, so when applied, the cell will persist to be in column 6 from the end in all screen sizes.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid">
<div class="mds-grid-col-2-reverse">Cell in column 2 from the end in all breakpoints</div>
<div class="mds-grid-col-1-reverse">Cell in column 1 from the end in all breakpoints</div>
...
</div>
</div>
```

### `mds-grid-col-7-reverse`

**Category:** Grid
**Usage:** Use mds-grid-col-7-reverse class to position the cell in the reverse order in the 7 column (from the end) of the grid. The class is independent of the breakpoint, so when applied, the cell will persist to be in column 7 from the end in all screen sizes.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid">
<div class="mds-grid-col-2-reverse">Cell in column 2 from the end in all breakpoints</div>
<div class="mds-grid-col-1-reverse">Cell in column 1 from the end in all breakpoints</div>
...
</div>
</div>
```

### `mds-grid-col-8-reverse`

**Category:** Grid
**Usage:** Use mds-grid-col-8-reverse class to position the cell in the reverse order in the 8 column (from the end) of the grid. The class is independent of the breakpoint, so when applied, the cell will persist to be in column 8 from the end in all screen sizes.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid">
<div class="mds-grid-col-2-reverse">Cell in column 2 from the end in all breakpoints</div>
<div class="mds-grid-col-1-reverse">Cell in column 1 from the end in all breakpoints</div>
...
</div>
</div>
```

### `mds-grid-col-9-reverse`

**Category:** Grid
**Usage:** Use mds-grid-col-9-reverse class to position the cell in the reverse order in the 9 column (from the end) of the grid. The class is independent of the breakpoint, so when applied, the cell will persist to be in column 9 from the end in all screen sizes.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid">
<div class="mds-grid-col-2-reverse">Cell in column 2 from the end in all breakpoints</div>
<div class="mds-grid-col-1-reverse">Cell in column 1 from the end in all breakpoints</div>
...
</div>
</div>
```

### `mds-grid-col-10-reverse`

**Category:** Grid
**Usage:** Use mds-grid-col-10-reverse class to position the cell in the reverse order in the 10 column (from the end) of the grid. The class is independent of the breakpoint, so when applied, the cell will persist to be in column 10 from the end in all screen sizes.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid">
<div class="mds-grid-col-2-reverse">Cell in column 2 from the end in all breakpoints</div>
<div class="mds-grid-col-1-reverse">Cell in column 1 from the end in all breakpoints</div>
...
</div>
</div>
```

### `mds-grid-col-11-reverse`

**Category:** Grid
**Usage:** Use mds-grid-col-11-reverse class to position the cell in the reverse order in the 11 column (from the end) of the grid. The class is independent of the breakpoint, so when applied, the cell will persist to be in column 11 from the end in all screen sizes.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid">
<div class="mds-grid-col-2-reverse">Cell in column 2 from the end in all breakpoints</div>
<div class="mds-grid-col-1-reverse">Cell in column 1 from the end in all breakpoints</div>
...
</div>
</div>
```

### `mds-grid-col-12-reverse`

**Category:** Grid
**Usage:** Use mds-grid-col-12-reverse class to position the cell in the reverse order in the 12 column (from the end) of the grid. The class is independent of the breakpoint, so when applied, the cell will persist to be in column 12 from the end in all screen sizes.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid">
<div class="mds-grid-col-2-reverse">Cell in column 2 from the end in all breakpoints</div>
<div class="mds-grid-col-1-reverse">Cell in column 1 from the end in all breakpoints</div>
...
</div>
</div>
```

### `mds-grid-col-13-reverse`

**Category:** Grid
**Usage:** Use mds-grid-col-13-reverse class to position the cell in the reverse order in the 13 column (from the end) of the grid. The class is independent of the breakpoint, so when applied, the cell will persist to be in column 13 from the end in all screen sizes.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid">
<div class="mds-grid-col-2-reverse">Cell in column 2 from the end in all breakpoints</div>
<div class="mds-grid-col-1-reverse">Cell in column 1 from the end in all breakpoints</div>
...
</div>
</div>
```

### `mds-grid-col-span-1`

**Category:** Grid
**Usage:** Use mds-grid-col-span-1 class to span multiple cells in your grid. The class is independent of the breakpoint, so when applied, the cells spanning will persist in all screen sizes.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid">
<div class="mds-grid-col-1 mds-grid-col-span-2">Cell in column 1 that spans over 2 columns in all breakpoints</div>
<div class="mds-grid-col-3 mds-grid-col-span-3">Cell in column 3 that spans over 3 columns in all breakpoints</div>
...
</div>
</div>
```

### `mds-grid-col-span-2`

**Category:** Grid
**Usage:** Use mds-grid-col-span-2 class to span multiple cells in your grid. The class is independent of the breakpoint, so when applied, the cells spanning will persist in all screen sizes.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid">
<div class="mds-grid-col-1 mds-grid-col-span-2">Cell in column 1 that spans over 2 columns in all breakpoints</div>
<div class="mds-grid-col-3 mds-grid-col-span-3">Cell in column 3 that spans over 3 columns in all breakpoints</div>
...
</div>
</div>
```

### `mds-grid-col-span-3`

**Category:** Grid
**Usage:** Use mds-grid-col-span-3 class to span multiple cells in your grid. The class is independent of the breakpoint, so when applied, the cells spanning will persist in all screen sizes.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid">
<div class="mds-grid-col-1 mds-grid-col-span-2">Cell in column 1 that spans over 2 columns in all breakpoints</div>
<div class="mds-grid-col-3 mds-grid-col-span-3">Cell in column 3 that spans over 3 columns in all breakpoints</div>
...
</div>
</div>
```

### `mds-grid-col-span-4`

**Category:** Grid
**Usage:** Use mds-grid-col-span-4 class to span multiple cells in your grid. The class is independent of the breakpoint, so when applied, the cells spanning will persist in all screen sizes.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid">
<div class="mds-grid-col-1 mds-grid-col-span-2">Cell in column 1 that spans over 2 columns in all breakpoints</div>
<div class="mds-grid-col-3 mds-grid-col-span-3">Cell in column 3 that spans over 3 columns in all breakpoints</div>
...
</div>
</div>
```

### `mds-grid-col-span-5`

**Category:** Grid
**Usage:** Use mds-grid-col-span-5 class to span multiple cells in your grid. The class is independent of the breakpoint, so when applied, the cells spanning will persist in all screen sizes.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid">
<div class="mds-grid-col-1 mds-grid-col-span-2">Cell in column 1 that spans over 2 columns in all breakpoints</div>
<div class="mds-grid-col-3 mds-grid-col-span-3">Cell in column 3 that spans over 3 columns in all breakpoints</div>
...
</div>
</div>
```

### `mds-grid-col-span-6`

**Category:** Grid
**Usage:** Use mds-grid-col-span-6 class to span multiple cells in your grid. The class is independent of the breakpoint, so when applied, the cells spanning will persist in all screen sizes.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid">
<div class="mds-grid-col-1 mds-grid-col-span-2">Cell in column 1 that spans over 2 columns in all breakpoints</div>
<div class="mds-grid-col-3 mds-grid-col-span-3">Cell in column 3 that spans over 3 columns in all breakpoints</div>
...
</div>
</div>
```

### `mds-grid-col-span-7`

**Category:** Grid
**Usage:** Use mds-grid-col-span-7 class to span multiple cells in your grid. The class is independent of the breakpoint, so when applied, the cells spanning will persist in all screen sizes.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid">
<div class="mds-grid-col-1 mds-grid-col-span-2">Cell in column 1 that spans over 2 columns in all breakpoints</div>
<div class="mds-grid-col-3 mds-grid-col-span-3">Cell in column 3 that spans over 3 columns in all breakpoints</div>
...
</div>
</div>
```

### `mds-grid-col-span-8`

**Category:** Grid
**Usage:** Use mds-grid-col-span-8 class to span multiple cells in your grid. The class is independent of the breakpoint, so when applied, the cells spanning will persist in all screen sizes.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid">
<div class="mds-grid-col-1 mds-grid-col-span-2">Cell in column 1 that spans over 2 columns in all breakpoints</div>
<div class="mds-grid-col-3 mds-grid-col-span-3">Cell in column 3 that spans over 3 columns in all breakpoints</div>
...
</div>
</div>
```

### `mds-grid-col-span-9`

**Category:** Grid
**Usage:** Use mds-grid-col-span-9 class to span multiple cells in your grid. The class is independent of the breakpoint, so when applied, the cells spanning will persist in all screen sizes.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid">
<div class="mds-grid-col-1 mds-grid-col-span-2">Cell in column 1 that spans over 2 columns in all breakpoints</div>
<div class="mds-grid-col-3 mds-grid-col-span-3">Cell in column 3 that spans over 3 columns in all breakpoints</div>
...
</div>
</div>
```

### `mds-grid-col-span-10`

**Category:** Grid
**Usage:** Use mds-grid-col-span-10 class to span multiple cells in your grid. The class is independent of the breakpoint, so when applied, the cells spanning will persist in all screen sizes.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid">
<div class="mds-grid-col-1 mds-grid-col-span-2">Cell in column 1 that spans over 2 columns in all breakpoints</div>
<div class="mds-grid-col-3 mds-grid-col-span-3">Cell in column 3 that spans over 3 columns in all breakpoints</div>
...
</div>
</div>
```

### `mds-grid-col-span-11`

**Category:** Grid
**Usage:** Use mds-grid-col-span-11 class to span multiple cells in your grid. The class is independent of the breakpoint, so when applied, the cells spanning will persist in all screen sizes.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid">
<div class="mds-grid-col-1 mds-grid-col-span-2">Cell in column 1 that spans over 2 columns in all breakpoints</div>
<div class="mds-grid-col-3 mds-grid-col-span-3">Cell in column 3 that spans over 3 columns in all breakpoints</div>
...
</div>
</div>
```

### `mds-grid-col-span-12`

**Category:** Grid
**Usage:** Use mds-grid-col-span-12 class to span multiple cells in your grid. The class is independent of the breakpoint, so when applied, the cells spanning will persist in all screen sizes.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid">
<div class="mds-grid-col-1 mds-grid-col-span-2">Cell in column 1 that spans over 2 columns in all breakpoints</div>
<div class="mds-grid-col-3 mds-grid-col-span-3">Cell in column 3 that spans over 3 columns in all breakpoints</div>
...
</div>
</div>
```

### `mds-grid-cols-1`

**Category:** Grid
**Usage:** Use mds-grid-cols-1 class to define a grid with 1 columns. The default number of columns is 12, but you can override it using this class. The class is independent of the breakpoint, so when applied, the column layout will be the same for all breakpoints.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-grid-cols-1">
Grid will have 1 number of columns in all breakpoints.
</div>
</div>
```

### `mds-grid-cols-2`

**Category:** Grid
**Usage:** Use mds-grid-cols-2 class to define a grid with 2 columns. The default number of columns is 12, but you can override it using this class. The class is independent of the breakpoint, so when applied, the column layout will be the same for all breakpoints.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-grid-cols-2">
Grid will have 2 number of columns in all breakpoints.
</div>
</div>
```

### `mds-grid-cols-3`

**Category:** Grid
**Usage:** Use mds-grid-cols-3 class to define a grid with 3 columns. The default number of columns is 12, but you can override it using this class. The class is independent of the breakpoint, so when applied, the column layout will be the same for all breakpoints.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-grid-cols-3">
Grid will have 3 number of columns in all breakpoints.
</div>
</div>
```

### `mds-grid-cols-4`

**Category:** Grid
**Usage:** Use mds-grid-cols-4 class to define a grid with 4 columns. The default number of columns is 12, but you can override it using this class. The class is independent of the breakpoint, so when applied, the column layout will be the same for all breakpoints.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-grid-cols-4">
Grid will have 4 number of columns in all breakpoints.
</div>
</div>
```

### `mds-grid-cols-5`

**Category:** Grid
**Usage:** Use mds-grid-cols-5 class to define a grid with 5 columns. The default number of columns is 12, but you can override it using this class. The class is independent of the breakpoint, so when applied, the column layout will be the same for all breakpoints.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-grid-cols-5">
Grid will have 5 number of columns in all breakpoints.
</div>
</div>
```

### `mds-grid-cols-6`

**Category:** Grid
**Usage:** Use mds-grid-cols-6 class to define a grid with 6 columns. The default number of columns is 12, but you can override it using this class. The class is independent of the breakpoint, so when applied, the column layout will be the same for all breakpoints.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-grid-cols-6">
Grid will have 6 number of columns in all breakpoints.
</div>
</div>
```

### `mds-grid-cols-7`

**Category:** Grid
**Usage:** Use mds-grid-cols-7 class to define a grid with 7 columns. The default number of columns is 12, but you can override it using this class. The class is independent of the breakpoint, so when applied, the column layout will be the same for all breakpoints.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-grid-cols-7">
Grid will have 7 number of columns in all breakpoints.
</div>
</div>
```

### `mds-grid-cols-8`

**Category:** Grid
**Usage:** Use mds-grid-cols-8 class to define a grid with 8 columns. The default number of columns is 12, but you can override it using this class. The class is independent of the breakpoint, so when applied, the column layout will be the same for all breakpoints.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-grid-cols-8">
Grid will have 8 number of columns in all breakpoints.
</div>
</div>
```

### `mds-grid-cols-9`

**Category:** Grid
**Usage:** Use mds-grid-cols-9 class to define a grid with 9 columns. The default number of columns is 12, but you can override it using this class. The class is independent of the breakpoint, so when applied, the column layout will be the same for all breakpoints.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-grid-cols-9">
Grid will have 9 number of columns in all breakpoints.
</div>
</div>
```

### `mds-grid-cols-10`

**Category:** Grid
**Usage:** Use mds-grid-cols-10 class to define a grid with 10 columns. The default number of columns is 12, but you can override it using this class. The class is independent of the breakpoint, so when applied, the column layout will be the same for all breakpoints.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-grid-cols-10">
Grid will have 10 number of columns in all breakpoints.
</div>
</div>
```

### `mds-grid-cols-11`

**Category:** Grid
**Usage:** Use mds-grid-cols-11 class to define a grid with 11 columns. The default number of columns is 12, but you can override it using this class. The class is independent of the breakpoint, so when applied, the column layout will be the same for all breakpoints.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-grid-cols-11">
Grid will have 11 number of columns in all breakpoints.
</div>
</div>
```

### `mds-grid-cols-12`

**Category:** Grid
**Usage:** Use mds-grid-cols-12 class to define a grid with 12 columns. The default number of columns is 12, but you can override it using this class. The class is independent of the breakpoint, so when applied, the column layout will be the same for all breakpoints.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-grid-cols-12">
Grid will have 12 number of columns in all breakpoints.
</div>
</div>
```

### `mds-grid-rows-1`

**Category:** Grid
**Usage:** Use mds-grid-rows-1 class to define a grid with 1 rows. The default number of rows is 1, but you can override it using this class. The class is independent of the breakpoint, so when applied, the row layout will be the same for all breakpoints.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-grid-rows-1">
Grid will have 1 number of rows in all breakpoints.
</div>
</div>
```

### `mds-grid-rows-2`

**Category:** Grid
**Usage:** Use mds-grid-rows-2 class to define a grid with 2 rows. The default number of rows is 1, but you can override it using this class. The class is independent of the breakpoint, so when applied, the row layout will be the same for all breakpoints.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-grid-rows-2">
Grid will have 2 number of rows in all breakpoints.
</div>
</div>
```

### `mds-grid-rows-3`

**Category:** Grid
**Usage:** Use mds-grid-rows-3 class to define a grid with 3 rows. The default number of rows is 1, but you can override it using this class. The class is independent of the breakpoint, so when applied, the row layout will be the same for all breakpoints.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-grid-rows-3">
Grid will have 3 number of rows in all breakpoints.
</div>
</div>
```

### `mds-grid-rows-4`

**Category:** Grid
**Usage:** Use mds-grid-rows-4 class to define a grid with 4 rows. The default number of rows is 1, but you can override it using this class. The class is independent of the breakpoint, so when applied, the row layout will be the same for all breakpoints.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-grid-rows-4">
Grid will have 4 number of rows in all breakpoints.
</div>
</div>
```

### `mds-grid-rows-5`

**Category:** Grid
**Usage:** Use mds-grid-rows-5 class to define a grid with 5 rows. The default number of rows is 1, but you can override it using this class. The class is independent of the breakpoint, so when applied, the row layout will be the same for all breakpoints.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-grid-rows-5">
Grid will have 5 number of rows in all breakpoints.
</div>
</div>
```

### `mds-grid-rows-6`

**Category:** Grid
**Usage:** Use mds-grid-rows-6 class to define a grid with 6 rows. The default number of rows is 1, but you can override it using this class. The class is independent of the breakpoint, so when applied, the row layout will be the same for all breakpoints.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-grid-rows-6">
Grid will have 6 number of rows in all breakpoints.
</div>
</div>
```

### `mds-grid-rows-7`

**Category:** Grid
**Usage:** Use mds-grid-rows-7 class to define a grid with 7 rows. The default number of rows is 1, but you can override it using this class. The class is independent of the breakpoint, so when applied, the row layout will be the same for all breakpoints.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-grid-rows-7">
Grid will have 7 number of rows in all breakpoints.
</div>
</div>
```

### `mds-grid-rows-8`

**Category:** Grid
**Usage:** Use mds-grid-rows-8 class to define a grid with 8 rows. The default number of rows is 1, but you can override it using this class. The class is independent of the breakpoint, so when applied, the row layout will be the same for all breakpoints.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-grid-rows-8">
Grid will have 8 number of rows in all breakpoints.
</div>
</div>
```

### `mds-grid-rows-9`

**Category:** Grid
**Usage:** Use mds-grid-rows-9 class to define a grid with 9 rows. The default number of rows is 1, but you can override it using this class. The class is independent of the breakpoint, so when applied, the row layout will be the same for all breakpoints.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-grid-rows-9">
Grid will have 9 number of rows in all breakpoints.
</div>
</div>
```

### `mds-grid-rows-10`

**Category:** Grid
**Usage:** Use mds-grid-rows-10 class to define a grid with 10 rows. The default number of rows is 1, but you can override it using this class. The class is independent of the breakpoint, so when applied, the row layout will be the same for all breakpoints.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-grid-rows-10">
Grid will have 10 number of rows in all breakpoints.
</div>
</div>
```

### `mds-grid-rows-11`

**Category:** Grid
**Usage:** Use mds-grid-rows-11 class to define a grid with 11 rows. The default number of rows is 1, but you can override it using this class. The class is independent of the breakpoint, so when applied, the row layout will be the same for all breakpoints.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-grid-rows-11">
Grid will have 11 number of rows in all breakpoints.
</div>
</div>
```

### `mds-grid-rows-12`

**Category:** Grid
**Usage:** Use mds-grid-rows-12 class to define a grid with 12 rows. The default number of rows is 1, but you can override it using this class. The class is independent of the breakpoint, so when applied, the row layout will be the same for all breakpoints.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-grid-rows-12">
Grid will have 12 number of rows in all breakpoints.
</div>
</div>
```

### `mds-grid-rows-13`

**Category:** Grid
**Usage:** Use mds-grid-rows-13 class to define a grid with 13 rows. The default number of rows is 1, but you can override it using this class. The class is independent of the breakpoint, so when applied, the row layout will be the same for all breakpoints.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-grid-rows-13">
Grid will have 13 number of rows in all breakpoints.
</div>
</div>
```

### `mds-grid-rows-14`

**Category:** Grid
**Usage:** Use mds-grid-rows-14 class to define a grid with 14 rows. The default number of rows is 1, but you can override it using this class. The class is independent of the breakpoint, so when applied, the row layout will be the same for all breakpoints.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-grid-rows-14">
Grid will have 14 number of rows in all breakpoints.
</div>
</div>
```

### `mds-grid-rows-15`

**Category:** Grid
**Usage:** Use mds-grid-rows-15 class to define a grid with 15 rows. The default number of rows is 1, but you can override it using this class. The class is independent of the breakpoint, so when applied, the row layout will be the same for all breakpoints.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-grid-rows-15">
Grid will have 15 number of rows in all breakpoints.
</div>
</div>
```

### `mds-grid-rows-16`

**Category:** Grid
**Usage:** Use mds-grid-rows-16 class to define a grid with 16 rows. The default number of rows is 1, but you can override it using this class. The class is independent of the breakpoint, so when applied, the row layout will be the same for all breakpoints.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-grid-rows-16">
Grid will have 16 number of rows in all breakpoints.
</div>
</div>
```

### `mds-grid-rows-17`

**Category:** Grid
**Usage:** Use mds-grid-rows-17 class to define a grid with 17 rows. The default number of rows is 1, but you can override it using this class. The class is independent of the breakpoint, so when applied, the row layout will be the same for all breakpoints.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-grid-rows-17">
Grid will have 17 number of rows in all breakpoints.
</div>
</div>
```

### `mds-grid-rows-18`

**Category:** Grid
**Usage:** Use mds-grid-rows-18 class to define a grid with 18 rows. The default number of rows is 1, but you can override it using this class. The class is independent of the breakpoint, so when applied, the row layout will be the same for all breakpoints.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-grid-rows-18">
Grid will have 18 number of rows in all breakpoints.
</div>
</div>
```

### `mds-grid-rows-19`

**Category:** Grid
**Usage:** Use mds-grid-rows-19 class to define a grid with 19 rows. The default number of rows is 1, but you can override it using this class. The class is independent of the breakpoint, so when applied, the row layout will be the same for all breakpoints.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-grid-rows-19">
Grid will have 19 number of rows in all breakpoints.
</div>
</div>
```

### `mds-grid-rows-20`

**Category:** Grid
**Usage:** Use mds-grid-rows-20 class to define a grid with 20 rows. The default number of rows is 1, but you can override it using this class. The class is independent of the breakpoint, so when applied, the row layout will be the same for all breakpoints.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-grid-rows-20">
Grid will have 20 number of rows in all breakpoints.
</div>
</div>
```

### `mds-grid-rows-21`

**Category:** Grid
**Usage:** Use mds-grid-rows-21 class to define a grid with 21 rows. The default number of rows is 1, but you can override it using this class. The class is independent of the breakpoint, so when applied, the row layout will be the same for all breakpoints.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-grid-rows-21">
Grid will have 21 number of rows in all breakpoints.
</div>
</div>
```

### `mds-grid-rows-22`

**Category:** Grid
**Usage:** Use mds-grid-rows-22 class to define a grid with 22 rows. The default number of rows is 1, but you can override it using this class. The class is independent of the breakpoint, so when applied, the row layout will be the same for all breakpoints.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-grid-rows-22">
Grid will have 22 number of rows in all breakpoints.
</div>
</div>
```

### `mds-grid-rows-23`

**Category:** Grid
**Usage:** Use mds-grid-rows-23 class to define a grid with 23 rows. The default number of rows is 1, but you can override it using this class. The class is independent of the breakpoint, so when applied, the row layout will be the same for all breakpoints.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-grid-rows-23">
Grid will have 23 number of rows in all breakpoints.
</div>
</div>
```

### `mds-grid-rows-24`

**Category:** Grid
**Usage:** Use mds-grid-rows-24 class to define a grid with 24 rows. The default number of rows is 1, but you can override it using this class. The class is independent of the breakpoint, so when applied, the row layout will be the same for all breakpoints.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-grid-rows-24">
Grid will have 24 number of rows in all breakpoints.
</div>
</div>
```

