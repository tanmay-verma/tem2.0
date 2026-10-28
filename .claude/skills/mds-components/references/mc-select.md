# mc-select

A Select allows users to choose one option from a list of options.

**Url:** https://designsystem.maersk.com/components/select/
**Alternative names:** Dropdown, ComboBox, Select Box, Picklist
**Keywords:** component, form, field, input, choice, option, multiple, filter
**✅ When to use:** When you need to present a list of options for the user to choose from.
**❌ When not to use:** For single input fields or when space is not a concern.

## Do's

- No specific do guidance documented.


## Don'ts

- No specific don't guidance documented.


## Cautions

- No specific caution guidance documented.


## Best practices

### Best practice
- Use a Select to select one option from a long list of mutually exclusive options.
- The Select field and the options popover should have the same width.
- When grouping options, ensure the groups are logical and helpful to the user.
- The label should describe what the user is selecting. Check the Label Guidelines.
- Use the help text to provide additional context and explanation.
- Use Radio Buttons, if there are six options or fewer, unless it negatively impacts the UI layout.
- If there are more than 10-15 options, then activate the search functionality.
- Use the Typeahead, instead, if the list of options is very long.

### Implementations
- The Maersk Design System offers two single-select components, “Select” and “Select Native”.
- We recommend using the Select whenever possible, as it increases visual consistency and behaviour across browsers.
- Example: Options are visually aligned with the MDS themes and rendered consistently across browsers.Greater flexibility with option group headers and dividers supported.Rendered using <mc-select />.
- Example: Options are rendered natively by the browserOptions are not visually aligned with the MDS themes and maybe rendered differently across browsers.Rendered using <mc-native-select />.

### Search
- In cases where the list of options is longer than 10-15, it is recommended to activate the search functionality in the drop-down list. The longer the list the more difficult it becomes for the user to scan the options, but already when the list is between 10-15 options, the ability scan slows down. A search can in these cases be a great way to speed up the process of finding the right option.
- Example: Use the search to filter the list of options.
- Both components allow users to search and select an option from a list, but they serve different use cases and user behaviour. Read about the difference in the Selection Components Guidelines.

### Grouping options
- The Select allows for grouping the selectable options. You can use headlines and horizontal dividers to group selectable options. These groups will give users a more logical browsing experience and better scannability.
- Example: Grouping with headlines only.
- Example: Grouping with headlines and horizontal dividers.

### Clearing a selection
- The Select offers two ways of clearing an already-made selection. The default way displays an additional selectable option on top of the list that removes the selection and returns the Select input to its default preselected state.
- The alternative way displays an icon action in the input field. It allows users to interact with it by clicking, touching, or using the backspace key on the keyboard to remove an existing selection.
- Example: The default select clear pattern is well recognised and suitable in any context, including high-density interface and long forms.
- Example: Use a clear button only for short forms or single fields. Otherwise, it will increase visual noise, which could increase cognitive load.

### Label
- By default, the component has a top-positioned label. It is possible to change the position of the label to be left-positioned. We recommend that you use the top-positioned labels wherever possible, especially in forms. You can read more about why we recommend top-positioned labels in our Form Guidelines.
- For information on how to write good and consistent labels - see our Label Guidelines.

### Hint text & error state
- Please see the Input component for details on Hint Text and Error State.

### Vanity variant
- The component supports the “vanity” style variant.
- Please read more about this variant in our Form Guidelines.

## Usage & code examples

```bash
// General Setup (JS, VUE, Angular) 
npm install @maersk-global/mds-components-core-select
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-select
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-select';
// minimal example usage
<mc-select label="Containers"></mc-select>
// basic example usage
<mc-select listsearchplaceholder="Search..." filtertype="contains" label="Containers" placeholder="Select container type" hint="" variant="default" fit="medium" labelposition="top" icon="" id="field" errormessage="" name="username" value="" optionswidth="trigger" optionsheight=""></mc-select>
```

### Advanced Examples

#### OptionsAsDataProp

```html
<mc-select listsearch label="Select icon"></mc-select>
```

#### WithOptionGroup

