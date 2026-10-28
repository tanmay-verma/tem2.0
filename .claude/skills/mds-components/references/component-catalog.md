# MDS Components Catalog

Use this reference with the [mds-components skill](../SKILL.md) when you need the full catalog, React naming guidance, quick component selection help, or shared prop reminders.

## Tag-to-React Name Mapping

The catalog below uses web component tag names. Convert them to React names like this:

| Tag (web component)         | React Import                                                             | JSX Usage                    |
| --------------------------- | ------------------------------------------------------------------------ | ---------------------------- |
| `mc-button`                 | `import { McButton } from '@maersk-global/mds-react-wrapper/mc-button'`  | `<McButton />`               |
| `mc-typeahead-multi-select` | `import { McTypeaheadMultiSelect } from '.../mc-typeahead-multi-select'` | `<McTypeaheadMultiSelect />` |
| `mc-loading-indicator`      | `import { McLoadingIndicator } from '.../mc-loading-indicator'`          | `<McLoadingIndicator />`     |

Rule: drop the `mc-` prefix from the tag, convert kebab-case to PascalCase, prepend `Mc`. The import path keeps the original kebab-case tag name.

## Component Catalog

### Form Components

Components for building forms, collecting user input, displaying form-related feedback, creating filters and search interfaces, or any interactive elements related to data entry and selection.

| Need                    | Component                                            | Tag                                 | Alternative names (not to be used in code)              |
| ----------------------- | ---------------------------------------------------- | ----------------------------------- | ------------------------------------------------------- |
| Submit form             | Button                                               | `mc-button type="submit"`           | Submit Button                                           |
| Text input              | Input                                                | `mc-input`                          | Text Field                                              |
| E-mail input            | Input                                                | `mc-input type="email"`             | Email Field                                             |
| Password input          | Input                                                | `mc-input type="password"`          | Password Field                                          |
| Multi-line text         | Textarea                                             | `mc-textarea`                       | Text Area                                               |
| Dropdown (fixed list)   | Select                                               | `mc-select`                         | Select Dropdown                                         |
| Native select (mobile)  | Select Native                                        | `mc-select-native`                  | Native Dropdown                                         |
| Searchable dropdown     | Typeahead                                            | `mc-typeahead`                      | Searchable Select                                       |
| Multi-select searchable | Typeahead Multi Select                               | `mc-typeahead-multi-select`         | Searchable Multi-Select                                 |
| Select Option           | Option                                               | `mc-option`                         | Select Option                                           |
| Multi-select dropdown   | Multi Select                                         | `mc-multi-select`                   | Multi-Select Dropdown                                   |
| Checkbox                | Checkbox                                             | `mc-checkbox`                       | Single Checkbox                                         |
| Checkbox group          | Checkbox Group                                       | `mc-checkbox-group`                 | Group of Checkboxes                                     |
| Radio button            | Radio                                                | `mc-radio`                          | Single Radio Button                                     |
| Radio group             | Radio Group                                          | `mc-radio-group`                    | Group of Radio Buttons                                  |
| Toggle switch           | Switch                                               | `mc-switch`                         | Single Switch                                           |
| Switch group            | Switch Group                                         | `mc-switch-group`                   | Group of Switches                                       |
| Date input              | Input Date                                           | `mc-input-date`                     | Date Picker                                             |
| Time input              | Input Time                                           | `mc-input-time`                     | Time Picker, Time Selector                              |
| Date range              | Date Range                                           | `mc-date-range`                     | Date Range Picker                                       |
| File upload             | File upload                                          | `mc-file-upload`                    | File Uploader                                           |
| Calendar                | Calendar                                             | `mc-calendar`                       | Calendar Picker                                         |
| Time Selection          | Time Picker                                          | `mc-time-picker`                    | Time Selection                                          |
| Number stepper          | Number Stepper                                       | `mc-number-stepper`                 | Number Input                                            |
| Input group             | Input Group                                          | `mc-input-group`                    | Input with Addon                                        |
| Segmented control       | Segmented Control                                    | `mc-segmented-control`              | Segmented Button Group                                  |
| Segmented control item  | Segmented Control Item                               | `mc-segmented-control-item`         | Segmented Button                                        |
| Month year selector     | Month Year Picker                                    | `mc-month-year-picker`              | Month/Year Picker                                       |
| Picker                  | Picker                                               | `mc-picker`                         | Picker                                                  |
| Picker item             | Picker Item                                          | `mc-picker-item`                    | Picker Option                                           |
| Field label             | _(use `label` prop or `slot="label"` on form field)_ | _(built into every form component)_ | Label for form fields, not standalone component         |
| Validation error        | _(use `errormessage` prop or `slot="errormessage"`)_ | _(built into every form component)_ | Error message for form fields, not standalone component |
| Help text               | _(use `hint` prop or `slot="hint"`)_                 | _(built into every form component)_ | Hint text for form fields, not standalone component     |

