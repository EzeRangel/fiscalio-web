"use server";

import { Resend } from "resend";
import { TaxReportEmail } from "@/components/emails/tax-report-email";
import { CalculoResult, TipoIngreso, TipoCliente } from "@/lib/tax-calculator";

const resend = new Resend(process.env.RESEND_API_KEY);

interface SendTaxReportRequest {
  email: string;
  result: CalculoResult;
  tipoIngreso: TipoIngreso;
  tipoCliente: TipoCliente;
  date: string;
}

export async function sendTaxReport(params: SendTaxReportRequest) {
  try {
    const reportId = Math.random().toString(36).substring(7).toUpperCase();
    const { error } = await resend.emails.send({
      from: "Fiscalio <noresponder@fiscalio.app>",
      to: [params.email],
      subject: "Tu Informe de Proyección Fiscal - Fiscalio",
      react: TaxReportEmail({
        result: params.result,
        tipoIngreso: params.tipoIngreso,
        tipoCliente: params.tipoCliente,
        date: params.date,
        reportId,
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
