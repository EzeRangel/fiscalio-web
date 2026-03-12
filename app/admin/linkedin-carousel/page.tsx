"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Trash2,
  Download,
  Copy,
  Layout,
  Type,
  Image as ImageIcon,
  Check,
} from "lucide-react";
import { Logo } from "@/components/logo";

interface Slide {
  id: string;
  title: string;
  content: string;
  footer?: string;
  badge?: string;
  variant: "dark" | "light" | "rust" | "amber";
}

const INITIAL_SLIDES: Slide[] = [
  {
    id: "1",
    title: "Cómo recuperar el IVA de tu Laptop siendo Dev en RESICO",
    content:
      "Si exportas servicios, podrías estar perdiendo el 16% de tu flujo por un error de facturación.",
    footer: "FISCALIO.APP // GUÍA_RÁPIDA",
    badge: "IVA_0%_VS_EXENTO",
    variant: "rust",
  },
  {
    id: "2",
    title: "La Confusión Fatal: ¿Exento o Tasa 0%?",
    content:
      "• Exento: No cobras IVA, pero NO acreditas tus gastos.\n• Tasa 0%: No cobras IVA Y recuperas el 100% de tus compras (Laptop, Internet, SaaS).",
    footer: "ESTRATEGIA_FISCAL // 02",
    variant: "dark",
  },
];

