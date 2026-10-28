---
name: mds-form
description: 'Build forms with MDS components. Use for: form, input, select, checkbox, radio, textarea, validation, file upload, date picker, time picker, number stepper, typeahead, multi-select, switch, form submission, form layout, form validation, required fields, compound fields, multi-step form, step indicator.'
related-skills: ['mds-layout', 'mds-design-tokens', 'mds-feedback', 'mds-a11y', 'mds-overlays']
related-components:
  [
    'mc-button',
    'mc-checkbox-group',
    'mc-checkbox',
    'mc-date-range',
    'mc-file-upload',
    'mc-input-date',
    'mc-input-group',
    'mc-input-time',
    'mc-input',
    'mc-month-year-picker',
    'mc-multi-select',
    'mc-notification',
    'mc-number-stepper',
    'mc-radio-group',
    'mc-radio',
    'mc-select',
    'mc-step-indicator-item',
    'mc-step-indicator',
    'mc-switch-group',
    'mc-switch',
    'mc-textarea',
    'mc-typeahead-multi-select',
    'mc-typeahead',
  ]
---

# Build Forms with MDS Components

## When to Use

- Creating any form (login, registration, booking, settings, filters, search)
- Adding form fields: text, select, checkbox, radio, switch, date, time, file upload
- Implementing form validation and inline error handling
- Building compound field groups (phone + country code, amount + currency)
- Building multi-step forms with step-by-step navigation
- Grouping related form controls under a shared label

## Decision Table

| Field Type                              | Component                                      | Notes                                                                                |
| --------------------------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------ |
| Short text (name, email, URL, password) | `mc-input`                                     | Use `type` prop; `mask` for formatted input (container number, credit card)          |
| Long text (description, comments)       | `mc-textarea`                                  | Use `rows` to set visible height; `maxlength` for character limit                    |
| Number with up/down step                | `mc-number-stepper`                            | Use for integers (qty, passengers); not for arbitrary free-text numbers              |
| Prefix/suffix or unit alongside input   | `mc-input` with `prefix` / `suffix` props      | For short constant text (e.g. "USD", "kg"); use `mc-input-group` for compound fields |
| Compound / contextually related inputs  | `mc-input-group`                               | Phone + country code, amount + currency; 2–3 related inputs; see compound-fields.md  |
| Single choice (2–6 options)             | `mc-radio-group` + `mc-radio`                  | Keep options visible; do NOT use for on/off                                          |
| Single choice (7–hundreds)              | `mc-select`                                    | Add `listsearch` for 10–15+ options                                                  |
| Single choice (thousands)               | `mc-typeahead`                                 | Filters as you type; user must know what to search for                               |
| Multiple choices (2–6 options)          | `mc-checkbox-group` + `mc-checkbox`            | Keep options visible                                                                 |
| Multiple choices (7–hundreds)           | `mc-multi-select`                              | Browseable list                                                                      |
| Multiple choices (thousands)            | `mc-typeahead-multi-select`                    | Filters as you type                                                                  |
| On/off toggle (immediate effect)        | `mc-switch`                                    | Applied immediately, no Submit needed; do NOT use in forms where value submits later |
| On/off inside a form (submit later)     | `mc-checkbox`                                  | Checkbox submits with the form; switch does not                                      |
| Group of independent toggles            | `mc-switch-group`                              | E.g. notification preferences                                                        |
| Single agreement (terms)                | `mc-checkbox` (standalone)                     | Always pair with descriptive `label`                                                 |
| Date                                    | `mc-input-date`                                | `min` / `max` for constraints; `format` for locale display                           |
| Date range                              | `mc-date-range`                                | Requires `startlabel` and `endlabel` props                                           |
| Time                                    | `mc-input-time`                                | `step` prop for minute increments (e.g. `step="15"`)                                 |
| Month / year only                       | `mc-month-year-picker`                         | Credit card expiry, report month                                                     |
| File upload                             | `mc-file-upload`                               | `accept`, `multiple`, `maxfilesize` props; listen to `filesselected`                 |
| Mobile-native select                    | `mc-select-native`                             | Uses OS picker — prefer `mc-select` unless native mobile UX is required              |
| Multi-step form progress                | `mc-step-indicator` + `mc-step-indicator-item` | 3–6 steps; validate each step before advancing; see multi-step-forms.md              |

