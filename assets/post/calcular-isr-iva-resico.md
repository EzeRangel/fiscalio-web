# La guía definitiva para calcular ISR e IVA en RESICO (y dejar de adivinar)

Si eres un desarrollador, diseñador o freelancer tech en México bajo el régimen de RESICO, hay dos números que definen tu flujo de caja:

- **Cuánto debes separar para el SAT**
- **Cuánto realmente te queda para gastar o invertir**

Entender la diferencia entre ambos es lo que separa a un freelancer con control de uno que vive con ansiedad fiscal.

> **Regla de oro: El IVA no es tuyo (eres un recaudador). El ISR sí sale de tu utilidad.**

Este artículo es una guía práctica para que puedas **calcular tus impuestos paso a paso**, optimizar tu flujo y entender por qué RESICO es el mejor "hack" fiscal si exportas servicios.

---

## Modelo mental #1: El "Pipeline" de tu dinero

Antes de abrir una hoja de cálculo, necesitas claridad arquitectónica:

Imagina que cada pago que recibes (tu *payload*) se divide en 3 "microservicios":

1.  **IVA Retenido** → Dinero que solo estás custodiando para el SAT (un pasivo).
2.  **ISR Estimado** → Tu impuesto real sobre el ingreso.
3.  **Neto Real** → Tu ingreso disponible (tu ganancia libre).

Si no haces esta separación desde el inicio, todo se siente como un costo inesperado al final del mes.

---

## Paso 1: Identifica tu "Endpoint" (Tipo de Ingreso)

En el mundo freelancer de RESICO, el origen de tu ingreso cambia las reglas del juego:

### Escenario A: Cliente en México
- Cobras IVA (16%).
- Eres responsable de declararlo y pagarlo al SAT (menos lo que hayas pagado en tus gastos).

### Escenario B: Cliente en el extranjero (Exportación de Servicios)
- **IVA tasa 0% (Legalmente)**.
- No cobras IVA a tu cliente (lo que te hace más competitivo a nivel global).
- Pero puedes generar **saldo a favor** de los IVAs que pagas en tus herramientas (SaaS, laptop, internet).

---

## Paso 2: Calcular el IVA (Sin "Bugs" Mentales)

### Caso 1: Cliente en México
Ejemplo: Cobras un proyecto de $10,000 MXN + IVA.

- **IVA (16%):** $1,600
- **Total depositado:** $11,600

**Clave:** Esos $1,600 **NO son tuyos**. Guárdalos en una "bóveda" mental.

### Caso 2: Cliente en el extranjero
Ejemplo: Facturas $10,000 MXN a una empresa en EE. UU.

- **IVA:** 0%
- **Total depositado:** $10,000

Aquí no retienes IVA, pero el IVA que pagas en tus gastos (ej. tu suscripción a Adobe o AWS con factura mexicana) se vuelve un **crédito fiscal** que puedes recuperar.

---

## Modelo mental #2: El IVA es un flujo, no un costo

- **Ingresos con IVA:** Lo debes.
- **Gastos con IVA (Acreditable):** Lo recuperas.

La diferencia neta es lo que transfieres al SAT o lo que pides de vuelta.

---

## Paso 3: Calcular el ISR (Donde RESICO brilla)

Aquí es donde RESICO se vuelve una ventaja injusta para los freelancers tech. A diferencia de otros regímenes donde deduces gastos, aquí pagas sobre el ingreso bruto a tasas bajísimas.

> **ISR = Ingresos cobrados × Tasa RESICO**

Las tasas son progresivas pero mínimas:
- Hasta $25k: **1.00%**
- Hasta $50k: **1.10%**
- Hasta $83k: **1.50%**
- (Hasta un máximo de 2.5%)

### Ejemplo práctico completo
Eres un desarrollador Senior y en el mes facturaste:
- **Ingresos:** $50,000 MXN
- **Tasa RESICO:** 1.1%

**ISR a pagar:** $50,000 × 1.1% = **$550 MXN**

*Compara esto con el 20-30% que pagarías en otros esquemas.*

---

## ¿Cuánto te queda realmente? (The Bottom Line)

Si tu cliente es en México:
- Depósito total: $58,000 ($50k + $8k IVA)
- Menos IVA a pagar: $8,000 (asumiendo cero gastos)
- Menos ISR: $550
- **Neto Real: $49,450**

Si exportas servicios (Cliente Extranjero):
- Depósito total: $50,000
- IVA: $0
- Menos ISR: $550
- **Neto Real: $49,450** (+ el IVA a favor que recuperes de tus gastos).

---

## El problema: El costo de oportunidad de hacerlo manual

Puedes llevar todo esto en un Excel o Notion. Pero, como buen perfil tech, sabes que **los procesos manuales son propensos a errores**:

- Tienes múltiples facturas con diferentes fechas de pago.
- Los tipos de cambio varían (USD a MXN).
- Las retenciones de personas morales complican el cálculo.
- Olvidas qué IVA es acreditable y cuál no.

---

## Aquí es donde entra la automatización

No necesitas ser contador para tener el control total de tu dinero. La [Calculadora de RESICO de Fiscalio](/calculadora-resico) te permite simular estos escenarios en segundos, pero **Fiscalio Alpha** va un paso más allá.

Estamos construyendo la herramienta definitiva que:
1.  **Lee tus CFDIs directamente del SAT.**
2.  **Clasifica tus gastos automáticamente.**
3.  **Te da tu "Neto Real" en tiempo real**, para que sepas exactamente cuánto puedes gastar sin tocar lo que le pertenece al fisco.

---

## Únete al Lanzamiento Alpha (Descuento de Fundador)

La mayoría de los freelancers no tienen un problema con pagar impuestos; tienen un problema de **visibilidad**.

Estamos abriendo solo **50 lugares** para nuestra fase Alpha. Al unirte a la lista de espera, no solo tendrás acceso anticipado para automatizar tu contabilidad, sino que asegurarás un **precio especial de fundador** de por vida.

**[Únete a la lista de espera de Fiscalio y toma el control de tu flujo →](/?dialog=open)**

---

**Insight clave:** En RESICO, tu mejor inversión no es un contador que te ayude a "deducir", sino una herramienta que te ayude a **no cometer errores** y a mantener tu flujo bajo control.
