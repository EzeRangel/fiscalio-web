import Link from "next/link";
import { CalendarIcon, UserIcon } from "lucide-react";
import { BlockQuote } from "@/components/blockquote";
import { Navigation } from "@/components/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";
import { APP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title:
    "¿Por qué el SAT no precarga mis facturas? (Y qué significa realmente) | Fiscalio",
  description:
    "Descubre por qué tus facturas no aparecen en tu declaración del SAT. Aprende las reglas de interpretación fiscal, la lógica de PUE vs PPD y cómo validar tu información.",
  keywords:
    "SAT facturas no aparecen, precarga SAT, PPD vs PUE, declaración mensual SAT, errores facturación, validar CFDI, cuánto tiempo tarda en actualizar el SAT la información precargada, qué pasa si no me aparece una factura en el SAT, cómo corregir la información precargada del SAT, Fiscalio",
  authors: [
    {
      name: "Fiscalio",
      url: "https://www.fiscalio.app",
    },
  ],
  openGraph: {
    title:
      "¿Por qué el SAT no precarga mis facturas? (Y qué significa realmente)",
    description:
      "No es que el SAT esté mal, es que sigue reglas que no siempre conocemos. Te explicamos la lógica detrás de la precarga de facturas.",
    type: "article",
    locale: "es_MX",
    siteName: "Fiscalio",
    images: [
      {
        url: `${APP_URL}/api/og?title=%C2%BFPor%20qu%C3%A9%20el%20SAT%20no%20precarga%20mis%20facturas%3F%20&subtitle=&label=&v=0`,
        width: 1200,
        height: 630,
        alt: "¿Por qué el SAT no precarga mis facturas?",
      },
    ],
  },
  robots: "index, follow",
  alternates: {
    types: {
      "text/markdown": `${APP_URL}/blog/porque-sat-no-precarga-facturas/llms.txt`,
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
                  EDUCACIÓN_FISCAL
                </Badge>
              </div>

              <div className="space-y-6">
                <div className="space-y-3">
                  <span className="text-[10px] tracking-[0.3em] text-muted-foreground font-mono">
                    PUBLICACIÓN
                  </span>
                  <div className="flex items-center gap-2 text-sm">
                    <CalendarIcon className="h-3.5 w-3.5 text-accent-rust" />
                    <time dateTime="2026-04-18" className="font-mono text-xs">
                      18 ABR 2026
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
                ¿Por qué el SAT no precarga mis facturas? (Y qué significa
                realmente)
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-sans max-w-3xl">
                Emitiste tus facturas, las ves en el portal, pero al declarar...
                el SAT dice $0. Antes de pensar que el sistema falló, entendamos
                la lógica detrás.
              </p>
            </div>

            <Separator />

            <div className="prose prose-lg max-w-none">
              <div className="space-y-8 font-sans text-base md:text-lg leading-relaxed text-foreground">
                <section className="space-y-4">
                  <p className="text-foreground/90">
                    Es la frustración clásica de cada mes: entras a tu
                    declaración y los números no cuadran con lo que tú sabes que
                    facturaste. La reacción natural es pensar:{" "}
                    <strong>"El SAT está mal"</strong>.
                  </p>

                  <p className="text-foreground/90">
                    Pero la realidad es un poco distinta. Es hora de un cambio
                    de mentalidad:{" "}
                    <strong>
                      El SAT sí está siguiendo reglas... que a veces no
                      entendemos.
                    </strong>
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                    El error más común: pensar que el SAT "copia" tus facturas
                  </h2>
                  <p className="text-foreground/90">
                    Cuando escuchas "datos precargados", es natural asumir que
                    el sistema simplemente toma tus CFDI y los pega en la
                    declaración. Pero no funciona así.
                  </p>

                  <BlockQuote
                    title="Concepto Clave"
                    content={
                      <div className="space-y-4">
                        <p>
                          <strong>
                            El SAT no copia tus facturas. El SAT interpreta tus
                            facturas bajo ciertas reglas fiscales.
                          </strong>
                        </p>
                        <p className="text-sm">
                          Toma tus archivos XML y los procesa a través de un
                          motor de reglas que no siempre coincide con la lógica
                          del usuario común.
                        </p>
                      </div>
                    }
                  />
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                    ¿Por qué no aparecen tus facturas? Los 3 escenarios reales
                  </h2>

                  <div className="space-y-8">
                    <div className="space-y-4">
                      <h4 className="text-xl font-display font-semibold text-foreground">
                        1. El método de pago cambia cuándo "cuenta" la factura
                      </h4>
                      <p className="text-foreground/90">
                        Este es uno de los más comunes. Si emitiste una factura
                        con{" "}
                        <strong>PPD (Pago en parcialidades o diferido)</strong>,
                        el ingreso no necesariamente se considera en ese
                        momento.
                      </p>
                      <p className="text-foreground/90">
                        Para el SAT, esa factura puede no "existir" aún para
                        ciertos cálculos… hasta que se pague y se emita el
                        complemento de pago. Y aquí empieza la confusión:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-foreground/90 ml-4">
                        <li>Tú ya facturaste.</li>
                        <li>
                          Pero el SAT aún no lo considera como ingreso en ese
                          periodo.
                        </li>
                      </ul>
                      <p className="text-foreground/90 font-medium">
                        Resultado: no aparece en tu declaración.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-xl font-display font-semibold text-foreground">
                        2. El SAT no usa tu misma línea de tiempo
                      </h4>
                      <p className="text-foreground/90">
                        Tú piensas así:{" "}
                        <em>
                          “Emití la factura en marzo, debería aparecer en marzo”
                        </em>
                        . Pero el SAT no se basa solo en cuándo hiciste la
                        factura. Se basa en reglas como:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-foreground/90 ml-4">
                        <li>Cuándo se considera el ingreso (ISR).</li>
                        <li>Cuándo se cobra el dinero (IVA).</li>
                        <li>Si la factura es PUE o PPD.</li>
                      </ul>
                      <p className="text-foreground/90">
                        Por ejemplo, imagina que facturas en marzo pero te pagan
                        en abril. Para el SAT, ese ingreso puede ser de abril,
                        no de marzo. Entender esta diferencia es vital cuando{" "}
                        <Link
                          href="/calculadora-resico"
                          className="text-accent-rust hover:underline"
                        >
                          aprendes a calcular tu ISR e IVA
                        </Link>{" "}
                        correctamente. Por eso ves la factura en el portal, pero
                        no aparece en ese mes de la declaración.{" "}
                        <strong>
                          No es inconsistencia, es que el SAT usa otra lógica
                          para medir el tiempo.
                        </strong>
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-xl font-display font-semibold text-foreground">
                        3. No todas las facturas "cuentan" igual
                      </h4>
                      <p className="text-foreground/90">
                        Aunque el CFDI exista, puede no impactar la declaración
                        como esperas por "errores silenciosos":
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-foreground/90 ml-4">
                        <li>Datos incorrectos (RFC, uso de CFDI).</li>
                        <li>Facturas canceladas o sustituidas.</li>
                        <li>Tipos de comprobante que no aplican igual.</li>
                      </ul>
                      <p className="text-foreground/90">
                        El SAT no te avisa siempre, simplemente no las considera
                        en su precarga. Por eso muchos freelancers se confunden
                        al momento de{" "}
                        <Link
                          href="/blog/como-hacer-declaracion-mensual-resico"
                          className="text-accent-rust hover:underline"
                        >
                          hacer su declaración mensual
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                    ISR vs IVA: La diferencia que causa más confusión
                  </h2>
                  <p className="text-foreground/90">
                    El SAT no precarga todo igual porque los impuestos no
                    funcionan igual:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-foreground/90">
                    <li>
                      <strong>ISR:</strong> Se enfoca en ingresos y tiene reglas
                      de acumulación específicas.
                    </li>
                    <li>
                      <strong>IVA:</strong> Depende estrictamente del flujo
                      (dinero cobrado vs pagado).
                    </li>
                  </ul>
                  <p className="text-foreground/90 italic">
                    Una misma factura puede aparecer para ISR pero no para IVA
                    en el mismo mes. Si no tienes esto claro, todo parece un
                    error del sistema. Si quieres profundizar en esto, revisa
                    nuestra guía sobre{" "}
                    <Link
                      href="/blog/calcular-isr-iva-resico"
                      className="text-accent-rust hover:underline"
                    >
                      cómo saber cuánto debes pagar de impuestos
                    </Link>
                    .
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                    El Insight de Fiscalio
                  </h2>
                  <BlockQuote
                    title="La Verdadera Causa de la Incertidumbre"
                    content={
                      <p className="text-lg md:text-xl font-medium">
                        “El problema no es que falten facturas en el portal del
                        SAT. El verdadero problema es que{" "}
                        <strong>
                          tú no tienes forma de validar si lo que ves está bien
                        </strong>{" "}
                        sin depender de un contador cada cinco minutos.”
                      </p>
                    }
                  />
                  <p className="text-foreground/90">
                    Esa falta de visibilidad es lo que genera dudas y miedo al
                    declarar. Especialmente si apenas estás entendiendo{" "}
                    <Link
                      href="/blog/que-es-resico-freelancers-mexico"
                      className="text-accent-rust hover:underline"
                    >
                      qué es el régimen RESICO
                    </Link>{" "}
                    y cómo te beneficia.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                    Dudas frecuentes sobre la información precargada
                  </h2>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h4 className="text-xl font-display font-semibold text-foreground">
                        ¿Cuánto tiempo tarda en actualizar el SAT la información
                        precargada?
                      </h4>
                      <p className="text-foreground/90">
                        Por lo general, el sistema del SAT tarda entre{" "}
                        <strong>24 y 48 horas</strong> en reflejar los cambios
                        tras la emisión de una factura o complemento de pago.
                        Sin embargo, en periodos de alta demanda (como cierres
                        de mes o declaraciones anuales), este tiempo puede
                        extenderse hasta 72 horas. Si acabas de emitir un CFDI y
                        no lo ves, dale un margen de un par de días antes de
                        preocuparte.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-xl font-display font-semibold text-foreground">
                        ¿Qué pasa si no me aparece una factura en el SAT?
                      </h4>
                      <p className="text-foreground/90">
                        Si después de esperar el tiempo de sincronización sigue
                        sin aparecer, verifica tres cosas:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-foreground/90 ml-4">
                        <li>Que la factura esté vigente (no cancelada).</li>
                        <li>
                          Que el RFC del emisor y receptor sean correctos.
                        </li>
                        <li>
                          El método de pago: si es PPD y no has emitido el
                          complemento de pago, el SAT no la precargará en el
                          flujo de efectivo para IVA.
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-xl font-display font-semibold text-foreground">
                        ¿Cómo corregir la información precargada del SAT?
                      </h4>
                      <p className="text-foreground/90">
                        La información precargada no se puede editar
                        directamente en los campos bloqueados del formulario.
                        Para "corregirla", debes actuar sobre la fuente:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-foreground/90 ml-4">
                        <li>
                          <strong>Si falta un ingreso:</strong> Emite la factura
                          faltante o el complemento de pago correspondiente.
                        </li>
                        <li>
                          <strong>Si hay un error en los montos:</strong>{" "}
                          Cancela el CFDI incorrecto y emítelo nuevamente con la
                          relación "Sustitución de CFDI previos".
                        </li>
                      </ul>
                      <p className="text-foreground/90">
                        Una vez hecha la corrección en los comprobantes, deberás
                        esperar el tiempo de actualización (24-48h) para que los
                        nuevos datos se reflejen en la declaración.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight mt-12 mb-6 text-foreground">
                    Qué puedes hacer a partir de ahora
                  </h2>
                  <p className="text-foreground/90">
                    Cambia tu enfoque de <em>"¿por qué no aparece?"</em> a{" "}
                    <strong>"¿bajo qué regla se está evaluando esto?"</strong>.
                    Ese pequeño cambio de mentalidad reduce el 80% de la
                    incertidumbre fiscal.
                  </p>
                  <p className="text-foreground/90">
                    Estamos construyendo Fiscalio precisamente para eso: para
                    que puedas organizar tus facturas, ver cómo impactan en ISR
                    e IVA y entender la lógica del SAT sin tecnicismos.
                  </p>
                </section>
              </div>
            </div>

            <div className="border-t-2 border-accent-amber/20 pt-12 mt-16">
              <div className="bg-muted/30 border-2 border-accent-amber/20 p-8 md:p-12 space-y-6">
                <div className="space-y-3">
                  <span className="text-[10px] tracking-[0.3em] text-accent-rust font-mono">
                    VALIDACIÓN_INTELIGENTE
                  </span>
                  <h3 className="text-2xl md:text-3xl font-display font-semibold tracking-tight">
                    Toma el control de tu información fiscal
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                    Fiscalio procesa tus XMLs y te muestra la misma lógica que
                    usa el SAT, para que siempre sepas exactamente qué esperar
                    en tu declaración.
                  </p>
                </div>
                <Link href="/">
                  <Button
                    variant="outline"
                    className="text-xs tracking-[0.15em] h-12 px-8 rounded-none border-accent-rust text-accent-rust hover:bg-accent-rust hover:text-white"
                  >
                    SABER MÁS
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
