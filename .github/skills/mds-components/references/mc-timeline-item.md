# mc-timeline-item

Displays a single item in a timeline, showing a heading, subheading, date, and body text with an optional "Show more" toggle.

**Url:** https://designsystem.maersk.com/
**Alternative names:** Timeline Entry, Feed Item
**Keywords:** 
**✅ When to use:** When you need to represent events or steps in a chronological timeline.
**❌ When not to use:** For non-sequential or non-chronological content.

## Do's

- No specific do guidance documented.


## Don'ts

- No specific don't guidance documented.


## Cautions

- No specific caution guidance documented.


## Best practices

No specific best practices documented.

## Usage & code examples

```bash
// General Setup (JS, VUE, Angular) 
npm install @maersk-global/mds-components-core-timeline-item
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-timeline-item
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-timeline-item';
// minimal example usage
<mc-timeline-item></mc-timeline-item>
// basic example usage
<mc-timeline-item heading="Invoice received" subheading="Source: EDI 810 / FreightLink GmbH" body="Your invoice for shipment MAEU1234567 has been received and is being processed" date="2026-03-01 11:14" state="pending" icon=""></mc-timeline-item>
```

### Advanced Examples

#### IconAsASlot

```html
<mc-timeline-item
 state="pending"
 heading="ETD"
 subheading="Estimated Time of Departure"
 date="2026-01-01"
 body="Vessel departed from Hamburg on schedule."
 showdetails>
<span slot="icon">⏱️</span>
</mc-timeline-item>
```

#### HeadingAsASlot

```html
<mc-timeline-item
 state="current"
 subheading="Vessel: Maersk Tonsberg"
 date="ETA: 19 February 2026 6:30">
  <span slot="heading">In transit — at sea <mc-badge display="inline" appearance="error" label="Delayed"></mc-badge></span>
</mc-timeline-item>
```

#### BodyAsASlot

```html
<mc-timeline-item
 state="current"
 heading="In transit - at sea"
 subheading="Vessel: Maersk Tonsberg"
 date="ETA: 2026-02-19 06:30"
 showdetails
 expanded>
  <div slot="body">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.068070888352!2d12.594868416160764!3d55.687804280536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46525320e2a26a81%3A0x851f5e47dc102363!2zTcOmcnNr!5e0!3m2!1sen!2sdk!4v1660904924664!5m2!1sen!2sdk"
      width="100%"
      height="300"
      style="border: 0; display: block;"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
    <p style="margin: 8px 0 0">Location last updated on 12 February 2026 14:45</p>
  </div>
</mc-timeline-item>
```

#### CustomIcon

```html
<mc-timeline-item
  state="completed"
  icon="truck-front"
  heading="ETD"
  subheading="Estimated Time of Departure"
  date="2026-01-01"
  body="Vessel departed from Hamburg on schedule."
  showdetails>
</mc-timeline-item>
```

#### CustomLabels

```html
<mc-timeline-item
  id="withLang"
  state="completed"
  heading="Invoice received"
  subheading="Source: EDI 810 / FreightLink GmbH"
  body="Invoice amount: EUR 14,280.00."
  showdetails
></mc-timeline-item>
```

#### CustomisedAppearance

```html
<mc-timeline-item
 icon="envelope"
 heading="Invoice received">
</mc-timeline-item>
```

#### SubItems

```html
<mc-timeline arialabel="Shipment timeline">
  <mc-timeline-item
    state="completed"
    icon="truck-front"
    heading="ETD"
    subheading="Estimated Time of Departure"
    date="2026-01-01"
    body="Vessel departed from Hamburg on schedule."
    showdetails>
  </mc-timeline-item>
  <mc-timeline-item
    child
    state="current"
    heading="In transit"
    subheading="On schedule"
    date="2026-01-02">
  </mc-timeline-item>
</mc-timeline>
```

## API

### Properties and attributes

#### heading

- **Type:** string | slot
- **Typescript Type:** string | undefined
- **Default:** Invoice received
- **Description:** The main heading of the timeline item.

#### subheading

- **Type:** string | slot
- **Typescript Type:** string | undefined
- **Default:** Source: EDI 810 / FreightLink GmbH
- **Description:** The subheading displayed below the heading.

#### body

- **Type:** string | slot
- **Typescript Type:** string | undefined
- **Default:** Your invoice for shipment MAEU1234567 has been received and is being processed
- **Description:** The body text of the timeline item.

