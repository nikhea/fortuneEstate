import { FC, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import "./properties.css";
import MainCard from "../../components/card/MainCard";
import PropertiesList from "../../components/propertiesList/propertiesList";
import Pagination from "../../components/UI/Pagination";
import NewListing from "../../components/propertiesList/newListing";
import FeaturedListing from "../../components/propertiesList/featuredListing";
import { propertiesData } from "../../data/property";
import {
  MdOutlineGridView,
  MdOutlineList,
  MdOutlineHome,
} from "react-icons/md";
import { getPropertiesByCountry } from "../../services/api/shared";
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
interface pageChange {
  selected?: any;
}
const properties: FC = () => {
  const { id, countrieName } = useParams();
  console.log(id, "countryid", countrieName);

  // const { data: propertiesdata, error } = useQuery(["properties", id], () =>
  //   getPropertiesByCountry(id)
  // );
  // const { properties } = propertiesdata?.data.attributes || {};
  // console.log(properties.length, "properties",);

  const propertiesLength = propertiesData.length;
  const [Slicedproperties] = useState(propertiesData);
  const [pageNumber, setPageNumber] = useState(0);
  const propertiesPerPage = 10;
  const productCount = Math.ceil(Slicedproperties.length / propertiesPerPage);
  const pagesVisted = pageNumber * propertiesPerPage;

  const displayproperties = Slicedproperties.slice(
    pagesVisted,
    pagesVisted + propertiesPerPage
  ).map((property, index) => (
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
  ));
  const descending = () => {
    return Slicedproperties.sort((a, b) => b - a);
  };
  const ascending = () => {
    return Slicedproperties.sort((a, b) => a - b);
  };
  const displaySlicedproperties = Slicedproperties.sort((a, b) => b - a)
    .slice(0, 3)
    .map((property, index) => (
      <div key={index}>
        <NewListing
          image={property.image}
          title={property.title}
          price={property.price}
          location={property.location}
          tage={property.tage}
        />
      </div>
    ));

  const pageChange = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className={style.bgContainer}>
      <div className=" col-start-1 col-end-7">
        <MainCard width={70}>
          <div className={style.header}>
            <div className={style.headerLength}>
              <div className={style.icons}>
                <MdOutlineHome size={40} color="#736efe" />
              </div>
              <div className={style.headerText}>
                <h1> {propertiesLength} available properties</h1>
              </div>
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
                <option onClick={ascending} value="Religious center ascending">
                  Religious center ascending
                </option>
                <option
                  onClick={descending}
                  value="Religious center descending"
                >
                  Religious center descending
                </option>
              </select>
            </div>
          </div>
          <div className={style.container}>{displayproperties}</div>
          <Pagination ItemCount={productCount} pageChange={pageChange} />
          <h1>properties Per Page{propertiesPerPage}</h1>
        </MainCard>
      </div>
      <div className={style.colLeft}>
        <div className={style.newListing}>
          <h1 className={style.newListingTitle}> search</h1>
          <h3 className="divider"></h3>
          <div>
            <div>{displaySlicedproperties}</div>
          </div>
        </div>
        <div className={style.newListing}>
          <h1 className={style.newListingTitle}>new listing</h1>
          <h3 className="divider"></h3>
          <div>
            <div>{displaySlicedproperties}</div>
          </div>
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
