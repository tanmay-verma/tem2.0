# MAERSK Brand Design Tokens

Complete list of MDS color, border and motion, gap, layout, and typography tokens for the maersk brand. Use as CSS custom properties: `var(--token_name)`.

> **Note:** Values shown are for the **light** & **dark** theme. Dark theme swaps many of these values automatically. See the [Light vs Dark differences](#light-vs-dark-theme-differences) section for details.

## Installation

```bash
npm install @maersk-global/mds-design-tokens 
```

## Imports

### DARK theme

```html
<link rel="stylesheet" href="./node_modules/@maersk-global/mds-design-tokens/maersk/dark/css/design-tokens-px.css" />
```

```css
@import url("@maersk-global/mds-design-tokens/maersk/dark/css/design-tokens-px.css");
```

```javascript
import "@maersk-global/mds-design-tokens/maersk/dark/css/design-tokens-px.css";
```

```css
@import url("@maersk-global/mds-design-tokens/maersk/dark/css/design-tokens-px.scss");
```

### LIGHT theme

```html
<link rel="stylesheet" href="./node_modules/@maersk-global/mds-design-tokens/maersk/light/css/design-tokens-px.css" />
```

```css
@import url("@maersk-global/mds-design-tokens/maersk/light/css/design-tokens-px.css");
```

```javascript
import "@maersk-global/mds-design-tokens/maersk/light/css/design-tokens-px.css";
```

```css
@import url("@maersk-global/mds-design-tokens/maersk/light/css/design-tokens-px.scss");
```

## Color Design Tokens Values

### Color Values for dark theme

Color palette, theme colors, and appearance tokens

| Token                       | Value   | Use for.    |
|-----------------------------|---------|-------------|
| `mds_brand_appearance_neutral_default_background-color` | `rgb(20,20,20)` | Neutral default background color. |
| `mds_brand_appearance_neutral_default_on-background-color` | `rgb(240,240,240)` | Neutral default text color to be used on default background. |
| `mds_brand_appearance_neutral_default_border-color` | `rgb(76,76,76)` | Neutral default border color. |
| `mds_brand_appearance_neutral_default_opacity_border-color` | `rgba(255,255,255,0.24)` | Neutral default border color with opacity. |
| `mds_brand_appearance_neutral_weakest_background-color` | `rgb(33,33,33)` | Neutral weakest background color. |
| `mds_brand_appearance_neutral_weakest_on-background-color` | `rgb(240,240,240)` | Neutral weakest text color to be used on weakest background. |
| `mds_brand_appearance_neutral_weak_background-color` | `rgb(54,54,54)` | Neutral weak background color. |
| `mds_brand_appearance_neutral_weak_on-background-color` | `rgb(240,240,240)` | Neutral weak text color to be used on weak background. |
| `mds_brand_appearance_neutral_weak_border-color` | `rgb(54,54,54)` | Neutral weak border color. |
| `mds_brand_appearance_neutral_weak_opacity_background-color` | `rgba(255,255,255,0.14)` | Neutral weak background color with opacity. |
| `mds_brand_appearance_neutral_strong_background-color` | `rgb(76,76,76)` | Neutral strong background color. |
| `mds_brand_appearance_neutral_strong_on-background-color` | `rgb(240,240,240)` | Neutral strong text color to be used on strong background. |
| `mds_brand_appearance_neutral_strongest_background-color` | `rgb(106,106,106)` | Neutral strongest background color. |
| `mds_brand_appearance_neutral_strongest_on-background-color` | `rgb(240,240,240)` | Neutral strongest text color to be used on strongest background. |
| `mds_brand_appearance_neutral_inverse_background-color` | `rgb(255,255,255)` | Neutral inverse background color. |
| `mds_brand_appearance_neutral_inverse_on-background-color` | `rgb(20,20,20)` | Neutral inverse text color to be used on inverse background. |
| `mds_brand_appearance_neutral_inverse_border-color` | `rgb(20,20,20)` | Neutral inverse border color. |
| `mds_brand_appearance_primary_default_background-color` | `rgb(255,255,255)` | Primary default background color. |
| `mds_brand_appearance_primary_default_on-background-color` | `rgb(20,20,20)` | Primary default text color to be used on default background. |
| `mds_brand_appearance_primary_default_border-color` | `rgb(255,255,255)` | Primary default border color. |
| `mds_brand_appearance_primary_default_link-color` | `rgb(66,176,213)` | Primary default link color. |
| `mds_brand_appearance_primary_weak_background-color` | `rgb(54,54,54)` | Primary weak background color. |
| `mds_brand_appearance_primary_weak_on-background-color` | `rgb(240,240,240)` | Primary weak text color to be used on weak background. |
| `mds_brand_appearance_primary_weak_border-color` | `rgb(54,54,54)` | Primary weak border color. |
| `mds_brand_appearance_secondary_default_background-color` | `rgb(66,176,213)` | Secondary default background color. It's a brand color. Use it sparingly, only in cases where it is needed to highlight important information or actions. |
| `mds_brand_appearance_secondary_default_on-background-color` | `rgb(20,20,20)` | Secondary default text color to be used on default background. It's a brand color. Use it sparingly, only in cases where it is needed to highlight important information or actions. |
| `mds_brand_appearance_secondary_default_border-color` | `rgb(66,176,213)` | Secondary default border color. It's a brand color. Use it sparingly, only in cases where it is needed to highlight important information or actions. |
| `mds_brand_appearance_secondary_weak_background-color` | `rgb(12,36,44)` | Secondary weak background color. |
| `mds_brand_appearance_secondary_weak_on-background-color` | `rgb(158,215,234)` | Secondary weak text color to be used on weak background. |
| `mds_brand_appearance_secondary_weak_border-color` | `rgba(23,69,84)` | Secondary weak border color. |
| `mds_brand_appearance_success_default_background-color` | `rgb(127, 209, 117)` | Success default background color. Use it to indicate successful actions or states. |
| `mds_brand_appearance_success_default_on-background-color` | `rgb(20, 20, 20)` | Success default text color to be used on default background. Use it to indicate successful actions or states. |
| `mds_brand_appearance_success_default_border-color` | `rgb(127, 209, 117)` | Success default border color. Use it to indicate successful actions or states. |
| `mds_brand_appearance_success_weak_background-color` | `rgb(18, 51, 17)` | Success weak background color. Use it to indicate successful actions or states in a less prominent way. |
| `mds_brand_appearance_success_weak_on-background-color` | `rgb(216, 242, 213)` | Success weak text color to be used on weak background. Use it to indicate successful actions or states in a less prominent way. |
| `mds_brand_appearance_success_weak_border-color` | `rgb(27, 70, 23)` | Success weak border color. Use it to indicate successful actions or states in a less prominent way. |
| `mds_brand_appearance_warning_default_background-color` | `rgb(242, 205, 89)` | Warning default background color. Use it to indicate warnings or important information that requires attention. |
| `mds_brand_appearance_warning_default_on-background-color` | `rgb(20, 20, 20)` | Warning default text color to be used on default background. Use it to indicate warnings or important information that requires attention. |
| `mds_brand_appearance_warning_default_border-color` | `rgb(242, 205, 89)` | Warning default border color. Use it to indicate warnings or important information that requires attention. |
| `mds_brand_appearance_warning_weak_background-color` | `rgb(63, 51, 16)` | Warning weak background color. Use it to indicate warnings or important information in a less prominent way. |
| `mds_brand_appearance_warning_weak_on-background-color` | `rgb(253, 237, 186)` | Warning weak text color to be used on weak background. Use it to indicate warnings or important information in a less prominent way. |
| `mds_brand_appearance_warning_weak_border-color` | `rgb(83, 68, 19)` | Warning weak border color. Use it to indicate warnings or important information in a less prominent way. |
| `mds_brand_appearance_error_default_background-color` | `rgb(255, 162, 166)` | Error default background color. Use it to indicate errors or critical issues that require immediate attention. |
| `mds_brand_appearance_error_default_on-background-color` | `rgb(20, 20, 20)` | Error default text color to be used on default background. Use it to indicate errors or critical issues that require immediate attention. |
| `mds_brand_appearance_error_default_border-color` | `rgb(255, 162, 166)` | Error default border color. Use it to indicate errors or critical issues that require immediate attention. |
| `mds_brand_appearance_error_weak_background-color` | `rgb(80, 23, 33)` | Error weak background color. Use it to indicate errors or critical issues in a less prominent way. |
| `mds_brand_appearance_error_weak_on-background-color` | `rgb(247, 229, 230)` | Error weak text color to be used on weak background. Use it to indicate errors or critical issues in a less prominent way. |
| `mds_brand_appearance_error_weak_border-color` | `rgb(104, 28, 37)` | Error weak border color. Use it to indicate errors or critical issues in a less prominent way. |
| `mds_brand_appearance_info_default_background-color` | `rgb(0,89,134)` | Info default background color. Use it to indicate informational messages or non-critical updates. |
| `mds_brand_appearance_info_default_on-background-color` | `rgb(255,255,255)` | Info default text color to be used on default background. Use it to indicate informational messages or non-critical updates. |
| `mds_brand_appearance_info_default_border-color` | `rgb(22,134,189)` | Info default border color. Use it to indicate informational messages or non-critical updates. |
| `mds_brand_appearance_info_weak_background-color` | `rgb(0,36,61)` | Info weak background color. Use it to indicate informational messages or non-critical updates in a less prominent way. |
| `mds_brand_appearance_info_weak_on-background-color` | `rgb(195,228,243)` | Info weak text color to be used on weak background. Use it to indicate informational messages or non-critical updates in a less prominent way. |
| `mds_brand_appearance_info_weak_border-color` | `rgb(0,62,98)` | Info weak border color. Use it to indicate informational messages or non-critical updates in a less prominent way. |
| `mds_brand_appearance_static_dark` | `rgb(20,20,20)` | Dark static color. |
| `mds_brand_appearance_static_light` | `rgb(255,255,255)` | Light static color. |
| `mds_brand_appearance_static_brand` | `rgb(66,176,213)` | Brand static color. Use it to represent the brand identity consistently across UI. |
| `mds_brand_appearance_static_logo_url` | `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='123' height='48' viewBox='0 0 123 48' fill='none'> <path fill-rule='evenodd' clip-rule='evenodd' d='M110.254 29.8276V17.7867H113.123V22.6022L118.585 17.7867H122.469L115.952 23.3796L122.703 29.8276H118.683L113.123 24.3512V29.8276H110.254Z' fill='white'/> <path fill-rule='evenodd' clip-rule='evenodd' d='M98.7957 29.8272H97.838C96.5877 29.8272 95.9857 29.108 95.9857 28.0606V26.4881H98.7957V27.4199H104.767V24.9554H97.9179C96.8245 24.9554 96.0368 24.2232 96.0368 23.2082V19.6333C96.0368 18.5517 96.8942 17.7872 97.9364 17.7872H105.766C106.824 17.7872 107.556 18.573 107.556 19.7101V21.1467H104.767V20.1945H98.7957V22.5666H105.625C106.633 22.5666 107.556 23.2304 107.556 24.5079V27.9441C107.556 29.1154 106.904 29.8272 105.684 29.8272H98.7957Z' fill='white'/> <path fill-rule='evenodd' clip-rule='evenodd' d='M84.8276 23.3087H90.8962V20.1878H84.8276V23.3087ZM81.9974 29.821V17.7792H91.6637C92.9549 17.7792 93.7055 18.5234 93.7055 19.7991V23.8435C93.7055 24.7754 92.8778 25.6157 91.2717 25.6157C91.1807 25.6212 91.0887 25.6157 90.993 25.6157L93.8067 29.821H90.7014L88.0335 25.7035H84.8278V29.821H81.9974Z' fill='white'/> <path fill-rule='evenodd' clip-rule='evenodd' d='M68.1803 29.8209V17.78H79.7313V20.1873H70.9698V22.5788H78.482V24.9288H70.9698V27.4127H79.7527V29.8209H68.1803Z' fill='white'/> <path fill-rule='evenodd' clip-rule='evenodd' d='M61.8197 25.159L59.5986 20.0551L57.4287 25.159H61.8197ZM55.442 29.8209H52.3199L57.6872 17.78H61.5301L66.9355 29.8209H63.8533L62.7897 27.422H56.4731L55.442 29.8209Z' fill='white'/> <path fill-rule='evenodd' clip-rule='evenodd' d='M36.7357 29.8209V17.78H39.9544L44.0342 26.7776L48.0536 17.78H51.1376V29.8209H48.4828V22.8164L45.4192 29.8209H42.5897L39.4872 22.8543V29.8209H36.7357Z' fill='white'/> <path fill-rule='evenodd' clip-rule='evenodd' d='M24.6371 34.0356C24.6371 35.673 23.3101 37 21.6736 37H2.96444C1.32701 37 0 35.673 0 34.0356V13.9653C0 12.3279 1.32701 11 2.96444 11H21.6736C23.3101 11 24.6371 12.3279 24.6371 13.9653V34.0356Z' fill='%2342B0D5'/> <path fill-rule='evenodd' clip-rule='evenodd' d='M16.1836 23.6561L20.9683 17.5436L20.9536 17.5242L14.0392 20.9159L12.331 13.2941H12.3067L10.5993 20.9159L3.68494 17.5242L3.66936 17.5436L8.45492 23.6561L1.54053 27.0487L1.54572 27.0725H9.21992L7.51252 34.6952L7.53415 34.7058L12.3188 28.5933L17.1035 34.7058L17.1252 34.6944L15.4186 27.0725H23.0928L23.098 27.0487L16.1836 23.6561Z' fill='white'/> </svg>")` | Full brand logo in SVG format. Used in mc-top-bar component. |
| `mds_brand_appearance_static_logo_width` | `123px` | Width of the full brand logo. |
| `mds_brand_appearance_static_logo-short_url` | `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='123' height='48' viewBox='0 0 123 48' fill='none'> <path fill-rule='evenodd' clip-rule='evenodd' d='M110.254 29.8276V17.7867H113.123V22.6022L118.585 17.7867H122.469L115.952 23.3796L122.703 29.8276H118.683L113.123 24.3512V29.8276H110.254Z' fill='white'/> <path fill-rule='evenodd' clip-rule='evenodd' d='M98.7957 29.8272H97.838C96.5877 29.8272 95.9857 29.108 95.9857 28.0606V26.4881H98.7957V27.4199H104.767V24.9554H97.9179C96.8245 24.9554 96.0368 24.2232 96.0368 23.2082V19.6333C96.0368 18.5517 96.8942 17.7872 97.9364 17.7872H105.766C106.824 17.7872 107.556 18.573 107.556 19.7101V21.1467H104.767V20.1945H98.7957V22.5666H105.625C106.633 22.5666 107.556 23.2304 107.556 24.5079V27.9441C107.556 29.1154 106.904 29.8272 105.684 29.8272H98.7957Z' fill='white'/> <path fill-rule='evenodd' clip-rule='evenodd' d='M84.8276 23.3087H90.8962V20.1878H84.8276V23.3087ZM81.9974 29.821V17.7792H91.6637C92.9549 17.7792 93.7055 18.5234 93.7055 19.7991V23.8435C93.7055 24.7754 92.8778 25.6157 91.2717 25.6157C91.1807 25.6212 91.0887 25.6157 90.993 25.6157L93.8067 29.821H90.7014L88.0335 25.7035H84.8278V29.821H81.9974Z' fill='white'/> <path fill-rule='evenodd' clip-rule='evenodd' d='M68.1803 29.8209V17.78H79.7313V20.1873H70.9698V22.5788H78.482V24.9288H70.9698V27.4127H79.7527V29.8209H68.1803Z' fill='white'/> <path fill-rule='evenodd' clip-rule='evenodd' d='M61.8197 25.159L59.5986 20.0551L57.4287 25.159H61.8197ZM55.442 29.8209H52.3199L57.6872 17.78H61.5301L66.9355 29.8209H63.8533L62.7897 27.422H56.4731L55.442 29.8209Z' fill='white'/> <path fill-rule='evenodd' clip-rule='evenodd' d='M36.7357 29.8209V17.78H39.9544L44.0342 26.7776L48.0536 17.78H51.1376V29.8209H48.4828V22.8164L45.4192 29.8209H42.5897L39.4872 22.8543V29.8209H36.7357Z' fill='white'/> <path fill-rule='evenodd' clip-rule='evenodd' d='M24.6371 34.0356C24.6371 35.673 23.3101 37 21.6736 37H2.96444C1.32701 37 0 35.673 0 34.0356V13.9653C0 12.3279 1.32701 11 2.96444 11H21.6736C23.3101 11 24.6371 12.3279 24.6371 13.9653V34.0356Z' fill='%2342B0D5'/> <path fill-rule='evenodd' clip-rule='evenodd' d='M16.1836 23.6561L20.9683 17.5436L20.9536 17.5242L14.0392 20.9159L12.331 13.2941H12.3067L10.5993 20.9159L3.68494 17.5242L3.66936 17.5436L8.45492 23.6561L1.54053 27.0487L1.54572 27.0725H9.21992L7.51252 34.6952L7.53415 34.7058L12.3188 28.5933L17.1035 34.7058L17.1252 34.6944L15.4186 27.0725H23.0928L23.098 27.0487L16.1836 23.6561Z' fill='white'/> </svg>")` | Short brand logo (without the brand name) in SVG format. Used in mc-top-bar component. |
| `mds_brand_appearance_static_logo-short_width` | `123px` | Width of the short brand logo. |
| `mds_brand_appearance_opacity_default_10` | `rgba(20, 20, 20, 0.1)` | Default opacity 10% for white background. Use it to create a semi-transparent effect. |
| `mds_brand_appearance_opacity_default_30` | `rgba(20, 20, 20, 0.3)` | Default opacity 30% for white background. Use it to create a semi-transparent effect. |
| `mds_brand_appearance_opacity_default_50` | `rgba(20, 20, 20, 0.5)` | Default opacity 50% for white background. Use it to create a semi-transparent effect. |
| `mds_brand_appearance_opacity_default_70` | `rgba(20, 20, 20, 0.7)` | Default opacity 70% for white background. Use it to create a semi-transparent effect. |
| `mds_brand_appearance_opacity_default_90` | `rgba(20, 20, 20, 0.9)` | Default opacity 90% for white background. Use it to create a semi-transparent effect. |
| `mds_brand_appearance_opacity_inverse_10` | `rgba(255, 255, 255, 0.1)` | Inverse opacity 10% for dark background. Use it to create a semi-transparent effect. |
| `mds_brand_appearance_opacity_inverse_30` | `rgba(255, 255, 255, 0.3)` | Inverse opacity 30% for dark background. Use it to create a semi-transparent effect. |
| `mds_brand_appearance_opacity_inverse_50` | `rgba(255, 255, 255, 0.5)` | Inverse opacity 50% for dark background. Use it to create a semi-transparent effect. |
| `mds_brand_appearance_opacity_inverse_70` | `rgba(255, 255, 255, 0.7)` | Inverse opacity 70% for dark background. Use it to create a semi-transparent effect. |
| `mds_brand_appearance_opacity_inverse_90` | `rgba(255, 255, 255, 0.9)` | Inverse opacity 90% for dark background. Use it to create a semi-transparent effect. |
| `mds_brand_appearance_shadow_low_first-layer_color` | `rgba(0, 0, 0, 0.04)` | Low shadow first layer color. Use it to create a subtle shadow effect. |
| `mds_brand_appearance_shadow_low_first-layer_offset-x` | `0px` | Low shadow first layer horizontal offset. Use it to position the shadow slightly to the right. |
| `mds_brand_appearance_shadow_low_first-layer_offset-y` | `3px` | Low shadow first layer vertical offset. Use it to position the shadow slightly below the element. |
| `mds_brand_appearance_shadow_low_first-layer_blur-radius` | `5px` | Low shadow first layer blur radius. Use it to create a soft shadow effect. |
| `mds_brand_appearance_shadow_low_first-layer_spread-radius` | `-1px` | Low shadow first layer spread radius. Use it to slightly reduce the size of the shadow. |
| `mds_brand_appearance_shadow_low_second-layer_color` | `rgba(0, 0, 0, 0.03)` | Low shadow second layer color. Use it to create a subtle shadow effect. |
| `mds_brand_appearance_shadow_low_second-layer_offset-x` | `0px` | Low shadow second layer horizontal offset. Use it to position the shadow slightly to the right. |
| `mds_brand_appearance_shadow_low_second-layer_offset-y` | `1px` | Low shadow second layer vertical offset. Use it to position the shadow slightly below the element. |
| `mds_brand_appearance_shadow_low_second-layer_blur-radius` | `18px` | Low shadow second layer blur radius. Use it to create a soft shadow effect. |
| `mds_brand_appearance_shadow_low_second-layer_spread-radius` | `0px` | Low shadow second layer spread radius. Use it to keep the shadow size consistent. |
| `mds_brand_appearance_shadow_low_third-layer_color` | `rgba(0, 0, 0, 0.03)` | Low shadow third layer color. Use it to create a subtle shadow effect. |
| `mds_brand_appearance_shadow_low_third-layer_offset-x` | `0px` | Low shadow third layer horizontal offset. Use it to position the shadow slightly to the right. |
| `mds_brand_appearance_shadow_low_third-layer_offset-y` | `6px` | Low shadow third layer vertical offset. Use it to position the shadow slightly below the element. |
| `mds_brand_appearance_shadow_low_third-layer_blur-radius` | `10px` | Low shadow third layer blur radius. Use it to create a soft shadow effect. |
| `mds_brand_appearance_shadow_low_third-layer_spread-radius` | `0px` | Low shadow third layer spread radius. Use it to keep the shadow size consistent. |
| `mds_brand_appearance_shadow_medium_first-layer_color` | `rgba(0, 0, 0, 0.04)` | Medium shadow first layer color. Use it to create a more pronounced shadow effect. |
| `mds_brand_appearance_shadow_medium_first-layer_offset-x` | `0px` | Medium shadow first layer horizontal offset. Use it to position the shadow slightly to the right. |
| `mds_brand_appearance_shadow_medium_first-layer_offset-y` | `3px` | Medium shadow first layer vertical offset. Use it to position the shadow slightly below the element. |
| `mds_brand_appearance_shadow_medium_first-layer_blur-radius` | `5px` | Medium shadow first layer blur radius. Use it to create a soft shadow effect. |
| `mds_brand_appearance_shadow_medium_first-layer_spread-radius` | `-1px` | Medium shadow first layer spread radius. Use it to slightly reduce the size of the shadow. |
| `mds_brand_appearance_shadow_medium_second-layer_color` | `rgba(0, 0, 0, 0.03)` | Medium shadow second layer color. Use it to create a more pronounced shadow effect. |
| `mds_brand_appearance_shadow_medium_second-layer_offset-x` | `0px` | Medium shadow second layer horizontal offset. Use it to position the shadow slightly to the right. |
| `mds_brand_appearance_shadow_medium_second-layer_offset-y` | `1px` | Medium shadow second layer vertical offset. Use it to position the shadow slightly below the element. |
| `mds_brand_appearance_shadow_medium_second-layer_blur-radius` | `18px` | Medium shadow second layer blur radius. Use it to create a soft shadow effect. |
| `mds_brand_appearance_shadow_medium_second-layer_spread-radius` | `2px` | Medium shadow second layer spread radius. Use it to slightly increase the size of the shadow. |
| `mds_brand_appearance_shadow_medium_third-layer_color` | `rgba(0, 0, 0, 0.03)` | Medium shadow third layer color. Use it to create a more pronounced shadow effect. |
| `mds_brand_appearance_shadow_medium_third-layer_offset-x` | `0px` | Medium shadow third layer horizontal offset. Use it to position the shadow slightly to the right. |
| `mds_brand_appearance_shadow_medium_third-layer_offset-y` | `6px` | Medium shadow third layer vertical offset. Use it to position the shadow slightly below the element. |
| `mds_brand_appearance_shadow_medium_third-layer_blur-radius` | `10px` | Medium shadow third layer blur radius. Use it to create a soft shadow effect. |
| `mds_brand_appearance_shadow_medium_third-layer_spread-radius` | `4px` | Medium shadow third layer spread radius. Use it to slightly increase the size of the shadow. |
| `mds_brand_appearance_shadow_high_first-layer_color` | `rgba(0, 0, 0, 0.04)` | High shadow first layer color. Use it to create a strong shadow effect. |
| `mds_brand_appearance_shadow_high_first-layer_offset-x` | `0px` | High shadow first layer horizontal offset. Use it to position the shadow slightly to the right. |
| `mds_brand_appearance_shadow_high_first-layer_offset-y` | `3px` | High shadow first layer vertical offset. Use it to position the shadow slightly below the element. |
| `mds_brand_appearance_shadow_high_first-layer_blur-radius` | `5px` | High shadow first layer blur radius. Use it to create a soft shadow effect. |
| `mds_brand_appearance_shadow_high_first-layer_spread-radius` | `-1px` | High shadow first layer spread radius. Use it to slightly reduce the size of the shadow. |
| `mds_brand_appearance_shadow_high_second-layer_color` | `rgba(0, 0, 0, 0.03)` | High shadow second layer color. Use it to create a strong shadow effect. |
| `mds_brand_appearance_shadow_high_second-layer_offset-x` | `0px` | High shadow second layer horizontal offset. Use it to position the shadow slightly to the right. |
| `mds_brand_appearance_shadow_high_second-layer_offset-y` | `1px` | High shadow second layer vertical offset. Use it to position the shadow slightly below the element. |
| `mds_brand_appearance_shadow_high_second-layer_blur-radius` | `18px` | High shadow second layer blur radius. Use it to create a soft shadow effect. |
| `mds_brand_appearance_shadow_high_second-layer_spread-radius` | `4px` | High shadow second layer spread radius. Use it to slightly increase the size of the shadow. |
| `mds_brand_appearance_shadow_high_third-layer_color` | `rgba(0, 0, 0, 0.03)` | High shadow third layer color. Use it to create a strong shadow effect. |
| `mds_brand_appearance_shadow_high_third-layer_offset-x` | `0px` | High shadow third layer horizontal offset. Use it to position the shadow slightly to the right. |
| `mds_brand_appearance_shadow_high_third-layer_offset-y` | `6px` | High shadow third layer vertical offset. Use it to position the shadow slightly below the element. |
| `mds_brand_appearance_shadow_high_third-layer_blur-radius` | `10px` | High shadow third layer blur radius. Use it to create a soft shadow effect. |
| `mds_brand_appearance_shadow_high_third-layer_spread-radius` | `8px` | High shadow third layer spread radius. Use it to significantly increase the size of the shadow. |
| `mds_brand_appearance_state_neutral_default_hover_background-color` | `rgb(54,54,54)` | Neutral default hover background color. Use it for neutral elements that require a hover state. |
| `mds_brand_appearance_state_neutral_default_hover_border-color` | `rgb(106,106,106)` | Neutral default hover border color. Use it for neutral elements that require a hover state. |
| `mds_brand_appearance_state_neutral_default_active_background-color` | `rgb(76,76,76)` | Neutral default active background color. Use it for neutral elements that require an active state. |
| `mds_brand_appearance_state_neutral_default_active_border-color` | `rgb(138,138,138)` | Neutral default active border color. Use it for neutral elements that require an active state. |
| `mds_brand_appearance_state_neutral_weakest_opacity_hover_background-color` | `rgba(255,255,255,0.14)` | Neutral weakest hover background color. Use it for neutral elements that require a subtle hover effect. |
| `mds_brand_appearance_state_neutral_weakest_opacity_active_background-color` | `rgba(255,255,255,0.24)` | Neutral weakest active background color. Use it for neutral elements that require a subtle active effect. |
| `mds_brand_appearance_state_neutral_weak_opacity_hover_background-color` | `rgba(255,255,255,0.24)` | Neutral weak hover background color. Use it for neutral elements that require a more pronounced hover effect. |
| `mds_brand_appearance_state_neutral_weak_opacity_active_background-color` | `rgba(255,255,255,0.32)` | Neutral weak active background color. Use it for neutral elements that require a more pronounced active effect. |
| `mds_brand_appearance_state_neutral_strongest_hover_background-color` | `rgb(138,138,138)` | Neutral strongest hover background color. Use it for neutral elements that require a strong hover effect. |
| `mds_brand_appearance_state_neutral_strongest_active_background-color` | `rgb(179,179,179)` | Neutral strongest active background color. Use it for neutral elements that require a strong active effect. |
| `mds_brand_appearance_state_neutral_inverse_opacity_hover_background-color` | `rgba(20,20,20,0.06)` | Neutral inverse hover background color. Use it for neutral elements that require a subtle hover effect on dark backgrounds. |
| `mds_brand_appearance_state_neutral_inverse_opacity_active_background-color` | `rgba(20,20,20,0.12)` | Neutral inverse active background color. Use it for neutral elements that require a subtle active effect on dark backgrounds. |
| `mds_brand_appearance_state_primary_default_hover_background-color` | `rgb(226,226,226)` | Primary default hover background color. Use it for primary elements that require a hover state. |
| `mds_brand_appearance_state_primary_default_hover_border-color` | `rgb(226,226,226)` | Primary default hover border color. Use it for primary elements that require a hover state. |
| `mds_brand_appearance_state_primary_default_active_background-color` | `rgb(212,212,212)` | Primary default active background color. Use it for primary elements that require an active state. |
| `mds_brand_appearance_state_primary_default_active_border-color` | `rgb(212,212,212)` | Primary default active border color. Use it for primary elements that require an active state. |
| `mds_brand_appearance_state_primary_weakest_opacity_hover_background-color` | `rgba(255,255,255,0.14)` | Primary weakest hover background color. Use it for primary elements that require a subtle hover effect. |
| `mds_brand_appearance_state_primary_weakest_opacity_active_background-color` | `rgba(255,255,255,0.24)` | Primary weakest active background color. Use it for primary elements that require a subtle active effect. |
| `mds_brand_appearance_state_secondary_default_hover_background-color` | `rgb(96,189,220)` | Secondary default hover background color. Use it for secondary elements that require a hover state. |
| `mds_brand_appearance_state_secondary_default_active_background-color` | `rgb(120,200,226)` | Secondary default active background color. Use it for secondary elements that require an active state. |
| `mds_brand_appearance_state_secondary_weakest_opacity_hover_background-color` | `rgba(66,176,213,0.16)` | Secondary weakest hover background color. Use it for secondary elements that require a subtle hover effect. |
| `mds_brand_appearance_state_secondary_weakest_opacity_active_background-color` | `rgba(66,176,213,0.28)` | Secondary weakest active background color. Use it for secondary elements that require a subtle active effect. |
| `mds_brand_appearance_state_success_default_hover_background-color` | `rgb(92, 189, 82)` | Success default hover background color. Use it for success elements that require a hover state. |
| `mds_brand_appearance_state_success_default_active_background-color` | `rgb(155, 223, 146)` | Success default active background color. Use it for success elements that require an active state. |
| `mds_brand_appearance_state_warning_default_hover_background-color` | `rgb(223, 187, 75)` | Warning default hover background color. Use it for warning elements that require a hover state. |
| `mds_brand_appearance_state_warning_default_active_background-color` | `rgb(251, 216, 107)` | Warning default active background color. Use it for warning elements that require an active state. |
| `mds_brand_appearance_state_error_default_hover_background-color` | `rgb(251, 130, 136)` | Error default hover background color. Use it for error elements that require a hover state. |
| `mds_brand_appearance_state_error_default_active_background-color` | `rgb(253, 187, 190)` | Error default active background color. Use it for error elements that require an active state. |
| `mds_brand_appearance_state_error_weakest_opacity_hover_background-color` | `rgba(139, 39, 48, 0.16)` | Error weakest hover background color. Use it for error elements that require a subtle hover effect. |
| `mds_brand_appearance_state_error_weakest_opacity_active_background-color` | `rgba(139, 39, 48, 0.4)` | Error weakest active background color. Use it for error elements that require a subtle active effect. |
| `mds_brand_appearance_state_info_default_hover_background-color` | `rgb(0,62,98)` | Info default hover background color. Use it for info elements that require a hover state. |
| `mds_brand_appearance_state_info_default_active_background-color` | `rgb(0,36,61)` | Info default active background color. Use it for info elements that require an active state. |
| `mds_brand_appearance_state_focus_border-color` | `rgb(66,176,213)` | Focus border color. Use it to indicate focus state on elements. |
| `mds_brand_appearance_state_focus_default_shadow_offset-x` | `0px` | Focus shadow horizontal offset. Use it to position the shadow slightly to the right. |
| `mds_brand_appearance_state_focus_default_shadow_offset-y` | `0px` | Focus shadow vertical offset. Use it to position the shadow slightly below the element. |
| `mds_brand_appearance_state_focus_default_shadow_blur-radius` | `0px` | Focus shadow blur radius. Use it to create a soft shadow effect. |
| `mds_brand_appearance_state_focus_default_shadow_spread-radius` | `3px` | Focus shadow spread radius. Use it to slightly increase the size of the shadow. |
| `mds_brand_appearance_state_focus_default_shadow_color` | `rgb(0,62,98)` | Focus shadow color. Use it to create a strong focus effect. |
| `mds_brand_appearance_state_focus_vanity_shadow_offset-x` | `0px` | Focus vanity shadow horizontal offset. Use it to position the shadow slightly to the right. |
| `mds_brand_appearance_state_focus_vanity_shadow_offset-y` | `3px` | Focus vanity shadow vertical offset. Use it to position the shadow slightly below the element. |
| `mds_brand_appearance_state_focus_vanity_shadow_blur-radius` | `0px` | Focus vanity shadow blur radius. Use it to create a soft shadow effect. |
| `mds_brand_appearance_state_focus_vanity_shadow_spread-radius` | `0px` | Focus vanity shadow spread radius. Use it to slightly increase the size of the shadow. |
| `mds_brand_appearance_state_focus_vanity_shadow_color` | `rgb(0,62,98)` | Focus vanity shadow color. Use it to create a strong focus effect. |
| `mds_brand_appearance_state_disabled_opacity` | `0.5px` | Disabled opacity. Use it to indicate that an element is disabled and not interactive. |
| `mds_foundations_body_background-color` | `var(--mds_brand_appearance_neutral_default_background-color)` | No description available |
| `mds_foundations_horizontal-rule_border-color` | `var(--mds_brand_appearance_neutral_default_border-color)` | No description available |
| `mds_foundations_modal_background-color` | `var(--mds_brand_appearance_neutral_default_background-color)` | No description available |
| `mds_foundations_modal_close_background-color` | `var(--mds_brand_appearance_opacity_default_50)` | No description available |
| `mds_foundations_modal_close_hover_background-color` | `transparent` | No description available |
| `mds_foundations_modal_close_active_background-color` | `transparent` | No description available |
| `mds_foundations_modal_footer_background-color` | `var(--mds_brand_appearance_neutral_weakest_background-color)` | No description available |
| `mds_foundations_table_border-color` | `var(--mds_brand_appearance_neutral_default_border-color)` | No description available |
| `mds_foundations_table_cell_background-color` | `var(--mds_brand_appearance_neutral_default_background-color)` | No description available |
| `mds_foundations_table_cell_hover_background-color` | `var(--mds_brand_appearance_state_neutral_default_hover_background-color)` | No description available |
| `mds_foundations_table_cell_selected_background-color` | `var(--mds_brand_appearance_primary_weak_background-color)` | No description available |
| `mds_foundations_table_header-cell_background-color` | `var(--mds_brand_appearance_neutral_weakest_background-color)` | No description available |
| `mds_foundations_table_header-cell_sort_hover_background-color` | `var(--mds_brand_appearance_state_neutral_default_hover_background-color)` | No description available |
| `mds_foundations_table_header-cell_sort_active_background-color` | `var(--mds_brand_appearance_state_neutral_default_active_background-color)` | No description available |
| `mds_foundations_table_zebra-stripe_background-color` | `var(--mds_brand_appearance_neutral_weakest_background-color)` | No description available |

### Color Values for light theme

Color palette, theme colors, and appearance tokens

| Token                       | Value   | Use for.    |
|-----------------------------|---------|-------------|
| `mds_brand_appearance_neutral_default_background-color` | `rgb(255,255,255)` | Neutral default background color. |
| `mds_brand_appearance_neutral_default_on-background-color` | `rgb(20,20,20)` | Neutral default text color to be used on default background. |
| `mds_brand_appearance_neutral_default_border-color` | `rgb(212,212,212)` | Neutral default border color. |
| `mds_brand_appearance_neutral_default_opacity_border-color` | `rgba(20,20,20,0.18)` | Neutral default border color with opacity. |
| `mds_brand_appearance_neutral_weakest_background-color` | `rgb(247,247,247)` | Neutral weakest background color. |
| `mds_brand_appearance_neutral_weakest_on-background-color` | `rgb(20, 20, 20)` | Neutral weakest text color to be used on weakest background. |
| `mds_brand_appearance_neutral_weak_background-color` | `rgb(240,240,240)` | Neutral weak background color. |
| `mds_brand_appearance_neutral_weak_on-background-color` | `rgb(20,20,20)` | Neutral weak text color to be used on weak background. |
| `mds_brand_appearance_neutral_weak_border-color` | `rgb(226,226,226)` | Neutral weak border color. |
| `mds_brand_appearance_neutral_weak_opacity_background-color` | `rgba(20,20,20,0.06)` | Neutral weak background color with opacity. |
| `mds_brand_appearance_neutral_strong_background-color` | `rgb(226,226,226)` | Neutral strong background color. |
| `mds_brand_appearance_neutral_strong_on-background-color` | `rgb(20,20,20)` | Neutral strong text color to be used on strong background. |
| `mds_brand_appearance_neutral_strongest_background-color` | `rgb(179,179,179)` | Neutral strongest background color. |
| `mds_brand_appearance_neutral_strongest_on-background-color` | `rgb(20,20,20)` | Neutral strongest text color to be used on strongest background. |
| `mds_brand_appearance_neutral_inverse_background-color` | `rgb(20,20,20)` | Neutral inverse background color. |
| `mds_brand_appearance_neutral_inverse_on-background-color` | `rgb(255,255,255)` | Neutral inverse text color to be used on inverse background. |
| `mds_brand_appearance_neutral_inverse_border-color` | `rgb(255,255,255)` | Neutral inverse border color. |
| `mds_brand_appearance_primary_default_background-color` | `rgb(20,20,20)` | Primary default background color. |
| `mds_brand_appearance_primary_default_on-background-color` | `rgb(255,255,255)` | Primary default text color to be used on default background. |
| `mds_brand_appearance_primary_default_border-color` | `rgb(20,20,20)` | Primary default border color. |
| `mds_brand_appearance_primary_default_link-color` | `rgb(0, 119, 178)` | Primary default link color. |
| `mds_brand_appearance_primary_weak_background-color` | `rgb(240,240,240)` | Primary weak background color. |
| `mds_brand_appearance_primary_weak_on-background-color` | `rgb(20,20,20)` | Primary weak text color to be used on weak background. |
| `mds_brand_appearance_primary_weak_border-color` | `rgb(212,212,212)` | Primary weak border color. |
| `mds_brand_appearance_secondary_default_background-color` | `rgb(66,176,213)` | Secondary default background color. It's a brand color. Use it sparingly, only in cases where it is needed to highlight important information or actions. |
| `mds_brand_appearance_secondary_default_on-background-color` | `rgb(20,20,20)` | Secondary default text color to be used on default background. It's a brand color. Use it sparingly, only in cases where it is needed to highlight important information or actions. |
| `mds_brand_appearance_secondary_default_border-color` | `rgb(66,176,213)` | Secondary default border color. It's a brand color. Use it sparingly, only in cases where it is needed to highlight important information or actions. |
| `mds_brand_appearance_secondary_weak_background-color` | `rgb(226,243,249)` | Secondary weak background color. |
| `mds_brand_appearance_secondary_weak_on-background-color` | `rgb(20,20,20)` | Secondary weak text color to be used on weak background. |
| `mds_brand_appearance_secondary_weak_border-color` | `rgb(158,215,234)` | Secondary weak border color. |
| `mds_brand_appearance_success_default_background-color` | `rgb(64,171,53)` | Success default background color. Use it to indicate successful actions or states. |
| `mds_brand_appearance_success_default_on-background-color` | `rgb(20,20,20)` | Success default text color to be used on default background. Use it to indicate successful actions or states. |
| `mds_brand_appearance_success_default_border-color` | `rgb(64,171,53)` | Success default border color. Use it to indicate successful actions or states. |
| `mds_brand_appearance_success_weak_background-color` | `rgb(220,246,217)` | Success weak background color. Use it to indicate successful actions or states in a less prominent way. |
| `mds_brand_appearance_success_weak_on-background-color` | `rgb(19,51,16)` | Success weak text color to be used on weak background. Use it to indicate successful actions or states in a less prominent way. |
| `mds_brand_appearance_success_weak_border-color` | `rgb(197,229,194)` | Success weak border color. Use it to indicate successful actions or states in a less prominent way. |
| `mds_brand_appearance_warning_default_background-color` | `rgb(255,208,41)` | Warning default background color. Use it to indicate warnings or important information that requires attention. |
| `mds_brand_appearance_warning_default_on-background-color` | `rgb(20,20,20)` | Warning default text color to be used on default background. Use it to indicate warnings or important information that requires attention. |
| `mds_brand_appearance_warning_default_border-color` | `rgb(255,208,41)` | Warning default border color. Use it to indicate warnings or important information that requires attention. |
| `mds_brand_appearance_warning_weak_background-color` | `rgb(255,241,194)` | Warning weak background color. Use it to indicate warnings or important information in a less prominent way. |
| `mds_brand_appearance_warning_weak_on-background-color` | `rgb(77,62,12)` | Warning weak text color to be used on weak background. Use it to indicate warnings or important information in a less prominent way. |
| `mds_brand_appearance_warning_weak_border-color` | `rgb(255,235,168)` | Warning weak border color. Use it to indicate warnings or important information in a less prominent way. |
| `mds_brand_appearance_error_default_background-color` | `rgb(184,0,18)` | Error default background color. Use it to indicate errors or critical issues that require immediate attention. |
| `mds_brand_appearance_error_default_on-background-color` | `rgb(255,255,255)` | Error default text color to be used on default background. Use it to indicate errors or critical issues that require immediate attention. |
| `mds_brand_appearance_error_default_border-color` | `rgb(184,0,18)` | Error default border color. Use it to indicate errors or critical issues that require immediate attention. |
| `mds_brand_appearance_error_weak_background-color` | `rgb(252,221,224)` | Error weak background color. Use it to indicate errors or critical issues in a less prominent way. |
| `mds_brand_appearance_error_weak_on-background-color` | `rgb(55,0,5)` | Error weak text color to be used on weak background. Use it to indicate errors or critical issues in a less prominent way. |
| `mds_brand_appearance_error_weak_border-color` | `rgb(233,178,183)` | Error weak border color. Use it to indicate errors or critical issues in a less prominent way. |
| `mds_brand_appearance_info_default_background-color` | `rgb(0,89,134)` | Info default background color. Use it to indicate informational messages or non-critical updates. |
| `mds_brand_appearance_info_default_on-background-color` | `rgb(255,255,255)` | Info default text color to be used on default background. Use it to indicate informational messages or non-critical updates. |
| `mds_brand_appearance_info_default_border-color` | `rgb(0,89,134)` | Info default border color. Use it to indicate informational messages or non-critical updates. |
| `mds_brand_appearance_info_weak_background-color` | `rgb(226,243,251)` | Info weak background color. Use it to indicate informational messages or non-critical updates in a less prominent way. |
| `mds_brand_appearance_info_weak_on-background-color` | `rgb(0,36,61)` | Info weak text color to be used on weak background. Use it to indicate informational messages or non-critical updates in a less prominent way. |
| `mds_brand_appearance_info_weak_border-color` | `rgb(161,209,232)` | Info weak border color. Use it to indicate informational messages or non-critical updates in a less prominent way. |
| `mds_brand_appearance_static_dark` | `rgb(20,20,20)` | Dark static color. |
| `mds_brand_appearance_static_light` | `rgb(255,255,255)` | Light static color. |
| `mds_brand_appearance_static_brand` | `rgb(66,176,213)` | Brand static color. Use it to represent the brand identity consistently across UI. |
| `mds_brand_appearance_static_logo_url` | `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='123' height='48' viewBox='0 0 123 48' fill='none'> <path fill-rule='evenodd' clip-rule='evenodd' d='M110.254 29.8276V17.7867H113.123V22.6022L118.585 17.7867H122.469L115.952 23.3796L122.703 29.8276H118.683L113.123 24.3512V29.8276H110.254Z' fill='black'/> <path fill-rule='evenodd' clip-rule='evenodd' d='M98.7957 29.8272H97.838C96.5877 29.8272 95.9857 29.108 95.9857 28.0606V26.4881H98.7957V27.4199H104.767V24.9554H97.9179C96.8245 24.9554 96.0368 24.2232 96.0368 23.2082V19.6333C96.0368 18.5517 96.8942 17.7872 97.9364 17.7872H105.766C106.824 17.7872 107.556 18.573 107.556 19.7101V21.1467H104.767V20.1945H98.7957V22.5666H105.625C106.633 22.5666 107.556 23.2304 107.556 24.5079V27.9441C107.556 29.1154 106.904 29.8272 105.684 29.8272H98.7957Z' fill='black'/> <path fill-rule='evenodd' clip-rule='evenodd' d='M84.8276 23.3087H90.8962V20.1878H84.8276V23.3087ZM81.9974 29.821V17.7792H91.6637C92.9549 17.7792 93.7055 18.5234 93.7055 19.7991V23.8435C93.7055 24.7754 92.8778 25.6157 91.2717 25.6157C91.1807 25.6212 91.0887 25.6157 90.993 25.6157L93.8067 29.821H90.7014L88.0335 25.7035H84.8278V29.821H81.9974Z' fill='black'/> <path fill-rule='evenodd' clip-rule='evenodd' d='M68.1803 29.8209V17.78H79.7313V20.1873H70.9698V22.5788H78.482V24.9288H70.9698V27.4127H79.7527V29.8209H68.1803Z' fill='black'/> <path fill-rule='evenodd' clip-rule='evenodd' d='M61.8197 25.159L59.5986 20.0551L57.4287 25.159H61.8197ZM55.442 29.8209H52.3199L57.6872 17.78H61.5301L66.9355 29.8209H63.8533L62.7897 27.422H56.4731L55.442 29.8209Z' fill='black'/> <path fill-rule='evenodd' clip-rule='evenodd' d='M36.7357 29.8209V17.78H39.9544L44.0342 26.7776L48.0536 17.78H51.1376V29.8209H48.4828V22.8164L45.4192 29.8209H42.5897L39.4872 22.8543V29.8209H36.7357Z' fill='black'/> <path fill-rule='evenodd' clip-rule='evenodd' d='M24.6371 34.0356C24.6371 35.673 23.3101 37 21.6736 37H2.96444C1.32701 37 0 35.673 0 34.0356V13.9653C0 12.3279 1.32701 11 2.96444 11H21.6736C23.3101 11 24.6371 12.3279 24.6371 13.9653V34.0356Z' fill='%2342B0D5'/> <path fill-rule='evenodd' clip-rule='evenodd' d='M16.1836 23.6561L20.9683 17.5436L20.9536 17.5242L14.0392 20.9159L12.331 13.2941H12.3067L10.5993 20.9159L3.68494 17.5242L3.66936 17.5436L8.45492 23.6561L1.54053 27.0487L1.54572 27.0725H9.21992L7.51252 34.6952L7.53415 34.7058L12.3188 28.5933L17.1035 34.7058L17.1252 34.6944L15.4186 27.0725H23.0928L23.098 27.0487L16.1836 23.6561Z' fill='white'/> </svg>")` | Full brand logo in SVG format. Used in mc-top-bar component. |
| `mds_brand_appearance_static_logo_width` | `123px` | Width of the full brand logo. |
| `mds_brand_appearance_static_logo-short_url` | `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='123' height='48' viewBox='0 0 123 48' fill='none'> <path fill-rule='evenodd' clip-rule='evenodd' d='M110.254 29.8276V17.7867H113.123V22.6022L118.585 17.7867H122.469L115.952 23.3796L122.703 29.8276H118.683L113.123 24.3512V29.8276H110.254Z' fill='black'/> <path fill-rule='evenodd' clip-rule='evenodd' d='M98.7957 29.8272H97.838C96.5877 29.8272 95.9857 29.108 95.9857 28.0606V26.4881H98.7957V27.4199H104.767V24.9554H97.9179C96.8245 24.9554 96.0368 24.2232 96.0368 23.2082V19.6333C96.0368 18.5517 96.8942 17.7872 97.9364 17.7872H105.766C106.824 17.7872 107.556 18.573 107.556 19.7101V21.1467H104.767V20.1945H98.7957V22.5666H105.625C106.633 22.5666 107.556 23.2304 107.556 24.5079V27.9441C107.556 29.1154 106.904 29.8272 105.684 29.8272H98.7957Z' fill='black'/> <path fill-rule='evenodd' clip-rule='evenodd' d='M84.8276 23.3087H90.8962V20.1878H84.8276V23.3087ZM81.9974 29.821V17.7792H91.6637C92.9549 17.7792 93.7055 18.5234 93.7055 19.7991V23.8435C93.7055 24.7754 92.8778 25.6157 91.2717 25.6157C91.1807 25.6212 91.0887 25.6157 90.993 25.6157L93.8067 29.821H90.7014L88.0335 25.7035H84.8278V29.821H81.9974Z' fill='black'/> <path fill-rule='evenodd' clip-rule='evenodd' d='M68.1803 29.8209V17.78H79.7313V20.1873H70.9698V22.5788H78.482V24.9288H70.9698V27.4127H79.7527V29.8209H68.1803Z' fill='black'/> <path fill-rule='evenodd' clip-rule='evenodd' d='M61.8197 25.159L59.5986 20.0551L57.4287 25.159H61.8197ZM55.442 29.8209H52.3199L57.6872 17.78H61.5301L66.9355 29.8209H63.8533L62.7897 27.422H56.4731L55.442 29.8209Z' fill='black'/> <path fill-rule='evenodd' clip-rule='evenodd' d='M36.7357 29.8209V17.78H39.9544L44.0342 26.7776L48.0536 17.78H51.1376V29.8209H48.4828V22.8164L45.4192 29.8209H42.5897L39.4872 22.8543V29.8209H36.7357Z' fill='black'/> <path fill-rule='evenodd' clip-rule='evenodd' d='M24.6371 34.0356C24.6371 35.673 23.3101 37 21.6736 37H2.96444C1.32701 37 0 35.673 0 34.0356V13.9653C0 12.3279 1.32701 11 2.96444 11H21.6736C23.3101 11 24.6371 12.3279 24.6371 13.9653V34.0356Z' fill='%2342B0D5'/> <path fill-rule='evenodd' clip-rule='evenodd' d='M16.1836 23.6561L20.9683 17.5436L20.9536 17.5242L14.0392 20.9159L12.331 13.2941H12.3067L10.5993 20.9159L3.68494 17.5242L3.66936 17.5436L8.45492 23.6561L1.54053 27.0487L1.54572 27.0725H9.21992L7.51252 34.6952L7.53415 34.7058L12.3188 28.5933L17.1035 34.7058L17.1252 34.6944L15.4186 27.0725H23.0928L23.098 27.0487L16.1836 23.6561Z' fill='white'/> </svg>")` | Short brand logo (without the brand name) in SVG format. Used in mc-top-bar component. |
| `mds_brand_appearance_static_logo-short_width` | `123px` | Width of the short brand logo. |
| `mds_brand_appearance_opacity_default_10` | `rgba(255, 255, 255, 0.1)` | Default opacity 10% for white background. Use it to create a semi-transparent effect. |
| `mds_brand_appearance_opacity_default_30` | `rgba(255, 255, 255, 0.3)` | Default opacity 30% for white background. Use it to create a semi-transparent effect. |
| `mds_brand_appearance_opacity_default_50` | `rgba(255, 255, 255, 0.5)` | Default opacity 50% for white background. Use it to create a semi-transparent effect. |
| `mds_brand_appearance_opacity_default_70` | `rgba(255, 255, 255, 0.7)` | Default opacity 70% for white background. Use it to create a semi-transparent effect. |
| `mds_brand_appearance_opacity_default_90` | `rgba(255, 255, 255, 0.9)` | Default opacity 90% for white background. Use it to create a semi-transparent effect. |
| `mds_brand_appearance_opacity_inverse_10` | `rgba(20, 20, 20, 0.1)` | Inverse opacity 10% for dark background. Use it to create a semi-transparent effect. |
| `mds_brand_appearance_opacity_inverse_30` | `rgba(20, 20, 20, 0.3)` | Inverse opacity 30% for dark background. Use it to create a semi-transparent effect. |
| `mds_brand_appearance_opacity_inverse_50` | `rgba(20, 20, 20, 0.5)` | Inverse opacity 50% for dark background. Use it to create a semi-transparent effect. |
| `mds_brand_appearance_opacity_inverse_70` | `rgba(20, 20, 20, 0.7)` | Inverse opacity 70% for dark background. Use it to create a semi-transparent effect. |
| `mds_brand_appearance_opacity_inverse_90` | `rgba(20, 20, 20, 0.9)` | Inverse opacity 90% for dark background. Use it to create a semi-transparent effect. |
| `mds_brand_appearance_shadow_low_first-layer_color` | `rgba(0, 0, 0, 0.04)` | Low shadow first layer color. Use it to create a subtle shadow effect. |
| `mds_brand_appearance_shadow_low_first-layer_offset-x` | `0px` | Low shadow first layer horizontal offset. Use it to position the shadow slightly to the right. |
| `mds_brand_appearance_shadow_low_first-layer_offset-y` | `3px` | Low shadow first layer vertical offset. Use it to position the shadow slightly below the element. |
| `mds_brand_appearance_shadow_low_first-layer_blur-radius` | `5px` | Low shadow first layer blur radius. Use it to create a soft shadow effect. |
| `mds_brand_appearance_shadow_low_first-layer_spread-radius` | `-1px` | Low shadow first layer spread radius. Use it to slightly reduce the size of the shadow. |
| `mds_brand_appearance_shadow_low_second-layer_color` | `rgba(0, 0, 0, 0.03)` | Low shadow second layer color. Use it to create a subtle shadow effect. |
| `mds_brand_appearance_shadow_low_second-layer_offset-x` | `0px` | Low shadow second layer horizontal offset. Use it to position the shadow slightly to the right. |
| `mds_brand_appearance_shadow_low_second-layer_offset-y` | `1px` | Low shadow second layer vertical offset. Use it to position the shadow slightly below the element. |
| `mds_brand_appearance_shadow_low_second-layer_blur-radius` | `18px` | Low shadow second layer blur radius. Use it to create a soft shadow effect. |
| `mds_brand_appearance_shadow_low_second-layer_spread-radius` | `0px` | Low shadow second layer spread radius. Use it to keep the shadow size consistent. |
| `mds_brand_appearance_shadow_low_third-layer_color` | `rgba(0, 0, 0, 0.03)` | Low shadow third layer color. Use it to create a subtle shadow effect. |
| `mds_brand_appearance_shadow_low_third-layer_offset-x` | `0px` | Low shadow third layer horizontal offset. Use it to position the shadow slightly to the right. |
| `mds_brand_appearance_shadow_low_third-layer_offset-y` | `6px` | Low shadow third layer vertical offset. Use it to position the shadow slightly below the element. |
| `mds_brand_appearance_shadow_low_third-layer_blur-radius` | `10px` | Low shadow third layer blur radius. Use it to create a soft shadow effect. |
| `mds_brand_appearance_shadow_low_third-layer_spread-radius` | `0px` | Low shadow third layer spread radius. Use it to keep the shadow size consistent. |
| `mds_brand_appearance_shadow_medium_first-layer_color` | `rgba(0, 0, 0, 0.04)` | Medium shadow first layer color. Use it to create a more pronounced shadow effect. |
| `mds_brand_appearance_shadow_medium_first-layer_offset-x` | `0px` | Medium shadow first layer horizontal offset. Use it to position the shadow slightly to the right. |
| `mds_brand_appearance_shadow_medium_first-layer_offset-y` | `3px` | Medium shadow first layer vertical offset. Use it to position the shadow slightly below the element. |
| `mds_brand_appearance_shadow_medium_first-layer_blur-radius` | `5px` | Medium shadow first layer blur radius. Use it to create a soft shadow effect. |
| `mds_brand_appearance_shadow_medium_first-layer_spread-radius` | `-1px` | Medium shadow first layer spread radius. Use it to slightly reduce the size of the shadow. |
| `mds_brand_appearance_shadow_medium_second-layer_color` | `rgba(0, 0, 0, 0.03)` | Medium shadow second layer color. Use it to create a more pronounced shadow effect. |
| `mds_brand_appearance_shadow_medium_second-layer_offset-x` | `0px` | Medium shadow second layer horizontal offset. Use it to position the shadow slightly to the right. |
| `mds_brand_appearance_shadow_medium_second-layer_offset-y` | `1px` | Medium shadow second layer vertical offset. Use it to position the shadow slightly below the element. |
| `mds_brand_appearance_shadow_medium_second-layer_blur-radius` | `18px` | Medium shadow second layer blur radius. Use it to create a soft shadow effect. |
| `mds_brand_appearance_shadow_medium_second-layer_spread-radius` | `2px` | Medium shadow second layer spread radius. Use it to slightly increase the size of the shadow. |
| `mds_brand_appearance_shadow_medium_third-layer_color` | `rgba(0, 0, 0, 0.03)` | Medium shadow third layer color. Use it to create a more pronounced shadow effect. |
| `mds_brand_appearance_shadow_medium_third-layer_offset-x` | `0px` | Medium shadow third layer horizontal offset. Use it to position the shadow slightly to the right. |
| `mds_brand_appearance_shadow_medium_third-layer_offset-y` | `6px` | Medium shadow third layer vertical offset. Use it to position the shadow slightly below the element. |
| `mds_brand_appearance_shadow_medium_third-layer_blur-radius` | `10px` | Medium shadow third layer blur radius. Use it to create a soft shadow effect. |
| `mds_brand_appearance_shadow_medium_third-layer_spread-radius` | `4px` | Medium shadow third layer spread radius. Use it to slightly increase the size of the shadow. |
| `mds_brand_appearance_shadow_high_first-layer_color` | `rgba(0, 0, 0, 0.04)` | High shadow first layer color. Use it to create a strong shadow effect. |
| `mds_brand_appearance_shadow_high_first-layer_offset-x` | `0px` | High shadow first layer horizontal offset. Use it to position the shadow slightly to the right. |
| `mds_brand_appearance_shadow_high_first-layer_offset-y` | `3px` | High shadow first layer vertical offset. Use it to position the shadow slightly below the element. |
| `mds_brand_appearance_shadow_high_first-layer_blur-radius` | `5px` | High shadow first layer blur radius. Use it to create a soft shadow effect. |
| `mds_brand_appearance_shadow_high_first-layer_spread-radius` | `-1px` | High shadow first layer spread radius. Use it to slightly reduce the size of the shadow. |
| `mds_brand_appearance_shadow_high_second-layer_color` | `rgba(0, 0, 0, 0.03)` | High shadow second layer color. Use it to create a strong shadow effect. |
| `mds_brand_appearance_shadow_high_second-layer_offset-x` | `0px` | High shadow second layer horizontal offset. Use it to position the shadow slightly to the right. |
| `mds_brand_appearance_shadow_high_second-layer_offset-y` | `1px` | High shadow second layer vertical offset. Use it to position the shadow slightly below the element. |
| `mds_brand_appearance_shadow_high_second-layer_blur-radius` | `18px` | High shadow second layer blur radius. Use it to create a soft shadow effect. |
| `mds_brand_appearance_shadow_high_second-layer_spread-radius` | `4px` | High shadow second layer spread radius. Use it to slightly increase the size of the shadow. |
| `mds_brand_appearance_shadow_high_third-layer_color` | `rgba(0, 0, 0, 0.03)` | High shadow third layer color. Use it to create a strong shadow effect. |
| `mds_brand_appearance_shadow_high_third-layer_offset-x` | `0px` | High shadow third layer horizontal offset. Use it to position the shadow slightly to the right. |
| `mds_brand_appearance_shadow_high_third-layer_offset-y` | `6px` | High shadow third layer vertical offset. Use it to position the shadow slightly below the element. |
| `mds_brand_appearance_shadow_high_third-layer_blur-radius` | `10px` | High shadow third layer blur radius. Use it to create a soft shadow effect. |
| `mds_brand_appearance_shadow_high_third-layer_spread-radius` | `8px` | High shadow third layer spread radius. Use it to significantly increase the size of the shadow. |
| `mds_brand_appearance_state_neutral_default_hover_background-color` | `rgb(240,240,240)` | Neutral default hover background color. Use it for neutral elements that require a hover state. |
| `mds_brand_appearance_state_neutral_default_hover_border-color` | `rgb(138,138,138)` | Neutral default hover border color. Use it for neutral elements that require a hover state. |
| `mds_brand_appearance_state_neutral_default_active_background-color` | `rgb(226,226,226)` | Neutral default active background color. Use it for neutral elements that require an active state. |
| `mds_brand_appearance_state_neutral_default_active_border-color` | `rgb(76,76,76)` | Neutral default active border color. Use it for neutral elements that require an active state. |
| `mds_brand_appearance_state_neutral_weakest_opacity_hover_background-color` | `rgba(20,20,20,0.06)` | Neutral weakest hover background color. Use it for neutral elements that require a subtle hover effect. |
| `mds_brand_appearance_state_neutral_weakest_opacity_active_background-color` | `rgba(20,20,20,0.12)` | Neutral weakest active background color. Use it for neutral elements that require a subtle active effect. |
| `mds_brand_appearance_state_neutral_weak_opacity_hover_background-color` | `rgba(20,20,20,0.12)` | Neutral weak hover background color. Use it for neutral elements that require a more pronounced hover effect. |
| `mds_brand_appearance_state_neutral_weak_opacity_active_background-color` | `rgba(20,20,20,0.18)` | Neutral weak active background color. Use it for neutral elements that require a more pronounced active effect. |
| `mds_brand_appearance_state_neutral_strongest_hover_background-color` | `rgb(138,138,138)` | Neutral strongest hover background color. Use it for neutral elements that require a strong hover effect. |
| `mds_brand_appearance_state_neutral_strongest_active_background-color` | `rgb(106,106,106)` | Neutral strongest active background color. Use it for neutral elements that require a strong active effect. |
| `mds_brand_appearance_state_neutral_inverse_opacity_hover_background-color` | `rgba(255,255,255,0.12)` | Neutral inverse hover background color. Use it for neutral elements that require a subtle hover effect on dark backgrounds. |
| `mds_brand_appearance_state_neutral_inverse_opacity_active_background-color` | `rgba(255,255,255,0.2)` | Neutral inverse active background color. Use it for neutral elements that require a subtle active effect on dark backgrounds. |
| `mds_brand_appearance_state_primary_default_hover_background-color` | `rgb(54,54,54)` | Primary default hover background color. Use it for primary elements that require a hover state. |
| `mds_brand_appearance_state_primary_default_hover_border-color` | `rgb(54,54,54)` | Primary default hover border color. Use it for primary elements that require a hover state. |
| `mds_brand_appearance_state_primary_default_active_background-color` | `rgb(76,76,76)` | Primary default active background color. Use it for primary elements that require an active state. |
| `mds_brand_appearance_state_primary_default_active_border-color` | `rgb(76,76,76)` | Primary default active border color. Use it for primary elements that require an active state. |
| `mds_brand_appearance_state_primary_weakest_opacity_hover_background-color` | `rgba(20,20,20,0.06)` | Primary weakest hover background color. Use it for primary elements that require a subtle hover effect. |
| `mds_brand_appearance_state_primary_weakest_opacity_active_background-color` | `rgba(20,20,20,0.12)` | Primary weakest active background color. Use it for primary elements that require a subtle active effect. |
| `mds_brand_appearance_state_secondary_default_hover_background-color` | `rgb(96,189,220)` | Secondary default hover background color. Use it for secondary elements that require a hover state. |
| `mds_brand_appearance_state_secondary_default_active_background-color` | `rgb(120,200,226)` | Secondary default active background color. Use it for secondary elements that require an active state. |
| `mds_brand_appearance_state_secondary_weakest_opacity_hover_background-color` | `rgba(66,176,213,0.12)` | Secondary weakest hover background color. Use it for secondary elements that require a subtle hover effect. |
| `mds_brand_appearance_state_secondary_weakest_opacity_active_background-color` | `rgba(66,176,213,0.24)` | Secondary weakest active background color. Use it for secondary elements that require a subtle active effect. |
| `mds_brand_appearance_state_success_default_hover_background-color` | `rgb(58, 154, 48)` | Success default hover background color. Use it for success elements that require a hover state. |
| `mds_brand_appearance_state_success_default_active_background-color` | `rgb(50, 133, 41)` | Success default active background color. Use it for success elements that require an active state. |
| `mds_brand_appearance_state_warning_default_hover_background-color` | `rgb(230, 187, 37)` | Warning default hover background color. Use it for warning elements that require a hover state. |
| `mds_brand_appearance_state_warning_default_active_background-color` | `rgb(179, 146, 29)` | Warning default active background color. Use it for warning elements that require an active state. |
| `mds_brand_appearance_state_error_default_hover_background-color` | `rgb(166, 0, 16)` | Error default hover background color. Use it for error elements that require a hover state. |
| `mds_brand_appearance_state_error_default_active_background-color` | `rgb(129, 0, 13)` | Error default active background color. Use it for error elements that require an active state. |
| `mds_brand_appearance_state_error_weakest_opacity_hover_background-color` | `rgba(184, 0, 18, 0.06)` | Error weakest hover background color. Use it for error elements that require a subtle hover effect. |
| `mds_brand_appearance_state_error_weakest_opacity_active_background-color` | `rgba(184, 0, 18, 0.1)` | Error weakest active background color. Use it for error elements that require a subtle active effect. |
| `mds_brand_appearance_state_info_default_hover_background-color` | `rgb(0,62,98)` | Info default hover background color. Use it for info elements that require a hover state. |
| `mds_brand_appearance_state_info_default_active_background-color` | `rgb(0,36,61)` | Info default active background color. Use it for info elements that require an active state. |
| `mds_brand_appearance_state_focus_border-color` | `rgb(66,176,213)` | Focus border color. Use it to indicate focus state on elements. |
| `mds_brand_appearance_state_focus_default_shadow_offset-x` | `0px` | Focus shadow horizontal offset. Use it to position the shadow slightly to the right. |
| `mds_brand_appearance_state_focus_default_shadow_offset-y` | `0px` | Focus shadow vertical offset. Use it to position the shadow slightly below the element. |
| `mds_brand_appearance_state_focus_default_shadow_blur-radius` | `0px` | Focus shadow blur radius. Use it to create a soft shadow effect. |
| `mds_brand_appearance_state_focus_default_shadow_spread-radius` | `3px` | Focus shadow spread radius. Use it to slightly increase the size of the shadow. |
| `mds_brand_appearance_state_focus_default_shadow_color` | `rgb(209,236,245)` | Focus shadow color. Use it to create a strong focus effect. |
| `mds_brand_appearance_state_focus_vanity_shadow_offset-x` | `0px` | Focus vanity shadow horizontal offset. Use it to position the shadow slightly to the right. |
| `mds_brand_appearance_state_focus_vanity_shadow_offset-y` | `3px` | Focus vanity shadow vertical offset. Use it to position the shadow slightly below the element. |
| `mds_brand_appearance_state_focus_vanity_shadow_blur-radius` | `0px` | Focus vanity shadow blur radius. Use it to create a soft shadow effect. |
| `mds_brand_appearance_state_focus_vanity_shadow_spread-radius` | `0px` | Focus vanity shadow spread radius. Use it to slightly increase the size of the shadow. |
| `mds_brand_appearance_state_focus_vanity_shadow_color` | `rgb(209,236,245)` | Focus vanity shadow color. Use it to create a strong focus effect. |
| `mds_brand_appearance_state_disabled_opacity` | `0.5px` | Disabled opacity. Use it to indicate that an element is disabled and not interactive. |
| `mds_foundations_body_background-color` | `var(--mds_brand_appearance_neutral_default_background-color)` | No description available |
| `mds_foundations_horizontal-rule_border-color` | `var(--mds_brand_appearance_neutral_default_border-color)` | No description available |
| `mds_foundations_modal_background-color` | `var(--mds_brand_appearance_neutral_default_background-color)` | No description available |
| `mds_foundations_modal_close_background-color` | `var(--mds_brand_appearance_opacity_default_50)` | No description available |
| `mds_foundations_modal_close_hover_background-color` | `transparent` | No description available |
| `mds_foundations_modal_close_active_background-color` | `transparent` | No description available |
| `mds_foundations_modal_footer_background-color` | `var(--mds_brand_appearance_neutral_weakest_background-color)` | No description available |
| `mds_foundations_table_border-color` | `var(--mds_brand_appearance_neutral_default_border-color)` | No description available |
| `mds_foundations_table_cell_background-color` | `var(--mds_brand_appearance_neutral_default_background-color)` | No description available |
| `mds_foundations_table_cell_hover_background-color` | `var(--mds_brand_appearance_state_neutral_default_hover_background-color)` | No description available |
| `mds_foundations_table_cell_selected_background-color` | `var(--mds_brand_appearance_primary_weak_background-color)` | No description available |
| `mds_foundations_table_header-cell_background-color` | `var(--mds_brand_appearance_neutral_weakest_background-color)` | No description available |
| `mds_foundations_table_header-cell_sort_hover_background-color` | `var(--mds_brand_appearance_state_neutral_default_hover_background-color)` | No description available |
| `mds_foundations_table_header-cell_sort_active_background-color` | `var(--mds_brand_appearance_state_neutral_default_active_background-color)` | No description available |
| `mds_foundations_table_zebra-stripe_background-color` | `var(--mds_brand_appearance_neutral_weakest_background-color)` | No description available |

## Typography, Borders, Layout and Motion Design Tokens Values

### Borders

Border width, style, and radius tokens

| Token                       | Value   | Use for.    |
|-----------------------------|---------|-------------|
| `mds_global_border_width` | `1px` | Global border width. Use it to define the width of borders across the UI. |
| `mds_global_border_style` | `solid` | Global border style. Use it to define the style of borders across the UI. |
| `mds_brand_border_x-small_radius` | `2px` | Border radius for x-small elements, typically used for small buttons or inputs. |
| `mds_brand_border_small_radius` | `4px` | Border radius for small elements, such as small cards or buttons. |
| `mds_brand_border_medium_radius` | `6px` | Border radius for medium elements, commonly used for standard buttons or form fields. |
| `mds_brand_border_large_radius` | `8px` | Border radius for large elements, suitable for larger buttons or containers. |
| `mds_brand_border_x-large_radius` | `12px` | Border radius for x-large elements, often used for large cards or sections. |
| `mds_brand_border_2x-large_radius` | `16px` | Border radius for 2x-large elements, typically used for very large containers or sections. |
| `mds_foundations_horizontal-rule_border-width` | `var(--mds_global_border_width)` | No description available |
| `mds_foundations_horizontal-rule_border-style` | `var(--mds_global_border_style)` | No description available |
| `mds_foundations_link_focus_border-radius` | `var(--mds_brand_border_medium_radius)` | No description available |
| `mds_foundations_table_border-width` | `var(--mds_global_border_width)` | No description available |
| `mds_foundations_table_border-radius` | `var(--mds_brand_border_large_radius)` | No description available |
| `mds_foundations_table_border-style` | `var(--mds_global_border_style)` | No description available |

### Layout

Breakpoints, grid, and layout-related tokens

| Token                       | Value   | Use for.    |
|-----------------------------|---------|-------------|
| `mds_global_breakpoint_xs_min-width` | `0px` | Global breakpoint XS (mobile devices) minimum width. Use it to define the minimum width for XS screens. |
| `mds_global_breakpoint_xs_max-width` | `640px` | Global breakpoint XS (mobile devices) maximum width. Use it to define the maximum width for XS screens. |
| `mds_global_breakpoint_sm_min-width` | `641px` | Global breakpoint SM (tablet devices) minimum width. Use it to define the minimum width for SM screens. |
| `mds_global_breakpoint_sm_max-width` | `1024px` | Global breakpoint SM (tablet devices) maximum width. Use it to define the maximum width for SM screens. |
| `mds_global_breakpoint_md_min-width` | `1025px` | Global breakpoint MD (desktop devices - viewing not a full screen browser window on a laptop) minimum width. Use it to define the minimum width for MD screens. |
| `mds_global_breakpoint_md_max-width` | `1440px` | Global breakpoint MD (desktop devices - viewing not a full screen browser window on a laptop) maximum width. Use it to define the maximum width for MD screens. |
| `mds_global_breakpoint_lg_min-width` | `1441px` | Global breakpoint LG (large desktop devices - typical external screens in the office) minimum width. Use it to define the minimum width for LG screens. |
| `mds_global_breakpoint_lg_max-width` | `1920px` | Global breakpoint LG (large desktop devices - typical external screens in the office) maximum width. Use it to define the maximum width for LG screens. |
| `mds_global_breakpoint_xl_min-width` | `1921px` | Global breakpoint XL (extra large desktop devices - wide screens and high resolution screens.) minimum width. Use it to define the minimum width for XL screens. |
| `mds_foundations_breadcrumb_item_padding` | `6px` | No description available |
| `mds_foundations_breadcrumb_collapsed_padding` | `3px` | No description available |
| `mds_foundations_breadcrumb_truncated_item_padding` | `20px` | No description available |
| `mds_foundations_grid_xs_columns` | `2px` | No description available |
| `mds_foundations_grid_xs_column-gap` | `16px` | No description available |
| `mds_foundations_grid_xs_row-gap` | `16px` | No description available |
| `mds_foundations_grid_sm_columns` | `6px` | No description available |
| `mds_foundations_grid_sm_column-gap` | `24px` | No description available |
| `mds_foundations_grid_sm_row-gap` | `24px` | No description available |
| `mds_foundations_grid_md_columns` | `12px` | No description available |
| `mds_foundations_grid_md_column-gap` | `24px` | No description available |
| `mds_foundations_grid_md_row-gap` | `24px` | No description available |
| `mds_foundations_horizontal-rule_margin-top` | `40px` | No description available |
| `mds_foundations_horizontal-rule_margin-bottom` | `40px` | No description available |
| `mds_foundations_list_margin-top` | `24px` | No description available |
| `mds_foundations_list_margin-bottom` | `24px` | No description available |
| `mds_foundations_list_item_padding-left` | `8px` | No description available |
| `mds_foundations_list_vertical_padding-left` | `24px` | No description available |
| `mds_foundations_list_vertical_item_gap` | `4px` | No description available |
| `mds_foundations_list_horizontal_item_gap` | `40px` | No description available |
| `mds_foundations_modal_body_padding-top` | `12px` | No description available |
| `mds_foundations_modal_body_padding-right` | `24px` | No description available |
| `mds_foundations_modal_body_padding-left` | `24px` | No description available |
| `mds_foundations_modal_body_padding-bottom` | `24px` | No description available |
| `mds_foundations_modal_footer_gap` | `12px` | No description available |
| `mds_foundations_modal_footer_padding-top` | `12px` | No description available |
| `mds_foundations_modal_footer_padding-right` | `24px` | No description available |
| `mds_foundations_modal_footer_padding-left` | `24px` | No description available |
| `mds_foundations_modal_footer_padding-bottom` | `12px` | No description available |
| `mds_foundations_modal_heading_padding-top` | `20px` | No description available |
| `mds_foundations_modal_heading_padding-right` | `24px` | No description available |
| `mds_foundations_modal_heading_padding-left` | `24px` | No description available |
| `mds_foundations_modal_heading_padding-bottom` | `12px` | No description available |
| `mds_foundations_modal_heading_title_margin-top` | `4px` | No description available |
| `mds_foundations_slot_gap` | `4px` | No description available |
| `mds_foundations_table_row-selector_margin-top` | `-3px` | No description available |
| `mds_foundations_table_row-expander_margin-top` | `-3px` | No description available |
| `mds_foundations_table_small_caption_margin-bottom` | `12px` | No description available |
| `mds_foundations_table_small_cell_padding-top` | `6px` | No description available |
| `mds_foundations_table_small_cell_padding-right` | `12px` | No description available |
| `mds_foundations_table_small_cell_padding-bottom` | `6px` | No description available |
| `mds_foundations_table_small_cell_padding-left` | `12px` | No description available |
| `mds_foundations_table_small_header-cell_sortable_padding-top` | `5px` | No description available |
| `mds_foundations_table_small_header-cell_sortable_padding-bottom` | `5px` | No description available |
| `mds_foundations_table_small_expanded-row_padding-top` | `12px` | No description available |
| `mds_foundations_table_small_expanded-row_padding-right` | `12px` | No description available |
| `mds_foundations_table_small_expanded-row_padding-bottom` | `20px` | No description available |
| `mds_foundations_table_small_expanded-row_padding-left` | `12px` | No description available |
| `mds_foundations_table_medium_caption_margin-bottom` | `16px` | No description available |
| `mds_foundations_table_medium_cell_padding-top` | `8px` | No description available |
| `mds_foundations_table_medium_cell_padding-right` | `16px` | No description available |
| `mds_foundations_table_medium_cell_padding-bottom` | `8px` | No description available |
| `mds_foundations_table_medium_cell_padding-left` | `16px` | No description available |
| `mds_foundations_table_medium_header-cell_sortable_padding-top` | `7px` | No description available |
| `mds_foundations_table_medium_header-cell_sortable_padding-bottom` | `7px` | No description available |
| `mds_foundations_table_medium_expanded-row_padding-top` | `16px` | No description available |
| `mds_foundations_table_medium_expanded-row_padding-right` | `16px` | No description available |
| `mds_foundations_table_medium_expanded-row_padding-bottom` | `24px` | No description available |
| `mds_foundations_table_medium_expanded-row_padding-left` | `16px` | No description available |
| `mds_foundations_table_large_caption_margin-bottom` | `24px` | No description available |
| `mds_foundations_table_large_cell_padding-top` | `12px` | No description available |
| `mds_foundations_table_large_cell_padding-right` | `24px` | No description available |
| `mds_foundations_table_large_cell_padding-bottom` | `12px` | No description available |
| `mds_foundations_table_large_cell_padding-left` | `24px` | No description available |
| `mds_foundations_table_large_header-cell_sortable_padding-top` | `11px` | No description available |
| `mds_foundations_table_large_header-cell_sortable_padding-bottom` | `11px` | No description available |
| `mds_foundations_table_large_expanded-row_padding-top` | `24px` | No description available |
| `mds_foundations_table_large_expanded-row_padding-right` | `24px` | No description available |
| `mds_foundations_table_large_expanded-row_padding-bottom` | `32px` | No description available |
| `mds_foundations_table_large_expanded-row_padding-left` | `24px` | No description available |
| `mds_foundations_toast_padding` | `16px` | No description available |
| `mds_foundations_toast_gap` | `16px` | No description available |

### Typography

Font families, sizes, weights, and text styling tokens

| Token                       | Value   | Use for.    |
|-----------------------------|---------|-------------|
| `mds_global_link_inline_text-decoration` | `underline` | Global link inline text decoration. Use it to define the text decoration for inline links. |
| `mds_global_link_inline_hover_text-decoration` | `none` | Global link inline hover text decoration. Use it to define the text decoration for inline links when hovered. |
| `mds_global_link_stand-alone_text-decoration` | `none` | Global link stand-alone text decoration. Use it to define the text decoration for stand-alone links. |
| `mds_global_link_stand-alone_hover_text-decoration` | `underline` | Global link stand-alone hover text decoration. Use it to define the text decoration for stand-alone links when hovered. |
| `mds_brand_typography_headline_font-family` | `Maersk Headline` | The font family used for headlines. |
| `mds_brand_typography_headline_font-family-fallback` | `Arial,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Apple SD Gothic Neo,Malgun Gothic,PingFang TC,Microsoft JhengHei,PingFang SC,Microsoft YaHei,Hiragino Kaku Gothic ProN,Meiryo,sans-serif` | The fallback font family used for headlines. |
| `mds_brand_typography_headline_x-small_font-style` | `normal` | The font style used for x-small headlines. |
| `mds_brand_typography_headline_x-small_font-weight` | `400px` | The font weight used for x-small headlines. |
| `mds_brand_typography_headline_x-small_text-transform` | `none` | The text transformation applied to x-small headlines. |
| `mds_brand_typography_headline_x-small_desktop_font-size` | `20px` | The font size used for x-small headlines on desktop. |
| `mds_brand_typography_headline_x-small_desktop_line-height` | `24px` | The line height used for x-small headlines on desktop. |
| `mds_brand_typography_headline_x-small_mobile_font-size` | `20px` | The font size used for x-small headlines on mobile. |
| `mds_brand_typography_headline_x-small_mobile_line-height` | `24px` | The line height used for x-small headlines on mobile. |
| `mds_brand_typography_headline_small_font-style` | `normal` | The font style used for small headlines. |
| `mds_brand_typography_headline_small_font-weight` | `400px` | The font weight used for small headlines. |
| `mds_brand_typography_headline_small_text-transform` | `none` | The text transformation applied to small headlines. |
| `mds_brand_typography_headline_small_desktop_font-size` | `26px` | The font size used for small headlines on desktop. |
| `mds_brand_typography_headline_small_desktop_line-height` | `32px` | The line height used for small headlines on desktop. |
| `mds_brand_typography_headline_small_mobile_font-size` | `22px` | The font size used for small headlines on mobile. |
| `mds_brand_typography_headline_small_mobile_line-height` | `26px` | The line height used for small headlines on mobile. |
| `mds_brand_typography_headline_medium_font-style` | `normal` | The font style used for medium headlines. |
| `mds_brand_typography_headline_medium_font-weight` | `300px` | The font weight used for medium headlines. |
| `mds_brand_typography_headline_medium_text-transform` | `none` | The text transformation applied to medium headlines. |
| `mds_brand_typography_headline_medium_desktop_font-size` | `40px` | The font size used for medium headlines on desktop. |
| `mds_brand_typography_headline_medium_desktop_line-height` | `40px` | The line height used for medium headlines on desktop. |
| `mds_brand_typography_headline_medium_mobile_font-size` | `26px` | The font size used for medium headlines on mobile. |
| `mds_brand_typography_headline_medium_mobile_line-height` | `32px` | The line height used for medium headlines on mobile. |
| `mds_brand_typography_headline_large_font-style` | `normal` | The font style used for large headlines. |
| `mds_brand_typography_headline_large_font-weight` | `300px` | The font weight used for large headlines. |
| `mds_brand_typography_headline_large_text-transform` | `none` | The text transformation applied to large headlines. |
| `mds_brand_typography_headline_large_desktop_font-size` | `50px` | The font size used for large headlines on desktop. |
| `mds_brand_typography_headline_large_desktop_line-height` | `56px` | The line height used for large headlines on desktop. |
| `mds_brand_typography_headline_large_mobile_font-size` | `38px` | The font size used for large headlines on mobile. |
| `mds_brand_typography_headline_large_mobile_line-height` | `38px` | The line height used for large headlines on mobile. |
| `mds_brand_typography_headline_x-large_font-style` | `normal` | The font style used for x-large headlines. |
| `mds_brand_typography_headline_x-large_font-weight` | `300px` | The font weight used for x-large headlines. |
| `mds_brand_typography_headline_x-large_text-transform` | `none` | The text transformation applied to x-large headlines. |
| `mds_brand_typography_headline_x-large_desktop_font-size` | `80px` | The font size used for x-large headlines on desktop. |
| `mds_brand_typography_headline_x-large_desktop_line-height` | `80px` | The line height used for x-large headlines on desktop. |
| `mds_brand_typography_headline_x-large_mobile_font-size` | `56px` | The font size used for x-large headlines on mobile. |
| `mds_brand_typography_headline_x-large_mobile_line-height` | `56px` | The line height used for x-large headlines on mobile. |
| `mds_brand_typography_text_font-family` | `Maersk Text` | The font family used for text. |
| `mds_brand_typography_text_font-family-fallback` | `Arial,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Apple SD Gothic Neo,Malgun Gothic,PingFang TC,Microsoft JhengHei,PingFang SC,Microsoft YaHei,Hiragino Kaku Gothic ProN,Meiryo,sans-serif` | The fallback font family used for text. |
| `mds_brand_typography_text_x-small_desktop_font-size` | `12px` | The font size used for x-small text on desktop. |
| `mds_brand_typography_text_x-small_desktop_line-height` | `16px` | The line height used for x-small text on desktop. |
| `mds_brand_typography_text_x-small_mobile_font-size` | `12px` | The font size used for x-small text on mobile. |
| `mds_brand_typography_text_x-small_mobile_line-height` | `16px` | The line height used for x-small text on mobile. |
| `mds_brand_typography_text_x-small_normal_font-style` | `normal` | The font style used for normal x-small text. |
| `mds_brand_typography_text_x-small_normal_font-weight` | `400px` | The font weight used for normal x-small text. |
| `mds_brand_typography_text_x-small_light_font-style` | `normal` | The font style used for light x-small text. |
| `mds_brand_typography_text_x-small_light_font-weight` | `300px` | The font weight used for light x-small text. |
| `mds_brand_typography_text_x-small_medium_font-style` | `normal` | The font style used for medium x-small text. |
| `mds_brand_typography_text_x-small_medium_font-weight` | `500px` | The font weight used for medium x-small text. |
| `mds_brand_typography_text_x-small_semibold_font-style` | `normal` | The font style used for semibold x-small text. |
| `mds_brand_typography_text_x-small_semibold_font-weight` | `600px` | The font weight used for semibold x-small text. |
| `mds_brand_typography_text_x-small_bold_font-style` | `normal` | The font style used for bold x-small text. |
| `mds_brand_typography_text_x-small_bold_font-weight` | `700px` | The font weight used for bold x-small text. |
| `mds_brand_typography_text_x-small_italic_font-style` | `italic` | The font style used for italic x-small text. |
| `mds_brand_typography_text_x-small_italic_font-weight` | `400px` | The font weight used for italic x-small text. |
| `mds_brand_typography_text_x-small_lightitalic_font-style` | `italic` | The font style used for light italic x-small text. |
| `mds_brand_typography_text_x-small_lightitalic_font-weight` | `300px` | The font weight used for light italic x-small text. |
| `mds_brand_typography_text_x-small_mediumitalic_font-style` | `italic` | The font style used for medium italic x-small text. |
| `mds_brand_typography_text_x-small_mediumitalic_font-weight` | `500px` | The font weight used for medium italic x-small text. |
| `mds_brand_typography_text_x-small_semibolditalic_font-style` | `italic` | The font style used for semibold italic x-small text. |
| `mds_brand_typography_text_x-small_semibolditalic_font-weight` | `600px` | The font weight used for semibold italic x-small text. |
| `mds_brand_typography_text_x-small_bolditalic_font-style` | `italic` | The font style used for bold italic x-small text. |
| `mds_brand_typography_text_x-small_bolditalic_font-weight` | `700px` | The font weight used for bold italic x-small text. |
| `mds_brand_typography_text_small_desktop_font-size` | `14px` | The font size used for small text on desktop. |
| `mds_brand_typography_text_small_desktop_line-height` | `20px` | The line height used for small text on desktop. |
| `mds_brand_typography_text_small_mobile_font-size` | `14px` | The font size used for small text on mobile. |
| `mds_brand_typography_text_small_mobile_line-height` | `20px` | The line height used for small text on mobile. |
| `mds_brand_typography_text_small_normal_font-style` | `normal` | The font style used for normal small text. |
| `mds_brand_typography_text_small_normal_font-weight` | `400px` | The font weight used for normal small text. |
| `mds_brand_typography_text_small_light_font-style` | `normal` | The font style used for light small text. |
| `mds_brand_typography_text_small_light_font-weight` | `300px` | The font weight used for light small text. |
| `mds_brand_typography_text_small_medium_font-style` | `normal` | The font style used for medium small text. |
| `mds_brand_typography_text_small_medium_font-weight` | `500px` | The font weight used for medium small text. |
| `mds_brand_typography_text_small_semibold_font-style` | `normal` | The font style used for semibold small text. |
| `mds_brand_typography_text_small_semibold_font-weight` | `600px` | The font weight used for semibold small text. |
| `mds_brand_typography_text_small_bold_font-style` | `normal` | The font style used for bold small text. |
| `mds_brand_typography_text_small_bold_font-weight` | `700px` | The font weight used for bold small text. |
| `mds_brand_typography_text_small_italic_font-style` | `italic` | The font style used for italic small text. |
| `mds_brand_typography_text_small_italic_font-weight` | `400px` | The font weight used for italic small text. |
| `mds_brand_typography_text_small_lightitalic_font-style` | `italic` | The font style used for light italic small text. |
| `mds_brand_typography_text_small_lightitalic_font-weight` | `300px` | The font weight used for light italic small text. |
| `mds_brand_typography_text_small_mediumitalic_font-style` | `italic` | The font style used for medium italic small text. |
| `mds_brand_typography_text_small_mediumitalic_font-weight` | `500px` | The font weight used for medium italic small text. |
| `mds_brand_typography_text_small_semibolditalic_font-style` | `italic` | The font style used for semibold italic small text. |
| `mds_brand_typography_text_small_semibolditalic_font-weight` | `600px` | The font weight used for semibold italic small text. |
| `mds_brand_typography_text_small_bolditalic_font-style` | `italic` | The font style used for bold italic small text. |
| `mds_brand_typography_text_small_bolditalic_font-weight` | `700px` | The font weight used for bold italic small text. |
| `mds_brand_typography_text_medium_desktop_font-size` | `16px` | The font size used for medium text on desktop. |
| `mds_brand_typography_text_medium_desktop_line-height` | `24px` | The line height used for medium text on desktop. |
| `mds_brand_typography_text_medium_mobile_font-size` | `16px` | The font size used for medium text on mobile. |
| `mds_brand_typography_text_medium_mobile_line-height` | `24px` | The line height used for medium text on mobile. |
| `mds_brand_typography_text_medium_normal_font-style` | `normal` | The font style used for normal medium text. |
| `mds_brand_typography_text_medium_normal_font-weight` | `400px` | The font weight used for normal medium text. |
| `mds_brand_typography_text_medium_light_font-style` | `normal` | The font style used for light medium text. |
| `mds_brand_typography_text_medium_light_font-weight` | `300px` | The font weight used for light medium text. |
| `mds_brand_typography_text_medium_medium_font-style` | `normal` | The font style used for medium medium text. |
| `mds_brand_typography_text_medium_medium_font-weight` | `500px` | The font weight used for medium medium text. |
| `mds_brand_typography_text_medium_semibold_font-style` | `normal` | The font style used for semibold medium text. |
| `mds_brand_typography_text_medium_semibold_font-weight` | `600px` | The font weight used for semibold medium text. |
| `mds_brand_typography_text_medium_bold_font-style` | `normal` | The font style used for bold medium text. |
| `mds_brand_typography_text_medium_bold_font-weight` | `700px` | The font weight used for bold medium text. |
| `mds_brand_typography_text_medium_italic_font-style` | `italic` | The font style used for italic medium text. |
| `mds_brand_typography_text_medium_italic_font-weight` | `400px` | The font weight used for italic medium text. |
| `mds_brand_typography_text_medium_lightitalic_font-style` | `italic` | The font style used for light italic medium text. |
| `mds_brand_typography_text_medium_lightitalic_font-weight` | `300px` | The font weight used for light italic medium text. |
| `mds_brand_typography_text_medium_mediumitalic_font-style` | `italic` | The font style used for medium italic medium text. |
| `mds_brand_typography_text_medium_mediumitalic_font-weight` | `500px` | The font weight used for medium italic medium text. |
| `mds_brand_typography_text_medium_semibolditalic_font-style` | `italic` | The font style used for semibold italic medium text. |
| `mds_brand_typography_text_medium_semibolditalic_font-weight` | `600px` | The font weight used for semibold italic medium text. |
| `mds_brand_typography_text_medium_bolditalic_font-style` | `italic` | The font style used for bold italic medium text. |
| `mds_brand_typography_text_medium_bolditalic_font-weight` | `700px` | The font weight used for bold italic medium text. |
| `mds_brand_typography_text_large_desktop_font-size` | `18px` | The font size used for large text on desktop. |
| `mds_brand_typography_text_large_desktop_line-height` | `28px` | The line height used for large text on desktop. |
| `mds_brand_typography_text_large_mobile_font-size` | `18px` | The font size used for large text on mobile. |
| `mds_brand_typography_text_large_mobile_line-height` | `28px` | The line height used for large text on mobile. |
| `mds_brand_typography_text_large_normal_font-style` | `normal` | The font style used for normal large text. |
| `mds_brand_typography_text_large_normal_font-weight` | `400px` | The font weight used for normal large text. |
| `mds_brand_typography_text_large_light_font-style` | `normal` | The font style used for light large text. |
| `mds_brand_typography_text_large_light_font-weight` | `300px` | The font weight used for light large text. |
| `mds_brand_typography_text_large_medium_font-style` | `normal` | The font style used for medium large text. |
| `mds_brand_typography_text_large_medium_font-weight` | `500px` | The font weight used for medium large text. |
| `mds_brand_typography_text_large_semibold_font-style` | `normal` | The font style used for semibold large text. |
| `mds_brand_typography_text_large_semibold_font-weight` | `600px` | The font weight used for semibold large text. |
| `mds_brand_typography_text_large_bold_font-style` | `normal` | The font style used for bold large text. |
| `mds_brand_typography_text_large_bold_font-weight` | `700px` | The font weight used for bold large text. |
| `mds_brand_typography_text_large_italic_font-style` | `italic` | The font style used for italic large text. |
| `mds_brand_typography_text_large_italic_font-weight` | `400px` | The font weight used for italic large text. |
| `mds_brand_typography_text_large_lightitalic_font-style` | `italic` | The font style used for light italic large text. |
| `mds_brand_typography_text_large_lightitalic_font-weight` | `300px` | The font weight used for light italic large text. |
| `mds_brand_typography_text_large_mediumitalic_font-style` | `italic` | The font style used for medium italic large text. |
| `mds_brand_typography_text_large_mediumitalic_font-weight` | `500px` | The font weight used for medium italic large text. |
| `mds_brand_typography_text_large_semibolditalic_font-style` | `italic` | The font style used for semibold italic large text. |
| `mds_brand_typography_text_large_semibolditalic_font-weight` | `600px` | The font weight used for semibold italic large text. |
| `mds_brand_typography_text_large_bolditalic_font-style` | `italic` | The font style used for bold italic large text. |
| `mds_brand_typography_text_large_bolditalic_font-weight` | `700px` | The font weight used for bold italic large text. |
| `mds_brand_appearance_neutral_default_text-color` | `rgb(20,20,20)` | Neutral default text color. |
| `mds_brand_appearance_neutral_weakest_text-color` | `rgb(106,106,106)` | Neutral weakest text color. |
| `mds_brand_appearance_neutral_weak_text-color` | `rgb(76,76,76)` | Neutral weak text color. |
| `mds_brand_appearance_neutral_inverse_text-color` | `rgb(255,255,255)` | Neutral inverse text color. |
| `mds_brand_appearance_primary_default_text-color` | `rgb(20,20,20)` | Primary default text color. |
| `mds_brand_appearance_secondary_default_text-color` | `rgb(0, 119, 178)` | Secondary default text color. It's a brand color. Use it sparingly, only in cases where it is needed to highlight important information or actions. |
| `mds_brand_appearance_success_default_text-color` | `rgb(50,133,41)` | Success default text color. Use it to indicate successful actions or states. |
| `mds_brand_appearance_warning_default_text-color` | `rgb(128,104,20)` | Warning default text color. Use it to indicate warnings or important information that requires attention. |
| `mds_brand_appearance_error_default_text-color` | `rgb(184,0,18)` | Error default text color. Use it to indicate errors or critical issues that require immediate attention. |
| `mds_brand_appearance_info_default_text-color` | `rgb(0,89,134)` | Info default text color. Use it to indicate informational messages or non-critical updates. |
| `mds_foundations_body_typography` | `text-medium_normal` | No description available |
| `mds_foundations_body_text-color` | `var(--mds_brand_appearance_neutral_default_text-color)` | No description available |
| `mds_foundations_breadcrumb_item_text-color` | `var(--mds_brand_appearance_neutral_weak_text-color)` | No description available |
| `mds_foundations_breadcrumb_separator_text-color` | `var(--mds_brand_appearance_neutral_weakest_text-color)` | No description available |
| `mds_foundations_link_inline_text-decoration` | `var(--mds_global_link_inline_text-decoration)` | No description available |
| `mds_foundations_link_inline_hover_text-decoration` | `var(--mds_global_link_inline_hover_text-decoration)` | No description available |
| `mds_foundations_link_stand-alone_text-decoration` | `var(--mds_global_link_stand-alone_text-decoration)` | No description available |
| `mds_foundations_link_stand-alone_hover_text-decoration` | `var(--mds_global_link_stand-alone_hover_text-decoration)` | No description available |
| `mds_foundations_link_default_text-color` | `var(--mds_brand_appearance_primary_default_link-color)` | No description available |
| `mds_foundations_table_cell_typography` | `text-medium_normal` | No description available |
| `mds_foundations_table_cell_text-color` | `var(--mds_brand_appearance_neutral_default_on-background-color)` | No description available |
| `mds_foundations_table_cell_hover_text-color` | `var(--mds_brand_appearance_neutral_default_on-background-color)` | No description available |
| `mds_foundations_table_cell_selected_text-color` | `var(--mds_brand_appearance_primary_weak_on-background-color)` | No description available |
| `mds_foundations_table_header-cell_typography` | `text-medium_bold` | No description available |
| `mds_foundations_table_header-cell_sort-button_font-weight` | `var(--mds_brand_typography_text_medium_bold_font-weight)` | No description available |
| `mds_foundations_table_header-cell_text-color` | `var(--mds_brand_appearance_neutral_weakest_on-background-color)` | No description available |
| `mds_foundations_table_footer-cell_typography` | `text-medium_bold` | No description available |
| `mds_foundations_table_zebra-stripe_text-color` | `var(--mds_brand_appearance_neutral_weakest_on-background-color)` | No description available |
| `mds_foundations_table_caption_text-color` | `var(--mds_brand_appearance_neutral_default_on-background-color)` | No description available |
| `mds_foundations_table_subtext_text-color` | `var(--mds_brand_appearance_neutral_weak_text-color)` | No description available |
| `mds_foundations_table_subtext_font-weight` | `var(--mds_brand_typography_text_medium_normal_font-weight)` | No description available |
| `mds_foundations_table_small_caption_typography` | `text-small_normal` | No description available |
| `mds_foundations_table_small_cell_typography` | `text-small_normal` | No description available |
| `mds_foundations_table_small_header-cell_typography` | `text-small_bold` | No description available |
| `mds_foundations_table_small_subtext_typography` | `text-x-small_normal` | No description available |
| `mds_foundations_table_medium_caption_typography` | `text-medium_normal` | No description available |
| `mds_foundations_table_medium_cell_typography` | `text-medium_normal` | No description available |
| `mds_foundations_table_medium_header-cell_typography` | `text-medium_bold` | No description available |
| `mds_foundations_table_medium_subtext_typography` | `text-small_normal` | No description available |
| `mds_foundations_table_large_caption_typography` | `text-medium_normal` | No description available |
| `mds_foundations_table_large_cell_typography` | `text-medium_normal` | No description available |
| `mds_foundations_table_large_header-cell_typography` | `text-medium_bold` | No description available |
| `mds_foundations_table_large_subtext_typography` | `text-small_normal` | No description available |
| `mds_foundations_typography_heading-1_typography` | `headline-large` | No description available |
| `mds_foundations_typography_heading-1_margin-top` | `48px` | No description available |
| `mds_foundations_typography_heading-1_margin-bottom` | `24px` | No description available |
| `mds_foundations_typography_heading-2_typography` | `headline-medium` | No description available |
| `mds_foundations_typography_heading-2_margin-top` | `48px` | No description available |
| `mds_foundations_typography_heading-2_margin-bottom` | `24px` | No description available |
| `mds_foundations_typography_heading-3_typography` | `headline-small` | No description available |
| `mds_foundations_typography_heading-3_margin-top` | `48px` | No description available |
| `mds_foundations_typography_heading-3_margin-bottom` | `16px` | No description available |
| `mds_foundations_typography_heading-4_typography` | `headline-x-small` | No description available |
| `mds_foundations_typography_heading-4_margin-top` | `24px` | No description available |
| `mds_foundations_typography_heading-4_margin-bottom` | `16px` | No description available |
| `mds_foundations_typography_heading-5_typography` | `text-medium_bold` | No description available |
| `mds_foundations_typography_heading-5_margin-top` | `24px` | No description available |
| `mds_foundations_typography_heading-5_margin-bottom` | `16px` | No description available |
| `mds_foundations_typography_heading-6_typography` | `text-medium_bold` | No description available |
| `mds_foundations_typography_heading-6_margin-top` | `24px` | No description available |
| `mds_foundations_typography_heading-6_margin-bottom` | `16px` | No description available |
| `mds_foundations_typography_paragraph_margin-top` | `24px` | No description available |
| `mds_foundations_typography_paragraph_margin-bottom` | `24px` | No description available |
| `mds_foundations_typography_paragraph_x-small_typography` | `text-x-small_normal` | No description available |
| `mds_foundations_typography_paragraph_small_typography` | `text-small_normal` | No description available |
| `mds_foundations_typography_paragraph_medium_typography` | `text-medium_normal` | No description available |
| `mds_foundations_typography_emphasise_x-small_typography` | `text-x-small_italic` | No description available |
| `mds_foundations_typography_emphasise_small_typography` | `text-small_italic` | No description available |
| `mds_foundations_typography_emphasise_medium_typography` | `text-medium_italic` | No description available |
| `mds_foundations_typography_strong_x-small_typography` | `text-x-small_bold` | No description available |
| `mds_foundations_typography_strong_small_typography` | `text-small_bold` | No description available |
| `mds_foundations_typography_strong_medium_typography` | `text-medium_bold` | No description available |

### Motion

Animation duration, timing, and transition tokens

| Token                       | Value   | Use for.    |
|-----------------------------|---------|-------------|
| `mds_global_transition_slow_duration` | `0.75s` | Global slow transition duration. Use it to define the duration of slow transitions across the UI. |
| `mds_global_transition_slow_timing` | `ease-in-out` | Global slow transition timing function. Use it to define the timing function for slow transitions across the UI. |
| `mds_global_transition_medium_duration` | `0.5s` | Global medium transition duration. Use it to define the duration of medium transitions across the UI. |
| `mds_global_transition_medium_timing` | `ease-in-out` | Global medium transition timing function. Use it to define the timing function for medium transitions across the UI. |
| `mds_global_transition_fast_duration` | `0.2s` | Global fast transition duration. Use it to define the duration of fast transitions across the UI. |
| `mds_global_transition_fast_timing` | `ease-in-out` | Global fast transition timing function. Use it to define the timing function for fast transitions across the UI. |
| `mds_foundations_link_transition-properties` | `all` | No description available |
| `mds_foundations_link_transition-duration` | `var(--mds_global_transition_fast_duration)` | No description available |
| `mds_foundations_link_transition-timing` | `var(--mds_global_transition_fast_timing)` | No description available |
| `mds_foundations_toast_transition-properties` | `box-shadow` | No description available |
| `mds_foundations_toast_transition-duration` | `var(--mds_global_transition_fast_duration)` | No description available |
| `mds_foundations_toast_transition-timing` | `var(--mds_global_transition_fast_timing)` | No description available |

### Other

Miscellaneous design tokens

| Token                       | Value   | Use for.    |
|-----------------------------|---------|-------------|
| `mds_global_system_unit` | `1px` | No description available |
| `mds_foundations_link_external_icon_width` | `20px` | No description available |
| `mds_foundations_link_external_icon_height` | `20px` | No description available |
| `mds_foundations_list_unordered_list-style` | `outside circle` | No description available |
| `mds_foundations_list_ordered_list-style` | `outside decimal` | No description available |
| `mds_foundations_modal_z-index` | `9999px` | No description available |
| `mds_foundations_toast_min-width` | `280px` | No description available |
| `mds_foundations_toast_max-width` | `600px` | No description available |
| `mds_foundations_toast_width` | `480px` | No description available |

