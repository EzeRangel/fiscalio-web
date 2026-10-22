# Semana 2 — «Lo que te retienen ya es un pago a cuenta»

Modelo mental de la semana: **la retención no es un cobro, es un anticipo**.
Mismo ejemplo de la semana 1 ($50,000 + IVA), ahora con cliente persona moral.
Es la secuela prometida en la placa 5 del carrusel anterior.

Frase ancla: *«Lo que te retienen no es un cobro: es un anticipo.»*

Estado: **copy v2 listo para aprobación humana.** Cifras congeladas el
2026-10-20. Terminología corregida el 2026-10-20. Assets aún no renderizados.

---

## 1. Decisiones cerradas (2026-10-20)

| # | Decisión | Resolución |
|---|---|---|
| D1 | Retención de IVA | Publicar **$5,333.35** y depósito **$52,041.65** (cifras de `RETENCION_IVA_PM: 0.106667`, las que muestra el destino). La pieza **no cita la tasa de IVA** |
| D2 | ISR retenido $625 vs. ISR del mes $550 | **Omitir la comparación.** Placa 5 cierra el bucle con «retenido, no cobrado» + «se abona a tus impuestos del mes» |
| D3 | Instagram | **Espejo desde la semana 2**: mismo arte y copy, `utm_source=instagram`, link en bio. Cuenta a cargo del humano |
| D4 | Semana 1 | Carrusel y primer comentario **publicados** el 19 oct 2026 |

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
salen de `src/social/cards/` y `src/social/data.ts`. **No se produce Reel esta
semana** (restricción vigente: estáticos y carruseles únicamente).

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

## 4. Copy aprobado (v2)

### Terminología fija de la cápsula

| Verbo | Quién | Qué significa |
|---|---|---|
| **Retener** | Tu cliente | Aparta una parte del pago. No te la cobra ni se la queda |
| **Enterar** | Tu cliente | Lleva ese dinero al SAT a tu nombre |
| **Acreditar** | Tú | En tu declaración, ese dinero se abona a tus impuestos del mes |

**Nunca se dice «ya está pagado al SAT»:** adelanta un paso que el cliente no
hace al momento del depósito y hace creer que la retención es un pago suyo. Se
dice **«te lo retuvieron»** y, cuando aplica, **«lo entera al SAT a tu nombre»**.

### Carrusel — cuerpo del post

```
El mismo ejemplo de la semana pasada, ahora con un cliente distinto.

Precio: $50,000 + IVA. Total facturado: $58,000. Si el cliente es una empresa, el depósito llega así: $52,041.65.

Antes de ver el desglose: sin hacer la cuenta, ¿cuánto dirías que te retuvieron? Escríbelo en los comentarios.

La primera reacción es pensar que faltan $5,958.35. No faltan: te los retuvieron.

Tu cliente no se los quedó. Los retuvo y los entera al SAT a tu nombre:
→ $5,333.35 de IVA
→ $625.00 de ISR (1.25%)

Retener no es cobrar: es un anticipo que tu cliente hace por ti. Se abona a tus impuestos del mes.

El depósito es más chico. El pago, no.

El hábito: cuando el depósito llegue más chico de lo facturado, revisa el CFDI antes de preocuparte. Ahí viene lo que te retuvieron.

(Ejemplo: RESICO persona física, cliente persona moral, sin gastos deducibles.)
```

### Carrusel — primer comentario (Facebook)

```
Calcula tus retenciones con tus propios números → https://www.fiscalio.app/calculadora-resico/retenciones?source=modelo_retenciones&utm_source=facebook&utm_medium=organic_social&utm_campaign=como-piensa-el-sat&utm_content=modelo-02-retenciones-carrusel
```

### Estático — cuerpo del post

```
Una factura de $58,000. Un depósito de $52,041.65.

Faltan $5,958.35. No se perdieron: te los retuvieron.

Tu cliente los retuvo y los entera al SAT a tu nombre. No es un cobro: es un anticipo que se abona a tus impuestos del mes.

Es la diferencia entre ver un depósito más chico y creer que te cobraron de más.

El desglose completo, con tus propios números, está en el primer comentario.

Sigue a Fiscalio: un modelo mental fiscal cada semana.
```

Arte del estático: **$52,041.65** · «Te los retuvieron. No te los cobraron.» ·
«Retenido, no cobrado.» · «Sigue a Fiscalio».

### Estático — primer comentario (Facebook)

```
Calcula tus retenciones y mira el desglose completo → https://www.fiscalio.app/calculadora-resico/retenciones?dialog=open&source=modelo_retenciones&utm_source=facebook&utm_medium=organic_social&utm_campaign=como-piensa-el-sat&utm_content=modelo-02-retenciones-estatico
```

### Conversación — viernes 30 oct

Sin link.

