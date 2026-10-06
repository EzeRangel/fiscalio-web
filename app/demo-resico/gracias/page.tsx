import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { BookingView } from "./booking-view";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Sesión agendada — Fiscalio",
  description:
    "Tu sesión para preparar tu borrador RESICO quedó agendada. Qué preparar y qué sigue.",
  robots: { index: false, follow: false },
};

const nextSteps = [
  "Revisa tu correo: recibirás la confirmación con el link de Google Meet (revisa también spam)",
  "Prepara los ingresos que cobraste este mes",
  "Ten a la mano tus CFDIs (XML o PDF) o el resumen que usas para declarar",
  "No necesitas contraseñas ni e.firma",
];

export default function DemoResicoGraciasPage() {
  return (
    <div className="min-h-screen bg-background">
      <BookingView />

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
                Sesión agendada
              </span>

              <h1 className="text-3xl lg:text-4xl font-display font-bold tracking-tight leading-tight">
                Tu borrador RESICO está a un paso
              </h1>

              <p className="text-sm lg:text-base text-muted-foreground tracking-wide leading-relaxed max-w-xl mx-auto">
                Reservaste tu sesión gratuita de 15 minutos. Ahora solo
                prepárate para que aprovechemos el tiempo juntos.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20 border-t border-border">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-xl lg:text-2xl font-display font-semibold tracking-tight">
                Antes de la llamada
              </h2>
              <ul className="space-y-3">
                {nextSteps.map((item) => (
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

        <section className="py-16 lg:py-20 border-t border-border">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <p className="text-sm text-muted-foreground tracking-wide leading-relaxed">
                ¿No encuentras el correo o necesitas cambiar tu horario?
              </p>
              <Link
                href="mailto:ezequiel@fiscalio.app"
                className="inline-block border border-border px-6 py-3 text-xs tracking-[0.15em] uppercase font-medium hover:bg-muted transition-colors"
              >
                Escribir a ezequiel@fiscalio.app
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
