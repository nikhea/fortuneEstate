import { FC, useState } from "react";
import PropertiesList from "../../../components/propertiesList/propertiesList";
import Pagination from "../../../components/UI/Pagination";
import MainCard from "../../../components/card/MainCard";
import {
  MdOutlineGridView,
  MdOutlineList,
  MdOutlineHome,
} from "react-icons/md";
interface paginatedPropertiesProps {
  properties: [];
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
interface pageChange {
  selected?: any;
}
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
const paginatedProperties: FC<paginatedPropertiesProps> = ({ properties }) => {
  const displayproperties = properties.map((property: Props, index: any) => (
    <div key={index}>
      <PropertiesList
        ID={property._id}
        image={property.image}
        // images={property.images}
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

  return <div className={style.container}>{displayproperties}</div>;
};

export default paginatedProperties;

{
  /* <div className={style.header}>
<div className={style.headerLength}>
  <div className={style.icons}>
    <MdOutlineHome size={40} color="#736efe" />
    </div>
  <div className={style.headerText}>
    <h1> {propertiesLength} available properties</h1> */
}
{
  /* </div>
</div>

<div className={style.headerSort}>
  <div className={style.headerView}>
    <div className={style.icons}>
      <MdOutlineList size={30} color="#" />
    </div>
    <div className={style.icons}>
      <MdOutlineGridView size={30} color="#" />
    </div>
  </div>
  <select className={style.headerSelect}>
    <option value="Religious center ascending">
      Religious center ascending
    </option>
    <option value="Religious center descending">
      Religious center descending
    </option>
  </select>
</div>
</div> */
}
