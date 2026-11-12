# Brandbook de Fiscalio

> **Versión 1.0 · 2026-11-11.** Fuente de verdad de la marca: guía toda publicación,
> pieza visual y texto de Fiscalio en redes sociales y en el sitio web.
> Versión visual con tokens vivos: `/admin/brandbook`.
>
> Jerarquía de documentos: **este brandbook** decide marca, voz y sistema visual.
> `docs/DESIGN.md` detalla la implementación de UI y `docs/CONTENT.md` la
> estructura de los artículos del blog. Si algo se contradice, gana este archivo.

Todo el contenido está decidido o aprobado por el fundador; los pendientes de
implementación están en la sección 13.

---

## 01 · Fundamentos

### Propósito

Que nadie que trabaja por su cuenta en México tenga que adivinar cuánto de su
dinero es suyo.

### Posicionamiento

Para personas físicas en RESICO que facturan por su cuenta, Fiscalio es la
herramienta que convierte sus facturas en un borrador claro de su declaración
mensual: funciona en su equipo, no pide la contraseña del SAT y se paga una sola
vez.

**La categoría vende miedo. Fiscalio vende claridad.**

### Idea de marca: Precisión cálida

«Warm Precision». La exactitud de una hoja contable con la calma de una página
bien editada. Cada decisión visual y verbal debe poder defenderse con una de las
dos palabras: es más **precisa** o es más **cálida**. Si no es ninguna, sobra.

### Líneas de marca

| Uso | Línea | Estado |
|---|---|---|
| Descriptor (título del sitio, bios) | Control fiscal claro para RESICO | Vigente |
| Serie editorial | Un modelo mental fiscal cada semana | Vigente |
| Firma de marca | Impuestos que se entienden. | Vigente |

### Principios

1. **Claridad antes que miedo.** Explicamos cómo funciona el sistema. Nunca
   usamos multas, auditorías ni fechas límite como amenaza.
2. **El porqué, no el trámite.** Enseñamos cómo piensa el SAT, no cómo llenar el
   portal. El «cómo declarar» es trabajo del contador.
3. **Cifra verificable.** Toda cifra publicada lleva sus supuestos al lado y se
   cruza contra `lib/tax-constants.ts` y la tabla oficial del SAT.
4. **Tus datos son tuyos.** Offline-first, sin CIEC ni e.firma. Lo decimos como
   un hecho, no como un ataque a otros.
5. **Honestidad de fundador.** Sin prueba social inflada, sin cupos inventados,
   sin urgencia artificial. Si algo es beta, se dice.
6. **Una idea a la vez.** Una pieza, un modelo mental, una frase ancla. El modelo
   se repite, no se acumula.

### Personalidad

Fiscalio habla como el colega que entiende de impuestos y te lo explica con una
pluma y una servilleta: sin prisa, con el número exacto y sin hacerte sentir mal
por no saberlo.

| Es | No es |
|---|---|
| Clara | Simplista |
| Precisa | Técnica |
| Cálida | Chistosa |
| Serena | Alarmista |
| Directa | Agresiva |
| Editorial | Corporativa |

### Fronteras

- No somos contador, ni su sustituto, ni estamos contra él.
- No declaramos por nadie: Fiscalio prepara un **borrador**.
- No afirmamos ni insinuamos la situación financiera o fiscal de quien lee.
- No prometemos ahorro de impuestos.

### A quién le hablamos

Persona física en RESICO que factura por su cuenta: desarrolladora, diseñador,
consultora, o un negocio familiar pequeño. Usa bien la tecnología, desconfía del
software inflado y de subir sus datos a la nube, y siente incertidumbre —no
ignorancia— frente al SAT. Quiere entender su dinero, no convertirse en contador.

---

## 02 · Voz

### Reglas de voz

1. **Tuteo, español de México.** «Tú», nunca «usted» ni «vosotros».
2. **La cifra antes que el adjetivo.** «$8,550 este mes» en vez de «un impuesto
   altísimo».
3. **Modelo mental primero.** Cada explicación tiene un objeto que se puede
   dibujar: tres bóvedas, dos tableros, una línea de tiempo.
4. **Frase ancla.** Cada pieza se puede resumir en una línea que se sostiene
   sola: «Te depositan menos. No te pagaron menos.»
