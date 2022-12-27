import { FC } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import AbujaAura11zon from "../../../images/Abuja-Aura_11zon-1.jpeg";
import FhmkGif from "../../../images/Fhmk-1-1.gif";
import LagosJpg from "../../../images/Lagos-970x250-1_11zon.jpg";
import UntitledDesign from "../../../images/Untitled-design-3-1.png";

const handleDragStart = (e: { preventDefault: () => any }) =>
  e.preventDefault();

const style = {
  container: ` flex justify-between w-[97%]  m-auto my-3 text-center items-center block flex`,
  img: `w-[100%]`,
};

const items = [
  <img
    src={AbujaAura11zon}
    alt={AbujaAura11zon}
    onDragStart={handleDragStart}
    role="presentation"
    className={style.img}
  />,
  <img
    src={LagosJpg}
    alt={LagosJpg}
    onDragStart={handleDragStart}
    role="presentation"
    className={style.img}
  />,
  <img
    src={UntitledDesign}
    alt={UntitledDesign}
    onDragStart={handleDragStart}
    role="presentpresentation"
    className={style.img}
  />,
  <img
    src={FhmkGif}
    alt={FhmkGif}
    onDragStart={handleDragStart}
    role="presentpresentation"
    className={style.img}
  />,
];

const Gallery: FC = () => {
  const responsive = {
    0: { items: 1 },
    768: { items: 2 },
    968: { items: 3 },
    1024: { items: 4 },
  };
  return (
    <div
      className={style.container}
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-duration="1700"
    >
      <AliceCarousel
        autoPlayInterval={2000}
        autoPlayDirection="ltr"
        autoPlay={true}
        mouseTracking
        items={items}
        disableButtonsControls={true}
        infinite={true}
        controlsStrategy="alternate"
        responsive={responsive}
      />
    </div>
  );
};

export default Gallery;
