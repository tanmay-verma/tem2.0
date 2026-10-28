# Filter UX Guidelines

Distilled from the MDS search, filter and sort UX documentation.

## Exposed vs. hidden filters

| Strategy                                    | When to use                                            |
| ------------------------------------------- | ------------------------------------------------------ |
| All filters exposed                         | Few filters (≤5), all are frequently used              |
| Primary filters exposed, rest behind a menu | Several filters, clearly separable by frequency of use |
| All filters hidden behind a drawer/menu     | Rarely used filters, very dense UI                     |

- Use `mc-drawer` for a panel of hidden filters (opens from the side).
- Use a `mc-button` with a count badge (`mc-badge`) to indicate how many hidden filters are currently applied: "Filters (3)".
- **Always show applied filters in a visible "Applied filters" area** alongside their original placement so users can see what is active.

## Live vs. batch filtering

| Mode  | Trigger                                         | Use when                                     |
| ----- | ----------------------------------------------- | -------------------------------------------- |
| Live  | Filter applied on each selection change         | Result can be delivered in < 1 second        |
| Batch | Filters applied on "Apply filters" button click | Result takes > 1–2 seconds; always on mobile |

- For live filtering, use event listeners on individual filter components (`optionselected`, `change`).
- For batch filtering, provide an `mc-button` with `label="Apply filters"` at the end of the filter list.
- Mobile screens should default to batch filtering — multiple live updates on each selection feel janky.

## Applied filters display

- Highlight applied filters in **both** their original placement (checked/selected state) AND in a separate "Applied filters" section using `mc-tag` chips.
- Each `mc-tag` in the applied filters section should be dismissible (`withaction` prop) to allow removal of individual filters.
- Provide a "Clear all filters" `mc-button` (`appearance="neutral"`, `variant="plain"`) to reset to defaults.

## Filter ordering and labelling

- Group and order filters by importance and frequency of use — most-used filters first.
- Use clear, concise labels that match the user's language, not internal system terminology.
- Provide sensible default values based on common user patterns (reduces time-to-first-result).

## Toolbar placement

- Place filters in `mc-toolbar` above the data table or content list.
- Use `slot="start"` for filter controls and `slot="end"` for action buttons (Export, Add).

## Applied filters with mc-tag

```html
<!-- Applied filters row -->
<div class="mds-flex mds-flex-row mds-gap-200">
  <mc-tag appearance="neutral-weak" withaction>Status: Delayed</mc-tag>
  <mc-tag appearance="neutral-weak" withaction>Port: Rotterdam</mc-tag>
  <mc-button label="Clear all" appearance="neutral" variant="plain" fit="small"></mc-button>
</div>
```

## In-column header filters

For column-specific filters (e.g. filter a Status column by value), use the `{columnId}_header` slot with an `mc-popover` trigger:

```html
<mc-table>
  <div slot="status_header" style="display: flex; align-items: center; gap: 4px;">
    <span>Status</span>
    <mc-popover position="bottom-right" trigger="click">
      <mc-button
        slot="trigger"
        appearance="neutral"
        variant="plain"
        fit="small"
        hiddenlabel
        icon="funnel"
        label="Filter status"
        padding="compact"
      ></mc-button>
      <div style="padding: 12px;">
        <mc-checkbox-group legend="Status" hiddenlegend orientation="vertical" fit="small">
          <mc-checkbox label="On schedule" value="on-schedule"></mc-checkbox>
          <mc-checkbox label="Delayed" value="delayed"></mc-checkbox>
          <mc-checkbox label="Stalled" value="stalled"></mc-checkbox>
        </mc-checkbox-group>
      </div>
    </mc-popover>
  </div>
</mc-table>
```

Use `funnel-solid` icon when the column filter is currently active, `funnel` when inactive — this gives users visual feedback that a filter is applied.

## Common mistakes

| Mistake                                        | Fix                                                                     |
| ---------------------------------------------- | ----------------------------------------------------------------------- |
| No "Applied filters" section                   | Always show which filters are active, both inline and in a summary area |
| Same filters hidden at all times               | Show primary filters exposed; hide only rarely-used ones                |
| Live filtering when data takes 3s to load      | Use batch filtering — add an "Apply" button                             |
| No "Clear all" option                          | Always provide a way to reset all filters to defaults                   |
| Raw `<input>` / `<select>` for filter controls | Use `mc-input`, `mc-select`, `mc-date-range` inside `mc-toolbar`        |
| Filter panel using `mc-modal`                  | Use `mc-drawer` — modals are for decisions, drawers are for panels      |
