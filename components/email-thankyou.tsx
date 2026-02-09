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

interface EmailTemplateProps {
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

const benefitDesc = {
  fontSize: "14px",
  color: "#737373",
  lineHeight: "20px",
  margin: "0",
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

export function EmailTemplate({ email, recordId }: EmailTemplateProps) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
  const downloadUrl = `${baseUrl}/api/download-pdf?id=${recordId}`;

  return (
    <Html>
      <Head />
      <Preview>Ya estás en la waitlist de Fiscalio</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logoSection}>
            <Text style={brandText}>FISCALIO</Text>
          </Section>

          <Section>
            <Text style={badge}>Registro Confirmado</Text>
            <Heading style={h1}>
              Ya tienes un lugar en la lista de espera.
            </Heading>
            <Text style={introText}>
              Hola, tu registro ha sido exitoso. Hemos reservado tu lugar para
              el lanzamiento de Fiscalio en Q2 2026.
            </Text>
          </Section>

          <Section style={{ marginBottom: "40px" }}>
            <Text style={sectionLabel}>[01] BENEFICIOS DE ESPERA</Text>
            <div style={benefitBox}>
              <Text style={benefitTitle}>Acceso Prioritario</Text>
              <Text style={benefitDesc}>
                Serás de los primeros en probar la herramienta y darnos feedback
                antes del lanzamiento general.
              </Text>
            </div>
            <div style={benefitBox}>
              <Text style={benefitTitle}>Precio Fundador Exclusivo</Text>
              <Text style={benefitDesc}>
                Aseguras un precio especial de $419 MXN (pago único) para
                siempre al momento de la compra.
              </Text>
            </div>
            <div style={benefitBox}>
              <Text style={benefitTitle}>Contenido RESICO</Text>
              <Text style={benefitDesc}>
                Recibirás actualizaciones y guías prácticas enfocadas en
                optimizar tu situación fiscal en RESICO.
              </Text>
            </div>
          </Section>

          <Section style={ctaSection}>
            <Text style={sectionLabel}>[02] EMPIEZA AQUÍ</Text>
            <Heading style={ctaTitle}>Guía Práctica RESICO</Heading>
            <Text style={ctaText}>
              Preparamos esta guía para ayudarte a evitar errores comunes,
              entender qué aplica en RESICO y cómo funcionan ISR e IVA en la
              práctica.
            </Text>
            <Link href={downloadUrl} style={button}>
              Descargar Guía (PDF)
            </Link>
          </Section>

          <Section style={footer}>
            <Text style={signature}>Fiscalio</Text>
            <Text style={subSignature}>Control fiscal claro para RESICO</Text>
            <Text style={disclaimer}>
              Fiscalio no sustituye a un contador. Te ayuda a tener tu
              información fiscal en orden.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
