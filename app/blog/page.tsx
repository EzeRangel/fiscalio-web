import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRightIcon } from "lucide-react";

export const posts = [
  {
    id: "01",
    slug: "que-es-resico-freelancers-mexico",
    title: "¿Qué es RESICO y cuándo conviene? Guía para freelancers en México",
    description:
      "Descubre si el Régimen Simplificado de Confianza es el mejor camino para tu negocio y cómo aprovechar sus beneficios.",
    date: "12 FEB 2026",
    category: "FISCALES",
  },
  {
    id: "02",
    slug: "exportar-servicios-resico-como-freelancer",
    title: "Cómo aplicar IVA 0% en RESICO si exportas servicios de TI",
    description:
      "Guía paso a paso para facturar correctamente a clientes en el extranjero y ahorrar el 16% de IVA legalmente.",
    date: "26 FEB 2026",
    category: "FISCALES",
    cluster: "COMO_PIENSA_SAT",
  },
  {
    id: "03",
    slug: "declaracion-anual-resico-personas-fisicas",
    title:
      "¿Es obligatoria la Declaración Anual para RESICO? El SAT dice que NO",
    description:
      "Analizamos la normativa vigente para que sepas exactamente qué obligaciones tienes y cuáles no antes de que termine abril.",
    date: "12 MAR 2026",
    category: "DECLARACIÓN",
    cluster: "COMO_PIENSA_SAT",
  },
  {
    id: "04",
    slug: "saldo-favor-resico",
    title: "Devolución de saldos a favor en RESICO: Guía para freelancers",
    description:
      "Aprende el proceso para solicitar la devolución de tu dinero al SAT si pagaste ISR de más durante el año.",
    date: "24 MAR 2026",
    category: "IMPUESTOS",
  },
  {
    id: "05",
    slug: "calcular-isr-iva-resico",
    title: "Cómo saber cuánto debes pagar de impuestos (ISR + IVA)",
    description:
      "Aprende a separar tu IVA, calcular tu ISR y entender tu ingreso real neto como freelancer tech en México.",
    date: "07 ABR 2026",
    category: "FISCALES",
  },
  {
    id: "06",
    slug: "como-hacer-declaracion-mensual-resico",
    title: "Cómo hacer tu declaración mensual en RESICO",
    description:
      "Una guía para perderle el miedo al portal del SAT y entender qué está pasando con tu dinero cada mes.",
    date: "13 ABR 2026",
    category: "DECLARACIONES",
  },
  {
    id: "07",
    slug: "porque-sat-no-precarga-facturas",
    title:
      "¿Por qué el SAT no precarga mis facturas? (Y qué significa realmente)",
    description:
      "Entiende las reglas que el SAT usa para interpretar tus XMLs y por qué a veces parece que faltan datos en tu declaración.",
    date: "18 ABR 2026",
    category: "FISCALES",
    cluster: "COMO_PIENSA_SAT",
  },
  {
    id: "08",
    slug: "cuando-presentar-declaracion-mensual-resico",
    title: "Cuándo presentar tu declaración mensual en RESICO",
    description:
      "Entiende el calendario fiscal del SAT y por qué siempre declaras a mes vencido para evitar multas.",
    date: "21 ABR 2026",
    category: "DECLARACIONES",
  },
  {
    id: "09",
    slug: "que-hacer-si-presentaste-mal-tu-declaracion-sat",
    title: "Qué hacer si presentaste mal tu declaración ante el SAT",
    description:
      "Aprende cuándo necesitas una declaración complementaria y cómo corregir errores en RESICO sin pánico.",
    date: "11 MAY 2026",
    category: "DECLARACIONES",
  },
  {
    id: "10",
    slug: "deducciones-resico-isr",
    title: "¿Por qué sigues pidiendo facturas en RESICO?",
    description:
      "El mito de las deducciones: descubre por qué las facturas siguen siendo vitales para proteger tu IVA aunque no deduzcas ISR.",
    date: "18 MAY 2026",
    category: "ISR - IVA",
    cluster: "COMO_PIENSA_SAT",
  },
  {
    id: "11",
    slug: "pue-vs-ppd-diferencia-facturar-cobrar",
    title: "PUE vs PPD: La diferencia real entre facturar y cobrar",
    description:
      "Aprende a distinguir entre facturas PUE y PPD para evitar pagar impuestos por dinero que aún no has recibido.",
    date: "25 MAY 2026",
    category: "FACTURACIÓN",
    cluster: "COMO_PIENSA_SAT",
  },
  {
    id: "12",
    slug: "cuanto-debo-pagar-resico",
    title: "¿Cuánto debo pagar realmente de impuestos en RESICO?",
    description:
      "Olvídate de las tablas del SAT por un segundo. Entiende cuánto dinero realmente te queda después de impuestos con este modelo mental simple.",
    date: "06 JUN 2026",
    category: "IMPUESTOS",
  },
];

