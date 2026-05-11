import Link from "next/link";
import { CalendarIcon, UserIcon } from "lucide-react";
import { BlockQuote } from "@/components/blockquote";
import { HighlightBox } from "@/components/highlight-box";
import { Navigation } from "@/components/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qué hacer si presentaste mal tu declaración ante el SAT | Fiscalio",
  description:
    "¿Te equivocaste en tu declaración mensual o anual? Aprende cuándo necesitas una declaración complementaria, cómo corregir errores en RESICO y qué significa “dejar sin efecto” ante el SAT.",
  keywords:
    "declaración complementaria SAT, corregir declaración SAT, error declaración RESICO, dejar sin efecto declaración, multas SAT errores, corrección fiscal voluntaria",
  authors: [{ name: "Fiscalio", url: "https://www.fiscalio.app" }],
  openGraph: {
    title: "Qué hacer si presentaste mal tu declaración ante el SAT",
    description:
      "¿Te equivocaste en tu declaración? Guía práctica para identificar errores, usar declaraciones complementarias y corregir tu situación ante el SAT sin estrés.",
    type: "article",
    locale: "es_MX",
    siteName: "Fiscalio",
    images: [
      {
        url: "https://www.fiscalio.app/api/og?title=Qu%C3%A9%20hacer%20si%20presentaste%20mal%20tu%20declaraci%C3%B3n%20ante%20el%20SAT&subtitle=&label=BLOG&v=0",
        width: 1200,
        height: 630,
        alt: "Guía práctica para calcular ISR e IVA en RESICO",
      },
    ],
  },
  robots: "index, follow",
};

