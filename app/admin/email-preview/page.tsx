"use client";

import * as React from "react";
import { render } from "@react-email/render";
import { EmailTemplate } from "@/components/emails/email-thankyou";
import { EmailExportTemplate } from "@/components/emails/email-export-template";
import { EmailUpdateTemplate } from "@/components/emails/email-update";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { productUpdates, getUpdateComponent } from "@/lib/updates";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { CopyIcon } from "lucide-react";

export default function EmailPreviewPage() {
  const [activeTab, setActiveTab] = React.useState<"thank-you" | "update">(
    "update"
  );
  const [thankYouSource, setThankYouSource] = React.useState<"direct" | "blog_exportacion_servicios">(
    "direct"
  );
  const [selectedUpdateSlug, setSelectedUpdateSlug] = React.useState<string>(
    productUpdates[productUpdates.length - 1]?.slug || ""
  );
  const [renderedHtml, setRenderedHtml] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState(true);

  // Sandbox State for Quick Edits
  const [sandboxData, setSandboxData] = React.useState({
    title: "Mi borrador de correo",
    previewText: "Vista previa rápida desde el editor sandbox",
    content: "Escribe contenido aquí para probar de forma rápida y flexible antes de registrarlo como componente formal.",
    ctaLabel: "Prueba de Botón",
    ctaUrl: "https://fiscalio.app",
    updateTag: "Draft Update",
    imageUrl: "",
    sections: [
      {
        label: "[01] BLOQUE 1",
        title: "Título de prueba",
        description: "Descripción de prueba para el bloque."
      }
    ]
  });

  const handleCopyHtml = async () => {
    try {
      await navigator.clipboard.writeText(renderedHtml);
      toast.success("Código HTML copiado al portapapeles", {
        description: "Listo para pegar en tu campaña de Resend.",
      });
    } catch (err) {
      console.error("Failed to copy HTML:", err);
      toast.error("No se pudo copiar el HTML", {
        description: "Inténtalo de nuevo o copia el código manualmente.",
      });
    }
  };

  React.useEffect(() => {
    async function updatePreview() {
      setIsLoading(true);
      try {
        let element;
        if (activeTab === "thank-you") {
          element = thankYouSource === "blog_exportacion_servicios"
            ? <EmailExportTemplate email="test@example.com" recordId="rec123" />
            : <EmailTemplate email="test@example.com" recordId="rec123" />;
        } else {
          if (selectedUpdateSlug === "sandbox") {
            element = <EmailUpdateTemplate {...sandboxData} />;
          } else {
            const Comp = getUpdateComponent(selectedUpdateSlug);
            element = Comp ? <Comp /> : <div style={{ padding: 24 }}>Update no encontrado</div>;
          }
        }
        
        const html = await render(element, { pretty: true });
        setRenderedHtml(html);
      } catch (error) {
        console.error("Error rendering email:", error);
      } finally {
        setIsLoading(false);
      }
    }

    updatePreview();
  }, [activeTab, selectedUpdateSlug, sandboxData, thankYouSource]);

  return (
    <div className="flex flex-col h-screen bg-zinc-50">
      <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-zinc-200">
        <div className="flex items-center gap-4">
          <h1 className="text-lg font-bold font-mono tracking-tighter">
            FISCALIO // EMAIL_PREVIEW
          </h1>
          <div className="flex gap-1 bg-zinc-100 p-1 rounded-md">
            <button
              onClick={() => setActiveTab("thank-you")}
              className={`px-3 py-1.5 text-xs font-medium rounded-sm transition-colors ${
                activeTab === "thank-you"
                  ? "bg-white shadow-sm text-zinc-900"
                  : "text-zinc-500 hover:text-zinc-700"
              }`}
            >
              Thank You
            </button>
            <button
              onClick={() => setActiveTab("update")}
              className={`px-3 py-1.5 text-xs font-medium rounded-sm transition-colors ${
                activeTab === "update"
                  ? "bg-white shadow-sm text-zinc-900"
                  : "text-zinc-500 hover:text-zinc-700"
              }`}
            >
              Updates / Boletín
            </button>
          </div>
        </div>

        <Button
          onClick={handleCopyHtml}
          variant="outline"
          size="sm"
          className="text-xs font-mono font-bold tracking-tighter border-2 rounded-none h-9 hover:bg-zinc-50"
        >
          <CopyIcon className="h-3 w-3 mr-2" />
          COPIAR_HTML
        </Button>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar Controls */}
        <aside className="w-80 border-r border-zinc-200 bg-white overflow-y-auto p-6 space-y-6">
          {activeTab === "thank-you" ? (
            <div className="space-y-4">
              <h2 className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400">
                Variante Thank You
              </h2>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => setThankYouSource("direct")}
                  className={`w-full text-left px-3 py-2.5 text-xs font-medium rounded-md transition-colors ${
                    thankYouSource === "direct"
                      ? "bg-zinc-900 text-white"
                      : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                  }`}
                >
                  General / Guía RESICO
                </button>
                <button
                  onClick={() => setThankYouSource("blog_exportacion_servicios")}
                  className={`w-full text-left px-3 py-2.5 text-xs font-medium rounded-md transition-colors ${
                    thankYouSource === "blog_exportacion_servicios"
                      ? "bg-zinc-900 text-white"
                      : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                  }`}
                >
                  Exportación / Plantilla
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="space-y-3">
                <h2 className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400">
                  Seleccionar Correo
                </h2>
                <div className="flex flex-col gap-2">
                  {productUpdates.map((update) => (
                    <button
                      key={update.slug}
                      onClick={() => setSelectedUpdateSlug(update.slug)}
                      className={`w-full text-left px-3 py-2.5 text-xs font-medium rounded-md border transition-all ${
                        selectedUpdateSlug === update.slug
                          ? "bg-zinc-900 text-white border-zinc-900"
                          : "bg-white text-zinc-700 border-zinc-200 hover:bg-zinc-50"
                      }`}
                    >
                      <div className="font-mono text-[9px] opacity-75">{update.tag}</div>
                      <div className="font-semibold truncate">{update.title}</div>
                    </button>
                  ))}
                  <button
                    onClick={() => setSelectedUpdateSlug("sandbox")}
                    className={`w-full text-left px-3 py-2.5 text-xs font-medium rounded-md border transition-all ${
                      selectedUpdateSlug === "sandbox"
                        ? "bg-zinc-900 text-white border-zinc-900"
                        : "bg-zinc-50 text-zinc-500 border-dashed border-zinc-300 hover:bg-zinc-100"
                    }`}
                  >
                    <div className="font-mono text-[9px] opacity-75">Sandbox Mode</div>
                    <div className="font-semibold">Borrador Dinámico</div>
                  </button>
                </div>
              </div>

              {selectedUpdateSlug === "sandbox" && (
                <div className="space-y-4 pt-4 border-t border-zinc-100">
                  <h2 className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400">
                    Contenido Sandbox
                  </h2>
                  <div className="space-y-2">
                    <label className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider">Tag</label>
                    <Input 
                      value={sandboxData.updateTag} 
                      onChange={(e) => setSandboxData(prev => ({ ...prev, updateTag: e.target.value }))}
                      className="h-8 text-xs"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider">Título</label>
                    <Input 
                      value={sandboxData.title} 
                      onChange={(e) => setSandboxData(prev => ({ ...prev, title: e.target.value }))}
                      className="h-8 text-xs"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider">Preview Text</label>
                    <Input 
                      value={sandboxData.previewText} 
                      onChange={(e) => setSandboxData(prev => ({ ...prev, previewText: e.target.value }))}
                      className="h-8 text-xs"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider">Contenido</label>
                    <Textarea 
                      value={sandboxData.content} 
                      onChange={(e) => setSandboxData(prev => ({ ...prev, content: e.target.value }))}
                      className="text-xs min-h-[100px]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider">CTA Label</label>
                    <Input 
                      value={sandboxData.ctaLabel} 
                      onChange={(e) => setSandboxData(prev => ({ ...prev, ctaLabel: e.target.value }))}
                      className="h-8 text-xs"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider">CTA URL</label>
                    <Input 
                      value={sandboxData.ctaUrl} 
                      onChange={(e) => setSandboxData(prev => ({ ...prev, ctaUrl: e.target.value }))}
                      className="h-8 text-xs"
                    />
                  </div>
                </div>
              )}
            </div>
          )}
        </aside>

        {/* Preview Area */}
        <main className="flex-1 bg-zinc-100 flex items-center justify-center p-8 overflow-y-auto">
          <div className="w-full max-w-[600px] bg-white shadow-2xl min-h-[800px] relative">
            {isLoading && (
              <div className="absolute inset-0 bg-white/50 flex items-center justify-center z-10 backdrop-blur-sm">
                <div className="text-[10px] font-mono animate-pulse">RENDERING...</div>
              </div>
            )}
            <iframe
              srcDoc={renderedHtml}
              className="w-full h-full min-h-[800px] border-none"
              title="Email Preview"
            />
          </div>
        </main>
      </div>
    </div>
  );
}
