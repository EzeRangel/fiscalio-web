# Campaign Launch Pack — paid-acquisition-meta_20261005

Entregable de la **Fase 5 (§20)**. Reúne los 19 elementos que la spec exige para
lanzar la primera campaña pagada de Fiscalio en Meta Ads.

**Presupuesto:** $1,000 MXN · **Duración:** ~1 semana · **Mercado:** México
**Oferta:** «Prepara tu borrador de declaración mensual RESICO gratis en 15 minutos.»
**Funnel:** Meta Ad → `/demo-resico` → CTA → Cal.com → sesión 15 min → borrador con
Fiscalio → demo → oferta **$419 + IVA** (Stripe) → `/descarga`

> **Regla del experimento:** descubrir *si* Meta sirve para este público y *por
> qué*, no demostrar que sirve. El éxito es evidencia y diagnóstico del cuello de
> botella, no ROI.

**Documentos de apoyo (este track):**
[Tracking/GA4](./tracking-audit.md) · [Cal.com](./cal-audit.md) ·
[Landing](./landing-audit.md) · [Research GTM](../../../docs/paid-acquisition-meta_20261005/research-notes.md)

---

## 1. Hipótesis de campaña (H1/H2/H3 ↔ eventos medidos)

| Hipótesis | Enunciado | Se falsa si… | Eventos que la observan |
|---|---|---|---|
| **H1 — Problema** | Una persona física en RESICO con **incertidumbre** sobre su declaración (no miedo a multas) se detiene al ver un mensaje sobre *claridad*, no sobre *amenaza*. | Ningún anuncio supera CTR ~1% y no hay clics al CTA → el problema no engancha en frío. | `landing_view`, `cta_click`, CTREnlace (Meta) |
| **H2 — Oferta** | La promesa «**borrador gratis en 15 minutos**» convierte mejor que un diagnóstico genérico porque entrega *algo terminado*. | Hay `cta_click` pero muy pocos `booking` → la promesa no se sostiene en la landing. | `calendar_view`, `booking`, `Lead` (Meta) |
| **H3 — Producto ↔ evento** | La persona que asiste **usa Fiscalio en la sesión** y sale con el borrador, lo que hace evaluable la compra de $419. | Las reservas ocurren pero `attended`/`product_use` caen → el cuello está en Cal.com o en la sesión. | `attended`, `qualified`, `trial/product_use`, `purchase` (manuales) |

**Lectura causal del funnel:** si H1 falla, el cuello es **creativo/audiencia**; si
H1 pasa y H2 falla, es **landing/CTA/oferta**; si H2 pasa y H3 falla, es
**Cal.com/asistencia/sesión**. El pack está diseñado para poder señalar cuál de los
tres es.

---

## 2. Audience strategy + recomendación de targeting

**Hallazgo base (F4.2):** no existe un interés "RESICO"/"SAT"/"CFDI" en Meta. Se
segmenta por **adyacencia** (autoempleo/negocio pequeño) y el verdadero filtro es el
**creativo + la oferta**, que auto-seleccionan.

| Parámetro | Recomendación | Nota |
|---|---|---|
| Ubicación | **México (nacional)** | Máxima entrega; el creativo filtra. Versión B secuencial: CDMX + Edomex + Jalisco + NL + Querétaro |
| Edad | **25–50** | Evita 18–24 (sin régimen propio) y no cierra en 50+ |
| Género | **Todos** | Cuenta propia ≈ 22.3% mujeres / 21.4% hombres (ENOE 3T 2025) |
| Segmentación detallada | **Advantage+ audience ON** con *sugerencias*, no filtros: `Small business owners`, `New active business (< 12 meses)`, interés `Small business` | Meta convierte los intereses en hint desde 2025 (F4.2 §2.4) |
| Exclusiones | **Custom audience** de clientes y de quien ya reservó (correos de Cal.com / base) | Único tipo de exclusión aún soportado; es límite duro incluso con Advantage+ |
| Lookalikes | **No** en esta ronda | La base no alcanzará 1,000–5,000 recomendados; guardar correos para fase 2 |
| Idiomas | Español | Evitar copy traducido/neutro; jerga MX |

