# mc-list

Presents a list of selectable items to the user.

**Url:** https://designsystem.maersk.com/components/list/
**Alternative names:** Option List, Selection List, Menu List, Navigation Menu
**Keywords:** component, select, choice, option, multiple, single
**✅ When to use:** When you need to present a list of choices to the user or allow to display navigation menus
**❌ When not to use:** When you have a single option or a different selection method.

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
npm install @maersk-global/mds-components-core-list
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-list
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-list';
// minimal example usage
<mc-list arialabel="Label"></mc-list>
// basic example usage
<mc-list fit="medium" orientation="vertical" arialabel="Label" filtertype="contains"></mc-list>
```

### Advanced Examples

#### WithSubLabel

```html
<mc-list>
  <mc-list-item label="Apple" sublabel="Fruit"></mc-list-item>
  <mc-list-item label="Apricot" sublabel="Fruit"></mc-list-item>
  <mc-list-item label="Artichoke" sublabel="Vegetable"></mc-list-item>
</mc-list>
```

#### LabelSublabelAsSlot

```html
<mc-list>
  <mc-list-item>
    Apple
    <span slot="sublabel">Fruit</span>
  </mc-list-item>
  <mc-list-item>
    Apricot
    <span slot="sublabel">Fruit</span>
  </mc-list-item>
  <mc-list-item>
    Artichoke
    <span slot="sublabel">Vegetable</span>
  </mc-list-item>
</mc-list>
```

#### WithIcon

```html
<mc-list>
  <mc-list-item label="Computer" icon="computer"></mc-list-item>
  <mc-list-item label="Printer" icon="printer"></mc-list-item>
  <mc-list-item label="File" icon="file"></mc-list-item>
  <mc-list-item label="Folder" icon="folder-open"></mc-list-item>
  <mc-list-item label="Office" icon="office-2"></mc-list-item>
</mc-list>
```

#### WithGraphics

```html
<mc-list>
  <mc-list-item label="Red Heart"><span slot="icon">❤️</span></mc-list-item>
  <mc-list-item label="Sparkles"><span slot="icon">✨</span></mc-list-item>
  <mc-list-item label="Party Popper"><span slot="icon">🎉</span></mc-list-item>
  <mc-list-item label="Smiling Face with Hearts"><span slot="icon">🥰</span></mc-list-item>
  <mc-list-item label="Fire"><span slot="icon">🔥</span></mc-list-item>
  <mc-list-item label="Smiling Face with Smiling Eyes"><span slot="icon">😊</span></mc-list-item>
  <mc-list-item label="Pleading Face"><span slot="icon">🥺</span></mc-list-item>
  <mc-list-item label="Face with Tears of Joy"><span slot="icon">😂</span></mc-list-item>
</mc-list>
```

#### WithIconOnRight

```html
<mc-list>
  <mc-list-item trailingicon="computer" label="Computer"></mc-list-item>
  <mc-list-item trailingicon="printer" label="Printer"></mc-list-item>
  <mc-list-item trailingicon="file" label="File"></mc-list-item>
  <mc-list-item trailingicon="folder-open" label="Folder"></mc-list-item>
  <mc-list-item trailingicon="office-2" label="Office"></mc-list-item>
</mc-list>
```

#### AsAListOfAnchorLinks

```html
<mc-list>
  <mc-list-item href="https://designsystem.maersk.com" label="Maersk Design System" target="_blank"></mc-list-item>
  <mc-list-item href="https://maersk.com" label="Maersk"></mc-list-item>
  <mc-list-item href="https://www.apmterminals.com/" label="APM Terminals"></mc-list-item>
</mc-list>
```

#### WithRouterLinks

```html
<mc-list>
  <mc-list-item label="List Item"></mc-list-item>
  <mc-list-item><a href="#page1">Page 1</a></mc-list-item>
  <mc-list-item trailingicon="file"><a href="#page2">Page 2</a></mc-list-item>
  <mc-list-item sublabel="Subpage 3" trailingicon="file"><a href="#page3">Page 3</a></mc-list-item>
  <mc-list-item sublabel="Subpage 4"><a href="#page4">Page 4</a></mc-list-item>
  <mc-list-item icon="computer"><a href="#page5">Page 5</a></mc-list-item>
  <mc-list-item sublabel="Subpage 6" icon="computer"><a href="#page6">Page 6</a></mc-list-item>
