# Semana 3 — «Facturado ≠ cobrado»

Modelo mental de la semana: **la factura describe el estado de tu dinero, no tu
trabajo**. Una factura emitida antes de cobrar es una operación abierta; si el
método de pago dice que ya se cobró, el SAT la cuenta hoy y cobra impuesto sobre dinero
que todavía no llegó.

Tercera semana con **la misma factura de $50,000 + IVA** de las semanas 1 y 2. Esta
vez el cliente paga a 30 días y el dinero no ha llegado.

Frase ancla: *«Para el SAT, la factura es el inicio de la historia, no el final.»*
Frase de apoyo: *«El método de pago no dice cómo trabajaste: dice si ya te pagaron.»*

Estado: **copy v3.** Observaciones del 2026-11-01 aplicadas: la placa 2 deja de
ser un acertijo y el estático carga el modelo y la frase ancla en el cuerpo. El
2026-11-02 la terminología quedó en **«método de pago»** (§1) y las piezas se
registraron en `fiscalio-gtm` como `org-26w45-01..04` bajo `h-002`. Cifras
congeladas el 2026-11-01. Assets aún no renderizados.

---

## 1. Decisiones

| # | Decisión | Resolución |
|---|---|---|
| D1 | Ángulo | El **error más caro**: emitir con método de pago PUE una factura que todavía no se cobra. La variante contraria (PPD sin complemento de pago) se menciona como mecanismo de cierre, **no** como tema |
| D2 | Ejemplo | Se mantiene **$50,000 + IVA 16%** de las semanas 1 y 2. La continuidad es el activo: misma factura, tres lecturas |
| D3 | Cifras | PUE → **$8,550** de impuesto este mes (IVA $8,000 + ISR $550) sobre **$0 cobrados**. PPD → **$0** este mes y los mismos **$8,550** el mes del cobro |
| D4 | Destino | El **blog del modelo**, no la calculadora: el concepto necesita lectura. `source=blog_pue_vs_ppd` **ya existe** en `CONTEXTUAL_COPY` |
| D5 | Link de noviembre | Este carrusel gasta el **link #1 de 2** (§2.1 de `model-bank.md`). El contador reinicia el 1 de noviembre |
| D6 | `utm_content` | **Reemplazada el 2026-11-02.** `utm_content` = `content_id` del contrato de `fiscalio-gtm` (`org-26w45-01..04`, semana ISO 45) y `utm_campaign=mental-models`. El esquema anterior `modelo-03-*` / `como-piensa-el-sat` ya no se usa. Ver la tabla de piezas en §2 |
| D7 | Pregunta de la placa 2 | **No es un acertijo.** No se contesta con la placa 5 ni pide adivinar una cifra: pregunta cómo lo hace el lector y se responde en comentarios. Corregido el 2026-11-01 |

### Terminología — decidida el 2026-11-02: «método de pago»

El copy dice **«método de pago»** para referirse a PUE / PPD. Es el nombre del campo
en el CFDI 4.0 (`MetodoPago`, catálogo `c_MetodoPago`, Anexo 20). **No** es «forma
de pago»: ese es el campo `FormaPago` (efectivo, transferencia, 99 «Por definir»).
Una factura PPD lleva forma de pago 99. Opciones que se evaluaron:

| Término | A favor | En contra |
|---|---|---|
| **etiqueta** (v2) | Es el modelo mental: algo que se pega en la factura y describe el dinero | Informal; un contador puede leerlo como impreciso |
| **clave** | Neutro, corto, no promete precisión técnica | Suena a código del sistema, no a concepto |
| **método de pago** (elegido) | Es el término del CFDI (`MetodoPago` = PUE/PPD) | Se confunde con «forma de pago» (efectivo, transferencia), que es otro campo |

El modelo mental sigue siendo el mismo: el método de pago describe el estado del
dinero, no el trabajo.

### Copy contextual de `blog_pue_vs_ppd` — reescrito el 2026-11-01

La entrada anterior de `CONTEXTUAL_COPY` (`components/waitlist-dialog.tsx:46`)
decía *«Deja de pagar impuestos por dinero que no has cobrado»* y el botón
*«Proteger mi dinero»*. Las dos cosas implican la situación fiscal del espectador
y usan encuadre de miedo, que es lo que la campaña evita. Quedó:

```
title: "Facturado no es cobrado"
description: "Únete a la beta privada de Fiscalio y concilia tus facturas PUE y PPD: qué ingresos ya cuentan para el SAT y cuáles siguen abiertos."
buttonText: "Unirme a la beta privada"
```

