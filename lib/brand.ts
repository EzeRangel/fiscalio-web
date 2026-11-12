export const BRAND_VERSION = "1.0";
export const BRAND_DATE = "2026-11-11";

export const BRAND_SECTIONS = [
  { id: "fundamentos", title: "Fundamentos" },
  { id: "voz", title: "Voz" },
  { id: "logo", title: "Logo" },
  { id: "color", title: "Color" },
  { id: "tipografia", title: "Tipografía" },
  { id: "forma", title: "Forma y retícula" },
  { id: "diagramas", title: "Diagramas" },
  { id: "imagen", title: "Imagen" },
  { id: "redes", title: "Redes sociales" },
  { id: "sitio", title: "Sitio web" },
  { id: "movimiento", title: "Movimiento" },
  { id: "publicar", title: "Antes de publicar" },
  { id: "cambios", title: "Cambios y pendientes" },
] as const;

export type BrandColor = {
  name: string;
  token: string;
  cssVar: string;
  oklch: string;
  hex: string;
  role: string;
  light?: boolean;
};

export const BRAND_COLORS: BrandColor[] = [
  {
    name: "Papel",
    token: "background",
    cssVar: "--background",
    oklch: "0.985 0.005 85",
    hex: "#fcfaf6",
    role: "Fondo de todo",
    light: true,
  },
  {
    name: "Tinta",
    token: "foreground",
    cssVar: "--foreground",
    oklch: "0.15 0.01 75",
    hex: "#0e0b07",
    role: "Texto, cifras, isotipo",
  },
  {
    name: "Grafito",
    token: "primary",
    cssVar: "--primary",
    oklch: "0.25 0.02 75",
    hex: "#272017",
    role: "Botones y bloques oscuros",
  },
  {
    name: "Piedra",
    token: "muted-foreground",
    cssVar: "--muted-foreground",
    oklch: "0.5 0.015 75",
    hex: "#68625a",
    role: "Texto secundario, dato neutro",
  },
  {
    name: "Lino",
    token: "secondary",
    cssVar: "--secondary",
    oklch: "0.95 0.008 85",
    hex: "#f1eee9",
    role: "Superficies y rellenos vacíos",
    light: true,
  },
  {
    name: "Línea",
    token: "border",
    cssVar: "--border",
    oklch: "0.9 0.008 85",
    hex: "#e0ded8",
    role: "Filetes y bordes",
    light: true,
  },
  {
    name: "Blanco",
    token: "card",
    cssVar: "--card",
    oklch: "1 0 0",
    hex: "#ffffff",
    role: "Tarjetas y objetos sobre papel",
    light: true,
  },
];

export const BRAND_ACCENTS: BrandColor[] = [
  {
    name: "Terracota",
    token: "accent-rust",
    cssVar: "--accent-rust",
    oklch: "0.55 0.12 35",
    hex: "#ac543f",
    role: "Énfasis: lo que el SAT cuenta",
  },
  {
    name: "Ámbar",
    token: "accent-amber",
    cssVar: "--accent-amber",
    oklch: "0.65 0.15 65",
    hex: "#cc7800",
    role: "Lo tuyo: tu dinero, lo que sigue abierto",
  },
  {
    name: "Ámbar claro",
    token: "accent-amber-muted",
    cssVar: "--accent-amber-muted",
    oklch: "0.88 0.08 65",
    hex: "#fdcda0",
    role: "Rellenos suaves de ámbar",
    light: true,
  },
  {
    name: "Rojo",
    token: "destructive",
    cssVar: "--destructive",
    oklch: "0.55 0.22 25",
    hex: "#d40924",
    role: "Errores de interfaz. Nunca en redes",
  },
];

export const PAPER_SCOPE = {
  "--background": "oklch(0.985 0.005 85)",
  "--foreground": "oklch(0.15 0.01 75)",
  "--card": "oklch(1 0 0)",
  "--primary": "oklch(0.25 0.02 75)",
  "--primary-foreground": "oklch(0.99 0.005 85)",
  "--secondary": "oklch(0.95 0.008 85)",
  "--muted-foreground": "oklch(0.5 0.015 75)",
  "--border": "oklch(0.9 0.008 85)",
} as React.CSSProperties;

