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
  Link,
} from "@react-email/components";
import { APP_URL } from "@/lib/constants";

interface EmailExportTemplateProps {
  email: string;
  recordId: string;
}

const main = {
  backgroundColor: "#fdfdfc",
  fontFamily:
    'ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace',
  padding: "40px 0",
};

const container = {
  margin: "0 auto",
  padding: "0 20px",
  width: "600px",
  maxWidth: "100%",
};

const logoSection = {
  marginBottom: "48px",
};

const brandText = {
  fontSize: "12px",
  fontWeight: "500",
  letterSpacing: "0.1em",
  color: "#262626",
  textTransform: "uppercase" as const,
  margin: "0",
  fontFamily: "'DM Sans', sans-serif",
};

const badge = {
  padding: "4px 12px",
  border: "1px solid rgba(179, 77, 61, 0.3)",
  color: "#b34d3d",
  fontSize: "10px",
  letterSpacing: "0.2em",
  textTransform: "uppercase" as const,
  display: "inline-block",
  marginBottom: "24px",
};

const h1 = {
  color: "#262626",
  fontSize: "32px",
  fontWeight: "500",
  lineHeight: "1.2",
  margin: "0 0 24px",
  fontFamily: "system-ui, -apple-system, sans-serif",
  letterSpacing: "-0.02em",
};

const introText = {
  color: "#525252",
  fontSize: "14px",
  lineHeight: "24px",
  margin: "0 0 40px",
};

const sectionLabel = {
  fontSize: "10px",
  letterSpacing: "0.3em",
  color: "#a3a3a3",
  marginBottom: "16px",
  display: "block",
  textTransform: "uppercase" as const,
};

const benefitBox = {
  padding: "24px",
  border: "1px solid #e5e5e5",
  marginBottom: "12px",
};

const benefitTitle = {
  fontSize: "16px",
  fontWeight: "500",
  color: "#262626",
  margin: "0 0 8px",
  fontFamily: "system-ui, -apple-system, sans-serif",
};

const ctaSection = {
  backgroundColor: "#262626",
  padding: "48px 40px",
  textAlign: "center" as const,
  marginTop: "48px",
};

const ctaTitle = {
  color: "#fdfdfc",
  fontSize: "24px",
  fontWeight: "500",
  margin: "0 0 16px",
  fontFamily: "system-ui, -apple-system, sans-serif",
};

const ctaText = {
  color: "#a3a3a3",
  fontSize: "14px",
  lineHeight: "24px",
  margin: "0 0 32px",
};

const button = {
  backgroundColor: "#fdfdfc",
  color: "#262626",
  padding: "16px 32px",
  textDecoration: "none",
  fontSize: "12px",
  fontWeight: "500",
  letterSpacing: "0.15em",
  textTransform: "uppercase" as const,
  display: "inline-block",
};

const footer = {
  marginTop: "64px",
  paddingTop: "32px",
  borderTop: "1px solid #e5e5e5",
};

const signature = {
  fontSize: "14px",
  fontWeight: "500",
  color: "#262626",
  margin: "0",
};

const subSignature = {
  fontSize: "12px",
  color: "#737373",
  margin: "4px 0 0",
};

const disclaimer = {
  fontSize: "10px",
  color: "#a3a3a3",
  lineHeight: "16px",
  marginTop: "24px",
  textTransform: "uppercase" as const,
};

