import { FC, useState } from "react";
import PropertiesList from "../../../../../components/propertiesList/propertiesList";
import PropertiesListDashBoard from "./PropertiesListDashBoard";

interface paginatedPropertiesProps {
  properties: [];
  propertiesList: number;
}
interface Props {
  [x: string]: any;
  ID: string;
  attributes?: any;
  name?: string;
  image?: string;
  images?: any;
  tage?: string;
  title?: string;
  price?: number;
  location?: string;
  bed?: number;
  bath?: number;
  like?: boolean;
  agent?: string;
  agentImage?: string;
  squareFootage?: string;
  squareSymbol?: string;
  firstname?: string;
  lastname?: string;
  properties?: any;
}

const style = {
  container: ` w-full h-full grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-2 md:gap-x-5 lg:gap-x-20  place-items-cente lg:place-items-start`,
};
// grid grid-cols-1 md:grid-cols-2
const PaginationDashBoard: FC<paginatedPropertiesProps> = ({
  properties,
  propertiesList,
}) => {
  const displayproperties = properties.map((property: Props, index: any) => (
    <div key={index} className=" h-full flex">
      <PropertiesListDashBoard
        ID={property._id}
        image={property.image}
        images={property.propertyImages}
        tage={property.listingType}
        price={property.price}
        title={property.title}
        location={property.address.street}
        bed={property.bedrooms}
        bath={property.bathrooms}
        like={property.like}
        squareFootage={property.squareFootage}
        squareSymbol={property.squareSymbol}
        listingType={property.listingType}
        firstname={property.user.firstname}
        lastname={property.user.lastname}
        agent={property.user.username}
        agentImage={property.user.image}
      />
    </div>
  ));

  return (
    <div className={style.container}>
      {propertiesList <= 0 ? "no data" : displayproperties}
    </div>
  );
};

export default PaginationDashBoard;
