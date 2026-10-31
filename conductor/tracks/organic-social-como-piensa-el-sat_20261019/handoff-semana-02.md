# Handoff — Semana 2 · «Lo que te retienen ya es un pago a cuenta»

> **Este documento es autosuficiente.** No necesitas leer la conversación donde se
> creó la campaña ni ningún otro archivo para empezar. Todo lo que necesitas está
> aquí o referenciado con ruta exacta.
>
> Estado: **listo para escribir copy.** Bloqueado solo por las 2 decisiones de §6.
> Fecha de este handoff: 2026-10-19. HEAD: `937d7c6` (árbol limpio).
>
> **Actualización 2026-10-20 — terminología.** Donde este documento diga «ya está
> pagado al SAT» o «ya le pagó al SAT por ti», leer **«te lo retuvieron»**. La
> retención se **retiene** (el cliente aparta), se **entera** (el cliente la lleva
> al SAT a tu nombre) y se **acredita** (tú la abonas en tu declaración). No es un
> pago que hace el cliente: es un anticipo a tu cuenta.

---

## 1. Resumen para empezar

| | |
|---|---|
| **Qué es** | Campaña orgánica de Facebook, serie «Cómo piensa el SAT» |
| **Objetivo** | Awareness y enseñanza. **No vende.** |
| **Regla central** | Un modelo mental por semana. El modelo **se repite, no se acumula** |
| **Público** | Personas físicas en RESICO, México |
| **Cadencia** | 1 pieza bandera (carrusel) + 2 de apoyo por semana |
| **Semana actual** | 2 de 6 · 26–30 de octubre de 2026 |
| **Modelo de la semana** | Lo que te retienen ya es un pago a cuenta |
| **Frase ancla** | *«Lo que te retienen no es un cobro: es un anticipo.»* |
| **Destino** | `/calculadora-resico/retenciones` |
| **`source` nuevo** | `modelo_retenciones` (no existe todavía) |

La semana 2 **no es una semana más**: es una promesa pública. La placa 5 del
carrusel de la semana 1 cierra con *«Si le facturas a una empresa, el depósito
llega distinto; de eso va el próximo post.»* Ese post es este.

---

## 2. La frontera de la marca (no negociable)

Fiscalio vende **claridad**. La categoría vende **miedo**. La diferenciación es
toda la campaña, así que esto no se estiliza.

- **Enseñamos cómo funciona el sistema, no cómo llenar el portal.** El «cómo
  declarar» es del contador; el «por qué funciona así» es nuestro.
- **No nos posicionamos como contador, ni como sustituto, ni contra él.**
- **Nunca se afirma ni se implica la situación financiera del espectador.**
  Regla de plataforma de Meta (atributos personales) y de marca a la vez.
- **Sin miedo y sin culpa.** Se habla del error en general, jamás de la conducta
  fiscal de quien lee.
- **Nada de tecnicismos sin traducir.** Es el punto entero de la serie.

### Frases vetadas (aplican a orgánico también)

`paga menos impuestos` · `optimiza tus impuestos` · `evita multas` ·
`garantizamos` · `declaramos por ti` · `agenda una demo`

### Reglas de plataforma

- **El link NUNCA va en el cuerpo del post.** Destruye el alcance. Va en el
  **primer comentario** — dentro del **presupuesto de 2 links al mes** de la
  Página (§2.1 de
  [`model-bank.md`](../../../docs/organic-social-como-piensa-el-sat_20261019/model-bank.md)):
  cuando el tope aprieta, solo el carrusel bandera lleva link y el resto remite al
  post fijado.
- **El CTA dentro de la pieza es «Sigue a Fiscalio»**, no un link. La página
  arrancó con 0 seguidores y el objetivo de la fase es seguidores.
- **Una sola idea.** Si el copy necesita un «y además», está fuera de alcance.

---

## 3. Estado real del proyecto

### Lo que está hecho y verificado