**No hacer:** apilar intereses en AND (sub-entrega garantizada con $1,000), excluir
"asalariados" (imposible por intereses desde 2025 y conceptualmente falso: RESICO es
compatible con sueldo), micro-segmentar por ciudad en la primera iteración.

---

## 3. Campaign structure

**1 campaña · 1 conjunto · 3–4 anuncios.** Consolidar es la decisión #1: cada
conjunto necesita ~50 eventos de optimización/semana y con $1,000 MXN es imposible.

| Nivel | Configuración |
|---|---|
| Campaña | **1** — objetivo **Prospectos (Leads)** |
| Evento de optimización | `Lead` (Pixel, se dispara al confirmar reserva en el embed de Cal) |
| Conjunto | **1** — Advantage+ placements, Advantage+ audience |
| Anuncios | **3–4** — un ángulo cada uno (A/B/C/D), variando hook y formato |
| Puja | **Highest volume (lowest cost)** — sin cost cap ni bid cap |
| Placements | **Advantage+** (Feed + Reels + Stories); leer desgloses después, no forzar antes |

**Por qué `Leads` y no `Sales`:** la venta real ($419) es demasiado infrecuente para
el presupuesto; optimizar por compra dejaría el conjunto ciego. `Lead` (reserva) es
**la acción que el experimento quiere medir** («¿agenda o no?»). Aun así se espera
**Learning Limited**; no se juzga por CPA.

**Fallback documentado:** si tras ~$500 MXN no hay reservas y la entrega está
estancada, se puede relanzar como **Tráfico** optimizando *Landing Page Views*
(evento más frecuente) y leer las reservas a mano. El objetivo **no** se puede
cambiar en una campaña existente: implica campaña nueva y reinicia el aprendizaje
(registrar el cambio).

**Naming:** `META_Leads_RESICO-Borrador15min_2026-10`
Anuncios: `META_Leads_RESICO_<Angulo>_<formato>` (p. ej. `..._A-incertidumbre_9x16-video`).

---

## 4. Budget allocation

| Concepto | Valor |
|---|---|
| Presupuesto total | **$1,000 MXN** |
| Modalidad | **Presupuesto diario ~$140 MXN** durante 7–8 días (o lifetime $1,000 con fecha de fin) |
| Reparto | Todo al único conjunto; Meta reparte entre los 3–4 anuncios |
| Producción | $0–mínimo: founder-led grabado con teléfono; reutilizar assets del sitio |

**Reglas de ajuste:**
- El presupuesto diario es un **promedio** (Meta puede gastar hasta ~25% más en un
  día). No micro-gestionar el gasto.
- **No** aumentar presupuesto durante la prueba: no hay volumen que lo justifique y
  cada edición reinicia el aprendizaje.
- **No** usar cost caps ni bid caps (limitan la entrega).
- Si se pausa un anuncio, **no** pausar/reactivar el conjunto.
- Máximo un cambio significativo por semana; registrar **todo** cambio en la tabla
  de §15 con fecha y motivo.

**Requisitos de cuenta antes de lanzar:**
- Cuenta publicitaria en **MXN** y método de pago verificado.
- Revisar el **límite de gasto diario de la cuenta** (cuentas nuevas pueden quedar
  limitadas).
- **Business Verification** hecha (legitimidad y menos flags de revisión).
- `NEXT_PUBLIC_META_PIXEL_ID` seteada en Vercel y `/demo-resico` desplegada
  (ver `tracking-audit.md` §5).

---

## 5. Creative strategy + formatos/dimensiones

**Estrategia:** 4 creativos, 4 hipótesis de mensaje. Video vertical nativo como
formato principal + estáticos de apoyo para el mensaje de oferta. Founder-led
grabado con teléfono (confianza > producción).

**Reglas transversales:**
- Gancho en los **primeros 1.5–3 s**; marca/mensaje clave dentro de los 3 s.
- **Subtítulos siempre** (diseñar para *sound off*).
- Duración **15–30 s** (Reels/Stories).
- Safe zone 9:16: libre **14% arriba / 35% abajo / 6% lados**; la boca del fundador
  nunca en el tercio inferior.
