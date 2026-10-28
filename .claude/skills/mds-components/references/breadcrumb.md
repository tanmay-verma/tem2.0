# breadcrumb

## Overview

 
 
A breadcrumb is a secondary navigation component used to show users their location within a website or application hierarchy. Breadcrumbs should provide context and an easy way for users to navigate up the site hierarchy. They are not intended to replace primary navigation but to enhance the user’s understanding of where they are within the website or application. Use a breadcrumb for applications with a hierarchy of more than 2 levels.

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
@use url("@maersk-global/mds-foundations/sass/_breadcrumb.scss") as *;
```

### Examples

#### Basic

```html
// Basic breadcrumb with 5 levels
<nav class="mds-breadcrumb" aria-label="breadcrumb">
  <ol>
    <li><a href="#home">Home</a></li>
    <li><a href="#digital-solutions">Digital Solutions</a></li>
    <li><a href="#data-integrations">Data Integrations</a></li>
    <li><a href="#ocean-booking">Ocean Booking</a></li>
    <li>Current page</li>
  </ol>
</nav>
```

#### Advanced

```html
// Advanced breadcrumb with truncation
<nav class="mds-breadcrumb" aria-label="breadcrumb example 1">
  <ol>
    <li><a href="#home">Home</a></li>
    <li>
      <a href="#data-integrations" title="Data Integrations</a>
    </li>
    <li><a href="#ocean-booking">Ocean Booking</a></li>
    <li class="mds-breadcrumb__long-and-truncated">API (Leverage the power of integrated data)</li>
  </ol>
</nav>
```

## API / CSS classes

### `mds-breadcrumb`

**Category:** Navigation
**Usage:** Use breadcrumbs to give context and help users navigate. All breadcrumbs items except the current page should be clickable links. Use concise and descriptive link text for each level in the breadcrumb. Avoid using dynamic or changing breadcrumbs, since it can confuse users. Use truncation if the breadcrumb has more than 5 levels. The breadcrumb should never wrap to the second line. Place the breadcrumb consistently on each page across the website or application. Don’t use a breadcrumb for simple and flat hierarchies e.g. a 2 level hierarchy.

#### Example:
```html
<nav class="mds-breadcrumb" aria-label="breadcrumb">
<ol>
<li><a href="#home">Home</a></li>
<li><a href="#digital-solutions">Digital Solutions</a></li>
<li><a href="#data-integrations">Data Integrations</a></li>
<li><a href="#ocean-booking">Ocean Booking</a></li>
<li>Current page</li>
</ol>
</nav>
```

### `mds-breadcrumb__long-and-truncated`

**Category:** Navigation
**Usage:** It is recommended to limit the breadcrumb to 3-5 levels. If the website or application has a deeper hierarchy or is too long, then use truncation. Displaying more than 5 levels will make it hard for the user to comprehend the structure and in most cases there also starts to be a problem with space. When truncated the breadcrumb only shows the first and the last two levels and the levels in between is replaced by an ellipsis.

#### Example:
```html
<nav class="mds-breadcrumb" aria-label="breadcrumb example 1">
<ol>
<li><a href="#home">Home</a></li>
<li>
<a href="#data-integrations" title="Data Integrations</a>
</li>
<li><a href="#ocean-booking">Ocean Booking</a></li>
<li class="mds-breadcrumb__long-and-truncated">API (Leverage the power of integrated data)</li>
</ol>
</nav>
```

