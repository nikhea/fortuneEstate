// export const displaPriceSymbol = (priceSymbol: any): any => {
//   switch (priceSymbol) {
//     case "USD":
//       return "$";
//     case "EUR":
//       return "€";
//     case "NGN":
//       return "₦";
//     default:
//       return "";
//   }
// };

// export const displaPriceSymbol = (priceSymbol: any): any => {
//   switch (priceSymbol) {
//     case "USD":
//       return "$";
//     case "EUR":
//       return "€";
//     case "NGN":
//       return "₦";
//     default:
//       return "";
//   }
// };

export const displaPriceSymbol = (priceSymbol: any): string => {
  switch (String(priceSymbol).toUpperCase()) {
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
