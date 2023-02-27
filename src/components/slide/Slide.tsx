import React, { FC } from "react";
import "./Slide.scss";
import Slider from "infinite-react-carousel";

interface ISlider {
  children: any;
  slidesToShow: any;
  arrowsScroll: any;
}
const Slide: FC<ISlider> = ({ children, slidesToShow, arrowsScroll }) => {
  return (
    <div className="slide">
      <div className="container">
        <Slider
          autoplay={true}
          slidesToShow={slidesToShow}
          arrowsScroll={arrowsScroll}
        >
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