No cambia el `source` ni la atribución, solo el texto del modal.

**Pendiente relacionado (fuera de esta cápsula):** el destino sigue mostrando
`ContextualPainCTA` con *«Cuidado con pagar impuestos de más»* y *«Proteger mi
dinero»* (`app/blog/pue-vs-ppd-diferencia-facturar-cobrar/page.tsx:231`). Mismo
problema de encuadre, pero es copy de una página SEO ya publicada: decidir aparte.

---

## 2. Assets

### Piezas registradas (`fiscalio-gtm/ledger/pieces.md`, hipótesis `h-002`)

| content_id | Pieza | Plataforma | Destino |
|---|---|---|---|
| `org-26w45-01` | Carrusel | Facebook | Primer comentario, fijado |
| `org-26w45-02` | Carrusel | Instagram | Bio (lunes a martes) |
| `org-26w45-03` | Estático | Facebook | Comentario adicional en el hilo del carrusel |
| `org-26w45-04` | Estático | Instagram | Bio (desde el miércoles) |

Las filas del ledger son inmutables: si una URL cambia, se descarta la pieza y se
registra un `content_id` nuevo. La conversación del viernes no lleva link y queda
fuera del ledger.

### Archivos

| Asset | Ruta | Spec |
|---|---|---|
| Carrusel, 5 placas | `~/Projects/fiscalio-product-demo/out/social/pue-ppd-1..5.png` | 1080×1350 (4:5) |
| Estático | `~/Projects/fiscalio-product-demo/out/social/pue-ppd-estatico.png` | 1080×1350 (4:5) |

Proyecto: `~/Projects/fiscalio-product-demo/` (Remotion). Carpeta nueva
`src/social/pue-ppd/` (placas, estático y datos), copiando la estructura de
`src/social/retenciones/`.

### Por qué no hay Reel (y qué costaría tenerlo)

No es una restricción de Meta ni una imposibilidad técnica: el Reel de la semana 1
se renderizó con Remotion desde el mismo proyecto. Es una **restricción de
capacidad declarada** en `spec.md` («Decisión de formato», punto 3, y «Out of
Scope»): para las semanas 2–6 solo se produce carrusel, y el Reel vuelve en Phase 4
con el guion de las placas ya aprobadas.

El costo de un Reel esta semana no está en renderizar, está en escribir escenas
nuevas: `src/social/reel/*` está cableado a las 3 bóvedas (`SceneVaults`,
`SceneSplit`), así que `pue-ppd` necesitaría gancho, reto, modelo y regla propios.
La versión barata —un montaje de las 5 placas en 9:16 con captions— reutiliza el
arte, pero no aporta alcance nuevo sobre el carrusel del lunes.

Decisión de la semana: **sin Reel**. El miércoles va el estático porque es la
pieza que captura email (`dialog=open`); el alcance ya lo carga el carrusel del
lunes, que además gasta el link del mes. Consecuencia asumida: «retención 3 s»
sigue sin ser comparable por tercera semana.

Paleta: fondo `#fcfaf6` · texto `#262626` · rust `#b45309` · ámbar `#fbbf24`.
Sin gradientes ni sombras.

Objeto visual del modelo: **dos fichas de factura** — PUE (cerrada, con sello) y
PPD (abierta, con la incógnita). No se rediseñan las 3 bóvedas: este modelo tiene
su propio objeto, y reusarlas obligaría a mostrar cifras de retenciones que aquí
no aplican.

---

## 3. Orden y fechas de publicación

| Día | Pieza | Objetivo | Destino |
|---|---|---|---|
| **Lunes 2 nov** | Carrusel de 5 placas | Alcance + guardados | Link #1 de noviembre en el **primer comentario**, fijado |
| **Miércoles 4 nov** | Estático | Captura de email | Sin link propio: remite al post fijado / bio de Instagram |
| **Viernes 6 nov** | Post de conversación | Comentarios | **Sin link** |

Espejo en Instagram: mismo arte y copy, mismo día, `utm_source=instagram`. El
espejo **sí** lleva link: va en la bio.

**Presupuesto de links (§2.1 de `model-bank.md`).** Noviembre tiene 2 links y se
asignan a las semanas 3 y 4. Este carrusel gasta el primero; el de la semana 4
queda reservado. El estático del miércoles y la conversación del viernes **no**
llevan link propio: su URL se publica como comentario adicional en el hilo del
carrusel, que ya lleva link (Meta no cuenta los links extra en un hilo que ya
lleva link).

