# mc-toast

Provides low disruptive feedback messages that appear briefly on the screen to inform the user about an event or action.

**Url:** https://designsystem.maersk.com/components/toast/
**Alternative names:** Toast Notification, Snackbar, Alert
**Keywords:** component, message, attention, communication, feedback, banner, alert, action, notification, discardable
**✅ When to use:** When you need to provide feedback to the user without interrupting their workflow.
**❌ When not to use:** When you need to capture user input or require a more complex interaction.

## Do's

- Stack no more than 3 different toast messages at the same time.

## Don'ts

- Don't stack more than 3 different toast messages at the same time.

## Cautions

- No specific caution guidance documented.


## Best practices

### Best practice
- Use for transient and non-critical feedback, e.g. the outcome of an action, or displaying a status update.
- Use clear and concise language that the user can understand quickly.
- Summarise multiple messages of the same kind into a single toast e.g. “Successfully uploaded 12 files.”
- When you cannot summarise the messages then display them sequentially by stacking up to 3 toasts at a time.
- Display duration time (default is 5 seconds) should allow users to read and understand the full message.
- Use inline buttons or links to provide simple actions to users. e.g. “Undo” or “View more”.
- If a toast is displayed for more than 10 seconds, always show the close action.
- If you need to display persistent feedback messages, then use the Notification component. For high urgency where the user needs to take action before continuing, use the Modal component as a dialog.
- See our System Feedback Guidelines for more information on system feedback in general.

### Usage
- Use the toast component for low-disruption feedback and feedback that is mainly task-triggered due to its immediate nature.
- Example: Default toast.

#### Placement
- Toasts should be used in a consistent manner and should be place in the same location on the screen across the whole application. The default toast position is set at the top right corner. Display the toast on the same page as where the action took place so that it is easy for the user to understand the connection.
- Example: Toast placement: top-left, top-center, top-right, bottom-left, bottom-center, bottom-right.

#### Stacking
- Avoid stacking more than 3 different toast messages at the same time to avoid increasing cognitive load.

#### Actions
- The toast is based on the notification component and support actions (Buttons and Links) that can be used to provide shortcuts and low-importance actions. e.g. “Undo”, “Retry”, “View more” etc.
- Example: Toast with action button placed inline.
- Example: Toast with action link placed inline.
- Example: Toast with action buttons placed underneath the message and an avatar placed in the icon slot.

#### Appearances
- The toast has the following appearances:
- Example: Neutral default.
- Example: Neutral inverse.
- Example: Info - for more general information about changes in the application e.g. announcements about product updates.
- Example: Success - when a task or a process has successfully been completed.
- Example: Warning - when something in the application has changed that is important that the user is aware about.
- Example: Error - when error has occured within the application that demands immediate attention.
- Avoid using a toast for critical error messages since users might not see it in time or be able to act on the feedback. The notification component is more suitable for communicating critical information that should be seen.

### Accessibility
- The toast component content is implemented as an ‘ARIA live region’ using aria-live=“polite”. When the toast appears, screen readers will announce the toast text only after any other more pressing announcements.
- If a user has set up on their machine a preference to reduce motion, the animation on the toast will be disabled.
- Avoid using toast for critical information that people need to act on immediately.
- Toast might be difficult for people with low vision or dexterity to access. In case you want people to be able to use the keyboard navigation to reach the toast content, make sure to provide enough duration time before the toast is automatically discarded.

## Usage & code examples

```bash
// General Setup (JS, VUE, Angular) 
npm install @maersk-global/mds-components-core-toast
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-toast
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-toast';
// minimal example usage
<mc-toast></mc-toast>
// basic example usage
<mc-toast duration="5000" fit="medium" appearance="neutral-default" position="top-right" width="auto"></mc-toast>
```

### Advanced Examples

#### StackedToast

```html
<div class="mds-flex mds-flex-row mds-gap-800">
<mc-toast appearance="success" position="top-right">
  <mc-button appearance="neutral" label="Success" slot="trigger"></mc-button>
  <mc-notification icon="check-circle" body="Toast message"></mc-notification>
</mc-toast>
<mc-toast appearance="warning" position="top-right">
  <mc-button appearance="neutral" label="Warning" slot="trigger"></mc-button>
  <mc-notification icon="exclamation-triangle" body="Toast message"></mc-notification>
</mc-toast>
<mc-toast appearance="error" position="top-right">
  <mc-button appearance="neutral" label="Error" slot="trigger"></mc-button>
  <mc-notification icon="exclamation-octagon" body="Toast message"></mc-notification>
</mc-toast>
<mc-toast appearance="info" position="top-right">
  <mc-button appearance="neutral" label="Info" slot="trigger"></mc-button>
  <mc-notification icon="info-circle" body="Toast message"></mc-notification>
</mc-toast>
<mc-toast appearance="neutral-default" position="top-right">
  <mc-button appearance="neutral" label="Neutral Default" slot="trigger"></mc-button>
  <mc-notification icon="cog" body="Toast message"></mc-notification>
</mc-toast>
<mc-toast appearance="neutral-inverse" position="top-right">
  <mc-button appearance="neutral" label="Neutral Inverse" slot="trigger"></mc-button>
  <mc-notification icon="moon" body="Toast message"></mc-notification>
</mc-toast></div>
```

#### AutoTrigger

```html
<mc-toast open position="bottom-center" appearance="success">
  <mc-notification body="Toast triggered programmatically on page load"></mc-notification>
</mc-toast>
<mc-toast position="bottom-right" appearance="error">
  <mc-notification body="Toast triggered programmatically after 0.5s."></mc-notification>
</mc-toast>
```

