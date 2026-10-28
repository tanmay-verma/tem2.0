# gap

## Overview

 
 
The MDS offers a collection of gap utility classes that can be used to control the spacing between elements in a mds grid or mds flex layout. These classes allow you to easily apply consistent spacing throughout your application.

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
@use url("@maersk-global/mds-foundations/sass/_gap.scss") as *;
```

### Examples

#### Basic

```html
<div class="mds-container">
  <div class="mds-grid mds-gap-200">
    <div class="box">1</div>
    <div class="box">2</div>
    <div class="box">3</div>
  </div>
  <div class="mds-flex mds-gap-200">
    <div class="box">1</div>
    <div class="box">2</div>
    <div class="box">3</div>
  </div>
</div>
```

## API / CSS classes

### `mds-gap-50, mds-xs-gap-50, mds-sm-gap-50, mds-md-gap-50, mds-lg-gap-50, mds-xl-gap-50`

**Category:** Gap
**Usage:** Use mds-gap-50 class to apply gap of 2px between columns and rows in a grid or flex box that is the same in all breakpoints. Use mds-xs-gap-50, mds-sm-gap-50, mds-md-gap-50, mds-lg-gap-50, mds-xl-gap-50 classes to apply gap of 2px between columns and rows in a grid or flex box that is specific to the breakpoint.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-gap-50">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
<div class="mds-flex mds-gap-50">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
</div>
```

### `mds-col-gap-50, mds-xs-col-gap-50, mds-sm-col-gap-50, mds-md-col-gap-50, mds-lg-col-gap-50, mds-xl-col-gap-50`

**Category:** Gap
**Usage:** Use mds-col-gap-50 class to apply a gap of 2px between columns in a grid or flex box. Use mds-xs-col-gap-50, mds-sm-col-gap-50, mds-md-col-gap-50, mds-lg-col-gap-50, mds-xl-col-gap-50 classes to apply gap of 2px between columns in a grid or flex box that is specific to the breakpoint.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-col-gap-50">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
<div class="mds-flex mds-col-gap-50">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
</div>
```

### `mds-row-gap-50, mds-xs-row-gap-50, mds-sm-row-gap-50, mds-md-row-gap-50, mds-lg-row-gap-50, mds-xl-row-gap-50`

**Category:** Gap
**Usage:** Use mds-row-gap-50 class to apply a gap of 2px between rows in a grid or flex box. Use mds-xs-row-gap-50, mds-sm-row-gap-50, mds-md-row-gap-50, mds-lg-row-gap-50, mds-xl-row-gap-50 classes to apply gap of 2px between columns in a grid or flex box that is specific to the breakpoint.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-row-gap-50">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
<div class="mds-flex mds-row-gap-50">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
</div>
```

### `mds-gap-100, mds-xs-gap-100, mds-sm-gap-100, mds-md-gap-100, mds-lg-gap-100, mds-xl-gap-100`

**Category:** Gap
**Usage:** Use mds-gap-100 class to apply gap of 4px between columns and rows in a grid or flex box that is the same in all breakpoints. Use mds-xs-gap-100, mds-sm-gap-100, mds-md-gap-100, mds-lg-gap-100, mds-xl-gap-100 classes to apply gap of 2px between columns and rows in a grid or flex box that is specific to the breakpoint.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-gap-100">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
<div class="mds-flex mds-gap-100">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
</div>
```

### `mds-col-gap-100, mds-xs-col-gap-100, mds-sm-col-gap-100, mds-md-col-gap-100, mds-lg-col-gap-100, mds-xl-col-gap-100`

**Category:** Gap
**Usage:** Use mds-col-gap-100 class to apply a gap of 4px between columns in a grid or flex box. Use mds-xs-col-gap-100, mds-sm-col-gap-100, mds-md-col-gap-100, mds-lg-col-gap-100, mds-xl-col-gap-100 classes to apply gap of 2px between columns in a grid or flex box that is specific to the breakpoint.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-col-gap-100">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
<div class="mds-flex mds-col-gap-100">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
</div>
```

### `mds-row-gap-100, mds-xs-row-gap-100, mds-sm-row-gap-100, mds-md-row-gap-100, mds-lg-row-gap-100, mds-xl-row-gap-100`

