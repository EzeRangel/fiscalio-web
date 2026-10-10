# Research GTM — paid-acquisition-meta_20261005 (Fase 4)

Entregable de la **Fase 4 (§18–19)** del track `paid-acquisition-meta_20261005`:
primer test pagado de Fiscalio en Meta Ads (Facebook + Instagram), **$1,000 MXN**,
~$100–150 MXN/día, México.

**Fecha:** 2026-10-08 · **Estado:** completo (F4.1–F4.5)
**Objetivo:** descubrir si Meta sirve para este público y *por qué* (evidencia y
cuello de botella), no demostrar que sirve.

> Este documento **sintetiza** la investigación. El detalle citado, tabla por
> tabla, vive en los cinco informes de `./research/`. Aquí solo se conservan los
> hallazgos que cambian decisiones, la síntesis cruzada y las entradas directas
> para el *Campaign Launch Pack* (Fase 5).

## 0. Documentos de la investigación

| Doc | Área | Pregunta que responde |
|---|---|---|
| [`research/01-meta-ads-mx.md`](./research/01-meta-ads-mx.md) | F4.1 Meta Ads MX | Formatos/placements, tracking, optimización y presupuesto pequeño |
| [`research/02-audiencia-mx.md`](./research/02-audiencia-mx.md) | F4.2 Audiencia | Tamaño, intereses disponibles, límites, broad vs intereses |
| [`research/03-competencia.md`](./research/03-competencia.md) | F4.3 Competencia | Contadores RESICO, software fiscal y servicios de declaración |
| [`research/04-creative.md`](./research/04-creative.md) | F4.4 Creativos | Servicios fiscales, SaaS B2C/B2SMB, founder-led y educación fiscal MX |
| [`research/05-google-search.md`](./research/05-google-search.md) | F4.5 Google Search | Señales que justificarían una prueba §19 |

**Método:** fuentes primarias primero (documentación oficial de Meta, SAT, INEGI,
DOF, SHCP, páginas de precios de competidores), prensa seria como contexto y
proveedores de industria solo como dirección. Donde no hay dato público se marca
**"sin fuente pública"**; no se inventaron cifras ni URLs. Los precios de
competidores se verificaron el 2026-10-08 y son volátiles.

---

## 1. Resumen ejecutivo — lo que cambia decisiones

