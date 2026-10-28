# mc-dialog

A Dialog is a disruptive overlay that requires the user to make a decision before proceeding further.

**Url:** https://designsystem.maersk.com/components/dialog/
**Alternative names:** Modal, Popup, Lightbox
**Keywords:** component, popup, overlay, notification, attention, action, confirm, decision
**✅ When to use:** When you need to display important information or ask for user input.
**❌ When not to use:** When you need to display non-critical information or when a simple alert would suffice.

## Do's

- Use the dialog to ask the user to confirm any destructive action.

## Don'ts

- Don't use the dialog for low-urgency information and where no acknowledgement is needed.

## Cautions

- No specific caution guidance documented.


## Best practices

### Best practice
- Dialogs are inherently disruptive, so use them sparingly.
- Use dialogs to display messages of high-urgency.
- Use dialogs in cases that require a decision or acknowledgement from the user.
- Keep the dialog messages short and concise.
- Avoid ambigious and vague copy to minimise mistakes.
- If you need to display low-urgency feedback that is mainly task-triggered, then use the Toast component. For mid to high-urgency feedback and for feedback that needs to be persistant, use the Notification component.
- See our System Feedback Guidelines for more information on system feedback in general.

### Placement
- Dialogs are placed in the centre of the viewport and on top of everything else in the UI, this is done to ensure the user’s full attention. While the dialog is active, a backdrop (scrim) is rendered underneath and the rest of the UI is inaccessible until the user clicks on one of the actions in the dialog or dismisses it by pressing ESC.
- To see the dialog with the backdrop, click on the “Click to see dialog” button in the demo section in the top of the page.

### Usage
- Dialogs should be used in cases with high-urgency and/or where the user is required to take action to proceed, e.g. confirmation or acknowledgement. Be mindful of the dialog’s disruptive nature and ensure they are needed in your specific use case.

## Usage & code examples

```bash
// General Setup (JS, VUE, Angular) 
npm install @maersk-global/mds-components-core-dialog
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-dialog
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-dialog';
// minimal example usage
<mc-dialog></mc-dialog>
// basic example usage
<mc-dialog heading="Heading" body="A question prompting the user to make a decision?" actions="" fit="medium" dimension="medium" width="" zindex="99999" autofocus=""></mc-dialog>
```

### Advanced Examples

#### MultipleActionButtons

```html
<mc-button onclick="toggleDialog()">Open</mc-button>
<mc-dialog
  heading="Heading">
  <p>Are you sure you want to delete this item? This action cannot be undone.</p>
  <mc-button slot="primaryAction" appearance="primary">Save your changes</mc-button>
  <mc-button slot="secondaryAction" onclick="goBack()" appearance="neutral" variant="outlined">Go back</mc-button>
  <mc-button slot="secondaryAction" dialogaction="cancel" appearance="neutral" variant="outlined">Cancel</mc-button>
</mc-dialog>
```

#### HeadingAsSlot

```html
<mc-button onclick="toggleDialog()">Open</mc-button>
<mc-dialog body="Are you sure you want to delete this item? This action cannot be undone.">
  <span slot="heading">
    Heading as HTML with custom
    <a class="mds-neutral--weak__text-color" href="https://designsystem.maersk.com/components/dialog/">link</a>
  </span>
  <mc-button slot="primaryAction" dialogaction="ok" appearance="primary">Save your changes</mc-button>
  <mc-button slot="secondaryAction" dialogaction="cancel" appearance="neutral" variant="outlined">Cancel</mc-button>
</mc-dialog>
```

#### BodyAsSlot

```html
<mc-button onclick="toggleDialog()">Open</mc-button>
<mc-dialog heading="Caution!">
  <p>Are you sure you want to delete this item? This action cannot be undone.</p>
  <mc-button slot="primaryAction" dialogaction="ok" appearance="primary">Save your changes</mc-button>
  <mc-button slot="secondaryAction" dialogaction="cancel" appearance="neutral" variant="outlined"
    >Cancel</mc-button
  >
</mc-dialog>
```