**Category:** Gap
**Usage:** Use mds-row-gap-100 class to apply a gap of 4px between rows in a grid or flex box. Use mds-xs-row-gap-100, mds-sm-row-gap-100, mds-md-row-gap-100, mds-lg-row-gap-100, mds-xl-row-gap-100 classes to apply gap of 2px between columns in a grid or flex box that is specific to the breakpoint.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-row-gap-100">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
<div class="mds-flex mds-row-gap-100">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
</div>
```

### `mds-gap-150, mds-xs-gap-150, mds-sm-gap-150, mds-md-gap-150, mds-lg-gap-150, mds-xl-gap-150`

**Category:** Gap
**Usage:** Use mds-gap-150 class to apply gap of 6px between columns and rows in a grid or flex box that is the same in all breakpoints. Use mds-xs-gap-150, mds-sm-gap-150, mds-md-gap-150, mds-lg-gap-150, mds-xl-gap-150 classes to apply gap of 2px between columns and rows in a grid or flex box that is specific to the breakpoint.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-gap-150">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
<div class="mds-flex mds-gap-150">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
</div>
```

### `mds-col-gap-150, mds-xs-col-gap-150, mds-sm-col-gap-150, mds-md-col-gap-150, mds-lg-col-gap-150, mds-xl-col-gap-150`

**Category:** Gap
**Usage:** Use mds-col-gap-150 class to apply a gap of 6px between columns in a grid or flex box. Use mds-xs-col-gap-150, mds-sm-col-gap-150, mds-md-col-gap-150, mds-lg-col-gap-150, mds-xl-col-gap-150 classes to apply gap of 2px between columns in a grid or flex box that is specific to the breakpoint.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-col-gap-150">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
<div class="mds-flex mds-col-gap-150">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
</div>
```

### `mds-row-gap-150, mds-xs-row-gap-150, mds-sm-row-gap-150, mds-md-row-gap-150, mds-lg-row-gap-150, mds-xl-row-gap-150`

**Category:** Gap
**Usage:** Use mds-row-gap-150 class to apply a gap of 6px between rows in a grid or flex box. Use mds-xs-row-gap-150, mds-sm-row-gap-150, mds-md-row-gap-150, mds-lg-row-gap-150, mds-xl-row-gap-150 classes to apply gap of 2px between columns in a grid or flex box that is specific to the breakpoint.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-row-gap-150">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
<div class="mds-flex mds-row-gap-150">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
</div>
```

### `mds-gap-200, mds-xs-gap-200, mds-sm-gap-200, mds-md-gap-200, mds-lg-gap-200, mds-xl-gap-200`

**Category:** Gap
**Usage:** Use mds-gap-200 class to apply gap of 8px between columns and rows in a grid or flex box that is the same in all breakpoints. Use mds-xs-gap-200, mds-sm-gap-200, mds-md-gap-200, mds-lg-gap-200, mds-xl-gap-200 classes to apply gap of 2px between columns and rows in a grid or flex box that is specific to the breakpoint.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-gap-200">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
<div class="mds-flex mds-gap-200">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
</div>
```

### `mds-col-gap-200, mds-xs-col-gap-200, mds-sm-col-gap-200, mds-md-col-gap-200, mds-lg-col-gap-200, mds-xl-col-gap-200`

**Category:** Gap
**Usage:** Use mds-col-gap-200 class to apply a gap of 8px between columns in a grid or flex box. Use mds-xs-col-gap-200, mds-sm-col-gap-200, mds-md-col-gap-200, mds-lg-col-gap-200, mds-xl-col-gap-200 classes to apply gap of 2px between columns in a grid or flex box that is specific to the breakpoint.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-col-gap-200">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
<div class="mds-flex mds-col-gap-200">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
</div>
```

### `mds-row-gap-200, mds-xs-row-gap-200, mds-sm-row-gap-200, mds-md-row-gap-200, mds-lg-row-gap-200, mds-xl-row-gap-200`

**Category:** Gap
**Usage:** Use mds-row-gap-200 class to apply a gap of 8px between rows in a grid or flex box. Use mds-xs-row-gap-200, mds-sm-row-gap-200, mds-md-row-gap-200, mds-lg-row-gap-200, mds-xl-row-gap-200 classes to apply gap of 2px between columns in a grid or flex box that is specific to the breakpoint.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-row-gap-200">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
<div class="mds-flex mds-row-gap-200">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
</div>
```

### `mds-gap-300, mds-xs-gap-300, mds-sm-gap-300, mds-md-gap-300, mds-lg-gap-300, mds-xl-gap-300`

**Category:** Gap
**Usage:** Use mds-gap-300 class to apply gap of 12px between columns and rows in a grid or flex box that is the same in all breakpoints. Use mds-xs-gap-300, mds-sm-gap-300, mds-md-gap-300, mds-lg-gap-300, mds-xl-gap-300 classes to apply gap of 2px between columns and rows in a grid or flex box that is specific to the breakpoint.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-gap-300">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
<div class="mds-flex mds-gap-300">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
</div>
```

