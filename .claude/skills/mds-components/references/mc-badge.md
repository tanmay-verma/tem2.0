# mc-badge

The badge draws attention to UI elements to highlight new notifications, updates or counts without overwhelming the user.

**Url:** https://designsystem.maersk.com/components/badge/
**Alternative names:** 
**Keywords:** component, attention, highlight, update, count, dot, tag, pinned
**✅ When to use:** 
**❌ When not to use:** 

## Do's

- No specific do guidance documented.


## Don'ts

- No specific don't guidance documented.


## Cautions

- No specific caution guidance documented.


## Best practices

### Best practice
- Use badges sparingly to avoid “visual noise” and overwhelming the user
- Use for new or unread items, e.g. messages or notifications
- Use for showing a count on relevant UI elements, e.g., the number of new comments
- The badge should be dynamic and updated in real time when possible
- Use the same appearance (colour) across the application for the same use case

### Supported components
- Avatar
- Button
- Button Group
- Link Button
- List
- Menu
- Segmented Control
- Tabs
- Tree Navigation

### Default badge
- The default badge can contain numbers (count) or letters (label).

#### Count badge
- By default, the badge displays numbers up to 99. If the number exceeds 99, a plus sign (+) is added at the end.
- Example: By default, the badge can display numbers up to 99. For numbers over 99, a plus is added at the end of 99.
- In code, you can set a max cap on the value. For example, if you set the max cap to 10, then all numbers over 10 will be displayed as 10+.
- Example: If the max is set to 10, then numbers above 10 will be displayed as 10+

#### Label badge
- The badge can also contain label text that can be used for use cases where you want to announce something more specific about the parent UI element. For example, to highlight that something is in “beta” or “new”.
- Example: The badge can also contain a label that can be used to draw attention to the parent UI element, e.g. a new feature.

### Dot badge
- The badge comes in a dot variant, which is used for more subtle notifications, e.g. an online/offline status or if “something is new” without an exact count.
- Example: The dot badge can be used to communicate online/offline status or that something new has happened without an exact count.

### Appearances
- The badge has 4 appearances - Error, Info, Success and Warning. Choose a colour for the badge that works well for the use case and draws the right amount of attention. Ensure that there is enough contrast between the parent UI element and the badge.
- Example: The badge comes in 4 appearances - Error (red), Info (blue), Success (green) and Warning (yellow).

### Fit
- The badge comes in 2 different fits (sizes): small and medium. Which fit to choose depends on the parent UI element.
- As a general rule, you should:
- Use the small badge on small UI parent elements.
- Use the medium badge on medium and large UI parent elements.
- Example: Use a small badge on small component fit and a medium badge on medium and large component fit.

### Pinned or inline
- The badge can be “pinned” on the parent UI element or placed “inline”, e.g. in a menu list item or a sidebar navigation item.
- Example: The badge can either be pinned on the parent UI element or placed inline.

### Positioning
- If the badge is “pinned”, then you have the option to position the badge on the top right corner or the bottom right corner of the parent UI element.
- Example: The badge can be placed top-right or bottom-right.
- If placed “inline” then you can position the badge to the right or left in the parent UI element.
- Example: Inline badges can be positioned right or left.

#### Distance
- If the badge is “pinned”, then you can use the “distance” option/property in Figma and Code to adjust the positioning between small, medium and large distances. Always make sure that the badge does not cover crucial information.
- Example: Use the distance option/property in Figma and in code to position the badge correctly.
- Here are a number of examples of what not to do.
- Example: The badge should never cover crucial information and should also not be placed too far from its parent UI component.

## Usage & code examples

```bash
// General Setup (JS, VUE, Angular) 
npm install @maersk-global/mds-components-core-badge
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-badge
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-badge';
// minimal example usage
<mc-badge></mc-badge>
// basic example usage
<mc-badge label="100" max="99" variant="default" fit="medium" appearance="error" positionInline="right" positionPinned="top" distance="medium"></mc-badge>
```

### Advanced Examples

#### WithButton

