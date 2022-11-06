import { FC } from "react";
import "./hr.css";
import PropertiesCard from "../../../components/card/PropertyCard";

const additionalDetails: FC = () => {
  const style = {
    header: ` flex items-center  w-full mb-5`,
    title: `ml-5 capitalize font-[600] text-[1.75rem]`,
    details: ` items-center  justify-betwee  flex flex-wrap `,
    description: `py-4 w-[23%] font-[400] text-[#0D304A] text-base mr-[4rem]`,
    span: `capitalize`,
  };
  return (
    <PropertiesCard width={100} height={100}>
      <div>
        <header className={style.header}>
          <div className="hr"></div>
          <h1 className={style.title}>additional details</h1>
        </header>
        <div className={style.details}>
          <p className={style.description}>
            <span className={style.span}>property type : </span> villa
          </p>
          <p className={style.description}>
            <span className={style.span}>listing type : </span> for sale
          </p>
          <p className={style.description}>
            <span className={style.span}>listing ID : </span>1
          </p>
          <p className={style.description}>
            <span className={style.span}>price : </span> US 4,400,000
          </p>
          <p className={style.description}>
            <span className={style.span}>view : </span>garden
          </p>
          <p className={style.description}>
            <span className={style.span}>bedrooms : </span> 9
          </p>
          <p className={style.description}>
            <span className={style.span}>bathrooms : </span> 4
          </p>
          <p className={style.description}>
            <span className={style.span}>half bathrooms : </span> 0
          </p>
          <p className={style.description}>
            <span className={style.span}>square footage : </span> 3,200 Sqft
          </p>
          <p className={style.description}>
            <span className={style.span}>year built : </span> 2030
          </p>
          <p className={style.description}>
            <span className={style.span}>lot sqft : </span> 0 Sqft
          </p>
        </div>
      </div>
    </PropertiesCard>
  );
};

export default additionalDetails;
