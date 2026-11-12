import type { Metadata } from "next";
import Image from "next/image";
import { LogoLockup, LogoMark } from "@/components/brand/logo-mark";
import {
  BRAND_ACCENTS,
  BRAND_BOUNDARIES,
  BRAND_CHANGES,
  BRAND_COLORS,
  BRAND_DATE,
  BRAND_PERSONALITY,
  BRAND_PRINCIPLES,
  BRAND_SECTIONS,
  BRAND_VERSION,
  CAROUSEL_STRUCTURE,
  MENTAL_MODELS,
  PAPER_SCOPE,
  PLACA_BUDGET,
  PUBLISH_CHECKLIST,
  SOCIAL_FORMATS,
  SOCIAL_PRINCIPLES,
  SOCIAL_TESTS,
  TYPE_SCALE_PLACA,
  TYPE_SCALE_WEB,
  VOICE_BANNED,
  VOICE_BANNED_FRAMES,
  VOICE_CHANNELS,
  VOICE_GLOSSARY,
  VOICE_RELIEF,
  VOICE_REWRITES,
  VOICE_RULES,
  type BrandColor,
} from "@/lib/brand";
import { cn } from "@/lib/utils";
import ArtBackground from "@/public/on_the_bure_near_aylsham_norfolk_1951.16.174.jpg";
import Snapshot from "@/public/snapshot.png";
import {
  Avatar,
  PlacaCierre,
  PlacaDesglose,
  PlacaModelo,
  PlacaPortada,
  PlacaRegla,
  PlacaSituacion,
  ZonaSegura,
} from "./_components/placas";
import {
  Block,
  Estado,
  Eyebrow,
  Lista,
  Par,
  Section,
  Tabla,
} from "./_components/primitives";

export const metadata: Metadata = {
  title: "Brandbook | Fiscalio",
};

function Swatch({ color, tall = false }: { color: BrandColor; tall?: boolean }) {
  return (
    <div className="border bg-card">
      <div
        className={cn("border-b", tall ? "h-36" : "h-24")}
        style={{ background: `var(${color.cssVar})` }}
      />
      <div className="space-y-1 p-4">
        <p className="font-display text-lg font-medium tracking-tight">
          {color.name}
        </p>
        <p className="font-mono text-[12px] uppercase">{color.hex}</p>
        <p className="font-mono text-[11px] text-muted-foreground">
          oklch({color.oklch})
        </p>
        <p className="font-mono text-[11px] text-muted-foreground">
          {color.token}
        </p>
        <p className="pt-2 text-sm leading-snug text-muted-foreground">
          {color.role}
        </p>
      </div>
    </div>
  );
}

function Regla({ title, body }: { title: string; body: string }) {
  return (
    <div className="bg-background p-6">
      <p className="font-display text-lg font-medium tracking-tight">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {body}
      </p>
    </div>
  );
}

const section = (id: (typeof BRAND_SECTIONS)[number]["id"]) => {
  const index = BRAND_SECTIONS.findIndex((s) => s.id === id);
  return { id, index: index + 1, title: BRAND_SECTIONS[index].title };
};

