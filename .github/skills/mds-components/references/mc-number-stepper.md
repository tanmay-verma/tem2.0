# mc-number-stepper

A number stepper allows the user to pick a small number by increasing, decreasing or entering a numerical value.

**Url:** https://designsystem.maersk.com/components/number-stepper/
**Alternative names:** Number Input, Numeric Stepper, Quantity Selector, Numeric Input Field, Stepper Control
**Keywords:** component, form, field, input
**✅ When to use:** When you need a numeric input field with stepper controls.
**❌ When not to use:** When you need a simple text input field.

## Do's

- No specific do guidance documented.


## Don'ts

- No specific don't guidance documented.


## Cautions

- No specific caution guidance documented.


## Best practices

### Best practice
- Use a number stepper when the expected input is a fairly small whole number.
- Choose an appropriate default value based on the use case.
- Carefully consider and define the appropriate range (and step) of valid entries.
- Provide a short and meaningful label letting the user know what they are changing the value of.
- The label should describe what to input and not how.
- Use natural language and use the terms that the user would expect.
- Don’t use verbs like enter, add, input etc in the label.
- Don’t add a colon ( : ) at the end of the label.
- Use the help text to provide additional context and explanation.
- We recommend that you read our form design guidelines. The Guidelines cover many basic recommendations to be taken into consideration when working with forms.

### Default value
- The number stepper should always have a default value. Depending on the context this could be:
- 0
- 1
- The most frequently entered value

### Range & step
- By default the stepper allows a user to enter a value in the range between 0 (min) and 10 (max) with increments of 1 (step). However, these can be adjusted to fit the use case at hand.

#### Min (minimum)
- Defines the smallest valid entry (min is usually 0 or 1).

#### Max (maximum)
- Defines the largest valid entry. Make sure not to restrict large entries if there’s even a small probability of users wanting to choose a large value.

#### Step
- Defines the valid values within the range and determines the increment with which the value will change when the user presses the buttons (step is usually 1).
- Changing the step to anything other than 1 (e.g. 0.1 or 50) can lead to usability issues since users:
- Won’t know what to expect up front.
- Might have to press the buttons many times to reach the desired value.
- Might want to enter a value between the steps.

### Label
- By default, the component has a top-positioned label. It is possible to change the position of the label to be left-positioned. We recommend that you use the top-positioned labels wherever possible, especially in forms. You can read more about why we recommend top-positioned labels in our form guidelines.
- For information on how to write good and consistent labels - see our Label Guidelines.

## Usage & code examples

```bash
// General Setup (JS, VUE, Angular) 
npm install @maersk-global/mds-components-core-number-stepper
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-number-stepper
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-number-stepper';
// minimal example usage
<mc-number-stepper label="Containers"></mc-number-stepper>
// basic example usage
<mc-number-stepper min="0" max="10" step="1" label="Containers" placeholder="Number of containers" hint="" fit="medium" labelposition="top" width="auto" id="field" prefix="" suffix="" errormessage="" name="username" value=""></mc-number-stepper>
```

### Advanced Examples

#### LabelAsSlot

```html
<mc-number-stepper>
  <span slot="label">Label as HTML with custom <a class="mds-neutral__text-color" href="https://designsystem.maersk.com/components/button/">link</a></span>
</mc-number-stepper>
```

#### LabelWithTooltip

```html
<div class="mds-flex mds-gap-800 mds-flex-column">
  <mc-number-stepper>
    <span slot="label">
      Label as HTML, i.e. 
      <mc-tooltip>
        <mc-icon slot="trigger" icon="info-circle"></mc-icon>
        <span>The HTML content of the tooltip</span>
      </mc-tooltip>
    </span>
  </mc-number-stepper>
  <mc-number-stepper disabled>
    <span slot="label">
      Label as HTML, i.e. 
      <mc-tooltip>
        <mc-icon slot="trigger" icon="info-circle"></mc-icon>
        <span>The HTML content of the tooltip</span>
      </mc-tooltip>
    </span>
  </mc-number-stepper>
</div>
```

#### HintAsSlot

```html
<mc-number-stepper>
  <span slot="hint">Hint as HTML with custom <a class="mds-neutral--weak__text-color" href="https://designsystem.maersk.com/components/button/">link</a></span>
</mc-number-stepper>
```

#### ErrorAsSlot

```html
<mc-number-stepper invalid>
  <span slot="errormessage">Error message as HTML with custom <a class="mds-error__text-color" href="https://designsystem.maersk.com/components/button/">link</a></span>
</mc-number-stepper>
```

#### WithoutPlusAndMinusButtons

```html
<mc-input label="Digits" maxlength="16"></mc-input>
```

#### LabelToTheLeft

```html
<div class="mds-flex mds-gap-800 mds-flex-column">
  <mc-number-stepper class="text-align-right" label="Number" labelposition="left"></mc-number-stepper>
  <mc-number-stepper class="text-align-right" label="Long label text that goes over 1 line" labelposition="left"></mc-number-stepper>
  <mc-number-stepper label="Number" labelposition="left"></mc-number-stepper>
  <mc-number-stepper label="Long label text that goes over 1 line" labelposition="left"></mc-number-stepper>
</div>
```

