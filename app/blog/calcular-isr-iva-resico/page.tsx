import Link from "next/link";
import { CalendarIcon, UserIcon, ArrowRight } from "lucide-react";
import { BlockQuote } from "@/components/blockquote";
import { CalculatorCTA } from "@/components/calculator-cta";
import { HighlightBox } from "@/components/highlight-box";
import { Navigation } from "@/components/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";
import { APP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title:
    "Cómo saber cuánto debes pagar de impuestos (ISR + IVA) | Guía para Freelancers Tech | Fiscalio",
  description:
    "Aprende a calcular tus impuestos en RESICO paso a paso. Entiende el IVA 0% para exportación de servicios y cómo optimizar tu flujo de caja como freelancer tech.",
  keywords:
    "calcular ISR RESICO, calcular IVA RESICO, exportación de servicios México, impuestos freelancers México, RESICO 2026, flujo de caja freelancer",
  authors: [
    {
      name: "Fiscalio",
      url: "https://www.fiscalio.app",
    },
  ],
  openGraph: {
    title:
      "La guía definitiva para calcular ISR e IVA en RESICO (y dejar de adivinar)",
    description:
      "Guía práctica para freelancers tech en México. Aprende a separar tu IVA, calcular tu ISR y entender tu ingreso real neto.",
    type: "article",
    locale: "es_MX",
    siteName: "Fiscalio",
    images: [
      {
        url: "https://www.fiscalio.app/api/og?title=Gu%C3%ADa%20para%20calcular%20ISR%20e%20IVA%20en%20RESICO%20(y%20dejar%20de%20adivinar)&subtitle=&label=&v=0",
        width: 1200,
        height: 630,
        alt: "Guía práctica para calcular ISR e IVA en RESICO",
      },
    ],
  },
  robots: "index, follow",
  alternates: {
    types: {
      "text/markdown": `${APP_URL}/blog/calcular-isr-iva-resico/llms.txt`,
    },
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background font-mono">
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
                    <time dateTime="2026-04-07" className="font-mono text-xs">
                      07 ABR 2026
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
                Cómo saber cuánto debes pagar de impuestos (ISR + IVA)
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-sans max-w-3xl">
                Si eres un desarrollador, diseñador o freelancer tech en México
                bajo el régimen de RESICO, hay dos números que definen tu flujo
                de caja: cuánto debes separar para el SAT y cuánto realmente te
                queda.
              </p>
            </div>

            <Separator />

            <div className="prose prose-lg max-w-none">
              <div className="space-y-8 font-sans text-base md:text-lg leading-relaxed text-foreground">
                <section className="space-y-4">
                  <p className="text-foreground/90">
                    Entender la diferencia entre ambos es lo que separa a un
                    freelancer con control de uno que vive con ansiedad fiscal.
                  </p>

                  <BlockQuote
                    title="Regla de oro"
                    content={
                      <p className="text-lg font-medium">
                        El IVA no es tuyo (eres un recaudador). El ISR sí sale
                        de tu utilidad.
                      </p>
                    }
                  />

                  <p className="text-foreground/90">
                    Este artículo es una guía práctica para que puedas{" "}
                    <strong>calcular tus impuestos paso a paso</strong>,
                    optimizar tu flujo y entender por qué RESICO es el mejor
                    "hack" fiscal si exportas servicios.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                    Modelo mental #1: El flujo de tu dinero
                  </h2>
                  <p className="text-foreground/90">
                    Antes de abrir una hoja de cálculo, necesitas claridad
                    mental:
                  </p>
                  <p className="text-foreground/90">
                    Imagina que cada pago que recibes se divide en 3 partes:
                  </p>
                  <ol className="space-y-4">
                    <li>
                      <strong className="block">1. IVA</strong>
                      <p className="text-sm text-foreground/80">
                        Dinero que solo estás custodiando para el SAT (un
                        pasivo).
                      </p>
                    </li>
                    <li>
                      <strong className="block">2. ISR</strong>
                      <p className="text-sm text-foreground/80">
                        Tu impuesto real sobre el ingreso.
                      </p>
                    </li>
                    <li>
                      <strong className="block">3. Neto Real</strong>
                      <p className="text-sm text-foreground/80">
                        Tu ingreso disponible (tu ganancia libre).
                      </p>
                    </li>
                  </ol>
                  <p className="text-foreground/90">
                    Si no haces esta separación desde el inicio, todo se siente
                    como un costo inesperado al final del mes.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                    Paso 1: Identifica tu tipo de ingreso
                  </h2>
                  <p className="text-foreground/90">
                    En el mundo freelancer de RESICO, el origen de tu ingreso
                    cambia las reglas del juego:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="border border-border p-6 space-y-3">
                      <h3 className="font-display font-bold">
                        Escenario A: Cliente en México
                      </h3>
                      <ul className="text-sm space-y-2 list-disc list-inside text-foreground/80">
                        <li>Cobras IVA (16%).</li>
                        <li>
                          Eres responsable de declararlo y pagarlo al SAT (menos
                          lo que hayas pagado en tus gastos).
                        </li>
                      </ul>
                    </div>
                    <div className="border border-border p-6 space-y-3 bg-accent-amber/5">
                      <h3 className="font-display font-bold">
                        Escenario B: Cliente Extranjero
                      </h3>
                      <ul className="text-sm space-y-2 list-disc list-inside text-foreground/80">
                        <li>
                          <Link
                            href="/blog/exportar-servicios-resico-como-freelancer"
                            className="underline"
                          >
                            <strong>IVA tasa 0% (Legalmente)</strong>
                          </Link>
                          .
                        </li>
                        <li>No cobras IVA a tu cliente (más competitivo).</li>
                        <li>
                          Generas <strong>saldo a favor</strong> de los IVAs que
                          pagas en tus herramientas.
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                    Paso 2: Calcula el IVA
                  </h2>
                  <p className="text-foreground/90">
                    <strong>Caso 1: Cliente en México</strong>
                    <br />
                    Ejemplo: Cobras un proyecto de $10,000 MXN + IVA.
                  </p>
                  <ul className="list-disc list-inside text-foreground/90 ml-4">
                    <li>IVA (16%): $1,600</li>
                    <li>Total depositado: $11,600</li>
                  </ul>
                  <p className="text-foreground/90 italic">
                    Clave: Esos $1,600 <strong>NO son tuyos</strong>. Guárdalos
                    en una "bóveda" mental.
                  </p>

                  <p className="text-foreground/90 mt-6">
                    <strong>Caso 2: Cliente en el extranjero</strong>
                    <br />
                    Ejemplo: Facturas $10,000 MXN a una empresa en EE. UU.
                  </p>
                  <ul className="list-disc list-inside text-foreground/90 ml-4">
                    <li>IVA: 0%</li>
                    <li>Total depositado: $10,000</li>
                  </ul>
                  <p className="text-foreground/90">
                    Aquí no cobras IVA, pero el IVA que pagas en tus gastos (ej.
                    tu suscripción a Adobe o AWS con factura mexicana) se vuelve
                    un <strong>posible saldo a favor</strong> que puedes
                    recuperar.
                  </p>

                  <HighlightBox title="MODELO_MENTAL_#2">
                    <p className="text-lg font-medium">
                      El IVA es un flujo, no un costo.
                    </p>
                    <p className="text-sm mt-2">
                      Ingresos con IVA (lo debes) - Gastos con IVA (lo
                      recuperas) = Lo que transfieres al SAT.
                    </p>
                  </HighlightBox>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                    Paso 3: Calcula el ISR
                  </h2>
                  <p className="text-foreground/90">
                    Aquí es donde RESICO se vuelve una ventaja para los
                    freelancers tech. A diferencia de otros regímenes donde
                    deduces gastos, aquí pagas sobre el ingreso bruto a tasas
                    bajísimas.
                  </p>

                  <HighlightBox title="LA_FÓRMULA_RESICO">
                    <p className="text-xl tracking-tight font-bold">
                      ISR = Ingresos cobrados{" "}
                      <span className="text-accent-amber">&times;</span> Tasa
                      RESICO
                    </p>
                  </HighlightBox>

                  <p className="text-foreground/90">
                    Las tasas son progresivas pero mínimas:
                  </p>
                  <ul className="list-disc list-inside text-foreground/90 ml-4">
                    <li>
                      Hasta $25k: <strong>1.00%</strong>
                    </li>
                    <li>
                      Hasta $50k: <strong>1.10%</strong>
                    </li>
                    <li>
                      Hasta $83k: <strong>1.50%</strong>
                    </li>
                    <li>(Máximo 2.5% hasta $3.5M anuales)</li>
                  </ul>

                  <div className="bg-muted p-6 border-l-4 border-accent-rust">
                    <p className="text-sm font-bold uppercase tracking-widest text-accent-rust mb-2">
                      Ejemplo práctico
                    </p>
                    <p className="text-foreground/90">
                      Eres un desarrollador Senior y en el mes facturaste{" "}
                      <strong>$50,000 MXN</strong>.<br />
                      Tu tasa es de 1.1%.
                      <br />
                      <strong>ISR a pagar: $550 MXN</strong>
                    </p>
                    <p className="text-xs text-muted-foreground mt-2 italic">
                      *Compara esto con el 20-30% que pagarías en otros
                      esquemas.
                    </p>
                  </div>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                    ¿Cuánto te queda realmente?
                  </h2>
                  <p className="text-foreground/90">
                    Si tu cliente es en México:
                  </p>
                  <ul className="text-sm space-y-1 text-foreground/80 mb-4">
                    <li>Depósito total: $58,000 ($50k + $8k IVA)</li>
                    <li>Menos IVA a pagar: $8,000</li>
                    <li>Menos ISR: $550</li>
                    <li>
                      <strong>Neto Real: $49,450</strong>
                    </li>
                    <li className="pt-2">
                      <Link
                        href="/calculadora-resico"
                        className="text-accent-rust underline font-bold inline-flex items-center gap-1 group"
                      >
                        Prueba con tus números reales
                        <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </li>
                  </ul>

                  <p className="text-foreground/90">
                    Si exportas servicios (Cliente Extranjero):
                  </p>
                  <ul className="text-sm space-y-1 text-foreground/80">
                    <li>Depósito total: $50,000</li>
                    <li>IVA: $0</li>
                    <li>Menos ISR: $550</li>
                    <li>
                      <strong>Neto Real: $49,450</strong> (+ el IVA de tus
                      gastos a favor).
                    </li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                    El problema: El costo de hacerlo manual
                  </h2>
                  <p className="text-foreground/90">
                    Puedes llevar todo esto en un Excel o Notion. Pero, como
                    buen perfil tech, sabes que{" "}
                    <strong>
                      los procesos manuales son propensos a errores
                    </strong>
                    :
                  </p>
                  <ul className="list-disc list-inside text-foreground/90 space-y-2 ml-4">
                    <li>Múltiples facturas con diferentes fechas de pago.</li>
                    <li>Tipos de cambio variables (USD a MXN).</li>
                    <li>
                      Retenciones de personas morales que complican el cálculo.
                    </li>
                    <li>
                      Olvidar{" "}
                      <Link
                        href="/blog/deducciones-resico-isr"
                        className="underline font-bold text-accent-rust"
                      >
                        qué IVA es acreditable
                      </Link>{" "}
                      y cuál no.
                    </li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                    Aquí es donde entra la automatización
                  </h2>
                  <p className="text-foreground/90">
                    No necesitas ser contador para tener el control total de tu
                    dinero. La{" "}
                    <Link
                      href="/calculadora-resico"
                      className="underline font-bold text-accent-rust"
                    >
                      Calculadora RESICO de Fiscalio
                    </Link>{" "}
                    te permite simular estos escenarios en segundos, pero{" "}
                    <strong>Fiscalio</strong> va un paso más allá.
                  </p>
                  <p className="text-foreground/90">
                    Estamos construyendo la herramienta definitiva que:
                  </p>
                  <ol className="list-decimal list-inside text-foreground/90 space-y-2 ml-4">
                    <li>Lee los CFDIs que emites y los que te dan.</li>
                    <li>Clasifica tus gastos automáticamente.</li>
                    <li>Te da tu "Neto Real" en tiempo real.</li>
                  </ol>

                  <p className="text-foreground/90 py-2">
                    En RESICO, tu mejor inversión no es un contador que te ayude
                    a "deducir", sino una herramienta que te ayude a{" "}
                    <strong>no cometer errores</strong> y a mantener tu flujo
                    bajo control.
                  </p>
                </section>
                <CalculatorCTA 
                  title="¿Listo para ver tus números reales?"
                  description="Simula tus retenciones de ISR e IVA como freelancer con nuestra calculadora especializada."
                />
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
