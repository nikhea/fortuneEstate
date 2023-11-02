import { displaPriceSymbol } from "../../../../../../../utils/formatePriceSymbol";
import { FormData } from "../../formInterface";
const PropertySummary: React.FC = () => {
  const { category, title, priceSymbol, price }: FormData = JSON.parse(
    localStorage.getItem("storageKey") || "{}"
  );
  //   const displaPriceSymbol = (priceSymbol: string): string =>
  //     priceSymbol === "USD" || priceSymbol === "" ? "$" : "";

  return (
    <div className=" m-auto mx-20 mb-10 uppercase">
      <h1 className="  ">property title : {title}</h1>
      <p>
        price : {displaPriceSymbol(priceSymbol)} {price}
      </p>
    </div>
  );
};

export default PropertySummary;
