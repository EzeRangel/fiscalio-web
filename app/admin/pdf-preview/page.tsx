import Image from "next/image";
import { DM_Sans } from "next/font/google";
import { Metadata } from "next";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Fiscalio | Plantilla de Factura Extranjera Perfecta",
  description:
    "Configuración CFDI 4.0 para exportación de servicios a tasa 0% de IVA.",
  robots: "noindex, nofollow",
};

const PageWrapper = ({
  children,
  pageNumber,
}: {
  children: React.ReactNode;
  pageNumber: string;
}) => (
  <div className="print-container w-[8.5in] h-[11in] mx-auto bg-white shadow-2xl p-[0.75in] flex flex-col relative overflow-hidden mb-12 print:mb-0 print:break-after-page">
    {/* Page Header */}
    <div className="flex justify-between items-center border-b border-border pb-4 mb-8">
      <div className="flex items-center gap-2">
        <Image src="/logo.png" width={14} height={14} alt="Logo" />
        <span className="text-[10px] tracking-[0.3em] font-mono font-bold">
          FISCALIO
        </span>
      </div>
      <div className="text-[10px] tracking-[0.2em] text-muted-foreground font-mono uppercase">
        PLANTILLA_FACTURA_EXTRANJERA // {pageNumber}
      </div>
    </div>

    {children}

    {/* Footer */}
    <footer className="mt-auto pt-8 border-t border-border flex justify-between items-end">
      <div className="space-y-1">
        <div className="text-[10px] tracking-[0.2em] font-mono font-bold">
          FISCALIO.APP
        </div>
        <div className="text-[9px] tracking-[0.1em] text-muted-foreground font-mono uppercase">
          TASA_0%_IVA_CFDI_4.0
        </div>
      </div>
      <div className="text-[10px] tracking-[0.4em] font-mono">
        PG_{pageNumber}
      </div>
    </footer>
  </div>
);

const SectionHeader = ({
  number,
  title,
  color = "text-accent-rust",
}: {
  number: string;
  title: string;
  color?: string;
}) => (
  <div
    className={`text-[10px] tracking-[0.3em] ${color} font-mono font-bold uppercase mb-3`}
  >
    {number} {"//"} {title}
  </div>
);

const HighlightBox = ({
  title,
  children,
  variant = "dark",
}: {
  title: string;
  children: React.ReactNode;
  variant?: "dark" | "rust" | "amber" | "gray";
}) => {
  const styles = {
    dark: "bg-foreground text-background",
    rust: "bg-accent-rust text-white",
    amber: "bg-accent-amber text-white",
    gray: "bg-zinc-50 border-l-4 border-accent-rust",
  };
  return (
    <section className={`${styles[variant]} p-6 space-y-2`}>
      <div className="text-[9px] tracking-[0.3em] font-mono opacity-70 uppercase">
        {title}
      </div>
      <div className="text-sm leading-relaxed">{children}</div>
    </section>
  );
};