- Estética **Warm Precision**: fondo `#fcfaf6`, texto `#262626`, CTA `#3a3a3a`,
  acentos amber `#fbbf24` / rust `#b45309`. Display **DM Sans**, cuerpo **Geist**,
  cifras fiscales **Geist Mono**. Sin gradientes ni sombras pesadas.
- Cero copy prohibido (ver §6 y checklist de cumplimiento).

**Formatos por creativo:**

| Anuncio | Ángulo | Formato principal | Variantes | Duración |
|---|---|---|---|---|
| 1 | A — incertidumbre | Video talking head | 9:16 + 4:5 estático | 20 s |
| 2 | B — trabajo manual | Screen recording (demo) | 9:16 + 4:5 | 25 s |
| 3 | C — miedo a equivocarse | Video talking head / testimonial | 9:16 + 4:5 estático | 20 s |
| 4 | D — founder-led | Video vertical fundador | 9:16 + 1:1 | 30 s |

**Exportación:** máster **9:16 (1440×2560)** + **4:5 (1440×1800)** + **1:1
(1080×1080)**. Reels **solo acepta video** (no imagen).

---

## 6. Copy final por ángulo

> Reglas: español MX, tono "tú", factual, sin promesas de resultado. **Prohibido:**
> "paga menos impuestos", "optimiza tus impuestos", "evita multas", "garantizamos",
> "declaramos por ti", "agenda una demo". No afirmar ni implicar la situación
> financiera del espectador (política de atributos personales de Meta).

### Ángulo A — Incertidumbre

**Texto principal (primary text):**
> Facturas bajo RESICO, pero no siempre tienes claro si tu declaración del mes está
> bien calculada.
>
> En una videollamada de 15 minutos revisamos tus ingresos, ISR, IVA y retenciones,
> y preparamos el borrador de tu declaración mensual con tus propios CFDIs. Ves el
> resultado real — con los números enfrente — y decides.
>
> Sesión sin costo. Sin compromiso. No necesitas e.firma ni contraseñas.

**Titular (headline):** `Tu borrador RESICO, gratis en 15 min`
**Descripción:** `Sesión por videollamada. Tú decides si sigues.`
**Botón (CTA):** `Reservar`
**Texto en pantalla (hook 0–3 s):** `¿Tu borrador RESICO cuadra con lo que cobraste?`
**Destino:** `https://www.fiscalio.app/demo-resico?utm_source=meta&utm_medium=paid_social&utm_campaign=resico-borrador-15min&utm_content=angulo-a-incertidumbre`

### Ángulo B — Trabajo manual

**Texto principal:**
> ¿Cuánto tiempo te toma armar tu declaración mensual? Clasificar CFDIs, cuadrar
> ingresos, revisar retenciones…
>
> Con Fiscalio preparas el borrador de tu declaración RESICO en una sesión de 15
> minutos, con tus XMLs. Ves ingresos, ISR, IVA y retenciones calculados, y decides
> con la información enfrente.
>
> Sesión gratuita. No necesitas e.firma ni contraseñas.

**Titular:** `De horas de captura a 15 minutos`
**Descripción:** `Preparamos tu borrador RESICO con tus CFDIs, en vivo.`
**Botón:** `Reservar`
**Texto en pantalla (hook):** `80 facturas a mano… y luego esto.`
**Destino:** `...&utm_content=angulo-b-trabajo-manual`

### Ángulo C — Miedo a equivocarse

**Texto principal:**
> Uno de los errores más comunes al declarar RESICO es confundir lo facturado con lo
> cobrado: el ISR se calcula sobre lo que efectivamente cobraste.
>
> En una sesión gratuita de 15 minutos revisamos tu caso y preparamos el borrador de
> tu declaración mensual con tus CFDIs, para que veas el cálculo real: ISR, IVA y
> retenciones. El plazo mensual vence el día 17.
>
> Sin costo ni compromiso. No necesitas e.firma ni contraseñas.

**Titular:** `El error #1 al declarar RESICO`
**Descripción:** `Revisamos tu caso y preparamos tu borrador, gratis en 15 min.`
**Botón:** `Reservar`
**Texto en pantalla (hook):** `Facturado ≠ cobrado. Y el ISR de RESICO se calcula sobre lo cobrado.`
**Destino:** `...&utm_content=angulo-c-error-comun`

