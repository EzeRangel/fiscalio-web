import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon } from "lucide-react";
import { productUpdates } from "@/lib/updates";
import { Separator } from "@radix-ui/react-separator";

export const metadata = {
  title: "Actualizaciones de Producto - Fiscalio",
  description:
    "Sigue el desarrollo de Fiscalio. Compartimos en público nuestros avances, decisiones de diseño y novedades en la herramienta contable para freelancers.",
};

export default function UpdatesIndex() {
  return (
    <main className="min-h-screen bg-background flex flex-col justify-between">
      <div>
        <Navigation />

        <section className="border-b border-border">
          <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24">
            <div className="max-w-4xl space-y-6">
              <span className="text-[10px] tracking-[0.3em] text-muted-foreground font-mono">
                [01] NOVEDADES
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight leading-[1.1]">
                Sigue el avance <br />
                <span className="text-muted-foreground">
                  de Fiscalio en público
                </span>
              </h1>
              <p className="text-base text-muted-foreground leading-relaxed max-w-2xl tracking-wide">
                Bitácora de actualizaciones y notas de diseño sobre cómo estamos
                construyendo la solución definitiva (y local-first) para
                freelancers bajo el régimen de RESICO.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="container mx-auto px-6 lg:px-12">
            {[...productUpdates].reverse().map((update) => (
              <Link
                key={update.slug}
                href={`/novedades/${update.slug}`}
                className="group block py-12 lg:py-16 border-b border-border last:border-b-0 hover:bg-muted/30 transition-colors"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-1">
                    <span className="text-3xl lg:text-4xl text-muted-foreground/30 font-mono">
                      {update.id}
                    </span>
                  </div>

                  <div className="lg:col-span-2 space-y-3">
                    <span className="text-[10px] tracking-[0.3em] text-muted-foreground font-mono block">
                      {update.date}
                    </span>
                    <Badge
                      variant="outline"
                      className="text-[10px] tracking-[0.2em] font-mono rounded-none px-3 py-1 border-accent-amber/30 text-accent-rust uppercase"
                    >
                      {update.tag}
                    </Badge>
                  </div>

                  <div className="lg:col-span-5 space-y-4">
                    <h2 className="text-xl lg:text-2xl tracking-tight font-display font-medium group-hover:text-accent-rust transition-colors">
                      {update.title}
                    </h2>
                  </div>

                  <div className="lg:col-span-4 flex justify-between items-start gap-8">
                    <p className="text-sm text-muted-foreground leading-relaxed tracking-wide">
                      {update.description}
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
              <span className="text-[10px] tracking-[0.3em] text-background/50 font-mono">
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
      </div>
    </main>
  );
}
