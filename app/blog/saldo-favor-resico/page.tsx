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
    "Devolución de saldos a favor en RESICO: Guía para freelancers | Fiscalio",
  description:
    "Aprende cómo recuperar tu saldo a favor de ISR e IVA en RESICO. Guía paso a paso para freelancers y desarrolladores con clientes en México y el extranjero.",
  keywords:
    "saldo a favor RESICO, devolución impuestos SAT, ISR a favor, IVA a favor RESICO, freelancers México impuestos, recuperar dinero SAT",
  authors: [
    {
      name: "Fiscalio",
      url: "https://www.fiscalio.app",
    },
  ],
  openGraph: {
    title: "Devolución de saldos a favor en RESICO: Guía para freelancers",
    description:
      "¿Tienes saldo a favor en el SAT? Descubre cómo solicitar tu devolución mensual o anual si tributas en RESICO. Guía práctica y sin tecnicismos.",
    type: "article",
    locale: "es_MX",
    siteName: "Fiscalio",
  },
  robots: "index, follow",
  alternates: {
    types: {
      "text/markdown": `${APP_URL}/blog/saldo-favor-resico/llms.txt`,
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
                  IMPUESTOS
                </Badge>
              </div>

              <div className="space-y-6">
                <div className="space-y-3">
                  <span className="text-[10px] tracking-[0.3em] text-muted-foreground font-mono">
                    PUBLICACIÓN
                  </span>
                  <div className="flex items-center gap-2 text-sm">
                    <CalendarIcon className="h-3.5 w-3.5 text-accent-rust" />
                    <time dateTime="2026-03-24" className="font-mono text-xs">
                      24 MAR 2026
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
                Devolución de saldos a favor en RESICO: cómo recuperar tu dinero
                del SAT
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-sans max-w-3xl">
                Si estás en el{" "}
                <Link
                  href="/blog/que-es-resico-freelancers-mexico"
                  className="text-accent-rust underline underline-offset-4 decoration-accent-rust/30 hover:decoration-accent-rust transition-colors"
                >
                  Régimen Simplificado de Confianza (RESICO)
                </Link>{" "}
                y alguna vez viste un "saldo a favor" en tu declaración,
                probablemente te hiciste esta pregunta: ¿Cómo recupero ese
                dinero?
              </p>
            </div>

            <Separator />

            <div className="prose prose-lg max-w-none">
              <div className="space-y-8 font-sans text-base md:text-lg leading-relaxed text-foreground">
                <section className="space-y-4">
                  <p className="text-foreground/90">
                    La buena noticia: <strong>sí puedes recuperarlo</strong>. La
                    mala: el proceso no es automático y requiere hacerlo bien,
                    especialmente si eres un freelancer que busca optimizar su
                    flujo de efectivo.
                  </p>

                  <p className="text-foreground/90">
                    En esta guía te explicamos:
                  </p>
                  <ul className="text-foreground/90 list-disc list-inside space-y-2">
                    <li>Qué es un saldo a favor en RESICO</li>
                    <li>Cuándo puedes solicitar devolución</li>
                    <li>Cómo funciona la devolución mensual vs anual</li>
                    <li>Qué necesitas para que el SAT te pague</li>
                    <li>Errores comunes que debes evitar</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                    ¿Qué es un saldo a favor en RESICO?
                  </h2>
                  <p className="text-foreground/90">
                    Un saldo a favor significa que el SAT tiene dinero tuyo.
                    Aunque en RESICO las tasas son muy bajas (1% a 2.5%) y no
                    hay deducciones para ISR, puedes generar saldo a favor
                    principalmente por dos razones:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="border-2 border-accent-amber/20 p-6 space-y-4">
                      <h3 className="font-display font-bold text-accent-rust tracking-tight uppercase text-sm">
                        1. Retenciones en exceso
                      </h3>
                      <p className="text-sm text-foreground/80">
                        Si trabajas para empresas, ellas te retienen el 1.25% de
                        ISR. Si al final del año tu tasa real es del 1%, ese
                        0.25% de diferencia es tu saldo a favor.
                      </p>
                    </div>
                    <div className="border-2 border-accent-amber/20 p-6 space-y-4">
                      <h3 className="font-display font-bold text-accent-rust tracking-tight uppercase text-sm">
                        2. Ajustes en facturación
                      </h3>
                      <p className="text-sm text-foreground/80">
                        Si pagaste impuestos por una factura que después fue
                        cancelada o no se cobró, puedes reclamar ese dinero
                        mediante una declaración complementaria.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                    El caso del IVA en exportación de servicios
                  </h2>
                  <p className="text-foreground/90">
                    Este es el escenario más común para freelancers IT que
                    trabajan con clientes internacionales. Si realizas{" "}
                    <Link
                      href="/blog/exportar-servicios-resico-como-freelancer"
                      className="text-accent-rust underline underline-offset-4 decoration-accent-rust/30 hover:decoration-accent-rust transition-colors"
                    >
                      exportación de servicios
                    </Link>
                    , facturas con IVA tasa 0%.
                  </p>

                  <BlockQuote
                    title="La trampa del IVA"
                    content={
                      <>
                        <p className="text-sm">
                          Como facturas a tasa 0%, no cobras IVA a tus clientes.
                          Pero tú <strong>sí pagas IVA</strong> en tus gastos
                          (laptop, software, internet). Ese IVA que pagaste y no
                          puedes "acreditar" contra lo que cobraste se convierte
                          en un saldo a favor que el SAT debe devolverte.
                        </p>
                      </>
                    }
                  />
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                    Opciones de recuperación: Mensual vs Anual
                  </h2>
                  <p className="text-foreground/90">
                    De acuerdo con la Regla 3.13.34 de la Resolución Miscelánea
                    Fiscal, tienes dos caminos:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="border-2 border-accent-amber/20 p-6 space-y-4">
                      <h3 className="font-display font-bold text-accent-rust tracking-tight uppercase text-sm">
                        1. Devolución mensual
                      </h3>
                      <p className="text-sm text-foreground/80">
                        Puedes solicitarlo desde el mes siguiente a la
                        declaración. Ideal para mantener flujo de efectivo si
                        tienes saldos constantes.
                      </p>
                    </div>
                    <div className="border-2 border-accent-amber/20 p-6 space-y-4">
                      <h3 className="font-display font-bold text-accent-rust tracking-tight uppercase text-sm">
                        2. Devolución conjunta
                      </h3>
                      <p className="text-sm text-foreground/80">
                        Acumulas todos los saldos del año y los pides a partir
                        de enero del siguiente año. Es más simple
                        administrativamente si no necesitas el dinero inmediato.
                      </p>
                    </div>
                  </div>

                  <p className="text-foreground/90 pt-4">
                    Recuerda que para la opción anual, es crucial tener en orden
                    tu{" "}
                    <Link
                      href="/blog/declaracion-anual-resico-personas-fisicas"
                      className="text-accent-rust underline underline-offset-4 decoration-accent-rust/30 hover:decoration-accent-rust transition-colors"
                    >
                      declaración anual de RESICO
                    </Link>
                    .
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                    ¿Qué necesitas para que el SAT te pague?
                  </h2>
                  <p className="text-foreground/90">
                    El SAT no te devuelve el dinero automáticamente. Debes
                    solicitarlo a través del FED (Formato Electrónico de
                    Devoluciones) y demostrar que el saldo es real.
                  </p>

                  <ul className="text-foreground/90 list-inside list-disc space-y-2">
                    <li>Declaraciones mensuales presentadas correctamente.</li>
                    <li>
                      Papeles de trabajo (tus cálculos y hojas de cálculo).
                    </li>
                    <li>
                      Estados de cuenta bancarios (donde se vea el flujo real).
                    </li>
                    <li>CFDIs de ingresos y gastos que respalden el saldo.</li>
                    <li>E-firma vigente.</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                    Errores comunes que retrasan tu dinero
                  </h2>
                  <p className="text-foreground/90">
                    Muchos freelancers ven rechazada su solicitud por detalles
                    técnicos que podrían evitarse con un poco de orden:
                  </p>

                  <ol className="text-foreground/90 list-inside list-decimal space-y-2">
                    <li>
                      <strong>Datos inconsistentes:</strong> Diferencias entre
                      lo facturado, lo declarado y lo que aparece en tu estado
                      de cuenta.
                    </li>
                    <li>
                      <strong>Falta de trazabilidad:</strong> Especialmente si
                      recibes pagos por plataformas como Payoneer o Wise,
                      necesitas demostrar el origen internacional del ingreso.
                    </li>
                    <li>
                      <strong>No tener documentación:</strong> Sin el respaldo
                      documental, el SAT simplemente ignorará la solicitud.
                    </li>
                  </ol>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                    Conclusión
                  </h2>
                  <p className="text-foreground/90">
                    Si estás en RESICO, el saldo a favor no es un error, es una
                    oportunidad de recuperar flujo de efectivo para tu negocio
                    freelance. La diferencia entre recibir ese depósito en tu
                    cuenta o perderlo para siempre está en tu organización.
                  </p>
                  <p className="text-foreground/90">
                    Para las personas que les interesa su salud fiscal, esto no
                    es solo contabilidad; es optimización de recursos. Mantén
                    tus XMLs organizados y tus declaraciones al día.
                  </p>
                </section>
              </div>
            </div>

            <div className="border-t-2 border-accent-amber/20 pt-12 mt-16">
              <div className="bg-muted/30 border-2 border-accent-amber/20 p-8 md:p-12 space-y-6">
                <div className="space-y-3">
                  <span className="text-[10px] tracking-[0.3em] text-accent-rust font-mono">
                    OPTIMIZA TU FLUJO
                  </span>
                  <h3 className="text-2xl md:text-3xl font-display font-semibold tracking-tight">
                    ¿Necesitas ver números?
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                    Prueba la calculadora de impuestos para RESICO. Descubre
                    cuánto entra en tu cuenta y lo que debes separar para el
                    SAT.
                  </p>
                </div>
                <Link href="/calculadora-resico">
                  <Button className="text-xs tracking-[0.15em] h-12 px-8 rounded-none">
                    SIMULAR IMPUESTOS
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
