# Semana 2 — «Lo que te retienen ya es un pago a cuenta»

Modelo mental de la semana: **te depositan menos, pero no te pagaron menos**.
Tu cliente llena una parte de tus bóvedas antes de depositarte; lo que te retiene
cuenta como pago de tus impuestos.
Mismo ejemplo de la semana 1 ($50,000 + IVA), ahora con cliente persona moral.
Es la secuela prometida en la placa 5 del carrusel anterior.

Frase ancla: *«Te depositan menos. No te pagaron menos.»*
Frase de apoyo: *«Lo que te retienen cuenta como pago de tus impuestos.»*

Estado: **copy v3 listo para aprobación humana.** Cifras congeladas el
2026-10-20. Copy reescrito el 2026-10-23 (ver §1, D5). Assets aún no renderizados.

---

## 1. Decisiones cerradas (2026-10-20)

| # | Decisión | Resolución |
|---|---|---|
| D1 | Retención de IVA | Publicar **$5,333.35** y depósito **$52,041.65** (cifras de `RETENCION_IVA_PM: 0.106667`, las que muestra el destino). La pieza **no cita la tasa de IVA** |
| D2 | ISR retenido $625 vs. ISR del mes $550 | **Reabierta el 2026-10-23: se publica.** Los $75 de ISR retenido de más son el remate de la idea, no una segunda idea: completan «lo tuyo no cambió» ($49,375 + $75 = $49,450, la misma bóveda «Tuya» de la semana 1) |
| D3 | Instagram | **Espejo desde la semana 2**: mismo arte y copy, `utm_source=instagram`, link en bio. Cuenta a cargo del humano |
| D4 | Semana 1 | Carrusel y primer comentario **publicados** el 19 oct 2026 |
| D5 | Copy v3 (2026-10-23) | Se dejan de usar «cobro» y «anticipo» en el copy público. «Cobro» refuta una creencia que el lector no tiene (piensa «me descontaron»); «anticipo», para un freelancer, es lo que el cliente paga al arrancar un proyecto. La bóveda 3 vuelve a ser **«Tuya»**, no «Tu depósito». El reto pregunta **cuánto es tuyo**, no cuánto te retuvieron |

**Por qué no se cita la tasa de IVA:** el sitio muestra cuatro valores distintos
(10.6% en el simulador, 10.66% en metadata, 10.6667% en la guía, 10.67% en el
resultado). Citar montos evita elegir uno y no pierde nada pedagógico.

**Deuda técnica registrada (no bloquea):** unificar la tasa de retención de IVA
en todo el sitio y evaluar el cálculo exacto como `IVA × 2/3` en
`lib/tax-calculator.ts`. Post-campaña.

---

## 2. Assets

| Asset | Ruta | Spec |
|---|---|---|
| Carrusel, 5 placas | `~/Projects/fiscalio-product-demo/out/social/retenciones-1..5.png` | 1080×1350 (4:5) |
| Estático | `~/Projects/fiscalio-product-demo/out/social/retenciones-estatico.png` | 1080×1350 (4:5) |

Proyecto: `~/Projects/fiscalio-product-demo/` (Remotion). Carrusel y estático
salen de `src/social/retenciones/` (placas, estático y datos). **No se produce
Reel esta semana** (restricción vigente: estáticos y carruseles únicamente).

**Reel de la semana 2: pendiente** (decisión del 2026-10-23). Se produce cuando
exista capacidad, con las placas v2 como guion (gancho → reto → bóvedas →
desglose → «Lo tuyo: $49,450»). Ver la tarea de Phase 4 en `plan.md`.

Paleta: fondo `#fcfaf6` · texto `#262626` · rust `#b45309` · ámbar `#fbbf24`.
Sin gradientes ni sombras.

---

## 3. Orden y fechas de publicación