### Action Components

| Need                  | Component         | Tag                    | Alternative names (not to be used in code)     |
| --------------------- | ----------------- | ---------------------- | ---------------------------------------------- |
| Button                | Button            | `mc-button`            | Standard Button, Action Button, Primary Button |
| Link styled as button | Link Button       | `mc-link-button`       | Secondary Button, Tertiary Button              |
| Button group          | Button Group      | `mc-button-group`      | Button Set, Button Collection                  |
| Button group Item     | Button Group Item | `mc-button-group-item` | Button Set Item, Button Collection Item        |
| Split button          | Split Button      | `mc-split-button`      | Dropdown Button, Action Split Button           |

### Overlay Components

| Need                       | Component | Tag          | Alternative names (not to be used in code) |
| -------------------------- | --------- | ------------ | ------------------------------------------ |
| Confirmation/action dialog | Dialog    | `mc-dialog`  | Confirmation Dialog, Action Dialog         |
| Rich content modal         | Modal     | `mc-modal`   | Content Modal, Information Modal           |
| Side panel                 | Drawer    | `mc-drawer`  | Side Drawer, Panel Drawer                  |
| Tooltip                    | Tooltip   | `mc-tooltip` | Info Tooltip, Help Tooltip                 |
| Popover (interactive)      | Popover   | `mc-popover` | Interactive Tooltip, Action Popover        |

### Navigation Components

| Need                   | Component                    | Tag                         | Alternative names (not to be used in code) |
| ---------------------- | ---------------------------- | --------------------------- | ------------------------------------------ |
| App header bar         | Top Bar                      | `mc-top-bar`                | Header Bar, Navigation Bar                 |
| Sidebar navigation     | Side Bar                     | `mc-side-bar`               | Sidebar, Navigation Sidebar                |
| Tab navigation         | Tab Bar                      | `mc-tab-bar`                | Tabs, Tab Navigation                       |
| Tab item               | Tab                          | `mc-tab`                    | Tab, Tab Item                              |
| Context menu           | Menu                         | `mc-menu`                   | Context Menu, Right-Click Menu             |
| Pagination             | Pagination                   | `mc-pagination`             | Pagination Controls, Page Navigation       |
| Segmented control      | Segmented Control            | `mc-segmented-control`      | View Switcher, Filter Control              |
| Segmented control item | Segmented Control Item       | `mc-segmented-control-item` | View Switcher Item, Filter Option          |
| Breadcrumb navigation  | No component, css class only | `mds-breadcrumb`            | Breadcrumbs, Breadcrumb Trail              |
| Link                   | No component, css class only | `mds-link`                  | Link, Hyperlink                            |
| Tree navigation        | No component, css class only | `mds-tree-nav`              | Tree Navigation, Nested Navigation         |

### Data Display Components

