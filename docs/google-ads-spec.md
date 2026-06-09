# Google Ads Specification: Fiscalio

## 1. Overview

This specification outlines the business rules and constraints for generating Google Ads assets (Headlines and Descriptions) for Fiscalio, based on the `product-marketing-context.md`.

## 2. Input Reference

- **Product Specification:** [product-marketing-context.md](./product-marketing-context.md)

## 3. Asset Constraints

All generated copy must strictly adhere to the following character limits:

- **Headlines:** Maximum 30 characters.
- **Descriptions:** Maximum 90 characters.

## 4. Business Rules

- **Language:** Spanish (Mexican context).
- **Tone:** Professional, tech-forward, and efficient.
- **Value Propositions:**
  - **Effortless Automation:** Focus on the "Hero Hook" of saving time and autonomous classification.
  - **RESICO Optimization:** Highlight specialization for the RESICO regime.
  - **Privacy & Speed:** Emphasize the offline-first/local data aspect.

## 5. Output Format

The output must be provided in a structured format (CSV) to facilitate direct import into Google Ads.

### Expected CSV Columns

- `Campaign`: Name of the campaign.
- `Ad Group`: Specific theme (e.g., Automation, RESICO).
- `Headline 1` to `Headline 15`: Up to 15 headlines (30 chars max each).
- `Description 1` to `Description 4`: Up to 15 descriptions (90 chars max each).
- `Final URL`: Destination URL (e.g., `https://fiscalio.app`).

## 6. Implementation Example

### Campaign: Alpha Launch - Search

| Ad Group   | Headline (30 max)           | Description (90 max)                                                                    |
| ---------- | --------------------------- | --------------------------------------------------------------------------------------- |
| Automation | Automatiza tu contabilidad  | Fiscalio aprende de tus facturas y automatiza la clasificación. Ahorra horas cada mes.  |
| Automation | Clasifica facturas con IA   | El motor autónomo que los freelancers RESICO esperaban. Gestión rápida y privada.       |
| RESICO     | Guía Práctica RESICO Gratis | La herramienta diseñada desde cero para el régimen RESICO. Descarga nuestra guía ahora. |
| RESICO     | Impuestos para Freelancers  | Calcula tus impuestos con precisión y cumple con el SAT sin complicaciones manuales.    |
