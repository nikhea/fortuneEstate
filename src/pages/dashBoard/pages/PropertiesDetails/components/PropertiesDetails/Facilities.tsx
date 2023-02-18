import React, { FC } from "react";
import { IProperyDetails } from "../../../../../../interfaces/property";
import { MdLocationPin } from "react-icons/md";
import { FaBed, FaBath } from "react-icons/fa";
import { HiSquaresPlus, HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { GrView } from "react-icons/gr";
import { GiCalendarHalfYear } from "react-icons/gi";
import { VscTypeHierarchySuper } from "react-icons/vsc";
import {
  formatToCurrency,
  numberWithCommas,
} from "../../../../../../utils/formateNumbers";
// grid grid-cols-2 md:grid-cols-3
const style = {
  header: ` flex items-center  w-full mb-5`,
  title: `ml-5 capitalize font-[600] text-[1.75rem]`,
  details: ` grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full place-items-center text-[#2B2B2B] capitalize`,
  description: `w-full py-4  font-[400]  text-lg lg:text-base flex items-center`,
  span: `capitalize`,
};
// lg:w-[23%]  flex flex-col md:flex-row flex-wrap capitalize w-fulltext-[#0D304A]
const Facilities: FC<IProperyDetails> = ({
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
  return (
    <div className=" my-10">
      <header className={style.header}>
        <div className="hr"></div>
        <h1 className={style.title}>additional details</h1>
      </header>
      <div className={style.details}>
        <p className={style.description}>
          <span className={style.span}>
            <HiOutlineBuildingOffice2
              size={20}
              style={{ marginRight: "15px" }}
            />
          </span>
          {propertyType}
        </p>
        <p className={style.description}>
          <span className={style.span}>
            <VscTypeHierarchySuper size={20} style={{ marginRight: "15px" }} />
          </span>{" "}
          For {listingType}
        </p>
        {/* <p className={style.description}>
          <span className={style.span}>listing ID : </span>1
        </p> */}
        {/* <p className={style.description}>
          <span className={style.span}>
            <IoIosPricetags size={20} style={{ marginRight: "15px" }} />
          </span>
          {priceSymbol}
          {formatToCurrency(price)}
        </p> */}
        <p className={style.description}>
          <span className={style.span}>
            <GrView size={20} style={{ marginRight: "15px" }} />
          </span>
          {view}
        </p>
        <p className={style.description}>
          <span className={style.span}>
            <FaBath size={20} style={{ marginRight: "15px" }} />
          </span>
          {bed <= 1 ? `  ${bed} bed` : `${bed} beds`}
        </p>
        <p className={style.description}>
          <span className={style.span}>
            <FaBath size={20} style={{ marginRight: "15px" }} />
          </span>
          {bath <= 1 ? `  ${bath} bath` : `${bath} baths`}
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
          {numberWithCommas(squareFootage)} {squareSymbol}
        </p>
      </div>
    </div>
  );
};

export default Facilities;
