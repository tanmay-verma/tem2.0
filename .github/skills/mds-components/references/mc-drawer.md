# mc-drawer

A drawer, also known as a slide-out panel is used for secondary content and functionality.

**Url:** https://designsystem.maersk.com/components/drawer/
**Alternative names:** Sidebar, Panel, Flyout, Slider
**Keywords:** component, popup, overlay, content, layout
**✅ When to use:** When you need to display supplementary content without navigating away from the current view.
**❌ When not to use:** When you need to display critical information that requires immediate attention.

## Do's

- No specific do guidance documented.


## Don'ts

- No specific don't guidance documented.


## Cautions

- No specific caution guidance documented.


## Best practices

### Best practice
- Use drawers for menus, settings, filters and contextual options.
- Position the drawer consistently across the website or application.
- Don’t overload the drawer, keep the content simple and focused.
- Don’t use a drawer as the primary navigation on desktop.
- Avoid using the bottom drawer on desktop.

### Usage
- Use the drawer for secondary content and functionality that do not have to be visible at all times.
The most common use cases are menus, settings, filters, contextual actions and tools.
Drawers can also be used for temporary content such as notifications and chats.
- Drawers help save space and create a cleaner UI by hiding secondary information. Avoid using drawers for primary navigation in desktop applications if space allows for a more permanent sidebar or header navigation.
- The drawer should not be confused with a persistent sidebar. The drawer is an overlay that can be opened and closed, whereas a sidebar is persistent part of the page.
A sidebar component is on our backlog for Q1 2025 as a part of a wider page layout work.

### Placement
- Drawers are typically placed on the left or right side of the screen, but can also be placed in the top or the bottom of the screen.
- Ensure that the same type of drawer is placed consistently across the website or application.
- Example: Drawer placed to the right.
- Example: Drawer placed to the left.
- Example: Drawer placed to the bottom.
- Example: Drawer placed to the top.

### Content
- Ensure the content inside the drawer is well-organized and scannable. Use headings, dividers, or sections to break up content logically.
Only include the information necessary for the task at hand e.g., menu items, filters.
- Example: Example of well-organized content in the drawer.

### Non-modal drawer
- By default, the drawer is in modal state, which means that while the drawer is opened it has a backdrop and the user cannot interact with the rest of the page.
In some cases, the user still needs to be able to interact with the rest of the page, in such cases the drawer can be made non-modal.
- Example: Modal drawer.
- Example: Non-modal drawer.

## Usage & code examples

```bash
// General Setup (JS, VUE, Angular) 
npm install @maersk-global/mds-components-core-drawer
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-drawer
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-drawer';
// minimal example usage
<mc-drawer></mc-drawer>
// basic example usage
<mc-drawer position="right" customsize="" dimension="medium" fit="medium" autofocus=""></mc-drawer>
```

### Advanced Examples

#### CustomDimensionsUsingParts

```html
<mc-drawer>
  <span slot="heading">Heading</span>
  <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
  <mc-button slot="footer" dialogaction="close">Close</mc-button>
</mc-drawer>
<mc-button style="width: fit-content;" onclick="toggleDrawer()">Open drawer</mc-button>
```

#### WidthAndHeightPerBreakpoint

```html
<mc-drawer position="left">
  <span slot="heading">Responsive Drawer</span>
  <div>This drawer has responsive width based on breakpoints. To use responsive height, please change the position to top/bottom.</div>
  <mc-button slot="footer" dialogaction="close">Close</mc-button>
</mc-drawer>
<mc-button style="width: fit-content;" onclick="toggleDrawer()">Open drawer</mc-button>
```

#### WithToast

```html
<mc-toast duration="5000" position="bottom-right" appearance="error">
  <mc-notification body="Toast body text"></mc-notification>
</mc-toast>
<mc-button id="openDrawer">Open drawer</mc-button>
<mc-drawer heading="Heading" customstacking>
  <div class="mds-flex mds-flex-column mds-gap-400">
    <mc-button
      id="showToast"
      label="Click to show toast"
      appearance="neutral"
      variant="outlined"
    ></mc-button>
    <mc-input autofocus label="Input in drawer"></mc-input>
    <mc-input-date label="Input date in drawer"></mc-input-date>
    <a href="https://designsystem.maersk.com" target="_blank" rel="noopener noreferrer">Design System</a>
  </div>
  <mc-button slot="footer" dialogaction="close" appearance="primary">Close</mc-button>
</mc-drawer>
```

## API

### Properties and attributes

#### position

