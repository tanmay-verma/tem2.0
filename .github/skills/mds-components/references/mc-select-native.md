# mc-select-native

A native select component for selecting one option from a list.

**Url:** https://designsystem.maersk.com/
**Alternative names:** Dropdown, ComboBox, Select Box, Picklist
**Keywords:** 
**✅ When to use:** When you need to present a list of options for the user to choose from.
**❌ When not to use:** For single input fields or when space is not a concern.

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
npm install @maersk-global/mds-components-core-select-native
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-select-native
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-select-native';
// minimal example usage
<mc-select-native label="Pick a number" options="[{"value":0,"label":"Zero"},{"value":1,"label":"One"}]"></mc-select-native>
// basic example usage
<mc-select-native label="Pick a number" fit="medium" options="[{"value":0,"label":"Zero"},{"value":1,"label":"One"}]" placeholder="Pick a number from a list" id="field" hint="" variant="default" width="auto" labelposition="top" name="digits" value="[{"value":"1","label":"One"}]" selectedindex="[1]" errormessage=""></mc-select-native>
```

### Advanced Examples

#### LabelAsASlot

```html
<mc-select-native>
  <span slot="label">Label as HTML with custom <a class="mds-neutral__text-color" href="https://designsystem.maersk.com/components/button/">link</a></span>
</mc-select-native>
```

#### LabelWithTooltip

```html
<mc-select-native>
  <span slot="label">
    Label as HTML, i.e. 
    <mc-tooltip>
      <mc-icon slot="trigger" class="icon" icon="info-circle"></mc-icon>
      <span>The HTML content of the tooltip</span>
    </mc-tooltip>
  </span>
</mc-select-native>
<mc-select-native disabled>
  <span slot="label"
    >Label as HTML, i.e.
    <mc-tooltip position="bottom-center">
      <mc-icon slot="trigger" icon="info-circle"></mc-icon>
      <span>The HTML content of the tooltip</span>
    </mc-tooltip>
  </span>
</mc-select-native>
```

#### OptionsAsAnArrayOfObjects

```html
<mc-select-native></mc-select-native>
```

#### PreselectByValue

```html
<mc-select-native></mc-select-native>
```

#### PreselectBySelectedindex

```html
<mc-select-native></mc-select-native>
```

#### HintAsSlot

```html
<mc-select-native>
  <span slot="hint">Hint as HTML with custom <a class="mds-neutral--weak__text-color" href="https://designsystem.maersk.com/components/button/">link</a></span>
</mc-select-native>
```

#### ErrorAsSlot

```html
<mc-input invalid>
  <span slot="errormessage">Error message as HTML with custom <a class="mds-error__text-color" href="https://designsystem.maersk.com/components/button/">link</a></span>
</mc-input>
```

#### LabelToTheLeft

```html
<div class="mds-flex mds-flex-column mds-gap-800">
  <mc-select-native class="text-align-right" label="Name" labelposition="left"></mc-select-native>
  <mc-select-native class="text-align-right" label="Long label text that goes over 1 line" labelposition="left"></mc-select-native>
  <mc-select-native label="Name" labelposition="left"></mc-select-native>
  <mc-select-native label="Long label text that goes over 1 line" labelposition="left"></mc-select-native>
