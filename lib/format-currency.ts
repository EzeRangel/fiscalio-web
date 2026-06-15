export function formatCurrency(value: number): string {
  return value.toLocaleString("es-MX", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function formatPercent(value: number): string {
  return (value * 100).toFixed(2).replace(/\.00$/, "") + "%";
}
