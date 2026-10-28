# mc-table

Displays data in a grid of rows and columns allowing users to scan, analyse, compare, and act upon the information within.

**Url:** https://designsystem.maersk.com/components/table/
**Alternative names:** Data Grid, Data Table, Tabular View
**Keywords:** component, data, row, column, grid, sort, filter, pagination, toolbar
**✅ When to use:** When you need to present tabular data with advanced interaction capabilities.
**❌ When not to use:** For simple lists or when a grid layout is more appropriate.

## Do's

- A table with data decluttered by using checkmarks and crosses.
- Do use middle vertical alignment when the content in a row only varies slightly up to 3 lines.
- Do use top vertical alignment when the content in a row varies more than 3-4 lines.
- A table with dashes to represent missing data points.
- A table with horizontal lines only.

## Don'ts

- A cluttered table with too much unnecessary and redundant information.
- Do not use top vertical alignment when the content in a row only varies slightly up to 3 lines.
- Do not use middle vertical alignment when the content in a row varies more than 3-4 lines.
- Do not use bottom vertical alignment.
- A table with empty cells.

## Cautions

- A table with horizontal and vertical lines.

## Best practices

### Best practice
- Left-align text.
- Right-align numbers and consider using monospaced numbers.
- Align headings with data.
- Apply a “less is more” approach to selecting and structuring the data
- Use icons, abbreviate and reduce redundancy to declutter the data
- Prioritise columns by importance and arrange them accordingly
- Preserve context when dealing with overflow and nested tables
- Allow the user to sort the data by clicking the column header
- Keep table decoration to a minimum

### Implementations
- The Maersk Design System offers two table options for developers:
- Table component located in the @maersk/mds-components-core package. All examples on this page use this component. This supercedes the community developed web component located in the @maersk/mds-components-community package.
- CSS classes for constructing your own HTML tables. These can be found in our CSS foundations package @maersk/mds-foundations

### Headers & footers
- Table headers communicate what data is being presented within each column and/or row and table footers are useful when summarisation of the displayed data is needed.

#### Headers
- Most often table headers are positioned at the top row of a table. However, in some cases, it can be appropriate to ‘flip’ a table by using its first column to display headers. In rare cases a table may even need to have multiple headers to adequately describe the data, as in this example:
- Example: A timetable with two headers - one for weekdays (top row) and one for timeslots (first column).

#### Header tooltips
- When a header needs additional explanation in order to assist the user, we recommend using the tooltip component. When a column description is provided to the MDS table component, this pattern is automatically applied. Only use tooltips when the labels might be misunderstood or consist of acronyms (e.g. INCO terms).
- Example: A table with header tooltips.

#### Header groups
- Group headers can help avoid duplication of text labels in the headers and keep the overall table cleaner and easier to scan and read.
- Example: A table with header groups.

#### Footers
- The bottom row can be used as a table footer which is especially useful when numerical data has to be summarised. The footer should clearly state that it represents a summary and be visually distinct from the other rows so that it is clear to the user that its data is different.
- Example: A table with a footer showing the sum total of all the numbers in a column.

### Sorting and filtering
- The current table component supports sorting the rows of a table based on a column of choice. The most conventional way of allowing the user to do so is to make the headers clickable and clearly display the active sorting mode with a suffix icon.
- We recommend you to check out the full guidelines on search, filter and sorting.
- The basic table sorting modes are:
- Default/unsorted (↑↓)
- Alphabetically / numerically in ascending order (↑ 0-9, a-z)
- Alphabetically / numerically in descending order (↓ 9-0, z-a)
- Example: A table with its rows sorted numerically in descending order based on the values in the last column.

### Content
- Tables present a concise overview of relevant data to make a decision or draw an insight. It is best to apply “less is more” approach to selecting and structuring the data in order to conserve space, reduce visual clutter, and avoid information overload.

#### Declutter the data
- Consider replacing repetitive data entries with conventional (commonly understood) icons, e.g. checkmarks and crosses instead of “Yes” and “No”. Common units can be abbreviated and displayed in the column header instead of being repeated in every cell. Table headers should be kept as short as possible to increase clarity and avoid truncation or wrapping.

#### Alignment
- The table content can be aligned both horizontally and vertically. Applying the right alignment of the content makes it significantly easier to consume and understand the data.

##### Horizontal alignment
- The following conventional pattern significantly improves the scan-ability of tabular data and could even make vertical grid lines obsolete, which gives the table a much cleaner visual expression
- As a rule of thumb:
- Left-align text (as well as non-countable numerals such as dates and phone numbers)
- Right-align numbers
- Align headings with data
- Center-alignment can be appropriate in certain cases, as in the ‘In service’ column below where the cell content consists of icons which are of equal width.
- Example: A table with text left-aligned, numbers right-aligned and headings aligned with the data.

##### Vertical alignment
- By default, each cell’s content is vertically aligned to the middle but can be changed to top or bottom-aligned. Which alignment to choose depends on how much variation there exists between the content of the cells and the row height.

###### Middle-aligned (centered)
- Use vertical middle alignment when the content in a row only varies slightly up to 3 lines.

###### Top-aligned
- Use top alignment when the content in a row varies more than 3-4 lines.

###### Bottom-aligned
- In most cases, it doesn’t make sense to align cell content vertically to the bottom. When we align to the bottom we may risk that the content is hidden away e.g. by being chopped by the browser viewport. This is especially true when we are dealing with multi-line cell content and when there is a bigger variation in the length of the content between the cells within the row.

#### Colspan and rowspan
- Sometimes you might want to merge multiple cells across rows or columns. In such cases, you use the colspan and rowspan. For example, you might need a data description that spans over multiple columns or a data label that spans multiple rows.

##### Example of colspan
- Example: Data description spanning multiple columns
- Use the Header Groups in cases where you want to group multiple columns under one category.

##### Example of rowspan
- Example: Data description spanning multiple columns
- Both colspan and rowspan help improve table structure, readability, and presentation, making them essential for a well-formatted HTML table.

#### Missing cell content
- Display a dash (-) when a cell contains no data to let the user know that the content was loaded.

#### Cell content overflow
- If a cell contains too much data to be displayed in a single line the text should wrap (increasing the height of the entire row). In certain cases it may be desirable to truncate the text instead – but this comes with the risk of hiding valuable information from the user and requires implementing an alternative means for the user to access the full text string (e.g. a tooltip). Read more in the truncation guidelines.

### Large data sets
- Tables with large set of data can be difficult to display in the available screen space.
- The main risk of showing tables with overflow (due to data abundance and/or screen size) is that the user loses their overview. One way of mitigating this problem is to make the header row and/or first column sticky, thus allowing the user to view the context of the data anywhere in the table.

