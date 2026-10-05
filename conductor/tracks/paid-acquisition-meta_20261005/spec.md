# Specification: Primera campaña de adquisición pagada Meta Ads (experimento $1,000 MXN)

## Overview

Preparar y ejecutar la primera campaña de adquisición pagada de Fiscalio en Meta Ads
(Facebook + Instagram) con un presupuesto total de **$1,000 MXN**, tratada como un
**experimento de adquisición y aprendizaje**, no como una campaña cuya validez dependa
de recuperar el dinero.

Oferta de la campaña (no presentarla como "demo" ni "prueba Fiscalio"):

> **Prepara tu borrador de declaración mensual RESICO gratis en 15 minutos.**

Funnel: Meta Ad → Landing → CTA → Cal.com → Sesión 15 min → Borrador con Fiscalio →
Demo → Oferta $419 + IVA → Stripe.

Posicionamiento a mantener: claridad sobre automatización, entendimiento sobre
"optimización". No posicionarse como contador, servicio de optimización fiscal,
herramienta genérica de facturación ni sustituto del contador.

## Estado actual (inventory verificado el 2026-10-05)

| Elemento | Estado | Referencia |
|---|---|---|
| Landing `/demo-resico` con la oferta exacta | ✅ existe | `app/demo-resico/page.tsx` |
| Página post-booking con instrucciones | ✅ existe | `app/demo-resico/gracias/page.tsx` |
| Embed de Cal.com (`ezerangel/demo-fiscalio`) | ✅ existe (WIP sin commitear) | `components/cal-embed.tsx` |
| GA4 `landing_view` / `cta_click` / `calendar_view` / `booking` | ✅ disparándose | `components/page-view.tsx`, `app/demo-resico/demo-cta.tsx` |
| Meta Pixel (`NEXT_PUBLIC_META_PIXEL_ID`) | ✅ en layout; eventos `PageView`/`Schedule`/`Lead` | `app/layout.tsx` |
| Pago $419 + IVA (Payment Link + webhook + `/descarga`) | ✅ existe | `app/api/stripe/webhook/route.ts` |
| Helper de UTMs (`withCampaignParams`) | ⚠️ existe pero sin uso efectivo | `lib/analytics.ts` |
| Track de experimento / Campaign Launch Pack | ❌ no existía | este track |

## Functional Requirements

### F0 — Estabilizar WIP
1. Corregir el import roto de `CalEmbed` en `app/demo-resico/page.tsx` (error TS2614).
2. Remover `prettier` de `dependencies` en `package.json` (se coló como dep de producción).
3. Commit del WIP actual del embed de Cal.com (refactor a `@calcom/embed-react`).

### F1 — Tracking y medición (§13)
1. **Definiciones de conversión** documentadas para GA4 y Meta: `landing_view`,
   `cta_click`, `calendar_view`, `booking`, `attended`, `qualified`,
   `trial/product_use`, `purchase` (cuál es evento de optimización de la campaña).
2. **Corregir doble conteo de `booking`**: lo disparan el callback del embed *y* la
   página `/gracias`. Debe contabilizarse una sola vez por lead.
3. **`calendar_view` honesto**: hoy se dispara en el click, no al abrir el calendario.
   Renombrar (`cta_click` cubre el click) o dispararlo realmente al abrir Cal.
4. **`purchase` medible**: el webhook de Stripe solo hace `console.log` de
   `purchase_completed`. Definir disparo en GA4 o proceso manual documentado.
5. **Preservar campaign / ad set / ad / UTM / lead identifier**: restaurar el
   paso de UTMs y `fbclid` hacia Cal.com (hoy `withCampaignParams` se calcula en
   `demo-cta.tsx` pero ya no se renderiza), para poder responder "qué anuncio produjo
   personas que asistieron y compraron".
6. Meta: agregar `ViewContent` en landing y parámetros (UTM, content) en
   `Schedule`/`Lead`; verificar entrega del evento en Events Manager.
7. Verificar env vars en producción: `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_META_PIXEL_ID`,
   `CAL_COM_DEMO_URL`.
8. Entregar **Tracking/GA4 audit** documentado en este track.

### F2 — Auditoría Cal.com (§11–12)
1. Verificar evento `demo-fiscalio`: duración **15 min** (la doc de despliegue solo
   documenta un evento "Onboarding" de 30 min), timezone, buffer, cupo semanal.
2. Verificar confirmación, reminders, redirect de éxito a `/demo-resico/gracias`,
   e instrucciones previas también en el email de Cal.com.
3. Configurar **preguntas de qualification** mínimas:
   - ¿Actualmente tributas en RESICO? (Sí / No / No estoy seguro)
   - ¿Qué quieres revisar? (Declaración mensual / ISR / IVA / Retenciones / No sé por dónde empezar)
   - Research: ¿Qué es lo que más te preocupa de tu declaración? (6 opciones + Otro)
   - Sin información fiscal sensible innecesaria: nada de e.firma ni contraseñas.
4. Revisar experiencia móvil del flujo de booking.
5. Entregar **Cal.com audit** documentado en este track.