export default function LinkedinCarouselCreator() {
  const [slides, setSlides] = useState<Slide[]>(INITIAL_SLIDES);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const addSlide = () => {
    const newSlide: Slide = {
      id: Math.random().toString(36).substr(2, 9),
      title: "Nuevo Slide",
      content: "Contenido del slide...",
      variant: "light",
      footer: `FISCALIO.APP // ${slides.length + 1}`,
    };
    setSlides([...slides, newSlide]);
    setCurrentSlideIndex(slides.length);
  };

  const updateSlide = (id: string, updates: Partial<Slide>) => {
    setSlides(slides.map((s) => (s.id === id ? { ...s, ...updates } : s)));
  };

  const removeSlide = (id: string) => {
    if (slides.length <= 1) return;
    const newSlides = slides.filter((s) => s.id !== id);
    setSlides(newSlides);
    setCurrentSlideIndex(Math.min(currentSlideIndex, newSlides.length - 1));
  };

  const currentSlide = slides[currentSlideIndex];

  const getVariantStyles = (variant: Slide["variant"]) => {
    switch (variant) {
      case "dark":
        return "bg-foreground text-background border-foreground";
      case "rust":
        return "bg-accent-rust text-white border-accent-rust";
      case "amber":
        return "bg-accent-amber text-white border-accent-amber";
      default:
        return "bg-background text-foreground border-border";
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 font-mono">
      {/* Header */}
      <nav className="border-b border-border bg-white sticky top-0 z-10">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Logo />
            <div className="h-4 w-px bg-border mx-2" />
            <span className="text-[10px] tracking-[0.2em] font-bold text-muted-foreground uppercase">
              CAROUSEL_CREATOR_V1
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="text-[10px] tracking-widest uppercase h-8"
            >
              <Download className="h-3 w-3 mr-2" /> EXPORTAR_JSON
            </Button>
            <Button
              size="sm"
              className="text-[10px] tracking-widest uppercase h-8"
            >
              CAPTURAR_TODO
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Editor Sidebar */}
          <div className="lg:col-span-4 space-y-8 order-2 lg:order-1">
            <div className="space-y-6 bg-white border border-border p-6 rounded-none shadow-sm">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <span className="text-[10px] tracking-[0.3em] font-bold uppercase">
                  EDITOR_SLIDE
                </span>
                <span className="text-[10px] text-muted-foreground">
                  [{currentSlideIndex + 1}/{slides.length}]
                </span>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-[9px] tracking-[0.2em] text-muted-foreground uppercase">
                    Variante
                  </label>
                  <div className="flex gap-2">
                    {(["light", "dark", "rust", "amber"] as const).map((v) => (
                      <button
                        key={v}
                        onClick={() =>
                          updateSlide(currentSlide.id, { variant: v })
                        }
                        className={`w-8 h-8 border ${currentSlide.variant === v ? "ring-2 ring-offset-2 ring-black" : ""} ${getVariantStyles(v)}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] tracking-[0.2em] text-muted-foreground uppercase">
                    Badge (Opcional)
                  </label>
                  <Input
                    value={currentSlide.badge || ""}
                    onChange={(e) =>
                      updateSlide(currentSlide.id, { badge: e.target.value })
                    }
                    className="text-xs font-mono rounded-none"
                    placeholder="PUE_VS_PPD"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] tracking-[0.2em] text-muted-foreground uppercase">
                    Título
                  </label>
                  <Textarea
                    value={currentSlide.title}
                    onChange={(e) =>
                      updateSlide(currentSlide.id, { title: e.target.value })
                    }
                    className="text-sm font-mono rounded-none min-h-[80px]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] tracking-[0.2em] text-muted-foreground uppercase">
                    Contenido
                  </label>
                  <Textarea
                    value={currentSlide.content}
                    onChange={(e) =>
                      updateSlide(currentSlide.id, { content: e.target.value })
                    }
                    className="text-sm font-mono rounded-none min-h-[150px]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] tracking-[0.2em] text-muted-foreground uppercase">
                    Footer
                  </label>
                  <Input
                    value={currentSlide.footer || ""}
                    onChange={(e) =>
                      updateSlide(currentSlide.id, { footer: e.target.value })
                    }
                    className="text-xs font-mono rounded-none"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-border flex gap-2">
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => removeSlide(currentSlide.id)}
                  disabled={slides.length <= 1}
                  className="flex-1 text-[10px] tracking-widest uppercase h-9 rounded-none"
                >
                  <Trash2 className="h-3 w-3 mr-2" /> ELIMINAR
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={addSlide}
                  className="flex-1 text-[10px] tracking-widest uppercase h-9 rounded-none"
                >
                  <Plus className="h-3 w-3 mr-2" /> AÑADIR
                </Button>
              </div>
            </div>

            {/* Slide Navigation List */}
            <div className="space-y-2">
              <span className="text-[10px] tracking-[0.3em] font-bold uppercase block mb-4">
                ORDEN_DE_SLIDES
              </span>
              <div className="grid grid-cols-5 gap-2">
                {slides.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentSlideIndex(idx)}
                    className={`h-12 border flex items-center justify-center text-[10px] transition-all ${
                      currentSlideIndex === idx
                        ? "border-black bg-black text-white scale-110 z-10"
                        : "border-border bg-white hover:border-black"
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
                <button
                  onClick={addSlide}
                  className="h-12 border border-dashed border-border flex items-center justify-center hover:border-black hover:bg-zinc-100"
                >
                  <Plus className="h-4 w-4 text-muted-foreground" />
                </button>
              </div>
            </div>
          </div>

          {/* Preview Area */}
          <div className="lg:col-span-8 space-y-8 order-1 lg:order-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] tracking-[0.3em] font-bold uppercase text-muted-foreground">
                VISTA_PREVIA_ASPECT_RATIO_1_1
              </span>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-none"
                  onClick={() =>
                    setCurrentSlideIndex(Math.max(0, currentSlideIndex - 1))
                  }
                  disabled={currentSlideIndex === 0}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-none"
                  onClick={() =>
                    setCurrentSlideIndex(
                      Math.min(slides.length - 1, currentSlideIndex + 1),
                    )
                  }
                  disabled={currentSlideIndex === slides.length - 1}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* The Slide Frame (1080x1080 Aspect Ratio) */}
            <div className="relative group">
              <div
                id="carousel-slide-capture"
                className={`aspect-square w-full max-w-[600px] mx-auto shadow-2xl flex flex-col p-12 relative overflow-hidden transition-colors duration-300 ${getVariantStyles(currentSlide.variant)}`}
              >
                {/* Subtle Background Pattern */}
                <div
                  className="absolute inset-0 opacity-5 pointer-events-none"
                  style={{
                    backgroundImage:
                      "radial-gradient(#000 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />

                {/* Header */}
                <div className="flex justify-between items-start mb-12 relative z-10">
                  <div className="flex items-center gap-2">
                    <div className={`p-1`}>
                      <Logo />
                    </div>
                  </div>
                  {currentSlide.badge && (
                    <div
                      className={`px-3 py-1 border text-[9px] tracking-[0.2em] font-bold uppercase ${currentSlide.variant === "light" ? "border-accent-rust text-accent-rust" : "border-white/30 text-white"}`}
                    >
                      {currentSlide.badge}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-center space-y-8 relative z-10">
                  <h2 className="text-4xl font-display font-medium tracking-tight leading-[1.1]">
                    {currentSlide.title}
                  </h2>
                  <div className="h-1 w-12 bg-current opacity-30" />
                  <div className="text-xl leading-relaxed whitespace-pre-wrap opacity-90 font-light">
                    {currentSlide.content}
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-auto pt-8 border-t border-current/20 flex justify-between items-end relative z-10">
                  <div className="text-[10px] tracking-[0.2em] font-bold uppercase">
                    {currentSlide.footer || "FISCALIO.APP"}
                  </div>
                  <div className="text-3xl font-bold opacity-20">
                    {String(currentSlideIndex + 1).padStart(2, "0")}
                  </div>
                </div>

                {/* Edge Accents */}
                <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-current/10 -m-1" />
                <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-current/10 -m-1" />
              </div>

              {/* Quick Info */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] text-muted-foreground uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Tip: Usa capturador de pantalla o herramienta de recortes (1:1)
              </div>
            </div>

            {/* Slide Strip (Desktop Only) */}
            <div className="hidden lg:flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {slides.map((slide, idx) => (
                <div
                  key={slide.id}
                  onClick={() => setCurrentSlideIndex(idx)}
                  className={`flex-shrink-0 w-32 aspect-square border cursor-pointer relative transition-all hover:scale-105 ${
                    currentSlideIndex === idx
                      ? "ring-2 ring-black"
                      : "opacity-60 grayscale hover:grayscale-0"
                  } ${getVariantStyles(slide.variant)}`}
                >
                  <div className="p-2 text-[6px] truncate font-bold">
                    {slide.title}
                  </div>
                  <div className="absolute bottom-1 right-1 text-[8px] opacity-30">
                    {idx + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