| Elemento | Estado |
|---|---|
| Serie y nombre | ✅ «Cómo piensa el SAT» |
| Banco de 14 modelos mentales | ✅ `docs/…/model-bank.md` |
| Convención UTM de orgánico | ✅ §1 de `model-bank.md` |
| Contrato de CTA | ✅ §2 de `model-bank.md` |
| Anatomía del carrusel (5 placas) | ✅ §5 de `model-bank.md` |
| Track de Conductor | ✅ registrado en `conductor/tracks.md` |
| Semana 1 publicada | ⚠️ asumido — **confirmar** (§10) |
| `source` `modelo_3_bovedas` en código | ✅ `2040496` |
| Fuentes auto-hospedadas (build sano) | ✅ `867b86b` + `937d7c6` |

### Historial relevante

```
937d7c6  chore(fonts): conservar solo el subset latin
867b86b  fix(fonts): auto-hospedar Geist, Geist Mono y DM Sans
ed968c6  docs(organic): registrar que el collage de Facebook no oculta la placa 5
8823e88  conductor(track): campaña orgánica «Cómo piensa el SAT»  ← tiene git notes
2040496  feat(waitlist): copy contextual para el modelo de las 3 bóvedas
dde8e0a  fix(calculadora-resico): corregir typo «módelo»
```

> El commit `8823e88` tiene **`git notes`** con el detalle completo de las
> decisiones fundacionales. Léelo con
> `git notes show 8823e88` antes de escribir.

### Detalle crítico aprendido en la semana 1: el collage no funciona

Se probó el truco de publicar 4 placas y dejar la 5ª oculta tras el «+1» para
crear suspenso. **No funciona**: Facebook mostró las 5 placas y no ocultó nada.
El suspenso entre pregunta y respuesta no existe.

**Regla para las semanas 2–6:** no diseñar ninguna pieza que dependa de que algo
quede oculto. El reto de la placa 2 tiene que funcionar **con todo a la vista**
— por eso pide una *intuición* («antes de hacer la cuenta, ¿cuánto dirías?») y no
un *cálculo*.

---

## 4. La tarea de la semana 2

Producir la **cápsula completa** del modelo de retenciones, replicando la
estructura de la semana 1:

| Día | Pieza | Objetivo | Destino |
|---|---|---|---|
| **Lunes 26 oct** | Carrusel de 5 placas (bandera) | Alcance + guardados | Sin link nuevo: el destino va en el **comentario fijado del carrusel del 19 oct** |
| **Miércoles 28 oct** | Estático (apoyo) | Captura de email vía post fijado | Sin link propio: remite al post fijado / bio de Instagram |
| **Viernes 30 oct** | Post de conversación | Comentarios | **Sin link** |

> **Presupuesto de links (2026-10-24).** Meta limita la Página a **2 links
> orgánicos al mes** y el tope **cuenta los comentarios**. Octubre ya está gastado
> por la semana 1 (carrusel 19 oct + comentario del Reel 21 oct), así que esta
> semana publica **sin link nuevo**. Regla y salidas en §2.1 de
> [`model-bank.md`](../../../docs/organic-social-como-piensa-el-sat_20261019/model-bank.md).

### El ángulo narrativo (secuela directa del mismo ejemplo)

Es el **mismo ejemplo de la semana 1**, ahora con cliente persona moral:

| | Semana 1 (cliente persona física) | Semana 2 (cliente persona moral) |
|---|---|---|
| Precio + IVA | $50,000 + $8,000 | $50,000 + $8,000 |
| Total en la factura | $58,000 | $58,000 |
| **Lo que te depositan** | **$58,000** | **$52,041.65** |
| Retención de ISR | — | −$625.00 |
| Retención de IVA | — | −$5,333.35 |
| Tu ISR del mes | −$550.00 | −$550.00 |