> **Nota de compliance:** este ángulo es el de mayor riesgo. No usar "¿te van a
> multar?", "¿estás en problemas?" ni segunda persona sobre la conducta fiscal del
> espectador. Se habla del **error en general**, no de su situación.

### Ángulo D — Founder-led (guion 20–30 s)

**Texto principal:**
> Construí Fiscalio porque yo tampoco entendía mi propia declaración de RESICO.
>
> Ahora, en una videollamada de 15 minutos, preparamos el borrador de tu declaración
> mensual con tus CFDIs: ves ingresos, ISR, IVA y retenciones calculados, y decides
> con calma.
>
> Gratis y sin compromiso. No necesitas e.firma ni contraseñas.

**Titular:** `Te muestro cómo funciona Fiscalio`
**Descripción:** `Sesión gratuita de 15 min para preparar tu borrador RESICO.`
**Botón:** `Reservar`
**Destino:** `...&utm_content=angulo-d-founder-video`

**Guion (30 s, vertical, cámara frontal, plano medio):**

| Seg. | Bloque | Guion hablado (MX) | Texto en pantalla |
|---|---|---|---|
| 0–3 | Hook | «Soy [Fundador], y construí Fiscalio porque yo tampoco entendía mi declaración de RESICO.» | `Yo tampoco entendía mi declaración de RESICO` |
| 3–8 | Dolor | «Clasificar CFDIs a mano, dudar si el ISR que calculé está bien… es de las cosas que más postergo.» | `Clasificar CFDIs a mano` |
| 8–18 | Mecanismo/demo | «Por eso hago esto: en 15 minutos, por videollamada, cargamos tus XMLs y armamos el borrador de tu declaración mensual. Aquí ves ingresos, ISR, IVA y retenciones.» *(insertar grabación de pantalla del borrador)* | `Borrador de tu declaración RESICO` |
| 18–24 | Prueba | «Sin e.firma ni contraseñas: tus datos se procesan en tu propio dispositivo.» | `Sin e.firma · datos en tu dispositivo` |
| 24–30 | CTA | «Si quieres prepararlo conmigo, es gratis y sin compromiso. Te dejo el enlace abajo.» | `Sesión gratuita de 15 min · Reserva` |

**Producción:** grabar con teléfono en vertical, luz natural/frente, audio limpio
(usar micrófono de solapa o auriculares si se puede). Subtítulos quemados. Insertar
2–4 s de screen recording del borrador. Sin música con licencia dudosa; si se usa,
que no compita con la voz.

---

## 7. Formatos y dimensiones por creativo

| Asset | Placement principal | Ratio | Resolución | Notas |
|---|---|---|---|---|
| Video A talking head | Reels/Stories + Feed | 9:16 + 4:5 | 1440×2560 / 1440×1800 | Subtítulos; hook en pantalla |
| Estático A oferta | Feed | 4:5 + 1:1 | 1440×1800 / 1080×1080 | Fondo `#fcfaf6`, oferta literal, label «SIN COSTO» |
| Video B demo | Reels/Stories | 9:16 | 1440×2560 | Screen recording + voz; before/after |
| Video C talking head | Reels/Stories | 9:16 | 1440×2560 | Mismo tratamiento que A |
| Estático C error | Feed | 4:5 + 1:1 | 1440×1800 / 1080×1080 | Titular «El error #1 al declarar RESICO» |
| Video D founder | Reels + Feed | 9:16 + 1:1 | 1440×2560 / 1080×1080 | Guion §6 |

**Archivos:** MP4/MOV H.264 (video ≤4 GB), JPG/PNG (imagen ≤30 MB). Lado corto
≥1080 px. Tolerancia de aspect ratio ~1%.

**Safe zone (9:16):** 14% arriba · 35% abajo · 6% lados (sube a 40% abajo si hay
disclaimer).

---

## 8. Recomendación de targeting (resumen ejecutivo)

1. **1 campaña · 1 conjunto · Advantage+ audience · México · 25–50 · todos los géneros.**
2. Sugerencias (no filtros): `Small business owners`, `New active business`, `Small business`.
3. **Excluir** custom audience de clientes/leads actuales.
4. **Sin lookalikes** en esta ronda.
5. Si se quiere precisar geo como **versión B secuencial**: CDMX + Edomex + Jalisco + NL + Querétaro (nunca en paralelo).
6. Registrar el **tamaño estimado de audiencia** que muestre Ads Manager al guardar (dato no público fuera de la plataforma).

