import { FC } from "react";
import "./hr.css";
import PropertiesCard from "../../../components/card/PropertyCard";
import Map from "../../../components/Map/Map";
interface Props {
  street: string;
  country: string;
  city: string;
  address: any;
}
const additionalDetails: FC<Props> = ({ street, country, city, address }) => {
  const style = {
    header: ` flex items-center  w-full mb-5`,
    title: `ml-5 capitalize font-[600] text-[1.75rem]`,
    details: ` items-center  justify-between  flex flex-wrap `,
    description: `py-4 w-[23%] capitalize font-[400] text-[#0D304A] text-[1rem] mr-[4rem]`,
    span: `capitalize`,
  };
  return (
    <span
    // data-aos="fade-up"
    // data-aos-easing="ease-in-out"
    // data-aos-duration="8000"
    >
      {/* <PropertiesCard width={100} height={100}> */}
      <div>
        <header className={style.header}>
          <div className="hr"></div>
          <h1 className={style.title}>location address</h1>
        </header>
        <div className={style.details}>
          <p className={style.description}>
            <span className={style.span}>country : </span> {country}
          </p>
          <p className={style.description}>
            <span className={style.span}>street : </span> {street}
          </p>
          <p className={style.description}>
            <span className={style.span}>city : </span>
            {city}
          </p>
          <p className={style.description}>
            <span className={style.span}>floor number : </span>1
          </p>
          <p className={style.description}>
            <span className={style.span}>longitude : </span> W60 22'5"
          </p>
          <p className={style.description}>
            <span className={style.span}>latitude : </span> N30 22'5"
          </p>
        </div>
      </div>
      {/* {address && <Map address={address} />} */}
      {/* </PropertiesCard> */}
    </span>
  );
};

export default additionalDetails;
