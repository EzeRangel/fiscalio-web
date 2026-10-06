# Tracking / GA4 / Meta Audit — paid-acquisition-meta_20261005

Auditoría de medición del funnel para la campaña Meta ($1,000 MXN).
Fecha de verificación: 2026-10-05.

## 1. Funnel ↔ eventos (níveles de métricas del handoff §14)

| Nivel | Métrica | Evento GA4 | Meta Pixel | Registro |
|---|---|---|---|---|
| 1 | CTR / engagement de landing | `landing_view`, `cta_click` | `PageView`, `ViewContent` | automático |
| 2 | Coste por booking | `booking` | `Lead` | automático (dedupe) |
| 3 | Show-up rate | — | — | **manual** (`attended`) |
| 4 | Coste por sesión asistida | — | — | **manual** (`attended`) |
| 5 | Sesión → pago | `purchase` | `Purchase` | automático + tabla manual |
| 6 | CAC | derivado de `purchase` | — | tabla manual |

## 2. Catálogo de eventos (implementado en código)

| Evento | Dónde se dispara | Parámetros | Dedupe |
|---|---|---|---|
| `landing_view` | `PageView` en `/demo-resico` | `page=demo-resico` + utm_* de la URL | — |
| `ViewContent` (Meta) | igual que `landing_view` | `content_name=demo-resico` | — |
| `cta_click` | clic en CTA (`DemoCta`) | `placement=hero\|final` + utm_* | — |
| `Schedule` (Meta) | clic en CTA | `content_name=demo-resico` | 1 por sesión (`fiscalio_meta_schedule`) |
| `calendar_view` | callback `linkReady` de Cal (iframe del calendario listo, **no** en el clic); listener registrado una sola vez en el módulo (los dos CTA comparten namespace `demo-fiscalio`) | `placement` = CTA que abrió el modal | 1 por sesión (`fiscalio_calendar_view`) |
| `booking` | callback `bookingSuccessfulV2` (embed) **o** `/gracias` | `page`, `source=embed\|gracias`, `booking_uid`, utm_* | `fiscalio_booking_tracked` (sessionStorage, cruza landing→gracias) |
| `Lead` (Meta) | junto a `booking` | `content_name=demo-resico` | ídem |
| `purchase` | `/descarga` con `session_id` verificada server-side | `transaction_id`, `value`, `currency`, utm_* de la sesión | `fiscalio_purchase_<id>` (localStorage) + dedupe GA4 por `transaction_id` |
| `Purchase` (Meta) | junto a `purchase` | `value`, `currency`, `content_name` | ídem (solo 1ª vez por navegador) |

Mecanismos de soporte en `lib/analytics.ts`:

- `rememberCampaignParams()` / `getCampaignParams()` — captura utm_* + `fbclid`/`gclid` al cargar la landing (sessionStorage) y los re-adjunta a **todos** los eventos posteriores, incluido `booking` en `/gracias` (cuya URL ya no trae UTMs).
- `markTrackedOnce(key, persistent?)` — dedupe por pestaña (session) o por navegador (local).
- `forwardQueryParams` del embed de Cal activado en `cal-embed.tsx`: los UTMs de la landing se propagan al iframe del booker (requisito para que Cal pueda guardarlos).
- **Redirect post-booking** en `cal-embed.tsx`: 800 ms después de `bookingSuccessfulV2` navega a `/demo-resico/gracias?uid=<booking_uid>`. Sustituye el *Redirect on booking* de Cal.com (feature de planes de pago). Se usa navegación completa (`window.location.assign`, no `router.push`) para descartar el modal inyectado por Cal en `document.body` y para que GA4 registre el `page_view` de `/gracias`; el delay deja que se vea la pantalla de confirmación y que GA4/Meta drenen los hits antes de salir.

## 3. Definiciones de conversión

| Definición | Regla |
|---|---|
| `booking` | Reserva creada en Cal.com (evento `bookingSuccessfulV2` o visita a `/gracias`). Se cuenta **una sola vez** por reserva. |
| `attended` | La sesión de 15 min ocurrió y la persona asistió. **Manual.** |
| `qualified` | Asistió + tributa en RESICO (o cree estarlo) + su caso es preparable en la sesión. **Manual.** |
| `trial/product_use` | Usó Fiscalio durante la sesión (el borrador se preparó con el producto). **Manual.** |
| `purchase` | `checkout.session.completed` verificado en `/descarga?session_id=...`. GA4 automático; **la tabla manual es la fuente de verdad**. |

