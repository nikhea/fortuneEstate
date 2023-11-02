export const displaPriceSymbol = (priceSymbol: any): any => {
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
