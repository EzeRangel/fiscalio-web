"use client";

import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "¿Me cobran algo por unirme a la lista?",
    answer:
      "No. Lista de espera es gratis. Pagas solo cuando lance (si decides comprar).",
  },
  {
    question: "¿Está garantizado el descuento?",
    answer:
      "Sí. Si estás en los primeros 50, tienes 48 horas para comprar a $419. Si no compras, el lugar pasa al siguiente en lista.",
  },
  {
    question: "¿Qué recibo al unirme?",
    answer:
      "Guía PDF 'Deducciones RESICO que el SAT no te cuenta'. Updates cada 2 semanas con progreso real. Link prioritario de compra 2 semanas antes del lanzamiento",
  },
  {
    question: "¿Cuándo lanza exactamente?",
    answer:
      "Q2 2026 (abril-junio). Recibirás email con fecha exacta 30 días antes. Updates cada 2 semanas hasta entonces.",
  },
  {
    question: "¿Qué pasa cuando salga la versión 2.0?",
    answer:
      "Las actualizaciones 1.x son gratis (1.1, 1.2, 1.3...). La versión 2.0 será compra separada, pero puedes seguir usando la 1.x sin problema.",
  },
  {
    question: "¿Incluye soporte técnico?",
    answer:
      "No. El precio bajo es posible porque no hay equipo de soporte. Incluye documentación completa y FAQ.",
  },
  {
    question: "¿Por qué solo 50 lugares con descuento?",
    answer:
      "Quiero feedback directo de usuarios fundadores. 50 es manejable para responder emails personalmente. Después de 50, precio sube a $599.",
  },
];

export function Faqs() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="divide-y">
      {faqs.map((faq, index) => (
        <div key={index}>
          <button
            onClick={() => setOpenFaq(openFaq === index ? null : index)}
            className="w-full py-8 flex items-start justify-between text-left"
          >
            <div className="grid grid-cols-12 gap-4 w-full items-start">
              <div className="col-span-1">
                <span className="text-sm text-muted-foreground">
                  0{index + 1}
                </span>
              </div>
              <div className="col-span-10">
                <span className="text-sm">{faq.question}</span>
                {openFaq === index && (
                  <p className="text-sm text-muted-foreground leading-relaxed tracking-wide mt-6 pr-8">
                    {faq.answer}
                  </p>
                )}
              </div>
              <div className="col-span-1 flex justify-end">
                <ChevronDownIcon
                  className={`h-4 w-4 text-muted-foreground ${openFaq === index ? "rotate-180" : ""}`}
                />
              </div>
            </div>
          </button>
        </div>
      ))}
    </div>
  );
}
