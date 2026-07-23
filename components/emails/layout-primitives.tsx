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
} from "@react-email/components";

// Shared styles following docs/DESIGN.md
export const emailStyles = {
  main: {
    backgroundColor: "#fdfdfc",
    fontFamily:
      'ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace',
    padding: "40px 0",
  },
  container: {
    margin: "0 auto",
    padding: "0 20px",
    width: "600px",
    maxWidth: "100%",
  },
  logoSection: {
    marginBottom: "48px",
  },
  brandText: {
    fontSize: "12px",
    fontWeight: "500",
    letterSpacing: "0.1em",
    color: "#262626",
    textTransform: "uppercase" as const,
    margin: "0",
    fontFamily: "'DM Sans', sans-serif",
  },
  badge: {
    padding: "4px 12px",
    border: "1px solid rgba(179, 77, 61, 0.3)",
    color: "#b34d3d",
    fontSize: "10px",
    letterSpacing: "0.2em",
    textTransform: "uppercase" as const,
    display: "inline-block",
    marginBottom: "24px",
  },
  h1: {
    color: "#262626",
    fontSize: "32px",
    fontWeight: "500",
    lineHeight: "1.2",
    margin: "0 0 24px",
    fontFamily: "system-ui, -apple-system, sans-serif",
    letterSpacing: "-0.02em",
  },
  textContent: {
    color: "#525252",
    fontSize: "14px",
    lineHeight: "24px",
    margin: "0 0 32px",
  },
  sectionLabel: {
    fontSize: "10px",
    letterSpacing: "0.3em",
    color: "#a3a3a3",
    marginBottom: "16px",
    display: "block",
    textTransform: "uppercase" as const,
  },
  benefitBox: {
    padding: "24px",
    border: "1px solid #e5e5e5",
    marginBottom: "24px",
    backgroundColor: "#ffffff",
  },
  benefitTitle: {
    fontSize: "16px",
    fontWeight: "500",
    color: "#262626",
    margin: "0 0 8px",
    fontFamily: "system-ui, -apple-system, sans-serif",
  },
  benefitDesc: {
    fontSize: "14px",
    color: "#737373",
    lineHeight: "20px",
    margin: "0",
  },
  ctaSection: {
    margin: "48px 0",
    textAlign: "center" as const,
  },
  button: {
    backgroundColor: "#262626",
    color: "#fdfdfc",
    padding: "16px 32px",
    textDecoration: "none",
    fontSize: "12px",
    fontWeight: "500",
    letterSpacing: "0.15em",
    textTransform: "uppercase" as const,
    display: "inline-block",
  },
  footer: {
    marginTop: "64px",
    paddingTop: "32px",
    borderTop: "1px solid #e5e5e5",
  },
  signature: {
    fontSize: "14px",
    fontWeight: "500",
    color: "#262626",
    margin: "0",
  },
  subSignature: {
    fontSize: "12px",
    color: "#737373",
    margin: "4px 0 0",
  },
  disclaimer: {
    fontSize: "10px",
    color: "#a3a3a3",
    lineHeight: "16px",
    marginTop: "24px",
    textTransform: "uppercase" as const,
  },
  hr: {
    borderColor: "#e5e5e5",
    margin: "40px 0",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse" as const,
    marginBottom: "24px",
    border: "1px solid #e5e5e5",
  },
  th: {
    backgroundColor: "#f5f5f4",
    border: "1px solid #e5e5e5",
    padding: "10px 12px",
    fontSize: "11px",
    fontWeight: "600",
    color: "#262626",
    textAlign: "left" as const,
    textTransform: "uppercase" as const,
    letterSpacing: "0.05em",
  },
  td: {
    border: "1px solid #e5e5e5",
    padding: "10px 12px",
    fontSize: "12px",
    color: "#525252",
    lineHeight: "18px",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
    border: "1px solid #e5e5e5",
    marginBottom: "32px",
    marginTop: "16px",
  },
  list: {
    margin: "0 0 24px",
    paddingLeft: "20px",
    color: "#525252",
    fontSize: "14px",
    lineHeight: "22px",
  },
  listItem: {
    marginBottom: "8px",
  }
};

interface EmailBaseLayoutProps {
  previewText: string;
  updateTag: string;
  title: string;
  children: React.ReactNode;
  webMode?: boolean;
}

export function EmailBaseLayout({
  previewText,
  updateTag,
  title,
  children,
  webMode = false,
}: EmailBaseLayoutProps) {
  if (webMode) {
    return (
      <div className="max-w-[600px] mx-auto px-4 py-8 bg-[#fdfdfc] border border-border rounded-lg shadow-sm font-mono text-left">
        {/* Header / Logo */}
        <div style={{ marginBottom: "48px" }}>
          <span className="text-[12px] font-medium tracking-[0.1em] text-[#262626] uppercase font-sans">
            FISCALIO
          </span>
        </div>

        {/* Heading block */}
        <div>
          <span className="inline-block px-3 py-1 border border-accent-rust/30 text-accent-rust text-[10px] tracking-[0.2em] uppercase mb-6 font-mono">
            {updateTag}
          </span>
          <h1 className="text-2xl md:text-3xl font-display font-medium text-[#262626] tracking-tight leading-tight mb-6">
            {title}
          </h1>
        </div>

        {/* Core Body Content */}
        {children}

        <hr className="my-10 border-border" />

        {/* Footer block */}
        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-sm font-medium text-[#262626] m-0">Fiscalio</p>
          <p className="text-xs text-muted-foreground mt-1">Control fiscal claro para RESICO</p>
          <p className="text-[10px] text-muted-foreground mt-6 uppercase leading-relaxed">
            Recibes este correo porque estás en la beta privada de
            Fiscalio. Fiscalio no sustituye a un contador.
          </p>
        </div>
      </div>
    );
  }

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={emailStyles.main}>
        <Container style={emailStyles.container}>
          {/* Header / Logo */}
          <Section style={emailStyles.logoSection}>
            <Text style={emailStyles.brandText}>FISCALIO</Text>
          </Section>

          {/* Heading block */}
          <Section>
            <Text style={emailStyles.badge}>{updateTag}</Text>
            <Heading style={emailStyles.h1}>{title}</Heading>
          </Section>

          {/* Core Body Content */}
          {children}

          <Hr style={emailStyles.hr} />

          {/* Footer block */}
          <Section style={emailStyles.footer}>
            <Text style={emailStyles.signature}>Fiscalio</Text>
            <Text style={emailStyles.subSignature}>Control fiscal claro para RESICO</Text>
            <Text style={emailStyles.disclaimer}>
              Recibes este correo porque estás en la beta privada de
              Fiscalio. Fiscalio no sustituye a un contador.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
