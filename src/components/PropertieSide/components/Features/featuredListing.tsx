import { FC } from "react";
import { IProperty } from "../../../../interfaces/property";
import FeatureCards from "./FeatureCards";

interface propertiesProps {
  properties?: any;
}
const featuredListing: FC<propertiesProps> = ({ properties }) => {
  const style = {
    newListing: `w-[90%] m-auto `,
    newListingTitle: `text-[1.5rem] lg:text-[1rem] uppercase z-1 p-0 text-[#0D304A] text-center  unset font-[500] m-10`,
    cards: ` my-5 `,
    textContainer: ``,
    textTitlePrice: ``,
    image: ``,
  };
  const displayProperties = properties
    .slice(0, 6)
    .map((property: IProperty) => (
      <div key={property._id} className={style.cards}>
        <FeatureCards
          ID={property._id}
          title={property.title}
          description={property.description}
          price={property.price}
          priceSymbol={property.priceSymbol}
          propertyImages={property.propertyImages}
        />
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