export default function PDFPreviewPage() {
  return (
    <div className="min-h-screen bg-zinc-100 py-12 px-4 print:p-0 print:bg-white font-mono">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @page {
          size: letter;
          margin: 0;
        }
        @media print {
          body {
            margin: 0;
            -webkit-print-color-adjust: exact;
          }
          .print-container {
            margin: 0 !important;
            box-shadow: none !important;
          }
        }
      `,
        }}
      />

      {/* PAGE 1: COVER */}
      <PageWrapper pageNumber="01">
        <div className="flex flex-col items-center justify-center flex-1 space-y-12">
          <Image src="/logo.png" width={80} height={80} alt="Logo" />
          <div className="text-center space-y-4">
            <h1
              className={`text-6xl font-bold tracking-tighter ${dmSans.className}`}
            >
              Plantilla de <br />
              <span className="text-accent-rust">Factura Extranjera</span>
            </h1>
            <p className="text-lg tracking-widest text-muted-foreground font-light uppercase">
              Configuración CFDI 4.0 para exportación de servicios a tasa 0% de
              IVA
            </p>
          </div>
          <div className="w-full h-64 bg-zinc-100 relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>
            <div className="text-zinc-300 font-mono text-[120px] font-bold select-none">
              TASA 0%
            </div>
          </div>
        </div>
      </PageWrapper>

      {/* PAGE 2: CONFIGURACIÓN EMISOR Y RECEPTOR */}
      <PageWrapper pageNumber="02">
        <main className="space-y-8">
          <SectionHeader number="01" title="DATOS DEL RECEPTOR EXTRANJERO" />
          <div className="space-y-4 text-sm leading-relaxed">
            <p>
              Para poder aplicar legalmente la tasa de IVA al 0% en la
              exportación de servicios en México, es obligatorio emitir la
              factura usando el RFC genérico extranjero, especificando su número
              de identificación fiscal y su residencia de forma correcta en el
              CFDI 4.0.
            </p>
          </div>

          <div className="border border-border">
            <table className="w-full text-left text-[11px] border-collapse">
              <thead className="bg-zinc-50 border-b border-border font-mono text-[9px]">
                <tr>
                  <th className="p-3 uppercase">Campo SAT</th>
                  <th className="p-3 uppercase">Valor Requerido</th>
                  <th className="p-3 uppercase">Descripción</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="p-3 font-bold">RFC Receptor</td>
                  <td className="p-3 text-accent-rust font-bold font-mono">
                    XEXX010101000
                  </td>
                  <td className="p-3">
                    RFC genérico obligatorio para clientes residentes en el
                    extranjero.
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-bold">Nombre o Razón Social</td>
                  <td className="p-3">Nombre legal del cliente</td>
                  <td className="p-3">
                    Debe coincidir exactamente con el nombre de tu cliente
                    extranjero.
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-bold">
                    Domicilio Fiscal (Código Postal)
                  </td>
                  <td className="p-3 font-mono">Tu CP de emisor</td>
                  <td className="p-3">
                    Regla del SAT: usa tu propio CP emisor para el RFC genérico.
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-bold">Residencia Fiscal</td>
                  <td className="p-3 font-mono">Clave de país (ej. USA)</td>
                  <td className="p-3">
                    Clave de 3 letras según el catálogo oficial de países del
                    SAT.
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-bold">NumRegIdTrib (Tax ID)</td>
                  <td className="p-3 font-mono">Tax ID / EIN / VAT</td>
                  <td className="p-3">
                    Identificador fiscal oficial que tu cliente utiliza en su
                    país.
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-bold">Régimen Fiscal</td>
                  <td className="p-3 font-mono">616</td>
                  <td className="p-3">
                    Clave "Sin obligaciones fiscales" requerida para el RFC
                    genérico.
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-bold">Uso del CFDI</td>
                  <td className="p-3 font-mono">S01</td>
                  <td className="p-3">
                    Clave "Sin efectos fiscales" obligatoria en la versión 4.0.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <HighlightBox title="REQUISITO_CRÍTICO_DE_IVA" variant="rust">
            <p>
              El artículo 29 de la Ley del IVA exige que los servicios sean
              aprovechados en el extranjero. Asegúrate de plasmar esto en tu
              contrato o propuesta de trabajo inicial.
            </p>
          </HighlightBox>
        </main>
      </PageWrapper>

      {/* PAGE 3: CONCEPTOS, IMPUESTOS Y SPEI */}
      <PageWrapper pageNumber="03">
        <main className="space-y-8">
          <SectionHeader number="02" title="CONCEPTOS E IMPUESTOS CFDI" />
          <div className="space-y-4 text-sm leading-relaxed">
            <p>
              La correcta clasificación de las claves de producto/servicio y las
              etiquetas de impuestos es lo que valida ante el SAT la aplicación
              de la tasa 0% en lugar del 16%.
            </p>
          </div>

          <div className="border border-border">
            <table className="w-full text-left text-[11px] border-collapse">
              <thead className="bg-zinc-50 border-b border-border font-mono text-[9px]">
                <tr>
                  <th className="p-3 uppercase">Parámetro</th>
                  <th className="p-3 uppercase">Clave / Valor</th>
                  <th className="p-3 uppercase">Detalle</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="p-3 font-bold">Clave de Producto/Servicio</td>
                  <td className="p-3 font-mono">Depende de tu rubro</td>
                  <td className="p-3">Asegúrate de usar la más exacta</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold">Clave de Unidad</td>
                  <td className="p-3 font-mono">E48</td>
                  <td className="p-3">
                    Unidad de servicio estándar en facturación de intangibles.
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-bold">Objeto de Impuesto</td>
                  <td className="p-3 font-mono">02</td>
                  <td className="p-3">
                    Clave "Sí objeto de impuesto". Aunque es tasa 0%, sí es
                    objeto.
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-bold">Impuesto Trasladado</td>
                  <td className="p-3 font-mono">IVA Tasa 0%</td>
                  <td className="p-3">
                    Debe declararse como base gravada a tasa cero. No exento.
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-bold">Exportación de Mercancías</td>
                  <td className="p-3 font-mono">02</td>
                  <td className="p-3">
                    Clave "Definitiva con clave A1" (Requerido para exportación
                    de productos).
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <SectionHeader number="03" title="REQUISITOS DEL FLUJO BANCARIO" />
          <div className="space-y-4 text-xs leading-relaxed">
            <p>
              El SAT exige comprobar la materialidad de la exportación de
              servicios a través del rastro de pago:
            </p>
            <div className="bg-zinc-50 border-l-4 border-accent-rust p-4 space-y-2">
              <p>
                <strong>1. Cuenta a tu Nombre:</strong> Los fondos deben
                ingresar desde el extranjero a una cuenta bancaria mexicana a tu
                nombre.
              </p>
              <p>
                <strong>2. Transferencia Internacional / SPEI:</strong> Conserva
                las fichas de SPEI o los comprobantes de cobro de plataformas
                (ej. Wise, Payoneer, Stripe) que muestren el origen
                internacional de los recursos.
              </p>
              <p>
                <strong>3. Contrato de Servicios:</strong> Se recomienda tener
                un contrato en inglés/español firmado digitalmente que ampare
                las tarifas y el servicio intangible entregado.
              </p>
            </div>
          </div>
        </main>
      </PageWrapper>

      {/* Instructions */}
      <div className="max-w-[8.5in] mx-auto mt-8 p-6 bg-accent-amber-muted/20 border border-accent-amber rounded-lg print:hidden">
        <h3 className="font-bold text-accent-amber mb-2">
          Instrucciones de Impresión:
        </h3>
        <ul className="text-sm space-y-2 list-disc list-inside text-foreground/80 font-mono">
          <li>Presiona Cmd+P (Mac) o Ctrl+P (Windows)</li>
          <li>Destino: Guardar como PDF</li>
          <li>Páginas: Todas</li>
          <li>Diseño: Vertical</li>
          <li>Márgenes: NINGUNO</li>
          <li>Gráficos de fondo: ACTIVADO</li>
        </ul>
      </div>
    </div>
  );
}
