---
version: alpha
name: Fiscalio Design System
colors:
  background: "#fcfaf6"
  foreground: "#262626"
  primary: "#3a3a3a"
  secondary: "#f0f0f0"
  muted: "#f5f5f5"
  accent: "#f0f0f0"
  destructive: "#ce2c31"
  accent-amber: "#fbbf24"
  accent-rust: "#b45309"
typography:
  h1:
    fontFamily: DM Sans
    fontSize: 4.5rem
    fontWeight: 700
  h2:
    fontFamily: DM Sans
    fontSize: 2.5rem
    fontWeight: 600
  h3:
    fontFamily: DM Sans
    fontSize: 1.5rem
    fontWeight: 600
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
  md: 8px
spacing:
  base: 4px
  container: 1280px
---

# Fiscalio Design System

This document outlines the visual identity and UI patterns for Fiscalio. It serves as a single source of truth for design decisions and as a guide for building consistent interfaces.

## Overview

- **Mood:** Editorial, sophisticated, trustworthy, and precise.
- **Density:** Spacious but organized, prioritizing readability for financial data.
- **Philosophy:** "Warm Precision." Combining clinical financial accuracy with a warm, human-centric aesthetic (warm neutrals, soft shadows).
- **Aesthetic:** High-contrast typography (Geist vs DM Sans), minimal borders, and a refined "paper-like" background.

## Colors

The palette is rooted in high-contrast neutrals and editorial accents that evoke a sense of professional precision and warmth.

- **Background (#fcfaf6):** A warm, paper-like neutral base.
- **Foreground (#262626):** Primary charcoal text and icons.
- **Primary (#3a3a3a):** High-contrast brand identity and CTAs.
- **Secondary (#f0f0f0):** Subtle containers and background shifts.
- **Muted (#f5f5f5):** De-emphasized text and backgrounds.
- **Destructive (#ce2c31):** Used for errors and critical deletions.

### Editorial Accents

- **Accent Amber (oklch(0.65 0.15 65)):** Used for warnings or highlights.
- **Accent Rust (oklch(0.55 0.12 35)):** Used for deep highlights or secondary calls to action.

## Typography

The typography strategy leverages the character of DM Sans for display and the functional precision of Geist for body and data.

- **Display (DM Sans):** Used for all major section headings, hero sections, and labels needing character.
- **Sans (Geist):** Used for UI elements, body text, and functional copy.
- **Mono (Geist Mono):** Used for all currency values, tax percentages, and technical metadata.

### Hierarchy

| Level         | Font    | Size               | Weight | Case                |
| :------------ | :------ | :----------------- | :----- | :------------------ |
| **H1**        | Display | 3.5rem - 4.5rem    | 700    | Default             |
| **H2**        | Display | 2rem - 2.5rem      | 600    | Default             |
| **H3**        | Display | 1.5rem             | 600    | Default             |
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

- **Corner Radius:** All interactive elements, containers, and cards utilize a consistent `0.5rem` (8px) radius.
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

- **Style:** Minimal, rounded-md (8px), subtle `shadow-xs`.
- **States:** Focus triggers a visible border-ring transition.
- **Dark Mode:** Uses `bg-input/30` for a semi-transparent textured look.

## Do's and Don'ts

- Do use **DM Sans** for all major section headings.
- Do use **Geist Mono** for all currency values and tax percentages.
- Do maintain the "Warm Neutral" background; avoid pure `#ffffff` for page backgrounds.
- Do keep border radii consistent at `0.5rem` (8px).
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