#### Horizontal scroll
- When the table columns can not fit in the available screen space, allow the user to scroll horizontally to see the excess columns. It is simple, scalable and conventional solution. When the table has too many columns all potential solutions to handle them have drawbacks.
- Example: Allow the user to scroll sideways to see additional columns of a wide table on a small screen.
- Example: Making a column sticky is a way to preserve context when the user is scrolling sideways to reveal more columns on a small screen

#### Importance first
- Arrange columns in order of importance, typically left to right. This will allow the user to quickly scan and compare the most important attributes of the data entries. This is especially valuable on narrow screens where the right-most columns will be hidden from the view port.
- An exception to this rule of thumb is when two or more columns of unequal importance has a tight logical connection, e.g. ‘departure time’ and ‘arrival time’.

#### Combine columns to conserve space
- To save horizontal space some columns with closely related data can be combined by adding the second attribute as a subtext below the first.
- Example: Two columns with data relating to location have been combined to conserve horizontal space.
- Example: Two columns with closely related data are displayed separately.
- Consider the context and what the user will need in it. Combining columns conserves space but at the same time can reduce the user ability to scan and compare the table data.

### Expandable rows
- Use expandable rows to add and display simple supplementary information to a table row.

#### Best practice
- Use to display supplementary information under a table row.
- Expanded content should be organised and easy to read and scan.
- Use headings, bullet points, or tables to present the information in a structured way.
- Use a side panel or modal in cases where the content takes up a lot of space.
- Maintain context by allowing the user to see the original row and its contents
- Keep row expansion to 1 level - further levels will increase the chances of information overload.
- Expandable rows are ideal to show details about aggregated numbers and how they are derived when the user wants to drill deeper into the information.
- Example: Using expandable rows to show aggregated numbers and keeping the data well arranged for easy scanability.
- Expandable rows are suitable for displaying simple and well-grouped lists so it does not overload the interface and cause information overload for the user.
- Example: Using expandable rows to show aggregated numbers and keeping the data well arranged for easy scanability.

#### Complex supplementary information
- When the supplementary information to a table row requires complex interactions or is large in volume it is better to consider using alternative patterns to disclose it. For example, a side panel or a modal to view and interact with the information are good alternatives. It will help shift the user focus from the table content to the complex supplementary information when it is required. This will help reduce cognitive load while maintaining the context.

#### Expanding multiple rows at the same time
- Consider how large is the content of each expanded row and if it takes up more than 50% of the available screen space. If that’s the case, avoiding using batch expansion as a pattern. Consider opting for a modal or aside panel to disclose the supplementary information.

### Pagination​
- When the table has too many rows for the user to get an overview on a single page, then split the table across multiple pages and allow the user to navigate between them with a pagination.
- Example: A table linked with the pagination component.

### Toolbar
- The MDS table support two types of table toolbars: a Default Toolbar for high‑level and table-wide actions, and a Bulk Action Toolbar for actions applied to selected rows.
- As an overall rule there can only be one table toolbar visible at a time. The Bulk Action Toolbar always takes priority when one or more rows have been selected and replaces the Default Toolbar.

#### Default toolbar
- The Default Table Toolbar exposes high‑level, table‑wide actions that are not tied to row selection. These actions typically affect the dataset, table configuration, or data exchange.
- Example: Default toolbar with table-wide actions.

#### Bulk action toolbar
- The Bulk Action Toolbar enables users to perform actions on multiple selected rows. It appears only when one or more rows are selected.
- Example: Bulk action toolbar with actions and a overflow menu with additional secondary actions.

### States
- When showing different states of the table it is recommended to keep the table headers visible so the user knows what data is expected to be loaded in the context.

#### Empty state
- Consider using an empty state when the table needs to be populated either manually or by an external source (e.g. file import).
- Example: Example of a table in an 'empty state'.

#### Loading
- When data takes more than 1 second to load show a loading state for the table to let the user know content is being loaded. The more accurate information about the loading and progress you can display the better.
- Example: Example of a table in a 'loading state'.

#### No results state
- When data is not available either due to too narrow search and filtering criteria or another reason, make sure to communicate the reason and provide a way for the user to recover from the dead end.
- Example: Example of a table in a 'no results state'.

#### Error and Warning state
- In cases where there is an API problem or data can’t be loaded from the server, it should be clearly communicated via the Notification component that can be shown instead of the table rows.
- Example: Example of a table in an 'error and warning state'.

### Styling options
- Visual dividers and other forms of table decoration should be kept at a minimum in order to make the table less busy and easier to digest.

#### Grid lines
- Horizontal grid lines visually separate the rows from each other and help the user scan along a row from start to finish. These are the most basic form of table decoration and should be applied by default since they serve as useful guides for reading the table.
- Vertical grid lines visually separate the columns from each other and help the user compare the same data across multiple rows. However, for the most part these are not necessary if the data is strictly aligned, because the alignment itself serves as a visual separation. Whereas avoiding a spreadsheet-like expression is desirable for basic data tables it is conventional and serves a purpose for large/advanced data grids.

#### Row highlight on hover
- Another way of distinguishing rows from one another is to highlight a single one with a slightly different background colour when it is hovered by the user’s mouse cursor. This way the user gets to focus in on a single row of interest at a time without being overwhelmed by other elements of table decoration. This approach comes without the risk of table clutter but is unfortunately not useful on touch devices.
- Example: A table with row highlight on hover.

#### Zebra stripes
- If a table is exceptionally wide it can be useful to allow the user to distinguish between rows be giving every other row a slightly different background colour. However, this adds to the visual clutter and might cause contrast issues or visually collide with other elements of the table. So before applying this style to a table, consider the alternatives for row distinction (e.g. horizontal grid lines, row highlight on hover) and carefully weigh the pro against the cons.
- Example: 'Zebra stripes' can improve the scannability of wide tables.

#### Best practices
- Include a header
- Use a simple table structure
- Provide a caption (or alt text) for the table
- Avoid empty cells
- Avoid using tables for layout purposes
- If the table contains (many) interactive elements use a grid instead
- Read more about the criteria for accessibility in the accessibility guidelines.

#### Use a grid for interactive elements
- The cells of a basic table are not focusable or selectable so the table is not included in the tabular sequence of the page unless it has sorting controls in the header.
- If a basic table contains (many) interactive elements (e.g. if each row has a checkbox for selection) the experience of tabbing through the page via keyboard or screenreader will become repetitive and cumbersome. In that case it is preferable to use a grid, since that allows the user to navigate between cells using the arrow keys.

## Usage & code examples

