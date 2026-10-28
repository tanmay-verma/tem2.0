# mc-button-group

Combines individual buttons that have a logical relationship into a cohesive group of actions.

**Url:** https://designsystem.maersk.com/components/button-group/
**Alternative names:** Button Set, Action Group, Toggle Group
**Keywords:** component, toolbar, action, select, choice, multiple, single, toggle, segmented, split, filter, switcher
**✅ When to use:** Related actions, Toggle options, Navigation between views
**❌ When not to use:** Single actions, Non-related buttons

## Do's

- No specific do guidance documented.


## Don'ts

- No specific don't guidance documented.


## Cautions

- No specific caution guidance documented.


## Best practices

### Best practice
- Use button groups to group meaningfully related actions, such as edit, archive, and delete.
- Limit button groups to 4 or 5 items and keep labels short so all buttons remain visible across screen sizes.
- Do not use button groups for navigation between pages or major views. Use Tree Navigation or Tabs components.
- Keep content type consistent within a group, e.g. all icon-only or all label-only.
- Use the “bordered” variant for dense toolbars, table actions and other core workflows.
- Use the “borderless” variant when you want a lightweight control where only the active/selected option shows a container.
- Use the “rounded” variant only when the group represents filters or toggles, e.g. turning search filters on and off.
- Keep all buttons in a button group the same variant and fit.
- Button groups configured as single or multi-select may be used in simple forms and filters, for example, as an alternative to a radio group or a checkbox group. See the selection components guideline.

### Variants
- Button group supports three variants: “bordered”, “borderless”, and “rounded”.

#### Bordered
- The bordered button group has a visible container. Useful for toolbars with immediate actions and compact controls where higher affordance is important.
- Example: Bordered button group for utility controls.

#### Borderless
- The borderless button group has no visible border.
- Useful for lightweight, subtle mode switches or view toggles where the surrounding UI already provides strong structure. Use when you want minimal visual noise but still provide utility controls to the user.
- Example: Borderless button group used to select transport mode.

#### Rounded
- The rounded button group is intended for filter and toggle contexts. Useful for quick filters in dashboards, lists and tables where users toggle multiple criteria on/off. Avoid using it for primary call to actions and form footers.
- Example: Rounded button group used as a filter for documents.

#### Horizontal button group
- The horizontal orientation works well with all the available variants and is the default orientation for the button group component. Use the horizontal button group in proximity to the items that are typically impacted by the actions and selection options in it.
- Example: Button group in horizontal orientation as toolbar controls above a data table.

#### Vertical
- The vertical orientation is ideal for cases when you need a compact cluster of actions overlaid on content, such as map controls. It does support labels, but the recommended use is as an icon-only button group.
- Example: Example demonstrating a vertical button group to control the zoom of a map.

### Usage
- The button group is useful in dense interface applications where users need to perform multiple related actions. Grouping actions and controls helps users scan and understand the available options faster, while keeping the UI organised. Below, you can find a few examples of potential applications of the button group component:

#### Filter experiences
- The rounded button group variant can be used for simple filters or toggles. Use both single and multi-select options with concise labels to create a more prominent filtering experience.
- Example: A rounded button group acting as filters in a document interface.

#### Lightweight utility controls
- Use the borderless variant when you want the group to read as lightweight controls, with emphasis only on the active selection.
- Example: Using the button group as utility buttons to support actions in data tables and toolbars.

#### Getting user feedback
- The button group supports single and multiple selection types. This kind of usage should not replace the standard form controls, such as radio buttons and checkboxes, and it should only be used sparingly for simple forms and flows to collect user input.
- Example: Example of a button group with single select mode in a user feedback modal.

## Usage & code examples

```bash
// General Setup (JS, VUE, Angular) 
npm install @maersk-global/mds-components-core-button-group
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-button-group
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-button-group';
// minimal example usage
<mc-button-group></mc-button-group>
// basic example usage
<mc-button-group fit="medium" orientation="horizontal" selectiontype="none" variant="bordered" selectedappearance="primary" value="new" width="auto"></mc-button-group>
```

### Advanced Examples

#### LabelAsSlot

```html
<mc-button-group selectiontype="single">
  <mc-button-group-item value="Apple">
    Apple
  </mc-button-group-item>
  <mc-button-group-item value="Apricot">
    Apricot
  </mc-button-group-item>
  <mc-button-group-item value="Artichoke">
    Artichoke
  </mc-button-group-item>
</mc-button-group>
```

#### WithIcon

```html
<mc-button-group selectiontype="multiple">
  <mc-button-group-item value="Computer" label="Computer" icon="computer"></mc-button-group-item>
  <mc-button-group-item value="Printer" label="Printer" icon="printer"></mc-button-group-item>
  <mc-button-group-item value="File" label="File" icon="file"></mc-button-group-item>
  <mc-button-group-item value="Folder" label="Folder" icon="folder-open"></mc-button-group-item>
  <mc-button-group-item value="Office" label="Office" icon="office-2"></mc-button-group-item>
</mc-button-group>
```