5. **Se habla del error en general**, nunca de la conducta de quien lee. Marco
   condicional: «con el método de pago equivocado…», no «tú estás pagando de más».
6. **Enseñar antes de cerrar.** Ninguna pieza es un acertijo ni castiga al que no
   sabía.
7. **Supuestos a la vista.** El ejemplo se declara: «RESICO persona física,
   $50,000 + IVA 16% como único ingreso del mes».
8. **Frases cortas.** Un punto vale más que una coma. Sin signos de exclamación.

### Léxico

**Lenguaje del alivio (usar):** claro, en orden, a tiempo, tú controlas,
borrador, entender, lo que sí es tuyo.

**Frases vetadas (nunca, en ningún canal):** «paga menos impuestos», «optimiza
tus impuestos», «evita multas», «garantizamos», «declaramos por ti», «agenda una
demo».

**Encuadres vetados:** miedo explícito (multas, auditorías, cartas invitación,
expulsiones del régimen, el día 17 como amenaza), culpa, urgencia artificial,
«contador vs software».

**Términos del dominio.** El glosario de `CONTEXT.md` manda. Los más usados:

| Decimos | No decimos |
|---|---|
| IVA que cobraste | IVA trasladado |
| Retención de ISR / Retención de IVA | ISR retenido / IVA retenido |
| ISR neto a pagar | ISR a liquidar |
| Saldo a favor | Crédito fiscal, ISR negativo |
| Neto real | Utilidad neta real |
| Depósito bancario | Depósito neto |
| Método de pago (PUE / PPD) | Forma de pago, etiqueta |
| Borrador de declaración | Declaración (cuando es el borrador) |

### Ortotipografía

- **Dinero:** `$58,000.00` con signo pegado, coma de millares y dos decimales en
  desgloses; `$8,550` sin decimales en titulares y cuerpo. Siempre en Geist Mono
  en piezas visuales. «MXN» solo si hay otra moneda en la pieza.
- **Porcentajes:** `16%`, `1.25%`, sin espacio. En mono.
- **Citas y títulos:** comillas angulares «así». Las inglesas solo dentro de otras.
- **Símbolos con significado:** `≠` (no es lo mismo), `→` (entonces / lleva a),
  `·` (separador en líneas de datos). No se usan como adorno.
- **Mayúsculas:** oración normal en titulares. Versales solo en etiquetas mono
  (`EL MODELO`, `DÍA 1 · EMITES`) y en botones del sitio.
- **Emojis y hashtags:** no forman parte de la voz. Ni en el arte ni en el
  cuerpo del post.
- **Siglas:** SAT, RESICO, ISR, IVA, CFDI, PUE y PPD van sin explicar en redes;
  en el blog se explican la primera vez.

### Antes y después

| En lugar de | Escribimos | Por qué |
|---|---|---|
| Deja de pagar impuestos por dinero que no has cobrado | Facturado no es cobrado | Nombra el modelo, no la situación del lector |
| Proteger mi dinero | Unirme a la beta privada | El botón dice lo que pasa al tocarlo |
| ¿No sabes cuánto vas a pagar? | Así se calcula el ISR mensual en RESICO | Tema, no atributo personal |
| ¿Vas a meter la pata en tu declaración? | El error más común al preparar la declaración mensual | Error en general, sin culpa |
| Agenda una demo | Sesión gratuita de 15 minutos | Describe lo que se recibe |
| ¡Evita multas del SAT! | Tu mes y el mes del SAT no empiezan el mismo día | Claridad en vez de amenaza |

### Llamados a la acción

| Contexto | CTA |
|---|---|
| Dentro de una pieza de redes | Sigue a Fiscalio |
| Sitio, captura de correo | Unirme a la beta privada |
| Oferta de sesión | Prepara tu borrador gratis · Sesión gratuita de 15 minutos |
| Herramienta | Calcular mis impuestos · Abrir la calculadora |

Un solo CTA por pieza. El botón describe la acción, nunca la emoción.

### La voz por canal

