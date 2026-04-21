export function TaxTimeline() {
  return (
    <div className="w-full py-12 px-2 overflow-x-auto hide-scrollbar">
      <div className="min-w-[600px] flex flex-col space-y-8">
        {/* Meses Header */}
        <div className="flex items-center justify-between px-4">
          <div className="flex-1 text-center">
            <span className="text-[10px] tracking-[0.3em] font-mono text-muted-foreground uppercase">
              MES ANTERIOR (N-1)
            </span>
            <div className="mt-2 text-xl font-display font-semibold">
              Operación
            </div>
          </div>
          <div className="w-24 flex justify-center">
            <div className="h-px w-full bg-accent-amber/30 relative">
              <div className="absolute right-0 -top-[3px] border-t-4 border-l-8 border-t-transparent border-b-4 border-b-transparent border-l-accent-amber/50" />
            </div>
          </div>
          <div className="flex-1 text-center">
            <span className="text-[10px] tracking-[0.3em] font-mono text-muted-foreground uppercase">
              MES ACTUAL (N)
            </span>
            <div className="mt-2 text-xl font-display font-semibold text-accent-rust">
              Declaración
            </div>
          </div>
        </div>

        {/* Timeline Bar */}
        <div className="relative h-12 flex items-center">
          {/* Background Line */}
          <div className="absolute inset-x-0 h-1 bg-muted rounded-full" />

          <div className="flex w-full relative h-full items-center">
            {/* Mes Anterior Block */}
            <div className="flex-1 h-full flex items-center justify-center">
              <div className="w-full mx-4 h-6 bg-primary/5 border border-primary/10 rounded-none flex items-center justify-center">
                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                  Facturas y Cobros
                </span>
              </div>
            </div>

            {/* Mes Actual Block (1-17 days) */}
            <div className="flex-1 relative flex h-full">
              {/* Days 1-16 area */}
              <div className="flex-[16] h-full flex flex-col items-center justify-center group">
                <div className="w-[95%] h-6 bg-accent-amber/10 border border-accent-amber/20 flex items-center justify-center relative">
                  <span className="text-[9px] font-mono text-accent-rust/70 uppercase">
                    Días 01 - 16
                  </span>
                  {/* Tooltip hint */}
                  <div className="absolute -top-10 scale-0 group-hover:scale-100 transition-all bg-foreground text-background text-[10px] py-1 px-2 font-mono whitespace-nowrap">
                    Periodo sugerido para declarar
                  </div>
                </div>
              </div>

              {/* Day 17 Marker */}
              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="h-10 w-px bg-accent-rust relative">
                  <div className="absolute -top-1 -right-5 font-mono text-[11px] font-bold text-accent-rust">
                    17
                  </div>
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <span className="text-[10px] font-bold font-display text-accent-rust whitespace-nowrap uppercase tracking-tighter">
                      FECHA LÍMITE
                    </span>
                    <div className="h-2 w-2 rounded-full bg-accent-rust animate-pulse mt-1" />
                  </div>
                </div>
              </div>

              {/* Day 18+ (Fade out) */}
              <div className="flex-[13] h-full opacity-20 flex items-center px-4">
                {/* <div className="h-[2px] w-full bg-dashed border-t border-muted-foreground" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