```bash
// General Setup (JS, VUE, Angular) 
npm install @maersk-global/mds-components-core-table
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-table
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-table';
// minimal example usage
<mc-table data="[{"id":1,"name":"Madrid Maersk","type":"Container ship","built":"2017","length":399,"capacity":19630,"inService":true,"status":"On schedule","speed":"16.2","position":"Track on map","lastPort":"Shanghai","lastCountry":"China","lastUpdate":"09/12/2025"},{"id":2,"name":"Mary Maersk","type":"Container ship","built":"2013","length":399,"capacity":18270,"inService":true,"status":"Delayed","speed":"2.1","position":"Track on map","lastPort":"Busan","lastCountry":"South Korea","lastUpdate":"10/12/2025"}]"></mc-table>
// basic example usage
<mc-table data="[{"id":1,"name":"Madrid Maersk","type":"Container ship","built":"2017","length":399,"capacity":19630,"inService":true,"status":"On schedule","speed":"16.2","position":"Track on map","lastPort":"Shanghai","lastCountry":"China","lastUpdate":"09/12/2025"},{"id":2,"name":"Mary Maersk","type":"Container ship","built":"2013","length":399,"capacity":18270,"inService":true,"status":"Delayed","speed":"2.1","position":"Track on map","lastPort":"Busan","lastCountry":"South Korea","lastUpdate":"10/12/2025"}]" columns="[{"id":"name","label":"Name","noWrap":true,"sticky":false},{"id":"inService","label":"In Service"}]" datakey="id" headerstickyoffsetselector="" caption="A caption to describe the table below" fit="medium" outerborderstyle="solid" verticallinestyle="none" horizontallinestyle="solid" verticalalign="middle" height="auto" stateslotheight="auto" customstyles="" hidecolumns="[]" sortdefaultcolumnid="capacity" sortdefaultdirection="ascending" pagination="none" paginationmode="static" paginationtotalrecords="200" paginationcurrentpage="1" paginationpagesize="10" paginationpagesizeoptions="[10,20]" paginationalignment="center" selected="[]" selectrowdisabled="[]" expandopened="[]" expandpadding="default"></mc-table>
```

### Advanced Examples

#### SimpleTable

```html
<mc-table></mc-table>
```

#### ColumnsDefinition

```html
<mc-table></mc-table>
```

#### CustomDataKey

```html
<mc-table datakey="myuid"></mc-table>
```

#### SubData

```html
<mc-table></mc-table>
```

#### CustomColumnWidth

```html
<mc-table></mc-table>
```

#### NoWrap

```html
<mc-table></mc-table>
```

#### HiddenColumns

```html
<div class="multi-select-wrapper">
  <mc-multi-select
    label="Hidden columns"
    placeholder="Choose columns to hide"
  >
  </mc-multi-select>
</div>
<mc-table></mc-table>
```

#### StateSlot

```html
<mc-table  stateslotheight="200px">
  <mc-loading-indicator slot="state"></mc-loading-indicator>
</mc-table>
```

#### HeaderGroups

```html
<mc-table verticallinestyle="solid"></mc-table>
```

#### RowHeaders

```html
<mc-table verticallinestyle="solid"></mc-table>
```

#### HeaderDescription

```html
<mc-table></mc-table>
```

#### HeaderSlots

```html
<mc-table>
  <div slot="speed_header">
  <div style="display: flex; align-items: center; gap: 0.5rem">
    <mc-icon icon="speedometer"></mc-icon>
    Vessel speed
  </div>
  <span class="mds-neutral--weak__text-color">subtext</span>
  </div>
  <span slot="built_header">
    Vessel built year
  </span>
</mc-table>
```

#### HeaderWithFilterAction

```html
<mc-table>
  <div slot="length_header" style="display: flex; align-items: center; justify-content: flex-end; gap: 4px;">
    <span>Filter With Checkbox Group</span>
    <mc-popover
      position="bottom-right"
      trigger="click"
    >
      <mc-button
        appearance="neutral"
        fit="small"
        hiddenlabel="true"
        icon="funnel"
        label="Show menu"
        padding="compact"
        slot="trigger"
        variant="plain"
      >
      </mc-button>
      <div style="padding: 16px 12px;">
        <mc-checkbox-group
          legend="Containers"
          orientation="vertical"
          hiddenlegend
          @change="applyFilter"
        >
          <mc-checkbox label="Large (> 300m)" value="large"></mc-checkbox>
          <mc-checkbox label="Medium (200m - 300m)" value="medium"></mc-checkbox>
          <mc-checkbox label="Small (< 200m)" value="small"></mc-checkbox>
        </mc-checkbox-group>
      </div>
    </mc-popover>
  </div>
</mc-table>
```

#### WithMultipleFilterAction

```html
<mc-table headersticky height="200px">
  <div slot="length_header" class="filter">
    <span>Length (m)</span>
    <mc-popover position="right-top" trigger="click">
      <mc-button
        appearance="neutral"
        fit="small"
        hiddenlabel
        icon="funnel-solid"
        label="Show menu"
        padding="compact"
        slot="trigger"
        variant="plain"
      ></mc-button>
      <div class="popup">
        <mc-checkbox-group
          fit="small"
          legend="Containers"
          orientation="vertical"
          hiddenlegend
        >
          <mc-checkbox fit="small" label="Large (> 300m)" value="large"></mc-checkbox>
          <mc-checkbox fit="small" label="Medium (200m - 300m)" value="medium"></mc-checkbox>
          <mc-checkbox fit="small" label="Small (< 200m)" value="small"></mc-checkbox>
        </mc-checkbox-group>
      </div>
    </mc-popover>
  </div>
  <span slot="status_header" class="filter">
    <span>Status</span>
    <mc-popover position="right-top" trigger="click">
      <mc-button
        appearance="neutral"
        fit="small"
        hiddenlabel
        icon="funnel-solid"
        label="Show menu"
        padding="compact"
        slot="trigger"
        variant="plain"
      ></mc-button>
      <div class="popup" style="z-index: revert-layer;">
        <mc-multi-select
          hiddenlabel
          clearbutton
          fit="small"
          placeholder="Click to select"
        >
          <mc-option value="On schedule">On schedule</mc-option>
          <mc-option value="Stalled">Stalled</mc-option>
          <mc-option value="Delayed">Delayed</mc-option>
          <mc-option value="Unknown">Unknown</mc-option>
        </mc-multi-select>
      </div>
    </mc-popover>
  </span>
</mc-table>
<div>Ok, so I didn't really implement the filter, but you can see the selected values below:</div>
<div id="length-filter-result">Filter data based on length:</div>
<div id="status-filter-result">Filter data based on status:</div>
```