export const BRAND_PRINCIPLES = [
  {
    title: "Claridad antes que miedo",
    body: "Explicamos cómo funciona el sistema. Nunca usamos multas, auditorías ni fechas límite como amenaza.",
  },
  {
    title: "El porqué, no el trámite",
    body: "Enseñamos cómo piensa el SAT, no cómo llenar el portal. El «cómo declarar» es trabajo del contador.",
  },
  {
    title: "Cifra verificable",
    body: "Toda cifra publicada lleva sus supuestos al lado y se cruza contra la tabla oficial del SAT.",
  },
  {
    title: "Tus datos son tuyos",
    body: "Funciona en tu equipo, sin CIEC ni e.firma. Lo decimos como un hecho, no como un ataque a otros.",
  },
  {
    title: "Honestidad de fundador",
    body: "Sin prueba social inflada, sin cupos inventados, sin urgencia artificial. Si algo es beta, se dice.",
  },
  {
    title: "Una idea a la vez",
    body: "Una pieza, un modelo mental, una frase ancla. El modelo se repite, no se acumula.",
  },
];

export const BRAND_PERSONALITY: [string, string][] = [
  ["Clara", "Simplista"],
  ["Precisa", "Técnica"],
  ["Cálida", "Chistosa"],
  ["Serena", "Alarmista"],
  ["Directa", "Agresiva"],
  ["Editorial", "Corporativa"],
];

export const BRAND_BOUNDARIES = [
  "No somos contador, ni su sustituto, ni estamos contra él.",
  "No declaramos por nadie: Fiscalio prepara un borrador.",
  "No afirmamos ni insinuamos la situación financiera o fiscal de quien lee.",
  "No prometemos ahorro de impuestos.",
];

export const VOICE_RULES = [
  {
    title: "Tuteo, español de México",
    body: "«Tú», nunca «usted» ni «vosotros».",
  },
  {
    title: "La cifra antes que el adjetivo",
    body: "«$8,550 este mes» en vez de «un impuesto altísimo».",
  },
  {
    title: "Modelo mental primero",
    body: "Cada explicación tiene un objeto que se puede dibujar: tres bóvedas, dos tableros, una línea de tiempo.",
  },
  {
    title: "Frase ancla",
    body: "Cada pieza se resume en una línea que se sostiene sola: «Te depositan menos. No te pagaron menos.»",
  },
  {
    title: "El error en general",
    body: "Nunca la conducta de quien lee. Marco condicional: «con el método de pago equivocado…».",
  },
  {
    title: "Enseñar antes de cerrar",
    body: "Ninguna pieza es un acertijo ni castiga al que no sabía.",
  },
  {
    title: "Supuestos a la vista",
    body: "El ejemplo se declara: «RESICO persona física, $50,000 + IVA 16% como único ingreso del mes».",
  },
  {
    title: "Frases cortas",
    body: "Un punto vale más que una coma. Sin signos de exclamación.",
  },
];

export const VOICE_RELIEF = [
  "claro",
  "en orden",
  "a tiempo",
  "tú controlas",
  "borrador",
  "entender",
  "lo que sí es tuyo",
];

export const VOICE_BANNED = [
  "paga menos impuestos",
  "optimiza tus impuestos",
  "evita multas",
  "garantizamos",
  "declaramos por ti",
  "agenda una demo",
];

export const VOICE_BANNED_FRAMES = [
  "Miedo explícito: multas, auditorías, cartas invitación, el día 17 como amenaza",
  "Culpa: señalar lo que quien lee hizo mal",
  "Urgencia artificial: cupos o fechas inventadas",
  "La pelea «contador contra software»",
];