**El giro:** el depósito es menor, pero **no te falta dinero** — tu cliente
**retuvo** $5,958.35 y los **entera** al SAT a tu nombre. La retención no es un
cobro, es un **anticipo**. Estabas viendo un depósito más chico y creyendo que te
pagaron menos.

Ese es el «aha» y es **una sola idea**.

### Lo que NO debe tener la semana 2

- No es «cómo llenar la factura» ni «qué casilla marcar» (territorio del contador).
- No es «cómo pagar menos» (frase vetada, y no es lo que hace la retención).
- No es un segundo modelo mental. El ISR real vs. el retenido (§6.2) es
  información de soporte, **no el tema**.

---

## 5. El carrusel (pieza bandera) — plantilla aprobada

**5 placas en 4:5 (1080×1350).** Esta es la anatomía fija de las semanas 2–6.

| Placa | Función | En la semana 1 fue |
|---|---|---|
| 1 | **Gancho** — la cifra del depósito + la creencia que rompe, con su base explícita | «$58,000 · Pero no todo es tuyo.» |
| 2 | **Reto** — pregunta con respuesta numérica, pidiendo la *intuición* en comentarios | «¿Cuánto crees que te queda de verdad?» |
| 3 | **El modelo** — el objeto visual con la incógnita visible | Las 3 bóvedas con tanques |
| 4 | **Desglose** — tabla con los **supuestos arriba**; la incógnita sigue abierta | Tabla + «RESICO persona física, sin retenciones» |
| 5 | **Respuesta + hábito + CTA** («Sigue a Fiscalio») | «$49,450» + el hábito |

**Insistencia narrativa deliberada:** usar el mismo objeto visual (las 3 bóvedas).
La secuela es más potente si se reconoce la misma imagen con un dato cambiado.
No rediseñar el objeto.

---

## 6. ⛔ Decisiones que requieren al humano ANTES de escribir cifras

Estas dos no se resuelven escribiendo código ni copy. Pregúntale a la persona
antes de renderizar nada, porque cambian las cifras que se publican.

### 6.1 La retención de IVA: `0.106667` vs. `2/3` exacto

`lib/tax-constants.ts:5` define `RETENCION_IVA_PM: 0.106667`, que es una
**aproximación truncada** de 2/3 (el valor legal es 2/3 del IVA trasladado,
art. 1-A LIVA). La diferencia es de **2 centavos**:

| | Con la constante `0.106667` | Con 2/3 exacto |
|---|---|---|
| Retención de IVA | **$5,333.35** | $5,333.33 |
| Depósito total | **$52,041.65** | $52,041.67 |

**Por qué importa y no es trivial:** la calculadora — que es exactamente el
destino del link — usa la constante. Si el carrusel publica $52,041.67, quien
haga clic verá $52,041.65. Una discrepancia de 2 centavos en un tema fiscal
cuesta más en credibilidad de lo que aporta en precisión.

**Recomendación:** publicar las cifras de la constante (**$5,333.35** →
**$52,041.65**), que son las que la calculadora muestra. Corregir la constante
es un cambio de otro alcance, y hacerlo en medio de la campaña desincroniza todas
las piezas ya publicadas.

**Hallazgo colateral del repo (no bloquea, pero anótalo):** hay tres valores
distintos para la misma tasa en el sitio.

| Dónde | Dice |
|---|---|
| `components/tax-calculator/tax-calculator.tsx` (lo que ve el usuario) | **10.67%** (vía `formatPercent`) |
| `app/calculadora-resico/retenciones/page.tsx` (líneas 131, 145, 173, 206) | 10.6667% |
| `app/calculadora-resico/retenciones/page.tsx` (metadata, línea 13) | 10.66% |
| `app/calculadora-resico/page.tsx:180` | 10.66% |

Si el carrusel va a citar la **tasa** (y no solo el monto), copiar la que muestra
el destino, no la de la metadata.

### 6.2 El ISR retenido ($625) es mayor que tu ISR del mes ($550)

