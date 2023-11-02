export const displaPriceSymbol = (priceSymbol: string): string => {
  switch (priceSymbol) {
    case "USD":
      return "$";
    case "EUR":
      return "€";
    case "NGN":
      return "₦";
    default:
      return "";
  }
};
