"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Download, Copy, RefreshCw, Film, Image as ImageIcon } from "lucide-react";
import { toast } from "sonner";

type Variant = "light" | "dark" | "rust" | "amber" | "overlay";
type Kind = "static" | "hook" | "caption" | "endcard";

interface Ratio {
  id: string;
  label: string;
  w: number;
  h: number;
}

interface Palette {
  bg: string;
  fg: string;
  muted: string;
  border: string;
  accent: string;
  accentFg: string;
}

interface Fonts {
  display: string;
  sans: string;
  mono: string;
}

interface Creative {
  label: string;
  title: string;
  body: string;
  badge: string;
  cta: string;
  footer: string;
  variant: Variant;
}

interface Preset {
  id: string;
  name: string;
  kind: Kind;
  ratio: string;
  data: Creative;
}

const RATIOS: Ratio[] = [
  { id: "4x5", label: "Feed 4:5 · 1080×1350", w: 1080, h: 1350 },
  { id: "1x1", label: "Feed 1:1 · 1080×1080", w: 1080, h: 1080 },
  { id: "9x16", label: "Reels/Stories 9:16 · 1080×1920", w: 1080, h: 1920 },
];

const PALETTES: Record<Variant, Palette> = {
  light: {
    bg: "#fcfaf6",
    fg: "#262626",
    muted: "#6f6a60",
    border: "#e7e1d6",
    accent: "#b45309",
    accentFg: "#ffffff",
  },
  dark: {
    bg: "#262626",
    fg: "#fcfaf6",
    muted: "#b3ada2",
    border: "#3d3d3d",
    accent: "#fbbf24",
    accentFg: "#262626",
  },
  rust: {
    bg: "#b45309",
    fg: "#fdf7f0",
    muted: "#f0d6bd",
    border: "#ca6d24",
    accent: "#262626",
    accentFg: "#fcfaf6",
  },
  amber: {
    bg: "#fbbf24",
    fg: "#262626",
    muted: "#7a5710",
    border: "#ecaf1c",
    accent: "#262626",
    accentFg: "#fcfaf6",
  },
  overlay: {
    bg: "rgba(18,16,13,0.62)",
    fg: "#fcfaf6",
    muted: "#d9d3c9",
    border: "rgba(252,250,246,0.28)",
    accent: "#fbbf24",
    accentFg: "#262626",
  },
};

