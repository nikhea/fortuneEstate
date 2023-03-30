import { FC, Key } from "react";
import { useQuery } from "react-query";
import { getAllProperties } from "../../services/api/shared";
import { queryKeys } from "../../utils/queryKey";
import {
  MdLocationPin,
  MdOutlineFavoriteBorder,
  MdOutlineFavorite,
} from "react-icons/md";
import { FaBed, FaBath } from "react-icons/fa";
import { HiSquaresPlus } from "react-icons/hi2";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { formatToCurrency, numberWithCommas } from "../../utils/formateNumbers";
import { routes } from "../../routes/routes";
import { Link } from "react-router-dom";
import PageLoading from "../UI/Loading/PageLoading";
import { AllPropertiesPlaceHolderData } from "../../data/AllPropertiesPlaceHolderData";

const style = {
  container: `w-[80%] m-auto my-10 leading-[100px]`,
  similar: `font-semibold text-xl uppercase text-center`,
  mainContainer: `w-full flex rounded-xl flex-col relative `,
  image: ` w-full h-full object-cover flex rounded-xl  `,
  textContainer: `rounded-b-xl flex flex-col justify-between pt-[1em] px-[1em] absolute bottom-0  left-0 right-0 z-20 `,
  bgWhite: `pt-[1em] px-[1em] absolute bottom-0 bg-white left-0 right-0 rounded-b-xl hidde bg-gradient-to-r from-cyan-500 to-blue-500 text-white`,
  title: `font-bold text-xl `,
  location: `font-[400]   flex items-center hidden md:flex`,
  bed: `text-sm   flex items-center`,
  span: `font-[400] `,
  bath: `text-sm  flex items-center`,
  sub: `flex justify-between items-center my-2`,
  price: `text-[1.5rem]`,
  textPrice: `text-white mb-[50px] md:mb-[70px]`,
  listingType: `capitalize rounded-md   text-white absolute py-1 px-3 text-center z-[90] top-2 left-3 transistion ease-out duration-1000`,
  imgContainer: `w-full flex rounded-t-xl flex-col relative [&>p]:hover:hidde [&>p]:transistion [&>p]:ease-in [&>p]:duration-3000`,

  overlay: `h-full w-full -z-10 top-0 left-0 absolute bg-gradient-to-tl from-black overflow-hidden z-10 rounded-xl`,
};
const SimilarProperties: FC<Props> = () => {
  let propertiesResult, loadProperties;
  const {
    data: properties,
    isLoading,
    status,
  } = useQuery<any>([queryKeys.properties], getAllProperties, {
    placeholderData: AllPropertiesPlaceHolderData,
  });
  if (!properties) return;
  if (status === "success") {
    const p = properties?.data.results[0].data.slice(0, 6);
    if (Array.isArray(p)) {
      propertiesResult = p || [];
    }
  }
  if (isLoading) {
    return <PageLoading />;
  }
  loadProperties = propertiesResult?.map((property: Props, index: any) => (
    <div className="mx-4 flex h-full" key={index}>
      <div className={style.mainContainer}>
        <div className={style.imgContainer}>
          <img
            alt={property.title}
            // effect="blur"
            src={property.propertyImages[0].url}
            className={style.image}
          />
          <p
            className={`${style.listingType} ${
              property.listingType === "sale" ? "bg-purple-500" : "bg-red-500"
            }`}
          >
            for {property.listingType}
          </p>
        </div>
        <div className={style.textContainer}>
          <div className={style.textPrice}>
            <Link to={`${routes.property}/${property._id}`}>
              {/* <a href={`${routes.property}/${property._id}`} target="_blank"> */}
              <h1 className={style.title}>{property.title}</h1>
              {/* </a> */}
            </Link>

            <div className={style.sub}>
              {/* <p className={style.tag}>{tage}</p> */}
              <p className={style.price}>
                $ {formatToCurrency(property.price!)}
              </p>
            </div>
          </div>
          <div className={style.bgWhite}>
            <div className={style.location}>
              <MdLocationPin size={15} style={{ marginRight: "5px" }} />
              {property.address.street?.length! < 19
                ? property.address.street
                : `${property.address.street.substring(0, 40)}...`}
            </div>
            <div className={style.sub}>
              <p className={style.bed}>
                <span className={style.span}>
                  <FaBed size={15} style={{ marginRight: "5px" }} />
                </span>
                {property.bedrooms} Bed
              </p>
              <p className={style.bath}>
                <span className={style.span}>
                  <FaBath size={15} style={{ marginRight: "5px" }} />
                </span>
                {property.bathrooms} Bath
              </p>
              <p className={style.bath}>
                <span className={style.span}>
                  <HiSquaresPlus size={15} style={{ marginRight: "5px" }} />
                </span>
                {numberWithCommas(property.squareFootage)}{" "}
                {property.squareSymbol}
              </p>
            </div>
          </div>
        </div>
        <div className={style.overlay}></div>
      </div>
    </div>
  ));
  const titleHeader = () => {
    if (propertiesResult.length > 0) {
      return <h1 className={style.similar}>Similar Properties</h1>;
    }
  };
  return (
    <div className="overflow-hidden ">
      <div className={style.container}>{titleHeader()}</div>
      <Carousel
        responsive={responsive}
        additionalTransfrom={0}
        arrows
        autoPlay
        // autoPlaySpeed={-11}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        customTransition="all 1s linear"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={2}
        swipeable
        transitionDuration={1000}
      >
        {loadProperties}
      </Carousel>
    </div>
  );
};

export default SimilarProperties;
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
interface Props {
  [x: string]: any;
  ID?: string;
  attributes?: any;
  name?: string;
  image?: string;
  images?: any;
  tage?: string;
  title?: string;
  discription?: string;
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