</mc-list>
```

#### DisabledItem

```html
<mc-list listsearch>
  <mc-list-item label="Zero"></mc-list-item>
  <mc-list-item disabled label="One"></mc-list-item>
  <mc-list-item label="Two"></mc-list-item>
  <mc-list-item label="Three"></mc-list-item>
  <mc-list-item label="Four"></mc-list-item>
  <mc-list-item label="Five"></mc-list-item>
</mc-list>
```

#### WithGroupsAndDividers

```html
<mc-list>
  <small>Numbers</small>
  <mc-list-item value="1">One</mc-list-item>
  <mc-list-item value="2">Two</mc-list-item>
  <mc-list-item value="3">Three</mc-list-item>
  <hr />
  <small>Letters</small>
  <mc-list-item value="a">A</mc-list-item>
  <mc-list-item value="b">B</mc-list-item>
  <mc-list-item value="c">C</mc-list-item>
</mc-list>
```

#### WithSeparators

```html
<mc-list>
  <mc-list-item label="Apples" sublabel="Fruits"></mc-list-item>
  <mc-list-item label="Apricots" sublabel="Fruits"></mc-list-item>
  <mc-list-item label="Artichokes" sublabel="Vegetables"></mc-list-item>
  <hr />
  <mc-list-item label="Carrots" sublabel="Vegetables"></mc-list-item>
  <hr />
  <mc-list-item label="Cherries" sublabel="Fruits"></mc-list-item>
  <mc-list-item label="Onions" sublabel="Vegetables"></mc-list-item>
</mc-list>
```

#### WithIcons

```html
<mc-list>  
  <mc-list-item label="Apples" sublabel="Fruit" icon="apple"></mc-list-item>
  <mc-list-item label="Apricots" sublabel="Fruit" icon="empty"></mc-list-item>
  <mc-list-item label="Oranges" sublabel="Fruit" icon="lemon-slice"></mc-list-item>
  <hr />
  <mc-list-item label="Broccoli" sublabel="Vegetables"><span slot="icon">🥦</span></mc-list-item>
  <mc-list-item label="Carrots" sublabel="Vegetables" icon="carrot"></mc-list-item>
</mc-list>
```

#### CustomisedAppearance

```html
<mc-list>
  <mc-list-item hiddenlabel label="Apples" icon="apple"></mc-list-item>
  <mc-list-item hiddenlabel label="Bananas" icon="banana"></mc-list-item>
  <mc-list-item hiddenlabel label="Carrots" icon="carrot"></mc-list-item>
  <mc-list-item hiddenlabel label="Lemons" icon="lemon"></mc-list-item>
</mc-list>
```

#### WithTags

```html
<mc-list>
  <mc-list-item>Hub <mc-tag label="New" appearance="info"></mc-tag></mc-list-item>
  <hr />
  <mc-list-item label="Shipment overview - Export"></mc-list-item>
  <mc-list-item label="Shipment overview - Import"></mc-list-item>
  <mc-list-item label="All inbound"></mc-list-item>
  <mc-list-item label="MyFinance"></mc-list-item>
  <hr />
  <mc-list-item>Maersk Flow <mc-tag label="New" appearance="info"></mc-tag></mc-list-item>
</mc-list>
```

#### WithCheckboxes

```html
<mc-list type="multiple">
  <mc-list-item type="checkbox" value="One" label="One"></mc-list-item>
  <mc-list-item type="checkbox" value="Two" label="Two"></mc-list-item>
  <mc-list-item type="checkbox" value="Three" label="Three"></mc-list-item>
  <mc-list-item type="checkbox" value="Four" label="Four"></mc-list-item>
  <mc-list-item type="checkbox" value="Five" label="Five"></mc-list-item>
