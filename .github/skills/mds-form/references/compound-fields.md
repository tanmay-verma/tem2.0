# Compound Fields and Fieldsets

Patterns for grouping related form inputs using `mc-input-group`.

---

## mc-input-group — Contextually Related Inputs

Use `mc-input-group` when 2–3 inputs are so tightly related that they form a single conceptual field. The group gets a shared `legend` label; individual inputs use `hiddenlabel` to avoid visual redundancy.

**Rules:**
- Maximum 2–3 inputs per group
- Each input still needs a `label` prop for screen readers — set `hiddenlabel` to hide it visually
- Validate each sub-field independently unless they are truly interdependent
- Do NOT use for unrelated fields that happen to be on the same row

### Pattern 1 — Amount + Currency

```html
<mc-input-group legend="Cargo value">
  <mc-input
    hiddenlabel
    label="Amount"
    name="amount"
    type="text"
    placeholder="0.00"
  ></mc-input>
  <mc-select hiddenlabel label="Currency" name="currency">
    <mc-option value="USD">USD</mc-option>
    <mc-option value="EUR">EUR</mc-option>
    <mc-option value="GBP">GBP</mc-option>
    <mc-option value="DKK">DKK</mc-option>
  </mc-select>
</mc-input-group>
```

### Pattern 2 — Phone Number + Country Code

```html
<mc-input-group legend="Contact phone">
  <mc-select hiddenlabel label="Country code" name="countryCode">
    <mc-option value="+45">+45 (DK)</mc-option>
    <mc-option value="+49">+49 (DE)</mc-option>
    <mc-option value="+44">+44 (UK)</mc-option>
    <mc-option value="+1">+1 (US)</mc-option>
  </mc-select>
  <mc-input
    hiddenlabel
    label="Phone number"
    name="phone"
    type="tel"
    placeholder="12 34 56 78"
  ></mc-input>
</mc-input-group>
```

### Pattern 3 — Search Input + Button

Use `hiddenlegend` to hide the legend visually while keeping it accessible:

```html
<mc-input-group hiddenlegend legend="Search bookings">
  <mc-input
    hiddenlabel
    label="Search"
    name="search"
    placeholder="Search by booking ID or vessel..."
    clearbutton
  ></mc-input>
  <mc-button
    hiddenlabel
    label="Search"
    icon="magnifying-glass"
    appearance="primary"
    type="submit"
  ></mc-button>
</mc-input-group>
```

### Pattern 4 — Container Number with Fixed Prefix

For constant text prefixes shorter than 5 chars, use the `prefix` prop on `mc-input` directly (no `mc-input-group` needed):

```html
<mc-input
  label="Reference number"
  name="refNo"
  prefix="MRK"
  hint="Enter the 8-digit booking reference"
></mc-input>
```

### Pattern 5 — Measurement + Unit

```html
<mc-input-group legend="Cargo weight">
  <mc-input hiddenlabel label="Weight" name="weight" type="text" placeholder="0.000"></mc-input>
  <mc-select hiddenlabel label="Unit" name="weightUnit">
    <mc-option value="kg">kg</mc-option>
    <mc-option value="lb">lb</mc-option>
    <mc-option value="t">t</mc-option>
  </mc-select>
</mc-input-group>
```

### Validation in mc-input-group

Validate each sub-field independently. Set `invalid` + `errormessage` on the individual input/select:

```html
<mc-input-group legend="Cargo value">
  <mc-input
    hiddenlabel
    label="Amount"
    name="amount"
    type="text"
    invalid
    errormessage="Please enter a valid amount."
  ></mc-input>
  <mc-select hiddenlabel label="Currency" name="currency">
    <mc-option value="USD">USD</mc-option>
  </mc-select>
</mc-input-group>
```

---

## Anti-Patterns

| Mistake                                          | Fix                                                                     |
| ------------------------------------------------ | ----------------------------------------------------------------------- |
| Two unrelated fields in one `mc-input-group`     | Only group inputs that form one conceptual compound field               |
| Missing `label` on a `hiddenlabel` input         | Always provide `label` even when hidden — it's the accessible name     |
| Using `prefix` for long constant text (>5 chars) | Use `mc-input-group` with a `mc-select` for country codes, units, etc. |
| No `legend` on `mc-input-group`                  | `legend` is required for accessibility                                  |
| More than 3 inputs inside `mc-input-group`       | Split into separate fields — too many inputs in one group overwhelm users |
