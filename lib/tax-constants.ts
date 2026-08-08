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
  ],
  TABLA_ISR_GENERAL_MENSUAL_2026: [
    { limiteInferior: 0.01, limiteSuperior: 844.59, cuotaFija: 0.0, porcentaje: 0.0192 },
    { limiteInferior: 844.60, limiteSuperior: 7168.51, cuotaFija: 16.22, porcentaje: 0.0640 },
    { limiteInferior: 7168.52, limiteSuperior: 12598.02, cuotaFija: 420.95, porcentaje: 0.1088 },
    { limiteInferior: 12598.03, limiteSuperior: 14644.64, cuotaFija: 1011.68, porcentaje: 0.1600 },
    { limiteInferior: 14644.65, limiteSuperior: 17533.64, cuotaFija: 1339.14, porcentaje: 0.1792 },
    { limiteInferior: 17533.65, limiteSuperior: 35362.83, cuotaFija: 1856.84, porcentaje: 0.2136 },
    { limiteInferior: 35362.84, limiteSuperior: 55736.68, cuotaFija: 5665.16, porcentaje: 0.2352 },
    { limiteInferior: 55736.69, limiteSuperior: 106410.50, cuotaFija: 10457.09, porcentaje: 0.3000 },
    { limiteInferior: 106410.51, limiteSuperior: 141880.66, cuotaFija: 25659.23, porcentaje: 0.3200 },
    { limiteInferior: 141880.67, limiteSuperior: 425641.99, cuotaFija: 37009.69, porcentaje: 0.3400 },
    { limiteInferior: 425642.00, limiteSuperior: Infinity, cuotaFija: 133488.54, porcentaje: 0.3500 },
  ]
} as const;
