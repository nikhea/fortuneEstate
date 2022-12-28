import { FC } from "react";
// import ReactQrCode from "react-qr-code";
import PropertiesCard from "../../../components/card/PropertyCard";
import {
  formatToCurrency,
  numberWithCommas,
} from "../../../utils/formateNumbers";
interface Props {
  title?: string;
  price?: number;
  priceSymbol?: string;
  location?: string;
  bed?: number;
  bath?: number;
  squareFootage?: string;
  squareSymbol?: string;
  listingType?: string;
}
const TitlePrice: FC<Props> = ({
  title,
  listingType,
  price,
  priceSymbol,
  squareSymbol,
  squareFootage,
  location,
  bath,
  bed,
}) => {
  const style = {
    container: `mx-9 w-[50%] m-auto`,
    Header: ``,
    titleHeader: `flex items-center `,
    title: `font-[500] text-3xl mr-8 drop-shadow-2xl my-5`,
    tag: `rounded text-[0.7rem] py-1 px-3   block capitalize  flex bg-[#736EFE] outline-none text-white `,
    priceContainer: `w-[60] rounded-[10px] bg-[#0D304A] flex items-center justify-between shadow-xl text-white py-1 px-5 my-3`,
    price: `text-[2rem] text-bold`,
    sqft: `text-[1.2rem]`,
    location: `font-[400] text-[#8392A5] leading-10 flex items-center text-xl my-3`,
    hr: ``,
    Bathcontainer: ` flex items-center justify-between my-5`,
    bed: ``,
    bath: ``,
  };
  return (
    <div
      className="w-[90%] m-auto"
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-duration="3000"
    >
      <PropertiesCard width={100} height={100}>
        <div className={style.container}>
          <header className={style.Header}>
            <div className={style.titleHeader}>
              <h1 className={style.title}>{title}</h1>
              <p className={style.tag}>for {listingType}</p>
            </div>
          </header>
          <div className={style.priceContainer}>
            <h2 className={style.price}>
              {priceSymbol} {formatToCurrency(price!)}
            </h2>
            <p className={style.sqft}>
              {numberWithCommas(squareFootage)}/{squareSymbol}
            </p>
          </div>
          <p className={style.location}>{location}</p>
          <hr className={style.hr} />
          <div className={style.Bathcontainer}>
            <p className={style.bed}>{bed} Bed</p>
            <p className={style.bath}>{bath} Bath</p>
          </div>
        </div>
      </PropertiesCard>
    </div>
  );
};

export default TitlePrice;
