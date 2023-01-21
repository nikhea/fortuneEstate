import { FC } from "react";
import "./propertyCard.css";
interface propertiesCard {
  children: React.ReactNode;
  width?: number;
  height?: number;
}

const PropertiesCard: FC<propertiesCard> = ({ children, width, height }) => {
  const style = {
    container: `flex  w-full my-9`,
    cardContainer: `w-[${width}%]  rounded bg-white shadow-2xl py-[5e] bg-[#F6F6F6]`,
    card: ` w-full `,
    btn: `rounded-full   block uppercase flex bg-gradient-to-r from-cyan-500 to-blue-500 outline-none text-white `,
  };
  return (
    <div className={style.container}>
      <div style={{ width: `${width}vw` }} className="p">
        <div className={style.card}>{children}</div>
      </div>
    </div>
  );
};

export default PropertiesCard;
