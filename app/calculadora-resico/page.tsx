import { Navigation } from "@/components/navigation";
import { TaxCalculator } from "@/components/tax-calculator/tax-calculator";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Calculadora de impuestos RESICO 2026 | Fiscalio",
  description:
    "Calcula tus impuestos de RESICO de forma rápida y sencilla. Descubre cuánto recibirás en tu cuenta y lo que debes separar para el SAT cada mes.",
  openGraph: {
    title: "Calculadora de impuestos RESICO 2026 | Fiscalio",
    description: "Calcula tus impuestos de RESICO de forma rápida y sencilla.",
    images: [
      {
        url: "https://www.fiscalio.app/api/og?title=Calculadora%20de%0Aimpuestos%20RESICO&subtitle=&label=&v=3",
        width: 1200,
        height: 630,
        alt: "Calculadora de impuestos RESICO 2026",
      },
    ],
  },
};

export default function CalculatorPage() {
  return (
    <main className="min-h-screen bg-background font-mono">
      <Navigation />

      {/* Hero Section */}
      <section className="border-b border-border bg-zinc-50/50 dark:bg-zinc-900/10">
        <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24">
          <div className="max-w-4xl space-y-6">
            <span className="text-[10px] tracking-[0.3em] text-muted-foreground font-mono">
              [01] HERRAMIENTA
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight leading-[1.1]">
              Calculadora de impuestos <br />
              <span className="text-muted-foreground text-3xl md:text-4xl lg:text-5xl">
                RESICO para Personas Físicas
              </span>
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl tracking-wide">
              Descubre exactamente cuánto recibirás en tu cuenta bancaria y
              cuánto debes separar para el SAT cada mes. Simula ingresos
              nacionales, extranjeros y cálculos de retenciones.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="border-b border-border">
        <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24">
          <TaxCalculator />
        </div>
      </section>

      {/* Content Layer - SEO & Detailed Information */}
      <section className="bg-foreground text-background border-b border-white/10">
        <div className="container mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="space-y-6">
              <span className="text-[10px] tracking-[0.3em] text-background/50 font-mono">
                [02] GUÍA DETALLADA
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-tight">
                Todo lo que necesitas saber para <br />
                <span className="text-background/60">
                  dominar tus impuestos en RESICO
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
              <div className="space-y-6">
                <h3 className="font-display text-xl font-medium border-l-2 border-primary pl-4">
                  ¿Qué calcula exactamente nuestra calculadora RESICO?
                </h3>
                <p className="text-sm text-background/70 leading-relaxed tracking-wide">
                  Esta herramienta ha sido desarrollada con un enfoque
                  &quot;freelance-first&quot; para resolver la duda más común al
                  recibir un pago: &quot;¿Cuánto de esto es realmente
                  mío?&quot;. Al utilizar nuestra <strong>calculadora RESICO</strong>,
                  obtendrás un desglose detallado de los tres pilares fiscales en
                  México:
                </p>
                <ul className="space-y-4 text-sm text-background/70 leading-relaxed">
                  <li>
                    <strong className="text-background">ISR (Impuesto Sobre la Renta):</strong> El beneficio
                    principal de este régimen. Calculamos tu impuesto basado en
                    las tasas preferenciales que van desde el 1.00% (hasta
                    $25,000 MXN) hasta el 2.5% (hasta $3.5 millones anuales).
                  </li>
                  <li>
                    <strong className="text-background">IVA (Impuesto al Valor Agregado):</strong> Crucial para el
                    flujo de caja. La calculadora determina el 16% de IVA
                    trasladado en operaciones nacionales o el 0% para
                    exportación de servicios.
                  </li>
                  <li>
                    <strong className="text-background">Retenciones:</strong> Si facturas a una Persona Moral
                    (empresa), desglosamos automáticamente el 1.25% de ISR y
                    las dos terceras partes del IVA cobrado.
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className="font-display text-xl font-medium border-l-2 border-primary pl-4">
                  Cómo funciona el proceso de calcular ISR e IVA en RESICO
                </h3>
                <p className="text-sm text-background/70 leading-relaxed tracking-wide">
                  Para <strong>calcular ISR RESICO</strong> de manera efectiva, el
                  algoritmo de Fiscalio aplica la tabla mensual acumulada vigente
                  del SAT. A diferencia del régimen de Actividad Profesional
                  tradicional, en RESICO la simplicidad es la norma: pagas sobre
                  lo facturado y cobrado (base flujo de efectivo).
                </p>
                <p className="text-sm text-background/70 leading-relaxed tracking-wide">
                  Al momento de <strong>calcular IVA RESICO</strong>, la lógica
                  cambia. El IVA es un impuesto indirecto; tú solo eres un
                  recaudador para el SAT. La calculadora te ayuda a visualizar
                  ese &quot;dinero ajeno&quot; que debes separar. Un error común
                  es gastar el IVA recibido, lo que genera problemas de liquidez.
                  Nuestra herramienta previene esto al darte una cifra neta real
                  de disponibilidad.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="font-display text-xl font-medium border-l-2 border-primary pl-4">
                  Ejemplo simple: El escenario del Freelancer Senior
                </h3>
                <p className="text-sm text-background/70 leading-relaxed tracking-wide">
                  Supongamos que cierras un contrato de desarrollo de software
                  por $60,000 MXN mensuales con una agencia en México:
                </p>
                <div className="bg-white/5 p-6 space-y-2 font-mono text-[11px] text-background/60">
                  <div className="flex justify-between">
                    <span>Subtotal (Ingreso Bruto)</span>
                    <span className="text-background">$60,000.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>IVA Trasladado (16%)</span>
                    <span>+ $9,600.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Retención ISR (1.25%)</span>
                    <span className="text-red-400">- $750.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Retención IVA (10.66%)</span>
                    <span className="text-red-400">- $6,400.00</span>
                  </div>
                  <div className="border-t border-white/10 mt-4 pt-4 flex justify-between text-xs">
                    <span className="text-background">Total a depositar</span>
                    <span className="text-primary-foreground font-bold">
                      $62,450.00
                    </span>
                  </div>
                </div>
                <p className="text-sm text-background/70 leading-relaxed tracking-wide">
                  A través de este ejemplo, la <strong>calculadora RESICO</strong> te
                  permite ver que, aunque el total depositado es mayor a tu
                  subtotal, tu ingreso real disponible es menor una vez que
                  consideras el IVA neto que debes pagar al SAT.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="font-display text-xl font-medium border-l-2 border-primary pl-4">
                  Limitaciones y consideraciones importantes
                </h3>
                <p className="text-sm text-background/70 leading-relaxed tracking-wide">
                  Aunque nos esforzamos por ofrecer la simulación más precisa,
                  debes considerar estas limitaciones:
                </p>
                <ul className="space-y-4 text-sm text-background/70 leading-relaxed">
                  <li>
                    <strong className="text-background">IVA Acreditable:</strong> Esta herramienta no resta el
                    IVA que tú pagas en tus gastos operativos. Ese IVA reduce
                    el monto final a pagar al SAT.
                  </li>
                  <li>
                    <strong className="text-background">Ingresos Mixtos:</strong> Si tienes ingresos por
                    sueldos, intereses o plataformas tecnológicas, te sugerimos
                    revisar nuestra guía sobre la{" "}
                    <Link
                      href="/blog/declaracion-anual-resico-personas-fisicas"
                      className="underline decoration-primary underline-offset-4"
                    >
                      declaración anual de RESICO
                    </Link>
                    .
                  </li>
                  <li>
                    <strong className="text-background">Guías Técnicas:</strong> Para profundizar, consulta
                    nuestra{" "}
                    <Link
                      href="/blog/calcular-isr-iva-resico"
                      className="underline decoration-primary underline-offset-4"
                    >
                      guía para calcular ISR e IVA
                    </Link>{" "}
                    y entiende cómo optimizar tu carga fiscal de forma legal.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Introducing Fiscalio */}
      <section className="py-24 lg:py-40 border-b border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-8 space-y-8">
              <span className="text-[10px] tracking-[0.3em] text-muted-foreground">
                MÁS ALLÁ DE LA SIMULACIÓN
              </span>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-medium font-display tracking-tight leading-tight">
                Deja de calcular a mano <br />
                <span className="text-muted-foreground">
                  automatiza tu RESICO
                </span>
              </h2>
              <div className="space-y-4 max-w-xl">
                <p className="text-sm text-muted-foreground leading-relaxed tracking-wide">
                  Esta calculadora es solo el inicio. <strong>Fiscalio</strong>{" "}
                  es el sistema diseñado para freelancers que lee tus facturas,
                  clasifica tus gastos y te dice exactamente cuánto IVA e ISR
                  tienes que pagar cada mes,{" "}
                  <strong>sin que muevas un solo dedo.</strong>
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed tracking-wide">
                  Sin mensualidades. Sin servidores en la nube. Tus datos, tu
                  control, tu tranquilidad fiscal.
                </p>
              </div>
            </div>
            <div className="lg:col-span-4 space-y-6">
              <Link href="/?dialog=open" scroll={true}>
                <Button
                  size="lg"
                  className="w-full text-xs tracking-[0.15em] h-14 rounded-none uppercase mb-1"
                >
                  Reservar mi descuento fundador
                  <ArrowRight className="h-3.5 w-3.5 ml-3" />
                </Button>
              </Link>
              <p className="text-[10px] text-muted-foreground tracking-wide text-center uppercase">
                Solo 50 lugares disponibles con precio especial
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