---

## 9. Landing audit (F3) — resumen

**Estado:** `/demo-resico` cumple la cadena ad → problema → oferta → landing → agenda.
H1 = oferta **literal**; 7 puntos del checklist cubiertos; precio ($419) **no** aparece
en la landing; OG propio y `noindex` intencional.

**Copy congelado (2026-10-07, commit `5cd8788`):** badge «Sesión gratuita · 15
minutos»; H1 «Prepara tu borrador de declaración mensual RESICO gratis en 15
minutos»; CTAs «Preparar mi borrador gratis» / «Agendar mis 15 minutos» / «Agendar mi
sesión gratuita». Detalle completo en
[`landing-audit.md`](./landing-audit.md) §5.

**Pendiente que toca a Fase 5:** el copy dice «Las llamadas son limitadas por
semana» mientras el evento de Cal es `UNLIMITED` (landing-audit §6.2). **No** usar
escasez en los anuncios mientras la landing no lo respalde; decidir cupo o suavizar
el copy antes de lanzar.

---

## 10. Cal.com audit (F2) — resumen

**Evento:** `ezerangel/demo-fiscalio` — 15 min, gratis, Google Meet, buffer 15/15,
sin cupo, auto-confirmado, recordatorio 24 h. Redirect post-booking a
`/demo-resico/gracias?uid=` resuelto en código (commit `bc58f6b`), verificado en
escritorio y móvil.

**Qualification actual** (ver §14): `is-resico` (Sí/No), `review` (texto libre,
requerido), `worried-about` (textarea opcional). **No** se piden e.firma ni
contraseñas.

Detalle completo en [`cal-audit.md`](./cal-audit.md).

---

## 11. Tracking / GA4 / Meta audit (F1) — resumen

| Nivel | Métrica | GA4 | Meta | Registro |
|---|---|---|---|---|
| 1 | CTR / landing | `landing_view`, `cta_click` | `PageView`, `ViewContent` | auto |
| 2 | Coste por booking | `booking` | `Lead` | auto (dedupe) |
| 3 | Show-up | — | — | **manual** (`attended`) |
| 5 | Sesión → pago | `purchase` | `Purchase` | auto + tabla |
| 6 | CAC | derivado | — | tabla manual |

UTMs/`fbclid` se capturan en la landing (`rememberCampaignParams`) y se propagan a
todos los eventos y al iframe de Cal (`forwardQueryParams`). Detalle y limitaciones
(CAPI no implementado, `booking_uid` sin export CSV) en
[`tracking-audit.md`](./tracking-audit.md).

---

## 12. Convención UTM

```
utm_source   = meta
utm_medium   = paid_social
utm_campaign = resico-borrador-15min
utm_content  = angulo-a-incertidumbre
             | angulo-b-trabajo-manual
             | angulo-c-error-comun
             | angulo-d-founder-video
```

- `fbclid` lo añade Meta automáticamente; el helper lo preserva.
- Cada anuncio lleva su propio `utm_content`; **no** usar `utm_term` (no aplica en Meta).
- En Ads Manager usar la **URL de destino con UTM** por anuncio, no una sola global.
- Los UTMs llegan a GA4 (auto + explícitos) y al iframe de Cal.

---

## 13. Definiciones de conversión

| Definición | Regla |
|---|---|
| `landing_view` | Vista de `/demo-resico` (con UTMs de la URL). |
| `cta_click` | Clic en CTA (`placement=hero\|final`). |
| `calendar_view` | Iframe de Cal listo (`linkReady`), no el clic. |
| `booking` | Reserva creada en Cal (`bookingSuccessfulV2` o `/gracias`), **una vez** por reserva (`booking_uid`). |
| `attended` | La sesión ocurrió. **Manual.** |
| `qualified` | Asistió + tributa (o cree estarlo) en RESICO + caso preparable. **Manual.** |
| `trial/product_use` | Usó Fiscalio durante la sesión. **Manual.** |
| `purchase` | `checkout.session.completed` verificado en `/descarga?session_id=`. Auto + tabla (fuente de verdad). |

