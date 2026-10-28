# Multi-Step Form Patterns

Patterns for building linear multi-step forms using `mc-step-indicator` and `mc-step-indicator-item`.

---

## When to Use a Multi-Step Form

- The form has 3–6 clearly distinct phases (e.g. Shipper → Cargo → Schedule → Review)
- The total number of fields would overwhelm the user on a single page
- Steps must be completed sequentially (step 2 depends on step 1)

**Do NOT use** for forms with fewer than 3 steps — a single page with clear sections is simpler.
**Do NOT use** for non-linear flows where the user can jump between steps freely — use tabs instead.

---

## Basic Structure

```html
<!-- Step indicator (progress tracker) -->
<mc-step-indicator orientation="horizontal">
  <mc-step-indicator-item label="Shipper details" state="completed"></mc-step-indicator-item>
  <mc-step-indicator-item label="Cargo info" state="current"></mc-step-indicator-item>
  <mc-step-indicator-item label="Schedule" state="pending"></mc-step-indicator-item>
  <mc-step-indicator-item label="Review & submit" state="pending"></mc-step-indicator-item>
</mc-step-indicator>

<!-- Step content -->
<div class="mds-flex mds-flex-column mds-gap-800">
  <h2 class="mds-headline mds-headline--small">Cargo information</h2>

  <!-- Fields for step 2 -->
  <mc-input label="Commodity description" name="commodity"></mc-input>
  <mc-number-stepper label="Number of containers" name="containers" min="1" max="50" value="1"></mc-number-stepper>
  <mc-select label="Container type" name="containerType">
    <mc-option value="20GP">20' General Purpose</mc-option>
    <mc-option value="40GP">40' General Purpose</mc-option>
    <mc-option value="40HC">40' High Cube</mc-option>
  </mc-select>

  <!-- Navigation buttons -->
  <div class="mds-flex mds-gap-400">
    <mc-button label="Back to Shipper details" appearance="neutral" variant="outlined" id="btn-back"></mc-button>
    <mc-button label="Next: Schedule" appearance="primary" id="btn-next"></mc-button>
  </div>
</div>
```

---

## State Values

Each `mc-step-indicator-item` has a `state` prop:

| `state`     | Meaning                       | Visual     |
| ----------- | ----------------------------- | ---------- |
| `completed` | Step is done, user moved past | Checkmark  |
| `current`   | The active step               | Highlighted|
| `pending`   | Not yet reached               | Greyed out |

---

## Simple Mode (labels as prop)

For basic 3–6 step flows, pass labels as an array prop and manage only `currentindex`:

```html
<mc-step-indicator
  labels='["Shipper", "Cargo", "Schedule", "Review"]'
  currentindex="1"
></mc-step-indicator>
```

`currentindex` is 0-based. Increment it on "Next", decrement on "Back".

**Note:** `currentindex` only works in simple mode (labels as prop). When using `mc-step-indicator-item` children, set `state` directly on each item.

---

## JavaScript Navigation Pattern

```html
<div id="multi-step-form">
  <mc-step-indicator id="stepper">
    <mc-step-indicator-item label="Shipper details" state="current"></mc-step-indicator-item>
    <mc-step-indicator-item label="Cargo info" state="pending"></mc-step-indicator-item>
    <mc-step-indicator-item label="Schedule" state="pending"></mc-step-indicator-item>
    <mc-step-indicator-item label="Review" state="pending"></mc-step-indicator-item>
  </mc-step-indicator>

  <div id="step-content"></div>

  <div class="mds-flex mds-gap-400">
    <mc-button id="btn-back" label="Back" appearance="neutral" variant="outlined"></mc-button>
    <mc-button id="btn-next" label="Next" appearance="primary"></mc-button>
  </div>
</div>

<script>
  let currentStep = 0;
  const totalSteps = 4;
  const stepItems = document.querySelectorAll('mc-step-indicator-item');
  const btnBack = document.getElementById('btn-back');
  const btnNext = document.getElementById('btn-next');

  function goToStep(index) {
    stepItems.forEach((item, i) => {
      item.state = i < index ? 'completed' : i === index ? 'current' : 'pending';
    });
    currentStep = index;
    btnBack.disabled = currentStep === 0;
    btnNext.label = currentStep === totalSteps - 1 ? 'Submit' : 'Next';
    renderStepContent(currentStep);
  }

  function validateCurrentStep() {
    // validate fields in the current step panel
    // return true if valid, false otherwise
    return true;
  }

  btnNext.addEventListener('click', () => {
    if (!validateCurrentStep()) return;
    if (currentStep < totalSteps - 1) {
      goToStep(currentStep + 1);
    } else {
      submitForm();
    }
  });

  btnBack.addEventListener('click', () => {
    if (currentStep > 0) goToStep(currentStep - 1);
  });

  goToStep(0);
</script>
```

