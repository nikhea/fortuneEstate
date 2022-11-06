import { FC } from "react";
import "./hr.css";
import PropertiesCard from "../../../components/card/PropertyCard";

const Neighborhood: FC = () => {
  const style = {
    header: ` flex items-center  w-full mb-5`,
    title: `ml-5 capitalize font-[600] text-[1.75rem]`,
    details: ` items-center  justify-betwee  flex flex-wrap `,
  };
  return (
    <PropertiesCard width={100} height={100}>
      <div>
        <header className={style.header}>
          <div className="hr"></div>
          <h1 className={style.title}>neighborhood</h1>
        </header>
      </div>
    </PropertiesCard>
  );
};

export default Neighborhood;
