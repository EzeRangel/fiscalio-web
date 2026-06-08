# Product Guidelines: Fiscalio

## Tone & Voice
- **Language:** Spanish copy only. All UI elements, descriptions, blog posts, and tools must be written in Spanish.
- **Tone:** Editorial, trustworthy, professional, yet warm and accessible ("Warm Precision").
- **Clarity:** Translate complex tax mechanics (SAT regulations) into simple, clear instructions. Avoid unnecessary accounting jargon; explain terms when they must be used.

## Design & UI/UX Principles
- **Editorial Layout:** Maximize whitespace. Use generous vertical padding (`py-12` to `py-24`) between major sections to maintain a clean, publication-like feel.
- **Typography Rules:**
  - **Display Headings (DM Sans):** Use for hero banners, major section headings (H1, H2, H3), and prominent visual labels.
  - **Sans (Geist):** Use for general UI labels, descriptions, and paragraph copy.
  - **Mono (Geist Mono):** Apply strictly to all currency formats (e.g., `$10,000.00 MXN`), tax percentages (e.g., `1.25%`), and technical metadata.
- **Color Usage:**
  - Base background must be the warm neutral `#fcfaf6` (`bg-background`). Avoid solid pure white backgrounds for page layouts.
  - Text must default to charcoal `#262626` (`text-foreground`).
  - Accents are limited to Accent Amber (warnings/highlights) and Accent Rust (secondary CTAs). Saturated, generic blues/greens are prohibited.
- **Borders & Corners:**
  - All interactive controls, cards, and input fields must use a `0.5rem` (8px) corner radius.
  - Borders should be thin and subtle, defining structure without adding visual clutter.
- **Elevation:** Flat design hierarchy. Use tonal differences or thin borders for elevation rather than deep drop shadows.

## Coding Conventions
- **Clean Code:** No inline code comments. Keep files clean of comments unless explicitly required.
- **Accessibility & Touch Targets:** Mobile interactive elements must have a minimum touch height of 44px (`h-11` or `h-12`).
- **No Placeholders:** Real content only. Use SVGs or generated images instead of placeholder blocks.
