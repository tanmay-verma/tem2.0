# mc-popover

Displays an overlay that can contain rich content and child components.

**Url:** https://designsystem.maersk.com/components/popover/
**Alternative names:** Tooltip, Context Menu, Dropdown, Info Box
**Keywords:** component, content, popup, popover, overlay, modal, dialog, drawer, menu
**✅ When to use:** When you need to display additional information related to a specific element.
**❌ When not to use:** When you have a small amount of information to display.

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
npm install @maersk-global/mds-components-core-popover
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-popover
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-popover';
// minimal example usage
<mc-popover></mc-popover>
// basic example usage
<mc-popover trigger="click" actionkeys="["Enter","Space"]" position="top-left" width="auto" maxheight="" maxwidth="" modalmode="none" fit="medium" zindex="99999" opendelay="50"></mc-popover>
```

### Advanced Examples

#### ScrollableContent

```html
<mc-popover maxwidth="350px" maxheight="200px" open position="bottom-left">
  <mc-button slot="trigger" label="Click me"></mc-button>
  <div class="content">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend enim ut diam rutrum, quis bibendum elit facilisis. Mauris quis facilisis nisl. Nullam odio ante, vestibulum nec ipsum ut, aliquet vestibulum risus. Praesent pretium, nunc eu sodales vulputate, mi lacus placerat erat, quis egestas nisi velit in tellus. Duis sagittis, nibh in fermentum mattis, velit mauris cursus purus, nec consequat massa tortor a nunc. In sit amet dolor eget libero condimentum ornare. Ut pulvinar quis quam et venenatis. Curabitur mi neque, mattis non augue eget, pretium facilisis eros. Phasellus molestie cursus est, vel accumsan eros ultricies finibus.
    Donec mollis eros quis felis egestas interdum. Morbi fringilla ut dolor vel ultrices. Nam facilisis ut arcu in luctus. Curabitur at convallis risus. Suspendisse fermentum lobortis viverra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa dolor, eleifend nec tortor ac, hendrerit pretium lorem. Fusce maximus gravida turpis, sed mattis enim lobortis nec. Curabitur elit mi, hendrerit ut nunc eu, dapibus scelerisque dui. Fusce neque neque, rutrum non urna quis, lacinia mollis tortor. Morbi semper rhoncus massa, ac auctor metus fringilla ac. Proin nec lacus vitae elit lobortis rhoncus. Morbi lobortis augue eget velit hendrerit iaculis. Sed eu metus ornare, volutpat diam non, fringilla purus. Nam ac euismod odio, a feugiat sem. Nulla facilisi.
    Phasellus eleifend nec orci quis tincidunt. Proin finibus condimentum aliquet. Morbi hendrerit lobortis odio eu pulvinar. Maecenas eu auctor nisi, sit amet mattis diam. Sed molestie est id lacus tincidunt, vel finibus ligula rutrum. Suspendisse commodo est porttitor, placerat eros in, viverra nulla. Vestibulum non ornare urna, quis mattis libero. Maecenas rhoncus molestie dui vel lobortis. Integer bibendum tortor non sapien aliquam tincidunt. Suspendisse potenti. Ut nec erat ac libero fringilla condimentum. Praesent ut finibus odio. Nunc at est sagittis, pharetra orci ac, posuere leo. Nam blandit lorem quis libero varius bibendum. Maecenas accumsan eu quam quis cursus.
    Duis et tincidunt leo, a facilisis justo. Aliquam sapien nulla, pellentesque sed velit at, pellentesque pharetra enim. Morbi tincidunt nibh condimentum, scelerisque nibh id, elementum purus. Suspendisse at euismod tortor, imperdiet lacinia ante. Aenean consectetur non arcu id dictum. Cras nisl mi, commodo a justo vitae, rhoncus faucibus lectus. Nulla pulvinar, est ac scelerisque blandit, mi ex euismod leo, non aliquet lectus ligula at lacus. Maecenas at tellus sagittis ipsum mattis molestie. Vestibulum vitae blandit dui.
    Proin mi sem, laoreet non rhoncus nec, faucibus et purus. Pellentesque convallis consectetur magna nec pharetra. Donec arcu purus, sagittis sed mauris sed, rutrum varius est. Praesent mauris metus, varius et lectus eget, pharetra ultricies lorem. Vestibulum vehicula massa non massa fermentum mattis. Etiam blandit eleifend erat, sed scelerisque sem pharetra a. Proin id finibus ante. In consectetur vehicula lorem in ultrices. In mollis sapien vitae quam egestas, ut malesuada orci viverra. Integer vel egestas est, sit amet ultrices augue. In dignissim nulla consectetur elit laoreet, eleifend hendrerit massa commodo. Nunc lobortis orci ac erat ultrices, sed tincidunt elit lacinia. Sed bibendum rutrum diam quis commodo. Sed ornare fermentum augue, et suscipit magna interdum ut. In hac habitasse platea dictumst. Maecenas purus est, iaculis at lectus in, cursus laoreet mi.</p>
  </div>
