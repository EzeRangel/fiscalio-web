import Link from "next/link";
import { ArrowRight, CalendarIcon, UserIcon } from "lucide-react";
import { BlockQuote } from "@/components/blockquote";
import { Navigation } from "@/components/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { TaxTimeline } from "@/components/tax-timeline";
import { Metadata } from "next";
import { APP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Cuándo presentar tu declaración mensual en RESICO | Fiscalio",
  description:
    "Guía completa sobre cuándo presentar la declaración mensual SAT RESICO. Resolvemos dudas sobre mes de facturación vs declaración y qué hacer en tu primer mes.",
  keywords:
    "cuándo declarar RESICO, fecha declaración mensual RESICO, mes de facturación vs declaración, cuándo presentar declaración SAT RESICO, primer mes RESICO qué hacer, si facturo en enero cuándo declaro, cuándo declarar si no tuve ingresos RESICO",
  authors: [{ name: "Fiscalio", url: "https://www.fiscalio.app" }],
  openGraph: {
    title: "Cuándo presentar tu declaración mensual en RESICO",
    description:
      "Entiende el calendario fiscal, la fecha de declaración mensual en RESICO y evita multas por omisión.",
    type: "article",
    locale: "es_MX",
    siteName: "Fiscalio",
    images: [
      {
        url: `${APP_URL}/api/og?title=Cu%C3%A1ndo%20presentar%20tu%20declaraci%C3%B3n%20mensual%20en%20RESICO&subtitle=&label=&v=0`,
        width: 1200,
        height: 630,
      },
    ],
  },
  robots: "index, follow",
  alternates: {
    types: {
      "text/markdown": `${APP_URL}/blog/cuando-presentar-declaracion-mensual-resico/llms.txt`,
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
              <div className="space-y-3">
                <span className="text-[10px] tracking-[0.3em] text-muted-foreground font-mono">
                  CATEGORÍA
                </span>
                <Badge
                  variant="outline"
                  className="text-[10px] tracking-[0.2em] font-mono rounded-none px-3 py-1 border-accent-amber/30 text-accent-rust"
                >
                  DECLARACIÓN
                </Badge>
              </div>

              <div className="space-y-6">
                <div className="space-y-3">
                  <span className="text-[10px] tracking-[0.3em] text-muted-foreground font-mono">
                    PUBLICACIÓN
                  </span>
                  <div className="flex items-center gap-2 text-sm">
                    <CalendarIcon className="h-3.5 w-3.5 text-accent-rust" />
                    <time dateTime="2026-04-21" className="font-mono text-xs">
                      21 ABR 2026
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
                ¿Cuándo presentar tu declaración mensual en RESICO?
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-sans max-w-3xl">
                Hay una razón por la que tantas personas se equivocan al buscar{" "}
                <strong>cuándo declarar RESICO</strong>. Estás operando en dos
                tiempos distintos sin darte cuenta.
              </p>
            </div>

            <Separator />

            <div className="prose prose-lg max-w-none">
              <div className="space-y-8 font-sans text-base md:text-lg leading-relaxed text-foreground">
                <section className="space-y-4">
                  <p className="text-foreground/90">
                    Por un lado está tu realidad: trabajas, facturas y cobras.
                    Por otro lado está el calendario fiscal y la{" "}
                    <strong>fecha de declaración mensual en RESICO</strong>. El
                    problema es que no funcionan al mismo tiempo.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                    Primero: qué significa realmente "declarar" ante el SAT
                  </h2>
                  <p className="text-foreground/90">
                    Antes de hablar de fechas, aclaremos algo clave para
                    entender{" "}
                    <strong>cuándo presentar la declaración SAT RESICO</strong>.
                    No estás reportando lo que llevas hoy, estás reportando lo
                    que ya pasó en un periodo que ya terminó.
                  </p>
                  <BlockQuote
                    title="Idea Clave"
                    content={
                      <p className="text-lg font-medium">
                        Declaras un período que ya terminó
                      </p>
                    }
                  />
                  <p className="text-foreground/90">
                    Ese período siempre es un mes completo. Y siempre va
                    atrasado respecto a tu presente.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                    La lógica base: siempre declaras el mes anterior
                  </h2>
                  <p className="text-foreground/90">
                    La regla es simple, pero hay que entenderla bien: Cada mes
                    declaras lo que hiciste en el mes anterior. Si te preguntas{" "}
                    <strong>si facturo en enero cuándo declaro</strong>, la
                    respuesta es en febrero.
                  </p>
                  <div className="bg-muted/30 border-l-4 border-accent-amber p-6 space-y-2 font-mono text-sm">
                    <p>
                      • Todo lo que hiciste en ENERO → lo declaras en FEBRERO
                    </p>
                    <p>
                      • Todo lo que hiciste en FEBRERO → lo declaras en MARZO
                    </p>
                  </div>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                    Entonces… ¿cuál es la fecha límite exacta?
                  </h2>
                  <p className="text-foreground/90">
                    En términos prácticos: La declaración mensual se presenta
                    durante el mes siguiente, con fecha límite el{" "}
                    <strong>día 17</strong>. Sin embargo, no basta con saber el
                    día; también es vital conocer el proceso técnico de{" "}
                    <Link
                      href="/blog/como-hacer-declaracion-mensual-resico"
                      className="text-accent-rust hover:underline font-medium"
                    >
                      cómo hacer tu declaración mensual en RESICO paso a paso
                    </Link>{" "}
                    para evitar errores en el portal del SAT.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-foreground/90">
                    <li>Enero se declara antes del 17 de febrero</li>
                    <li>Febrero se declara antes del 17 de marzo</li>
                  </ul>

                  <p className="text-foreground/90 italic">
                    Esta es la{" "}
                    <strong>fecha de declaración mensual RESICO</strong> que
                    debes tener siempre en tu calendario.
                  </p>
                </section>

                <section className="py-8">
                  <TaxTimeline />
                  <p className="text-xs text-center text-muted-foreground font-mono uppercase tracking-widest mt-4">
                    Visualización: Ciclo de cumplimiento fiscal RESICO
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                    Mes de facturación vs declaración: Casos reales
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-display font-semibold text-lg text-foreground">
                        "Facturé el último día del mes… ¿ya cuenta para el
                        siguiente?"
                      </h3>
                      <p className="text-foreground/90">
                        No. Si emitiste una factura el 31 de enero, esa
                        operación pertenece a enero y se declara en febrero. El
                        corte es claro: todo lo que pasa dentro del mes, se
                        queda en ese mes. Si tienes dudas sobre cómo se separan
                        estos montos, te recomendamos leer nuestra guía sobre{" "}
                        <Link
                          href="/blog/calcular-isr-iva-resico"
                          className="text-accent-rust hover:underline font-medium"
                        >
                          cómo calcular ISR e IVA en RESICO
                        </Link>
                        .
                      </p>
                    </div>

                    <div>
                      <h3 className="font-display font-semibold text-lg text-foreground">
                        "No tuve ingresos… ¿cuándo declarar si no tuve ingresos
                        RESICO?"
                      </h3>
                      <p className="text-foreground/90">
                        Sí, es obligatorio. Pensar que "si no gané dinero, no
                        hago nada" es un error común. Debes presentar la
                        declaración en ceros antes del día 17 para evitar
                        multas.
                      </p>
                    </div>
                  </div>

                  <p className="text-foreground/90">
                    Gran parte de la confusión viene de no separar el{" "}
                    <strong>mes de facturación vs declaración</strong>. Debes
                    entender estos tres momentos:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                    <div className="p-4 border border-accent-amber/20 bg-muted/20">
                      <span className="block font-mono text-[10px] text-accent-rust mb-2">
                        01
                      </span>
                      <h5 className="font-display font-bold">FACTURAR</h5>
                      <p className="text-xs text-muted-foreground mt-1">
                        Emitir un CFDI
                      </p>
                    </div>
                    <div className="p-4 border border-accent-amber/20 bg-muted/20">
                      <span className="block font-mono text-[10px] text-accent-rust mb-2">
                        02
                      </span>
                      <h5 className="font-display font-bold">COBRAR</h5>
                      <p className="text-xs text-muted-foreground mt-1">
                        Recibir el dinero
                      </p>
                    </div>
                    <div className="p-4 border border-accent-amber/20 bg-muted/20">
                      <span className="block font-mono text-[10px] text-accent-rust mb-2">
                        03
                      </span>
                      <h5 className="font-display font-bold">DECLARAR</h5>
                      <p className="text-xs text-muted-foreground mt-1">
                        Reportar el mes cerrado
                      </p>
                    </div>
                  </div>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                    Primer mes RESICO: qué hacer y cómo empezar
                  </h2>
                  <p className="text-foreground/90">
                    Si te preguntas en tu{" "}
                    <strong>primer mes RESICO qué hacer</strong>, la clave es no
                    ignorar el periodo de inicio.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                    <div className="space-y-3 p-6 border border-accent-amber/20 bg-muted/10">
                      <h4 className="font-display font-semibold text-lg text-foreground">
                        Caso: Alta a mitad de mes
                      </h4>
                      <p className="text-sm text-foreground/90 leading-relaxed">
                        Si te registras el 15 de marzo, aunque no hayas estado
                        activo el mes completo, marzo cuenta como tu primer
                        periodo y debes declararlo en abril.
                      </p>
                    </div>

                    <div className="space-y-3 p-6 border border-accent-amber/20 bg-muted/10">
                      <h4 className="font-display font-semibold text-lg text-foreground">
                        Caso: Mes sin actividad
                      </h4>
                      <p className="text-sm text-foreground/90 leading-relaxed">
                        Incluso sin facturas, ese mes existe fiscalmente.
                        Presentar la declaración en ceros es fundamental para
                        mantener tu cumplimiento positivo ante el SAT.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                    Qué pasa si te equivocas con las fechas
                  </h2>
                  <p className="text-foreground/90">
                    Las consecuencias no son inmediatas, pero existen:
                    declaraciones omitidas, multas, recargos e inconsistencias
                    en tu historial. Cuando no entiendes el sistema, los errores
                    se acumulan.
                  </p>
                </section>

                <section className="space-y-4 pt-8">
                  <div className="bg-primary text-primary-foreground p-8 rounded-none space-y-4">
                    <h3 className="text-xl md:text-2xl font-display font-semibold tracking-tight">
                      "¿Cuánto tengo que pagar realmente?"
                    </h3>
                    <p className="text-primary-foreground/80 font-sans">
                      Una vez que tienes claro cuándo declarar, necesitas
                      entender los números para que no te tomen por sorpresa.
                    </p>
                    <Link
                      href="/calculadora-resico"
                      className="inline-flex items-center gap-2 font-bold hover:underline text-accent-amber"
                    >
                      Usa la calculadora de ISR e IVA{" "}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                    Conclusión
                  </h2>
                  <p className="text-foreground/90">
                    Olvida por un momento las reglas sueltas. Quédate con este
                    modelo: Cada mes es un bloque cerrado. Todo lo que ocurre
                    dentro de ese mes se queda ahí. Al mes siguiente, reportas
                    ese bloque completo.
                  </p>
                  <p className="text-foreground/90 font-semibold italic">
                    Cuando cambias la forma de verlo, declarar deja de ser
                    incertidumbre y empieza a ser un proceso claro.
                  </p>
                </section>
              </div>
            </div>

            <div className="border-t-2 border-accent-amber/20 pt-12 mt-16">
              <div className="bg-muted/30 border-2 border-accent-amber/20 p-8 md:p-12 space-y-6">
                <div className="space-y-3">
                  <span className="text-[10px] tracking-[0.3em] text-accent-rust font-mono">
                    ÚNETE A LA WAITLIST
                  </span>
                  <h3 className="text-2xl md:text-3xl font-display font-semibold tracking-tight">
                    Claridad fiscal sin hojas sueltas
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                    Estamos construyendo Fiscalio para que puedas ver tus CFDIs,
                    tus ingresos y tus impuestos en un mismo lugar, sin tener
                    que reconstruir todo cada mes.
                  </p>
                </div>
                <Link href="/?dialog=open">
                  <Button className="text-xs tracking-[0.15em] h-12 px-8 rounded-none">
                    REGISTRARME
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
