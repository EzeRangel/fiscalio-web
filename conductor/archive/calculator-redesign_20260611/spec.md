# Track Specification: Phase 1 - Calculator Redesign (Clarity + UX)

## Overview
Redesign the RESICO tax calculator component at `/calculadora-resico` to improve visual clarity and click-through rates. This change shifts the interface metaphor away from an intimidating "document report" (hole punches, code hashes, accounting jargon) to a clean, modern layout organized around the "3 Bóvedas" framework.

## Functional Requirements
### 1. Simplified Inputs (Left Column)
- **Amount Input:** Label it "¿Cuánto te pagaron?" (replaces "Base Imponible (Subtotal)").
- **Mexican Client Toggle:** A Switch component (label: "¿Tu cliente es mexicano?") controlling `tipoIngreso` (`NACIONAL` / `EXTRANJERO`).
- **Company Client Toggle:** A Switch component (label: "¿Tu cliente es una empresa?") controlling `tipoCliente` (`MORAL` / `FISICA`). Only visible when the client is Mexican.
- **Legal Disclaimer:** Keep the existing disclaimer note at the bottom.

### 2. "3 Bóvedas" Results Layout (Right Column)
- **Bóveda IVA:**
  - Displays: "IVA que cobraste" (16% or 0%), "Retención de IVA" (if applicable), and "IVA neto a pagar".
  - Subtitle: *"Este dinero no es tuyo. El SAT te lo presta para que lo recaudes. No lo gastes."*
  - Dynamic Subtitle for Export: If IVA is $0: *"Al exportar servicios al extranjero, tu tasa de IVA es del 0% y no tienes que recaudar este impuesto."*
- **Bóveda ISR:**
  - Displays: "ISR mensual" (the raw `isrBruto`), "Retención de ISR" (if applicable), and "ISR neto a pagar" (or "Saldo a favor" if negative).
  - Subtitle: *"Esto es lo que pagas al SAT por facturar en RESICO. Tu tasa es del X% porque facturas hasta $Y."*
- **Tu Neto Real (Hero/Largest):**
  - Displays: "Neto Real" (`result.utilidadReal`).
  - Subtitle: *"Esto es lo que realmente te queda después de impuestos. Puedes gastarlo sin crear deudas futuras."*
  - Conditional note below it:
    - If IVA > 0: *"Depósito bancario estimado: $X (incluye IVA que no es tuyo)"*
    - If IVA = 0: *"Depósito bancario estimado: $X"*

### 3. Dialog and Email Sync
- Update labels and text in `send-report-dialog.tsx` and the email template `components/emails/tax-report-email.tsx` to align with the simplified naming.

## UI/UX & Non-Functional Requirements
- **Theme/Tokens:** Keep `font-mono` for all numbers. Use current Tailwind v4 tokens (accent colors).
- **Cleanup:** Remove old visual elements: hole-punch decorations, header document codes, random auth seal hash footer, and "Fin del reporte" text.
- **Interactions:** Use smooth transitions and modern interactive elements (like the shadcn Switch component).

## Out of Scope
- Phase 2 (blog post link graph, blog index banner) and Phase 3 (calculator SEO guide links and FAQ accordion). These will be handled in subsequent tracks.
