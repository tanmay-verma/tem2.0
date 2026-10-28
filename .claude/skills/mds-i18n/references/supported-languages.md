# Supported Languages

MDS components have built-in label translations for the following languages. Set `<html lang="...">` to the appropriate code and MDS will apply the matching translations automatically.

| Language            | `<html lang>` code |
| ------------------- | ------------------ |
| English (default)   | `en`               |
| German              | `de`               |
| Spanish             | `es`               |
| French              | `fr`               |
| Italian             | `it`               |
| Portuguese          | `pt`               |
| Turkish             | `tr`               |
| Russian             | `ru`               |
| Chinese Simplified  | `zh`               |
| Chinese Traditional | `zh-TW`            |
| Korean              | `ko`               |
| Japanese            | `ja`               |

## Languages Not Supported by MDS

For languages not in the table above (e.g. Danish `da`, Norwegian `no`, Dutch `nl`), MDS falls back to English. To support these languages, use the `labels` prop on each component to provide a full custom translation object.

## How Auto-Detection Works

MDS reads `document.documentElement.lang` at component initialisation time. If the value matches a supported language code, built-in translations are applied. If the language is unsupported or the attribute is missing, MDS falls back to English.

Changing `<html lang>` at runtime does not automatically re-translate already-rendered components — pass updated `labels` props explicitly when the user switches language.