```html
<mc-select name="select" label="Select item">
  <small>Numbers</small>
  <mc-option value="1">One</mc-option>
  <mc-option value="2">Two</mc-option>
  <mc-option value="3">Three</mc-option>
  <small>Letters</small>
  <mc-option value="a">A</mc-option>
  <mc-option value="b">B</mc-option>
  <mc-option value="c">C</mc-option>
</mc-select>
```

#### WithOptionGroupAndDividers

```html
<mc-select name="selectOne" label="Select medium item">
  <small>Numbers</small>
  <mc-option value="1">One</mc-option>
  <mc-option value="2">Two</mc-option>
  <mc-option value="3">Three</mc-option>
  <hr />
  <small>Letters</small>
  <mc-option value="a">A</mc-option>
  <mc-option value="b">B</mc-option>
  <mc-option value="c">C</mc-option>
</mc-select>
```

#### WithDisabledOption

```html
<mc-select name="select" label="Select item">
  <mc-option value="1">One</mc-option>
  <mc-option value="2">Two</mc-option>
  <mc-option value="3" disabled>Three</mc-option>
  <mc-option value="4">Four</mc-option>
</mc-select>
```

#### GenerateDynamicOptions

```html
<mc-select id="continent-select" label="Continent" placeholder="Select a continent">
  <mc-option value="Europe">Europe</mc-option>
  <mc-option value="Asia">Asia</mc-option>
  <mc-option value="Americas">Americas</mc-option>
  <mc-option value="Africa">Africa</mc-option>
  <mc-option value="Oceania">Oceania</mc-option>
</mc-select>
<mc-select id="country-select" label="Country" placeholder="Select a continent first" disabled></mc-select>
```

#### WithManyOption

```html
<mc-select name="select" label="Select item" hiddenlabel placeholder="Pick an icon"></mc-select>
```

#### CustomLabels

```html
<mc-select
  id="withLang"
  label="Vælg ikon"
  listsearch
></mc-select>
```

#### LeftLabel

```html
<div class="mds-flex mds-flex-column mds-gap-800">
  <mc-select class="text-align-right" label="Name" labelposition="left">
    <mc-option value="1">One</mc-option>
    <mc-option value="2">Two</mc-option>
    <mc-option value="3">Three</mc-option>
    <mc-option value="4">Four</mc-option>
    <mc-option value="5">Five</mc-option>
  </mc-select>
  <mc-select label="Name" labelposition="left">
    <mc-option value="1">One</mc-option>
    <mc-option value="2">Two</mc-option>
    <mc-option value="3">Three</mc-option>
    <mc-option value="4">Four</mc-option>
    <mc-option value="5">Five</mc-option>
  </mc-select>
  <mc-select class="text-align-right" label="Long label text that goes over 1 line" labelposition="left">
    <mc-option value="1">One</mc-option>
    <mc-option value="2">Two</mc-option>
    <mc-option value="3">Three</mc-option>
    <mc-option value="4">Four</mc-option>
    <mc-option value="5">Five</mc-option>
  </mc-select>
  <mc-select label="Long label text that goes over 1 line" labelposition="left">
    <mc-option value="1">One</mc-option>
    <mc-option value="2">Two</mc-option>
    <mc-option value="3">Three</mc-option>
    <mc-option value="4">Four</mc-option>
    <mc-option value="5">Five</mc-option>
  </mc-select>
</div>
```

#### Slot

```html
<mc-select>
  <span slot="label">Label as HTML with custom <a class="mds-neutral__text-color" href="https://designsystem.maersk.com/components/button/">link</a></span>
  <mc-option value="1">One</mc-option>
  <mc-option value="2">Two</mc-option>
  <mc-option value="3">Three</mc-option>
  <mc-option value="4">Four</mc-option>
  <mc-option value="5">Five</mc-option>
</mc-select>
```

#### LabelWithTooltip

