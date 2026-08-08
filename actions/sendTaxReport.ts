"use server";

import { Resend } from "resend";
import { TaxReportEmail } from "@/components/emails/tax-report-email";
import {
  CalculoResult,
  GeneralRegimeResult,
  TipoIngreso,
  TipoCliente,
} from "@/lib/tax-calculator";
import { saveToWaitlist } from "@/lib/airtable";

const resend = new Resend(process.env.RESEND_API_KEY);

interface SendTaxReportRequest {
  email: string;
  result: CalculoResult;
  generalRegimeResult?: GeneralRegimeResult;
  gastosPercent?: number;
  tipoIngreso: TipoIngreso;
  tipoCliente: TipoCliente;
  date: string;
}

export async function sendTaxReport(params: SendTaxReportRequest) {
  try {
    // Registrar el lead en la lista de espera unificada
    await saveToWaitlist(params.email);

    const reportId = Math.random().toString(36).substring(7).toUpperCase();
    const { error } = await resend.emails.send({
      from: "Ezequiel de Fiscalio <ezequiel@fiscalio.app>",
      to: [params.email],
      subject: "Tu informe de la calculadora RESICO - Fiscalio",
      react: TaxReportEmail({
        result: params.result,
        generalRegimeResult: params.generalRegimeResult,
        gastosPercent: params.gastosPercent,
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
    console.error("Resend/Airtable error:", error);
    return { error: "Ocurrió un error inesperado al enviar el correo." };
  }
}
