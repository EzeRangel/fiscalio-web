import * as React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Section,
  Hr,
  Row,
  Column,
} from "@react-email/components";
import {
  CalculoResult,
  GeneralRegimeResult,
  TipoIngreso,
  TipoCliente,
} from "@/lib/tax-calculator";
import { formatCurrency } from "@/lib/format-currency";

interface TaxReportEmailProps {
  result: CalculoResult;
  generalRegimeResult?: GeneralRegimeResult;
  gastosPercent?: number;
  tipoIngreso: TipoIngreso;
  tipoCliente: TipoCliente;
  date: string;
  reportId: string;
}

const main = {
  backgroundColor: "#fcfaf6",
  fontFamily:
    'ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace',
  padding: "40px 0",
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "40px",
  width: "600px",
  maxWidth: "100%",
  border: "1px solid #e5e2db",
};

const header = {
  marginBottom: "32px",
  borderBottom: "2px solid #3a3a3a",
  paddingBottom: "16px",
};

const metadata = {
  fontSize: "10px",
  color: "#737373",
  textTransform: "uppercase" as const,
  letterSpacing: "0.1em",
  marginBottom: "24px",
};

const h1 = {
  fontSize: "24px",
  fontWeight: "bold",
  textTransform: "uppercase" as const,
  margin: "0",
  letterSpacing: "-0.02em",
  color: "#3a3a3a",
};

const sectionTitle = {
  fontSize: "10px",
  fontWeight: "bold",
  textTransform: "uppercase" as const,
  letterSpacing: "0.2em",
  color: "#737373",
  borderBottom: "1px solid #e5e5e5",
  paddingBottom: "8px",
  marginBottom: "16px",
  marginTop: "32px",
};

const ivaBox = {
  backgroundColor: "rgba(180, 83, 9, 0.04)",
  border: "1px solid rgba(180, 83, 9, 0.15)",
  padding: "20px",
  marginTop: "16px",
  marginBottom: "16px",
};

const isrBox = {
  backgroundColor: "rgba(251, 191, 36, 0.04)",
  border: "1px solid rgba(251, 191, 36, 0.15)",
  padding: "20px",
  marginTop: "16px",
  marginBottom: "16px",
};

const row = {
  padding: "8px 0",
};

const label = {
  fontSize: "12px",
  color: "#737373",
  textTransform: "uppercase" as const,
};

const value = {
  fontSize: "14px",
  fontWeight: "bold",
  textAlign: "right" as const,
  color: "#3a3a3a",
};

const totalBox = {
  backgroundColor: "#3a3a3a",
  padding: "24px",
  marginTop: "32px",
  color: "#fcfaf6",
};

const comparisonBox = {
  border: "1px solid #e5e5e5",
  padding: "20px",
  marginTop: "24px",
};

const comparisonNote = {
  fontSize: "11px",
  color: "#737373",
  lineHeight: "1.5",
  marginTop: "0",
};

const watch = {
  fontSize: "10px",
  color: "#a3a3a3",
  lineHeight: "1.5",
  textTransform: "uppercase" as const,
  letterSpacing: "0.08em",
  marginTop: "16px",
  marginBottom: "0",
};

const totalLabel = {
  fontSize: "10px",
  textTransform: "uppercase" as const,
  letterSpacing: "0.2em",
  margin: "0 0 8px",
};

const totalValue = {
  fontSize: "32px",
  fontWeight: "bold",
  margin: "0",
};

const footer = {
  marginTop: "48px",
  fontSize: "10px",
  color: "#a3a3a3",
  textAlign: "center" as const,
  textTransform: "uppercase" as const,
  letterSpacing: "0.1em",
};

