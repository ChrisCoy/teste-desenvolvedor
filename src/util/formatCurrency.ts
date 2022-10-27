type prop = string | number;

export default function formatCurrency(number: prop) {
  return Number(number).toLocaleString("pt-BR", {
    minimumIntegerDigits: 2,
    useGrouping: false,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
