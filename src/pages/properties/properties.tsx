import { FC } from "react";
// import { useQuery } from "@tanstack/react-query";
import { useQuery } from "react-query";

import { useParams } from "react-router-dom";
import "./properties.css";
import PropertiesList from "../../components/propertiesList/propertiesList";
import Pagination from "../../components/UI/Pagination";
import NewListing from "../../components/propertiesList/newListing";
import FeaturedListing from "../../components/propertiesList/featuredListing";
import paginatedProperties from "./paginatedProperties";
// import { propertiesData } from "../../data/property";
import { queryKeys } from "../../utils/queryKey";
import { getPropertiesByCountry } from "../../services/api/shared";
import PaginatedProperties from "./paginatedProperties";
import PageLoading from "../../components/UI/Loading/PageLoading";
import SimilarProperties from "../../components/SimilarProperties/SimilarProperties";
import PropertieSide from "../../components/PropertieSide";
const style = {
  bgContainer: `bg-[#F6F6F6] py-[6em]  pl-[2em] overflow-hidden md:grid md:grid-cols-10`,
  container: ` w-full md:grid grid-cols-1 md:grid-cols-2   m-0 p-0 `,
  colLeft: ` flex flex-col  col-start-8 col-end-11 -mt-10 m-auto ml-[1em] mr-[2em]    `,
  newListing: ``,
  newListingTitle: `text-[1.5rem] uppercase z-1 p-0 text-[#0D304A] text-center  unset font-[500] m-10`,
  header: `flex  justify-between items-center my-20 mx-10`,
  icons: `text-[#09203F] cursor-pointer hover:text-[#736efe] active:text-[#736efe] mx-1`,
  headerText: `mt-[px] capitalize text-[#09203F] font-bold tracking-widest `,
  headerLength: `flex items-end `,
  headerView: `flex items-center `,
  headerSort: `flex items-center`,
  headerSelect: `ml-5`,
  full: ` col-start-1 col-end-11`,
};
// container: ` w-full  grid  grid-cols-1 md:grid-cols-2 grid-rows-3  m-0 p-0 `,
interface propertiesProps {
  displayproperties: any;
  pageCount?: any;
  pageChange: any;
  propertiesPerPage: number;
  propertiesCount: number;
}

const properties: FC<propertiesProps> = ({
  displayproperties,
  propertiesCount,
  pageChange,
  // pageCount,
  propertiesPerPage,
}) => {
  const { countryName } = useParams();
  const { data: propertiesdata, isLoading } = useQuery(
    [queryKeys.properties, countryName],
    () => getPropertiesByCountry(countryName)
  );
  const properties = propertiesdata?.data || [];
  const message = propertiesdata?.message;

  if (isLoading) {
    return <PageLoading />;
  }
  // let p = properties.map((prop: any) => {
  //   console.log(prop);

  //   return (
  //     <div key={prop._id}>
  //       {JSON.stringify(prop)}
  //       {prop.title}
  //       jiouhiu
  //     </div>
  //   );
  // });
  return (
    <div className={style.bgContainer}>
      <div className=" col-start-1 col-end-7 w-full">
        {properties.length > 0 ? (
          <PaginatedProperties properties={properties} />
        ) : (
          message
        )}
      </div>
      <PropertieSide />
    </div>
  );
};

export default properties;

{
  /* <div className={style.colLeft}>
<div className={style.newListing}>
  <h1 className={style.newListingTitle}> search</h1>
  <h3 className="divider"></h3>
</div>
<div className={style.newListing}>
  <h1 className={style.newListingTitle}>new listing</h1>
  <h3 className="divider"></h3>
</div>
{/* <FeaturedListing /> */
}
// </div>
// {/* <div className={style.full}>
// <SimilarProperties />
// </div> */}