| Canal | Persona | Registro | Longitud |
|---|---|---|---|
| Sitio (landing, calculadora) | Fiscalio | Sobrio y concreto: qué hace, con qué, sin qué | Titular ≤ 8 palabras |
| Blog | Fiscalio | Empático al abrir, modelo mental desde el inicio, cierre que deja herramientas | Lectura larga |
| Facebook e Instagram | Fiscalio | Didáctico, una idea por semana | 80–160 palabras |
| LinkedIn | Fiscalio | De profesional a profesional: el mismo modelo, con más contexto de negocio | 120–220 palabras |
| Perfil del fundador | Ezequiel, en primera persona | Lo que construyo, lo que aprendí, por qué lo decidí | Libre |
| Correos | Fiscalio; invitaciones en texto plano firmadas por el fundador | Breve y útil | ≤ 120 palabras |

---

## 03 · Logo

### Piezas

- **Isotipo, «el marco».** Un cuadro de esquinas suaves con un interior cóncavo
  recortado. Encuadra una sola idea. Vector canónico:
  `public/brand/fiscalio-isotipo.svg` y `components/brand/logo-mark.tsx`.
- **Logotipo.** `FISCALIO` en Geist Mono 500, versales, espaciado `-0.04em`.
- **Imagotipo horizontal.** Isotipo + logotipo. Es la versión por defecto.

### Construcción del imagotipo

Con `x` = tamaño de fuente del logotipo:

| Medida | Valor |
|---|---|
| Alto del isotipo | `1.8x` |
| Separación isotipo–logotipo | `0.5x` |
| Área de respeto alrededor | `1x` por lado (isotipo solo: ¼ de su lado) |

### Tamaños mínimos

| Versión | Pantalla | Placa 1080 px |
|---|---|---|
| Isotipo | 16 px | 56 px |
| Imagotipo horizontal | 88 px de ancho | 240 px de ancho |

### Color

| Fondo | Logo |
|---|---|
| Papel o blanco | Tinta |
| Tinta o grafito | Papel |
| Fotografía o arte | Tinta o papel sobre zona limpia, según contraste |

El logo nunca va en terracota ni en ámbar.

### Usos incorrectos

No deformar, no girar, no añadir sombra ni contorno, no cambiar la tipografía del
logotipo, no rellenar el interior del marco con otro color, no ponerlo sobre una
zona de imagen con ruido, no usar el PNG de 500 px a más de 250 px.

### En redes

- **Foto de perfil:** isotipo en tinta sobre papel, ocupando el 56% del lado.
- **Firma de pieza:** imagotipo abajo a la izquierda, dentro del margen. Va en
  todas las placas.
- **Portada:** frase ancla de la serie + imagotipo; sin precios ni fechas.

---

## 04 · Color

La paleta canónica es la del sitio (`app/globals.css`, en OKLCH). Redes, video,
PDF y correo usan los mismos valores; los hex de abajo son su equivalente sRGB.

### Paleta

| Nombre | Token | OKLCH | Hex | Papel que juega |
|---|---|---|---|---|
| Papel | `background` | `0.985 0.005 85` | `#fcfaf6` | Fondo de todo |
| Tinta | `foreground` | `0.15 0.01 75` | `#0e0b07` | Texto, cifras, isotipo |
| Grafito | `primary` | `0.25 0.02 75` | `#272017` | Botones y bloques oscuros |
| Piedra | `muted-foreground` | `0.5 0.015 75` | `#68625a` | Texto secundario, etiquetas, dato neutro |
| Lino | `secondary` | `0.95 0.008 85` | `#f1eee9` | Superficies y rellenos vacíos |
| Línea | `border` | `0.9 0.008 85` | `#e0ded8` | Filetes y bordes |
| Blanco | `card` | `1 0 0` | `#ffffff` | Solo tarjetas y objetos sobre papel |
| Terracota | `accent-rust` | `0.55 0.12 35` | `#ac543f` | Énfasis: lo que el SAT cuenta |
| Ámbar | `accent-amber` | `0.65 0.15 65` | `#cc7800` | Lo tuyo: tu dinero, lo que sigue abierto |
| Ámbar claro | `accent-amber-muted` | `0.88 0.08 65` | `#fdcda0` | Rellenos suaves de ámbar |
| Rojo | `destructive` | `0.55 0.22 25` | `#d40924` | Errores de interfaz. Nunca en redes |

### Proporción

Papel 70% · Tinta 20% · Terracota 7% · Ámbar 3%. Una pieza donde los acentos
superan el 10% está gritando.

### Semántica (un color, un significado)