</mc-popover>
```

#### WithCloseButton

```html
<mc-popover maxwidth="350px" open position="bottom-left">
  <mc-button slot="trigger" label="Click me"></mc-button>
  <div class="content">
    <mc-button hiddenlabel icon="times" variant="plain" appearance="neutral" label="close button" class="close-button" onclick="hide()"></mc-button>
    <h3>Available capacity</h3>
    <span>This vessel has 50% capacity left.</span>
    <mc-button label="Book"></mc-button>
  </div>
</mc-popover>
```

#### ManualTrigger

```html
<mc-button label="Open/close popover" onclick="customTogglePopover()"></mc-button>
<mc-popover maxwidth="350px" trigger="manual" arrow position="bottom-left">
  <mc-icon slot="trigger" icon="info-circle"></mc-icon>
  <div class="content">
    <h3>Available capacity</h3>
    <span>This vessel has 50% capacity left.</span>
    <mc-button label="Book"></mc-button>
  </div>
</mc-popover>
```

#### CustomisedAppearance

```html
<mc-popover arrow="true">
  <mc-button slot="trigger" label="Click me"></mc-button>
  <div class="content">
    <span>This vessel has 50% capacity left</span>
  </div>
</mc-popover>
```

#### WithMultiChoiceGroups

```html
<mc-popover position="bottom-left">
  <mc-button slot="trigger" label="Select fruit"></mc-button>
  <mc-checkbox-group
    legend="Please select options"
    hiddenlegend="true"
  >
    <mc-checkbox name="fruit" value="Apple" label="Apple" checked></mc-checkbox>
    <mc-checkbox name="fruit" value="Orange" label="Orange"></mc-checkbox>
    <mc-checkbox name="fruit" value="Banana" label="Banana"></mc-checkbox>
    <mc-checkbox name="fruit" value="Lemon" label="Lemon"></mc-checkbox>
  </mc-checkbox-group>
</mc-popover>
<div id="selected-checkbox-group-values"></div>

<mc-popover position="bottom-left">
  <mc-button slot="trigger" label="Select fruit"></mc-button>
  <mc-radio-group
    legend="Please select options"
    hiddenlegend="true"
  >
    <mc-radio name="fruit" value="Apple" label="Apple" checked></mc-radio>
    <mc-radio name="fruit" value="Orange" label="Orange"></mc-radio>
    <mc-radio name="fruit" value="Banana" label="Banana"></mc-radio>
    <mc-radio name="fruit" value="Lemon" label="Lemon"></mc-radio>
  </mc-radio-group>
</mc-popover>
<div id="selected-radio-group-values"></div>

<mc-popover position="bottom-left">
  <mc-button slot="trigger" label="Select fruit"></mc-button>
  <mc-switch-group
    legend="Please select options"
    hiddenlegend="true"
    orientation="horizontal"
  >
    <mc-switch name="fruit" value="Apple" label="Apple" checked></mc-switch>
    <mc-switch name="fruit" value="Orange" label="Orange"></mc-switch>
    <mc-switch name="fruit" value="Banana" label="Banana"></mc-switch>
    <mc-switch name="fruit" value="Lemon" label="Lemon"></mc-switch>
  </mc-switch-group>
</mc-popover>
<div id="selected-switch-group-values"></div>
```

#### CustomTriggerElement

```html
<mc-input id="trigger-input" label="Vessel capacity"></mc-input>
<mc-popover trigger="click">
  <div class="content-wrapper">
    <h3>Available capacity</h3>
    <span>This vessel has 50% capacity left.</span>
    <mc-button label="Book"></mc-button>
  </div>
</mc-popover>
```

#### ModalInSmallViewport

```html
<mc-popover trigger="focus" modalmode="x-small-screen">
  <h3 slot="heading">Vessel capacity</h3>
  <mc-input slot="trigger" trigger="click" label="Vessel capacity"></mc-input>
  <div class="content">
    <span>This vessel has 50% capacity left.</span>
    <mc-button label="Book"></mc-button>
  </div>
  <mc-button slot="footer">Ok</mc-button>
</mc-popover>
```

#### WithFooterAndButtons

```html
<mc-popover width="324px">
  <mc-button slot="trigger" label="Click me" appearance="neutral" variant="outlined"></mc-button>
   <div class="mds-popover__body">
    <mc-label>Container guide</mc-label>
    <div class="mds-popover__description">
      Not sure what’s the right shipping container size or type for your cargo? Read our guide to help you choose
      the right one for your needs.
    </div>
  </div>
  <div class="mds-popover__footer">
    <mc-button label="Cancel" appearance="neutral" variant="outlined"></mc-button>
    <mc-button label="Read guide"></mc-button>
  </div>
