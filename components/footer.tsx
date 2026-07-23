import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary text-secondary border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand and Disclaimer */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-3">
              <div className="bg-white p-1 rounded-sm">
                <Image
                  src="/logo.png"
                  width={20}
                  height={20}
                  alt="Logotipo de Fiscalio"
                  className="invert-0"
                />
              </div>
              <span className="text-xs font-mono tracking-tight text-white">
                FISCALIO
              </span>
            </div>
            <p className="text-[10px] leading-relaxed text-secondary/60 uppercase max-w-xs">
              Fiscalio no sustituye a un contador. Te ayuda a tener tu
              información fiscal en orden para que declarar sea un trámite de 5
              minutos.
            </p>
            <div className="text-[10px] tracking-tight text-secondary/40">
              © {new Date().getFullYear()} TODOS LOS DERECHOS RESERVADOS
            </div>
          </div>

          {/* Guías RESICO */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-xs tracking-wider text-white font-bold uppercase">
              Guías RESICO
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/blog/que-es-resico-freelancers-mexico"
                  className="text-[11px] text-secondary/70 hover:text-white transition-colors uppercase tracking-wider"
                >
                  ¿Qué es RESICO?
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/como-hacer-declaracion-mensual-resico"
                  className="text-[11px] text-secondary/70 hover:text-white transition-colors uppercase tracking-wider"
                >
                  Cómo hacer tu declaración mensual
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/cuando-presentar-declaracion-mensual-resico"
                  className="text-[11px] text-secondary/70 hover:text-white transition-colors uppercase tracking-wider"
                >
                  Cuándo hacer tu declaración mensual
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/declaracion-anual-resico-personas-fisicas"
                  className="text-[11px] text-secondary/70 hover:text-white transition-colors uppercase tracking-wider"
                >
                  Declaración Anual
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/saldo-favor-resico"
                  className="text-[11px] text-secondary/70 hover:text-white transition-colors uppercase tracking-wider"
                >
                  Saldos a favor
                </Link>
              </li>
            </ul>
          </div>

          {/* Lógica Fiscal */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-xs tracking-wider text-white font-bold uppercase">
              Cómo piensa el SAT
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/blog/exportar-servicios-resico-como-freelancer"
                  className="text-[11px] text-secondary/70 hover:text-white transition-colors uppercase tracking-wider"
                >
                  Cómo aplicar IVA 0% al exportar servicios TI
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/porque-sat-no-precarga-facturas"
                  className="text-[11px] text-secondary/70 hover:text-white transition-colors uppercase tracking-wider"
                >
                  ¿Por qué el SAT no precarga mis facturas?
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/deducciones-resico-isr"
                  className="text-[11px] text-secondary/70 hover:text-white transition-colors uppercase tracking-wider"
                >
                  ¿Por qué sigues pidiendo facturas en RESICO?
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/pue-vs-ppd-diferencia-facturar-cobrar"
                  className="text-[11px] text-secondary/70 hover:text-white transition-colors uppercase tracking-wider"
                >
                  PUE vs PPD: La diferencia entre facturar y cobrar
                </Link>
              </li>
            </ul>
          </div>

          {/* Herramientas */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-xs tracking-wider text-white font-bold uppercase">
              Recursos
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/calculadora-resico"
                  className="text-[11px] text-secondary/70 hover:text-white transition-colors uppercase tracking-wider"
                >
                  Calculadora RESICO
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-[11px] text-secondary/70 hover:text-white transition-colors uppercase tracking-wider"
                >
                  Archivo del Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/novedades"
                  className="text-[11px] text-secondary/70 hover:text-white transition-colors uppercase tracking-wider"
                >
                  Novedades / Changelog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
