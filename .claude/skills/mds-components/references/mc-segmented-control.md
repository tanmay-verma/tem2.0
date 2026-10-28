# mc-segmented-control

Groups multiple selectable options for displaying different views of the same content.

**Url:** https://designsystem.maersk.com/components/segmented-control/
**Alternative names:** Segmented Button Group, Tabbed Navigation
**Keywords:** component, toolbar, action, select, choice, multiple, single, toggle, button group, split, filter, switcher
**✅ When to use:** When you need to present multiple related options in a compact space.
**❌ When not to use:** For unrelated options or when space is not a concern.

## Do's

- Use full width Segmented Control for small viewports
- Segmented Control placed near the related content area.

## Don'ts

- Segmented Control placed far from the related content area.

## Cautions

- Avoid non-full width Segmented Controls in small viewports

## Best practices

#### Do:
- Use the Segmented Control to select and segment the content displayed.
- Use the Segmented Control for switching between binary views e.g. showing a bar or a line chart.
- Show the outcome immediately after selection e.g. changing from card view to list view.
- Limit segments to 4-5 options. Limiting ensures all segments are clearly visible across different screen sizes.
- Keep labels short and with clear meaning.

#### Do not:
- Do not use the Segmented Control to navigate content within the same page context. Use the Tabs component instead.
- Do not use the Segmented Control for binary actions e.g. switching a feature on and off. The Switch component is ideal for this.
- Do not use the Segmented Control to collect user input in forms. Please check the Selection components guideline.

### Usage
- Segmented Controls are ideal for changing the view on content within a single context e.g. changing grid view to list view.
- The Segmented Control is helpful in creating layouts with a cleaner interface and information hierarchy and can work well in combination with the  Tabs component.
- Use the Segmented Control to narrow down what is visible in order to make content more digestible.
- Do not use the Segmented Control or actions or to navigate to different pages. In this instance, consider using the Button, and Button Group  for actions or Tabs if you need users to navigate to different content.

#### Filter available content
- The Segmented Control is ideal for switching what content is visible in a list or a table. It can act as a quick filter to help users digest the available content faster.
- Example: An example of using the Segmented Control to provide a quick content filter.

#### Control view modes
- The Segmented Control can be used to enable users to look at the same content in different presentation modes. It is a useful way of tailoring information for different types of users and mental models.
- Example: An example of using the Segmented Control to switch between different chart types.

#### Small viewport
- When using the Segmented Control to segment content in small viewports like mobile devices or sidebars, use full width for the best alignment with the related content and surrounding UI elements.

#### Placement
- Always place a Segmented Control in close proximity to the content area that will be impacted by it. This creates a clear hierarchy.

## Usage & code examples

```bash
// General Setup (JS, VUE, Angular) 
npm install @maersk-global/mds-components-core-segmented-control
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-segmented-control
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-segmented-control';
// minimal example usage
<mc-segmented-control></mc-segmented-control>
// basic example usage
<mc-segmented-control fit="medium" width="auto"></mc-segmented-control>
```

### Advanced Examples

#### LabelAsSlot

```html
<mc-segmented-control type="single">
  <mc-segmented-control-item selected value="Day">
    Day
  </mc-segmented-control-item>
  <mc-segmented-control-item value="Week">
    Week
  </mc-segmented-control-item>
  <mc-segmented-control-item value="Month">
    Month
  </mc-segmented-control-item>
</mc-segmented-control>
```

#### WithIcon

```html
<mc-segmented-control type="single">
  <mc-segmented-control-item selected value="Computer" label="Computer" icon="computer"></mc-segmented-control-item>
  <mc-segmented-control-item value="Printer" label="Printer" icon="printer"></mc-segmented-control-item>
  <mc-segmented-control-item value="File" label="File" icon="file"></mc-segmented-control-item>
  <mc-segmented-control-item value="Folder" label="Folder" icon="folder-open"></mc-segmented-control-item>
  <mc-segmented-control-item value="Office" label="Office" icon="office-2"></mc-segmented-control-item>
</mc-segmented-control>
```

#### WithGraphics

```html
<mc-segmented-control type="single">
  <mc-segmented-control-item selected value="RedHeart" label="Red Heart"><span slot="icon">❤️</span></mc-segmented-control-item>
  <mc-segmented-control-item value="Sparkles" label="Sparkles"><span slot="icon">✨</span></mc-segmented-control-item>
  <mc-segmented-control-item value="PartyPopper" label="Party Popper"><span slot="icon">🎉</span></mc-segmented-control-item>
  <mc-segmented-control-item value="SmilingFaceWithHearts" label="Smiling Face with Hearts"><span slot="icon">🥰</span></mc-segmented-control-item>
  <mc-segmented-control-item value="Fire" label="Fire"><span slot="icon">🔥</span></mc-segmented-control-item>
</mc-segmented-control>
```

#### WithIconOnTheRight

```html
<mc-segmented-control type="single">
  <mc-segmented-control-item selected value="computer" trailingicon="computer" label="Computer"></mc-segmented-control-item>
  <mc-segmented-control-item value="printer" trailingicon="printer" label="Printer"></mc-segmented-control-item>
  <mc-segmented-control-item value="file" trailingicon="file" label="File"></mc-segmented-control-item>
  <mc-segmented-control-item value="folder" trailingicon="folder-open" label="Folder"></mc-segmented-control-item>
  <mc-segmented-control-item value="office" trailingicon="office-2" label="Office"></mc-segmented-control-item>
</mc-segmented-control>
```

#### WithDisabledItem

