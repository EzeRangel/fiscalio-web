# Specification: Standardize bottom-of-post calculator CTA across all posts

## Overview
Currently, the 12 blog posts in `app/blog` utilize inconsistent inline links and different call-to-actions (CTAs) at the bottom. This track will standardize the bottom CTA block across all blog pages to promote the RESICO Calculator. The CTA will be implemented as a reusable React component (`components/calculator-cta.tsx`) styled with premium dark-mode aesthetics and support dynamic copy depending on the post context.

## Functional Requirements
1. **Reusable Component:**
   - Create a React component in `components/calculator-cta.tsx`.
   - Accept dynamic title and description copy via props (`title`, `description`).
   - Include a prominent action button pointing to `/calculadora-resico`.
2. **Visual Design:**
   - Dark theme styling: `bg-foreground text-background`.
   - Premium accents: A border/accent line using the amber highlight color (`border-accent-amber` or `border-t-2 border-accent-amber/20`).
   - Follow clean typography rules: `font-display` (DM Sans) for the heading, Geist for description.
   - Smooth button transition and micro-animations.
3. **Integration across Blog Posts:**
   - Replace the existing bottom callout/CTA section in all 12 blog post pages under `app/blog/*/page.tsx` with the new component.
   - Supply post-relevant copy for each post to customize the CTA messaging.

## Non-Functional Requirements
- **Responsive Layout:** Must look premium on both mobile devices and desktop viewports.
- **Code Cleanliness:** Avoid adding inline comments in the new code, per repository guidelines.
- **Spanish Copy:** All copy must be in Spanish.

## Acceptance Criteria
- [ ] A reusable CTA component is created in `components/calculator-cta.tsx`.
- [ ] The component accepts custom `title` and `description` props.
- [ ] The component is styled with `bg-foreground text-background` and an amber accent line.
- [ ] The component includes a prominent button that links to `/calculadora-resico`.
- [ ] All 12 blog post pages under `app/blog/*/page.tsx` are updated to use this component.
- [ ] No compilation or lint errors are present.

## Out of Scope
- Modifying the calculator page itself.
- Changing waitlist signup dialog flows on the home page.
