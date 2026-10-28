# mc-input-time

The Input Time provides a standardised way of inputting or selecting a single time value using touch, mouse, or keyboard input.

**Url:** https://designsystem.maersk.com/components/input-time/
**Alternative names:** Time Input, Time Picker, Time Selection Input, Time Field, Time Entry
**Keywords:** component, form, field, time, hours, minutes, seconds, date
**✅ When to use:** When you need a time input field with customizable options.
**❌ When not to use:** When you have a simple text input without time-specific features.

## Do's

- No specific do guidance documented.


## Don'ts

- No specific don't guidance documented.


## Cautions

- No specific caution guidance documented.


## Best practices

### Best practice
- Make it understandable what time is being picked. Good labels and hint text can help to do that.
- Combine input time with an input date when you want to relate time to a specific date.
- Help the user understand what time zone the selected time value belongs to.
- Consider providing less granularity for the minutes in the input time (default 00 to 59). For example, quarter-hour intervals (00, 15, 30, and 45).
- Aim to use the default 24-hour format since it is widely used in Logisitcs industry.
- Use natural language and use the terms that people would expect for label and hint text.
- Don’t use verbs like enter, add, input, etc in the label.
- Don’t add a colon ( : ) at the end of the label.
- We recommend that you check out the Forms and Date & Time guidelines to help you design and develop good experience for the people using your product.

### Label
- By default, the component has a top-positioned label. It is possible to change the position of the label to be left-positioned. We recommend that you use the top-positioned labels wherever possible, especially in forms. You can read more about why we recommend top-positioned labels in our form guidelines.
- For information on how to write good and consistent labels - see our Label Guidelines.

### Hint text & error state
- Please see the Input component for details on hint text and error state.

### Vanity variant
- The component supports the “vanity” style variant.
- Please read more about this variant on our form guidelines page.

### Examples
- Common scenarios of how this component could be used.

#### Date and time together
- The following example uses the input date component for date and time input.
- Example: When time needs to be related to a specific date.

#### Time Range
- Example: When time range needs to be selected, use two components together.

## Usage & code examples

```bash
// General Setup (JS, VUE, Angular) 
npm install @maersk-global/mds-components-core-input-time
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-input-time
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-input-time';
// minimal example usage
<mc-input-time label="Delivery time"></mc-input-time>
// basic example usage
<mc-input-time minutestep="1" hourstep="1" timepickerposition="bottom-left" label="Delivery time" placeholder="--:--" autocomplete="on" hint="" variant="default" fit="medium" labelposition="top" width="auto" icon="" id="field" errormessage="" name="username" value=""></mc-input-time>
```

### Advanced Examples

#### LabelAsSlot

```html
<mc-input-time>
  <span slot="label">Label as HTML with custom <a class="mds-neutral__text-color" href="https://designsystem.maersk.com/components/button/">link</a></span>
</mc-input-time>
```

#### LabelWithTooltip

```html
<div class="mds-flex mds-flex-column mds-gap-800">
  <mc-input-time>
    <span slot="label">
      Label as HTML, i.e.
      <mc-tooltip>
        <mc-icon slot="trigger" icon="info-circle"></mc-icon>
        <span>The HTML content of the tooltip</span>
      </mc-tooltip>
    </span>
  </mc-input-time>

  <mc-input-time disabled>
    <span slot="label">
      Label as HTML, i.e.
      <mc-tooltip>
        <mc-icon slot="trigger" icon="info-circle"></mc-icon>
        <span>The HTML content of the tooltip</span>
      </mc-tooltip>
    </span>
  </mc-input-time>
</div>
```

#### HintAsSlot

```html
<mc-input-time>
  <span slot="hint">Hint as HTML with custom <a class="mds-neutral--weak__text-color" href="https://designsystem.maersk.com/components/button/">link</a></span>
</mc-input-time>
```

#### ErrorAsSlot

```html
<mc-input-time invalid>
  <span slot="errormessage">Error message as HTML with custom <a class="mds-error__text-color" href="https://designsystem.maersk.com/components/button/">link</a></span>
</mc-input-time>
```

#### LabelToTheLeft

```html
<div class="mds-flex mds-flex-column mds-gap-800">
  <mc-input-time
    class="text-align-right"
    label="Departure"
    labelposition="left"
  ></mc-input-time>

  <mc-input-time
    label="Departure"
    labelposition="left"
  ></mc-input-time>

  <mc-input-time
    class="text-align-right"
    label="Long label text that goes over 1 line"
    labelposition="left"
  ></mc-input-time>

  <mc-input-time
    label="Long label text that goes over 1 line"
    labelposition="left"
  ></mc-input-time>
</div>
```

#### CustomisedAppearance

```html
<div class="input-container">
  <mc-input-time label="Label text"></mc-input-time>
</div>
```

#### ExtraIconToTheLeft

```html
<mc-input-time
    icon="airplane"
    label="Departure time"
    placeholder="--:--"
 ></mc-input-time>
```

## API

### Properties and attributes

#### minutestep

- **Type:** number
- **Default:** 1
- **Description:** A numeric value that indicates the level of granularity that the minute items must meet. It can range between greater than 1 and less than 59. For more details, see the examples.

#### hourstep