const PRESETS: Preset[] = [
  {
    id: "a-estatico",
    name: "A · Estático incertidumbre",
    kind: "static",
    ratio: "4x5",
    data: {
      label: "[A] INCERTIDUMBRE",
      title: "¿Tu borrador RESICO\ncuadra con lo que\ncobraste?",
      body: "Prepara el borrador de tu declaración mensual RESICO con tus CFDIs. Videollamada de 15 minutos, sin costo.",
      badge: "SIN COSTO",
      cta: "Preparar mi borrador gratis",
      footer: "fiscalio.app/demo-resico",
      variant: "light",
    },
  },
  {
    id: "c-estatico",
    name: "C · Estático error #1",
    kind: "static",
    ratio: "4x5",
    data: {
      label: "[C] ERROR COMÚN",
      title: "El error #1\nal declarar\nRESICO",
      body: "El ISR se calcula sobre lo cobrado, no sobre lo facturado. Revisa tu caso y prepara tu borrador en 15 minutos.",
      badge: "GRATIS · 15 MIN",
      cta: "Preparar mi borrador gratis",
      footer: "fiscalio.app/demo-resico",
      variant: "rust",
    },
  },
  {
    id: "oferta",
    name: "Oferta (master)",
    kind: "static",
    ratio: "4x5",
    data: {
      label: "[OFERTA] BORRADOR RESICO",
      title: "Tu borrador de\ndeclaración mensual\nRESICO, en 15 min",
      body: "Revisamos ingresos, ISR, IVA y retenciones con tus CFDIs. Ves el resultado real y decides.",
      badge: "SIN COSTO",
      cta: "Preparar mi borrador gratis",
      footer: "fiscalio.app/demo-resico",
      variant: "dark",
    },
  },
  {
    id: "hook-a",
    name: "Hook A · 9:16",
    kind: "hook",
    ratio: "9x16",
    data: {
      label: "[A] GANCHO",
      title: "¿Tu borrador RESICO\ncuadra con lo que\ncobraste?",
      body: "",
      badge: "",
      cta: "",
      footer: "FISCALIO",
      variant: "dark",
    },
  },
  {
    id: "hook-b",
    name: "Hook B · 9:16",
    kind: "hook",
    ratio: "9x16",
    data: {
      label: "[B] GANCHO",
      title: "80 facturas a mano…\ny luego esto.",
      body: "",
      badge: "",
      cta: "",
      footer: "FISCALIO",
      variant: "light",
    },
  },
  {
    id: "hook-c",
    name: "Hook C · 9:16",
    kind: "hook",
    ratio: "9x16",
    data: {
      label: "[C] GANCHO",
      title: "Facturado ≠ cobrado.\nEl ISR de RESICO se\ncalcula sobre lo cobrado.",
      body: "",
      badge: "",
      cta: "",
      footer: "FISCALIO",
      variant: "rust",
    },
  },
  {
    id: "hook-d",
    name: "Hook D · founder",
    kind: "hook",
    ratio: "9x16",
    data: {
      label: "[D] FUNDADOR",
      title: "Yo tampoco entendía\nmi declaración\nde RESICO.",
      body: "",
      badge: "",
      cta: "",
      footer: "FISCALIO",
      variant: "amber",
    },
  },
  {
    id: "caption",
    name: "Caption / lower third",
    kind: "caption",
    ratio: "9x16",
    data: {
      label: "[CAPTION]",
      title: "El ISR se calcula\nsobre lo cobrado.",
      body: "",
      badge: "",
      cta: "",
      footer: "",
      variant: "overlay",
    },
  },
  {
    id: "endcard",
    name: "End card · CTA",
    kind: "endcard",
    ratio: "9x16",
    data: {
      label: "[CIERRE]",
      title: "Prepara tu borrador\nRESICO gratis\nen 15 minutos",
      body: "No necesitas e.firma ni contraseñas.",
      badge: "SIN COSTO",
      cta: "Reservar",
      footer: "fiscalio.app/demo-resico",
      variant: "light",
    },
  },
];

const REEL_KIT = [
  {
    angle: "A · Incertidumbre",
    length: "20 s",
    timeline: [
      { seg: "0–3 s", scene: "Hook a cámara + card Hook A", card: "Hook A" },
      { seg: "3–8 s", scene: "Dolor: no saber si el cálculo está bien", card: "—" },
      { seg: "8–18 s", scene: "Mecanismo: qué se revisa en la sesión", card: "—" },
      { seg: "18–20 s", scene: "Cierre con CTA", card: "End card" },
    ],
  },
  {
    angle: "B · Trabajo manual",
    length: "25 s",
    timeline: [
      { seg: "0–3 s", scene: "Hook con screen recording + card Hook B", card: "Hook B" },
      { seg: "3–10 s", scene: "Before: clasificar CFDIs a mano", card: "—" },
      { seg: "10–20 s", scene: "After: demo del borrador en Fiscalio", card: "—" },
      { seg: "20–25 s", scene: "Cierre con CTA", card: "End card" },
    ],
  },
  {
    angle: "C · Miedo a equivocarse",
    length: "20 s",
    timeline: [
      { seg: "0–3 s", scene: "Hook a cámara + card Hook C", card: "Hook C" },
      { seg: "3–10 s", scene: "El error: facturado vs cobrado", card: "Caption" },
      { seg: "10–18 s", scene: "Cómo se revisa en la sesión", card: "—" },
      { seg: "18–20 s", scene: "Cierre con CTA", card: "End card" },
    ],
  },
  {
    angle: "D · Founder-led",
    length: "30 s",
    timeline: [
      { seg: "0–3 s", scene: "Fundador a cámara + card Hook D", card: "Hook D" },
      { seg: "3–8 s", scene: "Por qué construyó Fiscalio", card: "—" },
      { seg: "8–18 s", scene: "Demo de pantalla del borrador", card: "—" },
      { seg: "18–24 s", scene: "Privacidad: sin e.firma ni contraseñas", card: "Caption" },
      { seg: "24–30 s", scene: "Cierre con CTA", card: "End card" },
    ],
  },
];

