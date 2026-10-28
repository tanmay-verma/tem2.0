# mc-button

Guidance for using button actions in the Maersk Design System, including when to use buttons versus related components, how to establish clear action hierarchy with filled, outlined, and plain variants, and how to apply appearance, fit, shape, icon, badge, and full-width choices by context. Covers key patterns for forms, contained surfaces, repetitive actions, and empty states, plus content writing, interaction states, and accessibility requirements such as icon-only labels, keyboard activation, and feedback for disabled or loading states.

**Url:** https://designsystem.maersk.com/components/button/
**Alternative names:** submit button, action button, command button, icon button, save button, cancel button, confirm button, delete button
**Keywords:** component, form, appearance, style, variant, filled, outlined, plain, primary, secondary, tertiary, link, destructive, inverse, rounded, icon-only, leading icon, trailing icon, badge, full-width, hierarchy, prominence, emphasis, neutral
**✅ When to use:** Use a button for actions that change data or confirm outcomes., Use a button for actions that do not navigate away., Use a button for related task actions such as cancel or reset.
**❌ When not to use:** Use a link instead of a button for page or URL navigation., Use a link button for navigation that should look like a button., Use a split button when one trigger needs a primary and alternate actions., Use a menu when multiple actions are hidden behind one trigger., Use a button group for related toggle or selection actions in one row.

## Do's

- use one filled button as the primary action in a visible action group. Context: standard page actions. Setup: filled Submit booking plus outlined Save draft. Why: preserves a clear focal action.
- in modals, cards, and side panels, use neutral filled for secondary actions. Context: contained footer actions. Setup: primary filled Approve plus neutral filled Cancel. Why: avoids border-on-border noise while retaining hierarchy.
- use regular button shape in form footers and table action rows. Context: dense toolbar and action-row layouts. Setup: all icon buttons share default shape. Why: consistent shape language improves scannability and hierarchy.
- use a leading icon when it directly identifies the action. Context: labelled action buttons. Setup: Export manifest with leading download icon. Why: supports faster recognition before interaction.
- in open form layouts, place filled primary first and outlined secondary second. Context: standard form footer. Setup: primary left, secondary right. Why: aligns reading and keyboard flow to the main action first.
- write button labels in sentence case with action-first wording. Context: paired form actions. Setup: Submit booking and Cancel labels. Why: improves readability and consistency across interfaces.

## Don'ts

- avoid multiple filled buttons at the same hierarchy level. Context: a single action row. Setup: filled Submit booking and filled Confirm release. Why: equal emphasis weakens primary-action clarity.
- avoid mixing rounded and regular button shapes in the same standard action row. Context: toolbar and footer actions. Setup: mixed icon button shapes. Why: inconsistent shape cues reduce hierarchy clarity.
- avoid decorative icons that do not change action meaning. Context: dense multi-button rows. Setup: generic icon on every button. Why: unnecessary icon density adds noise without improving comprehension.
- avoid placing secondary before primary in standard form footers. Context: open form layout. Setup: secondary left, primary right. Why: reverses expected navigation flow and delays access to the main action.
- avoid all-caps button labels in standard UI contexts. Context: action rows and form footers. Setup: SUBMIT BOOKING and CANCEL labels. Why: all caps increases visual noise and reduces scannability.

## Cautions

- avoid neutral outlined secondary actions in tightly contained footers. Context: modal footer. Setup: primary filled Approve plus neutral outlined Cancel. Why: container and button borders stack visually and reduce clarity.

## Best practices

### Usage guidance
- How to choose variants, shapes, fit, and icons to create a clear action hierarchy.

#### Button variants overview
- The button component has three variants. Each has a different prominence level that controls how much attention the button attracts.
- | Variant | Prominence | Visual weight |
| --- | --- | --- |
| Filled | High | Solid background, maximum contrast. Draws the eye first. |
| Outlined | Medium | Border only, recedes behind filled. Visible but secondary. |
| Plain | Low | Text only, minimal footprint. Present without demanding attention. |

