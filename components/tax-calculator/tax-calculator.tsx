"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import {
  calculateTax,
  TipoIngreso,
  TipoCliente,
  CalculoResult,
} from "@/lib/tax-calculator";
import { formatCurrency, formatPercent } from "@/lib/format-currency";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { SendReportDialog } from "./send-report-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { VaultCard } from "./vault-card";
import { TAX_CONSTANTS } from "@/lib/tax-constants";
import { sendGAEvent } from "@next/third-parties/google";

const PRESET_AMOUNTS = [5_000, 10_000, 25_000, 50_000, 100_000];
const EXPLANATIONS = {
  INGRESO_NACIONAL: {
    IVA: "Este dinero no es tuyo. El SAT te lo presta para que lo recaudes. No lo gastes, debes entregarlo cada mes en tu declaración.",
    ISR: "Esto es lo que pagas al SAT por facturar en RESICO. Tasas del 1% - 2.5% sobre ingreso bruto mensual.",
  },
  INGRESO_NACIONAL_EMPRESA: {
    IVA: "Este dinero no es tuyo. El SAT te lo presta para que lo recaudes. Una parte lo paga tu cliente (empresa), la otra lo pagas tú en tu declaración.",
    ISR: "Tu cliente paga el 1.25% por ley. Si la tasa es menor a la retención, tienes saldo a favor.",
  },
  INGRESO_EXTRANJERO: {
    IVA: "Al exportar servicios al extranjero, tu tasa de IVA es del 0% y no tienes que recaudar este impuesto.",
    ISR: "Esto es lo que pagas al SAT por facturar en RESICO. Tasas del 1% - 2.5% sobre ingreso bruto mensual.",
  },
};

