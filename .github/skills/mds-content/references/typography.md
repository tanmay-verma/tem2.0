# typography

## Overview

 
 
Typography styles for the Maersk Design System. This file defines the typography styles used throughout the design system, including font families, sizes, weights, and styles for various text elements. It provides a consistent typographic scale that can be applied to headings, paragraphs, links, and other text elements. You need to wrap your content in a container with the mds class to apply these styles.

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
@use url("@maersk-global/mds-foundations/sass/_typography.scss") as *;
```

### Examples

#### Basic

```html
// No margins or paddings are applied to headings and paragraphs, only font styles.
<div class="mds">
  <h1 class="mds-headline mds-headline--large">Heading 1</h1>
  <p class="mds-text mds-text--medium-normal">This is a paragraph with medium text.</p>
  <a href="#">This is a link</a>
</div>
```

#### Advanced

```html
// With margins and paddings, and font styles applied to headings and paragraphs.
<div class="mds mds-container">
  <h2 class="mds-headline mds-headline--medium">Heading 2</h2>
  <p class="mds-text mds-text--small-normal">This is a paragraph with small text.</p>
  <a href="#">This is a link</a>
</div>
```

## API / CSS classes

### `mds`

**Category:** Typography
**Usage:** Use mds class to apply typography styles to the content.

#### Example:
```html
<div class="mds">
<h1 class="mds-headline mds-headline--large">Heading 1</h1>
<p class="mds-text mds-text--medium-normal">This is a paragraph with medium text.</p>
<a href="#">This is a link</a>
</div>
```

### `mds-headline--x-small`

**Category:** Headline
**Usage:** Use mds-headline--x-small class to style any text as small headlines.

#### Example:
```html
<div class="mds-headline mds-headline--x-small">This is a small headline</div>
```

### `mds-headline--small`

**Category:** Headline
**Usage:** Use mds-headline--small class to style any text as small headlines.

#### Example:
```html
<div class="mds-headline mds-headline--small">This is a small headline</div>
```

### `mds-headline--medium`

**Category:** Headline
**Usage:** Use mds-headline--medium class to style any text as medium headlines.

#### Example:
```html
<div class="mds-headline mds-headline--medium">This is a medium headline</div>
```

### `mds-headline--large`

**Category:** Headline
**Usage:** Use mds-headline--large class to style any text as large headlines.

#### Example:
```html
<div class="mds-headline mds-headline--large">This is a large headline</div>
```

### `mds-headline--x-large`

**Category:** Headline
**Usage:** Use mds-headline--x-large class to style any text as extra large headlines.

#### Example:
```html
<div class="mds-headline mds-headline--x-large">This is an extra large headline</div>
```

### `mds-text--x-small-normal`

**Category:** Text
**Usage:** Use mds-text--x-small-normal class to style text with x-small normal font size.

#### Example:
```html
<p class="mds-text mds-text--x-small-normal">This is x-small normal text</p>
```

### `mds-text--x-small-light`

**Category:** Text
**Usage:** Use mds-text--x-small-light class to style text with x-small light font size.

#### Example:
```html
<p class="mds-text mds-text--x-small-light">This is x-small light text</p>
```

### `mds-text--x-small-medium`

**Category:** Text
**Usage:** Use mds-text--x-small-medium class to style text with x-small medium font size.

#### Example:
```html
<p class="mds-text mds-text--x-small-medium">This is x-small medium text</p>
```

### `mds-text--x-small-semibold`

**Category:** Text
**Usage:** Use mds-text--x-small-semibold class to style text with x-small semibold font size.

#### Example:
```html
<p class="mds-text mds-text--x-small-semibold">This is x-small semibold text</p>
```

### `mds-text--x-small-bold`

**Category:** Text
**Usage:** Use mds-text--x-small-bold class to style text with x-small bold font size.

#### Example:
```html
<p class="mds-text mds-text--x-small-bold">This is x-small bold text</p>
```

### `mds-text--x-small-italic`

**Category:** Text
**Usage:** Use mds-text--x-small-italic class to style text with x-small italic font size.

#### Example:
```html
<p class="mds-text mds-text--x-small-italic">This is x-small italic text</p>
```

### `mds-text--x-small-lightitalic`

**Category:** Text
**Usage:** Use mds-text--x-small-lightitalic class to style text with x-small light italic font size.

#### Example:
```html
<p class="mds-text mds-text--x-small-lightitalic">This is x-small light italic text</p>
```

### `mds-text--x-small-mediumitalic`

**Category:** Text
**Usage:** Use mds-text--x-small-mediumitalic class to style text with x-small medium italic font size.

#### Example:
```html
<p class="mds-text mds-text--x-small-mediumitalic">This is x-small medium italic text</p>
```

### `mds-text--x-small-semibolditalic`

**Category:** Text
**Usage:** Use mds-text--x-small-semibolditalic class to style text with x-small semibold italic font size.

#### Example:
```html
<p class="mds-text mds-text--x-small-semibolditalic">This is x-small semibold italic text</p>
```

### `mds-text--x-small-bolditalic`

**Category:** Text
**Usage:** Use mds-text--x-small-bolditalic class to style text with x-small bold italic font size.

#### Example:
```html
<p class="mds-text mds-text--x-small-bolditalic">This is x-small bold italic text</p>
```

### `mds-text--small-normal`

**Category:** Text
**Usage:** Use mds-text--small-normal class to style text with small normal font size.

#### Example:
```html
<p class="mds-text mds-text--small-normal">This is small normal text</p>
```

### `mds-text--small-light`

**Category:** Text
**Usage:** Use mds-text--small-light class to style text with small light font size.

#### Example:
```html
<p class="mds-text mds-text--small-light">This is small light text</p>
```

### `mds-text--small-medium`

**Category:** Text
**Usage:** Use mds-text--small-medium class to style text with small medium font size.

#### Example:
```html
<p class="mds-text mds-text--small-medium">This is small medium text</p>
```

### `mds-text--small-semibold`

**Category:** Text
**Usage:** Use mds-text--small-semibold class to style text with small semibold font size.

#### Example:
```html
<p class="mds-text mds-text--small-semibold">This is small semibold text</p>
```

### `mds-text--small-bold`

**Category:** Text
**Usage:** Use mds-text--small-bold class to style text with small bold font size.

#### Example:
```html
<p class="mds-text mds-text--small-bold">This is small bold text</p>
```

### `mds-text--small-italic`

**Category:** Text
**Usage:** Use mds-text--small-italic class to style text with small italic font size.

#### Example:
```html
<p class="mds-text mds-text--small-italic">This is small italic text</p>
```

### `mds-text--small-lightitalic`

**Category:** Text
**Usage:** Use mds-text--small-lightitalic class to style text with small light italic font size.

#### Example:
```html
<p class="mds-text mds-text--small-lightitalic">This is small light italic text</p>
```

### `mds-text--small-mediumitalic`

**Category:** Text
**Usage:** Use mds-text--small-mediumitalic class to style text with small medium italic font size.

#### Example:
```html
<p class="mds-text mds-text--small-mediumitalic">This is small medium italic text</p>
```

### `mds-text--small-semibolditalic`

**Category:** Text
**Usage:** Use mds-text--small-semibolditalic class to style text with small semibold italic font size.

#### Example:
```html
<p class="mds-text mds-text--small-semibolditalic">This is small semibold italic text</p>
```

### `mds-text--small-bolditalic`

**Category:** Text
**Usage:** Use mds-text--small-bolditalic class to style text with small bold italic font size.

#### Example:
```html
<p class="mds-text mds-text--small-bolditalic">This is small bold italic text</p>
```

### `mds-text--medium-normal`

**Category:** Text
**Usage:** Use mds-text--medium-normal class to style text with medium normal font size.

#### Example:
```html
<p class="mds-text mds-text--medium-normal">This is medium normal text</p>
```

### `mds-text--medium-light`

**Category:** Text
**Usage:** Use mds-text--medium-light class to style text with medium light font size.

#### Example:
```html
<p class="mds-text mds-text--medium-light">This is medium light text</p>
```

### `mds-text--medium-medium`

**Category:** Text
**Usage:** Use mds-text--medium-medium class to style text with medium medium font size.

#### Example:
```html
<p class="mds-text mds-text--medium-medium">This is medium medium text</p>
```

### `mds-text--medium-semibold`

**Category:** Text
**Usage:** Use mds-text--medium-semibold class to style text with medium semibold font size.

#### Example:
```html
<p class="mds-text mds-text--medium-semibold">This is medium semibold text</p>
```

### `mds-text--medium-italic`

**Category:** Text
**Usage:** Use mds-text--medium-italic class to style text with medium italic font size.

#### Example:
```html
<p class="mds-text mds-text--medium-italic">This is medium italic text</p>
```

### `mds-text--medium-lightitalic`

**Category:** Text
**Usage:** Use mds-text--medium-lightitalic class to style text with medium light italic font size.

#### Example:
```html
<p class="mds-text mds-text--medium-lightitalic">This is medium light italic text</p>
```

### `mds-text--medium-mediumitalic`

**Category:** Text
**Usage:** Use mds-text--medium-mediumitalic class to style text with medium medium italic font size.

#### Example:
```html
<p class="mds-text mds-text--medium-mediumitalic">This is medium medium italic text</p>
```

### `mds-text--medium-semibolditalic`

**Category:** Text
**Usage:** Use mds-text--medium-semibolditalic class to style text with medium semibold italic font size.

#### Example:
```html
<p class="mds-text mds-text--medium-semibolditalic">This is medium semibold italic text</p>
```

### `mds-text--medium-bolditalic`

**Category:** Text
**Usage:** Use mds-text--medium-bolditalic class to style text with medium bold italic font size.

#### Example:
```html
<p class="mds-text mds-text--medium-bolditalic">This is medium bold italic text</p>
```

### `mds-text--large-normal`

**Category:** Text
**Usage:** Use mds-text--large-normal class to style text with large normal font size.

#### Example:
```html
<p class="mds-text mds-text--large-normal">This is large normal text</p>
```

### `mds-text--large-light`

**Category:** Text
**Usage:** Use mds-text--large-light class to style text with large light font size.

#### Example:
```html
<p class="mds-text mds-text--large-light">This is large light text</p>
```

### `mds-text--large-medium`

**Category:** Text
**Usage:** Use mds-text--large-medium class to style text with large medium font size.

#### Example:
```html
<p class="mds-text mds-text--large-medium">This is large medium text</p>
```

### `mds-text--large-semibold`

**Category:** Text
**Usage:** Use mds-text--large-semibold class to style text with large semibold font size.

#### Example:
```html
<p class="mds-text mds-text--large-semibold">This is large semibold text</p>
```

### `mds-text--large-bold`

**Category:** Text
**Usage:** Use mds-text--large-bold class to style text with large bold font size.

#### Example:
```html
<p class="mds-text mds-text--large-bold">This is large bold text</p>
```

### `mds-text--large-italic`

**Category:** Text
**Usage:** Use mds-text--large-italic class to style text with large italic font size.

#### Example:
```html
<p class="mds-text mds-text--large-italic">This is large italic text</p>
```

### `mds-text--large-lightitalic`

**Category:** Text
**Usage:** Use mds-text--large-lightitalic class to style text with large light italic font size.

#### Example:
```html
<p class="mds-text mds-text--large-lightitalic">This is large light italic text</p>
```

### `mds-text--large-mediumitalic`

**Category:** Text
**Usage:** Use mds-text--large-mediumitalic class to style text with large medium italic font size.

#### Example:
```html
<p class="mds-text mds-text--large-mediumitalic">This is large medium italic text</p>
```

### `mds-text--large-semibolditalic`

**Category:** Text
**Usage:** Use mds-text--large-semibolditalic class to style text with large semibold italic font size.

#### Example:
```html
<p class="mds-text mds-text--large-semibolditalic">This is large semibold italic text</p>
```

### `mds-text--large-bolditalic`

**Category:** Text
**Usage:** Use mds-text--large-bolditalic class to style text with large bold italic font size.

#### Example:
```html
<p class="mds-text mds-text--large-bolditalic">This is large bold italic text</p>
```

### `mds-underline--dotted`

**Category:** Typography
**Usage:** Use mds-underline--dotted class to apply a dotted underline style to text.

#### Example:
```html
<span class="mds-underline--dotted">This text has a dotted underline</span>
```

