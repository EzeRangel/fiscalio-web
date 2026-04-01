import { Navigation } from "@/components/navigation";
import { TaxCalculator } from "@/components/tax-calculator/tax-calculator";
import { Check, ArrowRight } from "lucide-react";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Calculadora RESICO 2024 | Fiscalio",
  description:
    "Calcula tus impuestos de RESICO de forma rápida y sencilla. Simula ISR e IVA para personas físicas con actividad empresarial o servicios profesionales.",
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
              [HERRAMIENTA]
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight leading-[1.1]">
              Calculadora de impuestos <br />
              <span className="text-muted-foreground text-3xl md:text-4xl lg:text-5xl">
                RESICO Personas Físicas
              </span>
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl tracking-wide">
              Descubre exactamente cuánto recibirás en tu cuenta bancaria y
              cuánto debes separar para el SAT cada mes. Simula ingresos
              nacionales, extranjeros y cálculos de retenciones.
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <Check className="h-4 w-4 text-green-500" />
                Actualizado a Tablas 2024
              </div>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <Check className="h-4 w-4 text-green-500" />
                Cálculo de Retenciones Persona Moral
              </div>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <Check className="h-4 w-4 text-green-500" />
                Soporta IVA 0% (Exportación)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="border-b border-border">
        <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24">
          <TaxCalculator />
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
              <Link href="/?dialog=open" scroll={false}>
                <Button
                  size="lg"
                  className="w-full text-xs tracking-[0.15em] h-14 rounded-none uppercase shadow-[8px_8px_0px_rgba(0,0,0,0.1)] dark:shadow-[8px_8px_0px_rgba(255,255,255,0.05)]"
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

      {/* Info Section */}
      <section className="bg-foreground text-background">
        <div className="container mx-auto px-6 lg:px-12 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <span className="text-[10px] tracking-[0.3em] text-background/50">
                [INFORMACIÓN]
              </span>
              <h2 className="font-display text-2xl lg:text-3xl font-medium tracking-tight mt-6 leading-tight">
                Entendiendo tus impuestos en RESICO
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <h3 className="font-display text-lg font-medium">
                    ISR (Impuesto Sobre la Renta)
                  </h3>
                  <p className="text-sm text-background/70 leading-relaxed tracking-wide">
                    En RESICO, pagas una tasa fija basada únicamente en tus
                    ingresos brutos facturados (sin deducciones). Las tasas van
                    desde el 1% hasta el 2.5% si tus ingresos anuales no exceden
                    los 3.5 millones de pesos.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="font-display text-lg font-medium">
                    IVA (Impuesto al Valor Agregado)
                  </h3>
                  <p className="text-sm text-background/70 leading-relaxed tracking-wide">
                    El IVA no es tu dinero, es un impuesto que recaudas para el
                    SAT. La tasa estándar es del 16%. Si exportas servicios de
                    TI o creativos al extranjero, puedes aplicar una tasa del 0%
                    legalmente.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="font-display text-lg font-medium">
                    Retenciones de Persona Moral
                  </h3>
                  <p className="text-sm text-background/70 leading-relaxed tracking-wide">
                    Si le facturas a una empresa (Persona Moral) en México,
                    ellos tienen la obligación de retenerte el 1.25% de ISR y
                    las 2/3 partes del IVA (aprox. 10.6%). Estas retenciones se
                    restan de lo que recibes.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="font-display text-lg font-medium">
                    Manejo de Flujo
                  </h3>
                  <p className="text-sm text-background/70 leading-relaxed tracking-wide">
                    El SAT considera ingresos lo que realmente entra a tu banco.
                    Es vital separar el IVA y el ISR correspondiente de cada
                    pago para evitar sorpresas al final del mes cuando llegue el
                    momento de declarar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