#### Establish action hierarchy
- Most interfaces need three action levels at most. Start from the defaults below and deviate only when the context requires it.
- Limit filled buttons to one per visible action group so the main action stays clear.
- If several actions are equally important, use outlined instead of giving them all filled emphasis.
- Use plain for repetitive or low-emphasis actions that should stay available without dominating the layout.
- Example: Rule: use a three-level hierarchy with one filled primary, one outlined secondary, and one plain tertiary action. Context: standard action groups. Setup: Submit booking, Save draft, Cancel. Why: keeps priority clear without over-emphasizing secondary actions.
- | Level | Appearance | Variant | When to use |
| --- | --- | --- | --- |
| Primary action | Primary | Filled | The single main action per screen or section, such as submit, confirm, or continue. |
| Secondary action | Neutral | Outlined | Supporting or alternative actions, such as save draft, cancel, or go back. |
| Tertiary action | Neutral | Plain | Repetitive or low-emphasis actions, such as reset, clear, or dismiss. |

#### Neutral filled in modals, dialogs, and drawers
- In modals, dialogs, and drawers, use the neutral filled button for the secondary action instead of neutral outlined. The container edge already frames the content, so an outlined border doubles against that edge and adds visual noise. A neutral fill removes the competing border while keeping the action clearly defined.
- The action order is also reversed from forms. In these contained surfaces, the primary action sits on the right. A modal, dialog, or drawer presents a single, focused decision rather than a long entry flow, so the user reads top to bottom and finishes scanning at the bottom-right corner.
- Placing the commit action exactly where attention lands shortens the path from reading the content to confirming it.  In open form layouts the primary sits first, on the left, to optimise reading and keyboard flow into the form.

#### Error filled for destructive actions
- Use the error filled button for irreversible destructive actions: deleting an account, removing a vessel from a schedule, or purging shipment records. The red fill signals danger and forces the user to commit deliberately.
- Pair it with a neutral secondary action (outlined or plain) so users have an obvious escape route. Only use error filled when the consequence is permanent. Reversible or routine actions do not need it.
- Example: Rule: use error filled only for irreversible destructive actions. Context: destructive confirmation dialogs. Setup: error filled Delete account plus neutral Cancel. Why: signals high risk and supports deliberate user commitment.
- Error in outlined or plain dilutes the danger signal without reducing prominence. It creates an unclear middle ground. If an action is destructive enough to need the error colour, use the filled variant.

#### Secondary filled, brand hero exception
- Use the secondary filled button sparingly, only in Maersk-branded hero or stage elements that need stronger brand emphasis. It is an exception for hero contexts, not a general replacement for the primary filled button.
- Example: Rule: use secondary filled as a brand-emphasis exception only in Maersk hero or stage contexts. Context: hero CTA over imagery. Setup: secondary filled CTA. Why: adds branded emphasis without replacing default primary rules elsewhere.

#### Inverse for dark contexts
- Use the inverse variant when buttons sit on dark backgrounds, dark-theme surfaces, or hero sections with dark imagery. Inverse buttons flip the colour relationship so the text and borders remain legible against the dark surface.
- Example: Rule: use inverse button variants on dark surfaces and dark imagery. Context: dark hero backgrounds and dark-theme sections. Setup: inverse filled and inverse outlined actions. Why: preserves contrast and legibility.

#### Use rounded shape deliberately
- Do not use the rounded shape as the default button style or mix rounded and regular buttons in the same action row without a clear semantic difference. In particular, do not use rounded buttons in form footers or table action rows where regular buttons are expected. These rules apply to brands that use the default rectangular button style.
- Example: Rule: use rounded buttons as isolated helper controls, not as default row actions. Context: persistent support affordances outside content flow. Setup: floating rounded Shipment support button. Why: keeps helper access available without competing with task actions.
- Example: Rule: use rounded icon-only buttons for standalone previous and next navigation targets. Context: carousel media navigation. Setup: two rounded icon-only controls. Why: fits isolated directional controls better than standard action-row patterns.
- Rounded buttons work as isolated helper and navigation controls, not standard row actions. Because they are standalone controls, they typically appear alone. They do not form action hierarchies with other rounded buttons. A shipment support helper can stay visible across screens without competing with the main task action. Carousel navigation also works as rounded because the controls are standalone targets, not part of an action row.

