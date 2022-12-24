import { FC, useState } from "react";
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
    [queryKeys.propertiesCountries, countryName],
    () => getPropertiesByCountry(countryName)
  );
  const properties = propertiesdata?.data;
  // const [properties, setproperties] = useState(propertiesdata?.data || [])
  if (isLoading) {
    return <h1>....Loading properties </h1>;
  }
  return (
    <div className={style.bgContainer}>
      <div className=" col-start-1 col-end-7">
        <PaginatedProperties properties={properties} />
      </div>
      <div className={style.colLeft}>
        <div className={style.newListing}>
          <h1 className={style.newListingTitle}> search</h1>
          <h3 className="divider"></h3>
          {/* <div><div>{displaySlicedproperties}</div></div> */}
        </div>
        <div className={style.newListing}>
          <h1 className={style.newListingTitle}>new listing</h1>
          <h3 className="divider"></h3>
          <div>{/* <div>{displaySlicedproperties}</div> */}</div>
        </div>
        <FeaturedListing />
      </div>
    </div>
  );
};

export default properties;

{
  /* {propertiesData.map((property, index) => (
          <div key={index}>
            <PropertiesList
              image={property.image}
              images={property.images}
              tage={property.tage}
              price={property.price}
              title={property.title}
              location={property.location}
              bed={property.bed}
              bath={property.bath}
              like={property.like}
              agent={property.agent}
              agentImage={property.agentImage}
            />
            
          </div>
        ))} */
}

// const descending = () => {
//   return Slicedproperties.sort((a, b) => b - a);
// };
// const ascending = () => {
//   return Slicedproperties.sort((a, b) => a - b);
// };
// const displaySlicedproperties = Slicedproperties.sort((a, b) => b - a)
//   .slice(0, 3)
//   .map((property: any, index: any) => (
//     <div key={index}>
//       <NewListing
//         image={property.image}
//         title={property.title}
//         price={property.price}
//         location={property.location}
//         tage={property.tage}
//       />
//     </div>
//   ));