**Evento de optimización de la campaña:** `Lead` (Meta). **Fuente de verdad del
funnel:** la tabla de registro de §15.

---

## 14. Campos de qualification (respaldan F2)

| Campo Cal | Tipo | Requerido | Lectura para el experimento |
|---|---|---|---|
| `name` / `email` | sistema | ✅ | Identidad y contacto para el registro |
| `is-resico` | Sí / No | ✅ | **Filtro de ICP** (H3): si "No", marcar como no calificado |
| `review` | texto | ✅ | Qué quiere revisar → utilidad de la sesión |
| `worried-about` | textarea | ❌ | Objeciones y lenguaje real del público (insumo para copy) |

**Decisión vigente (cal-audit §2):** se mantienen Sí/No, texto libre y textarea
opcional (sin "No estoy seguro" ni opciones predefinidas). Sin información fiscal
sensible: **nada de e.firma ni contraseñas**.

---

## 15. Plan de experimentación + tabla de registro

**Diseño:** prueba de mensaje. 4 ángulos en un solo conjunto; Meta reparte el gasto.
No se declaran "ganadores" (sin poder estadístico): se recogen **señales**.

**Tabla de registro** (una fila por reserva; completar manualmente tras cada sesión):

| Lead | Fecha | Creative (`utm_content`) | Booking (uid) | Attended | Qualified | Product used | Paid | Amount (MXN) | **Known person? (Sí/No)** | Notas |
|---|---|---|---|---|---|---|---|---|---|---|
| | | | | ☐ | ☐ | ☐ | ☐ | | | |
| | | | | ☐ | ☐ | ☐ | ☐ | | | |

**Reglas de la tabla:**
- `Known person?` = **Sí** si la persona ya tenía relación previa con Fiscalio (amigo, conocido, cliente). El experimento se lee **solo con externos**.
- `Creative` se llena con el `utm_content` que llegó a Cal (o con el UID de GA4 `booking`).
- `Attended`/`Qualified`/`Product used`/`Paid` en ≤24 h después de la sesión.
- Registrar **todo cambio** de campaña (copy, presupuesto, pausa) con fecha y motivo.

---

## 16. Checklist de monitoreo diario

**Cada día (10 min):**
- [ ] Gasto del día vs ~$140 MXN (pacing).
- [ ] Entrega/estado del conjunto (¿Learning Limited? esperado).
- [ ] Impresiones, alcance y **frecuencia** (fatiga si sube rápido).
- [ ] CTR (enlace) y **hook rate** por anuncio.
- [ ] CPC y **costo por landing view** (GA4).
- [ ] Clics al CTA (`cta_click`) y `calendar_view`.
- [ ] **Reservas** (`booking`/`Lead`) y correos en Cal.
- [ ] Anomalías o anuncios rechazados (guardar, no borrar).

**Días 3 y 6:** revisar desglose por placement y por ángulo; confirmar que ningún
anuncio se quedó sin gasto.

---

## 17. Decision rules

**Qué NO tocar durante la prueba:** targeting, objetivo, presupuesto, copy y landing.
Cada edición reinicia el aprendizaje. Si se cambia algo, **registrarlo** en §15.

| Señal observada | Diagnóstico | Acción |
|---|---|---|
| CTR < ~1% y sin clics a Cal tras ~$500 gastados | Creativo/audiencia (H1) | **Pausar y rehacer el hook**; no subir presupuesto |
| CTR ok pero pocos `booking` | Landing/CTA/oferta (H2) | Revisar landing/CTA; no tocar la campaña aún |
| Reservas pero bajo `attended` | Cal.com/confirmación | Revisar recordatorio 24 h y no-shows; seguimiento manual |
| Asistió pero no compra | Oferta/sesión/producto (H3) | Análisis post-campaña de la oferta en la sesión |
| Un ángulo destaca | Mensaje | Duplicar **solo ese ángulo** en la siguiente iteración |
| Un color/asset no recibe gasto | Entrega | Dejar que Meta decida; no forzar siembra manual |

**Pausar la campaña si:** el gasto se dispara sin entrega útil, aparecen rechazos
repetidos, o se agota el presupuesto antes de la ventana definida.