- **Type:** number
- **Default:** 1
- **Description:** A numeric value that indicates the level of granularity that the hour items must meet. It can range between greater than 1 and less than 23. For more details, see the examples.

#### timepickerposition

- **Type:** top-left | top-center | top-right | bottom-left | bottom-center | bottom-right | top-center | top-right | left-top | left-center | left-bottom | right-top | right-center | right-bottom
- **Typescript Type:** Position
- **Default:** bottom-left
- **Description:** Specifies the position of the timepicker in regards to the target element

#### label

- **Type:** string | slot
- **Default:** Delivery time
- **Description:** Label can be passed as a simple argument like: `label="Label"` or as a slot to mc-input-time. Use argument style for passing short labels, use slot when you want to pass label with HTML text. Label is required attribute as it will be used as aria-label.

#### hiddenlabel

- **Type:** boolean
- **Default:** false
- **Description:** If set to `true` or the attribute is just presented without any value, then the label will not appear, but will be used as `aria-label` only

#### placeholder

- **Type:** string
- **Default:** --:--
- **Description:** The `placeholder` attribute specifies a short hint that describes the expected value of a field (e.g. a sample value or a short description of the expected format)

#### autocomplete

- **Type:** off | on | name | given-name | family-name | ...
- **Default:** on
- **Description:** The HTML autocomplete attribute lets web developers specify what if any permission the user agent has to provide automated assistance in filling out form field values. The full list of possible values for this attribute are listed on MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete P.S. Check Examples -> Password autocompletion story to see a live demo on enabling password autocompletion behavior.

#### hint

- **Type:** string | slot
- **Description:** Hint can be passed as simple argument like: `hint="hint text"` or as a named slot: ```<mc-input-time><span slot="hint">hint text as HTML</span></mc-input-time>``` Use argument style for passing short hints, use named slot when you want to pass hint with HTML text

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

#### width

- **Type:** auto | number
- **Default:** auto
- **Description:** The width of the inner input container in percentage. If not provided the width will be `auto`.

#### icon

- **Type:** string
- **Description:** Icon displayed at the start (front) of the component.

- **Available options:** [Icons List](../mds-icons/references/icons-list.md)

#### id

- **Type:** string
- **Default:** field
- **Description:** Id passed to the field and used with label.

#### invalid

- **Type:** boolean
- **Default:** false
- **Description:** When `true`, the component border is displayed in red and the `errormessage` is shown if provided.

#### errormessage

- **Type:** string | slot
- **Description:** Error message will be shown only if `invalid` attribute is set to `true`. Error message can be passed as simple argument like: `errormessage="error"` or as a named slot: ```<mc-input-time><span slot="errormessage">error message as HTML</span></mc-input-time>``` Use argument style for passing short messages, use named slot when you want to pass error message with HTML text

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

- **Type:** IMcInputTimeLabels
- **Typescript Type:** Partial<IMcInputTimeLabels> | undefined
- **Description:** Custom labels for mc-input-time component. By default labels are loaded in EN language. Check <a href="https://github.com/Maersk-Global/mds/blob/main/packages/mc-input-time/src/lib/translations.ts" target="_blank" rel="noopener noreferrer">types documentation</a> to see how to use custom labels property.

### Events

#### keydown

- **Type:** KeyboardEvent
- **Description:** Fired when a key on keydown is pressed.

#### input

- **Type:** InputEvent
- **Description:** Fired when the character is entered.

#### focus

- **Type:** FocusEvent
- **Description:** Fired when mc-input-time is focused.

#### blur

- **Type:** FocusEvent
- **Description:** Fired when mc-input-time is going out of focus.

#### click

- **Type:** MouseEvent
- **Description:** Fired on mc-input-time click.

### Types

- IMcInputTime: interface
- IMcInputTimeLabels: interface

### Slots

#### label

- **Description:** Use the label named slot, when you want to pass the label as HTML. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-input>
  <span slot="label">
    Label as HTML
  </span>
</mc-input>
```

#### hint

- **Description:** Use the hint named slot, when you want to pass the hint as HTML. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-input>
  <span slot="hint">
    Hint as HTML
  </span>
</mc-input>
```

#### errormessage

- **Description:** Use the errormessage named slot, when in invalid state, you want to pass the error message as HTML. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-input>
  <span slot="errormessage">
    Error message as HTML
  </span>
</mc-input>
```

## CSS parts

#### label-container

- **Description:** Using this CSS part you can change the look of the label container. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-input-time::part(label-container) {
  display: flex;
  justify-content: flex-end;
}
```

#### label

- **Description:** Using this CSS part you can change the look of the label. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-input-time::part(label) {
  color: #000000;
}
```

#### input

- **Description:** Using this CSS part you can change the look of the input field. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-input-time::part(input) {
  color: #000000;
}
```

#### icon

- **Description:** Using this CSS part you can change the look of the icon. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-input-time::part(icon) {
  fill: #000000
}
```

## Related

- [Date and time](https://designsystem.maersk.com/content/date-and-time/)
- [Forms](https://designsystem.maersk.com/guidelines/forms/)
- [Input](https://designsystem.maersk.com/components/input/)
- [Input Date](https://designsystem.maersk.com/components/input-date/)
- [Labels](https://designsystem.maersk.com/content/labels/)
- [Time Picker](https://designsystem.maersk.com/components/time-picker/)

