# Decisiones de Despliegue — Lanzamiento Beta Privada (Founder's Early Access)

> **Fecha:** 2026-09-02 (actualizado 2026-09-03)
> **Estado:** Decisiones cerradas. Implementación de código lista (`/descarga`) y configuración externa (Cal.com + Stripe) completada. Pendiente único: envío manual del correo de invitación.
> **Contexto:** Lanzamiento cerrado de pago por adelantado ($419 MXN + IVA) a ~15 leads de la Waitlist, combinando acceso al software con un Onboarding Concierge 1:1 de 30 min con el fundador.

## Registro de decisiones

### D-001 — Sesión de onboarding de 30 minutos

- **Decisión:** La sesión 1 a 1 de configuración con el fundador dura **30 min** (Google Meet) y se agenda vía un evento de Cal.com llamado "Onboarding Fiscalio".
- **Configuración Cal.com:** Duración 30 min, con buffer de **10-15 min** entre sesiones. La descripción del evento debe indicar que ahí se evalúa la garantía de reembolso (queda documentado en cada sesión).

### D-002 — El cupo de la beta es capacidad semanal, no un número fijo de lugares

- **Decisión:** No se promete "X lugares disponibles" ni deadline artificial. El cupo real de la beta es la **capacidad semanal de Ezequiel para dar sesiones 1:1**.
- **Mecanismo:** El **límite de reservas por semana** configurado en el evento de Cal.com ("limit booking frequency") *es* el cupo de la beta.
- **Cifra elegida:** Capacidad semanal de **9 sesiones** (Lunes, Miércoles y Viernes de 15:00 a 16:30, 3 citas por día). Registrada 2026-09-03.
- **Estado:** Cerrada. La urgencia en copy solo se introduce cuando existan datos reales de cuántas personas se agendan por semana (ej. "las próximas sesiones de esta semana están por agotarse").

### D-003 — Política de garantía de reembolso

- **Decisión:** Garantía total de reembolso, evaluable **durante o después** de la sesión de onboarding — no limitada al instante exacto de la llamada.
- Se comunica en el correo de invitación y en el bloque de agendamiento de `/descarga`.

### D-004 — `/descarga` es el hub único post-pago

- **Decisión:** El `success_url` del Payment Link de Stripe **no cambia** — sigue apuntando a `/descarga` (con `?session_id={CHECKOUT_SESSION_ID}`). El link de Cal.com se agrega como **segundo bloque dentro de la misma página** (debajo del bloque de descarga), no como destino separado.
- **Razón:** Evita un link de descarga huérfano, permite usar la app antes de la sesión (degradación elegante) y reutiliza el flujo existente.
- **Implementación:** Bloque condicional gobernado por `CAL_COM_BOOKING_URL` (ver D-006). Si la variable está vacía, el bloque no se renderiza.

### D-005 — Referidos pospuestos a v2

- **Decisión:** No hay sistema de referidos ni enlaces de invitación en este lanzamiento. No aparece en copy, flujo ni tareas de este sprint.

### D-006 — Canal directo y configuración de envío

- **Decisión:** Canal directo de soporte es **correo únicamente** (no hay WhatsApp/Telegram — canal no confirmado). No hay equipo de soporte.
- **Dos correos distintos en este lanzamiento:**
  - **Invitación (pre-compra):** **texto plano manual**, escrito por Ezequiel para cada lead (sin HTML, sin imágenes, sin branding), para priorizar entregabilidad a inbox primario y tono no-comercial dado el tamaño de la lista (~15 leads). No usa infraestructura React Email/Resend/Airtable.
  - **Descarga (transaccional post-pago):** automático y se mantiene — lo envía el webhook de Stripe (`/api/stripe/webhook`) vía **Resend + React Email** (`components/emails/email-download.tsx`) con el enlace `/descarga?session_id=...` y los hashes SHA-256. Es independiente del correo de invitación; Airtable no se usa en este sprint.
- **Fuente de la URL de Cal.com en el código:** env var `CAL_COM_BOOKING_URL` (leída en `lib/constants.ts`, usada en `app/descarga/page.tsx`).

### D-007 — Precio de Early Adopter

- **Decisión:** $419 MXN + IVA vía Stripe (Payment Link). Precio de Fundador congelado de por vida frente al precio de lanzamiento público.

### D-008 — Proxy de actualizaciones sin autenticación (aceptado para la beta)

- **Decisión:** `/api/updates/*` (proxied del repo privado con `GITHUB_TOKEN` en servidor) queda **sin validación de sesión** porque el auto-updater de la app lo necesita. Aceptado para la beta cerrada: los assets no se exponen directo del repo y las URLs no se publican, así que el gateo real de la compra sigue en `/descarga`.
- **Riesgo conocido:** quien conozca el **nombre exacto** del instalador (visible en `latest.yml`) puede descargarlo sin pagar.
- **Revisar antes del lanzamiento público:** excluir los instaladores completos del asset set del updater o moverlos a un hosting firmado/autenticado.

## Configuración externa

1. ~~Crear evento "Onboarding Fiscalio" en Cal.com~~ — **Hecho (2026-09-03):** 30 min, buffer 10-15 min, descripción con garantía de reembolso, límite de reservas semanal en 9 (ver D-002).
2. ~~Crear Payment Link de Stripe por $419 MXN + IVA~~ — **Hecho (2026-09-03).** El `success_url` sigue apuntando a `/descarga` y debe incluir el parámetro `?session_id={CHECKOUT_SESSION_ID}`; sin él la página no puede verificar el pago y cae al estado "No pudimos verificar tu acceso" (`app/descarga/page.tsx`).
3. ~~Fijar `CAL_COM_BOOKING_URL` en el entorno~~ — **Hecho** en local; verificar que quede fijada en staging y producción antes de activar.
4. **Pendiente:** exportar los ~15 leads de la tabla Airtable `Waitlist` y enviar el correo de invitación en texto plano, uno por uno (o script simple de envío).

