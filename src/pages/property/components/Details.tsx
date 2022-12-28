import { FC } from "react";
import "./hr.css";
import PropertiesCard from "../../../components/card/PropertyCard";

const Details: FC = () => {
  const style = {
    header: ` flex items-center  w-full mb-5`,
    title: `ml-5 capitalize font-[600] text-[1.75rem]`,
    details: ` items-center  justify-betwee  flex flex-wrap `,
  };
  return (
    <span
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-duration="15000"
    >
      <PropertiesCard width={100} height={100}>
        <div>
          <header className={style.header}>
            <div className="hr"></div>
            <h1 className={style.title}> details</h1>
          </header>
        </div>
      </PropertiesCard>
    </span>
  );
};

export default Details;
