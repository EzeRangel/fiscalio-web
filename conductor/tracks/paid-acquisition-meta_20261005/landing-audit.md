# Landing Audit — paid-acquisition-meta_20261005

Auditoría de la landing `/demo-resico` para la campaña Meta ($1,000 MXN).
Entregable de F3 (§10).

Fecha de verificación: 2026-10-07.

Fuentes: código del repo (`app/demo-resico/page.tsx`,
`app/demo-resico/demo-cta.tsx`, `components/cal-embed.tsx`,
`app/api/og/route.tsx`), render en dev (`http://localhost:3000/demo-resico`,
`/api/og`).

## 1. Correspondencia ad → problema → oferta → landing → agenda (F3.1)

Cadena objetivo de la spec:

> Meta Ad → Landing → CTA → Cal.com → Sesión 15 min → Borrador con Fiscalio →
> Demo → Oferta $419 + IVA → Stripe

| Etapa | Elemento en el repo | Estado |
|---|---|---|
| Anuncio (creativo) | **No existe todavía** — se produce en Phase 5 (ángulos A/B/C/D) | ⏳ define el contrato de §3 |
| Problema | «No terminas de saber si estás declarando bien» (`page.tsx`, «Esto es para ti si») | ✅ ángulo de incertidumbre |
| Oferta | `OFFER` = «Prepara tu borrador de declaración mensual RESICO gratis en 15 minutos» (`page.tsx:8`) | ✅ coincide **literal** con la oferta de la spec |
| Landing | `app/demo-resico/page.tsx` (H1 = `OFFER`) | ✅ |
| Agenda | CTA → modal de Cal (`components/cal-embed.tsx`, namespace `demo-fiscalio`) | ✅ |
| Evento de agenda | «Prepara tu borrador RESICO con Fiscalio» (ver `cal-audit.md` §1) | ✅ mismo nombre que la oferta |

El H1 de la landing es **exactamente** la oferta de la spec; el título del evento
de Cal coincide con la misma promesa. La cadena problema → oferta → landing →
agenda es coherente. El eslabón que falta (creativo) no puede auditarse aún: la
landing queda como el contrato que los anuncios deben cumplir en Phase 5 (§3).

## 2. Checklist de la landing (F3.2)

| Requisito | Dónde | Texto verificado | Estado |
|---|---|---|---|
| Qué es la sesión | H1 + subtítulo | «borrador de tu declaración mensual» en una «llamada de 15 minutos» | ✅ |
| Quién debe agendar | «Esto es para ti si» | «Facturas bajo RESICO (clave 626)» · «Llevas tu propia contabilidad o pagas por ayuda externa» · «No terminas de saber si estás declarando bien» | ✅ |
| Qué se revisa | Paso 1 | «Ingresos cobrados, ISR, IVA y retenciones del mes» | ✅ |
| Qué preparar | «Qué necesitas preparar» | «Los ingresos que cobraste este mes» · «Tus CFDIs (XML o PDF) o el resumen que usas para declarar» · «Nada más: no necesitas contraseñas ni e.firma» | ✅ |
| Duración | Badge + subtítulo + CTA final | «Sesión gratuita · 15 minutos» | ✅ |
| Gratuita | Badge + bloque «Gratuita y sin compromiso» | «La sesión no tiene costo… No hay presión ni letra chica» | ✅ |
| Qué pasa después | Paso 3 + bloque gratuito | «sales con claridad sobre tu declaración. Tú decides si quieres seguir» | ✅ |

Los 7 puntos del checklist están cubiertos, cada uno en un lugar distinto de la
página (badge, bullets, pasos y bloque de cierre). No hay ninguno redundante.

**No se convierte en explicación extensa de Fiscalio** (F3.2, no vender el
producto en la landing): Fiscalio aparece en el paso 2 («Corremos tu
declaración… y te explicamos qué información se está usando y por qué») como
*función durante la sesión*, no como pitch de producto ni con la oferta de $419.
Correcto para «el producto se vende en la sesión».

## 3. Mensaje vs creativos — contrato ad → landing (F3.3)

Los creativos de Phase 5 (ángulos A incertidumbre · B trabajo manual · C miedo a
equivocarse · D founder-led) **deben respetar este contrato** para no romper la
correspondencia:

