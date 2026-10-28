# mc-timeline

Timeline component displays a chronological sequence of events related to a single entity, helping users understand what happened, when, and by whom.

**Url:** https://designsystem.maersk.com/components/timeline/
**Alternative names:** Feed, Activity Log
**Keywords:** audit trail, activity feed, event log, progress tracker, track and trace, history, milestones
**✅ When to use:** When you need to visually represent events or steps in a timeline.
**❌ When not to use:** For non-sequential or non-chronological content.

## Do's

- When using custom icons, all parent events should have custom icons.
- Keep timeline concise and well organised to encourage optimal scanability.

## Don'ts

- Do not mix default event indicators with custom icon ones in the same timeline.

## Cautions

- Avoid long labels mixing event names and attributions.

## Best practices

### Best practice
- Use the timeline to display a history of events related to a single entity, such as a shipment, invoice, or document.
- Each event should have a clear, specific label that communicates what happened - avoid generic labels like “Updated” or “Step 1”.
- Use sublabels to provide attribution: who performed the action, which system triggered it, or which reference identifier is associated.
- In an operational context, it is recommended to include time alongside the date. Date-only timestamps are insufficient when events may occur hours apart.

### Usage
- The timeline is designed for operational contexts in which users must follow a sequential process over time. Unlike the Step Indicator, which guides users through a fixed set of steps, the timeline presents a record of events that have already occurred or are expected to occur. The user is reading, not driving the process.
- A timeline can contain a variable number of events and supports a 2-layer hierarchy (parent and child events) for cases where a milestone contains sub-steps.

#### Track and trace
- A common use case. Users follow a shipment through booking, pickup, customs, transit, and delivery.
- A mix of completed, current, and pending events is visible simultaneously.
- Planned vs. actual timestamps are critical - users scan for deviations.
- Sublabels carry reference identifiers (booking refs, vessel names, terminal codes) that users need for cross-referencing.
- Descriptions include operational details: container IDs, seal numbers, temperature readings, and reasons for delays.
- Example: An example of a simple track and trace timeline that shows the main events and subevents in tracing a container shipment.

#### Document lifecycle tracking
- Another common use case is document lifecycle tracking.  For example, tracing an invoice or other documentation through matching, review, dispute, and payment events.
- Events involve handoffs between systems (TMS, ERP) and people (AP specialist, carrier contact).
- Sublabels identify the actor or system at each step — important for accountability.
- Descriptions contain financial specifics: amounts, percentages, and contract references.
- Error state is common — rate mismatches, missing documentation,
- Example: More complex timetables sometimes have dinamic timestamps and data that could change based on how the process evolves over time.

#### Activity log
- Unlike the track-and-trace use case, the activity log does not show pending future steps. It displays only what has already happened, with the most recent event at the top.
- This pattern is suited to contexts where users need to review recent activity quickly, such as checking who last modified a booking, when a document status changed, or what actions were taken.
- Events are ordered most recent first - the opposite of the default chronological timeline.
- Only completed and current states are used. Pending steps are not shown.
- Sublabels are especially important here for attribution - users are often looking to answer “who did this?”.
- Timestamps benefit from relative formatting (“2 hours ago”) for recent events, switching to absolute dates for older entries, following the date and time guidelines.
- Example: Timeline with a reverse-chronological record of actions, changes, and system events related to a single entity.

### States
- Timeline events support three states. A single timeline typically contains a mix of completed, one current, and multiple pending events.
- | State | Visual indicator | Meaning |
| --- | --- | --- |
| **Completed** | Filled checkmark icon, solid connector line | The event has occurred and is confirmed. |
| **Current** | Highlighted icon or pulsing indicator, solid line above / dashed below | The active step in the process. Only one current event per timeline. |
| **Pending** | Empty circle icon, dashed connector line | Expected future event, not yet started. |
- In cases where you need to show errors or mismatches, you can use the badge component to increase prominence to a particular event in the timeline.
- Example: Example of using header slots to include badge component to display event statuses in prominent way.

### Timestamps
- Follow the Date and time content guidelines for all timestamp formatting and for how we display dates and times in the timeline. We use British date format and the 24-hour clock to avoid ambiguity.
- Example: Timestamps with complete date and time and in some cases timezone are essential for timelines that help users track long processes.

### Progressive disclosure
- Descriptions should be collapsed by default to avoid increasing the cognitive overload. Users expand individual events using a “Show details” / “Hide details” toggle.
- An alternative way of disclosing more complex information can be clicking an event headline, which can open a drawer or a new browser tab to show more details about the specific event.
- This keeps the timeline scannable while preserving access to specifics like reference numbers, amounts, and deviation explanations.

### Custom icons
- In cases where custom icons are needed, the whole timeline should use custom icons, and they should not be mixed with the default steps to prevent layout and positioning issues.

### Content
- Timeline content should be well organised in repeatable pattern so that users have easier time scanning the content and finding the information they need.