### `mds-col-gap-300, mds-xs-col-gap-300, mds-sm-col-gap-300, mds-md-col-gap-300, mds-lg-col-gap-300, mds-xl-col-gap-300`

**Category:** Gap
**Usage:** Use mds-col-gap-300 class to apply a gap of 12px between columns in a grid or flex box. Use mds-xs-col-gap-300, mds-sm-col-gap-300, mds-md-col-gap-300, mds-lg-col-gap-300, mds-xl-col-gap-300 classes to apply gap of 2px between columns in a grid or flex box that is specific to the breakpoint.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-col-gap-300">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
<div class="mds-flex mds-col-gap-300">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
</div>
```

### `mds-row-gap-300, mds-xs-row-gap-300, mds-sm-row-gap-300, mds-md-row-gap-300, mds-lg-row-gap-300, mds-xl-row-gap-300`

**Category:** Gap
**Usage:** Use mds-row-gap-300 class to apply a gap of 12px between rows in a grid or flex box. Use mds-xs-row-gap-300, mds-sm-row-gap-300, mds-md-row-gap-300, mds-lg-row-gap-300, mds-xl-row-gap-300 classes to apply gap of 2px between columns in a grid or flex box that is specific to the breakpoint.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-row-gap-300">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
<div class="mds-flex mds-row-gap-300">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
</div>
```

### `mds-gap-400, mds-xs-gap-400, mds-sm-gap-400, mds-md-gap-400, mds-lg-gap-400, mds-xl-gap-400`

**Category:** Gap
**Usage:** Use mds-gap-400 class to apply gap of 16px between columns and rows in a grid or flex box that is the same in all breakpoints. Use mds-xs-gap-400, mds-sm-gap-400, mds-md-gap-400, mds-lg-gap-400, mds-xl-gap-400 classes to apply gap of 2px between columns and rows in a grid or flex box that is specific to the breakpoint.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-gap-400">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
<div class="mds-flex mds-gap-400">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
</div>
```

### `mds-col-gap-400, mds-xs-col-gap-400, mds-sm-col-gap-400, mds-md-col-gap-400, mds-lg-col-gap-400, mds-xl-col-gap-400`

**Category:** Gap
**Usage:** Use mds-col-gap-400 class to apply a gap of 16px between columns in a grid or flex box. Use mds-xs-col-gap-400, mds-sm-col-gap-400, mds-md-col-gap-400, mds-lg-col-gap-400, mds-xl-col-gap-400 classes to apply gap of 2px between columns in a grid or flex box that is specific to the breakpoint.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-col-gap-400">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
<div class="mds-flex mds-col-gap-400">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
</div>
```

### `mds-row-gap-400, mds-xs-row-gap-400, mds-sm-row-gap-400, mds-md-row-gap-400, mds-lg-row-gap-400, mds-xl-row-gap-400`

**Category:** Gap
**Usage:** Use mds-row-gap-400 class to apply a gap of 16px between rows in a grid or flex box. Use mds-xs-row-gap-400, mds-sm-row-gap-400, mds-md-row-gap-400, mds-lg-row-gap-400, mds-xl-row-gap-400 classes to apply gap of 2px between columns in a grid or flex box that is specific to the breakpoint.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-row-gap-400">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
<div class="mds-flex mds-row-gap-400">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
</div>
```

### `mds-gap-500, mds-xs-gap-500, mds-sm-gap-500, mds-md-gap-500, mds-lg-gap-500, mds-xl-gap-500`

**Category:** Gap
**Usage:** Use mds-gap-500 class to apply gap of 20px between columns and rows in a grid or flex box that is the same in all breakpoints. Use mds-xs-gap-500, mds-sm-gap-500, mds-md-gap-500, mds-lg-gap-500, mds-xl-gap-500 classes to apply gap of 2px between columns and rows in a grid or flex box that is specific to the breakpoint.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-gap-500">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
<div class="mds-flex mds-gap-500">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
</div>
```

### `mds-col-gap-500, mds-xs-col-gap-500, mds-sm-col-gap-500, mds-md-col-gap-500, mds-lg-col-gap-500, mds-xl-col-gap-500`