#### WithContextMenu

```html
<mc-table id="myTable" sortdisabled>
  <div slot="name_header">
    <mc-menu trigger="contextmenu">
      <div slot="trigger" style="font-weight: 700;">Name</div>
      <mc-list>
        <mc-list-item label="Back" icon="arrow-left"></mc-list-item>
        <mc-list-item label="Forward" disabled icon="arrow-right"></mc-list-item>
        <mc-list-item label="Reload" icon="arrow-clockwise"></mc-list-item>
      </mc-list>
    </mc-menu>
  </div>
</mc-table>
```

#### Collapsable

```html
<mc-table>
  <div slot="actions_header">
    <mc-icon id="expandIcon" icon="chevron-down" style="cursor: pointer;" onclick="toggleTableExpansion()"></mc-icon>
  </div>
</mc-table>
```

#### FooterExample

```html
<mc-table footer>
  <div slot="name_footer">Footer for <i>id: name</i></div>
  <div id="length-footer" slot="length_footer"></div>
  <div id="capacity-footer" slot="capacity_footer"></div>
</mc-table>
```

#### FooterColspan

```html
<mc-table select expand footer verticallinestyle="solid" >
  <div slot="name_footer">Total:</div>
  <div slot="1_expanded">Expanded content</div>
  <div id="capacity-footer" slot="capacity_footer"></div>
  <div id="length-footer" slot="length_footer"></div>
</mc-table>
```

#### DisablePlaceholderFooter

```html
<mc-table select expand footer disableplaceholderfooters verticallinestyle="solid">
  <div slot="name_footer">Total:</div>
  <div slot="1_expanded">Expanded content</div>
  <div id="capacity-footer" slot="capacity_footer">\${getDataForColumn(vessels, 'capacity').reduce((acc, val) => acc + val, 0).toLocaleString()}</div>
  <div id="length-footer" slot="length_footer">\${getDataForColumn(vessels, 'length').reduce((acc, val) => acc + val, 0).toLocaleString()}</div>
</mc-table>
```

#### TabularFigures

```html
<mc-table></mc-table>
```

#### NumberFormatting

```html
<mc-table footer>
  <span slot="1_latitude"></span>
  <span slot="1_price"></span>
  <div slot="price_footer"></div>
</mc-table>
```

#### DisableSorting

```html
<mc-table></mc-table>
```

#### CustomSorting

```html
<mc-table></mc-table>
```

#### ManualSorting

```html
<mc-table sortmanual sortdefaultdirection="ascending" sortdefaultcolumnid="name">
</mc-table>
```

#### ServerSideSorting

```html
<mc-table sortmanual sortdefaultdirection="ascending">
</mc-table>
```

#### DisableSortingOnLoad

```html
<mc-table sortdisableoninitialload></mc-table>
```

#### RowSelector

```html
<mc-table select></mc-table>
<pre id="table-pre">Selected items: </pre>
```

#### RowPreselection

```html
<mc-table select></mc-table>
<pre id="table-pre">Selected items: </pre>
```

#### RowSelectorDisableParticularRow

```html
<mc-table select></mc-table>
```

#### RowPreselectionWithDisabledRows

```html
<mc-table select></mc-table>
```

#### RowExpansion

```html
<mc-table expand sortdisabled>
  <div slot="1_expanded">
    Row with datakey="1" expanded content (datakey looks at "id" by default)
  </div>
  <div slot="7_expanded">
    Row with datakey="7" expanded content (datakey looks at "id" by default)
  </div>
</mc-table>
<pre id="row-click">@rowclick ids: null</pre>
<pre id="row-expanded">@rowexpanded ids: null</pre>
<pre id="expand-change">@expandchange ids: null</pre>
```

#### RowPreExpansion

```html
<mc-table expand select sortdisabled>
  <div slot="1_expanded">
     Row with datakey="1" expanded content(datakey looks at "id" by default)
  </div>
  <div slot="2_expanded">
    Row with datakey="2" expanded content(datakey looks at "id" by default)
  </div>
</mc-table>
<pre id="table-pre">Expanded items: </pre>
```

#### WithSubrows

```html
<mc-table expand></mc-table>
```

#### WithSubrowsAndSelection

```html
<mc-table expand select></mc-table>
```

#### WithSubrowsAndCustomRender

```html
<mc-table expand>
  <!-- Slots will be dynamically created for each row's available column -->
  <!-- Example slots with class distinction: -->
  <div slot="1_available" style="display: flex; justify-content: center;" class="parent-row">
    <mc-icon icon="check"></mc-icon>
  </div>
  <div slot="2_available" style="display: flex; justify-content: center;" class="child-row">
    <mc-icon icon="check"></mc-icon>
  </div>
  <!-- ... more slots for all rows including children ... -->
</mc-table>
```

#### WithSubrowsAndSpans

```html
<mc-table
  verticallinestyle="solid"
  sortdisabled
  expand
>
${allRows
  .map(
    (row) => 
```

#### NestedTables

```html
<mc-table 
  id="main-table"
  expand
  sortdisabled
></mc-table>
<pre id="table-pre">Expanded items: </pre>
```

#### SpecificRowStyles

```html
<mc-table sortdisabled></mc-table>
```

#### RowStyles

```html
<mc-table></mc-table>
```

#### BasedOnEvents

```html
<mc-table></mc-table>
```

#### SpecificColumnStyles

```html
<mc-table></mc-table>
```

#### CellSpan

```html
<mc-table sortdisabled verticallinestyle="solid"></mc-table>
```

#### ColumnSpan

```html
<mc-table verticallinestyle="solid" expand sortdisabled>
  <div slot="3_expanded">
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam placeat quia sit corporis dolore inventore
      accusamus possimus illo iste. Adipisci officiis perferendis perspiciatis, mollitia tempore eum ab eveniet
      dolorum totam!
    </p>
  </div>
</mc-table>
```

#### RowSpan

```html
<mc-table sortdisabled verticallinestyle="solid"></mc-table>
```

#### CustomContent

```html
<mc-table></mc-table>
```

#### HeaderAndCellTemplates

```html
<mc-table></mc-table>
```

#### GlobalTooltip

```html
<mc-tooltip id="global-tooltip"></mc-tooltip>
<mc-table></mc-table>
```

#### CustomContentWithIcon

```html
<mc-table></mc-table>
```

#### RenderContentOnHover

```html
<mc-table></mc-table>
```

#### BuiltInStaticData

```html
<mc-table pagination="select"></mc-table>
```

#### BuiltInWithInputDynamicData

```html
<mc-table pagination="input" paginationmode="dynamic"></mc-table>
```

#### BuiltInWithSelectDynamicData

