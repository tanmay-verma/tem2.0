# UX Writing Guidelines

Distilled from the MDS tone of voice, numbers, date/time, and currency UX documentation.

## Tone of Voice

Maersk UX copy should be: **Human**, **Optimistic**, **Authentic**, **Ambitious**.

- Use plain, everyday language — avoid jargon and overly formal terms.
- Be concise and direct — remove unnecessary words.
- Be positive and action-oriented — focus on what users *can* do,  not what they can't.

## Relative Timestamps

Use relative timestamps when recency matters more than the exact time.

### Past events

| Elapsed | Display |
| --- | --- |
| < 1 minute | Now |
| 1–59 minutes | x minutes ago |
| 1 hour | 1 hour ago |
| 2+ hours | x hours ago |
| Previous calendar day | Yesterday |
| 2–6 days | x days ago |
| 7 days | 1 week ago |
| > 7 days | Datestamp (e.g. 20 Dec 2021) |

### Future events

| Until event | Display |
| --- | --- |
| < 1 minute | Now |
| 1 minute | In 1 minute |
| 2–59 minutes | In x minutes |
| 1 hour | In 1 hour |
| 2+ hours | In x hours |
| Next calendar day | Tomorrow |
| 2–6 days | In x days |
| 7 days | In 1 week |
| > 7 days | Datestamp (e.g. 12 Apr 2026) |

### Rules

- Always round **down** to the nearest whole unit (1 hour 50 minutes → "1 hour ago").
- Use relative timestamps when users expect the time to be in their own timezone.

## Date Abbreviations

When space is limited, use short month and day names:

- **Months:** Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec
- **Days:** Mon, Tue, Wed, Thu, Fri, Sat, Sun

## Number Formatting

### Digit grouping

- Split long number sequences into groups for readability.
- Credit card: `5471 3250 0192 1718` (groups of 4).
- Phone: `+1 (800) 322 8316` (follow local conventions).
- Use `Intl.NumberFormat` for locale-aware grouping.

### Units of measurement

- **Add a space** between value and unit: `1,000 kg` not `1,000kg`.
- **Lowercase** units: `kg`, `km`, `m³` (except standard exceptions like `°C`).
- **No period** after units: `2,000 kg` not `2,000 kg.`
- Use **superscript** for squared/cubed: m², m³.
- In input fields, use the `suffix` prop for units: `<mc-input suffix="kg">`.

### Monospaced / tabular figures

- Use `mds-tabular-figures` class on containers with numeric data that needs vertical alignment.
- Use `mds-table__cell--number` class on table cells with numeric values.
- Applies to: financial data, quantities, countdowns, dynamic numbers.

### Slashed zero

- Maersk font supports slashed zero for disambiguation.
- Use when zeros must be distinguished from the letter O (container IDs, reference numbers).
- CSS: `font-feature-settings: 'zero';`

## Date Input Guidelines

| Date type | Recommended component | Notes |
| --- | --- | --- |
| Picking a specific day | `mc-input-date` + `mc-calendar` | Calendar gives visual context |
| Date range | `mc-date-range` | Departure/arrival, reporting periods |
| Memorable date (birth, registration) | `mc-input-date` or `mc-input` | Allow keyboard entry — don't force calendar |
| Month + year only | `mc-month-year-picker` | Credit card expiry, report month |
| Relative date (last 30 days) | `mc-select` with relative options | "Last 7 days", "Last 30 days", "This year" |

### Rules

- Combine `mc-calendar` with `mc-input-date` so users can type OR pick.
- For memorable dates, prioritise keyboard input over calendar navigation.
- Disable dates that can't be selected to prevent invalid submissions.
