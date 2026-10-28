# mc-loading-indicator

A loading indicator informs users that the system is processing a task where the duration is unknown.

**Url:** https://designsystem.maersk.com/components/loading-indicator/
**Alternative names:** Spinner, Loader, Progress Indicator
**Keywords:** component, spinner, bar, ring, status, feedback, busy, progress, fetch
**✅ When to use:** When you need to show that something is loading or processing.
**❌ When not to use:** When you need to show static content or completed states.

## Do's

- No specific do guidance documented.


## Don'ts

- No specific don't guidance documented.


## Cautions

- No specific caution guidance documented.


## Best practices

### Best practice
- Clearly communicate the purpose of loading using concise labels and aria-labels. (e.g Loading table data)
- Use loading indicators when the duration of loading is unknown or can’t be predicted.
- Consider using the toast component to let users know when loading is completed or has failed.

### Usage
- Loading indicators can be embedded in various UI elements or even full pages to indicate information is being loaded. However, there are instances where you should avoid using them or opt for the progress indicator that can better manage the user’s expectation by showing measurable progress.
- | Scenario | Loading indicator | Progress indicator |
| --- | --- | --- |
| Unknown task duration | Ideal choice | Not suitable |
| Known, measurable progress | Not suitable | Ideal choice |
| Brief interactions (<1 second) | Unnecessary visual noise | Unnecessary visual noise |

### Variants
- There are two variants of the loading indicator that can be applied depending on the interface requirements and user needs. These indicators visually communicate that a process is ongoing, but the exact duration or progress cannot be accurately determined.

#### Bar loading indicator
- The bar loading indicator works effectively in wider or horizontal areas such as dashboards, form headers, or at the top of pages. It visually indicates indeterminate loading processes, reinforcing to users that the application is actively working, for example, loading new data in widgets or performing bulk updates on shipment statuses.
- Example: Bar loading indicator example.

#### Ring loading indicator
- The ring loading indicator is ideal for displaying indeterminate processes in areas such as drawers, tables, buttons, or long lists. It communicates clearly to users that an action is in progress, such as fetching shipment details or dynamically populating logistics data.
- Example: Ring loading indicator example.

### Accessibility
- Use adequate colour contrasts between progress indicators and their backgrounds.
- Make sure aria labels are present and represent correctly the label.
- Consider visually hidden status updates via live regions for screen reader users, especially for critical real-time task updates.

## Usage & code examples

```bash
// General Setup (JS, VUE, Angular) 
npm install @maersk-global/mds-components-core-loading-indicator
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-loading-indicator
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-loading-indicator';
// minimal example usage
<mc-loading-indicator label="Loading"></mc-loading-indicator>
// basic example usage
<mc-loading-indicator label="Loading" arialabel="" variant="ring" appearance="primary" orientation="vertical" fit="medium"></mc-loading-indicator>
```

### Advanced Examples

#### DataFetchingIndicator

```html
<div class="container">
  <mc-table datakey="id"></mc-table>
  <mc-loading-indicator class="hidden" label="Fetching data..."></mc-loading-indicator>
  <mc-button onclick="fetchData()">Fetch data</mc-button>
</div>
```

#### LoadingProgress

```html
<mc-loading-indicator label="Fetching data..."></mc-loading-indicator>
```

#### CustomisedAppearance

```html
<mc-loading-indicator
  variant="bar"
  label="Fetching data..."
  hiddenlabel
></mc-loading-indicator>
```

## API

### Properties and attributes

#### label

- **Type:** string
- **Default:** Loading
- **Description:** Label has to be passed as a property. It is required attribute as it will be used as aria-label

#### hiddenlabel

- **Type:** boolean
- **Default:** false
- **Description:** If set to `true` or the attribute is just presented without any value, then the label will not appear, but will be used as `aria-label` only

#### arialabel

- **Type:** string
- **Description:** Extra aria-label that should be used for accessibility purposes.

#### variant

- **Type:** VariantNew | VariantOld
- **Typescript Type:** Variant
- **Default:** ring
- **Description:** Controls the visual style of the component.

#### appearance

- **Type:** LoadingIndicatorAppearanceNew | LoadingIndicatorAppearanceOld
- **Typescript Type:** LoadingIndicatorAppearance
- **Default:** primary
- **Description:** Controls the visual style of the component. If not set, the default appearance is <b>primary</b>.

#### orientation

- **Type:** horizontal | vertical
- **Typescript Type:** Orientation
- **Default:** vertical
- **Description:** Determines whether elements are arranged horizontally or vertically.

#### fit

- **Type:** small | medium | large
- **Typescript Type:** Fit
- **Default:** medium
- **Description:** Controls the overall size of the component.

### Types

- Fit: re-export
- IMcLoadingIndicator: interface
- LoadingIndicatorAppearance: type
- Orientation: re-export
- Variant: type

## CSS parts

#### wrapper

- **Description:** Using this CSS part you can change the look of the for changing visuals of progress indicator. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-loading-indicator::part(wrapper) {
  min-width: 30px
}
```

#### progress

- **Description:** Using this CSS part you can change the look of the for changing visuals of progress indicator. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-loading-indicator::part(progress) {
  color: #40AB35;
}
```

#### track

- **Description:** Using this CSS part you can change the look of the for changing visuals of track indicator. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-loading-indicator::part(track) {
  color: #40AB35;
}
```

#### label

- **Description:** Using this CSS part you can change the look of the for changing visuals of label. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-loading-indicator::part(label) {
  color: #40AB35;
}
```

## Related

- [Progress Indicator](https://designsystem.maersk.com/components/progress-indicator/)
- [Toast](https://designsystem.maersk.com/components/toast/)

