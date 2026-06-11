# Fiscalio Web Context

This context defines the business domain for the Fiscalio tax calculator, which computes Mexican RESICO taxes (ISR and IVA) for freelancers.

## Language

**ISR mensual**:
The raw income tax (ISR) calculated based on the RESICO monthly brackets before any retentions are subtracted.
_Avoid_: ISR bruto, impuesto bruto

**Retención de ISR**:
The amount of income tax withheld by corporate clients (Personas Morales) at a fixed rate of 1.25% of the subtotal.
_Avoid_: ISR retenido, retención SAT

**ISR neto a pagar**:
The final income tax liability to be paid to the SAT after subtracting the ISR retentions from the calculated ISR mensual.
_Avoid_: ISR a liquidar

**Saldo a favor**:
The excess amount withheld by corporate clients when the Retención de ISR exceeds the calculated ISR mensual.
_Avoid_: ISR negativo, crédito fiscal

## IVA (Impuesto al Valor Agregado)

**IVA que cobraste**:
The value-added tax (IVA) added to the subtotal of the invoice, which is 16% for national transactions and 0% for export services.
_Avoid_: IVA trasladado, IVA bruto

**Retención de IVA**:
The amount of value-added tax withheld by corporate clients (Personas Morales) in national transactions, which is 10.6667% (2/3 of the 16% IVA rate).
_Avoid_: IVA retenido

**IVA neto a pagar**:
The final value-added tax liability to be paid to the SAT, calculated as the IVA que cobraste minus any Retención de IVA.
_Avoid_: IVA a liquidar, IVA por pagar

## Resultados Finales

**Neto Real**:
The capital remaining for the freelancer after deducting the projected monthly ISR liability (`isrBruto`), representing their true disposable income.
_Avoid_: Utilidad neta real, capital disponible, neto final

**Depósito bancario**:
The gross amount deposited by the client into the freelancer's bank account, which includes the subtotal plus IVA minus any applicable withholdings (retenciones).
_Avoid_: Depósito neto, total depositado, saldo recibido


