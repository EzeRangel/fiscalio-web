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
  Hr,
  Img,
} from "@react-email/components";

interface UpdateSection {
  label: string;
  title: string;
  description: string;
}

interface EmailUpdateTemplateProps {
  title: string;
  previewText: string;
  content: string;
  ctaLabel?: string;
  ctaUrl?: string;
  updateTag?: string;
  imageUrl?: string;
  sections?: UpdateSection[];
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

const textContent = {
  color: "#525252",
  fontSize: "14px",
  lineHeight: "24px",
  margin: "0 0 32px",
};

const mainImage = {
  width: "100%",
  height: "auto",
  borderRadius: "8px",
  border: "1px solid #e5e5e5",
  marginBottom: "40px",
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
  margin: "48px 0",
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#262626",
  color: "#fdfdfc",
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
  TextAlign: "center",
  textTransform: "uppercase" as const,
};

const hr = {
  borderColor: "#e5e5e5",
  margin: "40px 0",
};

export function EmailUpdateTemplate({
  title,
  previewText,
  content,
  ctaLabel,
  ctaUrl,
  updateTag = "Actualización de Fiscalio",
  imageUrl,
  sections = [],
}: EmailUpdateTemplateProps) {
  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logoSection}>
            <Text style={brandText}>FISCALIO</Text>
          </Section>

          <Section>
            <Text style={badge}>{updateTag}</Text>
            <Heading style={h1}>{title}</Heading>
            <Text style={textContent}>{content}</Text>
          </Section>

          {imageUrl && (
            <Section>
              <Img src={imageUrl} alt={title} style={mainImage} />
            </Section>
          )}

          {sections.length > 0 && (
            <Section style={{ marginBottom: "40px" }}>
              {sections.map((section, index) => (
                <React.Fragment key={index}>
                  <Text style={sectionLabel}>{section.label}</Text>
                  <div style={benefitBox}>
                    <Text style={benefitTitle}>{section.title}</Text>
                    <Text style={benefitDesc}>{section.description}</Text>
                  </div>
                </React.Fragment>
              ))}
            </Section>
          )}

          {ctaLabel && ctaUrl && (
            <Section style={ctaSection}>
              <Link href={ctaUrl} style={button}>
                {ctaLabel}
              </Link>
            </Section>
          )}

          <Hr style={hr} />

          <Section style={footer}>
            <Text style={signature}>Fiscalio</Text>
            <Text style={subSignature}>Control fiscal claro para RESICO</Text>
            <Text style={disclaimer}>
              Recibes este correo porque estás en la lista de espera de
              Fiscalio. Fiscalio no sustituye a un contador.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