export function TaxCalculator() {
  const [rawInput, setRawInput] = useState<string>("");

  const [tipoIngreso, setTipoIngreso] = useState<TipoIngreso>("NACIONAL");
  const [tipoCliente, setTipoCliente] = useState<TipoCliente>("FISICA");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const numAmount = parseFloat(rawInput.replace(/[^0-9.]/g, "")) || 0;
    if (numAmount <= 0) return;

    const timer = setTimeout(() => {
      sendGAEvent("event", "calculator_used", {
        tipo_ingreso: tipoIngreso,
        tipo_cliente: tipoCliente,
        has_amount: true,
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [rawInput, tipoIngreso, tipoCliente]);

  const result: CalculoResult = useMemo(() => {
    const numAmount = parseFloat(rawInput.replace(/[^0-9.]/g, "")) || 0;
    return calculateTax(numAmount, tipoIngreso, tipoCliente);
  }, [rawInput, tipoIngreso, tipoCliente]);

  const { ivaPercent, isrPercent, utilPercent } = useMemo(() => {
    const totalCash = result.totalNeto || 1;
    const ivaNet = Math.max(0, result.ivaNeto);
    const isrNet = Math.max(0, result.isrNeto);
    const utilReal = Math.max(0, result.utilidadReal);

    const totalCalculated = ivaNet + isrNet + utilReal;
    if (totalCalculated === 0) {
      return { ivaPercent: 0, isrPercent: 0, utilPercent: 100 };
    }

    return {
      ivaPercent: (ivaNet / totalCalculated) * 100,
      isrPercent: (isrNet / totalCalculated) * 100,
      utilPercent: (utilReal / totalCalculated) * 100,
    };
  }, [result]);

  const handlePreset = useCallback((amount: number) => {
    setRawInput(amount.toString());
  }, []);

  const handleInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9.]/g, "");
    setRawInput(raw);
  }, []);

  const today = new Date()
    .toLocaleDateString("es-MX", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    .toUpperCase();

  const ivaLabel =
    tipoIngreso === "NACIONAL"
      ? tipoCliente === "MORAL"
        ? `16% - ${formatPercent(TAX_CONSTANTS.RETENCION_IVA_PM)} retenido ($${formatCurrency(result.retencionIVA)})`
        : "16% IVA total"
      : "No aplica (cliente extranjero)";

  const isrLabel =
    tipoCliente === "MORAL"
      ? `1.25% retención ISR ($${formatCurrency(result.retencionISR)})`
      : `${formatPercent(result.tasaAplicada)} tasa RESICO`;

  const ivaInfo =
    tipoIngreso === "NACIONAL"
      ? tipoCliente === "MORAL"
        ? EXPLANATIONS["INGRESO_NACIONAL_EMPRESA"].IVA
        : EXPLANATIONS["INGRESO_NACIONAL"].IVA
      : EXPLANATIONS["INGRESO_EXTRANJERO"].IVA;

  const isrInfo =
    tipoIngreso === "NACIONAL"
      ? tipoCliente === "MORAL"
        ? EXPLANATIONS["INGRESO_NACIONAL_EMPRESA"].ISR
        : EXPLANATIONS["INGRESO_NACIONAL"].ISR
      : EXPLANATIONS["INGRESO_EXTRANJERO"].ISR;

  return (
    <div className="w-full max-w-4xl mx-auto font-sans">
      <SendReportDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        result={result}
        tipoIngreso={tipoIngreso}
        tipoCliente={tipoCliente}
        date={today}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="bg-card border border-border"
      >
        {/* Main Title */}
        <div className="border-b border-zinc-100 dark:border-zinc-800 p-6">
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            Simulador Fiscal RESICO
          </h2>
          <p className="text-sm text-muted-foreground mt-1 font-sans">
            Visualiza el desglose mensual de tus impuestos en tiempo real
          </p>
        </div>

        {/* Input section */}
        <div className="p-6 border-b border-border">
          <label className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground font-sans mb-3">
            Monto del pago recibido (Bruto)
          </label>

          {/* Number input */}
          <div className="relative flex items-center border border-border bg-background focus-within:border-foreground transition-colors duration-150 mb-4">
            <span className="pl-4 text-muted-foreground font-mono text-lg font-medium select-none">
              $
            </span>
            <input
              type="number"
              inputMode="decimal"
              value={rawInput}
              onChange={handleInput}
              placeholder="0.00"
              className="flex-1 h-14 pl-2 pr-4 font-mono text-2xl font-semibold text-foreground bg-transparent outline-none placeholder:text-border"
              aria-label="Monto bruto en pesos mexicanos"
            />
            <span className="pr-4 text-xs font-sans text-muted-foreground font-medium">
              MXN
            </span>
          </div>

          {/* Preset buttons */}
          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Montos preestablecidos"
          >
            {PRESET_AMOUNTS.map((amount) => (
              <button
                key={amount}
                onClick={() => handlePreset(amount)}
                className={cn(
                  "h-9 px-3 text-sm font-mono font-medium border transition-colors duration-150 cursor-pointer",
                  rawInput === amount.toString()
                    ? "bg-foreground text-primary-foreground border-foreground"
                    : "bg-background text-muted-foreground border-border hover:border-foreground hover:text-foreground",
                )}
              >
                {formatCurrency(amount).replace(".00", "")}
              </button>
            ))}
          </div>

          <div className="border-b border-border divide-y divide-border py-6">
            {/* Mexican Client Switch */}
            <div className="flex items-center justify-between py-2 border-b border-zinc-100 dark:border-zinc-900">
              <div className="space-y-0.5">
                <label className="font-display text-xs uppercase tracking-widest font-semibold">
                  ¿Tu cliente es mexicano?
                </label>
                <p className="text-[10px] text-muted-foreground font-sans">
                  Activa para facturas locales (MXN)
                </p>
              </div>
              <Switch
                checked={tipoIngreso === "NACIONAL"}
                onCheckedChange={(checked) => {
                  setTipoIngreso(checked ? "NACIONAL" : "EXTRANJERO");
                }}
              />
            </div>

            {/* Company Client Switch */}
            {tipoIngreso === "NACIONAL" && (
              <div className="flex items-center justify-between py-2 border-b border-zinc-100 dark:border-zinc-900 animate-in fade-in duration-200">
                <div className="space-y-0.5">
                  <label className="font-display text-xs uppercase tracking-widest font-semibold">
                    ¿Tu cliente es una empresa?
                  </label>
                  <p className="text-[10px] text-muted-foreground font-sans">
                    Aplica retención de ISR (1.25%) e IVA (10.6%)
                  </p>
                </div>
                <Switch
                  checked={tipoCliente === "MORAL"}
                  onCheckedChange={(checked) => {
                    setTipoCliente(checked ? "MORAL" : "FISICA");
                  }}
                />
              </div>
            )}
          </div>

          {/* Active scenario label & Invoice calculation details */}
          <div className="bg-muted/30 border-b border-border divide-y divide-border/50">
            <div className="px-6 py-3 bg-muted/50 flex flex-wrap justify-between items-center gap-2">
              <p className="text-xs font-sans text-muted-foreground">
                Escenario:{" "}
                <span className="text-foreground font-medium">
                  {tipoIngreso === "EXTRANJERO"
                    ? "Exportación de servicios (sin IVA)"
                    : tipoCliente === "MORAL"
                      ? "Factura a persona moral · retención IVA + ISR"
                      : "Factura a persona física mexicana · RESICO"}
                </span>
              </p>
              {result.subtotal > 0 && (
                <div className="text-xs font-mono">
                  <span className="text-muted-foreground">
                    Depósito estimado:
                  </span>{" "}
                  <span className="font-bold text-foreground">
                    ${formatCurrency(result.totalNeto)}
                  </span>
                </div>
              )}
            </div>
          </div>

          <AnimatePresence>
            {result.subtotal > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-1 grid grid-cols-1 gap-1 py-6"
                role="region"
                aria-label="Resultados de impuestos"
              >
                {/* IVA Vault */}
                <VaultCard
                  index={0}
                  color="iva"
                  icon={
                    <svg viewBox="0 0 16 16" fill="none" width="16" height="16">
                      <rect
                        x="2"
                        y="5"
                        width="12"
                        height="9"
                        rx="0"
                        stroke="white"
                        strokeWidth="1.2"
                      />
                      <path
                        d="M5 5V4a3 3 0 0 1 6 0v1"
                        stroke="white"
                        strokeWidth="1.2"
                      />
                      <circle cx="8" cy="9.5" r="1.5" fill="white" />
                    </svg>
                  }
                  label="Bóveda IVA"
                  sublabel={ivaLabel}
                  amount={result.ivaNeto}
                  rate={
                    tipoIngreso === "NACIONAL"
                      ? tipoCliente === "MORAL"
                        ? `${formatPercent(TAX_CONSTANTS.RETENCION_IVA_PM)} retenido`
                        : "16% IVA"
                      : "0%"
                  }
                  explanation={ivaInfo}
                />

                {/* ISR Vault */}
                <VaultCard
                  index={1}
                  color="isr"
                  icon={
                    <svg viewBox="0 0 16 16" fill="none" width="16" height="16">
                      <path
                        d="M8 2v12M3 7l5-5 5 5"
                        stroke="white"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  }
                  label="Bóveda ISR"
                  sublabel={isrLabel}
                  amount={result.isrNeto}
                  rate={`tasa del ${formatPercent(result.tasaAplicada)}`}
                  explanation={isrInfo}
                />

                {/* Net Vault */}
                <VaultCard
                  index={2}
                  color="net"
                  icon={
                    <svg viewBox="0 0 16 16" fill="none" width="16" height="16">
                      <path
                        d="M4 9l3 3 5-6"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="8"
                        cy="8"
                        r="6"
                        stroke="white"
                        strokeWidth="1.2"
                      />
                    </svg>
                  }
                  label="Pago Neto"
                  sublabel="Lo que realmente te queda"
                  amount={result.utilidadReal}
                  explanation="Esto es lo que realmente te queda después de impuestos. Puedes gastarlo sin crear deudas futuras con el SAT."
                />

                {/* Summary bar */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.35 }}
                  className="bg-card border border-border p-5 mt-6"
                >
                  <p className="text-xs font-sans font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                    Distribución del depósito recibido
                  </p>

                  <div className="h-4 w-full flex bg-secondary overflow-hidden rounded-none">
                    {ivaPercent > 0 && (
                      <div
                        style={{ width: `${ivaPercent}%` }}
                        className="h-full bg-accent-rust transition-all duration-300"
                        title={`IVA a separar: ${ivaPercent.toFixed(1)}%`}
                      />
                    )}
                    {isrPercent > 0 && (
                      <div
                        style={{ width: `${isrPercent}%` }}
                        className="h-full bg-accent-amber transition-all duration-300"
                        title={`ISR a separar: ${isrPercent.toFixed(1)}%`}
                      />
                    )}
                    {utilPercent > 0 && (
                      <div
                        style={{ width: `${utilPercent}%` }}
                        className="h-full bg-primary transition-all duration-300"
                        title={`Tu Neto Real: ${utilPercent.toFixed(1)}%`}
                      />
                    )}
                  </div>

                  <div className="grid grid-cols-3 gap-3 text-center">
                    {[
                      {
                        label: "IVA cobrado",
                        value: `$${formatCurrency(result.ivaNeto)}`,
                        color: "text-accent-rust",
                      },
                      {
                        label: "ISR estimado",
                        value: `$${formatCurrency(
                          result.isrNeto < 0 ? 0 : result.isrNeto,
                        )}`,
                        color: "text-accent-amber",
                      },
                      {
                        label: "Tu pago neto",
                        value: `$${formatCurrency(result.utilidadReal)}`,
                        color: "text-primary",
                      },
                    ].map(({ label, value, color }) => (
                      <div key={label}>
                        <AnimatePresence mode="wait">
                          <motion.p
                            key={value}
                            initial={{ opacity: 0, y: 3 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -3 }}
                            transition={{ duration: 0.2 }}
                            className={cn(
                              "font-mono text-base font-bold",
                              color,
                            )}
                          >
                            {value}
                          </motion.p>
                        </AnimatePresence>
                        <p className="text-xs font-sans text-muted-foreground mt-0.5">
                          {label}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer / Send report */}
        <div className="dark:border-zinc-800 p-6 flex justify-between items-center bg-zinc-50/50 dark:bg-zinc-900/50 rounded-none font-sans">
          <div className="text-xs text-muted-foreground">
            Cálculo estimado mensual bajo régimen RESICO. Consulta a tu contador
            para precisión fiscal.
          </div>
          <Button
            onClick={() => setIsDialogOpen(true)}
            className="rounded-none font-sans text-xs uppercase tracking-[0.15em] h-11 px-8 bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-sm"
          >
            Enviar por correo
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