#### Buttons with icons
- Add icons only when they clarify the action or outcome. Use a trailing icon only when it reinforces the result, and reserve icon-only buttons for universally understood actions.
- Example: Rule: use icons only when they add meaning to the action. Context: mixed labelled and icon-only actions. Setup: leading icon for Download, trailing icon for Next step, icon-only Delete. Why: icon placement should communicate action type or outcome.
- A button can use two icons when both serve a distinct purpose. Use a leading icon to identify the action and a trailing icon to signal a secondary behaviour such as opening a menu. An icon-only button with two icons works as a compact compound trigger where the combination is universally understood.
- Example: Rule: use two icons only when each has a distinct semantic role. Context: labelled compound trigger. Setup: leading filter icon, Filter label, trailing chevron-down. Why: separates action identity from menu behavior.
- Example: Rule: use icon-only dual-icon triggers only when the combination is widely understood. Context: compact date-picker entry point. Setup: calendar plus chevron-down icon-only button. Why: conveys action plus menu affordance without text.

#### Button with a badge
- Use a badge on a button when the user needs a persistent count or status indicator tied to the action, such as pending documents or unread notifications. The badge should update dynamically and remain visible regardless of the button state.
- Example: Rule: use a badge on a button for persistent status tied to the action. Context: labelled primary action with freshness signal. Setup: Price calculator with New badge. Why: keeps status visible at the interaction point.
- Example: Rule: use status-dot badges on icon-only notification actions for unread state. Context: compact notification entry point. Setup: icon-only notification button with red dot badge. Why: signals pending updates without requiring label text.

#### Spacing between buttons
- Use consistent spacing between buttons in an action row. Tight spacing groups related actions visually. Wider spacing separates actions that serve different purposes, such as a primary submit and a destructive reset on opposite ends of a form footer. For spacing values, see the spacing guidelines.

#### Choose the right fit
- The button component supports three fit sizes: small, medium, and large. Choose the fit by the density of the surrounding layout, not by device or screen size. Medium is the default and works everywhere, including touch and mobile. Pick medium unless a dense layout genuinely needs small, or the context needs the extra presence of large. You don’t need to change the fit per device — choose a fit for the context and let the component handle rendering across screen sizes.
- Example: Rule: choose fit by layout density, then keep one fit per local context. Context: sizing guidance comparison. Setup: small, medium, and large button examples. Why: density-based sizing keeps fit consistent and protects hierarchy without resizing per device.
- | Fit | Use when | Examples |
| --- | --- | --- |
| Small | Space is tight and the surrounding controls are dense | Table rows, compact toolbars, filter bars, inline actions. |
| Medium | The default for almost everything, pointer and touch alike | Forms, dialogs, page-level actions, most desktop and mobile UI. |
| Large | The action needs extra presence | Marketing heroes, kiosk and POS screens, prominent standalone CTAs. |
- Use one fit per local context and match it to the density of the controls around it. Buttons in a table toolbar should share the small fit of the inputs beside them, while a form’s submit action should match its medium-fit fields. Mixing fits in the same action row creates visual imbalance and breaks the hierarchy.
- You don’t need to change the fit for touch devices or smaller screens. Medium already provides a comfortable tap target on touch, so keep it as the default rather than swapping to large by hand. The one thing to avoid is small for primary touch actions. Small is built for pointer precision in dense desktop views, and its tap target is too tight for reliable touch use.
- For more detail on fit sizes across the design system, see the component fit guidelines.

#### Full-width buttons
- Use full-width buttons only in narrow containers or mobile layouts where the button should fill the available width. This prevents small tap targets on touch devices and gives the action visual prominence in a constrained space.
- Example: Rule: use full-width buttons in narrow containers and mobile layouts. Context: constrained card action area. Setup: full-width Continue button below options. Why: improves tap target size and visual prominence.

#### Form actions
- Pair a filled primary action with an outlined secondary action, align the primary action with the form content, and place the secondary action to its right so keyboard flow reaches the main action first.
- For broader guidance on form layout and button placement, see the form design guidelines.

