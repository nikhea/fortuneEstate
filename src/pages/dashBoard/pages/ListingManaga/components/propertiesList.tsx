import { FC } from "react";
import ListingCard from "./ListingCard";

interface propertiesListProps {
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
}
const style = {
  // bg: `bg-white h-screen`,
  container: `w-[95%] m-auto mt-`,
};
const propertiesList: FC<propertiesListProps> = ({
  ID,
  title,
  price,
  priceSymbol,
  category,
  image,
  listingType,
  createdAt,
  squareFootage,
  squareSymbol,
  bathrooms,
  bedrooms,
  address: { street },
  // user
  user: { firstname, lastname },
}) => {
  // console.log(user.firstname, user.lastname);

  return (
    <div className={style.container}>
      <ListingCard
        ID={ID}
        title={title}
        street={street}
        price={price}
        priceSymbol={priceSymbol}
        category={category}
        image={image}
        listingType={listingType}
        createdAt={createdAt}
        squareFootage={squareFootage}
        squareSymbol={squareSymbol}
        bathrooms={bathrooms}
        bedrooms={bedrooms}
        firstname={firstname}
        lastname={lastname}
      />
    </div>
  );
};

export default propertiesList;