export default function BrandbookPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <header className="grid gap-12 py-16 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-8">
            <Eyebrow>
              Brandbook · v{BRAND_VERSION} · {BRAND_DATE}
            </Eyebrow>
            <h1 className="mt-8 font-display text-5xl font-medium leading-[1.02] tracking-tight lg:text-8xl">
              Precisión
              <br />
              <span className="text-muted-foreground">cálida.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Cómo se ve, cómo suena y cómo se comporta Fiscalio en redes
              sociales y en el sitio web. La categoría vende miedo; Fiscalio
              vende claridad.
            </p>
          </div>
          <div className="flex items-end lg:col-span-4 lg:justify-end">
            <LogoMark className="size-40 lg:size-56" />
          </div>
        </header>

        <div className="grid gap-12 lg:grid-cols-12">
          <nav
            aria-label="Secciones"
            className="lg:col-span-2 lg:sticky lg:top-8 lg:self-start"
          >
            <ol className="flex gap-x-6 gap-y-2 overflow-x-auto border-y py-4 lg:flex-col lg:overflow-visible lg:border-y-0 lg:py-0">
              {BRAND_SECTIONS.map((s, i) => (
                <li key={s.id} className="shrink-0">
                  <a
                    href={`#${s.id}`}
                    className="flex gap-3 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground"
                  >
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    <span>{s.title}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <main className="min-w-0 lg:col-span-10">
            <Section
              {...section("fundamentos")}
              lead="Que nadie que trabaja por su cuenta en México tenga que adivinar cuánto de su dinero es suyo."
            >
              <Block title="Posicionamiento">
                <p className="max-w-3xl font-display text-2xl font-medium leading-snug tracking-tight lg:text-3xl">
                  Para personas físicas en RESICO que facturan por su cuenta,
                  Fiscalio convierte sus facturas en un borrador claro de su
                  declaración mensual: funciona en su equipo, no pide la
                  contraseña del SAT y{" "}
                  <span className="text-accent-rust">
                    se paga una sola vez.
                  </span>
                </p>
              </Block>

              <Block
                title="Idea de marca"
                note="Cada decisión visual o verbal se defiende con una de las dos palabras. Si no es ninguna, sobra."
              >
                <div className="grid gap-px border bg-border sm:grid-cols-2">
                  <Regla
                    title="Precisión"
                    body="La exactitud de una hoja contable: cifras en mono, supuestos a la vista, términos del CFDI, líneas rectas."
                  />
                  <Regla
                    title="Calidez"
                    body="La calma de una página bien editada: papel en vez de blanco, tuteo, modelos que se pueden dibujar, nada de miedo."
                  />
                </div>
              </Block>

              <Block title="Líneas de marca">
                <Tabla
                  head={["Uso", "Línea", "Estado"]}
                  rows={[
                    [
                      "Descriptor",
                      "Control fiscal claro para RESICO",
                      <Estado key="a">Vigente</Estado>,
                    ],
                    [
                      "Serie editorial",
                      "Un modelo mental fiscal cada semana",
                      <Estado key="b">Vigente</Estado>,
                    ],
                    [
                      "Firma de marca",
                      "Impuestos que se entienden.",
                      <Estado key="c">Vigente</Estado>,
                    ],
                  ]}
                />
              </Block>

              <Block title="Principios">
                <div className="grid gap-px border bg-border sm:grid-cols-2 xl:grid-cols-3">
                  {BRAND_PRINCIPLES.map((p, i) => (
                    <div key={p.title} className="bg-background p-6">
                      <p className="font-mono text-[11px] text-muted-foreground">
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <p className="mt-3 font-display text-lg font-medium tracking-tight">
                        {p.title}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {p.body}
                      </p>
                    </div>
                  ))}
                </div>
              </Block>

              <Block
                title="Personalidad"
                note="El colega que entiende de impuestos y te lo explica con una pluma y una servilleta."
              >
                <Tabla head={["Es", "No es"]} rows={BRAND_PERSONALITY} />
              </Block>

              <Block title="Fronteras">
                <Lista items={BRAND_BOUNDARIES} tone="no" />
              </Block>

              <Block title="A quién le hablamos">
                <p className="max-w-2xl leading-relaxed">
                  Persona física en RESICO que factura por su cuenta:
                  desarrolladora, diseñador, consultora o un negocio familiar
                  pequeño. Usa bien la tecnología, desconfía del software
                  inflado y de subir sus datos a la nube, y siente incertidumbre
                  frente al SAT, no ignorancia. Quiere entender su dinero, no
                  convertirse en contador.
                </p>
              </Block>
            </Section>

            <Section
              {...section("voz")}
              lead="Sin prisa, con el número exacto y sin hacer sentir mal a nadie por no saberlo."
            >
              <Block title="Reglas de voz">
                <div className="grid gap-px border bg-border sm:grid-cols-2">
                  {VOICE_RULES.map((r) => (
                    <Regla key={r.title} {...r} />
                  ))}
                </div>
              </Block>

              <Block title="Léxico">
                <Par
                  si={{
                    label: "Lenguaje del alivio",
                    children: (
                      <ul className="flex flex-wrap gap-2">
                        {VOICE_RELIEF.map((w) => (
                          <li key={w} className="border px-3 py-1.5 text-sm">
                            {w}
                          </li>
                        ))}
                      </ul>
                    ),
                  }}
                  no={{
                    label: "Frases vetadas en todo canal",
                    children: (
                      <ul className="flex flex-wrap gap-2">
                        {VOICE_BANNED.map((w) => (
                          <li
                            key={w}
                            className="border px-3 py-1.5 text-sm text-muted-foreground line-through"
                          >
                            {w}
                          </li>
                        ))}
                      </ul>
                    ),
                  }}
                />
                <div className="mt-8">
                  <Lista items={VOICE_BANNED_FRAMES} tone="no" />
                </div>
              </Block>

              <Block
                title="Glosario"
                note="CONTEXT.md manda. Estos son los términos más usados."
              >
                <Tabla head={["Decimos", "No decimos"]} rows={VOICE_GLOSSARY} />
              </Block>

              <Block title="Ortotipografía">
                <Tabla
                  head={["Elemento", "Regla", "Ejemplo"]}
                  mono={[2]}
                  rows={[
                    [
                      "Dinero",
                      "Signo pegado y coma de millares. Dos decimales en desgloses, sin decimales en titulares.",
                      "$58,000.00 · $8,550",
                    ],
                    ["Porcentajes", "Sin espacio, en mono.", "16% · 1.25%"],
                    [
                      "Citas y títulos",
                      "Comillas angulares.",
                      "«Facturado no es cobrado»",
                    ],
                    [
                      "Símbolos",
                      "Tienen significado; no son adorno.",
                      "≠  →  ·",
                    ],
                    [
                      "Mayúsculas",
                      "Oración normal en titulares. Versales solo en etiquetas mono y botones.",
                      "EL MODELO",
                    ],
                    [
                      "Emojis y hashtags",
                      "No forman parte de la voz, ni en el arte ni en el texto.",
                      "—",
                    ],
                  ]}
                />
              </Block>

              <Block title="Antes y después">
                <Tabla
                  head={["En lugar de", "Escribimos", "Por qué"]}
                  rows={VOICE_REWRITES.map(([antes, despues, porque]) => [
                    <span
                      key="a"
                      className="font-normal text-muted-foreground line-through"
                    >
                      {antes}
                    </span>,
                    <span key="d" className="font-medium">
                      {despues}
                    </span>,
                    <span key="p" className="text-muted-foreground">
                      {porque}
                    </span>,
                  ])}
                />
              </Block>

              <Block
                title="Llamados a la acción"
                note="Un solo CTA por pieza. El botón describe la acción, nunca la emoción."
              >
                <Tabla
                  head={["Contexto", "CTA"]}
                  rows={[
                    ["Dentro de una pieza de redes", "Sigue a Fiscalio"],
                    ["Sitio, captura de correo", "Unirme a la beta privada"],
                    [
                      "Oferta de sesión",
                      "Prepara tu borrador gratis · Sesión gratuita de 15 minutos",
                    ],
                    ["Herramienta", "Abrir la calculadora"],
                  ]}
                />
              </Block>

              <Block title="La voz por canal">
                <Tabla
                  head={["Canal", "Quién habla", "Registro", "Longitud"]}
                  rows={VOICE_CHANNELS}
                />
              </Block>
            </Section>

            <Section
              {...section("logo")}
              lead="El marco: un cuadro de esquinas suaves con un interior cóncavo recortado. Encuadra una sola idea."
            >
              <Block
                title="Versiones"
                note="El imagotipo horizontal es la versión por defecto. Vector: public/brand/fiscalio-isotipo.svg"
              >
                <div
                  className="grid gap-px border bg-border sm:grid-cols-2"
                  style={PAPER_SCOPE}
                >
                  <div className="flex h-56 items-center justify-center bg-background text-foreground">
                    <LogoLockup className="text-3xl" />
                  </div>
                  <div className="flex h-56 items-center justify-center bg-primary text-primary-foreground">
                    <LogoLockup className="text-3xl" />
                  </div>
                  <div className="flex h-56 items-center justify-center bg-background text-foreground">
                    <LogoMark className="size-24" />
                  </div>
                  <div className="flex h-56 items-center justify-center bg-primary text-primary-foreground">
                    <LogoMark className="size-24" />
                  </div>
                </div>
              </Block>

              <Block
                title="Construcción"
                note="x es el tamaño de fuente del logotipo: Geist Mono 500, versales, -0.04em."
              >
                <Tabla
                  head={["Medida", "Valor"]}
                  mono={[1]}
                  rows={[
                    ["Alto del isotipo", "1.45x"],
                    ["Separación isotipo–logotipo", "0.65x"],
                    ["Área de respeto del imagotipo", "1x por lado"],
                    ["Área de respeto del isotipo solo", "¼ de su lado"],
                    ["Radio exterior del isotipo", "25% del lado"],
                    ["Isotipo mínimo", "16 px en pantalla · 56 px en placa"],
                    [
                      "Imagotipo mínimo",
                      "88 px de ancho en pantalla · 240 px en placa",
                    ],
                  ]}
                />
              </Block>

              <Block title="Color del logo">
                <Par
                  si={{
                    children: (
                      <Lista
                        items={[
                          "Tinta sobre papel o blanco.",
                          "Papel sobre tinta o grafito.",
                          "Sobre imagen, en una zona limpia y con contraste.",
                        ]}
                        tone="si"
                      />
                    ),
                  }}
                  no={{
                    children: (
                      <Lista
                        items={[
                          "En terracota o ámbar.",
                          "Deformado, girado, con sombra o contorno.",
                          "Con otra tipografía o con el interior relleno de color.",
                          "El PNG de 500 px ampliado a más de 250 px.",
                        ]}
                        tone="no"
                      />
                    ),
                  }}
                />
              </Block>

              <Block
                title="En redes"
                note="Foto de perfil: isotipo al 56% del lado. Firma de pieza: imagotipo abajo a la izquierda en portada, cierre y estático; isotipo solo en placas interiores."
              >
                <div className="grid max-w-md grid-cols-3 gap-6">
                  <div>
                    <Avatar />
                    <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                      Perfil
                    </p>
                  </div>
                  <div>
                    <Avatar invertido />
                    <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                      Alterno
                    </p>
                  </div>
                </div>
              </Block>
            </Section>

            <Section
              {...section("color")}
              lead="La paleta canónica es la del sitio. Redes, video, PDF y correo usan exactamente los mismos valores."
            >
              <Block title="Base">
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
                  {BRAND_COLORS.map((c) => (
                    <Swatch key={c.token} color={c} />
                  ))}
                </div>
              </Block>

              <Block
                title="Acentos"
                note="Un acento por placa. Un solo énfasis en terracota por titular. El impuesto nunca va en ámbar. Si hay que explicar qué significa un color, sobran colores."
              >
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  {BRAND_ACCENTS.map((c) => (
                    <Swatch key={c.token} color={c} tall />
                  ))}
                </div>
              </Block>

              <Block
                title="Proporción"
                note="Una pieza donde los acentos superan el 10% está gritando."
              >
                <div className="flex h-20 border" style={PAPER_SCOPE}>
                  <div className="w-[70%] bg-background" />
                  <div className="w-[20%] bg-foreground" />
                  <div className="w-[7%] bg-accent-rust" />
                  <div className="w-[3%] bg-accent-amber" />
                </div>
                <p className="mt-3 font-mono text-[12px] text-muted-foreground">
                  Papel 70% · Tinta 20% · Terracota 7% · Ámbar 3%
                </p>
              </Block>

              <Block
                title="Semántica"
                note="Un color, un significado. Se mantiene dentro de la pieza y entre semanas."
              >
                <Tabla
                  head={["Color", "Significa", "Ejemplo"]}
                  rows={[
                    [
                      <span key="p" className="text-muted-foreground">
                        Piedra
                      </span>,
                      "El dato neutro, lo que dice el documento",
                      "Bóvedas de IVA e ISR, el método de pago",
                    ],
                    [
                      <span key="t" className="text-accent-rust">
                        Terracota
                      </span>,
                      "Lo que el SAT cuenta; la frase que importa",
                      "«no el final.» · → el SAT cuenta $8,550 este mes",
                    ],
                    [
                      <span
                        key="a"
                        className="border-b-2 border-accent-amber"
                      >
                        Ámbar
                      </span>,
                      "Lo que es tuyo o sigue abierto",
                      "La bóveda «Tuya», el pago que llega",
                    ],
                  ]}
                />
              </Block>

              <Block title="Contraste">
                <Tabla
                  head={["Par", "Ratio", "Uso permitido"]}
                  mono={[1]}
                  rows={[
                    ["Tinta sobre papel", "18.9 : 1", "Todo"],
                    ["Piedra sobre papel", "5.8 : 1", "Texto de cualquier tamaño"],
                    [
                      "Terracota sobre papel",
                      "4.9 : 1",
                      "Texto de cualquier tamaño",
                    ],
                    [
                      "Ámbar sobre papel",
                      "3.2 : 1",
                      "Solo rellenos, filetes y cifras de 24 px o más en negrita",
                    ],
                    ["Papel sobre grafito", "15.4 : 1", "Todo"],
                    ["Tinta sobre ámbar", "5.9 : 1", "Texto sobre relleno ámbar"],
                  ]}
                />
              </Block>

              <Block
                title="Gráficas"
                note="Las series siguen este orden (chart-1 a chart-5). Más de cinco series: divide la gráfica."
              >
                <div className="flex h-32 items-end gap-3 border-b-2 border-foreground">
                  {[
                    ["Tinta", 100],
                    ["Piedra", 72],
                    ["Terracota", 54],
                    ["Ámbar", 38],
                    ["Ámbar claro", 22],
                  ].map(([name, h], i) => (
                    <div
                      key={name}
                      className="flex-1"
                      style={{
                        height: `${h}%`,
                        background: `var(--chart-${i + 1})`,
                      }}
                    />
                  ))}
                </div>
                <p className="mt-3 font-mono text-[12px] text-muted-foreground">
                  Tinta → Piedra → Terracota → Ámbar → Ámbar claro
                </p>
              </Block>

              <Block title="Lo que no se usa">
                <Lista
                  tone="no"
                  items={[
                    "Degradados.",
                    "Azules o verdes saturados.",
                    "Blanco puro como fondo de página; negro puro como texto.",
                    "Fondo oscuro en redes, salvo una placa de contraste por carrusel.",
                  ]}
                />
              </Block>
            </Section>

            <Section
              {...section("tipografia")}
              lead="Tres familias, tres trabajos: DM Sans titula, Geist se lee, Geist Mono cuenta."
            >
              <Block title="Familias">
                <div className="grid gap-px border bg-border md:grid-cols-3">
                  <div className="bg-background p-6">
                    <p className="font-display text-6xl font-medium tracking-tight">
                      Aa
                    </p>
                    <p className="mt-6 font-display text-xl font-medium tracking-tight">
                      DM Sans
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Titulares y frases ancla.
                    </p>
                  </div>
                  <div className="bg-background p-6">
                    <p className="text-6xl">Aa</p>
                    <p className="mt-6 text-xl font-medium">Geist</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Cuerpo, interfaz, pies.
                    </p>
                  </div>
                  <div className="bg-background p-6">
                    <p className="font-mono text-6xl tracking-[-0.05em]">$0</p>
                    <p className="mt-6 font-mono text-xl">Geist Mono</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Dinero, porcentajes, etiquetas, logotipo.
                    </p>
                  </div>
                </div>
              </Block>

              <Block
                title="Peso por contexto"
                note="En el sitio los encabezados se leen; en redes tienen que detener el scroll."
              >
                <div className="grid gap-px border bg-border md:grid-cols-2">
                  <div className="bg-background p-6">
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                      Sitio · 500
                    </p>
                    <p className="mt-4 font-display text-4xl font-medium leading-[1.1] tracking-tight">
                      Organiza tus facturas
                      <br />
                      <span className="text-muted-foreground">
                        sin pagar mensualidades
                      </span>
                    </p>
                  </div>
                  <div className="bg-background p-6">
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                      Redes · 700
                    </p>
                    <p className="mt-4 font-display text-4xl font-bold leading-[1.02] tracking-[-0.03em]">
                      Facturado <span className="text-accent-rust">≠</span>{" "}
                      cobrado
                    </p>
                  </div>
                </div>
              </Block>

              <Block title="Escala del sitio">
                <Tabla
                  head={["Nivel", "Familia", "Tamaño", "Peso", "Espaciado / interlínea"]}
                  mono={[2, 3, 4]}
                  rows={TYPE_SCALE_WEB}
                />
              </Block>

              <Block
                title="Escala de placa"
                note="Sobre un lienzo de 1080 px de ancho. Máximo tres niveles de texto por placa, sin contar firma ni folio. Mínimo 28 px; 24 px solo en folio y supuestos."
              >
                <Tabla
                  head={["Elemento", "Familia", "Tamaño", "Peso", "Espaciado / interlínea"]}
                  mono={[2, 3, 4]}
                  rows={TYPE_SCALE_PLACA}
                />
              </Block>

              <Block title="Reglas">
                <Lista
                  tone="si"
                  items={[
                    "El énfasis se hace con color terracota, no con subrayado ni cursiva.",
                    "Todo número con signo de pesos o porcentaje va en mono.",
                    "Titulares de máximo tres líneas, alineados a la izquierda. Centrado solo en el hero del sitio.",
                    "Nunca cursiva. Nunca versales en DM Sans.",
                    "En placa, el mono es para cifras, etiquetas y folio. Una oración nunca va en mono.",
                  ]}
                />
              </Block>
            </Section>

            <Section
              {...section("forma")}
              lead="Estructura recta, objetos suaves. La estructura es un documento; los objetos son cosas que se pueden tomar con la mano."
            >
              <Block title="Esquinas">
                <div className="grid grid-cols-2 gap-px border bg-border md:grid-cols-4">
                  {[
                    ["Estructura", "0 px", "Botones, campos, tablas, tarjetas, capturas", "rounded-none"],
                    ["Objeto", "28 px en 1080", "Bóvedas, fichas, tableros", "rounded-2xl"],
                    ["Marca", "25% del lado", "Isotipo", "rounded-[25%]"],
                    ["Nodo", "Círculo", "Puntos de líneas de tiempo", "rounded-full"],
                  ].map(([name, value, use, radius]) => (
                    <div key={name} className="bg-background p-6">
                      <div
                        className={cn(
                          "size-16 border-2 border-foreground",
                          radius,
                        )}
                      />
                      <p className="mt-6 font-display text-lg font-medium tracking-tight">
                        {name}
                      </p>
                      <p className="font-mono text-[12px]">{value}</p>
                      <p className="mt-2 text-sm leading-snug text-muted-foreground">
                        {use}
                      </p>
                    </div>
                  ))}
                </div>
              </Block>

              <Block
                title="Líneas"
                note="Sin sombras en redes. En el sitio, máximo shadow-sm en tarjetas y campos."
              >
                <div className="space-y-8">
                  <div>
                    <div className="border-t-2 border-foreground" />
                    <p className="mt-2 text-sm">
                      <span className="font-medium">Regla fuerte.</span> 2 px en
                      tinta. Abre una tabla o un bloque de cifras.
                    </p>
                  </div>
                  <div>
                    <div className="border-t" />
                    <p className="mt-2 text-sm">
                      <span className="font-medium">Filete.</span> 1 px en
                      Línea. Separa filas y columnas.
                    </p>
                  </div>
                  <div>
                    <div className="border-t-2 border-dashed border-foreground" />
                    <p className="mt-2 text-sm">
                      <span className="font-medium">Punteada.</span> 2 px en
                      tinta. Significa «sigue abierto».
                    </p>
                  </div>
                </div>
              </Block>

              <Block title="Lienzos">
                <Tabla
                  head={["Lienzo", "Tamaño", "Margen", "Notas"]}
                  mono={[1, 2]}
                  rows={[
                    ["Sitio", "1280 px · 12 columnas", "24–48 px", "py-12 a py-24 entre secciones"],
                    ["Placa 4:5", "1080 × 1350", "84 px", "Facebook e Instagram. Zona segura 3:4: lo esencial en los 1012 px centrales"],
                    ["Placa 1:1", "1080 × 1080", "84 px", "Respaldo y LinkedIn"],
                    ["Vertical 9:16", "1080 × 1920", "6% lados", "Zona segura: 14% arriba, 35% abajo"],
                  ]}
                />
              </Block>

              <div>
                <h3 className="font-display text-xl font-medium tracking-tight">
                  Anatomía de una placa
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  El titular arranca a 240 px del borde en todas las placas. Un
                  elemento dominante ocupa al menos el 40% del lienzo; el
                  contenido se ancla arriba y el vacío se junta abajo, en un
                  solo bloque. Firma abajo a la izquierda, folio abajo a la
                  derecha. Antetítulo solo en la portada.
                </p>
                <div className="mt-8 grid gap-6 md:grid-cols-3">
                  <PlacaPortada />
                  <PlacaModelo capa={2} />
                  <PlacaDesglose />
                </div>
              </div>
            </Section>

            <Section
              {...section("diagramas")}
              lead="El diagrama es el activo principal de la marca. Cada modelo mental tiene un objeto propio y no recicla el de otro."
            >
              <Block
                title="Modelos y objetos"
                note="El registro completo vive en model-bank.md."
              >
                <Tabla
                  head={["Modelo", "Frase ancla", "Objeto"]}
                  rows={MENTAL_MODELS.map(([m, f, o]) => [m, `«${f}»`, o])}
                />
              </Block>

              <Block title="Reglas de dibujo">
                <Lista
                  tone="si"
                  items={[
                    "Formas planas: rectángulos suaves, líneas y puntos. Sin iconos ilustrados, sin 3D, sin perspectiva.",
                    "El diagrama ocupa al menos el 40% del lienzo y se dibuja directo sobre papel, no dentro de una tarjeta con filete.",
                    "Etiquetas pegadas al objeto que nombran, máximo tres por placa. Ningún párrafo aparte explica el dibujo.",
                    "Construcción por capas: el objeto no cambia de lugar entre placas y cada una agrega una capa. Lo nuevo en el acento; lo ya visto en piedra.",
                    "El nivel de llenado representa una cantidad real, a escala.",
                    "Etiquetas en mono con versales, nombres en DM Sans, cifras en mono.",
                    "Un sello (FIN, BORRADOR) puede girar hasta 6°. Es lo único que rompe la retícula.",
                    "Si el diagrama necesita leyenda para entenderse, no está terminado.",
                    "El mismo ejemplo numérico se sostiene entre semanas: $50,000 + IVA 16%.",
                  ]}
                />
              </Block>
            </Section>

            <Section
              {...section("imagen")}
              lead="Tres recursos, en orden de frecuencia: tipografía y diagramas, capturas de producto, arte editorial."
            >
              <Block
                title="Capturas de producto"
                note="Una sola idea por captura. Filete de 1 px, esquinas rectas, sin marco de dispositivo."
              >
                <div className="border">
                  <Image
                    src={Snapshot}
                    alt="Fiscalio: listado de facturas organizadas por mes"
                    className="h-auto w-full"
                  />
                </div>
                <div className="mt-6">
                  <Lista
                    tone="si"
                    items={[
                      "Siempre con modo privacidad activo o con datos de ejemplo. Nunca un RFC, nombre o importe real.",
                      "Recortar a lo que la pieza explica; no mostrar toda la pantalla para enseñar todo.",
                      "Anotaciones en mono con filete terracota. Máximo tres por captura.",
                      "Sobre papel o sobre arte editorial; nunca sobre un color plano saturado.",
                    ]}
                  />
                </div>
              </Block>

              <Block
                title="Arte editorial"
                note="Escenario para el hero, portadas de blog y portada de Facebook. No decora placas educativas."
              >
                <figure>
                  <div className="border">
                    <Image
                      src={ArtBackground}
                      alt="On the Bure, near Aylsham, Norfolk, atribuido a James Bulwer"
                      className="h-auto w-full"
                    />
                  </div>
                  <figcaption className="mt-3 font-mono text-[11px] text-muted-foreground">
                    On the Bure, near Aylsham, Norfolk · atribuido a James Bulwer
                  </figcaption>
                </figure>
                <div className="mt-6">
                  <Lista
                    tone="si"
                    items={[
                      "Pintura y grabado de dominio público o acceso abierto: paisajes y escenas serenas, de tono cálido.",
                      "Verificar la licencia de cada obra antes de usarla. Crédito siempre: título, autor, colección.",
                      "Sin filtros, duotonos ni recortes que cambien la obra.",
                    ]}
                  />
                </div>
              </Block>

              <Block title="Lo que no se usa">
                <Lista
                  tone="no"
                  items={[
                    "Fotografía de stock.",
                    "Personas generadas con IA.",
                    "Ilustración 3D, iconos decorativos, memes.",
                    "Capturas del portal del SAT como recurso de miedo.",
                  ]}
                />
              </Block>
            </Section>

            <Section
              {...section("redes")}
              lead="Una idea por semana, en el mismo sistema visual, con un solo llamado a la acción: «Sigue a Fiscalio»."
            >
              <Block
                title="Cómo se lee en el feed"
                note="Uno o dos segundos frente a la portada, a un tercio de su tamaño. Cuatro principios del aprendizaje multimedia (Mayer)."
              >
                <div className="grid gap-px border bg-border sm:grid-cols-2">
                  {SOCIAL_PRINCIPLES.map((p) => (
                    <Regla key={p.title} title={p.title} body={p.body} />
                  ))}
                </div>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  La densidad no se mide en palabras sino en niveles: pocas
                  palabras repartidas en seis estilos de texto se leen como
                  ruido.
                </p>
              </Block>

              <Block
                title="Formatos"
                note="Facebook e Instagram usan el mismo archivo 4:5, con lo esencial dentro de la zona segura 3:4."
              >
                <Tabla
                  head={["Pieza", "Formato", "Función"]}
                  mono={[1]}
                  rows={SOCIAL_FORMATS}
                />
              </Block>

              <Block
                title="Presupuesto por placa"
                note="Cuentan todas las palabras visibles salvo firma y folio. Si no cabe, se agrega una placa; nunca se reduce el texto."
              >
                <Tabla
                  head={["Placa", "Palabras", "Niveles", "Elemento dominante"]}
                  mono={[1, 2]}
                  rows={PLACA_BUDGET}
                />
              </Block>

              <Block
                title="Arco del carrusel"
                note="Entre 6 y 8 placas. La pregunta para comentarios va en el texto del post. Ninguna placa depende de que otra quede oculta: la segunda puede aparecer como portada."
              >
                <Tabla
                  head={["Paso", "Placas", "Qué hace"]}
                  mono={[1]}
                  rows={CAROUSEL_STRUCTURE}
                />
              </Block>

              <div>
                <h3 className="font-display text-xl font-medium tracking-tight">
                  Ejemplo: Facturado ≠ cobrado
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  El copy aprobado de la semana 3, dividido en siete placas. El
                  modelo se construye en dos capas sobre la misma línea de
                  tiempo.
                </p>
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  <PlacaPortada />
                  <PlacaSituacion />
                  <PlacaModelo capa={1} />
                  <PlacaModelo capa={2} />
                  <PlacaDesglose />
                  <PlacaRegla />
                  <PlacaCierre />
                </div>
              </div>

              <Block
                title="Estático"
                note="Una placa, no el carrusel comprimido."
              >
                <Lista
                  tone="si"
                  items={[
                    "Se elige una: la portada con el objeto del modelo, o el modelo completo con su frase ancla.",
                    "Máximo 20 palabras y un solo objeto.",
                    "Los supuestos van en el texto del post.",
                  ]}
                />
              </Block>

              <Block
                title="Continuidad"
                note="Lo que hace que deslizar se sienta como pasar páginas del mismo documento."
              >
                <Lista
                  tone="si"
                  items={[
                    "Folio 3/7 en el pie. Sin flechas ni «desliza».",
                    "Línea de arranque fija: el titular no cambia de altura entre placas.",
                    "El objeto del modelo no cambia de lugar; solo gana capas.",
                  ]}
                />
              </Block>

              <Block
                title="Pruebas antes de producir"
                note="La portada de la izquierda está a 270 px de ancho: así se ve en la prueba de miniatura."
              >
                <div className="grid items-start gap-8 sm:grid-cols-[270px_1fr]">
                  <div className="w-[270px]">
                    <PlacaPortada />
                  </div>
                  <div className="grid gap-px border bg-border">
                    {SOCIAL_TESTS.map((t) => (
                      <Regla key={t.title} title={t.title} body={t.body} />
                    ))}
                  </div>
                </div>
              </Block>

              <Block
                title="Copy aprobado"
                note="Primero se divide; después se recorta."
              >
                <p className="max-w-2xl text-sm leading-relaxed">
                  Si ajustar una pieza al presupuesto obliga a dividir o recortar
                  copy aprobado, la versión ajustada se marca{" "}
                  <span className="font-mono text-[12px] text-accent-rust">
                    PENDIENTE DE REVISIÓN
                  </span>{" "}
                  en el copy.md de la pieza y no se produce hasta que el
                  fundador la apruebe.
                </p>
              </Block>

              <Block
                title="Texto del post"
                note="El enlace nunca va en el cuerpo: primer comentario en Facebook y LinkedIn, bio en Instagram."
              >
                <div className="border bg-card p-6 text-sm leading-relaxed">
                  <p>
                    Le facturaste $58,000 a un cliente que paga a 30 días. Hoy
                    es el día 1 y todavía no has cobrado nada.
                  </p>
                  <p className="mt-4">
                    Para ti, esa factura es un trabajo entregado. Para el SAT,
                    es solo el primer dato de una historia más larga.
                  </p>
                  <p className="mt-4">
                    → PUE: el dinero ya quedó resuelto.
                    <br />→ PPD: la factura ya existe, el dinero todavía no
                    llega.
                  </p>
                  <p className="mt-4">
                    ¿Facturas antes de cobrar o cuando ya te pagaron?
                  </p>
                  <p className="mt-4 font-medium">
                    Para el SAT, la factura es el inicio de la historia, no el
                    final.
                  </p>
                  <p className="mt-4 text-muted-foreground">
                    (Ejemplo: RESICO persona física, $50,000 + IVA 16% como
                    único ingreso del mes, sin gastos deducibles.)
                  </p>
                </div>
                <p className="mt-3 font-mono text-[11px] text-muted-foreground">
                  Situación con cifra → modelo → dos o tres líneas con flecha →
                  pregunta, que vive aquí y no en las placas → frase ancla →
                  supuestos completos
                </p>
              </Block>

              <Block
                title="Video vertical"
                note="Subtítulos siempre incrustados. La promesa se lee en los primeros 3 segundos."
              >
                <div className="grid items-center gap-8 sm:grid-cols-[220px_1fr]">
                  <ZonaSegura />
                  <Lista
                    tone="si"
                    items={[
                      "Zona segura: 14% arriba, 35% abajo, 6% a los lados.",
                      "Se diseña para verse sin sonido.",
                      "Mismo sistema que las placas: papel, tinta, un acento.",
                      "Duración de 15 a 30 segundos.",
                    ]}
                  />
                </div>
              </Block>

              <Block title="Por plataforma">
                <div className="grid gap-px border bg-border md:grid-cols-3">
                  <Regla
                    title="Facebook e Instagram"
                    body="Mismo arte y mismo texto el mismo día. En Instagram solo cambia la línea del enlace: «está en la bio». Bandera el lunes, apoyo el miércoles, conversación el viernes."
                  />
                  <Regla
                    title="LinkedIn"
                    body="Mismas placas como documento. El texto añade contexto de negocio: flujo de efectivo, cobro a clientes, facturación a empresas. Primera línea: frase ancla o cifra."
                  />
                  <Regla
                    title="Perfil del fundador"
                    body="Primera persona real: «Construí Fiscalio porque…». Comparte el modelo con una experiencia propia, se identifica como fundador y respeta las frases vetadas. En grupos aporta el modelo y una pregunta, nunca el enlace."
                  />
                </div>
              </Block>

              <Block
                title="Comentarios"
                note="Se responde con el mecanismo, sin corregir a nadie."
              >
                <blockquote className="border-l-2 border-foreground pl-6 font-display text-xl font-medium leading-snug tracking-tight">
                  Si la factura dice PUE, son $8,550 este mes. Si dice PPD, $0
                  este mes y los mismos $8,550 el mes que te pagan.
                </blockquote>
              </Block>
            </Section>

            <Section
              {...section("sitio")}
              lead="Una página bien editada: papel, filetes, mucho aire y un solo botón por pantalla."
            >
              <Block title="Componentes">
                <div className="grid gap-px border bg-border md:grid-cols-2">
                  <div className="flex flex-col items-start gap-6 bg-background p-6">
                    <span className="border border-accent-amber/30 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-accent-rust">
                      Acceso anticipado: beta privada
                    </span>
                    <span className="inline-flex h-12 items-center bg-primary px-8 text-xs uppercase tracking-[0.15em] text-primary-foreground">
                      Unirme a la beta privada →
                    </span>
                    <span className="inline-flex h-12 items-center border px-8 text-xs uppercase tracking-[0.15em]">
                      Abrir la calculadora
                    </span>
                  </div>
                  <div className="bg-background p-6">
                    <div className="border-t-2 border-foreground">
                      {[
                        ["IVA que cobraste", "$8,000.00"],
                        ["ISR mensual", "$550.00"],
                        ["Neto real", "$49,450.00"],
                      ].map(([k, v]) => (
                        <div
                          key={k}
                          className="flex items-baseline justify-between border-b py-3 text-sm"
                        >
                          <span>{k}</span>
                          <span className="font-mono">{v}</span>
                        </div>
                      ))}
                    </div>
                    <p className="mt-3 font-mono text-[11px] text-muted-foreground">
                      $50,000 + IVA 16% · sin retenciones
                    </p>
                  </div>
                </div>
              </Block>

              <Block title="Reglas">
                <Lista
                  tone="si"
                  items={[
                    "Fondo papel, tarjetas en blanco, texto en tinta.",
                    "Hero: insignia mono, H1 en dos líneas con la segunda en Piedra, un párrafo, un botón.",
                    "Botones rectos de 44 a 48 px de alto, texto en versales con 0.15em. Un primario por pantalla.",
                    "Secciones separadas por filete y aire (py-12 a py-24), no por cambios de color.",
                    "Cifras de calculadora y tablas en mono, alineadas a la derecha.",
                    "Blog: título de experiencia, apertura empática, modelo mental desde el inicio, cierre que deja herramientas.",
                    "Imagen OG: fondo #fcfaf6, imagotipo y titular en DM Sans.",
                    "Áreas táctiles de 44 px como mínimo.",
                  ]}
                />
              </Block>
            </Section>

            <Section
              {...section("movimiento")}
              lead="Calmado y con propósito: el movimiento explica, no decora."
            >
              <Block title="Parámetros">
                <Tabla
                  head={["Contexto", "Duración", "Curva"]}
                  mono={[1, 2]}
                  rows={[
                    ["Sitio", "200–400 ms", "ease-out · máximo 12 px"],
                    ["Video, entradas", "0.4–0.8 s", "cubic-bezier(0.16, 1, 0.3, 1)"],
                    ["Video, desplazamientos", "0.6–1 s", "cubic-bezier(0.83, 0, 0.17, 1)"],
                  ]}
                />
              </Block>
              <Block title="Reglas">
                <Par
                  si={{
                    children: (
                      <Lista
                        tone="si"
                        items={[
                          "Las cifras cuentan hasta su valor.",
                          "Las bóvedas se llenan; las líneas se trazan.",
                          "Se respeta prefers-reduced-motion.",
                        ]}
                      />
                    ),
                  }}
                  no={{
                    children: (
                      <Lista
                        tone="no"
                        items={[
                          "Movimiento lineal o rebote exagerado.",
                          "Degradados animados, viñetas, brillos, partículas.",
                          "Animación que retrasa la lectura de la cifra.",
                        ]}
                      />
                    ),
                  }}
                />
              </Block>
            </Section>

            <Section
              {...section("publicar")}
              lead="Catorce comprobaciones antes de que una pieza salga."
            >
              <ol className="border-t-2 border-foreground">
                {PUBLISH_CHECKLIST.map((item, i) => (
                  <li key={item} className="flex gap-6 border-b py-4">
                    <span className="font-mono text-[12px] text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ol>
            </Section>

            <Section
              {...section("cambios")}
              lead="Lo que esta versión decide, propone y deja pendiente."
            >
              <Tabla
                head={["Decisión", "Estado"]}
                rows={BRAND_CHANGES.map(([d, s]) => [
                  <span key="d" className="font-normal">
                    {d}
                  </span>,
                  <Estado key="s">{s}</Estado>,
                ])}
              />
            </Section>
          </main>
        </div>

        <footer className="flex items-center justify-between border-t py-10">
          <LogoLockup className="text-sm" />
          <p className="font-mono text-[11px] text-muted-foreground">
            docs/BRANDBOOK.md · v{BRAND_VERSION}
          </p>
        </footer>
      </div>
    </div>
  );
}