| Need           | Component                    | Tag                | Alternative names (not to be used in code) |
| -------------- | ---------------------------- | ------------------ | ------------------------------------------ |
| Data table     | Table                        | `mc-table`         | Data Table, Tabular Data, Data Grid        |
| List           | List                         | `mc-list`          | Data List, Item List                       |
| List item      | List Item                    | `mc-list-item`     | List Item, Data List Item                  |
| Picker         | Picker                       | `mc-picker`        | Picker, Item Picker                        |
| Picker item    | Picker Item                  | `mc-picker-item`   | Picker Item, Picker Option                 |
| Tag/chip       | Tag                          | `mc-tag`           | Tag, Chip, Label                           |
| Badge          | Badge                        | `mc-badge`         | Badge, Status Indicator                    |
| Avatar         | Avatar                       | `mc-avatar`        | Avatar, User Icon                          |
| Card container | Card                         | `mc-card`          | Card, Content Card                         |
| Icon           | Icon                         | `mc-icon`          | Icon, Symbol, Glyph                        |
| Text and icon  | Text And Icon                | `mc-text-and-icon` | Text with Icon, Icon with Text             |
| Pagination     | Pagination                   | `mc-pagination`    | Pagination Controls, Page Navigation       |
| Timeline       | Timeline                     | `mc-timeline`      | Timeline, Activity Timeline                |
| Timeline item  | Timeline Item                | `mc-timeline-item` | Timeline Item, Activity Item               |
| Basic list     | No component, css class only | `mds-list`         | Basic List, Unstyled List                  |
| Basic table    | No component, css class only | `mds-table`        | Basic Table, MDS Styled Simple Table       |

### Layout Components

Components that provide structural layout and grouping for content, forms, or other components.

| Need           | Component      | Tag                 | Alternative names (not to be used in code) |
| -------------- | -------------- | ------------------- | ------------------------------------------ |
| Card container | Card           | `mc-card`           | Card, Content Card                         |
| Accordion      | Accordion      | `mc-accordion`      | Accordion, Expandable Section              |
| Accordion item | Accordion Item | `mc-accordion-item` | Accordion Item, Expandable Item            |
| Toolbar        | Toolbar        | `mc-toolbar`        | Toolbar, Action Bar                        |

### Feedback Components

| Need                | Component          | Tag                     | Alternative names (not to be used in code)       |
| ------------------- | ------------------ | ----------------------- | ------------------------------------------------ |
| Inline notification | Notification       | `mc-notification`       | Notification, Alert, Message                     |
| Toast message       | Toast              | `mc-toast`              | Toast, Snackbar, Toast Notification              |
| Loading spinner     | Loading Indicator  | `mc-loading-indicator`  | Loading Spinner, Loading State Indicator         |
| Icon                | Icon               | `mc-icon`               | Icon, Status Icon, Feedback Icon                 |
| Progress bar        | Progress Indicator | `mc-progress-indicator` | Progress Bar, Progress Circle, Progress Feedback |

### Process Components

| Need                | Component           | Tag                      | Alternative names (not to be used in code)       |
| ------------------- | ------------------- | ------------------------ | ------------------------------------------------ |
| Step indicator      | Step Indicator      | `mc-step-indicator`      | Step Indicator, Progress Steps, Stepper          |
| Step indicator item | Step Indicator Item | `mc-step-indicator-item` | Step Indicator Item, Progress Step, Stepper Item |
| Timeline            | Timeline            | `mc-timeline`            | Timeline, Activity Timeline                      |
| Timeline item       | Timeline Item       | `mc-timeline-item`       | Timeline Item, Activity Item                     |

### Utility Components

| Need           | Component    | Tag               | Alternative names (not to be used in code) |
| -------------- | ------------ | ----------------- | ------------------------------------------ |
| Theme switcher | Theme Switch | `mc-theme-switch` | Theme Switcher, Dark Mode Toggle           |
| Code preview   | Code Preview | `mc-code-preview` | Code Preview, Code Example                 |

### CSS-Only Components

