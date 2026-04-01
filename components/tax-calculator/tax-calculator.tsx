"use client";

import { useState, useMemo } from "react";
import { 
  calculateTax, 
  TipoIngreso, 
  TipoCliente, 
  CalculoResult 
} from "@/lib/tax-calculator";
import { formatCurrency } from "@/lib/format-currency";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { SendReportDialog } from "./send-report-dialog";

export function TaxCalculator() {
  const [amount, setAmount] = useState<string>("35000");
  const [tipoIngreso, setTipoIngreso] = useState<TipoIngreso>("NACIONAL");
  const [tipoCliente, setTipoCliente] = useState<TipoCliente>("MORAL");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const result: CalculoResult = useMemo(() => {
    const numAmount = parseFloat(amount) || 0;
    return calculateTax(numAmount, tipoIngreso, tipoCliente);
  }, [amount, tipoIngreso, tipoCliente]);

  const today = new Date().toLocaleDateString('es-MX', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  }).toUpperCase();

  return (
    <div className="w-full max-w-4xl mx-auto font-mono">
      <SendReportDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        result={result}
        tipoIngreso={tipoIngreso}
        tipoCliente={tipoCliente}
        date={today}
      />
      
      {/* Report Header / Metadata */}
      <div className="flex justify-between items-end mb-8 px-2 text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
        <div className="space-y-1">
          <p>Documento: FIS_CALC_REV_04</p>
          <p>Régimen: RESICO Personas Físicas</p>
        </div>
        <div className="text-right space-y-1">
          <p>Fecha de emisión: {today}</p>
          <p>Estado: Borrador de Simulación</p>
        </div>
      </div>

      <div className="relative bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 shadow-[20px_20px_0px_rgba(0,0,0,0.05)] dark:shadow-[20px_20px_0px_rgba(255,255,255,0.02)] min-h-[800px] flex flex-col">
        {/* Hole Punch Effect */}
        <div className="absolute left-4 top-0 bottom-0 flex flex-col justify-around py-12 pointer-events-none opacity-20 dark:opacity-10">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-4 h-4 rounded-full border border-zinc-400 bg-zinc-100" />
          ))}
        </div>

        <div className="flex-1 pl-16 pr-12 py-12 space-y-12">
          {/* Main Title */}
          <div className="border-b-2 border-black dark:border-white pb-6">
            <h1 className="text-2xl font-bold tracking-tighter uppercase">Informe de Proyección Fiscal</h1>
            <p className="text-xs text-muted-foreground mt-2">Simulación de ingresos y obligaciones tributarias mensuales</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Input Side */}
            <div className="lg:col-span-5 space-y-8">
              <section className="space-y-6">
                <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase border-b border-zinc-200 dark:border-zinc-800 pb-2">Parámetros de Entrada</h3>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase text-muted-foreground tracking-widest">Jurisdicción de Ingreso</label>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className={`flex-1 rounded-none text-[10px] uppercase tracking-widest ${tipoIngreso === "NACIONAL" ? "bg-black text-white dark:bg-white dark:text-black" : ""}`}
                        onClick={() => setTipoIngreso("NACIONAL")}
                      >
                        Local [MX]
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className={`flex-1 rounded-none text-[10px] uppercase tracking-widest ${tipoIngreso === "EXTRANJERO" ? "bg-black text-white dark:bg-white dark:text-black" : ""}`}
                        onClick={() => setTipoIngreso("EXTRANJERO")}
                      >
                        Global [EXPORT]
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase text-muted-foreground tracking-widest">Base Imponible (Subtotal)</label>
                    <div className="relative border-b-2 border-zinc-200 dark:border-zinc-800 hover:border-black dark:hover:border-white transition-colors">
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 text-sm">$</span>
                      <Input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="pl-6 border-none rounded-none focus-visible:ring-0 text-lg font-bold"
                        placeholder="0.00"
                      />
                    </div>
                  </div>

                  {tipoIngreso === "NACIONAL" && (
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase text-muted-foreground tracking-widest">Clasificación de Cliente</label>
                      <Select value={tipoCliente} onValueChange={(v) => setTipoCliente(v as TipoCliente)}>
                        <SelectTrigger className="rounded-none border-x-0 border-t-0 border-b-2 border-zinc-200 dark:border-zinc-800 text-xs tracking-wide">
                          <SelectValue placeholder="Seleccionar..." />
                        </SelectTrigger>
                        <SelectContent className="rounded-none font-mono">
                          <SelectItem value="FISICA">P. FÍSICA [SIN RETENCIONES]</SelectItem>
                          <SelectItem value="MORAL">P. MORAL [CON RETENCIONES]</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                </div>
              </section>

              <div className="p-4 bg-zinc-50 dark:bg-zinc-900 border border-dashed border-zinc-300 dark:border-zinc-700 text-[10px] leading-relaxed text-muted-foreground uppercase tracking-wider">
                Nota: Los cálculos presentados en este reporte son de carácter informativo. 
                Basado en las tablas de ISR RESICO vigentes para el ejercicio fiscal 2024.
              </div>
            </div>

            {/* Results Side */}
            <div className="lg:col-span-7 flex flex-col">
              <section className="flex-1 space-y-6">
                <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase border-b border-zinc-200 dark:border-zinc-800 pb-2">Desglose de Operación</h3>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-1">
                    <span className="text-muted-foreground">SUBTOTAL [HONORARIOS]</span>
                    <span className="font-bold">${formatCurrency(result.subtotal)}</span>
                  </div>
                  
                  {result.iva > 0 && (
                    <div className="flex justify-between py-1">
                      <span className="text-muted-foreground">(+) IVA TRASLADADO [16%]</span>
                      <span>${formatCurrency(result.iva)}</span>
                    </div>
                  )}

                  {(result.retencionISR > 0 || result.retencionIVA > 0) && (
                    <div className="space-y-1 pt-2 border-t border-zinc-100 dark:border-zinc-900">
                      {result.retencionISR > 0 && (
                        <div className="flex justify-between text-xs py-1">
                          <span className="text-muted-foreground">(-) RETENCIÓN ISR [1.25%]</span>
                          <span className="text-accent-rust">-${formatCurrency(result.retencionISR)}</span>
                        </div>
                      )}
                      {result.retencionIVA > 0 && (
                        <div className="flex justify-between text-xs py-1">
                          <span className="text-muted-foreground">(-) RETENCIÓN IVA [10.6%]</span>
                          <span className="text-accent-rust">-${formatCurrency(result.retencionIVA)}</span>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="flex justify-between py-4 border-y-2 border-black dark:border-white mt-4 font-bold text-lg">
                    <span>DEPÓSITO BANCARIO</span>
                    <span>${formatCurrency(result.totalNeto)}</span>
                  </div>
                </div>

                <div className="pt-8 space-y-6">
                  <h3 className="text-[10px] font-bold tracking-[0.3em] uppercase border-b border-zinc-200 dark:border-zinc-800 pb-2">Liquidación SAT Proyectada</h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-end">
                      <div className="space-y-1">
                        <p className="text-xs font-bold uppercase">ISR Mensual [PROPIO]</p>
                        <p className="text-[10px] text-muted-foreground">TASA APLICADA: {(result.tasaAplicada * 100).toFixed(2)}%</p>
                      </div>
                      <span className={`text-lg font-bold ${result.isrNeto < 0 ? "text-green-600" : ""}`}>
                        {result.isrNeto < 0 ? "+" : "-"}${formatCurrency(Math.abs(result.isrNeto))}
                      </span>
                    </div>

                    <div className="flex justify-between items-end pb-4 border-b border-zinc-100 dark:border-zinc-900">
                      <div className="space-y-1">
                        <p className="text-xs font-bold uppercase">IVA Mensual [A PAGAR]</p>
                        <p className="text-[10px] text-muted-foreground">IVA COBRADO - RETENCIONES</p>
                      </div>
                      <span className="text-lg font-bold">-${formatCurrency(result.ivaNeto)}</span>
                    </div>

                    <div className="bg-black text-white dark:bg-white dark:text-black p-6 space-y-2">
                      <p className="text-[10px] uppercase tracking-[0.3em]">Utilidad Neta Real</p>
                      <div className="flex justify-between items-baseline">
                        <span className="text-3xl font-bold">${formatCurrency(result.utilidadReal)}</span>
                        <span className="text-xs opacity-70 uppercase tracking-widest">Capital Disponible</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* Footer / Auth Seal */}
        <div className="border-t border-zinc-200 dark:border-zinc-800 p-8 flex justify-between items-center bg-zinc-50/50 dark:bg-zinc-900/50">
          <div className="space-y-1">
            <p className="text-[10px] font-bold uppercase tracking-widest">Validado por Motor Fiscalio</p>
            <p className="text-[8px] text-muted-foreground font-mono">HASH: {Math.random().toString(36).substring(7).toUpperCase()}</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 border-2 border-zinc-300 rounded-full flex items-center justify-center rotate-12 opacity-50">
              <span className="text-[8px] font-bold text-center leading-tight">ORIGINAL<br/>DOCUMENT</span>
            </div>
            <Button 
              onClick={() => setIsDialogOpen(true)}
              className="rounded-none uppercase text-[10px] tracking-widest h-10 px-8"
            >
              Enviar por correo
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
          <p className="text-[10px] text-muted-foreground uppercase tracking-[0.4em]">Fin del Reporte</p>
      </div>
    </div>
  );
}