```html
<mc-table
  pagination="select"
  paginationmode="dynamic"
></mc-table>
```

#### BuiltInCustomMobileView

```html
<mc-table pagination="select"></mc-table>
```

#### CustomPagination

```html
<mc-table select></mc-table>
<mc-pagination @pagechange="paginationChange"></mc-pagination>
<pre id="table-pre">Selected items: []</pre>
```

#### LazyLoading

```html
<mc-table expand></mc-table>
<mc-loading-indicator id="loading-indicator" label="Loading data..."></mc-loading-indicator>
```

#### CustomLabels

```html
<mc-table pagination="select" select></mc-table>
```

#### Header

```html
<mc-table headersticky height="200px"></mc-table>
```

#### HeaderViewport

```html
<mc-table 
  headersticky 
  headerstickyviewport 
  headerstickyoffsetselector=".toolbar"
></mc-table>
```

#### HeaderWithTooltip

```html
<mc-table headersticky height="200px">
  <div slot="speed_header">
    <div style="display: flex; align-items: center; gap: 0.5rem">
      <mc-tooltip position="bottom-center"
        ><mc-icon slot="trigger" icon="speedometer"></mc-icon
        ><span class="mds-tooltip__content">Vessel speed</span></mc-tooltip
      >
    </div>
    <span class="mds-neutral--weak__text-color">subtext</span>
  </div>
</mc-table>
```

#### ColumnLeft

```html
<mc-table id="table" select selectsticky></mc-table>
```

#### ColumnLeftWithTooltip

```html
<mc-table></mc-table>
```

#### ColumnRight

```html
<mc-table select></mc-table>
```

#### ColumnRightAndLeft

```html
<mc-table select selectsticky></mc-table>
```

#### HeaderAndColumns

```html
<mc-table headersticky select selectsticky height="200px">
  <div slot="length_header" class="filter">
    <span>Length (m)</span>
    <mc-popover position="right-top" trigger="click">
      <mc-button
        appearance="neutral"
        fit="small"
        hiddenlabel
        label="Show menu"
        padding="compact"
        slot="trigger"
        variant="plain"
      ></mc-button>
      <div class="popup">
        <mc-checkbox-group
          fit="small"
          legend="Containers"
          orientation="vertical"
          hiddenlegend
        >
          <mc-checkbox fit="small" label="Large (> 300m)" value="large"></mc-checkbox>
          <mc-checkbox fit="small" label="Medium (200m - 300m)" value="medium"></mc-checkbox>
          <mc-checkbox fit="small" label="Small (< 200m)" value="small"></mc-checkbox>
        </mc-checkbox-group>
      </div>
    </mc-popover>
  </div>
  <span slot="status_header" class="filter">
    <span>Status</span>
    <mc-popover position="right-top" trigger="click">
      <mc-button
        appearance="neutral"
        fit="small"
        hiddenlabel
        label="Show menu"
        padding="compact"
        slot="trigger"
        variant="plain"
      ></mc-button>
      <div class="popup" style="z-index: revert-layer;">
        <mc-multi-select
          hiddenlabel
          clearbutton
          fit="small"
          placeholder="Click to select"
        >
          <mc-option value="On schedule">On schedule</mc-option>
          <mc-option value="Stalled">Stalled</mc-option>
          <mc-option value="Delayed">Delayed</mc-option>
          <mc-option value="Unknown">Unknown</mc-option>
        </mc-multi-select>
      </div>
    </mc-popover>
  </span>
</mc-table>
```

#### Footer

```html
<mc-table footer footersticky height="200px">
  <div slot="name_footer">Footer for <i>id: name</i></div>
  <div slot="length_footer"></div>
</mc-table>
```

#### FooterAndHeader

```html
<mc-table headersticky footer footersticky height="200px">
  <div slot="name_footer">Footer for <i>id: name</i></div>
  <div slot="length_footer"></div>
</mc-table>
```

#### ColumnLeftWithMenu

```html
<mc-table></mc-table>
```

#### ColumnRightAndLeftAndMenu

```html
<mc-table select selectsticky></mc-table>
```

#### ColumnResizing

```html
<mc-table columnresize></mc-table>
```

#### WithStickyColumns

```html
<mc-table
  select
  selectsticky
  columnresize
  verticallinestyle="dashed"
></mc-table>
```

#### TableWithBulkActions

```html
<mc-table select>
  <mc-toolbar slot="toolbar">
    <div slot="start">
      <mc-button icon="cog" label="Customise" appearance="neutral" variant="outlined"></mc-button>
    </div>
    <div slot="end">
      <mc-button icon="tray-arrow-down" label="Import" appearance="neutral" variant="outlined"></mc-button>
      <mc-button icon="tray-arrow-up" label="Export" appearance="neutral" variant="outlined"></mc-button>
    </div>
  </mc-toolbar>
  <div slot="toolbar-bulk-actions">
    <mc-button icon="tray-arrow-up" label="Export" appearance="inverse" variant="plain"></mc-button>
    <mc-button icon="folder-open" label="Archive" appearance="inverse" variant="plain"></mc-button>
    <mc-button icon="trash" label="Delete" appearance="inverse" variant="plain"></mc-button>
    <mc-menu trigger="click" position="bottom-right">
      <mc-button slot="trigger" trailingicon="ellipsis-horizontal" label="More" hiddenlabel appearance="inverse" variant="plain"></mc-button>
      <mc-list>
        <mc-list-item label="Assign to"></mc-list-item>
        <mc-list-item label="Change status"></mc-list-item>
      </mc-list>
    </mc-menu>
  </div>
</mc-table>
```

#### TableWithBulkActionsOverflowMenu

```html
<mc-table select>
  <mc-toolbar slot="toolbar">
    <div slot="start">
      <mc-button icon="cog" label="Customise" appearance="neutral" variant="outlined"></mc-button>
    </div>
    <div slot="end">
      <mc-button icon="tray-arrow-down" label="Import" appearance="neutral" variant="outlined"></mc-button>
      <mc-button icon="tray-arrow-up" label="Export" appearance="neutral" variant="outlined"></mc-button>
    </div>
  </mc-toolbar>
  <div slot="toolbar-bulk-actions">
    <mc-button class="collapse-lg" icon="tray-arrow-up" label="Export" appearance="inverse" variant="plain"></mc-button>
    <mc-button class="collapse-md" icon="folder-open" label="Archive" appearance="inverse" variant="plain"></mc-button>
    <mc-button class="collapse-sm" icon="trash" label="Delete" appearance="inverse" variant="plain"></mc-button>
    <mc-menu trigger="click" position="bottom-right">
      <mc-button slot="trigger" trailingicon="ellipsis-horizontal" label="More" hiddenlabel appearance="inverse" variant="plain"></mc-button>
      <mc-list>
        <mc-list-item class="collapse-lg" label="Export"></mc-list-item>
        <mc-list-item class="collapse-md" label="Archive"></mc-list-item>
        <mc-list-item class="collapse-sm" label="Delete"></mc-list-item>
        <mc-list-item label="Assign to"></mc-list-item>
        <mc-list-item label="Change status"></mc-list-item>
      </mc-list>
    </mc-menu>
  </div>
</mc-table>
```

