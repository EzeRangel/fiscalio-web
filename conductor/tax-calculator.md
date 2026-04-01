# Plan: RESICO Tax Calculator for Fiscalio

This plan covers the implementation of the ISR/IVA RESICO Tax Calculator as per the provided Tech Spec.

## Objective
Implement a modular, client-side tax calculator for RESICO (Régimen Simplificado de Confianza) freelancers in Mexico.

## Key Files & Context
- `lib/tax-constants.ts`: Storage for tax rates and tables.
- `lib/tax-calculator.ts`: Core calculation logic (pure functions).
- `components/tax-calculator/calculator.tsx`: Main UI container.
- `app/page.tsx`: Landing page where the calculator will be integrated.

## Implementation Steps

### 1. Define Constants
Create `lib/tax-constants.ts` with:
- IVA rates (National 16%, Export 0%).
- Retentions (ISR 1.25%, IVA 2/3 of 16%).
- Monthly RESICO ISR Table.

### 2. Core Engine Implementation
Create `lib/tax-calculator.ts`:
- Define types for `TipoIngreso`, `TipoCliente`, `ModoCalculo`, and `CalculoResult`.
- Implement `calculateTax`:
  - `calculateGrossToNet`: standard calculation.
  - `calculateNetToGross`: gross-up calculation.
- Add utility to find the correct ISR rate from the table.

### 3. UI Components (using Shadcn UI)
Create components in `components/tax-calculator/`:
- `tax-calculator.tsx`: Orchestrator using `useState` for inputs and results.
- `tax-input-section.tsx`: Form inputs for amount, mode, and customer type.
- `tax-results-section.tsx`: Breakdown of subtotal, IVA, retentions, and net total.
- `tax-selector.tsx`: Tab-like selector for National vs. Foreign income.

### 4. Integration
- Add the `TaxCalculator` component to the landing page (`app/page.tsx`).
- Ensure it fits the existing theme and design system.

## Verification & Testing
- Manual testing with sample values (e.g., $10,000 MXN gross vs net).
- Verify calculation logic against SAT rules.
- Check responsiveness on mobile.
