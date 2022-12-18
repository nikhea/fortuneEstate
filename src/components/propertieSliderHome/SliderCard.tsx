import { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import { routes } from "../../routes/routes";
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
  mainContainer: `flex flex-col md:flex-row`,
  imgContainer: `w-full flex rounded-3xl flex-col relative w-[50%]`,
  textContainer: `mx-10 my-8`,
  image: ` w-full h-full object-cover flex rounded-3xl `,
  listingType: ``,
  title: `font-bold text-3xl leading-10 capitalize`,
  discription: `font-light text-sm text-[#8392A5] mb-20`,
  hr: `bg-[#8392a5] h-[.1px]   text-center flex items-center justify-center mb-5`,
  hrBig: `bg-[#8392a5] h-[2.9px]   text-center w-[40%] flex items-center justify-center my-5  rounded`,
  top: ``,
  middle: ``,
  bottom: ``,
};
const SliderCard: FC<Props> = ({
  ID,
  image,
  images,
  tage,
  price,
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
}) => {
  return (
    <div className={style.mainContainer}>
      <div className={style.imgContainer}>
        <LazyLoadImage
          alt={title}
          effect="blur"
          src={images[0].url}
          className={style.image}
        />
        {/* <p className={style.listingType}>for {listingType}</p> */}
      </div>
      <div className={style.textContainer}>
        <div className={style.top}>
          <h1 className={style.title}>{title}</h1>
          <div className={style.hrBig}></div>
          <p className={style.discription}>{discription}</p>
          <div className={style.hr}></div>
        </div>
        <div className={style.middle}></div>
        <div className={style.bottom}></div>
      </div>
    </div>
  );
};

export default SliderCard;
{
  /* <Link to={`${routes.property}/${ID}`}> */
}
