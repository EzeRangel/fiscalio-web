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
    "IVA 0% en RESICO para freelancers IT exportando servicios 2026 | Fiscalio",
  description:
    "Guía práctica para freelancers IT en RESICO que exportan servicios a EE.UU. Aprende cómo aplicar IVA 0%, acreditar gastos y evitar errores en CFDI 4.0.",
  keywords:
    "RESICO freelancers IT, IVA tasa 0 exportación servicios, facturar extranjero CFDI 4.0, saldo a favor IVA freelancer, declarar impuestos RESICO exportación",
  authors: [
    {
      name: "Fiscalio",
      url: "https://www.fiscalio.app",
    },
  ],
  openGraph: {
    title: "Cómo aplicar IVA 0% en RESICO si exportas servicios de TI",
    description:
      "¿Freelancer IT en México trabajando para EE.UU.? Aprende cómo facturar con tasa 0%, acreditar IVA y evitar riesgos fiscales.",
    type: "article",
    url: `${APP_URL}/blog/exportar-servicios-resico-como-freelancer`,
    locale: "es_MX",
    siteName: "Fiscalio",
  },
  robots: "index, follow",
  alternates: {
    types: {
      "text/markdown": `${APP_URL}/blog/exportar-servicios-resico-como-freelancer/llms.txt`,
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
                    <time dateTime="2024-03-15" className="font-mono text-xs">
                      26 FEB 2026
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
                Exportación de Servicios TI en RESICO: Cómo aplicar Tasa 0% de
                IVA correctamente
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-sans max-w-3xl">
                Si eres freelancer IT en México y trabajas como contractor para
                un cliente en EE. UU., tu operación sí puede aplicar IVA a tasa
                0% como exportación de servicios.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-sans max-w-3xl">
                La diferencia entre facturar como Exento vs Tasa 0% no es menor:
                impacta directamente tu derecho a acreditar el IVA de tus gastos
                y puede determinar si generas saldo a favor.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-sans max-w-3xl">
                Este artículo explica el fundamento legal, cómo facturar
                correctamente en CFDI 4.0 y qué riesgos debes controlar si
                cobras para el extranjero.
              </p>
            </div>

            <Separator />

            {/* Featured Image */}
            {/* <div className="relative aspect-[16/9] w-full border-2 border-accent-amber/20 bg-muted">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 mx-auto border-2 border-accent-amber/30 flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=400&width=800"
                      alt="Featured image"
                      width={800}
                      height={400}
                      className="object-cover w-full h-full opacity-0"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground font-mono tracking-wide">
                    IMAGEN_DESTACADA
                  </p>
                </div>
              </div>
            </div> */}

            <div className="prose prose-lg max-w-none">
              <div className="space-y-8 font-sans text-base md:text-lg leading-relaxed text-foreground">
                <section className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                    Perfil típico: Freelancer IT en RESICO
                  </h2>
                  <BlockQuote
                    title="Perfil de prestación de servicios TI al extranjero"
                    content={
                      <>
                        <div className="space-y-2">
                          <h4 className="font-display font-semibold text-foreground">
                            Régimen
                          </h4>
                          <p className="text-sm">
                            Régimen Simplificado de Confianza (Persona Física)
                          </p>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-display font-semibold text-foreground">
                            Actividad
                          </h4>
                          <p className="text-sm">
                            Servicios de TI a cliente en EE. UU. (exportación)
                          </p>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-display font-semibold text-foreground">
                            Flujo de Cobro
                          </h4>
                          <p className="text-sm">
                            Cliente USA → Deel/Payoneer/etc (USD) → Procesador
                            de pagos local (SPEI en MXN) → Tu cuenta en México.
                          </p>
                        </div>
                      </>
                    }
                  />
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                    Fundamento legal: por qué sí es Tasa 0% (no Exento)
                  </h2>

                  <h3 className="text-xl md:text-2xl font-display font-semibold tracking-tight mb-6 text-foreground">
                    Exportación de servicios – LIVA Art. 29, Fracción IV, inciso
                    i
                  </h3>

                  <p className="text-foreground/90">
                    Los servicios de tecnologías de la información aprovechados
                    en el extranjero califican como exportación y pueden aplicar
                    IVA a tasa 0%, siempre que:
                  </p>

                  <ul className="space-y-2 list-disc list-inside">
                    <li>El servicio sea aprovechado fuera de México.</li>
                    <li>El pago provenga del extranjero.</li>
                  </ul>

                  <p className="text-foreground/90">
                    En la práctica, aunque el depósito final llegue vía SPEI
                    desde una entidad mexicana (ej. proveedor de pagos nacional
                    vía STP), el soporte documental puede vincular:
                  </p>

                  <ol className="space-y-2 list-disc list-inside">
                    <li>Invoice emitido al cliente extranjero</li>
                    <li>Estado de cuenta Payoneer (origen USA)</li>
                    <li>Conversión y transferencia a banco mexicano</li>
                  </ol>

                  <p className="text-foreground/90">
                    La clave es demostrar que el{" "}
                    <strong>
                      beneficiario económico del servicio está fuera del país.
                    </strong>
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                    ¿Cuál es la diferencia entre Tasa 0% vs Exento?
                  </h2>

                  <p className="text-foreground/90">
                    Muchos freelancers cometen este error
                  </p>

                  <div className="border border-border">
                    <table className="w-full text-left border-collapse">
                      <thead className="bg-zinc-50 border-b border-border font-mono text-base">
                        <tr>
                          <th className="p-3 uppercase">Concepto</th>
                          <th className="p-3 uppercase">Exento</th>
                          <th className="p-3 uppercase">Tasa 0%</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        <tr>
                          <td className="p-3">¿Se causa IVA?</td>
                          <td className="p-3">No</td>
                          <td className="p-3 italic">Sí (0%)</td>
                        </tr>
                        <tr>
                          <td className="p-3">
                            ¿Se puede acreditar IVA de gastos?
                          </td>
                          <td className="p-3">No</td>
                          <td className="p-3 italic">SÍ (100%)</td>
                        </tr>
                        <tr>
                          <td className="p-3">¿Genera saldo a favor?</td>
                          <td className="p-3">No</td>
                          <td className="p-3 italic">SÍ</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-foreground/90">
                    Esto indica que si facturas a Tasa 0%, puedes acreditar el
                    100% del IVA de gastos indispensables para tu actividad.
                  </p>

                  <p className="text-foreground/90">
                    No aplica restricción proporcional por "uso parcial del
                    tiempo". Si el gasto es indispensable para tu actividad
                    económica, el IVA es acreditable en su totalidad.
                  </p>

                  <p className="text-foreground/90">
                    Esto es especialmente relevante para freelancers IT que
                    compran laptops, monitores o licencias SaaS.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                    Cómo facturar correctamente (CFDI 4.0)
                  </h2>

                  <p className="text-foreground/90">
                    Esta configuración es clave para exportación de servicios:
                  </p>

                  <ul className="space-y-2 list-disc list-inside">
                    <li>RFC receptor: XEXX010101000</li>
                    <li>Residencia fiscal: USA</li>
                    <li>Tax ID (EIN): Obligatorio</li>
                    <li>Objeto del impuesto: 02 (Sí objeto de impuesto)</li>
                    <li>Exportación: 02 (Definitiva) IVA: Tasa 0%</li>
                  </ul>

                  <p className="text-foreground/90">Errores comunes:</p>

                  <ul className="space-y-2 list-disc list-inside">
                    <li>Marcar operación como Exenta</li>
                    <li>No incluir Tax ID</li>
                    <li>No activar la clave de exportación</li>
                    <li>No conservar evidencia bancaria internacional</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                    Riesgos que debes controlar
                  </h2>

                  <h3 className="text-xl md:text-2xl font-display font-semibold tracking-tight mb-6 text-foreground">
                    Usar una VPN
                  </h3>

                  <p className="text-foreground/90">
                    El Art. 29 establece criterios que pueden invalidar la tasa
                    0% si el servicio se considera prestado en territorio
                    nacional.
                  </p>

                  <p className="text-foreground/90">
                    El uso de VPN que simule ubicación extranjera puede generar
                    cuestionamientos sobre el lugar de prestación efectiva del
                    servicio.
                  </p>

                  <p className="text-foreground/90">
                    Es un riesgo técnico que debe evaluarse con criterio
                    jurídico.
                  </p>

                  <h3 className="text-xl md:text-2xl font-display font-semibold tracking-tight mb-6 text-foreground">
                    Rastro bancario (SPEI desde RFC mexicano)
                  </h3>

                  <p className="text-foreground/90">
                    Cuando el depósito final proviene de una entidad mexicana
                    (ej. STP/dLocal), el SAT podría interpretar que el pago es
                    nacional.
                  </p>

                  <p className="text-foreground/90">
                    Cuando eso pase es muy bueno tener un "expediente de
                    defensa" que incluya lo siguiente:
                  </p>

                  <ul className="space-y-2 list-disc list-inside">
                    <li>Facturas emitidas al cliente extranjero</li>
                    <li>Estados de cuenta (origen USD)</li>
                    <li>Conversión y dispersión hacia banco en México</li>
                    <li>Contrato o agreement del servicio</li>
                  </ul>

                  <p className="text-foreground/90">
                    No se trata solo de facturar bien. Se trata de poder
                    demostrar la exportación.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                    RESICO + Exportación de Servicios: combo eficiente
                  </h2>

                  <p className="text-foreground/90">
                    Como persona física en RESICO: Pagas un ISR bajo (1% - 2.5%
                    aprox.); Aplicas IVA 0% y acreditas 100% del IVA de gastos
                    indispensables.
                  </p>

                  <p className="text-foreground/90">
                    Si tu estructura de costos es baja y tu cliente está en el
                    extranjero, este esquema puede ser fiscalmente muy
                    eficiente.
                  </p>

                  <p className="text-foreground/90">
                    Pero solo si se implementa correctamente.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                    Conclusión
                  </h2>

                  <p className="text-foreground/90">
                    Facturar como Exento cuando corresponde Tasa 0% es un error
                    estratégico. Si eres freelancer IT en México trabajando para
                    EE. UU. asegúrate de lo siguiente:
                  </p>

                  <ul className="space-y-2 list-disc list-inside">
                    <li>Verifica tu configuración de CFDI.</li>
                    <li>Documenta el rastro internacional del pago.</li>
                    <li>Evalúa si tienes saldo a favor por IVA acreditable.</li>
                    <li>Mantén consistencia histórica en tus declaraciones.</li>
                  </ul>

                  <p className="text-foreground/90">
                    Cuando exportas servicios, el detalle técnico marca la
                    diferencia entre optimización fiscal y contingencia.
                  </p>
                </section>
              </div>
            </div>

            <div className="border-t-2 border-accent-amber/20 pt-12 mt-16">
              <div className="bg-muted/30 border-2 border-accent-amber/20 p-8 md:p-12 space-y-6">
                <div className="space-y-3">
                  <span className="text-[10px] tracking-[0.3em] text-accent-rust font-mono">
                    ORGANIZA TUS FACTURAS
                  </span>
                  <h3 className="text-2xl md:text-3xl font-display font-semibold tracking-tight">
                    Control fiscal claro para RESICO
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                    Fiscalio te ayuda a procesar, clasificar y generar reportes
                    de tus XMLs del SAT de forma automática. Sin suscripciones,
                    sin complicaciones.
                  </p>
                </div>
                <Link href="/">
                  <Button className="text-xs tracking-[0.15em] h-12 px-8 rounded-none">
                    CONOCE MÁS
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
