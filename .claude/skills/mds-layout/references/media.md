# media

## Overview

 
 
Media query utilities for responsive design based on media view port or container. Supported breakpoints include: - Extra small (xs): 0 - 640px - Small (sm): 640px - 1024px - Medium (md): 1025px - 1440px - Large (lg): 1441px - 1920px - Extra large (xl): 1921px and above

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
@use url("@maersk-global/mds-foundations/sass/mixins/_media.scss") as *;
```

### Examples

#### Minimal

```html
// SASS
.box {
  @include mds-viewport-below('sm') {
    // Styles for viewports smaller than 640px, typically mobile devices, supports 2-column MDS grid
  }
  @include mds-viewport-above('xs') {
    // Styles for viewports larger than 641px, typically tablets, supports 6-column MDS grid
  }
  @include mds-viewport-above('sm') {
    // Styles for viewports larger than 1025px, typically desktops, supports 12-column MDS grid
  }
}
// CSS
@media only screen and (max-width: 640px) {
  .box {
    // Styles for viewports smaller than 640px, typically mobile devices, supports 2-column MDS grid
  }
}
@media only screen and (min-width: 641px) and (max-width: 1024px) {
  .box {
    // Styles for viewports larger than 641px and smaller than 1024px, typically tablets, supports 6-column MDS grid
  }
}
@media only screen and (min-width: 1025px) {
  .box {
    // Styles for viewports larger than 1025px, typically desktops, supports 12-column MDS grid
  }
}
```

## API / CSS classes

### `mds-viewport-below('sm')`

**Category:** Breakpoints
**Usage:** Below xs is breakpoint for viewports smaller than 640px.

#### Example:
```html
// SASS
.example-class {
@include mds-viewport-below('sm') {
// Styles for viewports smaller than 640px
```

### `mds-viewport-below('md')`

**Category:** Breakpoints
**Usage:** Below md is breakpoint for viewports smaller than 1024px.

#### Example:
```html
// SASS
.example-class {
@include mds-viewport-below('md') {
// Styles for viewports smaller than 1024px
```

### `mds-viewport-below('lg')`

**Category:** Breakpoints
**Usage:** Below lg is breakpoint for viewports smaller than 1440px.

#### Example:
```html
// SASS
.example-class {
@include mds-viewport-below('lg') {
// Styles for viewports smaller than 1440px
```

### `mds-viewport-below('xl')`

**Category:** Breakpoints
**Usage:** Below xl is breakpoint for viewports smaller than 1920px.

#### Example:
```html
// SASS
.example-class {
@include mds-viewport-below('xl') {
// Styles for viewports smaller than 1920px
```

### `mds-viewport-above('xs')`

**Category:** Breakpoints
**Usage:** Small (sm) breakpoint for viewports larger than 641px, typically tablets.

#### Example:
```html
// SASS
.example-class {
@include mds-viewport-above('xs') {
// Styles for viewports larger than 641px
```

### `mds-viewport-above('sm')`

**Category:** Breakpoints
**Usage:** Medium (md) breakpoint for viewports larger than 1025px, typically tablets.

#### Example:
```html
// SASS
.example-class {
@include mds-viewport-above('sm') {
// Styles for viewports larger than 1025px
```

### `mds-viewport-above('md')`

**Category:** Breakpoints
**Usage:** Large (lg) breakpoint for viewports larger than 1441px, typically desktops.

#### Example:
```html
// SASS
.example-class {
@include mds-viewport-above('md') {
// Styles for viewports larger than 1441px
```

### `mds-viewport-above('lg')`

**Category:** Breakpoints
**Usage:** Extra large (xl) breakpoint for viewports larger than 1921px, typically large desktops.

#### Example:
```html
// SASS
.example-class {
@include mds-viewport-above('lg') {
// Styles for viewports larger than 1921px
```

### `mds-container-below('sm')`

**Category:** Breakpoints
**Usage:** Below xs is breakpoint for containers smaller than 640px.

#### Example:
```html
// SASS
.example-class {
@include mds-container-below('sm') {
// Styles for containers smaller than 640px
```

### `mds-container-below('md')`

**Category:** Breakpoints
**Usage:** Below md is breakpoint for containers smaller than 1024px.

#### Example:
```html
// SASS
.example-class {
@include mds-container-below('md') {
// Styles for containers smaller than 1024px
```

### `mds-container-below('lg')`

**Category:** Breakpoints
**Usage:** Below lg is breakpoint for containers smaller than 1440px.

#### Example:
```html
// SASS
.example-class {
@include mds-container-below('lg') {
// Styles for containers smaller than 1440px
```

### `mds-container-below('xl')`

**Category:** Breakpoints
**Usage:** Below xl is breakpoint for containers smaller than 1920px.

#### Example:
```html
// SASS
.example-class {
@include mds-container-below('xl') {
// Styles for containers smaller than 1920px
```

### `mds-container-above('xs')`

**Category:** Breakpoints
**Usage:** Small (sm) breakpoint for containers larger than 641px, typically tablets.

#### Example:
```html
// SASS
.example-class {
@include mds-container-above('xs') {
// Styles for containers larger than 641px
```

### `mds-container-above('sm')`

**Category:** Breakpoints
**Usage:** Medium (md) breakpoint for containers larger than 1025px, typically tablets.

#### Example:
```html
// SASS
.example-class {
@include mds-container-above('sm') {
// Styles for containers larger than 1025px
```

### `mds-container-above('md')`

**Category:** Breakpoints
**Usage:** Large (lg) breakpoint for containers larger than 1441px, typically desktops.

#### Example:
```html
// SASS
.example-class {
@include mds-container-above('md') {
// Styles for containers larger than 1441px
```

### `mds-container-above('lg')`

**Category:** Breakpoints
**Usage:** Extra large (xl) breakpoint for containers larger than 1921px, typically large desktops.

#### Example:
```html
// SASS
.example-class {
@include mds-container-above('lg') {
// Styles for containers larger than 1921px
```