---

## 4. Copy (v3)

### Carrusel — cuerpo del post

```
Le facturaste $58,000 a un cliente que paga a 30 días. Hoy es el día 1 y todavía no has cobrado nada.

Para ti, esa factura es un trabajo entregado. Para el SAT, es solo el primer dato de una historia más larga: dice qué pasó con el dinero, no solo qué vendiste.

El método de pago de la factura describe ese estado:
→ PUE: el dinero ya quedó resuelto.
→ PPD: la factura ya existe, el dinero todavía no llega.

Con el método de pago equivocado, el SAT cuenta ese ingreso como cobrado este mes y pagas ISR e IVA sobre dinero que no ha llegado.

¿Facturas antes de cobrar o cuando ya te pagaron? Las dos son válidas: la que no funciona es la que no coincide con el dinero. Cuéntanos en los comentarios cómo lo haces hoy.

Para el SAT, la factura es el inicio de la historia, no el final.

(Ejemplo: RESICO persona física, $50,000 + IVA 16% como único ingreso del mes, cliente que paga a 30 días, sin gastos deducibles.)
```

El cuerpo **no da las cifras**: el desglose vive en las placas 4 y 5. La pregunta
de la placa 2 no se contesta con la placa 5, se contesta en los comentarios.

### Carrusel — primer comentario (Facebook)

```
Los dos métodos de pago, con el mismo ejemplo → https://www.fiscalio.app/blog/pue-vs-ppd-diferencia-facturar-cobrar?source=blog_pue_vs_ppd&utm_source=facebook&utm_medium=organic_social&utm_campaign=mental-models&utm_content=org-26w45-01
```

### Estático — cuerpo del post

```
$58,000 facturados. $0 cobrados. $8,550 de impuestos este mes.

Para el SAT, la factura es el inicio de la historia, no el final. El método de pago dice cómo termina.

Con PUE, la historia termina el día que facturas: el SAT entiende que ya cobraste, cuenta el ingreso este mes y pagas ISR e IVA sobre él, aunque el dinero llegue en 30 días.

Con PPD, la historia queda abierta hasta que te pagan. El complemento de pago la cierra, y los mismos $8,550 se pagan ese mes.

Facturado no es cobrado.

El desglose completo está en el link fijado de la página.

Sigue a Fiscalio: un modelo mental fiscal cada semana.
```

Caption **v4** (2026-11-02): el centro cuenta PUE y PPD como una historia que
termina o queda abierta, igual que el arte.

Arte **v2** (dirección A, 2026-11-02): eyebrow «Un modelo mental fiscal» ·
«Facturado ≠ cobrado» · frase ancla de la historia · «Misma factura de $58,000 ·
el cliente paga a 30 días» · **línea de tiempo día 1 → día 30**: con PUE la
historia termina al emitir (sello FIN) y el dinero llega después, fuera de ella;
con PPD la historia sigue abierta y el dinero es lo que la cierra. Consecuencias
en el mismo código de color del carrusel. El arte v1 (fichas «PUE cerrada / PPD
abierta» y «$58,000 → $0») se descartó: sin la frase de la historia, «abierta» y
«cerrada» no se entendían, y la flecha se leía como pérdida. Todo el texto del
arte vive en `slides[0]` del `copy.md` de `org-26w45-03` / `-04` (K3).

### Estático — URL del modelo (no se publica en el estático)

```
https://www.fiscalio.app/calculadora-resico?dialog=open&source=blog_pue_vs_ppd&utm_source=facebook&utm_medium=organic_social&utm_campaign=mental-models&utm_content=org-26w45-03
```

Se publica como **comentario adicional en el hilo del carrusel ancla**. En
Instagram el equivalente es la bio desde el miércoles, con su propio `content_id`
(`org-26w45-04`, ver abajo).

### Conversación — viernes 6 nov

Sin link.

```
Pregunta para quien factura a crédito: cuando emites la factura antes de cobrar, ¿qué método de pago le pones?

PUE o PPD. No es un detalle de forma: es la diferencia entre que el SAT cobre el impuesto este mes o el mes que te paguen.

La regla, en una línea: si al dar clic en «emitir» el dinero no había llegado, es PPD.

¿Alguna vez te pagaron un mes después de facturar? ¿Qué método de pago llevaba tu factura?
```

