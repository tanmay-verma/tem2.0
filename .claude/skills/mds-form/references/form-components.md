# Form Components API Quick Reference

Use this file together with [form validation](./form-validation.md), [selection UX guidelines](./selection-ux-guidelines.md), [input mask guidelines](./input-masks-guidelines.md), [compound fields](./compound-fields.md), and [multi-step forms](./multi-step-forms.md).

For the complete property and event list of each component, see the auto-generated references in:
`dist/packages/mds-ai-agent/skills/mds-components/references/mc-<name>.md`

---

## mc-input

- **Tag**: `<mc-input>`
- **Key props**: `label`, `type` (`text|email|password|tel|url|number`), `value`, `placeholder`, `name`, `fit` (`small|medium|large`), `variant` (`default|vanity`), `icon`, `trailingicon`, `trailingiconlabel`, `clickabletrailingicon`, `prefix`, `suffix`, `clearbutton`, `keepclearbuttonvisible`, `mask`, `disabled`, `invalid`, `readonly`, `required`, `hiddenlabel`, `labelposition` (`top|left`), `hint`, `errormessage`, `maxlength`, `loading`, `autocomplete`
- **Events**: `input` (value changed), `clearbuttonclick` (× button pressed), `trailingiconclick`, `focus`, `blur`, `keydown`
- **Slots**: `label`, `hint`, `errormessage`

```html
<mc-input
  label="Container number"
  name="containerNo"
  hint="e.g. MSKU 123456-7"
  mask="{MKRU} 0000 000 000"
  clearbutton
></mc-input>

<!-- Password with show/hide toggle -->
<mc-input
  label="Password"
  type="password"
  name="password"
  trailingicon="eye"
  trailingiconlabel="Show password"
  clickabletrailingicon
></mc-input>

<!-- Currency amount with prefix -->
<mc-input label="Amount" name="amount" prefix="USD" type="text"></mc-input>
```

---

## mc-textarea

- **Tag**: `<mc-textarea>`
- **Key props**: `label`, `value`, `placeholder`, `name`, `rows`, `maxlength`, `fit`, `disabled`, `invalid`, `readonly`, `required`, `hint`, `errormessage`, `hiddenlabel`
- **Events**: `input`, `focus`, `blur`
- **Slots**: `label`, `hint`, `errormessage`

```html
<mc-textarea
  label="Additional notes"
  name="notes"
  rows="4"
  maxlength="500"
  hint="Optional — max 500 characters"
></mc-textarea>
```

---

## mc-select

- **Tag**: `<mc-select>`
- **Child**: `<mc-option value="x">Label</mc-option>`
- **Key props**: `label`, `value`, `name`, `placeholder`, `fit`, `variant`, `listsearch`, `listsearchplaceholder`, `filtertype` (`contains|startsWith`), `clearbutton`, `optionswidth` (`trigger|auto`), `optionsheight`, `disabled`, `invalid`, `readonly`, `required`, `hiddenlabel`, `labelposition`, `hint`, `errormessage`, `loading`
- **Data via JS**: set `.data = [{ label, value, icon?, disabled?, group? }]` as a DOM property
- **Events**: `optionselected` (`e.detail = { label, value }`), `opened`, `closed`, `clearbuttonclick`, `input`
- **Slots**: default (mc-option children), `label`, `hint`, `errormessage`

```html
<!-- Static options -->
<mc-select label="Status" name="status">
  <mc-option value="active">Active</mc-option>
  <mc-option value="pending">Pending</mc-option>
  <mc-option value="closed">Closed</mc-option>
</mc-select>

<!-- Large list with search -->
<mc-select id="country-select" label="Country" name="country" listsearch placeholder="Select country"></mc-select>
<script>
  document.getElementById('country-select').data = countries; // [{ label, value }]
</script>

<!-- Option groups -->
<mc-select label="Port" name="port" listsearch>
  <small>Europe</small>
  <mc-option value="RTM">Rotterdam</mc-option>
  <mc-option value="HAM">Hamburg</mc-option>
  <hr />
  <small>Asia</small>
  <mc-option value="SHA">Shanghai</mc-option>
</mc-select>
```

---

## mc-typeahead

- **Tag**: `<mc-typeahead>`
- **Key props**: `label`, `value`, `name`, `placeholder`, `fit`, `disabled`, `invalid`, `hiddenlabel`, `hint`, `errormessage`
- **Data via JS**: set `.data = [{ label, value }]` as a DOM property
- **Events**: `optionselected` (`e.detail = { label, value }`), `input`, `clearbuttonclick`
- **Use when**: list has thousands of items and the user knows what to search for (ports, airports, commodity codes)

