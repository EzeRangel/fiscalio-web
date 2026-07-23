import * as React from "react";
import { Section, Text, Img, Link } from "@react-email/components";
import { EmailBaseLayout, emailStyles } from "../layout-primitives";

interface UpdateComponentProps {
  webMode?: boolean;
}

export function ProductUpdate02({ webMode = false }: UpdateComponentProps) {
  const metadata = {
    tag: "Product Update #02",
    title: "Tu panel financiero. Un vistazo y sabes dónde estás",
    previewText:
      "Tu mes en 4 números, carga de CFDIs en tiempo real y visibilidad de flujo.",
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
          En el update anterior viste el detalle de factura. Hoy te presentamos
          el <strong>Panel de Control</strong>: la pantalla que ves cada vez que
          abres Fiscalio.
        </Text>
        <Text style={emailStyles.textContent}>
          Sin rodeos, esto es lo que ganas:
        </Text>
      </Section>

      <hr style={emailStyles.hr} />

      {/* Section 1 */}
      <Section style={{ marginBottom: "32px" }}>
        <Text style={emailStyles.sectionLabel}>[01] TU MES EN 4 NÚMEROS</Text>
        <Text style={emailStyles.textContent}>
          Ya no tienes que abrir Excel, sumar ingresos, restar gastos y calcular
          si el mes fue positivo. El panel te lo pone enfrente:
        </Text>

        <table style={emailStyles.table}>
          <thead>
            <tr>
              <th style={emailStyles.th}>Qué ves</th>
              <th style={emailStyles.th}>Por qué importa</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={emailStyles.td}>
                <strong>Ingresos cobrados</strong>
              </td>
              <td style={emailStyles.td}>
                Lo que realmente tienes en el bolsillo (base de efectivo, no
                promesas de pago)
              </td>
            </tr>
            <tr>
              <td style={emailStyles.td}>
                <strong>Egresos pagados</strong>
              </td>
              <td style={emailStyles.td}>Lo que ya salió de tu cuenta</td>
            </tr>
            <tr>
              <td style={emailStyles.td}>
                <strong>Flujo de efectivo</strong>
              </td>
              <td style={emailStyles.td}>
                ¿Ganaste o perdiste dinero este mes?
              </td>
            </tr>
            <tr>
              <td style={emailStyles.td}>
                <strong>Próxima declaración</strong>
              </td>
              <td style={emailStyles.td}>La fecha que no debes olvidar</td>
            </tr>
          </tbody>
        </table>

        <Text style={emailStyles.textContent}>
          <strong>Beneficio:</strong> Tomas decisiones con datos reales en
          segundos, sin hacer cuentas. Cambia de mes con el selector para ver
          históricos.
        </Text>

        <Img
          src="https://fiscalio.app/dashboard-screenshot-001.jpg"
          alt="Tarjetas de Resumen Financiero"
          style={emailStyles.image}
        />
      </Section>

      <hr style={emailStyles.hr} />

      {/* Section 2 */}
      <Section style={{ marginBottom: "32px" }}>
        <Text style={emailStyles.sectionLabel}>[02] IMPORTACIÓN SIMPLE</Text>
        <Text style={emailStyles.textContent}>
          Sabemos que recibir decenas de XML al mes y tener que organizarlos uno
          por uno es desgastante. Con Fiscalio:
        </Text>

        <ul style={emailStyles.list}>
          <li style={emailStyles.listItem}>
            Arrastras los archivos al panel y todo el proceso ocurre
            automáticamente.
          </li>
          <li style={emailStyles.listItem}>
            <strong>Detección de duplicados</strong> por hash y UUID: si ya
            importaste esa factura, lo sabes al instante.
          </li>
          <li style={emailStyles.listItem}>
            <strong>Clasificación contable automática</strong>: el sistema
            aprende de tus elecciones y cada vez acierta más.
          </li>
          <li style={emailStyles.listItem}>
            Soporta CFDI 3.3, 4.0, complementos de pago y PUE (creación
            automática del pago).
          </li>
        </ul>

        <Text style={emailStyles.textContent}>
          <strong>Beneficio:</strong> Ahorras minutos valiosos cada vez que
          importas. No vuelves a perder una factura en una carpeta perdida.
        </Text>

        <Img
          src="https://fiscalio.app/dashboard-screenshot-002.jpg"
          alt="Zona de Carga de Invoices"
          style={emailStyles.image}
        />
      </Section>

      <hr style={emailStyles.hr} />

      {/* Section 3 */}
      <Section style={{ marginBottom: "32px" }}>
        <Text style={emailStyles.sectionLabel}>[03] ESTADO DE TU CARTERA</Text>
        <Text style={emailStyles.textContent}>
          En la misma pantalla tienes el listado del mes. De un vistazo sabes:
        </Text>

        <ul style={emailStyles.list}>
          <li style={emailStyles.listItem}>
            ¿Qué facturas están <strong>pendientes de pago</strong>? (rojo)
          </li>
          <li style={emailStyles.listItem}>
            ¿Cuáles ya están <strong>pagadas</strong>? (verde)
          </li>
          <li style={emailStyles.listItem}>
            ¿Cuáles están <strong>parcialmente cobradas</strong>? (ámbar)
          </li>
          <li style={emailStyles.listItem}>
            ¿Son <strong>ingresos o egresos</strong>? (badge de color)
          </li>
          <li style={emailStyles.listItem}>
            Cada una te lleva al detalle con un clic.
          </li>
        </ul>

        <Text style={emailStyles.textContent}>
          <strong>Beneficio:</strong> Nunca más se te pasa una factura sin
          cobrar. Tienes visibilidad completa de tu flujo sin tener que revisar
          el SAT, tu banco y tu Excel por separado.
        </Text>

        <Img
          src="https://fiscalio.app/dashboard-screenshot-003.jpg"
          alt="Listado de Facturas Recientes"
          style={emailStyles.image}
        />

        <Text style={emailStyles.textContent}>
          <em>Vista completa de la interfaz de usuario:</em>
        </Text>
        <Img
          src="https://fiscalio.app/dashboard-screenshot-004.jpg"
          alt="Panel de Control Completo"
          style={emailStyles.image}
        />
      </Section>

      <hr style={emailStyles.hr} />

      {/* Next Steps & CTAs */}
      <Section style={{ marginBottom: "32px" }}>
        <Text style={emailStyles.benefitTitle}>¿Qué sigue?</Text>
        <Text style={emailStyles.textContent}>
          Estamos en la recta final de la vista de{" "}
          <strong>Declaraciones</strong>, donde todo esto converge para ayudarte
          a presentar tu declaración mensual al SAT sin dolores de cabeza.
        </Text>
      </Section>

      <Section style={emailStyles.ctaSection}>
        <Link
          href="mailto:ezequiel@fiscalio.app?subject=Sugerencia%20para%20el%20Panel%20de%20Control"
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
          ¿Tienes alguna idea o duda sobre el panel? Solo responde a este correo
          o haz clic en el botón. Estamos en etapa temprana y cada opinión
          cuenta para definir el rumbo del producto.
        </Text>
      </Section>
    </EmailBaseLayout>
  );
}
