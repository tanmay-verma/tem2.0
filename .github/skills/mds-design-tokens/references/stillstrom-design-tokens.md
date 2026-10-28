# STILLSTROM Brand Design Tokens

Complete list of MDS color, border and motion, gap, layout, and typography tokens for the stillstrom brand. Use as CSS custom properties: `var(--token_name)`.

> **Note:** Values shown are for the **light** & **dark** theme. Dark theme swaps many of these values automatically. See the [Light vs Dark differences](#light-vs-dark-theme-differences) section for details.

## Installation

```bash
npm install @maersk-global/mds-design-tokens 
```

## Imports

### DARK theme

```html
<link rel="stylesheet" href="./node_modules/@maersk-global/mds-design-tokens/stillstrom/dark/css/design-tokens-px.css" />
```

```css
@import url("@maersk-global/mds-design-tokens/stillstrom/dark/css/design-tokens-px.css");
```

```javascript
import "@maersk-global/mds-design-tokens/stillstrom/dark/css/design-tokens-px.css";
```

```css
@import url("@maersk-global/mds-design-tokens/stillstrom/dark/css/design-tokens-px.scss");
```

### LIGHT theme

```html
<link rel="stylesheet" href="./node_modules/@maersk-global/mds-design-tokens/stillstrom/light/css/design-tokens-px.css" />
```

```css
@import url("@maersk-global/mds-design-tokens/stillstrom/light/css/design-tokens-px.css");
```

```javascript
import "@maersk-global/mds-design-tokens/stillstrom/light/css/design-tokens-px.css";
```

```css
@import url("@maersk-global/mds-design-tokens/stillstrom/light/css/design-tokens-px.scss");
```

## Color Design Tokens Values

### Color Values for dark theme

Color palette, theme colors, and appearance tokens

| Token                       | Value   | Use for.    |
|-----------------------------|---------|-------------|
| `mds_brand_appearance_neutral_default_background-color` | `rgb(11,23,31)` | Neutral default background color. |
| `mds_brand_appearance_neutral_default_on-background-color` | `rgb(235,239,242)` | Neutral default text color to be used on default background. |
| `mds_brand_appearance_neutral_default_border-color` | `rgb(72,81,87)` | Neutral default border color. |
| `mds_brand_appearance_neutral_default_opacity_border-color` | `rgba(255,255,255,0.24)` | Neutral default border color with opacity. |
| `mds_brand_appearance_neutral_weakest_background-color` | `rgb(23,35,42)` | Neutral weakest background color. |
| `mds_brand_appearance_neutral_weakest_on-background-color` | `rgb(235,239,242)` | Neutral weakest text color to be used on weakest background. |
| `mds_brand_appearance_neutral_weak_background-color` | `rgb(48,58,65)` | Neutral weak background color. |
| `mds_brand_appearance_neutral_weak_on-background-color` | `rgb(235,239,242)` | Neutral weak text color to be used on weak background. |
| `mds_brand_appearance_neutral_weak_border-color` | `rgb(48,58,65)` | Neutral weak border color. |
| `mds_brand_appearance_neutral_weak_opacity_background-color` | `rgba(255,255,255,0.15)` | Neutral weak background color with opacity. |
| `mds_brand_appearance_neutral_strong_background-color` | `rgb(72,81,87)` | Neutral strong background color. |
| `mds_brand_appearance_neutral_strong_on-background-color` | `rgb(235,239,242)` | Neutral strong text color to be used on strong background. |
| `mds_brand_appearance_neutral_strongest_background-color` | `rgb(96,104,109)` | Neutral strongest background color. |
| `mds_brand_appearance_neutral_strongest_on-background-color` | `rgb(235,239,242)` | Neutral strongest text color to be used on strongest background. |
| `mds_brand_appearance_neutral_inverse_background-color` | `rgb(255,255,255)` | Neutral inverse background color. |
| `mds_brand_appearance_neutral_inverse_on-background-color` | `rgb(11,23,31)` | Neutral inverse text color to be used on inverse background. |
| `mds_brand_appearance_neutral_inverse_border-color` | `rgb(11,23,31)` | Neutral inverse border color. |
| `mds_brand_appearance_primary_default_background-color` | `rgb(0,255,51)` | Primary default background color. |
| `mds_brand_appearance_primary_default_on-background-color` | `rgb(11,23,31)` | Primary default text color to be used on default background. |
| `mds_brand_appearance_primary_default_border-color` | `rgb(0,255,51)` | Primary default border color. |
| `mds_brand_appearance_primary_default_link-color` | `rgb(157,162,165)` | Primary default link color. |
| `mds_brand_appearance_primary_weak_background-color` | `rgb(0,102,20)` | Primary weak background color. |
| `mds_brand_appearance_primary_weak_on-background-color` | `rgb(235,239,242)` | Primary weak text color to be used on weak background. |
| `mds_brand_appearance_primary_weak_border-color` | `rgb(0,102,20)` | Primary weak border color. |
| `mds_brand_appearance_secondary_default_background-color` | `rgb(255,255,255)` | Secondary default background color. It's a brand color. Use it sparingly, only in cases where it is needed to highlight important information or actions. |
| `mds_brand_appearance_secondary_default_on-background-color` | `rgb(11,23,31)` | Secondary default text color to be used on default background. It's a brand color. Use it sparingly, only in cases where it is needed to highlight important information or actions. |
| `mds_brand_appearance_secondary_default_border-color` | `rgb(255,255,255)` | Secondary default border color. It's a brand color. Use it sparingly, only in cases where it is needed to highlight important information or actions. |
| `mds_brand_appearance_secondary_weak_background-color` | `rgb(60,69,76)` | Secondary weak background color. |
| `mds_brand_appearance_secondary_weak_on-background-color` | `rgb(235,239,242)` | Secondary weak text color to be used on weak background. |
| `mds_brand_appearance_secondary_weak_border-color` | `rgb(48,58,65)` | Secondary weak border color. |
| `mds_brand_appearance_success_default_background-color` | `rgb(127,209,117)` | Success default background color. Use it to indicate successful actions or states. |
| `mds_brand_appearance_success_default_on-background-color` | `rgb(20,20,20)` | Success default text color to be used on default background. Use it to indicate successful actions or states. |
| `mds_brand_appearance_success_default_border-color` | `rgb(127,209,117)` | Success default border color. Use it to indicate successful actions or states. |
| `mds_brand_appearance_success_weak_background-color` | `rgb(18,51,17)` | Success weak background color. Use it to indicate successful actions or states in a less prominent way. |
| `mds_brand_appearance_success_weak_on-background-color` | `rgb(216,242,213)` | Success weak text color to be used on weak background. Use it to indicate successful actions or states in a less prominent way. |
| `mds_brand_appearance_success_weak_border-color` | `rgb(27,70,23)` | Success weak border color. Use it to indicate successful actions or states in a less prominent way. |
| `mds_brand_appearance_warning_default_background-color` | `rgb(242,205,89)` | Warning default background color. Use it to indicate warnings or important information that requires attention. |
| `mds_brand_appearance_warning_default_on-background-color` | `rgb(20,20,20)` | Warning default text color to be used on default background. Use it to indicate warnings or important information that requires attention. |
| `mds_brand_appearance_warning_default_border-color` | `rgb(242,205,89)` | Warning default border color. Use it to indicate warnings or important information that requires attention. |
| `mds_brand_appearance_warning_weak_background-color` | `rgb(63,51,16)` | Warning weak background color. Use it to indicate warnings or important information in a less prominent way. |
| `mds_brand_appearance_warning_weak_on-background-color` | `rgb(253,237,186)` | Warning weak text color to be used on weak background. Use it to indicate warnings or important information in a less prominent way. |
| `mds_brand_appearance_warning_weak_border-color` | `rgb(83,68,19)` | Warning weak border color. Use it to indicate warnings or important information in a less prominent way. |
| `mds_brand_appearance_error_default_background-color` | `rgb(255,162,166)` | Error default background color. Use it to indicate errors or critical issues that require immediate attention. |
| `mds_brand_appearance_error_default_on-background-color` | `rgb(20,20,20)` | Error default text color to be used on default background. Use it to indicate errors or critical issues that require immediate attention. |
| `mds_brand_appearance_error_default_border-color` | `rgb(255,162,166)` | Error default border color. Use it to indicate errors or critical issues that require immediate attention. |
| `mds_brand_appearance_error_weak_background-color` | `rgb(80,23,33)` | Error weak background color. Use it to indicate errors or critical issues in a less prominent way. |
| `mds_brand_appearance_error_weak_on-background-color` | `rgb(247,229,230)` | Error weak text color to be used on weak background. Use it to indicate errors or critical issues in a less prominent way. |
| `mds_brand_appearance_error_weak_border-color` | `rgb(104,28,37)` | Error weak border color. Use it to indicate errors or critical issues in a less prominent way. |
| `mds_brand_appearance_info_default_background-color` | `rgb(0,89,134)` | Info default background color. Use it to indicate informational messages or non-critical updates. |
| `mds_brand_appearance_info_default_on-background-color` | `rgb(255,255,255)` | Info default text color to be used on default background. Use it to indicate informational messages or non-critical updates. |
| `mds_brand_appearance_info_default_border-color` | `rgb(22,134,189)` | Info default border color. Use it to indicate informational messages or non-critical updates. |
| `mds_brand_appearance_info_weak_background-color` | `rgb(0,36,61)` | Info weak background color. Use it to indicate informational messages or non-critical updates in a less prominent way. |
| `mds_brand_appearance_info_weak_on-background-color` | `rgb(195,228,243)` | Info weak text color to be used on weak background. Use it to indicate informational messages or non-critical updates in a less prominent way. |
| `mds_brand_appearance_info_weak_border-color` | `rgb(0,62,98)` | Info weak border color. Use it to indicate informational messages or non-critical updates in a less prominent way. |
| `mds_brand_appearance_static_dark` | `rgb(11,23,31)` | Dark static color. |
| `mds_brand_appearance_static_light` | `rgb(255,255,255)` | Light static color. |
| `mds_brand_appearance_static_brand` | `rgb(0,255,51)` | Brand static color. Use it to represent the brand identity consistently across UI. |
| `mds_brand_appearance_static_logo_url` | `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='159' height='48' viewBox='0 0 159 48' fill='none'> <path d='M124.584 40.5249C124.584 42.2544 123.951 42.5747 123.096 42.5747C122.668 42.5747 122.195 42.3722 121.885 42.2152L121.79 42.4962H121.236V37.0205H121.916V38.7087C122.232 38.5537 122.722 38.3491 123.228 38.3491C124.21 38.3491 124.582 38.8822 124.582 40.5229M121.926 39.0847V41.8453C122.116 41.8928 122.511 41.9631 122.9 41.9631C123.548 41.9631 123.887 41.8226 123.887 40.5249C123.887 39.2273 123.683 38.9607 122.978 38.9607C122.575 38.9607 122.139 39.031 121.926 39.0868' fill='white'/> <path d='M129.016 38.4297L126.975 43.9033H126.287L126.88 42.4404L125.361 38.4297H126.074L127.212 41.7213L128.312 38.4297H129.016Z' fill='white'/> <path d='M132.498 37.0205H133.446L135.203 41.5333L136.967 37.0205H137.901V42.4962H137.228V38.0061L135.558 42.2606C135.511 42.3867 135.447 42.4156 135.36 42.4156H135.035C134.94 42.4156 134.876 42.3846 134.831 42.2606L133.161 38.0061V42.4962H132.496V37.0205H132.498Z' fill='white'/> <path d='M142.54 39.5559V42.4963H142.003L141.891 42.2215C141.463 42.393 141.021 42.5727 140.546 42.5727C139.715 42.5727 139.422 42.2215 139.422 41.4466C139.422 40.6263 139.786 40.3349 140.594 40.2812L141.868 40.1862V39.5766C141.868 39.1696 141.782 38.9505 140.959 38.9505C140.453 38.9505 139.947 39.0125 139.693 39.06V38.4649C139.994 38.4092 140.515 38.3472 141.038 38.3472C142.24 38.3472 142.54 38.6757 142.54 39.5518M140.744 42.019C141.094 42.019 141.472 41.9487 141.868 41.864V40.6821L140.705 40.7606C140.199 40.8081 140.112 40.9879 140.112 41.4177C140.112 41.895 140.255 42.021 140.744 42.021' fill='white'/> <path d='M147.224 40.6509H144.59C144.614 41.558 144.804 41.9733 145.736 41.9733C146.282 41.9733 146.819 41.8638 147.073 41.7852V42.3721C146.829 42.4651 146.29 42.5746 145.736 42.5746C144.232 42.5746 143.924 41.8245 143.924 40.3616C143.924 38.7643 144.486 38.3511 145.641 38.3511C146.796 38.3511 147.224 38.8594 147.224 40.0806V40.6509ZM146.561 39.8843C146.561 39.1714 146.315 38.9131 145.66 38.9131C144.939 38.9131 144.6 39.0701 144.592 40.1405H146.561V39.8822V39.8843Z' fill='white'/> <path d='M150.716 38.3511V39.1177H149.299V42.496H148.619V38.4296H149.156L149.276 38.7189L150.716 38.3511Z' fill='white'/> <path d='M151.665 42.3865V41.7997C151.902 41.8617 152.392 41.9795 152.898 41.9795C153.578 41.9795 153.768 41.8472 153.768 41.3927C153.768 40.9381 153.617 40.8368 153.276 40.7604L152.462 40.5723C151.909 40.4401 151.64 40.2045 151.64 39.4545C151.64 38.6486 152.076 38.3511 153.064 38.3511C153.491 38.3511 153.998 38.4213 154.266 38.4833V39.0701C153.933 38.9916 153.483 38.9441 153.072 38.9441C152.471 38.9441 152.297 39.0371 152.297 39.4689C152.297 39.845 152.44 39.938 152.764 40.0248L153.516 40.1963C153.991 40.3058 154.417 40.4773 154.417 41.3472C154.417 42.2708 153.95 42.5746 152.882 42.5746C152.384 42.5746 151.886 42.4651 151.665 42.3865Z' fill='white'/> <path d='M158.161 42.4962L156.446 40.3534V42.4962H155.764V37.0205H156.446V40.2976L158.082 38.4297H158.88L157.173 40.3142L158.983 42.4962H158.161Z' fill='white'/> <path d='M31.3156 30.8734V29.0778C32.2454 29.3196 33.8406 29.6481 35.4998 29.6481C37.8016 29.6481 38.6447 28.991 38.6447 26.9785C38.6447 25.2283 38.1364 24.7014 36.7189 24.375L34.5493 23.8274C32.1359 23.2364 31.2061 22.3831 31.2061 19.6039C31.2061 16.8247 32.4231 15.6428 36.0536 15.6428C37.4917 15.6428 39.0208 15.8825 39.7956 16.0581V17.8083C38.9546 17.6327 37.471 17.393 36.0763 17.393C33.9955 17.393 33.198 17.8538 33.198 19.5812C33.198 21.3086 33.8178 21.7053 35.3676 22.0979L37.2933 22.5794C39.6179 23.1496 40.6593 23.9803 40.6593 26.9124C40.6593 29.8444 39.308 31.4003 35.5659 31.4003C33.6629 31.4003 32.1338 31.0945 31.3156 30.8755' fill='white'/> <path d='M47.2322 17.5871H42.5397V15.8577H53.8981V17.5871H49.2262V31.1792H47.2322V17.5871Z' fill='white'/> <path d='M59.4504 15.8577H57.4585V31.1792H59.4504V15.8577Z' fill='white'/> <path d='M73.2655 29.4497V31.1792H64.5416V15.8577H66.5356V29.4497H73.2655Z' fill='white'/> <path d='M85.6838 29.4497V31.1792H76.96V15.8577H78.9539V29.4497H85.6838Z' fill='white'/> <path d='M88.3823 30.8734V29.0778C89.3122 29.3196 90.9053 29.6481 92.5666 29.6481C94.8684 29.6481 95.7115 28.991 95.7115 26.9785C95.7115 25.2283 95.2032 24.7014 93.7857 24.375L91.6161 23.8274C89.2027 23.2364 88.2728 22.3831 88.2728 19.6039C88.2728 16.8247 89.4899 15.6428 93.1203 15.6428C94.5605 15.6428 96.0875 15.8825 96.8624 16.0581V17.8083C96.0214 17.6327 94.5378 17.393 93.1431 17.393C91.0623 17.393 90.2647 17.8538 90.2647 19.5812C90.2647 21.3086 90.8846 21.7053 92.4343 22.0979L94.3601 22.5794C96.6847 23.1496 97.7261 23.9803 97.7261 26.9124C97.7261 29.8444 96.3747 31.4003 92.6327 31.4003C90.7296 31.4003 89.2006 31.0945 88.3823 30.8755' fill='white'/> <path d='M104.301 17.5871H99.6063V15.8577H110.965V17.5871H106.293V31.1792H104.301V17.5871Z' fill='white'/> <path d='M125.419 31.1792H123.16L119.309 25.2696H116.519V31.1792H114.527V15.8577H119.751C122.187 15.8577 124.489 16.3391 124.489 20.4758C124.489 22.9058 123.648 24.4369 121.344 24.9845L125.417 31.1792H125.419ZM119.397 23.5629C121.323 23.5629 122.454 23.1475 122.454 20.5213C122.454 17.7194 121.28 17.5665 119.288 17.5665H116.521V23.5649H119.4L119.397 23.5629Z' fill='white'/> <path d='M128.028 23.5194C128.028 17.2379 129.357 15.6406 133.829 15.6406C138.3 15.6406 139.629 17.2379 139.629 23.5194C139.629 29.8009 138.3 31.4002 133.829 31.4002C129.357 31.4002 128.028 29.803 128.028 23.5194ZM137.573 23.5194C137.573 18.2008 136.82 17.4135 133.831 17.4135C130.841 17.4135 130.089 18.1801 130.089 23.5194C130.089 28.8587 130.843 29.6273 133.831 29.6273C136.818 29.6273 137.573 28.7078 137.573 23.5194Z' fill='white'/> <path d='M143.879 15.8577H146.536L151.452 28.4868L156.388 15.8577H159V31.1792H157.12V18.6162L152.448 30.5221C152.315 30.8734 152.138 30.9602 151.894 30.9602H150.987C150.72 30.9602 150.543 30.8734 150.41 30.5221L145.738 18.6162V31.1792H143.879V15.8577Z' fill='white'/> <path d='M16.5996 26.3792C17.9736 21.9573 15.1842 17.0561 10.8677 15.8804V17.988C14.5519 19.3145 16.1884 24.315 13.8576 27.5942C11.1797 27.2016 11.0619 26.0816 8.47904 25.9866C5.97057 26.0796 5.75567 27.214 3.09429 27.5942C0.76352 24.3129 2.40209 19.3125 6.08628 17.988V15.8804C1.74294 17.0623 -1.04035 22.009 0.368858 26.4412C0.734592 27.6582 1.37721 28.7843 2.23059 29.7142C3.99313 29.553 5.50772 29.1232 6.76402 28.4661C7.39011 28.1624 7.76824 27.9764 8.47904 27.9764C9.23531 27.9764 9.61344 28.1645 10.2395 28.4723C11.4855 29.1335 12.9629 29.5509 14.7213 29.7121C15.5747 28.7802 16.2152 27.6541 16.583 26.4391C16.5892 26.4184 16.5934 26.3978 16.5996 26.3771' fill='%2300FF33'/> <path d='M9.47103 14H7.47913V21.482H9.47103V14Z' fill='%2300FF33'/> <path d='M10.0742 30.0819C7.60293 28.8173 6.56979 30.7741 3.67285 30.9724C6.43548 32.9499 10.4999 32.954 13.2666 30.9807C11.5062 30.7204 10.9111 30.4621 10.0742 30.0819Z' fill='%2300FF33'/> </svg>")` | Full brand logo in SVG format. Used in mc-top-bar component. |
| `mds_brand_appearance_static_logo_width` | `159px` | Width of the full brand logo. |
| `mds_brand_appearance_static_logo-short_url` | `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='159' height='48' viewBox='0 0 159 48' fill='none'> <path d='M124.584 40.5249C124.584 42.2544 123.951 42.5747 123.096 42.5747C122.668 42.5747 122.195 42.3722 121.885 42.2152L121.79 42.4962H121.236V37.0205H121.916V38.7087C122.232 38.5537 122.722 38.3491 123.228 38.3491C124.21 38.3491 124.582 38.8822 124.582 40.5229M121.926 39.0847V41.8453C122.116 41.8928 122.511 41.9631 122.9 41.9631C123.548 41.9631 123.887 41.8226 123.887 40.5249C123.887 39.2273 123.683 38.9607 122.978 38.9607C122.575 38.9607 122.139 39.031 121.926 39.0868' fill='white'/> <path d='M129.016 38.4297L126.975 43.9033H126.287L126.88 42.4404L125.361 38.4297H126.074L127.212 41.7213L128.312 38.4297H129.016Z' fill='white'/> <path d='M132.498 37.0205H133.446L135.203 41.5333L136.967 37.0205H137.901V42.4962H137.228V38.0061L135.558 42.2606C135.511 42.3867 135.447 42.4156 135.36 42.4156H135.035C134.94 42.4156 134.876 42.3846 134.831 42.2606L133.161 38.0061V42.4962H132.496V37.0205H132.498Z' fill='white'/> <path d='M142.54 39.5559V42.4963H142.003L141.891 42.2215C141.463 42.393 141.021 42.5727 140.546 42.5727C139.715 42.5727 139.422 42.2215 139.422 41.4466C139.422 40.6263 139.786 40.3349 140.594 40.2812L141.868 40.1862V39.5766C141.868 39.1696 141.782 38.9505 140.959 38.9505C140.453 38.9505 139.947 39.0125 139.693 39.06V38.4649C139.994 38.4092 140.515 38.3472 141.038 38.3472C142.24 38.3472 142.54 38.6757 142.54 39.5518M140.744 42.019C141.094 42.019 141.472 41.9487 141.868 41.864V40.6821L140.705 40.7606C140.199 40.8081 140.112 40.9879 140.112 41.4177C140.112 41.895 140.255 42.021 140.744 42.021' fill='white'/> <path d='M147.224 40.6509H144.59C144.614 41.558 144.804 41.9733 145.736 41.9733C146.282 41.9733 146.819 41.8638 147.073 41.7852V42.3721C146.829 42.4651 146.29 42.5746 145.736 42.5746C144.232 42.5746 143.924 41.8245 143.924 40.3616C143.924 38.7643 144.486 38.3511 145.641 38.3511C146.796 38.3511 147.224 38.8594 147.224 40.0806V40.6509ZM146.561 39.8843C146.561 39.1714 146.315 38.9131 145.66 38.9131C144.939 38.9131 144.6 39.0701 144.592 40.1405H146.561V39.8822V39.8843Z' fill='white'/> <path d='M150.716 38.3511V39.1177H149.299V42.496H148.619V38.4296H149.156L149.276 38.7189L150.716 38.3511Z' fill='white'/> <path d='M151.665 42.3865V41.7997C151.902 41.8617 152.392 41.9795 152.898 41.9795C153.578 41.9795 153.768 41.8472 153.768 41.3927C153.768 40.9381 153.617 40.8368 153.276 40.7604L152.462 40.5723C151.909 40.4401 151.64 40.2045 151.64 39.4545C151.64 38.6486 152.076 38.3511 153.064 38.3511C153.491 38.3511 153.998 38.4213 154.266 38.4833V39.0701C153.933 38.9916 153.483 38.9441 153.072 38.9441C152.471 38.9441 152.297 39.0371 152.297 39.4689C152.297 39.845 152.44 39.938 152.764 40.0248L153.516 40.1963C153.991 40.3058 154.417 40.4773 154.417 41.3472C154.417 42.2708 153.95 42.5746 152.882 42.5746C152.384 42.5746 151.886 42.4651 151.665 42.3865Z' fill='white'/> <path d='M158.161 42.4962L156.446 40.3534V42.4962H155.764V37.0205H156.446V40.2976L158.082 38.4297H158.88L157.173 40.3142L158.983 42.4962H158.161Z' fill='white'/> <path d='M31.3156 30.8734V29.0778C32.2454 29.3196 33.8406 29.6481 35.4998 29.6481C37.8016 29.6481 38.6447 28.991 38.6447 26.9785C38.6447 25.2283 38.1364 24.7014 36.7189 24.375L34.5493 23.8274C32.1359 23.2364 31.2061 22.3831 31.2061 19.6039C31.2061 16.8247 32.4231 15.6428 36.0536 15.6428C37.4917 15.6428 39.0208 15.8825 39.7956 16.0581V17.8083C38.9546 17.6327 37.471 17.393 36.0763 17.393C33.9955 17.393 33.198 17.8538 33.198 19.5812C33.198 21.3086 33.8178 21.7053 35.3676 22.0979L37.2933 22.5794C39.6179 23.1496 40.6593 23.9803 40.6593 26.9124C40.6593 29.8444 39.308 31.4003 35.5659 31.4003C33.6629 31.4003 32.1338 31.0945 31.3156 30.8755' fill='white'/> <path d='M47.2322 17.5871H42.5397V15.8577H53.8981V17.5871H49.2262V31.1792H47.2322V17.5871Z' fill='white'/> <path d='M59.4504 15.8577H57.4585V31.1792H59.4504V15.8577Z' fill='white'/> <path d='M73.2655 29.4497V31.1792H64.5416V15.8577H66.5356V29.4497H73.2655Z' fill='white'/> <path d='M85.6838 29.4497V31.1792H76.96V15.8577H78.9539V29.4497H85.6838Z' fill='white'/> <path d='M88.3823 30.8734V29.0778C89.3122 29.3196 90.9053 29.6481 92.5666 29.6481C94.8684 29.6481 95.7115 28.991 95.7115 26.9785C95.7115 25.2283 95.2032 24.7014 93.7857 24.375L91.6161 23.8274C89.2027 23.2364 88.2728 22.3831 88.2728 19.6039C88.2728 16.8247 89.4899 15.6428 93.1203 15.6428C94.5605 15.6428 96.0875 15.8825 96.8624 16.0581V17.8083C96.0214 17.6327 94.5378 17.393 93.1431 17.393C91.0623 17.393 90.2647 17.8538 90.2647 19.5812C90.2647 21.3086 90.8846 21.7053 92.4343 22.0979L94.3601 22.5794C96.6847 23.1496 97.7261 23.9803 97.7261 26.9124C97.7261 29.8444 96.3747 31.4003 92.6327 31.4003C90.7296 31.4003 89.2006 31.0945 88.3823 30.8755' fill='white'/> <path d='M104.301 17.5871H99.6063V15.8577H110.965V17.5871H106.293V31.1792H104.301V17.5871Z' fill='white'/> <path d='M125.419 31.1792H123.16L119.309 25.2696H116.519V31.1792H114.527V15.8577H119.751C122.187 15.8577 124.489 16.3391 124.489 20.4758C124.489 22.9058 123.648 24.4369 121.344 24.9845L125.417 31.1792H125.419ZM119.397 23.5629C121.323 23.5629 122.454 23.1475 122.454 20.5213C122.454 17.7194 121.28 17.5665 119.288 17.5665H116.521V23.5649H119.4L119.397 23.5629Z' fill='white'/> <path d='M128.028 23.5194C128.028 17.2379 129.357 15.6406 133.829 15.6406C138.3 15.6406 139.629 17.2379 139.629 23.5194C139.629 29.8009 138.3 31.4002 133.829 31.4002C129.357 31.4002 128.028 29.803 128.028 23.5194ZM137.573 23.5194C137.573 18.2008 136.82 17.4135 133.831 17.4135C130.841 17.4135 130.089 18.1801 130.089 23.5194C130.089 28.8587 130.843 29.6273 133.831 29.6273C136.818 29.6273 137.573 28.7078 137.573 23.5194Z' fill='white'/> <path d='M143.879 15.8577H146.536L151.452 28.4868L156.388 15.8577H159V31.1792H157.12V18.6162L152.448 30.5221C152.315 30.8734 152.138 30.9602 151.894 30.9602H150.987C150.72 30.9602 150.543 30.8734 150.41 30.5221L145.738 18.6162V31.1792H143.879V15.8577Z' fill='white'/> <path d='M16.5996 26.3792C17.9736 21.9573 15.1842 17.0561 10.8677 15.8804V17.988C14.5519 19.3145 16.1884 24.315 13.8576 27.5942C11.1797 27.2016 11.0619 26.0816 8.47904 25.9866C5.97057 26.0796 5.75567 27.214 3.09429 27.5942C0.76352 24.3129 2.40209 19.3125 6.08628 17.988V15.8804C1.74294 17.0623 -1.04035 22.009 0.368858 26.4412C0.734592 27.6582 1.37721 28.7843 2.23059 29.7142C3.99313 29.553 5.50772 29.1232 6.76402 28.4661C7.39011 28.1624 7.76824 27.9764 8.47904 27.9764C9.23531 27.9764 9.61344 28.1645 10.2395 28.4723C11.4855 29.1335 12.9629 29.5509 14.7213 29.7121C15.5747 28.7802 16.2152 27.6541 16.583 26.4391C16.5892 26.4184 16.5934 26.3978 16.5996 26.3771' fill='%2300FF33'/> <path d='M9.47103 14H7.47913V21.482H9.47103V14Z' fill='%2300FF33'/> <path d='M10.0742 30.0819C7.60293 28.8173 6.56979 30.7741 3.67285 30.9724C6.43548 32.9499 10.4999 32.954 13.2666 30.9807C11.5062 30.7204 10.9111 30.4621 10.0742 30.0819Z' fill='%2300FF33'/> </svg>")` | Short brand logo (without the brand name) in SVG format. Used in mc-top-bar component. |
| `mds_brand_appearance_static_logo-short_width` | `159px` | Width of the short brand logo. |
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
| `mds_brand_appearance_state_neutral_default_hover_background-color` | `rgb(35,46,53)` | Neutral default hover background color. Use it for neutral elements that require a hover state. |
| `mds_brand_appearance_state_neutral_default_hover_border-color` | `rgb(96,104,109)` | Neutral default hover border color. Use it for neutral elements that require a hover state. |
| `mds_brand_appearance_state_neutral_default_active_background-color` | `rgb(60,69,76)` | Neutral default active background color. Use it for neutral elements that require an active state. |
| `mds_brand_appearance_state_neutral_default_active_border-color` | `rgb(145,151,154)` | Neutral default active border color. Use it for neutral elements that require an active state. |
| `mds_brand_appearance_state_neutral_weakest_opacity_hover_background-color` | `rgba(255,255,255,0.14)` | Neutral weakest hover background color. Use it for neutral elements that require a subtle hover effect. |
| `mds_brand_appearance_state_neutral_weakest_opacity_active_background-color` | `rgba(255,255,255,0.24)` | Neutral weakest active background color. Use it for neutral elements that require a subtle active effect. |
| `mds_brand_appearance_state_neutral_weak_opacity_hover_background-color` | `rgba(255,255,255,0.24)` | Neutral weak hover background color. Use it for neutral elements that require a more pronounced hover effect. |
| `mds_brand_appearance_state_neutral_weak_opacity_active_background-color` | `rgba(255,255,255,0.32)` | Neutral weak active background color. Use it for neutral elements that require a more pronounced active effect. |
| `mds_brand_appearance_state_neutral_strongest_hover_background-color` | `rgb(133,139,143)` | Neutral strongest hover background color. Use it for neutral elements that require a strong hover effect. |
| `mds_brand_appearance_state_neutral_strongest_active_background-color` | `rgb(170,174,177)` | Neutral strongest active background color. Use it for neutral elements that require a strong active effect. |
| `mds_brand_appearance_state_neutral_inverse_opacity_hover_background-color` | `rgba(11,23,31,0.6)` | Neutral inverse hover background color. Use it for neutral elements that require a subtle hover effect on dark backgrounds. |
| `mds_brand_appearance_state_neutral_inverse_opacity_active_background-color` | `rgba(11,23,31,0.12)` | Neutral inverse active background color. Use it for neutral elements that require a subtle active effect on dark backgrounds. |
| `mds_brand_appearance_state_primary_default_hover_background-color` | `rgb(0,204,41)` | Primary default hover background color. Use it for primary elements that require a hover state. |
| `mds_brand_appearance_state_primary_default_hover_border-color` | `rgb(0,204,41)` | Primary default hover border color. Use it for primary elements that require a hover state. |
| `mds_brand_appearance_state_primary_default_active_background-color` | `rgb(0,153,31)` | Primary default active background color. Use it for primary elements that require an active state. |
| `mds_brand_appearance_state_primary_default_active_border-color` | `rgb(0,153,31)` | Primary default active border color. Use it for primary elements that require an active state. |
| `mds_brand_appearance_state_primary_weakest_opacity_hover_background-color` | `rgba(0,255,51,0.14)` | Primary weakest hover background color. Use it for primary elements that require a subtle hover effect. |
| `mds_brand_appearance_state_primary_weakest_opacity_active_background-color` | `rgba(0,255,51,0.24)` | Primary weakest active background color. Use it for primary elements that require a subtle active effect. |
| `mds_brand_appearance_state_secondary_default_hover_background-color` | `rgb(229,234,237)` | Secondary default hover background color. Use it for secondary elements that require a hover state. |
| `mds_brand_appearance_state_secondary_default_active_background-color` | `rgb(203,213,219)` | Secondary default active background color. Use it for secondary elements that require an active state. |
| `mds_brand_appearance_state_secondary_weakest_opacity_hover_background-color` | `rgba(255,255,255,0.16)` | Secondary weakest hover background color. Use it for secondary elements that require a subtle hover effect. |
| `mds_brand_appearance_state_secondary_weakest_opacity_active_background-color` | `rgba(255,255,255,0.28)` | Secondary weakest active background color. Use it for secondary elements that require a subtle active effect. |
| `mds_brand_appearance_state_success_default_hover_background-color` | `rgb(92,189,82)` | Success default hover background color. Use it for success elements that require a hover state. |
| `mds_brand_appearance_state_success_default_active_background-color` | `rgb(155,223,146)` | Success default active background color. Use it for success elements that require an active state. |
| `mds_brand_appearance_state_warning_default_hover_background-color` | `rgb(223,187,75)` | Warning default hover background color. Use it for warning elements that require a hover state. |
| `mds_brand_appearance_state_warning_default_active_background-color` | `rgb(251,216,107)` | Warning default active background color. Use it for warning elements that require an active state. |
| `mds_brand_appearance_state_error_default_hover_background-color` | `rgb(251,130,136)` | Error default hover background color. Use it for error elements that require a hover state. |
| `mds_brand_appearance_state_error_default_active_background-color` | `rgb(253,187,190)` | Error default active background color. Use it for error elements that require an active state. |
| `mds_brand_appearance_state_error_weakest_opacity_hover_background-color` | `rgba(139,39,48,0.16)` | Error weakest hover background color. Use it for error elements that require a subtle hover effect. |
| `mds_brand_appearance_state_error_weakest_opacity_active_background-color` | `rgba(139,39,48,0.4)` | Error weakest active background color. Use it for error elements that require a subtle active effect. |
| `mds_brand_appearance_state_info_default_hover_background-color` | `rgb(0,62,98)` | Info default hover background color. Use it for info elements that require a hover state. |
| `mds_brand_appearance_state_info_default_active_background-color` | `rgb(0,36,61)` | Info default active background color. Use it for info elements that require an active state. |
| `mds_brand_appearance_state_focus_border-color` | `rgb(0,255,51)` | Focus border color. Use it to indicate focus state on elements. |
| `mds_brand_appearance_state_focus_default_shadow_offset-x` | `0px` | Focus shadow horizontal offset. Use it to position the shadow slightly to the right. |
| `mds_brand_appearance_state_focus_default_shadow_offset-y` | `0px` | Focus shadow vertical offset. Use it to position the shadow slightly below the element. |
| `mds_brand_appearance_state_focus_default_shadow_blur-radius` | `0px` | Focus shadow blur radius. Use it to create a soft shadow effect. |
| `mds_brand_appearance_state_focus_default_shadow_spread-radius` | `3px` | Focus shadow spread radius. Use it to slightly increase the size of the shadow. |
| `mds_brand_appearance_state_focus_default_shadow_color` | `rgb(0,102,20)` | Focus shadow color. Use it to create a strong focus effect. |
| `mds_brand_appearance_state_focus_vanity_shadow_offset-x` | `0px` | Focus vanity shadow horizontal offset. Use it to position the shadow slightly to the right. |
| `mds_brand_appearance_state_focus_vanity_shadow_offset-y` | `3px` | Focus vanity shadow vertical offset. Use it to position the shadow slightly below the element. |
| `mds_brand_appearance_state_focus_vanity_shadow_blur-radius` | `0px` | Focus vanity shadow blur radius. Use it to create a soft shadow effect. |
| `mds_brand_appearance_state_focus_vanity_shadow_spread-radius` | `0px` | Focus vanity shadow spread radius. Use it to slightly increase the size of the shadow. |
| `mds_brand_appearance_state_focus_vanity_shadow_color` | `rgb(0,102,20)` | Focus vanity shadow color. Use it to create a strong focus effect. |
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
| `mds_brand_appearance_neutral_default_on-background-color` | `rgb(11,23,31)` | Neutral default text color to be used on default background. |
| `mds_brand_appearance_neutral_default_border-color` | `rgb(203,213,219)` | Neutral default border color. |
| `mds_brand_appearance_neutral_default_opacity_border-color` | `rgba(124,149,165,0.4)` | Neutral default border color with opacity. |
| `mds_brand_appearance_neutral_weakest_background-color` | `rgb(248,250,250)` | Neutral weakest background color. |
| `mds_brand_appearance_neutral_weakest_on-background-color` | `rgb(11,23,31)` | Neutral weakest text color to be used on weakest background. |
| `mds_brand_appearance_neutral_weak_background-color` | `rgb(235,239,242)` | Neutral weak background color. |
| `mds_brand_appearance_neutral_weak_on-background-color` | `rgb(11,23,31)` | Neutral weak text color to be used on weak background. |
| `mds_brand_appearance_neutral_weak_border-color` | `rgb(222,229,233)` | Neutral weak border color. |
| `mds_brand_appearance_neutral_weak_opacity_background-color` | `rgba(124,149,165,0.15)` | Neutral weak background color with opacity. |
| `mds_brand_appearance_neutral_strong_background-color` | `rgb(222,229,233)` | Neutral strong background color. |
| `mds_brand_appearance_neutral_strong_on-background-color` | `rgb(11,23,31)` | Neutral strong text color to be used on strong background. |
| `mds_brand_appearance_neutral_strongest_background-color` | `rgb(170,186,197)` | Neutral strongest background color. |
| `mds_brand_appearance_neutral_strongest_on-background-color` | `rgb(11,23,31)` | Neutral strongest text color to be used on strongest background. |
| `mds_brand_appearance_neutral_inverse_background-color` | `rgb(11,23,31)` | Neutral inverse background color. |
| `mds_brand_appearance_neutral_inverse_on-background-color` | `rgb(255,255,255)` | Neutral inverse text color to be used on inverse background. |
| `mds_brand_appearance_neutral_inverse_border-color` | `rgb(255,255,255)` | Neutral inverse border color. |
| `mds_brand_appearance_primary_default_background-color` | `rgb(0,255,51)` | Primary default background color. |
| `mds_brand_appearance_primary_default_on-background-color` | `rgb(11,23,31)` | Primary default text color to be used on default background. |
| `mds_brand_appearance_primary_default_border-color` | `rgb(0,255,51)` | Primary default border color. |
| `mds_brand_appearance_primary_default_link-color` | `rgb(124,149,165)` | Primary default link color. |
| `mds_brand_appearance_primary_weak_background-color` | `rgb(204,255,214)` | Primary weak background color. |
| `mds_brand_appearance_primary_weak_on-background-color` | `rgb(11,23,31)` | Primary weak text color to be used on weak background. |
| `mds_brand_appearance_primary_weak_border-color` | `rgb(128,255,153)` | Primary weak border color. |
| `mds_brand_appearance_secondary_default_background-color` | `rgb(124,149,165)` | Secondary default background color. It's a brand color. Use it sparingly, only in cases where it is needed to highlight important information or actions. |
| `mds_brand_appearance_secondary_default_on-background-color` | `rgb(255,255,255)` | Secondary default text color to be used on default background. It's a brand color. Use it sparingly, only in cases where it is needed to highlight important information or actions. |
| `mds_brand_appearance_secondary_default_border-color` | `rgb(124,149,165)` | Secondary default border color. It's a brand color. Use it sparingly, only in cases where it is needed to highlight important information or actions. |
| `mds_brand_appearance_secondary_weak_background-color` | `rgb(222,229,233)` | Secondary weak background color. |
| `mds_brand_appearance_secondary_weak_on-background-color` | `rgb(11,23,31)` | Secondary weak text color to be used on weak background. |
| `mds_brand_appearance_secondary_weak_border-color` | `rgb(189,202,210)` | Secondary weak border color. |
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
| `mds_brand_appearance_static_dark` | `rgb(11,23,31)` | Dark static color. |
| `mds_brand_appearance_static_light` | `rgb(255,255,255)` | Light static color. |
| `mds_brand_appearance_static_brand` | `rgb(0,255,51)` | Brand static color. Use it to represent the brand identity consistently across UI. |
| `mds_brand_appearance_static_logo_url` | `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='159' height='48' viewBox='0 0 159 48' fill='none'> <path d='M124.584 40.5249C124.584 42.2544 123.951 42.5747 123.096 42.5747C122.668 42.5747 122.195 42.3722 121.885 42.2152L121.79 42.4962H121.236V37.0205H121.916V38.7087C122.232 38.5537 122.722 38.3491 123.228 38.3491C124.21 38.3491 124.582 38.8822 124.582 40.5229M121.926 39.0847V41.8453C122.116 41.8928 122.511 41.9631 122.9 41.9631C123.548 41.9631 123.887 41.8226 123.887 40.5249C123.887 39.2273 123.683 38.9607 122.978 38.9607C122.575 38.9607 122.139 39.031 121.926 39.0868' fill='%230B171F'/> <path d='M129.016 38.4297L126.975 43.9033H126.287L126.88 42.4404L125.361 38.4297H126.074L127.212 41.7213L128.312 38.4297H129.016Z' fill='%230B171F'/> <path d='M132.498 37.0205H133.446L135.203 41.5333L136.967 37.0205H137.901V42.4962H137.228V38.0061L135.558 42.2606C135.511 42.3867 135.447 42.4156 135.36 42.4156H135.035C134.94 42.4156 134.876 42.3846 134.831 42.2606L133.161 38.0061V42.4962H132.496V37.0205H132.498Z' fill='%230B171F'/> <path d='M142.54 39.5559V42.4963H142.003L141.891 42.2215C141.463 42.393 141.021 42.5727 140.546 42.5727C139.715 42.5727 139.422 42.2215 139.422 41.4466C139.422 40.6263 139.786 40.3349 140.594 40.2812L141.868 40.1862V39.5766C141.868 39.1696 141.782 38.9505 140.959 38.9505C140.453 38.9505 139.947 39.0125 139.693 39.06V38.4649C139.994 38.4092 140.515 38.3472 141.038 38.3472C142.24 38.3472 142.54 38.6757 142.54 39.5518M140.744 42.019C141.094 42.019 141.472 41.9487 141.868 41.864V40.6821L140.705 40.7606C140.199 40.8081 140.112 40.9879 140.112 41.4177C140.112 41.895 140.255 42.021 140.744 42.021' fill='%230B171F'/> <path d='M147.224 40.6509H144.59C144.614 41.558 144.804 41.9733 145.736 41.9733C146.282 41.9733 146.819 41.8638 147.073 41.7852V42.3721C146.829 42.4651 146.29 42.5746 145.736 42.5746C144.232 42.5746 143.924 41.8245 143.924 40.3616C143.924 38.7643 144.486 38.3511 145.641 38.3511C146.796 38.3511 147.224 38.8594 147.224 40.0806V40.6509ZM146.561 39.8843C146.561 39.1714 146.315 38.9131 145.66 38.9131C144.939 38.9131 144.6 39.0701 144.592 40.1405H146.561V39.8822V39.8843Z' fill='%230B171F'/> <path d='M150.716 38.3511V39.1177H149.299V42.496H148.619V38.4296H149.156L149.276 38.7189L150.716 38.3511Z' fill='%230B171F'/> <path d='M151.665 42.3865V41.7997C151.902 41.8617 152.392 41.9795 152.898 41.9795C153.578 41.9795 153.768 41.8472 153.768 41.3927C153.768 40.9381 153.617 40.8368 153.276 40.7604L152.462 40.5723C151.909 40.4401 151.64 40.2045 151.64 39.4545C151.64 38.6486 152.076 38.3511 153.064 38.3511C153.491 38.3511 153.998 38.4213 154.266 38.4833V39.0701C153.933 38.9916 153.483 38.9441 153.072 38.9441C152.471 38.9441 152.297 39.0371 152.297 39.4689C152.297 39.845 152.44 39.938 152.764 40.0248L153.516 40.1963C153.991 40.3058 154.417 40.4773 154.417 41.3472C154.417 42.2708 153.95 42.5746 152.882 42.5746C152.384 42.5746 151.886 42.4651 151.665 42.3865Z' fill='%230B171F'/> <path d='M158.161 42.4962L156.446 40.3534V42.4962H155.764V37.0205H156.446V40.2976L158.082 38.4297H158.88L157.173 40.3142L158.983 42.4962H158.161Z' fill='%230B171F'/> <path d='M31.3156 30.8734V29.0778C32.2454 29.3196 33.8406 29.6481 35.4998 29.6481C37.8016 29.6481 38.6447 28.991 38.6447 26.9785C38.6447 25.2283 38.1364 24.7014 36.7189 24.375L34.5493 23.8274C32.1359 23.2364 31.2061 22.3831 31.2061 19.6039C31.2061 16.8247 32.4231 15.6428 36.0536 15.6428C37.4917 15.6428 39.0208 15.8825 39.7956 16.0581V17.8083C38.9546 17.6327 37.471 17.393 36.0763 17.393C33.9955 17.393 33.198 17.8538 33.198 19.5812C33.198 21.3086 33.8178 21.7053 35.3676 22.0979L37.2933 22.5794C39.6179 23.1496 40.6593 23.9803 40.6593 26.9124C40.6593 29.8444 39.308 31.4003 35.5659 31.4003C33.6629 31.4003 32.1338 31.0945 31.3156 30.8755' fill='%230B171F'/> <path d='M47.2322 17.5871H42.5397V15.8577H53.8981V17.5871H49.2262V31.1792H47.2322V17.5871Z' fill='%230B171F'/> <path d='M59.4504 15.8577H57.4585V31.1792H59.4504V15.8577Z' fill='%230B171F'/> <path d='M73.2655 29.4497V31.1792H64.5416V15.8577H66.5356V29.4497H73.2655Z' fill='%230B171F'/> <path d='M85.6838 29.4497V31.1792H76.96V15.8577H78.9539V29.4497H85.6838Z' fill='%230B171F'/> <path d='M88.3823 30.8734V29.0778C89.3122 29.3196 90.9053 29.6481 92.5666 29.6481C94.8684 29.6481 95.7115 28.991 95.7115 26.9785C95.7115 25.2283 95.2032 24.7014 93.7857 24.375L91.6161 23.8274C89.2027 23.2364 88.2728 22.3831 88.2728 19.6039C88.2728 16.8247 89.4899 15.6428 93.1203 15.6428C94.5605 15.6428 96.0875 15.8825 96.8624 16.0581V17.8083C96.0214 17.6327 94.5378 17.393 93.1431 17.393C91.0623 17.393 90.2647 17.8538 90.2647 19.5812C90.2647 21.3086 90.8846 21.7053 92.4343 22.0979L94.3601 22.5794C96.6847 23.1496 97.7261 23.9803 97.7261 26.9124C97.7261 29.8444 96.3747 31.4003 92.6327 31.4003C90.7296 31.4003 89.2006 31.0945 88.3823 30.8755' fill='%230B171F'/> <path d='M104.301 17.5871H99.6063V15.8577H110.965V17.5871H106.293V31.1792H104.301V17.5871Z' fill='%230B171F'/> <path d='M125.419 31.1792H123.16L119.309 25.2696H116.519V31.1792H114.527V15.8577H119.751C122.187 15.8577 124.489 16.3391 124.489 20.4758C124.489 22.9058 123.648 24.4369 121.344 24.9845L125.417 31.1792H125.419ZM119.397 23.5629C121.323 23.5629 122.454 23.1475 122.454 20.5213C122.454 17.7194 121.28 17.5665 119.288 17.5665H116.521V23.5649H119.4L119.397 23.5629Z' fill='%230B171F'/> <path d='M128.028 23.5194C128.028 17.2379 129.357 15.6406 133.829 15.6406C138.3 15.6406 139.629 17.2379 139.629 23.5194C139.629 29.8009 138.3 31.4002 133.829 31.4002C129.357 31.4002 128.028 29.803 128.028 23.5194ZM137.573 23.5194C137.573 18.2008 136.82 17.4135 133.831 17.4135C130.841 17.4135 130.089 18.1801 130.089 23.5194C130.089 28.8587 130.843 29.6273 133.831 29.6273C136.818 29.6273 137.573 28.7078 137.573 23.5194Z' fill='%230B171F'/> <path d='M143.879 15.8577H146.536L151.452 28.4868L156.388 15.8577H159V31.1792H157.12V18.6162L152.448 30.5221C152.315 30.8734 152.138 30.9602 151.894 30.9602H150.987C150.72 30.9602 150.543 30.8734 150.41 30.5221L145.738 18.6162V31.1792H143.879V15.8577Z' fill='%230B171F'/> <path d='M16.5996 26.3792C17.9736 21.9573 15.1842 17.0561 10.8677 15.8804V17.988C14.5519 19.3145 16.1884 24.315 13.8576 27.5942C11.1797 27.2016 11.0619 26.0816 8.47904 25.9866C5.97057 26.0796 5.75567 27.214 3.09429 27.5942C0.76352 24.3129 2.40209 19.3125 6.08628 17.988V15.8804C1.74294 17.0623 -1.04035 22.009 0.368858 26.4412C0.734592 27.6582 1.37721 28.7843 2.23059 29.7142C3.99313 29.553 5.50772 29.1232 6.76402 28.4661C7.39011 28.1624 7.76824 27.9764 8.47904 27.9764C9.23531 27.9764 9.61344 28.1645 10.2395 28.4723C11.4855 29.1335 12.9629 29.5509 14.7213 29.7121C15.5747 28.7802 16.2152 27.6541 16.583 26.4391C16.5892 26.4184 16.5934 26.3978 16.5996 26.3771' fill='%2300FF33'/> <path d='M9.47103 14H7.47913V21.482H9.47103V14Z' fill='%2300FF33'/> <path d='M10.0742 30.0819C7.60293 28.8173 6.56979 30.7741 3.67285 30.9724C6.43548 32.9499 10.4999 32.954 13.2666 30.9807C11.5062 30.7204 10.9111 30.4621 10.0742 30.0819Z' fill='%2300FF33'/> </svg>")` | Full brand logo in SVG format. Used in mc-top-bar component. |
| `mds_brand_appearance_static_logo_width` | `159px` | Width of the full brand logo. |
| `mds_brand_appearance_static_logo-short_url` | `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='159' height='48' viewBox='0 0 159 48' fill='none'> <path d='M124.584 40.5249C124.584 42.2544 123.951 42.5747 123.096 42.5747C122.668 42.5747 122.195 42.3722 121.885 42.2152L121.79 42.4962H121.236V37.0205H121.916V38.7087C122.232 38.5537 122.722 38.3491 123.228 38.3491C124.21 38.3491 124.582 38.8822 124.582 40.5229M121.926 39.0847V41.8453C122.116 41.8928 122.511 41.9631 122.9 41.9631C123.548 41.9631 123.887 41.8226 123.887 40.5249C123.887 39.2273 123.683 38.9607 122.978 38.9607C122.575 38.9607 122.139 39.031 121.926 39.0868' fill='%230B171F'/> <path d='M129.016 38.4297L126.975 43.9033H126.287L126.88 42.4404L125.361 38.4297H126.074L127.212 41.7213L128.312 38.4297H129.016Z' fill='%230B171F'/> <path d='M132.498 37.0205H133.446L135.203 41.5333L136.967 37.0205H137.901V42.4962H137.228V38.0061L135.558 42.2606C135.511 42.3867 135.447 42.4156 135.36 42.4156H135.035C134.94 42.4156 134.876 42.3846 134.831 42.2606L133.161 38.0061V42.4962H132.496V37.0205H132.498Z' fill='%230B171F'/> <path d='M142.54 39.5559V42.4963H142.003L141.891 42.2215C141.463 42.393 141.021 42.5727 140.546 42.5727C139.715 42.5727 139.422 42.2215 139.422 41.4466C139.422 40.6263 139.786 40.3349 140.594 40.2812L141.868 40.1862V39.5766C141.868 39.1696 141.782 38.9505 140.959 38.9505C140.453 38.9505 139.947 39.0125 139.693 39.06V38.4649C139.994 38.4092 140.515 38.3472 141.038 38.3472C142.24 38.3472 142.54 38.6757 142.54 39.5518M140.744 42.019C141.094 42.019 141.472 41.9487 141.868 41.864V40.6821L140.705 40.7606C140.199 40.8081 140.112 40.9879 140.112 41.4177C140.112 41.895 140.255 42.021 140.744 42.021' fill='%230B171F'/> <path d='M147.224 40.6509H144.59C144.614 41.558 144.804 41.9733 145.736 41.9733C146.282 41.9733 146.819 41.8638 147.073 41.7852V42.3721C146.829 42.4651 146.29 42.5746 145.736 42.5746C144.232 42.5746 143.924 41.8245 143.924 40.3616C143.924 38.7643 144.486 38.3511 145.641 38.3511C146.796 38.3511 147.224 38.8594 147.224 40.0806V40.6509ZM146.561 39.8843C146.561 39.1714 146.315 38.9131 145.66 38.9131C144.939 38.9131 144.6 39.0701 144.592 40.1405H146.561V39.8822V39.8843Z' fill='%230B171F'/> <path d='M150.716 38.3511V39.1177H149.299V42.496H148.619V38.4296H149.156L149.276 38.7189L150.716 38.3511Z' fill='%230B171F'/> <path d='M151.665 42.3865V41.7997C151.902 41.8617 152.392 41.9795 152.898 41.9795C153.578 41.9795 153.768 41.8472 153.768 41.3927C153.768 40.9381 153.617 40.8368 153.276 40.7604L152.462 40.5723C151.909 40.4401 151.64 40.2045 151.64 39.4545C151.64 38.6486 152.076 38.3511 153.064 38.3511C153.491 38.3511 153.998 38.4213 154.266 38.4833V39.0701C153.933 38.9916 153.483 38.9441 153.072 38.9441C152.471 38.9441 152.297 39.0371 152.297 39.4689C152.297 39.845 152.44 39.938 152.764 40.0248L153.516 40.1963C153.991 40.3058 154.417 40.4773 154.417 41.3472C154.417 42.2708 153.95 42.5746 152.882 42.5746C152.384 42.5746 151.886 42.4651 151.665 42.3865Z' fill='%230B171F'/> <path d='M158.161 42.4962L156.446 40.3534V42.4962H155.764V37.0205H156.446V40.2976L158.082 38.4297H158.88L157.173 40.3142L158.983 42.4962H158.161Z' fill='%230B171F'/> <path d='M31.3156 30.8734V29.0778C32.2454 29.3196 33.8406 29.6481 35.4998 29.6481C37.8016 29.6481 38.6447 28.991 38.6447 26.9785C38.6447 25.2283 38.1364 24.7014 36.7189 24.375L34.5493 23.8274C32.1359 23.2364 31.2061 22.3831 31.2061 19.6039C31.2061 16.8247 32.4231 15.6428 36.0536 15.6428C37.4917 15.6428 39.0208 15.8825 39.7956 16.0581V17.8083C38.9546 17.6327 37.471 17.393 36.0763 17.393C33.9955 17.393 33.198 17.8538 33.198 19.5812C33.198 21.3086 33.8178 21.7053 35.3676 22.0979L37.2933 22.5794C39.6179 23.1496 40.6593 23.9803 40.6593 26.9124C40.6593 29.8444 39.308 31.4003 35.5659 31.4003C33.6629 31.4003 32.1338 31.0945 31.3156 30.8755' fill='%230B171F'/> <path d='M47.2322 17.5871H42.5397V15.8577H53.8981V17.5871H49.2262V31.1792H47.2322V17.5871Z' fill='%230B171F'/> <path d='M59.4504 15.8577H57.4585V31.1792H59.4504V15.8577Z' fill='%230B171F'/> <path d='M73.2655 29.4497V31.1792H64.5416V15.8577H66.5356V29.4497H73.2655Z' fill='%230B171F'/> <path d='M85.6838 29.4497V31.1792H76.96V15.8577H78.9539V29.4497H85.6838Z' fill='%230B171F'/> <path d='M88.3823 30.8734V29.0778C89.3122 29.3196 90.9053 29.6481 92.5666 29.6481C94.8684 29.6481 95.7115 28.991 95.7115 26.9785C95.7115 25.2283 95.2032 24.7014 93.7857 24.375L91.6161 23.8274C89.2027 23.2364 88.2728 22.3831 88.2728 19.6039C88.2728 16.8247 89.4899 15.6428 93.1203 15.6428C94.5605 15.6428 96.0875 15.8825 96.8624 16.0581V17.8083C96.0214 17.6327 94.5378 17.393 93.1431 17.393C91.0623 17.393 90.2647 17.8538 90.2647 19.5812C90.2647 21.3086 90.8846 21.7053 92.4343 22.0979L94.3601 22.5794C96.6847 23.1496 97.7261 23.9803 97.7261 26.9124C97.7261 29.8444 96.3747 31.4003 92.6327 31.4003C90.7296 31.4003 89.2006 31.0945 88.3823 30.8755' fill='%230B171F'/> <path d='M104.301 17.5871H99.6063V15.8577H110.965V17.5871H106.293V31.1792H104.301V17.5871Z' fill='%230B171F'/> <path d='M125.419 31.1792H123.16L119.309 25.2696H116.519V31.1792H114.527V15.8577H119.751C122.187 15.8577 124.489 16.3391 124.489 20.4758C124.489 22.9058 123.648 24.4369 121.344 24.9845L125.417 31.1792H125.419ZM119.397 23.5629C121.323 23.5629 122.454 23.1475 122.454 20.5213C122.454 17.7194 121.28 17.5665 119.288 17.5665H116.521V23.5649H119.4L119.397 23.5629Z' fill='%230B171F'/> <path d='M128.028 23.5194C128.028 17.2379 129.357 15.6406 133.829 15.6406C138.3 15.6406 139.629 17.2379 139.629 23.5194C139.629 29.8009 138.3 31.4002 133.829 31.4002C129.357 31.4002 128.028 29.803 128.028 23.5194ZM137.573 23.5194C137.573 18.2008 136.82 17.4135 133.831 17.4135C130.841 17.4135 130.089 18.1801 130.089 23.5194C130.089 28.8587 130.843 29.6273 133.831 29.6273C136.818 29.6273 137.573 28.7078 137.573 23.5194Z' fill='%230B171F'/> <path d='M143.879 15.8577H146.536L151.452 28.4868L156.388 15.8577H159V31.1792H157.12V18.6162L152.448 30.5221C152.315 30.8734 152.138 30.9602 151.894 30.9602H150.987C150.72 30.9602 150.543 30.8734 150.41 30.5221L145.738 18.6162V31.1792H143.879V15.8577Z' fill='%230B171F'/> <path d='M16.5996 26.3792C17.9736 21.9573 15.1842 17.0561 10.8677 15.8804V17.988C14.5519 19.3145 16.1884 24.315 13.8576 27.5942C11.1797 27.2016 11.0619 26.0816 8.47904 25.9866C5.97057 26.0796 5.75567 27.214 3.09429 27.5942C0.76352 24.3129 2.40209 19.3125 6.08628 17.988V15.8804C1.74294 17.0623 -1.04035 22.009 0.368858 26.4412C0.734592 27.6582 1.37721 28.7843 2.23059 29.7142C3.99313 29.553 5.50772 29.1232 6.76402 28.4661C7.39011 28.1624 7.76824 27.9764 8.47904 27.9764C9.23531 27.9764 9.61344 28.1645 10.2395 28.4723C11.4855 29.1335 12.9629 29.5509 14.7213 29.7121C15.5747 28.7802 16.2152 27.6541 16.583 26.4391C16.5892 26.4184 16.5934 26.3978 16.5996 26.3771' fill='%2300FF33'/> <path d='M9.47103 14H7.47913V21.482H9.47103V14Z' fill='%2300FF33'/> <path d='M10.0742 30.0819C7.60293 28.8173 6.56979 30.7741 3.67285 30.9724C6.43548 32.9499 10.4999 32.954 13.2666 30.9807C11.5062 30.7204 10.9111 30.4621 10.0742 30.0819Z' fill='%2300FF33'/> </svg>")` | Short brand logo (without the brand name) in SVG format. Used in mc-top-bar component. |
| `mds_brand_appearance_static_logo-short_width` | `159px` | Width of the short brand logo. |
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
| `mds_brand_appearance_state_neutral_default_hover_background-color` | `rgb(235,239,242)` | Neutral default hover background color. Use it for neutral elements that require a hover state. |
| `mds_brand_appearance_state_neutral_default_hover_border-color` | `rgb(163,181,192)` | Neutral default hover border color. Use it for neutral elements that require a hover state. |
| `mds_brand_appearance_state_neutral_default_active_background-color` | `rgb(216,223,228)` | Neutral default active background color. Use it for neutral elements that require an active state. |
| `mds_brand_appearance_state_neutral_default_active_border-color` | `rgb(137,160,174)` | Neutral default active border color. Use it for neutral elements that require an active state. |
| `mds_brand_appearance_state_neutral_weakest_opacity_hover_background-color` | `rgba(124,149,165,0.08)` | Neutral weakest hover background color. Use it for neutral elements that require a subtle hover effect. |
| `mds_brand_appearance_state_neutral_weakest_opacity_active_background-color` | `rgba(124,149,165,0.16)` | Neutral weakest active background color. Use it for neutral elements that require a subtle active effect. |
| `mds_brand_appearance_state_neutral_weak_opacity_hover_background-color` | `rgba(124,149,165,0.24)` | Neutral weak hover background color. Use it for neutral elements that require a more pronounced hover effect. |
| `mds_brand_appearance_state_neutral_weak_opacity_active_background-color` | `rgba(124,149,165,0.32)` | Neutral weak active background color. Use it for neutral elements that require a more pronounced active effect. |
| `mds_brand_appearance_state_neutral_strongest_hover_background-color` | `rgb(150,170,183)` | Neutral strongest hover background color. Use it for neutral elements that require a strong hover effect. |
| `mds_brand_appearance_state_neutral_strongest_active_background-color` | `rgb(131,154,170)` | Neutral strongest active background color. Use it for neutral elements that require a strong active effect. |
| `mds_brand_appearance_state_neutral_inverse_opacity_hover_background-color` | `rgba(255,255,255,0.12)` | Neutral inverse hover background color. Use it for neutral elements that require a subtle hover effect on dark backgrounds. |
| `mds_brand_appearance_state_neutral_inverse_opacity_active_background-color` | `rgba(255,255,255,0.20)` | Neutral inverse active background color. Use it for neutral elements that require a subtle active effect on dark backgrounds. |
| `mds_brand_appearance_state_primary_default_hover_background-color` | `rgb(0,217,43)` | Primary default hover background color. Use it for primary elements that require a hover state. |
| `mds_brand_appearance_state_primary_default_hover_border-color` | `rgb(0,204,41)` | Primary default hover border color. Use it for primary elements that require a hover state. |
| `mds_brand_appearance_state_primary_default_active_background-color` | `rgb(0,178,36)` | Primary default active background color. Use it for primary elements that require an active state. |
| `mds_brand_appearance_state_primary_default_active_border-color` | `rgb(0,153,31)` | Primary default active border color. Use it for primary elements that require an active state. |
| `mds_brand_appearance_state_primary_weakest_opacity_hover_background-color` | `rgba(0,255,51,0.12)` | Primary weakest hover background color. Use it for primary elements that require a subtle hover effect. |
| `mds_brand_appearance_state_primary_weakest_opacity_active_background-color` | `rgba(0,255,51,0.24)` | Primary weakest active background color. Use it for primary elements that require a subtle active effect. |
| `mds_brand_appearance_state_secondary_default_hover_background-color` | `rgb(112,134,148)` | Secondary default hover background color. Use it for secondary elements that require a hover state. |
| `mds_brand_appearance_state_secondary_default_active_background-color` | `rgb(99,119,132)` | Secondary default active background color. Use it for secondary elements that require an active state. |
| `mds_brand_appearance_state_secondary_weakest_opacity_hover_background-color` | `rgba(124,149,165,0.12)` | Secondary weakest hover background color. Use it for secondary elements that require a subtle hover effect. |
| `mds_brand_appearance_state_secondary_weakest_opacity_active_background-color` | `rgba(124,149,165,0.24)` | Secondary weakest active background color. Use it for secondary elements that require a subtle active effect. |
| `mds_brand_appearance_state_success_default_hover_background-color` | `rgb(58,154,48)` | Success default hover background color. Use it for success elements that require a hover state. |
| `mds_brand_appearance_state_success_default_active_background-color` | `rgb(50,133,41)` | Success default active background color. Use it for success elements that require an active state. |
| `mds_brand_appearance_state_warning_default_hover_background-color` | `rgb(230,187,37)` | Warning default hover background color. Use it for warning elements that require a hover state. |
| `mds_brand_appearance_state_warning_default_active_background-color` | `rgb(179,146,29)` | Warning default active background color. Use it for warning elements that require an active state. |
| `mds_brand_appearance_state_error_default_hover_background-color` | `rgb(166,0,16)` | Error default hover background color. Use it for error elements that require a hover state. |
| `mds_brand_appearance_state_error_default_active_background-color` | `rgb(129,0,13)` | Error default active background color. Use it for error elements that require an active state. |
| `mds_brand_appearance_state_error_weakest_opacity_hover_background-color` | `rgba(184,0,18,0.06)` | Error weakest hover background color. Use it for error elements that require a subtle hover effect. |
| `mds_brand_appearance_state_error_weakest_opacity_active_background-color` | `rgba(184,0,18,0.1)` | Error weakest active background color. Use it for error elements that require a subtle active effect. |
| `mds_brand_appearance_state_info_default_hover_background-color` | `rgb(0,62,98)` | Info default hover background color. Use it for info elements that require a hover state. |
| `mds_brand_appearance_state_info_default_active_background-color` | `rgb(0,36,61)` | Info default active background color. Use it for info elements that require an active state. |
| `mds_brand_appearance_state_focus_border-color` | `rgb(0,255,51)` | Focus border color. Use it to indicate focus state on elements. |
| `mds_brand_appearance_state_focus_default_shadow_offset-x` | `0px` | Focus shadow horizontal offset. Use it to position the shadow slightly to the right. |
| `mds_brand_appearance_state_focus_default_shadow_offset-y` | `0px` | Focus shadow vertical offset. Use it to position the shadow slightly below the element. |
| `mds_brand_appearance_state_focus_default_shadow_blur-radius` | `0px` | Focus shadow blur radius. Use it to create a soft shadow effect. |
| `mds_brand_appearance_state_focus_default_shadow_spread-radius` | `3px` | Focus shadow spread radius. Use it to slightly increase the size of the shadow. |
| `mds_brand_appearance_state_focus_default_shadow_color` | `rgb(229,255,235)` | Focus shadow color. Use it to create a strong focus effect. |
| `mds_brand_appearance_state_focus_vanity_shadow_offset-x` | `0px` | Focus vanity shadow horizontal offset. Use it to position the shadow slightly to the right. |
| `mds_brand_appearance_state_focus_vanity_shadow_offset-y` | `3px` | Focus vanity shadow vertical offset. Use it to position the shadow slightly below the element. |
| `mds_brand_appearance_state_focus_vanity_shadow_blur-radius` | `0px` | Focus vanity shadow blur radius. Use it to create a soft shadow effect. |
| `mds_brand_appearance_state_focus_vanity_shadow_spread-radius` | `0px` | Focus vanity shadow spread radius. Use it to slightly increase the size of the shadow. |
| `mds_brand_appearance_state_focus_vanity_shadow_color` | `rgb(229,255,235)` | Focus vanity shadow color. Use it to create a strong focus effect. |
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
| `mds_brand_typography_headline_font-family` | `Inter` | The font family used for headlines. |
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
| `mds_brand_typography_text_font-family` | `Inter` | The font family used for text. |
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
| `mds_brand_appearance_neutral_default_text-color` | `rgb(11,23,31)` | Neutral default text color. |
| `mds_brand_appearance_neutral_weakest_text-color` | `rgb(96,104,109)` | Neutral weakest text color. |
| `mds_brand_appearance_neutral_weak_text-color` | `rgb(72,81,87)` | Neutral weak text color. |
| `mds_brand_appearance_neutral_inverse_text-color` | `rgb(255,255,255)` | Neutral inverse text color. |
| `mds_brand_appearance_primary_default_text-color` | `rgb(0,255,51)` | Primary default text color. |
| `mds_brand_appearance_secondary_default_text-color` | `rgb(11,23,31)` | Secondary default text color. It's a brand color. Use it sparingly, only in cases where it is needed to highlight important information or actions. |
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

