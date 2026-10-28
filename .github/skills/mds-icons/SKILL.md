---
name: mds-icons
description: 'Find and use MDS icons correctly. Use for: icon discovery, icon names, icon sizes, icon path configuration, mc-icon component, icon prop on buttons and other components, iconsDynamicImportPath setup, CDN bundle, icons not rendering.'
related-skills: ['mds-setup', 'mds-a11y', 'mds-components']
related-components: ['mc-icon', 'mc-button', 'mc-input']
---

# Find and Use MDS Icons

## When to Use

- Looking up a valid icon name before using `icon` or `trailingicon` props
- Using the `mc-icon` standalone component
- Configuring icon loading (`forceIconsCdnBundle` or `iconsDynamicImportPath`)
- Troubleshooting icons not rendering
- For most cases use 20px icons; use 16px for very compact UIs and for simpler icons (like star), and 24px for larger standalone icons

## Decision Table

| Need                                     | Approach                                                      |
| ---------------------------------------- | ------------------------------------------------------------- |
| Display a standalone icon                | `mc-icon` with `icon` prop                                    |
| Add icon to a button                     | `mc-button` with `icon` (leading) or `trailingicon` prop      |
| Add icon inside an input                 | `mc-input` with `icon` prop                                   |
| Find the correct icon name for a concept | Search [icons-list.md](./references/icons-list.md) by keyword |
| Icons not showing up at all              | Configure `MdsConfig` — see Procedure step 2                  |

## When NOT to Use

- Importing SVG files directly — always use the `icon` prop, which handles dynamic loading
- Guessing icon names from memory — always verify in [icons-list.md](./references/icons-list.md)
- Using the `mi-` prefix in icon prop values — use bare names only (e.g. `"arrow-down"`, not `"mi-arrow-down"`)
- When user is asking for an icon that doesn't exist in MDS, suggest requesting the icon from MDS Team, don't suggest a non-MDS icon or a made-up name
- When user is asking for sizes other than 16, 20, or 24, explain the standard sizes and recommend sticking to them for consistency, suggest using pictograms instead if they need something more custom

## Procedure

### 1. Find the Icon Name

**NEVER guess icon names.** All valid icon names are in [icons-list.md](./references/icons-list.md), including keywords for each icon.

How to find the right icon:

1. Open [icons-list.md](./references/icons-list.md)
2. Search for a keyword matching your need (e.g. `search`, `arrow`, `container`)
3. Use the exact string from the list — no prefix, no suffix, no transformation

**Example:** Need a checkmark → search for `"check"` → find `check`, `check-circle`, `check-circle-solid`, `check-square` → pick the one that fits.

### 2. Configure Icon Loading

Icons are loaded dynamically at runtime. **Without configuration, icons will not render.**

Prefer the CDN bundle — simpler setup, no path issues:

```ts
import { MdsConfig } from '@maersk-global/mds-config';
MdsConfig.forceIconsCdnBundle = true;
```

Only use the local path if the CDN is unavailable:

```ts
MdsConfig.iconsDynamicImportPath = '/node_modules/'; // dev
// MdsConfig.iconsDynamicImportPath = '/assets/node_modules/'; // prod
```

Configure this in the app entry point **before** any MDS component renders.

**Troubleshooting:**

| Symptom                             | Cause                                         | Fix                                                                   |
| ----------------------------------- | --------------------------------------------- | --------------------------------------------------------------------- |
| No icon visible                     | `MdsConfig` not configured                    | Add `MdsConfig.forceIconsCdnBundle = true`                            |
| 404 errors for icon SVGs in console | Path configured but packages not served there | Verify `@maersk-global/icons/` is accessible at the configured path   |
| Icon renders in dev, not in prod    | Dev path doesn't work in production           | Set a prod-specific path and copy packages to static assets           |
| Icon prop set but nothing renders   | Icon name is invalid or misspelled            | Look up the exact name in [icons-list.md](./references/icons-list.md) |

### 3. Standalone Icon — mc-icon

```html
<!-- Vanilla / Angular / Vue -->
<mc-icon icon="check-circle" size="24"></mc-icon>
<mc-icon icon="container-stacked" size="20"></mc-icon>
<mc-icon icon="exclamation-triangle" size="20" title="Warning"></mc-icon>
```

```tsx
// React
import { McIcon } from '@maersk-global/mds-react-wrapper/components-core/mc-icon';

<McIcon icon="check-circle" size="24" />
<McIcon icon="exclamation-triangle" size="20" title="Warning" />
```

**Props:**

| Prop    | Type                   | Default | Notes                                                                                             |
| ------- | ---------------------- | ------- | ------------------------------------------------------------------------------------------------- |
| `icon`  | `string`               | `heart` | Name from [icons-list.md](./references/icons-list.md)                                             |
| `size`  | `'16' \| '20' \| '24'` | `'20'`  | 20 is default for most UI contexts, in few cases (simple icons like star), 16 px icon can be used |
| `title` | `string`               | —       | Required for accessibility on meaningful icons                                                    |

**Sizes:**

| Size | When to use                                  |
| ---- | -------------------------------------------- |
| `16` | Very compact UIs, inline with small text     |
| `20` | Default — buttons, lists, compact interfaces |
| `24` | Larger UI elements, standalone icons         |

### 4. Icon Prop on Other Components