```html
<!-- dot badge -->
<mc-button label="You have notifications" icon="bell" hiddenlabel>
  <mc-badge slot="badge" position="top" display="pinned" variant="dot" distance="large"></mc-badge>
</mc-button>

<!-- number badge -->
<mc-button label="You have 9 notifications" icon="bell" hiddenlabel>
  <mc-badge slot="badge" position="top" display="pinned" label="9" distance="large"></mc-badge>
</mc-button>

<!-- text badge -->
<mc-button arialabel="You have new notifications">
  Notifications
  <mc-badge slot="badge" position="top" display="pinned" label="New" distance="large"></mc-badge>
</mc-button>

<!-- dot badge -->
<mc-button appearance="neutral" variant="plain" icon="bell" label="You have notifications" hiddenlabel>
  <mc-badge slot="badge" position="top" display="pinned" variant="dot" distance="small"></mc-badge>
</mc-button>

<!-- number badge -->
<mc-button appearance="neutral" variant="plain" label="You have 9 notifications" icon="bell" hiddenlabel>
  <mc-badge slot="badge" position="top" display="pinned" label="9" distance="small"></mc-badge>
</mc-button>

<!-- text badge -->
<mc-button appearance="neutral" variant="plain" arialabel="You have new notifications">
  Notifications
  <mc-badge slot="badge" position="top" display="pinned" label="New" distance="medium"></mc-badge>
</mc-button>
```

#### WithAvatar

```html
<mc-avatar initials="AB" hiddentooltip appearance="color-4" role="status" aria-label="You have a new message">
  <mc-badge display="pinned" slot="badge" variant="dot" distance="medium" position="bottom"></mc-badge>
</mc-avatar>
```

#### CustomisedAppearance

```html
<mc-button variant="plain" appearance="neutral" label="Notifications" icon="calendar" hiddenlabel>
  <mc-badge display="pinned" position="top" slot="badge" label="9" distance="medium"></mc-badge>
</mc-button>
```

#### InlineWithList

```html
<div class="mds-flex mds-gap-800 mds-flex-items-start">
  <mc-list style="width: 200px">
    <mc-list-item label="One"></mc-list-item>
    <mc-list-item>Two</mc-list-item>
    <mc-list-item label="Three"></mc-list-item>
    <mc-list-item>
      Four
      <mc-badge
        slot="badge"
        position="right"
        display="inline"
        label="4"
      ></mc-badge>
    </mc-list-item>
    <mc-list-item label="Five"></mc-list-item>
  </mc-list>

  <mc-list style="width: 200px">
    <mc-list-item sublabel="You have new messages">
      Inbox
      <mc-badge
        variant="default"
        slot="badge"
        position="right"
        display="inline"
        label="6"
      ></mc-badge>
    </mc-list-item>
  </mc-list>

  <mc-list style="width: 200px">
    <mc-list-item label="One"></mc-list-item>
    <mc-list-item>
      Two
      <mc-badge
        variant="dot"
        slot="badge"
        position="right"
        display="inline"
      ></mc-badge>
    </mc-list-item>
    <mc-list-item label="Three"></mc-list-item>
    <mc-list-item label="Four"></mc-list-item>
    <mc-list-item label="Five"></mc-list-item>
  </mc-list>
</div>
```

#### InlineWithTabBar

```html
<mc-tab-bar>
  <mc-tab slot="tab" label="Info" icon="info-circle"></mc-tab>
  <div slot="panel">Info page with lots of information about us.</div>
  <!-- tab 1: -->
  <mc-tab slot="tab" label="Work" icon="globe"
    ><mc-badge slot="badge" position="left" display="inline" label="8"></mc-badge
  ></mc-tab>
  <div slot="panel">Work page that showcases our work.</div>
</mc-tab-bar>
```

#### InlineWithMenu

```html
<mc-menu trigger="click">
  <mc-button
    slot="trigger"
    icon="bell"
    variant="plain"
    appearance="neutral"
    label="Notifications"
    hiddenlabel
  >
    <mc-badge
      slot="badge"
      position="top"
      variant="dot"
      distance="small"
    ></mc-badge>
  </mc-button>
  <mc-list style="display: block; width: 120px">
    <mc-list-item label="One"></mc-list-item>
    <mc-list-item label="Two"></mc-list-item>
    <mc-list-item>
      <mc-badge
        slot="badge"
        position="right"
        display="inline"
        label="3"
      ></mc-badge>Three
    </mc-list-item>
    <mc-list-item label="Four"></mc-list-item>
    <mc-list-item label="Five"></mc-list-item>
  </mc-list>
</mc-menu>
```

#### InlineWithTreeNavigation