#### WidthPerBreakpoint

```html
<mc-button onclick="toggleDialog()">Open</mc-button>
<mc-dialog 
  heading="Caution!"
>
  <p>Are you sure you want to delete this item? This action cannot be undone.</p>
  <mc-button slot="primaryAction" dialogaction="ok" appearance="primary">Save your changes</mc-button>
  <mc-button slot="secondaryAction" dialogaction="cancel" appearance="neutral" variant="outlined">Cancel</mc-button>
</mc-dialog>
```

#### WithToast

```html
<mc-toast duration="5000" appearance="success">
  <mc-notification body="Toast body text"></mc-notification>
</mc-toast>
<mc-button id="openDialog">Open dialog</mc-button>
<mc-dialog heading="Heading" customstacking>
  <div class="mds-flex mds-flex-column mds-gap-400">
    <mc-button
      id="showToast"
      label="Click to show toast"
      appearance="neutral"
      variant="outlined"
    ></mc-button>
    <a href="https://designsystem.maersk.com" target="_blank" rel="noopener noreferrer">Design System</a>
  </div>
  <mc-button slot="primaryAction" dialogaction="ok" appearance="primary">Ok</mc-button>
  <mc-button slot="secondaryAction" dialogaction="cancel" appearance="neutral" variant="outlined"
    >Cancel</mc-button
  >
</mc-dialog>
```

## API

### Properties and attributes

#### heading

- **Type:** string | slot
- **Typescript Type:** string
- **Default:** Heading
- **Description:** No heading will be shown, if attribute, or heading slot is not supplied

#### body

- **Type:** string | slot
- **Typescript Type:** string
- **Default:** A question prompting the user to make a decision?
- **Description:** Body can be provided as the default slot i.e.:`<mc-dialog>rich text</mc-dialog>` or as a string attribute.

#### actions

- **Type:** slot
- **Description:** There are two named slots available: `primaryAction` & `secondaryAction`. You can pass into those i.e.: confirm or cancel action, like: ```<mc-button slot="primaryAction" dialogaction="ok">OK</mc-button>``` or ```<mc-button slot="secondaryAction" dialogaction="cancel">Cancel</mc-button>``` For more details on usage, please look at code snippet in the example above

#### fit

- **Type:** small | medium
- **Typescript Type:** Exclude<Fit, 'large'>
- **Default:** medium
- **Description:** Controls the dialog size.

#### dimension

- **Type:** small | medium | large
- **Typescript Type:** Dimension
- **Default:** medium
- **Description:** On the small screens dialog will be shown in full-screen size, regardless of the dialog dimension.
      
The specifications of each size preset are as below:
      
- small: `width: 320px, height: auto` 
      
- medium: `width: 480px, height: auto` 
      
- large: `width: 800px, height: auto`

#### width

- **Type:** string
- **Typescript Type:** string | BreakpointSizes
- **Description:** Sets the width of the component.
    You can also set the width for different breakpoints by passing an object with the breakpoint sizes i.e.

{
  xs: '100%',
  sm: '400px',
  md: '500px',
  lg: '600px',
  xl: '700px'
}

    
    Remember also to specify the measurement unit i.e. `px`, `%` or `vw`, etc.

#### zindex

- **Type:** number
- **Default:** 99999
- **Description:** Should only be set if two dialogs are supposed to be shown on top of each other

#### open

- **Type:** boolean
- **Default:** false
- **Description:** Indicates whether the dialog is open. When `true`, the dialog is rendered and visible.

#### escapecloseactiondisabled

- **Type:** boolean
- **Default:** false
- **Description:** Disables the `Escape` key from closing the dialog.

#### nonmodal

- **Type:** boolean
- **Default:** false
- **Description:** If true, the dialog will open as a non-modal dialog, allowing page interaction.

#### nopadding

- **Type:** boolean
- **Default:** false
- **Description:** If true, the dialog content will have no padding.