#### Repetitive and low-emphasis actions
- Use low-key button styles for actions users perform often and repeatedly, especially in dense interfaces like table rows or expandable content lists. Prefer icon-only or plain buttons when the action is universally understood and should stay available without competing with primary goals. Use labelled variants only when the action is specific, ambiguous, or needs extra clarity.
- Example: Rule: use low-emphasis button styles for frequent row-level actions. Context: dense data-table rows. Setup: compact row actions with low prominence. Why: supports repeated use without competing with page-level priorities.
- For progressive disclosure actions such as “Show details” or “Load more”, use a plain button so repetitive triggers stay low-emphasis while remaining discoverable.
- Example: Rule: use plain buttons for progressive disclosure actions such as Show details or Load more. Context: expandable lists. Setup: centered plain Show details trigger. Why: keeps repetitive expansion actions discoverable but low emphasis.

#### Empty state actions
- Use a single clear call-to-action button in an empty state so users understand the next step when no data is available.
- Example: Rule: provide one clear CTA in empty states. Context: no-data view. Setup: single outlined Try again action with supporting copy. Why: gives an unambiguous recovery path.

### Content guidance
- Write button labels in sentence case. Capitalise the first word and proper nouns only.
- Lead with an action verb and add a noun only when it removes ambiguity, for example Book a container.
- Avoid vague labels such as Submit or Confirm. Name the action instead, for example Submit booking or Confirm release.
- Users rely on clear and consistent labels. See our label guidelines for broader writing guidance.

### States and feedback
- Default: the button shows its variant and emphasis level.
- Hover: the background shifts slightly to confirm the button is interactive.
- Focus: focus ring is visible so the user can visually find and activate the action.
- Active: a pressed state becomes visible while the user commits the action.
- Disabled: the background is faded so it is clear that the action is not available yet.
- Loading: show that the action is processing and prevent duplicate submissions.
- Disable buttons only when the action is truly unavailable and the user can fix the condition. If the action is available but input is invalid, keep the button enabled and show validation guidance instead.
- For disabled buttons, add a tooltip that explains what is unavailable, why it is unavailable, and what the user needs to do to enable it.
- Use the loading state only for short waits (about 2 to 5 seconds). For longer operations, show progress in a dedicated Progress indicator or a status view instead of keeping the button in loading state.
- Example: Rule: when disabling an action, provide explanatory guidance for enablement. Context: temporarily unavailable action. Setup: disabled button with tooltip reason and next step. Why: tells users what is blocked and how to proceed.
- Example: Rule: use button loading state only for short operations and block duplicate submissions. Context: immediate action processing. Setup: spinner replaces label during request. Why: confirms progress while preventing repeated activation.

### Accessibility
- Always provide a label for icon-only buttons so assistive technologies can announce the action. For example, an icon-only delete action still needs an accessible name such as Remove container.
- Follow the label guidance in Content guidance above. Clear labels benefit everyone, especially screen reader users.
- Ensure buttons can be activated with Enter and Space when focused.
- Example: Rule: icon-only buttons must include an explicit accessible name. Context: non-text action controls. Setup: resize icon button labeled Go full screen for assistive tech. Why: ensures the action is announced correctly.
- The component already handles focus-ring styling, renders an accessible label for icon-only buttons from the label property, and sets aria-busy during loading.

## Usage & code examples

```bash
// General Setup (JS, VUE, Angular) 
npm install @maersk-global/mds-components-core-button
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-button
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-button';
// minimal example usage
<mc-button label="Button"></mc-button>
// basic example usage
<mc-button label="Button" fit="medium" icon="" trailingicon="" appearance="primary" variant="filled" padding="default" width="auto" justifyitems="center" href="" rel="" target="" arialabel="" ariacurrent="" ariarole="" name=""></mc-button>
```

### Advanced Examples

#### LabelAsASlot

```html
<mc-button>Label as slot</mc-button>
<mc-button><a href="http://maersk.com">Link button</a></mc-button>
```

#### IconAsASlot

```html
<mc-button appearance="neutral" label="Label"><span slot="icon"><mc-icon icon="star"></mc-icon></span></mc-button>
<mc-button appearance="primary" label="Label"><span slot="trailingicon"><mc-icon class="my-icon" icon="star"></mc-icon></span></mc-button>
```

#### IconOnlyButton

```html
<mc-button label="heart-icon" hiddenlabel icon="heart"></mc-button>
```

#### CustomLeadingIcon

```html
<mc-button appearance="neutral">
  <span slot="icon"><img src="github.svg" width="20" height="20" /></span>
  GitHub
</mc-button>
```

#### ButtonPositioning

