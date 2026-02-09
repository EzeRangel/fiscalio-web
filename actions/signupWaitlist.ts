"use server";

import airtable from "airtable";
import { Resend } from "resend";
import { redirect } from "next/navigation";
import { AIRTABLE_ACCESS_TOKEN, AIRTABLE_BASE } from "@/lib/constants";
import { delay } from "@/lib/utils";
import { EmailTemplate } from "@/components/email-thankyou";

function configureAirtable() {
  try {
    airtable.configure({
      endpointUrl: "https://api.airtable.com",
      apiKey: AIRTABLE_ACCESS_TOKEN,
    });

    const base = airtable.base(AIRTABLE_BASE);

    return base;
  } catch (error) {
    console.log((error as Error).message);

    return null;
  }
}

const resend = new Resend(process.env.RESEND_API_KEY);

interface SignupWaitlistRequest {
  email: string;
}

export async function signupWaitlist(params: SignupWaitlistRequest) {
  const base = configureAirtable();

  if (!base) {
    return {
      error: "No fue posible guardar tus datos, inténtalo en otra ocasión",
    };
  }

  await delay(2);

  const date = new Date();
  const recordCreation = new Promise<string>((resolve, reject) => {
    base("Waitlist").create(
      {
        Email: params.email,
        "Created at": formatDate(date, "YYYY-MM-DD"),
      },
      function (err, record) {
        if (err || !record) {
          console.error(err);
          reject(err);
          return;
        }

        const recordId = record?.getId();
        resolve(recordId);
      },
    );
  });

  const record = await recordCreation;

  (async () => {
    try {
      const { data, error } = await resend.emails.send({
        from: "Fiscalio <onboarding@resend.dev>",
        to: ["chekelinho@gmail.com"],
        subject: "Confirmación: ya estás en la lista de espera de Fiscalio",
        react: EmailTemplate({ email: params.email, recordId: record }),
      });
    } catch (error) {
      console.log(error);
    }
  })();

  return { record };
}

function formatDate(date: Date, format: string) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return format
    .replace("YYYY", `${year}`)
    .replace("MM", month)
    .replace("DD", day);
}