#### disablestickyfooter

- **Type:** boolean
- **Default:** false
- **Description:** If true, the dialog footer will not be sticky.

#### autofocus

- **Type:** attribute
- **Description:** Add `autofocus` attiribute to an element inside of dialog to set focus on it when dialog is opened

#### hasheadingslot

- **Type:** boolean
- **Default:** false
- **Description:** **For server-side rendering only (e.g., Next.js).**


Set to true when providing content to the heading slot. Not needed for client-side rendering as the slot is detected automatically.

#### hasbodyslot

- **Type:** boolean
- **Default:** false
- **Description:** **For server-side rendering only (e.g., Next.js).**


Set to true when providing content to the default body slot. Not needed for client-side rendering as the slot is detected automatically.

#### hasfooterslot

- **Type:** boolean
- **Default:** false
- **Description:** **For server-side rendering only (e.g., Next.js).**


Set to true when providing content to footer/action slots. Not needed for client-side rendering as the slot is detected automatically.

#### labels

- **Type:** IMcDialogLabels
- **Typescript Type:** Partial<IMcDialogLabels> | undefined
- **Description:** Custom labels for mc-dialog component. By default labels are loaded in EN language. Check <a href="https://github.com/Maersk-Global/mds/blob/main/packages/mc-dialog/src/lib/translations.ts" target="_blank" rel="noopener noreferrer">types documentation</a> to see how to use custom labels property.

### Events

#### closed

- **Type:** CustomEvent
- **Description:**  The closed event gets dispatched once the dialog is closed.

#### closing

- **Type:** CustomEvent<McDialogAction>
- **Description:** The closing event gets dispatched once the dialog is closing.

#### opened

- **Type:** CustomEvent
- **Description:**  The opened event gets dispatched once the dialog is opened.

#### opening

- **Type:** CustomEvent
- **Description:** The opening event gets dispatched once the dialog is opening.

#### click

- **Type:** MouseEvent
- **Description:** The click event gets dispatched when clicked on the primaryAction/secondaryAction button within a dialog.

### Types

- BreakpointSizes: interface
- CustomSize: type
- DialogAction: type
- Dimension: type
- Fit: re-export
- IMcDialog: interface
- IMcDialogLabels: type
- McDialogAction: type

### Slots

#### Default slot

- **Description:** Use the default slot, when you want to pass body as HTML to the dialog. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-dialog>
  body as HTML
</mc-dialog>
```

#### primaryAction

- **Description:** Use the primaryAction named slot, when you want to pass confirm action button. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-dialog>
  <mc-button 
    slot="primaryAction" 
    dialogaction="ok">
      OK
  </mc-button>
</mc-dialog>
```

#### secondaryAction

- **Description:** Use the secondaryAction named slot, when you want to pass cancel action button. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-dialog>
  <mc-button 
    slot="secondaryAction" 
    dialogaction="cancel">
      Cancel
  </mc-button>
</mc-dialog>
```

## CSS parts

#### dialog

- **Description:** Using this CSS part you can change the look of the the dialog element. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-dialog::part(dialog) {
  background-color: #00897A;
  color: #AAEAE0;
}
```

#### header

- **Description:** Using this CSS part you can change the look of the header of the dialog. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-dialog::part(header) {
  background-color: #00897A;
  color: #AAEAE0;
}
```

#### body-wrapper

- **Description:** Using this CSS part you can change the look of the wrapper of the dialog content. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-dialog::part(body-wrapper) {
  background-color: #00897A;
  color: #AAEAE0;
}
```

#### footer

- **Description:** Using this CSS part you can change the look of the footer of the dialog. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-dialog::part(footer) {
  background-color: #00897A;
  color: #AAEAE0;
}
```

## Related

- [Notification](https://designsystem.maersk.com/components/notification/)
- [System Feedback](https://designsystem.maersk.com/guidelines/system-feedback/)
- [Toast](https://designsystem.maersk.com/components/toast/)

