import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface CalculatorCTAProps {
  title?: string;
  description?: string;
}

export function CalculatorCTA({
  title = "Simula tus impuestos en tiempo real",
  description = "Usa nuestra calculadora gratuita para estimar tu ISR, IVA y retenciones bajo el régimen RESICO de forma instantánea.",
}: CalculatorCTAProps) {
  return (
    <div className="border-t-2 border-accent-amber/20 pt-12 mt-16">
      <div className="bg-foreground text-background p-8 md:p-12 space-y-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[3px] bg-accent-amber" />
        
        <div className="relative z-10 space-y-6">
          <Badge className="bg-accent-amber text-foreground rounded-none px-3 py-1 text-[10px] tracking-widest font-mono hover:bg-accent-amber">
            HERRAMIENTA_GRATUITA
          </Badge>
          
          <h3 className="text-3xl md:text-4xl font-display font-bold tracking-tight leading-tight max-w-2xl">
            {title}
          </h3>
          
          <p className="text-background/80 max-w-2xl leading-relaxed">
            {description}
          </p>
          
          <Link href="/calculadora-resico" className="inline-block w-full md:w-auto">
            <Button
              size="lg"
              className="w-full md:w-auto bg-background text-foreground hover:bg-background/90 rounded-none h-14 px-12 text-xs tracking-[0.2em] font-bold"
            >
              PROBAR CALCULADORA RESICO
              <ArrowRight className="ml-3 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
