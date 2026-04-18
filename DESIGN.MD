# Fiscalio Design System

This document outlines the visual identity and UI patterns for Fiscalio. It serves as a single source of truth for design decisions and as a guide for building consistent interfaces.

## 1. Visual Theme & Atmosphere

- **Mood:** Editorial, sophisticated, trustworthy, and precise.
- **Density:** Spacious but organized, prioritizing readability for financial data.
- **Philosophy:** "Warm Precision." Combining clinical financial accuracy with a warm, human-centric aesthetic (warm neutrals, soft shadows).
- **Aesthetic:** High-contrast typography (Geist vs DM Sans), minimal borders, and a refined "paper-like" background.

---

## 2. Color Palette & Roles

### Core Palette (OKLCH)

| Name          | Role                  | Light Hex (Approx) | Dark Hex (Approx) |
| :------------ | :-------------------- | :----------------- | :---------------- |
| `Background`  | Main page surface     | `#fcfaf6` (Warm)   | `#1e1e1e`         |
| `Foreground`  | Body text & icons     | `#262626`          | `#f5f5f5`         |
| `Primary`     | Brand identity & CTA  | `#3a3a3a`          | `#dfdfdf`         |
| `Secondary`   | Subtle containers     | `#f0f0f0`          | `#333333`         |
| `Muted`       | De-emphasized text/bg | `#f5f5f5`          | `#2e2e2e`         |
| `Accent`      | Hover states          | `#f0f0f0`          | `#333333`         |
| `Destructive` | Errors & deletions    | `#ce2c31`          | `#e5484d`         |

### Editorial Accents

- **`Accent Amber`**: Used for warnings or highlights (`oklch(0.65 0.15 65)`).
- **`Accent Rust`**: Used for deep highlights or secondary calls to action (`oklch(0.55 0.12 35)`).

---

## 3. Typography Rules

### Font Families

- **Display**: `DM Sans` (for headings, hero sections, and labels needing "character").
- **Sans**: `Geist` (for UI elements, body text, and functional copy).
- **Mono**: `Geist Mono` (for data, numbers, and technical metadata).

### Hierarchy

| Level         | Font    | Size               | Weight | Case                |
| :------------ | :------ | :----------------- | :----- | :------------------ |
| **H1**        | Display | 3.5rem - 4.5rem    | 700    | Default             |
| **H2**        | Display | 2rem - 2.5rem      | 600    | Default             |
| **H3**        | Display | 1.5rem             | 600    | Default             |
| **Body**      | Sans    | 1rem (16px)        | 400    | Default             |
| **Label**     | Sans    | 0.875rem           | 500    | Default             |
| **Data/Mono** | Mono    | 0.75rem - 0.875rem | 400    | Default / Uppercase |

---

## 4. Component Stylings

### Buttons

- **Default (Primary)**: High contrast, dark background (Light) or light background (Dark).
- **Outline**: Thin border (`oklch(0.9 0.008 85)`), subtle shadow.
- **States**:
  - _Hover_: Slight opacity change or background shift (`hover:bg-primary/90`).
  - _Focus_: 3px ring with `ring-ring/50`.

### Inputs

- **Style**: Minimal, rounded-md (8px), subtle `shadow-xs`.
- **States**: Focus triggers a visible border-ring transition.
- **Dark Mode**: Uses `bg-input/30` for a semi-transparent textured look.

---

## 5. Layout Principles

- **Grid**: 12-column system for complex layouts.
- **Spacing Scale**: 4px base (Tailwind default).
- **Container**: `max-w-7xl` (1280px) centered.
- **Whitespace**: Generous vertical padding (`py-12` to `py-24`) between major sections to maintain the "editorial" feel.

---

## 6. Depth & Elevation

- **Philosophy**: Flattened hierarchy. Elevation is shown via subtle border shifts rather than heavy shadows.
- **Shadows**: Only use `shadow-sm` or `shadow-xs` for interactive elements like inputs and cards.
- **Surfaces**: `Card` uses a pure white (`#ffffff`) in light mode and a deep grey in dark mode.

---

## 7. Do's and Don'ts

### Do's

- Use **DM Sans** for all major section headings.
- Use **Geist Mono** for all currency values and tax percentages.
- Maintain the "Warm Neutral" background; avoid pure `#ffffff` for page backgrounds.
- Keep border radii consistent at `0.5rem` (8px).

### Don'ts

- Don't use heavy box shadows or gradients.
- Don't use bright, saturated blues or greens (stick to the warm rust/amber/charcoal palette).
- Don't crowd data; give tables and charts ample breathing room.

---

## 8. Responsive Behavior

- **Breakpoints**:
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px
- **Touch Targets**: Minimum 44px height for interactive elements on mobile (`h-11` or `h-12`).

---

## 9. Agent Prompt Guide

### Color Quick Ref (Tailwind)

- `bg-background`: Warm neutral base.
- `text-foreground`: Primary charcoal text.
- `bg-primary`: Dark action buttons.
- `text-accent-amber`: Warning/Highlight color.

### Component Prompt Pattern

> "Create a [component] using DM Sans for the title, Geist for description, and Geist Mono for data points. Follow the editorial layout with `py-12` and a `border-b` separator."
