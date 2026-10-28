# mc-button-group-item

The button group item is supposed to be used and repeated inside an `mc-button-group`.

**Url:** https://designsystem.maersk.com/
**Alternative names:** Button Set Item, Action Group Item, Toggle Group Item
**Keywords:** 
**✅ When to use:** Related actions, Toggle options, Navigation between views
**❌ When not to use:** Single actions, Non-related buttons

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
npm install @maersk-global/mds-components-core-button-group-item
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-button-group-item
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-button-group-item';
// minimal example usage
<mc-button-group-item label="Archive"></mc-button-group-item>
// basic example usage
<mc-button-group-item label="Archive" fit="medium" href="" icon="" trailingicon="" selectedappearance="primary"></mc-button-group-item>
```

### Advanced Examples

#### CustomisedAppearance

```html
<mc-button-group-item
  icon="apple">
    Apple
</mc-button-group-item>
  
```

## API

### Properties and attributes

#### label

- **Type:** string | slot
- **Default:** Archive
- **Description:** Label can be passed as a simple argument like: `label="Label"` or as a slot to mc-button-group-item. Use argument style for passing short labels, use slot when you want to pass label with HTML text. Label is required attribute as it will be used as aria-label.

#### fit

- **Type:** small | medium | large
- **Typescript Type:** Fit
- **Default:** medium
- **Description:** Controls the overall size of the component.

#### hiddenlabel

- **Type:** boolean
- **Default:** false
- **Description:** If set to `true` or the attribute is just presented without any value, then the label will not appear, but will be used as `aria-label` only

#### href

- **Type:** string
- **Description:** Passing a href value will render the list item as a HTML anchor element.

#### icon

- **Type:** string | slot
- **Description:** Name of the icon. Set to `empty` if you want the icon's space to be preserved but it should appear blank.

- **Available options:** [Icons List](../mds-icons/references/icons-list.md)

#### trailingicon

- **Type:** string | slot
- **Description:** Name of the icon. Set to `empty` if you want the icon's space to be preserved but it should appear blank.

- **Available options:** [Icons List](../mds-icons/references/icons-list.md)

#### disabled

- **Type:** boolean
- **Default:** false
- **Description:** Disables the component, preventing user interaction.

#### selected

- **Type:** boolean
- **Default:** false
- **Description:** Indicates that the button item is selected, applying the selected (filled) visual state.

#### selectedappearance

- **Type:** primary | neutral
- **Typescript Type:** 'primary' | 'neutral'
- **Default:** primary
- **Description:** The appearance of the button when selected. Primary uses the primary filled appearance, neutral uses the neutral filled appearance.

### Events

#### focus

- **Type:** CustomEvent<IMcButtonGroupItem>
- **Description:** Dispatched when the toggle button receives focus.

#### blur

- **Type:** CustomEvent<IMcButtonGroupItem>
- **Description:** Dispatched when the toggle button loses focus.

### Types

- IMcButtonGroupItem: interface
- IMcButtonGroupItemPosition: type
- IMcButtonGroupItemVariant: type

### Slots

#### Default slot

- **Description:** Use the default slot, when you want to pass the label as HTML. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-button-group-item>
  Label as HTML
</mc-button-group-item>
```

#### sublabel

- **Description:** Use the sublabel named slot, when you want to pass the legend as HTML. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-button-group-item>
  <span slot="sublabel">
    Sub-label as HTML
  </span>
</mc-button-group-item>
```

#### icon

- **Description:** Use the icon named slot, if  a custom graphic, pictogram, etc. should be used, instead of using MDS icons. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-button-group-item>
  <span slot="icon">
    <img src="your-img-src" width="20" height="20" />
  </span>
</mc-button-group-item>
```

#### trailingicon

- **Description:** Use the trailingicon named slot, if  a custom graphic, pictogram, etc. should be used, instead of using MDS icons. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-button-group-item>
  <span slot="trailingicon">
    <img src="your-img-src" width="20" height="20" />
  </span>
</mc-button-group-item>
```

## CSS parts

#### button

- **Description:** Using this CSS part you can change the look of the button element inside the mc-button-group-item component. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-button-group-item::part(button) {
  color: #40AB35;
}
```

#### text-and-icon

- **Description:** Using this CSS part you can change the look of the text and icon wrapper inside the mc-button-group-item component. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-button-group-item::part(text-and-icon) {
  flex-direction: column;
}
```

#### icon

- **Description:** Using this CSS part you can change the look of the icon element inside the mc-button-group-item component. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-button-group-item::part(icon) {
  fill: #40AB35;
}
```

## Related

- [undefined](undefined)