**Category:** Gap
**Usage:** Use mds-col-gap-500 class to apply a gap of 20px between columns in a grid or flex box. Use mds-xs-col-gap-500, mds-sm-col-gap-500, mds-md-col-gap-500, mds-lg-col-gap-500, mds-xl-col-gap-500 classes to apply gap of 2px between columns in a grid or flex box that is specific to the breakpoint.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-col-gap-500">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
<div class="mds-flex mds-col-gap-500">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
</div>
```

### `mds-row-gap-500, mds-xs-row-gap-500, mds-sm-row-gap-500, mds-md-row-gap-500, mds-lg-row-gap-500, mds-xl-row-gap-500`

**Category:** Gap
**Usage:** Use mds-row-gap-500 class to apply a gap of 20px between rows in a grid or flex box. Use mds-xs-row-gap-500, mds-sm-row-gap-500, mds-md-row-gap-500, mds-lg-row-gap-500, mds-xl-row-gap-500 classes to apply gap of 2px between columns in a grid or flex box that is specific to the breakpoint.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-row-gap-500">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
<div class="mds-flex mds-row-gap-500">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
</div>
```

### `mds-gap-600, mds-xs-gap-600, mds-sm-gap-600, mds-md-gap-600, mds-lg-gap-600, mds-xl-gap-600`

**Category:** Gap
**Usage:** Use mds-gap-600 class to apply gap of 24px between columns and rows in a grid or flex box that is the same in all breakpoints. Use mds-xs-gap-600, mds-sm-gap-600, mds-md-gap-600, mds-lg-gap-600, mds-xl-gap-600 classes to apply gap of 2px between columns and rows in a grid or flex box that is specific to the breakpoint.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-gap-600">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
<div class="mds-flex mds-gap-600">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
</div>
```

### `mds-col-gap-600, mds-xs-col-gap-600, mds-sm-col-gap-600, mds-md-col-gap-600, mds-lg-col-gap-600, mds-xl-col-gap-600`

**Category:** Gap
**Usage:** Use mds-col-gap-600 class to apply a gap of 24px between columns in a grid or flex box. Use mds-xs-col-gap-600, mds-sm-col-gap-600, mds-md-col-gap-600, mds-lg-col-gap-600, mds-xl-col-gap-600 classes to apply gap of 2px between columns in a grid or flex box that is specific to the breakpoint.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-col-gap-600">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
<div class="mds-flex mds-col-gap-600">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
</div>
```

### `mds-row-gap-600, mds-xs-row-gap-600, mds-sm-row-gap-600, mds-md-row-gap-600, mds-lg-row-gap-600, mds-xl-row-gap-600`

**Category:** Gap
**Usage:** Use mds-row-gap-600 class to apply a gap of 24px between rows in a grid or flex box. Use mds-xs-row-gap-600, mds-sm-row-gap-600, mds-md-row-gap-600, mds-lg-row-gap-600, mds-xl-row-gap-600 classes to apply gap of 2px between columns in a grid or flex box that is specific to the breakpoint.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-row-gap-600">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
<div class="mds-flex mds-row-gap-600">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
</div>
```

### `mds-gap-700, mds-xs-gap-700, mds-sm-gap-700, mds-md-gap-700, mds-lg-gap-700, mds-xl-gap-700`

**Category:** Gap
**Usage:** Use mds-gap-700 class to apply gap of 28px between columns and rows in a grid or flex box that is the same in all breakpoints. Use mds-xs-gap-700, mds-sm-gap-700, mds-md-gap-700, mds-lg-gap-700, mds-xl-gap-700 classes to apply gap of 2px between columns and rows in a grid or flex box that is specific to the breakpoint.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-gap-700">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
<div class="mds-flex mds-gap-700">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
</div>
```

### `mds-col-gap-700, mds-xs-col-gap-700, mds-sm-col-gap-700, mds-md-col-gap-700, mds-lg-col-gap-700, mds-xl-col-gap-700`

**Category:** Gap
**Usage:** Use mds-col-gap-700 class to apply a gap of 28px between columns in a grid or flex box. Use mds-xs-col-gap-700, mds-sm-col-gap-700, mds-md-col-gap-700, mds-lg-col-gap-700, mds-xl-col-gap-700 classes to apply gap of 2px between columns in a grid or flex box that is specific to the breakpoint.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-col-gap-700">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
<div class="mds-flex mds-col-gap-700">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
</div>
```

### `mds-row-gap-700, mds-xs-row-gap-700, mds-sm-row-gap-700, mds-md-row-gap-700, mds-lg-row-gap-700, mds-xl-row-gap-700`

**Category:** Gap
**Usage:** Use mds-row-gap-700 class to apply a gap of 28px between rows in a grid or flex box. Use mds-xs-row-gap-700, mds-sm-row-gap-700, mds-md-row-gap-700, mds-lg-row-gap-700, mds-xl-row-gap-700 classes to apply gap of 2px between columns in a grid or flex box that is specific to the breakpoint.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-row-gap-700">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
<div class="mds-flex mds-row-gap-700">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
</div>
```

