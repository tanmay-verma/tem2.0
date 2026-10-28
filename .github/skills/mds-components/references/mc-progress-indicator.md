# mc-progress-indicator

A progress indicator helps users manage their expectations during a known-duration task.

**Url:** https://designsystem.maersk.com/components/progress-indicator/
**Alternative names:** Spinner, Loader, Progress Indicator, Progress Bar, Completion Indicator, Task Progress
**Keywords:** component, spinner, bar, ring, status, feedback, busy, loading, fetch
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
- Use progress indicators when progress on a task can be quantified. (e.g 2.0 out of 5.2 MB uploaded)
- Provide informative labels that indicate the progress status (e.g., “Update 45% complete”)
- Avoid misleading progress indicators that do not accurately reflect the task’s progress.
- Avoid blocking the entire UI with a progress indicator unless the context requires it.
- When applicable, include control buttons with a progress indicator for actions such as pause and cancel.
- Consider using the toast component to let users know when progress is completed or has failed.

### Usage
- Progress indicators can be embedded in various UI elements like data tables, dashboards, and drawers. However, there are instances where you should avoid using them or opt for the loading indicator.
- | Scenario | Loading indicator | Progress indicator |
| --- | --- | --- |
| Unknown task duration | Ideal choice | Not suitable |
| Known, measurable progress | Not suitable | Ideal choice |
| Brief interactions (<1 second) | Unnecessary visual noise | Unnecessary visual noise |

### Variants
- There are two variants of the progress indicator that can be used depending on available space, user expectations, and context. These indicators visually communicate measurable progress from 0% to 100%, helping manage user expectations.

#### Ring progress indicator
- The ring progress indicator is a suitable choice for clearly indicating measurable progress in compact or isolated UI elements, such as shipment status cards, dashboard widgets, or detailed tracking views. It helps users quickly assess the current status or percentage completion of logistics tasks and shipments.
- Example: Ring progress indicator showing the loading progress of a widget’s data where it is replaced by the data after completion.

#### Bar progress indicator
- The bar progress indicator is ideal for horizontal spaces, especially in long forms, data tables, dashboards, or header sections. It provides clear visual feedback for tasks such as uploading documents, generating shipment labels, or processing bulk updates, ensuring users have a clear understanding of the current progress state.
- Example: Bar progress indicator used in table cells where the completed state remains visible for future references.

### Appearance
- Use appearances to convey intent, not decoration. Default to Primary appearance for ongoing, neutral progress. Only use Success/Warning/Error when the system has a clear outcome or the user must notice a condition. The Neutral inverse is intended for better contrast on dark or complex backgrounds.
- Do not encode meaning by colour alone. Pair the appearance with a status text (e.g. “Progress is on hold”).
- Use Primary appearance during the operation and optionally switch to Success/Warning/Error only when the state is known (complete/partial/failure).

#### Primary
- The primary appearance is the default option and should be used for most determinate progress. For example: Uploads, exports and background data sync. Avoid using it on dark surfaces, use Neutral inverse instead.
- Example: Use primary appearance when the task is ongoing and measurable; no special status implied.

#### Neutral inverse
- Neutral inverse appearance allows you to optimised the contrast when the primary appearance is not enough. For example, when the component is placed on dark background, images and video backdrops.
- Example: Use neutral inverse enhances visibility on dark or complex backgrounds when the primary appearance blends in.

#### Success, warning and error
- Avoid using Success/Warning/Error appearance for routine, non-critical background tasks. Use only when there is a clear outcome and benefit for the user.
- Use Success appearance to show positive outcome after the progress is completed. e.g. “Shipment confirmed”.
- Use Warning appearance to visualise non-blocking issues or conditions that require the user’s attention. e.g. “Slow connection - may take longer” .
- Use Error appearance for blocked or aborted process. e.g “Failed to upload”.
- Example: Pair success, warning and error appearances with clear and meaningful labels.

### Accessibility
- Use adequate colour contrasts between progress indicators and their backgrounds.
- Make sure ARIA labels are present and represent correctly the label and progress values.
- In case the progress indicator includes custom interactive elements (e.g., pause, cancel) ensure that they support keyboard navigation.
- Consider visually hidden status updates via live regions for screen reader users, especially for critical real-time task updates.

