# mc-modal

Modals are full-screen takeovers used to direct the user's attention to important information or provide a choice.

**Url:** https://designsystem.maersk.com/components/modal/
**Alternative names:** Dialog, Lightbox, Popup, Alert, Confirmation
**Keywords:** component, popup, overlay, content, action
**✅ When to use:** When you need to capture user input or display important information.
**❌ When not to use:** When you need to display a large amount of content or complex layouts.

## Do's

- No specific do guidance documented.


## Don'ts

- No specific don't guidance documented.


## Cautions

- No specific caution guidance documented.


## Best practices

### Best practice
- Modals should be used sparingly because of their interruptive and invasive nature.
- Use a modal for quick tasks where the user will not lose the context of the underlying page.
- Keep the modal’s content concise.
- Avoid modals that open suddenly without user interaction.
- Avoid modals which are disconnected from what the user is currently doing.
- Avoid modals that require additional information outside the modal to be understood.
- Avoid multiple modals at once even though it is technically possible
- Make sure that the element that triggers the modal is keyboard accessible i.e. it should be possible to move the focus to that element and open the modal by pressing the Enter or Space key.

### Usage
- Modals are used to provide the user with in-context information and functionality relevant to their task at hand. When a modal is shown the user’s access to the rest of the page is blocked by a semi-transparent backdrop.
- Since modals intentionally disrupt the user’s workflow, they should be used sparingly and only when in-page alternatives fail at providing the needed information or functionality.

### Size and fit
- The size of a modal can be configured to fit the content and the context of use. The ‘size’ refers to the outer dimensions of the modal whereas the ‘fit’ relates to the density of the components within.

## Usage & code examples

```bash
// General Setup (JS, VUE, Angular) 
npm install @maersk-global/mds-components-core-modal
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-modal
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-modal';
// minimal example usage
<mc-modal></mc-modal>
// basic example usage
<mc-modal heading="Heading" body="Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium." actions="" footer="" fit="medium" dimension="medium" padding="default" width="" height="" zindex="999" autofocus=""></mc-modal>
```

### Advanced Examples

#### MultipleActionButtons

```html
<mc-button onclick="toggleModal()">Open</mc-button>
<mc-modal
  heading="Heading">
  <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. </p>
  <mc-checkbox slot="footer" label="Lorem ipsum?"></mc-checkbox>
  <mc-button slot="primaryAction" dialogaction="ok" appearance="primary">Save your changes</mc-button>
  <mc-button slot="secondaryAction" onclick="goBack()" appearance="neutral" variant="outlined">Go back</mc-button>
  <mc-button slot="secondaryAction" dialogaction="cancel" appearance="neutral" variant="outlined">Cancel</mc-button>
</mc-modal>
```

#### WithoutFooter

```html
<mc-button onclick="toggleModal()">Open</mc-button>
<mc-modal entercloseactiondisabled dimension="small">
  <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. </p>
</mc-modal>
```

#### FormElements

```html
<mc-button onclick="toggleModal()">Manage user permissions</mc-button>
<mc-modal height="300px" width="50%" heading="Manage user permissions">
  <p>Please select the desired permission level for user <strong>RH001234</strong></p>
  <mc-select autofocus label="User role">
    <mc-option value="1">User with read access</mc-option>
    <mc-option value="2">User with write access</mc-option>
    <mc-option value="3">User with edit access</mc-option>
    <mc-option value="4">User with delete access</mc-option>
    <mc-option value="5">Editor</mc-option>
    <mc-option value="6">Privileged editor</mc-option>
    <mc-option value="7">Administrator</mc-option>
    <mc-option value="8">Manager</mc-option>
    <mc-option value="9">Privileged manager</mc-option>
    <mc-option value="10">Tester</mc-option>
    <mc-option value="11">Privileged tester</mc-option>
    <mc-option value="10">Supervisor</mc-option>
    <mc-option value="11">Privileged supervisor</mc-option>
  </mc-select>
  <mc-button slot="secondaryAction" appearance="neutral" variant="outlined" dialogaction="cancel">Cancel</mc-button>
  <mc-button slot="primaryAction" appearance="primary" dialogaction="ok">Save</mc-button>
</mc-modal>
```

#### RadioWithModalConfirmation

```html
<div style="width: 200px">
 <mc-radio-group legend="Choose profile mode">
  <mc-radio name="profile-mode" value="1" label="Private"></mc-radio>
  <mc-radio name="profile-mode" value="0" label="Public" checked></mc-radio>
 </mc-radio-group>
</div>
<mc-modal dimension="small">
  <p>Are you sure you want to change your profile mode?</p>
  <mc-button
    slot="secondaryAction"
    appearance="neutral"
    variant="outlined"
    dialogaction="cancel"
    label="Cancel"
  ></mc-button>
  <mc-button
    slot="primaryAction"
    appearance="primary"
    onclick="modalSubmitActionClick()"
    label="Yes, change it"
  ></mc-button>
</mc-modal>
```

#### SwitchWithModalConfirmation