### `mds-gap-800, mds-xs-gap-800, mds-sm-gap-800, mds-md-gap-800, mds-lg-gap-800, mds-xl-gap-800`

**Category:** Gap
**Usage:** Use mds-gap-800 class to apply gap of 32px between columns and rows in a grid or flex box that is the same in all breakpoints. Use mds-xs-gap-800, mds-sm-gap-800, mds-md-gap-800, mds-lg-gap-800, mds-xl-gap-800 classes to apply gap of 2px between columns and rows in a grid or flex box that is specific to the breakpoint.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-gap-800">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
<div class="mds-flex mds-gap-800">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
</div>
```

### `mds-col-gap-800, mds-xs-col-gap-800, mds-sm-col-gap-800, mds-md-col-gap-800, mds-lg-col-gap-800, mds-xl-col-gap-800`

**Category:** Gap
**Usage:** Use mds-col-gap-800 class to apply a gap of 32px between columns in a grid or flex box. Use mds-xs-col-gap-800, mds-sm-col-gap-800, mds-md-col-gap-800, mds-lg-col-gap-800, mds-xl-col-gap-800 classes to apply gap of 2px between columns in a grid or flex box that is specific to the breakpoint.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-col-gap-800">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
<div class="mds-flex mds-col-gap-800">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
</div>
```

### `mds-row-gap-800, mds-xs-row-gap-800, mds-sm-row-gap-800, mds-md-row-gap-800, mds-lg-row-gap-800, mds-xl-row-gap-800`

**Category:** Gap
**Usage:** Use mds-row-gap-800 class to apply a gap of 32px between rows in a grid or flex box. Use mds-xs-row-gap-800, mds-sm-row-gap-800, mds-md-row-gap-800, mds-lg-row-gap-800, mds-xl-row-gap-800 classes to apply gap of 2px between columns in a grid or flex box that is specific to the breakpoint.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-row-gap-800">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
<div class="mds-flex mds-row-gap-800">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
</div>
```

### `mds-gap-900, mds-xs-gap-900, mds-sm-gap-900, mds-md-gap-900, mds-lg-gap-900, mds-xl-gap-900`

**Category:** Gap
**Usage:** Use mds-gap-900 class to apply gap of 36px between columns and rows in a grid or flex box that is the same in all breakpoints. Use mds-xs-gap-900, mds-sm-gap-900, mds-md-gap-900, mds-lg-gap-900, mds-xl-gap-900 classes to apply gap of 2px between columns and rows in a grid or flex box that is specific to the breakpoint.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-gap-900">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
<div class="mds-flex mds-gap-900">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
</div>
```

### `mds-col-gap-900, mds-xs-col-gap-900, mds-sm-col-gap-900, mds-md-col-gap-900, mds-lg-col-gap-900, mds-xl-col-gap-900`

**Category:** Gap
**Usage:** Use mds-col-gap-900 class to apply a gap of 36px between columns in a grid or flex box. Use mds-xs-col-gap-900, mds-sm-col-gap-900, mds-md-col-gap-900, mds-lg-col-gap-900, mds-xl-col-gap-900 classes to apply gap of 2px between columns in a grid or flex box that is specific to the breakpoint.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-col-gap-900">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
<div class="mds-flex mds-col-gap-900">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
</div>
```

### `mds-row-gap-900, mds-xs-row-gap-900, mds-sm-row-gap-900, mds-md-row-gap-900, mds-lg-row-gap-900, mds-xl-row-gap-900`

**Category:** Gap
**Usage:** Use mds-row-gap-900 class to apply a gap of 36px between rows in a grid or flex box. Use mds-xs-row-gap-900, mds-sm-row-gap-900, mds-md-row-gap-900, mds-lg-row-gap-900, mds-xl-row-gap-900 classes to apply gap of 2px between columns in a grid or flex box that is specific to the breakpoint.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-row-gap-900">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
<div class="mds-flex mds-row-gap-900">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
</div>
```

### `mds-gap-1000, mds-xs-gap-1000, mds-sm-gap-1000, mds-md-gap-1000, mds-lg-gap-1000, mds-xl-gap-1000`

