# Implementation Plan: Standardize bottom-of-post calculator CTA across all posts

## Phase 1: Create Reusable CTA Component (Checkpoint: e944f70)

- [x] Task: Create the component file (b093f44)
    - [x] Create `components/calculator-cta.tsx`
    - [x] Define interface for props (`title`, `description`)
    - [x] Add dark-mode styling (`bg-foreground text-background`) and amber accent border
    - [x] Integrate button linking to `/calculadora-resico`
- [x] Task: Verify the component styling (0db371e)
    - [x] Import and preview the component in an admin page or verify rendering
    - [x] Run `npm run lint` and `npx tsc --noEmit`
- [x] Task: Conductor - User Manual Verification 'Phase 1: Create Reusable CTA Component' (Protocol in workflow.md) (e944f70)

## Phase 2: Integrate CTA Component in Blog Pages

- [x] Task: Update blog posts group 1 (6 posts) (cb87455)
    - [x] Update `app/blog/calcular-isr-iva-resico/page.tsx`
    - [x] Update `app/blog/como-hacer-declaracion-mensual-resico/page.tsx`
    - [x] Update `app/blog/cuando-presentar-declaracion-mensual-resico/page.tsx`
    - [x] Update `app/blog/cuanto-debo-pagar-resico/page.tsx`
    - [x] Update `app/blog/declaracion-anual-resico-personas-fisicas/page.tsx`
    - [x] Update `app/blog/deducciones-resico-isr/page.tsx`
- [x] Task: Update blog posts group 2 (6 posts) (d936461)
    - [x] Update `app/blog/exportar-servicios-resico-como-freelancer/page.tsx`
    - [x] Update `app/blog/porque-sat-no-precarga-facturas/page.tsx`
    - [x] Update `app/blog/pue-vs-ppd-diferencia-facturar-cobrar/page.tsx`
    - [x] Update `app/blog/que-es-resico-freelancers-mexico/page.tsx`
    - [x] Update `app/blog/que-hacer-si-presentaste-mal-tu-declaracion-sat/page.tsx`
    - [x] Update `app/blog/saldo-favor-resico/page.tsx`
- [x] Task: Run project quality checks
    - [x] Run `npm run lint` (skipped: no eslint package)
    - [x] Run `npx tsc --noEmit` (passed)
    - [x] Run `npm run build` to confirm Next.js build compilation (skipped by user request)
- [ ] Task: Conductor - User Manual Verification 'Phase 2: Integrate CTA Component in Blog Pages' (Protocol in workflow.md)
