# mc-tooltip

A tooltip is a descriptive text box that is used to provide contextual information about a UI element.

**Url:** https://designsystem.maersk.com/components/tooltip/
**Alternative names:** Info Tooltip, Help Tooltip, Hover Text, Info Bubble, Hint
**Keywords:** component, content, popup, popover, overlay, information, contextual, hint, message, proximity
**✅ When to use:** When you need to provide additional information about a UI element on hover, focus, or tap.
**❌ When not to use:** When the information is critical and must be always visible, consider using a different UI pattern.

## Do's

- No specific do guidance documented.


## Don'ts

- No specific don't guidance documented.


## Cautions

- No specific caution guidance documented.


## Best practices

### Best practice
- The tooltip should always be placed in close proximity to the element it describes.
- Only use a tooltip when additional information is needed to understand the UI.
- Use tooltips to describe the difference between very similar elements.

### Usage
- A tooltip component is a user interface element that displays a short message when the user hovers over, focuses on, or taps an element (e.g. icon or text). The message usually provides additional information or guidance about the element, such as its function or purpose. A tooltip component can be used to enhance the usability and accessibility of a web page or application.

#### Positions
- Example: 9 tooltip positions.

#### Use within text
- Use tooltip when the element has a label that is not clear or descriptive enough, and you want to explain what it does or what it means. For example, use a tooltip component to show the full name of an acronym, the definition of a term, or the description of a feature.
- Example: Example within text paragraph
- Example: A table with header tooltips.

#### Use with non-text elements
- Tooltip can also be used when the element has no label at all, and you want to provide a hint or instruction to the user. For example, use a tooltip component to show what action will be performed when the user clicks on an icon, what information is required in a form field, or what keyboard shortcut is available for an operation.
- Example: Example within text paragraph
- Tooltip content should only be supplementary and not information that is needed for the completion of the user journey.

## Usage & code examples

```bash
// General Setup (JS, VUE, Angular) 
npm install @maersk-global/mds-components-core-tooltip
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-tooltip
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-tooltip';
// minimal example usage
<mc-tooltip></mc-tooltip>
// basic example usage
<mc-tooltip opendelay="50" position="top-left" width="auto" appearance="neutral-default" fit="medium" trigger="hover focus click" zindex="99999"></mc-tooltip>
```

### Advanced Examples

#### OpenByDefault

```html
<mc-tooltip open>
  <mc-button slot="trigger" icon="heart" hiddenlabel></mc-button>
  <div>
    Lorem ipsum dolor sit amet
  </div>
</mc-tooltip>
```

#### CustomisedAppearance

```html
<mc-tooltip>
  <mc-button slot="trigger" icon="heart" hiddenlabel></mc-button>
  <span>The HTML content of the tooltip</span>
</mc-tooltip>
  
```

#### InteractiveContentWithLink

```html
<mc-tooltip>
  <mc-button slot="trigger" label="Tooltip with interactive content"></mc-button>
  <div>
    <span>Interactive content</span>
    <a href="#">clickable and focusable link</a>
  </div>
</mc-tooltip>
```

#### InteractiveContentWithButton

```html
<mc-tooltip>
  <mc-button slot="trigger" label="Tooltip with interactive content"></mc-button>
  <div>
    <span>Interactive content</span>
    <mc-button appearance="neutral" label="Button"></mc-button>
    <mc-button label="Button"></mc-button>
  </div>
</mc-tooltip>
```

#### MultipleTooltips

