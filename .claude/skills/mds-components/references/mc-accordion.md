# mc-accordion

An accordion structures content into sections that you can expand and collapse.

**Url:** https://designsystem.maersk.com/components/accordion/
**Alternative names:** Accordion, Collapsible Panel, Expandable Section
**Keywords:** component, layout, content, expand, collapse, section, FAQ, collapsible, multi-expand, conditional, information hiding, nested sections, structuring content
**✅ When to use:** FAQs, Nested content, Disclosure sections
**❌ When not to use:** Always expanded content, Simple lists

## Do's

- If you place icons to the left, then place chevrons to the right.

## Don'ts

- Don't place icons and chevrons next to each other.

## Cautions

- No specific caution guidance documented.


## Best practices

### Best practice
- Use accordions to hide sections of content and only show essential information upfront.
- Avoid using an accordion if all content is essential.
- Avoid using an accordion if the user needs to compare across sections.
- Keep section headers clear and concise.
- Each section should have a clear purpose.
- Ensure that the overall structure of the sections is logical.
- Limit the number of sections so it doesn’t become too overwhelming for the user (ideally 5-7 sections).
- Avoid placing accordions inside accordions, since it increases complexity.

### Usage
- Accordions can enhance the efficiency of information processing and discovery by organising content into manageable and scannable sections. However, because they hide information by default, it’s crucial to consider if an accordion is the right approach.

#### Do:
- Use to organise related content into collapsible and expandable sections, e.g. FAQs and lengthy structured content.
- Use when long content cannot be displayed all at once, and it is important that the user can scan the available sections.
- Use when the information is situation-based and not always relevant.

#### Don’t:
- Don’t use in cases where all the information is essential at the same time.
- Don’t use in cases where it is common to compare information across sections.
- Avoid using the accordion to hide important information and functionality.

#### Placement
- Accordions are usually placed in the main content area on a page, but they can, e.g. also be placed inside a Drawer or a Card. If you need an accordion-style navigation, like the one on this website, then use the Tree Navigation component.
- Example: Accordion in the main content area.
- Example: Accordion inside a drawer.

#### Icons
- It is possible to add an icon to each section title. If you place an icon to the left, then it is recommended that you move the chevron to the right.

#### Single and multi-expand
- It is possible to set the accordion to expand only a single section at a time (single-expand, also called conditional accordion) or multiple sections at a time (multi-expand). In most cases, it makes sense to allow the user to expand multiple sections at a time, e.g. for FAQs. Only use single-expand in cases where the sections are mutually exclusive.
- Example: As default you can expand multiple sections at the same time.
- Example: You can set the accordion to only allow a single section expaned at the same time.

#### Content
- Write clear and concise titles for each section in the accordion and make sure to structure them in a logical order. This helps the user find the right informatino. The same goes for the body text inside the section. If needed, the text can be split into paragraphs and get their own sub-headlines to make the text easier to digest.
- Make sure that each section has a clear purpose that is distinct from the rest of the sections. For more info on how to write and format content, go to our Content Guidelines.

#### Accessibility
- The accordion is accessible via keyboard using the TABS-key to navigate through each section and the ENTER or SPACE-key to expand and collapse the sections.

## Usage & code examples

```bash
// General Setup (JS, VUE, Angular) 
npm install @maersk-global/mds-components-core-accordion
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-accordion
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-accordion';
// minimal example usage
<mc-accordion></mc-accordion>
// basic example usage
<mc-accordion expandiconposition="right" fit="medium"></mc-accordion>
```

### Advanced Examples

#### ExpandedAccordion

```html
<div style="width: 500px">
<mc-accordion expandiconposition="left">
<h3>Frequently asked questions (FAQs)</h3>
  <mc-accordion-item
    heading="Why do Maersk and Hapag-Lloyd expect to implement the Cape of Good Hope instead of the Suez network?"
    body="The decision to implement the Cape of Good Hope network has been taken after thorough consideration and is driven by ongoing safety concerns in the Red Sea region. Given the current geopolitical situation and the need to ensure the safety of our people, we determined that this route is the only viable option at this stage."
    expanded
  ></mc-accordion-item>
  <mc-accordion-item
    heading="What is the Gemini Cooperation?"
    body="In January 2024, Hapag-Lloyd AG (Hapag-Lloyd) and Maersk A/S (Maersk) announced a new long-term operational
      collaboration under the name of Gemini – referred to as the Gemini Cooperation. The operational
      collaboration covers the Ocean freight network on East West trades from February 1st, 2025."
  >
  </mc-accordion-item>
  <mc-accordion-item
    heading="Will Maersk return to a Trans Suez network?"
    body="The safety of our crews is always a top priority and guiding principle. We return to a Trans Suez network when it is safe to do so."
  ></mc-accordion-item>
</mc-accordion>
</div>
```

