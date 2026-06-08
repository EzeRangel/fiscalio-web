# Plan: Admin Graphics Designer Tool

This plan outlines the phases for implementing the admin graphics designer tool under `app/admin/graphics-designer/`.

## Phase 1: Foundation and UI Layout
- [x] Task: Set up the routing and layout for `/admin/graphics-designer` [8d06f03]
  - [x] Create the folder `app/admin/graphics-designer/` and file `page.tsx`
  - [x] Implement the main page component with sidebar controllers and a central preview canvas
- [ ] Task: Integrate design system standards and controls
  - [ ] Build UI controllers for adjusting aspect ratio (1200x630, 800x800, 1080x1350)
  - [ ] Add controls for key design system colors (Primary, Accent Amber, Accent Rust)
- [ ] Task: Conductor - User Manual Verification 'Phase 1: Foundation and UI Layout' (Protocol in workflow.md)

## Phase 2: Graphic Templates & Custom Code Editor
- [ ] Task: Implement pre-built visual templates
  - [ ] Create a "Blog Cover" template showing titles, subtitles, and decorative brand elements
  - [ ] Create a "Tax Diagram/Data Table" template using Geist Mono for numbers
- [ ] Task: Implement live custom JSX/SVG editor
  - [ ] Add a text area or simple code container for pasting custom React components or raw SVG markup
  - [ ] Build dynamic rendering wrapper that parses and live-updates the canvas preview
- [ ] Task: Conductor - User Manual Verification 'Phase 2: Graphic Templates & Custom Code Editor' (Protocol in workflow.md)

## Phase 3: Export & Polishing
- [ ] Task: Add Copy SVG and PNG download functionality
  - [ ] Implement client-side SVG serialization to copy clean XML to the clipboard
  - [ ] Add canvas rendering logic to support "Export PNG" downloads
- [ ] Task: Add navigation and clean up admin workspace
  - [ ] Add a link to the graphics designer in `/admin/layout.tsx` or key navigation lists
  - [ ] Run linting and TypeScript compile checks (`npm run lint`, `npx tsc --noEmit`)
- [ ] Task: Conductor - User Manual Verification 'Phase 3: Export & Polishing' (Protocol in workflow.md)
