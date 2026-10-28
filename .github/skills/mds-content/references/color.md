# color

## Overview

 
 
Color system for the Maersk Design System. It includes a set of color appearances and variants that can be used for text, background, borders, and links. The color system is designed to be flexible, making it suitable for various design needs. It includes a set of predefined colors that can be used throughout the UI.

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
@use url("@maersk-global/mds-foundations/sass/_color.scss") as *;
```

### Examples

#### Basic

```html
<div class="mds">
  <div class="mds-neutral__text-color">Text with default color</div>
  <div class="mds-neutral__border-color">Box with default border</div>
  <div class="mds-neutral--weak__background-color mds-neutral--weak__on-background-color">Div with weak background and text that has the right contrast ratio for that background</div>
</div>
```

## API / CSS classes

### `mds-neutral__text-color`

**Category:** Colors
**Usage:** Use mds-neutral__text-color class to get the neutral color for text.

#### Example:
```html
<div class="mds"><div class="mds-neutral__text-color">text color in neutral appearance</div></div>
```

### `mds-neutral--weakest__text-color`

**Category:** Colors
**Usage:** Use mds-neutral--weakest__text-color class to get the neutral weakest color for text.

#### Example:
```html
<div class="mds"><div class="mds-neutral--weakest__text-color">text color in neutral weakest appearance</div></div>
```

### `mds-neutral--weak__text-color`

**Category:** Colors
**Usage:** Use mds-neutral--weak__text-color class to get the neutral weak color for text.

#### Example:
```html
<div class="mds"><div class="mds-neutral--weak__text-color">text color in neutral weak appearance</div></div>
```

### `mds-neutral--strong__text-color`

**Category:** Colors
**Usage:** Use mds-neutral--strong__text-color class to get the neutral strong color for text.

#### Example:
```html
<div class="mds"><div class="mds-neutral--strong__text-color">text color in neutral strong appearance</div></div>
```

### `mds-neutral--strongest__text-color`

**Category:** Colors
**Usage:** Use mds-neutral--strongest__text-color class to get the neutral strongest color for text.

#### Example:
```html
<div class="mds"><div class="mds-neutral--strongest__text-color">text color in neutral strongest appearance</div></div>
```

### `mds-neutral--inverse__text-color`

**Category:** Colors
**Usage:** Use mds-neutral--inverse__text-color class to get the neutral inverse color for text.

#### Example:
```html
<div class="mds"><div class="mds-neutral--inverse__text-color">text color in neutral inverse appearance</div></div>
```

### `mds-neutral__background-color`

**Category:** Colors
**Usage:** Use mds-neutral__background-color class to get the neutral color for background.

#### Example:
```html
<div class="mds"><div class="mds-neutral__background-color">background color in neutral appearance</div></div>
```

### `mds-neutral--weakest__background-color`

**Category:** Colors
**Usage:** Use mds-neutral--weakest__background-color class to get the neutral weakest color for background.

#### Example:
```html
<div class="mds"><div class="mds-neutral--weakest__background-color">background color in neutral weakest appearance</div></div>
```

### `mds-neutral--weak__background-color`

**Category:** Colors
**Usage:** Use mds-neutral--weak__background-color class to get the neutral weak color for background.

#### Example:
```html
<div class="mds"><div class="mds-neutral--weak__background-color">background color in neutral weak appearance</div></div>
```

### `mds-neutral--strong__background-color`

**Category:** Colors
**Usage:** Use mds-neutral--strong__background-color class to get the neutral strong color for background.

#### Example:
```html
<div class="mds"><div class="mds-neutral--strong__background-color">background color in neutral strong appearance</div></div>
```

### `mds-neutral--strongest__background-color`

**Category:** Colors
**Usage:** Use mds-neutral--strongest__background-color class to get the neutral strongest color for background.

#### Example:
```html
<div class="mds"><div class="mds-neutral--strongest__background-color">background color in neutral strongest appearance</div></div>
```

### `mds-neutral--inverse__background-color`

**Category:** Colors
**Usage:** Use mds-neutral--inverse__background-color class to get the neutral inverse color for background.

#### Example:
```html
<div class="mds"><div class="mds-neutral--inverse__background-color">background color in neutral inverse appearance</div></div>
```

### `mds-neutral__on-background-color`

**Category:** Colors
**Usage:** Use mds-neutral__on-background-color class to get the neutral color for on-background.

#### Example:
```html
<div class="mds"><div class="mds-neutral__on-background-color">on-background color in neutral appearance</div></div>
```

### `mds-neutral--weakest__on-background-color`

**Category:** Colors
**Usage:** Use mds-neutral--weakest__on-background-color class to get the neutral weakest color for on-background.

#### Example:
```html
<div class="mds"><div class="mds-neutral--weakest__on-background-color">on-background color in neutral weakest appearance</div></div>
```

### `mds-neutral--weak__on-background-color`

**Category:** Colors
**Usage:** Use mds-neutral--weak__on-background-color class to get the neutral weak color for on-background.

#### Example:
```html
<div class="mds"><div class="mds-neutral--weak__on-background-color">on-background color in neutral weak appearance</div></div>
```

### `mds-neutral--strong__on-background-color`

**Category:** Colors
**Usage:** Use mds-neutral--strong__on-background-color class to get the neutral strong color for on-background.

#### Example:
```html
<div class="mds"><div class="mds-neutral--strong__on-background-color">on-background color in neutral strong appearance</div></div>
```

### `mds-neutral--strongest__on-background-color`

**Category:** Colors
**Usage:** Use mds-neutral--strongest__on-background-color class to get the neutral strongest color for on-background.

#### Example:
```html
<div class="mds"><div class="mds-neutral--strongest__on-background-color">on-background color in neutral strongest appearance</div></div>
```

### `mds-neutral--inverse__on-background-color`

**Category:** Colors
**Usage:** Use mds-neutral--inverse__on-background-color class to get the neutral inverse color for on-background.

#### Example:
```html
<div class="mds"><div class="mds-neutral--inverse__on-background-color">on-background color in neutral inverse appearance</div></div>
```

### `mds-neutral__border-color`

**Category:** Colors
**Usage:** Use mds-neutral__border-color class to get the neutral color for border.

#### Example:
```html
<div class="mds"><div class="mds-neutral__border-color">border color in neutral appearance</div></div>
```

### `mds-neutral--weakest__border-color`

**Category:** Colors
**Usage:** Use mds-neutral--weakest__border-color class to get the neutral weakest color for border.

#### Example:
```html
<div class="mds"><div class="mds-neutral--weakest__border-color">border color in neutral weakest appearance</div></div>
```

### `mds-neutral--weak__border-color`

**Category:** Colors
**Usage:** Use mds-neutral--weak__border-color class to get the neutral weak color for border.

#### Example:
```html
<div class="mds"><div class="mds-neutral--weak__border-color">border color in neutral weak appearance</div></div>
```

### `mds-neutral--strong__border-color`

**Category:** Colors
**Usage:** Use mds-neutral--strong__border-color class to get the neutral strong color for border.

#### Example:
```html
<div class="mds"><div class="mds-neutral--strong__border-color">border color in neutral strong appearance</div></div>
```

### `mds-neutral--strongest__border-color`

**Category:** Colors
**Usage:** Use mds-neutral--strongest__border-color class to get the neutral strongest color for border.

#### Example:
```html
<div class="mds"><div class="mds-neutral--strongest__border-color">border color in neutral strongest appearance</div></div>
```

### `mds-neutral--inverse__border-color`

**Category:** Colors
**Usage:** Use mds-neutral--inverse__border-color class to get the neutral inverse color for border.

#### Example:
```html
<div class="mds"><div class="mds-neutral--inverse__border-color">border color in neutral inverse appearance</div></div>
```

### `mds-primary__text-color`

**Category:** Colors
**Usage:** Use mds-primary__text-color class to get the primary color for text.

#### Example:
```html
<div class="mds"><div class="mds-primary__text-color">text color in primary appearance</div></div>
```

### `mds-primary--weak__text-color`

**Category:** Colors
**Usage:** Use mds-primary--weak__text-color class to get the primary weak color for text.

#### Example:
```html
<div class="mds"><div class="mds-primary--weak__text-color">text color in primary weak appearance</div></div>
```

### `mds-primary__background-color`

**Category:** Colors
**Usage:** Use mds-primary__background-color class to get the primary color for background.

#### Example:
```html
<div class="mds"><div class="mds-primary__background-color">background color in primary appearance</div></div>
```

### `mds-primary--weak__background-color`

**Category:** Colors
**Usage:** Use mds-primary--weak__background-color class to get the primary weak color for background.

#### Example:
```html
<div class="mds"><div class="mds-primary--weak__background-color">background color in primary weak appearance</div></div>
```

### `mds-primary__on-background-color`

**Category:** Colors
**Usage:** Use mds-primary__on-background-color class to get the primary color for on-background.

#### Example:
```html
<div class="mds"><div class="mds-primary__on-background-color">on-background color in primary appearance</div></div>
```

### `mds-primary--weak__on-background-color`

**Category:** Colors
**Usage:** Use mds-primary--weak__on-background-color class to get the primary weak color for on-background.

#### Example:
```html
<div class="mds"><div class="mds-primary--weak__on-background-color">on-background color in primary weak appearance</div></div>
```

### `mds-primary__border-color`

**Category:** Colors
**Usage:** Use mds-primary__border-color class to get the primary color for border.

#### Example:
```html
<div class="mds"><div class="mds-primary__border-color">border color in primary appearance</div></div>
```

### `mds-primary--weak__border-color`

**Category:** Colors
**Usage:** Use mds-primary--weak__border-color class to get the primary weak color for border.

#### Example:
```html
<div class="mds"><div class="mds-primary--weak__border-color">border color in primary weak appearance</div></div>
```

### `mds-secondary__text-color`

**Category:** Colors
**Usage:** Use mds-secondary__text-color class to get the secondary color for text.

#### Example:
```html
<div class="mds"><div class="mds-secondary__text-color">text color in secondary appearance</div></div>
```

### `mds-secondary--weak__text-color`

**Category:** Colors
**Usage:** Use mds-secondary--weak__text-color class to get the secondary weak color for text.

#### Example:
```html
<div class="mds"><div class="mds-secondary--weak__text-color">text color in secondary weak appearance</div></div>
```

### `mds-secondary__background-color`

**Category:** Colors
**Usage:** Use mds-secondary__background-color class to get the secondary color for background.

#### Example:
```html
<div class="mds"><div class="mds-secondary__background-color">background color in secondary appearance</div></div>
```

### `mds-secondary--weak__background-color`

**Category:** Colors
**Usage:** Use mds-secondary--weak__background-color class to get the secondary weak color for background.

#### Example:
```html
<div class="mds"><div class="mds-secondary--weak__background-color">background color in secondary weak appearance</div></div>
```

### `mds-secondary__on-background-color`

**Category:** Colors
**Usage:** Use mds-secondary__on-background-color class to get the secondary color for on-background.

#### Example:
```html
<div class="mds"><div class="mds-secondary__on-background-color">on-background color in secondary appearance</div></div>
```

### `mds-secondary--weak__on-background-color`

**Category:** Colors
**Usage:** Use mds-secondary--weak__on-background-color class to get the secondary weak color for on-background.

#### Example:
```html
<div class="mds"><div class="mds-secondary--weak__on-background-color">on-background color in secondary weak appearance</div></div>
```

### `mds-secondary__border-color`

**Category:** Colors
**Usage:** Use mds-secondary__border-color class to get the secondary color for border.

#### Example:
```html
<div class="mds"><div class="mds-secondary__border-color">border color in secondary appearance</div></div>
```

### `mds-secondary--weak__border-color`

**Category:** Colors
**Usage:** Use mds-secondary--weak__border-color class to get the secondary weak color for border.

#### Example:
```html
<div class="mds"><div class="mds-secondary--weak__border-color">border color in secondary weak appearance</div></div>
```

### `mds-info__text-color`

**Category:** Colors
**Usage:** Use mds-info__text-color class to get the info color for text.

#### Example:
```html
<div class="mds"><div class="mds-info__text-color">text color in info appearance</div></div>
```

### `mds-info--weak__text-color`

**Category:** Colors
**Usage:** Use mds-info--weak__text-color class to get the info weak color for text.

#### Example:
```html
<div class="mds"><div class="mds-info--weak__text-color">text color in info weak appearance</div></div>
```

### `mds-info__background-color`

**Category:** Colors
**Usage:** Use mds-info__background-color class to get the info color for background.

#### Example:
```html
<div class="mds"><div class="mds-info__background-color">background color in info appearance</div></div>
```

### `mds-info--weak__background-color`

**Category:** Colors
**Usage:** Use mds-info--weak__background-color class to get the info weak color for background.

#### Example:
```html
<div class="mds"><div class="mds-info--weak__background-color">background color in info weak appearance</div></div>
```

### `mds-info__on-background-color`

**Category:** Colors
**Usage:** Use mds-info__on-background-color class to get the info color for on-background.

#### Example:
```html
<div class="mds"><div class="mds-info__on-background-color">on-background color in info appearance</div></div>
```

### `mds-info--weak__on-background-color`

**Category:** Colors
**Usage:** Use mds-info--weak__on-background-color class to get the info weak color for on-background.

#### Example:
```html
<div class="mds"><div class="mds-info--weak__on-background-color">on-background color in info weak appearance</div></div>
```

### `mds-info__border-color`

**Category:** Colors
**Usage:** Use mds-info__border-color class to get the info color for border.

#### Example:
```html
<div class="mds"><div class="mds-info__border-color">border color in info appearance</div></div>
```

### `mds-info--weak__border-color`

**Category:** Colors
**Usage:** Use mds-info--weak__border-color class to get the info weak color for border.

#### Example:
```html
<div class="mds"><div class="mds-info--weak__border-color">border color in info weak appearance</div></div>
```

### `mds-error__text-color`

**Category:** Colors
**Usage:** Use mds-error__text-color class to get the error color for text.

#### Example:
```html
<div class="mds"><div class="mds-error__text-color">text color in error appearance</div></div>
```

### `mds-error--weak__text-color`

**Category:** Colors
**Usage:** Use mds-error--weak__text-color class to get the error weak color for text.

#### Example:
```html
<div class="mds"><div class="mds-error--weak__text-color">text color in error weak appearance</div></div>
```

### `mds-error__background-color`

**Category:** Colors
**Usage:** Use mds-error__background-color class to get the error color for background.

#### Example:
```html
<div class="mds"><div class="mds-error__background-color">background color in error appearance</div></div>
```

### `mds-error--weak__background-color`

**Category:** Colors
**Usage:** Use mds-error--weak__background-color class to get the error weak color for background.

#### Example:
```html
<div class="mds"><div class="mds-error--weak__background-color">background color in error weak appearance</div></div>
```

### `mds-error__on-background-color`

**Category:** Colors
**Usage:** Use mds-error__on-background-color class to get the error color for on-background.

#### Example:
```html
<div class="mds"><div class="mds-error__on-background-color">on-background color in error appearance</div></div>
```

### `mds-error--weak__on-background-color`

**Category:** Colors
**Usage:** Use mds-error--weak__on-background-color class to get the error weak color for on-background.

#### Example:
```html
<div class="mds"><div class="mds-error--weak__on-background-color">on-background color in error weak appearance</div></div>
```

### `mds-error__border-color`

**Category:** Colors
**Usage:** Use mds-error__border-color class to get the error color for border.

#### Example:
```html
<div class="mds"><div class="mds-error__border-color">border color in error appearance</div></div>
```

### `mds-error--weak__border-color`

**Category:** Colors
**Usage:** Use mds-error--weak__border-color class to get the error weak color for border.

#### Example:
```html
<div class="mds"><div class="mds-error--weak__border-color">border color in error weak appearance</div></div>
```

### `mds-warning__text-color`

**Category:** Colors
**Usage:** Use mds-warning__text-color class to get the warning color for text.

#### Example:
```html
<div class="mds"><div class="mds-warning__text-color">text color in warning appearance</div></div>
```

### `mds-warning--weak__text-color`

**Category:** Colors
**Usage:** Use mds-warning--weak__text-color class to get the warning weak color for text.

#### Example:
```html
<div class="mds"><div class="mds-warning--weak__text-color">text color in warning weak appearance</div></div>
```

### `mds-warning__background-color`

**Category:** Colors
**Usage:** Use mds-warning__background-color class to get the warning color for background.

#### Example:
```html
<div class="mds"><div class="mds-warning__background-color">background color in warning appearance</div></div>
```

### `mds-warning--weak__background-color`

**Category:** Colors
**Usage:** Use mds-warning--weak__background-color class to get the warning weak color for background.

#### Example:
```html
<div class="mds"><div class="mds-warning--weak__background-color">background color in warning weak appearance</div></div>
```

### `mds-warning__on-background-color`

**Category:** Colors
**Usage:** Use mds-warning__on-background-color class to get the warning color for on-background.

#### Example:
```html
<div class="mds"><div class="mds-warning__on-background-color">on-background color in warning appearance</div></div>
```

### `mds-warning--weak__on-background-color`

**Category:** Colors
**Usage:** Use mds-warning--weak__on-background-color class to get the warning weak color for on-background.

#### Example:
```html
<div class="mds"><div class="mds-warning--weak__on-background-color">on-background color in warning weak appearance</div></div>
```

### `mds-warning__border-color`

**Category:** Colors
**Usage:** Use mds-warning__border-color class to get the warning color for border.

#### Example:
```html
<div class="mds"><div class="mds-warning__border-color">border color in warning appearance</div></div>
```

### `mds-warning--weak__border-color`

**Category:** Colors
**Usage:** Use mds-warning--weak__border-color class to get the warning weak color for border.

#### Example:
```html
<div class="mds"><div class="mds-warning--weak__border-color">border color in warning weak appearance</div></div>
```

### `mds-success__text-color`

**Category:** Colors
**Usage:** Use mds-success__text-color class to get the success color for text.

#### Example:
```html
<div class="mds"><div class="mds-success__text-color">text color in success appearance</div></div>
```

### `mds-success--weak__text-color`

**Category:** Colors
**Usage:** Use mds-success--weak__text-color class to get the success weak color for text.

#### Example:
```html
<div class="mds"><div class="mds-success--weak__text-color">text color in success weak appearance</div></div>
```

### `mds-success__background-color`

**Category:** Colors
**Usage:** Use mds-success__background-color class to get the success color for background.

#### Example:
```html
<div class="mds"><div class="mds-success__background-color">background color in success appearance</div></div>
```

### `mds-success--weak__background-color`

**Category:** Colors
**Usage:** Use mds-success--weak__background-color class to get the success weak color for background.

#### Example:
```html
<div class="mds"><div class="mds-success--weak__background-color">background color in success weak appearance</div></div>
```

### `mds-success__on-background-color`

**Category:** Colors
**Usage:** Use mds-success__on-background-color class to get the success color for on-background.

#### Example:
```html
<div class="mds"><div class="mds-success__on-background-color">on-background color in success appearance</div></div>
```

### `mds-success--weak__on-background-color`

**Category:** Colors
**Usage:** Use mds-success--weak__on-background-color class to get the success weak color for on-background.

#### Example:
```html
<div class="mds"><div class="mds-success--weak__on-background-color">on-background color in success weak appearance</div></div>
```

### `mds-success__border-color`

**Category:** Colors
**Usage:** Use mds-success__border-color class to get the success color for border.

#### Example:
```html
<div class="mds"><div class="mds-success__border-color">border color in success appearance</div></div>
```

### `mds-success--weak__border-color`

**Category:** Colors
**Usage:** Use mds-success--weak__border-color class to get the success weak color for border.

#### Example:
```html
<div class="mds"><div class="mds-success--weak__border-color">border color in success weak appearance</div></div>
```

