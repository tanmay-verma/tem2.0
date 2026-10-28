# APMTERMINALS Brand Design Tokens

Complete list of MDS color, border and motion, gap, layout, and typography tokens for the apmterminals brand. Use as CSS custom properties: `var(--token_name)`.

> **Note:** Values shown are for the **light** & **dark** theme. Dark theme swaps many of these values automatically. See the [Light vs Dark differences](#light-vs-dark-theme-differences) section for details.

## Installation

```bash
npm install @maersk-global/mds-design-tokens 
```

## Imports

### DARK theme

```html
<link rel="stylesheet" href="./node_modules/@maersk-global/mds-design-tokens/apmterminals/dark/css/design-tokens-px.css" />
```

```css
@import url("@maersk-global/mds-design-tokens/apmterminals/dark/css/design-tokens-px.css");
```

```javascript
import "@maersk-global/mds-design-tokens/apmterminals/dark/css/design-tokens-px.css";
```

```css
@import url("@maersk-global/mds-design-tokens/apmterminals/dark/css/design-tokens-px.scss");
```

### LIGHT theme

```html
<link rel="stylesheet" href="./node_modules/@maersk-global/mds-design-tokens/apmterminals/light/css/design-tokens-px.css" />
```

```css
@import url("@maersk-global/mds-design-tokens/apmterminals/light/css/design-tokens-px.css");
```

```javascript
import "@maersk-global/mds-design-tokens/apmterminals/light/css/design-tokens-px.css";
```

```css
@import url("@maersk-global/mds-design-tokens/apmterminals/light/css/design-tokens-px.scss");
```

## Color Design Tokens Values

### Color Values for dark theme

Color palette, theme colors, and appearance tokens

| Token                       | Value   | Use for.    |
|-----------------------------|---------|-------------|
| `mds_brand_appearance_neutral_default_background-color` | `rgb(20,20,20)` | Neutral default background color. |
| `mds_brand_appearance_neutral_default_on-background-color` | `rgb(236,236,237)` | Neutral default text color to be used on default background. |
| `mds_brand_appearance_neutral_default_border-color` | `rgb(120,120,120)` | Neutral default border color. |
| `mds_brand_appearance_neutral_default_opacity_border-color` | `rgba(255,255,255,0.43)` | Neutral default border color with opacity. |
| `mds_brand_appearance_neutral_weakest_background-color` | `rgb(36,36,42)` | Neutral weakest background color. |
| `mds_brand_appearance_neutral_weakest_on-background-color` | `rgb(236,236,237)` | Neutral weakest text color to be used on weakest background. |
| `mds_brand_appearance_neutral_weak_background-color` | `rgb(48,48,56)` | Neutral weak background color. |
| `mds_brand_appearance_neutral_weak_on-background-color` | `rgb(236,236,237)` | Neutral weak text color to be used on weak background. |
| `mds_brand_appearance_neutral_weak_border-color` | `rgb(58,58,58)` | Neutral weak border color. |
| `mds_brand_appearance_neutral_weak_opacity_background-color` | `rgba(255,255,255,0.12)` | Neutral weak background color with opacity. |
| `mds_brand_appearance_neutral_strong_background-color` | `rgb(60,60,70)` | Neutral strong background color. |
| `mds_brand_appearance_neutral_strong_on-background-color` | `rgb(236,236,237)` | Neutral strong text color to be used on strong background. |
| `mds_brand_appearance_neutral_strongest_background-color` | `rgb(138,138,144)` | Neutral strongest background color. |
| `mds_brand_appearance_neutral_strongest_on-background-color` | `rgb(24,24,28)` | Neutral strongest text color to be used on strongest background. |
| `mds_brand_appearance_neutral_inverse_background-color` | `rgb(255,255,255)` | Neutral inverse background color. |
| `mds_brand_appearance_neutral_inverse_on-background-color` | `rgb(24,24,28)` | Neutral inverse text color to be used on inverse background. |
| `mds_brand_appearance_neutral_inverse_border-color` | `rgb(20,20,20)` | Neutral inverse border color. |
| `mds_brand_appearance_primary_default_background-color` | `rgb(255,128,51)` | Primary default background color. |
| `mds_brand_appearance_primary_default_on-background-color` | `rgb(20,20,20)` | Primary default text color to be used on default background. |
| `mds_brand_appearance_primary_default_border-color` | `rgb(255,128,51)` | Primary default border color. |
| `mds_brand_appearance_primary_default_link-color` | `rgb(255,128,51)` | Primary default link color. |
| `mds_brand_appearance_primary_weak_background-color` | `rgb(136,51,0)` | Primary weak background color. |
| `mds_brand_appearance_primary_weak_on-background-color` | `rgb(255,239,230)` | Primary weak text color to be used on weak background. |
| `mds_brand_appearance_primary_weak_border-color` | `rgb(136,51,0)` | Primary weak border color. |
| `mds_brand_appearance_secondary_default_background-color` | `rgb(157,197,205)` | Secondary default background color. It's a brand color. Use it sparingly, only in cases where it is needed to highlight important information or actions. |
| `mds_brand_appearance_secondary_default_on-background-color` | `rgb(20,20,20)` | Secondary default text color to be used on default background. It's a brand color. Use it sparingly, only in cases where it is needed to highlight important information or actions. |
| `mds_brand_appearance_secondary_default_border-color` | `rgb(157,197,205)` | Secondary default border color. It's a brand color. Use it sparingly, only in cases where it is needed to highlight important information or actions. |
| `mds_brand_appearance_secondary_weak_background-color` | `rgb(6,70,83)` | Secondary weak background color. |
| `mds_brand_appearance_secondary_weak_on-background-color` | `rgb(231,241,243)` | Secondary weak text color to be used on weak background. |
| `mds_brand_appearance_secondary_weak_border-color` | `rgb(6,70,83)` | Secondary weak border color. |
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
| `mds_brand_appearance_static_dark` | `rgb(60,60,70)` | Dark static color. |
| `mds_brand_appearance_static_light` | `rgb(255,255,255)` | Light static color. |
| `mds_brand_appearance_static_brand` | `rgb(255,96,0)` | Brand static color. Use it to represent the brand identity consistently across UI. |
| `mds_brand_appearance_static_logo_url` | `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='48' viewBox='0 0 160 48' fill='none'> <path d='M28.5668 17.6933V15.0379L48.5308 5.8877V9.40699L28.5668 17.6933Z' fill='%23FF6441'/> <path d='M7.48279 21.0206V22.8762L38.4526 7.32734V4L7.48279 21.0206Z' fill='%23FF6441'/> <path d='M0.0922852 29.4668L17.1769 22.3963V20.2527L0.0922852 28.0591V29.4668Z' fill='%23FF6441'/> <path d='M130.978 19.7089L126.851 29.147H129.25L130.146 27.0994H134.913L135.809 29.147H138.337L134.241 19.7089H130.978ZM130.946 25.2758L132.546 21.6285L134.145 25.2758H130.946ZM100.296 29.147H102.12L104.647 23.836V29.147H106.919V19.7089H104.231L101.224 26.5555L98.2166 19.7089H95.4332V29.147H97.7047V23.836L100.296 29.147ZM46.8669 29.147H48.6905L51.218 23.836V29.147H53.4896V19.7089H50.8021L47.7947 26.5555L44.7873 19.7089H42.0038V29.147H44.2754V23.836L46.8669 29.147ZM81.324 19.7089V21.6605H74.7653V23.5801H80.2362V25.4677H74.7653V27.2274H81.292V29.179H72.3338V19.7409H81.324V19.7089ZM21.8799 19.7089L17.7527 29.147H20.1522L21.048 27.0994H25.8151L26.7109 29.147H29.2384L25.1432 19.7089H21.8799ZM21.8479 25.2758L23.4475 21.6285L25.0472 25.2758H21.8479ZM37.7807 23.996H33.1736V21.5645H37.7807V23.996ZM30.6461 19.7089V29.147H33.1096V25.9476H38.6445C39.3484 25.9476 39.9243 25.5317 39.9882 24.6039V21.0846C39.9882 20.3167 39.3164 19.7089 38.5165 19.7089H30.6461ZM142.4 19.7089H139.936V29.147H148.415V27.1954H142.4V19.7089ZM114.885 19.7089V29.147H117.317V22.6523L122.532 29.147H125.219V19.7089H122.756V26.2036L117.669 19.7089H114.885ZM109.702 29.147H112.07V24.4439V19.7409H109.702V29.147ZM60.2082 19.7089V21.7245H64.0155V29.147H66.5429V21.7245H70.3502V19.7089H60.2082ZM151.518 19.7409C150.814 19.7089 150.142 20.3167 150.142 20.9886V24.06C150.142 24.8598 150.814 25.4357 151.486 25.4357H156.957V27.2594H152.606V26.4915H150.046V27.8032C150.046 28.5071 150.686 29.179 151.422 29.179H158.077C158.749 29.179 159.42 28.6671 159.42 27.7713V24.8278C159.388 23.964 158.749 23.4521 158.045 23.4201H152.67V21.6605H156.893V22.2684H159.292V21.0206C159.324 20.4127 158.717 19.7089 157.917 19.7409H151.555H151.518ZM83.5636 19.7089V29.147H85.9631V25.6917H88.7145L90.5702 29.147H93.1296L91.21 25.6917H91.434C92.1698 25.6277 92.7137 25.0838 92.7137 24.284V21.0846C92.7137 20.3167 92.0419 19.7089 91.242 19.7089H83.5636ZM90.5702 23.804H85.9311V21.6605H90.5702V23.804Z' fill='white'/> <path d='M93.8657 38.7771V39.353H90.5383V33.9141H91.2422V38.7771H93.8657Z' fill='%23FF6441'/> <path d='M94.6333 33.8181H95.4011V34.586H94.6333V33.8181ZM94.6653 35.3218H95.3372V39.353H94.6653V35.3218Z' fill='%23FF6441'/> <path d='M99.0804 35.8655H97.6407V39.3848H96.9688V35.8655H96.1689V35.3216H96.9688V35.0017C96.9688 34.2978 97.2567 33.626 98.4085 33.626C98.6325 33.626 98.8884 33.658 99.0484 33.722V34.2658C98.8884 34.2339 98.6644 34.2019 98.4405 34.2019C97.9286 34.2019 97.6087 34.4258 97.6087 35.0337V35.3536H99.0484V35.8655H99.0804Z' fill='%23FF6441'/> <path d='M100.36 38.1692V35.8657H99.6244V35.3218H100.36V34.362L101.032 34.17V35.3218H102.312V35.8657H101.032V38.1692C101.032 38.8091 101.32 38.8731 101.608 38.8731C101.864 38.8731 102.184 38.8091 102.344 38.7451V39.289C102.152 39.353 101.832 39.417 101.48 39.417C100.712 39.449 100.36 39.0651 100.36 38.1692Z' fill='%23FF6441'/> <path d='M103.112 33.8181H103.88V34.586H103.112V33.8181ZM103.176 35.3218H103.848V39.353H103.176V35.3218Z' fill='%23FF6441'/> <path d='M105.032 35.3218H105.607L105.671 35.6737C105.671 35.7377 105.703 35.7377 105.735 35.7377C105.767 35.7377 105.799 35.7377 105.863 35.6737C106.119 35.4818 106.503 35.2578 107.143 35.2578C107.943 35.2578 108.359 35.6097 108.359 36.4416V39.385H107.687V36.6015C107.687 35.9937 107.399 35.8337 106.919 35.8337C106.375 35.8337 105.927 36.0896 105.703 36.2816V39.385H105.032V35.3218Z' fill='%23FF6441'/> <path d='M109.222 39.9608C109.222 39.5129 109.542 39.1289 109.926 38.841C109.606 38.713 109.478 38.521 109.478 38.2331C109.478 37.9772 109.638 37.7532 109.862 37.5932C109.542 37.3693 109.35 36.9854 109.35 36.5694C109.35 35.6416 109.862 35.2257 111.078 35.2257C111.302 35.2257 111.494 35.2577 111.718 35.2897H113.157L113.221 35.6736L112.486 35.7696C112.645 35.9616 112.741 36.2495 112.741 36.5374C112.741 37.4653 112.23 37.8812 111.078 37.8812C110.79 37.8812 110.502 37.8492 110.278 37.7532C110.15 37.8492 110.086 37.9772 110.086 38.1051C110.086 38.2971 110.214 38.3611 110.598 38.4251L112.166 38.745C112.741 38.873 113.029 39.2569 113.029 39.8008C113.029 40.6326 112.454 40.9846 111.11 40.9846C109.798 41.0805 109.222 40.7286 109.222 39.9608ZM112.326 39.9288C112.326 39.5768 112.134 39.3849 111.718 39.2889L110.342 39.001C110.054 39.2889 109.862 39.5448 109.862 39.8328C109.862 40.3127 110.246 40.5367 111.078 40.5367C112.006 40.5367 112.326 40.3767 112.326 39.9288ZM112.07 36.6014C112.07 35.9616 111.814 35.7696 111.078 35.7696C110.31 35.7696 110.022 35.9936 110.022 36.6014C110.022 37.2093 110.31 37.4333 111.046 37.4333C111.782 37.4013 112.07 37.1773 112.07 36.6014Z' fill='%23FF6441'/> <path d='M115.749 36.6334C115.749 34.6178 116.485 33.85 118.18 33.85C118.884 33.85 119.396 33.9779 119.588 34.0739V34.6818C119.396 34.6178 118.884 34.4579 118.212 34.4579C116.836 34.4579 116.453 35.0977 116.453 36.6014C116.453 38.4571 117.06 38.841 117.86 38.841C118.468 38.841 118.884 38.617 119.172 38.489V37.0173H118.02V36.4415H119.844V39.3529H119.3L119.236 39.0649C119.236 39.0329 119.204 38.969 119.172 38.969C119.14 38.969 119.108 38.969 119.044 39.0329C118.884 39.1289 118.372 39.4169 117.732 39.4169C116.548 39.4489 115.749 38.745 115.749 36.6334Z' fill='%23FF6441'/> <path d='M120.964 38.4891V33.6901H121.636V38.3611C121.636 38.7131 121.764 38.873 122.052 38.873C122.212 38.873 122.308 38.873 122.468 38.841V39.3849C122.308 39.4169 122.116 39.4489 121.892 39.4489C121.348 39.4489 120.964 39.129 120.964 38.4891Z' fill='%23FF6441'/> <path d='M123.012 37.3373C123.012 35.8336 123.62 35.2257 124.868 35.2257C126.115 35.2257 126.723 35.8016 126.723 37.3373C126.723 38.873 126.115 39.4489 124.868 39.4489C123.62 39.4489 123.012 38.873 123.012 37.3373ZM126.019 37.3373C126.019 36.2175 125.667 35.8016 124.868 35.8016C124.036 35.8016 123.716 36.2175 123.716 37.3373C123.716 38.4571 124.036 38.873 124.868 38.873C125.699 38.873 126.019 38.4571 126.019 37.3373Z' fill='%23FF6441'/> <path d='M127.747 39.161V33.6901H128.419V35.7057C128.579 35.6097 129.09 35.2578 129.73 35.2578C130.626 35.2578 131.266 35.6417 131.266 37.3053C131.266 38.937 130.69 39.4809 129.378 39.4809C128.611 39.4489 128.099 39.2889 127.747 39.161ZM130.562 37.3053C130.562 36.1536 130.242 35.8336 129.57 35.8336C128.994 35.8336 128.611 36.0896 128.419 36.2176V38.7451C128.611 38.809 128.898 38.905 129.378 38.905C130.114 38.873 130.562 38.5531 130.562 37.3053Z' fill='%23FF6441'/> <path d='M132.066 38.3291C132.066 37.6252 132.418 37.3693 133.346 37.1133L134.594 36.7294V36.5374C134.594 36.1535 134.402 35.8016 133.634 35.8016C133.058 35.8016 132.61 35.9616 132.354 36.0575V35.4817C132.674 35.3537 133.122 35.2257 133.73 35.2257C134.786 35.2257 135.266 35.7056 135.266 36.5374V39.3529H134.69L134.626 39.001C134.626 38.937 134.594 38.937 134.562 38.937C134.53 38.937 134.498 38.937 134.466 38.969C134.242 39.1289 133.73 39.4169 133.186 39.4169C132.386 39.4489 132.066 39.0969 132.066 38.3291ZM134.562 38.5211V37.2413L133.378 37.5932C132.834 37.7532 132.706 37.9132 132.706 38.2971C132.706 38.713 132.866 38.905 133.314 38.905C133.794 38.905 134.242 38.681 134.562 38.5211Z' fill='%23FF6441'/> <path d='M136.385 38.4891V33.6901H137.057V38.3611C137.057 38.7131 137.185 38.873 137.473 38.873C137.633 38.873 137.728 38.873 137.888 38.841V39.3849C137.728 39.4169 137.537 39.4489 137.313 39.4489C136.769 39.4489 136.385 39.129 136.385 38.4891Z' fill='%23FF6441'/> <path d='M141.952 34.4899H140.224V33.9141H144.352V34.4899H142.624V39.353H141.92V34.4899H141.952Z' fill='%23FF6441'/> <path d='M144.511 35.3218H145.087L145.151 35.7377C145.151 35.8017 145.183 35.8337 145.215 35.8337C145.247 35.8337 145.279 35.8337 145.311 35.7697C145.567 35.5458 145.983 35.2578 146.527 35.2578C146.591 35.2578 146.687 35.2578 146.751 35.2898V35.8977C146.239 35.8657 145.663 36.0257 145.215 36.3776V39.385H144.543V35.3218H144.511Z' fill='%23FF6441'/> <path d='M147.295 38.3291C147.295 37.6252 147.647 37.3693 148.575 37.1133L149.823 36.7294V36.5374C149.823 36.1535 149.631 35.8016 148.863 35.8016C148.287 35.8016 147.839 35.9616 147.583 36.0575V35.4817C147.903 35.3537 148.351 35.2257 148.959 35.2257C150.015 35.2257 150.494 35.7056 150.494 36.5374V39.3529H149.919L149.855 39.001C149.855 38.937 149.823 38.937 149.791 38.937C149.759 38.937 149.727 38.937 149.695 38.969C149.471 39.1289 148.959 39.4169 148.415 39.4169C147.647 39.4489 147.295 39.0969 147.295 38.3291ZM149.823 38.5211V37.2413L148.639 37.5932C148.095 37.7532 147.967 37.9132 147.967 38.2971C147.967 38.713 148.127 38.905 148.575 38.905C149.055 38.905 149.503 38.681 149.823 38.5211Z' fill='%23FF6441'/> <path d='M151.454 37.3373C151.454 35.7697 152.126 35.2258 153.214 35.2258C153.693 35.2258 154.045 35.3217 154.301 35.4817V33.6901H154.973V39.3529H154.397L154.333 39.001C154.333 38.969 154.301 38.937 154.269 38.937C154.237 38.937 154.237 38.937 154.205 38.969C154.045 39.129 153.597 39.4169 153.022 39.4169C152.158 39.4489 151.454 38.969 151.454 37.3373ZM154.301 38.4251V35.9936C154.109 35.8976 153.757 35.8016 153.341 35.8016C152.51 35.8016 152.158 36.1856 152.158 37.3373C152.158 38.4891 152.574 38.873 153.182 38.873C153.661 38.873 154.109 38.5851 154.301 38.4251Z' fill='%23FF6441'/> <path d='M159.389 37.4973H156.669C156.701 38.4891 157.085 38.841 157.917 38.841C158.525 38.841 159.005 38.649 159.293 38.5211V39.1289C159.037 39.2569 158.589 39.4169 157.885 39.4169C156.541 39.4169 156.029 38.713 156.029 37.2093C156.029 35.7376 156.637 35.2257 157.789 35.2257C158.909 35.2257 159.421 35.8016 159.421 36.9214V37.4973H159.389ZM158.749 36.7934C158.749 36.1215 158.429 35.8016 157.725 35.8016C156.989 35.8016 156.669 36.0895 156.637 37.0174L158.749 37.0259V36.8298V36.7934Z' fill='%23FF6441'/> </svg>")` | Full brand logo in SVG format. Used in mc-top-bar component. |
| `mds_brand_appearance_static_logo_width` | `160px` | Width of the full brand logo. |
| `mds_brand_appearance_static_logo-short_url` | `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='48' viewBox='0 0 160 48' fill='none'> <path d='M28.5668 17.6933V15.0379L48.5308 5.8877V9.40699L28.5668 17.6933Z' fill='%23FF6441'/> <path d='M7.48279 21.0206V22.8762L38.4526 7.32734V4L7.48279 21.0206Z' fill='%23FF6441'/> <path d='M0.0922852 29.4668L17.1769 22.3963V20.2527L0.0922852 28.0591V29.4668Z' fill='%23FF6441'/> <path d='M130.978 19.7089L126.851 29.147H129.25L130.146 27.0994H134.913L135.809 29.147H138.337L134.241 19.7089H130.978ZM130.946 25.2758L132.546 21.6285L134.145 25.2758H130.946ZM100.296 29.147H102.12L104.647 23.836V29.147H106.919V19.7089H104.231L101.224 26.5555L98.2166 19.7089H95.4332V29.147H97.7047V23.836L100.296 29.147ZM46.8669 29.147H48.6905L51.218 23.836V29.147H53.4896V19.7089H50.8021L47.7947 26.5555L44.7873 19.7089H42.0038V29.147H44.2754V23.836L46.8669 29.147ZM81.324 19.7089V21.6605H74.7653V23.5801H80.2362V25.4677H74.7653V27.2274H81.292V29.179H72.3338V19.7409H81.324V19.7089ZM21.8799 19.7089L17.7527 29.147H20.1522L21.048 27.0994H25.8151L26.7109 29.147H29.2384L25.1432 19.7089H21.8799ZM21.8479 25.2758L23.4475 21.6285L25.0472 25.2758H21.8479ZM37.7807 23.996H33.1736V21.5645H37.7807V23.996ZM30.6461 19.7089V29.147H33.1096V25.9476H38.6445C39.3484 25.9476 39.9243 25.5317 39.9882 24.6039V21.0846C39.9882 20.3167 39.3164 19.7089 38.5165 19.7089H30.6461ZM142.4 19.7089H139.936V29.147H148.415V27.1954H142.4V19.7089ZM114.885 19.7089V29.147H117.317V22.6523L122.532 29.147H125.219V19.7089H122.756V26.2036L117.669 19.7089H114.885ZM109.702 29.147H112.07V24.4439V19.7409H109.702V29.147ZM60.2082 19.7089V21.7245H64.0155V29.147H66.5429V21.7245H70.3502V19.7089H60.2082ZM151.518 19.7409C150.814 19.7089 150.142 20.3167 150.142 20.9886V24.06C150.142 24.8598 150.814 25.4357 151.486 25.4357H156.957V27.2594H152.606V26.4915H150.046V27.8032C150.046 28.5071 150.686 29.179 151.422 29.179H158.077C158.749 29.179 159.42 28.6671 159.42 27.7713V24.8278C159.388 23.964 158.749 23.4521 158.045 23.4201H152.67V21.6605H156.893V22.2684H159.292V21.0206C159.324 20.4127 158.717 19.7089 157.917 19.7409H151.555H151.518ZM83.5636 19.7089V29.147H85.9631V25.6917H88.7145L90.5702 29.147H93.1296L91.21 25.6917H91.434C92.1698 25.6277 92.7137 25.0838 92.7137 24.284V21.0846C92.7137 20.3167 92.0419 19.7089 91.242 19.7089H83.5636ZM90.5702 23.804H85.9311V21.6605H90.5702V23.804Z' fill='white'/> <path d='M93.8657 38.7771V39.353H90.5383V33.9141H91.2422V38.7771H93.8657Z' fill='%23FF6441'/> <path d='M94.6333 33.8181H95.4011V34.586H94.6333V33.8181ZM94.6653 35.3218H95.3372V39.353H94.6653V35.3218Z' fill='%23FF6441'/> <path d='M99.0804 35.8655H97.6407V39.3848H96.9688V35.8655H96.1689V35.3216H96.9688V35.0017C96.9688 34.2978 97.2567 33.626 98.4085 33.626C98.6325 33.626 98.8884 33.658 99.0484 33.722V34.2658C98.8884 34.2339 98.6644 34.2019 98.4405 34.2019C97.9286 34.2019 97.6087 34.4258 97.6087 35.0337V35.3536H99.0484V35.8655H99.0804Z' fill='%23FF6441'/> <path d='M100.36 38.1692V35.8657H99.6244V35.3218H100.36V34.362L101.032 34.17V35.3218H102.312V35.8657H101.032V38.1692C101.032 38.8091 101.32 38.8731 101.608 38.8731C101.864 38.8731 102.184 38.8091 102.344 38.7451V39.289C102.152 39.353 101.832 39.417 101.48 39.417C100.712 39.449 100.36 39.0651 100.36 38.1692Z' fill='%23FF6441'/> <path d='M103.112 33.8181H103.88V34.586H103.112V33.8181ZM103.176 35.3218H103.848V39.353H103.176V35.3218Z' fill='%23FF6441'/> <path d='M105.032 35.3218H105.607L105.671 35.6737C105.671 35.7377 105.703 35.7377 105.735 35.7377C105.767 35.7377 105.799 35.7377 105.863 35.6737C106.119 35.4818 106.503 35.2578 107.143 35.2578C107.943 35.2578 108.359 35.6097 108.359 36.4416V39.385H107.687V36.6015C107.687 35.9937 107.399 35.8337 106.919 35.8337C106.375 35.8337 105.927 36.0896 105.703 36.2816V39.385H105.032V35.3218Z' fill='%23FF6441'/> <path d='M109.222 39.9608C109.222 39.5129 109.542 39.1289 109.926 38.841C109.606 38.713 109.478 38.521 109.478 38.2331C109.478 37.9772 109.638 37.7532 109.862 37.5932C109.542 37.3693 109.35 36.9854 109.35 36.5694C109.35 35.6416 109.862 35.2257 111.078 35.2257C111.302 35.2257 111.494 35.2577 111.718 35.2897H113.157L113.221 35.6736L112.486 35.7696C112.645 35.9616 112.741 36.2495 112.741 36.5374C112.741 37.4653 112.23 37.8812 111.078 37.8812C110.79 37.8812 110.502 37.8492 110.278 37.7532C110.15 37.8492 110.086 37.9772 110.086 38.1051C110.086 38.2971 110.214 38.3611 110.598 38.4251L112.166 38.745C112.741 38.873 113.029 39.2569 113.029 39.8008C113.029 40.6326 112.454 40.9846 111.11 40.9846C109.798 41.0805 109.222 40.7286 109.222 39.9608ZM112.326 39.9288C112.326 39.5768 112.134 39.3849 111.718 39.2889L110.342 39.001C110.054 39.2889 109.862 39.5448 109.862 39.8328C109.862 40.3127 110.246 40.5367 111.078 40.5367C112.006 40.5367 112.326 40.3767 112.326 39.9288ZM112.07 36.6014C112.07 35.9616 111.814 35.7696 111.078 35.7696C110.31 35.7696 110.022 35.9936 110.022 36.6014C110.022 37.2093 110.31 37.4333 111.046 37.4333C111.782 37.4013 112.07 37.1773 112.07 36.6014Z' fill='%23FF6441'/> <path d='M115.749 36.6334C115.749 34.6178 116.485 33.85 118.18 33.85C118.884 33.85 119.396 33.9779 119.588 34.0739V34.6818C119.396 34.6178 118.884 34.4579 118.212 34.4579C116.836 34.4579 116.453 35.0977 116.453 36.6014C116.453 38.4571 117.06 38.841 117.86 38.841C118.468 38.841 118.884 38.617 119.172 38.489V37.0173H118.02V36.4415H119.844V39.3529H119.3L119.236 39.0649C119.236 39.0329 119.204 38.969 119.172 38.969C119.14 38.969 119.108 38.969 119.044 39.0329C118.884 39.1289 118.372 39.4169 117.732 39.4169C116.548 39.4489 115.749 38.745 115.749 36.6334Z' fill='%23FF6441'/> <path d='M120.964 38.4891V33.6901H121.636V38.3611C121.636 38.7131 121.764 38.873 122.052 38.873C122.212 38.873 122.308 38.873 122.468 38.841V39.3849C122.308 39.4169 122.116 39.4489 121.892 39.4489C121.348 39.4489 120.964 39.129 120.964 38.4891Z' fill='%23FF6441'/> <path d='M123.012 37.3373C123.012 35.8336 123.62 35.2257 124.868 35.2257C126.115 35.2257 126.723 35.8016 126.723 37.3373C126.723 38.873 126.115 39.4489 124.868 39.4489C123.62 39.4489 123.012 38.873 123.012 37.3373ZM126.019 37.3373C126.019 36.2175 125.667 35.8016 124.868 35.8016C124.036 35.8016 123.716 36.2175 123.716 37.3373C123.716 38.4571 124.036 38.873 124.868 38.873C125.699 38.873 126.019 38.4571 126.019 37.3373Z' fill='%23FF6441'/> <path d='M127.747 39.161V33.6901H128.419V35.7057C128.579 35.6097 129.09 35.2578 129.73 35.2578C130.626 35.2578 131.266 35.6417 131.266 37.3053C131.266 38.937 130.69 39.4809 129.378 39.4809C128.611 39.4489 128.099 39.2889 127.747 39.161ZM130.562 37.3053C130.562 36.1536 130.242 35.8336 129.57 35.8336C128.994 35.8336 128.611 36.0896 128.419 36.2176V38.7451C128.611 38.809 128.898 38.905 129.378 38.905C130.114 38.873 130.562 38.5531 130.562 37.3053Z' fill='%23FF6441'/> <path d='M132.066 38.3291C132.066 37.6252 132.418 37.3693 133.346 37.1133L134.594 36.7294V36.5374C134.594 36.1535 134.402 35.8016 133.634 35.8016C133.058 35.8016 132.61 35.9616 132.354 36.0575V35.4817C132.674 35.3537 133.122 35.2257 133.73 35.2257C134.786 35.2257 135.266 35.7056 135.266 36.5374V39.3529H134.69L134.626 39.001C134.626 38.937 134.594 38.937 134.562 38.937C134.53 38.937 134.498 38.937 134.466 38.969C134.242 39.1289 133.73 39.4169 133.186 39.4169C132.386 39.4489 132.066 39.0969 132.066 38.3291ZM134.562 38.5211V37.2413L133.378 37.5932C132.834 37.7532 132.706 37.9132 132.706 38.2971C132.706 38.713 132.866 38.905 133.314 38.905C133.794 38.905 134.242 38.681 134.562 38.5211Z' fill='%23FF6441'/> <path d='M136.385 38.4891V33.6901H137.057V38.3611C137.057 38.7131 137.185 38.873 137.473 38.873C137.633 38.873 137.728 38.873 137.888 38.841V39.3849C137.728 39.4169 137.537 39.4489 137.313 39.4489C136.769 39.4489 136.385 39.129 136.385 38.4891Z' fill='%23FF6441'/> <path d='M141.952 34.4899H140.224V33.9141H144.352V34.4899H142.624V39.353H141.92V34.4899H141.952Z' fill='%23FF6441'/> <path d='M144.511 35.3218H145.087L145.151 35.7377C145.151 35.8017 145.183 35.8337 145.215 35.8337C145.247 35.8337 145.279 35.8337 145.311 35.7697C145.567 35.5458 145.983 35.2578 146.527 35.2578C146.591 35.2578 146.687 35.2578 146.751 35.2898V35.8977C146.239 35.8657 145.663 36.0257 145.215 36.3776V39.385H144.543V35.3218H144.511Z' fill='%23FF6441'/> <path d='M147.295 38.3291C147.295 37.6252 147.647 37.3693 148.575 37.1133L149.823 36.7294V36.5374C149.823 36.1535 149.631 35.8016 148.863 35.8016C148.287 35.8016 147.839 35.9616 147.583 36.0575V35.4817C147.903 35.3537 148.351 35.2257 148.959 35.2257C150.015 35.2257 150.494 35.7056 150.494 36.5374V39.3529H149.919L149.855 39.001C149.855 38.937 149.823 38.937 149.791 38.937C149.759 38.937 149.727 38.937 149.695 38.969C149.471 39.1289 148.959 39.4169 148.415 39.4169C147.647 39.4489 147.295 39.0969 147.295 38.3291ZM149.823 38.5211V37.2413L148.639 37.5932C148.095 37.7532 147.967 37.9132 147.967 38.2971C147.967 38.713 148.127 38.905 148.575 38.905C149.055 38.905 149.503 38.681 149.823 38.5211Z' fill='%23FF6441'/> <path d='M151.454 37.3373C151.454 35.7697 152.126 35.2258 153.214 35.2258C153.693 35.2258 154.045 35.3217 154.301 35.4817V33.6901H154.973V39.3529H154.397L154.333 39.001C154.333 38.969 154.301 38.937 154.269 38.937C154.237 38.937 154.237 38.937 154.205 38.969C154.045 39.129 153.597 39.4169 153.022 39.4169C152.158 39.4489 151.454 38.969 151.454 37.3373ZM154.301 38.4251V35.9936C154.109 35.8976 153.757 35.8016 153.341 35.8016C152.51 35.8016 152.158 36.1856 152.158 37.3373C152.158 38.4891 152.574 38.873 153.182 38.873C153.661 38.873 154.109 38.5851 154.301 38.4251Z' fill='%23FF6441'/> <path d='M159.389 37.4973H156.669C156.701 38.4891 157.085 38.841 157.917 38.841C158.525 38.841 159.005 38.649 159.293 38.5211V39.1289C159.037 39.2569 158.589 39.4169 157.885 39.4169C156.541 39.4169 156.029 38.713 156.029 37.2093C156.029 35.7376 156.637 35.2257 157.789 35.2257C158.909 35.2257 159.421 35.8016 159.421 36.9214V37.4973H159.389ZM158.749 36.7934C158.749 36.1215 158.429 35.8016 157.725 35.8016C156.989 35.8016 156.669 36.0895 156.637 37.0174L158.749 37.0259V36.8298V36.7934Z' fill='%23FF6441'/> </svg>")` | Short brand logo (without the brand name) in SVG format. Used in mc-top-bar component. |
| `mds_brand_appearance_static_logo-short_width` | `160px` | Width of the short brand logo. |
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
| `mds_brand_appearance_state_neutral_default_hover_background-color` | `rgb(36,36,42)` | Neutral default hover background color. Use it for neutral elements that require a hover state. |
| `mds_brand_appearance_state_neutral_default_hover_border-color` | `rgb(177,177,181)` | Neutral default hover border color. Use it for neutral elements that require a hover state. |
| `mds_brand_appearance_state_neutral_default_active_background-color` | `rgb(48,48,56)` | Neutral default active background color. Use it for neutral elements that require an active state. |
| `mds_brand_appearance_state_neutral_default_active_border-color` | `rgb(216,216,218)` | Neutral default active border color. Use it for neutral elements that require an active state. |
| `mds_brand_appearance_state_neutral_weakest_opacity_hover_background-color` | `rgba(255,255,255,0.12)` | Neutral weakest hover background color. Use it for neutral elements that require a subtle hover effect. |
| `mds_brand_appearance_state_neutral_weakest_opacity_active_background-color` | `rgba(255,255,255,0.2)` | Neutral weakest active background color. Use it for neutral elements that require a subtle active effect. |
| `mds_brand_appearance_state_neutral_weak_opacity_hover_background-color` | `rgba(255,255,255,0.24)` | Neutral weak hover background color. Use it for neutral elements that require a more pronounced hover effect. |
| `mds_brand_appearance_state_neutral_weak_opacity_active_background-color` | `rgba(255,255,255,0.32)` | Neutral weak active background color. Use it for neutral elements that require a more pronounced active effect. |
| `mds_brand_appearance_state_neutral_strongest_hover_background-color` | `rgb(177,177,181)` | Neutral strongest hover background color. Use it for neutral elements that require a strong hover effect. |
| `mds_brand_appearance_state_neutral_strongest_active_background-color` | `rgb(216,216,218)` | Neutral strongest active background color. Use it for neutral elements that require a strong active effect. |
| `mds_brand_appearance_state_neutral_inverse_opacity_hover_background-color` | `rgba(60,60,70,0.08)` | Neutral inverse hover background color. Use it for neutral elements that require a subtle hover effect on dark backgrounds. |
| `mds_brand_appearance_state_neutral_inverse_opacity_active_background-color` | `rgba(60,60,70,0.2)` | Neutral inverse active background color. Use it for neutral elements that require a subtle active effect on dark backgrounds. |
| `mds_brand_appearance_state_primary_default_hover_background-color` | `rgb(255,96,0)` | Primary default hover background color. Use it for primary elements that require a hover state. |
| `mds_brand_appearance_state_primary_default_hover_border-color` | `rgb(255,96,0)` | Primary default hover border color. Use it for primary elements that require a hover state. |
| `mds_brand_appearance_state_primary_default_active_background-color` | `rgb(204,77,0)` | Primary default active background color. Use it for primary elements that require an active state. |
| `mds_brand_appearance_state_primary_default_active_border-color` | `rgb(204,77,0)` | Primary default active border color. Use it for primary elements that require an active state. |
| `mds_brand_appearance_state_primary_weakest_opacity_hover_background-color` | `rgba(255,128,51,0.14)` | Primary weakest hover background color. Use it for primary elements that require a subtle hover effect. |
| `mds_brand_appearance_state_primary_weakest_opacity_active_background-color` | `rgba(255,128,51,0.22)` | Primary weakest active background color. Use it for primary elements that require a subtle active effect. |
| `mds_brand_appearance_state_secondary_default_hover_background-color` | `rgb(10,110,130)` | Secondary default hover background color. Use it for secondary elements that require a hover state. |
| `mds_brand_appearance_state_secondary_default_active_background-color` | `rgb(8,88,104)` | Secondary default active background color. Use it for secondary elements that require an active state. |
| `mds_brand_appearance_state_secondary_weakest_opacity_hover_background-color` | `rgba(59, 139, 155, 0.2)` | Secondary weakest hover background color. Use it for secondary elements that require a subtle hover effect. |
| `mds_brand_appearance_state_secondary_weakest_opacity_active_background-color` | `rgba(59, 139, 155, 0.28)` | Secondary weakest active background color. Use it for secondary elements that require a subtle active effect. |
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
| `mds_brand_appearance_state_focus_border-color` | `rgb(108,168,180)` | Focus border color. Use it to indicate focus state on elements. |
| `mds_brand_appearance_state_focus_default_shadow_offset-x` | `0px` | Focus shadow horizontal offset. Use it to position the shadow slightly to the right. |
| `mds_brand_appearance_state_focus_default_shadow_offset-y` | `0px` | Focus shadow vertical offset. Use it to position the shadow slightly below the element. |
| `mds_brand_appearance_state_focus_default_shadow_blur-radius` | `0px` | Focus shadow blur radius. Use it to create a soft shadow effect. |
| `mds_brand_appearance_state_focus_default_shadow_spread-radius` | `3px` | Focus shadow spread radius. Use it to slightly increase the size of the shadow. |
| `mds_brand_appearance_state_focus_default_shadow_color` | `rgb(8,88,104)` | Focus shadow color. Use it to create a strong focus effect. |
| `mds_brand_appearance_state_focus_vanity_shadow_offset-x` | `0px` | Focus vanity shadow horizontal offset. Use it to position the shadow slightly to the right. |
| `mds_brand_appearance_state_focus_vanity_shadow_offset-y` | `3px` | Focus vanity shadow vertical offset. Use it to position the shadow slightly below the element. |
| `mds_brand_appearance_state_focus_vanity_shadow_blur-radius` | `0px` | Focus vanity shadow blur radius. Use it to create a soft shadow effect. |
| `mds_brand_appearance_state_focus_vanity_shadow_spread-radius` | `0px` | Focus vanity shadow spread radius. Use it to slightly increase the size of the shadow. |
| `mds_brand_appearance_state_focus_vanity_shadow_color` | `rgb(8,88,104)` | Focus vanity shadow color. Use it to create a strong focus effect. |
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
| `mds_brand_appearance_neutral_default_on-background-color` | `rgb(60,60,70)` | Neutral default text color to be used on default background. |
| `mds_brand_appearance_neutral_default_border-color` | `rgb(187,195,207)` | Neutral default border color. |
| `mds_brand_appearance_neutral_default_opacity_border-color` | `rgba(170,180,195,0.8)` | Neutral default border color with opacity. |
| `mds_brand_appearance_neutral_weakest_background-color` | `rgb(245,247,250)` | Neutral weakest background color. |
| `mds_brand_appearance_neutral_weakest_on-background-color` | `rgb(60,60,70)` | Neutral weakest text color to be used on weakest background. |
| `mds_brand_appearance_neutral_weak_background-color` | `rgb(230,235,242)` | Neutral weak background color. |
| `mds_brand_appearance_neutral_weak_on-background-color` | `rgb(60,60,70)` | Neutral weak text color to be used on weak background. |
| `mds_brand_appearance_neutral_weak_border-color` | `rgb(221,225,231)` | Neutral weak border color. |
| `mds_brand_appearance_neutral_weak_opacity_background-color` | `rgba(170,180,195,0.26)` | Neutral weak background color with opacity. |
| `mds_brand_appearance_neutral_strong_background-color` | `rgb(170,180,195)` | Neutral strong background color. |
| `mds_brand_appearance_neutral_strong_on-background-color` | `rgb(60,60,70)` | Neutral strong text color to be used on strong background. |
| `mds_brand_appearance_neutral_strongest_background-color` | `rgb(99,99,107)` | Neutral strongest background color. |
| `mds_brand_appearance_neutral_strongest_on-background-color` | `rgb(255,255,255)` | Neutral strongest text color to be used on strongest background. |
| `mds_brand_appearance_neutral_inverse_background-color` | `rgb(60,60,70)` | Neutral inverse background color. |
| `mds_brand_appearance_neutral_inverse_on-background-color` | `rgb(255,255,255)` | Neutral inverse text color to be used on inverse background. |
| `mds_brand_appearance_neutral_inverse_border-color` | `rgb(255,255,255)` | Neutral inverse border color. |
| `mds_brand_appearance_primary_default_background-color` | `rgb(255,96,0)` | Primary default background color. |
| `mds_brand_appearance_primary_default_on-background-color` | `rgb(255,255,255)` | Primary default text color to be used on default background. |
| `mds_brand_appearance_primary_default_border-color` | `rgb(255,96,0)` | Primary default border color. |
| `mds_brand_appearance_primary_default_link-color` | `rgb(255,96,0)` | Primary default link color. |
| `mds_brand_appearance_primary_weak_background-color` | `rgb(255,239,229)` | Primary weak background color. |
| `mds_brand_appearance_primary_weak_on-background-color` | `rgb(60,60,70)` | Primary weak text color to be used on weak background. |
| `mds_brand_appearance_primary_weak_border-color` | `rgb(255,191,153)` | Primary weak border color. |
| `mds_brand_appearance_secondary_default_background-color` | `rgb(10,110,130)` | Secondary default background color. It's a brand color. Use it sparingly, only in cases where it is needed to highlight important information or actions. |
| `mds_brand_appearance_secondary_default_on-background-color` | `rgb(255,255,255)` | Secondary default text color to be used on default background. It's a brand color. Use it sparingly, only in cases where it is needed to highlight important information or actions. |
| `mds_brand_appearance_secondary_default_border-color` | `rgb(10,110,130)` | Secondary default border color. It's a brand color. Use it sparingly, only in cases where it is needed to highlight important information or actions. |
| `mds_brand_appearance_secondary_weak_background-color` | `rgb(230,240,242)` | Secondary weak background color. |
| `mds_brand_appearance_secondary_weak_on-background-color` | `rgb(60,60,70)` | Secondary weak text color to be used on weak background. |
| `mds_brand_appearance_secondary_weak_border-color` | `rgb(157,197,205)` | Secondary weak border color. |
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
| `mds_brand_appearance_static_dark` | `rgb(60,60,70)` | Dark static color. |
| `mds_brand_appearance_static_light` | `rgb(255,255,255)` | Light static color. |
| `mds_brand_appearance_static_brand` | `rgb(255,96,0)` | Brand static color. Use it to represent the brand identity consistently across UI. |
| `mds_brand_appearance_static_logo_url` | `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='48' viewBox='0 0 160 48' fill='none'> <path d='M28.5668 17.6933V15.0379L48.5308 5.8877V9.40699L28.5668 17.6933Z' fill='%23FF6441'/> <path d='M7.48279 21.0206V22.8762L38.4526 7.32734V4L7.48279 21.0206Z' fill='%23FF6441'/> <path d='M0.0922852 29.4668L17.1769 22.3963V20.2527L0.0922852 28.0591V29.4668Z' fill='%23FF6441'/> <path d='M130.978 19.7089L126.851 29.147H129.25L130.146 27.0994H134.913L135.809 29.147H138.337L134.241 19.7089H130.978ZM130.946 25.2758L132.546 21.6285L134.145 25.2758H130.946ZM100.296 29.147H102.12L104.647 23.836V29.147H106.919V19.7089H104.231L101.224 26.5555L98.2166 19.7089H95.4332V29.147H97.7047V23.836L100.296 29.147ZM46.8669 29.147H48.6905L51.218 23.836V29.147H53.4896V19.7089H50.8021L47.7947 26.5555L44.7873 19.7089H42.0038V29.147H44.2754V23.836L46.8669 29.147ZM81.324 19.7089V21.6605H74.7653V23.5801H80.2362V25.4677H74.7653V27.2274H81.292V29.179H72.3338V19.7409H81.324V19.7089ZM21.8799 19.7089L17.7527 29.147H20.1522L21.048 27.0994H25.8151L26.7109 29.147H29.2384L25.1432 19.7089H21.8799ZM21.8479 25.2758L23.4475 21.6285L25.0472 25.2758H21.8479ZM37.7807 23.996H33.1736V21.5645H37.7807V23.996ZM30.6461 19.7089V29.147H33.1096V25.9476H38.6445C39.3484 25.9476 39.9243 25.5317 39.9882 24.6039V21.0846C39.9882 20.3167 39.3164 19.7089 38.5165 19.7089H30.6461ZM142.4 19.7089H139.936V29.147H148.415V27.1954H142.4V19.7089ZM114.885 19.7089V29.147H117.317V22.6523L122.532 29.147H125.219V19.7089H122.756V26.2036L117.669 19.7089H114.885ZM109.702 29.147H112.07V24.4439V19.7409H109.702V29.147ZM60.2082 19.7089V21.7245H64.0155V29.147H66.5429V21.7245H70.3502V19.7089H60.2082ZM151.518 19.7409C150.814 19.7089 150.142 20.3167 150.142 20.9886V24.06C150.142 24.8598 150.814 25.4357 151.486 25.4357H156.957V27.2594H152.606V26.4915H150.046V27.8032C150.046 28.5071 150.686 29.179 151.422 29.179H158.077C158.749 29.179 159.42 28.6671 159.42 27.7713V24.8278C159.388 23.964 158.749 23.4521 158.045 23.4201H152.67V21.6605H156.893V22.2684H159.292V21.0206C159.324 20.4127 158.717 19.7089 157.917 19.7409H151.555H151.518ZM83.5636 19.7089V29.147H85.9631V25.6917H88.7145L90.5702 29.147H93.1296L91.21 25.6917H91.434C92.1698 25.6277 92.7137 25.0838 92.7137 24.284V21.0846C92.7137 20.3167 92.0419 19.7089 91.242 19.7089H83.5636ZM90.5702 23.804H85.9311V21.6605H90.5702V23.804Z' fill='%233C3C46'/> <path d='M93.8657 38.7771V39.353H90.5383V33.9141H91.2422V38.7771H93.8657Z' fill='%23FF6441'/> <path d='M94.6333 33.8181H95.4011V34.586H94.6333V33.8181ZM94.6653 35.3218H95.3372V39.353H94.6653V35.3218Z' fill='%23FF6441'/> <path d='M99.0804 35.8655H97.6407V39.3848H96.9688V35.8655H96.1689V35.3216H96.9688V35.0017C96.9688 34.2978 97.2567 33.626 98.4085 33.626C98.6325 33.626 98.8884 33.658 99.0484 33.722V34.2658C98.8884 34.2339 98.6644 34.2019 98.4405 34.2019C97.9286 34.2019 97.6087 34.4258 97.6087 35.0337V35.3536H99.0484V35.8655H99.0804Z' fill='%23FF6441'/> <path d='M100.36 38.1692V35.8657H99.6244V35.3218H100.36V34.362L101.032 34.17V35.3218H102.312V35.8657H101.032V38.1692C101.032 38.8091 101.32 38.8731 101.608 38.8731C101.864 38.8731 102.184 38.8091 102.344 38.7451V39.289C102.152 39.353 101.832 39.417 101.48 39.417C100.712 39.449 100.36 39.0651 100.36 38.1692Z' fill='%23FF6441'/> <path d='M103.112 33.8181H103.88V34.586H103.112V33.8181ZM103.176 35.3218H103.848V39.353H103.176V35.3218Z' fill='%23FF6441'/> <path d='M105.032 35.3218H105.607L105.671 35.6737C105.671 35.7377 105.703 35.7377 105.735 35.7377C105.767 35.7377 105.799 35.7377 105.863 35.6737C106.119 35.4818 106.503 35.2578 107.143 35.2578C107.943 35.2578 108.359 35.6097 108.359 36.4416V39.385H107.687V36.6015C107.687 35.9937 107.399 35.8337 106.919 35.8337C106.375 35.8337 105.927 36.0896 105.703 36.2816V39.385H105.032V35.3218Z' fill='%23FF6441'/> <path d='M109.222 39.9608C109.222 39.5129 109.542 39.1289 109.926 38.841C109.606 38.713 109.478 38.521 109.478 38.2331C109.478 37.9772 109.638 37.7532 109.862 37.5932C109.542 37.3693 109.35 36.9854 109.35 36.5694C109.35 35.6416 109.862 35.2257 111.078 35.2257C111.302 35.2257 111.494 35.2577 111.718 35.2897H113.157L113.221 35.6736L112.486 35.7696C112.645 35.9616 112.741 36.2495 112.741 36.5374C112.741 37.4653 112.23 37.8812 111.078 37.8812C110.79 37.8812 110.502 37.8492 110.278 37.7532C110.15 37.8492 110.086 37.9772 110.086 38.1051C110.086 38.2971 110.214 38.3611 110.598 38.4251L112.166 38.745C112.741 38.873 113.029 39.2569 113.029 39.8008C113.029 40.6326 112.454 40.9846 111.11 40.9846C109.798 41.0805 109.222 40.7286 109.222 39.9608ZM112.326 39.9288C112.326 39.5768 112.134 39.3849 111.718 39.2889L110.342 39.001C110.054 39.2889 109.862 39.5448 109.862 39.8328C109.862 40.3127 110.246 40.5367 111.078 40.5367C112.006 40.5367 112.326 40.3767 112.326 39.9288ZM112.07 36.6014C112.07 35.9616 111.814 35.7696 111.078 35.7696C110.31 35.7696 110.022 35.9936 110.022 36.6014C110.022 37.2093 110.31 37.4333 111.046 37.4333C111.782 37.4013 112.07 37.1773 112.07 36.6014Z' fill='%23FF6441'/> <path d='M115.749 36.6334C115.749 34.6178 116.485 33.85 118.18 33.85C118.884 33.85 119.396 33.9779 119.588 34.0739V34.6818C119.396 34.6178 118.884 34.4579 118.212 34.4579C116.836 34.4579 116.453 35.0977 116.453 36.6014C116.453 38.4571 117.06 38.841 117.86 38.841C118.468 38.841 118.884 38.617 119.172 38.489V37.0173H118.02V36.4415H119.844V39.3529H119.3L119.236 39.0649C119.236 39.0329 119.204 38.969 119.172 38.969C119.14 38.969 119.108 38.969 119.044 39.0329C118.884 39.1289 118.372 39.4169 117.732 39.4169C116.548 39.4489 115.749 38.745 115.749 36.6334Z' fill='%23FF6441'/> <path d='M120.964 38.4891V33.6901H121.636V38.3611C121.636 38.7131 121.764 38.873 122.052 38.873C122.212 38.873 122.308 38.873 122.468 38.841V39.3849C122.308 39.4169 122.116 39.4489 121.892 39.4489C121.348 39.4489 120.964 39.129 120.964 38.4891Z' fill='%23FF6441'/> <path d='M123.012 37.3373C123.012 35.8336 123.62 35.2257 124.868 35.2257C126.115 35.2257 126.723 35.8016 126.723 37.3373C126.723 38.873 126.115 39.4489 124.868 39.4489C123.62 39.4489 123.012 38.873 123.012 37.3373ZM126.019 37.3373C126.019 36.2175 125.667 35.8016 124.868 35.8016C124.036 35.8016 123.716 36.2175 123.716 37.3373C123.716 38.4571 124.036 38.873 124.868 38.873C125.699 38.873 126.019 38.4571 126.019 37.3373Z' fill='%23FF6441'/> <path d='M127.747 39.161V33.6901H128.419V35.7057C128.579 35.6097 129.09 35.2578 129.73 35.2578C130.626 35.2578 131.266 35.6417 131.266 37.3053C131.266 38.937 130.69 39.4809 129.378 39.4809C128.611 39.4489 128.099 39.2889 127.747 39.161ZM130.562 37.3053C130.562 36.1536 130.242 35.8336 129.57 35.8336C128.994 35.8336 128.611 36.0896 128.419 36.2176V38.7451C128.611 38.809 128.898 38.905 129.378 38.905C130.114 38.873 130.562 38.5531 130.562 37.3053Z' fill='%23FF6441'/> <path d='M132.066 38.3291C132.066 37.6252 132.418 37.3693 133.346 37.1133L134.594 36.7294V36.5374C134.594 36.1535 134.402 35.8016 133.634 35.8016C133.058 35.8016 132.61 35.9616 132.354 36.0575V35.4817C132.674 35.3537 133.122 35.2257 133.73 35.2257C134.786 35.2257 135.266 35.7056 135.266 36.5374V39.3529H134.69L134.626 39.001C134.626 38.937 134.594 38.937 134.562 38.937C134.53 38.937 134.498 38.937 134.466 38.969C134.242 39.1289 133.73 39.4169 133.186 39.4169C132.386 39.4489 132.066 39.0969 132.066 38.3291ZM134.562 38.5211V37.2413L133.378 37.5932C132.834 37.7532 132.706 37.9132 132.706 38.2971C132.706 38.713 132.866 38.905 133.314 38.905C133.794 38.905 134.242 38.681 134.562 38.5211Z' fill='%23FF6441'/> <path d='M136.385 38.4891V33.6901H137.057V38.3611C137.057 38.7131 137.185 38.873 137.473 38.873C137.633 38.873 137.728 38.873 137.888 38.841V39.3849C137.728 39.4169 137.537 39.4489 137.313 39.4489C136.769 39.4489 136.385 39.129 136.385 38.4891Z' fill='%23FF6441'/> <path d='M141.952 34.4899H140.224V33.9141H144.352V34.4899H142.624V39.353H141.92V34.4899H141.952Z' fill='%23FF6441'/> <path d='M144.511 35.3218H145.087L145.151 35.7377C145.151 35.8017 145.183 35.8337 145.215 35.8337C145.247 35.8337 145.279 35.8337 145.311 35.7697C145.567 35.5458 145.983 35.2578 146.527 35.2578C146.591 35.2578 146.687 35.2578 146.751 35.2898V35.8977C146.239 35.8657 145.663 36.0257 145.215 36.3776V39.385H144.543V35.3218H144.511Z' fill='%23FF6441'/> <path d='M147.295 38.3291C147.295 37.6252 147.647 37.3693 148.575 37.1133L149.823 36.7294V36.5374C149.823 36.1535 149.631 35.8016 148.863 35.8016C148.287 35.8016 147.839 35.9616 147.583 36.0575V35.4817C147.903 35.3537 148.351 35.2257 148.959 35.2257C150.015 35.2257 150.494 35.7056 150.494 36.5374V39.3529H149.919L149.855 39.001C149.855 38.937 149.823 38.937 149.791 38.937C149.759 38.937 149.727 38.937 149.695 38.969C149.471 39.1289 148.959 39.4169 148.415 39.4169C147.647 39.4489 147.295 39.0969 147.295 38.3291ZM149.823 38.5211V37.2413L148.639 37.5932C148.095 37.7532 147.967 37.9132 147.967 38.2971C147.967 38.713 148.127 38.905 148.575 38.905C149.055 38.905 149.503 38.681 149.823 38.5211Z' fill='%23FF6441'/> <path d='M151.454 37.3373C151.454 35.7697 152.126 35.2258 153.214 35.2258C153.693 35.2258 154.045 35.3217 154.301 35.4817V33.6901H154.973V39.3529H154.397L154.333 39.001C154.333 38.969 154.301 38.937 154.269 38.937C154.237 38.937 154.237 38.937 154.205 38.969C154.045 39.129 153.597 39.4169 153.022 39.4169C152.158 39.4489 151.454 38.969 151.454 37.3373ZM154.301 38.4251V35.9936C154.109 35.8976 153.757 35.8016 153.341 35.8016C152.51 35.8016 152.158 36.1856 152.158 37.3373C152.158 38.4891 152.574 38.873 153.182 38.873C153.661 38.873 154.109 38.5851 154.301 38.4251Z' fill='%23FF6441'/> <path d='M159.389 37.4973H156.669C156.701 38.4891 157.085 38.841 157.917 38.841C158.525 38.841 159.005 38.649 159.293 38.5211V39.1289C159.037 39.2569 158.589 39.4169 157.885 39.4169C156.541 39.4169 156.029 38.713 156.029 37.2093C156.029 35.7376 156.637 35.2257 157.789 35.2257C158.909 35.2257 159.421 35.8016 159.421 36.9214V37.4973H159.389ZM158.749 36.7934C158.749 36.1215 158.429 35.8016 157.725 35.8016C156.989 35.8016 156.669 36.0895 156.637 37.0174L158.749 37.0259V36.8298V36.7934Z' fill='%23FF6441'/> </svg>")` | Full brand logo in SVG format. Used in mc-top-bar component. |
| `mds_brand_appearance_static_logo_width` | `160px` | Width of the full brand logo. |
| `mds_brand_appearance_static_logo-short_url` | `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='48' viewBox='0 0 160 48' fill='none'> <path d='M28.5668 17.6933V15.0379L48.5308 5.8877V9.40699L28.5668 17.6933Z' fill='%23FF6441'/> <path d='M7.48279 21.0206V22.8762L38.4526 7.32734V4L7.48279 21.0206Z' fill='%23FF6441'/> <path d='M0.0922852 29.4668L17.1769 22.3963V20.2527L0.0922852 28.0591V29.4668Z' fill='%23FF6441'/> <path d='M130.978 19.7089L126.851 29.147H129.25L130.146 27.0994H134.913L135.809 29.147H138.337L134.241 19.7089H130.978ZM130.946 25.2758L132.546 21.6285L134.145 25.2758H130.946ZM100.296 29.147H102.12L104.647 23.836V29.147H106.919V19.7089H104.231L101.224 26.5555L98.2166 19.7089H95.4332V29.147H97.7047V23.836L100.296 29.147ZM46.8669 29.147H48.6905L51.218 23.836V29.147H53.4896V19.7089H50.8021L47.7947 26.5555L44.7873 19.7089H42.0038V29.147H44.2754V23.836L46.8669 29.147ZM81.324 19.7089V21.6605H74.7653V23.5801H80.2362V25.4677H74.7653V27.2274H81.292V29.179H72.3338V19.7409H81.324V19.7089ZM21.8799 19.7089L17.7527 29.147H20.1522L21.048 27.0994H25.8151L26.7109 29.147H29.2384L25.1432 19.7089H21.8799ZM21.8479 25.2758L23.4475 21.6285L25.0472 25.2758H21.8479ZM37.7807 23.996H33.1736V21.5645H37.7807V23.996ZM30.6461 19.7089V29.147H33.1096V25.9476H38.6445C39.3484 25.9476 39.9243 25.5317 39.9882 24.6039V21.0846C39.9882 20.3167 39.3164 19.7089 38.5165 19.7089H30.6461ZM142.4 19.7089H139.936V29.147H148.415V27.1954H142.4V19.7089ZM114.885 19.7089V29.147H117.317V22.6523L122.532 29.147H125.219V19.7089H122.756V26.2036L117.669 19.7089H114.885ZM109.702 29.147H112.07V24.4439V19.7409H109.702V29.147ZM60.2082 19.7089V21.7245H64.0155V29.147H66.5429V21.7245H70.3502V19.7089H60.2082ZM151.518 19.7409C150.814 19.7089 150.142 20.3167 150.142 20.9886V24.06C150.142 24.8598 150.814 25.4357 151.486 25.4357H156.957V27.2594H152.606V26.4915H150.046V27.8032C150.046 28.5071 150.686 29.179 151.422 29.179H158.077C158.749 29.179 159.42 28.6671 159.42 27.7713V24.8278C159.388 23.964 158.749 23.4521 158.045 23.4201H152.67V21.6605H156.893V22.2684H159.292V21.0206C159.324 20.4127 158.717 19.7089 157.917 19.7409H151.555H151.518ZM83.5636 19.7089V29.147H85.9631V25.6917H88.7145L90.5702 29.147H93.1296L91.21 25.6917H91.434C92.1698 25.6277 92.7137 25.0838 92.7137 24.284V21.0846C92.7137 20.3167 92.0419 19.7089 91.242 19.7089H83.5636ZM90.5702 23.804H85.9311V21.6605H90.5702V23.804Z' fill='%233C3C46'/> <path d='M93.8657 38.7771V39.353H90.5383V33.9141H91.2422V38.7771H93.8657Z' fill='%23FF6441'/> <path d='M94.6333 33.8181H95.4011V34.586H94.6333V33.8181ZM94.6653 35.3218H95.3372V39.353H94.6653V35.3218Z' fill='%23FF6441'/> <path d='M99.0804 35.8655H97.6407V39.3848H96.9688V35.8655H96.1689V35.3216H96.9688V35.0017C96.9688 34.2978 97.2567 33.626 98.4085 33.626C98.6325 33.626 98.8884 33.658 99.0484 33.722V34.2658C98.8884 34.2339 98.6644 34.2019 98.4405 34.2019C97.9286 34.2019 97.6087 34.4258 97.6087 35.0337V35.3536H99.0484V35.8655H99.0804Z' fill='%23FF6441'/> <path d='M100.36 38.1692V35.8657H99.6244V35.3218H100.36V34.362L101.032 34.17V35.3218H102.312V35.8657H101.032V38.1692C101.032 38.8091 101.32 38.8731 101.608 38.8731C101.864 38.8731 102.184 38.8091 102.344 38.7451V39.289C102.152 39.353 101.832 39.417 101.48 39.417C100.712 39.449 100.36 39.0651 100.36 38.1692Z' fill='%23FF6441'/> <path d='M103.112 33.8181H103.88V34.586H103.112V33.8181ZM103.176 35.3218H103.848V39.353H103.176V35.3218Z' fill='%23FF6441'/> <path d='M105.032 35.3218H105.607L105.671 35.6737C105.671 35.7377 105.703 35.7377 105.735 35.7377C105.767 35.7377 105.799 35.7377 105.863 35.6737C106.119 35.4818 106.503 35.2578 107.143 35.2578C107.943 35.2578 108.359 35.6097 108.359 36.4416V39.385H107.687V36.6015C107.687 35.9937 107.399 35.8337 106.919 35.8337C106.375 35.8337 105.927 36.0896 105.703 36.2816V39.385H105.032V35.3218Z' fill='%23FF6441'/> <path d='M109.222 39.9608C109.222 39.5129 109.542 39.1289 109.926 38.841C109.606 38.713 109.478 38.521 109.478 38.2331C109.478 37.9772 109.638 37.7532 109.862 37.5932C109.542 37.3693 109.35 36.9854 109.35 36.5694C109.35 35.6416 109.862 35.2257 111.078 35.2257C111.302 35.2257 111.494 35.2577 111.718 35.2897H113.157L113.221 35.6736L112.486 35.7696C112.645 35.9616 112.741 36.2495 112.741 36.5374C112.741 37.4653 112.23 37.8812 111.078 37.8812C110.79 37.8812 110.502 37.8492 110.278 37.7532C110.15 37.8492 110.086 37.9772 110.086 38.1051C110.086 38.2971 110.214 38.3611 110.598 38.4251L112.166 38.745C112.741 38.873 113.029 39.2569 113.029 39.8008C113.029 40.6326 112.454 40.9846 111.11 40.9846C109.798 41.0805 109.222 40.7286 109.222 39.9608ZM112.326 39.9288C112.326 39.5768 112.134 39.3849 111.718 39.2889L110.342 39.001C110.054 39.2889 109.862 39.5448 109.862 39.8328C109.862 40.3127 110.246 40.5367 111.078 40.5367C112.006 40.5367 112.326 40.3767 112.326 39.9288ZM112.07 36.6014C112.07 35.9616 111.814 35.7696 111.078 35.7696C110.31 35.7696 110.022 35.9936 110.022 36.6014C110.022 37.2093 110.31 37.4333 111.046 37.4333C111.782 37.4013 112.07 37.1773 112.07 36.6014Z' fill='%23FF6441'/> <path d='M115.749 36.6334C115.749 34.6178 116.485 33.85 118.18 33.85C118.884 33.85 119.396 33.9779 119.588 34.0739V34.6818C119.396 34.6178 118.884 34.4579 118.212 34.4579C116.836 34.4579 116.453 35.0977 116.453 36.6014C116.453 38.4571 117.06 38.841 117.86 38.841C118.468 38.841 118.884 38.617 119.172 38.489V37.0173H118.02V36.4415H119.844V39.3529H119.3L119.236 39.0649C119.236 39.0329 119.204 38.969 119.172 38.969C119.14 38.969 119.108 38.969 119.044 39.0329C118.884 39.1289 118.372 39.4169 117.732 39.4169C116.548 39.4489 115.749 38.745 115.749 36.6334Z' fill='%23FF6441'/> <path d='M120.964 38.4891V33.6901H121.636V38.3611C121.636 38.7131 121.764 38.873 122.052 38.873C122.212 38.873 122.308 38.873 122.468 38.841V39.3849C122.308 39.4169 122.116 39.4489 121.892 39.4489C121.348 39.4489 120.964 39.129 120.964 38.4891Z' fill='%23FF6441'/> <path d='M123.012 37.3373C123.012 35.8336 123.62 35.2257 124.868 35.2257C126.115 35.2257 126.723 35.8016 126.723 37.3373C126.723 38.873 126.115 39.4489 124.868 39.4489C123.62 39.4489 123.012 38.873 123.012 37.3373ZM126.019 37.3373C126.019 36.2175 125.667 35.8016 124.868 35.8016C124.036 35.8016 123.716 36.2175 123.716 37.3373C123.716 38.4571 124.036 38.873 124.868 38.873C125.699 38.873 126.019 38.4571 126.019 37.3373Z' fill='%23FF6441'/> <path d='M127.747 39.161V33.6901H128.419V35.7057C128.579 35.6097 129.09 35.2578 129.73 35.2578C130.626 35.2578 131.266 35.6417 131.266 37.3053C131.266 38.937 130.69 39.4809 129.378 39.4809C128.611 39.4489 128.099 39.2889 127.747 39.161ZM130.562 37.3053C130.562 36.1536 130.242 35.8336 129.57 35.8336C128.994 35.8336 128.611 36.0896 128.419 36.2176V38.7451C128.611 38.809 128.898 38.905 129.378 38.905C130.114 38.873 130.562 38.5531 130.562 37.3053Z' fill='%23FF6441'/> <path d='M132.066 38.3291C132.066 37.6252 132.418 37.3693 133.346 37.1133L134.594 36.7294V36.5374C134.594 36.1535 134.402 35.8016 133.634 35.8016C133.058 35.8016 132.61 35.9616 132.354 36.0575V35.4817C132.674 35.3537 133.122 35.2257 133.73 35.2257C134.786 35.2257 135.266 35.7056 135.266 36.5374V39.3529H134.69L134.626 39.001C134.626 38.937 134.594 38.937 134.562 38.937C134.53 38.937 134.498 38.937 134.466 38.969C134.242 39.1289 133.73 39.4169 133.186 39.4169C132.386 39.4489 132.066 39.0969 132.066 38.3291ZM134.562 38.5211V37.2413L133.378 37.5932C132.834 37.7532 132.706 37.9132 132.706 38.2971C132.706 38.713 132.866 38.905 133.314 38.905C133.794 38.905 134.242 38.681 134.562 38.5211Z' fill='%23FF6441'/> <path d='M136.385 38.4891V33.6901H137.057V38.3611C137.057 38.7131 137.185 38.873 137.473 38.873C137.633 38.873 137.728 38.873 137.888 38.841V39.3849C137.728 39.4169 137.537 39.4489 137.313 39.4489C136.769 39.4489 136.385 39.129 136.385 38.4891Z' fill='%23FF6441'/> <path d='M141.952 34.4899H140.224V33.9141H144.352V34.4899H142.624V39.353H141.92V34.4899H141.952Z' fill='%23FF6441'/> <path d='M144.511 35.3218H145.087L145.151 35.7377C145.151 35.8017 145.183 35.8337 145.215 35.8337C145.247 35.8337 145.279 35.8337 145.311 35.7697C145.567 35.5458 145.983 35.2578 146.527 35.2578C146.591 35.2578 146.687 35.2578 146.751 35.2898V35.8977C146.239 35.8657 145.663 36.0257 145.215 36.3776V39.385H144.543V35.3218H144.511Z' fill='%23FF6441'/> <path d='M147.295 38.3291C147.295 37.6252 147.647 37.3693 148.575 37.1133L149.823 36.7294V36.5374C149.823 36.1535 149.631 35.8016 148.863 35.8016C148.287 35.8016 147.839 35.9616 147.583 36.0575V35.4817C147.903 35.3537 148.351 35.2257 148.959 35.2257C150.015 35.2257 150.494 35.7056 150.494 36.5374V39.3529H149.919L149.855 39.001C149.855 38.937 149.823 38.937 149.791 38.937C149.759 38.937 149.727 38.937 149.695 38.969C149.471 39.1289 148.959 39.4169 148.415 39.4169C147.647 39.4489 147.295 39.0969 147.295 38.3291ZM149.823 38.5211V37.2413L148.639 37.5932C148.095 37.7532 147.967 37.9132 147.967 38.2971C147.967 38.713 148.127 38.905 148.575 38.905C149.055 38.905 149.503 38.681 149.823 38.5211Z' fill='%23FF6441'/> <path d='M151.454 37.3373C151.454 35.7697 152.126 35.2258 153.214 35.2258C153.693 35.2258 154.045 35.3217 154.301 35.4817V33.6901H154.973V39.3529H154.397L154.333 39.001C154.333 38.969 154.301 38.937 154.269 38.937C154.237 38.937 154.237 38.937 154.205 38.969C154.045 39.129 153.597 39.4169 153.022 39.4169C152.158 39.4489 151.454 38.969 151.454 37.3373ZM154.301 38.4251V35.9936C154.109 35.8976 153.757 35.8016 153.341 35.8016C152.51 35.8016 152.158 36.1856 152.158 37.3373C152.158 38.4891 152.574 38.873 153.182 38.873C153.661 38.873 154.109 38.5851 154.301 38.4251Z' fill='%23FF6441'/> <path d='M159.389 37.4973H156.669C156.701 38.4891 157.085 38.841 157.917 38.841C158.525 38.841 159.005 38.649 159.293 38.5211V39.1289C159.037 39.2569 158.589 39.4169 157.885 39.4169C156.541 39.4169 156.029 38.713 156.029 37.2093C156.029 35.7376 156.637 35.2257 157.789 35.2257C158.909 35.2257 159.421 35.8016 159.421 36.9214V37.4973H159.389ZM158.749 36.7934C158.749 36.1215 158.429 35.8016 157.725 35.8016C156.989 35.8016 156.669 36.0895 156.637 37.0174L158.749 37.0259V36.8298V36.7934Z' fill='%23FF6441'/> </svg>")` | Short brand logo (without the brand name) in SVG format. Used in mc-top-bar component. |
| `mds_brand_appearance_static_logo-short_width` | `160px` | Width of the short brand logo. |
| `mds_brand_appearance_opacity_default_10` | `rgba(255, 255, 255, 0.1)` | Default opacity 10% for white background. Use it to create a semi-transparent effect. |
| `mds_brand_appearance_opacity_default_30` | `rgba(255, 255, 255, 0.3)` | Default opacity 30% for white background. Use it to create a semi-transparent effect. |
| `mds_brand_appearance_opacity_default_50` | `rgba(255, 255, 255, 0.5)` | Default opacity 50% for white background. Use it to create a semi-transparent effect. |
| `mds_brand_appearance_opacity_default_70` | `rgba(255, 255, 255, 0.7)` | Default opacity 70% for white background. Use it to create a semi-transparent effect. |
| `mds_brand_appearance_opacity_default_90` | `rgba(255, 255, 255, 0.9)` | Default opacity 90% for white background. Use it to create a semi-transparent effect. |
| `mds_brand_appearance_opacity_inverse_10` | `rgba(60, 60, 70, 0.1)` | Inverse opacity 10% for dark background. Use it to create a semi-transparent effect. |
| `mds_brand_appearance_opacity_inverse_30` | `rgba(60, 60, 70, 0.3)` | Inverse opacity 30% for dark background. Use it to create a semi-transparent effect. |
| `mds_brand_appearance_opacity_inverse_50` | `rgba(60, 60, 70, 0.5)` | Inverse opacity 50% for dark background. Use it to create a semi-transparent effect. |
| `mds_brand_appearance_opacity_inverse_70` | `rgba(60, 60, 70, 0.7)` | Inverse opacity 70% for dark background. Use it to create a semi-transparent effect. |
| `mds_brand_appearance_opacity_inverse_90` | `rgba(60, 60, 70, 0.9)` | Inverse opacity 90% for dark background. Use it to create a semi-transparent effect. |
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
| `mds_brand_appearance_state_neutral_default_hover_background-color` | `rgb(238,240,243)` | Neutral default hover background color. Use it for neutral elements that require a hover state. |
| `mds_brand_appearance_state_neutral_default_hover_border-color` | `rgb(170,180,195)` | Neutral default hover border color. Use it for neutral elements that require a hover state. |
| `mds_brand_appearance_state_neutral_default_active_background-color` | `rgb(187,195,207)` | Neutral default active background color. Use it for neutral elements that require an active state. |
| `mds_brand_appearance_state_neutral_default_active_border-color` | `rgb(90,110,125)` | Neutral default active border color. Use it for neutral elements that require an active state. |
| `mds_brand_appearance_state_neutral_weakest_opacity_hover_background-color` | `rgba(170,180,195,0.16)` | Neutral weakest hover background color. Use it for neutral elements that require a subtle hover effect. |
| `mds_brand_appearance_state_neutral_weakest_opacity_active_background-color` | `rgba(170,180,195,0.24)` | Neutral weakest active background color. Use it for neutral elements that require a subtle active effect. |
| `mds_brand_appearance_state_neutral_weak_opacity_hover_background-color` | `rgba(170,180,195,0.36)` | Neutral weak hover background color. Use it for neutral elements that require a more pronounced hover effect. |
| `mds_brand_appearance_state_neutral_weak_opacity_active_background-color` | `rgba(170,180,195,0.48)` | Neutral weak active background color. Use it for neutral elements that require a more pronounced active effect. |
| `mds_brand_appearance_state_neutral_strongest_hover_background-color` | `rgb(60,60,70)` | Neutral strongest hover background color. Use it for neutral elements that require a strong hover effect. |
| `mds_brand_appearance_state_neutral_strongest_active_background-color` | `rgb(99,99,107)` | Neutral strongest active background color. Use it for neutral elements that require a strong active effect. |
| `mds_brand_appearance_state_neutral_inverse_opacity_hover_background-color` | `rgba(255,255,255,0.12)` | Neutral inverse hover background color. Use it for neutral elements that require a subtle hover effect on dark backgrounds. |
| `mds_brand_appearance_state_neutral_inverse_opacity_active_background-color` | `rgba(255,255,255,0.2)` | Neutral inverse active background color. Use it for neutral elements that require a subtle active effect on dark backgrounds. |
| `mds_brand_appearance_state_primary_default_hover_background-color` | `rgb(230,86,0)` | Primary default hover background color. Use it for primary elements that require a hover state. |
| `mds_brand_appearance_state_primary_default_hover_border-color` | `rgb(255,96,0)` | Primary default hover border color. Use it for primary elements that require a hover state. |
| `mds_brand_appearance_state_primary_default_active_background-color` | `rgb(204,77,0)` | Primary default active background color. Use it for primary elements that require an active state. |
| `mds_brand_appearance_state_primary_default_active_border-color` | `rgb(204,77,0)` | Primary default active border color. Use it for primary elements that require an active state. |
| `mds_brand_appearance_state_primary_weakest_opacity_hover_background-color` | `rgba(255,96,0,0.14)` | Primary weakest hover background color. Use it for primary elements that require a subtle hover effect. |
| `mds_brand_appearance_state_primary_weakest_opacity_active_background-color` | `rgba(255,96,0,0.22)` | Primary weakest active background color. Use it for primary elements that require a subtle active effect. |
| `mds_brand_appearance_state_secondary_default_hover_background-color` | `rgb(9,99,117)` | Secondary default hover background color. Use it for secondary elements that require a hover state. |
| `mds_brand_appearance_state_secondary_default_active_background-color` | `rgb(8,88,104)` | Secondary default active background color. Use it for secondary elements that require an active state. |
| `mds_brand_appearance_state_secondary_weakest_opacity_hover_background-color` | `rgba(10,110,130,0.08)` | Secondary weakest hover background color. Use it for secondary elements that require a subtle hover effect. |
| `mds_brand_appearance_state_secondary_weakest_opacity_active_background-color` | `rgba(10,110,130,0.14)` | Secondary weakest active background color. Use it for secondary elements that require a subtle active effect. |
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
| `mds_brand_appearance_state_focus_border-color` | `rgb(10,110,130)` | Focus border color. Use it to indicate focus state on elements. |
| `mds_brand_appearance_state_focus_default_shadow_offset-x` | `0px` | Focus shadow horizontal offset. Use it to position the shadow slightly to the right. |
| `mds_brand_appearance_state_focus_default_shadow_offset-y` | `0px` | Focus shadow vertical offset. Use it to position the shadow slightly below the element. |
| `mds_brand_appearance_state_focus_default_shadow_blur-radius` | `0px` | Focus shadow blur radius. Use it to create a soft shadow effect. |
| `mds_brand_appearance_state_focus_default_shadow_spread-radius` | `3px` | Focus shadow spread radius. Use it to slightly increase the size of the shadow. |
| `mds_brand_appearance_state_focus_default_shadow_color` | `rgb(157,197,205)` | Focus shadow color. Use it to create a strong focus effect. |
| `mds_brand_appearance_state_focus_vanity_shadow_offset-x` | `0px` | Focus vanity shadow horizontal offset. Use it to position the shadow slightly to the right. |
| `mds_brand_appearance_state_focus_vanity_shadow_offset-y` | `3px` | Focus vanity shadow vertical offset. Use it to position the shadow slightly below the element. |
| `mds_brand_appearance_state_focus_vanity_shadow_blur-radius` | `0px` | Focus vanity shadow blur radius. Use it to create a soft shadow effect. |
| `mds_brand_appearance_state_focus_vanity_shadow_spread-radius` | `0px` | Focus vanity shadow spread radius. Use it to slightly increase the size of the shadow. |
| `mds_brand_appearance_state_focus_vanity_shadow_color` | `rgb(157,197,205)` | Focus vanity shadow color. Use it to create a strong focus effect. |
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
| `mds_brand_typography_headline_font-family` | `Maersk Text` | The font family used for headlines. |
| `mds_brand_typography_headline_font-family-fallback` | `Arial,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Apple SD Gothic Neo,Malgun Gothic,PingFang TC,Microsoft JhengHei,PingFang SC,Microsoft YaHei,Hiragino Kaku Gothic ProN,Meiryo,sans-serif` | The fallback font family used for headlines. |
| `mds_brand_typography_headline_x-small_font-style` | `normal` | The font style used for x-small headlines. |
| `mds_brand_typography_headline_x-small_font-weight` | `300px` | The font weight used for x-small headlines. |
| `mds_brand_typography_headline_x-small_text-transform` | `none` | The text transformation applied to x-small headlines. |
| `mds_brand_typography_headline_x-small_desktop_font-size` | `20px` | The font size used for x-small headlines on desktop. |
| `mds_brand_typography_headline_x-small_desktop_line-height` | `24px` | The line height used for x-small headlines on desktop. |
| `mds_brand_typography_headline_x-small_mobile_font-size` | `20px` | The font size used for x-small headlines on mobile. |
| `mds_brand_typography_headline_x-small_mobile_line-height` | `24px` | The line height used for x-small headlines on mobile. |
| `mds_brand_typography_headline_small_font-style` | `normal` | The font style used for small headlines. |
| `mds_brand_typography_headline_small_font-weight` | `300px` | The font weight used for small headlines. |
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
| `mds_brand_appearance_neutral_default_text-color` | `rgb(60,60,70)` | Neutral default text color. |
| `mds_brand_appearance_neutral_weakest_text-color` | `rgb(138,138,144)` | Neutral weakest text color. |
| `mds_brand_appearance_neutral_weak_text-color` | `rgb(99,99,107)` | Neutral weak text color. |
| `mds_brand_appearance_neutral_inverse_text-color` | `rgb(255,255,255)` | Neutral inverse text color. |
| `mds_brand_appearance_primary_default_text-color` | `rgb(255,96,0)` | Primary default text color. |
| `mds_brand_appearance_secondary_default_text-color` | `rgb(10,110,130)` | Secondary default text color. It's a brand color. Use it sparingly, only in cases where it is needed to highlight important information or actions. |
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

