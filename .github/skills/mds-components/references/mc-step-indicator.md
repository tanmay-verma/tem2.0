# mc-step-indicator

A step indicator displays and guides users through the steps of any linear multi-step journey.

**Url:** https://designsystem.maersk.com/components/step-indicator/
**Alternative names:** Step Progress Indicator, Stepper, Progress Tracker
**Keywords:** component, progress, bar, journey, step, stage, sequence, navigation, workflow, checkout
**✅ When to use:** When you need to visually represent the progress of a multi-step process.
**❌ When not to use:** For single-step processes or when a simple progress bar suffices.

## Do's

- No specific do guidance documented.


## Don'ts

- No specific don't guidance documented.


## Cautions

- No specific caution guidance documented.


## Best practices

### Best practice
- Use the step indicator to guide the user through a linear process organised into 3 to 6 steps.
- If the process has more than six steps, consider simplifying it by combining or removing steps.
- Use when validating user input before progressing to the next step in the process.
- Use to complement a Back/Next navigation pattern in a linear sequence.
- Label each step shortly and concisely to communicate the step’s purpose.
- When using Warning and Error appearances, use a hint text to assist the user.

### Usage
- The step indicator is a reliable guide that displays and navigates users through the steps of any linear multistep journey. By showing the complete, current, and pending steps, it helps manage the user’s expectations and provides a sense of support throughout the journey. It is a great component that can be used for checkout, long forms and shipment tracking process.
- Example: Use when the user works through a linear process that can be organised into three or more steps. e.g. Checkout flow.
- Example: Use to help the user understand at what step their are  especially for journeys that take a long time. e.g Tracking a shipment.

### Step states
- The step indicator steps can be put in 3 states to indicate either a completed step, a current step, or a future pending state. A single step indicator can have only one current step.
- Example: Multiple completed and pending states can exist, but a single step indicator has only one current step.

### Warning appearance
- Completed and current steps can change appearance to communicate warning information to the user when there might be a potential problem that does not necessarily stop the user from completing the current process. Hint text can be used in the available slot under the warning step to provide additional helpful information.
- Example: Step indicator with warning appearance

### Error appearance
- Complete and current steps also support an error appearance that can communicate to the user when a problem prevents them from continuing the process. Error messages should be clear and concise and provide actionable remedies to resolve the errors. Hint text can be used in the available slot under the error step to provide additional helpful information.
- Example: Step indicator with error appearance
- Depending on the context, use the warning or error appearance in combination with Notification or Toast components to give additional weight to the warning or error message.

### Placement
- The step indicator’s purpose is to provide a visual representation of the user journey/process, and therefore, it is important for this component to be placed in a prominent position so users can refer to it and know how far they are in the linear process. Usual placement locations would be at the top of a page or in aside area, in some cases footer area. Typically the component is persistent and is not impacted by scrolling the content area e.g. a long form.
- Example: Place in an area that is persistently visible across the entire user journey.
- Example: Use the appropriate orientation depending on the placement context.

### Responsiveness
- The horizontal step indicator is aware of the available screen space, and by default, it will switch from horizontal to vertical orientation when the viewport or container width cannot accommodate all steps.
Be mindful of this behaviour and account for potential layout changes.

### Customisation
- The step indicator steps can be customised to a certain level to support custom icons and labels with hint text.
It is also possible to change the colour of the step markers. However, this is not recommended unless really necessary since it can impact the accessibility of the component.
- Example: When using custom icons aim to use at least large fit or extra large fit, to ensure that icons with thinner stroke are visible.
- Example: Use hint text to communicate additional details that can be helpful to the user.

## Usage & code examples

```bash
// General Setup (JS, VUE, Angular) 
npm install @maersk-global/mds-components-core-step-indicator
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-step-indicator
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-step-indicator';
// minimal example usage
<mc-step-indicator labels="["ETD","Release Sent"]"></mc-step-indicator>
// basic example usage
<mc-step-indicator labels="["ETD","Release Sent"]" currentindex="2" orientation="horizontal" fit="medium"></mc-step-indicator>
```

### Advanced Examples

#### CustomIcons

```html
<mc-step-indicator>
  <mc-step-indicator-item
    state="completed"
    icon="clock"
    label="ETD">
  </mc-step-indicator-item>
  <mc-step-indicator-item
    state="completed"
    icon="envelope"
    label="Release Sent">
  </mc-step-indicator-item>
  <mc-step-indicator-item
    state="current"
    icon="vessel-front"
    label="Carrier Released">
  </mc-step-indicator-item>
  <mc-step-indicator-item 
    label="ETA"
    state="pending"
    icon="clock">
  </mc-step-indicator-item>
</mc-step-indicator>
  
```

#### IconAsSlot