Many MDS components accept `icon` and/or `trailingicon`:

```html
<!-- Leading icon on button -->
<mc-button icon="plus" label="Add booking" appearance="primary"></mc-button>

<!-- Trailing icon on button -->
<mc-button label="Download" trailingicon="tray-arrow-down" variant="outlined"></mc-button>

<!-- Icon on input -->
<mc-input label="Search" icon="magnifying-glass"></mc-input>
```

```tsx
// React
<McButton icon="plus" label="Add booking" appearance="primary" />
<McButton label="Download" trailingicon="tray-arrow-down" variant="outlined" />
<McInput label="Search" icon="magnifying-glass" />
```

### 5. Icon Name Patterns

Understanding naming conventions helps narrow down icon searches:

- **Outline vs solid:** `bell` → `bell-solid`, `check-circle` → `check-circle-solid`
- **Directional variants:** `arrow-up`, `arrow-down`, `arrow-left`, `arrow-right`
- **State variants:** `container`, `container-check`, `container-clock`, `container-exclamation`
- **Negation / off:** `bell` → `bell-slash`, `eye` → `eye-slash`, `wifi` → `wifi-offline`

## Hard Constraints

### ❌ Invented icon name vs ✅ verified name from icons-list.md

```html
<!-- ❌ — these names do not exist in MDS -->
<mc-icon icon="close"></mc-icon>
<mc-icon icon="search"></mc-icon>
<mc-icon icon="edit"></mc-icon>

<!-- ✅ — correct MDS names -->
<mc-icon icon="times"></mc-icon>
<mc-icon icon="magnifying-glass"></mc-icon>
<mc-icon icon="pencil"></mc-icon>
```

### ❌ mi- prefix vs ✅ bare name

```html
<!-- ❌ -->
<mc-icon icon="mi-arrow-down"></mc-icon>

<!-- ✅ -->
<mc-icon icon="arrow-down"></mc-icon>
```

### ❌ Direct SVG import vs ✅ icon prop

```ts
// ❌ — bypasses MDS dynamic loading
import CheckIcon from '@maersk-global/icons/check.svg';

// ✅ — use the icon prop
<mc-icon icon="check"></mc-icon>
```

### ❌ Missing MdsConfig vs ✅ configured before first render

```ts
// ❌ — icons silently fail to load
import { McButton } from '@maersk-global/mds-react-wrapper/components-core/mc-button';

// ✅
import { MdsConfig } from '@maersk-global/mds-config';
MdsConfig.forceIconsCdnBundle = true;
import { McButton } from '@maersk-global/mds-react-wrapper/components-core/mc-button';
```

### Common hallucinated names — always use the correct MDS name

| ❌ Wrong (does not exist)        | ✅ Correct MDS icon                       |
| -------------------------------- | ----------------------------------------- |
| `close`, `x`, `cross`, `dismiss` | `times` or `times-circle`                 |
| `delete`, `bin`                  | `trash`                                   |
| `edit`                           | `pencil`                                  |
| `search`, `find`                 | `magnifying-glass`                        |
| `menu`, `hamburger`              | `bars-horizontal`                         |
| `more`, `more-vertical`, `kebab` | `ellipsis-vertical`                       |
| `more-horizontal`, `meatballs`   | `ellipsis-horizontal`                     |
| `settings`, `gear`               | `cog`                                     |
| `home`                           | `house`                                   |
| `add`, `create`, `new`           | `plus` or `plus-circle`                   |
| `remove`, `subtract`             | `minus` or `minus-circle`                 |
| `mail`, `email`                  | `envelope`                                |
| `warning`, `alert`               | `exclamation-triangle`                    |
| `error`                          | `exclamation-circle` or `times-circle`    |
| `success`, `tick`, `done`        | `check` or `check-circle`                 |
| `info`, `information`            | `info-circle`                             |
| `help`, `question`               | `question-circle`                         |
| `notification`                   | `bell`                                    |
| `account`, `profile`, `avatar`   | `user` or `user-circle`                   |
| `logout`, `sign-out`, `exit`     | `door-arrow-right`                        |
| `download`                       | `tray-arrow-down`                         |
| `upload`                         | `tray-arrow-up`                           |
| `filter`                         | `funnel` or `bars-horizontal-funnel-down` |
| `sort`                           | `arrows-down-up`                          |
| `refresh`, `reload`              | `rotate` or `arrow-clockwise`             |
| `save`                           | `floppy-disk`                             |
| `attachment`                     | `paperclip`                               |
| `chat`, `message`                | `comment` or `comments`                   |
| `ship`, `boat`                   | `vessel-side` or `vessel-front`           |
| `truck`                          | `truck-side` or `truck-front`             |
| `plane`, `flight`                | `airplane`                                |

## Common Mistakes

- Using `close`, `search`, or `edit` — these do not exist; use `times`, `magnifying-glass`, `pencil`
- Forgetting `MdsConfig` configuration — icons silently fail to render with no error
- Adding `MdsConfig` after component imports — must come first
- Omitting `title` on a standalone `mc-icon` that conveys meaning — required for accessibility
- Using `mc-icon` inside a button instead of the `icon` prop on `mc-button`

## Reference Files

- [Icons list with keywords](./references/icons-list.md) — complete list of all MDS icons with keywords for discovery
- [Component skill](../mds-components/SKILL.md) — overview of all components with references to detail component's API