### Instagram (espejo)

Mismo arte y mismo cuerpo, con dos cambios:

- La línea «está en el link fijado de la página» pasa a «está en la bio».
- El primer comentario puede llevar la pregunta, **nunca el link** (no es clicable).

Link de bio (no consume tope de links):

```
https://www.fiscalio.app/blog/pue-vs-ppd-diferencia-facturar-cobrar?source=blog_pue_vs_ppd&utm_source=instagram&utm_medium=organic_social&utm_campaign=mental-models&utm_content=org-26w45-02
```

Para el estático, desde el miércoles:

```
https://www.fiscalio.app/calculadora-resico?dialog=open&source=blog_pue_vs_ppd&utm_source=instagram&utm_medium=organic_social&utm_campaign=mental-models&utm_content=org-26w45-04
```

---

## 5. Estructura del carrusel (5 placas)

| Placa | Contenido |
|---|---|
| 1 | `FACTURADO` **$58,000.00** · `COBRADO` **$0.00** · «Para el SAT, la factura es el inicio de la historia, no el final.» · base: «$50,000 + IVA 16% · la misma factura de las 2 semanas anteriores» |
| 2 | `LA PREGUNTA` · «¿Facturas antes de cobrar o cuando ya te pagaron?» · «Las dos son válidas: la que no funciona es la que no coincide con el dinero. Cuéntanos en los comentarios cómo lo haces hoy.» |
| 3 | `EL MODELO` · titular «Dos métodos de pago. Dos historias.» · Ficha **PUE** «El dinero ya quedó resuelto» → el SAT cuenta la factura este mes · Ficha **PPD** «La factura ya existe; el dinero todavía no» → el SAT la cuenta cuando llega el pago; el complemento de pago lo confirma |
| 4 | `EL DESGLOSE` · supuestos arriba · tabla de dos columnas: PUE → IVA $8,000.00 + ISR $550.00 = **$8,550.00 este mes** · PPD → **$0.00 este mes**, $8,550.00 el mes del cobro |
| 5 | `EL CIERRE` · «$8,550 si dice PUE. $0 este mes si dice PPD.» · «Los mismos $8,550, movidos al mes que te pagan.» · hábito: «Antes de emitir: ¿ya me pagaron?» · «Sigue a Fiscalio» |

**Colores con un solo significado en toda la pieza:** gris = lo que dice el
método de pago · rust = lo que el SAT cuenta este mes · ámbar = lo que se mueve al mes
del cobro. El impuesto nunca va en ámbar.

**Por qué la placa 2 no es un acertijo:** la pregunta no pide adivinar una cifra ni
se contesta con la placa 5; pregunta cómo trabaja el lector y se responde en
comentarios. La pieza enseña primero y cierra con el desglose, sin castigar al que
no sabía. Eso también resuelve el problema del collage: ninguna placa depende de
que otra quede oculta.

---

## 6. Cifras y supuestos (verificados contra `lib/tax-constants.ts`)

Supuestos: RESICO persona física · servicios · $50,000 + IVA como único ingreso
del mes · cliente que paga a 30 días · sin gastos deducibles · IVA 16% · ISR
RESICO 1.10%.

| Concepto | PUE | PPD |
|---|---|---|
| Subtotal | $50,000.00 | $50,000.00 |
| IVA 16% | $8,000.00 | $8,000.00 |
| Total facturado | $58,000.00 | $58,000.00 |
| Ingreso que el SAT cuenta **este mes** | $50,000.00 | $0.00 |
| IVA del mes | $8,000.00 | $0.00 |
| ISR del mes (1.10%) | $550.00 | $0.00 |
| **Impuesto del mes** | **$8,550.00** | **$0.00** |
| Impuesto el mes del cobro | — | $8,550.00 |

No se publica la tasa de ISR RESICO (1.10%), igual que en la semana 2: se publica
el monto.

**Nota de precisión legal.** La pieza no afirma que el SAT «invente» un impuesto:
afirma que el método de pago le dice al SAT que el dinero ya se cobró. El error
es de llenado del CFDI, no del sistema: el Anexo 20 pide PUE solo cuando el pago
se recibe al emitir, y PPD (con forma de pago 99) cuando se cobra después. Ese es el marco del blog de origen.

---

## 7. Rutina de la primera hora

