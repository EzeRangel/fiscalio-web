import { NextRequest, NextResponse } from "next/server";
import airtable from "airtable";
import { AIRTABLE_ACCESS_TOKEN, AIRTABLE_BASE } from "@/lib/constants";
import fs from "fs/promises";
import path from "path";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return new NextResponse("Falta el ID de registro", { status: 400 });
  }

  // Validate with Airtable
  try {
    airtable.configure({
      apiKey: AIRTABLE_ACCESS_TOKEN,
    });
    const base = airtable.base(AIRTABLE_BASE);

    await new Promise((resolve, reject) => {
      base("Waitlist").find(id, (err, record) => {
        if (err || !record) {
          reject(err || new Error("Record not found"));
        } else {
          resolve(record);
        }
      });
    });
  } catch (error) {
    console.error("Airtable validation failed:", error);
    return new NextResponse("No autorizado", { status: 403 });
  }

  // Serve the file
  try {
    const filePath = path.join(
      process.cwd(),
      "assets",
      "guia-practica-resico.pdf",
    );
    const fileBuffer = await fs.readFile(filePath);

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          "attachment; filename=Guia-RESICO-Fiscalio-2026.pdf",
      },
    });
  } catch (error) {
    console.error("File reading failed:", error);
    return new NextResponse("Archivo no encontrado", { status: 404 });
  }
}