| Día | Pieza | Objetivo | Destino |
|---|---|---|---|
| **Lunes 26 oct** | Carrusel de 5 placas | Alcance + guardados | Link en primer comentario → `/calculadora-resico/retenciones` |
| **Miércoles 28 oct** | Estático | Captura de email | `/calculadora-resico/retenciones?dialog=open&source=modelo_retenciones` |
| **Viernes 30 oct** | Post de conversación | Comentarios | **Sin link** |

Espejo en Instagram: mismo arte y copy, mismo día, `utm_source=instagram`.

---

## 4. Copy aprobado (v3)

### Terminología fija de la cápsula

| Verbo | Quién | Qué significa |
|---|---|---|
| **Retener** | Tu cliente | Aparta una parte del pago. No te la descuenta ni se la queda |
| **Enterar** | Tu cliente | Lleva ese dinero al SAT a tu nombre |
| **Acreditar** | Tú | En tu declaración, ese dinero cuenta como pago de tus impuestos del mes |

**Nunca se dice «ya está pagado al SAT»:** adelanta un paso que el cliente no
hace al momento del depósito y hace creer que la retención es un pago suyo. Se
dice **«te lo retuvieron»** y, cuando aplica, **«lo entera al SAT a tu nombre»**.

**Palabras fuera del copy público:**

| No se dice | Por qué | Se dice |
|---|---|---|
| «No es un cobro» / «Retenido, no cobrado» | Nadie cree que su cliente le cobró. La creencia real es «me descontaron» o «me pagaron menos» | «No te pagaron menos» · «Retenido a tu favor» |
| «Es un anticipo» (suelto) | Para un freelancer, «anticipo» es el pago que recibe al arrancar un proyecto | «Cuenta como pago de tus impuestos» |
| «Tu depósito» como bóveda | En la semana 1 el depósito es lo que se reparte, no una bóveda | Bóveda 3 · **Tuya** |

### Carrusel — cuerpo del post

```
Le facturas $58,000 a una empresa y el depósito llega en $52,041.65.

Se siente como si te hubieran descontado casi $6,000. No te pagaron menos: tu cliente retuvo una parte y la entera al SAT a tu nombre. Cuenta como pago de tus impuestos.

Con las mismas 3 bóvedas de siempre:
→ Bóveda 1 · IVA: tu cliente pone una parte y tú el resto.
→ Bóveda 2 · ISR: tu cliente la llena completa.
→ Bóveda 3 · Tuya: lo que sí puedes gastar.

Sin hacer la cuenta: ¿cuánto de esa factura es tuyo? Escríbelo en los comentarios. La respuesta está en la última imagen.

Te depositan menos. No te pagaron menos.

(Ejemplo: RESICO persona física, cliente persona moral, $50,000 + IVA como único ingreso del mes, sin gastos deducibles.)
```

El cuerpo **no da la respuesta**: ni los $49,450 ni el desglose de la bóveda
«Tuya». Esa cifra vive en la placa 5 y en las respuestas a comentarios.

### Carrusel — primer comentario (Facebook)

```
Calcula tus retenciones con tus propios números → https://www.fiscalio.app/calculadora-resico/retenciones?source=modelo_retenciones&utm_source=facebook&utm_medium=organic_social&utm_campaign=como-piensa-el-sat&utm_content=modelo-02-retenciones-carrusel
```

### Estático — cuerpo del post

```
Una factura de $58,000. Un depósito de $52,041.65.

No te pagaron menos. Tu cliente retuvo $5,958.35 y los entera al SAT a tu nombre: cuentan como pago de tus impuestos del mes.

Reparte la factura en las 3 bóvedas y lo tuyo sale igual que si no te hubieran retenido nada: $49,450.

El desglose completo, con tus propios números, está en el primer comentario.

Sigue a Fiscalio: un modelo mental fiscal cada semana.
```

Arte del estático: **$52,041.65** · «Te depositan menos. No te pagaron menos.» ·
recibo de la factura a la bóveda «Tuya» · pie: wordmark + «Un modelo mental fiscal cada
semana». **Sin «Sigue a Fiscalio» en el arte:** el CTA ya cierra el cuerpo del post
y el trabajo del estático es captar email.

### Estático — primer comentario (Facebook)

