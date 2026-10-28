# mc-picker

The picker component is a utility component that allows users to select a combination of values.

**Url:** https://designsystem.maersk.com/components/picker/
**Alternative names:** Picker, Scrollable Selector, Wheel Selector, Scroll Picker
**Keywords:** component, form, field, choice, option, single
**✅ When to use:** When you need a compact way to select an item from a list.
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
npm install @maersk-global/mds-components-core-picker
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-picker
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-picker';
// minimal example usage
<mc-picker arialabel="Pick a fruit"></mc-picker>
// basic example usage
<mc-picker fit="medium" arialabel="Pick a fruit" value=""></mc-picker>
```

### Advanced Examples

#### CustomisedAppearance

```html
<mc-picker>
  <mc-picker-item value="1" label="Apple"></mc-picker-item>
  <mc-picker-item value="2" label="Orange"></mc-picker-item>
  <mc-picker-item value="3" label="Banana"></mc-picker-item>
  <mc-picker-item value="4" label="Apricot"></mc-picker-item>
  <mc-picker-item value="5" label="Kiwi"></mc-picker-item>
  <mc-picker-item value="6" label="Passion fruit"></mc-picker-item>
  <mc-picker-item value="7" label="Dragon fruit"></mc-picker-item>
  <mc-picker-item value="8" label="Plum"></mc-picker-item>
  <mc-picker-item value="9" label="Avocado"></mc-picker-item>
</mc-picker>
  
```

#### ItemsAsDataProp

```html
<mc-picker aria-label="Select icon"></mc-picker>
```

## API

### Properties and attributes

#### fit

- **Type:** small | medium | large
- **Typescript Type:** Fit
- **Default:** medium
- **Description:** Controls the overall size of the component.

#### arialabel

- **Type:** string
- **Default:** Pick a fruit
- **Description:** Should be used to give a proper description to the list from accessibility point of view.

#### data

- **Type:** array
- **Description:** The data to be displayed in picker. It is an array of objects `<IMcListDataItem>` that contains `{ label: string; value: string | number; disabled?: boolean }`

#### value

- **Type:** string
- **Description:** Pass the value for the input if it is used inside a `form` element

### Events

#### pickerselected

- **Type:** CustomEvent<IMcPickerSelectedDetail>
- **Description:** Emitted upon an item scrolls to the middle.

### Types

- IMcPicker: interface
- IMcPickerSelectedDetail: interface
- McPickerItemType: type

### Slots

#### Default slot

- **Description:** Use the default slot, when you want to pass picker items to the picker. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-picker>
  <mc-picker-item label="January">
  </mc-picker-item>
</mc-picker>
```

## CSS parts

#### container

- **Description:** Using this CSS part you can change the look of the selection area inside the picker. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-picker::part(container) {
  background-color: background-color: #40AB35;;
  color: #AAEAE0;
}
```

## Related

- [undefined](undefined)
- [undefined](undefined)

