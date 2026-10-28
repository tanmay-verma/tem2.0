# mc-link-button

A link button combines the visual appearance of a button with the navigational functionality of a hyperlink.

**Url:** https://designsystem.maersk.com/components/link-button/
**Alternative names:** Link Button, Hyperlink Button, Anchor Button, Text Button, Inline Button
**Keywords:** component, navigation, hyperlink, anchor
**✅ When to use:** When you need a button that looks like a link.
**❌ When not to use:** When you need a standard button.

## Do's

- No specific do guidance documented.


## Don'ts

- No specific don't guidance documented.


## Cautions

- No specific caution guidance documented.


## Best practices

### Best practice
- Use link buttons for navigation within an app or website and other URL-change actions.
- Link buttons can be used for important stand-alone links in the UI, e.g. a “Register” link.
- Use clear and descriptive labels so the user understands the destination of the link.
- The purpose of the link button should be understandable from the label alone.
- Avoid ambiguous and vague labels that are open to interpretation.
- Labels should be sentence case.
- Always make sure that the link button is the best-suited option.
- We recommend that you read our label guidelines for more information on how to write good Labels.

### Usage
- While regular buttons typically are used for on-page actions, link buttons are used for navigating within an app or website.

#### Primary
- The link button can be used to highlight the most important links that lead the user forward through the main user journeys of the website or application.
- Example: maersk.com uses a link button to highlight the main link “Discover new paths”.

#### Secondary
- The link button can also be used for less critical, but still important links that sometimes have a CTA-quality to them. These buttons should be less visually prominent and it is recommended to use the outlined button style for these.
- Example: On this website, we use link buttons to navigate back and forward between pages.

#### In-page URL changes
- The link button can also be used for in-page navigation, where the link button links to a specific section within the page. Examples of this could be a table of contents or showing/hiding specific sections of the page.
- Example: Expanding a section of news cards by clicking the “View all” link button.

### Icons
- Like the regular buttons, the link button can contain an icon, either one to the left or one to the right side of the button label. It is also possible to have an icon-only button.
- Example: Default icon, trailing icon, icon only buttons

#### Icon-only accessibility
- For icon-only buttons, an ARIA-label is automatically added to ensure that users using screen readers can understand what the buttons do. It is therefore very important that we always add a clear and descriptive label to all our buttons.

## Usage & code examples

```bash
// General Setup (JS, VUE, Angular) 
npm install @maersk-global/mds-components-core-link-button
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-link-button
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-link-button';
// minimal example usage
<mc-link-button label="Link"></mc-link-button>
// basic example usage
<mc-link-button href="https://designsystem.maersk.com/support/" label="Link" fit="medium" icon="" trailingicon="" appearance="primary" variant="filled" padding="default" width="auto" justifyitems="center" rel="" target="" arialabel="" ariacurrent="" ariarole=""></mc-link-button>
```

### Advanced Examples

#### LabelAsASlot

```html
<mc-link-button href="http://maersk.com">Link button</mc-link-button>
```

#### WithRouterLink

```html
import '@maersk-global/mds-components-core/mc-link-button';

<mc-link-button>
  <router-link to="/my-route">Link button with router link</router-link>
</mc-link-button>
```

#### CustomisedAppearance

```html
<mc-link-button icon="star"><a href="http://maersk.com">Link button</a></mc-link-button>
  
```

## API

### Properties and attributes

#### href

- **Type:** string
- **Default:** https://designsystem.maersk.com/support/
- **Description:** Passing a href value will render the button as a HTML anchor element.

#### label

- **Type:** string | slot
- **Default:** Link
- **Description:** Label can be passed as a simple argument like: `label="Label"` or as a slot to mc-link-button. Use argument style for passing short labels, use slot when you want to pass label with HTML text. Label is required attribute as it will be used as aria-label.

#### hiddenlabel

- **Type:** boolean
- **Default:** false
- **Description:** If set to `true` or the attribute is just presented without any value, then the label will not appear, but will be used as `aria-label` only

#### fit

- **Type:** small | medium | large
- **Typescript Type:** Fit
- **Default:** medium
- **Description:** Controls the overall size of the component.

#### icon

- **Type:** string | slot
- **Description:** Icon displayed at the start (front) of the component.

- **Available options:** [Icons List](../mds-icons/references/icons-list.md)

#### trailingicon

- **Type:** string | slot
- **Description:** Icon displayed at the end (trailing) of the component.

- **Available options:** [Icons List](../mds-icons/references/icons-list.md)

#### loading

- **Type:** boolean
- **Default:** false
- **Description:** If set to `true`, it'll set the button state to loading and a loading spinner will be shown. The leading/trailing icon (if exists) is replaced by the spinner. This state also prevents the user from clicking and activating or submitting something more than one time.