## Usage & code examples

```bash
// General Setup (JS, VUE, Angular) 
npm install @maersk-global/mds-components-core-progress-indicator
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-progress-indicator
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-progress-indicator';
// minimal example usage
<mc-progress-indicator label="Loading"></mc-progress-indicator>
// basic example usage
<mc-progress-indicator label="Loading" arialabel="" variant="ring" orientation="vertical" fit="medium" appearance="primary" value="50" max="100"></mc-progress-indicator>
```

### Advanced Examples

#### CustomisedAppearance

```html
<mc-progress-indicator
  value="50"
  max="100"
  variant="bar"
  label="Fetching data..."
  hiddenlabel
></mc-progress-indicator>
```

#### ColorThresholds

```html
<mc-progress-indicator
  value="25"
  max="100"
  variant="bar"
  label="25%"
  appearance="error"
  arialabel="Progress at 25 percent, error state"
></mc-progress-indicator>
<mc-progress-indicator
  value="50"
  max="100"
  variant="bar"
  label="50%"
  appearance="warning"
  arialabel="Progress at 50 percent, warning state"
></mc-progress-indicator>
<mc-progress-indicator
  value="85"
  max="100"
  variant="bar"
  label="85%"
  appearance="success"
  arialabel="Progress at 85 percent, success state"
></mc-progress-indicator>
<mc-progress-indicator
  value="25"
  max="100"
  variant="ring"
  label="25%"
  appearance="success"
  arialabel="Progress at 25 percent, success state"
></mc-progress-indicator>
<mc-progress-indicator
  value="25"
  max="100"
  variant="ring"
  label="50%"
  appearance="warning"
  arialabel="Progress at 50 percent, warning state"
></mc-progress-indicator>
<mc-progress-indicator
  value="85"
  max="100"
  variant="ring"
  label="85%"
  appearance="error"
  arialabel="Progress at 85 percent, error state"
></mc-progress-indicator>
```

#### CustomColorThresholds

```html
<mc-progress-indicator
  value="50"
  max="100"
  variant="bar"
  label="50%"
  class="custom-color-bar"
  arialabel="Progress at 50 percent, success state"
></mc-progress-indicator>
<mc-progress-indicator
  value="50"
  max="100"
  variant="ring"
  label="50%"
  class="custom-color-ring"
  arialabel="Progress at 50 percent, success state"
></mc-progress-indicator>
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

- **Type:** bar | ring
- **Default:** ring
- **Description:** Controls the visual style of the component.

#### orientation

- **Type:** vertical | horizontal
- **Default:** vertical
- **Description:** Determines whether elements are arranged horizontally or vertically.

#### fit

- **Type:** small | medium | large
- **Typescript Type:** Fit
- **Default:** medium
- **Description:** Controls the overall size of the component.

#### appearance

- **Type:** primary | neutral-inverse | success | warning | error
- **Typescript Type:** primary|neutral-inverse|success|warning|error
- **Default:** primary
- **Description:** Controls the visual style of the component. If not set, the default appearance is <b>primary</b>.

#### value

- **Type:** number
- **Default:** 50
- **Description:** The current value of the progress indicator

#### max

- **Type:** number
- **Default:** 100
- **Description:** The maximum value of the progress indicator

### Types

- IMcProgressIndicator: interface

## CSS parts

#### wrapper

- **Description:** Using this CSS part you can change the look of the for changing visuals of progress indicator. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-progress-indicator::part(wrapper) {
  min-width: 30px
}
```

#### progress

- **Description:** Using this CSS part you can change the look of the for changing visuals of progress indicator. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-progress-indicator::part(progress) {
  color: #40AB35;
}
```

#### track

- **Description:** Using this CSS part you can change the look of the for changing visuals of track indicator. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-progress-indicator::part(track) {
  color: #40AB35;
}
```

#### label

- **Description:** Using this CSS part you can change the look of the for changing visuals of label. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-progress-indicator::part(label) {
  color: #40AB35;
}
```

## Related

- [Loading Indicator](https://designsystem.maersk.com/components/loading-indicator/)
- [Toast](https://designsystem.maersk.com/components/toast/)

