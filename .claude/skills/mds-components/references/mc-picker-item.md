# mc-picker-item

To represent an individual item in the mc-picker.

**Url:** https://designsystem.maersk.com/
**Alternative names:** Picker Item, Scrollable Item, Wheel Item, Scroll Picker Item
**Keywords:** 
**✅ When to use:** When you need to display an item in a picker.
**❌ When not to use:** When you have a small number of items to choose from.

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
npm install @maersk-global/mds-components-core-picker-item
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-picker-item
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-picker-item';
// minimal example usage
<mc-picker-item label="Apple"></mc-picker-item>
// basic example usage
<mc-picker-item label="Apple" fit="medium" value="0"></mc-picker-item>
```

### Advanced Examples

#### CustomisedAppearance

```html
<mc-picker-item icon="apple" label="Apple">
</mc-picker-item>
  
```

## API

### Properties and attributes

#### label

- **Type:** string
- **Default:** Apple
- **Description:** Label can be passed as a simple argument like: `label="Label"`. Label is required attribute as it will be used as aria-label.

#### fit

- **Type:** small | medium | large
- **Typescript Type:** Fit
- **Default:** medium
- **Description:** Controls the overall size of the component.

#### value

- **Type:** string | number | object
- **Typescript Type:** string
- **Default:** 0
- **Description:** The value of the item

### Types

- IMcPickerItem: interface
- PickerItemWidth: type

### Slots

#### icon

- **Description:** Use the icon named slot, if  a custom graphic, pictogram, etc. should be used, instead of using MDS icons. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-picker-item>
  <span slot="icon">
    <img src="your-img-src" width="20" height="20" />
  </span>
</mc-picker-item>
```

#### trailingicon

- **Description:** Use the trailingicon named slot, if  a custom graphic, pictogram, etc. should be used, instead of using MDS icons. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-picker-item>
  <span slot="trailingicon">
    <img src="your-img-src" width="20" height="20" />
  </span>
</mc-picker-item>
```

## CSS parts

#### button

- **Description:** Using this CSS part you can change the look of the button element inside the mc-picker-item component. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-picker-item::part(button) {
  color: #40AB35;
}
```

#### icon

- **Description:** Using this CSS part you can change the look of the icon element inside the mc-list-item component. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-list-item::part(icon) {
  fill: #40AB35;
}
```

## Related

- [undefined](undefined)

