import { FormData } from "../../formInterface";
const PropertySummary: React.FC = () => {
  const summary: FormData = JSON.parse(
    localStorage.getItem("storageKey") || "{}"
  );
  console.log("summary", (summary as any).category);

  return (
    <div>
      <h1>property title : {summary.title}</h1>
    </div>
  );
};

export default PropertySummary;
