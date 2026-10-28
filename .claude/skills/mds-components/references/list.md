# list

## Overview

 
 
Lists are used to display a collection of items in a structured format. They can be ordered or unordered, and can be styled to fit the design requirements of the application. Lists are automatically styled if an outer container applies the mds class. The styles can be customized using the mds-list--horizontal class for horizontal lists or by applying custom styles to the list items. Use `mc-list` component as better alternative to ul/ol html native elements.

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
@use url("@maersk-global/mds-foundations/sass/_list.scss") as *;
```

### Examples

#### Basic

```html
<ol>
  <li>Apple</li>
  <li>Orange</li>
  <li>Lemon</li>
</ol>
```

#### Advanced

```html
// Use mc-list for displaying easier text and icons, groups, and more complex items.
<mc-list>
  <mc-list-item label="Back" icon="arrow-left"></mc-list-item>
  <mc-list-item label="Forward" disabled icon="arrow-right"></mc-list-item>
  <mc-list-item label="Reload" icon="arrow-clockwise"></mc-list-item>
  <hr />
  <mc-list-item label="Save" icon="floppy-disk"></mc-list-item>
  <mc-list-item label="Print" icon="printer"></mc-list-item>
</mc-list>
```

## API / CSS classes

