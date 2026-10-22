# Semana 1 — «El IVA no es tuyo / Las 3 bóvedas»

Modelo mental de la semana: **el IVA no es tu dinero, solo eres el recaudador**,
explicado con el modelo de **las 3 bóvedas**.

Arco: el carrusel enseña el modelo completo; el Reel cierra con la frase ancla
(«El IVA nunca fue tuyo. Solo pasó por tus manos.»).

---

## 1. Assets (ya renderizados)

| Asset | Ruta | Spec |
|---|---|---|
| Carrusel, 5 placas | `~/Projects/fiscalio-product-demo/out/social/bovedas-1..5.png` | 1080×1350 (4:5) |
| Reel | `~/Projects/fiscalio-product-demo/out/BovedasReel.mp4` | ~34 s · 1080×1920 (9:16) · 30 fps H.264 |

Proyecto de producción: `~/Projects/fiscalio-product-demo/` (Remotion).
El storyboard aprobado es `storyboard/storyboard-bovedas-facebook.html` (v3).

Datos verificados en el proyecto: `BASE=50000`, `DEPOSIT=58000`, `IVA=8000`,
`ISR=550`, `NET=49450` (`src/social/data.ts`). Coinciden con
`lib/tax-constants.ts`: IVA 16% y tasa RESICO 1.10% para el tramo hasta $50,000.

---

## 2. Orden y fechas de publicación

El storyboard aprueba publicar primero el multi-imagen y el Reel **2–3 días
después**, para tener dos oportunidades de alcance.

| Día | Pieza | Objetivo |
|---|---|---|
| **Lunes 19 oct** | Carrusel de 5 placas | Alcance + comentarios |
| **Miércoles 21 oct** | Reel ~34 s | Alcance nuevo |
| **Viernes 23 oct** | Post de conversación | Comentarios |

---

## 3. Copy aprobado

### Carrusel (cuerpo del post)

```
Te depositan y por un momento sientes que todo ese dinero es tuyo. Es normal: nadie nos enseñó a separar un depósito.

Un modelo que lo simplifica: cada depósito se reparte en 3 bóvedas.
→ Bóveda 1 · IVA: lo cobras para el SAT. Nunca fue tuyo.
→ Bóveda 2 · ISR: tu costo por facturar.
→ Bóveda 3 · Tuya: lo que sí puedes gastar.

Ejemplo en RESICO persona física: tu precio es $50,000 + IVA, así que te depositan $58,000.
$8,000 van a la bóveda del IVA y $550 a la del ISR. ¿Y la tuya?

Antes de hacer la cuenta, ¿cuánto dirías que te queda? Escríbelo en los comentarios.

El hábito que lo cambia todo: el día que cobras, mueve IVA + ISR a otra cuenta. Lo que se queda en la principal ya es tuyo, y el día 17 llega sin sorpresas.

(Ejemplo sin retenciones y antes de gastos deducibles. Si le facturas a una empresa, el depósito llega distinto; de eso va el próximo post.)
```

### Reel

```
Un depósito, tres bóvedas. ¿Cuánto creías que era tuyo antes de ver el final? Escribe tu número en los comentarios.
Sigue a Fiscalio: un modelo mental fiscal cada semana.
```

### Primer comentario (link)

```
Calcula tus tres bóvedas con tus propios números → https://www.fiscalio.app/calculadora-resico?source=modelo_3_bovedas&utm_source=facebook&utm_medium=organic_social&utm_campaign=como-piensa-el-sat&utm_content=modelo-01-tres-bovedas-carrusel
```

Para el Reel, mismo link cambiando `utm_content` a
`modelo-01-tres-bovedas-reel`.

`source=modelo_3_bovedas` hace que la waitlist abra con el copy contextual del
modelo (§2 del [registro de modelos](../../../docs/organic-social-como-piensa-el-sat_20261019/model-bank.md)). **No** se usa `dialog=open`: el modal no debe
abrir solo al llegar, la pieza es de enseñanza.

