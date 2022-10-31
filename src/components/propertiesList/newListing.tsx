import { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import MainCard from "../../components/card/MainCard";
interface newListing {
  image: string;
  title: string;
  price: number;
  location: string;
  tage: string;
}
const style = {
  imgContainer: `flex object-cover w-[50%]`,
  image: `w-full h-full`,
  textContainer: ` fle flex-col justify-between py-2 px-2`,
  price: `text-[#736efe] font-bold text-[1rem] text-sm`,
  title: `font-bold text-sm leading-10`,
  location: `text-sm font-[400] italic text-[#8392A5] leading-10 flex items-center `,
};
const newListing: FC<newListing> = ({
  image,
  title,
  price,
  location,
  tage,
}) => {
  return (
    <div className=" my-10">
      <MainCard width={40}>
        <div className="flex">
          <div className={style.imgContainer}>
            <LazyLoadImage
              alt={title}
              effect="blur"
              src={image}
              className={style.image}
            />
          </div>
          <div className={style.textContainer}>
            <h1 className={style.title}>
              {title.length < 24 ? title : `${title.substring(1, 24)}....`}
            </h1>
            <h1 className={style.price}>{price}</h1>
            <h1 className={style.location}>{location}</h1>
          </div>
        </div>
      </MainCard>
    </div>
  );
};

export default newListing;
