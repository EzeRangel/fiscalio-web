import Link from "next/link";
import { CalendarIcon, UserIcon } from "lucide-react";
import { BlockQuote } from "@/components/blockquote";
import { HighlightBox } from "@/components/highlight-box";
import { Navigation } from "@/components/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";
import { APP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title:
    "¿Qué es RESICO y cuándo conviene? Guía para freelancers en México | Fiscalio",
  description:
    "Descubre qué es el Régimen Simplificado de Confianza (RESICO), cuándo conviene a freelancers y pequeños negocios en México, límites, tasas de ISR y errores comunes.",
  keywords:
    "RESICO freelancers, qué es RESICO, declarar impuestos RESICO, organizar facturas CFDI, ISR RESICO México, régimen simplificado de confianza persona física",
  authors: [
    {
      name: "Fiscalio",
      url: "https://www.fiscalio.app",
    },
  ],
  openGraph: {
    title: "¿Qué es RESICO y cuándo conviene? Guía para freelancers en México",
    description:
      "Guía clara y práctica sobre RESICO para freelancers y pequeños negocios. Aprende cuándo conviene, límites de ingresos y cómo declarar correctamente.",
    type: "article",
    locale: "es_MX",
    siteName: "Fiscalio",
  },
  robots: "index, follow",
  alternates: {
    types: {
      "text/markdown": `${APP_URL}/blog/que-es-resico-freelancers-mexico/llms.txt`,
    },
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
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
                    <time dateTime="2024-03-15" className="font-mono text-xs">
                      12 FEB 2026
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
                ¿Qué es RESICO y cuándo te conviene? Guía clara para freelancers
                y pequeños negocios en México
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-sans max-w-3xl">
                Si eres freelancer, desarrollador independiente o tienes un
                pequeño negocio familiar en México, probablemente ya escuchaste
                del Régimen Simplificado de Confianza (RESICO).
              </p>
            </div>

            <Separator />

            {/* Featured Image */}
            {/* <div className="relative aspect-[16/9] w-full border-2 border-accent-amber/20 bg-muted">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 mx-auto border-2 border-accent-amber/30 flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=400&width=800"
                      alt="Featured image"
                      width={800}
                      height={400}
                      className="object-cover w-full h-full opacity-0"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground font-mono tracking-wide">
                    IMAGEN_DESTACADA
                  </p>
                </div>
              </div>
            </div> */}

            <div className="prose prose-lg max-w-none">
              <div className="space-y-8 font-sans text-base md:text-lg leading-relaxed text-foreground">
                <section className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                    ¿Qué es RESICO?
                  </h2>
                  <p className="text-foreground/90">
                    El RESICO es un régimen fiscal creado por el SAT para
                    personas físicas con ingresos moderados.
                  </p>

                  <BlockQuote
                    title="Lógica para entender RESICO"
                    content={
                      <>
                        <div className="space-y-2">
                          <h4 className="font-display font-semibold text-foreground">
                            Declaras tus ingresos reales
                          </h4>
                          <p className="text-sm">
                            Todos los ingresos deben ser declarados. La omisión
                            puede resultar en sanciones.
                          </p>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-display font-semibold text-foreground">
                            Pagas una tasa de ISR muy baja
                          </h4>
                          <p className="text-sm">
                            Las tasas actuales de ISR en RESICO van
                            aproximadamente de 1.0% a 2.5%, dependiendo del
                            nivel de ingresos.
                          </p>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-display font-semibold text-foreground">
                            No puedes deducir casi ningún gasto
                          </h4>
                          <p className="text-sm">
                            Si tus ingresos rebasan los $3.5 millones anuales,
                            debes cambiar de régimen fiscal antes de que termine
                            el ejercicio.
                          </p>
                        </div>
                      </>
                    }
                  />

                  <p className="text-foreground/90">En términos prácticos:</p>

                  <HighlightBox title="LA_FÓRMULA_MÁGICA">
                    <p className="text-xl tracking-tight font-bold">
                      Ingresos Cobrados{" "}
                      <span className="text-accent-amber">&times;</span> Tasa
                      Aplicable de ISR{" "}
                      <span className="text-accent-amber">=</span> ISR a pagar
                    </p>
                  </HighlightBox>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                    ¿Por qué el SAT creó RESICO?
                  </h2>

                  <p className="text-foreground/90">El objetivo fue doble:</p>

                  <ol className="space-y-2">
                    <li>
                      <strong className="block">
                        Facilitar el cumplimiento.
                      </strong>
                      Muchos pequeños contribuyentes evitaban formalizarse
                      porque la contabilidad era compleja. RESICO elimina esa
                      fricción.
                    </li>
                    <li>
                      <strong className="block">
                        Aumentar la base tributaria.
                      </strong>
                      Con tasas atractivas, más personas emiten CFDI y declaran
                      ingresos. El contribuyente paga menos porcentaje. El SAT
                      recauda más volumen. En esencia: pagar impuestos debía ser
                      más simple que evadirlos.
                    </li>
                  </ol>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                    ¿A quién sí le conviene RESICO?
                  </h2>

                  <p className="text-foreground/90">
                    RESICO es ideal si cumples estas tres condiciones:
                  </p>

                  <ol className="space-y-2">
                    <li>
                      <strong className="block">
                        Ingresas menos de $3,500,000 MXN al año
                      </strong>
                      Es el límite legal para permanecer en el régimen.
                    </li>
                    <li>
                      <strong className="block">
                        Tienes pocos gastos operativos
                      </strong>
                      <div className="space-y-2">
                        <p>
                          Si tu negocio depende más de tu conocimiento que de
                          inventario o costos fuertes, el régimen suele ser
                          favorable.
                        </p>
                        <p className="text-foreground/90">
                          Por ejemplo: Si eres desarrollador, diseñador,
                          consultor, nutriólogo independiente, arquitecto sin
                          estructura compleja.
                        </p>
                        <p className="text-foreground/90">
                          Si facturas $50,000 MXN al mes y casi no tienes gastos
                          deducibles relevantes, pagar 1%–2% sobre ingresos
                          suele ser más eficiente que tributar bajo esquemas
                          tradicionales.
                        </p>
                      </div>
                    </li>
                    <li>
                      <strong className="block">
                        Buscas simplicidad administrativa
                      </strong>
                      Si no quieres llevar control exhaustivo de gasolina,
                      papelería, internet y comprobantes para deducción, RESICO
                      reduce esa carga mental.
                    </li>
                  </ol>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                    ¿A quién no le conviene RESICO?
                  </h2>

                  <p className="text-foreground/90">
                    Aquí es donde muchos cometen errores. RESICO puede ser
                    perjudicial si:
                  </p>

                  <ol className="space-y-2">
                    <li>
                      <strong className="block">
                        Tienes margen de utilidad bajo
                      </strong>
                      Ejemplo: Vendes un producto en $100 MXN. Tu costo es $80
                      MXN. Tu utilidad real es $20 MXN. En régimen tradicional
                      pagarías ISR sobre $20. En RESICO pagarías sobre $100. En
                      negocios con inventario o alto costo de venta, esto puede
                      afectar significativamente la rentabilidad.
                    </li>
                    <li>
                      <strong className="block">
                        Tienes gastos personales altos
                      </strong>
                      En RESICO no puedes aplicar deducciones personales como:
                      honorarios médicos, dentales, colegiaturas, créditos
                      hipotecarios. Si tu estrategia fiscal depende de estas
                      deducciones, probablemente otro régimen sea más
                      conveniente.
                    </li>
                    <li>
                      <strong className="block">
                        Superas los $3,500,000 MXN anuales
                      </strong>
                      Si excedes el límite, el SAT te sacará automáticamente del
                      régimen al siguiente ejercicio fiscal. Si inicias
                      actividades a mitad de año, el límite se prorratea.
                    </li>
                  </ol>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                    Actividades permitidas en RESICO
                  </h2>

                  <p className="text-foreground/90">
                    RESICO está diseñado para personas físicas con actividades
                    económicas simples.
                  </p>

                  <ul className="text-foreground/90 list-disc list-inside">
                    <li>Servicios profesionales independientes</li>
                    <li>Freelancers en tecnología, diseño, marketing</li>
                    <li>Comercios pequeños</li>
                    <li>Tiendas en línea</li>
                    <li>Arrendamiento simple de inmuebles</li>
                    <li>
                      Actividades primarias (agricultura, ganadería, pesca)
                    </li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                    Actividades que te excluyen
                  </h2>

                  <p className="text-foreground/90">
                    No puedes tributar en RESICO si:
                  </p>

                  <ul className="text-foreground/90 list-inside list-disc">
                    <li>
                      Eres socio o accionista con control en una persona moral
                    </li>
                    <li>Tienes residencia fiscal en el extranjero</li>
                    <li>
                      Obtienes ingresos por regímenes fiscales preferentes
                    </li>
                    <li>Solo percibes salarios</li>
                  </ul>

                  <p className="text-foreground/90">
                    Si tienes salarios y además actividad independiente, puedes
                    tributar salarios por un régimen y tu actividad económica
                    por RESICO.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                    El error más común en freelancers
                  </h2>

                  <p className="text-foreground/90">
                    Muchos freelancers entran a RESICO sin analizar su
                    estructura de costos. Otros deberían estar en RESICO, pero
                    permanecen en Actividad Empresarial pagando tasas mucho más
                    altas innecesariamente.
                  </p>

                  <p className="text-foreground/90">
                    El problema no es el régimen. El problema es no tener
                    claridad sobre: tus ingresos reales cobrados; tu margen de
                    ganancia y tu carga fiscal efectiva
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                    Cómo simplificar tu cumplimiento en RESICO
                  </h2>

                  <p className="text-foreground/90">
                    Aunque el régimen es más simple, sigue requiriendo:
                  </p>

                  <ol className="text-foreground/90 list-inside list-decimal">
                    <li>Emitir CFDI correctamente</li>
                    <li>Organizar facturas</li>
                    <li>Declaraciones mensuales</li>
                    <li>Controlar el acumulado anual</li>
                  </ol>

                  <p className="text-foreground/90">
                    Para freelancers y pequeños negocios, el mayor riesgo no es
                    pagar mucho ISR. Es cometer errores administrativos que
                    generen multas o discrepancias.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                    Conclusión
                  </h2>

                  <p className="text-foreground/90">
                    El régimen RESICO representa una excelente opción para
                    pequeños contribuyentes que buscan formalizar su actividad
                    económica sin enfrentar las complejidades del régimen
                    general. Sin embargo, es fundamental mantener un control
                    ordenado de ingresos y egresos, así como cumplir
                    puntualmente con las declaraciones mensuales.
                  </p>

                  <p className="text-foreground/90">
                    Si eres freelancer en México, entender RESICO no es
                    opcional. Es una decisión estratégica.
                  </p>
                </section>
              </div>
            </div>

            <div className="border-t-2 border-accent-amber/20 pt-12 mt-16">
              <div className="bg-muted/30 border-2 border-accent-amber/20 p-8 md:p-12 space-y-6">
                <div className="space-y-3">
                  <span className="text-[10px] tracking-[0.3em] text-accent-rust font-mono">
                    ORGANIZA TUS FACTURAS
                  </span>
                  <h3 className="text-2xl md:text-3xl font-display font-semibold tracking-tight">
                    Control fiscal claro para RESICO
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                    Fiscalio te ayuda a procesar, clasificar y generar reportes
                    de tus XMLs del SAT de forma automática. Sin suscripciones,
                    sin complicaciones.
                  </p>
                </div>
                <Link href="/">
                  <Button className="text-xs tracking-[0.15em] h-12 px-8 rounded-none">
                    CONOCE MÁS
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
