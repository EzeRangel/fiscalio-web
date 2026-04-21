"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Copy, Download, RefreshCw } from "lucide-react";
import { toast } from "sonner";

const PRESETS = [
  {
    id: "calculator",
    name: "Calculadora RESICO",
    label: "[01] HERRAMIENTA",
    title: "Calculadora de\nimpuestos RESICO",
    subtitle:
      "Calcula exactamente cuánto recibirás en tu cuenta y cuánto debes separar para el SAT cada mes.",
  },
  {
    id: "landing",
    name: "Landing Page",
    label: "[00] PRODUCTO",
    title: "Organiza tus facturas\nsin mensualidades",
    subtitle:
      "Clasifica tus CFDI automáticamente y mantén tu información fiscal en RESICO ordenada.",
  },
];

export default function OGGeneratorPage() {
  const [config, setConfig] = useState(PRESETS[0]);
  const [key, setKey] = useState(0); // For refreshing the preview image

  const ogUrl = `/api/og?title=${encodeURIComponent(config.title)}&subtitle=${encodeURIComponent(config.subtitle)}&label=${encodeURIComponent(config.label)}&v=${key}`;

  const copyUrl = () => {
    const fullUrl = `${window.location.origin}${ogUrl}`;
    navigator.clipboard.writeText(fullUrl);
    toast.success("URL copiada al portapapeles");
  };

  const refreshPreview = () => setKey((prev) => prev + 1);

  return (
    <div className="min-h-screen bg-background text-foreground p-8 lg:p-16 space-y-12">
      <header className="space-y-4">
        <h1 className="text-4xl font-display font-medium">
          OG Image Generator
        </h1>
        <p className="text-muted-foreground font-sans max-w-2xl">
          Generador de imágenes Open Graph siguiendo los lineamientos de
          DESIGN.MD. Selecciona un preset o personaliza los campos para generar
          la imagen final.
        </p>
      </header>

      <Separator />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Controls */}
        <div className="lg:col-span-4 space-y-8">
          <div className="space-y-4">
            <h2 className="text-xs font-mono tracking-widest text-muted-foreground uppercase">
              Presets
            </h2>
            <div className="grid grid-cols-1 gap-2">
              {PRESETS.map((preset) => (
                <Button
                  key={preset.id}
                  variant={config.id === preset.id ? "default" : "outline"}
                  onClick={() => setConfig(preset)}
                  className="justify-start text-xs h-10"
                >
                  {preset.name}
                </Button>
              ))}
            </div>
          </div>

          <Separator />

          <div className="space-y-6">
            <h2 className="text-xs font-mono tracking-widest text-muted-foreground uppercase">
              Customization
            </h2>

            <div className="space-y-2">
              <label className="text-[10px] font-mono uppercase text-muted-foreground">
                Label
              </label>
              <Input
                value={config.label}
                onChange={(e) =>
                  setConfig({ ...config, label: e.target.value, id: "custom" })
                }
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-mono uppercase text-muted-foreground">
                Title (use \n for line breaks)
              </label>
              <Textarea
                value={config.title}
                onChange={(e) =>
                  setConfig({ ...config, title: e.target.value, id: "custom" })
                }
                className="h-24 resize-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-mono uppercase text-muted-foreground">
                Subtitle
              </label>
              <Textarea
                value={config.subtitle}
                onChange={(e) =>
                  setConfig({
                    ...config,
                    subtitle: e.target.value,
                    id: "custom",
                  })
                }
                className="h-32 resize-none"
              />
            </div>

            <Button
              onClick={refreshPreview}
              variant="outline"
              className="w-full text-xs h-10"
            >
              <RefreshCw className="h-3.5 w-3.5 mr-2" />
              Actualizar Preview
            </Button>
          </div>
        </div>

        {/* Preview Area */}
        <div className="lg:col-span-8 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xs font-mono tracking-widest text-muted-foreground uppercase">
                Live Preview (1200x630)
              </h2>
              <div className="flex gap-2">
                <Button size="xs" variant="outline" onClick={copyUrl}>
                  <Copy className="h-3 w-3 mr-1.5" />
                  Copiar URL
                </Button>
                <a href={ogUrl} download="og-image.png">
                  <Button size="xs" variant="default">
                    <Download className="h-3 w-3 mr-1.5" />
                    Descargar
                  </Button>
                </a>
              </div>
            </div>

            {/* The actual image preview */}
            <div className="aspect-[1200/630] w-full border-2 border-border shadow-2xl bg-muted overflow-hidden relative group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={ogUrl}
                alt="OG Preview"
                className="w-full h-full object-contain bg-white"
              />
              <div className="absolute inset-0 bg-black/5 pointer-events-none border-2 border-transparent group-hover:border-primary/20 transition-all" />
            </div>

            <div className="p-4 bg-zinc-50 border border-border rounded-md">
              <p className="text-[10px] font-mono text-muted-foreground break-all">
                {ogUrl}
              </p>
            </div>
          </div>

          {/* Usage Guide */}
          <div className="p-8 border border-border bg-card space-y-4">
            <h3 className="font-display font-medium text-lg">Cómo usar</h3>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                1. Configura la imagen usando los controles de la izquierda.
                <br />
                2. Copia la URL generada.
                <br />
                3. En tu página (ej.{" "}
                <code>app/calculadora-resico/page.tsx</code>), actualiza el
                objeto <code>metadata</code>:
              </p>
              <pre className="p-4 bg-muted rounded-md text-[10px] overflow-x-auto">
                {`export const metadata: Metadata = {
  // ...
  openGraph: {
    images: [
      {
        url: 'https://fiscalio.mx/api/og?title=...',
        width: 1200,
        height: 630,
      }
    ]
  }
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