Con $50,000 en RESICO (tramo 1.10%), tu ISR es **$550**. Pero la retención de ISR
de un cliente persona moral es 1.25% = **$625**. O sea: te retienen **$75 más**
de lo que debes, y esos $75 quedan **a tu favor**.

Es un dato excelente y verdadero… pero es **una segunda idea**, y la semana 1 ya
publicó el $550. Hay tres salidas y hay que elegir una:

1. **Omitirlo** (recomendado). El tema de la semana es «la retención es un
   anticipo», no «cuánto te devuelven». Menos es más.
2. **Mencionarlo como nota al pie**, con una línea, sin explicarlo.
3. **Convertirlo en el tema** — no: sería otro modelo mental y rompe la regla
   de una idea por semana.

**Riesgo real si se omite sin cuidado:** quien vio el $550 en la semana 1 puede
leer «te retienen $625» y creer que perdió $625. Si se omite, la placa 5 debe
cerrar el bucle explícitamente: la retención **cubre** tu ISR del mes, no se suma.

---

## 7. Cambios de código que sí son necesarios

Ninguno es ambiguo. Todos son mecánicos y ya tienen precedente exacto en la
semana 1.

### 7.1 Alta del `source` `modelo_retenciones`

En `components/waitlist-dialog.tsx`, el registro `CONTEXTUAL_COPY` tiene hoy 5
entradas (`modelo_3_bovedas`, `blog_sat_no_precarga`, `blog_pue_vs_ppd`,
`blog_exportacion_servicios`, `blog_declaracion_mensual`). Cualquier `source`
desconocido **no rompe**: cae al copy genérico.

Copia el patrón exacto de `modelo_3_bovedas` (que se añadió en `2040496`).
El copy debe ser contextual a la retención, no genérico. **Sin comentarios
inline** (convención del repo).

### 7.2 URL y UTMs

Convención de orgánico (distinta de la de paid: `utm_medium=paid_social`).
**Nunca `utm_term`.**

```
utm_source   = facebook
utm_medium   = organic_social
utm_campaign = como-piensa-el-sat
utm_content  = modelo-<NN>-<slug>-<formato>
```

`<formato>` ∈ `reel` · `carrusel` · `estatico` · `conversacion`

Referencia exacta de la semana 1 (carrusel):

```
https://www.fiscalio.app/calculadora-resico?source=modelo_3_bovedas&utm_source=facebook&utm_medium=organic_social&utm_campaign=como-piensa-el-sat&utm_content=modelo-01-tres-bovedas-carrusel
```

Para la semana 2, mismo patrón sobre `/calculadora-resico/retenciones`:

```
https://www.fiscalio.app/calculadora-resico/retenciones?source=modelo_retenciones&utm_source=facebook&utm_medium=organic_social&utm_campaign=como-piensa-el-sat&utm_content=modelo-02-retenciones-carrusel
```

**No usar `dialog=open` en la pieza bandera.** El modal no debe abrirse solo: la
pieza es de enseñanza, y `source` por sí solo ya da atribución y copy contextual.
`dialog=open` sí se usa en la **pieza de apoyo** (estático del miércoles), cuyo
objetivo explícito es capturar email.

> Nota para evitar confusión: `app/calculadora-resico/retenciones/page.tsx`
> pasa `source="calculadora_retenciones"` al componente `TaxCalculator`. Eso es
> la fuente de eventos internos de la calculadora y **no tiene nada que ver** con
> el `?source=` de la URL, que es el que lee la waitlist.

### 7.3 Registro de la semana

`model-bank.md` §6 tiene la tabla de registro semanal. **Ojo: sus filas están
desalineadas con el calendario de §4** — la fila 1 dice «3 bóvedas» pero las
filas 2–6 listan los modelos en otro orden (facturado ≠ cobrado, dos juegos, IVA
es un flujo, SAT interpreta, retenciones). Al ir a escribir, **corregir el orden
de la tabla para que coincida con §4** y llenar la fila de la semana 1.

---