#### WithGraphics

```html
<mc-button-group selectiontype="single">
  <mc-button-group-item value="RedHeart" label="Red Heart"><span slot="icon">❤️</span></mc-button-group-item>
  <mc-button-group-item value="Sparkles" label="Sparkles"><span slot="icon">✨</span></mc-button-group-item>
  <mc-button-group-item value="PartyPopper" label="Party Popper"><span slot="icon">🎉</span></mc-button-group-item>
  <mc-button-group-item value="SmilingFaceWithHearts" label="Smiling Face with Hearts"><span slot="icon">🥰</span></mc-button-group-item>
  <mc-button-group-item value="Fire" label="Fire"><span slot="icon">🔥</span></mc-button-group-item>
  <mc-button-group-item value="SmillingFaceWithSmilingEyes" label="Smiling Face with Smiling Eyes"><span slot="icon">😊</span></mc-button-group-item>
  <mc-button-group-item value="PleadingFace" label="Pleading Face"><span slot="icon">🥺</span></mc-button-group-item>
  <mc-button-group-item value="FaceWithTears" label="Face with Tears of Joy"><span slot="icon">😂</span></mc-button-group-item>
</mc-button-group>
```

#### WithIconOnTheRight

```html
<mc-button-group selectiontype="single">
  <mc-button-group-item value="computer" trailingicon="computer" label="Computer"></mc-button-group-item>
  <mc-button-group-item value="printer" trailingicon="printer" label="Printer"></mc-button-group-item>
  <mc-button-group-item value="file" trailingicon="file" label="File"></mc-button-group-item>
  <mc-button-group-item value="folder" trailingicon="folder-open" label="Folder"></mc-button-group-item>
  <mc-button-group-item value="office" trailingicon="office-2" label="Office"></mc-button-group-item>
</mc-button-group>
```

#### WithAnchorLinks

```html
<mc-button-group>
  <mc-button-group-item href="https://designsystem.maersk.com" label="Maersk Design System"></mc-button-group-item>
  <mc-button-group-item href="https://maersk.com" label="Maersk"></mc-button-group-item>
  <mc-button-group-item href="https://www.apmterminals.com/" label="APM Terminals"></mc-button-group-item>
</mc-button-group>
```

#### WithDisabledItem

```html
<mc-button-group selectiontype="single">
  <mc-button-group-item value="Zero" label="Zero"></mc-button-group-item>
  <mc-button-group-item value="One" disabled label="One"></mc-button-group-item>
  <mc-button-group-item value="Two" label="Two"></mc-button-group-item>
  <mc-button-group-item value="Three" label="Three"></mc-button-group-item>
  <mc-button-group-item value="Four" label="Four"></mc-button-group-item>
  <mc-button-group-item value="Five" label="Five"></mc-button-group-item>
</mc-button-group>
```

#### CustomisedAppearance

```html
<mc-button-group selectiontype="single">
  <mc-button-group-item hiddenlabel value="Apples" label="Apples" icon="apple"></mc-button-group-item>
  <mc-button-group-item hiddenlabel value="Bananas" label="Bananas" icon="banana"></mc-button-group-item>
  <mc-button-group-item hiddenlabel value="Carrots" label="Carrots" icon="carrot"></mc-button-group-item>
  <mc-button-group-item hiddenlabel value="Lemons" label="Lemons" icon="lemon"></mc-button-group-item>
</mc-button-group>
```

#### VerticalIconOnly

```html
<mc-button-group selectiontype="single" orientation="vertical">
  <mc-button-group-item hiddenlabel value="Apples" label="Apples" icon="apple"></mc-button-group-item>
  <mc-button-group-item hiddenlabel value="Bananas" label="Bananas" icon="banana"></mc-button-group-item>
  <mc-button-group-item hiddenlabel value="Carrots" label="Carrots" icon="carrot"></mc-button-group-item>
  <mc-button-group-item hiddenlabel value="Lemons" label="Lemons" icon="lemon"></mc-button-group-item>
</mc-button-group>
```

#### GetSelectedItem

```html
<div class="story">
  <mc-button-group onlistchange="getSelectedOnListChange" selectiontype="single">
    <mc-button-group-item value="Apple">
      Apple
    </mc-button-group-item>
    <mc-button-group-item value="Apricot">
      Apricot
    </mc-button-group-item>
    <mc-button-group-item value="Artichoke">
      Artichoke
    </mc-button-group-item>
  </mc-button-group>
</div>
<p id="selected-item-onlistchange"></p>
```

#### WithTags

```html
<mc-button-group selectiontype="single">
  <mc-button-group-item value="New">Hub <mc-tag label="New" appearance="info"></mc-tag></mc-button-group-item>
  <mc-button-group-item value="Export" label="Shipment overview - Export"></mc-button-group-item>
  <mc-button-group-item value="Import" label="Shipment overview - Import"></mc-button-group-item>
  <mc-button-group-item value="Inbound" label="All inbound"></mc-button-group-item>
  <mc-button-group-item value="MyFinance" label="MyFinance"></mc-button-group-item>
  <mc-button-group-item value="MaerskFlow">Maersk Flow <mc-tag label="New" appearance="info"></mc-tag></mc-button-group-item>
</mc-button-group>
```

