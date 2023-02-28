import { FC, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";

import { MdLocationPin, MdOutlineFavorite } from "react-icons/md";
import { FaBed, FaBath, FaUserCircle } from "react-icons/fa";
import { HiSquaresPlus } from "react-icons/hi2";
import { routes } from "../../../../../routes/routes";
import {
  formatToCurrency,
  numberWithCommas,
} from "../../../../../utils/formateNumbers";

interface propertiesList {
  ID?: any;
  image?: string;
  images?: any;
  tage?: string;
  price?: number;
  title?: string;
  location?: string;
  bed?: number;
  bath?: number;
  like?: boolean;
  agent?: string;
  agentImage?: string;
  squareFootage?: string;
  squareSymbol?: string;
  listingType?: string;
  firstname?: string;
  lastname?: string;
}
const style = {
  imgContainer: `max-w-[300px] lg:max-w-[250px] h-full flex rounded-xl flex-col relative`,
  image: ` w-full h-full object-cover flex rounded-xl `,
  textContainer: `px-[1em] py-[1em] capitalize `,
  listingType: `capitalize rounded-md text-[.65em]  text-white absolute py-1 px-1 text-center z-[90] top-2 left-2 `,
  sub: `flex items-center  leading space-x-5`,
  price: `text-[.9rem] lg:text-[1rem] bg-[#DADEFA] text-[#475BE8] rounded-md p-2 w-fit`,
  title: ` font-semibold text-[.8rem] md:text-sm  leading-10 mt-5`,
  location: `font-[400] text-[#8392A5] leading-10 flex items-center  flex-nowrap text-[.7rem] md:text-[.8rem] `,
  bed: `text-sm  leading-10 flex items-center`,
  span: `font-[400] text-[#8392A5] `,
  bath: `text-sm leading-10 flex items-center`,
  agent: `text-sm leading-10 font-[400] text-[#8392A5] ml-3`,
  agentImage: ` max-w-[35px]  h-[35px] rounded-full flex items-center`,
  imgAgent: ` w-full h-full rounded-full`,
  agentDetails: `flex items-center`,
};
const PropertiesListDashBoard: FC<propertiesList> = ({
  ID,
  image,
  images,
  tage,
  price,
  title,
  location,
  bed,
  bath,
  like,
  agent,
  agentImage,
  squareFootage,
  squareSymbol,
  listingType,
  firstname,
  lastname,
}) => {
  const [likes, setLike] = useState(false);

  const handleClick = () => {
    like = !like;
    console.log(like);
    setLike(like);
  };
  return (
    <div className="flex ">
      <Link to={`${routes.dashboardProperties}/${ID}`}>
        <div className={style.imgContainer}>
          <img
            alt={title}
            // effect="blur"
            src={images[0].url}
            className={style.image}
          />
          <p
            className={`${style.listingType} ${
              listingType === "sale" ? "bg-purple-500" : "bg-red-500"
            }`}
          >
            for {listingType}
          </p>
        </div>
      </Link>

      <div className={style.textContainer}>
        <p className={style.price}>$ {formatToCurrency(price!)}</p>
        <Link to={`${routes.dashboardProperties}/${ID}`}>
          <h1 className={style.title}>{title}</h1>
        </Link>
        <div className={style.location}>
          <MdLocationPin size={15} style={{ marginRight: "5px" }} />
          {location?.length! < 19
            ? location
            : `${location?.substring(0, 20)}...`}
          {/* {location?.length} */}
        </div>
        <p className={style.bath}>
          <span className={style.span}>
            <HiSquaresPlus size={15} style={{ marginRight: "5px" }} />
          </span>
          {numberWithCommas(squareFootage)} {squareSymbol}
        </p>
        <div className={style.sub}>
          <p className={style.bed}>
            <span className={style.span}>
              <FaBed size={15} style={{ marginRight: "5px" }} />
            </span>
            {bed} Bed
          </p>
          <p className={style.bath}>
            <span className={style.span}>
              <FaBath size={15} style={{ marginRight: "5px" }} />
            </span>
            {bath} Bath
          </p>
        </div>
        <div className={style.agentDetails}>
          <div className={style.agentImage}>
            {agentImage ? (
              <LazyLoadImage
                className={style.imgAgent}
                alt={title}
                effect="blur"
                src={agentImage}
              />
            ) : (
              <FaUserCircle color="#8392A5" size={15} />
            )}
          </div>
          <p className={style.agent}> {`${firstname} ${lastname}`}</p>
        </div>
      </div>
    </div>
  );
};

export default PropertiesListDashBoard;
