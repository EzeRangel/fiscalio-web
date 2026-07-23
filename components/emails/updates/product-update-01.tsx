import * as React from "react";
import { Section, Text, Img, Link } from "@react-email/components";
import { EmailBaseLayout, emailStyles } from "../layout-primitives";

interface UpdateComponentProps {
  webMode?: boolean;
}

export function ProductUpdate01({ webMode = false }: UpdateComponentProps) {
  const metadata = {
    tag: "Product Update #01",
    title: "Rediseñando el Detalle de Factura",
    previewText:
      "XML vs PDF vs Realidad: ¿Por qué es tan difícil leer un CFDI?",
  };

  return (
    <EmailBaseLayout
      previewText={metadata.previewText}
      updateTag={metadata.tag}
      title={metadata.title}
      webMode={webMode}
    >
      <Section>
        <Text style={emailStyles.textContent}>
          Esta semana me enfoqué en resolver una de las partes más frustrantes
          de la gestión fiscal: entender qué hay realmente dentro de una factura
          sin volverse loco entre tablas y códigos. Me di cuenta de que el CFDI
          existe en tres formatos (XML, PDF y lo que el usuario entiende), y es
          ahí donde se pierde la información.
        </Text>
      </Section>

      <Section>
        <Img
          src="https://fiscalio.app/detalle-factura.png"
          alt="Rediseño de Factura"
          style={emailStyles.image}
        />
      </Section>

      <Section style={{ marginBottom: "40px" }}>
        <Text style={emailStyles.sectionLabel}>[01] EL PROBLEMA</Text>
        <div style={emailStyles.benefitBox}>
          <Text style={emailStyles.benefitTitle}>La brecha de información</Text>
          <Text style={emailStyles.benefitDesc}>
            El XML es perfecto para máquinas pero ilegible. El PDF es visual,
            pero te obliga a buscar manualmente impuestos, relaciones y
            complementos.
          </Text>
        </div>

        <Text style={emailStyles.sectionLabel}>[02] LA OBSERVACIÓN</Text>
        <div style={emailStyles.benefitBox}>
          <Text style={emailStyles.benefitTitle}>Datos sin contexto</Text>
          <Text style={emailStyles.benefitDesc}>
            Identificar rápidamente qué Complementos de Pago están relacionados
            o qué impuestos se trasladaron no debería requerir leer tablas
            confusas una por una.
          </Text>
        </div>

        <Text style={emailStyles.sectionLabel}>[03] LA SOLUCIÓN</Text>
        <div style={emailStyles.benefitBox}>
          <Text style={emailStyles.benefitTitle}>
            Una vista con significado
          </Text>
          <Text style={emailStyles.benefitDesc}>
            Diseñé una interfaz que reorganiza el XML: muestra complementos
            vinculados, aclara impuestos al instante y conecta la factura con su
            movimiento bancario correspondiente.
          </Text>
        </div>
      </Section>
    </EmailBaseLayout>
  );
}
