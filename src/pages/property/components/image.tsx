import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import PropertiesCard from "../../../components/card/PropertyCard";
const Image = () => {
  const style = {
    imgContainer: `bg-red-200 flex`,
    image: `w-full flex`,
  };
  return (
    // <PropertiesCard width={100} height={100}>
    <div className={style.imgContainer}>
      <LazyLoadImage
        alt="https://www.thehouse48.com/wp-content/uploads/WPL/53830/img_Property-4ddc7151039d0f37226399adc8981124-126373025-1024x700.jpg"
        effect="blur"
        src="https://www.thehouse48.com/wp-content/uploads/WPL/53830/img_Property-4ddc7151039d0f37226399adc8981124-126373025-1024x700.jpg"
        // className={style.image}
      />
    </div>
    // </PropertiesCard>
  );
};

export default Image;