```html
<mc-button label="Display inline-block with margin" class="button"></mc-button>
```

#### CustomisedAppearance

```html
<mc-button icon="star">Success</mc-button>
  
```

#### WithRouterLink

```html
import '@maersk-global/mds-components-core/mc-button';

<mc-button>
  <router-link to="/my-route">Button with router link</router-link>
</mc-button>
```

## API

### Properties and attributes

#### label

- **Type:** string | slot
- **Default:** Button
- **Description:** Label can be passed as a simple argument like: `label="Label"` or as a slot to mc-button. Use argument style for passing short labels, use slot when you want to pass label with HTML text. Label is required attribute as it will be used as aria-label.

#### hiddenlabel

- **Type:** boolean
- **Default:** false
- **Description:** If set to `true` or the attribute is just presented without any value, then the label will not appear, but will be used as `aria-label` only

#### fit

- **Type:** small | medium | large
- **Typescript Type:** Fit
- **Default:** medium
- **Description:** Controls the overall size of the component.

#### icon

- **Type:** string | slot
- **Description:** Icon displayed at the start (front) of the component.

- **Available options:** [Icons List](../mds-icons/references/icons-list.md)

#### trailingicon

- **Type:** string | slot
- **Description:** Icon displayed at the end (trailing) of the component.

- **Available options:** [Icons List](../mds-icons/references/icons-list.md)

#### loading

- **Type:** boolean
- **Default:** false
- **Description:** If set to `true`, it'll set the button state to loading and a loading spinner will be shown. The leading/trailing icon (if exists) is replaced by the spinner. This state also prevents the user from clicking and activating or submitting something more than one time.

#### labels

- **Type:** IMcButtonLabels
- **Typescript Type:** Partial<IMcButtonLabels> | undefined
- **Description:** Custom labels for mc-button component. By default labels are loaded in EN language. Check <a href="https://github.com/Maersk-Global/mds/blob/main/packages/mc-button/src/lib/translations.ts" target="_blank" rel="noopener noreferrer">types documentation</a> to see how to use custom labels property.

#### appearance

- **Type:** neutral | inverse | primary | secondary | error
- **Typescript Type:** ButtonAppearance
- **Default:** primary
- **Description:** Controls the visual style of the component. If not set, the default appearance is <b>primary</b>.

#### variant

- **Type:** filled | outlined | plain
- **Typescript Type:** ButtonVariants
- **Default:** filled
- **Description:** Defines the visual style of the button.

#### padding

- **Type:** default | none | compact
- **Typescript Type:** ButtonPadding | undefined
- **Default:** default
- **Description:** Controls the internal spacing of the button.

#### width

- **Type:** auto | full-width
- **Typescript Type:** Width
- **Default:** auto
- **Description:** Auto width style depends on the text length, full-width style will adjust to the parent container width

#### rounded

- **Type:** boolean
- **Default:** false
- **Description:** Whether the button should have fully rounded corners.

#### justifyitems

- **Type:** center | left | right | space-between
- **Typescript Type:** JustifyItems
- **Default:** center
- **Description:** Allows to position items inside the button like label text & icon. Specially useful when using `width="full-width"`

#### disabled

- **Type:** boolean
- **Default:** false
- **Description:** Disables the component, preventing user interaction.

#### active

- **Type:** boolean
- **Default:** false
- **Description:** Applies the active (pressed) visual state to the button.

#### href

- **Type:** string
- **Description:** Passing a href value will render the button as a HTML anchor element.

#### rel

- **Type:** string
- **Description:** The relationship of the linked URL as space-separated <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types" target="_blank">link types</a>.

#### target

- **Type:** _blank | _parent | _self | _top
- **Typescript Type:** Target | undefined
- **Description:** Where to display the linked URL, as the name for a browsing context (a tab, window, or &lt;iframe&gt;).

#### arialabel

- **Type:** string
- **Description:** Should 'only' be used if for the sake of accessibility the `aria-label` is differnt that the label which appears on the button, so that for instance the screen reader can provide more details than what's being visually displayed as a label on the button component.

#### ariacurrent

- **Type:** page | step | location | date | time | true | false
- **Typescript Type:** AriaCurrent
- **Description:** Sets the aria-current on the inner button in cases like pagination where the button is repeated in a list and at the same time, the currently active item needs to be specified.

