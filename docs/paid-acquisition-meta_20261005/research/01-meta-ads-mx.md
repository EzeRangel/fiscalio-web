# Meta Ads en México: formatos, placements, tracking, optimización y presupuesto pequeño

**Investigación F4.1 — Paid Acquisition (Meta Ads MX 2025–2026)**
**Fecha de elaboración:** octubre de 2026
**Contexto:** primera campaña pagada de Fiscalio en Meta Ads (Facebook + Instagram). Presupuesto total ~$1,000 MXN, ~$100–150 MXN/día durante ~1 semana, audiencia en México. Objetivo: **aprender si Meta sirve para este público y por qué**, no recuperar el dinero.

---

## 1. Resumen ejecutivo

- Meta ya no es "Facebook vs. Instagram": es una subasta única con **múltiples placements**; el formato vertical 9:16 (Reels, Stories) es hoy el de mayor inventario y el feed mantiene mayor intención. Reels concentró **más de la mitad de los anuncios de Instagram en 2025** ([CNBC / Sensor Tower](http://cnbc.com/2026/01/20/most-of-instagrams-ads-ran-on-reels-in-2025-data-shows.html)).
- Con **$1,000 MXN totales** (~USD $55–56, según tipo de cambio) es **matemáticamente inviable salir de la fase de aprendizaje** de Meta, que exige ~50 eventos de optimización por conjunto de anuncios por semana ([Meta Business Help Center](https://www.facebook.com/business/help/112167992830700)). La campaña debe tratarse como **prueba de mensaje y creatividad**, no de optimización algorítmica.
- La decisión estructural más importante para un presupuesto pequeño es **consolidar**: 1 campaña, 1 conjunto de anuncios, varios anuncios (creatividades), Advantage+ placements y Advantage+ campaign budget (si hay >1 conjunto) ([Meta, best practices de delivery](https://www.facebook.com/business/help/950694752295474)).
- El tracking mínimo viable es **Pixel + Conversions API** con `event_id` para deduplicar; la configuración manual de Aggregated Event Measurement (AEM) de 8 eventos **ya no es necesaria** desde mediados de 2025 ([Meta Business Help Center / AEM](https://www.facebook.com/business/help/721422165168355)).
- México es un mercado de **CPM bajo** frente a EE. UU.: estimaciones públicas de ~USD $1.50–$5.50 CPM ([AdAmigo](https://www.adamigo.ai/blog/meta-ads-cpm-cpc-benchmarks-by-country-2026); [AdLibrary MX](https://adlibrary.com/posts/meta-ads-mexico-playbook-2026)), lo que da un alcance considerable incluso con $1,000 MXN.
- **Políticas:** la categoría especial "Financial products and services" es obligatoria solo para anunciantes con base en EE. UU. o audiencias en EE. UU. ([Meta](https://business.facebook.com/business/help/510724041294968)). Aun así, anuncios sobre finanzas/impuestos quedan sujetos a las políticas de **servicios financieros y de prácticas engañosas** ([Transparency Center](https://transparency.meta.com/en-us/policies/ad-standards/restricted-goods-services/financial-services)). Fiscalio (software fiscal) no es un producto de crédito/seguro/inversión, pero debe evitar promesas absolutas.

---

## 2. Metodología y advertencia sobre benchmarks

- Se priorizaron **fuentes primarias de Meta** (Ads Guide, Business Help Center, Transparency Center, Meta for Developers) y fuentes de industria reputadas.
- **Las cifras de CPM/CPC/CPL son rangos variables.** Dependen de objetivo, placement, temporada, competencia, calidad del creativo y país. La propia industria advierte que el CPM de Meta puede variar 8–38% interanual y que los promedios entre industrias esconden spreads de 24× ([Adside / WordStream](https://www.adside.ai/blog/ad-benchmarks-2026); [AdAdvisor](https://adadvisor.ai/blog/meta-ads-benchmarks-by-industry)).
- Cuando no existe una cifra pública verificable para México en una categoría, este informe lo señala explícitamente como **"sin fuente pública"** en lugar de estimar.
- Las referencias a EE. UU. se incluyen solo como contexto de magnitud; **no son trasladables 1:1 a México**.

---

## 3. Formatos y placements vigentes (México 2025–2026)

### 3.1 Arquitectura de placements

Meta agrupa los placements en: **Feed** (Facebook, Instagram, Threads, perfil, Marketplace, right column), **Stories/Status/Reels** (Instagram/Facebook/Messenger Stories, Instagram/Facebook Reels, WhatsApp Status) e **in-stream ads for reels** ([Meta, Aspect Ratios Supported by Placements](https://www.facebook.com/business/help/682655495435254)).

Cambios recientes relevantes:

- **Enero 2026:** Instagram Explore deja de estar disponible como placement en Ads Manager; los anuncios dirigidos a IG Reels ahora aparecen en la experiencia previa de Explore. Se puede seguir seleccionando **"Instagram Explore home"** ([Meta, Aspect Ratios](https://www.facebook.com/business/help/682655495435254)).
- **Marzo 2026:** el placement de Facebook Feed incluirá el **Facebook Friends tab** ([Meta, Aspect Ratios](https://www.facebook.com/business/help/682655495435254)).
- **Advantage+ placements:** Meta recomienda activarlo, o bien seleccionar **al menos 6 placements** manualmente para maximizar alcance ([Meta, best practices de delivery](https://www.facebook.com/business/help/950694752295474)).

### 3.2 Especificaciones y dimensiones

| Placement | Ratio recomendado | Resolución recomendada | Duración / notas |
| --- | --- | --- | --- |
| Facebook Feed (imagen/video) | **4:5** (también 1:1) | 1440×1800 (4:5) · 1080×1080 (1:1) | Video hasta 241 min; en desktop se muestra 1:1 con barras negras |
| Instagram Feed (imagen/video) | 4:5 / 1:1 | 1440×1800 | Video hasta 60 min |
| Instagram / Facebook Stories | **9:16** | 1440×2560 | Video hasta 60 min; óptimo <10 s |
| Instagram / Facebook Reels | **9:16** | 1440×2560 | Máx. 15 min en IG Reels; óptimo 15–30 s |
| Messenger Stories | 9:16 | — | — |
| WhatsApp Status | 9:16 | — | — |
| In-stream (reels) | 16:9 / 1:1 | — | — |
| Facebook right column | 1:1 | 1080×1080 | — |

Fuentes: aspect ratios y duraciones por placement ([Meta](https://www.facebook.com/business/help/682655495435254)); resolución recomendada 1440×2560 / 1440×1800 verificada contra la documentación de Meta ([SolidLabs](https://www.solidlabs.com/ad-specs/meta); [Inrō](https://www.inro.social/tools/instagram-reels-safe-zone-checker)). El 1080×1920 es lo **aceptado**, no lo recomendado; Meta permite ~1% de tolerancia de aspect ratio ([SolidLabs](https://www.solidlabs.com/ad-specs/meta)).

Límites y formatos de archivo:

- Imágenes: JPG/PNG, máximo **30 MB**. Video: MP4/MOV, máximo **4 GB**; H.264, frame rate fijo, audio AAC estéreo ≥128 kbps ([SolidLabs](https://www.solidlabs.com/ad-specs/meta); [Moda](https://moda.app/resources/sizes/meta-ad-specs)).
- Ancho mínimo **500 px** para anuncios Reels de ≥30 s; 250 px en la mayoría de placements; 120×120 en Facebook Feed ([SolidLabs](https://www.solidlabs.com/ad-specs/meta)).

### 3.3 Duración recomendada

- Feed: videos **bajo 15 s** tienden a rendir mejor. Stories: **bajo 10 s**. Rango general efectivo: **6–15 s** ([Meta, best practices Instagram video ads](https://en-gb.facebook.com/business/help/188534925073536)).
- Reels/Stories: el "sweet spot" reportado está en **15–30 s** ([SuperScale](https://superscale.ai/learn/meta-ad-sizes)).
- Gancho en los **primeros 1.5–3 s**; mostrar marca y mensaje clave dentro de los primeros 3 s mejora recuerdo ([Meta](https://en-gb.facebook.com/business/help/188534925073536)).
- El 98% de los usuarios sostiene el teléfono en vertical; usar 9:16 o 1:1 ([Meta](https://en-gb.facebook.com/business/help/188534925073536)).

### 3.4 Safe zones (áreas seguras)

Meta publica un margen para anuncios **9:16**: dejar libre el **14% superior (~269 px)**, el **35% inferior (~672 px)** y el **6% en cada lateral (~65 px)**. El margen inferior sube a **40%** si el anuncio incluye un disclaimer ([Inrō](https://www.inro.social/tools/instagram-reels-safe-zone-checker); [AdSUploader](https://adsuploader.com/blog/meta-ads-safe-zones); [HeySage](https://www.heysage.com.au/meta-ads-safe-zone-checker)).

- El mismo criterio 14/35/6 aplica a Instagram Stories, Instagram Reels, Facebook Reels y video 9:16 en Feed ([HeySage](https://www.heysage.com.au/meta-ads-safe-zone-checker); [AdSUploader](https://adsuploader.com/blog/meta-ads-safe-zones)).
- **Para 1:1 y 4:5, Meta no publica porcentajes** (solo pide mantener libres los bordes inferiores y laterales) ([SolidLabs](https://www.solidlabs.com/ad-specs/meta); [HeySage](https://www.heysage.com.au/meta-ads-safe-zone-checker)).
- En 1080×1920, el área segura útil queda en ~950×979 px (el ~51% central) ([Get-Ryze](https://www.get-ryze.ai/blog/facebook-ad-sizes-complete-specs-guide-for-2026)).

Implicación práctica: diseñar a **14/35/6** cubre todos los placements verticales. No colocar logo/CTA en el top 269 px ni texto clave en los 672 px inferiores de un 9:16.

### 3.5 Qué domina hoy y qué recomienda Meta

- **Reels es el placement dominante en inventario de Instagram:** >50% de los anuncios de IG corrieron en Reels en 2025, contra 35% en 2024 ([CNBC / Sensor Tower](http://cnbc.com/2026/01/20/most-of-instagrams-ads-ran-on-reels-in-2025-data-shows.html)). Otra medición (Tinuiti, Q1 2026) reporta que Reels pasó de 19% a 33% de las impresiones de IG, con Feed bajando a 26% ([SuperScale, citando a Tinuiti](https://superscale.ai/learn/meta-ad-sizes)).
- Meta recomienda: **Advantage+ placements**, personalización de activos por placement y video 9:16 con audio (el video 9:16 con audio reporta ~12% más conversiones por peso/dólar que formatos recortados) ([Meta, best practices de delivery](https://www.facebook.com/business/help/950694752295474); [Sovran](https://sovran.ai/benchmarks/meta-ads-cpm-by-industry)).
- En México, >90% del acceso a redes es móvil, por lo que el formato horizontal/desktop bajo rendimiento estructural ([AdLibrary MX](https://adlibrary.com/posts/meta-ads-mexico-playbook-2026)).

---

## 4. Reels vs. Stories vs. Feed con presupuesto pequeño

No existe un ganador único: cada uno cumple una función de embudo distinta. La evidencia apunta a un trade-off **costo vs. intención**.

| Dimensión | Feed | Stories | Reels |
| --- | --- | --- | --- |
| Costo relativo | Mayor CPM/CPC | Menor CPM, inmersivo | Menor CPM, alto alcance |
| Intención | Mayor (usuario en modo lectura/acción) | Media-baja | Baja-media (modo descubrimiento) |
| Naturaleza | Explora, compara, hace clic | Rápido, swipe | Nativo, entretenimiento |
| Formato | 4:5 imagen/video | 9:16 | 9:16 |
| Mejor uso | Retargeting y fondo de embudo | CTA directo, cobertura barata | Prueba de creatividad / alcance |

Evidencia de costos por placement (mercado EE. UU., usar solo como dirección):

| Placement | CPM aprox. | CPC aprox. |
| --- | --- | --- |
| Facebook Feed | $7.47 | $1.06 |
| Facebook Reels | $6.00–$8.00 | $0.80–$1.00 |
| Instagram Feed | $7.68 | $3.35 |
| Instagram Stories | $6.25 | $1.83 |
| Instagram Reels | $5.50–$7.50 | $0.70–$1.10 |

Fuente: [Sovran](https://sovran.ai/benchmarks/meta-ads-cpm-by-industry) (recopila WebFX / AdAmigo); [AdAmigo](https://www.adamigo.ai/blog/meta-ads-benchmarks-2026-by-objective-and-placement). **Son rangos de EE. UU., no de México.**

Lecciones prácticas:

- Un estudio clásico encontró que **Feed fue más barato por clic y con mayor tasa de clic a enlace (7.1%) que Reels/Stories (1.2%)**, lo que respalda que Feed convierte mejor la intención ([TechCrunch / GLAMLAB](https://techcrunch.com/2022/12/15/which-instagram-ad-placement-is-more-cost-effective-reels-feed-posts-or-stories)). Es evidencia antigua (2022) pero consistente con el patrón.
- Para un producto de consideración media-alta como Fiscalio ($419 + IVA), **Feed tiende a capturar mejor la intención**; Reels/Stories sirven para cobertura barata y prueba de mensaje.
- Recomendación para presupuesto pequeño: **no separar por placement**. Usar Advantage+ placements con los mismos activos en 9:16 y 4:5, y leer los desgloses por placement *después*, no forzar la segmentación antes.

---

## 5. Tracking: Pixel, Conversions API, verificación de dominio, AEM e impacto de iOS/ATT

### 5.1 Qué es indispensable vs. opcional

| Elemento | ¿Indispensable con $1,000 MXN? | Por qué |
| --- | --- | --- |
| **Meta Pixel** (base en la landing y en la página de "gracias"/confirmación) | **Sí** | Sin evento no hay atribución ni optimización ([Meta for Developers](https://developers.facebook.com/documentation/ads-commerce/conversions-api)) |
| **Conversions API (CAPI)** server-side | **Muy recomendable** | Recupera señales que el navegador pierde y mejora la coincidencia ([Meta CAPI best practices](https://developers.facebook.com/documentation/ads-commerce/conversions-api/best-practices)) |
| **Verificación de dominio** | Recomendable | Ya **no** es requisito para configurar eventos AEM, pero se requiere para otras funciones (p. ej., propiedad de enlaces) ([Meta AEM](https://www.facebook.com/business/help/721422165168355)) |
| **Aggregated Event Measurement (AEM)** | Opcional / automático | Desde 2025 Meta lo procesa automáticamente; ya no hay que priorizar 8 eventos ([Meta AEM](https://www.facebook.com/business/help/721422165168355)) |
| **Event Match Quality (EMQ)** | Recomendable vigilarlo | Score /10; enviar email, teléfono, nombre e IP mejora el match ([Meta Dataset Quality API](https://developers.facebook.com/documentation/ads-commerce/conversions-api/dataset-quality-api)) |
| **A/B testing de eventos o value sets** | No con este presupuesto | Requiere volumen |

### 5.2 Pixel + Conversions API (CAPI)

- El Pixel es la herramienta base para medir eventos en el sitio; CAPI permite enviar los mismos eventos desde el servidor ([Meta for Developers](https://developers.facebook.com/documentation/ads-commerce/conversions-api)).
- **Deduplicación obligatoria:** cuando Pixel y CAPI envían el mismo evento, usar **el mismo `event_name`** y **el mismo `event_id`** (o combinación `external_id` + `fbp`). Si no, Meta cuenta dos conversiones ([Meta CAPI best practices](https://developers.facebook.com/documentation/ads-commerce/conversions-api/best-practices)).
- Parámetros de match de alta calidad: email (`em`), IP (`client_ip_address`), nombre (`fn`, `ln`), teléfono (`ph`). El EMQ es un score sobre 10 y **solo aplica a eventos web** ([Meta CAPI best practices](https://developers.facebook.com/documentation/ads-commerce/conversions-api/best-practices); [Meta Dataset Quality API](https://developers.facebook.com/documentation/ads-commerce/conversions-api/dataset-quality-api)).
- Implementación típica sin backend complejo: **Pixel en el navegador + CAPI vía Google Tag Manager server-side o una integración de terceros**. Para Fiscalio, si no hay tiempo de montar CAPI, priorizar el Pixel + eventos `Lead`/`Schedule` en la landing y en Cal.com.

### 5.3 Aggregated Event Measurement y el estado real (2025–2026)

- AEM mide eventos web/app de usuarios iOS 14.5+ que no autorizaron seguimiento, usando modelado estadístico ([Meta AEM](https://www.facebook.com/business/help/721422165168355)).
- **Cambio importante:** Meta eliminó la necesidad de priorizar 8 eventos por dominio, eliminó la pestaña de AEM en Events Manager y ya no requiere verificación de dominio para configurar eventos ([Meta AEM](https://www.facebook.com/business/help/721422165168355); [Conversios, actualización jun-2025](https://www.conversios.io/blog/meta-aggregated-event-measurement); [Jon Loomer](https://www.jonloomer.com/qvt/the-changes-to-aem-and-conversion-campaigns)).
- **Advertencia:** numerosas guías de terceros siguen describiendo el proceso antiguo de 8 eventos y verificación de dominio. Ignorar esas versiones desactualizadas.

### 5.4 Impacto de iOS/ATT

- Apple obliga a pedir permiso (ATT) desde iOS 14.5; quienes no autorizan quedan fuera del tracking directo y se compensan con modelado/AEM ([Meta AEM](https://www.facebook.com/business/help/721422165168355)).
- Tasas de opt-in de ATT en 2025–2026: promedio global ~35% (Q2 2025) subiendo a ~38% (Q1 2026) ([Adjust](https://www.adjust.com/blog/att-opt-in-rates-2025); [PPC Land](https://ppc.land/adjusts-2026-mobile-app-report-finance-sessions-up-21-gaming-cpi-jumps-30)). **LATAM reporta opt-in ~49% en Q1 2026**, por encima del promedio global ([Adjust, citado por PPC Land](https://ppc.land/latam-mobile-apps-finance-sessions-surge-62-installs-grow-13-in-2025); [BYYD](https://www.byyd.me/en/blog/2026/09/latam-mobile-market-in-2026-growth-opportunities-user-behavior-and-app-marketing-trends)).
- Una fuente de industria afirma que el opt-out de iOS en México ronda 65–70% y que CAPI recupera 30–50% de esas señales ([AdLibrary MX](https://adlibrary.com/posts/meta-ads-mexico-playbook-2026)). **Esta cifra no proviene de Meta ni de Apple y contradice el dato LATAM de ~49% de opt-in de Adjust**; trátese como estimación de un proveedor privado, no como benchmark oficial. Lo robusto: **hay pérdida de señal y CAPI es la mitigación**.

**Conclusión de tracking para Fiscalio:** Pixel + CAPI (o Pixel + eventos server-side vía GTM) con deduplicación, y medir el funnel completo: clic → landing → CTA → reserva en Cal.com. Sin visibilidad de la reserva, la optimización se vuelve ciega.

---

## 6. Optimización con presupuesto pequeño

### 6.1 Objetivos (ODAX)

Meta consolidó 11 objetivos en **6 (ODAX): Awareness, Traffic, Engagement, Leads, App promotion y Sales**. El objetivo no se puede cambiar tras crear la campaña ([Meta Ads Guide](https://www.facebook.com/business/ads-guide/update); [MBADV, ODAX 2026](https://www.mbadv.agency/meta-ads/meta-ads-campaign-objectives)).

| Objetivo | Optimiza por | Uso típico | Riesgo con presupuesto bajo |
| --- | --- | --- | --- |
| Awareness | Alcance / recuerdo | Marca, cobertura | Barato pero no genera leads |
| Traffic | Clics / vistas de landing | Llevar tráfico | Atrae clics de baja intención |
| Engagement | Interacciones / video | Prueba social | Audiencia poco compradora |
| **Leads** | Formularios, llamadas, mensajes | Captura de contacto | Necesita eventos "lead" |
| App promotion | Instalaciones | Apps | No aplica a Fiscalio |
| **Sales** | Compras / add-to-cart / checkout | Transacciones | Requiere ~50 compras/semana |

La confusión más costosa es **Leads vs. Sales**: "Leads" optimiza por una acción de contacto, no por la transacción; elegir Sales cuando hay poco volumen de compra degrada el aprendizaje ([MBADV](https://www.mbadv.agency/meta-ads/meta-ads-campaign-objectives); [Influee](https://influee.co/au/blog/meta-campaign-objectives)).

**Recomendación para el experimento de Fiscalio:** usar **Leads** (o Sales con evento de embudo superior como "landing page view"/"add to cart") porque la venta real ($419) es demasiado infrecuente para el presupuesto. Meta documenta que un conjunto en Learning Limited puede mejorar **eligiendo un evento de optimización más frecuente** ([Meta, learning limited](https://www.facebook.com/business/help/269269737396981)).

### 6.2 Advantage+ audience

- Meta recomienda **Advantage+ detailed targeting** (tratar la segmentación detallada como sugerencia) para que el sistema alcance grupos más amplios ([Meta, best practices de delivery](https://www.facebook.com/business/help/950694752295474)).
- En la práctica, prospectar en México con audiencias amplias (país, edad, sin apilar intereses) funciona mejor que stacks de intereses para la mayoría de categorías de consumo ([AdLibrary MX](https://adlibrary.com/posts/meta-ads-mexico-playbook-2026)).
- El sistema de IA de Meta prioriza audiencias amplias combinadas con "pistas" en el creativo ([Meta Advantage+](https://www.facebook.com/business/news/meta-advantage-explained-in-two-minutes); [AdAmigo](https://www.adamigo.ai/blog/meta-ads-cpm-cpc-benchmarks-by-country-2026)).

### 6.3 Advantage+ campaign budget

- Adecuado para campañas con **al menos 2 conjuntos de anuncios**; Meta distribuye un presupuesto único según oportunidades en tiempo real y hay que **analizar resultados a nivel campaña**, no conjunto ([Meta, Advantage+ campaign budget](https://www.facebook.com/business/help/153514848493595)).
- Mejores prácticas: **no pausar/reactivar conjuntos**, usar límites de gasto con moderación, hacer cambios en bloque, y recordar que el tamaño de audiencia afecta la distribución ([Meta, best practices Advantage+ campaign budget](https://www.facebook.com/business/help/2177212182495139)).
- Para $1,000 MXN con un solo conjunto, Advantage+ campaign budget **no aplica** (requiere 2+). Se puede usar igual para consolidar cuando haya más de un conjunto.

### 6.4 Fase de aprendizaje, umbral de 50 y "Learning Limited"

- Meta indica que un conjunto sale de aprendizaje tras **~50 resultados/eventos de optimización en la semana posterior a la última edición significativa** ([Meta, about the learning phase](https://www.facebook.com/business/help/112167992830700); [Meta, best practices de delivery](https://www.facebook.com/business/help/950694752295474)).
- **Learning Limited** ocurre cuando el conjunto **no va a recibir ~50 eventos de optimización** en esa semana. No es un castigo: es señal de que el presupuesto no se está gastando de forma efectiva ([Meta, about learning limited](https://www.facebook.com/business/help/269269737396981)).
- Causas típicas: audiencia pequeña, presupuesto bajo, puja/cost control bajos, alto solapamiento de subasta, **evento de optimización infrecuente** o demasiados anuncios simultáneos ([Meta, about learning limited](https://www.facebook.com/business/help/269269737396981)).
- Para Shops ads el umbral es distinto: mínimo 17 compras por web + 5 por Meta en 7 días ([Meta, about learning limited](https://www.facebook.com/business/help/269269737396981)).
- Cálculo del presupuesto mínimo: **presupuesto semanal ≈ CPA objetivo × 50**; diario ≈ (CPA × 50) ÷ 7 ([AdAdvisor](https://adadvisor.ai/blog/meta-ads-budget-by-industry); [MBADV](https://www.mbadv.agency/meta-ads/meta-ads-cost-budgeting-and-bidding)).

Con $1,000 MXN (~USD $55) es imposible alcanzar 50 eventos semanales de compra/lead. **La campaña entra a Learning Limited y eso es esperado.**

### 6.5 Estrategias de puja / cost caps

| Estrategia | Qué hace | Cuándo usarla |
| --- | --- | --- |
| **Highest volume (lowest cost)** | Gasta todo el presupuesto buscando el mayor volumen al menor costo | **Por defecto en fase de prueba/aprendizaje** |
| **Cost per result goal** | Fija un CPA promedio objetivo; requiere programar ≥3 días completos si hay iOS 14.5+ | Cuando ya hay CPA estable y restricción de costo |
| **ROAS goal** | Fija un retorno objetivo | Solo si hay value optimization elegible y volumen |
| **Bid cap** | Fija la puja máxima en subasta | Solo con conocimiento experto; una puja baja limita la entrega ("Bid limited") |

Fuentes: [Meta, cost and bid controls](https://www.facebook.com/business/help/491846184627504); [Meta, best practices bid cap](https://www.facebook.com/business/help/586282251886816); [Meta, about bid strategies](https://www.facebook.com/business/help/1619591734742116).

Para el experimento: **Highest volume, sin cost cap ni bid cap.** Los controles de costo con pocos datos suelen limitar la entrega y agravar Learning Limited.

---

## 7. Presupuesto en MXN: mínimos, diario vs. total, cuántos conjuntos/anuncios

### 7.1 Mínimos técnicos

- El mínimo técnico de Meta es **muy bajo** (históricamente ~USD $1/día por conjunto; ~USD $5/día para campañas optimizadas por clics/conversiones) ([Stackmatix](https://www.stackmatix.com/); [Coinis](https://coinis.com/how-to/minimum-budget-for-facebook-ads); [Rableb](https://rableb.com/guias/presupuesto-minimo-para-meta-ads)).
- Meta no publica una tabla de mínimos fijos por moneda en su documentación de Ads Manager; el endpoint **Minimum Budget** devuelve el mínimo según la **moneda de la cuenta**, el tipo de acción y la puja ([Meta for Developers, Minimum Budget](https://developers.facebook.com/docs/marketing-api/reference/minimum-budget)).
- **Monto exacto mínimo en MXN: sin fuente pública.** El mínimo en pesos es el valor convertido por Meta según la moneda de la cuenta; en la práctica el límite relevante no es el técnico sino el de la fase de aprendizaje.

### 7.2 Presupuesto diario vs. total

- **Presupuesto diario:** es un **promedio**, no un tope duro. Meta documenta que en un día puede gastar **hasta 25% más** del presupuesto diario; fuentes de industria reportan sobrepasos mayores (hasta 175%) con un tope acumulado en ventana móvil de 7 días ([Meta for Developers, Budgets](https://developers.facebook.com/docs/marketing-api/bidding/overview/budgets); [MBADV](https://www.mbadv.agency/meta-ads/meta-ads-cost-budgeting-and-bidding)).
- **Presupuesto total (lifetime):** fija el gasto para toda la campaña; Meta lo reparte según la fecha de fin ([Meta for Developers, Budgets](https://developers.facebook.com/docs/marketing-api/bidding/overview/budgets)).
- También existen **límites de gasto diario de la cuenta** que Meta ajusta según historial de pago; pueden restringir la entrega en cuentas nuevas ([Meta, límites de gasto diario](https://es-la.facebook.com/business/help/563129151097553)).

Para una prueba de ~1 semana con $1,000 MXN: **presupuesto diario** de ~$140 MXN da flexibilidad y permite cortar antes si el mensaje no engancha. Alternativa: **lifetime $1,000 MXN** con fecha de fin de 7–8 días.

### 7.3 Cuántos conjuntos y anuncios conviene con $1,000 MXN

La regla derivada del aprendizaje: cada conjunto necesita ~50 eventos/semana. Dividir $1,000 MXN entre varios conjuntos garantiza que **todos** entren a Learning Limited ([Meta](https://www.facebook.com/business/help/269269737396981); [AdsX](https://www.adsx.com/blog/meta-ads-learning-phase-exit-tactics)).

| Estructura | Con $1,000 MXN | Veredicto |
| --- | --- | --- |
| 4 conjuntos × $250 MXN | ~$14 MXN/día c/u | ❌ Fragmentación total, Learning Limited asegurado |
| 2 conjuntos × $500 MXN | ~$28 MXN/día c/u | ⚠️ Riesgoso |
| **1 conjunto × $1,000 MXN** | ~$140 MXN/día | ✅ **Consolidación recomendada** |
| 1 conjunto + Advantage+ placements + 3–6 anuncios | ~$140 MXN/día | ✅ **Óptimo para prueba de creatividad** |

- **Ventaja de consolidar:** el sistema junta señales, estabiliza antes y gasta menos tiempo/dinero en aprendizaje ([Meta, best practices de delivery](https://www.facebook.com/business/help/950694752295474)).
- **Anuncios:** no hay un número oficial, pero la industria reporta 4+ creatividades por conjunto asociadas a CPL ~31% menor que con 1–2 ([MCP Ads](https://mcp-ads.com/blog/meta-ads-benchmarks-2025)). Con 1 conjunto, usar **3–6 anuncios** (variaciones de gancho/formato) es razonable. No duplicar conjuntos para "testear": eso reinicia el aprendizaje de ambos ([AdAdvisor](https://adadvisor.ai/docs/learn/learning-phase)).

### 7.4 Qué NO hacer

- ❌ **No dividir** el presupuesto en muchos conjuntos/audiencias.
- ❌ **No usar cost caps ni bid caps** durante la prueba (limitan la entrega) ([Meta, bid cap](https://www.facebook.com/business/help/586282251886816)).
- ❌ **No editar** presupuesto/audiencia/creativo con frecuencia: cada edición significativa reinicia el aprendizaje ([Meta, about the learning phase](https://www.facebook.com/business/help/112167992830700); [AdAdvisor](https://adadvisor.ai/docs/learn/learning-phase)).
- ❌ **No cambiar el objetivo** a mitad de camino: el objetivo se fija al crear la campaña ([Meta Ads Guide](https://www.facebook.com/business/ads-guide/update)).
- ❌ **No usar Traffic** si el objetivo real es un lead; optimiza clics, no contactos ([MCP Ads](https://mcp-ads.com/blog/meta-ads-benchmarks-2025)).
- ❌ **No pausar/reactivar** conjuntos con Advantage+ campaign budget ([Meta](https://www.facebook.com/business/help/2177212182495139)).
- ❌ **No esperar salir de Learning Limited** con este presupuesto; úsalo como señal, no como fracaso.

---

## 8. Benchmarks México 2025–2026 (rangos variables)

### 8.1 Costos por país

| País | CPM prom. (USD) | CPC prom. (USD) | Rango CPM |
| --- | --- | --- | --- |
| **México** | **$4.50** | **$0.45** | **$3.70–$5.50** |
| Colombia | $4.00 | $0.42 | $3.30–$5.00 |
| Brasil | $4.20 | $0.35 | $3.50–$5.00 |
| Argentina | $3.80 | $0.38 | $3.00–$4.80 |
| Chile | $5.20 | $0.60 | $4.30–$6.50 |
| Perú | $3.70 | $0.36 | $3.00–$4.60 |
| EE. UU. (referencia) | $23.00 | $2.69 | $18.00–$28.00 |

Fuente: [AdAmigo, CPM/CPC por país 2026](https://www.adamigo.ai/blog/meta-ads-cpm-cpc-benchmarks-by-country-2026) (proyecciones 2026 basadas en datos de finales de 2025; **variables**).

Otras estimaciones para México: **CPM USD $1.50–$5.00**, con Reels de alcance nacional amplio por debajo de $2.00 y Feed más caro; verticales B2C/fintech hacia $4–5 en picos como El Buen Fin ([AdLibrary MX](https://adlibrary.com/posts/meta-ads-mexico-playbook-2026)). Una guía mexicana reporta **CPC de $2–8 MXN** en ecommerce ([Shortway](https://shortway.com.mx/publicidad-para/ecommerce)).

**Conclusión:** para una cuenta en México, $1,000 MXN (~USD $55–56) puede comprar del orden de **~11,000 a ~37,000 impresiones** según el CPM (de $1.50 a $5.00 USD) y el tipo de cambio. Es suficiente para leer señales de creatividad, no para estabilizar una subasta.

### 8.2 Benchmarks por objetivo (contexto global/EE. UU.)

| Objetivo | CTR enlace | CPC | CPM | CPA/CPL |
| --- | --- | --- | --- | --- |
| Leads | 2.59% | $1.92 | $30–$45 | CPL $27.66 |
| Traffic | 1.71% | $0.70 | $15–$25 | — |
| Sales | 1.38% | $1.38 | $20–$30 | CPA $30.00 |
| Engagement | 1.42% | $1.06–$1.72 | $15–$25 | — |
| Awareness | 0.94% | — | $10–$15 | — |

Fuente: [AdAmigo](https://www.adamigo.ai/blog/meta-ads-benchmarks-2026-by-objective-and-placement), consolidando WordStream/LocaliQ 2025. CPL mediano de leads a nivel industria (EE. UU.): **$27.66**, con spread de $3.16 (restaurantes) a $76.71 (dental) ([WordStream/LocaliQ vía AdAdvisor](https://adadvisor.ai/blog/meta-ads-benchmarks-by-industry)).

### 8.3 Verticales relevantes para Fiscalio

- **Servicios financieros (EE. UU.):** CPC $2.00–$5.00, CPM $12–$28, CPL $40–$120 ([Adovate](https://www.adovateagency.com/blog/how-much-do-meta-ads-cost-in-2026)); otro proveedor reporta CPL $40–$62 y CPC más alto de todas las industrias ($3.77) ([MCP Ads](https://mcp-ads.com/blog/meta-ads-benchmarks-2025); [AdAmigo](https://www.adamigo.ai/blog/meta-ads-cpm-cpc-benchmarks-by-country-2026)).
- **B2B/SaaS (EE. UU.):** CPL $42.80–$78.50 según MRR; servicios profesionales $67.50 ([Get-Ryze](https://www.get-ryze.ai/blog/meta-ads-cost-benchmarks-by-industry-2026)).
- **No existe benchmark público específico de México para software fiscal/contable.** Escribir "sin fuente pública" para CPL/CPA de este vertical en México.

### 8.4 Contexto de mercado digital en México

- La inversión publicitaria en México alcanzó **$140,306 millones de pesos en 2024** (+4.0%), con **58.2% en infraestructura digital** ([IAB México / AVE / CiM, Estudio Valor Total Media](https://cdn.iabmexico.com.mx/iab-assets/estudios/Estudio-Valor-Total-Media-2025-vp.pdf); [Portada](https://mercadotecnia.portada-online.com/2025/11/el-despertar-estrategico-de-la-publicidad-mexicana-una-valoracion-profunda-del-estudio-valor-total-media)).
- **Social Ads representó ~26% de la inversión online en 2025**, el mayor formato; Facebook e Instagram concentran la mayor parte de la inversión social ([IAB México](https://www.iabmexico.com/) vía [Marketing4eCommerce México](https://marketing4ecommerce.mx/para-2025-57-de-la-inversion-publicitaria-en-mexico-sera-online-iab)).
- Se proyecta que la inversión en redes sociales en México crezca ~25.7% en 2025 ([IPG Mediabrands vía Adlatina](https://www.adlatina.com/negocios/se-espera-que-los-ingresos-publicitarios-en-mxico-crezcan-un-105-por-ciento-en-2025)).

---

## 9. Políticas de Meta para anuncios de servicios financieros/fiscales en México

### 9.1 Categoría especial "Financial products and services"

- Meta introdujo la categoría especial **"Financial products and services"** (reemplaza a "Credit") en octubre de 2024. **Desde el 21 de enero de 2025 es obligatoria para anunciantes con base en EE. UU. o que muestran anuncios a audiencias en EE. UU.** ([Meta Business Help Center](https://business.facebook.com/business/help/510724041294968); [Meta for Developers, Special Ad Categories](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/special-ad-category)).
- Ejemplos de la categoría: seguros, cuentas bancarias, servicios de inversión y **servicios de pago** ([Meta](https://business.facebook.com/business/help/510724041294968)).
- **Para una campaña dirigida a México, esta categoría especial no es obligatoria** (la regla aplica a EE. UU./audiencias en EE. UU.). Todas las creaciones de campaña deben especificar igualmente el campo `special_ad_categories` (con `NONE` si no aplica) ([Meta for Developers](https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/special-ad-category)).

### 9.2 Política de productos/servicios financieros

- Anuncios que promueven **tarjetas de crédito, préstamos o seguros** deben dirigirse a **personas de 18 años o más** ([Transparency Center](https://transparency.meta.com/en-us/policies/ad-standards/restricted-goods-services/financial-services)).
- Meta puede exigir **verificación de identidad del negocio** y demostrar autorización/licencia cuando la regulación local lo requiera; productos que pueden requerir licencia: seguros, hipotecas, préstamos, productos de inversión, tarjetas de crédito ([Transparency Center](https://transparency.meta.com/en-us/policies/ad-standards/restricted-goods-services/financial-services)).
- Está **prohibido** solicitar directamente PII o información financiera sensible en el anuncio/página de destino ([Transparency Center](https://transparency.meta.com/policies/ad-standards/deceptive-content/prohibited-financial-products-and-services/)).
- **Productos prohibidos:** préstamos de día de pago, anticipos de nómina, préstamos a ≤90 días, opciones binarias, ICOs, CFD y contenidos engañosos de consolidación/condonación de créditos ([Transparency Center](https://transparency.meta.com/policies/ad-standards/deceptive-content/prohibited-financial-products-and-services/)).

### 9.3 Aplicación a Fiscalio

- Fiscalio es **software/herramienta fiscal**, no un producto de crédito, seguro o inversión. En principio **no cae en la categoría especial obligatoria para México** ni requiere licencia del sector financiero.
- **Riesgos a cuidar:**
  - Lenguaje de dinero/impuestos que la revisión automática pueda clasificar como financiero. Evitar términos como "préstamo", "crédito", "inversión", "seguro".
  - **Promesas absolutas** ("cero errores", "no pagarás nada", "garantizado"), que pueden rozar las políticas de **prácticas engañosas** y, en el caso de contenido financiero, "instrumentos financieros engañosos" ([Transparency Center](https://transparency.meta.com/en-us/policies/ad-standards/restricted-goods-services/financial-services)).
  - Solicitar datos fiscales sensibles dentro del anuncio/landing de forma que se lea como captura de información financiera ([Transparency Center](https://transparency.meta.com/policies/ad-standards/deceptive-content/prohibited-financial-products-and-services/)).
- **Autoridad regulatoria mexicana relevante:** el SAT (Servicio de Administración Tributaria). No existe documentación pública de Meta que exija autorización del SAT para anunciar software fiscal; **sin fuente pública** de un requisito específico.
- **Recomendaciones de cumplimiento:** dirigir a 18+, evitar promesas absolutas, no pedir datos financieros en el anuncio, y revisar el anuncio con la herramienta de transparencia de Meta antes de escalar. Los tiempos de revisión y las restricciones pueden retrasar la campaña; planear margen.

---

## 10. Cómo evitar quedar atrapado en "Learning Limited" con pocos datos

1. **Consolidar.** Menos conjuntos = más eventos por conjunto. Meta recomienda combinar conjuntos y campañas ([Meta, about learning limited](https://www.facebook.com/business/help/269269737396981); [Meta, best practices de delivery](https://www.facebook.com/business/help/950694752295474)).
2. **Elegir un evento de optimización más frecuente.** Bajar de "purchase" a "add to cart" o a un lead/landing page view del embudo superior produce más señal, aunque no sea la conversión final ([Meta, about learning limited](https://www.facebook.com/business/help/269269737396981); [Influee](https://influee.co/au/blog/meta-campaign-objectives)).
3. **Ampliar la audiencia** (Advantage+ audience, sin intereses apilados) ([Meta, about learning limited](https://www.facebook.com/business/help/269269737396981); [Meta, best practices de delivery](https://www.facebook.com/business/help/950694752295474)).
4. **No editar con frecuencia.** Cada edición significativa reinicia el aprendizaje; pequeños cambios acumulados (p. ej. 3 aumentos de 10% en una semana) también pueden reiniciarlo ([Meta, about the learning phase](https://www.facebook.com/business/help/112167992830700); [AdAdvisor](https://adadvisor.ai/docs/learn/learning-phase)).
5. **Subir el presupuesto** si el objetivo es salir de aprendizaje (aquí no aplica: el presupuesto es fijo y de prueba) ([Meta, about learning limited](https://www.facebook.com/business/help/269269737396981)).
6. **Usar Advantage+ campaign budget** si hay >1 conjunto para que Meta concentre el gasto en el conjunto con mejores oportunidades ([Meta](https://www.facebook.com/business/help/153514848493595)).
7. **Aceptar el estado como diagnóstico y reencuadrar el éxito.** Para una prueba de 1 semana con $1,000 MXN, el KPI no es "salir de aprendizaje" sino **CTR, CPC, costo por landing view y costo por reserva en Cal.com**, más la lectura cualitativa de qué mensaje engancha ([Meta, about learning limited](https://www.facebook.com/business/help/269269737396981)).
8. **Nota de actualización:** una fuente de industria reporta que Meta bajó el umbral de 50 a **25 compras** en ventana móvil de 7 días para Advantage+ Shopping (y ~15 para Advantage+ App), aunque esto **no está confirmado en la documentación oficial de Meta** y aplica a tipos de campaña que Fiscalio no usaría ([AdBeacon](https://www.adbeacon.com/meta-just-lowered-the-advantage-learning-threshold)).

---

## 11. Implicaciones para el Campaign Launch Pack (Phase 5)

Dado el contexto (fundador solo, sin datos históricos, $1,000 MXN, objetivo de aprendizaje), el Campaign Launch Pack debe diseñarse para **maximizar aprendizaje por peso**, no para optimizar conversiones.

### 11.1 Estructura recomendada

| Nivel | Configuración | Justificación |
| --- | --- | --- |
| Campaña | **1 campaña — objetivo Leads** (o Sales con evento de embudo superior) | Leads optimiza por acción de contacto; el objetivo se fija y no se puede cambiar ([Meta Ads Guide](https://www.facebook.com/business/ads-guide/update)) |
| Presupuesto | **Diario ~$140 MXN** (o lifetime $1,000 MXN a 7–8 días) | Presupuesto diario como promedio; el lifetime fija el total ([Meta for Developers](https://developers.facebook.com/docs/marketing-api/bidding/overview/budgets)) |
| Conjunto | **1 conjunto**, Advantage+ placements, Advantage+ audience | Evita fragmentación y Learning Limited ([Meta](https://www.facebook.com/business/help/950694752295474)) |
| Puja | **Highest volume (lowest cost)**, sin cost cap/bid cap | Con pocos datos, los controles limitan la entrega ([Meta](https://www.facebook.com/business/help/586282251886816)) |
| Anuncios | **3–6 creatividades** en 9:16 y 4:5 | Más creatividades se asocian a menor CPL; cubre placements ([MCP Ads](https://mcp-ads.com/blog/meta-ads-benchmarks-2025)) |
| Placement | Advantage+ placements (Feed + Reels + Stories) | Reels domina inventario; Feed aporta intención ([CNBC](http://cnbc.com/2026/01/20/most-of-instagrams-ads-ran-on-reels-in-2025-data-shows.html)) |

### 11.2 Creatividades

- Master **9:16 (1440×2560)** para Reels/Stories y **4:5 (1440×1800)** para Feed ([SolidLabs](https://www.solidlabs.com/ad-specs/meta)).
- Duración **15–30 s**, gancho en los **primeros 1.5–2 s**, **subtítulos siempre** (la mayoría ve sin sonido), marca en los primeros 3 s ([Meta](https://en-gb.facebook.com/business/help/188534925073536); [SuperScale](https://superscale.ai/learn/meta-ad-sizes)).
- Respetar safe zone **14/35/6** en 9:16; no poner el CTA en los 672 px inferiores ([Inrō](https://www.inro.social/tools/instagram-reels-safe-zone-checker)).
- Español mexicano, precios en **MXN**, tono "tú"; el copy Castilian o traducido bajo rinde ([AdLibrary MX](https://adlibrary.com/posts/meta-ads-mexico-playbook-2026)).
- Ángulos a testear: (a) "hacer la declaración te quita horas", (b) "¿ya sabes cuánto pagar de ISR/IVA este mes?", (c) demo del borrador en 15 min. Cada creatividad = una hipótesis de mensaje.

### 11.3 Tracking

- Pixel en la landing + evento `Lead` en el CTA hacia Cal.com; si es viable, CAPI/GTM server-side con deduplicación por `event_id` ([Meta CAPI](https://developers.facebook.com/documentation/ads-commerce/conversions-api/best-practices)).
- Verificar el dominio en Business Manager (útil aunque ya no sea requisito para AEM) ([Meta AEM](https://www.facebook.com/business/help/721422165168355)).
- Medir también fuera de Meta: clics a Cal.com, reservas y **show-up rate** de las sesiones de 15 min. Meta no verá el no-show.

### 11.4 Expectativas y KPIs del experimento

| Métrica | Qué esperar (rango variable) | Fuente / nota |
| --- | --- | --- |
| Impresiones totales | ~11,000–37,000 | calculado con CPM MX USD $1.50–$5.00 ([AdLibrary](https://adlibrary.com/posts/meta-ads-mexico-playbook-2026); [AdAmigo](https://www.adamigo.ai/blog/meta-ads-cpm-cpc-benchmarks-by-country-2026)) |
| CTR (enlace) | ~1–2.6% | benchmarks de objetivos ([AdAmigo](https://www.adamigo.ai/blog/meta-ads-benchmarks-2026-by-objective-and-placement)) |
| CPC | ~USD $0.45 (MX referencia) | [AdAmigo](https://www.adamigo.ai/blog/meta-ads-cpm-cpc-benchmarks-by-country-2026) |
| Reservas en Cal.com | **Sin benchmark público para este vertical en México** | tratar como línea base propia |
| Estado de entrega | **Learning Limited probable** | [Meta](https://www.facebook.com/business/help/269269737396981) |

**No prometer** salir de aprendizaje ni ROAS. El éxito se mide por: (1) ¿hubo CTR/CPC competitivo?, (2) ¿algún ángulo generó reservas?, (3) ¿el cuello de botella fue el anuncio, la landing, el CTA o el calendario? Eso responde a "¿sirve Meta y por qué?".

### 11.5 Criterios de corte y siguientes pasos

- Si tras ~$500 MXN gastados el CTR está muy por debajo de ~1% y no hay clics a Cal.com: **pausar y rehacer el gancho**, no subir presupuesto.
- Si hay clics pero no reservas: el cuello de botella está en **landing/CTA/oferta**, no en Meta.
- Si hay reservas pero no asisten: el cuello de botella es **Cal.com/confirmación/seguimiento**.
- Si un ángulo rinde: **duplicar solo ese ángulo** en la siguiente iteración; no escalar el conjunto completo con un presupuesto que no soporta 50 eventos/semana.
- Antes de la Fase 5, preparar **cuenta en MXN** y verificar que el método de pago no dispare el límite de gasto diario de cuenta nueva ([Meta](https://es-la.facebook.com/business/help/563129151097553)).

---

## 12. Referencias

**Meta (fuentes primarias)**
1. Meta Ads Guide — https://www.facebook.com/business/ads-guide/update
2. Aspect Ratios Supported by Placements — https://www.facebook.com/business/help/682655495435254
3. Best practices for Instagram video ads — https://en-gb.facebook.com/business/help/188534925073536
4. Best practices for Meta ads delivery — https://www.facebook.com/business/help/950694752295474
5. About the learning phase — https://www.facebook.com/business/help/112167992830700
6. About learning limited — https://www.facebook.com/business/help/269269737396981
7. About Advantage+ campaign budget — https://www.facebook.com/business/help/153514848493595
8. Best practices for Advantage+ campaign budget — https://www.facebook.com/business/help/2177212182495139
9. About cost and bid controls — https://www.facebook.com/business/help/491846184627504
10. Best practices for bid cap — https://www.facebook.com/business/help/586282251886816
11. About Meta bid strategies — https://www.facebook.com/business/help/1619591734742116
12. About Meta's Aggregated Event Measurement — https://www.facebook.com/business/help/721422165168355
13. Meta for Developers — Conversions API — https://developers.facebook.com/documentation/ads-commerce/conversions-api
14. Meta for Developers — CAPI best practices — https://developers.facebook.com/documentation/ads-commerce/conversions-api/best-practices
15. Meta for Developers — Dataset Quality API / EMQ — https://developers.facebook.com/documentation/ads-commerce/conversions-api/dataset-quality-api
16. Meta for Developers — Minimum Budget — https://developers.facebook.com/docs/marketing-api/reference/minimum-budget
17. Meta for Developers — Budgets — https://developers.facebook.com/docs/marketing-api/bidding/overview/budgets
18. Meta for Developers — Special Ad Categories — https://developers.facebook.com/documentation/ads-commerce/marketing-api/audiences/special-ad-category
19. Meta Business Help Center — Expansión de categorías especiales (financial products and services) — https://business.facebook.com/business/help/510724041294968
20. Meta Transparency Center — Financial and Insurance Products and Services — https://transparency.meta.com/en-us/policies/ad-standards/restricted-goods-services/financial-services
21. Meta Transparency Center — Prohibited financial products and services — https://transparency.meta.com/policies/ad-standards/deceptive-content/prohibited-financial-products-and-services/
22. Meta — Advantage+ explicado — https://www.facebook.com/business/news/meta-advantage-explained-in-two-minutes
23. Meta — Límites de gasto diario (ES) — https://es-la.facebook.com/business/help/563129151097553

**Industria y benchmarks**
24. CNBC / Sensor Tower — Reels y anuncios en Instagram 2025 — http://cnbc.com/2026/01/20/most-of-instagrams-ads-ran-on-reels-in-2025-data-shows.html
25. AdAmigo — CPM/CPC por país 2026 — https://www.adamigo.ai/blog/meta-ads-cpm-cpc-benchmarks-by-country-2026
26. AdAmigo — Benchmarks por objetivo y placement 2026 — https://www.adamigo.ai/blog/meta-ads-benchmarks-2026-by-objective-and-placement
27. AdLibrary — Meta Ads Mexico Playbook 2026 — https://adlibrary.com/posts/meta-ads-mexico-playbook-2026
28. WordStream/LocaliQ vía AdAdvisor — CPL por industria — https://adadvisor.ai/blog/meta-ads-benchmarks-by-industry
29. AdAdvisor — Presupuesto por industria — https://adadvisor.ai/blog/meta-ads-budget-by-industry
30. Get-Ryze — Benchmarks por industria 2026 — https://www.get-ryze.ai/blog/meta-ads-cost-benchmarks-by-industry-2026
31. Get-Ryze — Tamaños/Feed/Stories/Reels — https://www.get-ryze.ai/blog/facebook-ad-sizes-complete-specs-guide-for-2026
32. SolidLabs — Meta ad specs (verificado contra Meta) — https://www.solidlabs.com/ad-specs/meta
33. Inrō — Safe zone checker — https://www.inro.social/tools/instagram-reels-safe-zone-checker
34. AdSUploader — Meta Ads Safe Zones — https://adsuploader.com/blog/meta-ads-safe-zones
35. HeySage — Meta safe zone 2026 — https://www.heysage.com.au/meta-ads-safe-zone-checker
36. SuperScale — Meta ad sizes / Tinuiti Q1 2026 — https://superscale.ai/learn/meta-ad-sizes
37. Sovran — CPM por industria y placement — https://sovran.ai/benchmarks/meta-ads-cpm-by-industry
38. MBADV — Meta Ads Cost, Budgeting & Bidding — https://www.mbadv.agency/meta-ads/meta-ads-cost-budgeting-and-bidding
39. MBADV — Objetivos de campaña (ODAX) — https://www.mbadv.agency/meta-ads/meta-ads-campaign-objectives
40. MCP Ads — Benchmarks 2025 / creatividades — https://mcp-ads.com/blog/meta-ads-benchmarks-2025
41. Adovate — Costos Meta Ads 2026 por vertical — https://www.adovateagency.com/blog/how-much-do-meta-ads-cost-in-2026
42. Adside — Paid Ads Benchmarks 2026 — https://www.adside.ai/blog/ad-benchmarks-2026
43. Adjust — ATT opt-in rates 2025 — https://www.adjust.com/blog/att-opt-in-rates-2025
44. PPC Land — Adjust LATAM 2026 (ATT ~49%) — https://ppc.land/latam-mobile-apps-finance-sessions-surge-62-installs-grow-13-in-2025
45. BYYD — LATAM mobile 2026 — https://www.byyd.me/en/blog/2026/09/latam-mobile-market-in-2026-growth-opportunities-user-behavior-and-app-marketing-trends
46. IAB México / AVE / CiM — Estudio Valor Total Media (PDF) — https://cdn.iabmexico.com.mx/iab-assets/estudios/Estudio-Valor-Total-Media-2025-vp.pdf
47. Marketing4eCommerce México — IAB: inversión online 2025 — https://marketing4ecommerce.mx/para-2025-57-de-la-inversion-publicitaria-en-mexico-sera-online-iab
48. Adlatina / IPG Mediabrands — Crecimiento publicitario MX 2025 — https://www.adlatina.com/negocios/se-espera-que-los-ingresos-publicitarios-en-mxico-crezcan-un-105-por-ciento-en-2025
49. Shortway — Publicidad ecommerce México — https://shortway.com.mx/publicidad-para/ecommerce
50. Stackmatix — Costos y mínimos — https://www.stackmatix.com/
51. Coinis — Mínimo de presupuesto Meta — https://coinis.com/how-to/minimum-budget-for-facebook-ads
52. Rableb — Presupuesto mínimo en Meta Ads (ES) — https://rableb.com/guias/presupuesto-minimo-para-meta-ads
53. AdsX — Salir de la fase de aprendizaje — https://www.adsx.com/blog/meta-ads-learning-phase-exit-tactics
54. AdBeacon — Umbral Advantage+ (no oficial) — https://www.adbeacon.com/meta-just-lowered-the-advantage-learning-threshold

---

*Documento de investigación. Las cifras de mercado son rangos variables y deben revalidarse al momento de lanzar la campaña. Este informe no sustituye asesoría legal ni fiscal.*
