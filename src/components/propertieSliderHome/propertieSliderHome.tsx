import { FC } from "react";
import { Link } from "react-router-dom";
import PropertiesList from "../../components/propertiesList/propertiesList";
import { useQuery } from "react-query";
import { getAllProperties } from "../../services/api/shared";
import { queryKeys } from "../../utils/queryKey";
import Button from "../UI/FormElement/Button";
import SliderCard from "./SliderCard";
interface Props {
  [x: string]: any;
  ID?: string;
  attributes?: any;
  name?: string;
  image?: string;
  images?: any;
  tage?: string;
  title?: string;
  discription?:string;
  price?: number;
  location?: string;
  bed?: number;
  bath?: number;
  like?: boolean;
  agent?: string;
  agentImage?: string;
  squareFootage?: string;
  squareSymbol?: string;
  listingType?: string;
  firstname?: string;
  lastname?: string;
}
const style = {
  bgContainer: `bg-[#F6F6F6] py-[5em]  px-[2em] h-screen`,
  container: `w-[80%] m-auto my-10 text-center`,
};
const propertieSliderHome: FC = () => {
  const { data: properties, error } = useQuery(
    [queryKeys.properties],
    getAllProperties
  );

  const propertiesResult = properties?.data.results || [];
  console.log(propertiesResult, "propertiesResult SliderCard");

  const displayproperties = propertiesResult
    .slice(0, 6)
    .map((property: Props, index: any) => (
      <div key={index}>
        <SliderCard
          ID={property._id}
          images={property.propertyImages}
          tage={property.listingType}
          price={property.price}
          title={property.title}
          discription={property.description}
          location={property.address.street}
          bed={property.bedrooms}
          bath={property.bathrooms}
          like={property.isLiked}
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
    <>
      {displayproperties.length ? (
        <>
          <div className={style.bgContainer}>
            {/* <div className={style.container}> */}
            <div>{displayproperties}</div>
          </div>
          {/* </div> */}
        </>
      ) : null}
    </>
  );
};

export default propertieSliderHome;
