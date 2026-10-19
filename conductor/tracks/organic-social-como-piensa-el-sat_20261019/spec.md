# Specification: Campaña orgánica de Facebook «Cómo piensa el SAT»

## Overview

Primera campaña orgánica de Fiscalio en la página de Facebook recién creada.
Objetivo: **awareness y enseñanza**, no venta. Un **modelo mental fiscal por
semana** para personas físicas que tributan en RESICO en México.

Serie: **«Cómo piensa el SAT»** — nombre heredado del cluster
`COMO_PIENSA_SAT` que ya existe en `app/blog/page.tsx` (5 posts). El orgánico es
la versión social de ese cluster, no un naming nuevo.

Funnel orgánico:

> Reel/Carrusel → primer comentario (blog del modelo) → calculadora RESICO →
> captura de email en la waitlist → (fase 2) sesión de 15 min y producto.

## Posicionamiento y frontera

La categoría vende **miedo** ("evita multas", "310K expulsados de RESICO",
"cartas invitación", el día 17 como amenaza) según
`docs/paid-acquisition-meta_20261005/research/03-competencia.md` §6.1. Fiscalio
vende **claridad**.

La frontera que define el territorio de la serie:

- **Enseñamos cómo funciona el sistema, no cómo llenar el portal.** El "cómo
  declarar" es trabajo del contador; el "por qué funciona así" es nuestro.
- **No nos posicionamos como contador, ni como sustituto, ni contra él.** No
  entramos a la pelea contador vs software (§6.2).
- **No se promete ni se implica la situación financiera del espectador.** Regla
  de plataforma (atributos personales de Meta) y de marca a la vez.

Frases vetadas en todo el contenido (se aplican también a orgánico, porque la
página puede ser restringida y porque es la diferenciación):
"paga menos impuestos", "optimiza tus impuestos", "evita multas",
"garantizamos", "declaramos por ti", "agenda una demo".

## Estado actual (inventario verificado el 2026-10-18)

| Elemento | Estado | Referencia |
|---|---|---|
| Página de Facebook de Fiscalio | ✅ creada (2026-10) | externa |
| Modelo mental de las 3 bóvedas (IVA) | ✅ diseñado y aprobado | `public/tres-bovedas.webp` |
| Post 1: Reel de las 3 bóvedas | ✅ aprobado | — |
| Post 2: estático/carrusel de apoyo | ✅ aprobado | — |
| 12 posts de blog con modelos mentales | ✅ existen | `app/blog/*`, `assets/post/*.md` |
| Estudio de estáticos 9:16/4:5/1:1 con safe zone | ✅ existe (respaldo) | `app/admin/meta-creatives/page.tsx` |
| Proyecto de contenido en Remotion | ✅ existe | `~/Projects/fiscalio-product-demo/` |
| Carrusel de 5 placas 4:5 renderizado | ✅ existe | `~/Projects/fiscalio-product-demo/out/social/bovedas-1..5.png` |
| Reel de ~34 s 9:16 renderizado | ✅ existe | `~/Projects/fiscalio-product-demo/out/BovedasReel.mp4` |
| Copy aprobado y storyboard v3 | ✅ existe | `storyboard/storyboard-bovedas-facebook.html` |
| Repositorio de diagramas SVG/PNG | ✅ existe | `app/admin/graphics-designer/page.tsx` |
| Waitlist enlazable (`?dialog=open&source=`) | ✅ existe | `components/waitlist-dialog.tsx` |
| Atribución de waitlist por `source` en GA4 | ✅ existe | eventos `waitlist_dialog_opened`, `waitlist_signup` |
| Registro de copy contextual por `source` | ⚠️ solo 4 entradas | `CONTEXTUAL_COPY` en `components/waitlist-dialog.tsx` |
| Convención UTM de orgánico | ❌ no existía | este track |
| Calendario editorial y registro de modelos | ❌ no existía | `docs/organic-social-como-piensa-el-sat_20261019/model-bank.md` |

## Decisión de formato (restricción real de producción)

La cadencia elegida es **1 pieza bandera + 2 de apoyo por semana**, pero la
capacidad de producción **actual es solo estático** (sin grabación de video).

Resolución:

1. **Semana 1** se publica ya, con ambas piezas aprobadas y renderizadas: el
   carrusel de 5 placas el lunes y el Reel el miércoles. El storyboard aprueba ese
   orden para tener dos oportunidades de alcance.
2. **Semanas 2+**: la pieza bandera es un **carrusel educativo**. Es formato
   nativo de Facebook, el research lo señala como el mejor formato para educar y
   testear varios ángulos en el mismo periodo, y las estáticas siguen generando
   la mayoría de las conversiones en Meta.
