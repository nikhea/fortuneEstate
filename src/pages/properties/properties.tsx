import { FC, useState } from "react";
import MainCard from "../../components/card/MainCard";
import PropertiesList from "../../components/propertiesList/propertiesList";
import Pagination from "../../components/UI/Pagination";
import { propertiesData } from "../../data/property";
const style = {
  bgContainer: `bg-[#F6F6F6] overflow-hidden`,
  container: ` w-full  md:grid grid-cols-1 md:grid-cols-2   m-0 p-0 `,
};
// container: ` w-full  grid  grid-cols-1 md:grid-cols-2 grid-rows-3  m-0 p-0 `,
interface pageChange {
  selected?:any
}
const properties: FC = () => {
  const [Slicedproperties] = useState(propertiesData);
  const [pageNumber, setPageNumber] = useState(0);
  const propertiesPerPage = 13;
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
      <MainCard width={60}>
        <div className={style.container}>{displayproperties}</div>
        <Pagination ItemCount={productCount} pageChange={pageChange} />
      </MainCard>
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
