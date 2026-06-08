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
  Grid, 
  Sliders, 
  Code,
  Sparkles,
  ArrowRight,
  TrendingUp
} from "lucide-react";
import { toast } from "sonner";

interface TemplateConfig {
  label: string;
  title: string;
  subtitle: string;
  accentColor: string;
  secondaryColor: string;
  customSvg: string;
}

const ASPECT_RATIOS = [
  { id: "1200x630", label: "Open Graph (1200x630)", width: 1200, height: 630, cssClass: "aspect-[1200/630]" },
  { id: "800x800", label: "Diagram / Square (800x800)", width: 800, height: 800, cssClass: "aspect-square" },
  { id: "1080x1350", label: "LinkedIn Portrait (1080x1350)", width: 1080, height: 1350, cssClass: "aspect-[1080/1350]" }
];

const DEFAULT_SVG_PLAYGROUND = `<svg viewBox="0 0 800 450" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Fieles al estilo Warm Precision -->
  <rect width="800" height="450" fill="#fcfaf6" />
  <circle cx="650" cy="225" r="180" fill="#f0f0f0" opacity="0.8" />
  <circle cx="650" cy="225" r="120" stroke="#b45309" stroke-width="2" stroke-dasharray="8 4" />
  <circle cx="650" cy="225" r="60" fill="#fbbf24" opacity="0.3" />
  
  <!-- Texto decorativo o técnico en Geist Mono -->
  <text x="50" y="80" fill="#b45309" font-family="Geist Mono, monospace" font-size="12" letter-spacing="2">[01] SIMULACIÓN FLUIDA</text>
  
  <!-- Encabezado en DM Sans -->
  <text x="50" y="140" fill="#262626" font-family="DM Sans, sans-serif" font-size="36" font-weight="bold" letter-spacing="-1">Diagrama de Distribución</text>
  <text x="50" y="185" fill="#262626" font-family="DM Sans, sans-serif" font-size="36" font-weight="bold" letter-spacing="-1">Fiscal RESICO 2026</text>
  
  <!-- Descripción -->
  <text x="50" y="240" fill="#71717a" font-family="Geist, sans-serif" font-size="16">Representación gráfica del flujo de retenciones aplicadas</text>
  <text x="50" y="265" fill="#71717a" font-family="Geist, sans-serif" font-size="16">a Personas Morales facturando desde México.</text>
  
  <!-- Datos financieros en Geist Mono -->
  <rect x="50" y="320" width="220" height="60" rx="8" fill="#3a3a3a" />
  <text x="70" y="345" fill="#fcfaf6" font-family="Geist, sans-serif" font-size="12">Retención ISR</text>
  <text x="70" y="368" fill="#fbbf24" font-family="Geist Mono, monospace" font-size="18" font-weight="bold">1.25%</text>

  <rect x="290" y="320" width="220" height="60" rx="8" fill="#f0f0f0" stroke="#3a3a3a" stroke-width="1" />
  <text x="310" y="345" fill="#262626" font-family="Geist, sans-serif" font-size="12">Retención IVA (2/3)</text>
  <text x="310" y="368" fill="#b45309" font-family="Geist Mono, monospace" font-size="18" font-weight="bold">10.66%</text>
</svg>`;

