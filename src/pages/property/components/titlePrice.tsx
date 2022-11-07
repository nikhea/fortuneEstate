import { FC } from "react";
// import ReactQrCode from "react-qr-code";
import PropertiesCard from "../../../components/card/PropertyCard";

const TitlePrice: FC = () => {
  const style = {
    container: `mx-9 w-[50%] m-auto`,
    Header: ``,
    titleHeader: `flex items-center `,
    title: `font-[500] text-3xl mr-8 drop-shadow-2xl my-5`,
    tag: `rounded text-[0.7rem] py-1 px-3   block capitalize  flex bg-[#736EFE] outline-none text-white `,
    priceContainer: `w-[60%] rounded-[10px] bg-[#0D304A] flex items-center justify-between shadow-xl text-white py-1 px-5 my-3`,
    price: `text-[2rem] text-bold`,
    sqft: `text-[1.2rem]`,
    location: `font-[400] text-[#8392A5] leading-10 flex items-center text-xl my-3`,
    hr: ``,
    Bathcontainer: ` flex items-center justify-between my-5`,
    bed: ``,
    bath: ``,
  };
  return (
    <div className="w-[90%] m-auto">
      <PropertiesCard width={100} height={100}>
        <div className={style.container}>
          <header className={style.Header}>
            <div className={style.titleHeader}>
              <h1 className={style.title}>5 Bedroom Villla</h1>
              <p className={style.tag}>for sale</p>
            </div>
          </header>
          <div className={style.priceContainer}>
            <h2 className={style.price}>US $,400,000</h2>
            <p className={style.sqft}>1,375/sqft</p>
          </div>
          <p className={style.location}>Sandy Lane, Saint James</p>
          <hr className={style.hr} />
          <div className={style.Bathcontainer}>
            <p className={style.bed}>5 Bed</p>
            <p className={style.bath}>4 Bath</p>
          </div>
        </div>
      </PropertiesCard>
    </div>
  );
};

export default TitlePrice;
