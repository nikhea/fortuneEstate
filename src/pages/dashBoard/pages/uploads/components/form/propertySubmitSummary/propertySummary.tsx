import { FormData } from "../../formInterface";
const PropertySummary: React.FC = () => {
  const { category, title, priceSymbol }: FormData = JSON.parse(
    localStorage.getItem("storageKey") || "{}"
  );
  console.log("summary");

  return (
    <div>
      <h1>property title : {priceSymbol}</h1>
    </div>
  );
};

export default PropertySummary;