export const VOICE_GLOSSARY: [string, string][] = [
  ["IVA que cobraste", "IVA trasladado"],
  ["Retención de ISR / de IVA", "ISR retenido / IVA retenido"],
  ["ISR neto a pagar", "ISR a liquidar"],
  ["Saldo a favor", "Crédito fiscal, ISR negativo"],
  ["Neto real", "Utilidad neta real"],
  ["Depósito bancario", "Depósito neto"],
  ["Método de pago (PUE / PPD)", "Forma de pago, etiqueta"],
  ["Borrador de declaración", "Declaración, cuando es el borrador"],
];

export const VOICE_REWRITES: [string, string, string][] = [
  [
    "Deja de pagar impuestos por dinero que no has cobrado",
    "Facturado no es cobrado",
    "Nombra el modelo, no la situación del lector",
  ],
  [
    "Proteger mi dinero",
    "Unirme a la beta privada",
    "El botón dice lo que pasa al tocarlo",
  ],
  [
    "¿No sabes cuánto vas a pagar?",
    "Así se calcula el ISR mensual en RESICO",
    "Tema, no atributo personal",
  ],
  [
    "¿Vas a meter la pata en tu declaración?",
    "El error más común al preparar la declaración mensual",
    "Error en general, sin culpa",
  ],
  [
    "Agenda una demo",
    "Sesión gratuita de 15 minutos",
    "Describe lo que se recibe",
  ],
  [
    "¡Evita multas del SAT!",
    "Tu mes y el mes del SAT no empiezan el mismo día",
    "Claridad en vez de amenaza",
  ],
];

export const VOICE_CHANNELS: [string, string, string, string][] = [
  [
    "Sitio",
    "Fiscalio",
    "Sobrio y concreto: qué hace, con qué, sin qué",
    "Titular ≤ 8 palabras",
  ],
  [
    "Blog",
    "Fiscalio",
    "Empático al abrir, modelo mental desde el inicio, cierre que deja herramientas",
    "Lectura larga",
  ],
  [
    "Facebook e Instagram",
    "Fiscalio",
    "Didáctico, una idea por semana",
    "80–160 palabras",
  ],
  [
    "LinkedIn",
    "Fiscalio",
    "De profesional a profesional: el mismo modelo, con más contexto de negocio",
    "120–220 palabras",
  ],
  [
    "Perfil del fundador",
    "Ezequiel, primera persona",
    "Lo que construyo, lo que aprendí, por qué lo decidí",
    "Libre",
  ],
  [
    "Correos",
    "Fiscalio o el fundador",
    "Breve y útil; invitaciones en texto plano",
    "≤ 120 palabras",
  ],
];

export const TYPE_SCALE_WEB: string[][] = [
  ["H1", "DM Sans", "2.25–3.75 rem", "500", "-0.025em / 1.1"],
  ["H2", "DM Sans", "1.5–1.875 rem", "500", "-0.025em / 1.25"],
  ["H3", "DM Sans", "1.25–1.5 rem", "500", "-0.025em / 1.3"],
  ["Cuerpo", "Geist", "1 rem", "400", "normal / 1.625"],
  ["Etiqueta", "Geist", "0.875 rem", "500", "normal"],
  ["Antetítulo", "Geist Mono, versales", "0.625–0.75 rem", "400", "0.2em"],
  ["Dato", "Geist Mono", "0.75–0.875 rem", "400–500", "normal"],
];

export const TYPE_SCALE_PLACA: string[][] = [
  ["Antetítulo", "Geist Mono, versales", "26–30 px", "400", "0.14em"],
  ["Cifra héroe", "Geist Mono", "120–190 px", "500", "-0.05em / 1"],
  ["Titular", "DM Sans", "84–104 px", "700", "-0.03em / 1.02"],
  ["Frase ancla", "DM Sans", "44–56 px", "700", "-0.02em / 1.15"],
  ["Cuerpo", "Geist", "30–34 px", "400–500", "normal / 1.3"],
  ["Cifra en tabla", "Geist Mono", "56–72 px", "500", "-0.04em"],
  ["Nota de supuestos", "Geist Mono", "24–28 px", "400", "0.06em"],
  ["Logotipo", "Geist Mono, versales", "40 px", "500", "-0.04em"],
];

