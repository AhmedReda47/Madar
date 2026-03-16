# Responsive QA Checklist (Pre-Launch)

Validate the homepage at these viewport widths:
- 360px
- 390px
- 768px
- 1024px
- 1280px

Use this checklist in both `npm run dev` and production preview (`npm run build && npm run preview`).

## Global Checks (All Sections)

- No horizontal scroll at any target breakpoint.
- Header remains usable and does not overlap key content.
- Text remains readable with no clipping/truncation.
- CTA buttons are fully visible and tappable.
- Images are visible, not stretched, and keep correct aspect ratio.
- No large layout shift when images load.

## Header

- Logo is visible and crisp at all widths.
- Mobile menu opens/closes correctly at 360/390.
- Mobile menu links scroll to the right sections.
- Desktop nav and CTA appear correctly from 1024+.

## Home Section

- Hero image fills section without cropping critical content.
- H1 wraps cleanly at 360/390 with no overlap.
- Description paragraph remains readable.
- CTA buttons stack on mobile and align horizontally on larger screens.

## Team Section

- Stats cards do not overflow on small screens.
- Team swiper card width/height fits 360/390 without clipping.
- Social buttons stay inside active card bounds.
- Pagination dots are visible and clickable.

## Partners Section

- Partner cards fit cleanly in swiper at 360/390.
- Active slide styling renders correctly.
- Dot navigation aligns and works.

## About Us Section

- Vision image and content stack correctly on mobile.
- Image does not push text off-screen.
- Feature cards maintain consistent spacing.

## Services Section

- Mobile layout shows single-column service cards below 1024.
- Desktop interactive cards (expand on hover/focus) work from 1024+.
- Service title/description remain readable over image overlay.

## Clients Section

- Logo grid keeps 2 columns on narrow screens and scales up smoothly.
- No logo clipping in cards.
- Section container does not cause horizontal overflow.

## Tools Section

- Orbit container stays fully visible at 360/390.
- Tool badges are visible and do not clip outside viewport.
- Center logo stays centered and proportionate.

## Worldwide Section

- Heading wraps correctly at all breakpoints.
- Map image remains visible and centered.
- Stats cards reflow to 1/2/4 columns as expected.

## Footer

- Footer navigation wraps without overlap.
- Contact links remain clickable and aligned.
- Social icons stay centered inside icon buttons.
- Legal links are visible and tappable.

## Final Sign-off

- Lighthouse mobile run passes without major layout/CLS issues.
- Manual smoke test complete on 360/390/768/1024/1280.
- No visual regression compared with approved design.
