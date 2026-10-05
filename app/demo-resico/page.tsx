import type { Metadata } from "next";
import { Logo } from "@/components/logo";
import { PageView } from "@/components/page-view";
import { CAL_COM_DEMO_URL, APP_URL } from "@/lib/constants";
import { DemoCta } from "./demo-cta";
import { Check, FileText, Monitor, ShieldCheck } from "lucide-react";

const OFFER = "Prepara tu borrador de declaración mensual RESICO gratis en 15 minutos";

export const metadata: Metadata = {
  title: "Borrador de declaración RESICO gratis en 15 minutos — Fiscalio",
  description:
    "Agenda una sesión gratuita de 15 minutos y preparamos el borrador de tu declaración mensual RESICO con tus propios CFDIs. Sin compromiso.",
  alternates: { canonical: "/demo-resico" },
  robots: { index: false, follow: false },
  openGraph: {
    title: "Tu borrador de declaración RESICO, gratis en 15 minutos",
    description:
      "Sesión gratuita de 15 minutos: revisamos tus ingresos, ISR, IVA y retenciones, y preparamos tu borrador RESICO con tus CFDIs.",
    type: "website",
    locale: "es_MX",
    images: [
      {
        url: `${APP_URL}/api/og?title=${encodeURIComponent("Tu borrador RESICO, gratis en 15 min")}&subtitle=${encodeURIComponent("Sesión gratuita para preparar tu declaración mensual con tus propios CFDIs")}&label=${encodeURIComponent("SIN COSTO")}`,
        width: 1200,
        height: 630,
      },
    ],
  },
};

const steps = [
  {
    icon: FileText,
    title: "Revisamos tu situación",
    description:
      "Ingresos cobrados, ISR, IVA y retenciones del mes. Nos dices qué te preocupa y vemos con qué información contar.",
  },
  {
    icon: Monitor,
    title: "Preparamos tu borrador con Fiscalio",
    description:
      "Corremos tu declaración con datos reales y te explicamos qué información se está usando y por qué.",
  },
  {
    icon: Check,
    title: "Te llevas el resultado",
    description:
      "Ves Fiscalio funcionando con tu caso y sales con claridad sobre tu declaración. Tú decides si quieres seguir.",
  },
];

const preparation = [
  "Los ingresos que cobraste este mes",
  "Tus CFDIs (XML o PDF) o el resumen que usas para declarar",
  "Nada más: no necesitas contraseñas ni e.firma",
];

export default function DemoResicoPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageView
        event="landing_view"
        params={{ page: "demo-resico" }}
        meta="ViewContent"
        metaParams={{ content_name: "demo-resico" }}
      />

      <header className="py-6 px-6 lg:px-12">
        <div className="container mx-auto max-w-5xl">
          <Logo />
        </div>
      </header>

      <main>
        <section className="pt-16 pb-20 lg:pt-24 lg:pb-28">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-2xl mx-auto text-center space-y-8">
              <span className="inline-block border border-accent-amber-muted text-accent-rust text-[10px] tracking-[0.2em] font-mono px-3 py-1 uppercase">
                Sesión gratuita · 15 minutos
              </span>

              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-display font-bold tracking-tight leading-tight">
                {OFFER}
              </h1>

              <p className="text-sm lg:text-base text-muted-foreground tracking-wide leading-relaxed max-w-xl mx-auto">
                En una llamada de 15 minutos revisamos tu situación y
                preparamos el borrador de tu declaración mensual con tus
                propios CFDIs. Ves el resultado real — ISR, IVA,
                retenciones — y decides. Sin compromiso.
              </p>

              <DemoCta url={CAL_COM_DEMO_URL} />
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20 border-t border-border">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto space-y-10">
              <div className="space-y-4">
                <h2 className="text-xl lg:text-2xl font-display font-semibold tracking-tight">
                  Esto es para ti si:
                </h2>
                <ul className="space-y-3">
                  {[
                    "Facturas bajo RESICO (clave 626)",
                    "Llevas tu propia contabilidad o pagas por ayuda externa",
                    "No terminas de saber si estás declarando bien",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
                    >
                      <span className="flex-shrink-0 mt-0.5 w-5 h-5 border border-accent-rust text-accent-rust flex items-center justify-center">
                        <Check className="h-3 w-3" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-muted/30 border-t border-b border-border">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto space-y-10">
              <h2 className="text-xl lg:text-2xl font-display font-semibold tracking-tight">
                Qué pasa en la llamada
              </h2>

              <div className="grid gap-8 sm:grid-cols-3">
                {steps.map((step, i) => (
                  <div key={step.title} className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-8 h-8 border border-border flex items-center justify-center text-xs font-mono text-muted-foreground">
                        {i + 1}
                      </span>
                      <step.icon className="h-5 w-5 text-foreground" />
                    </div>
                    <h3 className="text-sm font-display font-medium tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20 border-b border-border">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-xl lg:text-2xl font-display font-semibold tracking-tight">
                Qué necesitas preparar
              </h2>
              <ul className="space-y-3">
                {preparation.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
                  >
                    <span className="flex-shrink-0 mt-0.5 w-5 h-5 border border-accent-rust text-accent-rust flex items-center justify-center">
                      <Check className="h-3 w-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20 border-b border-border">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <div className="border border-border p-8 lg:p-10 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 border-2 border-accent-rust text-accent-rust flex items-center justify-center">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div className="space-y-3">
                    <h2 className="text-lg lg:text-xl font-display font-medium tracking-tight">
                      Gratuita y sin compromiso
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      La sesión no tiene costo. Al terminar te llevas tu
                      borrador y decides con calma. No hay presión ni letra
                      chica.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-2xl mx-auto text-center space-y-8">
              <h2 className="text-xl lg:text-2xl font-display font-semibold tracking-tight">
                ¿Listo para preparar tu borrador?
              </h2>
              <p className="text-sm text-muted-foreground tracking-wide leading-relaxed max-w-lg mx-auto">
                Las llamadas son limitadas por semana. Si hay espacio
                disponible, elige el horario que mejor te funcione.
              </p>

              <DemoCta
                url={CAL_COM_DEMO_URL}
                label="Agendar mi sesión gratuita"
                placement="final"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