## When NOT to Use

- **Raw `<input>`, `<select>`, `<textarea>`, `<button>` elements** — always use the corresponding MDS component
- **Standalone `<mc-label>`, `<mc-error>`, `<mc-hint>`** — these are internal sub-components; use the field's built-in `label`, `errormessage`, `hint` props or named slots
- **`mc-switch` for a setting that submits with a form** — switch changes state immediately; use `mc-checkbox` instead
- **`mc-radio-group` for on/off choices** — that is `mc-switch`'s job
- **`mc-typeahead` when the user needs to browse** — typeahead shows only search matches; use `mc-select` with `listsearch` for browseable lists
- **Custom CSS for form layout** — use `mds-flex mds-flex-column mds-gap-*` or `mds-grid`
- **Validating while the user is still typing** — validate on `blur` or on submit, not on `input` event

## Procedure

### 1. Choose Components and Build Layout

For simple vertical forms, use MDS flex utilities:

```html
<form class="mds-flex mds-flex-column mds-gap-800">
  <mc-input label="Full name" name="name" type="text"></mc-input>
  <mc-input label="Email" name="email" type="email"></mc-input>
  <mc-input label="Password" name="password" type="password"></mc-input>
  <mc-checkbox label="Remember me" name="remember"></mc-checkbox>
  <mc-button label="Sign in" type="submit" appearance="primary"></mc-button>
</form>
```

For multi-column forms, use the MDS grid. Always define all 3 breakpoints per cell:

```html
<form class="mds-grid">
  <!-- Full-width field -->
  <div
    class="mds-grid-md-col-1 mds-grid-md-col-span-12
               mds-grid-sm-col-1 mds-grid-sm-col-span-6
               mds-grid-xs-col-1 mds-grid-xs-col-span-2"
  >
    <mc-input label="Company name" name="company"></mc-input>
  </div>

  <!-- Two-column row: First Name / Last Name -->
  <div
    class="mds-grid-md-col-1 mds-grid-md-col-span-6
               mds-grid-sm-col-1 mds-grid-sm-col-span-3
               mds-grid-xs-col-1 mds-grid-xs-col-span-2"
  >
    <mc-input label="First name" name="firstName"></mc-input>
  </div>
  <div
    class="mds-grid-md-col-7 mds-grid-md-col-span-6
               mds-grid-sm-col-4 mds-grid-sm-col-span-3
               mds-grid-xs-col-1 mds-grid-xs-col-span-2"
  >
    <mc-input label="Last name" name="lastName"></mc-input>
  </div>
</form>
```

Use `mds-gap-400` (16px) between compact field groups and `mds-gap-800` (32px) between form sections.

### 2. Add Labels, Hints, and Error Messages

Use the built-in `label`, `hint`, and `errormessage` props. These are ARIA-linked automatically:

```html
<mc-input label="Container number" hint="e.g. MSKU 123456-7" name="containerNo"></mc-input>

<mc-input label="Email" name="email" type="email" invalid errormessage="Please enter a valid email address."></mc-input>
```

For rich HTML content in labels or hints, use named slots:

```html
<mc-input invalid>
  <span slot="label">
    Email
    <mc-tooltip>
      <mc-icon slot="trigger" icon="info-circle"></mc-icon>
      <span>We will only use this to send booking confirmations.</span>
    </mc-tooltip>
  </span>
  <span slot="hint">Must match your registered account email.</span>
  <span slot="errormessage"> Please enter a valid email — <a class="mds-error__text-color" href="/help">help</a> </span>
</mc-input>
```

### 3. Use Select and Typeahead Correctly

**mc-select** — single choice from a list. Add `listsearch` when the list has 10–15+ items:

```html
<!-- Static options as children -->
<mc-select label="Country" name="country" listsearch>
  <mc-option value="dk">Denmark</mc-option>
  <mc-option value="de">Germany</mc-option>
  <mc-option value="us">United States</mc-option>
</mc-select>

<!-- Dynamic options via data property (set via JS) -->
<mc-select id="port-select" label="Port" name="port" listsearch></mc-select>
<script>
  document.getElementById('port-select').data = [
    { label: 'Rotterdam', value: 'RTM' },
    { label: 'Hamburg', value: 'HAM' },
    { label: 'Shanghai', value: 'SHA' },
  ];
</script>
```

