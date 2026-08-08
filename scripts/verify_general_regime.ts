import { calculateGeneralRegimeTax } from "../lib/tax-calculator";
import type { TipoIngreso, TipoCliente } from "../lib/tax-calculator";

const tests = [
  { amount: 10000, tipoCliente: "FISICA" as TipoCliente, isrBrutoEsperado: 511.42, isrNetoEsperado: 511.42 },
  { amount: 10000, tipoCliente: "MORAL" as TipoCliente, isrBrutoEsperado: 511.42, isrNetoEsperado: 0 },
  { amount: 25000, tipoCliente: "FISICA" as TipoCliente, isrBrutoEsperado: 2383.65, isrNetoEsperado: 2383.65 },
  { amount: 50000, tipoCliente: "FISICA" as TipoCliente, isrBrutoEsperado: 6755.82, isrNetoEsperado: 6755.82 },
  { amount: 50000, tipoCliente: "MORAL" as TipoCliente, isrBrutoEsperado: 6755.82, isrNetoEsperado: 1755.82 },
  { amount: 65000, tipoCliente: "FISICA" as TipoCliente, isrBrutoEsperado: 9578.22, isrNetoEsperado: 9578.22 },
  { amount: 83333.33, tipoCliente: "FISICA" as TipoCliente, isrBrutoEsperado: 13736.08, isrNetoEsperado: 13736.08 },
  { amount: 100000, tipoCliente: "FISICA" as TipoCliente, isrBrutoEsperado: 17736.08, isrNetoEsperado: 17736.08 },
  { amount: 100000, tipoCliente: "MORAL" as TipoCliente, isrBrutoEsperado: 17736.08, isrNetoEsperado: 7736.08 },
  { amount: 200000, tipoCliente: "FISICA" as TipoCliente, isrBrutoEsperado: 43170.26, isrNetoEsperado: 43170.26 },
  { amount: 300000, tipoCliente: "MORAL" as TipoCliente, isrBrutoEsperado: 70370.26, isrNetoEsperado: 40370.26 },
];

let allPassed = true;

for (const test of tests) {
  const result = calculateGeneralRegimeTax(test.amount, "NACIONAL", test.tipoCliente, 0.20);
  const brutoOk = Math.abs(result.isrBruto - test.isrBrutoEsperado) < 0.02;
  const netoOk = Math.abs(result.isrNeto - test.isrNetoEsperado) < 0.02;
  
  if (!brutoOk || !netoOk) {
    allPassed = false;
    console.error(`FAILED test for ${test.amount} ${test.tipoCliente}`);
    console.error(`  Bruto: esperado ${test.isrBrutoEsperado}, obtenido ${result.isrBruto}`);
    console.error(`  Neto: esperado ${test.isrNetoEsperado}, obtenido ${result.isrNeto}`);
  } else {
    console.log(`PASSED ${test.amount} ${test.tipoCliente}`);
  }
}

if (allPassed) {
  console.log("ALL TESTS PASSED!");
} else {
  process.exit(1);
}
