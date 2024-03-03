import { FC } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { queryKeys } from "../../utils/queryKey";
import { getSingelProperties } from "../../services/api/shared";
import PageLoading from "../../components/UI/Loading/PageLoading";
import ImageCard from "../dashBoard/pages/PropertiesDetails/components/ImageCard";
import ImageCover from "./components/imageCover";
import Images from "./components/images";
import Content from "./components/Content";
import AdditionalDetails from "./componentsold/additionalDetails";
import LocationAddress from "./componentsold/LocationAddress";
import Description from "./componentsold/Description";
import AboutAuthor from "./componentsold/abountAuthor";
import FormRequest from "./components/FormRequest";
import SimilarProperties from "../../components/SimilarProperties/SimilarProperties";

const style = {
  // ImageBgContainer: ` w-[90%] lg:w-[70%] !h-[50%] m-auto lg:grid md:grid-cols-10 gap-10 mt-[80px]`,

  // py-[6em]  overflow-hidden md:grid md:grid-cols-10 w-[90%] m-auto gap-10
  container: ``,
  card: ` bg-slate-50 border-solid p-5 h-fit  rounded-xl border  border-gray-300 `,
  ImageBgContainer: `w-[90%] lg:w-[70%] m-auto  lg:grid lg:grid-cols-10 gap-10 mt-[60px]`,
  bgHalf: `col-start-1 col-end-7  w-full h-auto `,
  bgSmall: `col-start-7 col-end-11  h-auto space-y-12 mt-16 lg:mt-0`,
};
// aspect-w-16 aspect-h-9
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
    propertyImages,
    user,
  } = propertydata?.data;

  return (
    <>
      {/* propertyImages={propertyImages} */}
      <div className={style.ImageBgContainer}>
        <div className={style.bgHalf}>
          <ImageCover image={propertyImages[0]} />
        </div>
        <div className={style.bgSmall}>
          <Images propertyImages={propertyImages} />
        </div>
      </div>
      <div className={`${style.ImageBgContainer} lg:max-h-[300px]`}>
        <div className={style.bgHalf}>
          <div className={style.card}>
            <Content
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
        </div>
        <div className={style.bgSmall}>
          <div className={style.card}>
            <FormRequest />
          </div>
        </div>
      </div>
      <div className={style.ImageBgContainer}>
        <div className={style.bgHalf}>
          <div className={style.card}>
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
          </div>
        </div>
      </div>
      <div className={style.ImageBgContainer}>
        <div className={style.bgHalf}>
          <div className={style.card}>
            <LocationAddress
              address={address}
              street={address.street}
              country={address.country}
              city={address.city}
            />
          </div>
        </div>
      </div>
      <div className={style.ImageBgContainer}>
        <div className={style.bgHalf}>
          <div className={style.card}>
            <Description description={description} />
          </div>
        </div>
      </div>
      <div className={style.ImageBgContainer}>
        <div className={style.bgHalf}>
          <div className={style.card}>
            <AboutAuthor user={user} />
          </div>
        </div>
      </div>
      {/* <div className={style.ImageBgContainer}>
        <div className={style.bgHalf}>
          <div className={style.card}>
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
          </div>
        </div>
      </div> */}
      <SimilarProperties />
    </>
  );
};

export default property;
{
  /* <div className={style.bgHalf}>
          <div className={style.card}></div>
        </div>
        <div className={style.bgSmall}>
          <div className={style.card}></div>
        </div> */
}
// const style = {
//   container: ``,
//   card: ` bg-slate-50 border-solid   h-fit  rounded-xl border  border-gray-300 `,
//   ImageBgContainer: `h-[30vh] py-[6em] h-fit overflow-hidden md:grid md:grid-cols-10 w-[90%] m-auto gap-10`,
//   full: ` col-start-1 col-end-11`,
//   bgHalf: `col-start-1 col-end-7  w-full h-fit`,
//   bgSmall: `col-start-7 col-end-11  h-full space-y-12`,
// };