Listen to `optionselected` (not `change`) to get the selected value:

```js
document.querySelector('mc-select').addEventListener('optionselected', (e) => {
  console.log(e.detail); // { label: 'Rotterdam', value: 'RTM' }
});
```

**mc-typeahead** — for very large lists (ports, commodity codes, airports):

```html
<mc-typeahead id="port-typeahead" label="Origin port" name="originPort"></mc-typeahead>
<script>
  document.getElementById('port-typeahead').data = portsList; // array of { label, value }
</script>
```

**React:**

```tsx
import { McSelect } from '@maersk-global/mds-react-wrapper/mc-select';
import { McOption } from '@maersk-global/mds-react-wrapper/mc-option';

<McSelect label="Status" name="status" optionselected={(e) => setStatus(e.detail.value)}>
  <McOption value="active">Active</McOption>
  <McOption value="pending">Pending</McOption>
  <McOption value="closed">Closed</McOption>
</McSelect>;
```

### 4. Handle Validation and Errors

Set `invalid` and `errormessage` on the field component — not as a separate element:

```html
<mc-input label="Port of loading" name="pol" invalid errormessage="Port of loading is required."></mc-input>
```

**Validate on blur or submit — not while typing:**

```js
const input = document.querySelector('mc-input[name="email"]');

input.addEventListener('blur', () => {
  const valid = input.value.includes('@');
  input.invalid = !valid;
  input.errormessage = valid ? '' : 'Please enter a valid email address.';
});

// Clear error when user starts correcting
input.addEventListener('input', () => {
  if (input.invalid) input.invalid = false;
});
```

**React validation pattern:**

```tsx
const [email, setEmail] = useState('');
const [emailError, setEmailError] = useState('');

const validateEmail = () => {
  if (!email) setEmailError('Email is required.');
  else if (!email.includes('@')) setEmailError('Please enter a valid email address.');
  else setEmailError('');
};

<McInput
  label="Email"
  value={email}
  invalid={!!emailError}
  errormessage={emailError}
  input={(e) => setEmail(e.detail)}
  blur={validateEmail}
/>;
```

For long forms, add an `mc-notification` error summary at the top when multiple fields fail:

```html
<mc-notification
  appearance="error"
  heading="Please fix the following errors before continuing"
  body="3 fields require your attention."
></mc-notification>
```

### 5. Handle Form Submission

Use `mc-button` with `type="submit"`. Use `loading` during submission, `disabled` to prevent double-submit:

```html
<mc-button id="submit-btn" label="Submit booking" type="submit" appearance="primary"></mc-button>

<script>
  document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = document.getElementById('submit-btn');
    btn.loading = true;
    try {
      await submitBooking(formData);
      showSuccessToast();
    } catch {
      showErrorNotification();
    } finally {
      btn.loading = false;
    }
  });
</script>
```

Show success with `mc-toast` (transient) or `mc-notification` (persistent):

```html
<!-- Transient: export complete, record saved -->
<mc-toast appearance="success" heading="Booking submitted" position="top"></mc-toast>

<!-- Persistent: page-level confirmation with next steps -->
<mc-notification
  appearance="success"
  heading="Booking submitted"
  body="Your booking BK-12345 has been confirmed. You will receive a confirmation email."
>
</mc-notification>
```

### 6. Build Compound Fields

Use `mc-input-group` for 2–3 contextually related inputs that belong together (phone + country code, amount + currency, search + button):

