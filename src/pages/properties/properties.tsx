import { FC } from "react";
import MainCard from "../../components/card/MainCard";
import PropertiesList from "../../components/propertiesList/propertiesList";
import { propertiesData } from "../../data/property";
const style = {
  bgContainer: `bg-[#F6F6F6] overflow-hidden`,
  container: ` w-full  md:grid grid-cols-1 md:grid-cols-2   m-0 p-0 `,

};
// container: ` w-full  grid  grid-cols-1 md:grid-cols-2 grid-rows-3  m-0 p-0 `,

const properties: FC = () => {
  return (
    <div className={style.bgContainer}>
      <MainCard width={60}>
       <div className={style.container}>
       {propertiesData.map((property, index) => (
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
        ))}
       </div>
      </MainCard>
      
    </div>
  );
};

export default properties;