export default function ErrorDeclaracionPage() {
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
                  DECLARACIONES
                </Badge>
              </div>

              <div className="space-y-6">
                <div className="space-y-3">
                  <span className="text-[10px] tracking-[0.3em] text-muted-foreground font-mono">
                    PUBLICACIÓN
                  </span>
                  <div className="flex items-center gap-2 text-sm">
                    <CalendarIcon className="h-3.5 w-3.5 text-accent-rust" />
                    <time dateTime="2026-05-11" className="font-mono text-xs">
                      11 MAY 2026
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
                Qué hacer si presentaste mal tu declaración ante el SAT
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-sans max-w-3xl">
                ¿Te equivocaste en tu declaración mensual o anual? Aprende
                cuándo necesitas una declaración complementaria y cómo corregir
                errores sin pánico.
              </p>
            </div>

            <Separator />

            <div className="prose prose-lg max-w-none">
              <div className="space-y-8 font-sans text-base md:text-lg leading-relaxed text-foreground">
                <section className="space-y-6">
                  <p className="text-foreground/90">
                    Presentaste tu declaración. Pero después notaste algo raro.
                  </p>

                  <p className="text-foreground/90">Tal vez:</p>
                  <ul className="list-disc list-inside space-y-1 text-foreground/90">
                    <li>Olvidaste un CFDI</li>
                    <li>Declaraste ingresos incorrectos</li>
                    <li>El SAT no precargó información</li>
                    <li>Elegiste el periodo equivocado</li>
                    <li>O simplemente no entendiste qué opción seleccionar</li>
                  </ul>

                  <p className="text-foreground/90">
                    Y ahora probablemente te estás preguntando: ¿Tengo que
                    cancelar la declaración? ¿Debo hacer una complementaria? ¿Me
                    puede multar el SAT? ¿Todavía se puede corregir?
                  </p>

                  <p className="text-foreground/90">
                    La buena noticia es que equivocarte no significa
                    automáticamente tener problemas fiscales . El SAT tiene
                    mecanismos precisamente para corregir errores u omisiones
                    mediante las llamadas{" "}
                    <strong>declaraciones complementarias.</strong>
                  </p>

                  <p className="text-foreground/90">
                    La clave es entender qué salió mal y qué tipo de corrección
                    corresponde.
                  </p>
                </section>

                <section className="space-y-4 pt-8">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight text-foreground">
                    Primero: identifica qué tipo de error cometiste
                  </h2>
                  <p className="text-foreground/90">
                    Antes de entrar al portal del SAT, necesitas entender qué
                    fue lo que pasó. No busques conceptos técnicos todavía;
                    busca el origen del error.
                  </p>

                  <div className="space-y-12 mt-8">
                    <div className="space-y-4">
                      <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground flex items-center gap-2">
                        Error 1: Tus ingresos no coinciden con los CFDI emitidos
                      </h3>
                      <p className="text-foreground/90">
                        Este es el error más común. Puede pasar porque olvidaste
                        incluir una factura, el SAT no precargó correctamente
                        los datos, hubo CFDI PPD pendientes de pago, o
                        declaraste montos manuales que no cuadran con tus
                        comprobantes fiscales.
                      </p>
                      <HighlightBox title="QUÉ_SIGNIFICA">
                        <p className="text-sm leading-relaxed">
                          Podrías estar pagando un ISR incorrecto y generar
                          discrepancias en el futuro cuando el SAT cruce tu
                          información. La solución suele ser una{" "}
                          <strong>
                            declaración complementaria por modificación
                          </strong>
                          .
                        </p>
                      </HighlightBox>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground flex items-center gap-2">
                        Error 2: Presentaste la declaración en el periodo
                        equivocado
                      </h3>
                      <p className="text-foreground/90">
                        En ocasiones por las prisas o falta de organización,
                        declaras ingresos en un mes que no aplica, por ejemplo
                        los de enero dentro de febrero, o viceversa. Aquí es
                        donde entra el concepto de{" "}
                        <strong>"dejar sin efecto"</strong>.
                      </p>
                      <HighlightBox title="QUÉ_SIGNIFICA">
                        <p className="text-sm leading-relaxed">
                          No significa borrar mágicamente la declaración.
                          Significa informar al SAT que esa declaración no debe
                          considerarse válida porque fue presentada con
                          información, periodo u obligación incorrecta.
                        </p>
                      </HighlightBox>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground flex items-center gap-2">
                        Error 3: Olvidaste ingresos, impuestos o retenciones
                      </h3>
                      <p className="text-foreground/90">
                        Si olvidaste incluir un CFDI de ingreso o una retención
                        que te hicieron, el SAT permite corregirlo
                        voluntariamente.{" "}
                        <strong>
                          Actuar rápido reduce recargos y estrés fiscal
                        </strong>
                        , ya que corregir antes de una revisión evita multas
                        innecesarias.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground flex items-center gap-2">
                        Error 4: Pagaste más ISR o IVA del que debías
                      </h3>
                      <p className="text-foreground/90">
                        A veces el miedo no es a deber, sino a regalar tu
                        dinero. Si tus cálculos fueron incorrectos y pagaste de
                        más, tienes derecho a generar un{" "}
                        <Link
                          href="/blog/saldo-favor-resico"
                          className="text-accent-rust underline underline-offset-4 decoration-accent-rust/30 hover:decoration-accent-rust transition-colors"
                        >
                          saldo a favor
                        </Link>{" "}
                        que podrías recuperar mediante devoluciones o
                        compensaciones.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground flex items-center gap-2">
                        Error 5: Ya hiciste varias complementarias
                      </h3>
                      <p className="text-foreground/90">
                        El SAT normalmente permite hasta{" "}
                        <strong>3 declaraciones complementarias</strong> por el
                        mismo periodo y concepto. Existe una excepción: se
                        acepta una cuarta si el objetivo es pagar más impuestos
                        (al SAT le gusta que le pagues lo que debes).
                      </p>
                      <BlockQuote
                        title="NOTA"
                        content={
                          <>
                            <p className="text-sm">
                              Hacer varias complementarias no es un delito, pero
                              sí es una señal de que necesitas mejores
                              herramientas de control.
                            </p>
                          </>
                        }
                      />
                    </div>
                  </div>
                </section>

                <section className="space-y-6 pt-12">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight text-foreground">
                    Tipos de declaraciones complementarias explicadas
                  </h2>

                  <div className="overflow-x-auto border border-accent-amber/20">
                    <table className="w-full text-left border-collapse font-sans text-sm">
                      <thead>
                        <tr className="bg-muted border-b border-accent-amber/20">
                          <th className="p-4 font-display font-semibold">
                            Tipo
                          </th>
                          <th className="p-4 font-display font-semibold">
                            Cuándo se usa
                          </th>
                          <th className="p-4 font-display font-semibold">
                            Ejemplo
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-accent-amber/10">
                        <tr>
                          <td className="p-4 font-medium">
                            Modificación de obligaciones
                          </td>
                          <td className="p-4 text-foreground/80">
                            Cambiar montos o cálculos
                          </td>
                          <td className="p-4">ISR incorrecto</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-medium">Dejar sin efecto</td>
                          <td className="p-4 text-foreground/80">
                            Anular declaración errónea
                          </td>
                          <td className="p-4">Periodo incorrecto</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-medium">
                            Obligación no presentada
                          </td>
                          <td className="p-4 text-foreground/80">
                            Agregar información omitida
                          </td>
                          <td className="p-4">CFDI olvidado</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="pt-4">
                    <h3 className="font-display font-semibold text-foreground mb-2">
                      Complementaria por corrección fiscal
                    </h3>
                    <p className="text-foreground/90">
                      Esta es otra declaración complementaria y ocurre cuando el
                      SAT detecta inconsistencias y solicita corregir
                      información. No es lo mismo corregir voluntariamente que
                      hacerlo después de que el SAT te "invitó" a hacerlo. La
                      corrección voluntaria siempre es mejor.
                    </p>
                  </div>
                </section>

                <section className="space-y-6 pt-12">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight text-foreground">
                    Cómo corregir una declaración presentada
                  </h2>
                  <ol className="list-decimal list-inside space-y-3 text-foreground/90 marker:font-mono marker:text-accent-rust">
                    <li>Entra al portal del SAT.</li>
                    <li>Selecciona la declaración del periodo correcto.</li>
                    <li>
                      Elige la opción <strong>"Complementaria"</strong>.
                    </li>
                    <li>
                      Selecciona el tipo adecuado (Modificación, Dejar sin
                      efecto, etc.).
                    </li>
                    <li>Corrige únicamente la información necesaria.</li>
                    <li>Revisa el resultado final y envía.</li>
                    <li>
                      <strong>Guarda el acuse</strong>; es tu comprobante de que
                      ya estás al día.
                    </li>
                  </ol>
                </section>

                <section className="space-y-6 pt-12">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight text-foreground">
                    ¿Cuándo no necesitas una declaración complementaria?
                  </h2>
                  <p className="text-foreground/90">
                    Antes de corregir, hazte estas preguntas para reducir tu
                    ansiedad fiscal:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-foreground/90">
                    <li>¿Tus ingresos coinciden con los CFDI emitidos?</li>
                    <li>¿El monto de ISR o IVA parece lógico?</li>
                    <li>¿El error realmente cambia el impuesto a pagar?</li>
                    <li>
                      ¿El problema es fiscal o solo un detalle visual en el
                      acuse?
                    </li>
                  </ul>
                  <p className="text-foreground/90">
                    No toda diferencia significa automáticamente un problema. A
                    veces el verdadero problema es no entender cómo el SAT
                    interpreta tus CFDI y pagos.
                  </p>
                </section>

                <section className="space-y-6 pt-12">
                  <h2 className="text-2xl md:text-3xl font-display font-semibold tracking-tight text-foreground">
                    Conclusión: Equivocarse es humano
                  </h2>
                  <p className="text-foreground/90">
                    Equivocarte en una declaración no significa que estés
                    intentando hacer algo ilegal. Las declaraciones
                    complementarias existen precisamente porque el SAT entiende
                    que los contribuyentes pueden cometer errores, especialmente
                    cuando manejan sus impuestos por cuenta propia.
                  </p>
                  <p className="text-foreground/90">
                    En RESICO esto también aplica, aquí lo importante es
                    detectarlo y corregirlo a tiempo. Mientras más rápido
                    entiendas qué salió mal, tendrás menos estrés, menos
                    intereses y más claridad sobre tu situación fiscal real.
                  </p>
                </section>
              </div>
            </div>

            <div className="border-t-2 border-accent-amber/20 pt-12 mt-16">
              <div className="bg-muted/30 border-2 border-accent-amber/20 p-8 md:p-12 space-y-6">
                <div className="space-y-3">
                  <span className="text-[10px] tracking-[0.3em] text-accent-rust font-mono">
                    CALCULADORA FISCAL
                  </span>
                  <h3 className="text-2xl md:text-3xl font-display font-semibold tracking-tight">
                    Antes de presentar otra declaración, revisa tus números
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                    Usa nuestra calculadora gratuita para estimar ISR, IVA y
                    detectar posibles inconsistencias antes de enviar tu
                    declaración al SAT. Claridad total antes de dar el siguiente
                    paso.
                  </p>
                </div>
                <Link href="/calculadora-resico">
                  <Button className="text-xs tracking-[0.15em] h-12 px-8 rounded-none">
                    PROBAR CALCULADORA
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
