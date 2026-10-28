# content

## Overview

 
 
Default styling for body text, headings, lists, paragraphs, strong, em tag and horizontal rule when using the mds css class. - By placing "mds" on a parent element, you will get Maersk styled text without any paddings or margins. - By placing "mds-content" on a parent element, you will get Maersk styled text with paddings and margins.

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
@use url("@maersk-global/mds-foundations/sass/_content.scss") as *;
```

### Examples

#### Basic

```html
<div class="mds">
  <article class="mds-content">
    <h1>Heading 1</h1>
  </article>
</div>
```

#### Advanced

```html
<div class="mds">
  <p>This paragraph has no paddings or margins, as it's not wrapped with "mds-content" class</p>
  <article class="mds-content">
    <h1>Heading 1</h1>
    <p>This is a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>    
  </article>
</div>
```

## API / CSS classes

