import { FC } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import FeaturedListing from "../../components/propertiesList/featuredListing";
import ImageCard from "./components/image";
import TitlePrice from "./components/titlePrice";
import AdditionalDetails from "./components/additionalDetails";
import LocationAddress from "./components/LocationAddress";
import Description from "./components/Description";
import Details from "./components/Details";
import NeighborHood from "./components/neigborhood";
import AboutAuthors from "./components/abountAuthor";
import { queryKeys } from "../../utils/queryKey";
import { getSingelProperties } from "../../services/api/shared";
import SimilarProperties from "../../components/SimilarProperties/SimilarProperties";
import PageLoading from "../../components/UI/Loading/PageLoading";

const style = {
  container: ``,
  bgContainer: `bg-[#F6F6F6] py-[6em]  pl-[2em] overflow-hidden md:grid md:grid-cols-10 grid-row-3`,
  full: ` col-start-1 col-end-11`,
  bgHalf: `col-start-1 col-end-7`,
  bgSmall: `col-start-8 col-end-11`,
};
const property: FC = () => {
  const { id: propertyID } = useParams();
  const { data: propertydata, isLoading } = useQuery(
    [queryKeys.properties, propertyID],
    () => getSingelProperties(propertyID)
  );

  if (isLoading) {
    return <PageLoading />;
  }
  const {
    image,
    images,
    price,
    priceSymbol,
    title,
    bedrooms,
    bathrooms,
    squareFootage,
    squareSymbol,
    listingType,
    propertyType,
    address,
    description,
    view,
    halfBathrooms,
    lotAreaSymbol,
    lotArea,
    yearBuilt,
  } = propertydata?.data;

  return (
    <>
      <ImageCard />
      <div className={style.bgContainer}>
        <div className={style.full}></div>
        <div className={style.full}>
          <TitlePrice
            title={title}
            price={price}
            priceSymbol={priceSymbol}
            listingType={listingType}
            squareFootage={squareFootage}
            squareSymbol={squareSymbol}
            bath={bathrooms}
            bed={bedrooms}
            location={address.street}
          />
        </div>
        <div className={style.bgHalf}>
          <AdditionalDetails
            propertyType={propertyType}
            price={price}
            priceSymbol={priceSymbol}
            listingType={listingType}
            squareFootage={squareFootage}
            squareSymbol={squareSymbol}
            bath={bathrooms}
            bed={bedrooms}
            view={view}
            halfBathrooms={halfBathrooms}
            lotArea={lotArea}
            lotAreaSymbol={lotAreaSymbol}
            yearBuilt={yearBuilt}
          />
          <LocationAddress
            street={address.street}
            country={address.country}
            city={address.city}
          />
          <Description description={description} />
          <Details />
          <NeighborHood />
          <AboutAuthors />
        </div>
        <div className={style.bgSmall}>
          <FeaturedListing />
        </div>
        <div className={style.full}>
          <SimilarProperties />
        </div>
      </div>
    </>
  );
};

export default property;