```
Calcula tus retenciones y mira el desglose completo → https://www.fiscalio.app/calculadora-resico/retenciones?dialog=open&source=modelo_retenciones&utm_source=facebook&utm_medium=organic_social&utm_campaign=como-piensa-el-sat&utm_content=modelo-02-retenciones-estatico
```

### Conversación — viernes 30 oct

Sin link.

```
Pregunta para quien factura a empresas: cuando el depósito llega más chico que la factura, ¿qué es lo primero que revisas?

La respuesta que sirve: el CFDI. Ahí viene el desglose de lo que tu cliente te retuvo y entera al SAT a tu nombre.

Lo que te retienen cuenta como pago de tus impuestos.

¿A ti te lo explicaron como un descuento o como un pago de tus impuestos?
```

### Instagram (espejo)

Mismo arte y mismo cuerpo, con dos cambios:

- La línea «está en el primer comentario» pasa a «está en la bio».
- El primer comentario puede llevar la pregunta, **nunca el link** (no es clicable).

Link de bio:

```
https://www.fiscalio.app/calculadora-resico/retenciones?source=modelo_retenciones&utm_source=instagram&utm_medium=organic_social&utm_campaign=como-piensa-el-sat&utm_content=modelo-02-retenciones-carrusel
```

Para el estático, mismo patrón con `dialog=open` y
`utm_content=modelo-02-retenciones-estatico`.

---

## 5. Estructura del carrusel (5 placas)

| Placa | Contenido |
|---|---|
| 1 | `FACTURAS A UNA EMPRESA` · «Te depositan» **$52,041.65** · «Te depositan menos. No te pagaron menos.» · base: «$50,000 + IVA 16% = $58,000 facturados» |
| 2 | `EL RETO` · «Te depositaron $52,041.65. ¿Cuánto de esa factura es tuyo?» · «Sin hacer la cuenta, ¿cuánto dirías? Escríbelo en los comentarios.» |
| 3 | `EL MODELO` · titular «Las mismas 3 bóvedas. Tu cliente llenó una parte.» · IVA **$8,000.00** (tu cliente $5,333.35 · tú $2,666.65) · ISR **$550.00** (tu cliente $625.00: cubierta) · Tuya **$ ?** |
| 4 | `EL DESGLOSE` · supuestos arriba · tabla de la factura a la bóveda «Tuya» · fila «ISR a favor +$75.00» sin subtexto (el porqué ya está en la placa 3) · última fila «Tuya: $ ?» |
| 5 | `LA RESPUESTA` · «Lo tuyo» **$49,450.00** · «Lo mismo que sin retenciones.» · «$49,375 llegan a tu cuenta y $75 de ISR quedan a tu favor.» · «Sigue a Fiscalio» |

**Por qué las bóvedas cierran:** son las mismas de la semana 1 (IVA $8,000 · ISR
$550 · Tuya $49,450). Lo único que cambia es **quién las llena**: tu cliente pone
$5,333.35 de IVA y $625 de ISR antes de depositarte. Ese es el «mismo objeto, un
dato cambiado».

**Colores con un solo significado en toda la pieza:** gris = lo puso tu cliente ·
rust = lo pones tú · ámbar = tuyo. Lo retenido nunca va en ámbar.

**Etiquetas:** la bóveda 2 se llama **«ISR»** y muestra $550 (el ISR del mes);
debajo, «Tu cliente: $625». Así el retenido no se confunde con lo que debes.

---

## 6. Cifras y supuestos (verificados contra `lib/tax-constants.ts`)

Supuestos: RESICO persona física · cliente persona moral · servicios · $50,000 +
IVA como único ingreso del mes · sin gastos deducibles · IVA 16% · ISR RESICO
1.10% · retención ISR 1.25% · retención IVA `0.106667`.

