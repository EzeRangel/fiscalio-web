# Specification: Admin Graphics Designer Tool

## Overview
The goal of this track is to implement an internal admin tool (`/admin/graphics-designer`) that allows the team and coding agents to draft, customize, and generate graphics, diagrams, illustrations, and visual assets for blog posts and the marketing site. This tool eliminates the need for manual design in external software, enabling fast, code-driven graphic iterations that adhere strictly to the Fiscalio Design System.

## Functional Requirements
1. **Interactive Preview Canvas:**
   - Supports multiple aspect ratios (e.g., 1200x630 for OpenGraph / blog covers, 800x800 for square diagrams/carousels, 1080x1350 for portrait LinkedIn posts).
   - High-fidelity live rendering with actual Geist, Geist Mono, and DM Sans fonts.
   - Paper-like warm neutral background option matching `#fcfaf6`.
2. **Template Library:**
   - Pre-designed structural components/templates (e.g., Quote card, Feature Grid preview, Tax breakdown chart, Step sequence diagram).
   - Customizable color inputs (Primary, Foreground, Accent Amber, Accent Rust).
3. **Interactive Code & Value Editor:**
   - Input controls to customize text labels, titles, data points, and percentages dynamically.
   - Raw SVG/React JSX custom code playground that live-updates the canvas, allowing coding agents to easily paste and refine custom illustrations or diagrams.
4. **Asset Exporting:**
   - Copy SVG code directly to clipboard.
   - PNG export functionality via canvas serialization or an internal API endpoint.

## Non-Functional Requirements
- **Responsive Layout:** Responsive designer editor, allowing use on desktop screens (which is the primary target for admin operations).
- **Style Consistency:** The canvas defaults to the Fiscalio design rules (warm neutral, DM Sans headings, Geist Mono numbers).
- **Zero-Dependency Export:** Exported assets should render correctly standalone.

## Acceptance Criteria
- Navigating to `/admin/graphics-designer` loads the graphics constructor panel.
- The user can select a pre-made template (e.g., Blog Cover or Diagram) and edit values (title, description) which immediately reflect in the preview.
- Custom raw React/SVG code can be pasted and rendered correctly.
- Clicking "Copy SVG" copies clean, valid SVG XML to the clipboard.
- Clicking "Export PNG" downloads the rendered canvas as a high-resolution PNG image.
