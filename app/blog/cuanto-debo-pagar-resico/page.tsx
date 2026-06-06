import Link from "next/link";
import { CalendarIcon, UserIcon, ArrowRight } from "lucide-react";
import { BlockQuote } from "@/components/blockquote";
import { Navigation } from "@/components/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";
import { APP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title:
    "¿Cuánto debo pagar realmente de impuestos en RESICO? (El modelo mental para freelancers) | Fiscalio",
  description:
    "Olvídate de las tablas del SAT por un segundo. Entiende cuánto dinero realmente te queda después de impuestos con este modelo mental simple.",
  keywords:
    "cuánto debo pagar de impuestos RESICO, calcular impuestos RESICO, cuanto pagar al sat, impuestos freelancer mexico",
  authors: [
    {
      name: "Fiscalio",
      url: "https://www.fiscalio.app",
    },
  ],
  openGraph: {
    title:
      "¿Cuánto debo pagar realmente de impuestos en RESICO? (El modelo mental)",
    description:
      "Olvídate de las tablas del SAT. Entiende cuánto dinero te queda después de impuestos.",
    type: "article",
    locale: "es_MX",
    siteName: "Fiscalio",
    images: [
      {
        url: "https://www.fiscalio.app/api/og?title=%C2%BFCu%C3%A1nto%20debo%20pagar%20realmente%20de%20impuestos%20en%20RESICO%3F&subtitle=El%20modelo%20mental%20para%20freelancers&label=&v=0",
        width: 1200,
        height: 630,
        alt: "¿Cuánto debo pagar realmente de impuestos en RESICO?",
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
                    <time dateTime="2026-06-08" className="font-mono text-xs">
                      08 JUN 2026
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
                ¿Cuánto debo pagar realmente de impuestos en RESICO?
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-sans max-w-3xl">
                El día 17 de cada mes se acerca y, con él, la típica parálisis
                fiscal. Entras al portal del SAT, ves tus facturas precargadas y
                te haces la gran pregunta: ¿Cuánto de este dinero es realmente
                mío?
              </p>
            </div>

            <Separator />

            <div className="prose prose-lg max-w-none">
              <div className="space-y-8 font-sans text-base md:text-lg leading-relaxed text-foreground">
                <p className="text-foreground/90">
                  Si sientes que las matemáticas del SAT jamás cuadran con tu
                  flujo de caja, no estás loco. El error principal es intentar
                  calcular impuestos como si fueran un gasto al final del mes,
                  cuando deberían gestionarse desde el primer centavo.
                </p>

                <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                  El Modelo de las 3 Bóvedas
                </h2>
                <p className="text-foreground/90">
                  Imagina que cada vez que un cliente te paga, ese dinero se
                  divide automáticamente en tres bóvedas:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-foreground/90 ml-4">
                  <li>
                    <strong>La Bóveda del IVA:</strong> Dinero que tú solo custodias.
                  </li>
                  <li>
                    <strong>La Bóveda del ISR:</strong> Tu costo real por facturar.
                  </li>
                  <li>
                    <strong>Tu Bóveda de Neto Real:</strong> Lo único que puedes
                    gastar.
                  </li>
                </ol>

                <BlockQuote
                  title="Nota Importante"
                  content={
                    <p className="text-lg font-medium">
                      El SAT en RESICO te cobra por lo que <strong>cobraste</strong>,
                      no por lo que facturaste. Si emitiste una factura en mayo
                      pero el cliente te pagó en junio, eso pertenece a junio.
                    </p>
                  }
                />

                <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                  Tabla rápida: ¿Cuánto de impuestos pagaré?
                </h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm text-foreground/90">
                        <thead>
                            <tr className="border-b border-border">
                                <th className="p-2">Si tu cliente deposita:</th>
                                <th className="p-2">IVA (16%)</th>
                                <th className="p-2">ISR (RESICO)</th>
                                <th className="p-2">NETO REAL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-border">
                                <td className="p-2">$11,600 MXN</td>
                                <td className="p-2">$1,600</td>
                                <td className="p-2">$100</td>
                                <td className="p-2 font-bold">$9,900</td>
                            </tr>
                            <tr className="border-b border-border">
                                <td className="p-2">$29,000 MXN</td>
                                <td className="p-2">$4,000</td>
                                <td className="p-2">$250</td>
                                <td className="p-2 font-bold">$24,750</td>
                            </tr>
                            <tr className="border-b border-border">
                                <td className="p-2">$58,000 MXN</td>
                                <td className="p-2">$8,000</td>
                                <td className="p-2">$550</td>
                                <td className="p-2 font-bold">$49,450</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                  La dura realidad: Impuestos como costo de supervivencia
                </h2>
                <p className="text-foreground/90">
                    Pagar impuestos no es un acto heroico, es el costo de hacer negocios. Si tu actividad no puede sobrevivir pagando entre 1% y 2.5% de ISR, el problema no es el SAT, es tu modelo de negocio. Cumple, paga lo justo y enfócate en lo que genera dinero.
                </p>

                <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                  ¿Quieres tu cifra exacta?
                </h2>
                <p className="text-foreground/90">
                    No sufras con cálculos manuales. Usa nuestra calculadora para ver tus tres bóvedas en tiempo real.
                </p>
                <Link
                    href="/calculadora-resico"
                    className="inline-block"
                >
                    <Button size="lg" className="rounded-none bg-accent-rust text-white px-8">
                        Pruébala gratis y conoce tu Neto Real
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