Evento de optimización de Meta: se recomienda `Lead` (evento de conversión de la
campaña), con fallback a *Landing Page Views* si el delivery se estanca — decisión
final y reglas en `campaign-launch-pack.md` (Phase 5).

## 4. Configuración externa pendiente (no hace falta en repo)

**GA4 (admin de la propiedad G-T79R8K5JCB):**
- [ ] Registrar dimensiones custom (event-scoped): `booking_uid`, `placement`, `source`, `utm_campaign`, `utm_content`
- [ ] Marcar `purchase` como conversión
- [ ] Verificar flujo completo con GA DebugView

**Meta Events Manager:**
- [ ] Verificar recepción de `PageView`, `ViewContent`, `Schedule`, `Lead`, `Purchase`
- [ ] **Falta `NEXT_PUBLIC_META_PIXEL_ID` en Vercel** → el pixel no carga en producción (ver §5)
- [ ] Marcar `Lead` como evento de conversión
- [ ] CAPI no implementado: sin dedupe server-side (limitación documentada, §7)

**Cal.com:**
- [x] Redirect de éxito a `https://www.fiscalio.app/demo-resico/gracias` — verificado 2026-10-05: **no estaba configurado** y no se puede configurar en el plan actual (la opción *Redirect on booking* del evento está detrás de planes de pago). Resuelto en código 2026-10-06 en `components/cal-embed.tsx` (callback `bookingSuccessfulV2` → redirect a `/demo-resico/gracias?uid=`). *Pendiente: verificación en móvil (escritorio verificado 2026-10-06)*
- [x] Verificar con un booking de prueba si Cal guarda los UTMs que llegan en la URL del iframe — ✅ verificado 2026-10-06 (aparecen en el detalle de la reserva en el panel)
- [ ] Confirmar `booking_uid` visible en el detalle de la reserva / export de Cal (llave de join Cal ⇄ GA4) — **no hay export CSV en el plan actual** (ver `cal-audit.md` §6.9): alternativas → copia manual del UID en el panel, o API v2 `GET /v2/bookings` con API key gratis

## 5. Estado de env vars y despliegue (verificado 2026-10-05)

| Var | Local (.env.local) | Producción |
|---|---|---|
| `NEXT_PUBLIC_GA_ID` | ✅ | ✅ `G-T79R8K5JCB` |
| `NEXT_PUBLIC_META_PIXEL_ID` | ✅ | ❌ **no seteada en Vercel** (ni la home carga `fbevents.js`) |
| `CAL_COM_DEMO_URL` | ✅ | ❌ verificar tras deploy (si falta, el CTA sale "Próximamente") |
| `CAL_COM_BOOKING_URL` | ✅ | pendiente de verificar |
| `STRIPE_SECRET_KEY` | ✅ | pendiente de verificar |

**Despliegue:** `/demo-resico` devuelve **404 en producción**. Los commits
`21119d6` y `0e6e931` (landing + embed) solo existen en `staging` local;
`origin/staging` está desfasado y `main` (producción) no los tiene.
Antes de lanzar: push de `staging` → merge a `main` → deploy, y setear
`NEXT_PUBLIC_META_PIXEL_ID` en el entorno de Vercel **antes** del build
(el valor se inyecta en build time).

## 6. Convención UTM (preliminar; definitiva en Phase 5)

```
utm_source=meta
utm_medium=paid_social
utm_campaign=resico-borrador-15min
utm_content=<creative-id>   ej: angulo-a-incertidumbre | angulo-d-founder-video
```

Los parámetros se propagan: URL de la landing → eventos GA4 (auto + explícitos)
→ iframe de Cal → (pendiente) registro de la reserva.

## 7. Limitaciones conocidas

- `attended`, `qualified`, `trial/product_use` no tienen evento automático: se registran manualmente en la tabla de experimentación.
- Meta `Purchase` puede duplicarse si el mismo comprador abre el enlace de descarga en otro navegador (sin CAPI). Fuente de verdad: tabla manual + GA4 (`transaction_id`).
- Si Cal no guarda los UTMs, el join anuncio ⇄ lead se hace por `booking_uid` (GA4) + timestamp/email (export de Cal). Volumen esperado: bajo, viable manualmente.
- `purchase` hereda los UTMs de la sesión del navegador (si el checkout de Stripe redirige en la misma pestaña), lo que mejora la atribución; en pestaña nueva no hereda nada.
