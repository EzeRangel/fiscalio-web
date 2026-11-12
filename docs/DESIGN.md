---
version: alpha
name: Fiscalio Design System
colors:
  background: "#fcfaf6"
  foreground: "#0e0b07"
  primary: "#272017"
  secondary: "#f1eee9"
  muted: "#f4f1ed"
  accent: "#f1eee9"
  destructive: "#d40924"
  accent-amber: "#cc7800"
  accent-rust: "#ac543f"
typography:
  h1:
    fontFamily: DM Sans
    fontSize: 3.75rem
    fontWeight: 500
  h2:
    fontFamily: DM Sans
    fontSize: 1.875rem
    fontWeight: 500
  h3:
    fontFamily: DM Sans
    fontSize: 1.5rem
    fontWeight: 500
  body:
    fontFamily: Geist
    fontSize: 1rem
    fontWeight: 400
  label:
    fontFamily: Geist
    fontSize: 0.875rem
    fontWeight: 500
  data:
    fontFamily: Geist Mono
    fontSize: 0.875rem
    fontWeight: 400
rounded:
  none: 0px
spacing:
  base: 4px
  container: 1280px
---

# Fiscalio Design System

This document details the UI implementation of the Fiscalio design system. Brand, voice and the visual system are governed by [`BRANDBOOK.md`](./BRANDBOOK.md) (visual version at `/admin/brandbook`); if the two disagree, the brandbook wins.

## Overview

- **Mood:** Editorial, sophisticated, trustworthy, and precise.
- **Density:** Spacious but organized, prioritizing readability for financial data.
- **Philosophy:** "Warm Precision." Combining clinical financial accuracy with a warm, human-centric aesthetic (warm neutrals, soft shadows).
- **Aesthetic:** High-contrast typography (Geist vs DM Sans), minimal borders, and a refined "paper-like" background.

## Colors

The palette is rooted in high-contrast neutrals and editorial accents that evoke a sense of professional precision and warmth.

- **Background (#fcfaf6):** A warm, paper-like neutral base.
- **Foreground (#0e0b07):** Primary charcoal text and icons.
- **Primary (#272017):** High-contrast brand identity and CTAs.
- **Secondary (#f1eee9):** Subtle containers and background shifts.
- **Muted (#f4f1ed):** De-emphasized text and backgrounds.
- **Destructive (#d40924):** Used for errors and critical deletions.

### Editorial Accents

- **Accent Amber (oklch(0.65 0.15 65), #cc7800):** Used for warnings or highlights.
- **Accent Rust (oklch(0.55 0.12 35), #ac543f):** Used for deep highlights or secondary calls to action.

## Typography

The typography strategy leverages the character of DM Sans for display and the functional precision of Geist for body and data.

- **Display (DM Sans):** Used for all major section headings, hero sections, and labels needing character.
- **Sans (Geist):** Used for UI elements, body text, and functional copy.
- **Mono (Geist Mono):** Used for all currency values, tax percentages, and technical metadata.

### Hierarchy

| Level         | Font    | Size               | Weight | Case                |
| :------------ | :------ | :----------------- | :----- | :------------------ |
| **H1**        | Display | 2.25rem - 3.75rem  | 500    | Default             |
| **H2**        | Display | 1.5rem - 1.875rem  | 500    | Default             |
| **H3**        | Display | 1.25rem - 1.5rem   | 500    | Default             |
| **Body**      | Sans    | 1rem (16px)        | 400    | Default             |
| **Label**     | Sans    | 0.875rem           | 500    | Default             |
| **Data/Mono** | Mono    | 0.75rem - 0.875rem | 400    | Default / Uppercase |

## Layout

The layout follows an editorial approach with generous whitespace and a clear 12-column grid for complex data.

- **Grid:** 12-column system for complex layouts.
- **Spacing Scale:** 4px base (Tailwind default).
- **Container:** `max-w-7xl` (1280px) centered.
- **Whitespace:** Generous vertical padding (`py-12` to `py-24`) between major sections to maintain the "editorial" feel.

## Elevation & Depth

Visual hierarchy is conveyed through tonal layers and subtle border shifts rather than heavy shadows.

- **Philosophy:** Flattened hierarchy. Elevation is shown via subtle border shifts.
- **Shadows:** Only use `shadow-sm` or `shadow-xs` for interactive elements like inputs and cards.
- **Surfaces:** `Card` uses a pure white (`#ffffff`) in light mode and a deep grey in dark mode.

## Shapes

The design system maintains consistent structural integrity through standardized corner treatments.

- **Corner Radius:** Structure is straight, objects are soft. All interactive elements, containers, cards and screenshots use `0px` (`rounded-none`). Rounded corners are reserved for mental-model objects in diagrams (vaults, cards, boards), the logo mark and timeline nodes. See BRANDBOOK.md §06.
- **Borders:** Thin, subtle borders (`oklch(0.9 0.008 85)`) are used to define boundaries without adding visual weight.

## Components

Style guidance for core component atoms.

### Buttons

- **Default (Primary):** High contrast, dark background (Light) or light background (Dark).
- **Outline:** Thin border, subtle shadow.
- **States:**
  - _Hover_: Slight opacity change or background shift (`hover:bg-primary/90`).
  - _Focus_: 3px ring with `ring-ring/50`.

### Inputs

- **Style:** Minimal, sharp (`rounded-none`), subtle `shadow-xs`.
- **States:** Focus triggers a visible border-ring transition.
- **Dark Mode:** Uses `bg-input/30` for a semi-transparent textured look.

## Do's and Don'ts

- Do use **DM Sans** for all major section headings.
- Do use **Geist Mono** for all currency values and tax percentages.
- Do maintain the "Warm Neutral" background; avoid pure `#ffffff` for page backgrounds.
- Do keep border radii consistent at `0px` (`rounded-none`).
- Don't use heavy box shadows or gradients.
- Don't use bright, saturated blues or greens (stick to the warm rust/amber/charcoal palette).
- Don't crowd data; give tables and charts ample breathing room.

## Responsive Behavior

- **Breakpoints**:
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px
- **Touch Targets**: Minimum 44px height for interactive elements on mobile (`h-11` or `h-12`).

## Agent Prompt Guide

### Color Quick Ref (Tailwind)

- `bg-background`: Warm neutral base.
- `text-foreground`: Primary charcoal text.
- `bg-primary`: Dark action buttons.
- `text-accent-amber`: Warning/Highlight color.

### Component Prompt Pattern

> "Create a [component] using DM Sans for the title, Geist for description, and Geist Mono for data points. Follow the editorial layout with `py-12` and a `border-b` separator."
