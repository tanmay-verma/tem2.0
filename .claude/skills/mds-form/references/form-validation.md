# Form Validation Patterns

## Setting Invalid State

Every MDS form component supports the `invalid` & `errormessage` property. Set it to `true` to highlight the field in error state:

```html
<mc-input label="Email" invalid errormessage="Please enter a valid email address"></mc-input>
```

## Error Message

The `errormessage` property on the field component renders the error text and automatically associates it with the field for screen readers.

```html
<!-- Single error -->
<mc-input label="Name" invalid errormessage="Name is required"></mc-input>

<!-- Multiple fields -->
<mc-input label="Email" invalid errormessage="Please enter a valid email"></mc-input>
<mc-select label="Country" invalid errormessage="Country is required"></mc-select>
```

## Hint Text

Use `hint` property for supplementary instructions (shown regardless of validation state):

```html
<mc-input label="Password" hint="Must be at least 8 characters with one number"></mc-input>
```

## React Validation Example

```tsx
import { McInput } from '@maersk-global/mds-react-wrapper/mc-input';
import { McButton } from '@maersk-global/mds-react-wrapper/mc-button';

function MyForm() {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!email) newErrors.email = 'Email is required';
    else if (!email.includes('@')) newErrors.email = 'Invalid email format';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setLoading(true);
    // submit...
    setLoading(false);
  };

  return (
    <form>
      <McInput
        label="Email"
        value={email}
        invalid={!!errors.email}
        errormessage={errors.email}
        input={(e) => setEmail(e.detail)}
      />

      <McButton label="Submit" loading={loading} click={handleSubmit} />
    </form>
  );
}
```

## Vue Validation Example

```vue
<template>
  <form @submit.prevent="handleSubmit">
    <mc-input
      label="Email"
      :value="email"
      :invalid="!!errors.email"
      :errormessage="errors.email"
      @input="email = $event.detail"
    ></mc-input>

    <mc-button label="Submit" :loading="loading" @click="handleSubmit"></mc-button>
  </form>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import '@maersk-global/mds-components-core-input';
import '@maersk-global/mds-components-core-button';

const email = ref('');
const loading = ref(false);
const errors = reactive<Record<string, string>>({});

const validate = () => {
  Object.keys(errors).forEach((key) => delete errors[key]);
  if (!email.value) errors.email = 'Email is required';
  return Object.keys(errors).length === 0;
};

const handleSubmit = async () => {
  if (!validate()) return;
  loading.value = true;
  // submit...
  loading.value = false;
};
</script>
```

## Key Rules

1. Use the `errormessage` property on the field itself — do NOT place a standalone `<mc-error>` after it
2. Use the `hint` property on the field itself — do NOT place a standalone `<mc-hint>` after it
3. Use the `label` property on the field — do NOT place a standalone `<mc-label>` before it
4. For rich HTML content in label/hint/errormessage, use named slots: `<span slot="label">`, `<span slot="hint">`, `<span slot="errormessage">`
5. Clear errors when the user starts typing (on `input` event)
6. Use `mc-button` with `loading` prop during form submission
7. Group related fields with `mc-checkbox-group` or `mc-radio-group` for proper accessibility
8. Use `mc-radio-group`, `mc-checkbox-group`, or `mc-switch-group` to group related controls — they expose `invalid` + `errormessage` props for group-level validation
