# Implementation Plan: Standardize bottom-of-post calculator CTA across all posts

## Phase 1: Create Reusable CTA Component

- [ ] Task: Create the component file
    - [ ] Create `components/calculator-cta.tsx`
    - [ ] Define interface for props (`title`, `description`)
    - [ ] Add dark-mode styling (`bg-foreground text-background`) and amber accent border
    - [ ] Integrate button linking to `/calculadora-resico`
- [ ] Task: Verify the component styling
    - [ ] Import and preview the component in an admin page or verify rendering
    - [ ] Run `npm run lint` and `npx tsc --noEmit`
- [ ] Task: Conductor - User Manual Verification 'Phase 1: Create Reusable CTA Component' (Protocol in workflow.md)

## Phase 2: Integrate CTA Component in Blog Pages

- [ ] Task: Update blog posts group 1 (6 posts)
    - [ ] Update `app/blog/calcular-isr-iva-resico/page.tsx`
    - [ ] Update `app/blog/como-hacer-declaracion-mensual-resico/page.tsx`
    - [ ] Update `app/blog/cuando-presentar-declaracion-mensual-resico/page.tsx`
    - [ ] Update `app/blog/cuanto-debo-pagar-resico/page.tsx`
    - [ ] Update `app/blog/declaracion-anual-resico-personas-fisicas/page.tsx`
    - [ ] Update `app/blog/deducciones-resico-isr/page.tsx`
- [ ] Task: Update blog posts group 2 (6 posts)
    - [ ] Update `app/blog/exportar-servicios-resico-como-freelancer/page.tsx`
    - [ ] Update `app/blog/porque-sat-no-precarga-facturas/page.tsx`
    - [ ] Update `app/blog/pue-vs-ppd-diferencia-facturar-cobrar/page.tsx`
    - [ ] Update `app/blog/que-es-resico-freelancers-mexico/page.tsx`
    - [ ] Update `app/blog/que-hacer-si-presentaste-mal-tu-declaracion-sat/page.tsx`
    - [ ] Update `app/blog/saldo-favor-resico/page.tsx`
- [ ] Task: Run project quality checks
    - [ ] Run `npm run lint`
    - [ ] Run `npx tsc --noEmit`
    - [ ] Run `npm run build` to confirm Next.js build compilation
- [ ] Task: Conductor - User Manual Verification 'Phase 2: Integrate CTA Component in Blog Pages' (Protocol in workflow.md)