</mc-list>
```

#### GetClickedItem

```html
<div class="story">
  <mc-list>
    <mc-list-item value="1">
      Apple
      <span slot="sublabel">Fruit</span>
    </mc-list-item>
    <mc-list-item value="2">
      Apricot
      <span slot="sublabel">Fruit</span>
    </mc-list-item>
    <mc-list-item value="3">
      Artichoke
      <span slot="sublabel">Vegetable</span>
    </mc-list-item>
  </mc-list>
</div>
<p id="selected-item-onlistchange"></p>
```

#### WithTimeout

```html
<div class="mds-flex mds-flex-column mds-gap-800">
  <mc-list id="list-without-timeout" type="multiple" label="Without timeout" value="2"></mc-list>
  <mc-list id="list-with-timeout" type="multiple" label="With timeout"></mc-list>
</div>
```

#### WithCustomFilter

```html
<div style="display: flex; gap: 20px;">
  <div style="width: 300px;">
    <h4>Built-in "contains" filter</h4>
    <p style="font-size: 14px; color: #666; margin-bottom: 10px;">
      Search for "javascript", "backend", "mobile" or "frontend"
    </p>
    <mc-list listsearch filtertype="contains" aria-label="Built-in contains filter">
      <mc-list-item label="JavaScript" sublabel="Frontend" value="javascript"></mc-list-item>
      <mc-list-item label="TypeScript" sublabel="Frontend" value="typescript"></mc-list-item>
      <mc-list-item label="Python" sublabel="Backend" value="python"></mc-list-item>
      <mc-list-item label="Java" sublabel="Backend" value="java"></mc-list-item>
      <mc-list-item label="Swift" sublabel="Mobile" value="swift"></mc-list-item>
      <mc-list-item label="Kotlin" sublabel="Mobile" value="kotlin"></mc-list-item>
    </mc-list>
  </div>
  
  <div style="width: 300px;">
    <h4>Custom fuzzy filter</h4>
    <p style="font-size: 14px; color: #666; margin-bottom: 10px;">
      Try "js" (matches JavaScript), "ts" (matches TypeScript)
    </p>
    <mc-list id="fuzzy-filter-list" listsearch aria-label="Custom fuzzy filter">
      <mc-list-item label="JavaScript" value="javascript"></mc-list-item>
      <mc-list-item label="TypeScript" value="typescript"></mc-list-item>
      <mc-list-item label="Python" value="python"></mc-list-item>
      <mc-list-item label="Java" value="java"></mc-list-item>
      <mc-list-item label="C++" value="cpp"></mc-list-item>
      <mc-list-item label="Go" value="go"></mc-list-item>
    </mc-list>
  </div>
  
  <div style="width: 300px;">
    <h4>Custom exact word filter</h4>
    <p style="font-size: 14px; color: #666; margin-bottom: 10px;">
      Search for exact words like "red", "sweet", "cherry" or "fresh"
    </p>
    <mc-list id="exact-word-filter-list" listsearch aria-label="Custom exact word filter">
      <mc-list-item label="Red Apple" value="red-apple"></mc-list-item>
      <mc-list-item label="Sweet Banana" value="sweet-banana"></mc-list-item>
      <mc-list-item label="Large Cherry" value="large-cherry"></mc-list-item>
      <mc-list-item label="Fresh Date" value="fresh-date"></mc-list-item>
      <mc-list-item label="Sweet Elderberry" value="sweet-elderberry"></mc-list-item>
      <mc-list-item label="Purple Grape" value="purple-grape"></mc-list-item>
    </mc-list>
  </div>
</div>
```

#### WithTooltip

```html
<div class="container">
  <mc-list orientation="horizontal">
    <mc-tooltip>
      <mc-list-item selected slot="trigger" icon="plus" value="new">New</mc-list-item>
      <span>Create new item</span>
    </mc-tooltip>
    <mc-tooltip>
      <mc-list-item slot="trigger" icon="pencil" value="edit">Edit</mc-list-item>
      <span>Edit existing item</span>
    </mc-tooltip>
    <mc-list-item icon="trash" value="delete">Delete</mc-list-item>
    <mc-list-item icon="box" value="archive">Archive</mc-list-item>
  </mc-list>