#### TableWithToolbar

```html
<mc-table>
  <mc-toolbar slot="toolbar">
    <div slot="start">
      <mc-button icon="cog" label="Customise" appearance="neutral" variant="outlined"></mc-button>
    </div>
    <div slot="end">
      <mc-button icon="tray-arrow-down" label="Import" appearance="neutral" variant="outlined"></mc-button>
      <mc-button icon="tray-arrow-up" label="Export" appearance="neutral" variant="outlined"></mc-button>
    </div>
  </mc-toolbar>
</mc-table>
```

#### Truncation

```html
<mc-table></mc-table>
```

#### OpeningModalOnRowclick

```html
<mc-table></mc-table>
<mc-modal heading="More information about the clicked row">
  <div id="modal-content"></div>
  <mc-button slot="primaryAction" dialogaction="close">Close</mc-button>
</mc-modal>
```

#### DisableRowClickEvent

```html
<mc-table></mc-table>
<mc-modal heading="More information about the clicked row">
  <div id="modal-content"></div>
  <mc-button slot="primaryAction" dialogaction="close">Close</mc-button>
</mc-modal>
```

#### DynamicData

```html
<mc-table></mc-table>
<mc-button id="toggle-btn">Get random columns in table</mc-button>
<mc-button id="add-row-btn">Add extra row</mc-button>
```

#### ResetSortingOrSelection

```html
<mc-table select></mc-table>
<mc-button id="selectionButton">reset selection</mc-button>
<mc-button id="resetButton">reset sorting</mc-button>
```

#### EditableCells

```html
<mc-table></mc-table>
```

#### NewRowSlideInAnimation

```html
<mc-button onclick="addNewRow()">Add New Row</mc-button>
<mc-table></mc-table>
```

#### DraggableRows

```html
<mc-table></mc-table>
```

#### DraggableColumns

```html
<mc-table sortdisabled></mc-table>
```

#### RowWithContextMenu

```html
<mc-table id="myTable" sortdisabled></mc-table>
  
```

## API

### Properties and attributes

#### data

- **Type:** Array<Record<string, any>>
- **Typescript Type:** TableData
- **Default:** [object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]
- **Description:** An array of objects containing the data to be rendered by the table

#### columns

- **Type:** array
- **Typescript Type:** TableColumn[]
- **Default:** [object Object],[object Object],[object Object],[object Object],[object Object]
- **Description:** Find a `columns` API detail description in the <a href='/?path=/story/components-table-documentation-api--column-options'>Columns Documentation</a> story. An array of <a href='https://github.com/Maersk-Global/mds/blob/main/packages/mc-table/src/lib/types.ts#L359' target='_blank'>TableColumn</a> objects informing the table how to render columns and it's data cells. 

If no columns are passed, the table will infer columns from the first row of data.

#### datakey

- **Type:** string
- **Default:** id
- **Description:** The unique data key field name.

If not supplied the table will create a key field called "id"

#### labels

- **Type:** IMcTableLabels
- **Typescript Type:** Partial<IMcTableLabels> | undefined
- **Description:** Custom labels for mc-table component. By default labels are loaded in EN language. Check <a href="https://github.com/Maersk-Global/mds/blob/main/packages/mc-table/src/lib/translations.ts" target="_blank" rel="noopener noreferrer">types documentation</a> to see how to use custom labels property.

#### headerhidden

- **Type:** boolean
- **Default:** false
- **Description:** Hide the table header

#### headersticky

- **Type:** boolean
- **Default:** false
- **Description:** Make the header row "sticky"

#### headerstickyviewport

- **Type:** boolean
- **Default:** false
- **Description:** Attach the sticky header to the viewport instead of an inner scroll container.

#### headerstickyoffsetselector

- **Type:** text
- **Typescript Type:** string
- **Description:** CSS selector of an element whose height should be used as the sticky header offset. The table listens for size changes on that element.

#### footer

- **Type:** boolean
- **Default:** false
- **Description:** Show a table footer.

#### footersticky

- **Type:** boolean
- **Default:** false
- **Description:** Make the footer row "sticky"

#### caption

- **Type:** string | slot
- **Typescript Type:** string
- **Default:** A caption to describe the table below
- **Description:** The caption to describe the table can be passed as a property or as a slot

`<div slot="caption">This is a caption</div>`

#### fit

- **Type:** small | medium | large
- **Typescript Type:** Fit
- **Default:** medium
- **Description:** Controls the overall size of the component.

#### zebrastripes

- **Type:** boolean
- **Default:** false
- **Description:** Zebra stripes

#### outerborderstyle

- **Type:** dotted | dashed | solid | none
- **Typescript Type:** TableBorderStyle
- **Default:** solid
- **Description:** Style applied to outer border.

#### verticallinestyle

- **Type:** dotted | dashed | solid | none
- **Typescript Type:** TableBorderStyle
- **Default:** none
- **Description:** Border style applied to vertical lines.

#### horizontallinestyle

- **Type:** dotted | dashed | solid | none
- **Typescript Type:** TableBorderStyle
- **Default:** solid
- **Description:** Border style applied to horizontal lines.

#### disablerowhighlightonhover

- **Type:** boolean
- **Default:** false
- **Description:** Disable highlight a row on mouse hover

#### nowrap

- **Type:** boolean
- **Default:** false
- **Description:** Enforces a default "nowrap" on cells

#### verticalalign

- **Type:** top | middle | bottom
- **Typescript Type:** TableVerticalAlign | undefined
- **Default:** middle
- **Description:** Vertical alignment of cells

#### height

- **Type:** string
- **Default:** auto
- **Description:** Height

 The width is determined by the parent container.

#### disableoverflow

- **Type:** boolean
- **Default:** false
- **Description:** Disables the default overflow "hidden" of the table

#### stateslotheight

- **Type:** text
- **Typescript Type:** string
- **Default:** auto
- **Description:** Height of state slot in the table body

#### customstyles

- **Type:** string
- **Description:** Custom CSS styles that can be used to customize table rows etc.

#### disableroundedcorners

- **Type:** boolean
- **Default:** false
- **Description:** Disables rounded corners