export default function GraphicsDesignerPage() {
  const [activeRatio, setActiveRatio] = useState(ASPECT_RATIOS[0]);
  const [template, setTemplate] = useState<"blog-cover" | "tax-table" | "flow-diagram" | "custom">("blog-cover");
  
  const [config, setConfig] = useState<TemplateConfig>({
    label: "[01] GUÍA FISCAL",
    title: "Impuestos en RESICO para Freelancers",
    subtitle: "Aprende cómo declarar tus ingresos paso a paso y conoce lo que debes separar para el SAT.",
    accentColor: "#b45309", // Accent Rust
    secondaryColor: "#fbbf24", // Accent Amber
    customSvg: DEFAULT_SVG_PLAYGROUND
  });

  const canvasRef = useRef<HTMLDivElement>(null);

  const getCanvasDimensions = () => {
    return {
      width: activeRatio.width,
      height: activeRatio.height
    };
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
    const svgString = new XMLSerializer().serializeToString(svgElement);
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
        downloadLink.download = `fiscalio-graphic-${template}-${activeRatio.id}.png`;
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

  return (
    <div className="min-h-screen bg-[#fcfaf6] text-[#262626] p-6 lg:p-12 space-y-8 font-sans">
      <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-zinc-200 pb-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-display font-medium tracking-tight">Graphics Designer</h1>
          <p className="text-sm text-zinc-500 max-w-xl">
            Generador de gráficos e ilustraciones editoriales para blog posts y el sitio de marketing de Fiscalio.
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
              Proporción (Canvas)
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

          <Separator className="bg-zinc-100" />

          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 flex items-center gap-2">
              <Grid className="h-3.5 w-3.5" />
              Plantilla Visual
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {(["blog-cover", "tax-table", "flow-diagram", "custom"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTemplate(t)}
                  className={`text-center text-xs py-2 px-3 border rounded-md capitalize transition-all ${
                    template === t
                      ? "border-[#3a3a3a] bg-zinc-50 font-medium"
                      : "border-zinc-200 hover:bg-zinc-50/50"
                  }`}
                >
                  {t.replace("-", " ")}
                </button>
              ))}
            </div>
          </div>

          <Separator className="bg-zinc-100" />

          {template !== "custom" ? (
            <div className="space-y-4">
              <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 flex items-center gap-2">
                <Sliders className="h-3.5 w-3.5" />
                Contenido & Personalización
              </h2>
              
              <div className="space-y-3">
                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-zinc-400 uppercase">Etiqueta</label>
                  <Input
                    value={config.label}
                    onChange={(e) => setConfig({ ...config, label: e.target.value })}
                    className="text-xs rounded-md"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-zinc-400 uppercase">Título</label>
                  <Input
                    value={config.title}
                    onChange={(e) => setConfig({ ...config, title: e.target.value })}
                    className="text-xs rounded-md"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-zinc-400 uppercase">Subtítulo / Copia</label>
                  <Textarea
                    value={config.subtitle}
                    onChange={(e) => setConfig({ ...config, subtitle: e.target.value })}
                    className="text-xs h-20 resize-none rounded-md"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-zinc-400 uppercase">Color Primario</label>
                    <div className="flex gap-2 items-center">
                      <input
                        type="color"
                        value={config.accentColor}
                        onChange={(e) => setConfig({ ...config, accentColor: e.target.value })}
                        className="w-8 h-8 rounded-md border border-zinc-200 cursor-pointer"
                      />
                      <span className="text-[10px] font-mono text-zinc-500 uppercase">{config.accentColor}</span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-zinc-400 uppercase">Color Secundario</label>
                    <div className="flex gap-2 items-center">
                      <input
                        type="color"
                        value={config.secondaryColor}
                        onChange={(e) => setConfig({ ...config, secondaryColor: e.target.value })}
                        className="w-8 h-8 rounded-md border border-zinc-200 cursor-pointer"
                      />
                      <span className="text-[10px] font-mono text-zinc-500 uppercase">{config.secondaryColor}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 flex items-center gap-2">
                <Code className="h-3.5 w-3.5" />
                Editor de Código SVG
              </h2>
              <div className="space-y-2">
                <Textarea
                  value={config.customSvg}
                  onChange={(e) => setConfig({ ...config, customSvg: e.target.value })}
                  className="h-96 font-mono text-[11px] leading-relaxed resize-none bg-zinc-900 text-zinc-100 rounded-md border-0"
                />
                <p className="text-[10px] text-zinc-400 font-mono">
                  Edita o pega un diseño en formato SVG nativo para procesar e interactuar con el render.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Live Canvas View */}
        <div className="xl:col-span-8 space-y-4">
          <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400">
            Vista del Canvas ({activeRatio.id})
          </h2>

          <div className="border border-zinc-200 bg-white p-4 rounded-md shadow-xs flex justify-center items-center">
            <div 
              ref={canvasRef}
              className={`w-full max-w-[800px] border border-zinc-300 shadow-lg overflow-hidden bg-[#fcfaf6] relative ${activeRatio.cssClass}`}
            >
              {template === "blog-cover" && (
                <svg viewBox="0 0 1200 630" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100%" height="100%" fill="#fcfaf6" />
                  
                  {/* Decorative editorial paths using layout accent values */}
                  <path d="M900 100 L1150 350 L1100 550 Z" fill={config.secondaryColor} opacity="0.1" />
                  <path d="M1000 50 C1100 200, 950 400, 1150 500" stroke={config.accentColor} strokeWidth="6" strokeLinecap="round" opacity="0.8" />
                  <circle cx="950" cy="200" r="40" fill={config.secondaryColor} opacity="0.3" />
                  <circle cx="1080" cy="450" r="12" fill={config.accentColor} opacity="0.9" />

                  {/* Header metadata in Geist Mono */}
                  <text x="80" y="140" fill={config.accentColor} fontFamily="Geist Mono, monospace" fontSize="14" fontWeight="600" letterSpacing="4">
                    {config.label}
                  </text>

                  {/* Editorial titles in DM Sans */}
                  <text x="80" y="240" fill="#262626" fontFamily="DM Sans, sans-serif" fontSize="56" fontWeight="bold" letterSpacing="-1.5">
                    {config.title.substring(0, 30)}
                  </text>
                  {config.title.length > 30 && (
                    <text x="80" y="315" fill="#262626" fontFamily="DM Sans, sans-serif" fontSize="56" fontWeight="bold" letterSpacing="-1.5">
                      {config.title.substring(30, 70)}
                    </text>
                  )}

                  {/* Descriptions in Geist */}
                  <text x="80" y="400" fill="#71717a" fontFamily="Geist, sans-serif" fontSize="20" width="700">
                    {config.subtitle.substring(0, 75)}
                  </text>
                  {config.subtitle.length > 75 && (
                    <text x="80" y="435" fill="#71717a" fontFamily="Geist, sans-serif" fontSize="20" width="700">
                      {config.subtitle.substring(75, 150)}
                    </text>
                  )}

                  {/* Footer branding */}
                  <line x1="80" y1="520" x2="1120" y2="520" stroke="#e4e4e7" strokeWidth="1" />
                  <text x="80" y="555" fill="#a1a1aa" fontFamily="Geist Mono, monospace" fontSize="12" letterSpacing="1">
                    FISCALIO.APP &copy; 2026
                  </text>
                  <text x="1040" y="555" fill={config.accentColor} fontFamily="DM Sans, sans-serif" fontSize="14" fontWeight="bold">
                    Warm Precision
                  </text>
                </svg>
              )}

              {template === "tax-table" && (
                <svg viewBox="0 0 800 800" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100%" height="100%" fill="#fcfaf6" />
                  
                  {/* Title Grid */}
                  <text x="60" y="100" fill={config.accentColor} fontFamily="Geist Mono, monospace" fontSize="12" letterSpacing="3">
                    {config.label}
                  </text>
                  <text x="60" y="150" fill="#262626" fontFamily="DM Sans, sans-serif" fontSize="32" fontWeight="bold">
                    {config.title}
                  </text>

                  {/* Simulation Invoice box */}
                  <rect x="60" y="210" width="680" height="420" rx="8" fill="#ffffff" stroke="#e4e4e7" strokeWidth="1" />
                  
                  {/* Table headers */}
                  <path d="M60 270 L740 270" stroke="#e4e4e7" strokeWidth="1" />
                  <text x="90" y="250" fill="#a1a1aa" fontFamily="Geist, sans-serif" fontSize="11" fontWeight="500" letterSpacing="1">CONCEPTO</text>
                  <text x="450" y="250" fill="#a1a1aa" fontFamily="Geist, sans-serif" fontSize="11" fontWeight="500" letterSpacing="1">TASA</text>
                  <text x="650" y="250" fill="#a1a1aa" fontFamily="Geist, sans-serif" fontSize="11" fontWeight="500" letterSpacing="1" textAnchor="end">IMPORTE</text>

                  {/* Row 1 */}
                  <text x="90" y="315" fill="#262626" fontFamily="Geist, sans-serif" fontSize="14" fontWeight="600">Subtotal (Ingreso Bruto)</text>
                  <text x="450" y="315" fill="#71717a" fontFamily="Geist Mono, monospace" fontSize="13">-</text>
                  <text x="650" y="315" fill="#262626" fontFamily="Geist Mono, monospace" fontSize="14" fontWeight="600" textAnchor="end">$100,000.00</text>
                  <path d="M90 345 L710 345" stroke="#f4f4f5" strokeWidth="1" />

                  {/* Row 2 */}
                  <text x="90" y="380" fill="#262626" fontFamily="Geist, sans-serif" fontSize="14">IVA Trasladado</text>
                  <text x="450" y="380" fill="#71717a" fontFamily="Geist Mono, monospace" fontSize="13">16.00%</text>
                  <text x="650" y="380" fill="#262626" fontFamily="Geist Mono, monospace" fontSize="14" textAnchor="end">+ $16,000.00</text>
                  <path d="M90 410 L710 410" stroke="#f4f4f5" strokeWidth="1" />

                  {/* Row 3 */}
                  <text x="90" y="445" fill="#ce2c31" fontFamily="Geist, sans-serif" fontSize="14">Retención ISR (P. Moral)</text>
                  <text x="450" y="445" fill="#ce2c31" fontFamily="Geist Mono, monospace" fontSize="13">1.25%</text>
                  <text x="650" y="445" fill="#ce2c31" fontFamily="Geist Mono, monospace" fontSize="14" textAnchor="end">- $1,250.00</text>
                  <path d="M90 475 L710 475" stroke="#f4f4f5" strokeWidth="1" />

                  {/* Row 4 */}
                  <text x="90" y="510" fill="#ce2c31" fontFamily="Geist, sans-serif" fontSize="14">Retención IVA (2/3 partes)</text>
                  <text x="450" y="510" fill="#ce2c31" fontFamily="Geist Mono, monospace" fontSize="13">10.66%</text>
                  <text x="650" y="510" fill="#ce2c31" fontFamily="Geist Mono, monospace" fontSize="14" textAnchor="end">- $10,666.67</text>

                  {/* Net Total section */}
                  <path d="M60 550 L740 550" stroke="#e4e4e7" strokeWidth="1" />
                  <rect x="60" y="551" width="680" height="78" fill="#3a3a3a" rx="0" />
                  <text x="90" y="598" fill="#ffffff" fontFamily="Geist, sans-serif" fontSize="14" fontWeight="600">Total Neto a Depositar</text>
                  <text x="650" y="600" fill={config.secondaryColor} fontFamily="Geist Mono, monospace" fontSize="24" fontWeight="bold" textAnchor="end">$104,083.33</text>

                  {/* Bottom details */}
                  <text x="60" y="675" fill="#a1a1aa" fontFamily="Geist, sans-serif" fontSize="12" width="680">
                    * Simulación basada en retenciones obligatorias de Persona Física (RESICO) a Persona Moral mexicana.
                  </text>
                </svg>
              )}

              {template === "flow-diagram" && (
                <svg viewBox="0 0 800 800" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100%" height="100%" fill="#fcfaf6" />
                  
                  {/* Title */}
                  <text x="60" y="100" fill={config.accentColor} fontFamily="Geist Mono, monospace" fontSize="12" letterSpacing="3">
                    {config.label}
                  </text>
                  <text x="60" y="150" fill="#262626" fontFamily="DM Sans, sans-serif" fontSize="32" fontWeight="bold">
                    {config.title}
                  </text>
                  
                  {/* Flow Steps */}
                  {/* Step 1 */}
                  <rect x="60" y="240" width="200" height="180" rx="8" fill="#ffffff" stroke="#e4e4e7" strokeWidth="1" />
                  <rect x="80" y="265" width="36" height="36" rx="18" fill="#f5f5f5" />
                  <text x="98" y="288" fill="#3a3a3a" fontFamily="Geist Mono, monospace" fontSize="16" fontWeight="bold" textAnchor="middle">1</text>
                  <text x="80" y="340" fill="#262626" fontFamily="DM Sans, sans-serif" fontSize="18" fontWeight="600">Emisión</text>
                  <text x="80" y="370" fill="#71717a" fontFamily="Geist, sans-serif" fontSize="12">Generas tu factura PUE</text>
                  <text x="80" y="390" fill="#71717a" fontFamily="Geist, sans-serif" fontSize="12">con IVA e ISR desglosado.</text>

                  {/* Arrow 1 */}
                  <path d="M280 330 L320 330" stroke="#d4d4d8" strokeWidth="2" strokeDasharray="4 4" />
                  <path d="M315 325 L325 330 L315 335" fill="none" stroke="#d4d4d8" strokeWidth="2" />

                  {/* Step 2 */}
                  <rect x="340" y="240" width="200" height="180" rx="8" fill="#ffffff" stroke="#e4e4e7" strokeWidth="1" />
                  <rect x="360" y="265" width="36" height="36" rx="18" fill="#e1f5fe" />
                  <text x="378" y="288" fill={config.accentColor} fontFamily="Geist Mono, monospace" fontSize="16" fontWeight="bold" textAnchor="middle">2</text>
                  <text x="360" y="340" fill="#262626" fontFamily="DM Sans, sans-serif" fontSize="18" fontWeight="600">Cobro</text>
                  <text x="360" y="370" fill="#71717a" fontFamily="Geist, sans-serif" fontSize="12">El cliente retiene el</text>
                  <text x="360" y="390" fill="#71717a" fontFamily="Geist, sans-serif" fontSize="12">1.25% de ISR y 10.66% IVA.</text>

                  {/* Arrow 2 */}
                  <path d="M560 330 L600 330" stroke="#d4d4d8" strokeWidth="2" strokeDasharray="4 4" />
                  <path d="M595 325 L605 330 L595 335" fill="none" stroke="#d4d4d8" strokeWidth="2" />

                  {/* Step 3 */}
                  <rect x="620" y="240" width="120" height="180" rx="8" fill="#3a3a3a" />
                  <rect x="640" y="265" width="36" height="36" rx="18" fill="#b45309" />
                  <text x="658" y="288" fill="#fcfaf6" fontFamily="Geist Mono, monospace" fontSize="16" fontWeight="bold" textAnchor="middle">3</text>
                  <text x="640" y="340" fill="#fcfaf6" fontFamily="DM Sans, sans-serif" fontSize="18" fontWeight="600">Neto</text>
                  <text x="640" y="370" fill="#e4e4e7" fontFamily="Geist, sans-serif" fontSize="12">Recibes saldo</text>
                  <text x="640" y="390" fill="#e4e4e7" fontFamily="Geist, sans-serif" fontSize="12">depurado.</text>

                  {/* Explanation card below */}
                  <rect x="60" y="470" width="680" height="160" rx="8" fill="#f4f4f5" />
                  <text x="90" y="515" fill="#262626" fontFamily="DM Sans, sans-serif" fontSize="18" fontWeight="600">¿Por qué retiene el cliente?</text>
                  <text x="90" y="550" fill="#71717a" fontFamily="Geist, sans-serif" fontSize="13">Las Personas Morales tienen la obligación legal de retener estos porcentajes a</text>
                  <text x="90" y="570" fill="#71717a" fontFamily="Geist, sans-serif" fontSize="13">cualquier freelancer en RESICO. Este dinero retenido actúa como un pago provisional</text>
                  <text x="90" y="590" fill="#71717a" fontFamily="Geist, sans-serif" fontSize="13">y se acredita en tus declaraciones mensuales del SAT.</text>
                </svg>
              )}

              {template === "custom" && (
                <div 
                  className="w-full h-full"
                  dangerouslySetInnerHTML={{ __html: config.customSvg }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
