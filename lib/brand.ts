export const BRAND_VERSION = "1.1";
export const BRAND_DATE = "2026-11-12";

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
    body: "Toda cifra publicada declara sus supuestos y se cruza contra la tabla oficial del SAT. En redes, una vez: en la placa del desglose y en el texto del post.",
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
    body: "Una pieza, un modelo mental, una frase ancla. Una placa, un paso. El modelo se repite, no se acumula.",
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
    body: "El ejemplo se declara una vez por pieza: «RESICO persona física, $50,000 + IVA 16% como único ingreso del mes».",
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
  ["Antetítulo (solo portada)", "Geist Mono, versales", "28–32 px", "500", "0.12em"],
  ["Titular de portada", "DM Sans", "120–160 px", "700", "-0.04em / 0.98"],
  ["Titular", "DM Sans", "80–104 px", "700", "-0.03em / 1.02"],
  ["Cifra héroe", "Geist Mono", "160–240 px", "500", "-0.05em / 1"],
  ["Apoyo", "Geist", "40–48 px", "500", "-0.01em / 1.25"],
  ["Etiqueta de diagrama", "Geist Mono, versales", "28–32 px", "500", "0.08em"],
  ["Cifra de diagrama", "Geist Mono", "56–80 px", "500", "-0.04em"],
  ["Supuestos (solo desglose)", "Geist Mono", "24–28 px", "400", "0.02em"],
  ["Folio", "Geist Mono", "24 px", "400", "0.08em"],
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
  ["Carrusel bandera", "6–8 placas 4:5 · 1080 × 1350", "Alcance y guardados"],
  ["Estático de apoyo", "Una placa 4:5 · 1080 × 1350", "Captura de correo"],
  ["Conversación", "Solo texto", "Comentarios"],
  ["Reel", "9:16 · 1080 × 1920 · 15–30 s", "Alcance"],
  ["Documento de LinkedIn", "PDF de placas 4:5 o 1:1", "Autoridad profesional"],
];

export const SOCIAL_PRINCIPLES = [
  {
    title: "Coherencia",
    body: "Todo lo que no explica la idea, sobra.",
  },
  {
    title: "Señalización",
    body: "Una sola cosa destaca por placa.",
  },
  {
    title: "Segmentación",
    body: "El carrusel reparte la explicación en pasos; ninguna placa la contiene entera.",
  },
  {
    title: "Contigüidad",
    body: "La etiqueta va pegada al objeto que nombra.",
  },
];

export const PLACA_BUDGET: string[][] = [
  ["Portada", "≤ 8", "2", "El titular o la cifra héroe"],
  ["Interior", "≤ 25", "3", "El objeto del modelo o una cifra"],
  ["Desglose", "≤ 25 + cifras", "3", "La cifra final"],
  ["Regla y cierre", "≤ 15", "2", "La frase ancla"],
];

export const CAROUSEL_STRUCTURE: string[][] = [
  ["Portada", "1", "Nombra la tensión en una línea. Sin supuestos, tablas ni cuerpo"],
  ["Situación", "1", "El caso concreto con una cifra. Funciona también como segunda portada"],
  ["Modelo", "1–3", "El objeto del modelo mental, una capa por placa"],
  ["Desglose", "1", "La cuenta, con los supuestos en una sola línea"],
  ["Regla", "1", "La frase ancla, en grande"],
  ["Cierre", "1", "El hábito en una línea y «Sigue a Fiscalio»"],
];

export const SOCIAL_TESTS = [
  {
    title: "Miniatura",
    body: "La portada a 270 px de ancho (25%): el titular se lee sin acercarse.",
  },
  {
    title: "Tres segundos",
    body: "Alguien que no conoce la pieza ve cada placa tres segundos y dice qué entendió. Si dice dos cosas, la placa tiene dos ideas.",
  },
  {
    title: "Conteo",
    body: "Palabras y niveles de texto dentro del presupuesto. Si no cabe, se agrega una placa; nunca se reduce el texto.",
  },
];

export const PUBLISH_CHECKLIST = [
  "Una sola idea por pieza, un paso por placa y una frase ancla.",
  "Ninguna frase vetada ni encuadre de miedo o culpa.",
  "No afirma ni insinúa la situación de quien lee.",
  "Cifras verificadas contra lib/tax-constants.ts; supuestos en la placa del desglose y en el texto del post.",
  "Términos del glosario (CONTEXT.md).",
  "Presupuesto: portada ≤ 8 palabras, interiores ≤ 25, máximo tres niveles de texto por placa.",
  "Pasa la prueba de miniatura y la de tres segundos.",
  "Papel de fondo, un acento por placa, ámbar solo para «lo tuyo».",
  "Dinero y porcentajes en mono; decimales solo en el desglose.",
  "Texto mínimo de 28 px en placa (24 px solo folio y supuestos); márgenes de 84 px; zona segura 3:4 y 9:16.",
  "Firma y folio en su sitio; antetítulo solo en la portada.",
  "Un solo CTA. Enlace fuera del cuerpo del post; la pregunta en el texto.",
  "Copy dividido o recortado aprobado por el fundador.",
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
    "Hero del sitio: la captura usaba rounded-lg, shadow-2xl y un degradado.",
    "Hecho: filete de 1 px, esquinas rectas, sin sombra ni degradado",
  ],
  [
    "ContextualPainCTA del blog PUE/PPD conserva «Cuidado con pagar impuestos de más».",
    "Pendiente de reescribir",
  ],
  [
    "v1.1 · Presupuesto por placa: portada ≤ 8 palabras, interiores ≤ 25, máximo tres niveles de texto.",
    "Aprobado",
  ],
  [
    "v1.1 · Arco de 6–8 placas en lugar del esqueleto fijo de 5; sin numeración [01] ni antetítulos interiores; folio en el pie.",
    "Aprobado",
  ],
  [
    "v1.1 · La pregunta sale de las placas; los supuestos se declaran una vez, en el desglose y en el texto del post.",
    "Aprobado",
  ],
  [
    "v1.1 · Estático de una sola placa; escala con titulares de 80–160 px y mínimo de 28 px; diagramas por capas; un acento por placa.",
    "Aprobado",
  ],
  [
    "v1.1 · Imagotipo en portada, cierre y estático; isotipo solo en placas interiores.",
    "Aprobado",
  ],
  [
    "v1.1 · Ejemplos de copy dividido en la sección de redes.",
    "Aprobado",
  ],
  [
    "v1.1 · Aplicar a los componentes de fiscalio-product-demo/src/social/.",
    "Pendiente",
  ],
];
