import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { WaitlistDialog } from "@/components/waitlist-dialog";
import React, { Suspense } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, ChevronLeftIcon } from "lucide-react";
import { productUpdates, getUpdateComponent } from "@/lib/updates";
import { APP_URL } from "@/lib/constants";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return productUpdates.map((update) => ({
    slug: update.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const update = productUpdates.find((u) => u.slug === slug);
  if (!update) return {};

  const ogTitle = update.ogTitle || update.title;
  const ogDesc = update.ogDescription || update.previewText;
  const ogLabel = update.ogLabel || update.tag;

  const ogUrl = `${APP_URL}/api/og?title=${encodeURIComponent(ogTitle)}&subtitle=${encodeURIComponent(ogDesc)}&label=${encodeURIComponent(ogLabel)}&v=1`;

  return {
    title: `${update.title} - Actualización de Fiscalio`,
    description: update.previewText,
    openGraph: {
      title: `${ogTitle} - Actualización de Fiscalio`,
      description: ogDesc,
      type: "article",
      locale: "es_MX",
      siteName: "Fiscalio",
      images: [
        {
          url: ogUrl,
          width: 1200,
          height: 630,
          alt: ogTitle,
        },
      ],
    },
  };
}

export default async function UpdatePage({ params }: PageProps) {
  const { slug } = await params;
  const update = productUpdates.find((u) => u.slug === slug);
  if (!update) {
    notFound();
  }

  const UpdateComponent = getUpdateComponent(slug);
  if (!UpdateComponent) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background flex flex-col justify-between">
      <Suspense>
        <WaitlistDialog />
      </Suspense>

      <div>
        <Navigation />

        {/* Back Link */}
        <div className="container mx-auto px-6 lg:px-12 pt-8">
          <Link
            href="/novedades"
            className="inline-flex items-center text-xs text-muted-foreground hover:text-foreground font-mono transition-colors"
          >
            <ChevronLeftIcon className="h-3 w-3 mr-1" />
            [VOLVER_A_NOVEDADES]
          </Link>
        </div>

        {/* Content Container */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-6 lg:px-12 flex flex-col items-center">
            {/* The Email Component rendered in web-mode */}
            <div className="w-full max-w-[600px]">
              {React.createElement(UpdateComponent, { webMode: true })}
            </div>

            {/* In-page CTA for Waitlist */}
            <div className="w-full max-w-[600px] mt-12 p-8 border-2 border-dashed border-border bg-accent-rust/[0.02] text-center space-y-6">
              <span className="text-[10px] tracking-[0.2em] font-mono text-accent-rust uppercase block">
                Únete a la beta privada
              </span>
              <h3 className="text-xl font-display font-medium tracking-tight">
                ¿Quieres probar estas novedades antes que nadie?
              </h3>
              <p className="text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">
                Estamos construyendo Fiscalio en público. Asegura tu lugar en la lista de espera y obtén acceso prioritario y el precio fundador exclusivo.
              </p>
              <div>
                <Link href={`?dialog=open&source=novedad_${slug}`} scroll={false}>
                  <Button className="text-xs tracking-[0.15em] h-11 px-8 rounded-none uppercase">
                    Reservar mi Lugar
                    <ArrowRightIcon className="h-3.5 w-3.5 ml-3" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