```html
<mc-step-indicator>
<mc-step-indicator-item
  state="completed"
  label="ETD">
    <span slot="icon"><mc-icon class="my-icon-completed" icon="clock"></mc-icon></span>
</mc-step-indicator-item>
<mc-step-indicator-item
  state="completed"
  label="Release Sent">
    <span slot="icon"><mc-icon class="my-icon-completed" icon="envelope"></mc-icon></span>
</mc-step-indicator-item>
<mc-step-indicator-item
  state="current"
  label="Carrier Released">
    <span slot="icon"><mc-icon class="my-icon-current" icon="vessel-front"></mc-icon></span>
</mc-step-indicator-item>
<mc-step-indicator-item 
  label="ETA"
  state="pending">
    <span slot="icon"><mc-icon class="my-icon-pending" icon="clock"></mc-icon></span>
</mc-step-indicator-item>
</mc-step-indicator>

  
```

#### CustomMarkerColors

```html
<mc-step-indicator>
  <mc-step-indicator-item
    class="completed"
    state="completed"
    icon="clock"
    label="ETD">
  </mc-step-indicator-item>
  <mc-step-indicator-item
    class="completed"
    state="completed"
    icon="envelope"
    label="Release Sent">
  </mc-step-indicator-item>
  <mc-step-indicator-item
    class="current"
    state="current"
    icon="vessel-front"
    label="Carrier Released">
  </mc-step-indicator-item>
  <mc-step-indicator-item 
    label="ETA"
    state="pending"
    icon="clock">
  </mc-step-indicator-item>
</mc-step-indicator>
  
```

#### CustomContentHorizontal

```html
<mc-step-indicator>
  <mc-step-indicator-item
    state="completed"
    icon="clock">
    <span>
      <span class="mds-font--small">ETD</span>
      <span class="mds-font--x-small">30-08-2022<br />Rotterdam</span>
    </span>
  </mc-step-indicator-item>
  <mc-step-indicator-item
    state="completed"
    icon="envelope">
    <span>
      <span class="mds-font--small">Release Sent</span>
      <span class="mds-font--x-small">02-03-2022<br />San Diego</span>
    </span>
  </mc-step-indicator-item>
  <mc-step-indicator-item
    state="current"
    icon="vessel-front">
    <span>
      <span class="mds-font--small">Carrier Released</span>
      <span class="mds-font--x-small">10-03-2022<br />San Diego</span>
    </span>
  </mc-step-indicator-item>
  <mc-step-indicator-item 
    state="pending"
    icon="clock">
    <span>
      <span class="mds-font--small">ETA</span>
      <span class="mds-font--x-small">28-07-2022<br />San Diego</span>
    </span>
  </mc-step-indicator-item>
</mc-step-indicator>
  
```

#### CustomContentVertical

```html
<mc-step-indicator orientation="vertical">
  <mc-step-indicator-item
    state="completed"
    icon="clock">
    <span>
      <span class="mds-font--small">ETD</span>
      <span class="mds-font--x-small">30-08-2022<br />Rotterdam</span>
    </span>
  </mc-step-indicator-item>
  <mc-step-indicator-item
    state="completed"
    icon="envelope">
    <span>
      <span class="mds-font--small">Release Sent</span>
      <span class="mds-font--x-small">02-03-2022<br />San Diego</span>
    </span>
  </mc-step-indicator-item>
  <mc-step-indicator-item
    state="current"
    icon="vessel-front">
    <span>
      <span class="mds-font--small">Carrier Released</span>
      <span class="mds-font--x-small">10-03-2022<br />San Diego</span>
    </span>
  </mc-step-indicator-item>
  <mc-step-indicator-item 
    state="pending"
    icon="clock">
    <span>
      <span class="mds-font--small">ETA</span>
      <span class="mds-font--x-small">28-07-2022<br />San Diego</span>
    </span>
  </mc-step-indicator-item>
</mc-step-indicator>
  
```

#### CustomContentVerticalWithInput

```html
<mc-step-indicator orientation="vertical">
  <mc-step-indicator-item
    state="completed"
    icon="clock">
    <span class="full-width">
      <span class="mds-font--small">ETD</span>
      <span class="mds-font--x-small">30-08-2022<br />Rotterdam</span>
      <mc-input
        class="full-width"
        label="Departure port"
        hiddenlabel
        placeholder="Type departure port"
      ></mc-input>
    </span>
  </mc-step-indicator-item>
  <mc-step-indicator-item
    state="completed"
    icon="envelope">
    <span>
      <span class="mds-font--small">Release Sent</span>
      <span class="mds-font--x-small">02-03-2022<br />San Diego</span>
    </span>
  </mc-step-indicator-item>
  <mc-step-indicator-item
    state="current"
    icon="vessel-front">
    <span>
      <span class="mds-font--small">Carrier Released</span>
      <span class="mds-font--x-small">10-03-2022<br />San Diego</span>
    </span>
  </mc-step-indicator-item>
  <mc-step-indicator-item 
    state="pending"
    icon="clock">
    <span>
      <span class="mds-font--small">ETA</span>
      <span class="mds-font--x-small">28-07-2022<br />San Diego</span>
    </span>
  </mc-step-indicator-item>
</mc-step-indicator>
  
```

