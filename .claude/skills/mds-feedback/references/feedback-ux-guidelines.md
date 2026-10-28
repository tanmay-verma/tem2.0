# System Feedback UX Guidelines

Distilled from the MDS system feedback UX documentation. This file is the UX decision reference for the `mds-feedback` skill — it covers _when_, _where_, _what_, and _how_ to show feedback. The SKILL.md covers _which component_ and _how to code it_.

## Urgency → Component Mapping

| Urgency                                        | Component         | When                                                             |
| ---------------------------------------------- | ----------------- | ---------------------------------------------------------------- |
| High — requires immediate decision             | `mc-dialog`       | Confirmation before destructive or irreversible action           |
| Mid/High — important, persists until dismissed | `mc-notification` | System status, page-level alerts, data errors, failed operations |
| Low — transient, auto-dismisses                | `mc-toast`        | Save confirmation, copy-to-clipboard, background task done       |

**Rule:** If you are unsure between `mc-notification` and `mc-toast`, ask: _"Does the user need to acknowledge this before continuing?"_ Yes → `mc-notification`. No → `mc-toast`.

## Appearance Selection

Every `mc-notification` and `mc-toast` requires an `appearance` value. Use the table below to decide.

| Appearance     | Meaning                                 | Use when                                                       | Logistics examples                                                   |
| -------------- | --------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------------- |
| `success`      | Action completed, no issues             | Task finished, data saved, operation confirmed                 | Booking confirmed, document uploaded, shipment released              |
| `warning`      | Needs attention, not blocking           | Approaching a limit, partial success, potential issue detected | Vessel delay detected, customs clearance pending, rate expiring soon |
| `error`        | Action failed or is blocked             | Submission failed, resource not found, validation failed       | Booking failed, container not found, document rejected               |
| `info`         | Neutral information, no action required | System update, scheduled maintenance, status change            | New schedule published, system maintenance window tonight            |
| `neutral-weak` | Supplementary context, lowest priority  | Tip, suggestion, background context                            | "You can track this shipment from the dashboard"                     |

**Decision rule:** If in doubt between `warning` and `error`, ask: _"Can the user still proceed with their task?"_ Yes → `warning`. No → `error`.

**NEVER:**

- Use `success` for partial failures ("3 of 5 bookings failed" is `warning` or `error`, not `success`)
- Use `info` when user action is required (that is `warning`)
- Default to `neutral-weak` because you are unsure — pick the most accurate urgency level

## Content Structure

Feedback messages have two parts: **heading** and **body**. Both must be intentional.

### Heading (what happened)

- Maximum ~5 words
- State the outcome, not the process: "Booking confirmed" not "Your booking has been successfully processed"
- Use sentence case (capitalise first word only)
- No punctuation at the end

### Body (why + what to do next)

- 1–2 sentences maximum
- First sentence: explain _why_ this happened (if not obvious from the heading)
- Second sentence: tell the user _what to do next_ — a recovery action for errors, a next step for success
- For errors: ALWAYS include a next step ("Try again", "Check your connection", "Contact support")
- For success: the body is optional if the heading is self-explanatory

### Tone rules

- Use active voice: "Your booking was confirmed" not "Booking confirmation has been processed by the system"
- Don't blame the user: "The email format is invalid" not "You entered an invalid email"
- Don't expose technical details: no error codes, API responses, or stack traces in user-facing messages
- Be specific: "Container MSKU1234567 not found" is better than "An error occurred"
- Keep it human: avoid jargon that the end-user wouldn't know, unless the audience is domain experts (e.g., freight forwarders understand "B/L" but a casual shipper might not)

### Examples

| Appearance | Heading               | Body                                                                                     |
| ---------- | --------------------- | ---------------------------------------------------------------------------------------- |
| `success`  | Booking confirmed     | Booking BK-12345 is now confirmed. You can track it from your dashboard.                 |
| `error`    | Upload failed         | The file exceeds the 10 MB limit. Compress it or choose a smaller file.                  |
| `warning`  | Vessel delay detected | MV Maersk Seletar departure delayed by 48 hours. Downstream ETAs are being recalculated. |
| `info`     | Schedule updated      | The Asia–Europe TP6 schedule for Q3 has been published.                                  |
| `success`  | Shipment released     | — _(no body needed, heading is self-explanatory)_                                        |
| `error`    | Container not found   | Container MSKU1234567 could not be located. Verify the number and try again.             |

