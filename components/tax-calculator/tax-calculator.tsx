"use client";

import { useState, useMemo } from "react";
import {
  calculateTax,
  TipoIngreso,
  TipoCliente,
  CalculoResult,
} from "@/lib/tax-calculator";
import { formatCurrency } from "@/lib/format-currency";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { SendReportDialog } from "./send-report-dialog";
import Nossr from "../nossr";

export function TaxCalculator() {
  const [amount, setAmount] = useState<string>("35000");
  const [tipoIngreso, setTipoIngreso] = useState<TipoIngreso>("NACIONAL");
  const [tipoCliente, setTipoCliente] = useState<TipoCliente>("MORAL");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const result: CalculoResult = useMemo(() => {
    const numAmount = parseFloat(amount) || 0;
    return calculateTax(numAmount, tipoIngreso, tipoCliente);
  }, [amount, tipoIngreso, tipoCliente]);

  const today = new Date()
    .toLocaleDateString("es-MX", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    .toUpperCase();

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

      <div className="relative bg-card dark:bg-zinc-950 border border-border rounded-lg shadow-sm min-h-[600px] flex flex-col">
        <div className="flex-1 px-6 md:px-10 py-10 space-y-10">
          {/* Main Title */}
          <div className="border-b border-zinc-200 dark:border-zinc-800 pb-6">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              Simulador Fiscal RESICO
            </h2>
            <p className="text-sm text-muted-foreground mt-1 font-sans">
              Visualiza el desglose mensual de tus impuestos en tiempo real
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Input Side */}
            <div className="lg:col-span-5 space-y-8">
              <section className="space-y-6">
                <h3 className="font-display text-sm font-bold tracking-[0.2em] uppercase border-b border-zinc-200 dark:border-zinc-800 pb-2">
                  Parámetros
                </h3>

                <div className="space-y-6">
                  {/* Amount Input */}
                  <div className="space-y-2">
                    <label htmlFor="base-imponible" className="font-display text-xs uppercase text-muted-foreground tracking-widest">
                      ¿Cuánto te pagaron?
                    </label>
                    <div className="relative border-b border-zinc-200 dark:border-zinc-800 hover:border-black dark:hover:border-white transition-colors py-1">
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 text-xl font-mono text-muted-foreground">
                        $
                      </span>
                      <Input
                        id="base-imponible"
                        type="number"
                        value={amount}
                        step={100}
                        onChange={(e) => setAmount(e.target.value)}
                        className="pl-6 border-none rounded-none focus-visible:ring-0 text-2xl font-bold font-mono tracking-tight"
                        placeholder="0.00"
                      />
                    </div>
                  </div>

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
              </section>

              <div className="p-4 bg-zinc-50 dark:bg-zinc-900/50 border border-dashed border-zinc-200 dark:border-zinc-800 text-[10px] leading-relaxed text-muted-foreground uppercase tracking-wider rounded-md font-sans">
                Nota: Los cálculos presentados en este reporte son de carácter
                informativo. Basado en las tablas de ISR RESICO vigentes para el
                ejercicio fiscal 2026.
              </div>
            </div>

            {/* Results Side */}
            <div className="lg:col-span-7 flex flex-col space-y-6">
              <h3 className="font-display text-sm font-bold tracking-[0.2em] uppercase border-b border-zinc-200 dark:border-zinc-800 pb-2">
                Tus 3 Bóvedas
              </h3>

              <div className="space-y-6">
                {/* 1. Bóveda IVA */}
                <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-5 space-y-4 bg-zinc-50/20 dark:bg-zinc-900/10">
                  <div className="flex justify-between items-center border-b border-zinc-100 dark:border-zinc-900 pb-2">
                    <span className="font-display text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                      Bóveda IVA
                    </span>
                    <span className="text-[10px] uppercase font-mono text-muted-foreground tracking-widest bg-teal-500/10 text-teal-700 dark:text-teal-300 px-2 py-0.5 rounded-sm">
                      Impuesto Indirecto
                    </span>
                  </div>

                  <div className="space-y-2 text-sm font-mono">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground font-sans">IVA que cobraste ({tipoIngreso === "NACIONAL" ? "16%" : "0%"})</span>
                      <span className="font-semibold">${formatCurrency(result.iva)}</span>
                    </div>
                    {result.retencionIVA > 0 && (
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground font-sans">(-) Retención de IVA (10.6%)</span>
                        <span className="text-accent-rust">-${formatCurrency(result.retencionIVA)}</span>
                      </div>
                    )}
                    <div className="flex justify-between border-t border-dashed border-zinc-200 dark:border-zinc-800 pt-2 font-bold text-base">
                      <span className="font-sans font-bold">IVA neto a pagar al SAT</span>
                      <span>${formatCurrency(result.ivaNeto)}</span>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed font-sans">
                    {result.iva > 0
                      ? "Este dinero no es tuyo. El SAT te lo presta para que lo recaudes. No lo gastes."
                      : "Al exportar servicios al extranjero, tu tasa de IVA es del 0% y no tienes que recaudar este impuesto."}
                  </p>
                </div>

                {/* 2. Bóveda ISR */}
                <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-5 space-y-4 bg-zinc-50/20 dark:bg-zinc-900/10">
                  <div className="flex justify-between items-center border-b border-zinc-100 dark:border-zinc-900 pb-2">
                    <span className="font-display text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                      Bóveda ISR
                    </span>
                    <span className="text-[10px] uppercase font-mono text-muted-foreground tracking-widest bg-amber-500/10 text-amber-700 dark:text-amber-300 px-2 py-0.5 rounded-sm">
                      Impuesto Directo
                    </span>
                  </div>

                  <div className="space-y-2 text-sm font-mono">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground font-sans">ISR mensual</span>
                      <span className="font-semibold">${formatCurrency(result.isrBruto)}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground font-sans">Tasa aplicada</span>
                      <span className="font-semibold">{(result.tasaAplicada * 100).toFixed(2)}%</span>
                    </div>
                    {result.retencionISR > 0 && (
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground font-sans">(-) Retención de ISR</span>
                        <span className="text-accent-rust">-${formatCurrency(result.retencionISR)}</span>
                      </div>
                    )}
                    <div className="flex justify-between border-t border-dashed border-zinc-200 dark:border-zinc-800 pt-2 font-bold text-base">
                      <span className="font-sans font-bold">{result.isrNeto < 0 ? "Saldo a favor" : "ISR neto a pagar"}</span>
                      <span className={result.isrNeto < 0 ? "text-emerald-600 dark:text-emerald-400" : ""}>
                        {result.isrNeto < 0 ? "+" : ""}${formatCurrency(Math.abs(result.isrNeto))}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed font-sans">
                    Esto es lo que pagas al SAT por facturar en RESICO. Tu tasa es del {(result.tasaAplicada * 100).toFixed(2)}% porque facturas hasta {
                      result.subtotal <= 25000 ? "$25,000" :
                      result.subtotal <= 50000 ? "$50,000" :
                      result.subtotal <= 83333.33 ? "$83,333" :
                      result.subtotal <= 208333.33 ? "$208,333" :
                      "$3.5M"
                    } MXN al mes.
                  </p>
                </div>

                {/* 3. Tu Neto Real */}
                <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-5 space-y-4 bg-emerald-500/[0.03] dark:bg-emerald-500/[0.01]">
                  <div className="flex justify-between items-center border-b border-emerald-100 dark:border-emerald-950 pb-2">
                    <span className="font-display text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      Tu Neto Real
                    </span>
                    <span className="text-[10px] uppercase font-mono text-muted-foreground tracking-widest bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 px-2 py-0.5 rounded-sm">
                      Disponible
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="text-4xl font-bold font-mono text-emerald-600 dark:text-emerald-400">
                      ${formatCurrency(result.utilidadReal)}
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed font-sans">
                      Esto es lo que realmente te queda después de impuestos. Puedes gastarlo sin crear deudas futuras.
                    </p>
                  </div>

                  <div className="border-t border-emerald-100 dark:border-emerald-950 pt-3 text-xs text-muted-foreground font-mono">
                    {result.iva > 0 ? (
                      <p className="font-sans">
                        Depósito bancario estimado: <span className="font-bold font-mono text-foreground">${formatCurrency(result.totalNeto)}</span> (incluye IVA que no es tuyo)
                      </p>
                    ) : (
                      <p className="font-sans">
                        Depósito bancario estimado: <span className="font-bold font-mono text-foreground">${formatCurrency(result.totalNeto)}</span>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer / Send report */}
        <div className="border-t border-zinc-200 dark:border-zinc-800 p-6 flex justify-between items-center bg-zinc-50/50 dark:bg-zinc-900/50 rounded-b-lg font-sans">
          <div className="text-xs text-muted-foreground">
            Basado en la ley de ingresos de la federación 2026.
          </div>
          <Button
            onClick={() => setIsDialogOpen(true)}
            className="rounded-md font-sans text-sm tracking-wide h-11 px-8 bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-sm"
          >
            Enviar por correo
          </Button>
        </div>
      </div>
    </div>
  );
}
