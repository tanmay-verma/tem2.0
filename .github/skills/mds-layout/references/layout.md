# layout

## Overview

 
 
The building blocks for creating responsive layouts. Layout is divided into three distinct regions: Top Bar, Side Bar, and Page. It provides a flexible grid system that allows for easy arrangement of content in rows and columns, making it suitable for various screen sizes and orientations. It includes a set of utility classes for common layout patterns, such as centering content, full-width layouts, and responsive design. The layout is designed to be modular and reusable, allowing developers to create complex layouts with minimal effort. It also includes a set of responsive design utilities that adapt the layout based on the viewport size, ensuring a consistent user experience across devices.

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
@use url("@maersk-global/mds-foundations/sass/_layout.scss") as *;
```

### Examples

#### Basic

```html
// Basic layout with a top bar, side bar, and main content area
<body class="mds">
  <a href="#main-content" class="mds-skip-to">Skip to content</a>
  <a href="#footer" class="mds-skip-to">Skip to footer</a>
  <div class="mds-layout">
    <mc-top-bar product="Maersk Design System" productshort="MDS"></mc-top-bar>
    <mc-side-bar>
      <nav class="mds-tree-nav" role="navigation" aria-label="side navigation">
        <ul>
          <li>
            <a href="#">Item 1</a>
          </li>
          <li>
            <a href="#">Item 2</a>
          </li>
        </ul>
      </nav>
    </mc-side-bar>
    <main id="main-content" class="mds-page mds-container">
      <div class="mds-grid">
        <div class="cell">1</div>
        <div class="cell">2</div>
        <div class="cell">3</div>
        <div class="cell">4</div>
        <div class="cell">5</div>
        <div class="cell">6</div>
        <div class="cell">7</div>
        <div class="cell">8</div>
        <div class="cell">9</div>
        <div class="cell">10</div>
        <div class="cell">11</div>
        <div class="cell">12</div>
      </div>
      <footer id="footer">Footer</footer>
    </main>
  </div>
</body>
```

#### Advanced

```html
// Advanced layout with top bar, side bar, sticky footer, and main content area in full-width content
<body class="mds">
  <a href="#main-content" class="mds-skip-to">Skip to content</a>
  <a href="#footer" class="mds-skip-to">Skip to footer</a>
  <div class="mds-layout">
    <mc-top-bar product="Maersk Design System" productshort="MDS"></mc-top-bar>
    <mc-side-bar>
      <nav class="mds-tree-nav" role="navigation" aria-label="side navigation">
        <ul>
          <li>
            <a href="#">Item 1</a>
          </li>
          <li>
            <a href="#">Item 2</a>
          </li>
        </ul>
      </nav>
    </mc-side-bar>
    <main id="main-content" class="mds-page">
      <div class="mds-grid mds-full-width">
        <div class="cell">1</div>
        <div class="cell">2</div>
        <div class="cell">3</div>
        <div class="cell">4</div>
        <div class="cell">5</div>
        <div class="cell">6</div>
        <div class="cell">7</div>
        <div class="cell">8</div>
        <div class="cell">9</div>
        <div class="cell">10</div>
        <div class="cell">11</div>
        <div class="cell">12</div>
      </div>
    </main>
    <footer id="footer" class="mds-footer">Footer</footer>
  </div>
</body>
```

## API / CSS classes

### `mds-layout`

**Category:** Layout
**Usage:** Use mds-layout class to create a layout with a top bar, side bar, and main content area.

#### Example:
```html
<body class="mds">
<div class="mds-layout">...</div>
</body>
```

### `mc-top-bar`

**Category:** Layout
**Usage:** Use mc-top-bar component to create a top bar in the layout.

#### Example:
```html
<body class="mds">
<div class="mds-layout">
<mc-top-bar></mc-top-bar>
</div>
</body>
```

### `mc-side-bar`

**Category:** Layout
**Usage:** Use mc-side-bar component to create a side bar in the layout.

#### Example:
```html
<body class="mds">
<div class="mds-layout">
<mc-side-bar></mc-side-bar>
</div>
</body>
```

### `mds-page`

**Category:** Layout
**Usage:** Use mds-page class to create a page area in the layout that contains - 12 columns grid system in 'md' breakpoint (for 1025px + viewport). - 6 columns grid system in 'sm' breakpoint (for 641px - 1024px viewport). - 2 columns grid system in 'xs' breakpoint (for 0px - 640px viewport).

#### Example:
```html
<body class="mds">
<div class="mds-layout">
<main class="mds-page">
<div class="mds-grid">...</div>
</main>
</div>
</body>
```

### `mds-footer`

**Category:** Layout
**Usage:** Use mds-footer class to create a footer in the layout.

#### Example:
```html
<body class="mds">
<div class="mds-layout">
<footer class="mds-footer">Footer</footer>
</div>
</body>
```

### `mds-layout-no-side-bar`

**Category:** Layout
**Usage:** Use mds-layout-no-side-bar class to create a layout without a side bar.

#### Example:
```html
<body class="mds">
<div class="mds-layout mds-layout-no-side-bar">...</div>
</body>
```

### `mds-page-centered`

**Category:** Layout
**Usage:** Use mds-page-centered class to create a centered page area in the layout.

#### Example:
```html
<body class="mds">
<div class="mds-layout">
<main class="mds-page-centered">
<div class="mds-grid">...</div>
</main>
</div>
</body>
```

### `mds-page-full-width`

**Category:** Layout
**Usage:** Use mds-page-full-width class to create a full-width page area in the layout.

#### Example:
```html
<body class="mds">
<div class="mds-layout">
<main class="mds-page-full-width">
<div class="mds-grid">...</div>
</main>
</div>
</body>
```

### `mds-skip-to`

**Category:** Accessibility
**Usage:** Use mds-skip-to class to create a skip link that allows users to skip directly to the main content or footer of the page.

#### Example:
```html
<body class="mds">
<a href="#main-content" class="mds-skip-to">Skip to content</a>
<a href="#footer" class="mds-skip-to">Skip to footer</a>
<div class="mds-layout">
<main id="main-content" class="mds-page mds-container">...</main>
<footer id="footer" class="mds-footer">Footer</footer>
</div>
</body>
```

