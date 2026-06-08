# Plan: Admin Graphics Designer Tool

This plan outlines the phases for implementing the admin graphics designer tool under `app/admin/graphics-designer/`.

## Phase 1: Foundation and UI Layout [checkpoint: 03a6c1e]
- [x] Task: Set up the routing and layout for `/admin/graphics-designer` [8d06f03]
  - [x] Create the folder `app/admin/graphics-designer/` and file `page.tsx`
  - [x] Implement the main page component with sidebar controllers and a central preview canvas
- [x] Task: Integrate design system standards and controls [8d06f03]
  - [x] Build UI controllers for adjusting aspect ratio (1200x630, 800x800, 1080x1350)
  - [x] Add controls for key design system colors (Primary, Accent Amber, Accent Rust)
- [x] Task: Conductor - User Manual Verification 'Phase 1: Foundation and UI Layout' (Protocol in workflow.md) [03a6c1e]

## Phase 2: Graphic Templates & Custom Code Editor [checkpoint: da2453d]
- [x] Task: Implement pre-built visual templates [N/A - Removed by user request]
- [x] Task: Implement live custom JSX/SVG editor [74074ae]
  - [x] Add a text area or simple code container for pasting custom React components or raw SVG markup
  - [x] Build dynamic rendering wrapper that parses and live-updates the canvas preview
- [x] Task: Conductor - User Manual Verification 'Phase 2: Graphic Templates & Custom Code Editor' (Protocol in workflow.md) [da2453d]

## Phase 3: Export & Polishing [checkpoint: a4d9617]
- [x] Task: Add Copy SVG and PNG download functionality [74074ae] (PNG fix in [a7b748c])
  - [x] Implement client-side SVG serialization to copy clean XML to the clipboard
  - [x] Add canvas rendering logic to support "Export PNG" downloads
- [x] Task: Add navigation and clean up admin workspace [f3728af]
  - [x] Add a link to the graphics designer in `/admin/layout.tsx` or key navigation lists
  - [x] Run linting and TypeScript compile checks (`npm run lint`, `npx tsc --noEmit`)
- [x] Task: Conductor - User Manual Verification 'Phase 3: Export & Polishing' (Protocol in workflow.md) [a4d9617]