- **Type:** left | right | top | bottom
- **Typescript Type:** Position
- **Default:** right
- **Description:** The position of the drawer.

#### customsize

- **Type:** string
- **Description:** Sets the custom size of the drawer.
    If the position is set to <b>left</b> or <b>right</b>, the width will be adjusted.
    If the position is set to <b>top</b> or <b>bottom</b>, the height will be adjusted.
    You can also set the custom size for different breakpoints by passing an object with the breakpoint sizes i.e.


    {
    xs: '100%',
    sm: '400px',
    md: '500px',
    lg: '600px',
    xl: '50%'
    }

    

#### dimension

- **Type:** select
- **Default:** medium
- **Description:** The dimension of the drawer.
    The dimension depends on the position of the drawer and are as follows:
    
small:
    
- left: `width: 320px, height: 100dvh`
    
- right: `width: 320px, height: 100dvh`
    
- top: `height: 320px, width: 100dvw`
    
- bottom: `height: 320px, width: 100dvw`


medium:
    
- left: `width: 480px, height: 100dvh`
    
- right: `width: 480px, height: 100dvh`
    
- top: `height: 480px, width: 100dvw`
    
- bottom: `height: 480px, width: 100dvw`


large:
    
- left: `width: 800px, height: 100dvh`
    
- right: `width: 800px, height: 100dvh`
    
- top: `height: 800px, width: 100dvw`
    
- bottom: `height: 800px, width: 100dvw`

#### fit

- **Type:** small | medium
- **Default:** medium
- **Description:** Description missing

#### nonmodal

- **Type:** boolean
- **Default:** false
- **Description:** If true, the drawer will open as a non-modal drawer, allowing page interaction.

#### nopadding

- **Type:** boolean
- **Default:** false
- **Description:** If true, the drawer content will have no padding.

#### disablestickyfooter

- **Type:** boolean
- **Default:** false
- **Description:** Disables the sticky footer when scrolling content.

#### open

- **Type:** boolean
- **Default:** false
- **Description:** Opens the drawer.

#### backdropcloseactiondisabled

- **Type:** boolean
- **Default:** false
- **Description:** Disables closing the drawer when clicking outside of it.

#### autofocus

- **Type:** attribute
- **Description:** Add `autofocus` attiribute to an element inside of drawer to set focus on it when drawer is opened

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

- **Type:** CustomEvent<Mcdialogaction>
- **Description:**  The closed event gets dispatched once the drawer is closed.

#### closing

- **Type:** CustomEvent<Mcdialogaction>
- **Description:** The closing event gets dispatched once the drawer is closing.

#### opened

- **Type:** CustomEvent
- **Description:**  The opened event gets dispatched once the drawer is opened.

#### opening

- **Type:** CustomEvent
- **Description:** The opening event gets dispatched once the drawer is opening.

#### click

- **Type:** MouseEvent
- **Description:** The click event gets dispatched when clicked on the dialogaction button within a drawer.

### Types

- BreakpointSizes: re-export
- CustomSize: re-export
- Dimension: type
- Fit: re-export
- IMcDialog: re-export
- IMcDrawer: interface
- IMcDrawerMyEventDetail: interface
- Mcdialogaction: type
- Position: type

### Slots

#### Default slot

- **Description:** Use the default slot, when you want to pass body as HTML to the drawer. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-drawer>
  body as HTML
</mc-drawer>
```

#### heading

- **Description:** Use the heading named slot, when you want to pass heading as HTML to the drawer. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-drawer>
  <span slot="heading">
    heading as HTML
  </span>
</mc-drawer>
```

#### footer

- **Description:** Use the footer named slot, when you want to pass footer as HTML to the drawer. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-drawer>
  <span slot="footer">
    heading as HTML
  </span>
</mc-drawer>
```

## CSS parts

#### dialog

- **Description:** Using this CSS part you can change the look of the the dialog element(parent). Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-drawer::part(dialog) {
  background-color: #00897A;
  color: #AAEAE0;
}
```

#### header

- **Description:** Using this CSS part you can change the look of the header of the drawer. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-drawer::part(header) {
  background-color: #00897A;
  color: #AAEAE0;
}
```

#### body-wrapper

- **Description:** Using this CSS part you can change the look of the wrapper of the drawer content. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-drawer::part(body-wrapper) {
  background-color: #00897A;
  color: #AAEAE0;
}
```

#### footer

- **Description:** Using this CSS part you can change the look of the footer of the drawer. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-drawer::part(footer) {
  background-color: #00897A;
  color: #AAEAE0;
}
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