```html
<mc-select>
  <span slot="label">
    Label as HTML, i.e. 
    <mc-tooltip>
      <mc-icon slot="trigger" icon="info-circle"></mc-icon>
      <span>The HTML content of the tooltip</span>
    </mc-tooltip>
  </span>
  <mc-option value="1">One</mc-option>
  <mc-option value="2">Two</mc-option>
  <mc-option value="3">Three</mc-option>
  <mc-option value="4">Four</mc-option>
  <mc-option value="5">Five</mc-option>
</mc-select>
<mc-select disabled>
  <span slot="label">
    Label as HTML, i.e. 
    <mc-tooltip>
      <mc-icon slot="trigger" icon="info-circle"></mc-icon>
      <span>The HTML content of the tooltip</span>
    </mc-tooltip>
  </span>
  <mc-option value="1">One</mc-option>
  <mc-option value="2">Two</mc-option>
  <mc-option value="3">Three</mc-option>
  <mc-option value="4">Four</mc-option>
  <mc-option value="5">Five</mc-option>
</mc-select>
```

#### HintSlot

```html
<mc-select label="Name">
  <span slot="hint">Hint as HTML with custom <a class="mds-neutral--weak__text-color" href="https://designsystem.maersk.com/components/button/">link</a></span>
  <mc-option value="1">One</mc-option>
  <mc-option value="2">Two</mc-option>
  <mc-option value="3">Three</mc-option>
  <mc-option value="4">Four</mc-option>
  <mc-option value="5">Five</mc-option>
</mc-select>
```

#### ErrorSlot

```html
<mc-select label="Name" invalid>
  <span slot="errormessage">Error message as HTML with custom <a class="mds-error__text-color" href="https://designsystem.maersk.com/components/button/">link</a></span>
  <mc-option value="1">One</mc-option>
  <mc-option value="2">Two</mc-option>
  <mc-option value="3">Three</mc-option>
  <mc-option value="4">Four</mc-option>
  <mc-option value="5">Five</mc-option>
</mc-select>
```

#### CustomisedAppearance

```html
<mc-select label="Name">
  <mc-option value="1">One</mc-option>
  <mc-option value="2">Two</mc-option>
  <mc-option value="3">Three</mc-option>
  <mc-option value="4">Four</mc-option>
  <mc-option value="5">Five</mc-option>
</mc-select>
```

#### WithDynamicOptions

```html
<div class="mds-flex mds-flex-column mds-gap-800">
  <mc-select label="Select item">
    <mc-option value="1">One</mc-option>
    <mc-option value="2">Two</mc-option>
    <mc-option value="3">Three</mc-option>
    <mc-option value="a">A</mc-option>
    <mc-option value="b">B</mc-option>
    <mc-option value="c">C</mc-option>
  </mc-select>
  <mc-button id="remove-last-option">Remove last option</mc-button>
  <mc-button id="add-last-option">Add last option</mc-button>
</div>
```

#### OptionsWithHTML

```html
<mc-select label="Select number">
  <mc-option value="1"><strong>1</strong>&nbsp;One&nbsp;<strong>1</strong></mc-option>
  <mc-option value="2"><strong>2</strong>&nbsp;Two&nbsp;<strong>2</strong></mc-option>
  <mc-option value="3"><strong>3</strong>&nbsp;Three&nbsp;<strong>3</strong></mc-option>
  <mc-option value="4"><strong>4</strong>&nbsp;Four&nbsp;<strong>4</strong></mc-option>
  <mc-option value="5"><strong>5</strong>&nbsp;Five&nbsp;<strong>5</strong></mc-option>
</mc-select>
```

#### SelectAndInput

```html
<fieldset>
  <legend>Phone number</legend>
  <div>
    <mc-select hiddenlabel label="country code">
      <mc-option value="+40">+40</mc-option>
      <mc-option value="+41">+41</mc-option>
      <mc-option value="+42">+42</mc-option>
      <mc-option value="+43">+43</mc-option>
      <mc-option value="+44">+44</mc-option>
      <mc-option value="+45">+45</mc-option>
      <mc-option value="+46">+46</mc-option>
    </mc-select>
    <mc-input hiddenlabel label="phone"></mc-input>
  </div>
</fieldset>
```

#### WithTimeout

```html
<mc-select id="select-without" label="Without timeout"></mc-select>
<mc-select id="select-with" label="With timeout"></mc-select>
```

## API

### Properties and attributes

#### data