| Color | Significa | Ejemplo |
|---|---|---|
| Piedra | El dato neutro, lo que dice el documento | Bóvedas de IVA e ISR, el método de pago |
| Terracota | Lo que el SAT cuenta; la frase que importa | «no el final.», «→ el SAT cuenta $8,550 este mes» |
| Ámbar | Lo que es tuyo o sigue abierto | La bóveda «Tuya», el pago que llega |

- **Un solo énfasis en terracota por titular.**
- **El impuesto nunca va en ámbar.**
- El significado se mantiene dentro de la pieza y entre semanas.

### Contraste (WCAG)

| Par | Ratio | Uso permitido |
|---|---|---|
| Tinta sobre papel | 18.9 : 1 | Todo |
| Piedra sobre papel | 5.8 : 1 | Texto de cualquier tamaño |
| Terracota sobre papel | 4.9 : 1 | Texto de cualquier tamaño |
| Ámbar sobre papel | 3.2 : 1 | Solo rellenos, filetes y cifras ≥ 24 px en negrita |
| Papel sobre grafito | 15.4 : 1 | Todo |
| Tinta sobre ámbar | 5.9 : 1 | Texto sobre relleno ámbar |

### Modo oscuro

Existe en el sitio (`.dark`). Fondo `#080503`, texto `#f7f5f1`, bordes
`#241e17`. **Las piezas de redes son siempre en papel**; el fondo oscuro se
reserva para una placa de contraste por carrusel como máximo.

### Lo que no se usa

Degradados, azules o verdes saturados, blanco puro como fondo de página, negro
puro, transparencias sobre fotografía para «entintar».

### Gráficas

Las series usan la paleta de marca, en este orden (`chart-1…5` en
`globals.css`): Tinta → Piedra → Terracota → Ámbar → Ámbar claro. La semántica
de color sigue aplicando: el impuesto no va en ámbar. Más de cinco series es
señal de que la gráfica debe dividirse.

---

## 05 · Tipografía

| Familia | Rol | Dónde |
|---|---|---|
| **DM Sans** (`font-display`) | Titulares | Encabezados, frases ancla |
| **Geist** (`font-sans`) | Lectura | Cuerpo, interfaz, pies |
| **Geist Mono** (`font-mono`) | Datos | Dinero, porcentajes, etiquetas, logotipo |

### Peso por contexto

- **Sitio: 500.** Los encabezados se leen; el peso medio mantiene el tono
  editorial. 600 solo en etiquetas pequeñas de interfaz.
- **Redes: 700.** El titular tiene que detener el scroll.
- Nunca cursiva. Nunca versales en DM Sans.

### Escala del sitio

| Nivel | Familia | Tamaño | Peso | Espaciado / interlínea |
|---|---|---|---|---|
| H1 | DM Sans | 2.25–3.75 rem | 500 | `-0.025em` / 1.1 |
| H2 | DM Sans | 1.5–1.875 rem | 500 | `-0.025em` / 1.25 |
| H3 | DM Sans | 1.25–1.5 rem | 500 | `-0.025em` / 1.3 |
| Cuerpo | Geist | 1 rem | 400 | normal / 1.625 |
| Etiqueta | Geist | 0.875 rem | 500 | normal |
| Antetítulo | Geist Mono, versales | 0.625–0.75 rem | 400 | `0.2em` |
| Dato | Geist Mono | 0.75–0.875 rem | 400–500 | normal |

### Escala de placa (lienzo de 1080 px de ancho)

| Elemento | Familia | Tamaño | Peso | Espaciado / interlínea |
|---|---|---|---|---|
| Antetítulo `[01] TEMA` | Geist Mono, versales | 26–30 px | 400 | `0.14em` |
| Cifra héroe | Geist Mono | 120–190 px | 500 | `-0.05em` / 1 |
| Titular | DM Sans | 84–104 px | 700 | `-0.03em` / 1.02 |
| Frase ancla | DM Sans | 44–56 px | 700 | `-0.02em` / 1.15 |
| Cuerpo | Geist | 30–34 px | 400–500 | normal / 1.3 |
| Cifra en tabla | Geist Mono | 56–72 px | 500 | `-0.04em` |
| Nota de supuestos | Geist Mono | 24–28 px | 400 | `0.06em` |
| Logotipo | Geist Mono, versales | 40 px | 500 | `-0.04em` |