## 8. Producción de los assets

Los assets **no se generan en este repo**, se generan en el proyecto de Remotion.

| | |
|---|---|
| **Proyecto** | `~/Projects/fiscalio-product-demo/` |
| **Placas 4:5** | `src/social/cards/Card1..5.tsx` → `out/social/bovedas-1..5.png` |
| **Datos del modelo** | `src/social/data.ts` |
| **Reel 9:16** | `src/social/reel/*` → `out/BovedasReel.mp4` |
| **Storyboard aprobado (v3)** | `storyboard/storyboard-bovedas-facebook.html` |

Carrusel y Reel salen del **mismo código y los mismos datos**. Para las semanas
2–6 solo se produce el carrusel; el Reel se agrega cuando exista capacidad, y
solo se graba si el humano lo aprueba (la restricción declarada es **estáticos y
carruseles únicamente**, sin grabación nueva).

`app/admin/meta-creatives/page.tsx` queda como respaldo para estáticos sueltos
(1:1, 4:5, 9:16 con safe zone). No es la vía principal.

**Paleta (de `docs/DESIGN.md`, ya aplicada en la semana 1):**
fondo `#fcfaf6` · texto `#262626` · rust `#b45309` · ámbar `#fbbf24`.
Sin gradientes ni sombras.

---

## 9. Definición de terminado

- [ ] Copy del carrusel (placas 1–5) escrito y aprobado por el humano
- [ ] Copy del estático (miércoles) y del post de conversación (viernes)
- [ ] Link publicado según el **presupuesto de §2.1** (comentario del carrusel **o** comentario adicional en el hilo de la pieza ancla), con `source` + UTMs, **fuera** del cuerpo del post
- [ ] `modelo_retenciones` dado de alta en `CONTEXTUAL_COPY`
- [ ] Assets renderizados en `~/Projects/fiscalio-product-demo/`
- [ ] Filas de la tabla §6 de `model-bank.md` corregidas y semana 1 registrada
- [ ] `plan.md`: marcar las tareas de la Semana 2 en la Phase 2
- [ ] Cifras cruzadas contra `lib/tax-constants.ts` (§6.1 resuelto)
- [ ] Checklist de §7 de `model-bank.md` en verde

**Verificación de código** (no hay script de typecheck ni tests automáticos):

```bash
npm run lint
npx tsc --noEmit          # manual, no existe script
npm run build             # solo si se tocaron rutas, actions o fuentes
```

---

## 10. Confirma con el humano antes de asumir

Lo de la semana 1 está asumido, no verificado. Pregunta:

1. ¿El carrusel de la semana 1 se publicó? ¿El Reel del miércoles?
2. ¿El **link** quedó publicado **y fijado**? ¿Y el compositor dejaba publicar links en octubre, o ya mostraba el tope de 2 al mes?
3. ¿Se aplicó el ajuste de copy de la placa 2?
   `Antes de ver la última imagen, escribe en los comentarios cuánto crees que te queda.`
   → `Sin hacer la cuenta, ¿cuánto dirías que te queda? Escríbelo en los comentarios.`
4. ¿Las cifras de la semana 1 están llenas en `model-bank.md` §6?

### Pregunta abierta heredada: Instagram

Se recomendó crear Instagram **ahora**, como **espejo** (solo publicar), dejando
Facebook como frente principal. Razones: los comentarios de IG no son clicables,
no hay Grupos, y a 0 seguidores los verdaderos motores son el perfil personal del
fundador y los Grupos de Facebook.

**El humano no ha decidido.** Si aprueba, hay que añadir `utm_source=instagram` a
la convención de §1 de `model-bank.md` y actualizar la sección de canales — antes
de publicar la semana 2, no después.

---

## 11. Expectativas reales (para no malinterpretar la semana 2)

Una página de Facebook nueva tiene **alcance orgánico cercano a cero**. Los
motores reales son: el perfil personal del fundador, los Grupos de Facebook
(los competidores venden «desde $350/mes» ahí), el cross-posting y la
consistencia. **Los primeros 30 días son de siembra, no de medición de ROI.**

