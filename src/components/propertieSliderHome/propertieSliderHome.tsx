import { FC, useRef, useState, useEffect } from "react";
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
  discription?: string;
  price?: number;
  priceSymbol?: string;
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
  bgContainer: ` py-[5em]  px-[2em] h-screen h-max-[1100px] w-full  flex overflow-hidden`,
  container: `w-[80%] m-auto my-10 text-center h-full`,
  flexWrapper: `w-full h-full flex overflow-hidden relative`,
  heroSlide: `z-7 w-full h-full overflow-hidden`,
};
// bg-[#F6F6F6]
const propertieSliderHome: FC = () => {
  let length: number;
  const { data: properties, error } = useQuery(
    [queryKeys.properties],
    getAllProperties
  );
  const propertiesResult = properties?.data.results.slice(0, 6) || [];
  length = propertiesResult.length;
  const [current, setCurrent] = useState(0);
  const timeout = useRef(current);
  useEffect(() => {
    const nextSlide = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };
    timeout.current = setTimeout(nextSlide, 3000);
    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const previouSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const displayproperties = propertiesResult.map(
    (property: Props, index: any) => (
      <div className={style.heroSlide} key={property._id}>
        {index === current && (
          <SliderCard
            ID={property._id}
            images={property.propertyImages}
            tage={property.listingType}
            price={property.price}
            priceSymbol={property.priceSymbol}
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
            nextSlide={nextSlide}
            previouSlide={previouSlide}
          />
        )}
      </div>
    )
  );
  return (
    <>
      {displayproperties.length ? (
        <>
          <div className={style.bgContainer}>
            {/* <div className={style.container}> */}
            <div className={style.flexWrapper}>{displayproperties}</div>
            {/* </div> */}
          </div>
        </>
      ) : null}
    </>
  );
};

export default propertieSliderHome;