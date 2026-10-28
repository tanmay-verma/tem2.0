# Form UX Guidelines

Distilled from the MDS UX documentation. Apply these rules whenever building or reviewing a form.

## Only ask what is necessary

- Remove any field where you cannot justify: why you need it, what you will do with it, who needs to provide it.
- Shorter forms are easier and faster to complete — every extra field has a cost.

## Labels

- Use natural language. Avoid jargon.
- Maintain consistent capitalisation throughout a form.
- **Only mark optional fields** — never mark required fields with an asterisk or "required" label.
  - Exception: if only a few fields are optional in a long form, mark those as "(optional)" on the label line.
  - If all fields are required, use no markers at all.

## Layout

- **Default to 1-column layout.** Multi-column forms scatter the scan line and slow completion.
- Only place fields side-by-side when they form a natural compound (e.g. First Name + Last Name, Day/Month/Year of a date).
- Use `<fieldset>` + `<legend>` to group related fields — or use `mc-checkbox-group`, `mc-radio-group`, `mc-switch-group` which do this automatically.
- Use section headings (`mds-headline`) to signal a new group of fields.
- Place form actions (`mc-button` row) at the bottom of the form.

## Field width

- Match field width to the expected answer length: short for postal codes and names, long for email addresses and street addresses.
- **Do not** set all fields to the same width — width provides affordance about expected input.

## Label positioning

- Top-positioned labels are the default and the recommendation. They:
  - Require only a single eye movement (label → field)
  - Work across all screen sizes
  - Handle long label text without wrapping issues
- Left-positioned labels are available via the `labelposition` prop but should be avoided in most cases.

## Button hierarchy

Use `appearance` + `variant` to establish visual hierarchy:

| Action role                | `appearance` | `variant`  | When                              |
| -------------------------- | ------------ | ---------- | --------------------------------- |
| Primary (Submit, Next)     | `primary`    | `filled`   | Always one per form section       |
| Secondary (Back, Cancel)   | `neutral`    | `outlined` | Less important, but still visible |
| Tertiary (optional action) | `neutral`    | `plain`    | Least prominent                   |

- Align the primary action to the **left**, flush with the form fields.
- Place the secondary action immediately to the right of the primary.
- **Never hide or disable the primary action** — show it at all times; only disable after submission to prevent duplicate submits.
- **Never use `<button>` or `<a>` tags** for form actions — always use `mc-button`.

## Validation and errors

- Show errors as close as possible to where the problem occurred — use `invalid` + `errormessage` on the MDS field component.
- For long forms, optionally add an error summary at the top (additional, not a replacement for inline errors).
- **Timing:** do not trigger inline validation while the user is still typing. Validate on blur or on submit.
  - Premature errors cause confusion and make users feel accused.
- **Tone:** error messages must be kind, helpful, and non-accusatory.
  - ✅ "Please enter a valid email address."
  - ❌ "Invalid email."
  - ✅ "Sorry, the document couldn't be uploaded. Please try again."
  - ❌ "Upload failed."
- Describe both **what went wrong** and **how to fix it**.
- Avoid generic messages like "An error has occurred." — always specify what happened.
- Never use error codes or Maersk-internal jargon in user-facing messages.

## Success feedback

- Always show a success state after successful form submission — never a dead-end.
- Use `mc-notification` with `appearance="success"` at the top of the page, or `mc-toast` for transient confirmation.
- Provide clear next steps on the confirmation.

## Disabled vs. readonly

- **Disabled** (`disabled` prop): user cannot interact, field is not focusable, value is not submitted, and screen readers skip it.
  - Use only for temporary states (e.g. system dependency not yet met).
  - Do not disable the submit button by default — only disable it after the user has clicked it.
- **Readonly** (`readonly` prop): user can see and copy the value but not edit. It IS focusable and IS read by screen readers and IS submitted in a form.
  - Use for settings the user has no permission to change.
- **Never use disabled as a default state** — fields in an enabled state let users get their job done.

## Help text

- Use the `hint` prop on the field component for supplementary instructions visible at all times.
- Provide help text when: the field uses unfamiliar terms, users may question why the info is needed, or users need to know where to find the information.
- Keep help text minimal — do not make the form more complex by over-explaining.

## Vanity variant

- The `vanity` variant (underline-only, no box) is available on inputs and selects.
- **Only use for very short forms (2 fields maximum)**, e.g. action cards with an inline edit.
- Use the default boxed variant for all standard forms.

## Selection-dependent (conditional) inputs

- When one field reveals additional fields based on its value:
  - Use **radio buttons** (`mc-radio-group`) if 2–3 conditional options per choice.
  - Use **select** (`mc-select`) if more than 3 conditional options — and visually group the dependent fields so their relationship is clear.
- Minimise layout "jumps" when revealing/hiding conditional fields — sudden movement disorients users, especially on mobile.

## Common mistakes

| Mistake                                     | Fix                                                            |
| ------------------------------------------- | -------------------------------------------------------------- |
| Marking all required fields with `*`        | Mark only optional fields with `(optional)`                    |
| 2-column layout for unrelated fields        | Use 1-column; only group naturally related fields side-by-side |
| All fields the same width                   | Adjust width to expected input length                          |
| Validation error shown while typing         | Validate on blur or submit, not on `input` event               |
| Generic error: "An error occurred"          | Describe what failed and how to resolve it                     |
| Disabled submit button by default           | Show enabled submit; disable only after first click            |
| Custom `<button>` or `<a>` for form actions | Use `mc-button` with correct `appearance` and `variant`        |
| `mc-notification` for transient confirm     | Use `mc-toast` for transient; `mc-notification` for persistent |