1. **Con $1,000 MXN no se sale de la fase de aprendizaje.** Meta exige ~50
   eventos de optimización por conjunto/semana ([Meta](https://www.facebook.com/business/help/112167992830700)).
   La campaña es un **test de mensaje y creativo**, no de optimización; "Learning
   Limited" es el estado esperado, no un fracaso (F4.1 §6.4, §10).
2. **Consolidar es la decisión #1:** 1 campaña, 1 conjunto, 3–4 creativos,
   Advantage+ placements. Fragmentar en varios conjuntos garantiza que *todos*
   queden en aprendizaje (F4.1 §7.3; F4.2 §4.1).
3. **No existe un público "RESICO" en Meta.** No hay interés/comportamiento de
   RESICO, SAT, CFDI ni de software contable mexicano; las señales de autoempleo
   traen mucho ruido. El targeting viable es **audiencia amplia + creativo/oferta
   que auto-seleccionan** (F4.2 §2.3, §6).
4. **El "gratis" ya es estándar en la categoría** (SinConta 15 min, Praxium
   diagnóstico, Heru 1er mes, ResicoCalc 1er crédito). El diferenciador de Fiscalio
   no es la gratuidad, es **salir con el borrador hecho** y el **pago único**
   ($419 + IVA) frente a suscripciones de **$350–$812/mes** (F4.3 §0, §6.3, §7).
5. **La categoría vende miedo** ("paga menos impuestos", "evita multas",
   "310K expulsados de RESICO"). Fiscalio tiene ese vocabulario prohibido y además
   el ángulo "miedo a equivocarse" roza la política de **atributos personales** de
   Meta. Se reformula a *error común* y se comunica **claridad/alivio**, no
   amenaza (F4.3 §6.1, §7.2; F4.4 §5).
6. **Search captura demanda, Social la crea.** No hay dato público de volumen de
   los términos RESICO, pero el contexto 2025–2026 (fiscalización, e.firma y
   buzón obligatorios, reformas) es viento de cola informativo. **No migrar a
   Google ahora**; instrumentar GSC/Trends/Keyword Planner y decidir con las
   compuertas G1–G6 (F4.5 §5).
7. **La ventana importa:** la campaña corre en la **antesala del plazo mensual
   (día 17)**. La urgencia de fecha es un gancho transversal a Meta y Search
   (F4.5 §1.2, §6).

---

## 2. F4.1 — Meta Ads MX (formatos, tracking, optimización, presupuesto)

**Formatos/placements.** Reels es el placement dominante en inventario (más de la
mitad de los anuncios de Instagram en 2025), pero Feed conserva mayor intención.
Recomendación: **no separar por placement**; usar Advantage+ placements con los
mismos activos en **9:16 (1440×2560)** y **4:5 (1440×1800)**, gancho en los
primeros 1.5–3 s, duración 15–30 s, **subtítulos siempre**, safe zone **14/35/6**
en 9:16 (F4.1 §3, §4; F4.4 §4).

**Tracking.** Mínimo viable: **Pixel + Conversions API** con deduplicación por
`event_id`. La configuración manual de AEM (8 eventos) y la verificación de
dominio para eventos **ya no son necesarias** desde mediados de 2025 — muchas
guías siguen desactualizadas. ATT en LATAM ~49% opt-in (Q1 2026), mejor que el
promedio global (F4.1 §5).

**Optimización.** Objetivo **Leads** (Prospectos), puja **Highest volume**, sin
cost cap ni bid cap (los controles de costo con pocos datos limitan la entrega).
"Sales" con $419 es demasiado infrecuente para el presupuesto (F4.1 §6.1, §6.5).

**Presupuesto.** ~**$140 MXN/día** (o lifetime $1,000 a 7–8 días). Estructura
recomendada: 1 conjunto × $1,000 con 3–6 anuncios (F4.1 §7.2, §7.3).

**Benchmarks (rangos variables).** CPM México ~USD $1.50–$5.50 (una fuente
promedia $4.50); CPM/CPC son **estimaciones de proveedores, no cifras oficiales
de Meta**. Con ese CPM, $1,000 MXN compran del orden de ~11,000–37,000
impresiones. **No existe benchmark público de CPL/CPA para software fiscal en
México** (F4.1 §8).

**Políticas.** La categoría especial "Financial products and services" aplica a
anunciantes/audiencias de EE. UU., **no a México**; aun así, evitar promesas
absolutas y lenguaje de crédito/inversión. Fiscalio es software fiscal, no
producto financiero (F4.1 §9).

---

## 3. F4.2 — Audiencia MX (freelancers RESICO)

**Tamaño.** Personas físicas en RESICO: **~1.8 M (2024, "tributan") a 2.6 M
(2022, padrón)**; el universo amplio que cita el SAT en 2026 es **4.18 M**
(personas + micronegocios) con potencial teórico de **~10.2 M**. INEGI registra
**13.0 M trabajadores por cuenta propia** (4T 2025) y ~**16.6 M** si se suman
empleadores; la informalidad ronda **55%** (F4.2 §1).

**Segmentación disponible.** No hay interés "RESICO"/"SAT"/"CFDI". Existen solo
*proxies* (`Small business owners`, `New active business`, `Facebook Page
admins`, interés `Small business`). Con Advantage+ audience los intereses son
**sugerencias, no filtros**; Meta eliminó las **exclusiones de detailed
targeting** en 2025 y consolida intereses (apagado 15-01-2026) (F4.2 §2, §3).

**Lookalikes.** Inviables en esta ronda: Meta pide **100 mínimo y recomienda
1,000–5,000** en la fuente; una semana de test no lo alcanza. Guardar los correos
de Cal.com para una fase 2 (F4.2 §4.3).

**Recomendación.** 1 ad set, **México nacional, 25–50, todos los géneros**,
Advantage+ audience ON con sugerencias de autoempleo/negocio nuevo; **excluir
solo clientes/leads actuales** (custom audience). No apilar intereses. El filtro
real es el creativo + la oferta (F4.2 §7).

---

## 4. F4.3 — Competencia (contadores, software y declaración)

El mercado está partido en **dos polos** y un hueco en medio:

- **Despachos/contadores online** — suscripción mensual **$350–$1,749 MXN/mes**
  (SinConta, Heru, Konta, Contador RESICO, Praxium, RDC); se posicionan *contra*
  los bots y **casi siempre piden RFC + contraseña del SAT (CIEC)**.
- **Software fiscal/ERP** — **$187–$3,590 MXN/mes** (CONTPAQi, Aspel/Siigo,
  Alegra, Contalink, Bind, Defontana, Facturapi, Facturama); orientado a pymes y
  contadores, no al RESICO puro.
- **Herramientas puntuales** — ResicoCalc: **1er crédito gratis, $99/crédito,
  12 por $699**; calcula desde XMLs y capitaliza "no pedimos e.firma ni
  contraseña".

**Hueco que Fiscalio ocupa:** **pago único ($419 + IVA) + offline-first + sin
credenciales del SAT + sesión guiada de 15 min que termina con el borrador**. El
break-even frente a un despacho de $350/mes es ~1.2 meses (F4.3 §0, §7.1).

**Qué NO copiar:** "paga menos impuestos", "optimiza tus impuestos", "evita
multas", "declaramos por ti", "te expulsan de RESICO", "310K expulsados",
"16,200 auditorías". Ese es el vocabulario de la categoría y el prohibido del
track (F4.3 §6.1, §7.2).

**Objeciones a preemptar** (F4.3 §8): privacidad de credenciales (decir que **no
pide e.firma ni contraseña**), "¿el cálculo está bien?" (borrador que se revisa
contigo, no declaración presentada), "¿es gratis de verdad?" (agenda explícita
de la sesión), precio final ($419 + IVA una vez, sin suscripción).

---

## 5. F4.4 — Creative research

- **Video vertical nativo es el formato de entrada, pero el estático no muere**
  (sigue aportando 60–70% de las conversiones en Meta). Cartera sana: video +
  estático (F4.4 §1–§2).
- **Founder-led funciona por confianza, no por producción.** Meta reporta que los
  Partnership Ads reducen el costo por resultado ~19%; el video de fundador
  grabado con teléfono puede superar a la marca producida (F4.4 §2.2).
- **Los primeros 3 segundos son el activo.** Regla de testeo: mismo cuerpo,
  **cambiar solo el hook** (F4.4 §2.3).
- **Estructura 20–30 s:** hook 0–3 s → dolor 3–8 s → mecanismo/demo 8–18 s →
  prueba 18–24 s → CTA 24–30 s (F4.4 §2.3).
- **Matriz ángulo → formato → hook → CTA** (F4.4 §7):

| Ángulo | Formato | Hook de ejemplo (MX) | CTA |
|---|---|---|---|
| A — incertidumbre | Talking head / carrusel | "Nadie te explica cómo se calcula el ISR en RESICO. Aquí va, en 30 segundos." | "Prepara tu borrador gratis" |
| B — trabajo manual | Screen recording + before/after | "Así se ve clasificar 80 facturas a mano… y así en Fiscalio." | "Prueba el borrador en 15 min" |
| C — miedo a equivocarse | UGC / testimonial | "El error #1 al preparar tu declaración mensual (y cómo revisarlo)." | "Haz tu borrador guiado, gratis" |
| D — founder-led | Video vertical 20–30 s | "Construí Fiscalio porque odiaba hacer mi declaración. Te muestro cómo funciona." | "Sesión gratuita de 15 min" (nunca "agenda una demo") |

- **Riesgo de política #1:** el ángulo C no debe afirmar ni implicar la **situación
  financiera del espectador** (atributos personales). Reformular de "¿vas a meter
  la pata?" a "el error más común". Sustituir el miedo por **alivio**: "en orden",
  "a tiempo", "tú controlas" (F4.4 §5).
- **Producción mínima:** máster 9:16 por ángulo + export 4:5 y 1:1, subtítulos
  hard-coded, texto/logo dentro de la safe zone, la boca del fundador fuera del
  tercio inferior (F4.4 §4, §8).

---

## 6. F4.5 — Señales que justificarían Google Search (§19)

**No hay dato público de volumen** para los términos RESICO (Trends da índice
0–100, Keyword Planner rangos tras cuenta de Ads, las herramientas SEO son de
pago). La demanda se infiere de que **SAT, Facturama, Alegra, Contpaqi y despachos
mantienen páginas dedicadas** a esos términos (F4.5 §1).

**Estacionalidad:** el detonante mensual es el **día 17** (+1 a 5 días hábiles
según el 6.º dígito del RFC); la ventana real de urgencia es ~**15–24 de cada
mes**. La "declaración anual RESICO" se está vaciando: la mayoría de PF en RESICO
quedaron relevadas de la anual, y el valor migró a la **mensual** y a la
calculadora (F4.5 §1.2, §1.3).

**Marco de decisión (compuertas, todas deben cumplirse)** — umbrales
**heurísticos, no garantías** (F4.5 §5):

| # | Compuerta | Umbral sugerido |
|---|---|---|
| G1 | Demanda orgánica observable (GSC) | > 500 impresiones/mes en consultas RESICO |
| G2 | Brecha de ranking | posición media > 10 en consultas RESICO |
| G3 | Intención comercial (Keyword Planner) | ≥ 2 términos con volumen no trivial y CPC > 0 |
| G4 | Tendencia (Trends 5 años) | estable o creciente, pico en la ventana del 17 |
| G5 | Meta con CPL alto y calidad baja | CPL sube en ≥ 2 iteraciones y/o baja la activación |
| G6 | Presupuesto mínimo viable | ≥ $2,000–$3,000 MXN adicionales para 2–3 semanas |

**Acción ya (costo $0):** verificar GSC, levantar rangos de Keyword Planner
(MX/es) y Trends (MX, 5 años), y definir **un único evento de conversión**
("borrador iniciado" / "calculadora usada") para poder comparar Meta vs Search
(F4.5 §6).

---

## 7. Síntesis cruzada y tensiones a vigilar

- **Objetivo de campaña.** F4.1 recomienda **Leads**; F4.2 sugiere Tráfico/Vistas
  de landing como alternativa si no hay evento de lead suficiente. Consenso: usar
  el objetivo que optimice por una acción **frecuente y ya instrumentada**
  (Lead/Schedule del embed), nunca "Sales" por la compra de $419. Cualquiera que
  sea, con $1,000 habrá Learning Limited (F4.1 §6.4).
- **El evento de reserva puede ser demasiado profundo.** Si `booking`/`Lead`
  ocurre muy pocas veces, la optimización se queda ciega; considerar optimizar
  por un evento de embudo superior (vista de landing / clic a Cal) y medir la
  reserva aparte (F4.1 §11.5; F4.5 §6).
- **CPM de México: sin cifra oficial.** Las estimaciones ($1.50–$5.50 USD) son de
  proveedores. Tratar como rango para dimensionar impresiones, no como promesa
  (F4.1 §8; F4.4 §0).
- **Presupuesto vs expectativa.** $1,000 MXN ≈ USD $50–55 (~$7–8/día). No habrá
  significancia estadística: el resultado es **aprendizaje por ángulo**, no
  declarar ganadores (F4.4 §6.3).
- **Copy: doble riesgo.** El vocabulario de la categoría (miedo) está prohibido
  por el track *y* roza la política de atributos personales de Meta. La
  diferenciación competitiva (claridad, privacidad, pago único) es también la
  ruta segura de compliance (F4.3 §7; F4.4 §5).
- **Search no reemplaza a Meta por malos resultados.** "Que Meta vaya mal" no es
  señal suficiente; hay que aislar si el cuello fue creativo, audiencia, landing
  o calendario (F4.5 §5.4; F4.1 §11.5).

---

## 8. Implicaciones consolidadas para el Campaign Launch Pack (Fase 5)

Estas son las entradas que Fase 5 debe convertir en el pack de 19 entregables:

1. **Estructura:** 1 campaña (objetivo **Leads**), **1 conjunto**, **3–4
   creativos** (A/B/C/D), Advantage+ placements, presupuesto ~**$140 MXN/día**
   (o lifetime $1,000), puja Highest volume sin caps.
2. **Audiencia:** México nacional, **25–50**, todos los géneros, Advantage+
   audience con sugerencias de autoempleo/negocio nuevo; excluir clientes
   actuales; **sin lookalikes**.
3. **Tracking:** Pixel ya en layout; declarar `Lead` como conversión; evaluar
   CAPI/dedupe `event_id`; registrar a mano `attended`/`qualified`/`product_use`/
   `purchase`; medir además clics a Cal, reservas y show-up. *Pendiente externo:
   `NEXT_PUBLIC_META_PIXEL_ID` y `/demo-resico` en producción (tracking-audit §5).*
4. **Creativos:** por ángulo, con la matriz de §5; 9:16 máster + 4:5 Feed;
   15–30 s; hooks en los primeros 1.5–3 s; subtítulos; safe zone 14/35/6;
   founder-led grabado con teléfono.
5. **Copy:** respetar la lista prohibida; ángulo C reformulado a "error común";
   comunicar claridad/alivio; CTA "sesión gratuita de 15 min" / "prepara tu
   borrador gratis" (nunca "agenda una demo").
6. **Diferenciación competitiva a explotar:** pago único ($419 + IVA vs
   $350–$812/mes), offline-first, **sin e.firma ni contraseña del SAT**, y un
   entregable concreto (borrador) en vez de un diagnóstico. No entrar a la pelea
   contador-vs-software; no copiar miedo ni prueba social inflada.
7. **Hipótesis alineadas al research:**
   - H1 (problema) = **incertidumbre** ("no sé si mi borrador está bien"), no
     miedo a multas.
   - H2 (oferta) = el gratis ya es familiar; el diferenciador es **salir con el
     borrador hecho**.
   - H3 (producto ↔ eventos) = forzar `booking → attended → product_use` dentro
     de la sesión de 15 min para que el embudo mida la promesa real.
8. **Google Search:** **no abrir** en Fase 5; documentarlo como candidato
   condicionado a G1–G6; instrumentar GSC/Trends/Keyword Planner ahora y reservar
   $2,000–$3,000 extra si se decide probar después.
9. **Estacionalidad:** aprovechar la ventana del **día 17** (la campaña Oct 8–15
   corre en la antesala); usar la urgencia de fecha sin caer en claims prohibidos.
10. **Éxito del experimento:** CTR/hook rate, costo por landing view, costo por
    reserva y **diagnóstico del cuello de botella** (anuncio vs landing vs
    calendario vs show-up). No prometer ROAS ni salida de aprendizaje.

---

## 9. Preguntas abiertas y pendientes externos

- [ ] **Producción:** setear `NEXT_PUBLIC_META_PIXEL_ID` en Vercel, desplegar
      `/demo-resico` y verificar `CAL_COM_DEMO_URL` / `NEXT_PUBLIC_APP_URL` con
      esquema (tracking-audit §5; landing-audit §6.1).
- [ ] **Confirmar en Ads Manager** la disponibilidad y el tamaño de las señales
      (`Small business owners`, `New active business`) para `es_MX`: solo son
      visibles dentro de la plataforma (F4.2 §2.2).
- [ ] **Decidir CAPI** (o GTM server-side) y deduplicación por `event_id`.
- [ ] **Definir el evento único de conversión** para Meta y para un futuro Search.
- [ ] **Cuenta publicitaria en MXN** y verificar límites de gasto diario de cuenta
      nueva (F4.1 §11.5).
- [ ] **Business Verification** y revisión de política del copy final (F4.4 §5).
- [ ] **Landing:** confirmar bloque de privacidad ("no pide e.firma ni
      contraseña") y verificación móvil; decidir el cupo semanal o suavizar "Las
      llamadas son limitadas por semana" (landing-audit §6.2, §6.7).
- [ ] **Baseline de Search:** captura inicial de GSC + Keyword Planner + Trends.

---

## 10. Referencias

Las fuentes primarias y de industria están citadas en línea en cada informe:

- Meta Ads (formatos, tracking, optimización, políticas, benchmarks):
  `research/01-meta-ads-mx.md` §12.
- SAT/INEGI/IMSS y documentación de Meta sobre segmentación:
  `research/02-audiencia-mx.md` §8.
- Competidores (sitios y páginas de precios verificados 2026-10-08):
  `research/03-competencia.md` §10.
- Creativos (Meta, TikTok, LinkedIn, estudios, marcas MX):
  `research/04-creative.md` §9.
- Google Search (SAT/DOF/INEGI, prensa, herramientas de medición):
  `research/05-google-search.md` §7.

> Nota de honestidad de datos: los precios de competidores, estimaciones de CPM y
> benchmarks de CPL son **rangos variables** y deben revalidarse al lanzar. Este
> documento no sustituye asesoría fiscal ni legal.
