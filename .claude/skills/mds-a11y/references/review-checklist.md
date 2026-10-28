# MDS Accessibility Review Checklist

Quick MDS-specific checklist for auditing a screen before shipping. For full WCAG 2.2 Level AA criteria, see [accessibility-checklist.md](./accessibility-checklist.md).

## Fields and Labels

- [ ] All fields have a visible `label` prop
- [ ] Hidden labels use `hiddenlabel` only with a justified alternative naming mechanism
- [ ] Error messages use `errormessage` prop paired with `invalid`
- [ ] Hints use `hint` prop or `<span slot="hint">` — no standalone `mc-hint`
- [ ] No standalone `mc-error`, `mc-hint`, or `mc-label` elements

## Keyboard and Focus

- [ ] Full interaction is completable by keyboard only
- [ ] Tab order is logical and follows visual flow
- [ ] Overlays can be closed with `Escape`
- [ ] Focus returns to the trigger element after closing a dialog or drawer

## Status Messages

- [ ] Loading states use `mc-loading-indicator` with a `label` prop
- [ ] Loading and progress components use `arialabel` for descriptive assistive text
- [ ] Persistent status uses `mc-notification`, transient feedback uses `mc-toast`

## Page Structure

- [ ] Root or body has `class="mds"`
- [ ] Content-heavy pages have skip links (`class="mds-skip-to"`)
- [ ] Semantic landmarks are present: `<header>`, `<nav>`, `<main>`, `<footer>`
- [ ] Heading levels are logical and not skipped

## Colour and Motion

- [ ] No custom hardcoded colours — MDS tokens and classes only
- [ ] No custom animations on feedback components — MDS handles motion and `prefers-reduced-motion`
