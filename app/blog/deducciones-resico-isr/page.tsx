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
  title: "El mito de las deducciones en RESICO: ¿Por qué facturar? | Fiscalio",
  description:
    "Descubre por qué las facturas siguen siendo vitales en RESICO. Aunque no deduzcas ISR, son el escudo que protege tu IVA y tu flujo de caja.",
  keywords:
    "deducciones RESICO, facturar en RESICO, IVA acreditable, impuestos freelancers México, CFDI gastos RESICO",
  authors: [
    {
      name: "Fiscalio",
      url: "https://www.fiscalio.app",
    },
  ],
  openGraph: {
    title: "¿Por qué sigues pidiendo facturas en RESICO si 'ya no sirven'?",
    description:
      "El verdadero valor de las facturas en RESICO no es el ISR, sino el IVA. Aprende a proteger tu flujo de caja.",
    type: "article",
    locale: "es_MX",
    siteName: "Fiscalio",
    images: [
      {
        url: "https://www.fiscalio.app/api/og?title=El%20mito%20de%20las%20deducciones%20en%20RESICO&subtitle=%C2%BFPor%20qu%C3%A9%20seguir%20facturando%3F&label=&v=0",
        width: 1200,
        height: 630,
        alt: "El mito de las deducciones en RESICO",
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
              <div className="space-y-3">
                <span className="text-[10px] tracking-[0.3em] text-muted-foreground font-mono">
                  CATEGORÍA
                </span>
                <Badge
                  variant="outline"
                  className="text-[10px] tracking-[0.2em] font-mono rounded-none px-3 py-1 border-accent-amber/30 text-accent-rust"
                >
                  ISR - IVA
                </Badge>
              </div>

              <div className="space-y-6">
                <div className="space-y-3">
                  <span className="text-[10px] tracking-[0.3em] text-muted-foreground font-mono">
                    PUBLICACIÓN
                  </span>
                  <div className="flex items-center gap-2 text-sm">
                    <CalendarIcon className="h-3.5 w-3.5 text-accent-rust" />
                    <time dateTime="2026-05-18" className="font-mono text-xs">
                      18 MAY 2026
                    </time>
                  </div>
                </div>

                <Separator />

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
                El mito de las deducciones en RESICO: ¿Por qué sigues pidiendo
                facturas si "ya no sirven" para el ISR?
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-sans max-w-3xl">
                Hay un consejo financiero que lleva años flotando en el
                ecosistema freelance de México: “Pide factura de todo, mete la
                gasolina, el internet, la computadora y así pagas menos
                impuestos”.
              </p>
            </div>

            <Separator />

            <div className="prose prose-lg max-w-none">
              <div className="space-y-8 font-sans text-base md:text-lg leading-relaxed text-foreground">
                <section className="space-y-4">
                  <p className="text-foreground/90">
                    Si acabas de entrar al{" "}
                    <Link
                      href="/blog/que-es-resico-freelancers-mexico"
                      className="underline"
                    >
                      Régimen Simplificado de Confianza (RESICO)
                    </Link>{" "}
                    o estás pensando en mudarte, probablemente lo hiciste
                    atraído por la promesa de la mina de oro: pagar entre el 1%
                    y el 2.5% de ISR. Suena increíble. El problema es que,
                    cuando intentas aplicar el viejo truco de "meter gastos"
                    para bajar tu declaración, te topas con la pared del SAT.
                  </p>

                  <BlockQuote
                    title="Realidad Fiscal"
                    content={
                      <p className="text-lg font-medium">
                        En RESICO, las deducciones para el ISR no existen.
                      </p>
                    }
                  />

                  <p className="text-foreground/90">
                    Es ahí donde entra el pánico y la confusión lógica:
                    ¿Entonces ya no sirve de nada pedir facturas? ¿Estoy tirando
                    mi dinero? ¿Por qué mi contador me sigue diciendo que
                    facture mis herramientas de trabajo si el SAT se va a cobrar
                    de mis ingresos brutos de todos modos?
                  </p>

                  <p className="text-foreground/90">
                    El núcleo del problema no es saber qué puedes facturar. El
                    verdadero problema es que nos enseñaron a ver los impuestos
                    como una sola gran bola de deuda, cuando en realidad estás
                    jugando dos juegos completamente distintos al mismo tiempo:
                    el juego del ISR y el juego del IVA.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                    El error mental que te hace odiar el portal del SAT
                  </h2>
                  <p className="text-foreground/90">
                    La mayoría de los freelancers arrastran la lógica de
                    Actividad Empresarial o de los mitos urbanos de las finanzas
                    personales: “A más gastos facturados, menos impuestos pago”.
                  </p>
                  <p className="text-foreground/90">
                    RESICO rompió esa regla. Para darte esa tasa ridículamente
                    baja de ISR (del 1% al 2.5%), el SAT te puso una condición:
                    te voy a cobrar directamente de lo que cobres, sin importar
                    cuánto hayas gastado para ganarlo.
                  </p>
                  <p className="text-foreground/90 font-mono text-sm bg-muted p-4 border border-border">
                    Si facturaste $30,000 pesos este mes, tu ISR se va a
                    calcular sobre esos $30,000 pesos. Da igual si te compraste
                    la mejor laptop del mercado o si trabajaste en un café
                    usando su luz.
                  </p>
                  <p className="text-foreground/90">
                    Por eso, cuando la gente se entera de esto, asume que los
                    CFDI de gastos ya no tienen valor. Pero esa conclusión está
                    incompleta, y es ahí donde el SAT gana terreno cuando te
                    descuidas.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                    Las facturas ya no salvan tu ISR, pero salvan tu IVA
                  </h2>
                  <p className="text-foreground/90">
                    Aquí es donde se divide el camino. El ISR es el impuesto
                    sobre tu ganancia; el IVA es un impuesto que tú solo estás
                    custodiando. No es tu dinero.
                  </p>
                  <p className="text-foreground/90">
                    Cuando tú le cobras a un cliente en México, le sumas el 16%
                    de IVA. Ese dinero entra a tu cuenta bancaria, pero le
                    pertenece al SAT. La única forma legal de no entregarle cada
                    centavo de ese IVA a la autoridad es mediante el{" "}
                    <strong>acreditamiento</strong>. Y para acreditar, necesitas
                    facturas.
                  </p>

                  <HighlightBox title="MATEMÁTICAS_SIMPLES">
                    <ul className="space-y-2 text-sm md:text-base">
                      <li>
                        <strong>Lo que cobraste:</strong> $20,000 MXN + $3,200
                        de IVA.
                      </li>
                      <li>
                        <strong>Tus gastos del mes:</strong> Pagaste internet,
                        suscripciones de software, nubes y publicidad. Todo sumó
                        un IVA de $1,200 en tus facturas.
                      </li>
                      <li className="pt-2 border-t border-accent-amber/20">
                        <strong>La hora de la verdad:</strong> En lugar de pagar
                        los $3,200 completos, restas los $1,200.{" "}
                        <strong>Solo pagas $2,000</strong>.
                      </li>
                      <li className="pt-2">
                        <Link
                          href="/blog/calcular-isr-iva-resico"
                          className="text-accent-rust underline font-bold inline-flex items-center gap-1 group"
                        >
                          Guía para calcular tu ISR e IVA
                          <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </li>
                    </ul>
                  </HighlightBox>

                  <p className="text-foreground/90 font-bold text-accent-rust">
                    ¿Qué pasa si decidiste no pedir facturas porque "en RESICO
                    no se deduce"? Te toca pagar los $3,200 de IVA completos.
                    Acabas de perder dinero por una confusión conceptual.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                    ¿Qué puede (y debe) facturar un freelancer en RESICO?
                  </h2>
                  <p className="text-foreground/90">
                    No se trata de pedir facturas de la despensa del súper o de
                    las salidas del fin de semana (eso solo activa las alarmas
                    de discrepancia fiscal del SAT). En RESICO, debes facturar
                    estrictamente lo que esté directamente relacionado con tu
                    actividad económica, pensando en el IVA.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="border border-border p-4 bg-muted/30">
                      <h3 className="font-display font-bold text-sm mb-2 uppercase tracking-wider">
                        Software y Herramientas
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Hosting, dominios, plataformas de gestión, Adobe, AWS,
                        etc.
                      </p>
                    </div>
                    <div className="border border-border p-4 bg-muted/30">
                      <h3 className="font-display font-bold text-sm mb-2 uppercase tracking-wider">
                        Hardware y Equipo
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Computadoras, monitores, gadgets y equipo de oficina.
                      </p>
                    </div>
                    <div className="border border-border p-4 bg-muted/30">
                      <h3 className="font-display font-bold text-sm mb-2 uppercase tracking-wider">
                        Servicios Básicos
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        El porcentaje de internet y luz dedicado a tu espacio de
                        trabajo.
                      </p>
                    </div>
                    <div className="border border-border p-4 bg-muted/30">
                      <h3 className="font-display font-bold text-sm mb-2 uppercase tracking-wider">
                        Publicidad
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Anuncios en Meta, Google Ads o servicios de branding.
                      </p>
                    </div>
                  </div>
                  <p className="text-foreground/90 mt-4 italic">
                    Si el gasto lleva IVA y te ayuda a operar tu negocio
                    freelance, la factura tiene que existir. No para el ISR,
                    sino para mantener tu flujo de caja a salvo del IVA.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                    Dejar de tenerle miedo al SAT es una cuestión de claridad
                  </h2>
                  <p className="text-foreground/90">
                    El miedo a la autoridad fiscal no nace de pagar impuestos;
                    nace de no entender de dónde salen los números que ves en la
                    pantalla cada mes. Cuando la plataforma del SAT te dice que
                    debes cierta cantidad y tú no tienes la menor idea de cómo
                    se calculó, la sensación de vulnerabilidad es total.
                  </p>
                  <p className="text-foreground/90 py-2">
                    <Link
                      href="/blog/como-hacer-declaracion-mensual-resico"
                      className="text-accent-rust underline font-bold inline-flex items-center gap-1 group"
                    >
                      Aprende cómo hacer tu declaración mensual paso a paso
                      <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </p>
                  <p className="text-foreground/90">
                    RESICO no eliminó la necesidad de las facturas; simplificó
                    una parte del proceso (el ISR) y dejó la otra exactamente
                    igual (el IVA). Tomar el control de tu situación fiscal
                    significa dejar de ver tus CFDI como "papelitos para el
                    contador" y empezar a verlos como el escudo que protege tus
                    ingresos reales.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                    Toma el control de tus impuestos sin hojas de cálculo
                    infinitas
                  </h2>
                  <p className="text-foreground/90">
                    La mayoría de los freelancers no necesitan una estrategia de
                    optimización fiscal multimillonaria; necesitan claridad en
                    tiempo real. Saber cuánto de lo que está en el banco
                    realmente les pertenece y cuánto va para el SAT el próximo
                    mes.
                  </p>
                  <p className="text-foreground/90">
                    Estoy construyendo <strong>Fiscalio</strong>, una
                    herramienta diseñada específicamente para freelancers en
                    RESICO que quieren automatizar la clasificación de sus CFDI,
                    entender su IVA acreditable y proyectar sus impuestos sin
                    sufrir cada mitad de mes.
                  </p>
                  <p className="text-foreground/90">
                    Olvídate de los archivos de Excel confusos y recupera la
                    tranquilidad de saber exactamente dónde estás parado frente
                    al SAT.
                  </p>
                </section>

                <section className="space-y-4 pt-12">
                  <div className="bg-foreground text-background p-8 md:p-12 space-y-8 relative overflow-hidden">
                    <div className="relative z-10 space-y-6">
                      <Badge className="bg-accent-amber text-foreground rounded-none px-3 py-1 text-[10px] tracking-widest font-mono">
                        HERRAMIENTA_GRATUITA
                      </Badge>
                      <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight leading-tight">
                        Calcula tu ISR e IVA <br />
                        <span className="text-background/60">en segundos</span>
                      </h2>
                      <p className="text-background/80 max-w-2xl leading-relaxed">
                        No dejes que los impuestos te tomen por sorpresa. Usa
                        nuestra calculadora gratuita diseñada específicamente
                        para freelancers en RESICO y obtén claridad sobre tu
                        flujo de caja hoy mismo.
                      </p>
                      <Link
                        href="/calculadora-resico"
                        className="inline-block w-full md:w-auto"
                      >
                        <Button
                          size="lg"
                          className="w-full md:w-auto bg-background text-foreground hover:bg-background/90 rounded-none h-14 px-12 text-xs tracking-[0.2em] font-bold"
                        >
                          USAR CALCULADORA RESICO
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