```html
<mc-switch name="airplane-mode" value="1" label="Airplane mode" checked></mc-switch>
<mc-modal dimension="small">
  <p id="question">Are you sure you want to turn off the airplane mode?</p>
  <mc-button slot="secondaryAction" appearance="neutral" variant="outlined" dialogaction="cancel" label="Cancel"></mc-button>
  <mc-button id="confirm" slot="primaryAction" appearance="primary" onclick="modalSubmitActionClick()" label="Turn off"></mc-button>
</mc-modal>
```

#### WithDefaultPageStyles

```html
<mc-button onclick="toggleModal()">Open</mc-button>
<mc-modal dimension="medium" heading="Default page styles">
  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <h3>Heading 3</h3>
  <h4>Heading 4</h4>
  <h5>Heading 5</h5>
  <h6>Heading 6</h6>
  <p>This is a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et tortor consequat id porta. Sit amet mattis vulputate enim nulla aliquet porttitor. Magna etiam tempor orci eu lobortis. Sit amet consectetur adipiscing elit. Sagittis id consectetur purus ut faucibus. Consequat ac felis donec et odio pellentesque diam volutpat commodo. Cursus in hac habitasse platea dictumst. Donec ac odio tempor orci dapibus. Amet venenatis urna cursus eget nunc scelerisque viverra. Nibh mauris cursus mattis molestie a. Quis hendrerit dolor magna eget est lorem ipsum.</p>
  <p>This is another paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Montes nascetur ridiculus mus mauris. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar.</p>
  <hr />
  <p>Here is a link to the <a href="https://designsystem.maersk.com">Maersk Design System's website</a>.</p>
  <hr />
  <p><strong>Strong</strong> and <em>Emphasise</em>.</p>
  <hr />
  <ol>
    <li>Ordered list item</li>
    <li>Ordered list item</li>
    <li>Ordered list item</li>
  </ol>
  <hr />
  <ul>
    <li>Unordered list item</li>
    <li>Unordered list item</li>
    <li>Unordered list item</li>
  </ul>
  <mc-button slot="secondaryAction" appearance="neutral" variant="outlined" dialogaction="cancel" label="Cancel"></mc-button>
  <mc-button id="confirm" slot="primaryAction" appearance="primary" label="OK"></mc-button>
</mc-modal>
```

#### WithoutPaddingAndFooter

```html
<mc-button onclick="toggleModal()">Open</mc-button>
<mc-modal padding="none">
  <div class="container">
    <div class="image">
      <img src="hero.svg" />
    </div>
    <div class="content">
      <h3>About v2</h3>
      <p>The Maersk Design System has released its v2 with official support for multiple Maersk brand themes .</p>
      <p>It also includes a Figma component rebuild, CSS parts customisation, enhanced CSS foundations and more. We need your help to try out the new release and provide feedback as we move into 2023.</p>
      <mc-button fit="small" appearance="neutral" href="https://designsystem.maersk.com" target="_blank">Read all about the release</mc-button>
    </div>
  </div>
</mc-modal>
```

#### HeadingAsSlot

```html
<mc-button onclick="toggleModal()">Open</mc-button>
<mc-modal dimension="small">          
  <span slot="heading">
  Heading as HTML with custom <a class="mds-neutral--weak__text-color" href="https://designsystem.maersk.com/components/modal/">link</a>
  </span>
  <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.</p>
</mc-modal>
```

#### WidthAndHeightPerBreakpoint

```html
<mc-modal>
  <span slot="heading">Responsive modal</span>
  <div>This modal has responsive width and height based on breakpoints.</div>
  <mc-button slot="footer" dialogaction="close">Close</mc-button>
</mc-modal>
<mc-button onclick="toggleModal()">Open modal</mc-button>
```

#### WithOverlayOnTopOfModal

```html
<mc-button onclick="toggleModal()">Open</mc-button>
<mc-modal zindex="0" heading="Heading">
  <mc-button onclick="triggerLoading()" appearance="neutral" variant="outlined">Trigger loading overlay</mc-button>
  <mc-button slot="primaryAction" dialogaction="ok" appearance="primary">Save your changes</mc-button>
  <mc-button slot="secondaryAction" dialogaction="cancel" appearance="neutral" variant="outlined"
    >Cancel</mc-button
  >
</mc-modal>
<mc-dialog zindex="1">
  <mc-loading-indicator></mc-loading-indicator>
</mc-dialog>
```

#### WithToast

```html
<mc-toast duration="5000" appearance="info">
  <mc-notification body="Toast body text"></mc-notification>
</mc-toast>
<mc-button id="openModal">Open modal</mc-button>
<mc-modal heading="Heading" customstacking>
  <div class="mds-flex mds-flex-column mds-gap-400">
    <mc-button
      id="showToast"
      label="Click to show toast"
      appearance="neutral"
      variant="outlined"
    ></mc-button>
    <mc-input autofocus label="Input in modal"></mc-input>
    <mc-input-date label="Input date in modal"></mc-input-date>
    <a href="https://designsystem.maersk.com" target="_blank" rel="noopener noreferrer">Design System</a>
  </div>
  <mc-button slot="primaryAction" dialogaction="ok" appearance="primary">Ok</mc-button>
  <mc-button slot="secondaryAction" dialogaction="cancel" appearance="neutral" variant="outlined"
    >Cancel</mc-button
  >
</mc-modal>
```