| Ángulo | Promesa admisible en el anuncio | Qué debe encontrar al llegar a la landing |
|---|---|---|
| A — incertidumbre | «No terminas de saber si estás declarando bien» | Bullet «No terminas de saber si estás declarando bien» + oferta del borrador ✅ |
| B — trabajo manual | «¿Cuántas horas te toma armar tu declaración de RESICO?» | Pasos 1–2 (revisamos y corremos el borrador con tus CFDIs) ✅ |
| C — miedo a equivocarse | «Revisa tu declaración antes de enviarla» | «Ves el resultado real — ISR, IVA, retenciones» ✅ |
| D — founder-led | La misma oferta, en primera persona | La landing es neutral; no contradice ✅ |

Reglas de consistencia verificadas:

- **Copy prohibido ausente.** Sin «optimiza tus impuestos», «paga menos
  impuestos», «evita multas», «garantizamos», «declaramos por ti» ni «agenda una
  demo». Grado: sin coincidencias en `app/demo-resico/`.
- **Nunca presentar la oferta como «demo» ni «prueba Fiscalio».** El copy visible
  no usa la palabra «demo» (solo la ruta `/demo-resico` y el slug de Cal, que no
  son copy). ✅
- **Sin segunda oferta.** La landing no menciona el precio ($419 + IVA) ni Stripe;
  cierra en «Tú decides si quieres seguir». ✅ (requisito de variables constantes).
- **Un solo mensaje por landing.** Los 4 ángulos comparten la misma landing; el
  experimento mide el creativo, no la página (spec: no cambiar copy/landing y
  oferta simultáneamente). ✅

Riesgo a vigilar en Phase 5: los ángulos B y C **no están literales** en la
landing (solo A aparece como bullet). No es un defecto —la landing debe ser
agnóstica al ángulo— pero el anuncio B/C no debe prometer algo que la página no
respalde (p. ej. «te ahorramos el contador» o «revisamos tu declaración por ti»).
Mantener la promesa en «borrador gratis en 15 min revisado contigo».

## 4. OG / imagen y metadatos (F3.3)

| Elemento | Valor | Estado |
|---|---|---|
| `<title>` | «Borrador de declaración RESICO gratis en 15 minutos — Fiscalio» | ✅ |
| `description` | «Agenda una sesión gratuita de 15 minutos y preparamos el borrador… Sin compromiso.» | ✅ |
| `og:title` | «Tu borrador de declaración RESICO, gratis en 15 minutos» | ✅ |
| `og:description` | «Sesión gratuita de 15 minutos: revisamos tus ingresos, ISR, IVA y retenciones…» | ✅ |
| `og:image` | `/api/og` dinámico (1200×630), label «SIN COSTO» | ✅ render verificado 2026-10-07 |
| `og:locale` | `es_MX` | ✅ |
| `canonical` | `https://www.fiscalio.app/demo-resico` | ✅ |
| `robots` | `noindex, nofollow` | ✅ intencional (landing solo para tráfico pagado) |

La imagen OG se generó en dev (`/api/og?title=…&subtitle=…&label=SIN COSTO`,
PNG 1200×630, 44 KB) y es legible: label «SIN COSTO», «Tu borrador RESICO,
gratis en 15 min», subtítulo con CFDIs y logo Fiscalio. El mensaje coincide con
el H1 y con la oferta de la spec. Fondo `#fcfaf6` alineado con `DESIGN.md`
(`app/api/og/route.tsx:23`).

**Consistencia visual con los creativos:** el OG usa el mismo sistema
(warm neutral + tipografía + logo) que el resto del sitio, así que la vista
previa del enlace en Feed/Stories no contrasta con los anuncios. Al producir los
creativos (Phase 5) conviene reutilizar el mismo label («SIN COSTO») y la misma
frase de oferta para que el anuncio y la vista previa se lean como una sola
pieza.

## 5. Copy exacto de la landing (registro)

> **Revisión de diseño (2026-10-07):** se rediseñó la página (misma oferta, misma
> estructura de mensaje) y se afinó copy de apoyo. El H1 sigue siendo la oferta
> **literal** de la spec y no se tocó el precio ni se añadió una segunda oferta.
> El copy vigente es el de abajo; los hallazgos §6.1 y §6.2 siguen abiertos.

Se congela aquí para detectar cambios durante el experimento (spec: no cambiar
copy/landing y oferta a la vez sin registrar el cambio).