```html
<mc-typeahead id="port-input" label="Port of loading" name="pol"></mc-typeahead>
<script>
  document.getElementById('port-input').data = allPorts;
</script>
```

---

## mc-multi-select

- **Tag**: `<mc-multi-select>`
- **Key props**: `label`, `name`, `disabled`, `invalid`, `fit`, `hiddenlabel`, `hint`, `errormessage`
- **Data via JS**: `.data = [{ label, value }]`; `.selecteddata = [{ label, value }]`
- **Events**: `optionselected`, `optiondeselected`, `clearbuttonclick`

```html
<mc-multi-select id="permissions" label="Permissions" name="permissions"></mc-multi-select>
<script>
  const el = document.getElementById('permissions');
  el.data = [
    { label: 'Read', value: 'read' },
    { label: 'Write', value: 'write' },
    { label: 'Admin', value: 'admin' },
  ];
  el.selecteddata = [{ label: 'Read', value: 'read' }];
</script>
```

---

## mc-typeahead-multi-select

- **Tag**: `<mc-typeahead-multi-select>`
- **Key props**: `label`, `name`, `disabled`, `invalid`, `fit`, `hiddenlabel`, `hint`, `errormessage`, `clearalllabel`, `hiddentags`
- **Data via JS**: `.data`, `.selecteddata`
- **Events**: `optionselected`, `optiondeselected`, `clearbuttonclick`, `input`

---

## mc-checkbox / mc-checkbox-group

```html
<!-- Single checkbox (agreement) -->
<mc-checkbox label="I agree to the terms and conditions" name="agree" value="yes"></mc-checkbox>

<!-- Group -->
<mc-checkbox-group label="Notification preferences" orientation="vertical">
  <mc-checkbox label="Email alerts" name="notifyEmail" value="email"></mc-checkbox>
  <mc-checkbox label="SMS alerts" name="notifySms" value="sms"></mc-checkbox>
  <mc-checkbox label="Push notifications" name="notifyPush" value="push"></mc-checkbox>
</mc-checkbox-group>
```

- **mc-checkbox props**: `label`, `name`, `value`, `checked`, `disabled`, `indeterminate`
- **mc-checkbox event**: `check` (`e.detail = boolean`)
- **mc-checkbox-group props**: `label`, `orientation` (`horizontal|vertical`), `disabled`

---

## mc-radio / mc-radio-group

```html
<mc-radio-group label="Shipping type" name="shippingType" orientation="horizontal">
  <mc-radio label="Standard" value="standard"></mc-radio>
  <mc-radio label="Express" value="express"></mc-radio>
  <mc-radio label="Economy" value="economy"></mc-radio>
</mc-radio-group>
```

- **mc-radio props**: `label`, `name`, `value`, `checked`, `disabled`
- **mc-radio event**: `check` (`e.detail = boolean`)
- **mc-radio-group props**: `label`, `name`, `orientation` (`horizontal|vertical`), `disabled`
- **⚠️ Do NOT use** for on/off choices — use `mc-switch`

---

## mc-switch / mc-switch-group

```html
<!-- Single switch — immediate effect, no submit -->
<mc-switch label="Dark mode" name="darkMode" checked></mc-switch>

<!-- Group of independent settings -->
<mc-switch-group label="Notifications" orientation="vertical">
  <mc-switch label="Email updates" name="emailUpdates"></mc-switch>
  <mc-switch label="Shipment alerts" name="shipmentAlerts"></mc-switch>
</mc-switch-group>
```

- **mc-switch props**: `label`, `name`, `checked`, `disabled`, `fit`
- **mc-switch event**: `switchchange` (`e.detail = boolean`)
- **mc-switch-group props**: `label`, `name`, `orientation`, `disabled`
- **⚠️ Use `mc-checkbox`** for settings that submit with a form — switch changes state immediately

---

## mc-input-date

- **Tag**: `<mc-input-date>`
- **Key props**: `label`, `name`, `value` (ISO date string `YYYY-MM-DD`), `min`, `max`, `disabled`, `invalid`, `required`, `format`, `hint`, `errormessage`
- **Events**: `change`, `input`

```html
<mc-input-date label="Departure date" name="departureDate" min="2026-01-01" max="2026-12-31"></mc-input-date>
```

---

## mc-date-range

- **Tag**: `<mc-date-range>`
- **Key props**: `label`, `startdate`, `enddate`, `startlabel`, `endlabel`, `min`, `max`, `disabled`, `invalid`, `hint`, `errormessage`
- **Events**: `change` (`e.detail = { startdate, enddate }`)
- **⚠️ `startlabel` and `endlabel` are required** — they label the two sub-fields

```html
<mc-date-range label="Reporting period" startlabel="From" endlabel="To" name="reportPeriod"></mc-date-range>
```

