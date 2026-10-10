# F4.5 — Señales que justificarían una prueba en Google Search (§19)

**Proyecto:** Fiscalio — primera campaña pagada en Meta Ads ($1,000 MXN, ~1 semana, México).
**Oferta:** "Prepara tu borrador de declaración mensual RESICO gratis en 15 minutos."
**Pregunta:** ¿Qué señales justificarían, *después* de la iteración Meta, migrar una fracción del presupuesto a Google Search?
**Fecha de elaboración:** 8 de octubre de 2026.
**Alcance:** Google Search está **fuera de alcance** como canal a ejecutar ahora. Este documento define la evidencia que habría que observar para justificar una prueba mínima.

> **Nota metodológica transversal.** No existe un dato público, gratuito y verificable de volumen absoluto de búsqueda para los términos RESICO en México. Google Trends publica un índice relativo 0–100, no volúmenes ([Google Trends FAQ](https://support.google.com/trends/answer/4365533?hl=en); [SerpApi](https://serpapi.com/blog/google-trends-numbers-from-0-to-100-what-is-it/)); Keyword Planner entrega rangos y exige una cuenta de Google Ads con campaña ([Google Ads Help](https://support.google.com/google-ads/answer/7337243?hl=es-419)); y las herramientas SEO de terceros (Semrush/Ahrefs) están detrás de paywall. Por lo tanto, en este informe **donde no hay dato público se escribe "sin dato público"** y se propone cómo medirlo. Cualquier cifra de volumen inventada sería un riesgo de decisión.

---

## 0. Resumen ejecutivo

- La demanda de búsqueda RESICO **existe y es recurrente**, pero está dominada por contenido informativo de terceros (SAT, despachos, software de facturación) más que por una marca. Eso la hace atractiva para Search (captura de intención) y difícil para Social puro (hay que *crear* la conciencia del término).
- El **detonante estructural de demanda mensual es el día 17** (más días hábiles según el 6.º dígito del RFC), no el periodo anual: desde 2025–2026 la mayoría de personas físicas RESICO quedaron **relevadas de la declaración anual** ([SAT, Comunicado 21-2026](https://www.gob.mx/sat/prensa/llama-sat-a-presentar-la-declaracion-anual-2025-de-personas-21-2026?idiom=es); [El País, 10-abr-2025](https://elpais.com/mexico/2025-04-10/declaracion-anual-2025-los-contribuyentes-del-resico-que-no-estan-obligados-a-presentarla.html)).
- El **contexto 2025–2026 es de mayor fiscalización y de nuevas obligaciones formales** (e.firma y buzón obligatorios desde 1-ene-2026; Plan Maestro 2026; reforma al CFF) — esto suele **elevar la intención de búsqueda de cumplimiento** ("cómo presentar", "cuánto pagar", "carta invitación SAT").
- La campaña Meta corre **en la antesala del plazo mensual** (Oct 8–15, 2026): ventana de alta intención para un futuro test de Search.
- **Recomendación:** no migrar aún. Instrumentar medición barata (GSC + Trends + Keyword Planner) y usar un **marco de decisión con umbrales heurísticos** (§5). Los umbrales son heurísticas, **no garantías**.

---

## 1. Demanda de búsqueda actual en México para términos de intención RESICO

### 1.1 Los siete términos encargados

| Término | Intención de búsqueda | Etapa de funnel | Estacionalidad esperada | Quién domina hoy (evidencia SERP) | Volumen absoluto |
| --- | --- | --- | --- | --- | --- |
| `declaración mensual RESICO` | Transaccional/informativa (cómo presentar) | Consideración → acción | Pico días previos al **17** de cada mes | SAT, Facturama, Alegra, Upseller | **Sin dato público** |
| `cuánto pagar RESICO` | Informativa/cálculo | Descubrimiento → consideración | Pico cerca del 17 y tras empezar a facturar | Contpaqi, Facturama (tablas), Buen Contador | **Sin dato público** |
| `calculadora RESICO` | Herramienta (transaccional) | Acción | Pico cerca del 17; también ene–feb (alta de régimen) | Facturama (`/calculadoras`), Calculadoras de software | **Sin dato público** |
| `presentar declaración RESICO` | Transaccional (tarea) | Acción | Pico días previos al **17** | SAT (trámite oficial), Facturama | **Sin dato público** |
| `RESICO personas físicas` | Informativa | Descubrimiento | Sostenida; picos ene (alta) y abr | Contpaqi, Grupo Animal, Buen Contador | **Sin dato público** |
| `pago provisional RESICO` | Semi-técnica | Consideración | Pico cerca del 17 | SAT, Facturama | **Sin dato público** |
| `declaración anual RESICO` | Informativa | Consideración | Pico **marzo–abril** | SAT, El País, Facturama, Impuestum | **Sin dato público** |

Las columnas de "quién domina" se basan en las páginas que aparecen en los resultados de búsqueda para esos términos (p. ej. [Facturama — Declaración RESICO](https://facturama.mx/blog/declaracion-resico-presentar-sat/), [Alegra — declaración mensual RESICO](https://blog.alegra.com/mexico/declaracion-mensual-resico/), [Contpaqi — RESICO](https://www.contpaqi.com/blog/resico-conoce-mas-sobre-el-regimen-simplificado-de-confianza), [SAT — pagos provisionales PF](https://wwwmatnp.sat.gob.mx/declaracion/26984/declaracion-mensual-en-el-servicio-de-declaraciones-y-pagos)). El hecho de que múltiples SaaS y despachos mantengan páginas dedicadas a estos términos es **evidencia indirecta de que hay demanda suficiente para justificar su inversión en contenido** — pero no sustituye un dato de volumen.

### 1.2 Estacionalidad: el día 17 manda

- La declaración mensual (ISR e IVA) de personas físicas vence **a más tardar el día 17 del mes siguiente** ([SAT](https://wwwmatnp.sat.gob.mx/declaracion/26984/declaracion-mensual-en-el-servicio-de-declaraciones-y-pagos)).
- El plazo se **extiende de 1 a 5 días hábiles adicionales según el 6.º dígito numérico del RFC** — dígitos 1–2: +1 día hábil; 3–4: +2; 5–6: +3; 7–8: +4; 9–0: +5 ([Facturama, citando el Decreto del 26-dic-2013, art. 5.1](https://facturama.mx/blog/declaracion-resico-presentar-sat/); [DOF](https://dof.gob.mx/nota_detalle_popup.php?codigo=733915)). Por tanto, la "ventana de urgencia" real es **del 15 al 24 aprox. de cada mes**.
- Implicación: la curva de demanda mensual debería mostrar un **pico en los 3–7 días previos al 17** y caer el resto del mes. **Cómo confirmarlo:** Google Trends, término `declaración mensual` (o `RESICO`) con granularidad semanal en México; repetir 12 meses y buscar el patrón "diente de sierra" ([Google Trends](https://trends.google.com/trends/?hl=es-419)).

### 1.3 Relación con la declaración anual (abril)

- Para el ejercicio 2025, el SAT indicó que **las personas que tributan en RESICO pueden quedar relevadas de presentar la declaración anual**; quienes apliquen las reglas 3.13.20 y 3.13.21 pueden optar por presentarla ([SAT, Comunicado 21-2026](https://www.gob.mx/sat/prensa/llama-sat-a-presentar-la-declaracion-anual-2025-de-personas-21-2026?idiom=es)). Los pagos mensuales se consideran definitivos ([El País](https://elpais.com/mexico/2025-04-10/declaracion-anual-2025-los-contribuyentes-del-resico-que-no-estan-obligados-a-presentarla.html); [Preguntas frecuentes SAT — Declaración Anual PF 2025](https://www.sat.gob.mx/minisitio/DeclaracionAnual/Personas/documentos/PreguntasFrecuentes_AnualPF2025.pdf)).
- Consecuencia comercial: **`declaración anual RESICO` es una intención que se está "vaciando"** para el RESICO puro (menos personas necesitan buscarla). Sigue viva para (a) RESICO con ingresos mixtos (sueldos + actividad), (b) actividades agrícolas, ganaderas, silvícolas y pesqueras con ingresos > $900k (sí obligadas a anual), y (c) personas que *quieren* presentarla para recuperar saldo a favor.
- El otro pico documentado es **abril** (periodo del 1 al 30) ([SAT](https://www.gob.mx/sat/prensa/llama-sat-a-presentar-la-declaracion-anual-2025-de-personas-21-2026?idiom=es)). El propio SAT reconoce concentración de uso y publica un "calendario informativo" de los días con mayor ingreso al sistema — señal oficial de estacionalidad dentro del mes.

### 1.4 Tamaño del universo (contexto, no volumen de búsqueda)

| Dato | Valor | Fuente |
| --- | --- | --- |
| Personas físicas con actividad empresarial y ingresos anuales < $3.5M (universo RESICO potencial) | **10.2 millones** (presentación SAT, 2021) | [AMDA / SAT](https://www.amda.mx/wp-content/uploads/apr_confianza_sep21.pdf) |
| Micro y pequeños negocios en el padrón del SAT | **2.1 millones** | [SAT](https://www.gob.mx/sat/es/articulos/sabes-a-quien-beneficiara-el-nuevo-regimen-simplificado-de-confianza?idiom=es) |
| Contribuyentes activos en el SAT (jun-2025) | **88.6M** (2.5M empresas, 84M personas físicas) | [El Universal vía Yahoo Finanzas](https://es-us.finanzas.yahoo.com/noticias/sat-auditar%C3%A1-6-8-millones-060000285.html) |
| Trabajadores independientes en México (dic-2025) | **13.0 millones** (21.5% de la población ocupada) | [INEGI ENOE](https://www.inegi.org.mx/contenidos/saladeprensa/boletines/2026/iooe/IOE2026_01.pdf); [La Jornada](https://www.jornada.com.mx/noticia/2026/01/26/economia/ocupacion-en-mexico-aumento-en-11-millones-de-personas-en-2025-pero-en-la-informalidad) |
| Tasa de informalidad laboral (dic-2025) | **54.6%** | [INEGI ENOE](https://www.inegi.org.mx/contenidos/saladeprensa/boletines/2026/iooe/IOE2026_01.pdf) |
| Cuota de Google en búsquedas en México (ago-2026, todos los dispositivos) | **~87–88%** (móvil ~98%) | [StatCounter México](https://gs.statcounter.com/search-engine-market-share/all/mexico) |

> **Caveat:** el "10.2 millones" proviene de una presentación de 2021 sobre el arranque del RESICO; úsese como orden de magnitud, no como padrón actual. **Sin dato público reciente y consolidado del número exacto de RESICO PF activos**; proponer medirlo vía "Datos abiertos SAT" y los informes de recaudación ([Datos abiertos SAT](https://www.sat.gob.mx/minisitio/DatosAbiertos/index.html)).

### 1.5 Tendencia estructural

- RESICO vigente desde el **1-ene-2022**; sustituyó al RIF como régimen simplificado para PF ([Buen Contador](https://buencontador.com/guia-resico-pf-2025/); [Facturama](https://facturama.mx/blog/resico-regimen-simplificado-confianza/)).
- El término "RESICO" ya está "normalizado" en boca de despachos y software (decenas de guías de 2022–2026), lo que sugiere que la conciencia del término creció y, con ella, la búsqueda informativa.
- **Sin dato público** de una serie oficial de "interés de búsqueda" de RESICO. **Cómo medirlo:** Google Trends (MX, 5 años) con los siete términos en `relatedQueries` y `interestOverTime`.

---

## 2. Contexto 2025–2026 que afecta la demanda

| Cambio | Fecha / vigencia | Efecto probable sobre la demanda de búsqueda | Fuente |
| --- | --- | --- | --- |
| **e.firma y buzón tributario obligatorios** para RESICO (terminan facilidades transitorias de la RMF) | Exigibles desde **1-ene-2026** | Sube búsqueda de "e.firma", "buzón tributario", "activar e.firma" | [Cerda Romero / Fiscalia](https://cerdaromero.com/index.php/noticias/item/815-obligaciones-formales-del-resico-exigibles-a-partir-de-enero-de-2026) |
| **RESICO PF relevado de declaración anual** confirmado | RMF 2026 | Baja la demanda de "declaración anual RESICO", sube la de "declaración **mensual** RESICO" | [SAT](https://www.gob.mx/sat/prensa/llama-sat-a-presentar-la-declaracion-anual-2025-de-personas-21-2026?idiom=es); [Buen Contador](https://buencontador.com/cambios-2026-resolucion-miscelanea-fiscal-rmf/) |
| **RESICO PF relevado** (PM además relevadas de DIOT y contabilidad electrónica) | RMF 2026 | Mantiene/simplifica obligaciones → demanda se concentra en mensual | [Buen Contador](https://buencontador.com/cambios-2026-resolucion-miscelanea-fiscal-rmf/) |
| **Mayor fiscalización y facultades de suspensión/cancelación de RFC** para incumplidos/inactivos | 2026 | Sube intención de cumplimiento por miedo a la baja del régimen | [Trade & Law College](https://www.tradelawcollege.edu.mx/single-post/puntos-clave-de-los-cambios-de-resico-2026) |
| **Plan Maestro 2026 "Atención al contribuyente y fiscalización"**; el SAT prevé revisar a decenas de millones de contribuyentes en 2026 | 2026 | Sube búsquedas de "carta invitación SAT", "cómo responder SAT", "diferencias CFDI" | [SAT — mejores prácticas de auditoría](https://www.gob.mx/sat/prensa/sat-da-a-conocer-mejores-practicas-de-transparencia-en-los-procesos-de-auditoria-01-2026); [El Universal vía Yahoo](https://es-us.finanzas.yahoo.com/noticias/sat-auditar%C3%A1-6-8-millones-060000285.html); [Forbes México](https://forbes.com.mx/la-auditoria-ya-empezo-como-el-sat-fiscaliza-en-2026-sin-tocar-tu-puerta/) |
| **Fiscalización preventiva, digital y masiva** (cruces automáticos, CFDI, bancos, IA; la recaudación 2025 subió 4.8%) | 2026 | Refuerza intención de "estar en orden" | [Forbes México, 10-feb-2026](https://forbes.com.mx/la-auditoria-ya-empezo-como-el-sat-fiscaliza-en-2026-sin-tocar-tu-puerta/) |
| **Reforma al CFF:** el SAT podrá suspender emisión de CFDI desde la orden de verificación; **revisión en tiempo real a plataformas digitales desde 1-abr-2026** | Publicada nov-2025; vigencia 2026 | Nuevos términos de búsqueda ("suspensión de sellos", "plataformas digitales retenciones") | [Holland & Knight](https://www.hklaw.com/en/insights/publications/2025/11/reforma-fiscal-para-2026-en-mexico) |
| **Paquete Económico 2027 (propuesta):** RESICO PF hasta $5M, PM hasta $50M, posible **IVA definitivo 7%**, reingreso al régimen | Presentado **8-sep-2026** (discusión/eventual aprobación) | Ola de noticias y búsquedas "RESICO 2027", "IVA 7% RESICO"; **aún propuesta, no vigente** | [PwC](https://www.pwc.com/mx/es/reformafiscal.html); [Buen Contador](https://buencontador.com/resico-2027-claves-de-los-cambios-propuestos/) |
| **Regularización fiscal 2026** (estímulo LIF) | Solicitable desde 1-ene-2026 | Sube búsqueda "regularización fiscal SAT 2026" | [SAT — Regularización Fiscal 2026](https://www.sat.gob.mx/minisitio/RegularizacionFiscal/RegularizacionFiscal/index.html) |

**Lectura para Fiscalio.** El contexto 2025–2026 es un **viento de cola informativo**: más obligaciones formales + más fiscalización + reforma en discusión = más búsquedas de "cómo/cuándo/cuánto". La contrapartida es que **la competencia por esos términos también sube** (despachos, software, creadores de contenido), lo que presiona el CPC de Search si se llega tarde.

> **Advertencia de rigor:** el Plan Maestro 2026 y las reformas son cambiantes. La nota de El Universal titula "6.8 millones" pero en el cuerpo describe "66.8 millones de contribuyentes… 66 millones de pequeños y medianos". Tratar cualquier cifra de fiscalización como **orden de magnitud**, no como dato duro, y verificar contra el [comunicado oficial del SAT](https://www.gob.mx/sat/prensa/sat-da-a-conocer-mejores-practicas-de-transparencia-en-los-procesos-de-auditoria-01-2026) antes de citarla públicamente.

---

## 3. Cómo reunir evidencia barata antes/mientras corre Meta

Toda esta evidencia es **gratuita** y se puede reunir en paralelo a la campaña Meta (no depende de ella).

### 3.1 Google Search Console (GSC) — la fuente primaria

**Setup (15 min):** verificar la propiedad de `fiscalio.app` (o del dominio) y confirmar que GSC ya recolecta datos. El informe de **Rendimiento** muestra consultas, páginas, países, dispositivos, **impresiones, clics, CTR y posición media**, y conserva **16 meses** de historial en ventana móvil ([GSC Help — métricas](https://support.google.com/webmasters/answer/7042828?hl=es); [GSC Help — informe Rendimiento](https://support.google.com/webmasters/answer/17011259?hl=es)).

**Qué mirar (y qué significa):**

| Señal en GSC | Lectura | Umbral heurístico inicial |
| --- | --- | --- |
| Consultas que contienen `resico`, `declaración mensual`, `calculadora` | Existe demanda real capturada por contenido orgánico | ≥ 20 consultas distintas con RESICO en 28 días |
| **Impresiones** altas + **posición media** > 10 + CTR bajo | Hay demanda pero estamos lejos de la primera plana → **candidato claro a anuncio Search** (capturamos con pago lo que no rankeamos) | > 500 impresiones/mes en consultas RESICO y posición media > 12 |
| Impresiones bajas y posición buena | Ya capturamos la demanda; pagar sería canibalizar | < 100 impresiones/mes → no urgente |
| Página `calculadora-resico` vs `blog` | Qué formato atrae la intención de "hacer" vs "leer" | CTR de calculadora > CTR de blog |
| Patrón temporal (fecha del 17) | Confirma estacionalidad mensual | pico en la semana del 10–17 |
| Consultas de marca (`fiscalio`) vs no marca | Mide si hay demanda de categoría o solo de marca | Ratio no-marca/marca creciente |

**Tiempo para leer:** con un sitio indexado, GSC muestra datos con 2–3 días de retraso; una ventana de **28 días** es suficiente para una primera lectura y **90 días** para estacionalidad fiable. Si el sitio es nuevo, hay que esperar indexación (semanas). *Limitación:* GSC solo reporta las consultas con impresiones; términos sin impresiones no aparecen — por eso GSC **subestima** la demanda total.

### 3.2 Google Ads Keyword Planner (rangos)

Gratis con una cuenta de Google Ads (requiere configurar cuenta y crear campaña) ([Google Ads Help](https://support.google.com/google-ads/answer/7337243?hl=es-419); [Google Business](https://business.google.com/es-all/ad-tools/keyword-planner/)). Configurar **ubicación = México**, **idioma = español**. Devuelve **rangos** (p. ej. "1K–10K"), no cifras exactas, y estimaciones de puja (CPC) que son la señal de **competencia comercial**.
**Qué mirar:** (a) rango de volumen de cada término; (b) CPC estimado (si un término informativo tiene CPC alto, hay anunciantes pujando → monetizable); (c) "ideas" relacionadas para descubrir términos no obvios.

### 3.3 Google Trends (índice relativo)

Comparar los siete términos en MX, 5 años. Recordar: escala **0–100 normalizada**, no volumen; 100 = pico del término en la ventana/región ([Trends FAQ](https://support.google.com/trends/answer/4365533?hl=en); [Exploding Topics](https://explodingtopics.com/blog/google-trends-search-volume)).
**Qué mirar:** (a) tendencia (¿sube, plana, cae?); (b) patrón intra-mensual (pico cerca del 17); (c) comparación entre términos (qué intención pesa más); (d) picos de noticias de reformas (Paquete 2027, fiscalización); (e) "búsquedas relacionadas" en ascenso.
*Limitación operativa:* la API pública de Trends suele responder **429** desde IPs de datacenter (se comprobó al elaborar este informe); hacerlo a mano en el navegador o con `pytrends` local.

### 3.4 Señales de intención complementarias

| Señal | Herramienta | Qué indica |
| --- | --- | --- |
| Autocompletado y "Otras preguntas de los usuarios" de Google | Navegador | Qué frases reales usan las personas |
| Comentarios de la campaña Meta (ads comments) | Ads Manager | Objeciones y lenguaje literal del público |
| Comentarios/DMs de TikTok/Instagram de cuentas fiscales | Manual | Términos coloquiales ("Soy RESICO y no sé declarar") |
| Búsqueda interna del sitio | Analítica web | Qué buscan quienes ya llegaron |
| Google Trends "consultas relacionadas" | Trends | Long-tails emergentes |

---

## 4. Diferencias de intención: Search vs Social (para este público)

| Dimensión | **Google Search** | **Meta (Social)** |
| --- | --- | --- |
| Estado mental | "Tengo un problema y lo estoy resolviendo ahora" | "Estoy desplazándome; quizá algo me interese" |
| Conocimiento del término | **Alta**: ya sabe decir "RESICO", "declaración mensual" | **Variable**: muchos no saben que su régimen se llama RESICO |
| Rol en el embudo | Captura de demanda **existente** | Creación de demanda / educación |
| Formato ganador | Página clara con la respuesta + herramienta | Video corto, testimonio, comparación "antes/después" |
| Costo y previsibilidad | CPC previsible; intención alta | CPM/CPL volátil; intención variable |
| Estacionalidad | Muy marcada (día 17, abril) | Menos marcada (feed siempre activo) |
| Riesgo principal | Competencia por el término (SAT, software) y canibalización orgánica | Fatiga creativa y audiencia fría |

**Traducción operativa para Fiscalio:**
- **Meta (ahora):** educar y descubrir. La oferta "borrador en 15 min" funciona como gancho de *dolor* ("¿ya viste que vence el 17?").
- **Search (después):** capturar a quien **ya sabe** que tiene que declarar y busca "cómo". El mismo gancho ("en 15 minutos, gratis") convierte mejor porque la intención ya está formada.
- **Híbrido recomendado a futuro:** Social arriba del embudo (descubrimiento del problema) + Search en la ventana del 15–17 (captura de urgencia). No son canales sustitutos; se complementan.

---

## 5. Marco de decisión: señales cuantitativas que justificarían probar Google Search

> **Estos umbrales son HEURÍSTICAS de trabajo, no garantías.** Con $1,000 MXN (~USD 50–55, según tipo de cambio) no habrá poder estadístico para decidir nada de forma concluyente. **Cómo medirlo:** usar Meta como *baseline* de costo y calidad; usar GSC/Trends/Keyword Planner como *contexto*. Decidir con "gates" (compuertas), no con una sola cifra.

### 5.1 Compuertas (todas deben cumplirse para justificar la prueba)

| # | Compuerta | Umbral heurístico | Cómo se mide | Si falla |
| --- | --- | --- | --- | --- |
| G1 | **Demanda orgánica observable** | > 500 impresiones/mes en consultas con RESICO (o ≥ 3 consultas RESICO con impresiones) | GSC, informe Rendimiento, 28–90 días | Demanda insuficiente → no hay mercado de búsqueda que capturar |
| G2 | **Brecha de ranking** | Posición media > 10 en consultas RESICO (demanda no atendida por nuestro contenido) | GSC | Ya capturamos la demanda → pagar canibaliza |
| G3 | **Intención comercial** | Keyword Planner: al menos 2 términos con rango de volumen no trivial **y** CPC estimado > 0 | Keyword Planner (MX/es) | Término sin puja → quizá no vale pagar |
| G4 | **Tendencia no decreciente** | Trends estable o creciente a 5 años; pico en ventana del 17 | Trends | Términos en declive → priorizar otros |
| G5 | **Meta con CPL alto y calidad baja** | CPL de Meta sube en ≥ 2 iteraciones **y/o** el % de leads que activan (usan la calculadora) cae | Ads Manager + analítica | Meta funciona → no migrar aún |
| G6 | **Presupuesto mínimo viable** | Al menos ~$2,000–$3,000 MXN disponibles para un test de Search de 2–3 semanas | Presupuesto | Con < $2,000 la señal es ruido |

### 5.2 Tabla de umbrales por señal (resumen)

| Señal | Verde (probar Search) | Ámbar (seguir midiendo) | Rojo (no probar) |
| --- | --- | --- | --- |
| Impresiones orgánicas RESICO (GSC, mes) | > 500 | 100–500 | < 100 |
| Posición media en consultas RESICO | > 10 | 5–10 | ≤ 5 |
| CTR orgánico en consultas RESICO | < 3% (demanda no capturada) | 3–6% | > 6% |
| Trends RESICO (5 años) | Creciente/estable | Plana con ruido | Decreciente |
| Meta CPL (iteración 2 vs 1) | Sube y calidad baja | Estable | Baja y calidad alta |
| Coste por activación (lead que usa la herramienta) | Alto y creciente | Estable | Bajo y decreciente |

### 5.3 Cómo se vería una prueba mínima (si G1–G6 se cumplen)

- **Presupuesto:** $2,000–$3,000 MXN, duración 2–3 semanas.
- **Estructura:** 2–3 grupos de anuncios por intención (`declaración mensual RESICO`, `calculadora RESICO`, `cuánto pagar RESICO`).
- **Landing:** la página más alineada (`calculadora-resico` o landing de campaña de borrador).
- **Ventana:** activar la semana del 10–17 para capturar el pico.
- **Métrica de decisión:** CPC y conversiones a "borrador iniciado / calculadora usada", comparadas contra el CPL de Meta. **Sin poder estadístico**, la decisión debe ser direccional ("¿aparece demanda y a qué costo?"), no "¿es estadísticamente significativo?".

### 5.4 Qué NO justifica Search (anti-señales)

- Que Meta "vaya mal" por sí solo (puede ser creatividad/audiencia, no canal).
- Que exista un término grande si el sitio ya rankea #1–3 (canibalización).
- Cifras de volumen de herramientas SEO de terceros sin verificación en Keyword Planner/Trends.
- Estacionalidad de abril para "declaración anual RESICO" si el público principal es RESICO puro (relevado).

---

## 6. Implicaciones para el Campaign Launch Pack (Phase 5)

1. **No abrir Google Search en Phase 5.** Se documenta como "candidato condicionado" a las compuertas G1–G6. La campaña Meta sigue siendo la iteración 1.
2. **Instrumentar ya (costo $0):**
   - Verificar GSC y anotar baseline de impresiones/clics/CTR/posición para consultas con `resico`.
   - Levantar rangos de Keyword Planner (MX/es) para los siete términos y guardar captura.
   - Levantar Google Trends (MX, 5 años) y guardar captura del patrón intra-mensual y del pico de abril.
3. **Sincronizar la medición con la ventana del día 17.** La campaña Meta corre en la antesala del plazo (Oct 8–15, 2026). Documentar si el CTR/engagement de Meta sube cerca del 17: si el **dolor por fecha** mueve a la gente en Social, es señal de que en Search (intención explícita) convertirá aún mejor.
4. **Añadir etiquetas UTM consistentes** en la landing para poder atribuir después la conversión "borrador iniciado" tanto a Meta como a un futuro Search.
5. **Definir el evento de conversión único** ("borrador iniciado" / "calculadora usada") antes de cualquier test de Search; sin ese evento, comparar Meta vs Search no es posible.
6. **Lenguaje del Launch Pack:** mantener el gancho de urgencia ("vence el 17") porque es transversal a Search y Social y está alineado con la estacionalidad real.
7. **Vigilar el contexto normativo:** el Paquete Económico 2027 (límite $5M PF, posible IVA 7%) puede generar un pico de búsquedas nuevo entre oct-2026 y la aprobación. Si ocurre, reevaluar G4 (tendencia) antes de la aprobación.
8. **Presupuesto:** si se decide probar Search, reservar $2,000–$3,000 MXN *adicionales* (no restados a Meta) y ejecutarlo en una semana con pico del 17 para maximizar la señal por cada peso invertido.

---

## 7. Fuentes

**Oficiales (SAT / DOF / INEGI / Hacienda)**
- SAT — [Pagos provisionales/definitivos de personas físicas (plazo día 17 + días hábiles)](https://wwwmatnp.sat.gob.mx/declaracion/26984/declaracion-mensual-en-el-servicio-de-declaraciones-y-pagos)
- DOF — [Días adicionales según 6.º dígito del RFC](https://dof.gob.mx/nota_detalle_popup.php?codigo=733915)
- SAT — [Comunicado 21-2026: Declaración Anual 2025 de personas](https://www.gob.mx/sat/prensa/llama-sat-a-presentar-la-declaracion-anual-2025-de-personas-21-2026?idiom=es)
- SAT — [Preguntas frecuentes Declaración Anual PF 2025 (PDF)](https://www.sat.gob.mx/minisitio/DeclaracionAnual/Personas/documentos/PreguntasFrecuentes_AnualPF2025.pdf)
- SAT — [¿A quién beneficia el RESICO? (2.1M micro/pequeños)](https://www.gob.mx/sat/es/articulos/sabes-a-quien-beneficiara-el-nuevo-regimen-simplificado-de-confianza?idiom=es)
- SAT — [Regularización Fiscal 2026](https://www.sat.gob.mx/minisitio/RegularizacionFiscal/RegularizacionFiscal/index.html)
- SAT — [Mejores prácticas de transparencia en auditorías (Plan Maestro 2026)](https://www.gob.mx/sat/prensa/sat-da-a-conocer-mejores-practicas-de-transparencia-en-los-procesos-de-auditoria-01-2026)
- SAT — [Datos abiertos](https://www.sat.gob.mx/minisitio/DatosAbiertos/index.html)
- RMF 2026 — [Resolución Miscelánea Fiscal 2026 (PDF, gob.mx)](https://www.gob.mx/cms/uploads/attachment/file/1046284/Resoluci_n_Miscel_nea_Fiscal_2026.pdf)
- INEGI — [ENOE, indicadores de ocupación y empleo (PDF, dic-2025)](https://www.inegi.org.mx/contenidos/saladeprensa/boletines/2026/iooe/IOE2026_01.pdf)
- AMDA — [Régimen Simplificado de Confianza (presentación SAT 2021, PDF)](https://www.amda.mx/wp-content/uploads/apr_confianza_sep21.pdf)

**Prensa y análisis**
- El País México — [Declaración anual 2025: contribuyentes de RESICO no obligados](https://elpais.com/mexico/2025-04-10/declaracion-anual-2025-los-contribuyentes-del-resico-que-no-estan-obligados-a-presentarla.html) (10-abr-2025)
- Forbes México — [Cómo el SAT fiscaliza en 2026 sin tocar tu puerta](https://forbes.com.mx/la-auditoria-ya-empezo-como-el-sat-fiscaliza-en-2026-sin-tocar-tu-puerta/) (10-feb-2026)
- El Universal vía Yahoo Finanzas — [SAT auditará a millones de contribuyentes en 2026](https://es-us.finanzas.yahoo.com/noticias/sat-auditar%C3%A1-6-8-millones-060000285.html) (20-oct-2025)
- La Jornada — [Ocupación en México 2025 y la informalidad](https://www.jornada.com.mx/noticia/2026/01/26/economia/ocupacion-en-mexico-aumento-en-11-millones-de-personas-en-2025-pero-en-la-informalidad) (26-ene-2026)
- Holland & Knight — [Reforma Fiscal para 2026 en México](https://www.hklaw.com/en/insights/publications/2025/11/reforma-fiscal-para-2026-en-mexico) (14-nov-2025)
- PwC — [Reforma Fiscal / Paquete Económico 2027](https://www.pwc.com/mx/es/reformafiscal.html)

**Contenido especializado (uso secundario, verificar contra DOF)**
- Trade & Law College — [Puntos clave de los cambios de RESICO 2026](https://www.tradelawcollege.edu.mx/single-post/puntos-clave-de-los-cambios-de-resico-2026)
- Buen Contador — [RMF 2026: cambios](https://buencontador.com/cambios-2026-resolucion-miscelanea-fiscal-rmf/) y [RESICO 2027: claves del Paquete Económico](https://buencontador.com/resico-2027-claves-de-los-cambios-propuestos/)
- Cerda Romero — [Obligaciones formales del RESICO exigibles desde enero 2026](https://cerdaromero.com/index.php/noticias/item/815-obligaciones-formales-del-resico-exigibles-a-partir-de-enero-de-2026)
- Facturama — [Declaración RESICO, quiénes y cuándo](https://facturama.mx/blog/declaracion-resico-presentar-sat/) (plazo por 6.º dígito del RFC)

**Herramientas y metodología de medición**
- Google Search Console — [Impresiones, posición y clics](https://support.google.com/webmasters/answer/7042828?hl=es) y [Informe Rendimiento (16 meses de historial)](https://support.google.com/webmasters/answer/17011259?hl=es)
- Google Ads — [Planificador de palabras clave](https://support.google.com/google-ads/answer/7337243?hl=es-419) y [página de producto](https://business.google.com/es-all/ad-tools/keyword-planner/)
- Google Trends — [FAQ sobre datos normalizados 0–100](https://support.google.com/trends/answer/4365533?hl=en)
- StatCounter — [Cuota de motores de búsqueda en México](https://gs.statcounter.com/search-engine-market-share/all/mexico)
- WordStream — [Facebook Ads Benchmarks 2025 (CPL ~USD 27.66, EE.UU.)](https://www.wordstream.com/blog/facebook-ads-benchmarks-2025) — referencia internacional, **no representa CPL de México**.
