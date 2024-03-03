import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Slide from "../../../components/slide/Slide";

const ImageSlider = ({ propertyImages }: any) => {
  const style = {
    image: `w-full h-full object-cover rounded-[25p]`,
  };
  return (
    <Slide slidesToShow={1} arrowsScroll={1}>
      {propertyImages.map((image: any) => (
        <LazyLoadImage
          alt={image.url}
          src={image.url}
          className={style.image}
        />
      ))}
    </Slide>
  );
};

export default ImageSlider;
