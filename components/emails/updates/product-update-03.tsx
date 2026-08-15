import * as React from "react";
import { Section, Text, Img, Link } from "@react-email/components";
import { EmailBaseLayout, emailStyles } from "../layout-primitives";

interface UpdateComponentProps {
  webMode?: boolean;
}

export function ProductUpdate03({ webMode = false }: UpdateComponentProps) {
  const metadata = {
    tag: "Product Update #03",
    title:
      "Deja de sumar facturas a mano: así funciona el panel de declaraciones",
    previewText:
      "Borrador automático, verificación y acuse en un solo lugar. Diseñado exclusivamente para RESICO.",
  };

  return (
    <EmailBaseLayout
      previewText={metadata.previewText}
      updateTag={metadata.tag}
      title={metadata.title}
      webMode={webMode}
    >
      <Section>
        <Text style={emailStyles.textContent}>Hola,</Text>
        <Text style={emailStyles.textContent}>
          Se acerca el día 17 del mes y la rutina suele ser la misma: buscar
          facturas (CFDIs) perdidas, abrir hojas de Excel y cruzar los dedos
          para que ninguna celda o cálculo de retención falle a última hora.
        </Text>
        <Text style={emailStyles.textContent}>
          En Fiscalio creemos que tu declaración mensual no debería sentirse
          como un examen sorpresa. Por eso, el panel de declaraciones no es una
          función que implementaremos en el futuro; estará disponible el primer
          día que uses la aplicación.
        </Text>
      </Section>

      <Section>
        <Img
          src="/panel-declaraciones.png"
          alt="Vista general de declaraciones"
          style={emailStyles.image}
        />
      </Section>

      <hr style={emailStyles.hr} />

      <Section style={{ marginBottom: "32px" }}>
        <Text style={emailStyles.sectionLabel}>
          [01] TU MES CONTABLE EN TIEMPO REAL
        </Text>
        <Text style={emailStyles.textContent}>
          Olvídate de hacer sumas el último día. Conforme importas tus CFDIs,
          Fiscalio calcula de manera automática tu base gravable, estima tu ISR
          (aplicando la tarifa RESICO mensual vigente) y desglosa el IVA
          trasladado y acreditable. Todo con una tarjeta de acceso rápido en tu
          dashboard principal que te recuerda tu próxima fecha límite.
        </Text>
        <Text style={emailStyles.textContent}>
          <strong>Beneficio:</strong> Tienes visibilidad diaria de lo que te
          tocará declarar, sin sorpresas ni cálculos de última hora.
        </Text>
      </Section>

      <hr style={emailStyles.hr} />

      <Section style={{ marginBottom: "32px" }}>
        <Text style={emailStyles.sectionLabel}>
          [02] EL SEMÁFORO DE TU FLUJO FISCAL
        </Text>
        <Text style={emailStyles.textContent}>
          Diseñamos un flujo visual sencillo para acompañarte en cada paso del
          proceso mensual:
        </Text>
        <ul style={emailStyles.list}>
          <li style={emailStyles.listItem}>
            <strong>🟡 Borrador:</strong> El cálculo preliminar generado
            automáticamente por tus facturas. Aquí revisas y clasificas
            movimientos.
          </li>
          <li style={emailStyles.listItem}>
            <strong>🟢 Verificada:</strong> Cuando confirmas que todo cuadra,
            bloqueas la declaración para proteger la información de
            modificaciones accidentales.
          </li>
          <li style={emailStyles.listItem}>
            <strong>✅ Archivada:</strong> Una vez presentada ante el SAT, subes
            tu acuse de recibo para guardarlo en tu historial permanente y
            cerrar tu mes fiscal.
          </li>
        </ul>
      </Section>

      <hr style={emailStyles.hr} />

      <Section style={{ marginBottom: "32px" }}>
        <Text style={emailStyles.sectionLabel}>
          [03] LÓGICA DE FLUJO DE EFECTIVO PARA RESICO PURA
        </Text>
        <Text style={emailStyles.textContent}>
          El régimen de RESICO funciona bajo base de efectivo: solo pagas
          impuestos por el dinero que realmente cobraste. Fiscalio aplica las
          reglas de RESICO cuidadosamente. Si recibes pagos en dólares, el
          sistema convierte cada transacción al tipo de cambio de la fecha de
          cobro y resta de forma exacta la retención del 1.25% efectuada por
          personas morales.
        </Text>
        <Text style={emailStyles.textContent}>
          <strong>Beneficio:</strong> Evitas pagar impuestos de más sobre
          facturas que no te han liquidado.
        </Text>
      </Section>

      <Section>
        <Img
          src="/detalle-declaracion.png"
          alt="Detalle de hoja contable mensual"
          style={emailStyles.image}
        />
      </Section>

      <hr style={emailStyles.hr} />

      <Section style={{ marginBottom: "32px" }}>
        <Text style={emailStyles.sectionLabel}>
          [04] DISEÑO DE HOJA CONTABLE TRADICIONAL
        </Text>
        <Text style={emailStyles.textContent}>
          La interfaz no parece un software corporativo del 2005, pero tampoco
          un algo exagerado con colores. Diseñamos el detalle como un formato de
          hoja contable clásica: renglones numerados, importes alineados a la
          derecha y balances limpios. Cada declaración incluye su bitácora de
          auditoría (para rastrear qué se cambió y cuándo) y permite la
          exportación a PDF en un segundo, por si quieres tomarlo como
          referencia.
        </Text>
      </Section>

      <hr style={emailStyles.hr} />

      <Section style={emailStyles.ctaSection}>
        <Link
          href="mailto:ezequiel@fiscalio.app?subject=Sugerencia%20para%20el%20Panel%20de%20Declaraciones"
          style={emailStyles.button}
        >
          Enviar mi Sugerencia / Feedback
        </Link>
        <Text
          style={{
            ...emailStyles.textContent,
            marginTop: "24px",
            fontSize: "12px",
            color: "#737373",
          }}
        >
          ¿Tienes alguna idea o duda sobre el panel de declaraciones? Responde a
          este correo o haz clic en el botón. Estamos en etapa temprana y cada
          opinión cuenta para definir el rumbo del producto.
        </Text>
      </Section>
    </EmailBaseLayout>
  );
}