| Need                  | Class prefix     | Alternative names (not to be used in code)                  |
| --------------------- | ---------------- | ----------------------------------------------------------- |
| Breadcrumb navigation | `mds-breadcrumb` | Breadcrumb, Navigation Path                                 |
| Link styling          | `mds-link`       | Link, Hyperlink                                             |
| Basic list            | `mds-list`       | List, Unordered List, Ordered List                          |
| Basic table           | `mds-table`      | Table, Data Table                                           |
| Tree navigation       | `mds-tree-nav`   | Tree Navigation, Nested Navigation, Hierarchical Navigation |

### Internal MDS components

These components exist inside MDS but are not for direct use in application code. For form fields, use the built-in props or named slots instead:

- error messages: `errormessage` prop or `slot="errormessage"`
- hint text: `hint` prop or `slot="hint"`
- field label: `label` prop or `slot="label"`

| Tag                        | Why it is internal                                |
| -------------------------- | ------------------------------------------------- |
| `mc-error`                 | Used internally by form fields, do not use alone. |
| `mc-hint`                  | Used internally by form fields, do not use alone. |
| `mc-label`                 | Used internally by form fields, do not use alone. |
| `mc-multi-choice-fieldset` | Used internally by group components.              |

---

## Component Selection Quick Reference

This quick reference uses React names. For web component tag names, see the catalog above.

- **Need a dropdown?** Fixed list → `McSelect`. Searchable → `McTypeahead`. Multi-select → `McMultiSelect` or `McTypeaheadMultiSelect`. Mobile → `McSelectNative`.
- **Need a modal/popup?** Simple confirmation → `McDialog`. Rich content / form → `McModal`. Side panel → `McDrawer`. Hover-only info → `McTooltip`. Interactive overlay anchored to a trigger → `McPopover`.
- **Need text input?** Single line → `McInput`. Multi-line → `McTextarea`. Date → `McInputDate`. Time → `McInputTime`. Number → `McNumberStepper`.
- **Need a button?** Standard → `McButton` (use `appearance`, not `variant`). Link styled as button → `McLinkButton`. Group → `McButtonGroup`. With dropdown → `McSplitButton`.
- **Need navigation?** App header → `McTopBar`. Sidebar → `McSideBar`. Tabs → `McTabBar` + `McTab`. Context menu → `McMenu`. Pagination → `McPagination`.
- **Need feedback?** Persistent inline → `McNotification`. Temporary floating → `McToast`. Loading → `McLoadingIndicator`. Progress → `McProgressIndicator`.

---

## Common Shared Props

Many components share these props. Always confirm exact values per component in the per-component reference (`./references/mc-{name}.md`).

| Prop           | Typical Values                                                                         | Description                                                                                                               |
| -------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `fit`          | `'small' \| 'medium' \| 'large'`                                                       | Component size or density, the default is medium. Use the small fit only in very dense layout pages with a limited space. |
| `appearance`   | `'neutral' \| 'primary' \| 'secondary' \| 'error' \| 'success' \| 'warning' \| 'info'` | Color or semantic meaning. This is the correct prop for visual style on most components.                                  |
| `variant`      | component-specific (e.g. `'filled' \| 'outlined' \| 'plain'`)                          | Only use where the per-component reference explicitly defines it. Do not use `variant` to set color or semantic meaning.  |
| `disabled`     | `boolean`                                                                              | Disables interaction.                                                                                                     |
| `label`        | `string`                                                                               | Text label, also used for accessibility.                                                                                  |
| `icon`         | `string`                                                                               | Leading icon name. Verify via [mds-icons skill](../mds-icons/SKILL.md).                                                   |
| `loading`      | `boolean`                                                                              | Loading state.                                                                                                            |
| `invalid`      | `boolean`                                                                              | Validation error state.                                                                                                   |
| `errormessage` | `string`                                                                               | Error text shown when `invalid` is true.                                                                                  |
| `hint`         | `string`                                                                               | Help text below the field.                                                                                                |