#### CustomisedAppearance

```html
<mc-number-stepper label="Label text"></mc-number-stepper>
```

## API

### Properties and attributes

#### min

- **Type:** string
- **Typescript Type:** Min | undefined
- **Default:** 0
- **Description:** The minimum number that the input should step to

#### max

- **Type:** string
- **Typescript Type:** Max | undefined
- **Default:** 10
- **Description:** The maximum number that the input should step to

#### step

- **Type:** string
- **Typescript Type:** Step | undefined
- **Default:** 1
- **Description:** The step increment that the +/- steppers will use when clicked

#### label

- **Type:** string | slot
- **Default:** Containers
- **Description:** Label can be passed as a simple argument like: `label="Label"` or as a slot to mc-number-stepper. Use argument style for passing short labels, use slot when you want to pass label with HTML text. Label is required attribute as it will be used as aria-label.

#### hiddenlabel

- **Type:** boolean
- **Default:** false
- **Description:** If set to `true` or the attribute is just presented without any value, then the label will not appear, but will be used as `aria-label` only

#### placeholder

- **Type:** string
- **Default:** Number of containers
- **Description:** The `placeholder` attribute specifies a short hint that describes the expected value of a field (e.g. a sample value or a short description of the expected format)

#### hint

- **Type:** string | slot
- **Description:** Hint can be passed as simple argument like: `hint="hint text"` or as a named slot: ```<mc-number-stepper><span slot="hint">hint text as HTML</span></mc-number-stepper>``` Use argument style for passing short hints, use named slot when you want to pass hint with HTML text

#### autofocus

- **Type:** boolean
- **Default:** false
- **Description:** The autofocus global attribute is a Boolean attribute indicating that an element should be focused on page load, or when the <dialog> that it is part of is displayed.

#### fit

- **Type:** small | medium | large
- **Typescript Type:** Fit
- **Default:** medium
- **Description:** Controls the overall size of the component.

#### labelposition

- **Type:** top | left
- **Default:** top
- **Description:** Position of the label. On small screens, label will always appear on top. See examples under input component on how to set label with and align text within the label. 

#### width

- **Type:** auto | number
- **Default:** auto
- **Description:** The width of the inner input container in percentage. If not provided the width will be `auto`.

#### id

- **Type:** string
- **Default:** field
- **Description:** Id passed to the field and used with label.

#### prefix

- **Type:** string
- **Description:** You can either render prefix or an icon on the same side of the input. Preferably, the prefix should not be longer than 5 characters.

#### suffix

- **Type:** string
- **Description:** You can either render suffix or an icon on the same side of the input. Preferably, the suffix should not be longer than 5 characters. 

#### invalid

- **Type:** boolean
- **Default:** false
- **Description:** When `true`, the component border is displayed in red and the `errormessage` is shown if provided.

#### errormessage

- **Type:** string | slot
- **Description:** Error message will be shown only if `invalid` attribute is set to `true`. Error message can be passed as simple argument like: `errormessage="error"` or as a named slot: ```<mc-number-stepper><span slot="errormessage">error message as HTML</span></mc-number-stepper>``` Use argument style for passing short messages, use named slot when you want to pass error message with HTML text

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

- **Type:** string
- **Description:** The initial value of the input

#### labels

- **Type:** IMcNumberStepperLabels
- **Typescript Type:** Partial<IMcNumberStepperLabels> | undefined
- **Description:** Custom labels for mc-number-stepper component. By default labels are loaded in EN language. Check <a href="https://github.com/Maersk-Global/mds/blob/main/packages/mc-number-stepper/src/lib/translations.ts" target="_blank" rel="noopener noreferrer">types documentation</a> to see how to use custom labels property.

### Events

#### input

- **Type:** InputEvent
- **Description:** Description missing

### Types

- IMcNumberStepper: interface
- IMcNumberStepperLabels: interface
- StepperDirection: type

### Slots

#### label

- **Description:** Use the label named slot, when you want to pass the label as HTML. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-number-stepper>
  <span slot="label">
    Label as HTML
  </span>
</mc-number-stepper>
```

#### hint

- **Description:** Use the hint named slot, when you want to pass the hint as HTML. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-number-stepper>
  <span slot="hint">
    Hint as HTML
  </span>
</mc-number-stepper>
```

#### errormessage

- **Description:** Use the errormessage named slot, when in invalid state, you want to pass the error message as HTML. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-number-stepper>
  <span slot="errormessage">
    Error message as HTML
  </span>
</mc-number-stepper>
```

## CSS parts

#### label-container

- **Description:** Using this CSS part you can change the look of the label container. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-number-stepper::part(label-container) {
  display: flex;
  justify-content: flex-end;
}
```

#### label

- **Description:** Using this CSS part you can change the look of the label. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-number-stepper::part(label) {
  color: #000000;
}
```

#### input

- **Description:** Using this CSS part you can change the look of the input field. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-number-stepper::part(input) {
  color: #000000;
}
```

## Related

- [Forms](https://designsystem.maersk.com/guidelines/forms/)
- [Input](https://designsystem.maersk.com/components/input/)
- [Labels](https://designsystem.maersk.com/content/labels/)

