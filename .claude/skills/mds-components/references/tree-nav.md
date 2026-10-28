# tree-nav

## Overview

 
 
Tree Navigation used for organizing and navigating hierarchical content with expandable and collapsible navigation items. Tree navigation is styled using the mds-tree-nav class. It supports nested lists and can be used with details and summary elements for expandable sections. The styles can be customized using the mds-tree-nav__active class for active links and mds-tree-nav__external class for external links. Tree navigation is designed to be accessible, with support for keyboard navigation and screen readers. Tree navigation is often used in mc-side-bar or as part of a larger navigation system, allowing users to easily explore and navigate through complex structures.

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
@use url("@maersk-global/mds-foundations/sass/_tree-nav.scss") as *;
```

### Examples

#### Basic

```html
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
```

#### Advanced

```html
<nav class="mds-tree-nav" role="navigation" aria-label="side navigation">
  <ul>
    <li>
      <details open>
          <summary>Item 1 (level 1)</summary>
          <ul>
            <li>
              <details>
                <summary>Sub Item 1 (level 2)</summary>
                <ul>
                  <li>
                    <details>
                      <summary>Item 1.1.1 (level 3)</summary>
                      <ul>
                        <li>
                          <details>
                            <summary>Item 1.1.1.1 (level 4)</summary>
                            <ul>
                              <li>
                                <a href="#">Item 1.1.1.1.1 (level 5)</a>
                              </li>
                              <li>
                                <a href="#">Item 1.1.1.1.2</a>
                              </li>
                              <li>
                                <a href="#">Item 1.1.1.1.3</a>
                              </li>
                            </ul>
                          </details>
                        </li>
                        <li>
                          <a href="#">Item 1.1.1.2</a>
                        </li>
                        <li>
                          <a href="#">Item 1.1.1.3</a>
                        </li>
                      </ul>
                    </details>
                  </li>
                  <li>
                    <a href="#">Item 1.1.2</a>
                  </li>
                  <li>
                    <a href="#">Item 1.1.3</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a href="#" class="mds-tree-nav__active" aria-current="page">Sub Item 2</a>
            </li>
            <li>
              <a href="#">Sub Item 3</a>
            </li>
          </ul>
        </details>
    </li>
    <li>
      <a href="#">Item 2</a>
    </li>
    <li class="mds-tree-nav--separator"></li>
    <li>
      <a href="#" class="mds-tree-nav__external">External link</a>
    </li>
  </ul>
</nav>
```

## API / CSS classes

### `mds-tree-nav`

**Category:** Tree Navigation
**Usage:** Use mds-tree-nav class to style tree navigation elements.

#### Example:
```html
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
```

### `mds-tree-nav--separator`

**Category:** Tree Navigation
**Usage:** Use mds-tree-nav--separator class to create a separator line in tree navigation.

#### Example:
```html
<li class="mds-tree-nav--separator"></li>
```

### `mds-tree-nav__active`

**Category:** Tree Navigation
**Usage:** Use mds-tree-nav__active class to style currently active item in tree navigation.

#### Example:
```html
<a href="#" class="mds-tree-nav__active" aria-current="page">
Active Item
</a>
```

### `mds-tree-nav__external`

**Category:** Tree Navigation
**Usage:** Use mds-tree-nav__external class to style external links in tree navigation with icon to the right.

#### Example:
```html
<a href="#" class="mds-tree-nav__external">External Link</a>
```

