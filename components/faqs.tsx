"use client";

import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "¿Me cobran algo por unirme a la beta?",
    answer:
      "No. Solicitar acceso a la beta es gratis. Pagas solo cuando el producto esté listo (si decides comprar).",
  },
  {
    question: "¿Está garantizado el descuento?",
    answer:
      "Sí. Tienes asegurado el precio fundador de $419 MXN por unirte a la beta. Tendrás 48 horas para comprar una vez que tu acceso esté listo.",
  },
  {
    question: "¿Qué recibo al unirme?",
    answer:
      "Una 'Guía práctica para RESICO 2026' en PDF. Updates cada 2 semanas con progreso real. Link prioritario de compra 2 semanas antes del lanzamiento público.",
  },
  {
    question: "¿Cuándo podré probar la beta?",
    answer:
      "Estamos liberando accesos progresivamente. Recibirás un email en cuanto tu cuenta esté lista. Updates cada 2 semanas hasta entonces.",
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
    question: "¿Por qué hay cupo limitado en la beta?",
    answer:
      "Quiero feedback directo durante la beta privada. Por eso estamos liberando accesos progresivamente con precio fundador. Al lanzamiento público, el precio subirá a $599.",
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
                <span className="text-sm font-medium">{faq.question}</span>
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
