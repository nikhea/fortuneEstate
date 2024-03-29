import "./style/dashboardPropertiesDetails.css";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import PageLoading from "../../../../components/UI/Loading/PageLoading";
import { getSingelProperties } from "../../../../services/api/shared";
import { queryKeys } from "../../../../utils/queryKey";
import { IoIosArrowBack } from "react-icons/io";
import { routes } from "../../../../routes/routes";
import PropertiesDetailsPage from "./components/PropertiesDetails/PropertiesDetails";
import AgentDetails from "./components/AgentDetails/AgentDetails";
import OpenStreetMap from "../../../../components/Map/Map";

const style = {
  title: ` flex items-center text-2xl text-[#11142D] font-normal text-[2rem]`,
  // dividerThreeColumn: `grid gap-4 grid-cols-1 lg:grid-cols-3 `,
  dividerTwoColumn: `grid gap-4 grid-cols-12 mt-[2rem] `,
};
const PropertiesDetails = () => {
  const { PropertyId: propertyID } = useParams();
  const { data: propertydata, isLoading } = useQuery(
    [queryKeys.properties, propertyID],
    () => getSingelProperties(propertyID)
  );
  if (!propertydata) return <PageLoading />;
  // console.log(propertydata.data.user, "propertiu");

  // const {
  // price,
  // priceSymbol,
  // title,
  // bedrooms,
  // bathrooms,
  // squareFootage,
  // squareSymbol,
  // listingType,
  // propertyType,
  // address,
  // description,
  // view,
  // halfBathrooms,
  // lotAreaSymbol,
  // lotArea,
  // yearBuilt,
  // } = propertydata?.data;

  return (
    <div className="dashboardPropertiesDetails dashboardPropertiesDetailspadding ">
      <Link
        to={`${routes.dashboardProperties}`}
        className="flex items-start w-fit "
      >
        <h1 className={style.title}>
          <IoIosArrowBack size={25} style={{ marginRight: "10px" }} /> Details
        </h1>
      </Link>
      <h1 className=""></h1>
      {isLoading ? (
        <PageLoading />
      ) : (
        <div className={style.dividerTwoColumn}>
          <span className=" col-span-full lg:col-start-1 lg:col-end-9">
            <PropertiesDetailsPage property={propertydata.data} ID={""} />
          </span>
          <span className=" col-span-full lg:col-start-9 lg:col-end-13 ">
            <AgentDetails
              property={propertydata.data}
              agent={propertydata.data.user}
            />
          </span>
        </div>
      )}
    </div>
  );
};

export default PropertiesDetails;