### F3 — Landing audit (§10)
1. Verificar correspondencia estricta ad → problema → oferta → landing → agenda.
2. Checklist: qué es la sesión, quién debe agendar, qué se revisa, qué preparar,
   duración, gratuidad, qué pasa después. Sin convertirla en explicación extensa
   de Fiscalio (el producto se vende en la sesión).
3. Entregar **Landing audit** documentado en este track.

### F4 — Research GTM (§18–19)
1. Meta Ads: formatos actuales en México, prácticas Reels/Stories/Feed, requisitos
   de tracking, optimización para conversiones/leads, prácticas con presupuesto pequeño.
2. Audiencia: tamaño/ características de audiencia MX ligada a freelancers/RESICO,
   intereses disponibles hoy, limitaciones de targeting, cuándo conviene broad.
3. Competencia: contadores RESICO, software fiscal mexicano, servicios de declaración,
   herramientas para freelancers → hooks, ofertas, CTA, formatos, pricing, promesas,
   objeciones. Patrones y diferenciación, **nunca copiar**.
4. Creative research: formatos para servicios fiscales, SaaS B2C/B2SMB,
   founder-led ads, educación fiscal en MX.
5. Documentar **señales que justificarían una prueba en Google Search**
   (p. ej. tracción orgánica en «declaración mensual RESICO», «cuánto pagar RESICO»).
   No migrar automáticamente a Google.

### F5 — Campaign Launch Pack (§20)
Entregar los 19 elementos, todos documentados en este track:
1. Hipótesis de campaña (H1 problema, H2 oferta, H3 producto ↔ eventos medidos)
2. Audience strategy
3. Campaign structure — **1 campaña, 1 conjunto, 3–4 creativos**; sin segmentar
   por edad/género/profesión/plataforma sin hipótesis
4. Budget allocation — $1,000 MXN, inicio $100–150 MXN/día ~1 semana, sin gastar de golpe
5. Creative strategy
6. Copy final por anuncio: Ángulo A (incertidumbre), B (trabajo manual),
   C (miedo a equivocarse), D (founder-led video 20–30 s vertical)
7. Formatos y dimensiones de cada creativo
8. Recomendación de targeting
9. Landing audit (F3)
10. Cal.com audit (F2)
11. Tracking/GA4 audit (F1)
12. Convención UTM
13. Definiciones de conversión (F1)
14. Campos de qualification (F2)
15. Plan de experimentación + **tabla de registro**: Lead | Creative | Booking |
    Attended | Qualified | Product used | Paid | Amount | **Known person? (Sí/No)**
16. Checklist de monitoreo diario
17. Decision rules (cuándo pausar, cuándo ajustar, qué no tocar)
18. Template de análisis post-campaña
19. Recomendación de qué probar después según cada resultado

### F6 — Lanzamiento y operación
1. Setup en Meta Ads Manager (estructura + evento de conversión + presupuesto).
2. QA end-to-end del funnel con UTM de prueba: ad → landing → booking → `/gracias`
   → asistencia → sesión → Stripe → `/descarga`.
3. Operación: registro manual de `attended`, `qualified`, `trial/product_use`,
   `purchase` en la tabla de experimentación, separando conocidos vs externos.
4. Monitoreo diario según checklist; no tocar targeting/copy/landing sin registrar el cambio.
5. Análisis post-campaña y recomendación de siguiente iteración.

## Non-Functional Requirements

- **No reconstruir infraestructura**: landing, Cal.com, GA4 y Stripe ya existen.
- **Copy en español** (contexto MX), factual: sin "paga menos impuestos",
  "optimiza tus impuestos", "evita multas", "garantizamos que tu declaración es
  correcta", "declaramos por ti" ni "agenda una demo" como mensaje principal.
- Cambios de código: `npm run lint` + `npx tsc --noEmit` (+ `npm run build` si
  cambian rutas), sin comentarios inline, tokens de `app/globals.css`.
- Variables constantes: no cambiar copy, landing y oferta simultáneamente sin
  registrar el cambio; no introducir una segunda oferta durante el experimento.

## Acceptance Criteria

- [ ] `npm run lint` y `npx tsc --noEmit` pasan (WIP estabilizado).
- [ ] Ningún evento del funnel se duplica y `purchase` es registrable.
- [ ] Cada booking es atribuible a un anuncio (UTM/lead identifier preservado).
- [ ] Cal.com: 15 min, timezone, reminders, redirect y preguntas de qualification verificados.
- [ ] Landing, Cal.com y tracking audits documentados en este track.
- [ ] Campaign Launch Pack completo (19 entregables) dentro de este track.
- [ ] Tabla de experimentación creada y operativa durante la campaña.
- [ ] Análisis post-campaña entregado con recomendación de siguiente paso.

## Out of Scope

- Cambiar el precio ($419 + IVA) o el modelo de pago (Stripe Payment Link existente).
- Migrar la campaña a Google Search (solo documentar señales que lo justifiquen).
- Segmentación por edad/género/profesión/plataforma en la primera iteración.
- Rediseñar el producto, la calculadora o el blog.
- Validar PMF con los $1,000 (el objetivo es evidencia y cuello de botella, no ROI).
