"use client";

import { useState, useTransition } from "react";
import { ArrowRightIcon, MailIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { sendTaxReport } from "@/actions/sendTaxReport";
import { toast } from "sonner";
import { CalculoResult, TipoIngreso, TipoCliente } from "@/lib/tax-calculator";

interface SendReportDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  result: CalculoResult;
  tipoIngreso: TipoIngreso;
  tipoCliente: TipoCliente;
  date: string;
}

export function SendReportDialog({
  open,
  onOpenChange,
  result,
  tipoIngreso,
  tipoCliente,
  date,
}: SendReportDialogProps) {
  const [isPending, startTransition] = useTransition();
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    startTransition(async () => {
      const response = await sendTaxReport({
        email,
        result,
        tipoIngreso,
        tipoCliente,
        date,
      });

      if (response?.error) {
        toast.error("Error al enviar", {
          description: response.error,
        });
      } else {
        toast.success("Informe enviado", {
          description: `Hemos enviado el reporte a ${email}. Revisa tu bandeja de entrada.`,
        });
        onOpenChange(false);
        setEmail("");
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md rounded-lg border border-border font-sans bg-card">
        <DialogHeader className="space-y-3">
          <DialogTitle className="text-xl font-semibold tracking-tight font-display text-foreground">
            Enviar Simulación por Correo
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground leading-relaxed tracking-wide font-sans">
            Recibe una copia detallada de tus 3 Bóvedas de impuestos en tu bandeja de entrada.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 pt-2">
          <div className="space-y-1">
            <label
              htmlFor="email-report"
              className="text-xs uppercase tracking-widest text-muted-foreground font-semibold"
            >
              Tu correo electrónico
            </label>
            <Input
              id="email-report"
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-11 rounded-md border border-border focus:border-black dark:focus:border-white transition-colors text-sm px-3"
            />
          </div>

          <Button
            type="submit"
            className="w-full h-11 text-xs tracking-[0.1em] rounded-md font-bold uppercase"
            disabled={isPending}
          >
            {isPending ? "ENVIANDO..." : "RECIBIR SIMULACIÓN"}
            {!isPending && <ArrowRightIcon className="h-3.5 w-3.5 ml-2" />}
          </Button>

          <div className="p-4 bg-zinc-50 dark:bg-zinc-900/50 border border-dashed border-zinc-200 dark:border-zinc-800 rounded-md font-sans">
            <p className="text-[10px] text-muted-foreground leading-relaxed tracking-wide uppercase">
              * Al solicitar el informe, también te avisaremos cuando Fiscalio
              esté disponible y recibirás contenido exclusivo para optimizar tu
              RESICO.
            </p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
