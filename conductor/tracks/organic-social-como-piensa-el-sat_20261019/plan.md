# Implementation Plan: Campaña orgánica de Facebook «Cómo piensa el SAT»

Estados: `[ ]` pendiente · `[~]` en progreso · `[x]` completado (adjuntar hash de commit).

Regla de la campaña: awareness y enseñanza. Un modelo mental por semana. El
orgánico no vende: hace entendible lo que la categoría explica con miedo.

> **¿Vas a empezar la semana 2?** Lee primero
> [`handoff-semana-02.md`](handoff-semana-02.md): es autosuficiente y contiene el
> estado real, las decisiones que faltan y la definición de terminado.

## Phase 0: Fundaciones de contenido

- [x] Task: Escribir el registro de modelos mentales [`model-bank.md`](../../../docs/organic-social-como-piensa-el-sat_20261019/model-bank.md) (frase ancla, origen, objeto visual, `source`, CTA, UTM)
- [x] Task: Documentar la convención UTM de orgánico (`utm_source=facebook`, `utm_medium=organic_social`, `utm_campaign=como-piensa-el-sat`, `utm_content=<modelo>-<formato>`)
- [x] Task: Definir el contrato de CTA (calculadora en primer comentario; `dialog=open` + waitlist para captura directa)
- [x] Task: Alta de `source` faltantes en `CONTEXTUAL_COPY` (`components/waitlist-dialog.tsx`) para los modelos previstos — hecho `modelo_3_bovedas`; faltan los de las semanas 3, 4 y 6
- [x] Task: Calidad — `npm run lint` + `npx tsc --noEmit`
- [ ] Task: Conductor - User Manual Verification 'Phase 0' (Protocol en workflow.md)

## Phase 1: Semana 1 (19–23 oct) — modelo «El IVA no es tuyo / Las 3 bóvedas»

- [x] Task: Documentar copy aprobado, assets y orden de publicación en `semana-01.md`
- [x] Task: Publicar el carrusel de 5 placas (lunes) — publicado 19 oct 2026
- [x] Task: Publicar el Reel de ~34 s (miércoles 21 oct)
- [x] Task: Primer comentario con link a la calculadora + UTMs + `source` — publicado 19 oct 2026
- [ ] Task: Publicar el post de conversación (viernes 23 oct) — copy en `semana-01.md` §3
- [x] Task: Reparto desde el perfil personal del fundador y en grupos de Facebook de freelancers/RESICO
- [ ] Task: Registro de la semana en [`model-bank.md`](../../../docs/organic-social-como-piensa-el-sat_20261019/model-bank.md), §6
- [ ] Task: Conductor - User Manual Verification 'Phase 1' (Protocol en workflow.md)

## Phase 2: Semanas 2–3 (26 oct – 6 nov)

- [x] Task: Handoff autosuficiente para la semana 2 — [`handoff-semana-02.md`](handoff-semana-02.md)
- [x] Task: Semana 2 — resolver las 2 decisiones abiertas del handoff (§6.1 retención de IVA `0.106667` vs 2/3; §6.2 ISR retenido vs ISR propio) con el usuario — resuelto 20 oct 2026: cifras de la constante ($5,333.35 / $52,041.65), sin citar la tasa; ISR retenido omitido con cierre de bucle
- [~] Task: Semana 2 — modelo «Lo que te retienen ya es un pago a cuenta» (carrusel bandera + apoyo + conversación) — copy v2 en [`semana-02.md`](semana-02.md); assets pendientes de render y publicación 26–30 oct. Destino: `/calculadora-resico/retenciones`, `source` `modelo_retenciones`
- [x] Task: Semana 2 — verificar y decidir la presentación de la retención de IVA (`RETENCION_IVA_PM: 0.106667` vs 2/3 exacto) antes de publicar la cifra
- [x] Task: Semana 2 — alta de `source` `modelo_retenciones` en `CONTEXTUAL_COPY`
- [ ] Task: Semana 2 — espejo en Instagram (`utm_source=instagram`, link en bio) — cuenta a cargo del humano
- [ ] Task: Semana 2 — registro y lectura de guardados/compartidos
- [ ] Task: Semana 3 — modelo «Facturado ≠ cobrado», `source` `blog_pue_vs_ppd`
- [ ] Task: Semana 3 — registro y lectura
- [ ] Task: Conductor - User Manual Verification 'Phase 2' (Protocol en workflow.md)

## Phase 3: Semanas 4–6 (9–27 nov)

- [ ] Task: Semana 4 — modelo «Estás jugando dos juegos: ISR e IVA»
- [ ] Task: Semana 5 — modelo «El IVA es un flujo, no un costo»
- [ ] Task: Semana 6 — modelo «El SAT no copia, interpreta», `source` `blog_sat_no_precarga`
- [ ] Task: Registro y lectura acumulada de las tres semanas
- [ ] Task: Conductor - User Manual Verification 'Phase 3' (Protocol en workflow.md)

## Phase 4: Lectura y graduación a paid

- [ ] Task: Identificar el modelo con mejor señal (guardados, compartidos, clics, signups)
- [ ] Task: Convertir ese modelo en creativo de la campaña pagada (reutilizar pixel, UTMs, `/demo-resico`)
- [ ] Task: Convertir el carrusel bandera en Reel (guion = tarjetas del carrusel)
- [ ] Task: Análisis de las 6 semanas + recomendación de siguiente iteración

## Phase 5: Automatización (fase 2)

- [ ] Task: Modelar el registro de modelos como data
- [ ] Task: Extender `app/admin/meta-creatives` con presets por modelo (estáticos + shot list + caption + UTMs)
- [ ] Task: Cola de publicación
- [ ] Task: Archivar track en `conductor/archive/` y actualizar `conductor/tracks.md`

## Deuda técnica (detectada en la semana 2, post-campaña)

- [ ] Unificar la tasa de retención de IVA: hoy conviven 10.6% (`components/tax-calculator/tax-calculator.tsx:233`), 10.66% (metadata de retenciones y `/calculadora-resico`), 10.6667% (guía) y 10.67% (resultado formateado)
- [ ] Evaluar calcular la retención como `IVA trasladado × 2/3` en `lib/tax-calculator.ts` en lugar de `subtotal × 0.106667` (hoy da $5,333.35; el exacto es $5,333.33)
- [ ] Revisar `app/calculadora-resico/retenciones/page.tsx` metadata `description`: dice 10.66% mientras la guía dice 10.6667%
