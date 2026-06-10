import Link from "next/link";
import { CalendarIcon, UserIcon, ArrowRight } from "lucide-react";
import { BlockQuote } from "@/components/blockquote";
import { CalculatorCTA } from "@/components/calculator-cta";
import { HighlightBox } from "@/components/highlight-box";
import { Navigation } from "@/components/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";
import { APP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "PUE vs PPD: La diferencia real entre facturar y cobrar | Fiscalio",
  description:
    "Aprende la diferencia entre PUE y PPD. Evita pagar impuestos por dinero que aún no has cobrado y domina el flujo de caja de tu negocio como freelancer.",
  keywords:
    "PUE vs PPD, factura PUE, factura PPD, complemento de pago, SAT freelancers, RESICO facturación, flujo de efectivo SAT",
  authors: [
    {
      name: "Fiscalio",
      url: "https://www.fiscalio.app",
    },
  ],
  openGraph: {
    title: "PUE vs PPD explicado: La diferencia real entre facturar y cobrar",
    description:
      "¿Sabías que el SAT te puede cobrar impuestos por dinero que no has recibido? Descubre cómo evitarlo entendiendo PUE y PPD.",
    type: "article",
    locale: "es_MX",
    siteName: "Fiscalio",
    images: [
      {
        url: `${APP_URL}/api/og?title=PUE%20vs%20PPD%3A%20La%20diferencia%20real%20entre%20facturar%20y%20cobrar&subtitle=&label=&v=0`,
        width: 1200,
        height: 630,
        alt: "PUE vs PPD explicado simple",
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
                  FACTURACIÓN
                </Badge>
              </div>

              <div className="space-y-6">
                <div className="space-y-3">
                  <span className="text-[10px] tracking-[0.3em] text-muted-foreground font-mono">
                    PUBLICACIÓN
                  </span>
                  <div className="flex items-center gap-2 text-sm">
                    <CalendarIcon className="h-3.5 w-3.5 text-accent-rust" />
                    <time dateTime="2026-05-25" className="font-mono text-xs">
                      25 MAY 2026
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
                PUE vs PPD explicado: La diferencia real entre facturar y cobrar
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-sans max-w-3xl">
                ¿Sabías que el SAT te puede cobrar impuestos por dinero que aún
                no tienes en la bolsa? Todo depende de dos etiquetas en tus
                facturas.
              </p>
            </div>

            <Separator />

            <div className="prose prose-lg max-w-none">
              <div className="space-y-8 font-sans text-base md:text-lg leading-relaxed text-foreground">
                <section className="space-y-4">
                  <p className="text-foreground/90">
                    Te ha pasado esto: un cliente te paga un proyecto, entras
                    emocionado al portal del SAT a revisar tu declaración
                    precargada del mes y... el ingreso no aparece por ningún
                    lado. O peor aún: emitiste una factura por un trabajo que
                    todavía no te pagan, pero el SAT ya te lo está contando como
                    si tuvieras el dinero en la bolsa y te exige el impuesto.
                  </p>

                  <p className="text-foreground/90">
                    Si has sentido esa frustración, que caíste en la trampa del
                    error mental más común del ecosistema freelance:{" "}
                    <strong>
                      pensar que facturar y cobrar son la misma cosa
                    </strong>
                    .
                  </p>

                  <p className="text-foreground/90">
                    Para ti, una factura es el comprobante de que trabajaste.
                    Para el SAT, una factura es solo el inicio de una historia.
                    Y para saber cómo termina esa historia, el SAT inventó dos
                    etiquetas que{" "}
                    <strong>describen el estado de tu dinero: PUE y PPD</strong>
                    .
                  </p>

                  <HighlightBox title="EN_RESUMEN">
                    <p className="text-lg font-medium">
                      La diferencia radica en el flujo de efectivo.
                    </p>
                    <p className="text-sm mt-2">
                      <strong>PUE</strong> significa que el dinero ya fue
                      cobrado al emitir la factura. <br />
                      <strong>PPD</strong> significa que la factura se emite a
                      crédito y el dinero se recibirá después.
                    </p>
                  </HighlightBox>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                    El error mental: "Si la factura existe, el dinero ya cuenta"
                  </h2>
                  <p className="text-foreground/90">
                    En el mundo real, las personas en general solemos mezclar
                    los conceptos. Decimos "ya le facturé a mi cliente" como
                    sinónimo de "ya cerré el negocio".
                  </p>
                  <p className="text-foreground/90">
                    Sin embargo, el SAT necesita saber con precisión quirúrgica
                    cuándo entró el dinero a tu cuenta, especialmente en
                    regímenes como <strong>RESICO</strong>, donde los impuestos
                    se pagan sobre el flujo de efectivo (dinero efectivamente
                    cobrado). Aquí es donde el sistema del SAT se divide en dos
                    juegos lógicos.
                  </p>

                  <h3 className="text-xl md:text-2xl font-display font-semibold tracking-tight mt-8 mb-4 text-foreground">
                    1. PUE: El ciclo que nació cerrado
                  </h3>
                  <p className="text-foreground/90">
                    PUE significa <strong>Pago en una Sola Exhibición</strong>.
                  </p>
                  <p className="text-foreground/90">
                    Olvídate de la definición técnica. El modelo mental de una
                    factura PUE es: <em>"Este dinero ya quedó resuelto"</em>.
                  </p>
                  <p className="text-foreground/90">
                    <strong>La escena:</strong> Entregas un proyecto, el cliente
                    te hace la transferencia inmediatamente (o te pagó por
                    adelantado), y tú emites la factura.
                  </p>
                  <p className="text-foreground/90">
                    <strong>Lo que entiende el SAT:</strong> El dinero ya está
                    en tu banco. Por lo tanto, el SAT precarga automáticamente
                    ese ingreso en tu declaración mensual y te va a cobrar el
                    ISR e IVA correspondiente este mismo mes. El ciclo nació y
                    murió en el mismo instante.
                  </p>

                  <h3 className="text-xl md:text-2xl font-display font-semibold tracking-tight mt-8 mb-4 text-foreground">
                    2. PPD: La operación que se queda abierta
                  </h3>
                  <p className="text-foreground/90">
                    PPD significa{" "}
                    <strong>Pago en Parcialidades o Diferido</strong>.
                  </p>
                  <p className="text-foreground/90">
                    El modelo mental de una factura PPD es:{" "}
                    <em>
                      "La factura ya existe, pero el dinero todavía no llega"
                    </em>
                    .
                  </p>
                  <p className="text-foreground/90">
                    <strong>La escena:</strong> Le trabajas a una agencia que
                    paga a crédito a 30 días. Te piden la factura hoy para poder
                    meterla a su proceso de pagos, pero tú verás los fondos el
                    próximo mes.
                  </p>
                  <p className="text-foreground/90">
                    <strong>Lo que entiende el SAT:</strong> La factura está
                    emitida, pero el tablero está en pausa. El SAT no te va a
                    cobrar impuestos por esa factura todavía porque sabe que el
                    dinero no ha tocado tu cuenta. La operación se queda
                    "abierta".
                  </p>

                  <BlockQuote
                    title="El peligro de equivocarte"
                    content={
                      <p className="text-lg font-medium">
                        Si emites como PUE una factura que te van a pagar el
                        próximo mes, el SAT asumirá que ya tienes el dinero hoy.
                        Te tocará pagar impuestos con dinero que aún no tienes
                        en la bolsa.
                      </p>
                    }
                  />
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                    ¿Para qué diablos existe el Complemento de Pago?
                  </h2>
                  <p className="text-foreground/90">
                    Si emitiste una factura en PPD (operación abierta), el SAT
                    se queda esperando. Cuando tu cliente finalmente te
                    transfiere el dinero semanas después, tu cuenta bancaria se
                    mueve, pero el portal del SAT no tiene ojos para ver tu
                    banco. Necesita un evento digital que conecte la factura
                    vieja con el dinero nuevo.
                  </p>
                  <p className="text-foreground/90">
                    Ese puente es el <strong>Complemento de Pago</strong> (o
                    Recibo Electrónico de Pago).
                  </p>
                  <p className="text-foreground/90">
                    Al emitir el complemento, le estás diciendo al SAT:{" "}
                    <em>
                      "¿Te acuerdas de la factura PPD que dejé abierta? Bueno,
                      ya me la pagaron hoy. Ya puedes cobrarme el impuesto"
                    </em>
                    . El complemento es el candado que cierra la operación.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                    ¿Qué pasa si me pagan una factura PPD en el mismo mes?
                  </h2>
                  <p className="text-foreground/90">
                    Esta es una confusión masiva. Muchos freelancers creen que
                    si facturan el día 5 en PPD y el cliente les paga el día 20
                    del mismo mes, la factura mágicamente se convierte en PUE o
                    "se arregla sola" porque cayó dentro del mismo periodo
                    fiscal.
                  </p>
                  <p className="text-foreground/90">
                    <strong>No funciona así.</strong> La regla no depende del
                    calendario, depende del momento del pago:
                  </p>
                  <p className="text-foreground/90">
                    Si al momento de dar clic en "Emitir" no habías recibido el
                    dinero, la factura es <strong>obligatoriamente PPD</strong>.
                    Aunque te paguen tres días después dentro del mismo mes,
                    tienes la obligación de emitir el Complemento de Pago.
                  </p>
                  <p className="text-foreground/90">
                    Romper esta regla es la razón número uno por la cual las{" "}
                    <Link
                      href="/blog/porque-sat-no-precarga-facturas"
                      className="underline font-bold text-accent-rust"
                    >
                      declaraciones precargadas del SAT
                    </Link>{" "}
                    muestran números completamente diferentes a tus estados de
                    cuenta reales.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                    Facturar no siempre es cobrar
                  </h2>
                  <p className="text-foreground/90">
                    El SAT no es un monstruo que inventa reglas para hacerte la
                    vida imposible; es un algoritmo intrincado que trabaja bajo
                    sus propias reglas. Cuando entiendes que PUE y PPD describen
                    el flujo de tu dinero y no el diseño o desarrollo que
                    entregaste, dejas de tenerle miedo al portal.
                  </p>
                  <p className="text-foreground/90">
                    El desorden con los CFDI, las discrepancias fiscales y el
                    pánico en las declaraciones mensuales ocurren cuando dejas
                    que estas claves se asignen al azar o "como Dios te dé a
                    entender".
                  </p>

                  <h3 className="text-xl md:text-2xl font-display font-semibold tracking-tight mt-8 mb-4 text-foreground">
                    Deja de adivinar lo que el SAT está viendo
                  </h3>
                  <p className="text-foreground/90">
                    El verdadero problema de los impuestos no es calcular cuánto
                    debes; es la ceguera de no saber qué está interpretando el
                    SAT con las facturas que emites.
                  </p>
                  <p className="text-foreground/90">
                    En <strong>Fiscalio</strong> estamos creando el mapa de
                    navegación para freelancers. Nuestra herramienta lee tus
                    CFDI, identifica automáticamente qué facturas PUE ya
                    cuentan, cuáles PPD siguen abiertas y qué complementos te
                    hacen falta para que tu declaración real coincida
                    perfectamente con la del SAT. Sin hojas de cálculo, sin
                    sorpresas de última hora y con total nitidez.
                  </p>
                  <p className="text-foreground/90">
                    Si quieres empezar a proyectar tus impuestos hoy mismo,
                    puedes usar nuestra{" "}
                    <Link
                      href="/calculadora-resico"
                      className="underline font-bold text-accent-rust"
                    >
                      Calculadora RESICO
                    </Link>{" "}
                    para tener una visión clara de tu flujo de efectivo.
                  </p>
                </section>

                <CalculatorCTA 
                  title="Calcula solo sobre ingresos cobrados"
                  description="Conoce tu ISR e IVA a pagar en base a tus facturas PUE efectivamente cobradas."
                />
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
