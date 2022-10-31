import { FC, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import {
  MdLocationPin,
  MdOutlineFavoriteBorder,
  MdOutlineFavorite,
} from "react-icons/md";
import { FaBed, FaBath, FaUserCircle } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import Spinner from "../../components/UI/spinner/spinner";
interface propertiesList {
  image: string;
  images?: any[];
  tage: string;
  price: number;
  title: string;
  location: string;
  bed: number;
  bath: number;
  like: boolean;
  agent: string;
  agentImage: string;
}
const style = {
  container: `mx-5`,
  cardContainer: ` mx-[5px] rounded bg-white hover:shadow-xl  mb-5 transistion ease-out duration-1000 `,
  MainContainer: ``,
  imgContainer: `w-full flex rounded`,
  image: ` w-full h-full object-cover flex rounded-t`,
  textContainer: ` flex flex-col justify-between pt-[2em] px-[2em]`,
  sub: `flex justify-between items-center  mb-[20px] leading`,
  price: `text-[#736efe] font-bold text-[1rem]`,
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
  card: ` w-full rounded sm:fle block `,
  like: `cursor-pointer`,
  tag: `rounded text-[0.7rem] py-1 px-3   block capitalize  flex bg-[#736EFE] outline-none text-white `,
};
const propertiesList: FC<propertiesList> = ({
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
}) => {
  const [likes, setLike] = useState(false);

  const handleClick = () => {
    like = !like;

    console.log(like);
    setLike(like);
  };
  return (
    <div className={style.container}>
      <div className={style.cardContainer}>
        <div className={style.card}>
          <div className={style.imgContainer}>
            <LazyLoadImage
              alt={title}
              effect="blur"
              src={image}
              className={style.image}
            />
            {/* <img
              alt={title}
              src={image}
              className={style.image} */}
            {/* /> */}
          </div>
          <div className={style.textContainer}>
            <div className={style.sub}>
              <p className={style.tag}>{tage}</p>
              <p className={style.price}>$ {price}</p>
            </div>
            <h1 className={style.title}>{title}</h1>
            <div className={style.location}>
              <MdLocationPin size={15} style={{ marginRight: "5px" }} />
              <p>{location}</p>
            </div>
            <div className={style.sub}>
              <p className={style.bed}>
                <span className={style.span}>
                  <FaBed size={15} style={{ marginRight: "5px" }} />
                </span>
                {bed}
              </p>
              <p className={style.bath}>
                <span className={style.span}> <FaBath size={15} style={{ marginRight: "5px" }} /></span> {bath}
              </p>
            </div>
            <div className={style.hr}></div>
            <div className={style.sub}>
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
                    <FaUserCircle color='#8392A5' size={15} />
                  )}
                </div>
                <p className={style.agent}> {agent}</p>
              </div>
              <div
                style={{
                  color: likes ? "salmon" : "",
                }}
                onClick={handleClick}
                className={style.like}
              >
                <MdOutlineFavorite size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default propertiesList;
