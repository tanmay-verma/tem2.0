# mc-pagination

Pagination splits large sets of content into manageable pages and provides navigation between them.

**Url:** https://designsystem.maersk.com/components/pagination/
**Alternative names:** Pagination Control, Page Navigator, Page Selector, Page Controller, Page Switcher
**Keywords:** component, navigation, data, table, row, search result, pagesize
**✅ When to use:** When you need to navigate through a set of paginated content.
**❌ When not to use:** When you have a single page of content or don't need pagination.

## Do's

- No specific do guidance documented.


## Don'ts

- No specific don't guidance documented.


## Cautions

- No specific caution guidance documented.


## Best practices

### Best practice
- Only split content/data across pages when there are more than 25 items.
- Use Button pagination for simple navigation between content pages, e.g. articles and search results.
- Use Select pagination for smaller data tables, e.g. 200 rows.
- Use Input pagination for large datasets, e.g. 2000 rows.
- In most cases, the pagination is placed directly below the content it controls.
- In some cases, it might also be valuable to place the pagination above the content it controls.

### Usage
- The pagination component comes in 3 variants – Button, Select and Input:
- Use Button pagination for navigating between content pages, such as articles and Search Results.
- Use Select pagination for smaller data tables, e.g. 200 rows.
- Use Input pagination for large data tables, e.g. 2000 rows.
- In some cases, the pagination component is not the most appropriate way of navigating large quantities of data. Sometimes simpler or more advanced controls can be applied depending on the user’s needs and the technical constraints. Read more about the pagination alternatives at the bottom of the page.

### Additional features
- Each pagination variant (button, select and input) comes with the possibility to show and hide additional features: pagesize, page status and first and last page buttons.
- Example: Anatomy of the additional features that come with each pagination variant.Page size: allows the user to select the number of items per page.Page status: show what range is currently displayed.First and Last page buttons allow the user to navigate to the start and end.

### Button pagination
- Use the Button pagination for simple navigation between content pages e.g. article page or search results. The Button Pagination is good for cases where the user does not need to find specific information, but rather just browse items or read in-depth articles.
- Example: The button pagination on a page with search results.

#### Truncation
- The Button pagination uses truncation by default to keep navigation simple and efficient. This approach ensures users can always navigate to the first and last page as well as view the total number of pages.
- Example: The button pagination with the default truncation.
- Truncation can be disabled in cases where it is unnecessary — such as in search results, where the total page count often adds little value.
- Example: Button pagination with truncation disabled.

#### Compact pagination
- In some cases, you might want to provide the user with a lighter way to navigate through content e.g. if you have a slideshow like the example below. In such cases, you can configure the pagination to only show the “previous” and “next” arrows.
- Example: A slideshow that uses a compact configuration of the pagination.

### Select pagination
- Select pagination works well in smaller tables, e.g. 200 rows. For large data tables use the Input Pagination, since it will provide an easier way for the user to jump to a specific page within in the dataset.
- Avoid using the Select pagination in large datasets. The larger the total number of pages becomes the more difficult it also becomes for the user to select the correct page in the select. In such cases use the Input Pagination.
- Example: Select pagination used in a smaller table.

### Input pagination
- Input pagination is similar to the Select Pagination, but offers a more effective way of jumping to a specific page within a large dataset, e.g. 2000 rows.
- Example: Input pagination used in a large data table.

#### Filter, sort & search
- If the users know what they are looking for, it may be worth saving them the hassle of browsing through multiple pages by allowing them to search, filter and sort through the data. You can read more in our Search, Filter and Sort Guidelines.

#### Infinite scroll
- The page content is dynamically added to the bottom of the page as the user scrolls to avoid overloading the server. However, this approach is generally discouraged due to the lack of user control and the inability to reach the bottom of the page.

#### Load more button
- Allow the users to load more results on demand without having to reload the entire page or dealing with a pagination control (which has been shown to discourage users from exploring past the first page). This approach is encouraged when users are browsing through items (explorative) rather than looking for a specific/known item (goal-oriented).
- Example: A load more button used for a page of cards.

