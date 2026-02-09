"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FileText, Download, Check, ArrowLeft } from "lucide-react";
import { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

function ThankYouContent() {
  const [email, setEmail] = useState<string>("");
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const handleDownloadGuide = () => {
    if (!id) {
      alert("No se encontró el ID de registro para la descarga.");
      return;
    }

    // In production, this would download an actual PDF
    // For now, we'll use our new API route
    window.location.href = `/api/download-pdf?id=${id}`;
  };

  return (
    <div className="min-h-screen bg-background font-mono">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="flex items-center gap-3 hover:opacity-70 transition-opacity"
            >
              <Image
                src="/logo.png"
                width={20}
                height={20}
                alt="Logotipo de Fiscalio"
              />
              <span className="text-sm tracking-tight">FISCALIO</span>
            </Link>
            <Link href="/">
              <Button
                variant="ghost"
                size="sm"
                className="text-xs tracking-wider h-8"
              >
                <ArrowLeft className="h-3 w-3 mr-2" />
                VOLVER
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <section className="py-24 lg:py-40">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            {/* Success Message */}
            <div className="text-center space-y-8 pb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 border-2 border-accent-rust text-accent-rust">
                <Check className="h-8 w-8" />
              </div>

              <div className="space-y-4">
                <Badge
                  variant="outline"
                  className="text-[10px] tracking-[0.2em] font-mono rounded-none px-3 py-1 text-accent-rust border-accent-amber-muted"
                >
                  CONFIRMACIÓN_RECIBIDA
                </Badge>

                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium font-display tracking-tight leading-tight">
                  Listo. Ya tienes tu acceso fundador reservado.
                </h1>

                {email && (
                  <p className="text-sm text-muted-foreground tracking-wide">
                    Confirmación enviada a:{" "}
                    <span className="text-foreground font-mono">{email}</span>
                  </p>
                )}
              </div>
            </div>

            <Separator className="my-12" />

            {/* What's Next */}
            <div className="space-y-12 py-12">
              <div className="space-y-4">
                <span className="text-[10px] tracking-[0.3em] text-muted-foreground">
                  [01] PRÓXIMOS_PASOS
                </span>
                <h2 className="text-2xl font-medium font-display tracking-tight">
                  Qué sigue ahora
                </h2>
              </div>

              <div className="space-y-6">
                {[
                  {
                    num: "01",
                    title: "Confirma tu correo",
                    description:
                      "Te enviamos un email de confirmación. Si no lo ves en unos minutos, revisa spam o promociones.",
                  },
                  {
                    num: "02",
                    title: "Espera el lanzamiento",
                    description:
                      "Te avisaremos cuando Fiscalio esté listo. Tendrás acceso prioritario al precio fundador de $419 MXN.",
                  },
                  {
                    num: "03",
                    title: "Prepara tus facturas",
                    description:
                      "Mientras tanto, puedes ir organizando tus XML del SAT. Te servirán para empezar a usar Fiscalio desde el día uno.",
                  },
                ].map((step) => (
                  <div
                    key={step.num}
                    className="grid grid-cols-12 gap-6 items-start py-6 border-b border-border last:border-b-0"
                  >
                    <div className="col-span-2">
                      <span className="text-2xl text-muted-foreground/30">
                        {step.num}
                      </span>
                    </div>
                    <div className="col-span-10 space-y-2">
                      <h3 className="text-base font-medium font-display tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed tracking-wide">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Separator className="my-12" />

            {/* Download Guide */}
            <div className="space-y-12 py-12">
              <div className="space-y-4">
                <span className="text-[10px] tracking-[0.3em] text-muted-foreground">
                  [02] DESCARGA_GRATUITA
                </span>
                <h2 className="text-2xl font-medium font-display tracking-tight">
                  Guía práctica para RESICO 2026
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed tracking-wide">
                  Mientras esperas el lanzamiento, descarga nuestra guía
                  gratuita sobre el régimen RESICO. Está pensada para{" "}
                  <strong className="text-accent-rust">
                    personas físicas y pequeños negocios
                  </strong>{" "}
                  que quieren cumplir sin complicarse.
                </p>
              </div>

              <div className="bg-muted/30 border-2 border-accent-amber/20 p-8 lg:p-12 space-y-8">
                <div className="flex items-start gap-6">
                  <div className="p-4 border-2 border-accent-amber/20 bg-background">
                    <FileText className="h-8 w-8 text-accent-rust" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="text-lg font-display font-medium tracking-tight">
                      Guía RESICO 2026
                    </h3>
                    <p className="text-xs text-muted-foreground tracking-wide">
                      PDF • 12 páginas • Actualizado Febrero 2026
                    </p>
                    <div className="pt-4 space-y-3">
                      {[
                        "Requisitos para tributar en RESICO",
                        "Cómo evitar errores que te cuestan dinero",
                        "Cómo llevar control sin ser contador",
                        "Prepárate para el lanzamiento de Fiscalio",
                      ].map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-3 text-sm"
                        >
                          <Check className="h-3 w-3 flex-shrink-0 text-muted-foreground" />
                          <span className="text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full text-xs tracking-[0.15em] h-12 rounded-none bg-background uppercase"
                    onClick={handleDownloadGuide}
                  >
                    <Download className="h-3.5 w-3.5 mr-3" />
                    Descargar la guía RESICO (PDF)
                  </Button>
                  <p className="text-muted-foreground text-sm text-center">
                    <small>
                      Esta guía es informativa y no sustituye la asesoría de un
                      contador.
                    </small>
                  </p>
                </div>
              </div>
            </div>

            {/* Back to Home */}
            <div className="pt-12 text-center">
              <Link href="/">
                <Button variant="ghost" className="text-xs tracking-[0.15em]">
                  <ArrowLeft className="h-3 w-3 mr-2" />
                  VOLVER AL INICIO
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense>
      <ThankYouContent />
    </Suspense>
  );
}
