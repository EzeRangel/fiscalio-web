import * as React from "react";
import { ProductUpdate01 } from "@/components/emails/updates/product-update-01";
import { ProductUpdate02 } from "@/components/emails/updates/product-update-02";
import { ProductUpdate03 } from "@/components/emails/updates/product-update-03";

export interface UpdateMetadata {
  id: string;
  tag: string;
  slug: string;
  title: string;
  previewText: string;
  date: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogLabel?: string;
}

export const productUpdates: UpdateMetadata[] = [
  {
    id: "01",
    tag: "Product Update #01",
    slug: "redisenando-detalle-factura",
    title: "Rediseñando el Detalle de Factura",
    previewText:
      "XML vs PDF vs Realidad: ¿Por qué es tan difícil leer un CFDI?",
    date: "25 JUN 2026",
    description:
      "Resolviendo la brecha de información entre el XML del SAT y lo que el usuario realmente entiende.",
  },
  {
    id: "02",
    tag: "Product Update #02",
    slug: "tu-panel-financiero-un-vistazo-y-sabes-donde-estas",
    title: "Tu panel financiero. Un vistazo y sabes dónde estás",
    previewText:
      "Tu mes en 4 números, carga de CFDIs en tiempo real y visibilidad de flujo.",
    date: "23 JUL 2026",
    description:
      "Presentamos el Panel de Control: ingresos, egresos, flujo en base de efectivo e importación inteligente de XMLs.",
  },
  {
    id: "03",
    tag: "Product Update #03",
    slug: "declaraciones-mensuales",
    title:
      "Deja de sumar facturas a mano: así funciona el panel de declaraciones",
    previewText:
      "Borrador automático, verificación y acuse en un solo lugar. Diseñado exclusivamente para RESICO.",
    date: "14 AGO 2026",
    description:
      "Presentamos el Panel de Declaraciones: borrador preliminar automático, estados de verificación, historial de acuses y un formato de hoja contable clásica.",
    ogTitle: "Panel de declaraciones",
    ogDescription:
      "Deja de sumar facturas a mano: así funciona el panel de declaraciones.",
    ogLabel: "Actualización de producto",
  },
];

export function getUpdateComponent(
  slug: string,
): React.ComponentType<{ webMode?: boolean }> | null {
  switch (slug) {
    case "redisenando-detalle-factura":
      return ProductUpdate01;
    case "tu-panel-financiero-un-vistazo-y-sabes-donde-estas":
      return ProductUpdate02;
    case "declaraciones-mensuales":
      return ProductUpdate03;
    default:
      return null;
  }
}
