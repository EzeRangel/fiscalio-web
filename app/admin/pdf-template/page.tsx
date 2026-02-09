import Image from "next/image";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

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
        GUÍA_RESICO_2026 // {pageNumber}
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
          TU_ASISTENTE_FISCAL_INTELIGENTE
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
    {number} // {title}
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

export default function PDFTemplate() {
  return (
    <div className="min-h-screen bg-zinc-100 py-12 px-4 print:p-0 print:bg-white">
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
              className={`text-7xl font-bold tracking-tighter ${dmSans.className}`}
            >
              Guía Práctica <br />
              <span className="text-accent-rust">RESICO</span>
            </h1>
            <p className="text-lg tracking-widest text-muted-foreground font-light uppercase">
              Lo que sí y lo que no puedes hacer como persona física en México
            </p>
          </div>
          <div className="w-full h-64 bg-zinc-100 relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>
            <div className="text-zinc-300 font-mono text-[120px] font-bold select-none">
              2026
            </div>
          </div>
        </div>
      </PageWrapper>

      {/* PAGE 2: INTRO & FORMULA */}
      <PageWrapper pageNumber="02">
        <main className="space-y-8">
          <SectionHeader number="01" title="¿QUÉ ES RESICO? (SIN RODEOS)" />
          <div className="space-y-4 text-sm leading-relaxed">
            <p>
              Imagina que el SAT se cansó de que los pequeños contribuyentes
              (freelancers, emprendedores o quienes rentan propiedades) se
              complicaran la vida intentando deducir gastos con reglas
              complejas. El RESICO es la respuesta simplificada.
            </p>
            <p>
              Es un régimen fiscal para personas físicas con ingresos moderados.
              Su promesa: pagarás una tasa de ISR muy baja (1% a 2.5%), a cambio
              de no poder deducir casi ningún gasto. El SAT confía en que
              declararás tus ingresos reales y te aplica el impuesto más bajo
              que existe.
            </p>
          </div>

          <HighlightBox title="LA_FÓRMULA_MÁGICA">
            <p className="text-xl tracking-tight font-bold">
              Ingresos Cobrados <span className="text-accent-amber">×</span>{" "}
              Tasa Mínima de ISR <span className="text-accent-amber">=</span>{" "}
              Impuesto a pagar
            </p>
          </HighlightBox>

          <section className="space-y-3">
            <div className="text-[10px] tracking-[0.3em] text-muted-foreground font-mono uppercase">
              COMPARATIVA_DE_REGÍMENES
            </div>
            <div className="border border-border">
              <table className="w-full text-left text-[11px] border-collapse">
                <thead className="bg-zinc-50 border-b border-border font-mono text-[9px]">
                  <tr>
                    <th className="p-3 uppercase">Régimen</th>
                    <th className="p-3 uppercase">Tasa ISR</th>
                    <th className="p-3 uppercase">¿Deducciones?</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-3 font-bold">RESICO</td>
                    <td className="p-3 text-accent-rust font-bold">
                      1.0% a 2.5%
                    </td>
                    <td className="p-3 italic">NO</td>
                  </tr>
                  <tr>
                    <td className="p-3">Asalariados</td>
                    <td className="p-3">1.9% a 35%</td>
                    <td className="p-3 italic">SÍ (Personales)</td>
                  </tr>
                  <tr>
                    <td className="p-3">Act. Empresarial</td>
                    <td className="p-3">1.9% a 35%</td>
                    <td className="p-3 italic">SÍ (Autorizadas)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-3">
            <div className="text-[10px] tracking-[0.3em] text-muted-foreground font-mono uppercase">
              METAS DEL SAT
            </div>
            <div className="grid grid-cols-2 gap-6 text-[12px] leading-relaxed">
              <div className="space-y-1">
                <p className="font-bold">Facilitar el cumplimiento</p>
                <p className="text-muted-foreground">
                  Hace que pagar impuestos sea tan simple que la excusa de
                  &quot;es complicado&quot; desaparece.
                </p>
              </div>
              <div className="space-y-1">
                <p className="font-bold">Aumentar la recaudación</p>
                <p className="text-muted-foreground">
                  Incentiva la formalidad con tasas atractivas. Gana el
                  contribuyente y gana el SAT.
                </p>
              </div>
            </div>
          </section>
        </main>
      </PageWrapper>

      {/* PAGE 3: CONVENIENCE */}
      <PageWrapper pageNumber="03">
        <main className="space-y-8">
          <SectionHeader number="02" title="¿A QUIÉN LE CONVIENE?" />
          <div className="grid grid-cols-1 gap-4">
            <div className="border border-border p-4 space-y-2">
              <p className="text-sm font-bold">1. Ingresos moderados</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Tus ingresos anuales no deben superar los 3.5 millones de pesos
                mexicanos.
              </p>
            </div>
            <div className="border border-border p-4 space-y-2">
              <p className="text-sm font-bold">
                2. Gastos bajos o no indispensables
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Si tus costos de operación son mínimos (ej. software,
                consultoría), la baja tasa de ISR supera cualquier deducción.
              </p>
            </div>
            <div className="border border-border p-4 space-y-2">
              <p className="text-sm font-bold">3. Máxima simplicidad</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Olvídate de perseguir facturas de cada pequeño gasto (gasolina,
                papelería) para justificar deducciones.
              </p>
            </div>
          </div>

          <HighlightBox title="CASO_DE_ÉXITO" variant="gray">
            <p className="italic text-muted-foreground">
              <strong>Diseñador Freelancer:</strong> Ingresa $50,000/mes. Gastos
              mínimos. En RESICO, paga una tasa bajísima y elimina la
              contabilidad compleja.
            </p>
          </HighlightBox>

          <SectionHeader
            number="03"
            title="¿A QUIÉN NO LE CONVIENE?"
            color="text-destructive"
          />
          <div className="space-y-4 text-sm leading-relaxed">
            <p>
              Si tu negocio tiene un <strong>margen de utilidad bajo</strong>{" "}
              (gastos altos), RESICO puede ser un error.
            </p>
            <div className="bg-destructive/5 border border-destructive/20 p-4 text-[11px] space-y-2">
              <p>
                <strong>Ejemplo:</strong> Vendes un producto en $100 que te
                cuesta $80. En régimen tradicional pagas sobre la ganancia
                ($20). En RESICO pagas sobre los $100 totales.
              </p>
              <p>
                <strong>Deducciones Personales:</strong> Gastos médicos,
                colegiaturas o hipotecas NO se pueden aplicar en RESICO.
              </p>
            </div>
          </div>
        </main>
      </PageWrapper>

      {/* PAGE 4: LIMITS & ACTIVITIES */}
      <PageWrapper pageNumber="04">
        <main className="space-y-10">
          <section className="space-y-4">
            <div className="text-[10px] tracking-[0.3em] text-muted-foreground font-mono uppercase">
              LÍMITES_DE_INGRESOS_ANUALES
            </div>
            <div className="text-3xl font-bold tracking-tight text-center py-8 border-y-2 border-foreground bg-zinc-50/50">
              $3,500,000.00 MXN
            </div>
            <div className="grid grid-cols-2 gap-4 text-[11px] text-muted-foreground italic">
              <p>
                • Si superas este monto, el SAT te sacará de RESICO al año
                siguiente.
              </p>
              <p>
                • Si inicias a mitad de año, el límite se prorratea
                proporcionalmente.
              </p>
            </div>
          </section>

          <SectionHeader number="04" title="ACTIVIDADES PERMITIDAS" />
          <div className="grid grid-cols-2 gap-8 text-[11px]">
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="font-bold border-b border-border pb-1">
                  Permitidas (Físicas)
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Actividades Empresariales</li>
                  <li>Servicios Profesionales</li>
                  <li>Arrendamiento</li>
                  <li>Actividades Primarias</li>
                </ul>
              </div>
              <p className="text-[10px] italic">
                Incluye comercios, tiendas en línea, talleres, consultores,
                arquitectos, etc.
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-bold border-b border-border pb-1 text-destructive uppercase">
                Excluidas (¡Cuidado!)
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Socios o Accionistas de Morales</li>
                <li>Residentes en el extranjero</li>
                <li>Ingresos vía REFIPRES</li>
                <li>Solo salarios (sin actividad)</li>
              </ul>
            </div>
          </div>

          <HighlightBox title="CLAVE_PARA_ENTENDER" variant="dark">
            <p>
              RESICO está pensado para actividades económicas simples y
              controlables. Si tus ingresos provienen de estructuras
              empresariales complejas, este régimen no es para ti.
            </p>
          </HighlightBox>
        </main>
      </PageWrapper>

      {/* PAGE 5: OBLIGATIONS & DEDUCTIONS */}
      <PageWrapper pageNumber="05">
        <main className="space-y-8">
          <SectionHeader number="05" title="LA VERDAD INCÓMODA" />
          <p className="text-sm font-bold">
            ISR bajo no significa menos responsabilidad.
          </p>
          <div className="grid grid-cols-1 gap-4 text-xs leading-relaxed">
            <div className="flex gap-4 items-start border-l-2 border-accent-amber pl-4 py-2">
              <span className="font-mono font-bold text-accent-amber text-[10px] pt-0.5">
                01
              </span>
              <div>
                <p className="font-bold uppercase tracking-wider mb-1">
                  Declarar Mensualmente
                </p>
                <p className="text-muted-foreground">
                  Debes presentar tu declaración a más tardar el 17 del mes
                  siguiente.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start border-l-2 border-accent-amber pl-4 py-2">
              <span className="font-mono font-bold text-accent-amber text-[10px] pt-0.5">
                02
              </span>
              <div>
                <p className="font-bold uppercase tracking-wider mb-1">
                  Emitir CFDI
                </p>
                <p className="text-muted-foreground">
                  Debes emitir factura electrónica por cada ingreso, sea público
                  general o cliente específico.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start border-l-2 border-accent-amber pl-4 py-2">
              <span className="font-mono font-bold text-accent-amber text-[10px] pt-0.5">
                03
              </span>
              <div>
                <p className="font-bold uppercase tracking-wider mb-1">
                  Mantener el Orden
                </p>
                <p className="text-muted-foreground">
                  Debes conservar facturas de compras para efectos de IVA y
                  justificación de recursos.
                </p>
              </div>
            </div>
          </div>

          <section className="space-y-4 pt-6 border-t border-border">
            <SectionHeader
              number="06"
              title="RESICO NO PERMITE DEDUCIR GASTOS"
            />
            <p className="text-sm">
              Significa que el SAT no te permite restar tus gastos (equipo,
              renta, gasolina, etc.) de tus ingresos antes de calcular el
              impuesto ISR.
            </p>

            <div className="border border-border">
              <table className="w-full text-left text-[11px] border-collapse">
                <thead className="bg-zinc-50 border-b border-border font-mono text-[9px]">
                  <tr>
                    <th className="p-3 uppercase">Concepto</th>
                    <th className="p-3 uppercase">Actividad Tradicional</th>
                    <th className="p-3 uppercase">RESICO</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-3 font-bold">Ingresos</td>
                    <td className="p-3">$10,000</td>
                    <td className="p-3 font-bold">$10,000</td>
                  </tr>
                  <tr>
                    <td className="p-3 italic">Gastos Deducibles</td>
                    <td className="p-3">($3,000)</td>
                    <td className="p-3 text-muted-foreground">$0</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Base para ISR</td>
                    <td className="p-3">$7,000</td>
                    <td className="p-3 font-bold">$10,000</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-accent-rust">
                      Impuesto (Tasa)
                    </td>
                    <td className="p-3">$700 (10%)</td>
                    <td className="p-3 font-bold text-accent-rust">
                      $100-$250 (1-2.5%)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </PageWrapper>

      {/* PAGE 6: SAT INFO CROSSING */}
      <PageWrapper pageNumber="06">
        <main className="space-y-8">
          <SectionHeader number="07" title="VIGILANCIA FISCAL DIRECTA" />
          <p className="text-sm">
            El SAT utiliza tres fuentes para cruzar tu información
            automáticamente:
          </p>

          <div className="space-y-6">
            <div className="grid grid-cols-[80px_1fr] gap-4 items-start">
              <div className="bg-zinc-100 p-2 text-[10px] font-mono font-bold text-center">
                CFDI INGRESO
              </div>
              <div className="text-xs leading-relaxed">
                <p className="font-bold mb-1">Las facturas que tú emites</p>
                <p className="text-muted-foreground">
                  Cada factura emitida queda reportada al SAT y forma parte de
                  su cálculo de ingresos.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[80px_1fr] gap-4 items-start">
              <div className="bg-zinc-100 p-2 text-[10px] font-mono font-bold text-center">
                RETENCIONES
              </div>
              <div className="text-xs leading-relaxed">
                <p className="font-bold mb-1">
                  Reportes de terceros (Personas Morales)
                </p>
                <p className="text-muted-foreground">
                  Las empresas te retienen ISR e informan al SAT, confirmando
                  que recibiste el ingreso.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[80px_1fr] gap-4 items-start">
              <div className="bg-zinc-100 p-2 text-[10px] font-mono font-bold text-center">
                BANCOS
              </div>
              <div className="text-xs leading-relaxed">
                <p className="font-bold mb-1">Depósitos Bancarios</p>
                <p className="text-muted-foreground">
                  Los bancos reportan movimientos. Inconsistencias claras pueden
                  iniciar revisiones por discrepancia.
                </p>
              </div>
            </div>
          </div>

          <HighlightBox title="EL_VISOR_DEL_SAT" variant="gray">
            <p className="text-xs">
              El SAT genera una propuesta basada en CFDI emitidos, retenciones e
              info bancaria. Si tu control interno no coincide,{" "}
              <strong>el criterio del SAT prevalece</strong>. Por eso es crítico
              que tus facturas estén perfectas.
            </p>
          </HighlightBox>

          <section className="space-y-4 pt-6 border-t border-border">
            <SectionHeader
              number="08"
              title="CONTROL DE GASTOS: AÚN ES VITAL"
            />
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="space-y-1">
                <p className="font-bold text-accent-amber">Control de IVA</p>
                <p className="text-muted-foreground">
                  El IVA sí se acredita. Sin facturas de compras, pagarás IVA de
                  más.
                </p>
              </div>
              <div className="space-y-1">
                <p className="font-bold text-accent-amber">
                  Conciliación Bancaria
                </p>
                <p className="text-muted-foreground">
                  Todo depósito debe estar amparado por un CFDI o se considera
                  ingreso omitido.
                </p>
              </div>
            </div>
          </section>
        </main>
      </PageWrapper>

      {/* PAGE 7: IVA IN RESICO */}
      <PageWrapper pageNumber="07">
        <main className="space-y-8">
          <SectionHeader number="09" title="IVA: LO QUE REALMENTE IMPORTA" />
          <p className="text-sm">
            El IVA funciona de forma independiente al ISR. Aquí es donde el
            control de compras representa un ahorro real.
          </p>

          <div className="bg-foreground text-background p-8 text-center space-y-4">
            <div className="text-[10px] tracking-[0.4em] opacity-60 font-mono">
              REGLA_DE_ORO_DEL_IVA
            </div>
            <p className="text-2xl font-bold tracking-tight">
              IVA Cobrado <span className="text-accent-amber">−</span> IVA
              Pagado <span className="text-accent-amber">=</span> IVA a Pagar
            </p>
            <p className="text-[10px] italic opacity-70">
              Si no pides facturas de compra, terminarás entregando más IVA del
              necesario.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <section className="space-y-3">
              <div className="text-[10px] font-mono font-bold uppercase border-b border-border pb-1">
                Condiciones para Acreditar
              </div>
              <ul className="text-xs space-y-3">
                <li>
                  <p className="font-bold">1. Estrictamente Indispensable</p>
                  <p className="text-muted-foreground">
                    Directamente relacionado con tu actividad (Laptop sí,
                    Despensa no).
                  </p>
                </li>
                <li>
                  <p className="font-bold">2. Efectivamente Pagado</p>
                  <p className="text-muted-foreground">
                    El IVA solo se resta cuando ya salió el dinero de tu cuenta.
                  </p>
                </li>
              </ul>
            </section>
            <section className="space-y-3">
              <div className="text-[10px] font-mono font-bold uppercase border-b border-border pb-1">
                Gastos Comunes Acreditables
              </div>
              <ul className="text-xs space-y-1 text-muted-foreground list-disc list-inside">
                <li>Renta de oficina / local</li>
                <li>Equipo de cómputo / herramientas</li>
                <li>Internet, luz y teléfono</li>
                <li>Mercancía o insumos</li>
                <li>Servicios profesionales de terceros</li>
                <li>Gasolina (con pago electrónico)</li>
              </ul>
            </section>
          </div>
        </main>
      </PageWrapper>

      {/* PAGE 8: CFDI & ERRORS */}
      <PageWrapper pageNumber="08">
        <main className="space-y-8">
          <SectionHeader
            number="10"
            title="ERRORES FRECUENTES AL ACREDITAR IVA"
          />
          <div className="border border-border">
            <table className="w-full text-left text-[11px] border-collapse">
              <thead className="bg-zinc-50 border-b border-border font-mono text-[9px]">
                <tr>
                  <th className="p-3 uppercase">Error Común</th>
                  <th className="p-3 uppercase">Consecuencia</th>
                  <th className="p-3 uppercase">Cómo Evitarlo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-[10px]">
                <tr>
                  <td className="p-3 font-bold">No conciliar el pago</td>
                  <td className="p-3 text-destructive">
                    Acreditas IVA antes de pagarlo.
                  </td>
                  <td className="p-3">
                    El IVA solo se resta cuando el dinero <strong>salió</strong>{" "}
                    de tu cuenta.
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-bold">No solicitar PUE/PPD</td>
                  <td className="p-3 text-destructive">Factura mal emitida.</td>
                  <td className="p-3">
                    Si pagas después, exige <strong>Complemento de Pago</strong>
                    .
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-bold">Estatus Cancelado</td>
                  <td className="p-3 text-destructive">La factura no sirve.</td>
                  <td className="p-3">
                    Revisa que el CFDI esté <strong>Vigente</strong> en el
                    portal.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <SectionHeader
            number="11"
            title="TIPOS DE CFDI QUE DEBES CONSERVAR"
          />
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div className="p-4 bg-zinc-50 border border-zinc-200">
              <p className="font-bold text-accent-rust mb-1 uppercase tracking-wider">
                CFDI de Ingreso
              </p>
              <p className="text-muted-foreground">
                Los que tú emites. Base para el cálculo de ISR.
              </p>
            </div>
            <div className="p-4 bg-zinc-50 border border-zinc-200">
              <p className="font-bold text-accent-rust mb-1 uppercase tracking-wider">
                CFDI de Egreso
              </p>
              <p className="text-muted-foreground">
                Facturas de compra. Base para acreditar el IVA.
              </p>
            </div>
            <div className="p-4 bg-zinc-50 border border-zinc-200">
              <p className="font-bold text-accent-rust mb-1 uppercase tracking-wider">
                Complemento de Pago
              </p>
              <p className="text-muted-foreground">
                Vital para facturas a crédito (PPD) ya liquidadas.
              </p>
            </div>
            <div className="p-4 bg-zinc-50 border border-zinc-200">
              <p className="font-bold text-accent-rust mb-1 uppercase tracking-wider">
                Retenciones
              </p>
              <p className="text-muted-foreground">
                Comprueban impuestos ya retenidos por clientes.
              </p>
            </div>
          </div>
        </main>
      </PageWrapper>

      {/* PAGE 9: XML VS PDF & FIELDS */}
      <PageWrapper pageNumber="09">
        <main className="space-y-8">
          <SectionHeader number="12" title="POR QUÉ EL XML ES MÁS IMPORTANTE" />
          <p className="text-sm">
            La gente guarda el PDF, pero es solo una representación visual.{" "}
            <strong>El documento fiscal real es el XML</strong>.
          </p>

          <div className="grid grid-cols-2 gap-6 items-center">
            <div className="space-y-4">
              <div className="bg-zinc-100 p-4 font-mono text-[10px] space-y-1">
                <p>&lt;cfdi:Comprobante ...&gt;</p>
                <p className="pl-4 text-accent-rust font-bold">
                  Total=&quot;1000.00&quot;
                </p>
                <p className="pl-4 text-accent-rust font-bold">
                  MetodoPago=&quot;PUE&quot;
                </p>
                <p className="pl-4">
                  &lt;cfdi:Emisor RFC=&quot;...&quot; /&gt;
                </p>
                <p>&lt;/cfdi:Comprobante&gt;</p>
              </div>
              <p className="text-[10px] italic text-muted-foreground uppercase tracking-widest text-center">
                EL_ARCHIVO_REAL
              </p>
            </div>
            <div className="space-y-3 text-xs leading-relaxed">
              <p>
                • <strong>XML:</strong> Contiene datos estructurados que el SAT
                procesa automáticamente.
              </p>
              <p>
                • <strong>PDF:</strong> Es fácil de leer, pero no tiene validez
                legal sin el XML.
              </p>
              <p className="font-bold">
                Acción clave: Nunca confíes solo en el PDF. Siempre archiva el
                XML.
              </p>
            </div>
          </div>

          <SectionHeader
            number="13"
            title="CAMPOS CRÍTICOS QUE EL SAT REVISA"
          />
          <ul className="grid grid-cols-1 gap-2 text-xs">
            <li className="flex justify-between border-b border-border py-2">
              <span className="font-bold">Tu RFC (Receptor)</span>
              <span className="text-muted-foreground italic">
                Debe ser exacto
              </span>
            </li>
            <li className="flex justify-between border-b border-border py-2">
              <span className="font-bold">Régimen Fiscal (Receptor)</span>
              <span className="text-accent-rust">
                621 - Régimen Simplificado de Confianza
              </span>
            </li>
            <li className="flex justify-between border-b border-border py-2">
              <span className="font-bold">Uso de CFDI</span>
              <span className="text-muted-foreground">
                G03 - Gastos en general (o específico)
              </span>
            </li>
            <li className="flex justify-between border-b border-border py-2">
              <span className="font-bold">Método de Pago</span>
              <span className="text-muted-foreground font-mono">
                PUE (Una exhibición) vs PPD (Diferido)
              </span>
            </li>
            <li className="flex justify-between border-b border-border py-2">
              <span className="font-bold">Impuestos Desglosados</span>
              <span className="text-muted-foreground italic">
                IVA (16%) y Retenciones (1.25% ISR)
              </span>
            </li>
          </ul>
        </main>
      </PageWrapper>

      {/* PAGE 10: ERRORS & CANCELATIONS */}
      <PageWrapper pageNumber="10">
        <main className="space-y-8">
          <SectionHeader number="14" title="SI UNA FACTURA TIENE ERRORES..." />
          <p className="text-sm">
            ¡Nunca declares con facturas que sabes que tienen errores! Es mejor
            no usar ese CFDI que declararlo incorrectamente.
          </p>

          <div className="space-y-4">
            <div className="bg-zinc-50 border border-border p-4">
              <p className="text-xs font-bold uppercase tracking-widest mb-2">
                Protocolo de Corrección
              </p>
              <ol className="text-xs space-y-2 list-decimal list-inside text-muted-foreground">
                <li>Contacta al proveedor inmediatamente.</li>
                <li>
                  Solicita la <strong>Cancelación y Sustitución</strong>.
                </li>
                <li>
                  La nueva factura debe ir ligada a la anterior (Relación 04).
                </li>
                <li>Verifica el acuse de cancelación exitosa.</li>
              </ol>
            </div>
          </div>

          <SectionHeader number="15" title="ERRORES COMUNES EN RESICO" />
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <p className="text-[10px] font-mono font-bold text-accent-amber uppercase">
                Error #1: No Conciliar
              </p>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Declarar lo que dice el &quot;Visor del SAT&quot; sin revisar si
                realmente lo cobraste. En RESICO mandan los{" "}
                <strong>ingresos efectivamente cobrados</strong>.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-[10px] font-mono font-bold text-accent-amber uppercase">
                Error #2: Mezclar Gastos
              </p>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Usar la misma cuenta para el súper y para el negocio. Dificulta
                demostrar qué ingresos pertenecen a tu actividad en una
                auditoría.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-[10px] font-mono font-bold text-accent-amber uppercase">
                Error #3: Declarar Fuera de Tiempo
              </p>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Acumular meses sin declarar puede sacarte definitivamente de
                RESICO, enviándote a un régimen mucho más caro.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-[10px] font-mono font-bold text-accent-amber uppercase">
                Error #4: Confiar en el Visor
              </p>
              <p className="text-xs leading-relaxed text-muted-foreground">
                El visor es solo una referencia. La declaración final debe
                basarse en tu <strong>conciliación bancaria</strong> y archivos
                XML.
              </p>
            </div>
          </div>
        </main>
      </PageWrapper>

      {/* PAGE 11: CONTROL WITHOUT ACCOUNTANT */}
      <PageWrapper pageNumber="11">
        <main className="space-y-8">
          <SectionHeader
            number="16"
            title="CÓMO LLEVAR CONTROL SIN SER CONTADOR"
          />
          <p className="text-sm">
            RESICO fue diseñado para ser simple. No necesitas contabilidad
            compleja, solo claridad sobre tu flujo de efectivo.
          </p>

          <HighlightBox title="LA_REGLA_DE_3_DE_INGRESOS" variant="rust">
            <p className="font-bold text-lg mb-2">
              Tu objetivo es que estos tres números sean iguales:
            </p>
            <ul className="space-y-2 text-xs">
              <li className="flex gap-2">
                <span className="font-mono opacity-70">1.</span> Total de
                Ingresos en tu Estado de Cuenta
              </li>
              <li className="flex gap-2">
                <span className="font-mono opacity-70">2.</span> Total de CFDI
                de Ingreso Cobrados (PUE)
              </li>
              <li className="flex gap-2">
                <span className="font-mono opacity-70">3.</span> Base de ISR en
                tu declaración mensual
              </li>
            </ul>
          </HighlightBox>

          <section className="space-y-4 pt-6 border-t border-border">
            <div className="text-[10px] tracking-[0.3em] text-muted-foreground font-mono uppercase">
              HISTORIAL_ORGANIZADO
            </div>
            <div className="border border-border text-[10px]">
              <div className="grid grid-cols-3 bg-zinc-50 border-b border-border font-mono p-2 uppercase">
                <div>Documento</div>
                <div>Propósito</div>
                <div>Formato Ideal</div>
              </div>
              <div className="grid grid-cols-3 border-b border-border p-2">
                <div className="font-bold">CFDI Ingreso</div>
                <div>Demostrar lo cobrado.</div>
                <div className="font-mono">XML + PDF</div>
              </div>
              <div className="grid grid-cols-3 border-b border-border p-2">
                <div className="font-bold">CFDI Egreso</div>
                <div>Demostrar IVA.</div>
                <div className="font-mono">XML + PDF</div>
              </div>
              <div className="grid grid-cols-3 p-2">
                <div className="font-bold">Estado de Cuenta</div>
                <div>Probar flujo real.</div>
                <div className="font-mono uppercase text-accent-rust">
                  VITAL
                </div>
              </div>
            </div>
          </section>
        </main>
      </PageWrapper>

      {/* PAGE 12: FISCALIO & BENEFITS */}
      <PageWrapper pageNumber="12">
        <main className="space-y-8">
          <SectionHeader number="17" title="EL FUTURO DEL CONTROL FISCAL" />
          <p className="text-sm">
            Una herramienta bien diseñada automatiza lo repetitivo y te da paz
            mental.
          </p>

          <div className="bg-zinc-50 border-2 border-foreground p-8 space-y-6">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" width={24} height={24} alt="Logo" />
              <span className="text-xl font-bold tracking-tighter">
                FISCALIO
              </span>
            </div>

            <div className="grid grid-cols-2 gap-6 text-xs leading-relaxed">
              <div className="space-y-2">
                <p className="font-bold border-b border-foreground pb-1">
                  ¿Qué soluciona?
                </p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Organiza tus XML automáticamente.</li>
                  <li>• Clasifica PUE vs PPD sin errores.</li>
                  <li>• Concilia tus ingresos vs bancos.</li>
                  <li>• Alerta sobre facturas canceladas.</li>
                </ul>
              </div>
              <div className="space-y-2">
                <p className="font-bold border-b border-foreground pb-1">
                  ¿Qué no promete?
                </p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• No reemplaza a un contador.</li>
                  <li>• No presenta declaraciones por ti.</li>
                  <li>• No corrige decisiones pasadas.</li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-foreground/10 text-center">
              <p className="text-[10px] tracking-[0.2em] font-mono font-bold mb-1">
                ÚNETE A LA LISTA DE ESPERA
              </p>
              <p className="text-sm italic">
                Acceso beta, precio fundador y tutoriales exclusivos.
              </p>
            </div>
          </div>

          <section className="space-y-4 pt-12 text-center">
            <div className="text-[10px] tracking-[0.5em] text-accent-rust font-mono font-bold uppercase">
              CONCLUSIÓN
            </div>
            <p
              className={`text-3xl font-bold tracking-tighter ${dmSans.className}`}
            >
              La claridad fiscal es una <br /> ventaja competitiva.
            </p>
            <p className="text-xs text-muted-foreground max-w-md mx-auto leading-relaxed">
              Mantener el orden reduce el estrés y te permite enfocarte en
              crecer tu negocio sin vivir con la duda de si &quot;algo no
              cuadra&quot;. RESICO es simple, pero no es automático.
            </p>
          </section>
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
