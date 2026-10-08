# Implementation Plan: Primera campaña de adquisición pagada Meta Ads ($1,000 MXN)

Estados: `[ ]` pendiente · `[~]` en progreso · `[x]` completado (adjuntar hash de commit).

Regla del experimento: descubrir si Meta funciona y por qué, no demostrar que funciona.

## Phase 0: Estabilizar WIP (build roto) (Checkpoint: 15b5cfe)

- [x] Task: Fix del import roto de `CalEmbed` en `app/demo-resico/page.tsx` (TS2614) (4d747aa)
- [x] Task: Remover `prettier` de `dependencies` en `package.json` (4d747aa)
- [x] Task: Calidad — `npm run lint` + `npx tsc --noEmit` + `npm run build` (4d747aa)
- [x] Task: Commit del WIP del embed de Cal.com (`@calcom/embed-react`) — incluye restaurar `cta_click`/`calendar_view`/`Schedule` perdidos en el refactor vía `onInteract` (4d747aa)

## Phase 1: Tracking / GA4 / Meta audit (§13) — entregable: Tracking audit (Checkpoint: 6dfb715)

- [x] Task: Definir y documentar conversiones (GA4 y Meta) y evento de optimización de campaña (72b4fbf)
- [x] Task: Fix doble conteo de `booking` (embed + `app/demo-resico/gracias`) vía `trackBookingOnce` + `booking_uid` (346093d)
- [x] Task: Fix/renombrar `calendar_view` — ahora dispara en `linkReady` de Cal, no en el click (346093d)
- [x] Task: Hacer registrable `purchase` — `PurchaseView` en `/descarga` con `transaction_id` verificado server-side (346093d)
- [x] Task: Restaurar propagación de UTMs/`fbclid`/lead identifier — `rememberCampaignParams` + merge en `trackEvent` + `forwardQueryParams` al iframe de Cal (346093d)
- [x] Task: Meta — `ViewContent` en landing + parámetros en `Schedule`/`Lead`/`Purchase` (346093d). *Verificación en Events Manager: pendiente externo, ver `tracking-audit.md` §4*
- [x] Task: Verificar env vars en producción — hallazgos: falta `NEXT_PUBLIC_META_PIXEL_ID` en Vercel y `/demo-resico` no está desplegado (72b4fbf)
- [x] Task: Escribir Tracking/GA4 audit → `tracking-audit.md` de este track (72b4fbf)
- [ ] Task: (externo, antes de lanzar) Setear `NEXT_PUBLIC_META_PIXEL_ID` en Vercel, push `staging` → merge `main` → deploy, re-verificar pixel + `/demo-resico` + `CAL_COM_DEMO_URL` en producción
- [x] Task: Conductor - User Manual Verification 'Phase 1' (Protocol en workflow.md) (6dfb715)

## Phase 2: Cal.com audit (§11–12) — entregable: Cal.com audit (Checkpoint: fd7de2a)

- [x] Task: Verificar evento `ezerangel/demo-fiscalio`: 15 min, timezone, buffer, cupo semanal
- [x] Task: Verificar el recordatorio 24 h de Cal (último chequeo de la prueba de booking) — correo recibido ✅ (2026-10-06). Acumulado de la prueba: redirect en **escritorio y móvil** ✅, email de confirmación ✅, UTMs guardados por Cal ✅. *Residuo del antiguo task: `Redirect on booking` estaba tras paywall y quedó resuelto en código (`bc58f6b`); detalle en `cal-audit.md` §3–§4* (cd1ed40)
- [x] Task: Instrucciones previas también en el email de Cal.com (ingresos del mes + CFDIs; sin e.firma ni contraseñas)
- [x] Task: Configurar preguntas de qualification (RESICO sí/no · qué revisar · preocupación de research) — decisión 2026-10-06: se mantiene la config. actual, texto libre (ver `cal-audit.md` §2)
- [x] Task: Revisar experiencia móvil del booking
- [x] Task: Escribir Cal.com audit (7878137)
- [x] Task: Conductor - User Manual Verification 'Phase 2' (Protocol en workflow.md) (fd7de2a)

## Phase 3: Landing audit (§10) — entregable: Landing audit (Checkpoint: 0f34861)

- [x] Task: Revisar correspondencia ad → problema → oferta → landing → agenda en `/demo-resico` (2134433)
- [x] Task: Checklist: qué es la sesión / quién / qué se revisa / qué preparar / duración / gratuita / qué pasa después (2134433)
- [x] Task: Verificar OG/imagen y consistencia de mensaje con los creativos (2134433)
- [x] Task: Escribir Landing audit (2134433)

## Phase 4: Research GTM (§18–19) — entregable: Research notes

- [x] Task: Meta Ads MX — formatos, Reels/Stories/Feed, tracking, optimización, presupuesto pequeño (6e68f71)
- [x] Task: Audiencia MX freelancers/RESICO — tamaño, intereses disponibles, limitaciones, broad vs intereses (6e68f71)
- [x] Task: Competencia (contadores RESICO, software fiscal, servicios de declaración) — hooks/ofertas/CTA/pricing/objeciones (6e68f71)
- [x] Task: Creative research (servicios fiscales, SaaS B2C/B2SMB, founder-led, educación fiscal MX) (6e68f71)
- [x] Task: Documentar señales que justificarían una prueba en Google Search (§19) (6e68f71)

## Phase 5: Campaign Launch Pack (§20) — entregable: `campaign-launch-pack.md`

- [ ] Task: Hipótesis de campaña (H1/H2/H3 ↔ eventos medidos)
- [ ] Task: Audience strategy + recomendación de targeting
- [ ] Task: Campaign structure (1 campaña / 1 conjunto / 3–4 creativos)
- [ ] Task: Budget allocation ($1,000; $100–150/día ~1 semana; reglas de ajuste)
- [ ] Task: Creative strategy + formatos/dimensiones de cada creativo
- [ ] Task: Copy final Ángulo A (incertidumbre)
- [ ] Task: Copy final Ángulo B (trabajo manual)
- [ ] Task: Copy final Ángulo C (miedo a equivocarse)
- [ ] Task: Ángulo D founder-led — video vertical 20–30 s (guion optimizado, grabación, edición)
- [ ] Task: Convención UTM + definiciones de conversión
- [ ] Task: Campos de qualification (respaldar F2)
- [ ] Task: Plan de experimentación + tabla de registro (incluye columna `Known person?`)
- [ ] Task: Checklist de monitoreo diario + decision rules
- [ ] Task: Template de análisis post-campaña + recomendaciones por resultado
- [ ] Task: Conductor - User Manual Verification 'Phase 5' (Protocol en workflow.md)

## Phase 6: Lanzamiento y operación

- [ ] Task: Setup en Meta Ads Manager (estructura, evento de conversión, presupuesto, UTMs)
- [ ] Task: QA end-to-end con UTM de prueba (ad → landing → booking → gracias → Stripe → descarga)
- [ ] Task: Lanzamiento con $100–150 MXN/día
- [ ] Task: Operación diaria — checklist, registro en tabla, marcar conocidos vs externos
- [ ] Task: Registro manual de `attended` / `qualified` / `trial/product_use` / `purchase`
- [ ] Task: Análisis post-campaña + recomendación de siguiente iteración (Meta, mensaje, oferta, Google Search o funnel)
- [ ] Task: Archivar track en `conductor/archive/` y actualizar `conductor/tracks.md`