#### date

- **Type:** string
- **Typescript Type:** string | undefined
- **Default:** 2026-03-01 11:14
- **Description:** The date/timestamp of the timeline item.

#### state

- **Type:** completed | current | pending
- **Typescript Type:** State
- **Default:** pending
- **Description:** Controls the current status of the timeline item.

#### icon

- **Type:** string | slot
- **Typescript Type:** string | undefined
- **Description:** Icon name to display inside the marker (e.g. 'clock'). Use the 'icon' slot for a custom element. Only applies to parent items. Enlarges the marker to 40px — use icons consistently across all items in the timeline.

- **Available options:** [Icons List](../mds-icons/references/icons-list.md)

#### showdetails

- **Type:** boolean
- **Default:** false
- **Description:** When true, a show-details toggle button is rendered to expand/collapse the body content.

#### expanded

- **Type:** boolean
- **Default:** false
- **Description:** Controls whether the show-details content is expanded. Only applies when showdetails is true.

#### child

- **Type:** boolean
- **Default:** false
- **Description:** When true, renders the item with a smaller marker and indented style. Use this attribute directly on each sub-item in the flat timeline list.

#### labels

- **Type:** IMcTimelineItemLabels
- **Typescript Type:** Partial<IMcTimelineItemLabels> | undefined
- **Description:** Custom labels for mc-timeline-item component. By default labels are loaded in EN language. Check <a href="https://github.com/Maersk-Global/mds/blob/main/packages/mc-timeline-item/src/lib/translations.ts" target="_blank" rel="noopener noreferrer">types documentation</a> and the <a href="?path=/story/components-timeline-item-examples--custom-labels">Custom Labels story example</a> to see how to use custom labels property.

### Events

#### showdetailschange

- **Type:** CustomEvent<IMcTimelineItemShowDetail>
- **Description:** Dispatched when the show details button is toggled.

### Types

- IMcTimelineItem: interface
- IMcTimelineItemLabels: interface
- IMcTimelineItemShowDetail: interface
- State: type

### Slots

#### heading

- **Description:** Use the heading named slot, when you want to pass the heading as HTML or custom elements.. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-timeline-item>
  <span slot="heading">
    Custom <strong>heading</strong> with HTML
  </span>
</mc-timeline-item>
```

#### subheading

- **Description:** Use the subheading named slot, when you want to use the subheading slot instead of the subheading attribute for the timeline item subheading.. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-timeline-item>
  <span slot="subheading">
    text or HTML element
  </span>
</mc-timeline-item>
```

#### date

- **Description:** Use the date named slot, when you want to display multi-line or HTML-formatted date content instead of the date attribute.. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-timeline-item>
  <span slot="date">
    Planned: 1 April 2026 08:00<br />Actual: 1 April 2026 09:15
  </span>
</mc-timeline-item>
```

#### body

- **Description:** Use the body named slot, when you want to pass body content with HTML elements or custom elements.. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-timeline-item>
  <span slot="body">
    <mc-button appearance="primary" label="Click Me"></mc-button>
  </span>
</mc-timeline-item>
```

#### icon

- **Description:** Use the icon named slot, if  a custom graphic, pictogram, etc. should be used, instead of using MDS icons. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-timeline-item>
  <span slot="icon">
    <img src="your-img-src" width="20" height="20" />
  </span>
</mc-timeline-item>
```

## CSS parts

#### heading

- **Description:** Using this CSS part you can change the look of the heading element. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-timeline-item::part(heading) {
  color: #40ab35;
}
```

#### subheading

- **Description:** Using this CSS part you can change the look of the subheading element. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-timeline-item::part(subheading) {
  color: #40ab35;
}
```

#### body

- **Description:** Using this CSS part you can change the look of the body element inside the component. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-timeline-item::part(body) {
  color: #40ab35;
}
```

#### icon

- **Description:** Using this CSS part you can change the look of the icon element inside the component. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-timeline-item::part(icon) {
  fill: #40AB35;
}
```

#### marker

- **Description:** Using this CSS part you can change the look of the marker element. Check <b>Examples -> Customised appearance</b> story to see live example.

```css
mc-timeline-item::part(marker) {
  background-color: #40AB35; border-color: #40AB35;
}
```

## Related

- [undefined](undefined)