---

## 18. Template de análisis post-campaña

```
# Post-campaña Meta — paid-acquisition-meta_20261005
Periodo: ____ / ____ / 2026 → ____ / ____ / 2026
Gasto total: $____ MXN   Presupuesto: $1,000 MXN

## Entrega
- Impresiones: ____   Alcance: ____   Frecuencia: ____
- Estado final del conjunto: ____ (Learning / Learning Limited)

## Por creativo
| Ángulo | utm_content | Gasto | Impr. | CTR | CPC | Landing views | Bookings | CPL |
|---|---|---|---|---|---|---|---|---|
| A | angulo-a-incertidumbre | | | | | | | |
| B | angulo-b-trabajo-manual | | | | | | | |
| C | angulo-c-error-comun | | | | | | | |
| D | angulo-d-founder-video | | | | | | | |

## Embudo (GA4 + tabla manual)
landing_view ____ → cta_click ____ → calendar_view ____ → booking ____
→ attended ____ → qualified ____ → product_use ____ → purchase (____, $____)

## Cuello de botella
- [ ] Creativo/audiencia   [ ] Landing/CTA/oferta   [ ] Cal.com/asistencia   [ ] Sesión/producto
Explicación:

## Hallazgos
1.
2.
3.

## Recomendación de siguiente iteración
```

---

## 19. Recomendación de qué probar después según cada resultado

| Resultado | Lectura | Siguiente paso |
|---|---|---|
| Hay reservas de **externos** y asisten | Meta sirve como canal de descubrimiento | Iterar creativo ganador; considerar **Search** en la ventana del 17 (compuertas G1–G6) |
| CTR ok, **sin reservas** | El anuncio atrae pero la oferta/landing no | Optimizar landing/CTA/oferta; mantener canal |
| **Sin CTR** | El mensaje no engancha en frío | Rehacer hooks (mismo cuerpo, cambiar 3 s); reabrir research de creativos |
| Reservas de **conocidos** solamente | Señal contaminada | Reiterar con exclusiones de custom audience; no concluir nada sobre Meta |
| `attended` bajo | Problema de Cal.com/no-show | Mejorar recordatorios y confirmación; medir de nuevo |
| Asisten y **no compran** | Oferta/sesión/producto | Analizar la sesión y el precio; no es problema de canal |
| Search con demanda orgánica (G1–G6) | Intención explícita disponible | Probar **Google Search** con $2,000–$3,000 MXN extra en la semana del 17 |
| Sin evidencia concluyente | Presupuesto insuficiente | Documentar como "indeciso"; decidir si vale financiar otra iteración |

**Regla:** no migrar a Google Search solo porque Meta "va mal". Aislar primero el
cuello (creativo vs landing vs sesión) y exigir las compuertas G1–G6.

---

## Anexo — Checklist de cumplimiento de copy

Antes de publicar cada anuncio:
- [ ] ¿Usa alguna frase prohibida? ("paga menos impuestos", "optimiza tus impuestos", "evita multas", "garantizamos", "declaramos por ti", "agenda una demo")
- [ ] ¿Afirma o implica la situación financiera del espectador? (deudas, ingresos, "estás en problemas")
- [ ] ¿Promete un resultado que no podemos demostrar? (cero errores, ahorro garantizado)
- [ ] ¿La landing coincide con lo que promete el anuncio?
- [ ] ¿Tiene subtítulos y respeta la safe zone?
- [ ] ¿El `utm_content` corresponde al ángulo y formato?
- [ ] ¿La URL de destino incluye los UTMs correctos?

## Anexo — Enlaces de activos

- Landing: `https://www.fiscalio.app/demo-resico`
- Gracias: `https://www.fiscalio.app/demo-resico/gracias`
- Calculadora: `https://www.fiscalio.app/calculadora-resico`
- Blog RESICO: `/blog/como-hacer-declaracion-mensual-resico`, `/blog/cuanto-debo-pagar-resico`, `/blog/cuando-presentar-declaracion-mensual-resico`
- Evento Cal: `https://cal.com/ezerangel/demo-fiscalio` (env `CAL_COM_DEMO_URL`)
- OG dinámico: `/api/og` (label «SIN COSTO»)
