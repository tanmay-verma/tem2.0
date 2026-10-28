# mc-time-picker

The Time Picker allows the user to select a time and can be used as the basis for custom time selection components / patterns.

**Url:** https://designsystem.maersk.com/components/time-picker/
**Alternative names:** Time Picker, Time Selector
**Keywords:** component, form, field, choice, option, single, time, hours, minutes, seconds, date
**✅ When to use:** When you need to allow users to select a specific time.
**❌ When not to use:** When you only need to capture a single time value without user interaction.

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
npm install @maersk-global/mds-components-core-time-picker
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-time-picker
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-time-picker';
// minimal example usage
<mc-time-picker></mc-time-picker>
// basic example usage
<mc-time-picker hourstep="1" minutestep="1" fit="medium" value=""></mc-time-picker>
```

### Advanced Examples

#### WithMinuteAndHourIntervals

```html
<mc-time-picker hourstep="2" minutestep="10"></mc-time-picker>
```

#### CustomisedAppearance

```html
<mc-time-picker></mc-time-picker>
  
```

## API

### Properties and attributes

#### hourstep

- **Type:** number
- **Default:** 1
- **Description:** A numeric value that indicates the level of granularity that the hour items must meet. It can range between greater than 1 and less than 23. For more details, see the examples.

#### minutestep

- **Type:** number
- **Default:** 1
- **Description:** A numeric value that indicates the level of granularity that the minute items must meet. It can range between greater than 1 and less than 59. For more details, see the examples.

#### preselectcurrenttime

- **Type:** boolean
- **Default:** false
- **Description:** If present, the current local time will be preselected.

#### fit

- **Type:** small | medium | large
- **Typescript Type:** Fit
- **Default:** medium
- **Description:** Controls the overall size of the component.

#### value

- **Type:** string
- **Typescript Type:** string | null | undefined
- **Description:** Pass the value for the input if it is used inside a `form` element

#### labels

- **Type:** IMcTimePickerLabels
- **Typescript Type:** Partial<IMcTimePickerLabels> | undefined
- **Description:** Custom labels for mc-time-picker component. By default labels are loaded in EN language. Check <a href="https://github.com/Maersk-Global/mds/blob/main/packages/mc-time-picker/src/lib/translations.ts" target="_blank" rel="noopener noreferrer">types documentation</a> to see how to use custom labels property.

### Events

#### timeselected

- **Type:** CustomEvent<IMcTimePickerTimeSelectedDetail>
- **Description:** Emitted upon every minute/hour selection.

### Types

- IMcTimePicker: interface
- IMcTimePickerLabels: interface
- IMcTimePickerTimeSelectedDetail: interface

## CSS parts

#### hours-container

- **Description:** Using this CSS part you can change the look of the selection area of the hours inside the picker. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-picker::part(hours-container) {
  background-color: background-color: #40AB35;;
  color: #AAEAE0;
}
```

#### minutes-container

- **Description:** Using this CSS part you can change the look of the selection area of the minutes inside the picker. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-picker::part(minutes-container) {
  background-color: background-color: #40AB35;;
  color: #AAEAE0;
}
```

## Related

- [Input Time](https://designsystem.maersk.com/components/input-time/)
- [Picker](https://designsystem.maersk.com/components/picker/)