</div>
```

#### CustomisedAppearance

```html
<mc-select-native label="Label text"></mc-select-native>
```

## API

### Properties and attributes

#### label

- **Type:** string | slot
- **Typescript Type:** string
- **Default:** Pick a number
- **Description:** Label can be passed as a simple argument like: `label="Label"` or as a slot to mc-select-native. Use argument style for passing short labels, use slot when you want to pass label with HTML text. Label is required attribute as it will be used as aria-label.

#### hiddenlabel

- **Type:** boolean
- **Default:** false
- **Description:** If set to `true` or the attribute is just presented without any value, then the label will not appear, but will be used as `aria-label` only

#### fit

- **Type:** small | medium | large
- **Typescript Type:** Fit
- **Default:** medium
- **Description:** Controls the overall size of the component.

#### options

- **Type:** Array<number | string | SelectOption>
- **Typescript Type:** McSelectNativeOptions | undefined
- **Default:** [object Object],[object Object],[object Object],[object Object],[object Object],[object Object]
- **Description:** Options are required. They can be passed as an array: `["One", "Two"]` or as an array of objects: `[{value: 1, label: "One"}, {value: 2, label: "Two"}]`

#### placeholder

- **Type:** string
- **Default:** Pick a number from a list
- **Description:** The `placeholder` attribute specifies a short hint that describes the expected value of a field (e.g. a sample value or a short description of the expected format)

#### id

- **Type:** string
- **Default:** field
- **Description:** Id passed to the field and used with label.

#### hint

- **Type:** string | slot
- **Typescript Type:** string | undefined
- **Description:** Hint can be passed as simple argument like: `hint="hint text"` or as a named slot: ```<mc-select-native><span slot="hint">hint text as HTML</span></mc-select-native>``` Use argument style for passing short hints, use named slot when you want to pass hint with HTML text

#### variant

- **Type:** default | vanity | multiple
- **Typescript Type:** 'default' | 'vanity' | 'multiple'
- **Default:** default
- **Description:** Description missing

#### width

- **Type:** auto | number
- **Typescript Type:** string
- **Default:** auto
- **Description:** The width of the inner input container in percentage. If not provided the width will be `auto`.

#### labelposition

- **Type:** top | left
- **Typescript Type:** LabelPosition
- **Default:** top
- **Description:** Position of the label. On small screens, label will always appear on top. See examples under input component on how to set label with and align text within the label. 

#### name

- **Type:** string
- **Default:** digits
- **Description:** Name is required if the component is used inside a `form` element

#### value

- **Type:** Array<number | string | SelectOption>
- **Typescript Type:** McSelectNativeOptions | null | undefined
- **Default:** [object Object]
- **Description:** Specifies the selected options. If the `options` are supplied as an array of strings, then the `value` should follow the same pattern, i.e. `["One", "Two"]`. Otherwise if `options` are supplied as an array of objects the `value` should be i.e. `[{value: 1, label: "One"}, {value: 2, label: "Two"}]`.

#### selectedindex

- **Type:** array
- **Typescript Type:** number[] | undefined
- **Default:** 1
- **Description:** Specifies the selected indexes. If supplied, then the value array will be disregarded.

#### invalid

- **Type:** boolean
- **Default:** false
- **Description:** When `true`, the component border is displayed in red and the `errormessage` is shown if provided.

#### errormessage

- **Type:** string | slot
- **Typescript Type:** string | undefined
- **Description:** Error message will be shown only if `invalid` attribute is set to `true`. Error message can be passed as simple argument like: `errormessage="error"` or as a named slot: ```<mc-select-native><span slot="errormessage">error message as HTML</span></mc-select-native>``` Use argument style for passing short messages, use named slot when you want to pass error message with HTML text

#### disabled

- **Type:** boolean
- **Default:** false
- **Description:** Disables the component, preventing user interaction.

#### required

- **Type:** boolean
- **Default:** false
- **Description:** Indicates that the component requires a value before submission.

### Events

#### change

- **Type:** CustomEvent<IMcSelectNativeChangeDetail>
- **Description:** Emitted when the selected status changes.

### Types

- Fit: re-export
- IMcSelectNative: interface
- IMcSelectNativeChangeDetail: interface
- LabelPosition: re-export
- McSelectNativeOptions: type
- SelectOption: interface
- Variant: type

### Slots

#### label

- **Description:** Use the label named slot, when you want to pass the label as HTML. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-select-native>
  <span slot="label">
    Label as HTML
  </span>
</mc-select-native>
```

#### hint

- **Description:** Use the hint named slot, when you want to pass the hint as HTML. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-select-native>
  <span slot="hint">
    Hint as HTML
  </span>
</mc-select-native>
```

#### errormessage

- **Description:** Use the errormessage named slot, when in invalid state, you want to pass the error message as HTML. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-select-native>
  <span slot="errormessage">
    Error message as HTML
  </span>
</mc-select-native>
```

## CSS parts

#### label-container

- **Description:** Using this CSS part you can change the look of the label container. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-input::part(label-container) {
  display: flex;
  justify-content: flex-end;
}
```

#### label

- **Description:** Using this CSS part you can change the look of the label. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-input::part(label) {
  color: #000000;
}
```

## Related

- [undefined](undefined)
- [undefined](undefined)
- [undefined](undefined)
- [undefined](undefined)
- [undefined](undefined)
- [undefined](undefined)
- [undefined](undefined)
- [undefined](undefined)
- [undefined](undefined)