```
Pregunta para quien factura a empresas: cuando el depósito llega más chico que la factura, ¿qué es lo primero que revisas?

La respuesta que sirve: el CFDI. Ahí viene el desglose de lo que tu cliente te retuvo y entera al SAT a tu nombre.

Retener no es cobrar: es un anticipo.

¿A ti te las explicaron como un cobro o como un anticipo?
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
| 1 | `MISMO EJEMPLO · AHORA CON EMPRESA` · **$52,041.65** · «Te depositan menos. No te pagaron menos.» · base: «$50,000 + IVA 16% = $58,000 facturados» |
| 2 | `EL RETO` · «De esos $58,000, ¿cuánto te retuvieron?» · «Sin hacer la cuenta, ¿cuánto dirías? Escríbelo en los comentarios.» |
| 3 | `EL MODELO` · las 3 bóvedas, con el mismo objeto de la semana 1: Retención de IVA **$5,333.35** · Retención de ISR **$625.00** · Tu cuenta **$52,041.65**. Sello «RETENIDO: $ ?» sobre las dos primeras. Titular: «Retener no es cobrar.» |
| 4 | `EL DESGLOSE` · supuestos arriba · tabla · última fila «Retenido: $ ?» |
| 5 | `LA RESPUESTA` · **$5,958.35** · «Retenido, no cobrado.» · «Tu cliente lo retuvo y lo entera al SAT a tu nombre. Es un anticipo que se abona a tus impuestos del mes.» · hábito · «Sigue a Fiscalio» |

**Por qué las tres bóvedas suman exacto:** $5,333.35 + $625.00 + $52,041.65 =
$58,000. La bóveda de IVA baja de $8,000 (semana 1) a $5,333.35 porque el tercio
restante **sí llega a tu cuenta**. Ese es el «mismo objeto, un dato cambiado»:
no hay que rediseñar nada.

**Etiquetas:** la bóveda dice **«Retención de ISR»**, no «ISR». La semana 1 mostró
$550 de ISR del mes; esta pieza muestra $625 retenidos. No son el mismo concepto y
no deben parecerlo.

**Lo que no se dibuja:** el ISR del mes ($550) ni la comparación con los $625.
No es el tema de la semana y abre una segunda idea.

---

## 6. Cifras y supuestos (verificados contra `lib/tax-constants.ts`)

Supuestos: RESICO persona física · cliente persona moral · servicios · sin gastos
deducibles · IVA 16% · retención ISR 1.25% · retención IVA `0.106667`.

| Concepto | Monto |
|---|---|
| Subtotal | $50,000.00 |
| IVA 16% | +$8,000.00 |
| Total facturado | $58,000.00 |
| Retención de ISR (1.25%) | −$625.00 |
| Retención de IVA | −$5,333.35 |
| **Depósito** | **$52,041.65** |
| **Retenido** | **$5,958.35** |

No se publica la tasa de retención de IVA. El ISR del mes ($550) no se publica en
esta cápsula.

---

## 7. Rutina de la primera hora

- [ ] Publicar el primer comentario con el link **inmediatamente** y **fijarlo**
- [ ] Responder cada número comentado con el desglose («Casi: te retuvieron $5,958.35, por eso el depósito es $52,041.65»)
- [ ] Compartir en 2–3 grupos de freelancers, devs y diseñadores MX **con una pregunta**, no con el link
- [ ] Compartir desde el perfil personal del fundador
- [ ] Actualizar el link de la bio de Instagram antes de publicar el espejo

Respuesta preparada si alguien saca la comparación del ISR (no publicarla como
nota): «Retuvieron $625 y tu ISR del mes es $550: los $75 quedan a favor. Por eso
la retención no es un cobro, es un anticipo.»

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

- [x] Una sola idea: la retención es un anticipo, no un cobro
- [x] Terminología correcta: **retener** (cliente) · **enterar** (cliente al SAT) · **acreditar** (tú en la declaración). Nunca «ya está pagado al SAT»
- [x] Mismo ejemplo y mismo objeto visual que la semana 1 (secuela reconocible)
- [x] Sin frases vetadas («paga menos», «optimiza», «evita multas», «garantizamos», «declaramos por ti», «agenda una demo»)
- [x] No afirma ni implica la situación financiera del espectador
- [x] Supuestos explícitos junto a las cifras
- [x] Link fuera del cuerpo del post (primer comentario en FB, bio en IG)
- [x] CTA de la pieza: «Sigue a Fiscalio»
- [x] `dialog=open` solo en el estático del miércoles
- [x] Sin Reel ni pieza que dependa de que algo quede oculto
- [x] Español MX

---

## 10. Registro al cierre (viernes 30 oct)

Llenar la fila 2 de la tabla §6 de
[`model-bank.md`](../../../docs/organic-social-como-piensa-el-sat_20261019/model-bank.md):
alcance · guardados · compartidos · clics · `waitlist_dialog_opened` ·
`waitlist_signup` · notas. Comparar contra la línea base de la semana 1.