## Usage & code examples

```bash
// General Setup (JS, VUE, Angular) 
npm install @maersk-global/mds-components-core-pagination
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-pagination
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-pagination';
// minimal example usage
<mc-pagination></mc-pagination>
// basic example usage
<mc-pagination></mc-pagination>
```

### Advanced Examples

#### Content

```html
<div class="news-container"></div>
```

#### TableWithSelect

```html
<div style="display: flex; flex-direction: column; gap: 16px; width: 100%;">
  <mc-table id="advanced-table" datakey="id"></mc-table>
  <mc-pagination id="advanced-pagination"></mc-pagination>
</div>
```

#### TableWithInput

```html
<div style="display: flex; flex-direction: column; gap: 16px; width: 100%;">
  <mc-table id="advanced-table" datakey="id"></mc-table>
  <mc-pagination id="advanced-pagination"></mc-pagination>
</div>
```

#### SlideShow

```html
<div class="slideshow-container">
  <img id="slide-image" class="slide-image" src="" alt="" />
  <mc-pagination></mc-pagination>
</div>
```

#### WithRouterLinks

```html
// PaginationRouter.vue
<template>
  <mc-pagination
    totalrecords="200"
    visiblepages="10"
    currentpage="$route && $route.params && $route.params.id ? +$route.params.id : 1"
  >
    <router-link
      :to="'/pagination-router/' + page"
      v-for="page in Array.from({ length: 20 }, (_, i) => i + 1)"
      :key="page"
      >{{ page }}</router-link
    >
  </mc-pagination>
</template>

<script lang="ts">
import '@maersk-global/mds-components-core-pagination';
export default {};
</script>

/// router
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import PaginationRouter from '../views/PaginationRouter.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/pagination-router/:id',
    name: 'PaginationRouter',
    component: PaginationRouter,
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;

```

#### CustomMobileView

```html
<mc-table id="advanced-table"></mc-table>
<mc-pagination
  id="advanced-pagination"
  variant="select"
  showpagesize
  showpagestatus
  totalrecords="600"
  pagesize="10"
></mc-pagination>
```

#### CustomLabels

```html
<mc-pagination
  id="withLang"
  totalrecords="110"
  showpagesize
  showpagestatus
  variant="select"
></mc-pagination>
```

## API

### Properties and attributes

#### argTypes_advanced

- **Type:** unknown
- **Typescript Type:** N/A
- **Description:** Description missing

#### argTypes_default

- **Type:** unknown
- **Typescript Type:** N/A
- **Description:** Description missing

### Events

#### pagesizechange

- **Type:** CustomEvent<number>
- **Description:** Emitted when the rows per page value is changed.

#### pagechange

- **Type:** CustomEvent<number>
- **Description:** Emitted when the page is changed.

### Types

- EllipsisVisibility: interface
- Fit: re-export
- IMcPagination: interface
- IMcPaginationLabels: interface
- NavButtonType: type
- PaginationVariant: type

### Slots

#### Default slot

- **Description:** The default slot for the router links

```html
<mc-component>Label</mc-component>
```

## CSS parts

#### navigation

- **Description:** Using this CSS part you can change the look of the container element inside the mc-pagination component where the main page navigation is located (buttons, select or input). Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-pagination::part(navigation) {
  background-color: #00897A;
  color: #AAEAE0;
}
```

#### pagesize

- **Description:** Using this CSS part you can change the look of the container where page size select is located (if enabled). Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-pagination::part(pagesize) {
  background-color: #00897A;
  color: #AAEAE0;
}
```

#### pagestatus

- **Description:** Using this CSS part you can change the look of the container where page status text is located (if enabled). Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-pagination::part(pagestatus) {
  background-color: #00897A;
  color: #AAEAE0;
}
```

## Related

- [Search, filter and sort](https://designsystem.maersk.com/guidelines/search-filter-and-sort/)

