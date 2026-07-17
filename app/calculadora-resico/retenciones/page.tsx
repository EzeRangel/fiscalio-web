import { Navigation } from "@/components/navigation";
import { TaxCalculator } from "@/components/tax-calculator/tax-calculator";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { WaitlistDialog } from "@/components/waitlist-dialog";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Calculadora de retenciones RESICO para Personas Físicas | Fiscalio",
  description:
    "Calcula fácilmente cuánto debes facturar y cuáles son tus retenciones de ISR (1.25%) e IVA (10.66%) si eres RESICO y le prestas servicios a una Persona Moral.",
  openGraph: {
    title: "Calculadora de retenciones RESICO para Personas Físicas | Fiscalio",
    description:
      "Calcula tus retenciones de ISR e IVA en RESICO de forma rápida y sencilla.",
    images: [
      {
        url: "https://www.fiscalio.app/api/og?title=Calculadora%20de%0Aretenciones%20RESICO&subtitle=&label=&v=3",
        width: 1200,
        height: 630,
        alt: "Calculadora de retenciones RESICO 2026",
      },
    ],
  },
};

export default function RetencionesPage() {
  return (
    <main className="min-h-screen bg-background font-sans">
      <Suspense>
        <WaitlistDialog />
      </Suspense>
      <Navigation />

      {/* Hero Section */}
      <section className="border-b border-border bg-zinc-50/50 dark:bg-zinc-900/10">
        <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24">
          <div className="max-w-4xl space-y-6">
            <span className="text-[10px] tracking-[0.3em] text-muted-foreground font-mono">
              [01] HERRAMIENTA
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight leading-[1.1]">
              Calculadora de retenciones RESICO <br />
              <span className="text-muted-foreground text-3xl md:text-4xl lg:text-5xl">
                para Personas Físicas
              </span>
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl tracking-wide">
              ¿Le vas a facturar a una empresa? Olvídate de los cálculos manuales.
              Descubre exactamente cuánto cobrar y cuáles son las retenciones obligatorias
              de ISR e IVA para que tu factura (CFDI) salga perfecta a la primera.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="border-b border-border">
        <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24">
          <TaxCalculator initialTipoCliente="MORAL" source="calculadora_retenciones" />
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
                Las retenciones en RESICO <br />
                <span className="text-background/60">
                  explicadas de forma sencilla
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
              <div className="space-y-6">
                <h3 className="font-display text-xl font-medium border-l-2 border-primary pl-4">
                  ¿Por qué las empresas te retienen impuestos?
                </h3>
                <p className="text-sm text-background/70 leading-relaxed tracking-wide">
                  Si eres freelancer, independiente o tienes un negocio y tributas en el{" "}
                  <strong>Régimen Simplificado de Confianza (RESICO)</strong>, probablemente ya
                  notaste que cuando le facturas a una empresa (Persona Moral), el pago final que
                  recibes en tu cuenta es menor al total de tu factura.
                </p>
                <p className="text-sm text-background/70 leading-relaxed tracking-wide">
                  Esto no es una penalización ni un cobro fantasma de tu cliente; es una obligación del
                  SAT. La ley obliga a las empresas a actuar como recaudadores preventivos, quitándote
                  un porcentaje de tu pago para entregárselo directamente a la autoridad. Para ti,
                  esto se traduce en impuestos que ya pagaste por adelantado.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="font-display text-xl font-medium border-l-2 border-primary pl-4">
                  ¿Cuánto te deben retener exactamente?
                </h3>
                <p className="text-sm text-background/70 leading-relaxed tracking-wide">
                  Existen dos retenciones distintas que deben ir desglosadas en tu factura cuando
                  colaboras con una persona moral. Cada una tiene su propio fundamento legal:
                </p>
                <ul className="space-y-4 text-sm text-background/70 leading-relaxed">
                  <li>
                    <strong className="text-background">
                      Retención de ISR (1.25%):
                    </strong>{" "}
                    Según el{" "}
                    <Link
                      href="http://www.apta.com.mx/aptace/leyes/articulo.php?ley=LISR&art=113&inc=J&actua=1886&actual=1886"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-primary underline-offset-4"
                    >
                      Artículo 113-J de la Ley del Impuesto Sobre la Renta (LISR)
                    </Link>
                    , cuando una persona física en RESICO realiza actividades empresariales, profesionales
                    o de arrendamiento para una persona moral, esta última está obligada a retener el
                    1.25% sobre el subtotal de la factura (sin incluir el IVA). Este dinero no desaparece.
                    El portal del SAT lo reconocerá automáticamente en tu declaración mensual como un saldo
                    a favor (pago provisional), reduciendo el ISR que te toque pagar el día 17.
                  </li>
                  <li>
                    <strong className="text-background">
                      Retención de IVA (10.6667%):
                    </strong>{" "}
                    De acuerdo con el{" "}
                    <Link
                      href="http://www.apta.com.mx/aptace/leyes/articulo.php?ley=LIVA&art=1&inc=A&actua=1885&actual=1885"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-primary underline-offset-4"
                    >
                      Artículo 1-A, fracción II, inciso a) de la Ley del Impuesto al Valor Agregado (LIVA)
                    </Link>{" "}
                    (en conjunto con el Art. 3 de su Reglamento), si prestas servicios profesionales
                    independientes o rentas bienes a una persona moral, te deben retener las dos terceras
                    partes del IVA que les trasladas. Como el IVA general es del 16%, esto equivale a
                    retener exactamente el 10.6667% del subtotal.
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className="font-display text-xl font-medium border-l-2 border-primary pl-4">
                  Ejemplo Práctico: Recibir $10,000 netos
                </h3>
                <p className="text-sm text-background/70 leading-relaxed tracking-wide">
                  Si acordaste con una empresa recibir exactamente $10,000.00 MXN netos en tu cuenta de
                  banco, tu subtotal no puede ser de 10,000 pesos. Debes hacer una operación a la inversa
                  para absorber las retenciones. Debería verse aproximadamente así:
                </p>
                <div className="bg-white/5 p-6 space-y-2 font-mono text-[11px] text-background/60">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="text-background">$9,607.69</span>
                  </div>
                  <div className="flex justify-between">
                    <span>IVA Trasladado (+16%)</span>
                    <span>+ $1,537.23</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Retención ISR (-1.25%)</span>
                    <span className="text-red-400">- $120.10</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Retención IVA (-10.6667%)</span>
                    <span className="text-red-400">- $1,024.82</span>
                  </div>
                  <div className="border-t border-white/10 mt-4 pt-4 flex justify-between text-xs">
                    <span className="text-background">Total Neto a Depositar</span>
                    <span className="text-primary-foreground font-bold">
                      $10,000.00
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="font-display text-xl font-medium border-l-2 border-primary pl-4">
                  Respuestas rápidas sobre retenciones en RESICO
                </h3>
                <div className="space-y-6 text-sm text-background/70">
                  <div>
                    <h4 className="font-semibold text-background mb-1">
                      ¿Qué pasa si la empresa no me retiene los impuestos?
                    </h4>
                    <p className="leading-relaxed">
                      La responsabilidad legal de retener y pagar ese dinero al SAT es de la empresa.
                      Sin embargo, si emites tu CFDI sin los nodos de retención configurados, el área
                      de finanzas de tu cliente rechazará la factura. Tendrás que cancelarla,
                      reestructurarla y reemitirla, lo que retrasará tu pago semanas.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-background mb-1">
                      Si exporto servicios al extranjero, ¿me tienen que retener?
                    </h4>
                    <p className="leading-relaxed">
                      No. Las retenciones de ISR (1.25%) e IVA (10.6667%) aplican exclusivamente cuando
                      tu cliente es una Persona Moral residente en territorio mexicano. Si facturas a
                      empresas en Estados Unidos o Europa, estas retenciones no existen y el IVA se
                      calcula al 0%.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-background mb-1">
                      Vendo productos físicos, ¿también me quitan el IVA?
                    </h4>
                    <p className="leading-relaxed">
                      No. La retención de las dos terceras partes del IVA aplica solo para servicios
                      profesionales independientes (honorarios) y arrendamiento. Si tu actividad comercial
                      es la compraventa de bienes (artículos materiales, gadgets, mercancía), la empresa
                      solo debe retenerte el 1.25% de ISR.
                    </p>
                  </div>
                </div>
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
              <span className="text-[10px] tracking-[0.3em] text-muted-foreground font-mono">
                MÁS ALLÁ DE LA SIMULACIÓN
              </span>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-medium font-display tracking-tight leading-tight">
                ¿Listo para dejar de pelear <br />
                <span className="text-muted-foreground">
                  con los impuestos?
                </span>
              </h2>
              <div className="space-y-4 max-w-xl">
                <p className="text-sm text-muted-foreground leading-relaxed tracking-wide">
                  Usa nuestra calculadora para asegurar que tu CFDI esté correcto. Si quieres llevar el control de todas tus facturas, retenciones y saber cuánto te toca pagarle al SAT cada mes de forma automática, únete a la Waitlist de <strong>Fiscalio</strong>.
                </p>
              </div>
            </div>
            <div className="lg:col-span-4 space-y-6">
              <Link href="?dialog=open&source=calculator" scroll={false}>
                <Button
                  size="lg"
                  className="w-full text-xs tracking-[0.15em] h-14 rounded-none uppercase mb-1"
                >
                  Unirme a la beta privada
                  <ArrowRight className="h-3.5 w-3.5 ml-3" />
                </Button>
              </Link>
              <p className="text-[10px] text-muted-foreground tracking-wide text-center uppercase">
                Cupo limitado con precio fundador disponible
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
