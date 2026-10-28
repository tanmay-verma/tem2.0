# mc-toolbar

A container that provides a way to arrange a set of related controls horizontally.

**Url:** https://designsystem.maersk.com/components/toolbar/
**Alternative names:** Toolbar, Action Bar, Navigation Bar
**Keywords:** component, content, layout, container, action, table
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
- Keep the toolbar concise and context relevant.
- Group related items logically together and separate with dividers, if placed close together.
- Make sure that the purpose of each item/action in the toolbar is easy to understand.
- Use clear and consistent iconography.
- Limit the number of items to prevent clutter.

### Usage
- Use the toolbar to provide the user with easy access to frequently used actions that support main tasks in the application. A toolbar can be used in many different contexts, and the examples on this page are not exhaustive.

#### Table bulk actions
- A very common UI pattern is to use the toolbar to provide the user with a way to perform the same task for multiple rows in a table, e.g. delete, move, export, etc. Such a toolbar is called a bulk action toolbar. Read more about the Bulk Action Toolbar that is a part of the MDS table.
- Example: The Bulk Action Toolbar with the actions Archive and Delete and an overflow menu with secondary actions.

##### Inverse appearance
- The Bulk Actions Toolbar is using the inverse appearance to draw the needed attention to the component. It signals clearly to the user that specific actions can be performed to the selected row(s).
- We don’t recommend using the inverse appearance for other toolbar use cases. In other words, the inverse appearance is reserved for the Bulk Ations Toolbar.

#### Search
- The toolbar can be used for arranging the different filter and sorting options you need in order to manage a list of data, e.g. search results, task lists, etc.
- Example: Using the toolbar for search and filter options.

#### Text editor
- The toolbar can be used as a part of a text editor to provide quick access to commands and formatting options e.g. font size and weights, text alignment etc.
- Example: Using the toolbar for text editing.

### Grouping
- You can place items at the start, center and end of the toolbar using the slot option. This is particularly useful if you want to group the toolbar items to support different use cases.
- Example: Toolbar with items in the start, center and end slot.
- Example: Toolbar with items in the start, center and end slot.

#### Dividers
- In addition to grouping items using the start, center and end slots, you can also visually separate the groups by adding a divider in between. Adding a divider between the groups helps the user understand the relationship between the different items if they are placed close together.
- Example: Toolbar with dividers between the groups of items.

## Usage & code examples

```bash
// General Setup (JS, VUE, Angular) 
npm install @maersk-global/mds-components-core-toolbar
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-toolbar
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-toolbar';
// minimal example usage
<mc-toolbar></mc-toolbar>
// basic example usage
<mc-toolbar appearance="default" fit="medium"></mc-toolbar>
```

### Advanced Examples

#### WithDivider

```html
<mc-toolbar>
  <div slot="start">
    <mc-button-group variant="borderless" selectiontype="single">
      <mc-button-group-item
        appearance="neutral"
        variant="plain"
        icon="bars-horizontal"
        label="Align Justify"
        value="align-justify"
        hiddenlabel
      ></mc-button-group-item>
      <mc-button-group-item
        appearance="neutral"
        variant="plain"
        icon="bars-horizontal-funnel-left"
        label="Align Left"
        value="align-left"
        hiddenlabel
      ></mc-button-group-item>
      <mc-button-group-item
        appearance="neutral"
        variant="plain"
        icon="bars-horizontal-funnel-down"
        label="Align Center"
        value="align-center"
        hiddenlabel
      ></mc-button-group-item>
    </mc-button-group>
    <hr class="vertical" />
    <mc-button
      appearance="neutral"
      variant="plain"
      icon="bars-horizontal-bullets"
      label="list"
      hiddenlabel
    ></mc-button>
    <hr class="vertical" />
  </div>
  <div slot="center">
    <mc-button-group variant="borderless" selectiontype="single">
      <mc-button-group-item
        appearance="neutral"
        variant="plain"
        icon="chart-line-up"
        label="Chart Line"
        value="chart-line"
        hiddenlabel
      ></mc-button-group-item>
      <mc-button-group-item
        appearance="neutral"
        variant="plain"
        icon="chart-bars-vertical"
        label="Chart Bars"
        value="chart-bars"
        hiddenlabel
      ></mc-button-group-item>
      <mc-button-group-item
        appearance="neutral"
        variant="plain"
        icon="chart-pie"
        label="Chart Pie"
        value="chart-pie"
        hiddenlabel
      ></mc-button-group-item>
      <mc-button-group-item
        appearance="neutral"
        variant="plain"
        icon="chart-donut"
        label="Chart Donut"
        value="chart-donut"
        hiddenlabel
      ></mc-button-group-item>
    </mc-button-group>
    <hr class="vertical" />
    <span>Edited 2 hours ago</span>
  </div>
  <div slot="end">
    <mc-button label="Share"></mc-button>
  </div>
</mc-toolbar>
```

## API

### Properties and attributes

#### appearance

- **Type:** default | inverse
- **Typescript Type:** McToolbarAppearance
- **Default:** default
- **Description:** Visual appearance of the toolbar. Use `inverse` for a dark/inverse background, suitable for bulk action bars or high-contrast contexts. Set button appearance to `inverse` for this variant.

#### fit

- **Type:** small | medium | large
- **Typescript Type:** McToolbarFit
- **Default:** medium
- **Description:** Controls the size of the toolbar and its content.

### Types

- IMcToolbar: interface
- McToolbarAppearance: type
- McToolbarFit: type

### Slots

#### start

- **Description:** Use the start named slot, when you want to place components at the beginning of the toolbar.. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-toolbar>
  <span slot="start">
    <mc-button>Save</mc-button><mc-button appearance="neutral">Cancel</mc-button>
  </span>
</mc-toolbar>
```

#### center

- **Description:** Use the center named slot, when you want to place components at the middle of the toolbar.. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-toolbar>
  <span slot="center">
    <mc-input label="Search" icon="magnifying-glass" placeholder="Type to search..." hiddenlabel></mc-input>
  </span>
</mc-toolbar>
```

#### end

- **Description:** Use the end named slot, when you want to place components at the end of the toolbar.. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-toolbar>
  <span slot="end">
    <mc-button appearance="neutral" variant="plain" label="Settings" hiddenlabel icon="cog"></mc-button><mc-avatar info="User Avatar" initials="JD" appearance="color-2"></mc-avatar>
  </span>
</mc-toolbar>
```

## CSS parts

#### toolbar

- **Description:** Using this CSS part you can change the look of the The toolbar container. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-toolbar::part(toolbar) {
  background-color: #00897A;
  color: #AAEAE0;
}
```

## Related

- [Table](https://designsystem.maersk.com/components/table/)

