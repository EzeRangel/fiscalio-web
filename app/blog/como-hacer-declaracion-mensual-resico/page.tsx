import Link from "next/link";
import { CalendarIcon, UserIcon, ArrowRight } from "lucide-react";
import { BlockQuote } from "@/components/blockquote";
import { HighlightBox } from "@/components/highlight-box";
import { Navigation } from "@/components/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Cómo hacer declaración mensual RESICO 2026 | Guía paso a paso | Fiscalio",
  description:
    "Aprende a hacer tu declaración mensual en RESICO sin miedo. Entiende la diferencia entre ISR e IVA y cómo organizarte para el SAT.",
  keywords:
    "cómo hacer declaración mensual RESICO, declaración mensual SAT, ISR RESICO, IVA RESICO, impuestos freelancers México, guía fiscal RESICO",
  authors: [
    {
      name: "Fiscalio",
      url: "https://www.fiscalio.app",
    },
  ],
  openGraph: {
    title:
      "Cómo hacer tu declaración mensual en RESICO (sin confundirte con ISR e IVA)",
    description:
      "Una guía para perderle el miedo al portal del SAT y entender qué está pasando con tu dinero cada mes.",
    type: "article",
    locale: "es_MX",
    siteName: "Fiscalio",
    images: [
      {
        url: `https://www.fiscalio.app/api/og?title=C%C3%B3mo%20hacer%20tu%20declaraci%C3%B3n%20mensual%20en%20RESICO&subtitle=&label=&v=0`,
        width: 1200,
        height: 630,
        alt: "Guía para hacer declaración mensual RESICO",
      },
    ],
  },
  robots: "index, follow",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background font-mono">
      <Navigation />

      <article className="container mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <aside className="lg:col-span-3 space-y-8">
            <div className="lg:sticky lg:top-24 space-y-8">
              {/* Category */}
              <div className="space-y-3">
                <span className="text-[10px] tracking-[0.3em] text-muted-foreground font-mono">
                  CATEGORÍA
                </span>
                <Badge
                  variant="outline"
                  className="text-[10px] tracking-[0.2em] font-mono rounded-none px-3 py-1 border-accent-amber/30 text-accent-rust"
                >
                  FISCALES
                </Badge>
              </div>

              <div className="space-y-6">
                <div className="space-y-3">
                  <span className="text-[10px] tracking-[0.3em] text-muted-foreground font-mono">
                    PUBLICACIÓN
                  </span>
                  <div className="flex items-center gap-2 text-sm">
                    <CalendarIcon className="h-3.5 w-3.5 text-accent-rust" />
                    <time dateTime="2026-04-13" className="font-mono text-xs">
                      13 ABR 2026
                    </time>
                  </div>
                </div>

                <Separator />

                {/* Author */}
                <div className="space-y-3">
                  <span className="text-[10px] tracking-[0.3em] text-muted-foreground font-mono">
                    AUTOR
                  </span>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-none bg-muted border border-accent-amber/20 flex items-center justify-center">
                      <UserIcon className="h-5 w-5 text-accent-rust" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm font-display font-medium">
                        FISCALIO
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-9 space-y-12">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-semibold tracking-tight leading-[1.1]">
                Cómo hacer tu declaración mensual en RESICO
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-sans max-w-3xl">
                Admitámoslo: la primera vez que entras al portal del SAT para
                hacer tu propia declaración, sientes una especie de "vértigo
                digital".
              </p>
            </div>

            <Separator />

            <div className="prose prose-lg max-w-none">
              <div className="space-y-8 font-sans text-base md:text-lg leading-relaxed text-foreground">
                <section className="space-y-4">
                  <p className="text-foreground/90">
                    El proceso no es imposible, pero puede que haya miedo de
                    darle clic al botón equivocado y que algo explote.
                  </p>

                  <p className="text-foreground/90 italic">
                    "¿Estaré sumando bien las facturas?", "¿Por qué me sale
                    tanto IVA si yo pensé que pagaba menos?", "¿Qué pasa si me
                    equivoco?".
                  </p>

                  <p className="text-foreground/90">
                    Si te has hecho estas preguntas, este post es para ti. Esta
                    no es una guía paso a paso; vamos a caminar juntos por ese
                    proceso para que entiendas{" "}
                    <strong>qué está pasando realmente con tu dinero</strong>{" "}
                    mientras llenas esos formularios.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                    Antes de empezar: La declaración empieza fuera del SAT
                  </h2>
                  <p className="text-foreground/90">
                    Uno de los errores más comunes es creer que la declaración
                    empieza cuando abres el portal del SAT. Error. La
                    declaración empieza en tu escritorio (o en tu Notion, o en
                    tu Excel).
                  </p>
                  <p className="text-foreground/90">
                    Para entrar con confianza, necesitas tener tres números
                    listos:
                  </p>
                  <ul className="list-disc list-inside text-foreground/90 space-y-2 ml-4">
                    <li>
                      <strong>Tus ingresos cobrados del mes:</strong> Solo lo
                      que realmente entró a tu cuenta de banco entre el día 1 y
                      el último día del mes.
                    </li>
                    <li>
                      <strong>Tus facturas emitidas (CFDI):</strong> Asegúrate
                      de que todas coincidan con lo que cobraste.
                    </li>
                    <li>
                      <strong>Tus gastos con IVA (Facturas recibidas):</strong>{" "}
                      Esas facturas de tu internet, la laptop nueva o las
                      suscripciones de software que pagas en México.
                    </li>
                  </ul>
                  <BlockQuote
                    title="Algo Importante"
                    content={
                      <p className="text-lg font-medium">
                        La ansiedad fiscal no se cura con un contador, se cura
                        con organización.
                      </p>
                    }
                  />
                  <p className="text-foreground/90">
                    Si tienes tus números claros antes de entrar, el portal del
                    SAT solo es un lugar donde vas a confirmar lo que ya sabes.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                    Cuando entras al SAT: Por qué te separa ISR e IVA
                  </h2>
                  <p className="text-foreground/90">
                    Al entrar a la sección de declaraciones mensuales, verás que
                    el SAT te pide llenar dos secciones por separado:{" "}
                    <strong>ISR</strong> e <strong>IVA</strong>. Aquí es donde
                    muchos se confunden, pero el modelo mental es muy sencillo:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="border border-border p-6 space-y-3">
                      <h3 className="font-display font-bold uppercase text-accent-rust tracking-tight">
                        1. El ISR: Tu membresía
                      </h3>
                      <p className="text-sm text-foreground/80 leading-relaxed">
                        El ISR en RESICO es un porcentaje minúsculo (entre el 1%
                        y el 2.5%) que pagas sobre lo que ganaste.
                      </p>
                      <p className="text-xs text-muted-foreground italic">
                        *Se siente como un fee justo por tener un negocio legal.
                      </p>
                      <Link
                        href="/blog/calcular-isr-iva-resico"
                        className="text-xs font-bold underline flex items-center gap-1 group"
                      >
                        Aprende a calcularlo
                        <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                    <div className="border border-border p-6 space-y-3 bg-accent-amber/5">
                      <h3 className="font-display font-bold uppercase text-accent-rust tracking-tight">
                        2. El IVA: Recaudación
                      </h3>
                      <p className="text-sm text-foreground/80 leading-relaxed">
                        Tú solo eres un recaudador. El cliente te dio un 16%
                        extra para que tú se lo entregues al SAT.
                      </p>
                      <p className="text-xs text-muted-foreground italic">
                        *A diferencia del ISR, aquí sí puedes usar tus gastos
                        para bajar el monto.
                      </p>
                      <Link
                        href="/blog/saldo-favor-resico"
                        className="text-xs font-bold underline flex items-center gap-1 group"
                      >
                        Ver saldos a favor
                        <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                    El recorrido por el portal: Un check-in de confianza
                  </h2>
                  <p className="text-foreground/90">
                    Cuando estés frente a la pantalla, el SAT intentará
                    "ayudarte" precargando la información de tus facturas. Aquí
                    es donde debes mantener la calma:
                  </p>

                  <HighlightBox title="PRO_TIPS">
                    <ul className="text-sm space-y-3">
                      <li>
                        <strong>1. Revisa, no asumas:</strong> El SAT a veces
                        suma facturas que no te han pagado. Compara siempre
                        contra tu lista de ingresos cobrados.
                      </li>
                      <li>
                        <strong>2. Las retenciones son tus amigas:</strong> Si
                        le trabajas a una empresa, ellos ya pagaron un cachito
                        por ti. Asegúrate de que ese monto aparezca.
                      </li>
                      <li>
                        <strong>3. El botón de Enviar:</strong> Antes de darle
                        clic, respira. Si tus cálculos coinciden, vas por buen
                        camino.
                      </li>
                    </ul>
                  </HighlightBox>
                </section>

                <section className="space-y-8 py-12 border-y border-border">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight text-foreground">
                    Preguntas frecuentes sobre la declaración mensual RESICO
                  </h2>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-foreground">
                        ¿Cuándo se presenta la declaración mensual?
                      </h3>
                      <p className="text-foreground/90">
                        Generalmente antes del día 17 del mes siguiente.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-foreground">
                        ¿Qué pasa si no la presento?
                      </h3>
                      <p className="text-foreground/90">
                        Puedes tener recargos, multas y problemas con tu estatus
                        fiscal (como perder el beneficio de RESICO).
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-foreground">
                        ¿Puedo corregir errores?
                      </h3>
                      <p className="text-foreground/90">
                        Sí, el sistema del SAT permite presentar declaraciones
                        "complementarias" para corregir datos de meses
                        anteriores.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-foreground">
                        ¿Necesito contador?
                      </h3>
                      <p className="text-foreground/90">
                        No necesariamente para la operación mensual si tienes
                        pocos movimientos, pero sí necesitas entender lo básico
                        para no cometer errores.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                    ¿Y si quiero estar 100% seguro antes de entrar?
                  </h2>
                  <p className="text-foreground/90">
                    Entendemos que "sentirse acompañado" es bueno, pero "tener
                    la certeza matemática" es mejor. Por eso construimos la{" "}
                    <Link
                      href="/calculadora-resico"
                      className="underline font-bold text-accent-rust"
                    >
                      Calculadora RESICO de impuestos
                    </Link>
                    .
                  </p>
                  <p className="text-foreground/90">
                    Nuestra herramienta está diseñada para que hagas un ensayo
                    general de tu declaración. Metes tus números, ves cuánto
                    deberías pagar de ISR e IVA, y cuando entres al portal del
                    SAT, ya no irás a ciegas.
                  </p>

                  <div className="bg-muted p-6 border-l-4 border-accent-rust space-y-4">
                    <h3 className="font-display font-bold uppercase tracking-widest text-accent-rust text-xs">
                      La visión de Fiscalio
                    </h3>
                    <p className="text-sm text-foreground/90 leading-relaxed">
                      Estamos trabajando en una versión que lea tus facturas
                      para que no tengas que sumar a mano nunca más. Queremos
                      que tu declaración mensual pase de ser "el día más
                      estresante del mes" a ser un "check" de 5 minutos en tu
                      calendario.
                    </p>
                  </div>
                </section>

                <section className="space-y-4 pt-12">
                  <div className="bg-foreground text-background p-8 md:p-12 space-y-8 relative overflow-hidden">
                    <div className="relative z-10 space-y-6">
                      <Badge className="bg-accent-amber text-foreground rounded-none px-3 py-1 text-[10px] tracking-widest font-mono">
                        ALPHA_LAUNCH
                      </Badge>
                      <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight leading-tight">
                        Únete al Lanzamiento <br />
                        <span className="text-background/60">
                          (Descuento de Fundador)
                        </span>
                      </h2>
                      <p className="text-background/80 max-w-2xl leading-relaxed">
                        Estamos abriendo solo <strong>50 lugares</strong> para
                        nuestra fase Alpha. Al unirte a la lista de espera, no
                        solo tendrás acceso anticipado para automatizar tu
                        contabilidad, sino que asegurarás un{" "}
                        <strong>precio especial de fundador</strong> de por
                        vida.
                      </p>
                      <Link
                        href="/?dialog=open"
                        className="inline-block w-full md:w-auto"
                      >
                        <Button
                          size="lg"
                          className="w-full md:w-auto bg-background text-foreground hover:bg-background/90 rounded-none h-14 px-12 text-xs tracking-[0.2em] font-bold"
                        >
                          UNIRME A LA LISTA DE ESPERA
                          <ArrowRight className="ml-3 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