**Tamaño mínimo en placa: 24 px.** Por debajo no se lee en un teléfono.

### Reglas

- El énfasis se hace con **color** (terracota), no con subrayado ni cursiva.
- Todo número con unidad monetaria o porcentaje va en mono.
- Titulares de máximo tres líneas. Alineación a la izquierda; centrado solo en el
  hero del sitio.

---

## 06 · Forma y retícula

### Esquinas: estructura recta, objetos suaves

| Nivel | Radio | Aplica a |
|---|---|---|
| **Estructura** | 0 px | Botones, campos, insignias, tablas, tarjetas de interfaz, capturas, imágenes |
| **Objeto** | 28 px en placa de 1080 (2.6% del ancho) | Los objetos del modelo mental: bóvedas, fichas, tableros |
| **Marca** | 25% del lado | Isotipo |
| **Nodo** | Círculo | Puntos de líneas de tiempo |

La estructura es recta porque es un documento; los objetos son suaves porque son
cosas que se pueden tomar con la mano. Los componentes heredados de shadcn con
`rounded-md` se pasan a `rounded-none` cuando se toquen.

### Líneas

- **Regla fuerte:** 2 px en tinta. Abre una tabla o un bloque de cifras.
- **Filete:** 1 px en Línea. Separa filas y columnas.
- **Punteada:** 2 px, tinta. Significa «sigue abierto».
- Sin sombras en redes. En el sitio, máximo `shadow-sm` en tarjetas y campos.

### Retícula

| Lienzo | Tamaño | Margen | Notas |
|---|---|---|---|
| Sitio | contenedor 1280 px, 12 columnas | 24–48 px | `py-12` a `py-24` entre secciones |
| Placa 4:5 | 1080 × 1350 | 84 px | Antetítulo arriba, firma abajo |
| Placa 1:1 | 1080 × 1080 | 84 px | Respaldo y LinkedIn |
| Vertical 9:16 | 1080 × 1920 | 6% lados | Zona segura: 14% arriba, 35% abajo |

### Anatomía de una placa

1. **Antetítulo** en mono terracota, arriba a la izquierda: `[03] EL MODELO`.
2. **Contenido** alineado a la izquierda, con al menos un tercio del lienzo vacío.
3. **Firma:** imagotipo abajo a la izquierda. Siempre en el mismo sitio.

---

## 07 · Diagramas y modelos mentales

El diagrama es el activo principal de la marca: cada modelo mental tiene **un
objeto propio** y no se recicla el de otro.

| Modelo | Frase ancla | Objeto |
|---|---|---|
| El IVA no es tuyo | «El IVA nunca fue tu dinero.» | Tres bóvedas |
| Facturado ≠ cobrado | «Para el SAT, la factura es el inicio de la historia, no el final.» | Línea de tiempo día 1 → día 30 |
| Dos juegos: ISR e IVA | «Las facturas ya no bajan tu ISR, pero sí bajan tu IVA.» | Dos tableros |
| La retención es un pago a cuenta | «Te depositan menos. No te pagaron menos.» | Bóvedas que llena tu cliente |
| Dos calendarios | «Tu mes y el mes del SAT no empiezan el mismo día.» | Dos líneas de tiempo |

El registro completo vive en
`docs/organic-social-como-piensa-el-sat_20261019/model-bank.md`.

### Reglas de dibujo

- Formas planas: rectángulos suaves, líneas, puntos. Sin iconos ilustrados, sin
  3D, sin perspectiva.
- El nivel de llenado representa una cantidad real, a escala.
- Etiquetas en mono con versales; nombres en DM Sans; cifras en mono.
- Colores con la semántica de la sección 04.
- Un sello (`FIN`, `BORRADOR`) puede girar hasta 6°. Es el único elemento que
  rompe la retícula.
- Si el diagrama necesita leyenda para entenderse, no está terminado.
- El mismo ejemplo numérico se sostiene entre semanas ($50,000 + IVA 16%).

---

## 08 · Imagen

La marca usa tres recursos, en este orden de frecuencia.

### 1. Tipografía y diagramas

Es el recurso por defecto y el único en placas educativas.

### 2. Capturas de producto

- Siempre con **modo privacidad** activo o con datos de ejemplo. Nunca un RFC,
  nombre o importe real.
