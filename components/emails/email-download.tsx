import * as React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Section,
} from "@react-email/components";

interface EmailDownloadTemplateProps {
  downloadUrl: string;
  hashes?: {
    win?: string;
    mac?: string;
  };
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
  fontSize: "28px",
  fontWeight: "500",
  fontFamily: "'DM Sans', sans-serif",
  margin: "0 0 16px",
  lineHeight: "1.2",
};

const body = {
  color: "#525252",
  fontSize: "14px",
  lineHeight: "1.7",
  margin: "0 0 16px",
};

const section = {
  margin: "32px 0",
  padding: "24px",
  border: "1px solid #e5e5e5",
  backgroundColor: "#fafaf8",
};

const button = {
  backgroundColor: "#262626",
  color: "#fcfaf6",
  padding: "14px 28px",
  textDecoration: "none",
  fontSize: "12px",
  letterSpacing: "0.15em",
  textTransform: "uppercase" as const,
  display: "inline-block",
};

const mono = {
  color: "#262626",
  fontSize: "12px",
  wordBreak: "break-all" as const,
  margin: "0 0 4px",
};

const footer = {
  color: "#a3a3a3",
  fontSize: "11px",
  lineHeight: "1.6",
  marginTop: "48px",
};

export default function EmailDownloadTemplate({
  downloadUrl,
  hashes,
}: EmailDownloadTemplateProps) {
  return (
    <Html>
      <Head />
      <Preview>Tu descarga de Fiscalio está lista</Preview>
      <Body style={main}>
        <Container style={container}>
          <p style={brandText}>FISCALIO</p>
          <div style={badge}>PAGO_CONFIRMADO</div>
          <Heading style={h1}>Gracias por apoyar a Fiscalio</Heading>
          <Text style={body}>
            Tu pago fue confirmado. Ya puedes descargar Fiscalio para Windows o
            macOS desde el siguiente enlace:
          </Text>
          <Section>
            <Button href={downloadUrl} style={button}>
              Descargar Fiscalio
            </Button>
          </Section>
          <Section style={section}>
            <Text style={{ ...body, marginBottom: "8px", fontWeight: 600 }}>
              Verifica la integridad de tu descarga
            </Text>
            <Text style={body}>
              Compara el hash SHA-256 del instalador descargado contra estos
              valores:
            </Text>
            {(hashes?.win || hashes?.mac) && (
              <div>
                {hashes?.win && (
                  <Text style={{ ...mono, fontWeight: 600 }}>
                    Windows:{" "}
                    <span style={{ fontWeight: 400 }}>{hashes.win}</span>
                  </Text>
                )}
                {hashes?.mac && (
                  <Text style={{ ...mono, fontWeight: 600 }}>
                    macOS: <span style={{ fontWeight: 400 }}>{hashes.mac}</span>
                  </Text>
                )}
              </div>
            )}
            {!hashes?.win && !hashes?.mac && (
              <Text style={{ ...mono, margin: "0" }}>
                Los hashes también están disponibles en la página de descarga.
              </Text>
            )}
            <Text style={{ ...body, marginTop: "16px", marginBottom: "0" }}>
              macOS: si Gatekeeper bloquea la app (Sequoia o superior), ve a{" "}
              <strong>Configuración → Privacidad y seguridad</strong> y haz clic
              en &quot;Abrir de todas formas&quot;.
            </Text>
            <Text style={{ ...body, marginTop: "8px", marginBottom: "0" }}>
              Windows: si SmartScreen muestra una advertencia, haz clic en
              &quot;Más información&quot; y luego en &quot;Ejecutar de todas
              formas&quot;.
            </Text>
          </Section>
          <Text style={body}>
            Si tienes cualquier problema con la descarga o la instalación,
            responde este correo y te ayudo personalmente.
          </Text>
          <Text style={footer}>
            Enviado por Fiscalio · Este enlace es personal y está asociado a tu
            compra.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
