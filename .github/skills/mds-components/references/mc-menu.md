# mc-menu

The Menu can be used for command and navigational types of menus. It enables users to initiate an action or takes them to a new location.

**Url:** https://designsystem.maersk.com/components/menu/
**Alternative names:** Dropdown, Context Menu, Action Menu, Options Menu, Flyout Menu
**Keywords:** component, navigation, action, popup, popover, overlay, select, choice, option, multiple, single, list
**✅ When to use:** When you need to provide a list of actions or links in a compact space.
**❌ When not to use:** When you need to display a large amount of content or complex layouts.

## Do's

- Section dividers are used to divide categories of menu list items.
- Disable menu items when it's logical for the user why they are disabled.

## Don'ts

- Don't use section dividers as list item dividers.
- Don't disable all menu items in a menu list.

## Cautions

- No specific caution guidance documented.


## Best practices

### Best practice
- The content of the menus should be easy to scan and navigate.
- Use trigger elements like icons, buttons, text fields, and right mouse clicks to show a menu.
- The trigger should have affordance for the user, especially for touch gestures and right mouse clicks.
- Display the menu in close proximity to the triggering UI element.
- Use proper elevation (z-index) so that other UI elements do not cover the active menu.
- When menus are displayed they should not overflow the viewport.
- Utilize scrolling within the menu when the content requires it.
- If initiated action in a menu fails to complete, it should be clearly communicated to the user. Notification component is suitable for that task.

### Dividers
- You can add horisontal dividers to your menu to group the list items into different categories.

### Disable menu items
- You can disable the menu list items that are not avaliable, but always make sure that it makes sense in that particular context, so the user do not get confused.

## Usage & code examples

```bash
// General Setup (JS, VUE, Angular) 
npm install @maersk-global/mds-components-core-menu
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-menu
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-menu';
// minimal example usage
<mc-menu></mc-menu>
// basic example usage
<mc-menu trigger="click" fit="medium" position="bottom-left" maxwidth="" maxheight="" zindex="99999"></mc-menu>
```

### Advanced Examples

#### GettingClickedItem

```html
<p id="selected-item"></p>
<mc-menu position="bottom-left">
  <mc-button slot="trigger" icon="bars-horizontal" hiddenlabel label="menu" variant="outlined" appearance="neutral" ></mc-button>
  <mc-list>
    <mc-list-item value="1" label="One"></mc-list-item>
    <mc-list-item value="2" label="Two"></mc-list-item>
    <mc-list-item value="3" label="Three"></mc-list-item>
    <mc-list-item value="4" label="Four"></mc-list-item>
    <mc-list-item value="5" label="Five"></mc-list-item>
  </mc-list>      
</mc-menu>
```

#### WithIconTrigger

```html
<mc-menu position="bottom-left">
  <mc-icon slot="trigger" icon="cog"></mc-icon>
  <mc-list>
    <mc-list-item label="Settings"></mc-list-item>
    <mc-list-item label="My Account"></mc-list-item>
  </mc-list>      
</mc-menu>
```

#### WithAvatarTrigger

```html
<mc-menu position="bottom-center">
  <mc-avatar slot="trigger" clickable initials="JD" hiddentooltip></mc-avatar>
  <mc-list>
    <mc-list-item label="Settings"></mc-list-item>
    <mc-list-item label="My Account"></mc-list-item>
  </mc-list>      
</mc-menu>
```

#### WithRouterLinks

```html
import "@maersk-global/mds-components-core-menu";
import "@maersk-global/mds-components-core-button";
import "@maersk-global/mds-components-core-list";
import "@maersk-global/mds-components-core-list-item";

<mc-menu>
  <mc-button
    slot="trigger"
    hiddenlabel
    label="menu"
    icon="bars-horizontal"
    variant="outlined"
    appearance="neutral"
  ></mc-button>
  <mc-list>
    <mc-list-item><router-link to="/page1">Page 1</router-link></mc-list-item>
    <mc-list-item><router-link to="/page2">Page 2</router-link></mc-list-item>
    <mc-list-item><router-link to="/page3">Page 3</router-link></mc-list-item>
  </mc-list>
</mc-menu>
```

#### WithRotatingIcon

```html
<mc-menu>
  <mc-button 
    slot="trigger" 
    variant="plain"
    trailingicon="chevron-down">
    Options
  </mc-button>
  <mc-list>
    <mc-list-item label="Settings"></mc-list-item>
    <mc-list-item label="My Account"></mc-list-item>
  </mc-list>      
</mc-menu>
```

#### MenuStateWithChevron

```html
<mc-menu trigger="click">
  <mc-button
    slot="trigger"
    variant="plain"
    trailingicon="chevron-down"
    onclick="handleMenuTriggerClick(event)"
  >
    User xyz
  </mc-button>
  <mc-list>
    <mc-list-item label="Settings"></mc-list-item>
    <mc-list-item label="My Account"></mc-list-item>
  </mc-list>
</mc-menu>
```

## API

### Properties and attributes

#### trigger

- **Type:** Trigger
- **Default:** click
- **Description:** Determines the events that cause the menu to show. Multiple event names are separated by spaces.

#### fit

- **Type:** small | medium | large
- **Typescript Type:** Fit
- **Default:** medium
- **Description:** Controls the overall size of the component.

#### position

- **Type:** top-left | top-center | top-right | bottom-left | bottom-center | bottom-right | top-center | top-right | left-top | left-center | left-bottom | right-top | right-center | right-bottom
- **Typescript Type:** Position
- **Default:** bottom-left
- **Description:** Specifies the position of the menu in regards to the target element

#### maxwidth

- **Type:** text
- **Typescript Type:** string | undefined
- **Description:** Specifies the maximum width of the menu in CSS units i.e. `200px`.
  If the viewport's width is smaller than maxwidth, menu remains smaller than the screen.

#### maxheight

- **Type:** text
- **Typescript Type:** string | undefined
- **Description:** Specifies the maximum height of the menu in CSS units i.e. `200px`.

#### arrow

- **Type:** boolean
- **Default:** false
- **Description:** Whether to enable an arrow

#### zindex

- **Type:** number
- **Typescript Type:** number | undefined
- **Default:** 99999
- **Description:** Set only set if two menus or a menu and another z-indexed panel need to overlap.

#### open

- **Type:** boolean
- **Default:** false
- **Description:** Whether the menu should be open when created.

#### contextmenuonside

- **Type:** boolean
- **Default:** false
- **Description:** If true, the menu will be shown on the side of the trigger element when the trigger is 'contextmenu'.

#### disablecloseonselect

- **Type:** boolean
- **Default:** false
- **Description:** Disables auto close functionality of the menu when list item is selected.

### Types

- IMcMenu: interface

### Slots

#### Default slot

- **Description:** Use the default slot, when you want to pass menu list items or dividers to the menu. Check stories under <b>Lists -> Examples</b> folder to see live example.

```html
<mc-menu>
  <mc-list>
    <mc-list-item></mc-list-item>
  </mc-list>
</mc-menu>
```

#### trigger

- **Description:** Use the trigger named slot, for passing the element that triggers menu (i.e. mc-button, mc-avatar, mc-icon). Check stories under <b>Examples</b> folder to see live example.

```html
<mc-menu>
  <span slot="trigger">
    <mc-button slot="trigger"></mc-button>
  </span>
</mc-menu>
```

## Related

- [List](https://designsystem.maersk.com/components/list/)
- [Notification](https://designsystem.maersk.com/components/notification/)

