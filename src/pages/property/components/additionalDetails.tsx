import { FC } from "react";
import "./hr.css";
import PropertiesCard from "../../../components/card/PropertyCard";
import {
  formatToCurrency,
  numberWithCommas,
} from "../../../utils/formateNumbers";
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
            <span className={style.span}>property type : </span> {propertyType}
          </p>
          <p className={style.description}>
            <span className={style.span}>listing type : </span> for{" "}
            {listingType}
          </p>
          <p className={style.description}>
            <span className={style.span}>listing ID : </span>1
          </p>
          <p className={style.description}>
            <span className={style.span}>price : </span> {priceSymbol}
            {formatToCurrency(price)}
          </p>
          <p className={style.description}>
            <span className={style.span}>view : </span>
            {view}
          </p>
          <p className={style.description}>
            <span className={style.span}>bedrooms : </span> {bed}
          </p>
          <p className={style.description}>
            <span className={style.span}>bathrooms : </span> {bath}
          </p>
          <p className={style.description}>
            <span className={style.span}>half bathrooms : </span>{" "}
            {halfBathrooms}
          </p>
          <p className={style.description}>
            <span className={style.span}>square footage : </span>
            {squareFootage} {numberWithCommas(squareFootage)}
          </p>
          <p className={style.description}>
            <span className={style.span}>year built : </span> {yearBuilt}
          </p>
          <p className={style.description}>
            <span className={style.span}>lot area : </span> {lotArea}{" "}
            {lotAreaSymbol}
          </p>
        </div>
      </div>
    </PropertiesCard>
  );
};

export default additionalDetails;