```html
<!-- Amount + currency -->
<mc-input-group legend="Cargo value">
  <mc-input label="Amount" name="amount" type="text" hiddenlabel placeholder="0.00"></mc-input>
  <mc-select label="Currency" name="currency" hiddenlabel>
    <mc-option value="USD">USD</mc-option>
    <mc-option value="EUR">EUR</mc-option>
    <mc-option value="GBP">GBP</mc-option>
  </mc-select>
</mc-input-group>

<!-- Phone + country code -->
<mc-input-group legend="Phone number">
  <mc-select hiddenlabel label="Country code" name="countryCode">
    <mc-option value="+45">+45</mc-option>
    <mc-option value="+49">+49</mc-option>
    <mc-option value="+1">+1</mc-option>
  </mc-select>
  <mc-input hiddenlabel label="Phone number" name="phone" type="tel"></mc-input>
</mc-input-group>

<!-- Search + button -->
<mc-input-group hiddenlegend legend="Search">
  <mc-input hiddenlabel label="Search" placeholder="Search bookings..." name="search"></mc-input>
  <mc-button hiddenlabel label="Search" icon="magnifying-glass" appearance="primary"></mc-button>
</mc-input-group>
```

For a group of radio buttons or checkboxes, use `mc-radio-group` / `mc-checkbox-group` — they include a shared `label` and orientation control:

```html
<mc-radio-group label="Preferred contact method" name="contactMethod" orientation="vertical">
  <mc-radio label="Email" value="email"></mc-radio>
  <mc-radio label="Phone" value="phone"></mc-radio>
  <mc-radio label="SMS" value="sms"></mc-radio>
</mc-radio-group>
```

See [compound-fields.md](./references/compound-fields.md) for full `mc-input-group` patterns.

### 7. Build Multi-Step Forms

Use `mc-step-indicator` + `mc-step-indicator-item` for 3–6 step linear flows. Validate each step before advancing:

```html
<mc-step-indicator>
  <mc-step-indicator-item label="Shipper details" state="completed"></mc-step-indicator-item>
  <mc-step-indicator-item label="Cargo info" state="current"></mc-step-indicator-item>
  <mc-step-indicator-item label="Schedule" state="pending"></mc-step-indicator-item>
  <mc-step-indicator-item label="Review & submit" state="pending"></mc-step-indicator-item>
</mc-step-indicator>

<!-- Step content -->
<div class="mds-flex mds-flex-column mds-gap-800">
  <!-- Step 2: Cargo info fields -->
  <mc-input label="Commodity" name="commodity"></mc-input>
  <mc-number-stepper label="Number of containers" name="containers" min="1" max="50"></mc-number-stepper>

  <!-- Step navigation -->
  <div class="mds-flex mds-gap-400">
    <mc-button label="Back" appearance="neutral" variant="outlined"></mc-button>
    <mc-button label="Next: Schedule" appearance="primary"></mc-button>
  </div>
</div>
```

See [multi-step-forms.md](./references/multi-step-forms.md) for full navigation patterns, step validation, and React/Vue examples.

## Hard Constraints

### ❌ Raw HTML form elements vs ✅ MDS components

```html
<!-- ❌ -->
<input type="text" placeholder="Name" />
<select>
  <option>Denmark</option>
</select>
<textarea rows="4"></textarea>
<button type="submit">Submit</button>

<!-- ✅ -->
<mc-input label="Name" type="text"></mc-input>
<mc-select label="Country"><mc-option value="dk">Denmark</mc-option></mc-select>
<mc-textarea label="Notes" rows="4"></mc-textarea>
<mc-button label="Submit" type="submit" appearance="primary"></mc-button>
```

### ❌ Standalone mc-label / mc-error / mc-hint vs ✅ built-in props

```html
<!-- ❌ — these sub-components are internal; do NOT use standalone -->
<mc-label for="email">Email</mc-label>
<mc-input id="email" type="email"></mc-input>
<mc-error>Please enter a valid email.</mc-error>

<!-- ✅ — use props or named slots on the field component -->
<mc-input label="Email" type="email" invalid errormessage="Please enter a valid email."></mc-input>
```

### ❌ Wrong event names vs ✅ correct MDS events

```js
// ❌ — 'change', 'clearinput', 'open', 'close' do not exist on MDS components
input.addEventListener('change', handler);
input.addEventListener('clearinput', handler);
select.addEventListener('change', handler);
select.addEventListener('open', handler);

// ✅ — correct event names
input.addEventListener('input', handler); // value changed
input.addEventListener('clearbuttonclick', handler); // × clear button clicked
select.addEventListener('optionselected', handler); // option chosen
select.addEventListener('opened', handler); // dropdown opened
select.addEventListener('closed', handler); // dropdown closed
```