- [ ] Publicar el link del carrusel **inmediatamente** y **fijarlo** (link #1 de noviembre)
- [ ] Responder cada comentario con el mecanismo, sin corregir a nadie: «Si la factura dice PUE, son $8,550 este mes. Si dice PPD, $0 este mes y los mismos $8,550 el mes que te pagan»
- [ ] Compartir en 2–3 grupos de freelancers, devs y diseñadores MX **con una pregunta**, no con el link
- [ ] Compartir desde el perfil personal del fundador
- [ ] Actualizar el link de la bio de Instagram antes de publicar el espejo
- [ ] Anotar en §6 de `model-bank.md` que el link #1 de noviembre quedó gastado

Respuestas preparadas:

- Si alguien dice «el SAT no cobra hasta que cobras»: «Exacto: eso es PPD. El
  problema es la factura que dice PUE cuando el dinero no había llegado.»
- Si alguien dice «yo facturo antes de cobrar»: «Entonces PPD es la que coincide
  con el dinero. El complemento de pago es el que cierra la factura cuando llega.»
- Si alguien dice «yo siempre pongo PUE»: «Entonces la factura dice que ya te
  pagaron. Si el dinero llega después, el SAT lo cuenta hoy.»
- Si alguien pregunta cómo se corrige: «El complemento de pago es el evento que
  conecta la factura vieja con el dinero nuevo.»

---

## 8. Verificaciones antes de publicar

- [x] `source=blog_pue_vs_ppd` existe en `CONTEXTUAL_COPY` (`components/waitlist-dialog.tsx`)
- [x] Copy contextual de `blog_pue_vs_ppd` reescrito sin implicar la situación del espectador (§1)
- [ ] `/blog/pue-vs-ppd-diferencia-facturar-cobrar` responde en producción con `?source=blog_pue_vs_ppd`
- [x] El CTA interno de las calculadoras reenvía el `source` entrante sin volver dinámicas las rutas: `components/waitlist-cta.tsx` lo resuelve en cliente y las dos páginas siguen marcadas `○ (Static)` en el build (2026-11-01)
- [ ] Placas renderizadas en orden `pue-ppd-1..5.png`
- [ ] Primer comentario publicado **y fijado** el lunes 2 nov
- [ ] Link de bio de Instagram actualizado antes del espejo
- [ ] `npm run lint` + `npx tsc --noEmit` (si se toca `CONTEXTUAL_COPY`)

---

## 9. Cumplimiento

- [x] Una sola idea: facturado no es cobrado; el método de pago describe el dinero
- [x] Sin «paga menos», «optimiza», «evita multas», «garantizamos», «declaramos por ti», «agenda una demo»
- [x] No afirma ni implica la situación financiera del espectador (el marco es condicional: «con el método de pago equivocado…»)
- [x] Terminología precisa: la retención no aplica aquí; se habla de **método de pago** (término del CFDI, decidido el 2026-11-02), **cobro** y **complemento de pago**
- [x] La placa 2 **no es un acertijo**: la pregunta se responde en comentarios, no en la placa 5. La pieza enseña antes de cerrar con el desglose
- [x] El modelo mental y la frase ancla están en el **cuerpo del estático**, no solo en el arte
- [x] Mismo ejemplo que las semanas 1 y 2 (secuela reconocible)
- [x] Supuestos explícitos junto a las cifras
- [x] Link fuera del cuerpo del post y dentro del presupuesto de 2 links/mes
- [x] CTA de la pieza: «Sigue a Fiscalio»
- [x] `dialog=open` solo en el estático del miércoles
- [x] Sin Reel ni pieza que dependa de que algo quede oculto
- [x] Español MX

---

## 10. Registro al cierre (viernes 6 nov)

Llenar la fila 3 de la tabla §6 de
[`model-bank.md`](../../../docs/organic-social-como-piensa-el-sat_20261019/model-bank.md):
alcance · guardados · compartidos · clics · `waitlist_dialog_opened` ·
`waitlist_signup` · notas.

Desde esta semana los dos eventos de waitlist llevan `utm_*` en el propio evento
(2026-10-31), así que la lectura se hace por `utm_content`:

> GA4 → Explorar → Exploración libre, filas `Contenido del anuncio manual de la
> sesión`, columnas `Nombre del evento`, filtro `waitlist_(dialog_opened|signup)`,
> 2–6 nov. Las filas `org-26w45-*` son esta semana.

Comparar contra la semana 2 (84 visualizaciones, 1 guardado, 1 compartido, 1
apertura, 1 alta) y contra la línea base de la semana 1.
