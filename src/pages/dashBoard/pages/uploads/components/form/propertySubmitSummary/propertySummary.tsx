const PropertySummary: React.FC = () => {
  const summary = JSON.parse(localStorage.getItem("storageKey") || "{}");
  console.log("summary", (summary as any).category);

  return <div>propertySummary</div>;
};

export default PropertySummary;
