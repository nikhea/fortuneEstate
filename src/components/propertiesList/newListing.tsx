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
  imgContainer: `flex object-cover w-[50%]  0bject-contain`,
  image: `w-full h-full`,
  textContainer: ` flex flex-col justify-between py-4 px-2 h-full `,
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
    <div className=" my-10 cursor-pointer shadow-2xl hover:shadow-none transition ease-out duration-1000">
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
              {title.length < 20 ? title : `${title.substring(1, 20)}...`}
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