```html
<mc-segmented-control type="single">
  <mc-segmented-control-item selected value="Zero" label="Zero"></mc-segmented-control-item>
  <mc-segmented-control-item value="One" disabled label="One"></mc-segmented-control-item>
  <mc-segmented-control-item value="Two" label="Two"></mc-segmented-control-item>
  <mc-segmented-control-item value="Three" label="Three"></mc-segmented-control-item>
  <mc-segmented-control-item value="Four" label="Four"></mc-segmented-control-item>
  <mc-segmented-control-item value="Five" label="Five"></mc-segmented-control-item>
</mc-segmented-control>
```

#### CustomisedAppearance

```html
<mc-segmented-control type="single">
    <mc-segmented-control-item selected hiddenlabel value="Bicycle" label="Bicycle" icon="bicycle"></mc-segmented-control-item>
    <mc-segmented-control-item hiddenlabel value="Car" label="Car" icon="car-side"></mc-segmented-control-item>
    <mc-segmented-control-item hiddenlabel value="Vessel" label="Vessel" icon="vessel-side"></mc-segmented-control-item>
    <mc-segmented-control-item hiddenlabel value="Airplane" label="Airplane" icon="airplane"></mc-segmented-control-item>
</mc-segmented-control>
```

#### GetClickedItem

```html
<mc-segmented-control type="single">
    <mc-segmented-control-item selected value="Apple">
      Apple
    </mc-segmented-control-item>
    <mc-segmented-control-item value="Apricot">
      Apricot
    </mc-segmented-control-item>
    <mc-segmented-control-item value="Artichoke">
      Artichoke
    </mc-segmented-control-item>
  </mc-segmented-control>
<p id="selected-item-onlistchange"></p>
```

#### WithTags

```html
<mc-segmented-control selectiontype="single">
  <mc-segmented-control-item selected value="New">Hub <mc-tag label="New" appearance="info"></mc-tag></mc-segmented-control-item>
  <mc-segmented-control-item value="Export" label="Shipment overview - Export"></mc-segmented-control-item>
  <mc-segmented-control-item value="Import" label="Shipment overview - Import"></mc-segmented-control-item>
  <mc-segmented-control-item value="MaerskFlow">Maersk Flow <mc-tag label="New" appearance="info"></mc-tag></mc-segmented-control-item>
</mc-segmented-control>
```

#### WithRouterLink

```html
import "@maersk-global/mds-components-core-segmented-control";
import "@maersk-global/mds-components-core-segmented-control-item";

<mc-segmented-control type="none">
  <mc-segmented-control-item selected trailingicon="computer">
    <router-link to="/computer">Computer</router-link>
  </mc-segmented-control-item>
  <mc-segmented-control-item icon="printer">
    <router-link to="/printer">Printer</router-link>  
  </mc-segmented-control-item>
  <mc-segmented-control-item>
    <router-link to="/file">File</router-link>  
  </mc-segmented-control-item>
</mc-segmented-control>
```

#### WithTooltip

```html
<mc-segmented-control>
  <mc-tooltip position="bottom-center">
    <mc-segmented-control-item selected slot="trigger" icon="plus" value="new">New</mc-segmented-control-item>
    <span>Create new item</span>
  </mc-tooltip>
  <mc-tooltip position="bottom-center">
    <mc-segmented-control-item slot="trigger" icon="pencil" value="edit">Edit</mc-segmented-control-item>
    <span>Edit existing item</span>
  </mc-tooltip>
  <mc-segmented-control-item icon="trash" value="delete">Delete</mc-segmented-control-item>
  <mc-segmented-control-item icon="box" value="archive">Archive</mc-segmented-control-item>
</mc-segmented-control>
```

## API

### Properties and attributes

#### fit

- **Type:** small | medium | large
- **Typescript Type:** Fit
- **Default:** medium
- **Description:** Controls the overall size of the component.

#### data

- **Type:** array
- **Description:** The data to be displayed in list. It is an array of objects `<IMcListDataItem>` that contains `{ label: string; value: string | number; disabled?: boolean }`

#### labels

- **Type:** IMcListLabels
- **Description:** Custom labels for mc-list component. By default labels are loaded in EN language. Check <a href="https://github.com/Maersk-Global/mds/blob/main/packages/mc-list/src/lib/translations.ts" target="_blank" rel="noopener noreferrer">types documentation</a> to see how to use custom labels property.

#### width

- **Type:** auto | full-width
- **Default:** auto
- **Description:** Auto width style depends on the text length, full-width style will adjust to the parent container width

### Events

#### listchange

- **Type:** CustomEvent<IMcListChangeDetail>
- **Description:** Emitted when a segmented control item is interacted.

#### listitemsloaded

- **Type:** CustomEvent<IMcListItemsLoadedDetail>
- **Description:** Emitted when the segmented control items are loaded.

#### focuschange

- **Type:** CustomEvent<IMcListFocusChangeDetail>
- **Description:** Emitted when a segmented control item receives focus.

#### scroll

- **Type:** Event
- **Description:** Dispatched when the segmented control group is scrolled.


### Slots

#### Default slot

- **Description:** Use the default slot, when you want to pass segmented control items to the segmented control. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-segmented-control>
  <mc-segmented-control-item></mc-segmented-control-item>
</mc-segmented-control>
```

## CSS parts

#### list

- **Description:** Using this CSS part you can change the look of the list wrapper inside the mc-segmented-control component. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-segmented-control::part(list) {
  max-width: 44px;
}
```

## Related

- [Button](https://designsystem.maersk.com/components/button/)
- [Button Group](https://designsystem.maersk.com/components/button-group/)
- [Selection components](https://designsystem.maersk.com/guidelines/selection-components/)
- [Switch](https://designsystem.maersk.com/components/switch/)
- [Tabs](https://designsystem.maersk.com/components/tabs/)

