---
name: mds-i18n
description: 'Implement internationalization (i18n) in MDS-based UI. Use for: translating text content, custom labels, labels prop, override translations, multi-language app, language selector, unsupported language, locale, i18n, l10n.'
related-skills: ['mds-a11y', 'mds-form', 'mds-components']
related-components: ['mc-multi-select', 'mc-typeahead', 'mc-pagination', 'mc-date-picker']
---

# Internationalization (i18n) with MDS

## When to Use

MDS components auto-detect `<html lang="...">` and display their built-in labels in the matching language. Apply this skill when built-in behaviour is not enough:

- Translating component text props (`label`, `hint`, `errormessage`, placeholders) in a multilingual app
- Overriding MDS built-in label translations with custom text
- Supporting a language MDS does not include natively (e.g. Danish, Norwegian)

See [Supported Languages](./references/supported-languages.md) for the full list of languages with built-in MDS translations.

## Decision Table

| Need                                                     | Approach                                              | Notes                                                                  |
| -------------------------------------------------------- | ----------------------------------------------------- | ---------------------------------------------------------------------- |
| Translate visible text (labels, hints, errors)           | Set `label`, `hint`, `errormessage`, etc. dynamically | Drive values from your i18n system (e.g. i18next, ngx-translate)       |
| Override MDS built-in labels (ARIA, internal UI strings) | `labels` prop with a partial translation object       | Only override what differs; remaining labels fall back to MDS defaults |
| Support a language MDS does not include natively         | `labels` prop with a full translation object          | Use the TypeScript labels type to ensure key completeness              |

## When NOT to Use

- RTL languages — MDS does not support right-to-left layout
- English-only UIs with no multilingual plans
- When MDS default translations are acceptable and no customisation is needed
- Non-UI code without user-facing text
- Tasks about component usage, layout, or styling without language considerations

## Procedure

### 1. Set the Document Language

Ensure `<html lang="...">` is set correctly. MDS uses this to auto-select built-in translations.

```html
<html lang="de">
  <!-- German -->
</html>
```

### 2. Look Up the Component's Labels

Check [mds-components skill](../mds-components/SKILL.md) or the component API to confirm it has a `labels` prop and which keys it supports.

### 3. Pass Custom Translations

Pass a full or partial labels object to override defaults:

```html
<!-- Full override -->
<mc-multi-select
  label="Pick an option"
  .labels=${{
    selectAll: 'Select everything',
    clearAll: 'Clear everything',
    summary: '{{selectedItems}} out of {{totalItems}} options selected',
    searchPlaceholder: 'Find an option...',
    noResultsFound: 'No options found',
  }}
>
  <mc-option value="1" label="Option 1"></mc-option>
</mc-multi-select>

<!-- Partial override — only what differs; rest falls back to MDS defaults -->
<mc-multi-select
  .labels=${{ selectAll: 'Choose all options' }}
>
  <!-- options -->
</mc-multi-select>
```

### 4. TypeScript: Use the Labels Type

Import the labels interface to catch wrong or missing keys at compile time:

```typescript
import type { IMcMultiSelectLabels } from '@maersk-global/mds-components-core-multi-select/types';

const customLabels: Partial<IMcMultiSelectLabels> = {
  selectAll: 'Select everything',
  clearAll: 'Clear everything',
  summary: '{{selectedItems}} out of {{totalItems}} options selected',
  searchPlaceholder: 'Type to search...',
  noResultsFound: 'No matches found',
};
```

## Hard Constraints

### ❌ Hardcoded English strings vs ✅ values from i18n system

```ts
// ❌ — breaks on language switch
const labels = { selectAll: 'Select all', clearAll: 'Clear all' };

// ✅ — driven by your i18n system
const labels = {
  selectAll: t('multiselect.selectAll'),
  clearAll: t('multiselect.clearAll'),
};
```

### ❌ Missing html lang vs ✅ lang set on root element

```html
<!-- ❌ — MDS falls back to English regardless of user locale -->
<html>
  <!-- ✅ -->
  <html lang="de"></html>
</html>
```

### ❌ Untyped labels object vs ✅ typed with IMcXxxLabels

```ts
// ❌ — wrong keys fail silently
const labels = { selectAll: 'Alles auswählen', unknownKey: 'oops' };

// ✅
import type { IMcMultiSelectLabels } from '@maersk-global/mds-components-core-multi-select/types';
const labels: Partial<IMcMultiSelectLabels> = { selectAll: 'Alles auswählen' };
```

### Absolute rules

- **NEVER** target RTL languages — MDS does not support right-to-left layout
- **NEVER** translate only visible props and leave internal MDS labels (ARIA, UI strings) in English in a multilingual app — use the `labels` prop for those too
- **NEVER** pass a `string` to the `labels` prop — it accepts an object

## Common Mistakes

- Not setting `<html lang="...">`, so MDS auto-detection always falls back to English
- Translating visible props (`label`, `hint`) but forgetting internal MDS labels (accessible names, button text) that require the `labels` prop
- Using `labels` on a component that does not support it — always check the component API first
- Providing a full `labels` object when only a partial override is needed — unset keys fall back to MDS defaults automatically
- Not using the TypeScript labels type, allowing wrong keys that fail silently

## Reference Files

- [Supported Languages](./references/supported-languages.md) — full list of languages with built-in MDS translations and `<html lang>` codes
- [Component skill](../mds-components/SKILL.md) — overview of all components with references to detail component's API
