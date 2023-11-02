import { FormData } from "../../formInterface";
const PropertySummary: React.FC = () => {
  const { category, title, priceSymbol, price }: FormData = JSON.parse(
    localStorage.getItem("storageKey") || "{}"
  );
  console.log("summary");

  return (
    <div className=" m-auto mx-20 mb-10 uppercase">
      <h1 className="  ">property title : {title}</h1>
      <p>
        price : {price} {priceSymbol}
      </p>
    </div>
  );
};

export default PropertySummary;
