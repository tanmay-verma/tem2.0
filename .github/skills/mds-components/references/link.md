# link

## Overview

 
 
Links are automatically styled if an outer container applies the mds class. We also provide a mds-link--stand-alone class for styling "stand-alone" links i.e. those links that do not sit inline within a paragraph of text etc.

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
@use url("@maersk-global/mds-foundations/sass/_link.scss") as *;
```

### Examples

#### Basic

```html
<div class="mds">
  <a href="#" class="mds-link--stand-alone">This is a stand-alone link</a>
  <a href="#" class="mds-link--stand-alone">Another stand-alone link</a>
</div>
```

#### Advanced

```html
<div class="mds">
  <a class="mds-link--external" href="https://designsystem.maersk.com" target="_blank" rel="noreferrer" aria-label="Maersk Design System website - link opens in a new tab">
    External link to Maersk Design System
  </a> 
</div>
```

## API / CSS classes

