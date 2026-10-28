# mc-copy-button

Wraps inline content with a copy-to-clipboard button and tooltip feedback.

**Url:** https://designsystem.maersk.com/
**Alternative names:** Copy Item, Clipboard Button, Copy with tooltip
**Keywords:** 
**✅ When to use:** Use when users need to copy a short text value such as an ID, tracking number, or invoice number.
**❌ When not to use:** Not for copying large code blocks — use mc-code-preview instead.

## Do's

- No specific do guidance documented.


## Don'ts

- No specific don't guidance documented.


## Cautions

- No specific caution guidance documented.


## Best practices

No specific best practices documented.

## Usage & code examples

```bash
// General Setup (JS, VUE, Angular) 
npm install @maersk-global/mds-components-core-copy-button
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-copy-button
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-copy-button';
// minimal example usage
<mc-copy-button label="Copy"></mc-copy-button>
// basic example usage
<mc-copy-button label="Copy" hiddenlabel fit="medium" appearance="neutral" variant="plain" padding="default" href="" rel="" target="" arialabel="" ariacurrent="" ariarole="" copytext="" tooltipposition="bottom-center"></mc-copy-button>
```

### Advanced Examples

#### UsingCopytextProp

```html
<mc-copy-button
  copytext="ABC-12345678-9"
  label="Copy invoice number">
  <!-- The provided copytext will be copied, but this HTML will be shown to the user -->
</mc-copy-button>
```

#### InvoiceNumberWithHoverAction

```html
<mc-table>
  <mc-copy-button slot="1_invoiceNumber" showonhover copytext="123456789" hiddenlabel tooltipposition="top-center">123 456 789</mc-copy-button>
  <mc-copy-button slot="2_invoiceNumber" showonhover copytext="583938382" hiddenlabel tooltipposition="top-center">583 938 382</mc-copy-button>
  <mc-copy-button slot="3_invoiceNumber" showonhover copytext="584091234" hiddenlabel tooltipposition="top-center">584 091 234</mc-copy-button>
</mc-table>
```

#### CustomTooltipText

```html
<mc-copy-button
  hiddenlabel
  .labels=\${{
    copy: 'Copy invoice number',
    copied: 'Copied invoice number',
  }}
>
  <b>ABC-12345678-9</b>
</mc-copy-button>
```

## API

### Properties and attributes

#### label

- **Type:** string | slot
- **Default:** Copy
- **Description:** The visible or accessible label of the copy button.

#### hiddenlabel

- **Type:** boolean
- **Default:** true
- **Description:** If `true`, the label is visually hidden. If `false`, the label is displayed next to the copy icon.

#### fit

- **Type:** small | medium | large
- **Typescript Type:** Fit
- **Default:** medium
- **Description:** Controls the overall size of the component.

#### loading

- **Type:** boolean
- **Default:** false
- **Description:** If set to `true`, it'll set the button state to loading and a loading spinner will be shown. The leading/trailing icon (if exists) is replaced by the spinner. This state also prevents the user from clicking and activating or submitting something more than one time.

#### labels

- **Type:** IMcCopyButtonLabels
- **Description:** Custom labels for mc-copy-button component. By default labels are loaded in EN language. Check <a href="https://github.com/Maersk-Global/mds/blob/main/packages/mc-copy-button/src/lib/translations.ts" target="_blank" rel="noopener noreferrer">types documentation</a> to see how to use custom labels property.

#### appearance

- **Type:** primary | secondary | neutral | inverse | error
- **Typescript Type:** primary|secondary|neutral|inverse|error
- **Default:** neutral
- **Description:** Controls the visual style of the component. If not set, the default appearance is <b>primary</b>.

#### variant

- **Type:** filled | outlined | plain
- **Default:** plain
- **Description:** Defines the visual style of the button.

#### padding

- **Type:** default | compact | none
- **Default:** default
- **Description:** Controls the internal spacing of the button.

#### disabled

- **Type:** boolean
- **Default:** false
- **Description:** Disables the component, preventing user interaction.

#### href

- **Type:** string
- **Description:** Passing a href value will render the button as a HTML anchor element.

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

#### showonhover

- **Type:** boolean
- **Default:** false
- **Description:** If `true`, the copy icon is hidden until the item is hovered or focused. If `false`, the copy icon is always visible.

#### copytext

- **Type:** string
- **Description:** If provided, this value will be copied to the user's clipboard when the item is clicked. If not provided, the content of the slot will be copied.

#### tooltipposition

- **Type:** bottom-left | bottom-center | bottom-right | top-left | top-center | top-right | left-top | left-center | left-bottom | right-top | right-center | right-bottom
- **Typescript Type:** McCopyButtonTooltipPosition
- **Default:** bottom-center
- **Description:** The position of the tooltip relative to the copied item.

### Events

#### itemcopied

- **Type:** CustomEvent<IMcCopyButtonItemCopiedDetail>
- **Description:** Fired when the copy action is performed.

### Types

- ButtonPadding: re-export
- IMcCopyButton: interface
- IMcCopyButtonItemCopiedDetail: interface
- IMcCopyButtonLabels: interface
- McCopyButtonTooltipPosition: type

### Slots

#### The

- **Description:** default slot for the content to display alongside the copy button.

```html

```

#### loadinglabel

- **Description:** Inherited from mc-button. Accessible loading text.

```html

```

## CSS parts

#### button

- **Description:** Using this CSS part you can change the look of the button element inside the mc-button component. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-button::part(button) {
  background-color: #00897A;
  color: #AAEAE0;
}
```

#### icon

- **Description:** Using this CSS part you can change the look of the icon element inside the mc-button component. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-button::part(icon) {
  fill: #000000
}
```

#### label

- **Description:** Inherited from mc-button. The button label.

```css

```

#### copy-button

- **Description:** Using this CSS part you can change the look of the wrapper around the copy button trigger. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-copy-button::part(copy-button) {
  background-color: #00897A;
  color: #AAEAE0;
}
```

## Related

- [undefined](undefined)
- [undefined](undefined)

