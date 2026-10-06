# Cal.com Audit — paid-acquisition-meta_20261005

Auditoría del evento de booking `ezerangel/demo-fiscalio` y del flujo post-booking
para la campaña Meta ($1,000 MXN). Entregable de F2 (§11–12).

Fecha de verificación: 2026-10-06.

Fuentes: API pública de Cal.com (`public/event`), panel de Cal (verificación manual
de Phase 2) y código del repo (`components/cal-embed.tsx`, `app/demo-resico/`).

## 1. Ficha del evento

| Campo | Valor | Nota |
|---|---|---|
| Título público | Prepara tu borrador RESICO con Fiscalio | coincide con la oferta de la landing |
| Nombre interno | Preparación de borrador RESICO | |
| Slug | `ezerangel/demo-fiscalio` → `https://cal.com/ezerangel/demo-fiscalio` | |
| Duración | **15 min** | ✅ F2.1 (el plan de despliegue solo documentaba un "Onboarding" de 30 min) |
| Ubicación | Google Meet (`Vía Google Meet`) | |
| Precio | 0 (gratis) | coherente con "gratuita" en la landing |
| Descripción | «Trae tus XMLs y calculamos tu declaración RESICO en vivo, gratis y en 15 minutos; sin contraseñas ni e-firma.» | ✅ sin pedir credenciales |
| Confirmación | `requiresConfirmation: false` → **auto-confirmada** | email de confirmación al instante al asistente |
| Zona horaria del schedule | `America/Mazatlan` (UTC−7) | ✅ sin riesgo: Cal detecta la zona del visitante (§6.1) |
| `useBookerTimezone` | `false` | sin efecto práctico — verificado 2026-10-06 (§6.1) |
| Buffer | 15 min antes / 15 min después | panel, 2026-10-06 |
| Cupo / ventana | **sin límite** (`periodType: UNLIMITED`) | confirmado en panel |
| Cancelar / reprogramar | habilitados para el asistente | sin redirect propio (quedan en Cal) |
| Invitados | `disableGuests: true` | correcto para 1:1 de 15 min |
| Verificación de email del booker | `requiresBookerEmailVerification: false` | ver hallazgo §6.4 |
| Página pública | `hidden: false`, `robots: index, follow` con canonical a cal.com | ver hallazgo §6.7 |
| Redirect nativo | `successRedirectUrl: null` | ver §4 |

## 2. Preguntas de qualification (F2.3)

| Campo Cal | Tipo | Requerido | Label / contenido |
|---|---|---|---|
| `name` / `email` | sistema | ✅ | nombre y correo |
| `is-resico` | select | ✅ | **¿Tributas en RESICO?** → Sí / No |
| `review` | texto | ✅ | **¿Qué quieres revisar?** · placeholder «Mi declaración este mes» |
| `worried-about` | textarea (máx. 500) | ❌ | **¿Qué te preocupa?** |

Ocultos/inactivos: teléfono, `notes`, invitados, título de la reunión.
**Cumple el requisito de no pedir información fiscal sensible: nada de e.firma ni
contraseñas** (también explícito en la descripción del evento).

### Desviaciones vs spec F2.3 (decisión pendiente, se arregla en el panel de Cal)

| Spec | Estado actual | Recomendación |
|---|---|---|
| «¿Actualmente tributas en RESICO?» con Sí / No / **No estoy seguro** | solo Sí / No | añadir **«No estoy seguro»**: es el perfil justamente incierto que busca la campaña y hoy queda forzado a mentir o a responder «No» |
| «¿Qué quieres revisar?» como opciones (Declaración mensual / ISR / IVA / Retenciones / No sé por dónde empezar) | texto libre | pasar a select con esas 5 opciones: habilita conteo rápido por lead en la tabla de experimentación; el texto libre no se lee a los 15 min |
| «¿Qué es lo que más te preocupa de tu declaración?» (6 opciones + Otro) | textarea libre | si el objetivo es **contar** patrones → select + «Otro»; si es leer contexto en la sesión → la textarea está bien. Elegir uno, no las dos |

## 3. Confirmación, reminders e instrucciones

- **Confirmación**: auto-confirmada (sin aprobación manual) → Cal envía el email de
  confirmación de inmediato con el link de Google Meet.
- **Recordatorio**: workflow `Recordatorio Borrador RESICO` (id `470299`,
  `EMAIL_ATTENDEE`) → **24 h antes** de la sesión. Un solo recordatorio.
- **Instrucciones previas en el email de Cal** (ingresos del mes + CFDIs; sin e.firma
  ni contraseñas): ✅ añadidas — verificado manualmente en Phase 2 (el cuerpo del email
  no lo expone la API pública).
- **Alineación de copy**: la descripción del evento ≈ el checklist de
  `/demo-resico/gracias` (XMLs/CFDIs, 15 min, gratis, sin credenciales). ✅