#### WithRouterLink

```html
// Javascript
import "@maersk-global/mds-components-core-button-group";
import "@maersk-global/mds-components-core-button-group-item";

<mc-button-group>
  <mc-button-group-item value="Computer" trailingicon="computer">
    <router-link to="/computer">Computer</router-link>
  </mc-button-group-item>
  <mc-button-group-item value="Printer" icon="printer">
    <router-link to="/printer">Printer</router-link>  
  </mc-button-group-item>
  <mc-button-group-item value="File">
    <router-link to="/file">File</router-link>  
  </mc-button-group-item>
</mc-button-group>
```

#### WithTooltip

```html
<mc-button-group selectiontype="single">
  <mc-tooltip>
    <mc-button-group-item slot="trigger" icon="plus" value="new">New</mc-button-group-item>
    <span>Create new item</span>
  </mc-tooltip>
  <mc-tooltip>
    <mc-button-group-item slot="trigger" icon="pencil" value="edit">Edit</mc-button-group-item>
    <span>Edit existing item</span>
  </mc-tooltip>
  <mc-button-group-item icon="trash" value="delete">Delete</mc-button-group-item>
  <mc-button-group-item selected icon="box" value="archive">Archive</mc-button-group-item>
</mc-button-group>
```

## API

### Properties and attributes

#### fit

- **Type:** small | medium | large
- **Typescript Type:** Fit
- **Default:** medium
- **Description:** Controls the overall size of the component.

#### orientation

- **Type:** vertical | horizontal
- **Default:** horizontal
- **Description:** Determines whether elements are arranged horizontally or vertically.

#### data

- **Type:** array
- **Description:** The data to be displayed in list. It is an array of objects `<IMcListDataItem>` that contains `{ label: string; value: string | number; disabled?: boolean }`

#### labels

- **Type:** IMcListLabels
- **Description:** Custom labels for mc-list component. By default labels are loaded in EN language. Check <a href="https://github.com/Maersk-Global/mds/blob/main/packages/mc-list/src/lib/translations.ts" target="_blank" rel="noopener noreferrer">types documentation</a> to see how to use custom labels property.

#### selectiontype

- **Type:** none | single | multiple | typeahead
- **Typescript Type:** ListTypes
- **Default:** none
- **Description:** The selection type of the button group.

#### variant

- **Type:** bordered | borderless | rounded
- **Typescript Type:** IMcButtonGroupVariant
- **Default:** bordered
- **Description:** The variant of the button group and all button group items in that group. The rounded variant sets the rounded property on all mc-buttons.

#### selectedappearance

- **Type:** primary | neutral
- **Typescript Type:** 'primary' | 'neutral'
- **Default:** primary
- **Description:** The appearance of selected buttons in the button group. Primary uses the primary filled appearance, neutral uses the neutral filled appearance.

#### value

- **Type:** string | array | array of objects
- **Typescript Type:** string
- **Default:** new
- **Description:** The initial value of the button group. It can be passed as a string (i.e. "2"), comma-separated string (i.e. "1,2") or as an array (i.e. ["1", "2"])

#### width

- **Type:** auto | full-width
- **Default:** auto
- **Description:** Auto width style depends on the text length, full-width style will adjust to the parent container width

### Events

#### listchange

- **Type:** CustomEvent<IMcListChangeDetail>
- **Description:** Emitted when a button group item is interacted.

#### listitemsloaded

- **Type:** CustomEvent<IMcListItemsLoadedDetail>
- **Description:** Emitted when the button group items are loaded.

#### focuschange

- **Type:** CustomEvent<IMcListFocusChangeDetail>
- **Description:** Emitted when a button group item receives focus.

#### scroll

- **Type:** Event
- **Description:** Dispatched when the button group is scrolled.

### Types

- IMcButtonGroup: interface
- IMcButtonGroupVariant: type
- McButtonGroupSelectedAppearance: type

### Slots

#### Default slot

- **Description:** Use the default slot, when you want to pass button group items to the button group. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-button-group>
  <mc-button-group-item></mc-button-group-item>
</mc-button-group>
```

## CSS parts

#### list

- **Description:** Using this CSS part you can change the look of the list wrapper inside the mc-button-group component. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-button-group::part(list) {
  max-width: 44px;
}
```

## Related

- [Button](https://designsystem.maersk.com/components/button/)
- [Checkbox](https://designsystem.maersk.com/components/checkbox/)
- [Radio](https://designsystem.maersk.com/components/radio/)
- [Segmented Control](https://designsystem.maersk.com/components/segmented-control/)
- [Selection components](https://designsystem.maersk.com/guidelines/selection-components/)
- [Tabs](https://designsystem.maersk.com/components/tabs/)
- [Tree Navigation](https://designsystem.maersk.com/components/tree-navigation/)

