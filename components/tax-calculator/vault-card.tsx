"use client";

import { formatCurrency } from "@/lib/format-currency";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface VaultCardProps {
  icon: React.ReactNode;
  label: string;
  sublabel: string;
  amount: number;
  rate?: string;
  explanation: string;
  color: "iva" | "isr" | "net";
  index: number;
}

const VAULT_STYLES = {
  iva: {
    bg: "bg-accent-rust/5",
    border: "border-accent-rust/20",
    labelColor: "text-accent-rust",
    amountColor: "text-accent-rust",
    iconBg: "bg-accent-rust",
    tagBg: "bg-accent-rust/10 text-accent-rust",
  },
  isr: {
    bg: "bg-accent-amber/5",
    border: "border-accent-amber/20",
    labelColor: "text-accent-amber",
    amountColor: "text-accent-amber",
    iconBg: "bg-accent-amber",
    tagBg: "bg-accent-amber/10 text-accent-amber",
  },
  net: {
    bg: "bg-primary/5",
    border: "border-primary/20",
    labelColor: "text-primary",
    amountColor: "text-primary",
    iconBg: "bg-primary",
    tagBg: "bg-primary/10 text-primary",
  },
};

export function VaultCard({
  icon,
  label,
  sublabel,
  amount,
  rate,
  explanation,
  color,
  index,
}: VaultCardProps) {
  const [open, setOpen] = useState(false);
  const s = VAULT_STYLES[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(
        "border p-5 flex flex-col gap-3 relative overflow-hidden",
        s.bg,
        s.border,
      )}
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div>
            <p
              className={cn(
                "text-xs font-semibold uppercase tracking-widest font-sans",
                s.labelColor,
              )}
            >
              {label}
            </p>
            <p className="text-xs text-muted-foreground font-sans leading-tight mt-0.5">
              {sublabel}
            </p>
          </div>
        </div>
        {rate && (
          <span
            className={cn(
              "text-xs font-mono px-2 py-0.5 font-semibold flex-shrink-0",
              s.tagBg,
            )}
          >
            {rate}
          </span>
        )}
      </div>

      {/* Amount */}
      <AnimatePresence mode="wait">
        <motion.p
          key={amount}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className={cn(
            "font-mono text-3xl font-bold tracking-tight leading-none",
            s.amountColor,
          )}
        >
          {formatCurrency(amount)}
        </motion.p>
      </AnimatePresence>

      {/* Explanation toggle */}
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "flex items-center gap-1.5 text-xs font-sans font-medium mt-1 cursor-pointer w-fit transition-opacity hover:opacity-70",
          s.labelColor,
        )}
        aria-expanded={open}
      >
        <span
          className={cn(
            "w-3.5 h-3.5 inline-flex items-center justify-center border flex-shrink-0 transition-transform",
            s.border,
            open && "rotate-45",
          )}
        >
          <svg width="7" height="7" viewBox="0 0 7 7" fill="none">
            <path
              d="M3.5 1v5M1 3.5h5"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
        </span>
        {open ? "Ocultar" : "¿Por qué este monto?"}
      </button>

      <AnimatePresence>
        {open && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className={cn(
              "text-xs font-sans leading-relaxed overflow-hidden",
              s.labelColor,
              "opacity-80",
            )}
          >
            {explanation}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