</div>
```

#### WithActionsSlot

```html
<mc-list width="full-width" aria-label="Chat history threads" hasactionslots>
  <mc-list-item value="bk-48217" sublabel="Finance · Last reply 2 minutes ago">
    Invoice dispute | Booking BK-48217
    <mc-menu slot="actions" trigger="click">
      <mc-button
        slot="trigger"
        icon="ellipsis-vertical"
        appearance="neutral"
        variant="plain"
        hiddenlabel
        padding="compact"
        label="Click to show menu"
      ></mc-button>
      <mc-list>
        <mc-list-item label="Open conversation"></mc-list-item>
        <mc-list-item label="Assign to team"></mc-list-item>
        <mc-list-item label="Archive thread"></mc-list-item>
        <mc-list-item label="Download transcript (PDF)"></mc-list-item>
      </mc-list>
    </mc-menu>
  </mc-list-item>
  <mc-list-item value="eta-aurora" sublabel="Export ops · Updated 45 minutes ago" disabled>
    Vessel delay update | MV Aurora
  </mc-list-item>
  <mc-list-item value="customs-hkg-lax" sublabel="Customer chat · Yesterday 18:20">
    Customs clearance | HKG → LAX
    <mc-menu slot="actions" trigger="click">
      <mc-button
        slot="trigger"
        icon="ellipsis-vertical"
        appearance="neutral"
        variant="plain"
        hiddenlabel
        padding="compact"
        label="Click to show menu"
      ></mc-button>
      <mc-list>
        <mc-list-item label="Open conversation"></mc-list-item>
        <mc-list-item label="Assign to team"></mc-list-item>
        <mc-list-item label="Archive thread"></mc-list-item>
        <mc-list-item label="Download transcript (PDF)"></mc-list-item>
      </mc-list>
    </mc-menu>
  </mc-list-item>
  <mc-list-item value="freight-surcharge-nyc" sublabel="Pricing · Yesterday 08:05">
    Freight surcharge review | NYC lanes
    <mc-menu slot="actions" trigger="click">
      <mc-button
        slot="trigger"
        icon="ellipsis-vertical"
        appearance="neutral"
        variant="plain"
        hiddenlabel
        padding="compact"
        label="Click to show menu"
      ></mc-button>
      <mc-list>
        <mc-list-item label="Open conversation"></mc-list-item>
        <mc-list-item label="Assign to team"></mc-list-item>
        <mc-list-item label="Archive thread"></mc-list-item>
        <mc-list-item label="Download transcript (PDF)"></mc-list-item>
      </mc-list>
    </mc-menu>
  </mc-list-item>
  <mc-list-item value="doc-missing-bol" sublabel="Documentation · 2 days ago">
    Missing BOL signature | MSC Horizon
    <mc-menu slot="actions" trigger="click">
      <mc-button
        slot="trigger"
        icon="ellipsis-vertical"
        appearance="neutral"
        variant="plain"
        hiddenlabel
        padding="compact"
        label="Click to show menu"
      ></mc-button>
      <mc-list>
        <mc-list-item label="Open conversation"></mc-list-item>
        <mc-list-item label="Assign to team"></mc-list-item>
        <mc-list-item label="Archive thread"></mc-list-item>
        <mc-list-item label="Download transcript (PDF)"></mc-list-item>
      </mc-list>
    </mc-menu>
  </mc-list-item>
  <mc-list-item value="collect-payment-mae" sublabel="Accounts receivable · 4 days ago">
    Overdue payment follow-up | MAE-993201
    <mc-menu slot="actions" trigger="click">
      <mc-button
        slot="trigger"
        icon="ellipsis-vertical"
        appearance="neutral"
        variant="plain"
        hiddenlabel
        padding="compact"
        label="Click to show menu"
      ></mc-button>
      <mc-list>
        <mc-list-item label="Open conversation"></mc-list-item>
        <mc-list-item label="Assign to team"></mc-list-item>
        <mc-list-item label="Archive thread"></mc-list-item>
        <mc-list-item label="Download transcript (PDF)"></mc-list-item>
      </mc-list>
    </mc-menu>
  </mc-list-item>