**Category:** Gap
**Usage:** Use mds-gap-1000 class to apply gap of 40px between columns and rows in a grid or flex box that is the same in all breakpoints. Use mds-xs-gap-1000, mds-sm-gap-1000, mds-md-gap-1000, mds-lg-gap-1000, mds-xl-gap-1000 classes to apply gap of 2px between columns and rows in a grid or flex box that is specific to the breakpoint.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-gap-1000">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
<div class="mds-flex mds-gap-1000">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
</div>
```

### `mds-col-gap-1000, mds-xs-col-gap-1000, mds-sm-col-gap-1000, mds-md-col-gap-1000, mds-lg-col-gap-1000, mds-xl-col-gap-1000`

**Category:** Gap
**Usage:** Use mds-col-gap-1000 class to apply a gap of 40px between columns in a grid or flex box. Use mds-xs-col-gap-1000, mds-sm-col-gap-1000, mds-md-col-gap-1000, mds-lg-col-gap-1000, mds-xl-col-gap-1000 classes to apply gap of 2px between columns in a grid or flex box that is specific to the breakpoint.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-col-gap-1000">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
<div class="mds-flex mds-col-gap-1000">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
</div>
```

### `mds-row-gap-1000, mds-xs-row-gap-1000, mds-sm-row-gap-1000, mds-md-row-gap-1000, mds-lg-row-gap-1000, mds-xl-row-gap-1000`

**Category:** Gap
**Usage:** Use mds-row-gap-1000 class to apply a gap of 40px between rows in a grid or flex box. Use mds-xs-row-gap-1000, mds-sm-row-gap-1000, mds-md-row-gap-1000, mds-lg-row-gap-1000, mds-xl-row-gap-1000 classes to apply gap of 2px between columns in a grid or flex box that is specific to the breakpoint.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-row-gap-1000">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
<div class="mds-flex mds-row-gap-1000">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
</div>
```

### `mds-gap-1200, mds-xs-gap-1200, mds-sm-gap-1200, mds-md-gap-1200, mds-lg-gap-1200, mds-xl-gap-1200`

**Category:** Gap
**Usage:** Use mds-gap-1200 class to apply gap of 48px between columns and rows in a grid or flex box that is the same in all breakpoints. Use mds-xs-gap-1200, mds-sm-gap-1200, mds-md-gap-1200, mds-lg-gap-1200, mds-xl-gap-1200 classes to apply gap of 2px between columns and rows in a grid or flex box that is specific to the breakpoint.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-gap-1200">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
<div class="mds-flex mds-gap-1200">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
</div>
```

### `mds-col-gap-1200, mds-xs-col-gap-1200, mds-sm-col-gap-1200, mds-md-col-gap-1200, mds-lg-col-gap-1200, mds-xl-col-gap-1200`

**Category:** Gap
**Usage:** Use mds-col-gap-1200 class to apply a gap of 48px between columns in a grid or flex box. Use mds-xs-col-gap-1200, mds-sm-col-gap-1200, mds-md-col-gap-1200, mds-lg-col-gap-1200, mds-xl-col-gap-1200 classes to apply gap of 2px between columns in a grid or flex box that is specific to the breakpoint.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-col-gap-1200">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
<div class="mds-flex mds-col-gap-1200">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
</div>
```

### `mds-row-gap-1200, mds-xs-row-gap-1200, mds-sm-row-gap-1200, mds-md-row-gap-1200, mds-lg-row-gap-1200, mds-xl-row-gap-1200`

**Category:** Gap
**Usage:** Use mds-row-gap-1200 class to apply a gap of 48px between rows in a grid or flex box. Use mds-xs-row-gap-1200, mds-sm-row-gap-1200, mds-md-row-gap-1200, mds-lg-row-gap-1200, mds-xl-row-gap-1200 classes to apply gap of 2px between columns in a grid or flex box that is specific to the breakpoint.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-row-gap-1200">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
<div class="mds-flex mds-row-gap-1200">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
</div>
```

### `mds-gap-1600, mds-xs-gap-1600, mds-sm-gap-1600, mds-md-gap-1600, mds-lg-gap-1600, mds-xl-gap-1600`

**Category:** Gap
**Usage:** Use mds-gap-1600 class to apply gap of 64px between columns and rows in a grid or flex box that is the same in all breakpoints. Use mds-xs-gap-1600, mds-sm-gap-1600, mds-md-gap-1600, mds-lg-gap-1600, mds-xl-gap-1600 classes to apply gap of 2px between columns and rows in a grid or flex box that is specific to the breakpoint.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-gap-1600">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
<div class="mds-flex mds-gap-1600">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
</div>
```

### `mds-col-gap-1600, mds-xs-col-gap-1600, mds-sm-col-gap-1600, mds-md-col-gap-1600, mds-lg-col-gap-1600, mds-xl-col-gap-1600`

**Category:** Gap
**Usage:** Use mds-col-gap-1600 class to apply a gap of 64px between columns in a grid or flex box. Use mds-xs-col-gap-1600, mds-sm-col-gap-1600, mds-md-col-gap-1600, mds-lg-col-gap-1600, mds-xl-col-gap-1600 classes to apply gap of 2px between columns in a grid or flex box that is specific to the breakpoint.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-col-gap-1600">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
<div class="mds-flex mds-col-gap-1600">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
</div>
```

