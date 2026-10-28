---
name: mds-feedback
description: 'Add notifications, toasts, and loading states with MDS components. Use for: notification, toast, alert, error message, success message, warning, loading, spinner, progress bar, loading indicator, progress indicator, feedback, status message, validation error, inline error.'
related-skills: ['mds-components', 'mds-form', 'mds-overlays', 'mds-a11y']
related-components: ['mc-notification', 'mc-toast', 'mc-loading-indicator', 'mc-progress-indicator', 'mc-dialog']
---

# Add Feedback & Status with MDS Components

## When to Use

- Showing success/error/warning messages after an action
- Displaying temporary toast notifications
- Showing loading states during data fetching
- Displaying progress for long-running operations
- Inline validation errors on form fields
- Confirming destructive or irreversible actions

## Decision Table

### Is this a form field error?

If feedback is about a specific form field → use `errormessage` + `invalid` on the field. Not a notification or toast. See [Procedure → Form Validation Errors](#5-form-validation-errors).

### Is something loading or in progress?

| Situation                                      | Component          | Tag                     |
| ---------------------------------------------- | ------------------ | ----------------------- |
| Page or section is loading                     | Loading Indicator  | `mc-loading-indicator`  |
| Button action is in progress                   | Button loading     | `<mc-button loading>`   |
| Determinate progress (file upload, multi-step) | Progress Indicator | `mc-progress-indicator` |

### Does the user need to make a decision before continuing?

If feedback **blocks the user** and requires a choice → use `mc-dialog`. See `mds-overlays` skill.

### Notification or toast?

| Need                                           | Component    | Tag               |
| ---------------------------------------------- | ------------ | ----------------- |
| Task-triggered, transient (user did something) | Toast        | `mc-toast`        |
| System-triggered or requires acknowledgement   | Notification | `mc-notification` |

**Rule:** Can the user miss this if they look away for a moment? Yes → `mc-notification`. No → `mc-toast`.

### Pick appearance

| Appearance     | When                                    |
| -------------- | --------------------------------------- |
| `success`      | Action completed, no issues             |
| `warning`      | Needs attention, user can still proceed |
| `error`        | Action failed or is blocked             |
| `info`         | Neutral information, no action required |
| `neutral-weak` | Supplementary context, lowest priority  |

**Rule:** Unsure between `warning` and `error`? Can the user still proceed? Yes → `warning`. No → `error`.

See [Feedback UX guidelines → Appearance Selection](./references/feedback-ux-guidelines.md#appearance-selection) for full rules and logistics examples.

## When NOT to Use

- Confirmation before a destructive or irreversible action → use `mc-dialog` (`mds-overlays` skill)
- Components that do not exist in MDS: `mc-alert`, `mc-banner`, `mc-snackbar` — never use these
- Browser-native dialogs: `window.alert()`, `window.confirm()` — never use these
- Custom-built toast or notification systems when MDS components cover the need
- Standalone `<mc-error>`, `<mc-hint>`, or `<mc-label>` elements — use the form field's built-in props

## Procedure

### 1. Get Component API

Check [mds-components skill](../mds-components/SKILL.md) for the latest props, events, slots, and code examples before generating code.

### 2. Notification

```html
<!-- Success -->
<mc-notification
  appearance="success"
  heading="Booking confirmed"
  body="Booking BK-12345 is now confirmed. You can track it from your dashboard."
></mc-notification>

<!-- Error -->
<mc-notification
  appearance="error"
  heading="Upload failed"
  body="The file exceeds the 10 MB limit. Compress it or choose a smaller file."
></mc-notification>

<!-- With action button -->
<mc-notification appearance="error" heading="Upload failed" body="The file exceeds the 10 MB limit.">
  <mc-button slot="action" appearance="neutral" variant="outlined" label="Retry"></mc-button>
</mc-notification>
```

See [Feedback UX guidelines → Actions Inside Feedback](./references/feedback-ux-guidelines.md#actions-inside-feedback) for rules on when and how to include action buttons.

### 3. Toast

```html
<mc-toast appearance="success" open>
  <mc-notification body="Settings saved"></mc-notification>
</mc-toast>
```

Place `mc-notification` inside the default slot. Show by setting `open` to `true`. Toasts stack automatically — avoid firing more than 3 in rapid succession; batch into a summary instead.

### 4. Loading States

```html
<!-- Full-page or section loading -->
<mc-loading-indicator label="Loading shipment data..."></mc-loading-indicator>

<!-- Button loading (during form submission) -->
<mc-button label="Submit booking" appearance="primary" loading></mc-button>

<!-- Determinate progress (file upload) -->
<mc-progress-indicator value="65" label="Uploading document..."></mc-progress-indicator>
```

`label` is required on `mc-loading-indicator` for accessibility.

### 5. Form Validation Errors

```html
<mc-input label="Email" type="email" invalid errormessage="Please enter a valid email address"></mc-input>
<mc-select label="Port of loading" invalid errormessage="Port of loading is required"></mc-select>
```

When a form submission fails with multiple invalid fields:

1. Set `invalid` + `errormessage` on each invalid field
2. Show a page-level `mc-notification` with `error` appearance summarising the problem (e.g., "3 fields need attention") above the form action buttons

### 6. Feedback Sequences

Always generate the **full sequence**, not just one component. Remove the loading state before showing the result — never show a spinner and a result notification simultaneously.

| Flow               | Loading state                  | Success            | Failure                                    |
| ------------------ | ------------------------------ | ------------------ | ------------------------------------------ |
| Form submission    | Button `loading`               | `mc-toast` success | `mc-notification` error above form actions |
| File upload        | `mc-progress-indicator`        | `mc-toast` success | `mc-notification` error                    |
| Async operation    | `mc-loading-indicator`         | `mc-toast` success | `mc-notification` error                    |
| Destructive action | `mc-dialog` → button `loading` | `mc-toast` success | `mc-notification` error                    |

See [Feedback UX guidelines → Feedback Lifecycle](./references/feedback-ux-guidelines.md#feedback-lifecycle) for all sequences and transition rules.

### 7. Status Text Without a Component

For inline coloured text outside a notification, use MDS CSS classes:

| Need              | CSS class                       |
| ----------------- | ------------------------------- |
| Error text        | `mds-error__text-color`         |
| Warning text      | `mds-warning__text-color`       |
| Success text      | `mds-success__text-color`       |
| Hint / muted text | `mds-neutral--weak__text-color` |

```html
<span class="mds-error__text-color">3 containers overdue</span>
```

## Hard Constraints

### ❌ Custom styled status div vs ✅ mc-notification

```html
<!-- ❌ -->
<div class="success-message" style="background-color: ...; color: ...; padding: 16px;">
  The booking was submitted successfully
</div>

<!-- ✅ -->
<mc-notification
  appearance="success"
  heading="Booking confirmed"
  body="Booking BK-12345 is now confirmed."
></mc-notification>
```

### ❌ Standalone mc-error vs ✅ field errormessage

```html
<!-- ❌ -->
<mc-label for="email">Email</mc-label>
<mc-input id="email" type="email"></mc-input>
<mc-error>Please enter a valid email</mc-error>

<!-- ✅ -->
<mc-input label="Email" type="email" invalid errormessage="Please enter a valid email"></mc-input>
```

### ❌ mc-notification for transient feedback vs ✅ mc-toast

```html
<!-- ❌ -->
<mc-notification appearance="success" heading="Settings saved" body="Settings saved successfully."></mc-notification>

<!-- ✅ -->
<mc-toast appearance="success" open>
  <mc-notification body="Settings saved"></mc-notification>
</mc-toast>
```

### ❌ Spinner and result simultaneously vs ✅ one state at a time

```html
<!-- ❌ -->
<mc-loading-indicator label="Loading..."></mc-loading-indicator>
<mc-notification appearance="success" heading="Data loaded" body="All records retrieved."></mc-notification>

<!-- ✅ while loading: -->
<mc-loading-indicator label="Loading shipment data..."></mc-loading-indicator>
<!-- ✅ after loading completes (indicator removed): -->
<mc-toast appearance="success" open>
  <mc-notification body="Shipment data loaded"></mc-notification>
</mc-toast>
```

### ❌ Generic error vs ✅ specific with recovery action

```html
<!-- ❌ -->
<mc-notification appearance="error" heading="Error" body="Something went wrong."></mc-notification>

<!-- ✅ -->
<mc-notification
  appearance="error"
  heading="Upload failed"
  body="The file exceeds the 10 MB limit. Compress it or choose a smaller file."
></mc-notification>
```

### Absolute rules

- **NEVER** hardcode colours for status (`color: red`, `background: #e8f5e9`) — use `mc-notification` with `appearance`, or MDS colour classes
- **NEVER** override MDS feedback component icons — they ensure accessibility without relying on colour alone
- **NEVER** show `errormessage` without also setting `invalid` to `true`
- **NEVER** expose technical details (error codes, stack traces, API responses) in user-facing messages
- **NEVER** omit `label` on `mc-loading-indicator` — required for accessibility

## Common Mistakes

- Using `mc-toast` for persistent, system-triggered status — toast auto-dismisses and will be missed by idle users
- Using `mc-notification` for transient task confirmations (save, copy) — use `mc-toast` instead
- Firing 3+ individual toasts for bulk actions — batch into a single summary toast
- Using `info` appearance when user action is required — use `warning`
- Setting `errormessage` without `invalid` — the error text will not be shown
- Using `success` for partial failures ("3 of 5 bookings failed") — use `warning` or `error`
- Placing toasts inconsistently across pages — keep position constant throughout the app

## Reference Files

- [Feedback UX guidelines](./references/feedback-ux-guidelines.md) — appearance selection, content structure, trigger types, feedback lifecycle, frequency, placement, actions inside feedback, accessibility rules
- [Domain scenarios](./references/domain-scenarios.md) — logistics feedback patterns mapped to components with example headings and bodies
- [Component skill](../mds-components/SKILL.md) — overview of all components with references to detail component's API
