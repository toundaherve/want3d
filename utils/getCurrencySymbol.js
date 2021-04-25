export default function getCurrencySymbol(currency) {
  const symbols = {
    GBP: "£",
    USD: "$",
    EUR: "€",
  };

  return symbols[currency];
}
