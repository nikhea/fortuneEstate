import { FC } from "react";
import "./hr.css";
import PropertiesCard from "../../../components/card/PropertyCard";
import {
  formatToCurrency,
  numberWithCommas,
} from "../../../utils/formateNumbers";
import { HiOutlineBuildingOffice2, HiSquaresPlus } from "react-icons/hi2";
import { VscTypeHierarchySuper } from "react-icons/vsc";
import { GrView } from "react-icons/gr";
import { FaBath } from "react-icons/fa";
import { GiCalendarHalfYear } from "react-icons/gi";
interface Props {
  price: number;
  priceSymbol: string;
  bed: number;
  bath: number;
  squareFootage: number;
  squareSymbol: string;
  listingType: string;
  propertyType: string;
  view: string;
  halfBathrooms: number;
  lotAreaSymbol: string;
  lotArea: number;
  yearBuilt: number;
}
const additionalDetails: FC<Props> = ({
  price,
  priceSymbol,
  bed,
  bath,
  squareFootage,
  squareSymbol,
  listingType,
  propertyType,
  view,
  halfBathrooms,
  lotAreaSymbol,
  lotArea,
  yearBuilt,
}) => {
  const style = {
    header: ` flex items-center  w-full mb-5`,
    title: `ml-5 capitalize font-[600] text-[1.75rem]`,
    details: ` lg:items-center  justify-between  flex flex-col md:flex-row flex-wrap capitalize`,
    description: `py-4 lg:w-[23%]  font-[400] text-[#0D304A] text-lg lg:text-base mr-[4rem] flex items-center`,
    span: `capitalize`,
  };
  return (
    <span>
      {/* <PropertiesCard width={100} height={100}> */}
      <div>
        <header className={style.header}>
          <div className="hr"></div>
          <h1 className={style.title}>additional details</h1>
        </header>
        <div className={style.details}>
          <p className={style.description}>
            <span className={style.span}>
              {" "}
              <HiOutlineBuildingOffice2
                size={20}
                style={{ marginRight: "15px" }}
              />{" "}
            </span>{" "}
            {propertyType}
          </p>
          <p className={style.description}>
            <span className={style.span}>
              <VscTypeHierarchySuper
                size={20}
                style={{ marginRight: "15px" }}
              />
            </span>
            for {listingType}
          </p>

          <p className={style.description}>
            <span className={style.span}>
              <GrView size={20} style={{ marginRight: "15px" }} />{" "}
            </span>
            {view} view
          </p>

          <p className={style.description}>
            <span className={style.span}>
              <FaBath size={20} style={{ marginRight: "15px" }} />
            </span>
            {halfBathrooms <= 1
              ? `  ${halfBathrooms} half Bathroom`
              : `${halfBathrooms} half Baths`}
          </p>

          <p className={style.description}>
            <span className={style.span}>
              <GiCalendarHalfYear size={20} style={{ marginRight: "15px" }} />
            </span>
            {yearBuilt}
          </p>
          <p className={style.description}>
            <span className={style.span}>
              <HiSquaresPlus size={20} style={{ marginRight: "15px" }} />
            </span>
            {numberWithCommas(lotArea)} {lotAreaSymbol}
          </p>
          <p className={style.description}></p>
        </div>
      </div>
      {/* </PropertiesCard> */}
    </span>
  );
};

export default additionalDetails;
