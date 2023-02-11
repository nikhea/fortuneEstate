import React, { FC } from "react";
import { IProperty } from "../../interfaces/property";

interface propertiesProps {
  properties?: any;
}
const featuredListing: FC<propertiesProps> = ({ properties }) => {
  console.log(properties);

  const style = {
    newListing: `w-[90%] m-auto`,
    newListingTitle: `text-[1.5rem] uppercase z-1 p-0 text-[#0D304A] text-center  unset font-[500] m-10`,
  };
  const displayProperties = properties
    .slice(0, 6)
    .map((property: IProperty) => (
      <div>
        <h1>{property.title}</h1>
      </div>
    ));
  return (
    <div className={style.newListing}>
      <h1 className={style.newListingTitle}>featured properties</h1>
      <h3 className="divider"></h3>
      <div>{displayProperties}</div>
    </div>
  );
};

export default featuredListing;
