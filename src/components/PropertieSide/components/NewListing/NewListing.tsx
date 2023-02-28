import React, { FC } from "react";
import { IProperty } from "../../../../interfaces/property";
import NewListingCard from "./NewListingCard";
interface propertiesProps {
  properties?: any;
}
const NewListing: FC<propertiesProps> = ({ properties }) => {
  const style = {
    newListing: `w-[90%] m-auto `,
    newListingTitle: `text-[1.5rem] lg:text-[1rem] uppercase z-1 p-0 text-[#0D304A] text-center  unset font-[500] m-10`,
    cards: ` my-5 `,
    textContainer: ``,
    textTitlePrice: ``,
    image: ``,
  };
  const displayProperties = properties
    .slice(0, 5)
    .map((property: IProperty) => (
      <div key={property._id} className={style.cards}>
        <NewListingCard
          ID={property._id}
          title={property.title}
          description={property.description}
          price={property.price}
          priceSymbol={property.priceSymbol}
          propertyImages={property.propertyImages}
          listingType={property.listingType}
        />
      </div>
    ));
  return <div>{displayProperties}</div>;
};

export default NewListing;