- Recortar a **una sola idea** por captura; no se muestra la pantalla completa
  para «enseñar todo».
- Marco: filete de 1 px en Línea, esquinas rectas, sin marco de dispositivo.
- Anotaciones en mono con filete terracota. Máximo tres por captura.
- Sobre papel o sobre arte editorial; nunca sobre color plano saturado.

### 3. Arte editorial

- Pintura y grabado **de dominio público o acceso abierto**: paisajes y escenas
  serenas, de tono cálido. Verificar la licencia de cada obra antes de usarla.
- Crédito siempre visible o en el `alt`: título, autor, colección.
- Sin filtros, duotonos ni recortes que cambien la obra.
- Funciona como escenario (hero del sitio, portadas de blog, portada de
  Facebook), no como decoración de una placa educativa.

### Lo que no se usa

Fotografía de stock, personas generadas con IA, ilustración 3D, memes, capturas
del portal del SAT como recurso de miedo, iconos decorativos.

---

## 09 · Redes sociales

### Formatos

| Pieza | Formato | Función | CTA |
|---|---|---|---|
| Carrusel bandera | 5 placas 4:5, 1080 × 1350 | Alcance y guardados | Sigue a Fiscalio |
| Estático de apoyo | 4:5, 1080 × 1350 | Captura de correo | Sigue a Fiscalio |
| Conversación | Solo texto | Comentarios | Ninguno |
| Reel | 9:16, 1080 × 1920, 15–30 s | Alcance | Sigue a Fiscalio |
| Documento de LinkedIn | PDF de placas 4:5 o 1:1 | Autoridad profesional | Sigue a Fiscalio |

### Estructura del carrusel

| Placa | Antetítulo | Contenido |
|---|---|---|
| 1 | `[01] TEMA` | La cifra o la tensión, con la frase ancla |
| 2 | `[02] LA PREGUNTA` | Pregunta abierta que se responde en comentarios, no un acertijo |
| 3 | `[03] EL MODELO` | El objeto del modelo mental |
| 4 | `[04] EL DESGLOSE` | Tabla con supuestos arriba |
| 5 | `[05] EL CIERRE` | La regla en una línea + hábito + «Sigue a Fiscalio» |

Ninguna placa depende de que otra quede oculta.

### Estructura del texto del post

1. Situación concreta con cifra (una o dos líneas).
2. El modelo mental.
3. Dos o tres líneas con `→`.
4. Pregunta para comentarios.
5. Frase ancla.
6. Supuestos entre paréntesis.

**El enlace nunca va en el cuerpo del post.** Va en el primer comentario
(Facebook, LinkedIn) o en la bio (Instagram). El detalle operativo —presupuesto de
enlaces, UTM, `content_id`— vive en `model-bank.md` y en `fiscalio-gtm`.

### Reel y video vertical

- Zona segura: 14% arriba, 35% abajo, 6% a los lados.
- Subtítulos siempre incrustados; se diseña para verse sin sonido.
- La promesa se lee en los primeros 3 segundos.
- Mismo sistema visual que las placas: papel, tinta, un acento.

### Facebook e Instagram

Mismo arte y mismo texto el mismo día. En Instagram cambia solo la línea del
enlace («está en la bio»). Ritmo: bandera el lunes, apoyo el miércoles,
conversación el viernes.

### LinkedIn

- Mismas placas; el texto añade contexto de negocio (flujo de efectivo, cobro a
  clientes, facturación a empresas).
- Primera línea = frase ancla o cifra. Sin «me complace anunciar».
- Tono de profesional a profesional; sin jerga de crecimiento.

### Perfil personal del fundador

- **Primera persona real.** «Construí Fiscalio porque…», no «en Fiscalio
  creemos…».
- Comparte el modelo con una opinión o una experiencia propia; no copia el texto
  de la página.
- Puede usar las placas de marca al compartir. Las imágenes propias (capturas de
  trabajo, notas) no llevan imagotipo.
- Se identifica como fundador cuando recomienda el producto.
- Aplican todas las frases vetadas y las fronteras de la sección 01.
- En grupos: aporta el modelo y una pregunta, nunca el enlace de entrada.

### Respuestas a comentarios

Se responde con el mecanismo, sin corregir a nadie: «Si la factura dice PUE, son
$8,550 este mes. Si dice PPD, $0 este mes y los mismos $8,550 el mes que te
pagan.»