## API

### Properties and attributes

#### heading

- **Type:** string | slot
- **Default:** Heading
- **Description:** No heading will be shown, if attribute, or heading slot is not supplied

#### body

- **Type:** slot
- **Default:** Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
- **Description:** Body should be provided as the default slot i.e.:`<mc-modal>rich text</mc-modal>`

#### hiddenclose

- **Type:** boolean
- **Default:** false
- **Description:** Hides the close button.

#### actions

- **Type:** slot
- **Description:** There are two named slots available: `primaryAction` & `secondaryAction`. You can pass into those i.e.: confirm or cancel action, like: ```<mc-button slot="primaryAction" dialogaction="ok">OK</mc-button>``` or ```<mc-button slot="secondaryAction" dialogaction="cancel">Cancel</mc-button>``` For more details on usage, please look at code snippet in the example above

#### footer

- **Type:** slot
- **Description:** There is a slot for additional content to be included in the footer. You can pass into this slot i.e.: instructions or disclaimer, like: ```<div slot="footer">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>```

#### fit

- **Type:** small | medium
- **Default:** medium
- **Description:** Controls the modal size

#### dimension

- **Type:** small | medium | large
- **Default:** medium
- **Description:** On the small screens modal will be shown in full-screen size, regardless of the modal dimension (for small dimension the break point is below `700px`, for medium and large dimension - it is  below `800px`).
      
The specifications of each size preset are as below:
      
- small: `width: 400px`, `height: 225px` 
      
- medium: `width: 800px`, `height: 400px` 
      
- large: `width: 1200px`, `height: 600px`

#### padding

- **Type:** default | none
- **Typescript Type:** Padding
- **Default:** default
- **Description:** Adjust padding size. For compact look, use `padding="none"`

#### width

- **Type:** string
- **Description:** Sets the width of the component, otherwise the width of the currently chosen size preset will be used. Remember also to specify the measurement unit i.e. `px`, `%` or `vw`, etc.

#### height

- **Type:** string
- **Description:** Sets the height of the component, otherwise the height of the currently chosen size preset will be used. Remember also to specify the measurement unit i.e. `px`, `%` or `vh`, etc.

#### zindex

- **Type:** number
- **Default:** 999
- **Description:** Should only be set if two modal are supposed to be shown on top of each other

#### open

- **Type:** boolean
- **Default:** false
- **Description:** Controls whether the modal is open and visible.

#### backdropcloseactiondisabled

- **Type:** boolean
- **Default:** false
- **Description:** This attribute should be added only if clicking on the backdrop (scrim) must not close the modal

#### escapecloseactiondisabled

- **Type:** boolean
- **Default:** false
- **Description:** This attribute should be added only if pressing the `Escape` must not close the modal

#### entercloseactiondisabled

- **Type:** boolean
- **Default:** false
- **Description:** This attribute should be added only if pressing the `Enter` must not close the modal

#### autofocus

- **Type:** attribute
- **Description:** Add `autofocus` attiribute to an element inside of modal to set focus on it when modal is opened

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

### Events

#### closed

- **Type:** CustomEvent<McModalAction>
- **Description:**  The closed event gets dispatched once the modal is closed.

#### closing

- **Type:** CustomEvent<McModalAction>
- **Description:** The closing event gets dispatched once the modal is closing.

#### opened

- **Type:** CustomEvent
- **Description:**  The opened event gets dispatched once the modal is opened.

#### opening

- **Type:** CustomEvent
- **Description:** The opening event gets dispatched once the modal is opening.

#### click

- **Type:** MouseEvent
- **Description:** The click event gets dispatched when clicked on the primaryAction/secondaryAction button within a modal.

### Types

- Dimension: type
- Fit: type
- IMcModal: interface
- McModalAction: type
- Padding: re-export

### Slots

#### Default slot

- **Description:** Use the default slot, when you want to pass body as HTML to the modal. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-modal>
  body as HTML
</mc-modal>
```

#### primaryAction

- **Description:** Use the primaryAction named slot, when you want to pass confirm action button. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-modal>
  <mc-button 
    slot="primaryAction" 
    dialogaction="ok">
      OK
  </mc-button>
</mc-modal>
```

#### secondaryAction

- **Description:** Use the secondaryAction named slot, when you want to pass cancel action button. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-modal>
  <mc-button 
    slot="secondaryAction" 
    dialogaction="cancel">
      Cancel
  </mc-button>
</mc-modal>
```

#### footer

- **Description:** Use the footer named slot, when you want to pass disclaimer or other content in the footer. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-modal>
  <div slot="footer">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
</mc-modal>
```

## Related

- [undefined](undefined)
- [undefined](undefined)
- [undefined](undefined)
- [undefined](undefined)
- [undefined](undefined)
- [undefined](undefined)
- [undefined](undefined)
- [undefined](undefined)
- [undefined](undefined)
- [undefined](undefined)
- [undefined](undefined)
- [undefined](undefined)
- [undefined](undefined)
- [undefined](undefined)
- [undefined](undefined)