#### WithUndoButton

```html
<!-- N.B. The CSS class "mc-notification__actions" is an optional helper class to provide 
alignment, spacing and separators between actions when passed as a slot -->
<mc-toast position="top-right" duration="10000" appearance="info">
  <mc-button icon="trash" label="Delete file" appearance="error" variant="outlined" slot="trigger"></mc-button>
  <mc-notification icon="info-circle" verticalalign="middle" actionsposition="right" body="The file has been deleted">
    <span slot="actions" class="mc-notification__actions">
      <mc-button class="undo" variant="plain" appearance="neutral" padding="none" icon="arrow-anti-clockwise">Undo</mc-button>
    </span>
  </mc-notification>
</mc-toast>
```

#### TagAutotrigger

```html
<!-- N.B. The CSS class "mc-notification__actions" is an optional helper class to provide 
alignment, spacing and separators between actions when passed as a slot -->
<div class="row">
  <mc-tag label="engineering" withaction></mc-tag>
  <mc-tag label="ui" withaction></mc-tag>
  <mc-tag label="ux" withaction></mc-tag>
  <mc-tag label="visual-design" withaction></mc-tag>
  <mc-tag label="product" withaction></mc-tag>
</div>

<mc-toast appearance="info">
  <mc-notification icon="info-circle" verticalalign="middle" actionsposition="right">
    <span><b>engineering</b> has been dismissed</span>
    <span slot="actions" class="mc-notification__actions">
      <mc-button class="undo" variant="plain" appearance="neutral" padding="none" icon="arrow-anti-clockwise">Undo</mc-button>
    </span>
  </mc-notification>
</mc-toast>

<mc-toast appearance="info">
  <mc-notification icon="info-circle" verticalalign="middle" actionsposition="right">
    <span><b>ui</b> has been dismissed</span>
    <span slot="actions" class="mc-notification__actions">
      <mc-button class="undo" variant="plain" appearance="neutral" padding="none" icon="arrow-anti-clockwise">Undo</mc-button>
    </span>
  </mc-notification>
</mc-toast>

<mc-toast appearance="info">
  <mc-notification icon="info-circle" verticalalign="middle" actionsposition="right">
    <span><b>ux</b> has been dismissed</span>
    <span slot="actions" class="mc-notification__actions">
      <mc-button class="undo" variant="plain" appearance="neutral" padding="none" icon="arrow-anti-clockwise">Undo</mc-button>
    </span>
  </mc-notification>
</mc-toast>

<mc-toast appearance="info">
  <mc-notification icon="info-circle" verticalalign="middle" actionsposition="right">
    <span><b>visual-design</b> has been dismissed</span>
    <span slot="actions" class="mc-notification__actions">
      <mc-button class="undo" variant="plain" appearance="neutral" padding="none" icon="arrow-anti-clockwise">Undo</mc-button>
    </span>
  </mc-notification>
</mc-toast>

<mc-toast appearance="info">
  <mc-notification icon="info-circle" verticalalign="middle" actionsposition="right">
    <span><b>product</b> has been dismissed</span>
    <span slot="actions" class="mc-notification__actions">
      <mc-button class="undo" variant="plain" appearance="neutral" padding="none" icon="arrow-anti-clockwise">Undo</mc-button>
    </span>
  </mc-notification>
</mc-toast>
```

## API

### Properties and attributes

#### duration

- **Type:** number
- **Default:** 5000
- **Description:** Specifies the duration for toast visibility. Value should be set in milliseconds. For short messages we recommend to show toast for 5s. For longer content, minimum 10s.

#### fit

- **Type:** small | medium | large
- **Typescript Type:** Fit
- **Default:** medium
- **Description:** Controls the overall size of the component.

#### appearance

- **Type:** neutral-default | neutral-inverse | info | success | warning | error
- **Typescript Type:** ToastAppearance
- **Default:** neutral-default
- **Description:** Controls the visual style of the component. If not set, the default appearance is <b>neutral-default</b>.

#### position

- **Type:** bottom-left | bottom-center | bottom-right | top-left | top-center | top-right
- **Typescript Type:** Position
- **Default:** top-right
- **Description:** Specifies the position of the toast on the screen

#### width

- **Type:** auto | number
- **Typescript Type:** Width
- **Default:** auto
- **Description:** The max width of the toast in pixels. If not provided the width will be `auto` but not wider than `480px`

#### open

- **Type:** boolean
- **Default:** false
- **Description:** Whether the toast should be open when created.

### Events

#### close

- **Type:** CustomEvent<string>
- **Description:** Emitted when the toast is closed.

### Types

- Fit: re-export
- IMcToast: interface
- McClosableComponent: interface
- Position: type
- ToastAppearance: type
- Width: type

### Slots

#### Default slot

- **Description:** Use the default slot, when you want to pass notification component to be shown in the toast. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-toast>
  <mc-notification></mc-notification>
</mc-toast>
```

#### trigger

- **Description:** Use the trigger named slot, when you want to pass element that will trigger toast.. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-toast>
  <mc-button slot="trigger" label="Toast"></mc-button>
</mc-toast>
```

## Related

- [Button](https://designsystem.maersk.com/components/button/)
- [Link](https://designsystem.maersk.com/components/link/)
- [Modal](https://designsystem.maersk.com/components/modal/)
- [Notification](https://designsystem.maersk.com/components/notification/)
- [System Feedback](https://designsystem.maersk.com/guidelines/system-feedback/)