### ❌ event.target.value vs ✅ event.detail

```js
// ❌ — MDS custom events carry the value in event.detail
input.addEventListener('input', (e) => console.log(e.target.value));

// ✅
input.addEventListener('input', (e) => console.log(e.detail)); // string value
select.addEventListener('optionselected', (e) => console.log(e.detail.value)); // { label, value }
```

### ❌ mc-switch for a form field vs ✅ mc-checkbox

```html
<!-- ❌ — switch takes effect immediately; it does not submit with a form -->
<form>
  <mc-switch label="I agree to the terms"></mc-switch>
  <mc-button type="submit">Continue</mc-button>
</form>

<!-- ✅ — checkbox is for form fields that submit with the form -->
<form>
  <mc-checkbox label="I agree to the terms" name="agreeToTerms"></mc-checkbox>
  <mc-button type="submit">Continue</mc-button>
</form>
```

### ❌ Validating while typing vs ✅ validating on blur / submit

```js
// ❌ — premature errors confuse users who haven't finished typing
input.addEventListener('input', validate);

// ✅ — validate when the user leaves the field or submits
input.addEventListener('blur', validate);
form.addEventListener('submit', validateAll);
// Clear the error when the user starts correcting
input.addEventListener('input', () => {
  if (input.invalid) input.invalid = false;
});
```

### ❌ Custom CSS layout vs ✅ MDS flex / grid utilities

```html
<!-- ❌ -->
<form style="display: flex; flex-direction: column; gap: 24px;">
  <!-- ✅ -->
  <form class="mds-flex mds-flex-column mds-gap-800"></form>
</form>
```

### ❌ camelCase props vs ✅ lowercase attribute names

```html
<!-- ❌ — MDS public properties are ALL lowercase in HTML attributes -->
<mc-input clearActionLabel="Clear" errorMessage="Required" hiddenLabel></mc-input>

<!-- ✅ -->
<mc-input clearactionlabel="Clear" errormessage="Required" hiddenlabel></mc-input>
```

## Common Mistakes

- Using `<input>`, `<select>`, `<textarea>` instead of MDS form components
- Using standalone `<mc-label>`, `<mc-error>`, `<mc-hint>` — they are internal sub-components
- Listening to `change` event on `mc-input` — the correct event is `input`
- Listening to `clearinput` event — the correct event is `clearbuttonclick`
- Listening to `open` / `close` on `mc-select` — correct events are `opened` / `closed`
- Reading `e.target.value` from MDS events — correct is `e.detail` (or `e.detail.value` for select)
- Using camelCase for HTML attribute names (`errorMessage`) — must be all lowercase (`errormessage`)
- Using `mc-switch` for a choice that submits with a form — use `mc-checkbox`
- Using `mc-radio-group` for on/off — use `mc-switch`
- Using `mc-typeahead` when the user needs to browse the full list — use `mc-select` with `listsearch`
- Using `mc-select` for 2–3 options — use `mc-radio-group` to keep options visible
- Validating `on input` (while typing) — validate on `blur` or on submit
- Not clearing the error when the user starts correcting a field
- Using hardcoded spacing (`gap: 24px`) instead of MDS gap utilities
- Binding select `data` as an HTML attribute (string) — always set as a DOM property via JS
- Using `mc-notification` for transient success — use `mc-toast`; reserve `mc-notification` for persistent status

## Reference Files

- [Form components API quick reference](./references/form-components.md) — props, events, slots for all form components
- [Form validation patterns](./references/form-validation.md) — invalid/errormessage patterns, React/Vue validation examples
- [Form UX guidelines](./references/form-ux-guidelines.md) — labels, layout, button hierarchy, validation timing, disabled vs readonly
- [Selection component guidelines](./references/selection-ux-guidelines.md) — radio vs select vs typeahead vs switch vs segmented control decision rules
- [Input mask guidelines](./references/input-masks-guidelines.md) — when to use masks, placeholder vs hint for format guidance
- [Compound fields](./references/compound-fields.md) — mc-input-group patterns (phone+code, amount+currency, search+button)
- [Multi-step forms](./references/multi-step-forms.md) — mc-step-indicator patterns, step navigation, per-step validation