| Concepto | Monto |
|---|---|
| Subtotal | $50,000.00 |
| IVA 16% | +$8,000.00 |
| Total facturado | $58,000.00 |
| Retención de ISR (1.25%) | −$625.00 |
| Retención de IVA | −$5,333.35 |
| **Depósito** | **$52,041.65** |
| IVA que tú enteras ($8,000 − $5,333.35) | −$2,666.65 |
| **En tu cuenta, ya tuyo** | **$49,375.00** |
| ISR del mes (1.10%) | $550.00 |
| ISR a favor ($625 retenidos − $550 del mes) | +$75.00 |
| **Tuya** | **$49,450.00** |
| Retenido total (referencia, no es la respuesta) | $5,958.35 |

No se publica la tasa de retención de IVA ni la tasa de ISR RESICO (1.10%); sí se
publica la de retención de ISR (1.25%) en la tabla.

---

## 7. Rutina de la primera hora

- [ ] Publicar el primer comentario con el link **inmediatamente** y **fijarlo**
- [ ] Responder cada número comentado con el desglose («Casi: lo tuyo es $49,450, lo mismo que sin retenciones. $49,375 llegan a tu cuenta y $75 de ISR quedan a tu favor»)
- [ ] Compartir en 2–3 grupos de freelancers, devs y diseñadores MX **con una pregunta**, no con el link
- [ ] Compartir desde el perfil personal del fundador
- [ ] Actualizar el link de la bio de Instagram antes de publicar el espejo

Respuesta preparada si alguien responde con lo retenido ($5,958.35): «Eso es lo
que tu cliente retuvo, y cuenta como pago de tus impuestos. La pregunta es cuánto
es tuyo: $49,450, igual que si no te retuvieran nada.»

Respuesta preparada si alguien pregunta cómo recupera los $75: «Es ISR que tu
cliente retuvo de más. Queda a tu favor en tu declaración; con tus números exactos,
la calculadora te dice cuánto.»

---

## 8. Verificaciones antes de publicar

- [x] `source=modelo_retenciones` dado de alta en `CONTEXTUAL_COPY` (`components/waitlist-dialog.tsx`)
- [x] Cifras cruzadas contra `lib/tax-constants.ts`
- [ ] `/calculadora-resico/retenciones` responde en producción con `source` y sin `dialog=open`
- [ ] Placas renderizadas en orden `retenciones-1..5.png`
- [ ] Primer comentario publicado **y fijado** el lunes 26
- [ ] Link de bio de Instagram actualizado antes del espejo
- [ ] `npm run lint` + `npx tsc --noEmit` (cambio de `CONTEXTUAL_COPY`)

---

## 9. Cumplimiento

- [x] Una sola idea: te depositan menos, pero no te pagaron menos (lo tuyo no cambia)
- [x] Terminología correcta: **retener** (cliente) · **enterar** (cliente al SAT) · **acreditar** (tú en la declaración). Nunca «ya está pagado al SAT»
- [x] Sin «cobro» ni «anticipo» suelto en el copy público (D5)
- [x] El cuerpo del carrusel no revela la respuesta del reto
- [x] Mismo ejemplo y mismo objeto visual que la semana 1 (secuela reconocible)
- [x] Sin frases vetadas («paga menos», «optimiza», «evita multas», «garantizamos», «declaramos por ti», «agenda una demo»)
- [x] No afirma ni implica la situación financiera del espectador
- [x] Supuestos explícitos junto a las cifras
- [x] Link fuera del cuerpo del post (primer comentario en FB, bio en IG)
- [x] CTA de la pieza: «Sigue a Fiscalio» (en el arte de la placa 5; en el estático, solo en el cuerpo del post)
- [x] `dialog=open` solo en el estático del miércoles
- [x] Sin Reel ni pieza que dependa de que algo quede oculto
- [x] Español MX

---

## 10. Registro al cierre (viernes 30 oct)

Llenar la fila 2 de la tabla §6 de
[`model-bank.md`](../../../docs/organic-social-como-piensa-el-sat_20261019/model-bank.md):
alcance · guardados · compartidos · clics · `waitlist_dialog_opened` ·
`waitlist_signup` · notas. Comparar contra la línea base de la semana 1.
