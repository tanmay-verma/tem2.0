# flex

## Overview

 
 
The MDS offers a set of light-weight utility classes to help with common flexbox layout patterns.

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
@use url("@maersk-global/mds-foundations/sass/_flex.scss") as *;
```

### Examples

#### Basic

```html
<div class="mds-container">
  <div class="mds-flex mds-gap-200">
    <div class="box">1</div>
    <div class="box">2</div>
    <div class="box">3</div>
  </div>
</div>
```

#### Advanced

```html
<div class="mds-container">
  <div class="mds-flex mds-flex-items-start mds-gap-200">
    <div class="box" style="width: 100px; height: 100px;">1</div>
    <div class="box" style="width: 200px;">2</div>
    <div class="box" style="width: 100px; height: 100px;">3</div>
  </div>
</div>
```

## API / CSS classes

### `mds-flex`

**Category:** Flexbox
**Usage:** Use mds-flex class to create a flex container.

#### Example:
```html
<div class="mds-flex">...</div>
```

### `mds-flex-items-start`

**Category:** Flexbox
**Usage:** Use mds-flex-items-start class to align flex items to the start of the flex container.

#### Example:
```html
<div class="mds-flex mds-flex-items-start">...</div>
```

### `mds-flex-items-center`

**Category:** Flexbox
**Usage:** Use mds-flex-items-center class to align flex items to the center of the flex container.

#### Example:
```html
<div class="mds-flex mds-flex-items-center">...</div>
```

### `mds-flex-items-end`

**Category:** Flexbox
**Usage:** Use mds-flex-items-end class to align flex items to the end of the flex container.

#### Example:
```html
<div class="mds-flex mds-flex-items-end">...</div>
```

### `mds-flex-items-baseline`

**Category:** Flexbox
**Usage:** Use mds-flex-items-baseline class to align flex items to the baseline of the flex container.

#### Example:
```html
<div class="mds-flex mds-flex-items-baseline">...</div>
```

### `mds-flex-items-stretch`

**Category:** Flexbox
**Usage:** Use mds-flex-items-stretch class to stretch flex items to fill the flex container.

#### Example:
```html
<div class="mds-flex mds-flex-items-stretch">...</div>
```

### `mds-flex-content-start`

**Category:** Flexbox
**Usage:** Use mds-flex-content-start class to start flex items within the flex container.

#### Example:
```html
<div class="mds-flex mds-flex-content-start">...</div>
```

### `mds-flex-content-center`

**Category:** Flexbox
**Usage:** Use mds-flex-content-center class to center flex items within the flex container.

#### Example:
```html
<div class="mds-flex mds-flex-content-center">...</div>
```

### `mds-flex-content-end`

**Category:** Flexbox
**Usage:** Use mds-flex-content-end class to align flex items to the end of the flex container.

#### Example:
```html
<div class="mds-flex mds-flex-content-end">...</div>
```

### `mds-flex-row`

**Category:** Flexbox
**Usage:** Use mds-flex-row class to set the flex direction to row.

#### Example:
```html
<div class="mds-flex mds-flex-row">...</div>
```

### `mds-flex-column`

**Category:** Flexbox
**Usage:** Use mds-flex-column class to set the flex direction to column.

#### Example:
```html
<div class="mds-flex mds-flex-column">...</div>
```

### `mds-flex-nowrap`

**Category:** Flexbox
**Usage:** Use mds-flex-nowrap class to prevent flex items from wrapping.

#### Example:
```html
<div class="mds-flex mds-flex-nowrap">...</div>
```