---

## 10 · Sitio web

- **Fondo papel**, tarjetas en blanco, texto en tinta. Sin blanco puro de página.
- **Hero:** insignia mono en versales, H1 en dos líneas con la segunda en
  Piedra, párrafo de una idea, un solo botón.
- **Botones:** rectos, 44–48 px de alto, texto en versales con `0.15em`,
  primario en grafito. Un botón primario por pantalla.
- **Campos:** rectos, filete de 1 px, anillo de foco de 3 px.
- **Secciones:** `py-12` a `py-24`, separadas por filete, no por cambio de color.
- **Cifras** de calculadora y tablas en mono, alineadas a la derecha.
- **Blog:** título de experiencia, no genérico; apertura empática; modelo mental
  desde el inicio; cierre que deja herramientas (`docs/CONTENT.md`).
- **Imagen OG:** fondo `#fcfaf6`, imagotipo, titular en DM Sans
  (`app/api/og/route.tsx`).
- **Correos:** transaccionales con la misma paleta; invitaciones personales en
  texto plano.
- **Áreas táctiles:** mínimo 44 px.

---

## 11 · Movimiento

- Calmado y con propósito: el movimiento explica, no decora.
- **Sitio:** 200–400 ms, salida suave (`ease-out`), desplazamiento máximo de
  12 px. Respeta `prefers-reduced-motion`.
- **Video:** entradas con `cubic-bezier(0.16, 1, 0.3, 1)`, desplazamientos con
  `cubic-bezier(0.83, 0, 0.17, 1)`. Nunca lineal, nunca rebote exagerado.
- Las cifras **cuentan** hasta su valor; las bóvedas **se llenan**; las líneas
  **se trazan**.
- Sin degradados animados, viñetas, brillos ni partículas.

---

## 12 · Antes de publicar

- [ ] Una sola idea y una frase ancla.
- [ ] Ninguna frase vetada ni encuadre de miedo o culpa.
- [ ] No afirma ni insinúa la situación de quien lee.
- [ ] Cifras verificadas contra `lib/tax-constants.ts`, con supuestos visibles.
- [ ] Términos del glosario (`CONTEXT.md`).
- [ ] Papel de fondo, un solo énfasis en terracota, ámbar solo para «lo tuyo».
- [ ] Dinero y porcentajes en mono.
- [ ] Texto mínimo de 24 px en placa; márgenes de 84 px; zona segura en 9:16.
- [ ] Imagotipo abajo a la izquierda.
- [ ] Un solo CTA. Enlace fuera del cuerpo del post.
- [ ] Capturas con modo privacidad; arte con crédito y licencia verificada.

---

## 13 · Cambios que introduce esta versión

| # | Decisión | Estado |
|---|---|---|
| 1 | Los acentos canónicos son los del sitio: terracota `#ac543f` y ámbar `#cc7800` (antes en redes: `#b45309` y `#fbbf24`) | Decidido. **Pendiente:** actualizar `fiscalio-product-demo/src/tokens.ts` |
| 2 | Tinta `#0e0b07` y grafito `#272017` sustituyen a `#262626` y `#3a3a3a` en redes | Decidido con el punto 1. Mismo pendiente |
| 3 | Esquinas en dos niveles: estructura recta, objetos suaves | Propuesta aceptada por delegación |
| 4 | Peso por contexto: 500 en sitio, 700 en redes | Aprobado |
| 5 | Isotipo vectorial en `public/brand/` | Hecho. **Pendiente:** sustituir `logo.png` en `components/logo.tsx` y en Remotion |
| 6 | Firma de marca «Impuestos que se entienden.» | Aprobado |
| 7 | Secuencia de gráficas con la paleta de marca | Aprobado y aplicado en `globals.css` |
| 10 | Fundamentos: propósito, principios, personalidad y fronteras | Aprobado |
| 8 | Hero del sitio: la captura usa `rounded-lg`, `shadow-2xl` y un degradado | **Pendiente** de alinear con las secciones 06 y 08 |
| 9 | `ContextualPainCTA` del blog PUE/PPD conserva «Cuidado con pagar impuestos de más» / «Proteger mi dinero» | **Pendiente** de reescribir según la sección 02 |