</mc-popover>
```

#### WithSelect

```html
<mc-popover>
  <mc-button slot="trigger" label="Click me"></mc-button>
  <div style="padding: 16px; display: flex; flex-direction: column; gap: 8px;">
    <mc-select label="Select a port">
      <mc-option value="CNSHA">Shanghai, China</mc-option>
      <mc-option value="SGSIN">Singapore</mc-option>
      <mc-option value="CNNBO">Ningbo-Zhoushan, China</mc-option>
      <mc-option value="CNSZX">Shenzhen, China</mc-option>
      <mc-option value="CNGZH">Guangzhou, China</mc-option>
      <mc-option value="KRPUS">Busan, South Korea</mc-option>
      <mc-option value="CNTAO">Qingdao, China</mc-option>
      <mc-option value="HKHKG">Hong Kong</mc-option>
    </mc-select>
    <mc-button label="Book"></mc-button>
  </div>
</mc-popover>
```

#### AsChatBox

```html
<mc-popover trigger="manual" open position="bottom-right">
  <div slot="trigger"></div>
  <div class="chat-box">
    <h5>Contact Us</h5>
    <p>Have a question or need assistance? Send us a message and we'll get back to you as soon as possible.</p>
    <div class="form">
      <mc-textarea label="Type your message" hiddenlabel placeholder="Write a message" icon="comment">
      </mc-textarea>
      <mc-button icon="envelope"> Send </mc-button>
    </div>
  </div>
</mc-popover>
```

#### usingMixin

```html
<div style="display: flex; flex-direction: column; gap: 16px;">
  <mc-popover id="global-popover"></mc-popover>

  <h3>HTML content from .popover-html-content</h3>
  <div data-tooltip>
    📝 Click this text for HTML popover
    <div class="popover-html-content">
      This is a <b>rich HTML</b> popover with <em>formatting</em> and <mc-icon icon="info-circle"></mc-icon> icons
    </div>
  </div>

  <mc-button data-tooltip onclick="alert('Button clicked!')">
    Button with HTML Popover
    <div class="popover-html-content">
      Click to <strong>save</strong> your changes <mc-icon icon="floppy-disk"></mc-icon>
    </div>
  </mc-button>

  <h3>Simple text content from data-tooltip attribute</h3>
  <mc-button-group>
    <mc-button-group-item data-tooltip icon="pencil" data-tooltip-content="Edit this item">
      Edit
    </mc-button-group-item>
    <mc-button-group-item
      icon="trash"
      data-tooltip
      data-tooltip-content="Delete this item (cannot be undone)"
      data-tooltip-appearance="neutral-inverse"
    >
      Delete
    </mc-button-group-item>
    <mc-button-group-item icon="box" data-tooltip data-tooltip-content="Move this item to the archive">
      Archive
    </mc-button-group-item>
  </mc-button-group>

  <h3>Mixed: HTML and simple text content in Button Group</h3>
  <mc-button-group>
    <mc-button-group-item icon="plus" data-tooltip data-tooltip-content="Create a new item">
      New
    </mc-button-group-item>
    <mc-button-group-item icon="copy" data-tooltip>
      Copy
      <div class="popover-html-content">Duplicate this item<br /><em>Shortcut: Ctrl+D</em></div>
    </mc-button-group-item>
  </mc-button-group>
</div>
```

#### usingCustomTriggerElement

```html
<mc-popover id="global-popover"></mc-popover>
<mc-button-group id="group">
  <mc-button-group-item id="action-new" data-popover-content="Create a new entry" icon="plus">New</mc-button-group-item>
  <mc-button-group-item id="action-edit" data-popover-content="Edit the current record" icon="pencil">Edit</mc-button-group-item>
  <mc-button-group-item id="action-delete" data-popover-content="Remove this row" icon="trash">Delete</mc-button-group-item>
  <mc-button-group-item id="action-archive" data-popover-content="Move to archive" icon="box">Archive</mc-button-group-item>