- **Type:** array
- **Typescript Type:** IMcSelectData[] | null | undefined
- **Default:** null
- **Description:** The data to be displayed in dropdown. It is an array of objects`<IMcSelectData>` that contains of `{ label: string; value: string | number; icon?: string; disabled?: boolean; group?: string; }`

#### listsearch

- **Type:** boolean
- **Default:** false
- **Description:** If set to `true` or the attribute is just presented without any value, then the search box will be visible in the listbox, and user will be able to search and filter list items.

#### listsearchplaceholder

- **Type:** string
- **Default:** Search...
- **Description:** The placeholder text for the search input when listsearch is enabled.

#### filtertype

- **Type:** startsWith | contains
- **Typescript Type:** IMcListFilterType
- **Default:** contains
- **Description:** Filter type to be used for filtering the list items. The default value is: `contains`, which will filter the list items based on any matching text within the item. 
The other option is: `startsWith`, which will filter the items that starts with the matching text.

#### customfilter

- **Type:** function
- **Typescript Type:** ((text: string, value: string) => string[]) | undefined
- **Description:** Specifies custom match function that should filter the results in the typeahead based on the typed text.

#### matchlabelonly

- **Type:** boolean
- **Default:** false
- **Description:** Specifies if internal or custom filter function should match and filter the results in the label text only based on the typed text. Match will not apply to sublabel or value of the data item

#### label

- **Type:** string | slot
- **Default:** Containers
- **Description:** Label can be passed as a simple argument like: `label="Label"` or as a slot to mc-select. Use argument style for passing short labels, use slot when you want to pass label with HTML text. Label is required attribute as it will be used as aria-label.

#### hiddenlabel

- **Type:** boolean
- **Default:** false
- **Description:** If set to `true` or the attribute is just presented without any value, then the label will not appear, but will be used as `aria-label` only

#### placeholder

- **Type:** string
- **Default:** Select container type
- **Description:** The `placeholder` attribute specifies a short hint that describes the expected value of a field (e.g. a sample value or a short description of the expected format)

#### hint

- **Type:** string | slot
- **Description:** Hint can be passed as simple argument like: `hint="hint text"` or as a named slot: ```<mc-select><span slot="hint">hint text as HTML</span></mc-select>``` Use argument style for passing short hints, use named slot when you want to pass hint with HTML text

#### loading

- **Type:** boolean
- **Default:** false
- **Description:** If set to `true`, it'll set the input state to loading and a loading spinner will be shown. The leading/trailing icon, suffix/prefix or clear button (if exists) will be replaced by the spinner.

#### autofocus

- **Type:** boolean
- **Default:** false
- **Description:** The autofocus global attribute is a Boolean attribute indicating that an element should be focused on page load, or when the <dialog> that it is part of is displayed.

#### variant

- **Type:** default | vanity
- **Default:** default
- **Description:** Controls the visual style of the component.

#### fit

- **Type:** small | medium | large
- **Typescript Type:** Fit
- **Default:** medium
- **Description:** Controls the overall size of the component.

#### labelposition

- **Type:** top | left
- **Default:** top
- **Description:** Position of the label. On small screens, label will always appear on top. See examples under input component on how to set label with and align text within the label. 

#### icon

- **Type:** string
- **Description:** Icon displayed at the start (front) of the component.

- **Available options:** [Icons List](../mds-icons/references/icons-list.md)

#### id

- **Type:** string
- **Default:** field
- **Description:** Id passed to the field and used with label.

#### clearbutton

- **Type:** boolean
- **Default:** false
- **Description:** Controls whether a clear (×) action button is shown within the input field.

#### invalid

- **Type:** boolean
- **Default:** false
- **Description:** When `true`, the component border is displayed in red and the `errormessage` is shown if provided.

#### errormessage

- **Type:** string | slot
- **Description:** Error message will be shown only if `invalid` attribute is set to `true`. Error message can be passed as simple argument like: `errormessage="error"` or as a named slot: ```<mc-select><span slot="errormessage">error message as HTML</span></mc-select>``` Use argument style for passing short messages, use named slot when you want to pass error message with HTML text

#### disabled

- **Type:** boolean
- **Default:** false
- **Description:** Disables the component, preventing user interaction.

#### readonly

