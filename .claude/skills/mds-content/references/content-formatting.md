# Content Formatting Guidelines

Distilled from the MDS date/time, currency, number localisation, labels, and truncation UX documentation.

## Date & Time

Maersk uses the **British date format** and **24-hour clock**.

| Granularity            | Format                | Example                  |
| ---------------------- | --------------------- | ------------------------ |
| Date                   | D Month YYYY          | 4 March 2025             |
| Date + time            | D Month YYYY HH:MM    | 4 March 2025 14:45       |
| Date + time + timezone | D Month YYYY HH:MM TZ | 4 March 2025 14:45 CET   |
| Weekday + date         | Weekday, D Month YYYY | Friday, 24 February 2023 |

### Rules

- **No leading zero** on days: "4 March" not "04 March".
- **No comma** between month and year.
- **Capitalise** months, weekdays, and timezone abbreviations.
- Use 24-hour format to avoid AM/PM ambiguity.
- Add timezone when users span multiple zones.
- For relative timestamps ("30 minutes ago"), use when recency matters more than the exact time.

## Currency & Pricing

### Rules

- Use **ISO currency codes** (USD, EUR, HKD), not symbols ($, €).
- **Add a space** between code and amount: `USD 1,500.00` not `USD1,500.00`.
- Place ISO code **before** the amount by default (international standard).
- Place ISO code after the amount only for non-English locales where it reads more naturally (e.g. `15,00 EUR` in German).
- Be **consistent** within a page — don't mix placement.
- Maersk default: shipping prices in USD, local charges in local currency.

## Number Localisation

- Use `Intl.NumberFormat` to auto-format numbers based on the user's locale (handles decimal separators and digit grouping).
- Fallback: British (UK) English formatting if automation is not possible.
- For monospaced/tabular numbers in tables and financial data, use CSS class `mds-tabular-figures` or `mds-table__cell--number` — this ensures columns of numbers align vertically.

## Button Labels

- **Sentence case** — never ALL-CAPS.
- **Action verb + noun** — e.g. "Save booking", "Download report", "Delete item".
- **Task-specific** — avoid generic labels like "Submit", "OK", "Yes", "No".
- **Human language** — use words people naturally say, not technical/formal terms.
- Remove redundant words; a button should be understandable without surrounding content.

## Form Field Labels

- Describe **what** to enter, not **how** — avoid verbs like "Enter", "Add", "Input".
- No colon at the end of the label.
- Use `hint` prop for additional context when the label alone isn't enough.

## Truncation

- Truncate only when content overflows its container — prefer wrapping when possible.
- Replace truncated characters with an ellipsis (…).
- Provide `mc-tooltip` on hover to reveal the full text.
- Minimum 4 visible characters in a truncated string; ellipsis must represent ≥3 hidden characters.
- Choose truncation placement based on which part of the text is most unique:
  - **End** — default for most text (headlines, names).
  - **Middle** — for URLs and file names where start + end are distinctive.
  - **Start** — rare; only when the end is the unique part.
- **NEVER truncate**: navigation items, field labels, error messages, hint text, notifications.