export const MENTAL_MODELS: [string, string, string][] = [
  ["El IVA no es tuyo", "El IVA nunca fue tu dinero.", "Tres bóvedas"],
  [
    "Facturado ≠ cobrado",
    "Para el SAT, la factura es el inicio de la historia, no el final.",
    "Línea de tiempo día 1 → día 30",
  ],
  [
    "Dos juegos: ISR e IVA",
    "Las facturas ya no bajan tu ISR, pero sí bajan tu IVA.",
    "Dos tableros",
  ],
  [
    "La retención es un pago a cuenta",
    "Te depositan menos. No te pagaron menos.",
    "Bóvedas que llena tu cliente",
  ],
  [
    "Dos calendarios",
    "Tu mes y el mes del SAT no empiezan el mismo día.",
    "Dos líneas de tiempo",
  ],
];

export const SOCIAL_FORMATS: string[][] = [
  ["Carrusel bandera", "5 placas 4:5 · 1080 × 1350", "Alcance y guardados"],
  ["Estático de apoyo", "4:5 · 1080 × 1350", "Captura de correo"],
  ["Conversación", "Solo texto", "Comentarios"],
  ["Reel", "9:16 · 1080 × 1920 · 15–30 s", "Alcance"],
  ["Documento de LinkedIn", "PDF de placas 4:5 o 1:1", "Autoridad profesional"],
];

export const CAROUSEL_STRUCTURE: string[][] = [
  ["[01] TEMA", "La cifra o la tensión, con la frase ancla"],
  ["[02] LA PREGUNTA", "Pregunta abierta para comentarios; no un acertijo"],
  ["[03] EL MODELO", "El objeto del modelo mental"],
  ["[04] EL DESGLOSE", "Tabla con supuestos arriba"],
  ["[05] EL CIERRE", "La regla en una línea, el hábito y «Sigue a Fiscalio»"],
];

export const PUBLISH_CHECKLIST = [
  "Una sola idea y una frase ancla.",
  "Ninguna frase vetada ni encuadre de miedo o culpa.",
  "No afirma ni insinúa la situación de quien lee.",
  "Cifras verificadas contra lib/tax-constants.ts, con supuestos visibles.",
  "Términos del glosario (CONTEXT.md).",
  "Papel de fondo, un solo énfasis en terracota, ámbar solo para «lo tuyo».",
  "Dinero y porcentajes en mono.",
  "Texto mínimo de 24 px en placa; márgenes de 84 px; zona segura en 9:16.",
  "Imagotipo abajo a la izquierda.",
  "Un solo CTA. Enlace fuera del cuerpo del post.",
  "Capturas con modo privacidad; arte con crédito y licencia verificada.",
];

export const BRAND_CHANGES: [string, string][] = [
  [
    "Acentos canónicos del sitio: terracota #ac543f y ámbar #cc7800 (antes en redes: #b45309 y #fbbf24). Tinta #0e0b07 y grafito #272017 sustituyen a #262626 y #3a3a3a.",
    "Decidido. Pendiente: actualizar fiscalio-product-demo/src/tokens.ts",
  ],
  ["Esquinas en dos niveles: estructura recta, objetos suaves.", "Decidido"],
  ["Peso por contexto: 500 en sitio, 700 en redes.", "Aprobado"],
  [
    "Isotipo vectorial en public/brand/.",
    "Hecho. Pendiente: sustituir logo.png en components/logo.tsx y en Remotion",
  ],
  [
    "Firma de marca «Impuestos que se entienden.»",
    "Aprobado",
  ],
  [
    "Secuencia de gráficas con la paleta de marca en chart-1…5.",
    "Aprobado y aplicado en globals.css",
  ],
  [
    "Fundamentos: propósito, principios, personalidad y fronteras.",
    "Aprobado",
  ],
  [
    "Hero del sitio: la captura usa rounded-lg, shadow-2xl y un degradado.",
    "Pendiente de alinear",
  ],
  [
    "ContextualPainCTA del blog PUE/PPD conserva «Cuidado con pagar impuestos de más».",
    "Pendiente de reescribir",
  ],
];