#### disableplaceholderfooters

- **Type:** boolean
- **Default:** false
- **Description:** By default table will render "placeholder" footers for the select and expand columns. You can disable them by setting the "disableplaceholderfooters" attribute to true.

#### truncate

- **Type:** boolean
- **Default:** false
- **Description:** Column-level property: Set `truncate: true` on individual columns to truncate cell text with ellipsis. A tooltip will automatically display the full text on hover or focus. Look up story example for more details.

#### hidecolumns

- **Type:** array
- **Typescript Type:** string[]
- **Default:** 
- **Description:** Column Ids to hide.

#### sortdefaultcolumnid

- **Type:** string
- **Default:** capacity
- **Description:** Default sort column. Will default to the first column. If you wish to see it in effect in StoryBook, please set it and refresh the page.

#### sortdefaultdirection

- **Type:** ascending | descending
- **Typescript Type:** TableSortDirection
- **Default:** ascending
- **Description:** Default sort direction

values: `ascending` `descending`. If you wish to see it in effect in StoryBook, please set it and refresh the page.

#### sortdisabled

- **Type:** boolean
- **Default:** false
- **Description:** Disable sorting

#### sortmanual

- **Type:** boolean
- **Default:** false
- **Description:** Enables manual sorting for the table. If this is true, you will be expected to sort your data before it is passed to the table. This is useful if you are doing server-side sorting. Find an example in the <b>06-Sorting</b> under Examples.

#### sortdisableoninitialload

- **Type:** boolean
- **Default:** false
- **Description:** Disables sorting on the initial load of the table, so the data is shown in the same order as passed via. data prop. User is still able to see sorting (arrow) buttons, and manually trigger sorting on every column.

#### pagination

- **Type:** none | input | select
- **Typescript Type:** TablePagination
- **Default:** none
- **Description:** Enable integrated pagination controls below the table.

- `none` — no pagination (default)
- `input` — page number text input
- `select` — page number dropdown

**All `pagination*` props below are only active when this is set to `input` or `select`.** For completed story examples please go to Stories Examples.

#### paginationmode

- **Type:** static | dynamic
- **Typescript Type:** TablePaginationMode
- **Default:** static
- **Description:** Pagination mode. Only applies when `pagination` is `input` or `select`.

- `static` — pass the **full dataset** once via `table.data`; the table paginates it client-side automatically. `paginationtotalrecords` is **not needed** in this mode.
- `dynamic` — pass **one page of data** at a time. You must handle the `paginationpagechange` event, fetch the next page from your server, and update both `table.data` and `paginationcurrentpage` on each page change. Set `paginationtotalrecords` to the total record count so the table can calculate the number of pages.

#### paginationtotalrecords

- **Type:** number
- **Default:** 200
- **Description:** Total number of records across all pages. **Only required in `paginationmode="dynamic"` (server-side pagination).** In `static` mode the table calculates the page count from `data.length` — this prop is ignored. Used to calculate the total number of pages.

#### paginationcurrentpage

- **Type:** number
- **Default:** 1
- **Description:** The currently active page number (1-based). In `paginationmode="dynamic"`, update this programmatically after each server fetch to keep the pagination controls in sync with the data you just loaded.

#### paginationhidepagesize

- **Type:** boolean
- **Default:** false
- **Description:** If set to `true`, the select with options to pick number of items per page is hidden.

#### paginationpagesize

- **Type:** number
- **Default:** 10
- **Description:** The number of items to display per page. Based on this value and the `totalrecords` prop, the total number of pages will be calculated automatically. This is also the value that will be emitted in the `pagesizechange` event, and what is set as value in the page size select.

#### paginationpagesizeoptions

- **Type:** number[]
- **Typescript Type:** array
- **Default:** 10,20,50,100
- **Description:** Page size options, that have to be passed as an array of numbers.

#### paginationhidepagestatus

- **Type:** boolean
- **Default:** false
- **Description:** If set to `true`, hides the status text showing the current range of rows. For example: "1-10 of 80 rows".

#### paginationshowfirstandlastpage

- **Type:** boolean
- **Default:** false
- **Description:** If set to `true`, displays first and last navigation buttons (double chevrons).

#### paginationscrolltotop

- **Type:** boolean
- **Default:** false
- **Description:** Table will scroll to top left after page change.

#### paginationloading

- **Type:** boolean
- **Default:** false
- **Description:** When true, will show a loading indicator overlay on the table.

#### paginationalignment

- **Type:** start | end | center
- **Typescript Type:** TablePaginationAlignment
- **Default:** center
- **Description:** The alignment of the pagination. Is applied to only when page size and page status are hidden.

#### select

- **Type:** boolean
- **Default:** false
- **Description:** Show a row selector checkbox column

#### selected

- **Type:** Array<Record<string, any>> | string[]
- **Typescript Type:** TableData | string[]
- **Default:** 
- **Description:** Can be used to set selected rows programatically. Pass data objects that you want to select.

#### selectrowdisabled

- **Type:** array
- **Typescript Type:** (row: any) => boolean
- **Default:** 
- **Description:** Disables the selection of disabled rows

#### selectsticky

- **Type:** boolean
- **Default:** false
- **Description:** Make the row selector column "sticky"

#### expand

- **Type:** boolean
- **Default:** false
- **Description:** When true, will enable row expansion for provided slots, check the <b>07-Expansion</b> stories under Example for more.

#### expandopened

- **Type:** Array<Record<string, any>>
- **Typescript Type:** TableData
- **Default:** 
- **Description:** Can be used to set expanded rows programmatically. Pass data objects that you want to select.

#### expandpadding

- **Type:** default | none
- **Typescript Type:** RowExpansionPadding
- **Default:** default
- **Description:** Padding for expanded rows. `default` will apply the default padding, `none` will remove padding.

#### expandsticky

- **Type:** boolean
- **Default:** false
- **Description:** Make the row expansion column "sticky"

#### columnresize

- **Type:** boolean
- **Default:** false
- **Description:** Enable column resizing functionality.

### Events

#### columnresizestart

- **Type:** CustomEvent<IMcTableColumnResizeDetail>
- **Description:** Dispatched when user starts resizing a column.

#### columnresizing

- **Type:** CustomEvent<IMcTableColumnResizeDetail>
- **Description:** Dispatched continuously (animation frame throttled) while a column is being resized.

#### columnresizeend

- **Type:** CustomEvent<IMcTableColumnResizeDetail>
- **Description:** Dispatched when user ends resizing a column.

#### rowmouseenter

- **Type:** CustomEvent<unknown>
- **Description:** Dispatched when the cursor enters a row.

#### rowmouseleave