### `mds-row-gap-1600, mds-xs-row-gap-1600, mds-sm-row-gap-1600, mds-md-row-gap-1600, mds-lg-row-gap-1600, mds-xl-row-gap-1600`

**Category:** Gap
**Usage:** Use mds-row-gap-1600 class to apply a gap of 64px between rows in a grid or flex box. Use mds-xs-row-gap-1600, mds-sm-row-gap-1600, mds-md-row-gap-1600, mds-lg-row-gap-1600, mds-xl-row-gap-1600 classes to apply gap of 2px between columns in a grid or flex box that is specific to the breakpoint.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-row-gap-1600">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
<div class="mds-flex mds-row-gap-1600">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
</div>
```

### `mds-gap-2000, mds-xs-gap-2000, mds-sm-gap-2000, mds-md-gap-2000, mds-lg-gap-2000, mds-xl-gap-2000`

**Category:** Gap
**Usage:** Use mds-gap-2000 class to apply gap of 80px between columns and rows in a grid or flex box that is the same in all breakpoints. Use mds-xs-gap-2000, mds-sm-gap-2000, mds-md-gap-2000, mds-lg-gap-2000, mds-xl-gap-2000 classes to apply gap of 2px between columns and rows in a grid or flex box that is specific to the breakpoint.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-gap-2000">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
<div class="mds-flex mds-gap-2000">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
</div>
```

### `mds-col-gap-2000, mds-xs-col-gap-2000, mds-sm-col-gap-2000, mds-md-col-gap-2000, mds-lg-col-gap-2000, mds-xl-col-gap-2000`

**Category:** Gap
**Usage:** Use mds-col-gap-2000 class to apply a gap of 80px between columns in a grid or flex box. Use mds-xs-col-gap-2000, mds-sm-col-gap-2000, mds-md-col-gap-2000, mds-lg-col-gap-2000, mds-xl-col-gap-2000 classes to apply gap of 2px between columns in a grid or flex box that is specific to the breakpoint.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-col-gap-2000">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
<div class="mds-flex mds-col-gap-2000">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
</div>
```

### `mds-row-gap-2000, mds-xs-row-gap-2000, mds-sm-row-gap-2000, mds-md-row-gap-2000, mds-lg-row-gap-2000, mds-xl-row-gap-2000`

**Category:** Gap
**Usage:** Use mds-row-gap-2000 class to apply a gap of 80px between rows in a grid or flex box. Use mds-xs-row-gap-2000, mds-sm-row-gap-2000, mds-md-row-gap-2000, mds-lg-row-gap-2000, mds-xl-row-gap-2000 classes to apply gap of 2px between columns in a grid or flex box that is specific to the breakpoint.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-row-gap-2000">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
<div class="mds-flex mds-row-gap-2000">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
</div>
```

### `mds-gap-2400, mds-xs-gap-2400, mds-sm-gap-2400, mds-md-gap-2400, mds-lg-gap-2400, mds-xl-gap-2400`

**Category:** Gap
**Usage:** Use mds-gap-2400 class to apply gap of 96px between columns and rows in a grid or flex box that is the same in all breakpoints. Use mds-xs-gap-2400, mds-sm-gap-2400, mds-md-gap-2400, mds-lg-gap-2400, mds-xl-gap-2400 classes to apply gap of 2px between columns and rows in a grid or flex box that is specific to the breakpoint.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-gap-2400">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
<div class="mds-flex mds-gap-2400">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
</div>
```

### `mds-col-gap-2400, mds-xs-col-gap-2400, mds-sm-col-gap-2400, mds-md-col-gap-2400, mds-lg-col-gap-2400, mds-xl-col-gap-2400`

**Category:** Gap
**Usage:** Use mds-col-gap-2400 class to apply a gap of 96px between columns in a grid or flex box. Use mds-xs-col-gap-2400, mds-sm-col-gap-2400, mds-md-col-gap-2400, mds-lg-col-gap-2400, mds-xl-col-gap-2400 classes to apply gap of 2px between columns in a grid or flex box that is specific to the breakpoint.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-col-gap-2400">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
<div class="mds-flex mds-col-gap-2400">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
</div>
```

### `mds-row-gap-2400, mds-xs-row-gap-2400, mds-sm-row-gap-2400, mds-md-row-gap-2400, mds-lg-row-gap-2400, mds-xl-row-gap-2400`

