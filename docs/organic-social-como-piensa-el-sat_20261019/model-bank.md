# Registro de modelos mentales — «Cómo piensa el SAT»

Entregable de F0. Es el **activo central** de la campaña: define el orden de
publicación, la frase ancla de cada modelo, su objeto visual, su destino y su
atribución. Cada pieza publicada se llena aquí.

---

## 1. Convención UTM (orgánico)

Distinta de la de paid (`utm_medium=paid_social`). **No usar `utm_term`.**

```
utm_source   = facebook | instagram
utm_medium   = organic_social
utm_campaign = como-piensa-el-sat
utm_content  = modelo-<NN>-<slug>-<formato>
```

`<formato>`: `reel` · `carrusel` · `estatico` · `conversacion`.

**Instagram como espejo desde la semana 2.** Se publica el mismo arte y el mismo
copy; lo único que cambia es el canal: `utm_source=instagram`. En Instagram los
comentarios no son clicables, así que el destino va en la **bio** (y en sticker
de Stories cuando aplique), no en el primer comentario. El `utm_content` no
cambia: `utm_source` es lo que separa los dos canales.

Ejemplo:
`https://www.fiscalio.app/blog/pue-vs-ppd-diferencia-facturar-cobrar?source=blog_pue_vs_ppd&utm_source=facebook&utm_medium=organic_social&utm_campaign=como-piensa-el-sat&utm_content=modelo-04-facturado-cobrado-carrusel`

`rememberCampaignParams` (`lib/analytics.ts`) ya propaga UTMs y `fbclid` en el
sitio, así que la atribución funciona sin desarrollo.

---

## 2. Contrato de CTA

Regla dura: **el link nunca va en el cuerpo del post** (destruye el alcance). Va
en el **primer comentario**.

| Tipo de pieza | Objetivo | Destino |
|---|---|---|
| **Pieza bandera** (carrusel / Reel) | Herramienta + tráfico | Calculadora RESICO con `source` + UTMs, en el **primer comentario** (si queda presupuesto de links, §2.1) |
| **Pieza de apoyo** (estático) | Capturar email | `/calculadora-resico?dialog=open&source=<source>&utm_*` |
| **Conversación** (viernes) | Comentarios | Sin link |

El **CTA dentro de la pieza** es **«Sigue a Fiscalio»**, no un link: la página
tiene 0 seguidores y el objetivo de la fase es seguidores. El link va aparte, en
el primer comentario.

La calculadora es el destino por defecto (herramienta, valor inmediato, y es
donde vive la waitlist). Para un modelo que necesite más lectura, el blog del
modelo es la alternativa.

Notas de infraestructura verificadas el 2026-10-18:

- La waitlist **sí es enlazable**: `components/waitlist-dialog.tsx` abre el modal
  con `?dialog=open` y toma el copy contextual de `?source=`.
- La atribución ya existe en GA4: `waitlist_dialog_opened` (`trigger_location`)
  y `waitlist_signup` (`signup_source`). **Sin desarrollo.**
- Pasar solo `source` (sin `dialog=open`) da atribución y copy contextual sin
  abrir el modal de golpe. Es el modo por defecto de la serie.
- El registro de copy contextual (`CONTEXTUAL_COPY`) hoy solo tiene 5 entradas;
  los modelos nuevos requieren dar de alta su `source`.
- `source` existente y reutilizable: `modelo_3_bovedas`, `blog_sat_no_precarga`,
  `blog_pue_vs_ppd`, `blog_exportacion_servicios`, `blog_declaracion_mensual`.

### 2.1 Presupuesto de links de la Página (Meta, 2026)

