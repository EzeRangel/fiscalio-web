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
      <DialogContent className="sm:max-w-md rounded-none border-2 font-mono">
        <DialogHeader className="space-y-4">
          <div className="w-12 h-12 border-2 border-zinc-900 dark:border-zinc-100 flex items-center justify-center mb-2">
            <MailIcon className="h-6 w-6" />
          </div>
          <DialogTitle className="text-2xl font-bold tracking-tighter uppercase">
            Enviar Informe por Correo
          </DialogTitle>
          <DialogDescription className="text-xs text-muted-foreground leading-relaxed tracking-wider uppercase">
            Recibe una copia detallada de esta simulación en tu bandeja de entrada y únete a nuestra comunidad de freelancers.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 pt-4">
          <div className="space-y-2">
            <label
              htmlFor="email-report"
              className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase font-bold"
            >
              Dirección de Correo
            </label>
            <Input
              id="email-report"
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12 rounded-none border-2 border-zinc-200 focus:border-black dark:focus:border-white transition-colors font-mono text-sm"
            />
          </div>
          
          <Button
            type="submit"
            className="w-full h-12 text-xs tracking-[0.2em] rounded-none font-bold uppercase shadow-[4px_4px_0px_rgba(0,0,0,0.1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all"
            disabled={isPending}
          >
            {isPending ? "PROCESANDO..." : "ENVIAR INFORME"}
            {!isPending && <ArrowRightIcon className="h-3.5 w-3.5 ml-3" />}
          </Button>

          <div className="p-4 bg-zinc-50 dark:bg-zinc-900 border border-dashed border-zinc-200 dark:border-zinc-800">
            <p className="text-[10px] text-muted-foreground leading-relaxed tracking-wide uppercase">
              * Al solicitar el informe, también te avisaremos cuando Fiscalio esté disponible y recibirás contenido exclusivo para optimizar tu RESICO.
            </p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