## Trigger Type

### Task-triggered feedback

- Response to a user action (button click, form submit, file upload, drag-and-drop).
- Must appear in close proximity to the triggering interaction area.
- **Use `mc-toast`** — the immediate, self-dismissing nature matches the quick feedback loop.
- Do NOT use `mc-toast` for system-level or persistent information.

### System-triggered feedback

- Initiated automatically by the system (server connection lost, session timeout, data staleness, async job completion).
- May appear when the user is idle — cannot auto-dismiss because the user might not be watching.
- **Use `mc-notification`** — it persists until dismissed, ensuring the user sees it.
- Do NOT use `mc-toast` — it will disappear before an idle user notices it.

### Edge case: async operations started by the user

Some actions are task-triggered but complete asynchronously (e.g., user clicks "Book" → booking takes 30 seconds → result arrives later).

- **Start of operation:** Show `mc-loading-indicator` or button `loading` state (task-triggered, synchronous feedback).
- **Completion:** If the user is still on the same page, use `mc-toast`. If the user may have navigated away, use `mc-notification` (treated as system-triggered because the user's attention has moved).

## Feedback Lifecycle

Feedback rarely exists in isolation. Most user flows involve a **sequence** of feedback states. The AI must generate the full sequence, not just a single component.

### Common sequences

| Flow                                    | Step 1                   | Step 2 (success)                                | Step 2 (failure)                                            |
| --------------------------------------- | ------------------------ | ----------------------------------------------- | ----------------------------------------------------------- |
| Form submission                         | Button `loading` state   | `mc-toast` success                              | `mc-notification` error (above form actions)                |
| File upload                             | `mc-progress-indicator`  | `mc-toast` success                              | `mc-notification` error                                     |
| Async operation (e.g., booking)         | `mc-loading-indicator`   | `mc-toast` success                              | `mc-notification` error                                     |
| Destructive action                      | `mc-dialog` confirmation | `mc-toast` success (e.g., "Shipment cancelled") | `mc-notification` error                                     |
| Bulk action (e.g., multi-select delete) | Button `loading` state   | `mc-toast` summary ("5 items deleted")          | `mc-notification` error summary ("3 of 5 deletions failed") |

### Transition rules

- **Remove the loading state before showing the result.** Never display a spinner and a success/error notification simultaneously.
- **Error after dialog:** If a dialog-confirmed action fails, show the error as an `mc-notification` on the underlying page — not inside a new dialog.
- **Progress → result:** When `mc-progress-indicator` reaches 100%, remove it, then show the result toast/notification.

## Frequency

- Only show feedback when the user **needs** the information.
- Lower frequency = higher chance users actually read and process the message.

### Show success feedback for

- Form submissions (booking, registration, settings saved)
- Completed transactions (payment processed, shipment booked)
- File uploads and document submissions
- Bulk actions (with summary count)
- Destructive actions (confirmation that it happened: "Shipment cancelled")
- Copy-to-clipboard actions

### Do NOT show success feedback for

- Toggling a switch or checkbox (the visual change is the feedback)
- Selecting a dropdown value
- Navigating between pages or tabs
- Sorting or filtering a table
- Expanding or collapsing an accordion or section
- Opening or closing a drawer/modal (the overlay itself is the feedback)

### Batching rules

- If an action produces 3+ individual results (e.g., bulk delete, multi-booking), show **one summary notification**, not one per item: "5 bookings confirmed" not 5 separate toasts.
- If a mix of success and failure occurs, show a summary with counts: "3 bookings confirmed, 2 failed" using `warning` appearance.

### Deduplication

- If the same notification is already visible, do not fire a duplicate.
- If the user repeats an action that triggers the same toast, the existing toast should be refreshed (timer reset), not stacked.

## Placement

Placement must be **consistent throughout the entire application**. Do not change positions between pages.

### Toast (`mc-toast`)

- Always in the same viewport position across the whole app.
- Recommended: top-center (if the app has a prominent top bar) or bottom-center (if the primary action area is near the bottom).
- Never position toasts differently on different pages.
- Toasts stack vertically when multiple are present (managed by MDS).

### Notification — page-level (`mc-notification`)

- Directly below the page header, above the main content area.
- In document flow (not floating or absolutely positioned).
- Full width of the content area.

### Notification — section-level (`mc-notification`)

- At the top of the relevant section or card, inside the container it relates to.
- E.g., an error in a "Shipping details" card appears at the top of that card, not at the page level.

### Notification — form-level (`mc-notification`)

- Above the form's action buttons, below the last field.
- Use for: form submission result, or a summary of validation errors ("3 fields need attention").

### Dialog (`mc-dialog`)

- Always centered, always modal (blocks background interaction).
- Never reposition or resize dialogs.

### Field-level errors

- Always directly below the field they belong to.
- Handled automatically by the `errormessage` prop on MDS form components — no manual placement needed.

### Prominent placement for high-urgency feedback

- Use prominent, potentially disruptive placement only for high-urgency items: cookie consent, destructive action confirmation, session expiry warning.
- Do not use prominent/blocking placement for routine success messages.

## Actions Inside Feedback

### When to include actions

- Only when there is a clear, immediate next step: Retry, Undo, View details, Dismiss.
- If the next step is complex (e.g., "edit the form"), don't put a button in the notification — the user is already on the form.

### Maximum actions

- **Toast:** 1 action maximum (e.g., "Undo"). Toasts are transient — complex choices don't fit the time constraint.
- **Notification:** 1–2 actions maximum. If more are needed, link to a detail page instead.
- **Dialog:** 1 primary + 1 secondary action (e.g., "Delete" + "Cancel"). Use the `primaryAction` and `secondaryAction` slots.

### Button style in notifications

- Use `neutral` appearance for actions inside notifications. Never use `primary` appearance — it competes with page-level primary actions.
- Keep action labels short: "Retry", "Undo", "View details" — not "Click here to retry the operation".

### Placement within notification

- Actions below the body text, left-aligned.
- Do NOT push actions to the far right on wide screens — they become visually disconnected from the message.

## Accessibility

All rules below are specific to feedback components. For general MDS accessibility rules, see the `mds-a11y` skill.

### Announcements

- **Error** notifications must be announced immediately to screen readers. MDS uses `role="alert"` for errors (interrupts the screen reader).
- **Success/info/warning** notifications use `role="status"` (polite announcement — waits for the screen reader to finish current speech).
- Never override these roles on MDS feedback components.

### Auto-dismissing toasts

- Must remain visible long enough to be read. MDS default duration handles this.
- If customising duration: minimum 5 seconds, +1 second per 120 characters of content.
- Users must be able to pause or dismiss toasts manually (hover/focus pauses in MDS).

### Don't rely on colour alone

- Every appearance (`success`, `error`, `warning`, `info`) must be distinguishable by icon + text, not just colour. MDS components include appropriate icons by default — never hide or override them.

### Keyboard

- Notifications with a dismiss button must be reachable via Tab key.
- Toasts must be dismissable without a mouse.
- After a dialog closes, focus must return to the element that triggered it. MDS handles this automatically — do not override focus management.

### Motion

- Respect `prefers-reduced-motion`. Do not add custom entry/exit animations to feedback components.

## Common Mistakes

UX-level mistakes in component choice, placement, and content. For code-level mistakes (wrong tags, wrong props, wrong styling), see the Hard Constraints section in SKILL.md.

| Mistake                                                 | Fix                                                                           |
| ------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `mc-toast` for persistent system status                 | Use `mc-notification` — toast auto-dismisses and will be missed by idle users |
| `mc-notification` for save confirmation                 | Use `mc-toast` — save confirmation is transient, task-triggered feedback      |
| Different toast positions on different pages            | Keep placement consistent across the entire app (see Placement section)       |
| Showing success toast on every click                    | Only show success feedback for key task completions (see Frequency section)   |
| Using `info` appearance when user action is required    | Use `warning` — `info` means no action needed                                 |
| Generic error message ("Something went wrong")          | Be specific and include a recovery action (see Content Structure section)     |
| Showing spinner and success notification simultaneously | Remove loading state before showing result (see Feedback Lifecycle section)   |
