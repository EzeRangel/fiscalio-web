"use client";

import * as React from "react";
import { render } from "@react-email/render";
import { EmailTemplate } from "@/components/email-thankyou";
import { EmailUpdateTemplate } from "@/components/email-update";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function EmailPreviewPage() {
  const [activeTab, setActiveTab] = React.useState<"thank-you" | "update">(
    "thank-you"
  );
  const [renderedHtml, setRenderedHtml] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState(true);

  // Update Template State
  const [updateData, setUpdateData] = React.useState({
    title: "Rediseñando el Detalle de Factura",
    previewText: "XML vs PDF vs Realidad: ¿Por qué es tan difícil leer un CFDI?",
    content: "Esta semana me enfoqué en resolver una de las partes más frustrantes de la gestión fiscal: entender qué hay realmente dentro de una factura sin volverse loco entre tablas y códigos. Me di cuenta de que el CFDI existe en tres formatos (XML, PDF y lo que el usuario entiende), y es ahí donde se pierde la información.",
    ctaLabel: "Ver Avance en LinkedIn",
    ctaUrl: "https://www.linkedin.com/feed/update/...",
    updateTag: "Product Update #01",
    imageUrl: "https://fiscalio.app/snapshot.png",
    sections: [
      {
        label: "[01] EL PROBLEMA",
        title: "La brecha de información",
        description: "El XML es perfecto para máquinas pero ilegible. El PDF es visual, pero te obliga a buscar manualmente impuestos, relaciones y complementos."
      },
      {
        label: "[02] LA OBSERVACIÓN",
        title: "Datos sin contexto",
        description: "Identificar rápidamente qué Complementos de Pago están relacionados o qué impuestos se trasladaron no debería requerir leer tablas confusas una por una."
      },
      {
        label: "[03] LA SOLUCIÓN",
        title: "Una vista con significado",
        description: "Diseñé una interfaz que reorganiza el XML: muestra complementos vinculados, aclara impuestos al instante y conecta la factura con su movimiento bancario correspondiente."
      }
    ]
  });

  React.useEffect(() => {
    async function updatePreview() {
      setIsLoading(true);
      try {
        const element = activeTab === "thank-you" 
          ? <EmailTemplate email="test@example.com" recordId="rec123" />
          : <EmailUpdateTemplate {...updateData} />;
        
        const html = await render(element, { pretty: true });
        setRenderedHtml(html);
      } catch (error) {
        console.error("Error rendering email:", error);
      } finally {
        setIsLoading(false);
      }
    }

    updatePreview();
  }, [activeTab, updateData]);

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
              Update
            </button>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar Controls (Only for Update) */}
        {activeTab === "update" && (
          <aside className="w-80 border-r border-zinc-200 bg-white overflow-y-auto p-6 space-y-6">
            <div className="space-y-4">
              <h2 className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400">
                Configuración del Correo
              </h2>
              <div className="space-y-2">
                <label className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider">Tag</label>
                <Input 
                  value={updateData.updateTag} 
                  onChange={(e) => setUpdateData(prev => ({ ...prev, updateTag: e.target.value }))}
                  className="h-8 text-xs"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider">Título</label>
                <Input 
                  value={updateData.title} 
                  onChange={(e) => setUpdateData(prev => ({ ...prev, title: e.target.value }))}
                  className="h-8 text-xs"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider">Preview Text</label>
                <Input 
                  value={updateData.previewText} 
                  onChange={(e) => setUpdateData(prev => ({ ...prev, previewText: e.target.value }))}
                  className="h-8 text-xs"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider">Image URL</label>
                <Input 
                  value={updateData.imageUrl} 
                  onChange={(e) => setUpdateData(prev => ({ ...prev, imageUrl: e.target.value }))}
                  className="h-8 text-xs"
                  placeholder="https://..."
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider">Contenido</label>
                <Textarea 
                  value={updateData.content} 
                  onChange={(e) => setUpdateData(prev => ({ ...prev, content: e.target.value }))}
                  className="text-xs min-h-[100px]"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-400">
                Call to Action
              </h2>
              <div className="space-y-2">
                <label className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider">Label</label>
                <Input 
                  value={updateData.ctaLabel} 
                  onChange={(e) => setUpdateData(prev => ({ ...prev, ctaLabel: e.target.value }))}
                  className="h-8 text-xs"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider">URL</label>
                <Input 
                  value={updateData.ctaUrl} 
                  onChange={(e) => setUpdateData(prev => ({ ...prev, ctaUrl: e.target.value }))}
                  className="h-8 text-xs"
                />
              </div>
            </div>
          </aside>
        )}

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
