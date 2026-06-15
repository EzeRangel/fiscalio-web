import { TAX_CONSTANTS } from "./tax-constants";

export type TipoIngreso = "NACIONAL" | "EXTRANJERO";
export type TipoCliente = "FISICA" | "MORAL";

export interface CalculoResult {
  subtotal: number;
  iva: number;
  retencionISR: number;
  retencionIVA: number;
  isrBruto: number;
  isrNeto: number;
  ivaNeto: number;
  totalNeto: number;
  utilidadReal: number;
  tasaAplicada: number;
}

export function getTasaISR(subtotal: number): number {
  for (const { limite, tasa } of TAX_CONSTANTS.TABLA_ISR_RESICO_MENSUAL) {
    if (subtotal <= limite) {
      return tasa;
    }
  }
  return 0.025;
}

export function calculateTax(
  amount: number,
  tipoIngreso: TipoIngreso,
  tipoCliente: TipoCliente,
): CalculoResult {
  const ivaRate =
    tipoIngreso === "NACIONAL"
      ? TAX_CONSTANTS.IVA_NACIONAL
      : TAX_CONSTANTS.IVA_EXPORTACION;
  const retISRRrate =
    tipoIngreso === "NACIONAL" && tipoCliente === "MORAL"
      ? TAX_CONSTANTS.RETENCION_ISR_PM
      : 0;
  const retIVARate =
    tipoIngreso === "NACIONAL" && tipoCliente === "MORAL"
      ? TAX_CONSTANTS.RETENCION_IVA_PM
      : 0;

  const subtotal = amount;
  const iva = subtotal * ivaRate;
  const retencionISR = subtotal * retISRRrate;
  const retencionIVA = subtotal * retIVARate;
  const tasaAplicada = getTasaISR(subtotal);
  const isrBruto = subtotal * tasaAplicada;
  const isrNeto = isrBruto - retencionISR;
  const ivaNeto = iva - retencionIVA;
  const totalNeto = subtotal + iva - retencionISR - retencionIVA;
  const utilidadReal =
    retencionISR > 0
      ? subtotal - iva - retencionISR
      : subtotal - iva - isrBruto;

  return {
    subtotal: Math.round(subtotal * 100) / 100,
    iva: Math.round(iva * 100) / 100,
    retencionISR: Math.round(retencionISR * 100) / 100,
    retencionIVA: Math.round(retencionIVA * 100) / 100,
    isrBruto: Math.round(isrBruto * 100) / 100,
    isrNeto: Math.round(isrNeto * 100) / 100,
    ivaNeto: Math.round(ivaNeto * 100) / 100,
    totalNeto: Math.round(totalNeto * 100) / 100,
    utilidadReal: Math.round(utilidadReal * 100) / 100,
    tasaAplicada,
  };
}
