import Link from "next/link";
import { CalendarIcon, UserIcon, ExternalLinkIcon } from "lucide-react";
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
    "¿Es obligatoria la Declaración Anual para RESICO? El SAT dice que NO | Fiscalio",
  description:
    "Las personas físicas en RESICO no están obligadas a presentar su declaración anual desde el ejercicio 2024 y subsecuentes.",
  keywords:
    "declaración anual RESICO, SAT 2026 facilidades, RESICO personas físicas, exención anual RESICO, impuestos México freelancers, régimen simplificado de confianza",
  authors: [
    {
      name: "Fiscalio",
      url: "https://www.fiscalio.app",
    },
  ],
  openGraph: {
    title:
      "¿Es obligatoria la Declaración Anual para RESICO? El SAT dice que NO",
    description:
      "Las personas físicas en RESICO no están obligadas a presentar declaración anual. Conoce los detalles aquí.",
    type: "article",
    locale: "es_MX",
    siteName: "Fiscalio",
  },
  robots: "index, follow",
  alternates: {
    types: {
      "text/markdown": `${APP_URL}/blog/declaracion-anual-resico-personas-fisicas/llms.txt`,
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
                  NOTICIAS_FISCALES
                </Badge>
              </div>

              <div className="space-y-6">
                <div className="space-y-3">
                  <span className="text-[10px] tracking-[0.3em] text-muted-foreground font-mono">
                    PUBLICACIÓN
                  </span>
                  <div className="flex items-center gap-2 text-sm">
                    <CalendarIcon className="h-3.5 w-3.5 text-accent-rust" />
                    <time dateTime="2025-04-10" className="font-mono text-xs">
                      12 MAR 2026
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
                ¿Es obligatoria la Declaración Anual para RESICO? El SAT dice
                que NO
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-sans max-w-3xl">
                Una de las mayores preocupaciones para quienes tributan bajo el
                Régimen Simplificado de Confianza (RESICO) ha sido la carga
                administrativa al cierre de año. Sin embargo, el SAT ha dado un
                paso histórico para simplificar aún más este régimen.
              </p>
            </div>

            <Separator />

            <div className="prose prose-lg max-w-none">
              <div className="space-y-8 font-sans text-base md:text-lg leading-relaxed text-foreground">
                <section className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                    El SAT elimina la Declaración Anual para RESICO
                  </h2>
                  <p className="text-foreground/90">
                    En un comunicado oficial reciente, el Servicio de
                    Administración Tributaria (SAT) anunció que las{" "}
                    <strong>personas físicas</strong> que tributan en el Régimen
                    Simplificado de Confianza (RESICO){" "}
                    <strong>
                      quedan relevadas de presentar la declaración anual
                    </strong>
                    .
                  </p>

                  <HighlightBox title="EL_DATO_CLAVE">
                    <p className="text-xl tracking-tight font-bold">
                      A partir del ejercicio 2024 y subsecuentes, NO es
                      necesario presentar declaración anual si eres persona
                      física en RESICO.
                    </p>
                  </HighlightBox>

                  <p className="text-foreground/90">
                    Esta medida busca reducir la carga administrativa y fomentar
                    que más contribuyentes se sumen a este régimen que ya de por
                    sí ofrece tasas de ISR muy bajas (entre 1% y 2.5%).
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                    ¿Qué dice el comunicado oficial?
                  </h2>

                  <p className="text-foreground/90">
                    Según el boletín de prensa emitido por el SAT, esta
                    facilidad es parte de un paquete de mejoras para incentivar
                    el cumplimiento voluntario. El texto especifica:
                  </p>

                  <BlockQuote
                    title="Comunicado 01/2025"
                    content={
                      <div className="space-y-4">
                        <p className="italic text-sm">
                          &quot;[...] Además, quienes contribuyan en este
                          régimen quedan relevados de presentar la declaración
                          anual por los ingresos correspondientes y solo deberán
                          realizar pagos mensuales. &quot;
                        </p>
                        <div className="flex justify-end">
                          <Link
                            href="https://www.gob.mx/sat/prensa/sat-brinda-facilidades-para-tributar-en-el-resico-04-2025?idiom=es"
                            target="_blank"
                            className="flex items-center gap-2 text-xs font-mono text-accent-rust hover:underline"
                          >
                            VER FUENTE OFICIAL{" "}
                            <ExternalLinkIcon className="h-3 w-3" />
                          </Link>
                        </div>
                      </div>
                    }
                  />
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                    ¿Significa que ya no debo declarar nada?
                  </h2>

                  <p className="text-foreground/90">
                    <strong>No exactamente.</strong> Es importante distinguir
                    entre la declaración <em>anual</em> y las declaraciones{" "}
                    <em>mensuales</em>.
                  </p>

                  <ol className="space-y-4">
                    <li>
                      <strong className="block">
                        Declaraciones Mensuales: SIGUEN SIENDO OBLIGATORIAS
                      </strong>
                      Debes seguir presentando tus pagos provisionales mes con
                      mes antes del día 17. En estas declaraciones es donde se
                      calcula y paga el ISR sobre tus ingresos efectivamente
                      cobrados.
                    </li>
                    <li>
                      <strong className="block">
                        Declaración Anual: OPCIONAL
                      </strong>
                      <p>
                        El proceso de ajuste anual que se realizaba en abril es
                        opcional para personas físicas en RESICO. El pago que
                        hiciste mes con mes se considera definitivo en la mayoría
                        de los casos bajo esta nueva facilidad.
                      </p>
                      <p className="mt-4 text-sm bg-accent-amber/5 border border-accent-amber/20 p-4">
                        <strong>Ojo:</strong> Si tienes un <Link href="/blog/saldo-favor-resico" className="text-accent-rust underline underline-offset-4 decoration-accent-rust/30 hover:decoration-accent-rust transition-colors">saldo a favor en RESICO</Link>, presentar tu declaración anual (o mensual, según el caso) sigue siendo el camino para recuperar ese dinero. No presentarla cuando tienes saldo a favor es regalarle dinero al SAT.
                      </p>
                    </li>
                  </ol>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                    Beneficios de esta medida
                  </h2>

                  <ul className="text-foreground/90 list-disc list-inside space-y-2">
                    <li>
                      <strong>Menos burocracia:</strong> Un trámite menos al año
                      significa menos estrés y menos tiempo invertido en el
                      portal del SAT.
                    </li>
                    <li>
                      <strong>Certeza inmediata:</strong> Lo que pagas cada mes
                      es lo que queda, sin sorpresas de saldos a cargo al final
                      del año por errores de cálculo en el acumulado.
                    </li>
                    <li>
                      <strong>Enfoque en tu negocio:</strong> Te permite
                      concentrarte en generar ingresos y emitir tus facturas
                      correctamente, que es lo más importante en RESICO.
                    </li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                    ¿Cómo prepararte para este cambio?
                  </h2>

                  <p className="text-foreground/90">
                    Aunque ya no haya declaración anual, el éxito en RESICO
                    sigue dependiendo de una buena administración mensual.
                    Asegúrate de:
                  </p>

                  <ul className="text-foreground/90 list-inside list-disc space-y-2">
                    <li>Emitir tus CFDI de ingresos por cada pago recibido.</li>
                    <li>
                      Tener tus facturas de gastos (aunque no sean deducibles
                      para ISR, sirven para acreditar el IVA).
                    </li>
                    <li>Mantener tu buzón tributario activo.</li>
                    <li>Estar al corriente con tus declaraciones mensuales.</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                    Conclusión
                  </h2>

                  <p className="text-foreground/90">
                    Esta es una excelente noticia para todos los freelancers y
                    pequeños contribuyentes en México. La eliminación de la
                    declaración anual para RESICO refuerza la promesa original
                    del régimen: ser la forma más sencilla y económica de estar
                    al corriente con el SAT.
                  </p>

                  <p className="text-foreground/90 font-medium">
                    ¿Necesitas ayuda para organizar tus facturas y estar listo
                    para tus declaraciones mensuales? Fiscalio está diseñado
                    específicamente para ayudarte con eso.
                  </p>
                </section>
              </div>
            </div>

            <div className="border-t-2 border-accent-amber/20 pt-12 mt-16">
              <div className="bg-muted/30 border-2 border-accent-amber/20 p-8 md:p-12 space-y-6">
                <div className="space-y-3">
                  <span className="text-[10px] tracking-[0.3em] text-accent-rust font-mono">
                    CONTROL MENSUAL SIN ESTRÉS
                  </span>
                  <h3 className="text-2xl md:text-3xl font-display font-semibold tracking-tight">
                    Domina tus declaraciones mensuales
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                    Ya no hay anual, pero las mensuales siguen ahí. Fiscalio te
                    ayuda a procesar tus XMLs, clasificar tus ingresos y tener
                    todo listo para cumplir con el SAT en minutos, no horas.
                  </p>
                </div>
                <Link href="/">
                  <Button className="text-xs tracking-[0.15em] h-12 px-8 rounded-none">
                    PROBAR FISCALIO
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