export default function BlogIndex() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="border-b border-border">
        <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24">
          <div className="max-w-4xl space-y-6">
            <span className="text-[10px] tracking-[0.3em] text-muted-foreground font-mono">
              [01] BLOG
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight leading-[1.1]">
              Aprende a dominar tu <br />
              <span className="text-muted-foreground">
                contabilidad en RESICO
              </span>
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl tracking-wide">
              Guías prácticas y actualizadas para freelancers y pequeños
              negocios en México que quieren tener el control de su situación
              fiscal.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-accent-rust/[0.02]">
        <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-20 space-y-12">
          <div className="max-w-3xl space-y-4">
            <Badge
              variant="outline"
              className="text-[10px] tracking-[0.2em] font-mono rounded-none px-3 py-1 border-accent-rust/30 text-accent-rust uppercase"
            >
              Temas Clave
            </Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">
              Cómo piensa el SAT
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Guías esenciales para comprender cómo la autoridad fiscal
              interpreta tus datos y cómo optimizar tu situación en RESICO.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {posts
              .filter((p) => p.cluster === "COMO_PIENSA_SAT")
              .map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col justify-between p-6 bg-white border border-border hover:border-accent-rust transition-all hover:shadow-sm"
                >
                  <div className="space-y-4">
                    <Badge
                      variant="secondary"
                      className="text-[9px] tracking-widest font-mono rounded-none bg-accent-rust/5 text-accent-rust border-none px-2 py-0.5"
                    >
                      LÓGICA FISCAL
                    </Badge>
                    <h4 className="text-sm font-display font-bold group-hover:text-accent-rust transition-colors leading-snug">
                      {post.title}
                    </h4>
                  </div>
                  <div className="mt-6 flex items-center text-[10px] font-bold tracking-widest text-accent-rust">
                    LEER ARTÍCULO{" "}
                    <ArrowRightIcon className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container mx-auto px-6 lg:px-12">
          {[...posts].reverse().map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block py-12 lg:py-16 border-b border-border last:border-b-0 hover:bg-muted/30 transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-1">
                  <span className="text-3xl lg:text-4xl text-muted-foreground/30 font-mono">
                    {post.id}
                  </span>
                </div>

                <div className="lg:col-span-2 space-y-3">
                  <span className="text-[10px] tracking-[0.3em] text-muted-foreground font-mono block">
                    {post.date}
                  </span>
                  <Badge
                    variant="outline"
                    className="text-[10px] tracking-[0.2em] font-mono rounded-none px-3 py-1 border-accent-amber/30 text-accent-rust uppercase"
                  >
                    {post.category}
                  </Badge>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <h2 className="text-xl lg:text-2xl tracking-tight font-display font-medium group-hover:text-accent-rust transition-colors">
                    {post.title}
                  </h2>
                </div>

                <div className="lg:col-span-4 flex justify-between items-start gap-8">
                  <p className="text-sm text-muted-foreground leading-relaxed tracking-wide">
                    {post.description}
                  </p>
                  <ArrowRightIcon className="h-5 w-5 text-muted-foreground/30 group-hover:text-accent-rust transform group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-24 lg:py-32 bg-foreground text-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl space-y-8">
            <span className="text-[10px] tracking-[0.3em] text-background/50">
              [02] CONTACTO
            </span>
            <h2 className="text-3xl lg:text-4xl font-display font-medium tracking-tight">
              ¿Quieres que hablemos de algún tema en específico?
            </h2>
            <p className="text-background/70 leading-relaxed">
              Estamos construyendo Fiscalio para simplificar la vida de los
              freelancers. Si tienes dudas sobre RESICO o el SAT, escríbenos.
            </p>
            <Separator className="bg-background/20" />
            <Link
              href="mailto:ezequiel@fiscalio.app"
              className="inline-block text-lg font-display tracking-tight hover:underline underline-offset-8"
            >
              ezequiel@fiscalio.app
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