#### labels

- **Type:** IMcButtonLabels
- **Description:** Custom labels for mc-button component. By default labels are loaded in EN language. Check <a href="https://github.com/Maersk-Global/mds/blob/main/packages/mc-button/src/lib/translations.ts" target="_blank" rel="noopener noreferrer">types documentation</a> to see how to use custom labels property.

#### appearance

- **Type:** primary | secondary | neutral | inverse | error
- **Typescript Type:** primary|secondary|neutral|inverse|error
- **Default:** primary
- **Description:** Controls the visual style of the component. If not set, the default appearance is <b>primary</b>.

#### variant

- **Type:** filled | outlined | plain
- **Default:** filled
- **Description:** Defines the visual style of the button.

#### padding

- **Type:** default | compact | none
- **Default:** default
- **Description:** Controls the internal spacing of the button.

#### width

- **Type:** auto | full-width
- **Default:** auto
- **Description:** Auto width style depends on the text length, full-width style will adjust to the parent container width

#### rounded

- **Type:** boolean
- **Default:** false
- **Description:** Whether the button should have fully rounded corners.

#### justifyitems

- **Type:** center | left | right | space-between
- **Default:** center
- **Description:** Allows to position items inside the button like label text & icon. Specially useful when using `width="full-width"`

#### disabled

- **Type:** boolean
- **Default:** false
- **Description:** Disables the component, preventing user interaction.

#### active

- **Type:** boolean
- **Default:** false
- **Description:** Applies the active (pressed) visual state to the button.

#### rel

- **Type:** string
- **Description:** The relationship of the linked URL as space-separated <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types" target="_blank">link types</a>.

#### target

- **Type:** string
- **Description:** Where to display the linked URL, as the name for a browsing context (a tab, window, or &lt;iframe&gt;).

#### arialabel

- **Type:** string
- **Description:** Should 'only' be used if for the sake of accessibility the `aria-label` is differnt that the label which appears on the button, so that for instance the screen reader can provide more details than what's being visually displayed as a label on the button component.

#### ariacurrent

- **Type:** string
- **Description:** Sets the aria-current on the inner button in cases like pagination where the button is repeated in a list and at the same time, the currently active item needs to be specified.

#### ariarole

- **Type:** string
- **Description:** Sets the `role` on the inner button in cases like `tab-bar` where of every button is `tab`

### Events

#### click

- **Type:** MouseEvent
- **Description:** Emitted when the button is clicked.

#### focus

- **Type:** FocusEvent
- **Description:** Emitted when the button is focused.

#### blur

- **Type:** FocusEvent
- **Description:** Emitted when the button is blurred.


### Slots

#### Default slot

- **Description:** Use the default slot, when you want to pass the label as HTML. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-button>
  Label as HTML
</mc-button>
```

#### icon

- **Description:** Use the icon named slot, if  a custom graphic, pictogram, etc. should be used, instead of using MDS icons. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-button>
  <span slot="icon">
    <img src="your-img-src" width="20" height="20" />
  </span>
</mc-button>
```

#### trailingicon

- **Description:** Use the trailingicon named slot, if  a custom graphic, pictogram, etc. should be used, instead of using MDS icons. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-button>
  <span slot="trailingicon">
    <img src="your-img-src" width="20" height="20" />
  </span>
</mc-button>
```

## CSS parts

#### button

- **Description:** Using this CSS part you can change the look of the button element inside the mc-link-button component. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-link-button::part(button) {
  background-color: #00897A;
  color: #AAEAE0;
}
```

#### icon

- **Description:** Using this CSS part you can change the look of the icon element inside the mc-link-button component. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-link-button::part(icon) {
  fill: #000000
}
```

#### text-and-icon

- **Description:** Using this CSS part you can change the look of the container element inside the component. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-link-button::part(text-and-icon) {
  gap: 24px;
}
```

#### text-and-icon-labels

- **Description:** Using this CSS part you can change the look of the text element inside the component. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-link-button::part(text-and-icon-labels) {
  gap: 24px;
}
```

#### text-and-icon-label

- **Description:** Using this CSS part you can change the look of the label element inside the component. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-link-button::part(text-and-icon-label) {
  gap: 24px;
}
```

#### text-and-icon-sublabel

- **Description:** Using this CSS part you can change the look of the sublabel element inside the component. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-link-button::part(text-and-icon-sublabel) {
  gap: 24px;
}
```

## Related

- [Button](https://designsystem.maersk.com/components/button/)
- [Labels](https://designsystem.maersk.com/content/labels/)
- [Link](https://designsystem.maersk.com/components/link/)