KPIs de la fase: alcance · retención a 3 s (cuando haya video) · **guardados** ·
**compartidos** · clics al link · `waitlist_dialog_opened` · `waitlist_signup`.

**Los likes no son KPI.** El contador de seguidores es una métrica que se
debilita. La señal de que un modelo funciona son **guardados y compartidos**:
indican que el concepto se quedó y se quiso enseñar a alguien.

Un modelo que destaque se convierte en creativo de la campaña pagada
(`conductor/tracks/paid-acquisition-meta_20261005/`).

> ⚠️ **Límite de links confirmado (2026-10-24).** Meta limita la Página a
> **2 links orgánicos al mes** y el tope **incluye los comentarios**: el mecanismo
> de «link en el primer comentario» lo gasta igual. Reinicia el 1 de cada mes y no
> se acumula. Puede manifestarse de tres formas: el compositor avisa que no queda
> presupuesto, el link se publica como **texto plano** (sin clic) o el comentario
> se descarta. Las tres se ven como **0 clics sin explicación**: si el alcance se
> hunde o los clics quedan en cero, revisar el presupuesto de links antes que el
> copy. Regla, alternativas y topes por plan en §2.1 de
> [`model-bank.md`](../../../docs/organic-social-como-piensa-el-sat_20261019/model-bank.md).

---

## 12. Archivos clave

| Archivo | Qué contiene |
|---|---|
| [`model-bank.md`](../../../docs/organic-social-como-piensa-el-sat_20261019/model-bank.md) | **Activo central.** 14 modelos, calendario, contrato de CTA, UTMs, anatomía del carrusel, producción, registro semanal, checklist |
| [`semana-01.md`](semana-01.md) | **Plantilla exacta de una cápsula completa.** Copy aprobado, assets, fechas, estructura de placas, rutina de la primera hora, verificación, cumplimiento |
| [`spec.md`](spec.md) | Objetivo, frontera de posicionamiento, fases F0–F5, criterios de aceptación |
| [`plan.md`](plan.md) | Checklist por fases. Phase 2 = Semanas 2–3 |
| `lib/tax-constants.ts` | Cifras verificadas. **Única fuente válida para publicar un número** |
| `components/waitlist-dialog.tsx` | `CONTEXTUAL_COPY`, `?dialog=open&source=`, eventos GA4 |
| `app/calculadora-resico/retenciones/page.tsx` | El destino. Metadata, guía larga, `WaitlistDialog`, `initialTipoCliente="MORAL"` |
| `docs/CONTENT.md` | Voz editorial «Warm Precision» |
| `docs/DESIGN.md` | Design system y paleta |
| `CONTEXT.md` | Glosario. Retención de IVA = 10.6667% (2/3 de 16%) |

---

## 13. Lo que NO hacer

- ❌ Escribir una cifra fiscal sin cruzarla con `lib/tax-constants.ts`
- ❌ Poner el link en el cuerpo del post
- ❌ Gastar más de **2 links al mes** en la Página de Facebook, o asumir que el link del primer comentario quedará clicable sin revisar el consumo (§2.1 de `model-bank.md`)
- ❌ Diseñar una pieza que dependa de que una placa quede oculta
- ❌ Usar `dialog=open` en la pieza bandera
- ❌ Publicar la tasa de retención de IVA sin haber resuelto §6.1
- ❌ Traducir el copy al inglés (todo va en español MX)
- ❌ Instalar `next/font/google` de vuelta — el build de Vercel se rompe de forma
  intermitente por un bug sin arreglar de Turbopack
- ❌ Agregar tests automáticos (el repo no los tiene por decisión)
- ❌ Tocar el precio de la campaña pagada (`$419 + IVA`)
- ❌ Apilar modelos: si aparece una segunda idea, es de la semana siguiente