---

## React Pattern

```tsx
import { useState } from 'react';
import { McStepIndicator } from '@maersk-global/mds-react-wrapper/mc-step-indicator';
import { McStepIndicatorItem } from '@maersk-global/mds-react-wrapper/mc-step-indicator-item';
import { McButton } from '@maersk-global/mds-react-wrapper/mc-button';

const STEPS = ['Shipper details', 'Cargo info', 'Schedule', 'Review & submit'];

function MultiStepBookingForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const getState = (index: number) => {
    if (index < currentStep) return 'completed';
    if (index === currentStep) return 'current';
    return 'pending';
  };

  const validateStep = (): boolean => {
    // Validate the current step's fields
    const newErrors: Record<string, string> = {};
    // ... field-specific validation
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (!validateStep()) return;
    if (currentStep < STEPS.length - 1) setCurrentStep((s) => s + 1);
    else handleSubmit();
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep((s) => s - 1);
  };

  const handleSubmit = async () => {
    // submit logic
  };

  return (
    <div>
      <McStepIndicator orientation="horizontal">
        {STEPS.map((label, i) => (
          <McStepIndicatorItem key={label} label={label} state={getState(i)} />
        ))}
      </McStepIndicator>

      {/* Render step panel based on currentStep */}
      <div className="mds-flex mds-flex-column mds-gap-800">
        {currentStep === 0 && <ShipperDetailsStep errors={errors} />}
        {currentStep === 1 && <CargoInfoStep errors={errors} />}
        {currentStep === 2 && <ScheduleStep errors={errors} />}
        {currentStep === 3 && <ReviewStep />}

        <div className="mds-flex mds-gap-400">
          {currentStep > 0 && (
            <McButton label="Back" appearance="neutral" variant="outlined" click={handleBack} />
          )}
          <McButton
            label={currentStep === STEPS.length - 1 ? 'Submit booking' : 'Next'}
            appearance="primary"
            click={handleNext}
          />
        </div>
      </div>
    </div>
  );
}
```

---

## Per-Step Validation Best Practices

- **Validate before advancing** — never allow the user to proceed to the next step with invalid data
- **Set `invalid` + `errormessage`** on the individual field components within the step panel
- **Show a summary** `mc-notification appearance="error"` at the top of the step if multiple fields failed
- **Preserve data** when going back — do not reset completed step data
- **Do not disable the Back button** on step 1 — either hide it or leave it for consistency

```html
<!-- Error summary if multiple fields in step 2 fail -->
<mc-notification
  appearance="error"
  heading="Please fix 2 errors before continuing"
  body="Check the highlighted fields below."
></mc-notification>
```

---

## Vertical Orientation

Use `orientation="vertical"` for narrow panels or sidebar-style flows:

```html
<mc-step-indicator orientation="vertical">
  <mc-step-indicator-item label="Account setup" state="completed"></mc-step-indicator-item>
  <mc-step-indicator-item label="Company info" state="current"></mc-step-indicator-item>
  <mc-step-indicator-item label="Preferences" state="pending"></mc-step-indicator-item>
</mc-step-indicator>
```

---

## Anti-Patterns

| Mistake                                          | Fix                                                                      |
| ------------------------------------------------ | ------------------------------------------------------------------------ |
| Using `mc-step-indicator` for 2-step flows       | Use a single form with two sections instead                              |
| More than 6 steps                                | Simplify by combining steps; max 6 recommended                           |
| Not validating before advancing                  | Always run field validation on "Next" click before incrementing the step |
| Resetting completed step data on "Back"          | Preserve form state across steps — store in component state or a ref     |
| Using `mc-tab-bar` instead of `mc-step-indicator`| Tabs allow free navigation; step indicator enforces linear sequence      |
| Setting `currentindex` when using item children  | `currentindex` only works in simple mode (labels as prop); use `state` on items |
