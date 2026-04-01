"use server";

import airtable from "airtable";
import { Resend } from "resend";
import { AIRTABLE_ACCESS_TOKEN, AIRTABLE_BASE } from "@/lib/constants";
import { TaxReportEmail } from "@/components/emails/tax-report-email";
import { CalculoResult, TipoIngreso, TipoCliente } from "@/lib/tax-calculator";

const resend = new Resend(process.env.RESEND_API_KEY);

function configureAirtable() {
  try {
    airtable.configure({
      endpointUrl: "https://api.airtable.com",
      apiKey: AIRTABLE_ACCESS_TOKEN,
    });
    return airtable.base(AIRTABLE_BASE);
  } catch (error) {
    console.error("Airtable configuration error:", error);
    return null;
  }
}

interface SendTaxReportRequest {
  email: string;
  result: CalculoResult;
  tipoIngreso: TipoIngreso;
  tipoCliente: TipoCliente;
  date: string;
}

export async function sendTaxReport(params: SendTaxReportRequest) {
  // const base = configureAirtable();

  // // 1. Save Lead to Airtable
  // if (base) {
  //   try {
  //     await base("Calculadora_Leads").create({
  //       Email: params.email,
  //       Subtotal: params.result.subtotal,
  //       Utilidad_Real: params.result.utilidadReal,
  //       Tipo_Ingreso: params.tipoIngreso,
  //       Tipo_Cliente: params.tipoCliente,
  //       "Created at": new Date().toISOString(),
  //     });
  //   } catch (error) {
  //     console.error("Failed to save lead to Airtable:", error);
  //     // We continue even if Airtable fails, to prioritize sending the email to the user
  //   }
  // }

  // 2. Send Email
  try {
    const { error } = await resend.emails.send({
      from: "Fiscalio <noresponder@fiscalio.app>",
      to: [params.email],
      subject: "Tu Informe de Proyección Fiscal - Fiscalio",
      react: TaxReportEmail({
        result: params.result,
        tipoIngreso: params.tipoIngreso,
        tipoCliente: params.tipoCliente,
        date: params.date,
      }),
    });

    if (error) {
      return {
        error: "No se pudo enviar el correo. Por favor intenta más tarde.",
      };
    }

    return { success: true };
  } catch (error) {
    console.error("Resend error:", error);
    return { error: "Ocurrió un error inesperado al enviar el correo." };
  }
}
