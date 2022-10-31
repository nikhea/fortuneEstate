import { FC, useState } from "react";
import "./properties.css"
import MainCard from "../../components/card/MainCard";
import PropertiesList from "../../components/propertiesList/propertiesList";
import Pagination from "../../components/UI/Pagination";
import { propertiesData } from "../../data/property";
const style = {
  bgContainer: `bg-[#F6F6F6] py-[6em]  pl-[2em] overflow-hidden md:grid md:grid-cols-10`,
  container: ` w-full md:grid grid-cols-1 md:grid-cols-2   m-0 p-0 `,
  newListing: `col-start-8 col-end-10`,
  newListingTitle: `text-[1.5rem] uppercase z-1 p-0 text-[#0D304A] text-center  unset font-[500]`,
};
// container: ` w-full  grid  grid-cols-1 md:grid-cols-2 grid-rows-3  m-0 p-0 `,
interface pageChange {
  selected?: any;
}
const properties: FC = () => {
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
  const pageChange = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className={style.bgContainer}>
      <div className=" col-start-1 col-end-7">
        <MainCard width={70}>
          <h1>propertiesLength{propertiesLength}</h1>
          <div className={style.container}>{displayproperties}</div>
          <Pagination ItemCount={productCount} pageChange={pageChange} />
          <h1>properties Per Page{propertiesPerPage}</h1>
        </MainCard>
      </div>
      <div className={style.newListing}>
        <h1 className={style.newListingTitle}> new listing</h1>
        <h3 className="divider"></h3>
        <MainCard width={20}>
          <h1>lorem ipsum dolor sit amet, consectetur adip</h1>
        </MainCard>
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
