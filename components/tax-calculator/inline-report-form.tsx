"use client";

import { useState, useTransition } from "react";
import { ArrowRightIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { sendTaxReport } from "@/actions/sendTaxReport";
import { toast } from "sonner";
import {
  CalculoResult,
  GeneralRegimeResult,
  TipoIngreso,
  TipoCliente,
} from "@/lib/tax-calculator";
import { sendGAEvent } from "@next/third-parties/google";

interface InlineReportFormProps {
  result: CalculoResult;
  generalRegimeResult: GeneralRegimeResult;
  gastosPercent: number;
  tipoIngreso: TipoIngreso;
  tipoCliente: TipoCliente;
  date: string;
}

export function InlineReportForm({
  result,
  generalRegimeResult,
  gastosPercent,
  tipoIngreso,
  tipoCliente,
  date,
}: InlineReportFormProps) {
  const [isPending, startTransition] = useTransition();
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    startTransition(async () => {
      const response = await sendTaxReport({
        email,
        result,
        generalRegimeResult,
        gastosPercent,
        tipoIngreso,
        tipoCliente,
        date,
      });

      if (response?.error) {
        toast.error("Error al enviar", {
          description: response.error,
        });
      } else {
        sendGAEvent("event", "tax_report_sent", {
          tipo_ingreso: tipoIngreso,
          tipo_cliente: tipoCliente,
          source: "inline_form",
        });
        toast.success("Informe enviado", {
          description: `Hemos enviado el reporte a ${email}. Revisa tu bandeja de entrada.`,
        });
        setEmail("");
      }
    });
  };

  return (
    <div className="bg-zinc-50 dark:bg-zinc-900/50 border-t border-border p-4 md:p-6 font-sans">
      <div className="max-w-xl mx-auto space-y-4 text-center sm:text-left">
        <div>
          <h3 className="font-display font-semibold text-foreground text-lg">
            ¿Quieres este reporte en PDF?
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            Te enviamos tu cálculo de impuestos RESICO y la comparativa con el
            régimen general a tu correo.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder="tu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="h-12 rounded-none border-border focus:border-black dark:focus:border-white transition-colors bg-background"
          />
          <Button
            type="submit"
            disabled={isPending || result.subtotal <= 0}
            className="h-12 px-6 rounded-none font-bold uppercase tracking-widest text-xs flex-shrink-0"
          >
            {isPending ? "Enviando..." : "Obtener PDF Gratis"}
            {!isPending && <ArrowRightIcon className="h-3.5 w-3.5 ml-2" />}
          </Button>
        </form>

        <p className="text-[10px] text-muted-foreground uppercase tracking-wide leading-relaxed text-left">
          * Al solicitar tu reporte, te suscribes de forma gratuita a nuestra lista de espera y boletín para recibir contenido de RESICO.
        </p>
      </div>
    </div>
  );
}