export function EmailExportTemplate({ email, recordId }: EmailExportTemplateProps) {
  const baseUrl = APP_URL;
  const downloadUrl = `${baseUrl}/api/download-pdf?id=${recordId}&file=template`;

  return (
    <Html>
      <Head />
      <Preview>Tu Plantilla de Factura Extranjera está lista</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logoSection}>
            <Text style={brandText}>FISCALIO</Text>
          </Section>

          <Section>
            <Text style={badge}>Registro Confirmado</Text>
            <Heading style={h1}>
              Aquí tienes la plantilla para facturar al extranjero.
            </Heading>
            <Text style={introText}>
              Hola, tu registro ha sido exitoso. Te enviamos la plantilla solicitada y hemos guardado tu lugar para la beta privada de Fiscalio.
            </Text>
          </Section>

          <Section style={{ marginBottom: "40px" }}>
            <Text style={sectionLabel}>[01] CONFIGURACIÓN CFDI IVA 0%</Text>
            <div style={benefitBox}>
              <Text style={benefitTitle}>Datos del Emisor y Receptor</Text>
              <div style={{ marginTop: "12px", border: "1px solid #e5e5e5", padding: "16px", backgroundColor: "#fbfbfa" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12px" }}>
                  <tbody>
                    <tr style={{ borderBottom: "1px solid #f0f0f0" }}>
                      <td style={{ padding: "8px 0", color: "#737373", fontWeight: "bold" }}>RFC Receptor:</td>
                      <td style={{ padding: "8px 0", textAlign: "right", fontFamily: "monospace", color: "#b34d3d", fontWeight: "bold" }}>XEXX010101000</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #f0f0f0" }}>
                      <td style={{ padding: "8px 0", color: "#737373", fontWeight: "bold" }}>Residencia Fiscal:</td>
                      <td style={{ padding: "8px 0", textAlign: "right", color: "#262626" }}>[País del Cliente, ej. USA]</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #f0f0f0" }}>
                      <td style={{ padding: "8px 0", color: "#737373", fontWeight: "bold" }}>Tax ID (EIN/RegIdTrib):</td>
                      <td style={{ padding: "8px 0", textAlign: "right", color: "#262626" }}>[Tax ID fiscal de tu cliente]</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #f0f0f0" }}>
                      <td style={{ padding: "8px 0", color: "#737373", fontWeight: "bold" }}>Uso de CFDI:</td>
                      <td style={{ padding: "8px 0", textAlign: "right", fontFamily: "monospace", color: "#262626" }}>S01 (Sin efectos fiscales)</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #f0f0f0" }}>
                      <td style={{ padding: "8px 0", color: "#737373", fontWeight: "bold" }}>Régimen Receptor:</td>
                      <td style={{ padding: "8px 0", textAlign: "right", color: "#262626" }}>616 (Sin obligaciones fiscales)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div style={benefitBox}>
              <Text style={benefitTitle}>Concepto e Impuestos</Text>
              <div style={{ marginTop: "12px", border: "1px solid #e5e5e5", padding: "16px", backgroundColor: "#fbfbfa" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12px" }}>
                  <tbody>
                    <tr style={{ borderBottom: "1px solid #f0f0f0" }}>
                      <td style={{ padding: "8px 0", color: "#737373", fontWeight: "bold" }}>Clave Prod/Serv:</td>
                      <td style={{ padding: "8px 0", textAlign: "right", fontFamily: "monospace", color: "#262626" }}>81111508 o 81111600 (Software)</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #f0f0f0" }}>
                      <td style={{ padding: "8px 0", color: "#737373", fontWeight: "bold" }}>Clave Unidad:</td>
                      <td style={{ padding: "8px 0", textAlign: "right", fontFamily: "monospace", color: "#262626" }}>E48 (Unidad de servicio)</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #f0f0f0" }}>
                      <td style={{ padding: "8px 0", color: "#737373", fontWeight: "bold" }}>Objeto de Impuesto:</td>
                      <td style={{ padding: "8px 0", textAlign: "right", fontFamily: "monospace", color: "#b34d3d", fontWeight: "bold" }}>02 (Sí objeto de impuesto)</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #f0f0f0" }}>
                      <td style={{ padding: "8px 0", color: "#737373", fontWeight: "bold" }}>Exportación:</td>
                      <td style={{ padding: "8px 0", textAlign: "right", fontFamily: "monospace", color: "#b34d3d", fontWeight: "bold" }}>02 (Definitiva)</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #f0f0f0" }}>
                      <td style={{ padding: "8px 0", color: "#737373", fontWeight: "bold" }}>Tasa o Cuota IVA:</td>
                      <td style={{ padding: "8px 0", textAlign: "right", fontFamily: "monospace", color: "#b34d3d", fontWeight: "bold" }}>Tasa 0% (Exportación de servicios)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Section>

          <Section style={ctaSection}>
            <Text style={sectionLabel}>[02] TU RECURSO</Text>
            <Heading style={ctaTitle}>Plantilla de Factura Extranjera</Heading>
            <Text style={ctaText}>
              Preparamos esta plantilla para ayudarte a configurar el RFC genérico, el Tax ID y las claves clave de exportación para asegurar tu tasa de IVA del 0% sin riesgo.
            </Text>
            <Link href={downloadUrl} style={button}>
              Descargar Plantilla (PDF)
            </Link>
          </Section>

          <Section style={footer}>
            <Text style={signature}>Fiscalio</Text>
            <Text style={subSignature}>Control fiscal claro para RESICO</Text>
            <Text style={disclaimer}>
              Fiscalio no sustituye a un contador. Te ayuda a tener tu información fiscal en orden.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