```html
<style>
  .tooltip-container-content {
    background-color: #328529;
    color: white;
    padding: 4px;
  }
</style>

<div class="mds-flex mds-gap-800">
  <mc-tooltip id="1" position="bottom-center">
    <mc-button slot="trigger" label="Tooltip with content 1"></mc-button>
    <span>Lots of content 1</span>
  </mc-tooltip>
  <mc-tooltip id="2" position="bottom-center">
    <mc-button slot="trigger" label="Tooltip with content 2"></mc-button>
    <span>Lots of content 2</span>
  </mc-tooltip>
  <mc-tooltip id="3" position="bottom-center">
    <mc-button slot="trigger" label="Tooltip with content 3"></mc-button>
    <span>Lots of content 3</span>
  </mc-tooltip>
  <mc-tooltip id="4" position="bottom-center">
    <mc-button slot="trigger" label="Tooltip with content 4"></mc-button>
    <span>Lots of content 4</span>
  </mc-tooltip>
  <mc-tooltip id="5" position="bottom-center">
    <mc-button slot="trigger" label="Tooltip with content 5"></mc-button>
    <span>Lots of content 5</span>
  </mc-tooltip>
  <mc-tooltip id="6" position="bottom-center">
    <mc-button slot="trigger" label="Tooltip with content 6"></mc-button>
    <span>Lots of content 6</span>
  </mc-tooltip>

  <mc-tooltip id="1" position="bottom-center">
    <div slot="trigger" class="tooltip-container-content">Tooltip with another content 1</div>
    <span>tooltip 1</span>
  </mc-tooltip>
  <mc-tooltip id="2" position="bottom-center">
    <div slot="trigger" class="tooltip-container-content">Tooltip with another content 2</div>
    <span>tooltip 2</span>
  </mc-tooltip>
  <mc-tooltip id="3" position="bottom-center">
    <div slot="trigger" class="tooltip-container-content">Tooltip with another content 3</div>
    <span>tooltip 3</span>
  </mc-tooltip>
  <mc-tooltip id="4" position="bottom-center">
    <div slot="trigger" class="tooltip-container-content">Tooltip with another content 4</div>
    <span>tooltip 4</span>
  </mc-tooltip>
  <mc-tooltip id="5" position="bottom-center">
    <div slot="trigger" class="tooltip-container-content">Tooltip with another content 5</div>
    <span>tooltip 5</span>
  </mc-tooltip>
  <mc-tooltip id="6" position="bottom-center">
    <div slot="trigger" class="tooltip-container-content">Tooltip with another content 6</div>
    <span>tooltip 6</span>
  </mc-tooltip>
</div>
```

#### WithMaxWidth

```html
<mc-tooltip width="150">
  <mc-button slot="trigger" icon="heart" hiddenlabel></mc-button>
  <div>
    Lorem ipsum dolor sit amet
  </div>
</mc-tooltip>
```

#### ConditionalRender

```html
<mc-tooltip position="bottom-center">
  <span slot="trigger">Toggle tooltip content</span>
  <!-- conditionally render tooltip body -->
</mc-tooltip>
<br />
<mc-button id="toggle-btn">Toggle render tooltip</mc-button>
```

#### usingMixin

```html
<mc-tooltip id="global-tooltip" zindex="999999999999"></mc-tooltip>

<h3>HTML content from .tooltip-html-content</h3>

<div data-tooltip>
  📝 Hover over this text for HTML tooltip
  <div class="tooltip-html-content">
    This is a <b>rich HTML</b> tooltip with <em>formatting</em> and <mc-icon icon="info-circle"></mc-icon> icons
  </div>
</div>
<mc-button data-tooltip data-tooltip-appearance="neutral-inverse" onclick="alert('Button clicked!')">
  Button with HTML Tooltip
  <div class="tooltip-html-content">Click to <strong>save</strong> your changes</div>
</mc-button>

<h3>Simple text content from data-tooltip attribute</h3>
<mc-button-group>
  <mc-button-group-item icon="pencil" data-tooltip data-tooltip-content="Edit this item">
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
    <div class="tooltip-html-content">Duplicate this item<br /><em>Shortcut: Ctrl+D</em></div>
  </mc-button-group-item>
</mc-button-group>
```

#### usingCustomTriggerElement