3. **Puente carrusel → Reel**: en el proyecto de Remotion, carrusel y Reel salen
   del **mismo código y los mismos datos** (`src/social/data.ts`). La semana 1 ya
   tiene ambos renderizados. Para las semanas 2–6 se produce solo el carrusel; el
   Reel se agrega cuando exista capacidad, reutilizando los componentes de
   `src/social/cards/` y `src/social/reel/`.

## Functional Requirements

### F0 — Fundaciones de contenido
1. **Registro de modelos mentales**
   ([`model-bank.md`](../../../docs/organic-social-como-piensa-el-sat_20261019/model-bank.md)):
   un modelo por fila con
   frase ancla, post de origen, objeto visual, `source` de waitlist, CTA y UTM.
2. **Convención UTM de orgánico** documentada y distinta de la de paid.
3. **Contrato de CTA**: qué link lleva cada tipo de pieza y dónde va (nunca en el
   cuerpo del post).
4. **Alta de los `source` faltantes** en `CONTEXTUAL_COPY` para que la waitlist
   tenga copy contextual por modelo (solo 4 de los modelos previstos existen).

### F1 — Semana 1: lanzamiento (modelo «El IVA no es tuyo / Las 3 bóvedas»)
1. Publicar el Reel aprobado (lunes).
2. Publicar el carrusel de apoyo aprobado (miércoles).
3. Primer comentario con el link al blog del modelo, con UTMs y `source`.
4. Post de conversación (viernes).
5. Reparto desde el perfil personal del fundador y en grupos de Facebook de
   freelancers/RESICO (aportando el modelo, no promocionando).

### F2 — Semanas 2–6: cadencia sostenida
1. Una pieza bandera (carrusel) + dos de apoyo por semana.
2. Cada semana cierra con la tabla de registro llena.
3. Regla de una sola idea por semana: el modelo se repite, no se acumula.

### F3 — Medición y registro
1. KPIs de la fase: alcance, retención a 3 s (cuando haya video), guardados,
   compartidos, clics al link, `waitlist_dialog_opened`, `waitlist_signup`.
2. Likes **no** son KPI.
3. Tabla de registro semanal en
   [`model-bank.md`](../../../docs/organic-social-como-piensa-el-sat_20261019/model-bank.md)
   (una fila por modelo).

### F4 — Graduación orgánico → paid
1. Un modelo que destaque en guardados/compartidos se convierte en creativo de
   la campaña pagada, reutilizando la infraestructura existente (pixel, UTMs,
   `/demo-resico`, Cal.com).
2. El orgánico opera como laboratorio de creativos del track pagado, que hoy
   tiene el creativo como cuello de botella.

### F5 — Automatización (fase 2, no bloquea el arranque)
1. El registro de modelos como data.
2. Extender `app/admin/meta-creatives` con presets alimentados por ese registro,
   para exportar estáticos e imprimir shot list + caption + UTMs.
3. Cola de publicación, solo cuando el pipeline esté estable.

## Non-Functional Requirements

- **Copy en español** (contexto MX). Voz editorial, "Warm Precision".
- **Sin link en el cuerpo del post**: el link va en el primer comentario.
- **Sin miedo, sin culpa**: se habla del error en general, nunca de la conducta
  fiscal del espectador.
- **Cero costo de producción nuevo**: el contenido se genera en
  `~/Projects/fiscalio-product-demo/` (Remotion) desde `src/social/data.ts`;
  `app/admin/meta-creatives` queda como respaldo para estáticos sueltos.
- Cambios de código (nuevos `source`): `npm run lint` + `npx tsc --noEmit`, sin
  comentarios inline.
- No tocar la oferta ni el precio de la campaña pagada (`$419 + IVA`).

## Acceptance Criteria

- [ ] [`model-bank.md`](../../../docs/organic-social-como-piensa-el-sat_20261019/model-bank.md) con los modelos, su orden de publicación y su canal.
- [ ] Convención UTM de orgánico documentada.
- [ ] Semana 1 publicada (Reel + carrusel) con primer comentario y UTMs.
- [ ] Tabla de registro semanal operativa desde la semana 1.
- [ ] `source` de waitlist dados de alta para los modelos que los necesiten.
- [ ] Al menos un modelo evaluado como candidato a creativo pagado.
- [ ] Un carrusel convertido en Reel cuando exista capacidad de grabación.

## Out of Scope

- Venta directa desde el orgánico (la venta vive en `/demo-resico`).
- Paid ads (vive en `conductor/tracks/paid-acquisition-meta_20261005/`).
- Explicar procedimientos del portal del SAT paso a paso (territorio del
  contador).
- Producción de Reel en las semanas 2–6 (restricción de recurso declarada).
- Instagram, TikTok y LinkedIn como canales primarios (solo repurposing).
- Automatización del pipeline (F5 es fase 2).