Verificado el 2026-10-24 en la [ayuda de Meta](https://www.facebook.com/help/1929252614431792):

- La Página puede incluir links en **2 posts o comentarios orgánicos al mes**. El
  tope **sí cuenta los comentarios**, así que «link en el primer comentario» lo
  gasta igual. Reinicia el **1 de cada mes** y lo no usado **no se acumula**.
- Se despliega **por oleadas**: puede no aplicar a esta Página todavía. Revisar el
  compositor y guardar captura del aviso si aparece.
- **No cuentan:** links adicionales en los comentarios de un post que ya lleva
  link, links a Meta (Facebook, Instagram, WhatsApp, Threads), links de afiliados
  de Meta y **links en anuncios**.
- Meta Verified estándar (~US$14.99) **no** sube el tope. Meta One Advanced
  (~US$49.99 → 8/mes) o superior, sí.

**Regla de campaña:**

- El link del mes se gasta en el **carrusel bandera** (la pieza de mayor valor).
- Las demás piezas (**estático, Reel, conversación**) **no llevan link propio**: el
  CTA dentro de la pieza sigue siendo «Sigue a Fiscalio» y remiten al **post
  fijado** de la Página, que es una de las piezas ancla del mes.
- El destino de una pieza sin link se puede publicar como **comentario adicional**
  en el hilo de la pieza ancla: no consume tope.
- **Instagram:** el link va en la **bio** y no consume tope. El espejo conserva la
  atribución con `utm_source=instagram`.
- Cada link gastado se anota en la columna Notas de §6 para no pasarse del tope.

---

## 3. Banco de modelos mentales

Todos derivados de contenido ya publicado en el blog. Un modelo por semana.

| # | Modelo mental | Frase ancla | Origen | Objeto visual | Destino |
|---|---|---|---|---|---|
| 1 | El IVA no es tuyo: eres el recaudador | *"El IVA nunca fue tu dinero."* | `cuanto-debo-pagar-resico` | 3 bóvedas ✅ | `/blog/cuanto-debo-pagar-resico` |
| 2 | Las 3 bóvedas | *"Cada peso que entra se parte en 3 bóvedas."* | `cuanto-debo-pagar-resico` | 3 bóvedas ✅ | `/blog/cuanto-debo-pagar-resico` |
| 4 | Facturado ≠ cobrado | *"Para el SAT, la factura es el inicio de la historia, no el final."* | `pue-vs-ppd-diferencia-facturar-cobrar` | Ficha PUE vs PPD | `/blog/pue-vs-ppd-diferencia-facturar-cobrar` |
| 5 | Estás jugando dos juegos: ISR e IVA | *"Las facturas ya no bajan tu ISR, pero sí bajan tu IVA."* | `deducciones-resico-isr` | Dos tableros | `/blog/deducciones-resico-isr` |
| 3 | El IVA es un flujo, no un costo | *"No pagas IVA: lo transfieres."* | `calcular-isr-iva-resico` | Riel entradas / salidas | `/blog/calcular-isr-iva-resico` |
| 6 | El SAT no copia, interpreta | *"El SAT no lee tus facturas: las interpreta."* | `porque-sat-no-precarga-facturas` | XML → filtro → renglón | `/blog/porque-sat-no-precarga-facturas` |
| 9 | Lo que te retienen ya es un pago a cuenta | *"Te depositan menos. No te pagaron menos."* | `CONTEXT.md` (retenciones) | 3 bóvedas: tu cliente llena una parte | `/calculadora-resico/retenciones` |
| 7 | Dos calendarios que no coinciden | *"Tu mes y el mes del SAT no empiezan el mismo día."* | `cuando-presentar-declaracion-mensual-resico` | Dos líneas de tiempo | `/blog/cuando-presentar-declaracion-mensual-resico` |
| 8 | Declaras un mes que ya cerró | *"No estás reportando hoy: estás reportando el mes pasado."* | `como-hacer-declaracion-mensual-resico` | Calendario a mes vencido | `/blog/como-hacer-declaracion-mensual-resico` |
| 10 | El IVA de tus gastos es dinero tuyo congelado | *"Pide factura y descongelas tu IVA."* | `deducciones-resico-isr` | IVA entrampado | `/blog/deducciones-resico-isr` |
| 11 | IVA 0% no es «sin IVA» | *"0% no significa nada: significa que acumulas saldo a favor."* | `exportar-servicios-resico-como-freelancer` | Flecha 0% → devolución | `/blog/exportar-servicios-resico-como-freelancer` |
| 12 | El saldo a favor es el SAT debiéndote | *"Un saldo a favor no es un error: es una devolución."* | `saldo-favor-resico` | Cuenta por cobrar al SAT | `/blog/saldo-favor-resico` |
| 13 | Corregir no es delito | *"Equivocarse y corregir son dos cosas distintas."* | `que-hacer-si-presentaste-mal-tu-declaracion-sat` | Error vs complementaria | `/blog/que-hacer-si-presentaste-mal-tu-declaracion-sat` |
| 14 | El borrador no te compromete (modelo de marca) | *"Un borrador no te compromete con nadie."* | posicionamiento de producto | Sello «BORRADOR» | `/demo-resico` |

Cifras usadas en los modelos (verificadas contra `lib/tax-constants.ts` el
2026-10-18): ISR RESICO 1.00%–2.50% por tramos hasta $3.5M; IVA nacional 16%;
retención de ISR de persona moral 1.25%; retención de IVA 10.6667% (2/3 de 16%).

---

## 4. Calendario de las 6 semanas

Una idea por semana. El modelo se repite, no se acumula.

| Semana | Fechas | Modelo | Pieza 1 (lunes) | Pieza 2 (miércoles) | Conversación (viernes) | `source` |
|---|---|---|---|---|---|---|
| 1 | 19–23 oct | El IVA no es tuyo / Las 3 bóvedas | **Carrusel** ✅ aprobado | **Reel** ✅ aprobado | ✅ | `modelo_3_bovedas` ✅ |
| 2 | 26–30 oct | Lo que te retienen ya es un pago a cuenta | Carrusel | Estático | ✅ | `modelo_retenciones` (nuevo) |
| 3 | 2–6 nov | Facturado ≠ cobrado | Carrusel | Estático | ✅ | `blog_pue_vs_ppd` (existe) |
| 4 | 9–13 nov | Dos juegos: ISR e IVA | Carrusel | Estático | ✅ | `modelo_dos_juegos` (nuevo) |
| 5 | 16–20 nov | El IVA es un flujo | Carrusel | Estático | ✅ | `modelo_iva_flujo` (nuevo) |
| 6 | 23–27 nov | El SAT no copia, interpreta | Carrusel | Estático | ✅ | `blog_sat_no_precarga` (existe) |

**Presupuesto de links (§2.1).** Con el tope de 2 links al mes, solo **2 carruseles
del mes** llevan link. Noviembre se asigna a las **semanas 3 y 4** («el error más
caro» y «el que más rompe mitos»); las semanas 5 y 6 publican sin link propio y
remiten al post fijado. Octubre ya gastó su presupuesto en la semana 1 (carrusel
19 oct + comentario del Reel 21 oct), así que la semana 2 publica sin link nuevo.
El espejo de Instagram no consume tope: su link vive en la bio.

**Por qué este orden:** primero el «aha» más visceral (el IVA no es tuyo), luego
su secuela directa (mismo ejemplo, pero facturando a una empresa: ahí aparecen las
retenciones), después el error más caro (facturado ≠ cobrado) y el que más rompe
mitos (deducciones), y al final los de confianza experta (precarga).

**Restricción que manda sobre el orden:** la placa final del carrusel de la semana
1 cierra con *«Si le facturas a una empresa, el depósito llega distinto; de eso va
el próximo post.»* Es una **promesa pública**: la semana 2 tiene que ser el modelo
de retenciones, con el mismo ejemplo de $50,000 y el mismo objeto visual de las 3
bóvedas. Sirve a la vez como secuela narrativa y como segundo toque del mismo
modelo mental (que es lo que hace que se pegue).

**Semana 2, decisión de cifras (2026-10-20):** con `lib/tax-constants.ts`, un
subtotal de $50,000 facturado a persona moral da IVA $8,000, retención de ISR $625
(1.25%) y retención de IVA $5,333.35 (`RETENCION_IVA_PM: 0.106667`); depósito
$52,041.65. Se publican **esas** cifras, las que muestra el destino. La pieza **no
cita la tasa**: el sitio muestra cuatro variantes (10.6%, 10.66%, 10.6667%,
10.67%), así que el carrusel habla solo de montos. La corrección del motor a 2/3
exacto queda como deuda técnica post-campaña.

**Espejo en Instagram:** desde la semana 2 se publica el mismo arte y copy con
`utm_source=instagram`; el link va en la bio. No cambia el calendario ni agrega
piezas.

---

## 5. Anatomía de la pieza bandera (carrusel)

Estructura aprobada en la semana 1. **5 placas en 4:5 (1080×1350)**. Es la
plantilla de las semanas 2–6.

| Placa | Función |
|---|---|
| 1 | **Gancho** — la cifra del depósito + la creencia que rompe, con su base explícita |
| 2 | **Reto** — pregunta con respuesta numérica; se pide el número en comentarios |
| 3 | **El modelo** — el objeto visual con la incógnita visible |
| 4 | **Desglose** — tabla con los supuestos arriba; la incógnita sigue abierta |
| 5 | **Respuesta + hábito + CTA** («Sigue a Fiscalio») |

Dos reglas que hacen que funcione:

- **El truco del collage no funcionó.** Verificado el 2026-10-19 con el carrusel
  de la semana 1: Facebook mostró las 5 placas y **no** tapó la última con «+1».
  Con 5 imágenes en 4:5 el collage no oculta nada.
  **Regla para las semanas 2–6: no diseñar una pieza que dependa de que una placa
  quede oculta.** El reto tiene que funcionar con todo a la vista, o hay que subir
  el número de placas hasta que Facebook use el «+N».
- **La pregunta pide una intuición, no un «comenta SÍ».** Facebook castiga el cebo;
  una pregunta real genera comentarios. Pero con todas las placas visibles, la
  pregunta no puede ser «adivina el resultado»: pide *«antes de hacer la cuenta,
  ¿cuánto dirías?»*, que sobrevive a que la respuesta esté a la vista.

## 5.1 Producción

El proyecto de contenido es **`~/Projects/fiscalio-product-demo/`** (Remotion),
no el admin de este repo:

| Asset | Componente | Salida |
|---|---|---|
| Placares 4:5 | `src/social/cards/Card1..5.tsx` | `out/social/bovedas-1..5.png` |
| Reel 9:16 | `src/social/reel/*` | `out/BovedasReel.mp4` |
| Datos del modelo | `src/social/data.ts` | — |

`app/admin/meta-creatives` queda como respaldo para estáticos sueltos (1:1, 4:5,
9:16 con safe zone). La migración a un generador único es la fase 5
(automatización).

---

## 6. Tabla de registro semanal

Una fila por semana. Se llena al cierre de cada semana.

| Semana | Modelo | Alcance | Retención 3 s | Guardados | Compartidos | Clics al link | `waitlist_dialog_opened` | `waitlist_signup` | Notas |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 3 bóvedas | 125 visualizaciones | 16 | 0 | 0 | 0 | 0 | 0 | Semana completa publicada: carrusel y primer comentario 19 oct, Reel 21 oct, conversación 23 oct 2026. Métricas al cierre del 23 oct |
| 2 | Retenciones | | | | | | | | |
| 3 | Facturado ≠ cobrado | | | | | | | | |
| 4 | Dos juegos | | | | | | | | |
| 5 | IVA es un flujo | | | | | | | | |
| 6 | SAT interpreta | | | | | | | | |

**Semana 1 — salvedad sobre los clics.** Los 0 clics y 0 `waitlist_signup` pueden
ser efecto del tope de links (§2.1): octubre gastó sus 2 links en el carrusel del 19
oct y el comentario del Reel del 21 oct, así que uno de los dos pudo no publicarse
o quedar como texto plano. Antes de leer estos ceros como falta de interés,
confirmar en la Página cuál comentario quedó clicable.

**Lectura:** likes no son KPI. La señal de que un modelo funciona son
**guardados y compartidos** (indican que el concepto se quedó y se quiso
enseñar a alguien). Un modelo que destaca se convierte en creativo pagado,
reutilizando la infraestructura de
`conductor/tracks/paid-acquisition-meta_20261005/`.

---

## 7. Checklist previo a publicar cada pieza

- [ ] ¿Usa alguna frase vetada? ("paga menos impuestos", "optimiza tus impuestos", "evita multas", "garantizamos", "declaramos por ti", "agenda una demo")
- [ ] ¿Afirma o implica la situación financiera del espectador?
- [ ] ¿Es **una sola** idea?
- [ ] ¿La frase ancla está sola y se puede repetir de memoria?
- [ ] ¿La terminología fiscal es precisa? **Retener** (el cliente aparta) ≠ **enterar** (el cliente lo lleva al SAT) ≠ **acreditar** (tú lo abonas en tu declaración). Nunca «ya está pagado al SAT»
- [ ] ¿El link va en el primer comentario y **no** en el cuerpo? ¿Y queda dentro del presupuesto de 2 links del mes (§2.1)?
- [ ] ¿La URL lleva UTMs **y** `source` correctos?
- [ ] ¿La cifra fiscal citada salió de `lib/tax-constants.ts`?
- [ ] ¿Existe el `source` en `CONTEXTUAL_COPY`?