- **Type:** CustomEvent<unknown>
- **Description:** Dispatched when the cursor leaves a row.

#### hidecolumnschange

- **Type:** CustomEvent<string | undefined>
- **Description:** Dispatched when a column is hid/shown with the current hidecolumns state as detail.

#### rowclick

- **Type:** CustomEvent<IMcTableRowClickDetail>
- **Description:** Dispatched when a row is clicked.

#### sortchange

- **Type:** CustomEvent<IMcTableSortChangeDetail>
- **Description:** Dispatched when sorting direction on a column changes with a column id and direction as detail.

#### selectchange

- **Type:** CustomEvent<unknown[]>
- **Description:** Dispatched when a row is selected/deselected with the current selection state as detail.

#### expandchange

- **Type:** CustomEvent<unknown | undefined>
- **Description:** Dispatched when a row is expanded/collapsed with the current expansion state as detail.

#### paginationpagechange

- **Type:** CustomEvent<unknown | undefined>
- **Description:** Dispatched when the page changes (only when pagination is enabled) with the visible rows as detail.

#### paginationpagesizechange

- **Type:** CustomEvent<unknown | undefined>
- **Description:** Dispatched when the page size changes.

#### rowselected

- **Type:** CustomEvent<unknown>
- **Description:** Dispatched when a row is selected.

#### rowdeselected

- **Type:** CustomEvent<unknown>
- **Description:** Dispatched when a row is deselected.

#### rowexpanded

- **Type:** CustomEvent<unknown>
- **Description:** Dispatched when a row is expanded.

#### rowcollapsed

- **Type:** CustomEvent<unknown>
- **Description:** Dispatched when a row is collapsed.

### Types

- AriaSort: type
- CellTemplateDetails: interface
- ColumnSorter: type
- DataType: interface
- HeaderTemplateDetails: interface
- IMcTable: interface
- IMcTableColumnResizeDetail: interface
- IMcTableLabels: interface
- IMcTableRowClickDetail: interface
- IMcTableSortChangeDetail: interface
- RowExpansionPadding: type
- SpanConfig: interface
- StickyColumn: type
- TableBorderStyle: type
- TableCellAlignment: type
- TableCellVerticalAlign: type
- TableColumn: type
- TableData: type
- TablePagination: type
- TablePaginationAlignment: type
- TablePaginationMode: type
- TableSortDirection: type
- TableTemplateResult: type
- TableVerticalAlign: type
- UpdateParameters: interface

### Slots

#### {rowId}_{columnId}

- **Description:** Use the {rowId}_{columnId} named slot, when you want to pass other mc-components or your own custom components to the table cell.<br /> 
    The slot is meant to be used together with a loop function within mc-table tag (using i.e. array.map, v-for, *ngFor). 
    See the <a href="/?path=/story/components-table--using-slots">Using slots</a> story for implementation details and code examples. <br />
    The first parameter in the slot name {rowId} is a row id(the component will automatically try to access an `id` attribute, 
    you can change that by passing the `datakey` attribute), the second {columnId} is the id of the column where custom component should be rendered, i.e. 10_status, 11_status, 12_status, etc. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-table>
  <span slot="{rowId}_{columnId}">
    <mc-button>Update</mc-button>
  </span>
</mc-table>
```

#### caption

- **Description:** Use the caption named slot, A slot for a caption for the table.. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-table>
  <span slot="caption">
    caption
  </span>
</mc-table>
```

#### {columnId}_header

- **Description:** Use the {columnId}_header named slot, Header slot for a column with {columnId} as an `id` property.. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-table>
  <span slot="{columnId}_header">
    header
  </span>
</mc-table>
```

#### {columnId}_footer

- **Description:** Use the {columnId}_footer named slot, Footer slot for a column with {columnId} as an `id` property.. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-table>
  <span slot="{columnId}_footer">
    footer
  </span>
</mc-table>
```

#### {rowId}_expanded

- **Description:** Use the {rowId}_expanded named slot, Slot for an expandable row content.. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-table>
  <span slot="{rowId}_expanded">
    expand
  </span>
</mc-table>
```

#### state

- **Description:** Use the state named slot, Slot for displaying the state of the table, i.e. loading, empty, error, etc.. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-table>
  <span slot="state">
    <mc-loading-indicator label="loading"></mc-loading-indicator>
  </span>
</mc-table>
```

#### toolbar

- **Description:** Use the toolbar named slot, Slot for a default toolbar rendered above the table. Pass an <code>mc-toolbar</code> when you need toolbar layout with <code>start</code>, <code>center</code>, or <code>end</code> slots. Use it to place search fields, filters, column visibility toggles, or other table-level actions.. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-table>
  <span slot="toolbar">
    <mc-toolbar><div slot="start">Search</div><div slot="end">Filters</div></mc-toolbar>
  </span>
</mc-table>
```

#### toolbar-bulk-actions

- **Description:** Use the toolbar-bulk-actions named slot, Slot for a bulk action toolbar rendered above the table. Typically shown when one or more rows are selected. Use to place actions that operate on the current selection (e.g. delete, export, assign). Visibility and content are fully controlled by the consuming application.. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-table>
  <span slot="toolbar-bulk-actions">
    <div>Delete selected, Export…</div>
  </span>
</mc-table>
```

## CSS parts

#### pagination-navigation

- **Description:** Using this CSS part you can change the look of the container element inside the mc-pagination component where the main page navigation is located (buttons, select or input). Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-table::part(pagination-navigation) {
  background-color: #00897A;
  color: #AAEAE0;
}
```

#### pagination-pagesize

- **Description:** Using this CSS part you can change the look of the container where page size select is located (if enabled). Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-table::part(pagination-pagesize) {
  background-color: #00897A;
  color: #AAEAE0;
}
```

#### pagination-pagestatus

- **Description:** Using this CSS part you can change the look of the container where page status text is located (if enabled). Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-table::part(pagination-pagestatus) {
  background-color: #00897A;
  color: #AAEAE0;
}
```

## Related

- [Accessibility](https://designsystem.maersk.com/guidelines/accessibility/)
- [Modal](https://designsystem.maersk.com/components/modal/)
- [Monospaced numbers](https://designsystem.maersk.com/content/numbers/monospaced-numbers/)
- [Notification](https://designsystem.maersk.com/components/notification/)
- [Pagination](https://designsystem.maersk.com/components/pagination/)
- [Search, filter and sort](https://designsystem.maersk.com/guidelines/search-filter-and-sort/)
- [Table](https://designsystem.maersk.com/components/table/)
- [Tooltip](https://designsystem.maersk.com/components/tooltip/)
- [Truncation](https://designsystem.maersk.com/content/truncation/)

