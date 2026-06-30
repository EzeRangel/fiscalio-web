import airtable from "airtable";
import { AIRTABLE_ACCESS_TOKEN, AIRTABLE_BASE } from "./constants";

function configureAirtable() {
  try {
    airtable.configure({
      endpointUrl: "https://api.airtable.com",
      apiKey: AIRTABLE_ACCESS_TOKEN,
    });

    const base = airtable.base(AIRTABLE_BASE);
    return base;
  } catch (error) {
    console.error("Error al configurar Airtable:", error);
    return null;
  }
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

export async function saveToWaitlist(email: string): Promise<string> {
  const base = configureAirtable();
  if (!base) {
    throw new Error("No fue posible configurar la base de datos de leads.");
  }

  const date = new Date();
  return new Promise<string>((resolve, reject) => {
    base("Waitlist").create(
      {
        Email: email,
        "Created at": formatDate(date, "YYYY-MM-DD"),
      },
      (err, record) => {
        if (err || !record) {
          console.error("Error al guardar en Airtable:", err);
          reject(err || new Error("No se pudo crear el registro en la lista de espera."));
          return;
        }

        resolve(record.getId());
      }
    );
  });
}
