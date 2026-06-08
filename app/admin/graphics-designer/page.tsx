"use client";

import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { 
  Copy, 
  Download, 
  Layout, 
  Sliders, 
  Code
} from "lucide-react";
import { toast } from "sonner";

interface TemplateConfig {
  customSvg: string;
}

const ASPECT_RATIOS = [
  { id: "1200x630", label: "Open Graph (1200x630)", width: 1200, height: 630 },
  { id: "800x800", label: "Diagram / Square (800x800)", width: 800, height: 800 },
  { id: "1080x1350", label: "LinkedIn Portrait (1080x1350)", width: 1080, height: 1350 },
  { id: "custom", label: "Dimensión Customizada", width: 800, height: 600 }
];

const DEFAULT_SVG_PLAYGROUND = `<svg viewBox="0 0 800 600" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Estilo Warm Precision -->
  <rect width="800" height="600" fill="#fcfaf6" />
  
  <text x="50" y="80" fill="#b45309" font-family="Geist Mono, monospace" font-size="12" letter-spacing="2">[01] SANDBOX DE GRÁFICOS</text>
  <text x="50" y="140" fill="#262626" font-family="DM Sans, sans-serif" font-size="36" font-weight="bold" letter-spacing="-1">Gráficos en RESICO</text>
  <text x="50" y="190" fill="#71717a" font-family="Geist, sans-serif" font-size="16">Edita el código directamente aquí para crear tu ilustración.</text>
</svg>`;

