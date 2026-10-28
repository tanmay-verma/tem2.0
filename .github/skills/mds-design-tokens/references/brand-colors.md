# Maersk Brand Colour Palette

## When to Use Hardcoded Hex Values

MDS design tokens (CSS custom properties) are always preferred for UI colours. However, **chart and data visualisation configurations** — such as ECharts `color` arrays — cannot reference CSS variables. In these cases only, hardcoded hex values from the official Maersk brand palette are permitted.

**Rule:** Only use hardcoded hex values from this file. Never invent colours outside this palette.

---

## Primary Brand Colours — Use Design Tokens, Not Hex

These colours appear in the brand palette **and** have corresponding design tokens. Always reference them via `var(--mds_brand_...)` in CSS. Use hex only inside chart/visualisation JavaScript configs.

| Colour Name | Hex       | Design Token                                                            |
| ----------- | --------- | ----------------------------------------------------------------------- |
| Maersk Blue | `#42B0D5` | `var(--mds_brand_appearance_secondary_default_background-color)`        |
| Near Black  | `#141414` | `var(--mds_brand_appearance_primary_default_background-color)`          |
| Ocean Blue  | `#003E62` | `var(--mds_brand_appearance_state_info_default_hover_background-color)` |
| Light Blue  | `#A1D1E8` | `var(--mds_brand_appearance_info_weak_border-color)`                    |
| Pale Blue   | `#E2F3FB` | `var(--mds_brand_appearance_info_weak_background-color)`                |
| Medium Grey | `#6A6A6A` | `var(--mds_brand_appearance_neutral_weakest_text-color)`                |
| Light Grey  | `#D4D4D4` | `var(--mds_brand_appearance_neutral_default_border-color)`              |
| Off White   | `#F0F0F0` | `var(--mds_brand_appearance_neutral_weak_background-color)`             |

---

## Extended Brand Palette — No Design Tokens

These colours are part of the official Maersk brand palette but **do not have design tokens**. They are intended for use in charts, graphs, and data visualisations only.

### Blue Family

| Colour Name | Hex       |
| ----------- | --------- |
| Sky Blue    | `#1686BD` |

### Teal Family

| Colour Name   | Hex       |
| ------------- | --------- |
| Teal Dark     | `#034E45` |
| Teal          | `#119C85` |
| Teal Light    | `#97DECD` |
| Teal Lightest | `#DFF7EE` |

### Green Family

| Colour Name    | Hex       |
| -------------- | --------- |
| Green Dark     | `#316307` |
| Green          | `#6CA926` |
| Green Light    | `#B9E371` |
| Green Lightest | `#E8F6D0` |

### Orange Family

| Colour Name     | Hex       |
| --------------- | --------- |
| Orange Dark     | `#903E00` |
| Orange          | `#F3870C` |
| Orange Light    | `#FED195` |
| Orange Lightest | `#FFF5DD` |

### Red / Alert Family

| Colour Name  | Hex       |
| ------------ | --------- |
| Red Dark     | `#981F19` |
| Red          | `#EA5D4B` |
| Red Light    | `#FDA99E` |
| Red Lightest | `#FFE9E7` |

---

## Data Visualisation Colour Palettes

Use these ready-made palettes for ECharts or any other chart library. Source: MDS data visualisation guidelines.

### Categorical — Distinguishing Unrelated Data Series

Use when showing multiple independent data categories side by side.

```js
const categoricalColors = [
  '#42B0D5', // Blue-300-Maersk (primary brand blue)
  '#00243D', // Blue-900-Dark
  '#CFCFCF', // Grey-400
  '#FA6A55', // Red-300-Accent
  '#4DB5AB', // Teal-300-Accent
];
```

### Sequential — Showing Magnitude / Progression in One Hue

Use for heatmaps, choropleth maps, or showing a single metric across a range.

```js
const sequentialColors = [
  '#00243D', // Blue-900-Dark (darkest)
  '#003D6D', // Blue-800
  '#005487', // Blue-700
  '#0073AB', // Blue-600-Dark
  '#058EC6', // Blue-500
  '#0CA0CE', // Blue-400
  '#42B0D5', // Blue-300-Maersk
  '#77C6E0', // Blue-200
  '#91D8F2', // Blue-100
  '#B5E0F5', // Blue-50 (lightest)
];
```

### Sentiment — Positive / Neutral / Negative

Use for showing performance against a target or outcome polarity.

```js
const sentimentColors = {
  positive: '#40AB35', // Success green
  neutral: '#FFD029', // Warning yellow
  negative: '#B80012', // Danger red
};
```

### Gradual — Min / Mid / Max Scale

Use for a single metric shown across a two-colour gradient.

```js
const gradualColors = {
  max: '#00243D', // Blue-900-Dark
  mid: '#0CA0CE', // Blue-400
  min: '#B5E0F5', // Blue-50
};
```

---

## Chart Styling Rules

| Element                 | Value                                                                                      |
| ----------------------- | ------------------------------------------------------------------------------------------ |
| Line width              | 2px solid                                                                                  |
| Data point markers      | 4px solid circle                                                                           |
| Title font colour       | `#141414` (Near Black) — or `var(--mds_brand_appearance_primary_default_background-color)` |
| Axis / grid line colour | `#CFCFCF` (Grey-400)                                                                       |
| Axis label colour       | `#141414` (Near Black)                                                                     |

---

## What Is NOT Allowed

- Inventing colours outside this palette (`#FF0000`, `blue`, custom brand colours)
- Using extended palette colours (teal, green, orange, red families) in regular UI elements — those use MDS semantic tokens (`mc-tag appearance="success"`, `mc-notification appearance="warning"`, etc.)
- Using any hardcoded hex in CSS for standard UI — always use `var(--mds_brand_appearance_...)` or MDS CSS classes