#### ariarole

- **Type:** string
- **Description:** Sets the `role` on the inner button in cases like `tab-bar` where of every button is `tab`

#### type

- **Type:** button | submit | reset | menu
- **Typescript Type:** Type
- **Default:** button
- **Description:** Specifies the native HTML button type. Defaults to `button`.

#### name

- **Type:** string
- **Typescript Type:** string | undefined
- **Description:** Pass name if the button with `type="submit"` is used inside a `form` element.

### Events

#### focus

- **Type:** FocusEvent
- **Description:** Emitted when the button is focused.

#### blur

- **Type:** FocusEvent
- **Description:** Emitted when the button is blurred.

#### click

- **Type:** MouseEvent
- **Description:** Emitted when the button is clicked.

### Types

- AriaCurrent: type
- AriaExpanded: type
- AriaSelected: type
- ButtonAppearance: type
- ButtonBorder: type
- ButtonPadding: type
- ButtonVariants: type
- IMcButton: interface
- IMcButtonLabels: interface
- IMcTextAndIcon: re-export
- JustifyItems: re-export
- Target: re-export
- Type: type
- Width: re-export

### Slots

#### Default slot

- **Description:** Use the default slot, when you want to pass the label as HTML. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-button>
  Label as HTML
</mc-button>
```

#### icon

- **Description:** Use the icon named slot, if  a custom graphic, pictogram, etc. should be used, instead of using MDS icons. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-button>
  <span slot="icon">
    <img src="your-img-src" width="20" height="20" />
  </span>
</mc-button>
```

#### trailingicon

- **Description:** Use the trailingicon named slot, if  a custom graphic, pictogram, etc. should be used, instead of using MDS icons. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-button>
  <span slot="trailingicon">
    <img src="your-img-src" width="20" height="20" />
  </span>
</mc-button>
```

#### badge

- **Description:** Use the badge slot, when you want to attach badge to the button. Check stories under badge <b>Examples</b> folder to see live example.

```html
<mc-button>
  <mc-badge 
    slot="badge" 
    label="99" 
    variant="error">
  </mc-badge>
</mc-button>
```

## CSS parts

#### button

- **Description:** Using this CSS part you can change the look of the button element inside the mc-button component. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-button::part(button) {
  background-color: #00897A;
  color: #AAEAE0;
}
```

#### icon

- **Description:** Using this CSS part you can change the look of the icon element inside the mc-button component. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-button::part(icon) {
  fill: #000000
}
```

#### text-and-icon

- **Description:** Using this CSS part you can change the look of the container element inside the component. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-button::part(text-and-icon) {
  gap: 24px;
}
```

#### text-and-icon-labels

- **Description:** Using this CSS part you can change the look of the text element inside the component. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-button::part(text-and-icon-labels) {
  gap: 24px;
}
```

#### text-and-icon-label

- **Description:** Using this CSS part you can change the look of the label element inside the component. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-button::part(text-and-icon-label) {
  gap: 24px;
}
```

#### text-and-icon-sublabel

- **Description:** Using this CSS part you can change the look of the sublabel element inside the component. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-button::part(text-and-icon-sublabel) {
  gap: 24px;
}
```

## Related

- [Design properties](https://designsystem.maersk.com/foundations/design-properties/)
- [Dialog](https://designsystem.maersk.com/components/dialog/)
- [Drawer](https://designsystem.maersk.com/components/drawer/)
- [Forms](https://designsystem.maersk.com/guidelines/forms/)
- [Labels](https://designsystem.maersk.com/content/labels/)
- [Modal](https://designsystem.maersk.com/components/modal/)
- [Progress Indicator](https://designsystem.maersk.com/components/progress-indicator/)
- [Spacing](https://designsystem.maersk.com/foundations/spacing/)
- [Link Button](https://designsystem.maersk.com/components/link-button/)
- [Link](https://designsystem.maersk.com/components/link/)
- [Split Button](https://designsystem.maersk.com/components/split-button/)
- [Menu](https://designsystem.maersk.com/components/menu/)
- [Button Group](https://designsystem.maersk.com/components/button-group/)
- [Badge](https://designsystem.maersk.com/components/badge/)

