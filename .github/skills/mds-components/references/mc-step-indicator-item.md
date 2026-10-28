# mc-step-indicator-item

A component for displaying a step indicator for a process or workflow.

**Url:** https://designsystem.maersk.com/
**Alternative names:** Step Progress Indicator, Stepper, Progress Tracker
**Keywords:** 
**✅ When to use:** When you need to visually represent the progress of a multi-step process.
**❌ When not to use:** For single-step processes or when a simple progress bar suffices.

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
npm install @maersk-global/mds-components-core-step-indicator-item
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-step-indicator-item
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-step-indicator-item';
// minimal example usage
<mc-step-indicator-item></mc-step-indicator-item>
// basic example usage
<mc-step-indicator-item label="Label" state="pending" orientation="horizontal" fit="medium" icon="" appearance="default"></mc-step-indicator-item>
```

### Advanced Examples

#### IconAsSlot

```html
<mc-step-indicator-item
  state="completed"
  label="ETD">
  <span slot="icon">⏱️</span>
</mc-step-indicator-item>  
```

#### CustomisedAppearance

```html
<mc-step-indicator-item
  state="completed"
  icon="clock"
  label="ETD">
</mc-step-indicator-item>
  
```

#### CustomContent

```html
<mc-step-indicator-item
  state="completed"
  icon="clock">
  <span>
    <span class="mds-text--small-normal">ETD</span>
    <span class="mds-text--x-small-normal">30-08-2022<br />Rotterdam</span>
  </span>
</mc-step-indicator-item>
  
```

## API

### Properties and attributes

#### label

- **Type:** string | slot
- **Typescript Type:** string
- **Default:** Label
- **Description:** Label can be passed as a simple argument like: `label="Label"` or as a slot to mc-step-indicator-item. Use argument style for passing short labels, use slot when you want to pass label with HTML text. Label is required attribute as it will be used as aria-label.

#### state

- **Type:** completed | current | pending
- **Typescript Type:** State
- **Default:** pending
- **Description:** Controls the current status of the step indicator item.

#### orientation

- **Type:** horizontal | vertical
- **Typescript Type:** Orientation
- **Default:** horizontal
- **Description:** Determines whether elements are arranged horizontally or vertically.

#### fit

- **Type:** small | medium | large | x-large
- **Typescript Type:** Fit | 'x-large'
- **Default:** medium
- **Description:** Controls the step indicator size

#### autolayoutdisabled

- **Type:** boolean
- **Default:** false
- **Description:** By default, on `small` screens (max-width: 640px), the component's `orientation` is switched to vertical, regardless of the set orientation. However, setting `disabledautolayout` to `true` prevents this and preserves the current `orientation` setting.

#### alignitemsdisabled

- **Type:** boolean
- **Default:** false
- **Description:** By default, all items are center aligned to the marker. When set to `true` the first and the last item in step indicator will be respectively left and right aligned.

#### icon

- **Type:** string | slot
- **Typescript Type:** string
- **Description:** Icon displayed at the start (front) of the component.

- **Available options:** [Icons List](../mds-icons/references/icons-list.md)

#### appearance

- **Type:** warning | error | default
- **Typescript Type:** Appearance
- **Default:** default
- **Description:** Controls the visual style of the component. If not set, the default appearance is <b>default</b>.

### Types

- Appearance: type
- IMcStepIndicatorItem: interface
- State: type

### Slots

#### Default slot

- **Description:** Use the default slot, when you want to pass the label as HTML. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-step-indicator-item>
  Label as HTML
</mc-step-indicator-item>
```

#### icon

- **Description:** Use the icon named slot, if  a custom graphic, pictogram, etc. should be used, instead of using MDS icons. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-step-indicator-item>
  <span slot="icon">
    <img src="your-img-src" width="20" height="20" />
  </span>
</mc-step-indicator-item>
```

## CSS parts

#### step

- **Description:** Using this CSS part you can change the look of the step item inside the mc-step-indicator-item component. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-step-indicator-item::part(step) {
  background-color: #40AB35;
}
```

#### marker

- **Description:** Using this CSS part you can change the look of the marker element. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-step-indicator-item::part(marker) {
  background-color: #40AB35;
  border-color: #40AB35;
}
```

#### label

- **Description:** Using this CSS part you can change the look of the label element. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-step-indicator-item::part(label) {
  flex-grow: 1;
}
```

#### icon

- **Description:** Using this CSS part you can change the look of the icon element inside the component. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-step-indicator-item::part(icon) {
  fill: #40AB35;
}
```

## Related

- [undefined](undefined)

