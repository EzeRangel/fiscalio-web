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
import { CalculoResult, TipoIngreso, TipoCliente } from "@/lib/tax-calculator";
import { formatCurrency } from "@/lib/format-currency";

interface TaxReportEmailProps {
  result: CalculoResult;
  tipoIngreso: TipoIngreso;
  tipoCliente: TipoCliente;
  date: string;
}

const main = {
  backgroundColor: "#ffffff",
  fontFamily: 'ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace',
  padding: "40px 0",
};

const container = {
  margin: "0 auto",
  padding: "40px",
  width: "600px",
  maxWidth: "100%",
  border: "1px solid #e5e5e5",
};

const header = {
  marginBottom: "32px",
  borderBottom: "2px solid #000000",
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
};

const totalBox = {
  backgroundColor: "#000000",
  padding: "24px",
  marginTop: "24px",
  color: "#ffffff",
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
  tipoIngreso,
  tipoCliente,
  date,
}: TaxReportEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Tu Informe de Proyección Fiscal - Fiscalio</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={metadata}>
            <Row>
              <Column>DOCUMENTO: FIS_REPORT_{Math.random().toString(36).substring(7).toUpperCase()}</Column>
              <Column style={{ textAlign: "right" as const }}>FECHA: {date}</Column>
            </Row>
          </Section>

          <Section style={header}>
            <Text style={label}>FISCALIO // SISTEMA DE CONTROL</Text>
            <Heading style={h1}>Informe de Proyección Fiscal</Heading>
          </Section>

          <Section>
            <Text style={sectionTitle}>Parámetros de Entrada</Text>
            <Row style={row}>
              <Column style={label}>Jurisdicción</Column>
              <Column style={value}>{tipoIngreso === "NACIONAL" ? "LOCAL [MX]" : "GLOBAL [EXPORT]"}</Column>
            </Row>
            <Row style={row}>
              <Column style={label}>Tipo de Cliente</Column>
              <Column style={value}>{tipoCliente === "FISICA" ? "P. FÍSICA" : "P. MORAL"}</Column>
            </Row>
            <Row style={row}>
              <Column style={label}>Ingreso Bruto</Column>
              <Column style={value}>${formatCurrency(result.subtotal)}</Column>
            </Row>
          </Section>

          <Section>
            <Text style={sectionTitle}>Desglose de Impuestos</Text>
            <Row style={row}>
              <Column style={label}>(+) IVA TRASLADADO [16%]</Column>
              <Column style={value}>${formatCurrency(result.iva)}</Column>
            </Row>
            {result.retencionISR > 0 && (
              <Row style={row}>
                <Column style={label}>(-) Retención ISR [1.25%]</Column>
                <Column style={{ ...value, color: "#b34d3d" }}>-${formatCurrency(result.retencionISR)}</Column>
              </Row>
            )}
            {result.retencionIVA > 0 && (
              <Row style={row}>
                <Column style={label}>(-) Retención IVA [10.6%]</Column>
                <Column style={{ ...value, color: "#b34d3d" }}>-${formatCurrency(result.retencionIVA)}</Column>
              </Row>
            )}
            <Hr style={{ borderColor: "#e5e5e5", margin: "16px 0" }} />
            <Row style={row}>
              <Column style={label}>Depósito en Banco</Column>
              <Column style={value}>${formatCurrency(result.totalNeto)}</Column>
            </Row>
          </Section>

          <Section>
            <Text style={sectionTitle}>Liquidación SAT</Text>
            <Row style={row}>
              <Column style={label}>ISR Mensual a Pagar</Column>
              <Column style={{ ...value, color: result.isrNeto < 0 ? "#16a34a" : "#ea580c" }}>
                {result.isrNeto < 0 ? "+" : "-"}${formatCurrency(Math.abs(result.isrNeto))}
              </Column>
            </Row>
            <Row style={row}>
              <Column style={label}>IVA Mensual a Pagar</Column>
              <Column style={{ ...value, color: "#ea580c" }}>-${formatCurrency(result.ivaNeto)}</Column>
            </Row>

            <Section style={totalBox}>
              <Text style={totalLabel}>Utilidad Real Disponible</Text>
              <Text style={totalValue}>${formatCurrency(result.utilidadReal)}</Text>
            </Section>
          </Section>

          <Text style={footer}>
            Fiscalio // Control fiscal claro para RESICO // Q2 2026
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