#### DisabledItem

```html
<mc-step-indicator>
  <mc-step-indicator-item
    state="completed"
    icon="clock" 
    alignitemsdisabled
  >
    <span>
      <span class="mds-text--small-normal">ETD</span>
      <span class="mds-text--x-small-normal">30-08-2022<br />Rotterdam</span>
    </span>
  </mc-step-indicator-item>
  <mc-step-indicator-item
    state="completed"
    icon="envelope">
    <span>
      <span class="mds-text--small-normal">Release Sent</span>
      <span class="mds-text--x-small-normal">02-03-2022<br />San Diego</span>
    </span>
  </mc-step-indicator-item>
  <mc-step-indicator-item
    state="current"
    icon="vessel-front">
    <span>
      <span class="mds-text--small-bold">Carrier Released</span>
      <span class="mds-text--x-small-normal">10-03-2022<br />San Diego</span>
    </span>
  </mc-step-indicator-item>
  <mc-step-indicator-item 
    state="pending"
    icon="clock" 
    alignitemsdisabled
  >
    <span>
      <span class="mds-text--small-normal">ETA</span>
      <span class="mds-text--x-small-normal">28-07-2022<br />San Diego</span>
    </span>
  </mc-step-indicator-item>
</mc-step-indicator>
  
```

#### ClickableSteps

```html
<mc-step-indicator>
  <mc-step-indicator-item
  state="completed"
  icon="clock">
    <span class="mds-text--small-normal">ETD</span>
  </mc-step-indicator-item>
  <mc-step-indicator-item
  state="completed"
  icon="envelope">
    <span class="mds-text--small-normal">Release Sent</span>
  </mc-step-indicator-item>
  <mc-step-indicator-item
  state="current"
  icon="vessel-front">
    <span class="mds-text--small-bold">Carrier Released</span>
  </mc-step-indicator-item>
  <mc-step-indicator-item 
  state="pending"
  icon="clock">
    <span class="mds-text--small-normal">ETA</span>
  </mc-step-indicator-item>
</mc-step-indicator>
  
```

#### Appearance

```html
<mc-step-indicator>
  <mc-step-indicator-item state="completed" label="ETD"> </mc-step-indicator-item>
  <mc-step-indicator-item state="completed" label="Release Sent"> </mc-step-indicator-item>
  <mc-step-indicator-item state="current" appearance="warning" label="Carrier Released"> </mc-step-indicator-item>
  <mc-step-indicator-item label="ETA" state="pending"> </mc-step-indicator-item>
</mc-step-indicator>
<mc-step-indicator>
  <mc-step-indicator-item state="completed" label="ETD"> </mc-step-indicator-item>
  <mc-step-indicator-item state="completed" label="Release Sent"> </mc-step-indicator-item>
  <mc-step-indicator-item state="current" appearance="error" label="Carrier Released"> </mc-step-indicator-item>
  <mc-step-indicator-item label="ETA" state="pending"> </mc-step-indicator-item>
</mc-step-indicator>
  
```

## API

### Properties and attributes

#### labels

- **Type:** array | slot
- **Typescript Type:** Array<string>
- **Default:** ETD,Release Sent,Carrier Released,ETA
- **Description:** Corresponding labels of different steps in the step indicator control. 
      Labels could be also passed as a default slot. Look at examples with `mc-step-indicator-item`

#### currentindex

- **Type:** number
- **Default:** 2
- **Description:** The index number of the current `active` item. Index starts from 0. It's working only when labels are passed as props. `currentindex` is not working for slot labels - here you need to pass `state` prop for each step.

#### orientation

- **Type:** horizontal | vertical
- **Typescript Type:** Orientation
- **Default:** horizontal
- **Description:** Determines whether elements are arranged horizontally or vertically.

#### fit

- **Type:** small | medium | large
- **Typescript Type:** Fit
- **Default:** medium
- **Description:** Controls the step indicator size

#### autolayoutdisabled

- **Type:** boolean
- **Default:** false
- **Description:** By default, on `small` screens (max-width: 640px), the component's `orientation` is switched to vertical, regardless of the set orientation. However, setting `disabledautolayout` to `true` prevents this and preserves the current `orientation` setting.

#### alignitemsdisabled

- **Type:** boolean
- **Default:** false
- **Description:** By default, all items are center aligned to the marker in the horizontal orientation. When set to `true` the first and the last item in horizontal step indicator will be respectively left and right aligned.

### Types

- IMcStepIndicator: interface
- IMcStepIndicatorLabels: interface

### Slots

#### Default slot

- **Description:** Use the default slot, when you want to pass step items to the step indicator. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-step-indicator>
  <mc-step-indicator-item></mc-step-indicator-item>
</mc-step-indicator>
```

## Related

- [Notification](https://designsystem.maersk.com/components/notification/)
- [Toast](https://designsystem.maersk.com/components/toast/)

