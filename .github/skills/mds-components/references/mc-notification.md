# mc-notification

Provides high-level information about different occurrences within an application.

**Url:** https://designsystem.maersk.com/components/notification/
**Alternative names:** Notification, Alert, Message
**Keywords:** component, message, attention, communication, feedback, banner, alert, action, toast, discardable
**✅ When to use:** When you need to inform the user about an important event or action
**❌ When not to use:** For non-urgent messages or alerts

## Do's

- No specific do guidance documented.


## Don'ts

- No specific don't guidance documented.


## Cautions

- No specific caution guidance documented.


## Best practices

### Best practice
- Use sparingly to communicate important system-triggered feedback.
- Content should reflect the severity of the case and provide appropriate actions to the user.
- Communicate one message at a time in clear and concise language.
- Use easy-to-understand language (avoid technical terms).
- When action is required, use clear call-to-action terms. e.g. “Contact support”
- For high-urgency feedback, use a prominent placement. e.g. Full screen width notification below global navigation.
- For low-urgency feedback, use inline placement that brings the feedback closer to the context that it addresses.
- If you need to display low-disruptive feedback that is mainly task-triggered, then use the Toast component. For high-disruptive feedback where the user needs to take action before continuing, use the Modal component as a dialog.
- See our System Feedback Guidelines for more information on system feedback in general.

### Usage
- Use the notification component for medium to high-urgency in order to communicate mostly system-triggered feedback messages. Use to notify the user about important system information with a succinct message and when possible provide action to resolve any potential issues.

### Placement
- There are two main placements of notifications component - global notifcations and inline notifications.

#### Global notification
- Notifications can be used on global level where the notification is placed at the top of the page/app. This placement is typically for messages and feedback that related to the whole page/application and have a mid to high-urgency.

##### Cases where a global Notification is a good choice:
- Communicate internet connection was lost.
- Upcoming maintenance.
- Bigger updates or changes to the application, site, or page.
- Example: Global notification

#### Inline notificaton
- Notifications can also be placed inline within the page and is usally related to the specific section of the page or application. This kind of notifcations because of it placement usually have less urgency than the global notification.

##### Cases where an inline Notification is a good choice:
- Warning about information being internal only.
- Communicate outdated information or delays.
- Additional contextual information that is relevant to a specific section of the page or application.
- Example: Inline notification

### Appearance
- Use the different colour appearances and icons to clearly communicate the severity of the message.
- Example: Use for more general information about changes in the application e.g. announcements about product updates.
- Example: Use success notifications when a task or a process has successfully been completed.
- Example: Use warning when something in the application has changed that is important that the user is aware about.
- Example: Use for cases where an error has occured within the application that demands immediate attention.

### Content
- Always make sure that the user can read and understand the notification message within a few seconds. Keep the message short and use the words that people are familiar with.
- When a notification component takes the full width of the page, make sure to break long feedback messages into several lines. This will prevent degrading the reading experience on very wide screens.

### Actions
- The recommended (default) placement for actions (Buttons or Links) is under the feedback message. That allows for actions to stay close to the description which gives context to people independently of how wide the notification component expands in the viewport.
- Example: Action placed inline with the feedback message.
- It is also possible to display actions inline. If you use inline actions keep in mind they could become visually separated from the feedback message that might be providing important context for the user.
- Example: Action below the feedback message.

### Permanence
- Notifications can be either permanent or discardable
- Example: Global warning notification that is discardable.

## Usage & code examples

```bash
// General Setup (JS, VUE, Angular) 
npm install @maersk-global/mds-components-core-notification
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-notification
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-notification';
// minimal example usage
<mc-notification></mc-notification>
// basic example usage
<mc-notification heading="Heading" body="Body text" actions="[{"url":"https://designsystem.maersk.com","label":"Design System website","target":"_blank","rel":"noreferrer noopener"},{"url":"https://www.figma.com/design/uh3Q1w2MFAQNt8g01LN2Om/MDS--UI","label":"Figma library","target":"_blank","rel":"noreferrer noopener"}]" appearance="neutral-weak" width="" fit="medium" icon="" verticalalign="top" actionsposition="bottom"></mc-notification>
```

### Advanced Examples

#### BodyAsSlot

```html
<mc-notification>
  Body as HTML with custom <a href="https://designsystem.maersk.com/components/button/">link</a>
</mc-notification>
```

#### ActionsAsSlot

```html
<!-- N.B. The CSS class "mc-notification__actions" is an optional helper class to provide 
alignment, spacing and separators between actions when passed as a slot -->
<mc-notification appearance="error" heading="Heading">
  <span slot="actions" class="mc-notification__actions">
    <a class="mds-error--weak__on-background-color" href="http://designsystem.maersk.com">Maersk Design System</a>  
    <a class="mds-error--weak__on-background-color" href="http://www.google.com">Google</a>
  </span>
</mc-notification>
```

#### InlineButtonActions

```html
<!-- N.B. The CSS class "mc-notification__actions" is an optional helper class to provide 
alignment, spacing and separators between actions when passed as a slot -->
<mc-notification appearance="info" body="The file has been deleted" icon="info-circle" verticalalign="middle" actionsposition="right" closable> 
  <span slot="actions" class="mc-notification__actions">
    <mc-button variant="plain" appearance="neutral" padding="none" icon="arrow-anti-clockwise">Undo</mc-button>
    <mc-button variant="plain" appearance="neutral" padding="none" icon="arrow-anti-clockwise">Save</mc-button>
  </span>
</mc-notification>
```

