import { FC } from "react";
import { Link } from "react-router-dom";
import PropertiesList from "../../components/propertiesList/propertiesList";
import { useQuery } from "react-query";
import { getAllProperties } from "../../services/api/shared";
import { queryKeys } from "../../utils/queryKey";
import Button from "../UI/FormElement/Button";

import propertiesList from "../../pages/dashBoard/pages/ListingManaga/components/propertiesList";
import { routes } from "../../routes/routes";
import PageLoading from "../UI/Loading/PageLoading";
interface Props {
  [x: string]: any;
  ID?: string;
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
  listingType?: string;
  firstname?: string;
  lastname?: string;
}
const style = {
  bgContainer: `bg-[#F6F6F6] py-[1em]  px-[2em] `,
  container: `w-[80%] m-auto my-10 text-center`,
  textContainer: `flex items-center text-center flex-col`,
  gridContainer: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 `,
  image: `w-full h-full object-cover relative rounded`,
  title: `text-[36px] tracking-wide `,
  description: `text-[#999] text-[16px] mb-10 mt-5 tracking-widest `,
  gridItem: `relative rounded  h-[400px] object-cover`,
  hr: `m-5`,

  text: `text-3xl uppercase 
    font-[500] mb-3 `,
  subText: `text-xl uppercase 
    font-[300] `,
};
const golbalProperties: FC<Props> = () => {
  const { data: properties, isLoading } = useQuery(
    [queryKeys.properties],
    getAllProperties
  );
  if (!properties) return;
  if (isLoading) {
    return <PageLoading />;
  }
  const propertiesResult = properties?.data.results[0].data || [];
  const displayproperties = propertiesResult
    .slice(0, 6)
    .map((property: Props, index: any) => (
      <div key={index}>
        <PropertiesList
          ID={property._id}
          images={property.propertyImages}
          // images={property.images}
          tage={property.listingType}
          price={property.price}
          title={property.title}
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
      {displayproperties.length !== 0 ? (
        <div
        // data-aos="fade-up"
        // data-aos-easing="ease-in-out"
        // data-aos-duration="3000"
        >
          <div className={style.bgContainer}>
            <div className={style.container}>
              <h1 className={style.text}>Recent Properties</h1>
              <p className={style.subText}>Check Out My Recent</p>
            </div>
            <div className={style.gridContainer}>{displayproperties}</div>
            <div className={style.container}>
              <Link to={routes.properties}>
                <Button rounded linearGradient uppercase primary>
                  all properties
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default golbalProperties;
// text: `text-white uppercase
// font-[500] absolute z-50 top-0 bottom-0
// left-0 right-0 hover:bg-gradient-to-tl
// from-black
// bg-fixed flex items-end
//  justify-center transistion
// ease-out duration-1000 rounded`,
// };