function firstFamily(stack: string): string {
  const first = stack.split(",")[0].trim();
  return first.replace(/^['"]|['"]$/g, "");
}

function wrapLines(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
  const lines: string[] = [];
  for (const paragraph of text.split("\n")) {
    const words = paragraph.split(" ");
    let line = "";
    for (const word of words) {
      const test = line ? `${line} ${word}` : word;
      if (line && ctx.measureText(test).width > maxWidth) {
        lines.push(line);
        line = word;
      } else {
        line = test;
      }
    }
    lines.push(line);
  }
  return lines;
}

function drawTracked(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  tracking: number,
  align: "left" | "right" = "left",
) {
  let width = 0;
  for (const ch of text) width += ctx.measureText(ch).width + tracking;
  width -= tracking;
  let cx = align === "right" ? x - width : x;
  for (const ch of text) {
    ctx.fillText(ch, cx, y);
    cx += ctx.measureText(ch).width + tracking;
  }
}

function roundRectPath(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
) {
  const radius = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + w - radius, y);
  ctx.arcTo(x + w, y, x + w, y + radius, radius);
  ctx.lineTo(x + w, y + h - radius);
  ctx.arcTo(x + w, y + h, x + w - radius, y + h, radius);
  ctx.lineTo(x + radius, y + h);
  ctx.arcTo(x, y + h, x, y + h - radius, radius);
  ctx.lineTo(x, y + radius);
  ctx.arcTo(x, y, x + radius, y, radius);
  ctx.closePath();
}

interface PaintOptions {
  ratio: Ratio;
  creative: Creative;
  fonts: Fonts;
  showGuides: boolean;
  logo: HTMLImageElement | null;
}

function paint(canvas: HTMLCanvasElement, opts: PaintOptions) {
  const { ratio, creative, fonts, showGuides, logo } = opts;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const { w, h } = ratio;
  canvas.width = w;
  canvas.height = h;

  const palette = PALETTES[creative.variant];
  const vertical = h / w >= 1.5;

  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = palette.bg;
  ctx.fillRect(0, 0, w, h);

  const marginX = vertical ? w * 0.12 : w * 0.085;
  const contentTop = vertical ? h * 0.16 : h * 0.1;
  const contentBottom = vertical ? h * 0.62 : h * 0.9;
  const contentWidth = w - marginX * 2;

  const borderInset = vertical ? w * 0.045 : w * 0.03;
  ctx.strokeStyle = palette.border;
  ctx.lineWidth = 2;
  ctx.strokeRect(borderInset, borderInset, w - borderInset * 2, h - borderInset * 2);

  const base = vertical ? w * 0.105 : w * 0.083;
  const labelSize = w * 0.026;
  const badgeSize = w * 0.024;
  const bodySize = w * 0.036;
  const ctaSize = w * 0.033;
  const footerSize = w * 0.025;

  ctx.textBaseline = "alphabetic";
  ctx.textAlign = "left";
  ctx.font = `500 ${labelSize}px ${fonts.mono}`;
  ctx.fillStyle = palette.accent;
  drawTracked(ctx, creative.label.toUpperCase(), marginX, contentTop + labelSize, labelSize * 0.18);

  if (creative.badge) {
    ctx.font = `500 ${badgeSize}px ${fonts.mono}`;
    const textWidth = ctx.measureText(creative.badge.toUpperCase()).width;
    const padX = badgeSize * 0.9;
    const padY = badgeSize * 0.7;
    const boxW = textWidth + padX * 2;
    const boxH = badgeSize + padY * 2;
    const bx = w - marginX - boxW;
    const by = contentTop - labelSize * 0.2;
    ctx.fillStyle = palette.accent;
    roundRectPath(ctx, bx, by, boxW, boxH, 2);
    ctx.fill();
    ctx.fillStyle = palette.accentFg;
    ctx.fillText(creative.badge.toUpperCase(), bx + padX, by + boxH - padY);
  }

  const footerY = contentBottom;
  const ctaHeight = creative.cta ? ctaSize * 2.6 : 0;
  const ctaY = footerY - ctaHeight;
  const footerGap = creative.cta ? footerSize * 2.4 : 0;
  const bodyBottom = footerY - footerGap - ctaHeight - footerSize * 1.6;

  let titleSize = base;
  let titleLines: string[] = [];
  const titleTop = contentTop + labelSize * 2.2;
  const titleMaxHeight = (contentBottom - titleTop) * (vertical ? 0.72 : 0.62);
  for (; titleSize > 20; titleSize -= 2) {
    ctx.font = `700 ${titleSize}px ${fonts.display}`;
    titleLines = wrapLines(ctx, creative.title, contentWidth);
    if (titleLines.length * titleSize * 1.12 <= titleMaxHeight) break;
  }
  ctx.fillStyle = palette.fg;
  ctx.font = `700 ${titleSize}px ${fonts.display}`;
  let cursorY = titleTop + titleSize;
  for (const line of titleLines) {
    ctx.fillText(line, marginX, cursorY);
    cursorY += titleSize * 1.12;
  }

  if (creative.body) {
    ctx.font = `400 ${bodySize}px ${fonts.sans}`;
    const bodyLines = wrapLines(ctx, creative.body, contentWidth);
    let bodyY = cursorY + bodySize * 0.9;
    ctx.fillStyle = palette.muted;
    const maxBodyY = bodyBottom;
    for (const line of bodyLines) {
      if (bodyY > maxBodyY) break;
      ctx.fillText(line, marginX, bodyY);
      bodyY += bodySize * 1.35;
    }
  }

  if (creative.cta) {
    ctx.font = `600 ${ctaSize}px ${fonts.display}`;
    const ctaWidth = ctx.measureText(creative.cta).width;
    const padX = ctaSize * 1.6;
    const boxW = Math.min(contentWidth, ctaWidth + padX * 2);
    ctx.fillStyle = palette.accent;
    roundRectPath(ctx, marginX, ctaY, boxW, ctaHeight, 2);
    ctx.fill();
    ctx.fillStyle = palette.accentFg;
    ctx.textAlign = "center";
    ctx.fillText(creative.cta, marginX + boxW / 2, ctaY + ctaHeight - ctaSize * 0.85);
    ctx.textAlign = "left";
  }

  const logoSize = footerSize * 1.25;
  let footerX = marginX;
  if (logo && logo.complete) {
    ctx.drawImage(logo, marginX, footerY - logoSize, logoSize, logoSize);
    footerX = marginX + logoSize * 1.4;
  }
  ctx.font = `500 ${footerSize}px ${fonts.mono}`;
  ctx.fillStyle = palette.fg;
  drawTracked(ctx, "FISCALIO", footerX, footerY, footerSize * 0.12);
  if (creative.footer) {
    ctx.fillStyle = palette.muted;
    ctx.font = `400 ${footerSize}px ${fonts.sans}`;
    ctx.textAlign = "right";
    ctx.fillText(creative.footer, w - marginX, footerY);
    ctx.textAlign = "left";
  }

  if (showGuides && vertical) {
    const top = h * 0.14;
    const bottom = h * 0.35;
    const side = w * 0.06;
    ctx.save();
    ctx.strokeStyle = "rgba(206,44,49,0.75)";
    ctx.setLineDash([12, 10]);
    ctx.lineWidth = 2;
    ctx.strokeRect(side, top, w - side * 2, h - top - bottom);
    ctx.fillStyle = "rgba(206,44,49,0.9)";
    ctx.font = `500 ${w * 0.02}px ${fonts.mono}`;
    ctx.fillText("SAFE ZONE 14 / 35 / 6", side + 8, top - 10);
    ctx.restore();
  }
}

function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function renderOffscreen(opts: PaintOptions): Promise<HTMLCanvasElement> {
  return new Promise((resolve) => {
    const canvas = document.createElement("canvas");
    paint(canvas, { ...opts, showGuides: false });
    resolve(canvas);
  });
}

export default function MetaCreativesPage() {
  const [presetId, setPresetId] = useState(PRESETS[0].id);
  const [ratioId, setRatioId] = useState(PRESETS[0].ratio);
  const [creative, setCreative] = useState<Creative>(PRESETS[0].data);
  const [showGuides, setShowGuides] = useState(false);
  const [fonts, setFonts] = useState<Fonts | null>(null);
  const [logoReady, setLogoReady] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const logoRef = useRef<HTMLImageElement | null>(null);

  const ratio = useMemo(
    () => RATIOS.find((r) => r.id === ratioId) ?? RATIOS[0],
    [ratioId],
  );

  useEffect(() => {
    const img = new Image();
    img.src = "/logo.png";
    img.onload = () => {
      logoRef.current = img;
      setLogoReady(true);
    };
  }, []);

  useEffect(() => {
    const styles = getComputedStyle(document.body);
    const display =
      styles.getPropertyValue("--font-display").trim() || "system-ui, sans-serif";
    const sans =
      styles.getPropertyValue("--font-geist-sans").trim() || "system-ui, sans-serif";
    const mono =
      styles.getPropertyValue("--font-geist-mono").trim() || "ui-monospace, monospace";
    const resolve = () => setFonts({ display, sans, mono });

    if (!document.fonts) {
      resolve();
      return;
    }

    Promise.allSettled([
      document.fonts.load(`700 80px ${firstFamily(display)}`),
      document.fonts.load(`400 40px ${firstFamily(sans)}`),
      document.fonts.load(`500 40px ${firstFamily(mono)}`),
      document.fonts.ready,
    ]).then(resolve);
  }, []);

  useEffect(() => {
    if (!canvasRef.current || !fonts) return;
    paint(canvasRef.current, {
      ratio,
      creative,
      fonts,
      showGuides,
      logo: logoRef.current,
    });
  }, [ratio, creative, fonts, showGuides, logoReady]);

  const selectPreset = useCallback((preset: Preset) => {
    setPresetId(preset.id);
    setRatioId(preset.ratio);
    setCreative(preset.data);
  }, []);

  const updateCreative = useCallback((patch: Partial<Creative>) => {
    setCreative((prev) => ({ ...prev, ...patch }));
  }, []);

  const exportCurrent = useCallback(async () => {
    if (!fonts) return;
    const canvas = await renderOffscreen({
      ratio,
      creative,
      fonts,
      showGuides: false,
      logo: logoRef.current,
    });
    canvas.toBlob((blob) => {
      if (!blob) return;
      downloadBlob(blob, `meta_${presetId}_${ratio.id}.png`);
      toast.success(`PNG exportado (${ratio.w}×${ratio.h})`);
    }, "image/png");
  }, [fonts, ratio, creative, presetId]);

  const exportAllRatios = useCallback(async () => {
    if (!fonts) return;
    for (const r of RATIOS) {
      const canvas = await renderOffscreen({
        ratio: r,
        creative,
        fonts,
        showGuides: false,
        logo: logoRef.current,
      });
      await new Promise<void>((resolve) => {
        canvas.toBlob((blob) => {
          if (blob) downloadBlob(blob, `meta_${presetId}_${r.id}.png`);
          resolve();
        }, "image/png");
      });
    }
    toast.success("Se exportaron las 3 tallas");
  }, [fonts, creative, presetId]);

  const copyShotList = useCallback(() => {
    const lines: string[] = ["# Kit de Reels — Meta Ads Fiscalio", ""];
    for (const reel of REEL_KIT) {
      lines.push(`## ${reel.angle} (${reel.length})`);
      for (const step of reel.timeline) {
        lines.push(`- ${step.seg} · ${step.scene} · card: ${step.card}`);
      }
      lines.push("");
    }
    lines.push(
      "Reglas: 9:16, subtítulos siempre, gancho en 1.5–3 s, safe zone 14/35/6, CTA solo en el end card.",
    );
    navigator.clipboard.writeText(lines.join("\n"));
    toast.success("Shot list copiado");
  }, []);

  const preset = PRESETS.find((p) => p.id === presetId) ?? PRESETS[0];

  return (
    <div className="min-h-screen bg-background text-foreground p-8 lg:p-16 space-y-12">
      <header className="space-y-4">
        <h1 className="text-4xl font-display font-medium">
          Meta Creatives Studio
        </h1>
        <p className="text-muted-foreground font-sans max-w-2xl">
          Estáticos y kit de reels para la campaña RESICO ($1,000 MXN). Plantillas
          por ángulo con las fuentes y la paleta de DESIGN.md. Exporta PNG en 4:5,
          1:1 y 9:16.
        </p>
      </header>

      <Separator />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 space-y-8">
          <div className="space-y-4">
            <h2 className="text-xs font-mono tracking-widest text-muted-foreground uppercase">
              Plantillas
            </h2>
            <div className="grid grid-cols-1 gap-2">
              {PRESETS.map((p) => (
                <Button
                  key={p.id}
                  variant={presetId === p.id ? "default" : "outline"}
                  onClick={() => selectPreset(p)}
                  className="justify-start text-xs h-10"
                >
                  {p.kind === "static" ? (
                    <ImageIcon className="h-3.5 w-3.5 mr-2" />
                  ) : (
                    <Film className="h-3.5 w-3.5 mr-2" />
                  )}
                  {p.name}
                </Button>
              ))}
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h2 className="text-xs font-mono tracking-widest text-muted-foreground uppercase">
              Tamaño
            </h2>
            <div className="grid grid-cols-1 gap-2">
              {RATIOS.map((r) => (
                <Button
                  key={r.id}
                  variant={ratioId === r.id ? "default" : "outline"}
                  onClick={() => setRatioId(r.id)}
                  className="justify-start text-xs h-10"
                >
                  {r.label}
                </Button>
              ))}
            </div>
            <div className="flex items-center justify-between pt-2">
              <label className="text-[10px] font-mono uppercase text-muted-foreground">
                Mostrar guía safe zone
              </label>
              <Switch checked={showGuides} onCheckedChange={setShowGuides} />
            </div>
          </div>

          <Separator />

          <div className="space-y-6">
            <h2 className="text-xs font-mono tracking-widest text-muted-foreground uppercase">
              Contenido
            </h2>
            <div className="space-y-2">
              <label className="text-[10px] font-mono uppercase text-muted-foreground">
                Label
              </label>
              <Input
                value={creative.label}
                onChange={(e) => updateCreative({ label: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-mono uppercase text-muted-foreground">
                Título (usa \n para saltos)
              </label>
              <Textarea
                value={creative.title}
                onChange={(e) => updateCreative({ title: e.target.value })}
                className="h-24 resize-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-mono uppercase text-muted-foreground">
                Cuerpo
              </label>
              <Textarea
                value={creative.body}
                onChange={(e) => updateCreative({ body: e.target.value })}
                className="h-20 resize-none"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase text-muted-foreground">
                  Badge
                </label>
                <Input
                  value={creative.badge}
                  onChange={(e) => updateCreative({ badge: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase text-muted-foreground">
                  CTA
                </label>
                <Input
                  value={creative.cta}
                  onChange={(e) => updateCreative({ cta: e.target.value })}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-mono uppercase text-muted-foreground">
                Footer
              </label>
              <Input
                value={creative.footer}
                onChange={(e) => updateCreative({ footer: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-mono uppercase text-muted-foreground">
                Variante
              </label>
              <div className="grid grid-cols-5 gap-2">
                {(Object.keys(PALETTES) as Variant[]).map((v) => (
                  <button
                    key={v}
                    onClick={() => updateCreative({ variant: v })}
                    className={`h-8 border text-[9px] font-mono uppercase transition-colors ${
                      creative.variant === v
                        ? "border-primary ring-1 ring-primary"
                        : "border-border"
                    }`}
                    style={{ background: PALETTES[v].bg }}
                  >
                    <span style={{ color: PALETTES[v].fg }}>{v}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-8">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-xs font-mono tracking-widest text-muted-foreground uppercase">
                Preview ({ratio.w}×{ratio.h})
              </h2>
              <div className="flex flex-wrap gap-2">
                <Button size="sm" variant="outline" onClick={exportAllRatios}>
                  <Download className="h-3.5 w-3.5 mr-1.5" />
                  Todas las tallas
                </Button>
                <Button size="sm" onClick={exportCurrent}>
                  <Download className="h-3.5 w-3.5 mr-1.5" />
                  Exportar PNG
                </Button>
              </div>
            </div>

            <div className="flex justify-center border border-border bg-muted/40 p-6">
              <canvas
                ref={canvasRef}
                className="w-full max-w-[440px] border border-border shadow-sm"
                style={{ aspectRatio: `${ratio.w} / ${ratio.h}` }}
              />
            </div>
            <p className="text-[10px] font-mono text-muted-foreground break-all">
              meta_{presetId}_{ratio.id}.png
            </p>
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xs font-mono tracking-widest text-muted-foreground uppercase">
                Kit de reels — shot list
              </h2>
              <Button size="sm" variant="outline" onClick={copyShotList}>
                <Copy className="h-3.5 w-3.5 mr-1.5" />
                Copiar
              </Button>
            </div>
            <div className="space-y-4">
              {REEL_KIT.map((reel) => (
                <div key={reel.angle} className="border border-border">
                  <div className="flex items-center justify-between border-b border-border px-4 py-2 bg-muted/40">
                    <span className="text-xs font-display font-medium">
                      {reel.angle}
                    </span>
                    <span className="text-[10px] font-mono text-muted-foreground">
                      {reel.length}
                    </span>
                  </div>
                  <table className="w-full text-xs">
                    <tbody>
                      {reel.timeline.map((step) => (
                        <tr key={step.seg} className="border-b border-border last:border-0">
                          <td className="px-4 py-2 font-mono text-[10px] text-muted-foreground w-24">
                            {step.seg}
                          </td>
                          <td className="px-4 py-2 font-sans">{step.scene}</td>
                          <td className="px-4 py-2 font-mono text-[10px] text-right w-28">
                            {step.card}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
            <div className="p-4 border border-border bg-card text-xs text-muted-foreground leading-relaxed">
              Graba los talking-head en el teléfono (vertical, luz frontal, audio
              limpio) y el demo con screen recording. Usa las tarjetas para hook,
              caption y cierre. Subtítulos siempre; el CTA solo en el end card.
              Nunca "agenda una demo".
            </div>
          </div>

          <div className="flex items-center gap-2 text-[10px] font-mono text-muted-foreground">
            <RefreshCw className="h-3 w-3" />
            El preview se actualiza con las fuentes de marca cargadas.
          </div>
        </div>
      </div>
    </div>
  );
}