#### Labels
- Keep labels under approximately 60 characters where possible.
- When a label exceeds the available width, it will wrap to a second line by default.
- Our truncation guidelines advise against truncating titles and labels.

#### Sublabels
- Keep sublabels under approximately 80 characters.
- When combining an actor and a reference, use a clear separator. e.g. By: Anna Sørensen | Ref: DSP-2025-0088
- Allow sublabels to wrap when needed. If the sublabel is very long, consider moving secondary details into the description.

#### Descriptions
- Descriptions are naturally multi-line and do not need overflow handling. Keep content concise (1–3 sentences) and link out for additional detail.

### Responsiveness
- The timeline is designed for a vertical layouts and handles resizing of the container by stacking the content into a single column when reaching the smallest breakpoints.

#### Full page
- Standard layout. Labels, sublabels, and timestamps display at full width. Planned and actual timestamps can sit on the right side to create more visual balance and content distribution.

#### Side panel and drawer
- Narrower container. Expect labels and sublabels to wrap. Timestamps will stack vertically (planned on one line, actual below) rather than sit alongside the labels.
- Use abbreviated date format (16 Feb 2025 14:33) when the full format does not fit comfortably.
- If progressive disclosure uses a drawer-within-drawer pattern, ensure focus management does not conflict — consider linking to a detail page instead of nesting drawers.

#### Mobile
- The vertical layout is preserved and works well on narrow screens, similar to the side panel.

## Usage & code examples

```bash
// General Setup (JS, VUE, Angular) 
npm install @maersk-global/mds-components-core-timeline
// React Setup 
npm install @maersk-global/mds-react-wrapper 
npm install @maersk-global/mds-components-core-timeline
```

### General JS example

```javascript
import '@maersk-global/mds-components-core-timeline';
// minimal example usage
<mc-timeline></mc-timeline>
// basic example usage
<mc-timeline arialabel=""></mc-timeline>
```

### Advanced Examples

#### CustomIcons

```html
 <mc-timeline>
  <mc-timeline-item
    state="completed"
    icon="calendar-check"
    heading="Booking confirmed"
    subheading="Booking Ref. MA-209831"
    date="Actual: 14 February 2026 08:47">
  </mc-timeline-item>
  <mc-timeline-item
    state="completed"
    icon="container-hook"
    heading="Container picked up at origin"
    subheading="Terminal: APM Terminals, Copenhagen">
    <span slot="date">
      Planned: 16 February 2026 06:00<br />
      Actual: 16 February 2026 07:12
    </span>
  </mc-timeline-item>
  <mc-timeline-item
    child
    state="completed"
    heading="Customs export cleared"
    subheading="Danish Customs (SKAT)"
    date="Actual: 16 February 2026 14:33">
  </mc-timeline-item>
  <mc-timeline-item
    state="current"
    icon="vessel-front"
    heading="In transit — at sea"
    subheading="Vessel: Mærsk Tønsberg"
    date="ETA: 19 February 2026 06:30">
  </mc-timeline-item>
  <mc-timeline-item
    icon="crane"
    heading="Arrival at port of discharge"
    subheading="Terminal: Eurogate, Rotterdam"
    date="Planned: 20 February 2026">
  </mc-timeline-item>
</mc-timeline>
```

#### ActivityLog

```html

  <mc-timeline>
    <mc-timeline-item
      state="current"
      heading="Equipment type review"
      subheading="Assigned: Maria Jensen (Operations Coordinator)"
      date="In progress"
    ></mc-timeline-item>
    <mc-timeline-item
      state="completed"
      heading="Commodity updated — hazardous goods"
      subheading="By: Lars Eriksson (Booking Manager)"
      date="22 April 2026 11:47"
    ></mc-timeline-item>
    <mc-timeline-item
      state="completed"
      heading="Pickup date moved from 28 April to 30 April"
      subheading="By: Anna Sørensen (Customer Service)"
      date="21 April 2026 16:20"
    ></mc-timeline-item>
    <mc-timeline-item
      state="completed"
      heading="Booking created"
      subheading="By: Lars Eriksson (Booking Manager)"
      date="21 April 2026 09:35"
    ></mc-timeline-item>
  </mc-timeline>
```

## API

### Properties and attributes

#### arialabel

- **Type:** string
- **Description:** Accessible label describing what this timeline represents (e.g. 'Shipment history'). Recommended when multiple timelines exist on a page.

### Types

- IMcTimeline: interface

### Slots

#### Default slot

- **Description:** Use the default slot, when you want to pass timeline items to the timeline. Check stories under <b>Examples</b> folder to see live example.

```html
<mc-timeline>
  <mc-timeline-item></mc-timeline-item>
</mc-timeline>
```

## Related

- [Badge](https://designsystem.maersk.com/components/badge/)
- [Date and time](https://designsystem.maersk.com/content/date-and-time/)
- [Progress Indicator](https://designsystem.maersk.com/components/progress-indicator/)
- [Step Indicator](https://designsystem.maersk.com/components/step-indicator/)
- [Table](https://designsystem.maersk.com/components/table/)