- **Type:** boolean
- **Default:** false
- **Description:** Indicates that the component is read-only and cannot be modified by the user.

#### required

- **Type:** boolean
- **Default:** false
- **Description:** Indicates that the component requires a value before submission.

#### name

- **Type:** string
- **Default:** username
- **Description:** Name is required if the component is used inside a `form` element

#### value

- **Type:** string | number | object
- **Typescript Type:** string
- **Description:** The initial value, it can be passed a primitive value like string or number, or a complex object

#### labels

- **Type:** IMcSelectLabels
- **Typescript Type:** Partial<IMcSelectLabels> | undefined
- **Description:** Custom labels for mc-select component. By default labels are loaded in EN language. Check <a href="https://github.com/Maersk-Global/mds/blob/main/packages/mc-select/src/lib/translations.ts" target="_blank" rel="noopener noreferrer">types documentation</a> and the <a href="?path=/story/components-select-examples--custom-labels">Custom Labels story example</a> to see how to use custom labels property.

#### optionswidth

- **Type:** trigger | auto
- **Typescript Type:** string
- **Default:** trigger
- **Description:** Specifies the width of the popover. If set to trigger, the width will be set to the width of the select. If set to auto, the popover width will depend on the width of the items inside select. It can be also passed as specific value in CSS units i.e. 200px.

#### optionsheight

- **Type:** string
- **Description:** Specifies the maximum height of the popover in CSS units i.e. 200px. If not provided, the height will be automatically calculated based on the space available.

### Events

#### input

- **Type:** InputEvent
- **Description:** Fired when the option is selected.

#### optionselected

- **Type:** CustomEvent<IMcSelectOptionSelectedDetail>
- **Description:** Fired when the option is selected, includes detail option item object.

#### click

- **Type:** MouseEvent
- **Description:** Fired on mc-input click.

#### blur

- **Type:** FocusEvent
- **Description:** Fired when mc-input is going out of focus.

#### clearbuttonclick

- **Type:** CustomEvent
- **Description:** Fires when the clear button is pressed.

#### opened

- **Type:** CustomEvent
- **Description:** Fired when dropdown gets opened.

#### closed

- **Type:** CustomEvent
- **Description:** Fired when dropdown gets closed.

### Types

- IMcInput: re-export
- IMcSelect: interface
- IMcSelectData: interface
- IMcSelectLabels: type
- IMcSelectOptionSelectedDetail: type

### Slots

#### Default slot

- **Description:** Use the default slot, when you want to pass option items, dividers or group headings to the select. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-select>
  <mc-option></mc-option>
</mc-select>
```

#### label

- **Description:** Use the label named slot, when you want to pass the label as HTML. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-select>
  <span slot="label">
    Label as HTML
  </span>
</mc-select>
```

#### hint

- **Description:** Use the hint named slot, when you want to pass the hint as HTML. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-select>
  <span slot="hint">
    Hint as HTML
  </span>
</mc-select>
```

#### errormessage

- **Description:** Use the errormessage named slot, when in invalid state, you want to pass the error message as HTML. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-select>
  <span slot="errormessage">
    Error message as HTML
  </span>
</mc-select>
```

## CSS parts

#### label-container

- **Description:** Using this CSS part you can change the look of the label container. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-select::part(label-container) {
  display: flex;
  justify-content: flex-end;
}
```

#### label

- **Description:** Using this CSS part you can change the look of the label. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-select::part(label) {
  color: #000000;
}
```

#### selected-option

- **Description:** Using this CSS part you can change the look of the field's selected option. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-select::part(selected-option) {
  color: #000000;
}
```

#### popover-content

- **Description:** Using this CSS part you can change the look of the i.e. z-index on popover. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-select::part(popover-content) {
  z-index: 1000;
}
```

## Related

- [Forms](https://designsystem.maersk.com/guidelines/forms/)
- [Input](https://designsystem.maersk.com/components/input/)
- [Labels](https://designsystem.maersk.com/content/labels/)
- [Radio](https://designsystem.maersk.com/components/radio/)
- [Selection components](https://designsystem.maersk.com/guidelines/selection-components/)
- [Typeahead](https://designsystem.maersk.com/components/typeahead/)

