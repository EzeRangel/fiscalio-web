# CHANGELOG - Fiscalio

Historial de cambios técnicos, optimizaciones de SEO y producto para mediciones de Growth.

## 2026-08-08
- **Calculadora (CRO)**: Implementación de la comparativa de ISR entre RESICO y el Régimen General (honorarios/actividad empresarial) en el componente `<TaxCalculator />`. Añade la tarifa mensual del ISR 2026 (Art. 96 LISR, Anexo 8 RMF) y la función `calculateGeneralRegimeTax` en `lib/tax-calculator.ts`.
- **Cálculo Fiscal**: Motor del Régimen General con deducciones configurables vía slider de gastos deducibles (0-80%, 20% por defecto), retención del 10% de ISR a persona moral y manejo de saldo a favor (`isrNeto` acotado a 0).
- **UX**: Rediseño de la tarjeta comparativa alineado al design system con copy factual ("No es una recomendación"), aviso del límite RESICO (~$291,666 MXN mensuales) y evento `slider_gastos_changed` en GA4.
- **Correos (React Email)**: Extensión del email del reporte con sección "Comparativa de ISR: RESICO vs. Régimen General" (condicional, con base gravable, retención e ISR neto) y ajuste del copy del formulario inline para reflejar el contenido real.
- **CRO**: Sustitución del diálogo de exportación por un formulario inline de captura de correo visible bajo la comparativa; el diálogo se conserva en el código para uso futuro.
- **Herramientas** (`scripts/`): Script `verify_general_regime.ts` con vectores de comprobación manual del cálculo del Régimen General contra las tarifas oficiales 2026.

## 2026-07-23
- **Novedades / Boletín**: Creación de la sección pública `/novedades` y su ruta dinámica `/novedades/[slug]` para indexar las actualizaciones del producto en motores de búsqueda y dinamizar el embudo de waitlist.
- **Estructura de Correos (React Email)**: Creación de un sistema flexible y reutilizable de primitivas (`layout-primitives.tsx`) que soporta `webMode` para inyectar correos electrónicos como contenido web semántico y limpio.
- **Product Update #02**: Redacción y maquetación de la segunda actualización de producto con tablas de datos contables, capturas de pantalla reales en `public/` y un CTA orientado al feedback de los leads de la waitlist.

## 2026-07-17
- **SEO/Calculadoras Satélite**: Creación de la nueva landing page satélite para retenciones en la ruta `/calculadora-resico/retenciones`, implementando el borrador optimizado para Persona Física a Persona Moral.
- **Componentes**: Modificación del componente `<TaxCalculator />` para admitir props opcionales de inicialización (`initialTipoIngreso`, `initialTipoCliente` y `source`). Esto permite pre-configurar la calculadora por defecto según el caso de uso de la landing y pasar la procedencia (`source`) al evento `calculator_used` de GA4.

## 2026-07-11
- **SEO/Metadata**: Se optimizó la meta descripción de la página `/blog/pue-vs-ppd-diferencia-facturar-cobrar` para mejorar el CTR respondiendo la duda directamente en el snippet (Definiciones cortas de PUE y PPD).

## 2026-07-10
- **Herramientas de Ingesta**: Se modificó el script `parse_gsc_export.py` para ignorar líneas de comentario (`#`) y dar soporte a los encabezados de columnas en español ("Consultas principales", "Páginas principales", "Número de eventos") provenientes de las exportaciones de Google Search Console y GA4.

## 2026-07-07
- **Funcionalidad (Waitlist)**: Implementación de flujo dinámico y diseño de plantillas de correo y PDF para el flujo de waitlist enfocado en exportación de facturas extranjeras.

## 2026-06-30
- **CRO & Producto**: Optimización de la tasa de conversión (CRO) de la calculadora de impuestos RESICO y unificación del flujo de captura de prospectos hacia Airtable.
- **SEO (Enlazado Interno)**: Implementación de la Fase 2 de enlazado interno. Creación del componente `InlineLink` e inclusión de llamadas a la acción contextuales (`CalculatorCTA`) en las entradas del blog para canalizar tráfico orgánico hacia el producto.

## 2026-06-27
- **Copy/Narrativa**: Refactorización de textos en la plataforma para reflejar la narrativa de "Beta Privada" y eliminación de referencias obsoletas al límite inicial de 50 usuarios.

## 2026-06-25
- **Analítica**: Implementación de eventos personalizados de Google Analytics 4 (GA4) para el seguimiento de la calculadora de impuestos y las interacciones/registros en la waitlist.

## 2026-06-17
- **Gestión de Proyecto**: Migración del control de progreso al sistema Conductor y archivado del track completado de la calculadora.

## 2026-06-16
- **Calculadora**: Mejoras generales de usabilidad e interfaz de la calculadora.

## 2026-06-15
- **Cálculo Fiscal**: Corrección en la fórmula de `utilidadReal` restando adecuadamente la variable `ivaNeto`.
- **Diseño**: Rediseño visual de las plantillas de correo electrónico de la calculadora.
- **Diseño (UI)**: Optimización del layout de distribución de cobranza empleando la paleta de colores del sistema.