export default function GraphicsDesignerPage() {
  const [activeRatio, setActiveRatio] = useState(ASPECT_RATIOS[0]);
  const [customWidth, setCustomWidth] = useState<number>(800);
  const [customHeight, setCustomHeight] = useState<number>(600);
  
  const [config, setConfig] = useState<TemplateConfig>({
    customSvg: DEFAULT_SVG_PLAYGROUND
  });

  const canvasRef = useRef<HTMLDivElement>(null);

  const getCanvasDimensions = () => {
    if (activeRatio.id === "custom") {
      return { width: customWidth, height: customHeight };
    }
    return { width: activeRatio.width, height: activeRatio.height };
  };

  const copySvgToClipboard = () => {
    if (!canvasRef.current) return;
    const svgElement = canvasRef.current.querySelector("svg");
    if (!svgElement) {
      toast.error("No se encontró ningún elemento SVG para copiar");
      return;
    }
    const svgString = new XMLSerializer().serializeToString(svgElement);
    navigator.clipboard.writeText(svgString);
    toast.success("Código SVG copiado al portapapeles");
  };

  const downloadPng = () => {
    if (!canvasRef.current) return;
    const svgElement = canvasRef.current.querySelector("svg");
    if (!svgElement) {
      toast.error("No se encontró ningún elemento SVG para renderizar");
      return;
    }

    const { width, height } = getCanvasDimensions();
    
    // Clone and set absolute dimensions for high-res rendering
    const svgClone = svgElement.cloneNode(true) as SVGSVGElement;
    svgClone.setAttribute("width", width.toString());
    svgClone.setAttribute("height", height.toString());
    
    // Ensure viewBox matches the original size or dimensions
    if (!svgClone.getAttribute("viewBox")) {
      const viewBoxWidth = svgElement.getAttribute("width") || width.toString();
      const viewBoxHeight = svgElement.getAttribute("height") || height.toString();
      const w = viewBoxWidth.replace("%", "");
      const h = viewBoxHeight.replace("%", "");
      svgClone.setAttribute("viewBox", `0 0 ${w} ${h}`);
    }

    const svgString = new XMLSerializer().serializeToString(svgClone);
    const svgBlob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
    const URL = window.URL || window.webkitURL || window;
    const blobURL = URL.createObjectURL(svgBlob);
    
    const image = new Image();
    image.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const context = canvas.getContext("2d");
      if (context) {
        context.fillStyle = "#fcfaf6";
        context.fillRect(0, 0, width, height);
        context.drawImage(image, 0, 0, width, height);
        
        const pngDataUrl = canvas.toDataURL("image/png");
        const downloadLink = document.createElement("a");
        downloadLink.href = pngDataUrl;
        downloadLink.download = `fiscalio-graphic-custom-${width}x${height}.png`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        toast.success("Imagen PNG descargada con éxito");
      } else {
        toast.error("Error al inicializar el contexto 2D del canvas");
      }
      URL.revokeObjectURL(blobURL);
    };
    image.onerror = () => {
      toast.error("Error al rasterizar el SVG a imagen");
    };
    image.src = blobURL;
  };

  const dims = getCanvasDimensions();
  const aspectStyle = { aspectRatio: `${dims.width} / ${dims.height}` };

  const getBlankSvg = (w: number, h: number) => `<svg viewBox="0 0 ${w} ${h}" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#fcfaf6" />
</svg>`;

  return (
    <div className="min-h-screen bg-[#fcfaf6] text-[#262626] p-6 lg:p-12 space-y-8 font-sans">
      <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-zinc-200 pb-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-display font-medium tracking-tight">Graphics Designer</h1>
          <p className="text-sm text-zinc-500 max-w-xl">
            Herramienta interna para previsualizar, dimensionar y exportar gráficos vectoriales directamente.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={copySvgToClipboard} className="text-xs h-10 rounded-md">
            <Copy className="h-4 w-4 mr-2" />
            Copiar SVG
          </Button>
          <Button variant="default" size="sm" onClick={downloadPng} className="text-xs h-10 rounded-md bg-[#3a3a3a] hover:bg-[#262626]">
            <Download className="h-4 w-4 mr-2" />
            Exportar PNG
          </Button>
        </div>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
        {/* Controls Sidebar */}
        <div className="xl:col-span-4 space-y-6 bg-white p-6 border border-zinc-200 rounded-md shadow-xs">
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 flex items-center gap-2">
              <Layout className="h-3.5 w-3.5" />
              Dimensiones del Canvas
            </h2>
            <div className="flex flex-col gap-2">
              {ASPECT_RATIOS.map((ratio) => (
                <button
                  key={ratio.id}
                  onClick={() => setActiveRatio(ratio)}
                  className={`text-left text-xs px-3 py-2.5 border rounded-md transition-all ${
                    activeRatio.id === ratio.id
                      ? "border-[#3a3a3a] bg-zinc-50 font-medium"
                      : "border-zinc-200 hover:bg-zinc-50/50"
                  }`}
                >
                  {ratio.label}
                </button>
              ))}
            </div>
          </div>

          {activeRatio.id === "custom" && (
            <>
              <Separator className="bg-zinc-100" />
              <div className="space-y-4">
                <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 flex items-center gap-2">
                  <Sliders className="h-3.5 w-3.5" />
                  Dimensiones Personalizadas
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-zinc-400 uppercase">Ancho (px)</label>
                    <Input
                      type="number"
                      value={customWidth}
                      onChange={(e) => setCustomWidth(parseInt(e.target.value) || 0)}
                      className="text-xs rounded-md"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-zinc-400 uppercase">Alto (px)</label>
                    <Input
                      type="number"
                      value={customHeight}
                      onChange={(e) => setCustomHeight(parseInt(e.target.value) || 0)}
                      className="text-xs rounded-md"
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          <Separator className="bg-zinc-100" />

          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 flex items-center gap-2">
              <Code className="h-3.5 w-3.5" />
              Editor de Código SVG
            </h2>
            <div className="space-y-2">
              <Textarea
                value={config.customSvg}
                onChange={(e) => setConfig({ customSvg: e.target.value })}
                className="h-80 font-mono text-[11px] leading-relaxed resize-none bg-zinc-900 text-zinc-100 rounded-md border-0"
              />
              <p className="text-[10px] text-zinc-400 font-mono">
                Puedes editar directamente las etiquetas SVG. Las dimensiones de salida respetarán el viewBox definido en tu código.
              </p>
            </div>
          </div>
        </div>

        {/* Live Canvas View */}
        <div className="xl:col-span-8 space-y-4">
          <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400">
            Vista del Canvas ({dims.width} x {dims.height})
          </h2>

          <div className="border border-zinc-200 bg-white p-4 rounded-md shadow-xs flex justify-center items-center">
            <div 
              ref={canvasRef}
              style={aspectStyle}
              className="w-full max-w-[800px] border border-zinc-300 shadow-lg overflow-hidden bg-[#fcfaf6] relative"
            >
              <div 
                className="w-full h-full"
                dangerouslySetInnerHTML={{ __html: config.customSvg || getBlankSvg(dims.width, dims.height) }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