export function TaxReportEmail({
  result,
  generalRegimeResult,
  gastosPercent,
  tipoIngreso,
  tipoCliente,
  date,
  reportId,
}: TaxReportEmailProps) {
  const resicoIsr = result.isrNeto < 0 ? 0 : result.isrNeto;
  const diferencia = generalRegimeResult
    ? generalRegimeResult.isrNeto - resicoIsr
    : null;

  return (
    <Html>
      <Head />
      <Preview>Tu Proyección Fiscal - Fiscalio</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={metadata}>
            <Row>
              <Column>ID: {reportId}</Column>
              <Column style={{ textAlign: "right" as const }}>
                FECHA: {date}
              </Column>
            </Row>
          </Section>

          <Section style={header}>
            <Text style={label}>FISCALIO // SIMULACIÓN</Text>
            <Heading style={h1}>Proyección Fiscal RESICO</Heading>
          </Section>

          <Section>
            <Text style={sectionTitle}>Parámetros de Entrada</Text>
            <Row style={row}>
              <Column style={label}>¿Cuánto te pagaron?</Column>
              <Column style={value}>${formatCurrency(result.subtotal)}</Column>
            </Row>
            <Row style={row}>
              <Column style={label}>¿Cliente mexicano?</Column>
              <Column style={value}>
                {tipoIngreso === "NACIONAL" ? "SÍ" : "NO"}
              </Column>
            </Row>
            {tipoIngreso === "NACIONAL" && (
              <Row style={row}>
                <Column style={label}>¿Cliente empresa?</Column>
                <Column style={value}>
                  {tipoCliente === "MORAL" ? "SÍ" : "NO"}
                </Column>
              </Row>
            )}
          </Section>

          <Section style={ivaBox}>
            <Text
              style={{
                ...sectionTitle,
                marginTop: 0,
                borderBottom: "none",
                paddingBottom: 0,
                marginBottom: 12,
                color: "#b45309",
              }}
            >
              Bóveda IVA (Impuesto Indirecto)
            </Text>
            <Row style={row}>
              <Column style={label}>
                IVA que cobraste ({tipoIngreso === "NACIONAL" ? "16%" : "0%"})
              </Column>
              <Column style={value}>${formatCurrency(result.iva)}</Column>
            </Row>
            {result.retencionIVA > 0 && (
              <Row style={row}>
                <Column style={label}>(-) Retención de IVA (10.6%)</Column>
                <Column style={{ ...value, color: "#ce2c31" }}>
                  -${formatCurrency(result.retencionIVA)}
                </Column>
              </Row>
            )}
            <Hr
              style={{ borderColor: "rgba(180, 83, 9, 0.15)", margin: "8px 0" }}
            />
            <Row style={row}>
              <Column
                style={{ ...label, fontWeight: "bold", color: "#b45309" }}
              >
                IVA neto a separar
              </Column>
              <Column
                style={{ ...value, fontWeight: "bold", color: "#b45309" }}
              >
                ${formatCurrency(result.ivaNeto)}
              </Column>
            </Row>
          </Section>

          <Section style={isrBox}>
            <Text
              style={{
                ...sectionTitle,
                marginTop: 0,
                borderBottom: "none",
                paddingBottom: 0,
                marginBottom: 12,
                color: "#d97706",
              }}
            >
              Bóveda ISR (Impuesto Directo)
            </Text>
            <Row style={row}>
              <Column style={label}>
                ISR mensual (tasa {(result.tasaAplicada * 100).toFixed(2)}%)
              </Column>
              <Column style={value}>${formatCurrency(result.isrBruto)}</Column>
            </Row>
            {result.retencionISR > 0 && (
              <Row style={row}>
                <Column style={label}>(-) Retención de ISR (1.25%)</Column>
                <Column style={{ ...value, color: "#ce2c31" }}>
                  -${formatCurrency(result.retencionISR)}
                </Column>
              </Row>
            )}
            <Hr
              style={{
                borderColor: "rgba(251, 191, 36, 0.15)",
                margin: "8px 0",
              }}
            />
            <Row style={row}>
              <Column
                style={{ ...label, fontWeight: "bold", color: "#d97706" }}
              >
                {result.isrNeto < 0 ? "Saldo a favor" : "ISR neto a separar"}
              </Column>
              <Column
                style={{
                  ...value,
                  fontWeight: "bold",
                  color: result.isrNeto < 0 ? "#16a34a" : "#d97706",
                }}
              >
                {result.isrNeto < 0 ? "+" : ""}$
                {formatCurrency(Math.abs(result.isrNeto))}
              </Column>
            </Row>
          </Section>

          <Section style={totalBox}>
            <Text style={totalLabel}>Tu Neto Real (Disponible)</Text>
            <Text style={totalValue}>
              ${formatCurrency(result.utilidadReal)}
            </Text>
          </Section>

          {generalRegimeResult && gastosPercent !== undefined && (
            <Section style={comparisonBox}>
              <Text
                style={{
                  ...sectionTitle,
                  marginTop: 0,
                  borderBottom: "none",
                  paddingBottom: 0,
                  marginBottom: 12,
                  color: "#3a3a3a",
                }}
              >
                Comparativa de ISR: RESICO vs. Régimen General
              </Text>
              <Text style={comparisonNote}>
                ISR estimado del mes en ambos regímenes. Para el régimen general
                se asume un {gastosPercent}% de gastos deducibles. Este cálculo
                es una referencia; tu situación real puede variar según tus
                deducciones y la acumulación del ejercicio.
              </Text>
              <Row style={row}>
                <Column style={label}>
                  Régimen General (tasa sobre utilidad)
                </Column>
                <Column style={value}>
                  ${formatCurrency(generalRegimeResult.isrBruto)}
                </Column>
              </Row>
              {generalRegimeResult.retencionISR > 0 && (
                <Row style={row}>
                  <Column style={label}>(-) Retención ISR (10%)</Column>
                  <Column style={{ ...value, color: "#ce2c31" }}>
                    -${formatCurrency(generalRegimeResult.retencionISR)}
                  </Column>
                </Row>
              )}
              <Hr style={{ borderColor: "#e5e2e2", margin: "8px 0" }} />
              <Row style={row}>
                <Column style={{ ...label, fontWeight: "bold", color: "#3a3a3a" }}>
                  Régimen General · ISR neto
                </Column>
                <Column style={{ ...value, fontWeight: "bold" }}>
                  ${formatCurrency(generalRegimeResult.isrNeto)}
                </Column>
              </Row>

              <Row style={{ ...row, marginTop: "8px" }}>
                <Column style={label}>RESICO · ISR a pagar</Column>
                <Column style={value}>${formatCurrency(resicoIsr)}</Column>
              </Row>

              <Text
                style={{
                  ...sectionTitle,
                  borderTop: "1px solid #e5e5e5",
                  paddingBottom: 0,
                  marginTop: "20px",
                  marginBottom: 8,
                  color: diferencia! >= 0 ? "#b45309" : "#3a3a3a",
                  fontSize: "11px",
                }}
              >
                {diferencia! >= 0
                  ? `Con RESICO tu ISR estimado es $${formatCurrency(diferencia!)} menor al mes`
                  : `El ISR estimado del régimen general es $${formatCurrency(
                      Math.abs(diferencia!),
                    )} menor al mes`}
              </Text>
              <Text style={watch}>
                Esto no es una recomendación de régimen. Evalúa tu situación con
                un contador: deducciones, obligaciones y el límite de ingresos
                de cada régimen.
              </Text>
            </Section>
          )}

          <Text style={footer}>
            Fiscalio // Control fiscal claro para RESICO
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