#### IconAsSlot

```html
<mc-notification heading="Heading" body="Body text">
  <span slot="icon"><mc-icon icon="star"></mc-icon></span>
</mc-notification>
```

#### Closable

```html
<mc-notification appearance="success" heading="Heading" closable></mc-notification>
```

#### CustomisedAppearance

```html
<mc-notification icon="star" heading="Heading">
  <div>Body text</div>
</mc-notification>
```

## API

### Properties and attributes

#### heading

- **Type:** string
- **Typescript Type:** string | undefined
- **Default:** Heading
- **Description:** No heading will be shown, if attribute is not supplied

#### body

- **Type:** string | slot
- **Typescript Type:** string | undefined
- **Default:** Body text
- **Description:** Body can be passed as simple argument like: `body="simple text"` or as a default slot: `<mc-notification>body text as HTML</mc-notification>` Use argument style for passing short body text, use named slot when you want to pass body with HTML text

#### actions

- **Type:** array | slot
- **Typescript Type:** Array<Link> | undefined
- **Default:** [object Object],[object Object]
- **Description:** Actions can be passed as a named slot: `<mc-notification><span slot="actions"><a href="http://designsystem.maersk.com">Action</a></span></mc-notification>` or as an array of link objects: `[{url: "https://designsystem.maersk.com", label: "Design System"}]`. If you want an action link te be opened in a new tab, you can extend just pass extend action link object like: `[{url: "https://designsystem.maersk.com", label: "Design System", target: "_blank", rel: "noreferrer"}]`

#### appearance

- **Type:** NotificationAppearanceNew | NotificationAppearanceOld
- **Typescript Type:** NotificationAppearance
- **Default:** neutral-weak
- **Description:** Controls the visual style of the component. If not set, the default appearance is <b>neutral-weak</b>.

#### labels

- **Type:** IMcNotificationLabels
- **Typescript Type:** Partial<IMcNotificationLabels> | undefined
- **Description:** Custom labels for mc-notification component. By default labels are loaded in EN language. Check <a href="https://github.com/Maersk-Global/mds/blob/main/packages/mc-notification/src/lib/translations.ts" target="_blank" rel="noopener noreferrer">types documentation</a> to see how to use custom labels property.

#### width

- **Type:** string
- **Description:** Sets the width of the component, otherwise the width of the currently chosen size preset will be used. Remember also to specify the measurement unit i.e. `px`, `%`, `vw`, `fit-content` etc.

#### fit

- **Type:** small | medium | large
- **Typescript Type:** Fit
- **Default:** medium
- **Description:** Controls the overall size of the component.

#### icon

- **Type:** string | slot
- **Typescript Type:** string | undefined
- **Description:** Icon displayed at the start (front) of the component.

- **Available options:** [Icons List](../mds-icons/references/icons-list.md)

#### verticalalign

- **Type:** top | middle
- **Typescript Type:** VerticalAlign | undefined
- **Default:** top
- **Description:** Vertical alignment of content within notification

#### actionsposition

- **Type:** bottom | right
- **Typescript Type:** ActionsPosition | undefined
- **Default:** bottom
- **Description:** Position of the actions relative to the notification's content.

#### closable

- **Type:** boolean
- **Default:** false
- **Description:** Description missing

#### disableroundedcorners

- **Type:** boolean
- **Default:** false
- **Description:** Disables rounded corners. Useful when displaying a notification as a full-width banner, e.g. above the top bar.

### Events

#### close

- **Type:** CustomEvent
- **Description:** Emitted when close icon is clicked.

### Types

- ActionsPosition: type
- Fit: re-export
- IMcNotification: interface
- IMcNotificationLabels: type
- Link: interface
- NotificationAppearance: type
- Target: type
- VerticalAlign: type

### Slots

#### Default slot

- **Description:** Use the default slot, when you want to pass text with HTML. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-notification>
  body text as HTML
</mc-notification>
```

#### actions

- **Description:** Use the actions named slot, when you want to pass info description with HTML text.. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-notification>
  <span slot="actions">
    <a href="http://designsystem.maersk.com">Maersk Design System</a> •  
    <a href="http://www.google.com">Google</a>
  </span>
</mc-notification>
```

#### icon

- **Description:** Use the icon named slot, if  a custom graphic, pictogram, etc. should be used, instead of using MDS icons. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-notification>
  <span slot="icon">
    <img src="your-img-src" width="20" height="20" />
  </span>
</mc-notification>
```

## CSS parts

#### notification

- **Description:** Using this CSS part you can change the look of the container element inside the mc-notification component. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-notification::part(notification) {
  background-color: #00897A;
  color: #AAEAE0;
}
```

#### icon

- **Description:** Using this CSS part you can change the look of the icon element inside the mc-button component. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-notification::part(icon) {
  fill: #000000
}
```

## Related

- [Button](https://designsystem.maersk.com/components/button/)
- [Link](https://designsystem.maersk.com/components/link/)
- [Modal](https://designsystem.maersk.com/components/modal/)
- [System Feedback](https://designsystem.maersk.com/guidelines/system-feedback/)
- [Toast](https://designsystem.maersk.com/components/toast/)

