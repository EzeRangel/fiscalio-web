"use server";

import { Resend } from "resend";
import { delay } from "@/lib/utils";
import { EmailTemplate } from "@/components/email-thankyou";
import { EmailExportTemplate } from "@/components/email-export-template";
import { saveToWaitlist } from "@/lib/airtable";

const resend = new Resend(process.env.RESEND_API_KEY);

interface SignupWaitlistRequest {
  email: string;
  source?: string;
}

export async function signupWaitlist(params: SignupWaitlistRequest) {
  try {
    await delay(2);

    const record = await saveToWaitlist(params.email);

    const isExportSource = params.source === "blog_exportacion_servicios";
    const emailSubject = isExportSource
      ? "Confirmación: Aquí tienes tu Plantilla de Factura Extranjera"
      : "Confirmación: ya estás en la lista de espera de Fiscalio";

    try {
      const { error } = await resend.emails.send({
        from: "Ezequiel de Fiscalio <ezequiel@fiscalio.app>",
        to: [params.email],
        subject: emailSubject,
        react: isExportSource
          ? EmailExportTemplate({ email: params.email, recordId: record })
          : EmailTemplate({ email: params.email, recordId: record }),
      });

      if (error) {
        console.error("Resend error in signupWaitlist:", error);
      }
    } catch (resendError) {
      console.error("Resend exception in signupWaitlist:", resendError);
    }

    return { record };
  } catch (error) {
    console.error("Error in signupWaitlist:", error);
    return {
      error: "No fue posible guardar tus datos, inténtalo en otra ocasión",
    };
  }
}