**Category:** Gap
**Usage:** Use mds-row-gap-2400 class to apply a gap of 96px between rows in a grid or flex box. Use mds-xs-row-gap-2400, mds-sm-row-gap-2400, mds-md-row-gap-2400, mds-lg-row-gap-2400, mds-xl-row-gap-2400 classes to apply gap of 2px between columns in a grid or flex box that is specific to the breakpoint.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-row-gap-2400">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
<div class="mds-flex mds-row-gap-2400">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
</div>
```

### `mds-gap-2800, mds-xs-gap-2800, mds-sm-gap-2800, mds-md-gap-2800, mds-lg-gap-2800, mds-xl-gap-2800`

**Category:** Gap
**Usage:** Use mds-gap-2800 class to apply gap of 112px between columns and rows in a grid or flex box that is the same in all breakpoints. Use mds-xs-gap-2800, mds-sm-gap-2800, mds-md-gap-2800, mds-lg-gap-2800, mds-xl-gap-2800 classes to apply gap of 2px between columns and rows in a grid or flex box that is specific to the breakpoint.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-gap-2800">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
<div class="mds-flex mds-gap-2800">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
</div>
```

### `mds-col-gap-2800, mds-xs-col-gap-2800, mds-sm-col-gap-2800, mds-md-col-gap-2800, mds-lg-col-gap-2800, mds-xl-col-gap-2800`

**Category:** Gap
**Usage:** Use mds-col-gap-2800 class to apply a gap of 112px between columns in a grid or flex box. Use mds-xs-col-gap-2800, mds-sm-col-gap-2800, mds-md-col-gap-2800, mds-lg-col-gap-2800, mds-xl-col-gap-2800 classes to apply gap of 2px between columns in a grid or flex box that is specific to the breakpoint.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-col-gap-2800">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
<div class="mds-flex mds-col-gap-2800">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
</div>
```

### `mds-row-gap-2800, mds-xs-row-gap-2800, mds-sm-row-gap-2800, mds-md-row-gap-2800, mds-lg-row-gap-2800, mds-xl-row-gap-2800`

**Category:** Gap
**Usage:** Use mds-row-gap-2800 class to apply a gap of 112px between rows in a grid or flex box. Use mds-xs-row-gap-2800, mds-sm-row-gap-2800, mds-md-row-gap-2800, mds-lg-row-gap-2800, mds-xl-row-gap-2800 classes to apply gap of 2px between columns in a grid or flex box that is specific to the breakpoint.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-row-gap-2800">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
<div class="mds-flex mds-row-gap-2800">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
</div>
```

### `mds-gap-3200, mds-xs-gap-3200, mds-sm-gap-3200, mds-md-gap-3200, mds-lg-gap-3200, mds-xl-gap-3200`

**Category:** Gap
**Usage:** Use mds-gap-3200 class to apply gap of 128px between columns and rows in a grid or flex box that is the same in all breakpoints. Use mds-xs-gap-3200, mds-sm-gap-3200, mds-md-gap-3200, mds-lg-gap-3200, mds-xl-gap-3200 classes to apply gap of 2px between columns and rows in a grid or flex box that is specific to the breakpoint.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-gap-3200">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
<div class="mds-flex mds-gap-3200">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
</div>
```

### `mds-col-gap-3200, mds-xs-col-gap-3200, mds-sm-col-gap-3200, mds-md-col-gap-3200, mds-lg-col-gap-3200, mds-xl-col-gap-3200`

**Category:** Gap
**Usage:** Use mds-col-gap-3200 class to apply a gap of 128px between columns in a grid or flex box. Use mds-xs-col-gap-3200, mds-sm-col-gap-3200, mds-md-col-gap-3200, mds-lg-col-gap-3200, mds-xl-col-gap-3200 classes to apply gap of 2px between columns in a grid or flex box that is specific to the breakpoint.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-col-gap-3200">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
<div class="mds-flex mds-col-gap-3200">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
</div>
```

### `mds-row-gap-3200, mds-xs-row-gap-3200, mds-sm-row-gap-3200, mds-md-row-gap-3200, mds-lg-row-gap-3200, mds-xl-row-gap-3200`

**Category:** Gap
**Usage:** Use mds-row-gap-3200 class to apply a gap of 128px between rows in a grid or flex box. Use mds-xs-row-gap-3200, mds-sm-row-gap-3200, mds-md-row-gap-3200, mds-lg-row-gap-3200, mds-xl-row-gap-3200 classes to apply gap of 2px between columns in a grid or flex box that is specific to the breakpoint.

#### Example:
```html
<div class="mds-container">
<div class="mds-grid mds-row-gap-3200">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
<div class="mds-flex mds-row-gap-3200">
<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
</div>
</div>
```

