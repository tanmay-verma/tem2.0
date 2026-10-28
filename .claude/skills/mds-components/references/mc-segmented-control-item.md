# mc-segmented-control-item

A segmented control item to be used within an `mc-segmented-control`.

**Url:** https://designsystem.maersk.com/
**Alternative names:** Segmented Button Group, Tabbed Navigation
**Keywords:** 
**✅ When to use:** When you need to present multiple related options in a compact space.
**❌ When not to use:** For unrelated options or when space is not a concern.

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
npm install @maersk-global/mds-components-core-segmented-control-item
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-segmented-control-item
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-segmented-control-item';
// minimal example usage
<mc-segmented-control-item label="Apple"></mc-segmented-control-item>
// basic example usage
<mc-segmented-control-item label="Apple" fit="medium" href="" icon="" trailingicon=""></mc-segmented-control-item>
```

### Advanced Examples

#### CustomisedAppearance

```html
<mc-segmented-control-item
  icon="apple">
    Apple
</mc-segmented-control-item>
  
```

## API

### Properties and attributes

#### label

- **Type:** string | slot
- **Default:** Apple
- **Description:** Label can be passed as a simple argument like: `label="Label"` or as a slot to mc-segmented-control-item. Use argument style for passing short labels, use slot when you want to pass label with HTML text. Label is required attribute as it will be used as aria-label.

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
- **Description:** Description missing

#### selected

- **Type:** boolean
- **Default:** false
- **Description:** Description missing

### Events

#### onfocus

- **Type:** CustomEvent<IMcSegmentedControlItem>
- **Description:** Dispatched when the toggle button receives focus.

#### onblur

- **Type:** CustomEvent<IMcSegmentedControlItem>
- **Description:** Dispatched when the toggle button loses focus.

### Types

- IMcSegmentedControlItem: interface

### Slots

#### Default slot

- **Description:** Use the default slot, when you want to pass the label as HTML. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-segmented-control-item>
  Label as HTML
</mc-segmented-control-item>
```

#### sublabel

- **Description:** Use the sublabel named slot, when you want to pass the legend as HTML. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-list-item>
  <span slot="sublabel">
    Sub-label as HTML
  </span>
</mc-list-item>
```

#### icon

- **Description:** Use the icon named slot, if  a custom graphic, pictogram, etc. should be used, instead of using MDS icons. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-segmented-control-item>
  <span slot="icon">
    <img src="your-img-src" width="20" height="20" />
  </span>
</mc-segmented-control-item>
```

#### trailingicon

- **Description:** Use the trailingicon named slot, if  a custom graphic, pictogram, etc. should be used, instead of using MDS icons. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-segmented-control-item>
  <span slot="trailingicon">
    <img src="your-img-src" width="20" height="20" />
  </span>
</mc-segmented-control-item>
```

## CSS parts

#### button

- **Description:** Using this CSS part you can change the look of the button element inside the mc-segmented-control-item component. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-segmented-control-item::part(button) {
  color: #40AB35;
}
```

#### text-and-icon

- **Description:** Using this CSS part you can change the look of the text and icon wrapper inside the mc-segmented-control-item component. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-segmented-control-item::part(text-and-icon) {
  flex-direction: column;
}
```

#### icon

- **Description:** Using this CSS part you can change the look of the icon element inside the mc-segmented-control-item component. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-segmented-control-item::part(icon) {
  fill: #40AB35;
}
```

## Related

- [undefined](undefined)

