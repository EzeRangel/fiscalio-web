export const TAX_CONSTANTS = {
  IVA_NACIONAL: 0.16,
  IVA_EXPORTACION: 0.00,
  RETENCION_ISR_PM: 0.0125, // 1.25%
  RETENCION_IVA_PM: 0.106667, // 2/3 de IVA (10.6667%)
  TABLA_ISR_RESICO_MENSUAL: [
    { limite: 25000, tasa: 0.01 },
    { limite: 50000, tasa: 0.011 },
    { limite: 83333.33, tasa: 0.015 },
    { limite: 208333.33, tasa: 0.02 },
    { limite: 3500000, tasa: 0.025 }
  ]
} as const;
