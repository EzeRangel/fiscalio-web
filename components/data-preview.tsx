"use client";

import { useCountUp } from "@/hooks/use-count-up";
import { formatCurrency } from "@/lib/format-currency";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";

const movements = [
  {
    id: "INV-0847",
    name: "Corp. Tecnológico",
    amount: 13920.0,
    isExpense: false,
  },
  {
    id: "INV-0846",
    name: "Dist. Industrial",
    amount: 8750.5,
    isExpense: false,
  },
  { id: "EXP-0291", name: "Servicios Corp.", amount: 2500.0, isExpense: true },
];

export function DataPreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // Track which rows are visible (first row always visible)
  const [visibleRows, setVisibleRows] = useState(1);

  // Trigger row reveals with delays when in view
  useEffect(() => {
    if (!isInView) return;

    // Show second row after 1.5s
    const timer1 = setTimeout(() => setVisibleRows(2), 1500);
    // Show third row after 3s
    const timer2 = setTimeout(() => setVisibleRows(3), 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [isInView]);

  // Calculate totals progressively based on visible rows
  const visibleMovements = movements.slice(0, visibleRows);
  const totalIncome = visibleMovements
    .filter((m) => !m.isExpense)
    .reduce((sum, m) => sum + m.amount, 0);
  const totalExpenses = visibleMovements
    .filter((m) => m.isExpense)
    .reduce((sum, m) => sum + m.amount, 0);
  const netBalance = totalIncome - totalExpenses;

  // Animated counters - recalculate when visible rows change
  const animatedIncome = useCountUp(totalIncome, 0.8, isInView);
  const animatedExpenses = useCountUp(totalExpenses, 0.8, isInView);
  const animatedNet = useCountUp(netBalance, 0.8, isInView);

  return (
    <div
      ref={containerRef}
      className="lg:col-span-5 flex flex-col justify-center py-20 lg:py-32 lg:pl-12"
    >
      <div className="space-y-8">
        <div className="space-y-1">
          <span className="text-[10px] tracking-[0.3em] text-muted-foreground">
            RESUMEN FISCAL
          </span>
          <span className="text-[10px] tracking-[0.3em] text-muted-foreground ml-4">
            MAR.2024
          </span>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <div className="text-[10px] tracking-[0.2em] text-muted-foreground">
              INGRESOS_TOTALES
            </div>
            <div className="text-4xl md:text-5xl tracking-tight tabular-nums">
              ${formatCurrency(animatedIncome)}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-1">
              <div className="text-[10px] tracking-[0.2em] text-muted-foreground">
                EGRESOS
              </div>
              <div className="text-lg tabular-nums">
                ${formatCurrency(animatedExpenses)}
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-[10px] tracking-[0.2em] text-muted-foreground">
                NETO
              </div>
              <div className="text-lg tabular-nums">
                ${formatCurrency(animatedNet)}
              </div>
            </div>
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <div className="text-[10px] tracking-[0.2em] text-muted-foreground">
            ÚLTIMOS_MOVIMIENTOS
          </div>

          {movements.map((item, index) => {
            const isVisible = index < visibleRows;

            // First row is always static, others animate
            if (index === 0) {
              return (
                <div
                  key={item.id}
                  className="flex items-center justify-between text-sm"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] text-muted-foreground">
                      {item.id}
                    </span>
                    <span>{item.name}</span>
                  </div>
                  <span>+{formatCurrency(item.amount)}</span>
                </div>
              );
            }

            return (
              <motion.div
                key={item.id}
                className="flex items-center justify-between text-sm"
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <div className="flex items-center gap-4">
                  <span className="text-[10px] text-muted-foreground">
                    {item.id}
                  </span>
                  <span>{item.name}</span>
                </div>
                <span className={item.isExpense ? "text-muted-foreground" : ""}>
                  {item.isExpense ? "-" : "+"}
                  {formatCurrency(item.amount)}
                </span>
              </motion.div>
            );
          })}
        </div>

        <div className="pt-4">
          <Badge className="text-[10px] tracking-[0.15em] rounded-none bg-foreground text-background px-3 py-1">
            SIN_CONEXIÓN — 100% LOCAL
          </Badge>
        </div>
      </div>
    </div>
  );
}