#### CustomisedAppearance

```html
<mc-accordion expandiconposition="right" withborder>
  <mc-accordion-item
    heading="Register and login to Maersk.com"
    body="If you are already registered online with a Maersk brand (Maersk Line, Safmarine, MCC, Seago Line or Sealand) then you can login into any of our portals with your existing username and password."
  ></mc-accordion-item>
  <mc-accordion-item heading="How to register for Advisories?">
    <div slot="body">
      <ol>
        <li>
          Step 1: Visit the URL:
          <a href="https://www.maersk.com/newsletter" target="_blank">https://www.maersk.com/newsletter</a>
          and enter your email address.
        </li>
        <li>Step 2: Check your inbox for a verification email and click the Confirm button.</li>
        <li>
          Step 3: Once verified, you will receive another email with an option to Update Preferences. Click and
          update accordingly.
        </li>
        <li>
          Step 4: On the webpage, scroll down to see the communication types you've opted for. Under Customer
          Communication, check the box to receive advisories, and then click Save Preferences. Once saved, your
          preferences will be updated, and you will start receiving advisory communications.
        </li>
      </ol>
    </div>
  </mc-accordion-item>
  <mc-accordion-item
    heading="Finding schedules and prices"
    body="Booking has never been easier. You can make a new booking, duplicate, amend or cancel an existing booking, and look up rates and schedules – at anytime online."
  ></mc-accordion-item>
</mc-accordion>
```

#### AccordionInDrawer

```html
<mc-button onclick="toggleDrawer()">Open drawer with Accordion</mc-button>
<mc-drawer heading="Invoice summary">
  <mc-accordion withborder>
    <mc-accordion-item heading="Invoice details" expandiconposition="left">
      <span slot="body">
        Invoice Date: July 2, 2025<br />
        Due Date: August 23, 2025<br />
        Customer Code: 12345678<br />
        <br />
        Payment terms: Payable immediately<br />
        Payment reference: 09785634120
      </span>
    </mc-accordion-item>
    <mc-accordion-item heading="Charges" expandiconposition="left">
      <mc-tooltip slot="heading">
        <mc-icon slot="trigger" icon="question-circle" variant="plain"></mc-icon>
        <span>The HTML content of the tooltip</span>
      </mc-tooltip>
      <span slot="body">
        Emission Surcharge<br />
        Basic Ocean Freight<br />
        Transit Disruption Surcharge
      </span>
    </mc-accordion-item>
    <mc-accordion-item heading="Shipment details" expandiconposition="left">
      <mc-tag slot="heading" label="Updated" appearance="info"></mc-tag>
      <span slot="body">
        Vessel/Voyage Reference: /528E<br />
        Sailing Date: July 4, 2025<br />
        Arrival Date: August 23, 2025<br />
        <br />
        Place of Receipt: Bremerhaven, DE<br />
        Port of Loading: Bremerhaven, DE<br />
        Port of Discharge: Jawaharlal Nehru, IN<br />
        Place of Delivery: Jawaharlal Nehru, IN
      </span>
    </mc-accordion-item>
    <mc-accordion-item
      heading="Recipient details"
      body="Address: Esplanaden 50. 1263 København K"
      expandiconposition="left"
    >
    </mc-accordion-item>
  </mc-accordion>
  <mc-button fit="medium" slot="footer" dialogaction="pay">Pay</mc-button>
</mc-drawer>
```

## API

### Properties and attributes

#### singleexpand

- **Type:** boolean
- **Default:** false
- **Description:** If the attribute is is set, then all opened items will be closed when another item is opened.

#### withborder

- **Type:** boolean
- **Default:** false
- **Description:** When true, adds borders all around the accordion container.

#### expandiconposition

- **Type:** left | right
- **Typescript Type:** ExpandIconPosition
- **Default:** right
- **Description:** Position of the expand icon

#### fit

- **Type:** small | medium | large
- **Typescript Type:** Fit
- **Default:** medium
- **Description:** Controls the overall size of the component.

### Events

#### change

- **Type:** CustomEvent<IMcAccordionChangeDetail>
- **Description:** Emitted when an accordion item's expanded state changes.

### Types

- ExpandIconPosition: type
- Fit: re-export
- IMcAccordion: interface
- IMcAccordionChangeDetail: interface

### Slots

#### Default slot

- **Description:** Use the default slot, when you want to pass accordion items to the accordion. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-accordion>
  <mc-accordion-item></mc-accordion-item>
</mc-accordion>
```

## CSS parts

#### container

- **Description:** Using this CSS part you can change the look of the accordion container. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-accordion::part(container) {
  background-color: #00897A;
  color: #AAEAE0;
}
```

## Related

- [Content](https://designsystem.maersk.com/content/)
- [Tree Navigation](https://designsystem.maersk.com/components/tree-navigation/)

