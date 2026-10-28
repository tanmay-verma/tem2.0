# MDS Accessible Naming of props and attributes

Use the naming mechanism that matches the MDS API surface, not generic HTML instincts.

- Use visible `label` for form fields and other components that expose a visible label API
- Use component `arialabel` when an MDS component exposes it and you need an explicit accessible name or more descriptive screen reader text than the visible label
- Use raw `aria-label` on semantic HTML elements like `nav` when the element's purpose is not clear from nearby content and there is no MDS component API for naming
- Do not replace documented MDS props with raw HTML attributes when the component already exposes an accessibility prop

### Aria-label vs AriaLabel vs Title

Components that expose an `arialabel` prop are designed to pass that value to the correct ARIA attribute internally, whether it's `aria-label`, `aria-labelledby`, or something else. When a component has an `arialabel` prop, use it instead of adding a raw `aria-label` attribute to ensure the accessible name is applied correctly according to the component's implementation.

#### Examples of using `arialabel` in MDS components:

```html
<mc-loading-indicator label="Loading" arialabel="Loading vessels data"></mc-loading-indicator>

<mc-progress-indicator
  label="progress"
  arialabel="Completed loading 50% out of 100% vessels data"
></mc-progress-indicator>

<mc-pagination
  currentpage="2"
  totalrecords="100"
  pagesize="10"
  arialabel="Pagination navigation for vessel list, page 2 of 10"
></mc-pagination>

<mc-timeline arialabel="Shipment history">
  <mc-timeline-item heading="Booking created"></mc-timeline-item>
</mc-timeline>
```

#### Examples of using raw `aria-label` on semantic HTML when no MDS component API is available:

```html
<mc-list aria-label="Shipment milestones">
  <mc-list-item label="Booked"></mc-list-item>
</mc-list>

<mc-picker aria-label="Shipment filters">
  <mc-picker-item label="All shipments"></mc-picker-item>
</mc-picker>

<nav class="mds-breadcrumb" aria-label="page breadcrumb">
  <ol>
    <li><a href="#home">Home</a></li>
    <li>Current page</li>
  </ol>
</nav>

<nav class="mds-tree-nav" role="navigation" aria-label="side navigation">
  <ul>
    <li><a href="#overview">Overview</a></li>
  </ul>
</nav>
```

#### Examples of when to use title attributes:

```html
<mc-icon name="star" title="Saved to favorites"></mc-icon>
```