---

## mc-input-time

- **Tag**: `<mc-input-time>`
- **Key props**: `label`, `name`, `value`, `step` (minute increment, e.g. `15`), `disabled`, `invalid`, `hint`, `errormessage`
- **Events**: `change`, `input`

```html
<mc-input-time label="Appointment time" name="apptTime" step="15"></mc-input-time>
```

---

## mc-month-year-picker

- **Tag**: `<mc-month-year-picker>`
- **Key props**: `label`, `name`, `value`, `min`, `max`, `disabled`, `invalid`, `hint`, `errormessage`
- **Events**: `change`

```html
<mc-month-year-picker label="Card expiry" name="expiry"></mc-month-year-picker>
```

---

## mc-number-stepper

- **Tag**: `<mc-number-stepper>`
- **Key props**: `label`, `name`, `value`, `min`, `max`, `step`, `disabled`, `fit`, `hint`, `errormessage`
- **Events**: `change` (`e.detail = number`)

```html
<mc-number-stepper label="Number of containers" name="containers" min="1" max="50" value="1"></mc-number-stepper>
```

---

## mc-file-upload

- **Tag**: `<mc-file-upload>`
- **Key props**: `label`, `name`, `accept` (MIME types or extensions), `multiple`, `maxfilesize` (bytes), `disabled`, `hint`, `errormessage`
- **Events**: `filesselected` (`e.detail = File[]`), `fileremoved` (`e.detail = File`)

```html
<mc-file-upload
  label="Attach documents"
  name="docs"
  accept=".pdf,.doc,.docx"
  multiple
  maxfilesize="5242880"
  hint="PDF or Word documents, max 5 MB each"
></mc-file-upload>
```

---

## mc-input-group

- **Tag**: `<mc-input-group>`
- **Key props**: `legend` (required), `hiddenlegend`, `hint`, `fit`
- **Use for**: 2–3 contextually related inputs (phone + country code, amount + currency, search + button)
- **Slots**: default (mc-input, mc-select, mc-button children), `hint`

```html
<!-- Amount + currency -->
<mc-input-group legend="Cargo value">
  <mc-input hiddenlabel label="Amount" name="amount" type="text" placeholder="0.00"></mc-input>
  <mc-select hiddenlabel label="Currency" name="currency">
    <mc-option value="USD">USD</mc-option>
    <mc-option value="EUR">EUR</mc-option>
  </mc-select>
</mc-input-group>
```

See [compound-fields.md](./compound-fields.md) for full patterns.

---

## mc-step-indicator / mc-step-indicator-item

```html
<mc-step-indicator orientation="horizontal">
  <mc-step-indicator-item label="Shipper details" state="completed"></mc-step-indicator-item>
  <mc-step-indicator-item label="Cargo info" state="current"></mc-step-indicator-item>
  <mc-step-indicator-item label="Schedule" state="pending"></mc-step-indicator-item>
  <mc-step-indicator-item label="Review" state="pending"></mc-step-indicator-item>
</mc-step-indicator>
```

- **mc-step-indicator props**: `orientation` (`horizontal|vertical`), `fit`, `labels` (string array for simple mode)
- **mc-step-indicator-item props**: `label`, `state` (`completed|current|pending`), `icon`
- **Simple mode** (labels as prop, auto-managed current index):
  ```html
  <mc-step-indicator labels='["Step 1","Step 2","Step 3"]' currentindex="1"></mc-step-indicator>
  ```
- **Use 3–6 steps** for a linear flow. See [multi-step-forms.md](./multi-step-forms.md).

---

## Label, Error, and Hint — Properties vs Named Slots

`mc-label`, `mc-error`, and `mc-hint` are **internal sub-components**. Never use them as standalone elements.

| Need          | Property                         | Named slot (for HTML content)                 |
| ------------- | -------------------------------- | --------------------------------------------- |
| Field label   | `label="..."`                    | `<span slot="label">HTML label</span>`        |
| Hint text     | `hint="..."`                     | `<span slot="hint">HTML hint</span>`          |
| Error message | `errormessage="..."` + `invalid` | `<span slot="errormessage">HTML error</span>` |

```html
<!-- Simple props -->
<mc-input label="Email" hint="We will not share this." invalid errormessage="Required field."></mc-input>

<!-- Named slots for rich HTML -->
<mc-input invalid>
  <span slot="label"
    >Email <mc-tooltip><mc-icon slot="trigger" icon="info-circle"></mc-icon><span>Help</span></mc-tooltip></span
  >
  <span slot="hint">Hint with <strong>bold text</strong></span>
  <span slot="errormessage">Error with <a class="mds-error__text-color" href="/help">help link</a></span>
</mc-input>
```