- **Badge:** «Sesión gratuita · 15 minutos»
- **H1:** «Prepara tu borrador de declaración mensual RESICO gratis en 15 minutos»
- **Subtítulo:** «En una videollamada de 15 minutos revisamos tu situación y
  preparamos el borrador de tu declaración mensual con tus propios CFDIs. Ves el
  resultado real — ISR, IVA, retenciones — y decides. Sin compromiso.»
- **Ficha de la sesión:** duración 15 minutos · formato videollamada (Google Meet)
  · costo $0 MXN · te llevas tu borrador RESICO del mes · trae tus CFDIs o el
  resumen del mes · no necesitas e.firma ni contraseñas
- **CTA hero:** «Preparar mi borrador gratis»
- **Esto es para ti si:** RESICO (clave 626) · contabilidad propia o ayuda externa
  · no terminas de saber si estás declarando bien
- **Qué pasa en los 15 minutos:** 1) Me cuentas tu situación (00:00–05:00) ·
  2) Corremos tu borrador (05:00–11:00) · 3) Te llevas tu resultado (11:00–15:00)
- **Qué necesitas preparar:** «Trae esto» (ingresos del mes · CFDIs XML/PDF o
  resumen · cinco minutos para la videollamada) y «Y no hace falta» (e.firma ni
  contraseñas · subir datos a la nube · tener los números perfectos)
- **Gratuita y sin compromiso:** «La sesión no tiene costo. Al terminar te llevas
  tu borrador y decides con calma. No hay presión ni letra chica.» + sin tarjeta ·
  sin contraseñas ni e.firma · sin obligación de comprar
- **CTA mid-funnel:** «Agendar mis 15 minutos»
- **CTA final:** «Agendar mi sesión gratuita» (tras «Las llamadas son limitadas
  por semana…»)

## 6. Riesgos y hallazgos

| # | Hallazgo | Severidad | Acción |
|---|---|---|---|
| 1 | `og:image` en local es `localhost:3000/api/og` (sin esquema) porque `NEXT_PUBLIC_APP_URL="localhost:3000"` en `.env.local`; en prod la URL se construye con esa misma var (`page.tsx:24` → `APP_URL`) | **media** | Verificar que en Vercel `NEXT_PUBLIC_APP_URL` incluya `https://` (p. ej. `https://www.fiscalio.app`); si falta o va sin esquema, Meta no puede descargar la imagen en la vista previa del anuncio. Mismo bloqueo que el pixel (ver `tracking-audit.md` §5) |
| 2 | El copy dice «Las llamadas son limitadas por semana», pero el evento de Cal es `UNLIMITED` (sin cupo, `cal-audit.md` §1) | baja | Alinear: o se fija un cupo semanal en Cal, o se suaviza el copy. De facto la capacidad es de una persona, pero la afirmación hoy no está respaldada por la config |
| 3 | `APP_URL` por defecto es `https://fiscalio.app` (sin `www`) mientras `metadataBase` es `https://www.fiscalio.app` | baja | En prod el OG puede quedar en `fiscalio.app` y el canonical en `www.fiscalio.app`; unificar dominio en la var de entorno |
| 4 | Ángulos B (trabajo manual) y C (miedo a equivocarse) no están literales en la landing | info | Intencional: la landing es agnóstica al ángulo. Confirmar en Phase 5 que su copy no promete más de lo que la página sostiene |
| 5 | La landing decía «llamada»; el rediseño (2026-10-07) la cambió a «videollamada» (Google Meet) | cerrado | ✅ copy actualizado en el rediseño |
| 6 | `noindex, nofollow` en la landing | info | Intencional (tráfico pagado); no afecta la vista previa del anuncio |
| 7 | Verificación en móvil del render de la landing (jerarquía, CTA, ancho del H1) | baja | Manual antes de lanzar; el layout es responsive (clases `sm/lg`), pendiente de confirmación visual |

## 7. Pendientes externos (no se resuelven en repo)

- [ ] Confirmar `NEXT_PUBLIC_APP_URL` con esquema en Vercel (hallazgo §6.1) — bloquea la vista previa OG
- [ ] Decidir cupo semanal del evento o suavizar «Las llamadas son limitadas por semana» (§6.2)
- [ ] Verificación visual móvil de `/demo-resico` (§6.7)
- [ ] Re-verificar `og:image` con la URL de producción una vez desplegada `/demo-resico`
  (hoy `/demo-resico` da 404 en prod, ver `tracking-audit.md` §5)
