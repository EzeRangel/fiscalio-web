"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { AlertTriangle, CheckCircle2, FileText, ArrowRight, Square, CheckSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ContextualPainCTAProps {
  variant: "warning" | "checklist" | "resource";
  title: string;
  description: string;
  buttonText: string;
  source: string;
  items?: string[];
  className?: string;
}

export function ContextualPainCTA({
  variant,
  title,
  description,
  buttonText,
  source,
  items = [],
  className,
}: ContextualPainCTAProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Build target URL preserving current query parameters
  const params = new URLSearchParams(searchParams.toString());
  params.set("dialog", "open");
  params.set("source", source);
  const href = `${pathname}?${params.toString()}`;

  // Styling based on variant
  const getStyles = () => {
    switch (variant) {
      case "warning":
        return {
          container: "border bg-[#fdfaf3] border-accent-amber/30 dark:bg-amber-950/5 dark:border-accent-amber/20",
          icon: <AlertTriangle className="h-5 w-5 text-accent-amber shrink-0" />,
          badge: "bg-accent-amber/10 text-accent-amber border-accent-amber/20",
          badgeText: "ADVERTENCIA FISCAL",
          itemIcon: <AlertTriangle className="h-4 w-4 text-accent-amber/70 shrink-0 mt-0.5" />,
        };
      case "checklist":
        return {
          container: "border bg-[#faf6f0] border-accent-rust/30 dark:bg-rust-950/5 dark:border-accent-rust/20",
          icon: <CheckCircle2 className="h-5 w-5 text-accent-rust shrink-0" />,
          badge: "bg-accent-rust/10 text-accent-rust border-accent-rust/20",
          badgeText: "DIAGNÓSTICO RÁPIDO",
          itemIcon: <Square className="h-4 w-4 text-accent-rust/70 shrink-0 mt-0.5" />,
        };
      case "resource":
      default:
        return {
          container: "border bg-zinc-50 border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800",
          icon: <FileText className="h-5 w-5 text-primary shrink-0" />,
          badge: "bg-primary/10 text-primary border-primary/20",
          badgeText: "RECURSO EXCLUSIVO",
          itemIcon: <CheckSquare className="h-4 w-4 text-primary/70 shrink-0 mt-0.5" />,
        };
    }
  };

  const styles = getStyles();

  return (
    <div className={cn("my-12 p-6 md:p-8 space-y-6 rounded-none relative overflow-hidden transition-all duration-300 hover:shadow-sm", styles.container, className)}>
      {/* Decorative top accent line */}
      <div className={cn("absolute top-0 left-0 w-full h-[3px]", 
        variant === "warning" ? "bg-accent-amber" : variant === "checklist" ? "bg-accent-rust" : "bg-primary"
      )} />

      {/* Header Info */}
      <div className="flex items-center gap-2 relative z-10">
        {styles.icon}
        <span className={cn("text-[9px] tracking-[0.2em] font-mono border px-2 py-0.5 rounded-none font-bold uppercase", styles.badge)}>
          {styles.badgeText}
        </span>
      </div>

      {/* Main Copy */}
      <div className="space-y-3 relative z-10">
        <h3 className="text-xl md:text-2xl font-display font-semibold tracking-tight leading-snug text-foreground">
          {title}
        </h3>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-3xl">
          {description}
        </p>
      </div>

      {/* Checklist Items if present */}
      {items && items.length > 0 && (
        <div className="pt-2 pb-1 relative z-10 border-t border-dashed border-border">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-foreground/90 font-sans">
                {styles.itemIcon}
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* CTA Button Row */}
      <div className="pt-4 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 relative z-10">
        <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">
          {variant === "resource" ? "* PDF descargable inmediato tras registro" : "* Beta privada con cupo limitado"}
        </p>
        <Link href={href} scroll={false} className="w-full sm:w-auto">
          <Button
            className="group/btn w-full sm:w-auto bg-foreground text-background hover:bg-foreground/90 rounded-none h-12 px-8 text-xs tracking-[0.15em] font-bold uppercase transition-all duration-300 border border-transparent"
          >
            {buttonText}
            <ArrowRight className="ml-3 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