</mc-button-group>
```

## API

### Properties and attributes

#### trigger

- **Type:** Trigger
- **Default:** click
- **Description:** Determines the events that cause the popover to show. Multiple event names are separated by spaces.

#### arrow

- **Type:** boolean
- **Default:** false
- **Description:** Whether to enable an arrow

#### actionkeys

- **Type:** array
- **Default:** Enter,Space
- **Description:** Keyboard key codes that will trigger opening/closing of the popover when the trigger element is focused.

#### customtriggerelement

- **Type:** Element | string
- **Typescript Type:** HTMLElement | string | null | undefined
- **Description:** HTML element or element ID (string) to attach the popover to. When a string is provided, the element will be found using document.getElementById(). Can be used instead of `trigger` named slot for performance optimization (e.g., large tables).

#### position

- **Type:** top-left | top-center | top-right | bottom-left | bottom-center | bottom-right | top-center | top-right | left-top | left-center | left-bottom | right-top | right-center | right-bottom
- **Typescript Type:** Position
- **Default:** top-left
- **Description:** Specifies the position of the popover in regards to the target element

#### width

- **Type:** text
- **Typescript Type:** string
- **Default:** auto
- **Description:** Specifies the width of the popover in CSS units i.e. `200px`. When set to `trigger` the width of the popover will be same as the trigger's.

#### maxheight

- **Type:** text
- **Typescript Type:** string | undefined
- **Description:** Specifies the maximum height of the popover in CSS units i.e. `200px`.

#### maxwidth

- **Type:** text
- **Typescript Type:** string | undefined
- **Description:** Specifies the maximum width of the popover in CSS units i.e. `200px`.
  If the viewport's width is smaller than maxwidth, popover remains smaller than the screen.

#### modalmode

- **Type:** none | x-small-screen
- **Typescript Type:** PopoverModalMode
- **Default:** none
- **Description:** Specifies when the popover should be shown as a modal instead.

#### fit

- **Type:** small | medium | large
- **Typescript Type:** Fit
- **Default:** medium
- **Description:** Controls the overall size of the component.

#### zindex

- **Type:** number
- **Typescript Type:** number | undefined
- **Default:** 99999
- **Description:** Set only set if two popovers or a popover and another z-indexed panel need to overlap.

#### labels

- **Type:** IMcPopoverLabels
- **Typescript Type:** Partial<IMcPopoverLabels> | undefined
- **Description:** Custom labels for mc-popover component. By default labels are loaded in EN language. Check <a href="https://github.com/Maersk-Global/mds/blob/main/packages/mc-popover/src/lib/translations.ts" target="_blank" rel="noopener noreferrer">types documentation</a> to see how to use custom labels property.

#### open

- **Type:** boolean
- **Default:** false
- **Description:** Whether the popover should be open when created.

#### preventcloseonblur

- **Type:** boolean
- **Default:** false
- **Description:** Prevent popover from closing when blur event is dispatched. Can be useful when trapping focus.

#### dontadjustheight

- **Type:** boolean
- **Default:** false
- **Description:** By default popover will try to adjust its height and display a scrollbar to always stay in the viewport. Setting this to true disables that behaviour.

#### opendelay

- **Type:** number
- **Default:** 50
- **Description:** Delay(in ms) after which the tooltip will open. Only supported when the trigger is set to `hover`.

#### contextmenuonside

- **Type:** boolean
- **Default:** false
- **Description:** If true, the popover will be shown on the side of the trigger element when the trigger is 'contextmenu'.

### Events

#### scroll

- **Type:** CustomEvent
- **Description:** Dispatched when popover container scrolls

#### show

- **Type:** CustomEvent
- **Description:** Dispatched when popover opens

#### hide

- **Type:** CustomEvent
- **Description:** Dispatched when popover hides

### Types

- IMcPopover: interface
- IMcPopoverLabels: type
- PopoverModalMode: type

### Slots

#### Default slot

- **Description:** Use the default slot, when you want to content to be shown in popover. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-popover>
  <div>popover content</div>
</mc-popover>
```

#### trigger

- **Description:** Use the trigger named slot, when you want to pass element that will trigger popover.. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-popover>
  <mc-button slot="trigger" label="Popover"></mc-button>
</mc-popover>
```

#### heading

- **Description:** Use the heading named slot, to provide heading in cases where the popover is set to be shown as a modal (using modalmode prop) for specific screen sizes. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-popover>
  <span slot="heading">Checkout date</span>
</mc-popover>
```

#### footer

- **Description:** Use the footer named slot, to provide footer in cases where the popover is set to be shown as a modal (using modalmode prop) for specific screen sizes. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-popover>
  <mc-button slot="footer">Ok</mc-button>
</mc-popover>
```

## CSS parts

#### container

- **Description:** Using this CSS part you can change the look of the container element inside the mc-popover component. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-popover::part(container) {
  background-color: #F7F7F7;
}
```

#### content

- **Description:** Using this CSS part you can change the look of the content element inside the mc-popover component. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-popover::part(content) {
  background-color: #F7F7F7;
}
```

#### arrow

- **Description:** Using this CSS part you can change the look of the arrow element inside the popover. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-popover::part(arrow) {
  background-color: #F7F7F7;
}
```

## Related

- [Input Date](https://designsystem.maersk.com/components/input-date/)
- [Tooltip](https://designsystem.maersk.com/components/tooltip/)

