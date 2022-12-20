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

const style = {
  container: `w-[80%] m-auto my-10 leading-[100px]`,
  similar:`font-bold text-xl uppercase`,
  mainContainer: `w-full flex rounded-xl flex-col relative `,
  image: ` w-full h-full object-cover flex rounded-xl  `,
  textContainer: `rounded-b-xl flex flex-col justify-between pt-[1em] px-[1em] absolute bottom-0  left-0 right-0 z-20`,
  bgWhite: `pt-[1em] px-[1em] absolute bottom-0 bg-white left-0 right-0 rounded-b-xl hidden`,
  title: `font-bold text-xl `,
  location: `font-[400] text-[#8392A5]  flex items-center `,
  bed: `text-sm   flex items-center`,
  span: `font-[400] text-[#8392A5]`,
  bath: `text-sm  flex items-center`,
  sub: `flex justify-between items-center my-2`,
  price: `text-[1rem]`,
  textPrice: `text-white`,
  listingType: `capitalize rounded-full  bg-purple-500 text-white absolute py-1 px-3 text-center z-[90] top-2 left-3 transistion ease-out duration-1000`,
  imgContainer: `w-full flex rounded-t-xl flex-col relative [&>p]:hover:hidde [&>p]:transistion [&>p]:ease-in [&>p]:duration-3000`,

  overlay: `h-full w-full -z-10 top-0 left-0 absolute bg-gradient-to-tl from-black overflow-hidden z-10 rounded-xl`,
};
const SimilarProperties: FC<Props> = () => {
  const { data: properties, isLoading } = useQuery(
    [queryKeys.properties],
    getAllProperties
  );
  const propertiesResult = properties?.data.results.slice(0, 6) || [];
  if (isLoading) {
    return <h1>Loading properties</h1>;
  }
  console.log(propertiesResult, "sksldcjjdj");

  return (
    <div className="overflow-hidden ">
      <div className={style.container}>
        <h1 className={style.similar}>Similar Properties</h1>
      </div>
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
        {propertiesResult.map((property: Props, index: any) => (
          <div className="mx-4">
            <div className={style.mainContainer}>
              <div className={style.imgContainer}>
                <LazyLoadImage
                  alt={property.title}
                  effect="blur"
                  src={property.propertyImages[0].url}
                  className={style.image}
                />
                <p className={style.listingType}>for {property.listingType}</p>
              </div>
              <div className={style.textContainer}>
                <div className={style.textPrice}>
                  <Link to={`${routes.property}/${property._id}`}>
                    {/* <a href={`${routes.property}/${property._id}`}> */}
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
                        <HiSquaresPlus
                          size={15}
                          style={{ marginRight: "5px" }}
                        />
                      </span>
                      {numberWithCommas(property.squareFootage)}{" "}
                      {property.squareSymbol}
                    </p>
                  </div>
                </div>
              </div>
              <div className={style.overlay}></div>
            </div>
            {/* <div className={style.overlay}></div> */}
          </div>
        ))}
      </Carousel>
    </div>
  );
};
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
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
export default SimilarProperties;