```html
<div style="width: 300px">
<nav class="mds-tree-nav" role="navigation" aria-label="side navigation">
  <ul>
    <li>
      <details open>
        <summary>
          Item 1 (level 1) <mc-badge slot="badge" position="left" variant="dot" display="inline"></mc-badge>
        </summary>
        <ul>
          <li>
            <a href="#">Sub Item 3</a>
          </li>
          <li>
            <a href="#" class="mds-tree-nav__active" aria-current="page"
              >Sub Item 2 <mc-badge slot="badge" position="right" display="inline" label="3"></mc-badge
            ></a>
          </li>
          <li>
            <a href="#">Sub Item 3</a>
          </li>
        </ul>
      </details>
    </li>
    <li>
      <a href="#">Item 2</a>
    </li>
    <li class="mds-tree-nav--separator"></li>
    <li>
      <a href="#" class="mds-tree-nav__external"
        >External link
        <mc-badge slot="badge" appearance="info" position="left" display="inline" label="New"></mc-badge
      ></a>
    </li>
  </ul>
</nav>
</div>
```

#### InlineWithButtonGroup

```html
<mc-button-group>
  <mc-button-group-item value="Apple">
    Apple <mc-badge slot="badge" position="left" display="inline" label="4"></mc-badge
  ></mc-button-group-item>
  <mc-button-group-item value="Apricot"> Apricot </mc-button-group-item>
  <mc-button-group-item value="Artichoke"> Artichoke </mc-button-group-item>
</mc-button-group>
```

#### InlineWithSegmentedControl

```html
<mc-segmented-control>
  <mc-segmented-control-item value="Apple" selected>
    Apple <mc-badge slot="badge" position="right" display="inline" label="4"></mc-badge
  ></mc-segmented-control-item>
  <mc-segmented-control-item value="Apricot"> Apricot </mc-segmented-control-item>
  <mc-segmented-control-item value="Artichoke"> Artichoke </mc-segmented-control-item>
</mc-segmented-control>
```

## API

### Properties and attributes

#### label

- **Type:** number | string
- **Typescript Type:** number | string | undefined
- **Default:** 100
- **Description:** Label of the badge. It can be a string, i.e. "New" or a number, i.e. "8".

#### max

- **Type:** number
- **Typescript Type:** number | undefined
- **Default:** 99
- **Description:** If the label of the badge is a number, show a "+" if greater than max e.g. 1100 would be displayed as +99. Please note, by design, "max" has a hardcoded upper limit value of 99.

#### variant

- **Type:** default | dot
- **Typescript Type:** BadgeVariant | undefined
- **Default:** default
- **Description:** Defines how the badge is rendered: `default` displays a number or text label, and `dot` shows a small indicator without content.

#### fit

- **Type:** small | medium
- **Typescript Type:** BadgeFit | undefined
- **Default:** medium
- **Description:** Controls the badge size.

#### appearance

- **Type:** info | success | warning | error
- **Typescript Type:** BadgeAppearance | undefined
- **Default:** error
- **Description:** Controls the visual style of the component. If not set, the default appearance is <b>error</b>.

#### positionInline

- **Type:** string
- **Default:** right
- **Description:** Defines whether the inline badge appears to the left or right of its parent content. Only applicable when `display="inline"`.

#### positionPinned

- **Type:** string
- **Default:** top
- **Description:** Defines whether a pinned badge appears at the top or bottom of its parent element. Only applicable when `display="pinned"`.

#### distance

- **Type:** small | medium | large
- **Typescript Type:** BadgeDistance | undefined
- **Default:** medium
- **Description:** The distance of the badge relative to the parent element used only for pinned badge.

### Types

- BadgeAppearance: type
- BadgeDisplay: type
- BadgeDistance: type
- BadgeFit: type
- BadgePosition: type
- BadgeVariant: type
- IMcBadge: interface

## Related

- [Avatar](https://designsystem.maersk.com/components/avatar/)
- [Button](https://designsystem.maersk.com/components/button/)
- [Button Group](https://designsystem.maersk.com/components/button-group/)
- [Link Button](https://designsystem.maersk.com/components/link-button/)
- [List](https://designsystem.maersk.com/components/list/)
- [Menu](https://designsystem.maersk.com/components/menu/)
- [Segmented Control](https://designsystem.maersk.com/components/segmented-control/)
- [Tabs](https://designsystem.maersk.com/components/tabs/)
- [Tree Navigation](https://designsystem.maersk.com/components/tree-navigation/)