## 4. Redirect de éxito a `/demo-resico/gracias`

**Estado nativo:** `successRedirectUrl: null`. Al intentar activar *Redirect on
booking* el panel muestra **paywall (upgrade obligatorio)** → no disponible en el plan
actual. *Nota de contradictorio:* el payload público trae
`owner.metadata.isPremium: true` y `whitelistRedirectUrls: true`; manda lo observado en
el panel.

**Solución implementada en código** (commit `bc58f6b`, `components/cal-embed.tsx`):

1. Callback `bookingSuccessfulV2` del embed → `trackBookingOnce("embed", uid)`.
2. A los **800 ms** → `window.location.assign("/demo-resico/gracias?uid=<booking_uid>")`.

Por qué así:

- **800 ms**: deja ver la pantalla de confirmación de Cal (evita el flicker reportado
  en calcom/cal.com#12499) y da margen para que GA4/Meta drenen los hits antes de salir.
- **Navegación completa** (`location.assign`, no `router.push`): descarta el modal que
  Cal inyecta en `document.body` (con SPA nav quedaría encima de `/gracias`) y fuerza el
  `page_view` de GA4 en `/gracias`.
- **Solo `uid` en la URL**: los UTMs no se re-adjuntan; llegan por `sessionStorage`
  (`rememberCampaignParams`/`getCampaignParams`, ver tracking-audit §2). Mismo
  mecanismo que usa `purchase` en `/descarga`.
- `forwardParamsSuccessRedirect: true` está activo en el evento pero es inocuo mientras
  no haya URL nativa.

**Verificado:** redirect de escritorio OK (2026-10-06). Pendiente: prueba en móvil.

## 5. Embed en la landing

| Elemento | Valor |
|---|---|
| Namespace / link | `demo-fiscalio` · `ezerangel/demo-fiscalio` |
| Layout | `month_view` (desktop) · `useSlotsViewOnSmallScreen: true` (móvil) |
| `forwardQueryParams` | `true` → UTMs/`fbclid` de la landing entran al iframe (requisito para que Cal los guarde) |
| Eventos GA4/Meta | `calendar_view` (`linkReady`) · `booking` + `Lead` (`bookingSuccessfulV2`) · `cta_click`/`Schedule` en el clic |
| CTA | dos instancias (`hero`, `final`) comparten el mismo namespace → listeners únicos |

Detalle completo del funnel de medición: `tracking-audit.md` §2.
Requisito de despliegue: `CAL_COM_DEMO_URL` seteada en Vercel (si falta, el CTA sale
«Próximamente») — `tracking-audit.md` §5.

## 6. Riesgos y hallazgos

| # | Hallazgo | Severidad | Acción |
|---|---|---|---|
| 1 | Zona horaria: `America/Mazatlan` (UTC−7) con `useBookerTimezone: false` → duda si un visitante de otra zona ve su hora local | **cerrado 2026-10-06** | ✅ verificado con spoof de zona horaria: Cal muestra la hora local del visitante correctamente |
| 2 | Falta «No estoy seguro» en `¿Tributas en RESICO?` | media | añadir en panel de Cal |
| 3 | `review` / `worried-about` como texto libre en vez de opciones (§2) | media | decidir antes de lanzar, cambia cómo se lee la tabla de experimentación |
| 4 | Sin verificación de email del booker → un typo en el correo = no show | baja | mitigación parcial: recordatorio 24 h; aceptable para 15 min gratis |
| 5 | Redirect nativo bloqueado por paywall | resuelto | §4 (código) |
| 6 | Un solo recordatorio (24 h); sin reminder corto (1 h) | baja | opcional: añadir 2º paso al workflow |
| 7 | Página de Cal indexable (`robots: index, follow`, canonical a cal.com) | info | sin acción |
| 8 | Cancelar/reprogramar terminan en las páginas de Cal, sin paso por `/gracias` | info | sin acción; no hay tracking de `reschedule`/`cancel` |

## 7. Pendientes externos (no se resuelven en repo)

- [ ] Booking de prueba: email de confirmación + recordatorio 24 h + redirect a `/gracias` (escritorio)
- [ ] Ídem en **móvil**
- [x] Prueba de zona horaria: visitante con otra zona ve su hora local correctamente (spoof, 2026-10-06) — hallazgo §6.1 cerrado
- [ ] Decidir y aplicar §2: opción «No estoy seguro» + formato de `review`/`worried-about`
- [ ] Confirmar `booking_uid` visible en el export/CSV de Cal (llave de join Cal ⇄ GA4, tracking-audit §4)
- [ ] Verificar con booking de prueba si Cal guarda los UTMs que llegan en la URL del iframe (tracking-audit §4)
- [ ] (Opcional) segundo recordatorio 1 h antes (hallazgo §6.6)
