# Input Masks UX Guidelines

Distilled from the MDS input masks UX documentation.

## When to Use Input Masks

Use on `mc-input` fields that have a **specific expected format**:

- Container numbers
- Document reference numbers
- Phone numbers
- Postal codes
- Credit card numbers
- Date/time fields (when not using `mc-input-date` / `mc-input-time`)

Input masks format the value as the user types, grouping characters to match the user's mental model (e.g. credit card digits grouped in fours).

## When NOT to Use

- **No common pattern** — e.g. company names, free-text fields → use plain `mc-input`.
- **Too complex** — e.g. email addresses have too many valid formats; masking obstructs valid input.
- **Constant prefix/suffix** — e.g. "USD" before a price → use `mc-input` with `prefix` / `suffix` props instead of a mask.

## Communicating Expected Format

Combine these strategies based on context — don't rely on just one:

| Strategy | When | Implementation |
| --- | --- | --- |
| **Placeholder text** | Simple, well-known formats | `placeholder="XXXX XXXX XXXX XXXX"` on `mc-input` |
| **Hint text** | Complex or mixed-character formats | `hint="Format: ABCU 123456-7"` on `mc-input` |
| **Label** | Always | Describe **what** to enter, not **how** |
| **Input mask** | Specific formats only | Format/group characters as the user types |

- Placeholder disappears while typing — for complex formats, prefer `hint` which stays visible.
- Use a real example in the hint for mixed formats (letters + digits), e.g. `hint="e.g. MSKU 123456-7"`.

## Best Practices

- Combine label + placeholder + hint + mask to provide the right amount of guidance per use case.
- Do not impair copy/paste — masks should auto-format pasted values.
- Do not impair correction — users must be able to backspace and retype freely.
