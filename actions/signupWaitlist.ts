"use server";

import { Resend } from "resend";
import { delay } from "@/lib/utils";
import { EmailTemplate } from "@/components/email-thankyou";
import { saveToWaitlist } from "@/lib/airtable";

const resend = new Resend(process.env.RESEND_API_KEY);

interface SignupWaitlistRequest {
  email: string;
}

export async function signupWaitlist(params: SignupWaitlistRequest) {
  try {
    await delay(2);

    const record = await saveToWaitlist(params.email);

    (async () => {
      try {
        const { error } = await resend.emails.send({
          from: "Ezequiel de Fiscalio <ezequiel@fiscalio.app>",
          to: [params.email],
          subject: "Confirmación: ya estás en la lista de espera de Fiscalio",
          react: EmailTemplate({ email: params.email, recordId: record }),
        });

        if (error) {
          throw error;
        }
      } catch (error) {
        console.error("Resend error in background:", error);
      }
    })();

    return { record };
  } catch (error) {
    console.error("Error in signupWaitlist:", error);
    return {
      error: "No fue posible guardar tus datos, inténtalo en otra ocasión",
    };
  }
}
