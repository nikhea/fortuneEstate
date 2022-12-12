import { FC } from "react";
import { Link } from "react-router-dom";
// import { Tooltip as ReactTooltip } from "react-tooltip";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; //
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import BasicDetails from "../../uploads/components/form/BasicDetails";
import {
  MdLocationPin,
  MdOutlineFavoriteBorder,
  MdOutlineFavorite,
  MdDelete,
} from "react-icons/md";
import { FaBed, FaBath, FaUserCircle, FaEdit } from "react-icons/fa";
interface ListingCardProps {
  [x: string]: any;
  ID: string;
  title?: string;
  street?: string;
  price?: number;
  priceSymbol: string;
  category?: string;
  image?: string;
  listingType: string;
  createdAt: string;
  squareFootage: number;
  squareSymbol: string;
  bathrooms: number;
  bedrooms: number;
  firstname: string;
  lastname: string;
}
const style = {
  container: `lg:flex  bg-white my-9 shadow-2xl hover:cursor-pointe`,
  BasicDetails: `w-[60%] mx-10 my-5 capitalize flex flex-col justify-between`,
  headerSpan: `flex justify-between`,
  DetailStatus: ``,
  header: ``,
  ID: ``,
  title: ``,
  street: ``,
  price: ``,
  priceSymbol: ``,
  category: ``,
  imageContainer: `lg:w-[40%]  flex shadow-2xl `,
  image: `w-[100%] object-cover h-[350px] flex  `,
  listingType: ``,
  createdAt: ``,
  bathrooms: `text-md text-[#8392A5] flex items-baseline items-center`,
  span: `font-[100] text-[#8392A5]`,
  bedrooms: `text-sm  flex items-baseline items-center`,
  squareFootage: ``,
  lotAreaSymbol: ``,
  user: `flex `,
  firstname: `mr-4`,
  lastname: ``,
  DetailFooter: `flex justify-between `,
  footerRight: `flex gap-5`,
  footerLeft: `flex justify-between  gap-6 `,
  footerHover: `cursor-pointer`,
};
const ListingCard: FC<ListingCardProps> = ({
  ID,
  title,
  street,
  price,
  priceSymbol,
  category,
  image,
  listingType,
  createdAt,
  squareFootage,
  squareSymbol,
  bathrooms,
  bedrooms,
  firstname,
  lastname,
}) => {
  const OnEditProperty = (ID:string) => {};

  const OnDeleteProperty = (ID: string) => {};
  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <LazyLoadImage
          alt={title}
          effect="blur"
          src={image}
          className={style.image}
        />
      </div>
      <div className={style.BasicDetails}>
        <div className={style.header}>
          <span className={style.headerSpan}>
            {title && <h1 className={style.title}>{title}</h1>}
            <p className={style.price}>
              {priceSymbol} {price}
            </p>
          </span>
          <div className={style.user}>
            {firstname && <h3 className={style.firstname}>{firstname}</h3>}
            {lastname && <h3 className={style.lastname}>{lastname}</h3>}
          </div>
        </div>
        <div className={style.DetailStatus}>
          <h1 className={style.squareFootage}>
            details : {squareFootage}/{squareSymbol}
          </h1>
          {category && <h3 className={style.category}>{category}</h3>}
        </div>
        <div className={style.DetailFooter}>
          <div className={style.footerRight}>
            <p className={style.bathrooms}>
              <span className={style.span}>
                <FaBath size={19} style={{ marginRight: "5px" }} />
              </span>
              {bathrooms} bath
            </p>
            <p className={style.bedrooms}>
              <span className={style.span}>
                <FaBed size={19} style={{ marginRight: "5px" }} />
              </span>
              {bedrooms} bed
            </p>
          </div>
          <div className={style.footerLeft}>
            <Tippy content="Edit this Properties">
              <p className={style.footerHover} onClick={() => OnEditProperty(ID)}>
                <FaEdit size={19} style={{ marginRight: "5px" }} />
              </p>
            </Tippy>
            <Tippy content="Delete this Properties">
              <p className={style.footerHover} onClick={() => OnDeleteProperty(ID)}>
                <MdDelete size={19} style={{ marginRight: "5px" }} />
              </p>
            </Tippy>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