### Post de conversación (viernes 23 oct)

Sin link.

```
Pregunta para quien cobra por su trabajo: cuando cae un depósito, ¿sabes cuánto de ese dinero no es tuyo?

Casi nadie lo sabe al principio. No porque sea complicado, sino porque nadie nos enseñó a separar un depósito.

El modelo de esta semana: 3 bóvedas. IVA, ISR y la tuya.

¿Cuál de las tres te costó más trabajo entender: la del IVA, la del ISR o la tuya?
```

---

## 4. Estructura del carrusel (aprobada)

Ojo: el truco del collage **no funcionó**. Verificado el 2026-10-19 con este
carrusel: Facebook mostró las **5 placas** y no tapó la última con «+1». Con 5
imágenes en 4:5 el collage no oculta nada, así que el suspenso entre la pregunta
(placa 2) y la respuesta (placa 5) no existe.

**Decisión (2026-10-19):** publicar tal cual, sin re-render. Dos ajustes de copy
para que funcione con todo visible:

1. El reto pasó de *«Antes de ver la última imagen, escribe tu número»* a
   *«Antes de hacer la cuenta, ¿cuánto dirías que te queda?»*: pide la intuición,
   no el cálculo, y no depende de que algo esté oculto.
2. El primer comentario asume que la respuesta ya se vio.

Alternativa descartada por tiempo: publicar solo las placas 1–4 y subir la 5 como
primer comentario con imagen.

| Placa | Contenido |
|---|---|
| 1 | Gancho: «$58,000 · Pero no todo es tuyo.» + base «Tu precio $50,000 + IVA 16%» |
| 2 | Reto: «¿Cuánto crees que te queda de verdad?» + pedir el número en comentarios |
| 3 | El modelo: las 3 bóvedas con tanques (14% / 2% / 85%) y «Tuya» en «$ ?» |
| 4 | Desglose: tabla con supuestos arriba («RESICO persona física, sin retenciones»); «Tu bóveda» en «$ ?» |
| 5 | Respuesta: «$49,450» + el hábito + «Sigue a Fiscalio» |

**El CTA dentro de la pieza es «Sigue a Fiscalio», no un link.** La página tiene
0 seguidores: el objetivo de la fase es seguidores. El link vive en el primer
comentario.

---

## 5. Rutina de la primera hora

- [x] Responder **cada número** que comenten con su cálculo («Casi: te quedan $49,450 porque…»)
- [x] Compartir en 2–3 grupos de freelancers, devs y diseñadores MX **con una pregunta**, no con el link
- [x] Fijar un comentario propio con la nota de las retenciones (adelanto del próximo post)
- [x] Compartir desde el perfil personal del fundador

---

## 6. Verificaciones pendientes antes de publicar

- [x] `https://fiscalio.app/calculadora-resico` responde en producción
- [x] Confirmar el collage con un post en borrador — **resuelto 2026-10-19: las 5 placas se ven, la última NO queda tapada.** Se publica tal cual y se ajustó el copy del reto (ver §4)
- [x] Subir las placas en orden `bovedas-1..5.png`
- [x] Portada del Reel: el cuadro 0 (el gancho)

---

## 7. Cumplimiento

- [x] Modelo mental nombrado y dibujado (3 bóvedas) — `CONTENT.md`
- [x] Intro empática («Es normal…»), sin regañar ni implicar la situación del espectador
- [x] Cierre de satisfacción: un hábito concreto
- [x] Fiscalio se presenta sin venta agresiva
- [x] Supuestos explícitos donde hay cifras finales
- [x] Sin ninguna frase vetada («paga menos», «optimiza», «evita multas», «garantizamos», «declaramos por ti», «agenda una demo»)
- [x] Cifras cruzadas contra `lib/tax-constants.ts`
- [x] Fondo `#fcfaf6`, texto `#262626`, rust `#b45309`, ámbar `#fbbf24`; sin gradientes ni sombras
- [x] Link **fuera** del cuerpo del post (va en el primer comentario)
