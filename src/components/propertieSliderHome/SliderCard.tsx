import { FC, useRef, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import { useCarousel } from "use-carousel-hook";
import { routes } from "../../routes/routes";
import { MdLocationPin } from "react-icons/md";
import { FaBed, FaBath } from "react-icons/fa";
import { HiSquaresPlus } from "react-icons/hi2";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { formatToCurrency, numberWithCommas} from "../../utils/formateNumbers";
import Button from "../UI/FormElement/Button";

interface Props {
  [x: string]: any;
  ID?: string;
  attributes?: any;
  name?: string;
  image?: string;
  images?: any;
  tage?: string;
  title?: string;
  price?: number;
  priceSymbol?: string;
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
  mainContainer: `flex items-center  justify-center absolute top-0 left-0 w-full h-full`,
  imgContainer: `w-full flex rounded-3xl flex-col relative w-[50%]`,
  textContainer: `mx-10 my  w-[50%] flex flex-col justify-between`,
  image: ` w-full h-full object-cover flex rounded-3xl object-cover`,
  listingType: `capitalize rounded-full  bg-purple-500 text-white absolute py-1 px-3 text-center z-[90] top-2 left-3 transistion ease-out duration-1000`,
  title: `font-bold text-3xl leading-10 capitalize`,
  discription: `font-light text-sm text-[#8392A5] mb-5`,
  location: `font-[400] text-[#8392A5] flex  `,
  moreDetails: `capitalize my-5 text-[#0D304A] cursor-pointer`,
  sub: `flex justify-between items-center  mb-[20px] leading text-xl`,
  bed: `  leading-10 flex items-center`,
  span: `font-[400] text-[#8392A5] `,
  bath: `leading-10 flex items-center`,
  priceContainer: `absolute bottom-2 left-[15%]  w-[60%] rounded-[10px] bg-[#0D304A] uppercase items-center text-center justify-between shadow-xl text-white py-1 px-5 my-3 `,
  price: `text-[2rem] text-bold text-center`,
  hr: `bg-[#8392a5] h-[.1px]   text-center flex items-center justify-center mb-5 w-full mt-9`,
  hrBig: `bg-[#8392a5] h-[2.9px]   text-center w-[40%] flex items-center justify-center my-5  rounded`,
  top: ``,
  middle: ``,
  bottom: ``,
  SliderController: `flex gap-10  justify-end `,
  previous: `w-[50px] h-[50px] bg-red-500 rounded-[50%]  cursor-pointer  grid items-center text-center`,
  next: `w-[50px] h-[50px] bg-red-500 rounded-[50%] grid items-center text-center cursor-pointer`,
};
// mainContainer: `flex flex-col md:flex-row`,
// previous: `w-[50px] h-[50px] bg-red-500 rounded-[50%] grid items-center text-center  cursor-pointer`,

const SliderCard: FC<Props> = ({
  ID,
  image,
  images,
  tage,
  price,
  priceSymbol,
  title,
  discription,
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
  nextSlide,
  previouSlide,
}) => {
  return (
    <div className={style.mainContainer}>
      <div className={style.imgContainer}>
        <img
          alt={title}
          // effect="blur"
          src={images[0].url}
          className={style.image}
        />
        <p className={style.listingType}>for {listingType}</p>
        <div className={style.priceContainer}>
          <h2 className={style.price}>
            {priceSymbol} {formatToCurrency(price!)}
          </h2>
        </div>
      </div>
      <div className={style.textContainer}>
        <div className={style.top}>
          <h1 className={style.title}>{title}</h1>
          <div className={style.hrBig}></div>
          <p className={style.discription}>
            {discription.length < 100
              ? discription
              : `${discription.substring(0, 200)}...`}
          </p>
          <div className={style.hr}></div>
        </div>
        <div className={style.middle}>
          <div className={style.location}>
            <MdLocationPin size={18} style={{ marginRight: "5px" }} />
            <p>{location}</p>
          </div>
          <Link to={`${routes.property}/${ID}`}>
            <p className={style.moreDetails}> more details {`>>`}</p>
          </Link>
          <div className={style.hr}></div>
        </div>
        <div className={style.bottom}>
          <div className={style.sub}>
            <p className={style.bed}>
              <span className={style.span}>
                <FaBed size={20} style={{ marginRight: "5px" }} />
              </span>
              {bed} Bed
            </p>
            <p className={style.bath}>
              <span className={style.span}>
                <FaBath size={20} style={{ marginRight: "5px" }} />
              </span>
              {bath} Bath
            </p>
            <p className={style.bath}>
              <span className={style.span}>
                <HiSquaresPlus size={20} style={{ marginRight: "5px" }} />
              </span>
              {numberWithCommas(squareFootage)} {squareSymbol}
            </p>
          </div>
          <div className={style.SliderController}>
            <div className={style.previous} onClick={() => previouSlide()}>
              {/* <AiOutlineArrowLeft style={{ marginRight: "50px" }} /> */}

              {`<<`}
            </div>
            <div className={style.next} onClick={() => nextSlide()}>{`>>`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
{
  /* <Link to={`${routes.property}/${ID}`}> */
}
