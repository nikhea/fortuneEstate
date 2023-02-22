import { FC, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import { MdLocationPin, MdDelete, MdOutlineFavorite } from "react-icons/md";
import { FaBed, FaBath, FaEdit } from "react-icons/fa";
import { HiSquaresPlus } from "react-icons/hi2";
import { routes } from "../../../../../routes/routes";
import Tippy from "@tippyjs/react";
// import "tippy.js/dist/tippy.css";
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
  bedrooms?: number;
  bathrooms?: number;
  like?: boolean;
  agent?: string;
  agentImage?: string;
  squareFootage?: string;
  squareSymbol?: string;
  listingType?: string;
  firstname?: string;
  lastname?: string;
  priceSymbol?: string;
  category?: string;
  createdAt?: string;
  OnEditProperty: (id: string) => string;
  OnDeleteProperty: (id: string) => string;
}
const style = {
  container: `md:w-[90%] m-auto my-10`,
  cardContainer: ` mx-[5px] rounded-t-xl rounded-b-xl bg-white hover:shadow-xl  mb-5 transistion ease-out duration-1000 border border-t-[0px]  `,
  MainContainer: ``,
  imgContainer: `w-full flex rounded-t-xl flex-col relative [&>p]:hover:hidde [&>p]:transistion [&>p]:ease-in [&>p]:duration-3000`,
  image: ` w-full h-full object-cover flex rounded-t-xl `,
  textContainer: ` flex flex-col justify-between pt-[2em] px-[2em]`,
  sub: `flex justify-between items-center  mb-[20px] leading`,
  price: `text-[1.5rem] uppercase`,
  title: `font-bold text-xl leading-10`,
  location: `font-[400] text-[#8392A5] leading-10 flex items-center `,
  bed: `text-sm  leading-10 flex items-center`,
  span: `font-[400] text-[#8392A5]`,
  bath: `text-sm leading-10 flex items-center`,
  hr: `bg-[#8392a5] h-[.1px]   text-center flex items-center justify-center mb-5`,
  agent: `text-sm leading-10 font-[400] text-[#8392A5] ml-3`,
  agentImage: ` max-w-[35px]  h-[35px] rounded-full flex items-center`,
  imgAgent: ` w-full h-full rounded-full`,
  agentDetails: `flex items-center`,
  card: ` w-full rounded  md:block`,
  like: `cursor-pointer`,
  listingType: `capitalize rounded-full  bg-purple-500 text-white absolute py-1 px-3 text-center z-[90] top-2 left-3 transistion ease-out duration-1000`,
  tag: `rounded text-[0.7rem] py-1 px-3   block capitalize  flex bg-[#736EFE] outline-none text-white `,
  footerDelete: `cursor-pointer hover:text-red-500 `,
  footerEdit: `cursor-pointer hover:text-green-500 `,
};
const propertiesList: FC<propertiesList> = ({
  ID,
  image,
  images,
  tage,
  price,
  title,
  location,
  bedrooms,
  bathrooms,
  like,
  agent,
  agentImage,
  squareFootage,
  squareSymbol,
  listingType,
  firstname,
  lastname,
  priceSymbol,
  category,
  createdAt,
  OnEditProperty,
  OnDeleteProperty,
}) => {
  const [likes, setLike] = useState(false);

  const handleClick = () => {
    like = !like;
    console.log(like);
    setLike(like);
  };
  return (
    <div className={style.container}>
      {/* <SEO title={`continents/${title}`} /> */}

      <div className={style.cardContainer}>
        <div className={style.card}>
          <Link to={`${routes.property}/${ID}`} target="_blank">
            <div className={style.imgContainer}>
              <LazyLoadImage
                alt={title}
                effect="blur"
                src={images[0].url}
                className={style.image}
              />
              <p className={style.listingType}>for {listingType}</p>
            </div>
          </Link>
          <div className={style.textContainer}>
            <Link to={`${routes.property}/${ID}`} target="_blank">
              {/* to={`${routes.property}/${ID}`} */}
              <h1 className={style.title}>{title}</h1>
            </Link>
            <div className={style.sub}>
              <p className={style.price}>
                {priceSymbol} {formatToCurrency(price!)}
              </p>
            </div>
            <div className={style.location}>
              <MdLocationPin size={15} style={{ marginRight: "5px" }} />
              {location?.length! < 19
                ? location
                : `${location?.substring(0, 20)}...`}
              {/* {location?.length} */}
            </div>
            <div className={style.sub}>
              <p className={style.bed}>
                <span className={style.span}>
                  <FaBed size={15} style={{ marginRight: "5px" }} />
                </span>
                {bedrooms} Bed
              </p>
              <p className={style.bath}>
                <span className={style.span}>
                  <FaBath size={15} style={{ marginRight: "5px" }} />
                </span>
                {bathrooms} Bath
              </p>
              <p className={style.bath}>
                <span className={style.span}>
                  <HiSquaresPlus size={15} style={{ marginRight: "5px" }} />
                </span>
                {numberWithCommas(squareFootage)} {squareSymbol}
              </p>
            </div>
            <div className={style.hr}></div>
            <div className={style.sub}>
              {/* <div
                style={{
                  color: like ? "salmon" : "",
                }}
                onClick={handleClick}
                className={style.like}
              >
                <MdOutlineFavorite size={20} />
              </div> */}
              <Tippy content="Edit this Properties">
                <p
                  className={style.footerEdit}
                  onClick={() => OnEditProperty(ID)}
                >
                  <FaEdit size={19} style={{ marginRight: "5px" }} />
                </p>
              </Tippy>
              <Tippy content="Delete this Properties">
                <p
                  className={style.footerDelete}
                  onClick={() => OnDeleteProperty(ID)}
                >
                  <MdDelete size={19} style={{ marginRight: "5px" }} />
                </p>
              </Tippy>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default propertiesList;