```html
<mc-tooltip id="global-tooltip"></mc-tooltip>
<mc-button-group id="group">
  <mc-button-group-item id="action-new" data-tooltip-content="Create a new entry" icon="plus">New</mc-button-group-item>
  <mc-button-group-item id="action-edit" data-tooltip-content="Edit the current record" icon="pencil">Edit</mc-button-group-item>
  <mc-button-group-item id="action-delete" data-tooltip-content="Remove this row" icon="trash">Delete</mc-button-group-item>
  <mc-button-group-item id="action-archive" data-tooltip-content="Move to archive" icon="box">Archive</mc-button-group-item>
</mc-button-group>
```

## API

### Properties and attributes

#### opendelay

- **Type:** number
- **Default:** 50
- **Description:** Delay(in ms) after which the tooltip will open. Only supported when the trigger is set to `hover`.

#### position

- **Type:** bottom-left | bottom-center | bottom-right | top-left | top-center | top-right | left-top | left-center | left-bottom | right-top | right-center | right-bottom
- **Typescript Type:** TooltipPosition
- **Default:** top-left
- **Description:** Specifies the position of the tooltip in regards to the target element

#### width

- **Type:** auto | number
- **Typescript Type:** TooltipWidth
- **Default:** auto
- **Description:** The max width of the tooltip in pixels. If not provided the width will be `auto`

#### appearance

- **Type:** TooltipAppearanceNew | TooltipAppearanceOld
- **Typescript Type:** TooltipAppearance
- **Default:** neutral-default
- **Description:** Controls the visual style of the component. If not set, the default appearance is <b>neutral-default</b>.

#### fit

- **Type:** small | medium | large
- **Typescript Type:** Fit
- **Default:** medium
- **Description:** Controls the overall size of the component.

#### trigger

- **Type:** Trigger
- **Default:** hover focus click
- **Description:** Determines the events that cause the mc-tooltip to show. Multiple event names are separated by spaces.

#### customtriggerelement

- **Type:** Element | string
- **Typescript Type:** string | HTMLElement | undefined
- **Description:** HTML element or element ID (string) to attach the popover to. When a string is provided, the element will be found using document.getElementById(). Can be used instead of `trigger` named slot for performance optimization (e.g., large tables).

#### open

- **Type:** boolean
- **Default:** false
- **Description:** When set to true, tooltip will be visible

#### zindex

- **Type:** number
- **Typescript Type:** number | undefined
- **Default:** 99999
- **Description:** Set only set if two tooltips or a tooltip and another z-indexed panel need to overlap.

### Events

#### show

- **Type:** CustomEvent
- **Description:** Dispatched when tooltip opens

#### hide

- **Type:** CustomEvent
- **Description:** Dispatched when tooltip hides

### Types

- EventHandler: type
- HTMLElementEventName: type
- IMcTooltip: interface
- TooltipAppearance: type
- TooltipPosition: type
- TooltipWidth: type

### Slots

#### Default slot

- **Description:** Use the default slot, to supply the HTML content. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-tooltip>
  <span>
    Content as HTML
  </span>
</mc-tooltip>
```

#### trigger

- **Description:** Use the trigger named slot, to specify the element which toggles the popover. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-tooltip>
  <span slot="trigger">
    <mc-button slot="trigger">Click here!</mc-button>
  </span>
</mc-tooltip>
```

## CSS parts

#### popover-container

- **Description:** Using this CSS part you can change the look of the popover container. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-tooltip::part(popover-container) {
  background-color: #FFFBF5;
  color: #000000;
}
```

#### popover-arrow

- **Description:** Using this CSS part you can change the look of the popover arrow. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-tooltip::part(popover-arrow) {
  background-color: #FFFBF5;
  color: #000000;
}
```

## Related

- [undefined](undefined)
- [undefined](undefined)
- [undefined](undefined)
- [undefined](undefined)
- [undefined](undefined)

