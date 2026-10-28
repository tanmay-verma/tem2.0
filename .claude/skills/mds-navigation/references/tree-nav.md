# Tree Navigation Reference

CSS-only pattern for hierarchical sidebar navigation. Always used inside `mc-side-bar`.

## CSS Classes

| Class | Applied to | Purpose |
| ----- | ---------- | ------- |
| `mds-tree-nav` | `<nav>` | Root class that activates tree nav styles |
| `mds-tree-nav__active` | `<a>` | Highlights the currently active link |
| `mds-tree-nav__external` | `<a>` | External link — adds an external-link icon automatically |
| `mds-tree-nav--separator` | `<li>` | Horizontal divider line between nav groups |

## Rules

- Always add `role="navigation"` and `aria-label` to the `<nav>` element
- Always pair `mds-tree-nav__active` with `aria-current="page"` on the same `<a>`
- Use `<details open>` on the group containing the active page so it is expanded by default
- Expandable groups use `<details>`/`<summary>` — no JavaScript needed for toggling

## Basic Example

```html
<nav class="mds-tree-nav" role="navigation" aria-label="Main navigation">
  <ul>
    <li><a href="/dashboard">Dashboard</a></li>
    <li><a href="/reports">Reports</a></li>
  </ul>
</nav>
```

## Full Example with Nesting, Active State, Separator and External Link

```html
<mc-side-bar>
  <nav class="mds-tree-nav" role="navigation" aria-label="Main navigation">
    <ul>
      <li>
        <details open>
          <summary>Shipments</summary>
          <ul>
            <li>
              <details>
                <summary>Ocean</summary>
                <ul>
                  <li><a href="/shipments/ocean/active" class="mds-tree-nav__active" aria-current="page">Active</a></li>
                  <li><a href="/shipments/ocean/completed">Completed</a></li>
                  <li><a href="/shipments/ocean/archived">Archived</a></li>
                </ul>
              </details>
            </li>
            <li><a href="/shipments/air">Air</a></li>
            <li><a href="/shipments/land">Land</a></li>
          </ul>
        </details>
      </li>
      <li><a href="/bookings">Bookings</a></li>
      <li><a href="/documents">Documents</a></li>
      <li class="mds-tree-nav--separator"></li>
      <li><a href="https://help.maersk.com" class="mds-tree-nav__external">Help centre</a></li>
    </ul>
  </nav>
</mc-side-bar>
```

## SPA Router Integration

When using a framework router, replace `<a href>` with the router's link component. The `mds-tree-nav__active` class and `aria-current` must still be applied dynamically based on the current route:

```html
<!-- Vue example -->
<li>
  <router-link
    to="/shipments"
    :class="{ 'mds-tree-nav__active': $route.path.startsWith('/shipments') }"
    :aria-current="$route.path.startsWith('/shipments') ? 'page' : undefined">
    Shipments
  </router-link>
</li>
```
