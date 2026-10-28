# ALIANCA Brand Design Tokens

Complete list of MDS color, border and motion, gap, layout, and typography tokens for the alianca brand. Use as CSS custom properties: `var(--token_name)`.

> **Note:** Values shown are for the **light** & **dark** theme. Dark theme swaps many of these values automatically. See the [Light vs Dark differences](#light-vs-dark-theme-differences) section for details.

## Installation

```bash
npm install @maersk-global/mds-design-tokens 
```

## Imports

### DARK theme

```html
<link rel="stylesheet" href="./node_modules/@maersk-global/mds-design-tokens/alianca/dark/css/design-tokens-px.css" />
```

```css
@import url("@maersk-global/mds-design-tokens/alianca/dark/css/design-tokens-px.css");
```

```javascript
import "@maersk-global/mds-design-tokens/alianca/dark/css/design-tokens-px.css";
```

```css
@import url("@maersk-global/mds-design-tokens/alianca/dark/css/design-tokens-px.scss");
```

### LIGHT theme

```html
<link rel="stylesheet" href="./node_modules/@maersk-global/mds-design-tokens/alianca/light/css/design-tokens-px.css" />
```

```css
@import url("@maersk-global/mds-design-tokens/alianca/light/css/design-tokens-px.css");
```

```javascript
import "@maersk-global/mds-design-tokens/alianca/light/css/design-tokens-px.css";
```

```css
@import url("@maersk-global/mds-design-tokens/alianca/light/css/design-tokens-px.scss");
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
| `mds_brand_appearance_primary_default_background-color` | `rgb(5,125,201)` | Primary default background color. |
| `mds_brand_appearance_primary_default_on-background-color` | `rgb(255,255,255)` | Primary default text color to be used on default background. |
| `mds_brand_appearance_primary_default_border-color` | `rgb(5,125,201)` | Primary default border color. |
| `mds_brand_appearance_primary_default_link-color` | `rgb(5,125,201)` | Primary default link color. |
| `mds_brand_appearance_primary_weak_background-color` | `rgb(2,38,60)` | Primary weak background color. |
| `mds_brand_appearance_primary_weak_on-background-color` | `rgb(155,203,233)` | Primary weak text color to be used on weak background. |
| `mds_brand_appearance_primary_weak_border-color` | `rgb(3,75,121)` | Primary weak border color. |
| `mds_brand_appearance_secondary_default_background-color` | `rgb(205,209,222)` | Secondary default background color. It's a brand color. Use it sparingly, only in cases where it is needed to highlight important information or actions. |
| `mds_brand_appearance_secondary_default_on-background-color` | `rgb(20,20,20)` | Secondary default text color to be used on default background. It's a brand color. Use it sparingly, only in cases where it is needed to highlight important information or actions. |
| `mds_brand_appearance_secondary_default_border-color` | `rgb(129,139,172)` | Secondary default border color. It's a brand color. Use it sparingly, only in cases where it is needed to highlight important information or actions. |
| `mds_brand_appearance_secondary_weak_background-color` | `rgb(16,36,97)` | Secondary weak background color. |
| `mds_brand_appearance_secondary_weak_on-background-color` | `rgb(255,255,255)` | Secondary weak text color to be used on weak background. |
| `mds_brand_appearance_secondary_weak_border-color` | `rgb(66,82,130)` | Secondary weak border color. |
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
| `mds_brand_appearance_static_dark` | `rgb(84,84,84)` | Dark static color. |
| `mds_brand_appearance_static_light` | `rgb(255,255,255)` | Light static color. |
| `mds_brand_appearance_static_brand` | `rgb(5,125,201)` | Brand static color. Use it to represent the brand identity consistently across UI. |
| `mds_brand_appearance_static_logo_url` | `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='86' height='48' viewBox='0 0 86 48' fill='none'> <path d='M1.8957 34.1937H1.09958C1.03917 34.1937 0.994681 34.2261 0.97829 34.2919L0 38.0169H0.320321L0.663121 36.6733H2.32654L2.67449 38.0169H3.0009L2.01746 34.2919C2.00013 34.2261 1.95658 34.1937 1.8957 34.1937ZM0.734771 36.3891L1.22649 34.4775H1.7627L2.25395 36.3891H0.734771Z' fill='white'/> <path d='M6.95744 37.5962L5.55955 34.1937H5.17273V38.0169H5.46542V34.7126L6.76965 37.8587C6.79728 37.9295 6.83615 37.9517 6.88579 37.9517H7.02394C7.07358 37.9517 7.11245 37.9295 7.14008 37.8587L8.44431 34.707V38.0169H8.74262V34.1937H8.36704L6.95744 37.5962Z' fill='white'/> <path d='M10.5449 35.1222C10.1744 35.1222 9.80963 35.1713 9.62746 35.2037V35.4823C9.80963 35.4494 10.1688 35.4059 10.5336 35.4059C11.1691 35.4059 11.2352 35.5753 11.2352 35.8757V36.4487L10.2517 36.52C9.69958 36.5635 9.45044 36.7603 9.45044 37.3171C9.45044 37.8526 9.64385 38.0711 10.2629 38.0711C10.5669 38.0711 10.8708 37.9776 11.2464 37.841L11.3073 38.0165H11.5339V35.9026C11.5339 35.3189 11.3129 35.1222 10.5449 35.1222ZM11.2356 37.6725C10.86 37.7489 10.5505 37.8035 10.285 37.8035C9.87613 37.8035 9.75999 37.7105 9.75999 37.3175C9.75999 36.9514 9.82087 36.8042 10.2517 36.7714L11.2352 36.7001V37.6725H11.2356Z' fill='white'/> <path d='M13.3684 35.1217C12.6664 35.1217 12.2188 35.3235 12.2188 36.5144C12.2188 37.492 12.3738 38.071 13.4232 38.071C13.8049 38.071 14.1585 37.9998 14.3186 37.9396V37.661C14.1692 37.7156 13.8213 37.7864 13.4068 37.7864C12.6604 37.7864 12.5391 37.4258 12.5171 36.6718H14.4399V36.2951C14.4404 35.3022 14.0203 35.1217 13.3684 35.1217ZM14.1421 36.4163H12.5175C12.5227 35.4878 12.8327 35.4059 13.4129 35.4059C13.9046 35.4059 14.1421 35.5753 14.1421 36.1867V36.4163Z' fill='white'/> <path d='M15.3531 35.1768H15.1049V38.0169H15.4032V35.4661H16.403V35.1222L15.3919 35.3078L15.3531 35.1768Z' fill='white'/> <path d='M18.055 36.4654L17.5244 36.3284C17.2701 36.2631 17.1488 36.1807 17.1488 35.8535C17.1488 35.4767 17.3202 35.4054 17.7899 35.4054C18.0882 35.4054 18.3645 35.4383 18.5968 35.4878V35.2092C18.4146 35.1657 18.0718 35.1217 17.7899 35.1217C17.16 35.1217 16.8453 35.3129 16.8453 35.8535C16.8453 36.3233 17.0055 36.4922 17.4312 36.6019L18.0114 36.7496C18.2545 36.8098 18.3926 36.8972 18.3926 37.2902C18.3926 37.673 18.2268 37.7873 17.6906 37.7873C17.3151 37.7873 16.9943 37.6943 16.8397 37.6563V37.935C17.0111 37.9951 17.3427 38.0715 17.6742 38.0715C18.3598 38.0715 18.6966 37.8697 18.6966 37.2522C18.6961 36.651 18.3533 36.5418 18.055 36.4654Z' fill='white'/> <path d='M21.2879 35.1768H20.9123L19.625 36.4654V34.1937H19.3262V38.0169H19.625V36.4983L20.984 38.0169H21.3652L19.9617 36.4766L21.2879 35.1768Z' fill='white'/> <path d='M23.4712 36.0781C23.4712 34.5978 23.6866 34.434 24.6701 34.434C24.9464 34.434 25.2447 34.4613 25.4273 34.483V34.1933C25.2451 34.1715 24.9464 34.1387 24.6813 34.1387C23.5044 34.1387 23.1509 34.39 23.1509 36.0887C23.1509 37.9235 23.637 38.0716 24.6705 38.0716C24.9632 38.0716 25.2672 38.0276 25.4549 37.9948V37.7055C25.2564 37.7383 24.9576 37.7763 24.6977 37.7763C23.8969 37.7763 23.4712 37.7707 23.4712 36.0781Z' fill='white'/> <path d='M27.0961 35.1222C26.2288 35.1222 25.8804 35.417 25.8804 36.5964C25.8804 37.7813 26.2288 38.0715 27.0961 38.0715C27.947 38.0715 28.301 37.7873 28.301 36.5964C28.301 35.4115 27.9475 35.1222 27.0961 35.1222ZM27.0961 37.7873C26.411 37.7873 26.1899 37.5962 26.1899 36.5964C26.1899 35.6026 26.411 35.4055 27.0961 35.4055C27.77 35.4055 27.9915 35.6022 27.9915 36.5964C27.9915 37.5962 27.7705 37.7873 27.0961 37.7873Z' fill='white'/> <path d='M32.23 35.1222C31.8933 35.1222 31.4175 35.2805 31.0363 35.4281C30.9314 35.2263 30.7268 35.1222 30.4121 35.1222C30.0693 35.1222 29.5832 35.2967 29.2961 35.4008L29.2516 35.1768H29.0029V38.0174H29.3012V35.5702C29.5888 35.499 30.0032 35.4064 30.3456 35.4064C30.6879 35.4064 30.8204 35.554 30.8204 35.9035V38.0174H31.1187V35.8484C31.1187 35.7503 31.1075 35.6628 31.0911 35.5813C31.4339 35.499 31.8315 35.4064 32.1631 35.4064C32.5059 35.4064 32.6379 35.554 32.6379 35.9035V38.0174H32.9362V35.8484C32.9372 35.3675 32.7166 35.1222 32.23 35.1222Z' fill='white'/> <path d='M34.9663 35.1222C34.6296 35.1222 34.2479 35.2476 34.0325 35.3462L33.9716 35.1768H33.7562V39H34.0545V37.9021C34.1922 37.9674 34.513 38.072 34.8942 38.072C35.5353 38.072 35.9722 37.8804 35.9722 36.6681C35.9727 35.4383 35.7348 35.1222 34.9663 35.1222ZM34.867 37.7873C34.5406 37.7873 34.2091 37.7059 34.0545 37.6397V35.5096C34.2311 35.4605 34.6128 35.4059 34.8942 35.4059C35.5077 35.4059 35.6622 35.6573 35.6622 36.6677C35.6627 37.6943 35.37 37.7873 34.867 37.7873Z' fill='white'/> <path d='M37.6365 35.1222C37.2661 35.1222 36.9013 35.1713 36.7187 35.2037V35.4823C36.9013 35.4494 37.2605 35.4059 37.6248 35.4059C38.2603 35.4059 38.3268 35.5753 38.3268 35.8757V36.4487L37.3434 36.52C36.7908 36.5635 36.5421 36.7603 36.5421 37.3171C36.5421 37.8526 36.7355 38.0711 37.3546 38.0711C37.6586 38.0711 37.9625 37.9776 38.3381 37.841L38.3989 38.0165H38.6256V35.9026C38.6251 35.3189 38.4041 35.1222 37.6365 35.1222ZM38.3268 37.6725C37.9512 37.7489 37.6417 37.8035 37.3762 37.8035C36.9673 37.8035 36.8512 37.7105 36.8512 37.3175C36.8512 36.9514 36.9121 36.8042 37.3429 36.7714L38.3264 36.7001V37.6725H38.3268Z' fill='white'/> <path d='M40.8689 35.1222C40.5041 35.1222 40.018 35.2967 39.7304 35.4008L39.6864 35.1768H39.4377V38.0174H39.7361V35.5702C40.0231 35.499 40.438 35.4064 40.8029 35.4064C41.1677 35.4064 41.3002 35.554 41.3002 35.9035V38.0174H41.5985V35.8484C41.598 35.3675 41.3775 35.1222 40.8689 35.1222Z' fill='white'/> <path d='M43.3 37.6341L42.3667 35.1768H42.0515L43.1516 37.9567L42.731 39H43.035L44.5101 35.1768H44.201L43.3 37.6341Z' fill='white'/> <path d='M82.8419 15.0488C82.7338 14.5147 82.456 14.2319 81.8856 14.2194C79.0604 14.2731 78.5096 17.1645 78.5092 17.1678H80.0569L81.0956 22.8485L81.6262 25.7978L81.7676 26.5648H78.2305L77.6709 29.5118H82.3109H85.8035L82.8419 15.0488Z' fill='%23057DC9'/> <path d='M81.8866 14.2199C81.9129 14.2195 81.9386 14.219 81.9658 14.219H76.6749C76.0783 14.219 75.7912 14.5032 75.6802 15.0489L72.6072 29.5128H76.1668L77.0579 24.8166L77.0626 24.7926L77.4265 22.8495L78.498 17.229L78.5097 17.1688C78.5106 17.1651 79.0604 14.2731 81.8866 14.2199Z' fill='white'/> <path d='M64.8986 21.7784C64.8986 17.8889 65.3847 17.0373 67.9936 17.0373C69.1648 17.0373 70.359 17.1465 71.0221 17.2118V14.1967C70.315 14.1092 69.0323 14 67.7726 14C62.7327 14 61.2729 15.7478 61.2729 21.8219C61.2729 27.5248 62.5116 29.4035 66.3138 29.6873V29.7002V31.5665C68.0821 31.5665 68.3912 31.6317 68.3912 32.0034C68.3912 32.3316 68.1706 32.4403 67.087 32.4403C66.4679 32.4403 66.0923 32.3968 65.7162 32.3316V33.8609C66.2023 33.9483 66.9099 33.9918 67.5066 33.9918C69.894 33.9918 70.5351 33.3582 70.5351 31.9817C70.5351 30.955 70.0265 30.2992 68.1702 30.2992V29.7095C68.2718 29.7072 68.3729 29.7044 68.4746 29.7007H68.4778C69.5034 29.6636 70.5168 29.5442 71.2207 29.4253V26.4102C70.5351 26.5412 69.1644 26.6944 67.8826 26.6944C65.7162 26.6944 64.8986 25.864 64.8986 21.7784Z' fill='white'/> <path d='M56.1228 24.1163L53.9957 19.9941L51.0164 14.2185H47.4568V29.5128H50.7068V19.7682L55.8573 29.5128H59.3723V14.2185H56.1228V24.1163Z' fill='white'/> <path d='M41.3339 14.2185H36.043C36.0702 14.2185 36.0955 14.2208 36.1217 14.2213C35.5527 14.2338 35.2736 14.5157 35.1659 15.0493L32.2039 29.5128H35.6965H42.0907H45.4012L42.3282 15.0489C42.2176 14.5027 41.9301 14.2185 41.3339 14.2185ZM41.2824 26.5658L40.9504 24.8166L41.1344 25.7988L41.281 26.5658H36.2402L36.3816 25.7983L36.9127 22.849L37.9514 17.1683H39.4987L39.5127 17.2424L40.9457 24.7907L40.9509 24.8166L41.2824 26.5658Z' fill='white'/> <path d='M30.148 14.2185H26.6108V29.5128H30.148V14.2185Z' fill='white'/> <path d='M24.6211 26.5635H18.7185V14.219H15.1819V29.5128H24.6211V26.5635Z' fill='white'/> <path d='M13.2263 29.5128L10.1538 15.0489C10.0432 14.5027 9.7557 14.2185 9.15861 14.2185H3.86816C3.89486 14.2185 3.92108 14.2194 3.94731 14.2199C6.77259 14.2736 7.32332 17.1651 7.32379 17.1683L8.40698 22.849L8.77554 24.8166L9.66719 29.5128H13.2263Z' fill='white'/> <path d='M3.94736 14.22C3.37697 14.2325 3.09926 14.5148 2.99108 15.0494L0.0290527 29.5129H3.52167H8.16165L7.60202 26.5658H4.06538L4.20681 25.7984L4.7374 22.8491L5.7761 17.1684H7.32338C7.32338 17.1651 6.77265 14.2732 3.94736 14.22Z' fill='%23057DC9'/> </svg>")` | Full brand logo in SVG format. Used in mc-top-bar component. |
| `mds_brand_appearance_static_logo_width` | `86px` | Width of the full brand logo. |
| `mds_brand_appearance_static_logo-short_url` | `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='86' height='48' viewBox='0 0 86 48' fill='none'> <path d='M1.8957 34.1937H1.09958C1.03917 34.1937 0.994681 34.2261 0.97829 34.2919L0 38.0169H0.320321L0.663121 36.6733H2.32654L2.67449 38.0169H3.0009L2.01746 34.2919C2.00013 34.2261 1.95658 34.1937 1.8957 34.1937ZM0.734771 36.3891L1.22649 34.4775H1.7627L2.25395 36.3891H0.734771Z' fill='white'/> <path d='M6.95744 37.5962L5.55955 34.1937H5.17273V38.0169H5.46542V34.7126L6.76965 37.8587C6.79728 37.9295 6.83615 37.9517 6.88579 37.9517H7.02394C7.07358 37.9517 7.11245 37.9295 7.14008 37.8587L8.44431 34.707V38.0169H8.74262V34.1937H8.36704L6.95744 37.5962Z' fill='white'/> <path d='M10.5449 35.1222C10.1744 35.1222 9.80963 35.1713 9.62746 35.2037V35.4823C9.80963 35.4494 10.1688 35.4059 10.5336 35.4059C11.1691 35.4059 11.2352 35.5753 11.2352 35.8757V36.4487L10.2517 36.52C9.69958 36.5635 9.45044 36.7603 9.45044 37.3171C9.45044 37.8526 9.64385 38.0711 10.2629 38.0711C10.5669 38.0711 10.8708 37.9776 11.2464 37.841L11.3073 38.0165H11.5339V35.9026C11.5339 35.3189 11.3129 35.1222 10.5449 35.1222ZM11.2356 37.6725C10.86 37.7489 10.5505 37.8035 10.285 37.8035C9.87613 37.8035 9.75999 37.7105 9.75999 37.3175C9.75999 36.9514 9.82087 36.8042 10.2517 36.7714L11.2352 36.7001V37.6725H11.2356Z' fill='white'/> <path d='M13.3684 35.1217C12.6664 35.1217 12.2188 35.3235 12.2188 36.5144C12.2188 37.492 12.3738 38.071 13.4232 38.071C13.8049 38.071 14.1585 37.9998 14.3186 37.9396V37.661C14.1692 37.7156 13.8213 37.7864 13.4068 37.7864C12.6604 37.7864 12.5391 37.4258 12.5171 36.6718H14.4399V36.2951C14.4404 35.3022 14.0203 35.1217 13.3684 35.1217ZM14.1421 36.4163H12.5175C12.5227 35.4878 12.8327 35.4059 13.4129 35.4059C13.9046 35.4059 14.1421 35.5753 14.1421 36.1867V36.4163Z' fill='white'/> <path d='M15.3531 35.1768H15.1049V38.0169H15.4032V35.4661H16.403V35.1222L15.3919 35.3078L15.3531 35.1768Z' fill='white'/> <path d='M18.055 36.4654L17.5244 36.3284C17.2701 36.2631 17.1488 36.1807 17.1488 35.8535C17.1488 35.4767 17.3202 35.4054 17.7899 35.4054C18.0882 35.4054 18.3645 35.4383 18.5968 35.4878V35.2092C18.4146 35.1657 18.0718 35.1217 17.7899 35.1217C17.16 35.1217 16.8453 35.3129 16.8453 35.8535C16.8453 36.3233 17.0055 36.4922 17.4312 36.6019L18.0114 36.7496C18.2545 36.8098 18.3926 36.8972 18.3926 37.2902C18.3926 37.673 18.2268 37.7873 17.6906 37.7873C17.3151 37.7873 16.9943 37.6943 16.8397 37.6563V37.935C17.0111 37.9951 17.3427 38.0715 17.6742 38.0715C18.3598 38.0715 18.6966 37.8697 18.6966 37.2522C18.6961 36.651 18.3533 36.5418 18.055 36.4654Z' fill='white'/> <path d='M21.2879 35.1768H20.9123L19.625 36.4654V34.1937H19.3262V38.0169H19.625V36.4983L20.984 38.0169H21.3652L19.9617 36.4766L21.2879 35.1768Z' fill='white'/> <path d='M23.4712 36.0781C23.4712 34.5978 23.6866 34.434 24.6701 34.434C24.9464 34.434 25.2447 34.4613 25.4273 34.483V34.1933C25.2451 34.1715 24.9464 34.1387 24.6813 34.1387C23.5044 34.1387 23.1509 34.39 23.1509 36.0887C23.1509 37.9235 23.637 38.0716 24.6705 38.0716C24.9632 38.0716 25.2672 38.0276 25.4549 37.9948V37.7055C25.2564 37.7383 24.9576 37.7763 24.6977 37.7763C23.8969 37.7763 23.4712 37.7707 23.4712 36.0781Z' fill='white'/> <path d='M27.0961 35.1222C26.2288 35.1222 25.8804 35.417 25.8804 36.5964C25.8804 37.7813 26.2288 38.0715 27.0961 38.0715C27.947 38.0715 28.301 37.7873 28.301 36.5964C28.301 35.4115 27.9475 35.1222 27.0961 35.1222ZM27.0961 37.7873C26.411 37.7873 26.1899 37.5962 26.1899 36.5964C26.1899 35.6026 26.411 35.4055 27.0961 35.4055C27.77 35.4055 27.9915 35.6022 27.9915 36.5964C27.9915 37.5962 27.7705 37.7873 27.0961 37.7873Z' fill='white'/> <path d='M32.23 35.1222C31.8933 35.1222 31.4175 35.2805 31.0363 35.4281C30.9314 35.2263 30.7268 35.1222 30.4121 35.1222C30.0693 35.1222 29.5832 35.2967 29.2961 35.4008L29.2516 35.1768H29.0029V38.0174H29.3012V35.5702C29.5888 35.499 30.0032 35.4064 30.3456 35.4064C30.6879 35.4064 30.8204 35.554 30.8204 35.9035V38.0174H31.1187V35.8484C31.1187 35.7503 31.1075 35.6628 31.0911 35.5813C31.4339 35.499 31.8315 35.4064 32.1631 35.4064C32.5059 35.4064 32.6379 35.554 32.6379 35.9035V38.0174H32.9362V35.8484C32.9372 35.3675 32.7166 35.1222 32.23 35.1222Z' fill='white'/> <path d='M34.9663 35.1222C34.6296 35.1222 34.2479 35.2476 34.0325 35.3462L33.9716 35.1768H33.7562V39H34.0545V37.9021C34.1922 37.9674 34.513 38.072 34.8942 38.072C35.5353 38.072 35.9722 37.8804 35.9722 36.6681C35.9727 35.4383 35.7348 35.1222 34.9663 35.1222ZM34.867 37.7873C34.5406 37.7873 34.2091 37.7059 34.0545 37.6397V35.5096C34.2311 35.4605 34.6128 35.4059 34.8942 35.4059C35.5077 35.4059 35.6622 35.6573 35.6622 36.6677C35.6627 37.6943 35.37 37.7873 34.867 37.7873Z' fill='white'/> <path d='M37.6365 35.1222C37.2661 35.1222 36.9013 35.1713 36.7187 35.2037V35.4823C36.9013 35.4494 37.2605 35.4059 37.6248 35.4059C38.2603 35.4059 38.3268 35.5753 38.3268 35.8757V36.4487L37.3434 36.52C36.7908 36.5635 36.5421 36.7603 36.5421 37.3171C36.5421 37.8526 36.7355 38.0711 37.3546 38.0711C37.6586 38.0711 37.9625 37.9776 38.3381 37.841L38.3989 38.0165H38.6256V35.9026C38.6251 35.3189 38.4041 35.1222 37.6365 35.1222ZM38.3268 37.6725C37.9512 37.7489 37.6417 37.8035 37.3762 37.8035C36.9673 37.8035 36.8512 37.7105 36.8512 37.3175C36.8512 36.9514 36.9121 36.8042 37.3429 36.7714L38.3264 36.7001V37.6725H38.3268Z' fill='white'/> <path d='M40.8689 35.1222C40.5041 35.1222 40.018 35.2967 39.7304 35.4008L39.6864 35.1768H39.4377V38.0174H39.7361V35.5702C40.0231 35.499 40.438 35.4064 40.8029 35.4064C41.1677 35.4064 41.3002 35.554 41.3002 35.9035V38.0174H41.5985V35.8484C41.598 35.3675 41.3775 35.1222 40.8689 35.1222Z' fill='white'/> <path d='M43.3 37.6341L42.3667 35.1768H42.0515L43.1516 37.9567L42.731 39H43.035L44.5101 35.1768H44.201L43.3 37.6341Z' fill='white'/> <path d='M82.8419 15.0488C82.7338 14.5147 82.456 14.2319 81.8856 14.2194C79.0604 14.2731 78.5096 17.1645 78.5092 17.1678H80.0569L81.0956 22.8485L81.6262 25.7978L81.7676 26.5648H78.2305L77.6709 29.5118H82.3109H85.8035L82.8419 15.0488Z' fill='%23057DC9'/> <path d='M81.8866 14.2199C81.9129 14.2195 81.9386 14.219 81.9658 14.219H76.6749C76.0783 14.219 75.7912 14.5032 75.6802 15.0489L72.6072 29.5128H76.1668L77.0579 24.8166L77.0626 24.7926L77.4265 22.8495L78.498 17.229L78.5097 17.1688C78.5106 17.1651 79.0604 14.2731 81.8866 14.2199Z' fill='white'/> <path d='M64.8986 21.7784C64.8986 17.8889 65.3847 17.0373 67.9936 17.0373C69.1648 17.0373 70.359 17.1465 71.0221 17.2118V14.1967C70.315 14.1092 69.0323 14 67.7726 14C62.7327 14 61.2729 15.7478 61.2729 21.8219C61.2729 27.5248 62.5116 29.4035 66.3138 29.6873V29.7002V31.5665C68.0821 31.5665 68.3912 31.6317 68.3912 32.0034C68.3912 32.3316 68.1706 32.4403 67.087 32.4403C66.4679 32.4403 66.0923 32.3968 65.7162 32.3316V33.8609C66.2023 33.9483 66.9099 33.9918 67.5066 33.9918C69.894 33.9918 70.5351 33.3582 70.5351 31.9817C70.5351 30.955 70.0265 30.2992 68.1702 30.2992V29.7095C68.2718 29.7072 68.3729 29.7044 68.4746 29.7007H68.4778C69.5034 29.6636 70.5168 29.5442 71.2207 29.4253V26.4102C70.5351 26.5412 69.1644 26.6944 67.8826 26.6944C65.7162 26.6944 64.8986 25.864 64.8986 21.7784Z' fill='white'/> <path d='M56.1228 24.1163L53.9957 19.9941L51.0164 14.2185H47.4568V29.5128H50.7068V19.7682L55.8573 29.5128H59.3723V14.2185H56.1228V24.1163Z' fill='white'/> <path d='M41.3339 14.2185H36.043C36.0702 14.2185 36.0955 14.2208 36.1217 14.2213C35.5527 14.2338 35.2736 14.5157 35.1659 15.0493L32.2039 29.5128H35.6965H42.0907H45.4012L42.3282 15.0489C42.2176 14.5027 41.9301 14.2185 41.3339 14.2185ZM41.2824 26.5658L40.9504 24.8166L41.1344 25.7988L41.281 26.5658H36.2402L36.3816 25.7983L36.9127 22.849L37.9514 17.1683H39.4987L39.5127 17.2424L40.9457 24.7907L40.9509 24.8166L41.2824 26.5658Z' fill='white'/> <path d='M30.148 14.2185H26.6108V29.5128H30.148V14.2185Z' fill='white'/> <path d='M24.6211 26.5635H18.7185V14.219H15.1819V29.5128H24.6211V26.5635Z' fill='white'/> <path d='M13.2263 29.5128L10.1538 15.0489C10.0432 14.5027 9.7557 14.2185 9.15861 14.2185H3.86816C3.89486 14.2185 3.92108 14.2194 3.94731 14.2199C6.77259 14.2736 7.32332 17.1651 7.32379 17.1683L8.40698 22.849L8.77554 24.8166L9.66719 29.5128H13.2263Z' fill='white'/> <path d='M3.94736 14.22C3.37697 14.2325 3.09926 14.5148 2.99108 15.0494L0.0290527 29.5129H3.52167H8.16165L7.60202 26.5658H4.06538L4.20681 25.7984L4.7374 22.8491L5.7761 17.1684H7.32338C7.32338 17.1651 6.77265 14.2732 3.94736 14.22Z' fill='%23057DC9'/> </svg>")` | Short brand logo (without the brand name) in SVG format. Used in mc-top-bar component. |
| `mds_brand_appearance_static_logo-short_width` | `86px` | Width of the short brand logo. |
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
| `mds_brand_appearance_state_primary_default_hover_background-color` | `rgb(4,100,161)` | Primary default hover background color. Use it for primary elements that require a hover state. |
| `mds_brand_appearance_state_primary_default_hover_border-color` | `rgb(4,100,161)` | Primary default hover border color. Use it for primary elements that require a hover state. |
| `mds_brand_appearance_state_primary_default_active_background-color` | `rgb(3,75,121)` | Primary default active background color. Use it for primary elements that require an active state. |
| `mds_brand_appearance_state_primary_default_active_border-color` | `rgb(3,75,121)` | Primary default active border color. Use it for primary elements that require an active state. |
| `mds_brand_appearance_state_primary_weakest_opacity_hover_background-color` | `rgba(5,125,201,0.16)` | Primary weakest hover background color. Use it for primary elements that require a subtle hover effect. |
| `mds_brand_appearance_state_primary_weakest_opacity_active_background-color` | `rgba(5,125,201,0.28)` | Primary weakest active background color. Use it for primary elements that require a subtle active effect. |
| `mds_brand_appearance_state_secondary_default_hover_background-color` | `rgb(154,163,189)` | Secondary default hover background color. Use it for secondary elements that require a hover state. |
| `mds_brand_appearance_state_secondary_default_active_background-color` | `rgb(129,139,172)` | Secondary default active background color. Use it for secondary elements that require an active state. |
| `mds_brand_appearance_state_secondary_weakest_opacity_hover_background-color` | `rgba(28,47,106,0.28)` | Secondary weakest hover background color. Use it for secondary elements that require a subtle hover effect. |
| `mds_brand_appearance_state_secondary_weakest_opacity_active_background-color` | `rgba(28,47,106,0.56)` | Secondary weakest active background color. Use it for secondary elements that require a subtle active effect. |
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
| `mds_brand_appearance_state_focus_border-color` | `rgb(5,125,201)` | Focus border color. Use it to indicate focus state on elements. |
| `mds_brand_appearance_state_focus_default_shadow_offset-x` | `0px` | Focus shadow horizontal offset. Use it to position the shadow slightly to the right. |
| `mds_brand_appearance_state_focus_default_shadow_offset-y` | `0px` | Focus shadow vertical offset. Use it to position the shadow slightly below the element. |
| `mds_brand_appearance_state_focus_default_shadow_blur-radius` | `0px` | Focus shadow blur radius. Use it to create a soft shadow effect. |
| `mds_brand_appearance_state_focus_default_shadow_spread-radius` | `3px` | Focus shadow spread radius. Use it to slightly increase the size of the shadow. |
| `mds_brand_appearance_state_focus_default_shadow_color` | `rgb(3,63,101)` | Focus shadow color. Use it to create a strong focus effect. |
| `mds_brand_appearance_state_focus_vanity_shadow_offset-x` | `0px` | Focus vanity shadow horizontal offset. Use it to position the shadow slightly to the right. |
| `mds_brand_appearance_state_focus_vanity_shadow_offset-y` | `3px` | Focus vanity shadow vertical offset. Use it to position the shadow slightly below the element. |
| `mds_brand_appearance_state_focus_vanity_shadow_blur-radius` | `0px` | Focus vanity shadow blur radius. Use it to create a soft shadow effect. |
| `mds_brand_appearance_state_focus_vanity_shadow_spread-radius` | `0px` | Focus vanity shadow spread radius. Use it to slightly increase the size of the shadow. |
| `mds_brand_appearance_state_focus_vanity_shadow_color` | `rgb(3,63,101)` | Focus vanity shadow color. Use it to create a strong focus effect. |
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
| `mds_brand_appearance_primary_default_background-color` | `rgb(5,125,201)` | Primary default background color. |
| `mds_brand_appearance_primary_default_on-background-color` | `rgb(255,255,255)` | Primary default text color to be used on default background. |
| `mds_brand_appearance_primary_default_border-color` | `rgb(5,125,201)` | Primary default border color. |
| `mds_brand_appearance_primary_default_link-color` | `rgb(5,125,201)` | Primary default link color. |
| `mds_brand_appearance_primary_weak_background-color` | `rgb(218,236,247)` | Primary weak background color. |
| `mds_brand_appearance_primary_weak_on-background-color` | `rgb(20,20,20)` | Primary weak text color to be used on weak background. |
| `mds_brand_appearance_primary_weak_border-color` | `rgb(130,190,228)` | Primary weak border color. |
| `mds_brand_appearance_secondary_default_background-color` | `rgb(3,24,89)` | Secondary default background color. It's a brand color. Use it sparingly, only in cases where it is needed to highlight important information or actions. |
| `mds_brand_appearance_secondary_default_on-background-color` | `rgb(255,255,255)` | Secondary default text color to be used on default background. It's a brand color. Use it sparingly, only in cases where it is needed to highlight important information or actions. |
| `mds_brand_appearance_secondary_default_border-color` | `rgb(3,24,89)` | Secondary default border color. It's a brand color. Use it sparingly, only in cases where it is needed to highlight important information or actions. |
| `mds_brand_appearance_secondary_weak_background-color` | `rgb(217,220,230)` | Secondary weak background color. |
| `mds_brand_appearance_secondary_weak_on-background-color` | `rgb(20,20,20)` | Secondary weak text color to be used on weak background. |
| `mds_brand_appearance_secondary_weak_border-color` | `rgb(129,139,172)` | Secondary weak border color. |
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
| `mds_brand_appearance_static_dark` | `rgb(84,84,84)` | Dark static color. |
| `mds_brand_appearance_static_light` | `rgb(255,255,255)` | Light static color. |
| `mds_brand_appearance_static_brand` | `rgb(5,125,201)` | Brand static color. Use it to represent the brand identity consistently across UI. |
| `mds_brand_appearance_static_logo_url` | `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='86' height='48' viewBox='0 0 86 48' fill='none'> <path d='M1.8957 34.1937H1.09958C1.03917 34.1937 0.994681 34.2261 0.97829 34.2919L0 38.0169H0.320321L0.663121 36.6733H2.32654L2.67449 38.0169H3.0009L2.01746 34.2919C2.00013 34.2261 1.95658 34.1937 1.8957 34.1937ZM0.734771 36.3891L1.22649 34.4775H1.7627L2.25395 36.3891H0.734771Z' fill='%23031859'/> <path d='M6.95744 37.5962L5.55955 34.1937H5.17273V38.0169H5.46542V34.7126L6.76965 37.8587C6.79728 37.9295 6.83615 37.9517 6.88579 37.9517H7.02394C7.07358 37.9517 7.11245 37.9295 7.14008 37.8587L8.44431 34.707V38.0169H8.74262V34.1937H8.36704L6.95744 37.5962Z' fill='%23031859'/> <path d='M10.5449 35.1222C10.1744 35.1222 9.80963 35.1713 9.62746 35.2037V35.4823C9.80963 35.4494 10.1688 35.4059 10.5336 35.4059C11.1691 35.4059 11.2352 35.5753 11.2352 35.8757V36.4487L10.2517 36.52C9.69958 36.5635 9.45044 36.7603 9.45044 37.3171C9.45044 37.8526 9.64385 38.0711 10.2629 38.0711C10.5669 38.0711 10.8708 37.9776 11.2464 37.841L11.3073 38.0165H11.5339V35.9026C11.5339 35.3189 11.3129 35.1222 10.5449 35.1222ZM11.2356 37.6725C10.86 37.7489 10.5505 37.8035 10.285 37.8035C9.87613 37.8035 9.75999 37.7105 9.75999 37.3175C9.75999 36.9514 9.82087 36.8042 10.2517 36.7714L11.2352 36.7001V37.6725H11.2356Z' fill='%23031859'/> <path d='M13.3684 35.1217C12.6664 35.1217 12.2188 35.3235 12.2188 36.5144C12.2188 37.492 12.3738 38.071 13.4232 38.071C13.8049 38.071 14.1585 37.9998 14.3186 37.9396V37.661C14.1692 37.7156 13.8213 37.7864 13.4068 37.7864C12.6604 37.7864 12.5391 37.4258 12.5171 36.6718H14.4399V36.2951C14.4404 35.3022 14.0203 35.1217 13.3684 35.1217ZM14.1421 36.4163H12.5175C12.5227 35.4878 12.8327 35.4059 13.4129 35.4059C13.9046 35.4059 14.1421 35.5753 14.1421 36.1867V36.4163Z' fill='%23031859'/> <path d='M15.3531 35.1768H15.1049V38.0169H15.4032V35.4661H16.403V35.1222L15.3919 35.3078L15.3531 35.1768Z' fill='%23031859'/> <path d='M18.055 36.4654L17.5244 36.3284C17.2701 36.2631 17.1488 36.1807 17.1488 35.8535C17.1488 35.4767 17.3202 35.4054 17.7899 35.4054C18.0882 35.4054 18.3645 35.4383 18.5968 35.4878V35.2092C18.4146 35.1657 18.0718 35.1217 17.7899 35.1217C17.16 35.1217 16.8453 35.3129 16.8453 35.8535C16.8453 36.3233 17.0055 36.4922 17.4312 36.6019L18.0114 36.7496C18.2545 36.8098 18.3926 36.8972 18.3926 37.2902C18.3926 37.673 18.2268 37.7873 17.6906 37.7873C17.3151 37.7873 16.9943 37.6943 16.8397 37.6563V37.935C17.0111 37.9951 17.3427 38.0715 17.6742 38.0715C18.3598 38.0715 18.6966 37.8697 18.6966 37.2522C18.6961 36.651 18.3533 36.5418 18.055 36.4654Z' fill='%23031859'/> <path d='M21.2879 35.1768H20.9123L19.625 36.4654V34.1937H19.3262V38.0169H19.625V36.4983L20.984 38.0169H21.3652L19.9617 36.4766L21.2879 35.1768Z' fill='%23031859'/> <path d='M23.4712 36.0781C23.4712 34.5978 23.6866 34.434 24.6701 34.434C24.9464 34.434 25.2447 34.4613 25.4273 34.483V34.1933C25.2451 34.1715 24.9464 34.1387 24.6813 34.1387C23.5044 34.1387 23.1509 34.39 23.1509 36.0887C23.1509 37.9235 23.637 38.0716 24.6705 38.0716C24.9632 38.0716 25.2672 38.0276 25.4549 37.9948V37.7055C25.2564 37.7383 24.9576 37.7763 24.6977 37.7763C23.8969 37.7763 23.4712 37.7707 23.4712 36.0781Z' fill='%23031859'/> <path d='M27.0961 35.1222C26.2288 35.1222 25.8804 35.417 25.8804 36.5964C25.8804 37.7813 26.2288 38.0715 27.0961 38.0715C27.947 38.0715 28.301 37.7873 28.301 36.5964C28.301 35.4115 27.9475 35.1222 27.0961 35.1222ZM27.0961 37.7873C26.411 37.7873 26.1899 37.5962 26.1899 36.5964C26.1899 35.6026 26.411 35.4055 27.0961 35.4055C27.77 35.4055 27.9915 35.6022 27.9915 36.5964C27.9915 37.5962 27.7705 37.7873 27.0961 37.7873Z' fill='%23031859'/> <path d='M32.23 35.1222C31.8933 35.1222 31.4175 35.2805 31.0363 35.4281C30.9314 35.2263 30.7268 35.1222 30.4121 35.1222C30.0693 35.1222 29.5832 35.2967 29.2961 35.4008L29.2516 35.1768H29.0029V38.0174H29.3012V35.5702C29.5888 35.499 30.0032 35.4064 30.3456 35.4064C30.6879 35.4064 30.8204 35.554 30.8204 35.9035V38.0174H31.1187V35.8484C31.1187 35.7503 31.1075 35.6628 31.0911 35.5813C31.4339 35.499 31.8315 35.4064 32.1631 35.4064C32.5059 35.4064 32.6379 35.554 32.6379 35.9035V38.0174H32.9362V35.8484C32.9372 35.3675 32.7166 35.1222 32.23 35.1222Z' fill='%23031859'/> <path d='M34.9663 35.1222C34.6296 35.1222 34.2479 35.2476 34.0325 35.3462L33.9716 35.1768H33.7562V39H34.0545V37.9021C34.1922 37.9674 34.513 38.072 34.8942 38.072C35.5353 38.072 35.9722 37.8804 35.9722 36.6681C35.9727 35.4383 35.7348 35.1222 34.9663 35.1222ZM34.867 37.7873C34.5406 37.7873 34.2091 37.7059 34.0545 37.6397V35.5096C34.2311 35.4605 34.6128 35.4059 34.8942 35.4059C35.5077 35.4059 35.6622 35.6573 35.6622 36.6677C35.6627 37.6943 35.37 37.7873 34.867 37.7873Z' fill='%23031859'/> <path d='M37.6365 35.1222C37.2661 35.1222 36.9013 35.1713 36.7187 35.2037V35.4823C36.9013 35.4494 37.2605 35.4059 37.6248 35.4059C38.2603 35.4059 38.3268 35.5753 38.3268 35.8757V36.4487L37.3434 36.52C36.7908 36.5635 36.5421 36.7603 36.5421 37.3171C36.5421 37.8526 36.7355 38.0711 37.3546 38.0711C37.6586 38.0711 37.9625 37.9776 38.3381 37.841L38.3989 38.0165H38.6256V35.9026C38.6251 35.3189 38.4041 35.1222 37.6365 35.1222ZM38.3268 37.6725C37.9512 37.7489 37.6417 37.8035 37.3762 37.8035C36.9673 37.8035 36.8512 37.7105 36.8512 37.3175C36.8512 36.9514 36.9121 36.8042 37.3429 36.7714L38.3264 36.7001V37.6725H38.3268Z' fill='%23031859'/> <path d='M40.8689 35.1222C40.5041 35.1222 40.018 35.2967 39.7304 35.4008L39.6864 35.1768H39.4377V38.0174H39.7361V35.5702C40.0231 35.499 40.438 35.4064 40.8029 35.4064C41.1677 35.4064 41.3002 35.554 41.3002 35.9035V38.0174H41.5985V35.8484C41.598 35.3675 41.3775 35.1222 40.8689 35.1222Z' fill='%23031859'/> <path d='M43.3 37.6341L42.3667 35.1768H42.0515L43.1516 37.9567L42.731 39H43.035L44.5101 35.1768H44.201L43.3 37.6341Z' fill='%23031859'/> <path d='M82.8419 15.0488C82.7338 14.5147 82.456 14.2319 81.8856 14.2194C79.0604 14.2731 78.5096 17.1645 78.5092 17.1678H80.0569L81.0956 22.8485L81.6262 25.7978L81.7676 26.5648H78.2305L77.6709 29.5118H82.3109H85.8035L82.8419 15.0488Z' fill='%23057DC9'/> <path d='M81.8866 14.2199C81.9129 14.2195 81.9386 14.219 81.9658 14.219H76.6749C76.0783 14.219 75.7912 14.5032 75.6802 15.0489L72.6072 29.5128H76.1668L77.0579 24.8166L77.0626 24.7926L77.4265 22.8495L78.498 17.229L78.5097 17.1688C78.5106 17.1651 79.0604 14.2731 81.8866 14.2199Z' fill='%23031859'/> <path d='M64.8986 21.7784C64.8986 17.8889 65.3847 17.0373 67.9936 17.0373C69.1648 17.0373 70.359 17.1465 71.0221 17.2118V14.1967C70.315 14.1092 69.0323 14 67.7726 14C62.7327 14 61.2729 15.7478 61.2729 21.8219C61.2729 27.5248 62.5116 29.4035 66.3138 29.6873V29.7002V31.5665C68.0821 31.5665 68.3912 31.6317 68.3912 32.0034C68.3912 32.3316 68.1706 32.4403 67.087 32.4403C66.4679 32.4403 66.0923 32.3968 65.7162 32.3316V33.8609C66.2023 33.9483 66.9099 33.9918 67.5066 33.9918C69.894 33.9918 70.5351 33.3582 70.5351 31.9817C70.5351 30.955 70.0265 30.2992 68.1702 30.2992V29.7095C68.2718 29.7072 68.3729 29.7044 68.4746 29.7007H68.4778C69.5034 29.6636 70.5168 29.5442 71.2207 29.4253V26.4102C70.5351 26.5412 69.1644 26.6944 67.8826 26.6944C65.7162 26.6944 64.8986 25.864 64.8986 21.7784Z' fill='%23031859'/> <path d='M56.1228 24.1163L53.9957 19.9941L51.0164 14.2185H47.4568V29.5128H50.7068V19.7682L55.8573 29.5128H59.3723V14.2185H56.1228V24.1163Z' fill='%23031859'/> <path d='M41.3339 14.2185H36.043C36.0702 14.2185 36.0955 14.2208 36.1217 14.2213C35.5527 14.2338 35.2736 14.5157 35.1659 15.0493L32.2039 29.5128H35.6965H42.0907H45.4012L42.3282 15.0489C42.2176 14.5027 41.9301 14.2185 41.3339 14.2185ZM41.2824 26.5658L40.9504 24.8166L41.1344 25.7988L41.281 26.5658H36.2402L36.3816 25.7983L36.9127 22.849L37.9514 17.1683H39.4987L39.5127 17.2424L40.9457 24.7907L40.9509 24.8166L41.2824 26.5658Z' fill='%23031859'/> <path d='M30.148 14.2185H26.6108V29.5128H30.148V14.2185Z' fill='%23031859'/> <path d='M24.6211 26.5635H18.7185V14.219H15.1819V29.5128H24.6211V26.5635Z' fill='%23031859'/> <path d='M13.2263 29.5128L10.1538 15.0489C10.0432 14.5027 9.7557 14.2185 9.15861 14.2185H3.86816C3.89486 14.2185 3.92108 14.2194 3.94731 14.2199C6.77259 14.2736 7.32332 17.1651 7.32379 17.1683L8.40698 22.849L8.77554 24.8166L9.66719 29.5128H13.2263Z' fill='%23031859'/> <path d='M3.94736 14.22C3.37697 14.2325 3.09926 14.5148 2.99108 15.0494L0.0290527 29.5129H3.52167H8.16165L7.60202 26.5658H4.06538L4.20681 25.7984L4.7374 22.8491L5.7761 17.1684H7.32338C7.32338 17.1651 6.77265 14.2732 3.94736 14.22Z' fill='%23057DC9'/> </svg>")` | Full brand logo in SVG format. Used in mc-top-bar component. |
| `mds_brand_appearance_static_logo_width` | `86px` | Width of the full brand logo. |
| `mds_brand_appearance_static_logo-short_url` | `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='86' height='48' viewBox='0 0 86 48' fill='none'> <path d='M1.8957 34.1937H1.09958C1.03917 34.1937 0.994681 34.2261 0.97829 34.2919L0 38.0169H0.320321L0.663121 36.6733H2.32654L2.67449 38.0169H3.0009L2.01746 34.2919C2.00013 34.2261 1.95658 34.1937 1.8957 34.1937ZM0.734771 36.3891L1.22649 34.4775H1.7627L2.25395 36.3891H0.734771Z' fill='%23031859'/> <path d='M6.95744 37.5962L5.55955 34.1937H5.17273V38.0169H5.46542V34.7126L6.76965 37.8587C6.79728 37.9295 6.83615 37.9517 6.88579 37.9517H7.02394C7.07358 37.9517 7.11245 37.9295 7.14008 37.8587L8.44431 34.707V38.0169H8.74262V34.1937H8.36704L6.95744 37.5962Z' fill='%23031859'/> <path d='M10.5449 35.1222C10.1744 35.1222 9.80963 35.1713 9.62746 35.2037V35.4823C9.80963 35.4494 10.1688 35.4059 10.5336 35.4059C11.1691 35.4059 11.2352 35.5753 11.2352 35.8757V36.4487L10.2517 36.52C9.69958 36.5635 9.45044 36.7603 9.45044 37.3171C9.45044 37.8526 9.64385 38.0711 10.2629 38.0711C10.5669 38.0711 10.8708 37.9776 11.2464 37.841L11.3073 38.0165H11.5339V35.9026C11.5339 35.3189 11.3129 35.1222 10.5449 35.1222ZM11.2356 37.6725C10.86 37.7489 10.5505 37.8035 10.285 37.8035C9.87613 37.8035 9.75999 37.7105 9.75999 37.3175C9.75999 36.9514 9.82087 36.8042 10.2517 36.7714L11.2352 36.7001V37.6725H11.2356Z' fill='%23031859'/> <path d='M13.3684 35.1217C12.6664 35.1217 12.2188 35.3235 12.2188 36.5144C12.2188 37.492 12.3738 38.071 13.4232 38.071C13.8049 38.071 14.1585 37.9998 14.3186 37.9396V37.661C14.1692 37.7156 13.8213 37.7864 13.4068 37.7864C12.6604 37.7864 12.5391 37.4258 12.5171 36.6718H14.4399V36.2951C14.4404 35.3022 14.0203 35.1217 13.3684 35.1217ZM14.1421 36.4163H12.5175C12.5227 35.4878 12.8327 35.4059 13.4129 35.4059C13.9046 35.4059 14.1421 35.5753 14.1421 36.1867V36.4163Z' fill='%23031859'/> <path d='M15.3531 35.1768H15.1049V38.0169H15.4032V35.4661H16.403V35.1222L15.3919 35.3078L15.3531 35.1768Z' fill='%23031859'/> <path d='M18.055 36.4654L17.5244 36.3284C17.2701 36.2631 17.1488 36.1807 17.1488 35.8535C17.1488 35.4767 17.3202 35.4054 17.7899 35.4054C18.0882 35.4054 18.3645 35.4383 18.5968 35.4878V35.2092C18.4146 35.1657 18.0718 35.1217 17.7899 35.1217C17.16 35.1217 16.8453 35.3129 16.8453 35.8535C16.8453 36.3233 17.0055 36.4922 17.4312 36.6019L18.0114 36.7496C18.2545 36.8098 18.3926 36.8972 18.3926 37.2902C18.3926 37.673 18.2268 37.7873 17.6906 37.7873C17.3151 37.7873 16.9943 37.6943 16.8397 37.6563V37.935C17.0111 37.9951 17.3427 38.0715 17.6742 38.0715C18.3598 38.0715 18.6966 37.8697 18.6966 37.2522C18.6961 36.651 18.3533 36.5418 18.055 36.4654Z' fill='%23031859'/> <path d='M21.2879 35.1768H20.9123L19.625 36.4654V34.1937H19.3262V38.0169H19.625V36.4983L20.984 38.0169H21.3652L19.9617 36.4766L21.2879 35.1768Z' fill='%23031859'/> <path d='M23.4712 36.0781C23.4712 34.5978 23.6866 34.434 24.6701 34.434C24.9464 34.434 25.2447 34.4613 25.4273 34.483V34.1933C25.2451 34.1715 24.9464 34.1387 24.6813 34.1387C23.5044 34.1387 23.1509 34.39 23.1509 36.0887C23.1509 37.9235 23.637 38.0716 24.6705 38.0716C24.9632 38.0716 25.2672 38.0276 25.4549 37.9948V37.7055C25.2564 37.7383 24.9576 37.7763 24.6977 37.7763C23.8969 37.7763 23.4712 37.7707 23.4712 36.0781Z' fill='%23031859'/> <path d='M27.0961 35.1222C26.2288 35.1222 25.8804 35.417 25.8804 36.5964C25.8804 37.7813 26.2288 38.0715 27.0961 38.0715C27.947 38.0715 28.301 37.7873 28.301 36.5964C28.301 35.4115 27.9475 35.1222 27.0961 35.1222ZM27.0961 37.7873C26.411 37.7873 26.1899 37.5962 26.1899 36.5964C26.1899 35.6026 26.411 35.4055 27.0961 35.4055C27.77 35.4055 27.9915 35.6022 27.9915 36.5964C27.9915 37.5962 27.7705 37.7873 27.0961 37.7873Z' fill='%23031859'/> <path d='M32.23 35.1222C31.8933 35.1222 31.4175 35.2805 31.0363 35.4281C30.9314 35.2263 30.7268 35.1222 30.4121 35.1222C30.0693 35.1222 29.5832 35.2967 29.2961 35.4008L29.2516 35.1768H29.0029V38.0174H29.3012V35.5702C29.5888 35.499 30.0032 35.4064 30.3456 35.4064C30.6879 35.4064 30.8204 35.554 30.8204 35.9035V38.0174H31.1187V35.8484C31.1187 35.7503 31.1075 35.6628 31.0911 35.5813C31.4339 35.499 31.8315 35.4064 32.1631 35.4064C32.5059 35.4064 32.6379 35.554 32.6379 35.9035V38.0174H32.9362V35.8484C32.9372 35.3675 32.7166 35.1222 32.23 35.1222Z' fill='%23031859'/> <path d='M34.9663 35.1222C34.6296 35.1222 34.2479 35.2476 34.0325 35.3462L33.9716 35.1768H33.7562V39H34.0545V37.9021C34.1922 37.9674 34.513 38.072 34.8942 38.072C35.5353 38.072 35.9722 37.8804 35.9722 36.6681C35.9727 35.4383 35.7348 35.1222 34.9663 35.1222ZM34.867 37.7873C34.5406 37.7873 34.2091 37.7059 34.0545 37.6397V35.5096C34.2311 35.4605 34.6128 35.4059 34.8942 35.4059C35.5077 35.4059 35.6622 35.6573 35.6622 36.6677C35.6627 37.6943 35.37 37.7873 34.867 37.7873Z' fill='%23031859'/> <path d='M37.6365 35.1222C37.2661 35.1222 36.9013 35.1713 36.7187 35.2037V35.4823C36.9013 35.4494 37.2605 35.4059 37.6248 35.4059C38.2603 35.4059 38.3268 35.5753 38.3268 35.8757V36.4487L37.3434 36.52C36.7908 36.5635 36.5421 36.7603 36.5421 37.3171C36.5421 37.8526 36.7355 38.0711 37.3546 38.0711C37.6586 38.0711 37.9625 37.9776 38.3381 37.841L38.3989 38.0165H38.6256V35.9026C38.6251 35.3189 38.4041 35.1222 37.6365 35.1222ZM38.3268 37.6725C37.9512 37.7489 37.6417 37.8035 37.3762 37.8035C36.9673 37.8035 36.8512 37.7105 36.8512 37.3175C36.8512 36.9514 36.9121 36.8042 37.3429 36.7714L38.3264 36.7001V37.6725H38.3268Z' fill='%23031859'/> <path d='M40.8689 35.1222C40.5041 35.1222 40.018 35.2967 39.7304 35.4008L39.6864 35.1768H39.4377V38.0174H39.7361V35.5702C40.0231 35.499 40.438 35.4064 40.8029 35.4064C41.1677 35.4064 41.3002 35.554 41.3002 35.9035V38.0174H41.5985V35.8484C41.598 35.3675 41.3775 35.1222 40.8689 35.1222Z' fill='%23031859'/> <path d='M43.3 37.6341L42.3667 35.1768H42.0515L43.1516 37.9567L42.731 39H43.035L44.5101 35.1768H44.201L43.3 37.6341Z' fill='%23031859'/> <path d='M82.8419 15.0488C82.7338 14.5147 82.456 14.2319 81.8856 14.2194C79.0604 14.2731 78.5096 17.1645 78.5092 17.1678H80.0569L81.0956 22.8485L81.6262 25.7978L81.7676 26.5648H78.2305L77.6709 29.5118H82.3109H85.8035L82.8419 15.0488Z' fill='%23057DC9'/> <path d='M81.8866 14.2199C81.9129 14.2195 81.9386 14.219 81.9658 14.219H76.6749C76.0783 14.219 75.7912 14.5032 75.6802 15.0489L72.6072 29.5128H76.1668L77.0579 24.8166L77.0626 24.7926L77.4265 22.8495L78.498 17.229L78.5097 17.1688C78.5106 17.1651 79.0604 14.2731 81.8866 14.2199Z' fill='%23031859'/> <path d='M64.8986 21.7784C64.8986 17.8889 65.3847 17.0373 67.9936 17.0373C69.1648 17.0373 70.359 17.1465 71.0221 17.2118V14.1967C70.315 14.1092 69.0323 14 67.7726 14C62.7327 14 61.2729 15.7478 61.2729 21.8219C61.2729 27.5248 62.5116 29.4035 66.3138 29.6873V29.7002V31.5665C68.0821 31.5665 68.3912 31.6317 68.3912 32.0034C68.3912 32.3316 68.1706 32.4403 67.087 32.4403C66.4679 32.4403 66.0923 32.3968 65.7162 32.3316V33.8609C66.2023 33.9483 66.9099 33.9918 67.5066 33.9918C69.894 33.9918 70.5351 33.3582 70.5351 31.9817C70.5351 30.955 70.0265 30.2992 68.1702 30.2992V29.7095C68.2718 29.7072 68.3729 29.7044 68.4746 29.7007H68.4778C69.5034 29.6636 70.5168 29.5442 71.2207 29.4253V26.4102C70.5351 26.5412 69.1644 26.6944 67.8826 26.6944C65.7162 26.6944 64.8986 25.864 64.8986 21.7784Z' fill='%23031859'/> <path d='M56.1228 24.1163L53.9957 19.9941L51.0164 14.2185H47.4568V29.5128H50.7068V19.7682L55.8573 29.5128H59.3723V14.2185H56.1228V24.1163Z' fill='%23031859'/> <path d='M41.3339 14.2185H36.043C36.0702 14.2185 36.0955 14.2208 36.1217 14.2213C35.5527 14.2338 35.2736 14.5157 35.1659 15.0493L32.2039 29.5128H35.6965H42.0907H45.4012L42.3282 15.0489C42.2176 14.5027 41.9301 14.2185 41.3339 14.2185ZM41.2824 26.5658L40.9504 24.8166L41.1344 25.7988L41.281 26.5658H36.2402L36.3816 25.7983L36.9127 22.849L37.9514 17.1683H39.4987L39.5127 17.2424L40.9457 24.7907L40.9509 24.8166L41.2824 26.5658Z' fill='%23031859'/> <path d='M30.148 14.2185H26.6108V29.5128H30.148V14.2185Z' fill='%23031859'/> <path d='M24.6211 26.5635H18.7185V14.219H15.1819V29.5128H24.6211V26.5635Z' fill='%23031859'/> <path d='M13.2263 29.5128L10.1538 15.0489C10.0432 14.5027 9.7557 14.2185 9.15861 14.2185H3.86816C3.89486 14.2185 3.92108 14.2194 3.94731 14.2199C6.77259 14.2736 7.32332 17.1651 7.32379 17.1683L8.40698 22.849L8.77554 24.8166L9.66719 29.5128H13.2263Z' fill='%23031859'/> <path d='M3.94736 14.22C3.37697 14.2325 3.09926 14.5148 2.99108 15.0494L0.0290527 29.5129H3.52167H8.16165L7.60202 26.5658H4.06538L4.20681 25.7984L4.7374 22.8491L5.7761 17.1684H7.32338C7.32338 17.1651 6.77265 14.2732 3.94736 14.22Z' fill='%23057DC9'/> </svg>")` | Short brand logo (without the brand name) in SVG format. Used in mc-top-bar component. |
| `mds_brand_appearance_static_logo-short_width` | `86px` | Width of the short brand logo. |
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
| `mds_brand_appearance_state_primary_default_hover_background-color` | `rgb(4,100,161)` | Primary default hover background color. Use it for primary elements that require a hover state. |
| `mds_brand_appearance_state_primary_default_hover_border-color` | `rgb(4,100,161)` | Primary default hover border color. Use it for primary elements that require a hover state. |
| `mds_brand_appearance_state_primary_default_active_background-color` | `rgb(3,75,121)` | Primary default active background color. Use it for primary elements that require an active state. |
| `mds_brand_appearance_state_primary_default_active_border-color` | `rgb(3,75,121)` | Primary default active border color. Use it for primary elements that require an active state. |
| `mds_brand_appearance_state_primary_weakest_opacity_hover_background-color` | `rgba(5,125,201,0.12)` | Primary weakest hover background color. Use it for primary elements that require a subtle hover effect. |
| `mds_brand_appearance_state_primary_weakest_opacity_active_background-color` | `rgba(5,125,200,0.24)` | Primary weakest active background color. Use it for primary elements that require a subtle active effect. |
| `mds_brand_appearance_state_secondary_default_hover_background-color` | `rgb(2,13,49)` | Secondary default hover background color. Use it for secondary elements that require a hover state. |
| `mds_brand_appearance_state_secondary_default_active_background-color` | `rgb(1,7,27)` | Secondary default active background color. Use it for secondary elements that require an active state. |
| `mds_brand_appearance_state_secondary_weakest_opacity_hover_background-color` | `rgba(3,24,89,0.06)` | Secondary weakest hover background color. Use it for secondary elements that require a subtle hover effect. |
| `mds_brand_appearance_state_secondary_weakest_opacity_active_background-color` | `rgba(3,24,89,0.12)` | Secondary weakest active background color. Use it for secondary elements that require a subtle active effect. |
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
| `mds_brand_appearance_state_focus_border-color` | `rgb(5,125,201)` | Focus border color. Use it to indicate focus state on elements. |
| `mds_brand_appearance_state_focus_default_shadow_offset-x` | `0px` | Focus shadow horizontal offset. Use it to position the shadow slightly to the right. |
| `mds_brand_appearance_state_focus_default_shadow_offset-y` | `0px` | Focus shadow vertical offset. Use it to position the shadow slightly below the element. |
| `mds_brand_appearance_state_focus_default_shadow_blur-radius` | `0px` | Focus shadow blur radius. Use it to create a soft shadow effect. |
| `mds_brand_appearance_state_focus_default_shadow_spread-radius` | `3px` | Focus shadow spread radius. Use it to slightly increase the size of the shadow. |
| `mds_brand_appearance_state_focus_default_shadow_color` | `rgb(218,236,247)` | Focus shadow color. Use it to create a strong focus effect. |
| `mds_brand_appearance_state_focus_vanity_shadow_offset-x` | `0px` | Focus vanity shadow horizontal offset. Use it to position the shadow slightly to the right. |
| `mds_brand_appearance_state_focus_vanity_shadow_offset-y` | `3px` | Focus vanity shadow vertical offset. Use it to position the shadow slightly below the element. |
| `mds_brand_appearance_state_focus_vanity_shadow_blur-radius` | `0px` | Focus vanity shadow blur radius. Use it to create a soft shadow effect. |
| `mds_brand_appearance_state_focus_vanity_shadow_spread-radius` | `0px` | Focus vanity shadow spread radius. Use it to slightly increase the size of the shadow. |
| `mds_brand_appearance_state_focus_vanity_shadow_color` | `rgb(218,236,247)` | Focus vanity shadow color. Use it to create a strong focus effect. |
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
| `mds_brand_appearance_primary_default_text-color` | `rgb(5,125,201)` | Primary default text color. |
| `mds_brand_appearance_secondary_default_text-color` | `rgb(3,24,89)` | Secondary default text color. It's a brand color. Use it sparingly, only in cases where it is needed to highlight important information or actions. |
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

