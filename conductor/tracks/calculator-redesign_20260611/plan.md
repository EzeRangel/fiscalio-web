# Implementation Plan: Phase 1 - Calculator Redesign (Clarity + UX)

## Phase 1: Setup & Switch Component Scaffolding [e0545be2923da4ee095089175fd9e5ead285ecea]
- [x] Task: Create UI Switch component (2ef46747d744fa8563460543d72d0e91810526c2)
    - [x] Create `components/ui/switch.tsx` using the `@radix-ui/react-switch` primitive and `cn` helper.
- [x] Task: Conductor - User Manual Verification 'Phase 1: Setup & Switch Component Scaffolding' (Protocol in workflow.md)

## Phase 2: Input Section Redesign [f4e38e8133c1ddee2d2905f97ed52fc480881f2a]
- [x] Task: Update inputs in `components/tax-calculator/tax-calculator.tsx` (df761f3dad4a3d96470e88427db64b3daefe0da6)
    - [x] Replace "Jurisdicción de Ingreso" buttons with a modern "¿Tu cliente es mexicano?" Switch component.
    - [x] Replace "Clasificación de Cliente" select dropdown with a "¿Tu cliente es una empresa?" Switch component (only visible when client is Mexican).
    - [x] Replace "Base Imponible (Subtotal)" input label with "¿Cuánto te pagaron?" and style the input box.
- [x] Task: Conductor - User Manual Verification 'Phase 2: Input Section Redesign' (Protocol in workflow.md)

## Phase 3: Results Section Redesign ("3 Bóvedas") [43b83d984b5454e1cfacb002046d9d2b4bcafcf9]
- [x] Task: Redesign output container in `components/tax-calculator/tax-calculator.tsx` (5de6b8a2db7c57ac482e4ecbc682a93049d1fd9e)
    - [x] Remove old document-style headers, hole punch decorations, HASH footer, and "Fin del reporte" section.
    - [x] Build **Bóveda IVA** with dynamic subtitle (normal vs export message) and desgloses.
    - [x] Build **Bóveda ISR** with raw ISR, Retención, and Net ISR/Saldo a favor (Option A logic).
    - [x] Build **Tu Neto Real** hero display with conditional bank deposit note.
    - [x] Update the styling of the "Enviar por correo" button.
- [x] Task: Conductor - User Manual Verification 'Phase 3: Results Section Redesign ("3 Bóvedas")' (Protocol in workflow.md)

## Phase 4: Dialog & Email Synchronization
- [x] Task: Update labels in `components/tax-calculator/send-report-dialog.tsx` (f844de7a6df6d133deb8f40bea060c4fa58ac307)
    - [x] Change dialogue headers and email field labels to match simple "¿Cuánto te pagaron?" and "Neto Real" terms.
- [x] Task: Update labels in `components/emails/tax-report-email.tsx` (f844de7a6df6d133deb8f40bea060c4fa58ac307)
    - [x] Refactor the email structure and text to match the simple naming and values.
- [ ] Task: Conductor - User Manual Verification 'Phase 4: Dialog & Email Synchronization' (Protocol in workflow.md)

## Phase 5: Quality Assurance & Build Verification
- [ ] Task: Run quality checks
    - [ ] Run `pnpm run lint` and verify no lint errors are introduced.
    - [ ] Run `npx tsc --noEmit` and check for type correctness.
    - [ ] Run a test production build (`pnpm run build`) to ensure build compatibility.
- [ ] Task: Conductor - User Manual Verification 'Phase 5: Quality Assurance & Build Verification' (Protocol in workflow.md)