</mc-list>
```

#### ListsAsDataProp

```html
<mc-list></mc-list>
```

#### CustomLabels

```html
<mc-list id="withLang" listsearch>
  <mc-list-item label="Apple" sublabel="Fruit"></mc-list-item>
  <mc-list-item label="Apricot" sublabel="Fruit"></mc-list-item>
  <mc-list-item label="Artichoke" sublabel="Vegetable"></mc-list-item>
</mc-list>
```

## API

### Properties and attributes

#### fit

- **Type:** small | medium | large
- **Typescript Type:** Fit
- **Default:** medium
- **Description:** Controls the overall size of the component.

#### noborder

- **Type:** boolean
- **Default:** false
- **Description:** If exists, the border will be removed.

#### orientation

- **Type:** horizontal | vertical
- **Typescript Type:** Orientation
- **Default:** vertical
- **Description:** Determines whether elements are arranged horizontally or vertically.

#### arialabel

- **Type:** string
- **Default:** Label
- **Description:** Should be used to give a proper description to the list from accessibility point of view.

#### data

- **Type:** array
- **Typescript Type:** IMcListDataItem[] | null | undefined
- **Default:** null
- **Description:** The data to be displayed in list. It is an array of objects `<IMcListDataItem>` that contains `{ label: string; value: string | number; disabled?: boolean }`

#### listsearch

- **Type:** boolean
- **Default:** false
- **Description:** If set to `true` or the attribute is just presented without any value, then the search box will be visible in the listbox, and user will be able to search and filter list items.

#### labels

- **Type:** IMcListLabels
- **Typescript Type:** Partial<IMcListLabels> | undefined
- **Description:** Custom labels for mc-list component. By default labels are loaded in EN language. Check <a href="https://github.com/Maersk-Global/mds/blob/main/packages/mc-list/src/lib/translations.ts" target="_blank" rel="noopener noreferrer">types documentation</a> to see how to use custom labels property.

#### filtertype

- **Type:** startsWith | contains
- **Typescript Type:** IMcListFilterType
- **Default:** contains
- **Description:** Filter type to be used for filtering the list items. The default value is: `contains`, which will filter the list items based on any matching text within the item. 
The other option is: `startsWith`, which will filter the items that starts with the matching text.

#### customfilter

- **Type:** function
- **Typescript Type:** ((text: string, value: string) => string[]) | undefined
- **Description:** Specifies custom match function that should filter the results in the typeahead based on the typed text.

#### matchlabelonly

- **Type:** boolean
- **Default:** false
- **Description:** Specifies if internal or custom filter function should match and filter the results in the label text only based on the typed text. Match will not apply to sublabel or value of the data item

### Events

#### scroll

- **Type:** Event
- **Description:** Dispatched when the list is scrolled.

#### listchange

- **Type:** CustomEvent<IMcListChangeDetail>
- **Description:** Emitted when a list item is interacted.

#### listitemsloaded

- **Type:** CustomEvent<IMcListItemsLoadedDetail>
- **Description:** Emitted when the list items are loaded.

#### focuschange

- **Type:** CustomEvent<IMcListFocusChangeDetail>
- **Description:** Emitted when a list item receives focus.

### Types

- Fit: re-export
- IMcList: interface
- IMcListChangeDetail: interface
- IMcListDataItem: re-export
- IMcListFocusChangeDetail: interface
- IMcListItem: re-export
- IMcListItemsLoadedDetail: interface
- IMcListLabels: interface
- ListTypes: re-export
- McListKeyNavigationType: re-export
- McListRole: re-export
- McListValueType: re-export
- MouseMoveVisibleArea: re-export

### Slots

#### Default slot

- **Description:** Use the default slot, when you want to pass list items or dividers to the list. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-list>
  <mc-list-item></mc-list-item>
</mc-list>
```

## CSS parts

#### list

- **Description:** Using this CSS part you can change the look of the list wrapper inside the mc-list component. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-list::part(list) {
  max-width: 44px;
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

