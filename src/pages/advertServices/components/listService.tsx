import React from "react";
import "./style.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { ServicData } from "./services";
const style = {
  containerGrid: ` w-full md:grid grid-cols-1 md:grid-cols-2   lg:grid-cols-3    gap-[3%]`,
  ListContainer: `   hover:shadow-xl `,
  title: ` uppercase text-sm text-[#7f7f7f] font-normal tracking-[1.1px] text-center my-4`,
  baseTitle: `my-20  uppercase text-xl lg:text-5xl text-[#7f7f7f] font-normal tracking-[1.1px] text-center`,
  content: `text-[#7f7f7f] font-normal tracking-[1.1px] text-center my-4`,
  icon: `w-[50%] flex items-center justify-center  object-cover `,
};

interface serviceItemsProps {
  icon: any;
  title: string;
  content: string;
}

const listService = () => {
  return (
    <div className="my-20 px-3 md:px-10 lg:px-20">
      <h1
        className={style.baseTitle}
        // data-aos="fade-up"
        // data-aos-easing="ease-in-out"
        // data-aos-duration="1500"
      >
        why choose us
      </h1>
      <div className={style.containerGrid}>
        {ServicData?.map((serviceItems: serviceItemsProps, index: number) => (
          <div
            key={index}
            className="listServiceLayout"
            // data-aos={
            //   index === 0
            //     ? "fade-up"
            //     : index === 1
            //     ? "fade-up"
            //     : index === 2
            //     ? "fade-up"
            //     : index === 3
            //     ? "fade-up"
            //     : index === 4
            //     ? "fade-up"
            //     : index === 5
            //     ? "fade-up"
            //     : index === 6
            //     ? "fade-up"
            //     : null
            // }
            // data-aos-easing="ease-in-out"
            // data-aos-duration={
            //   index === 0
            //     ? "2000"
            //     : index === 1
            //     ? "3500"
            //     : index === 2
            //     ? "5000"
            //     : index === 3
            //     ? "7000"
            //     : index === 4
            //     ? "9000"
            //     : index === 5
            //     ? "2200"
            //     : index === 6
            //     ? "2500"
            //     : null
            // }
          >
            <p className={style.icon}>
              <LazyLoadImage
                className={style.icon}
                src={serviceItems.icon}
                alt={serviceItems.title}
              />
            </p>
            <h1 className={style.title}>{serviceItems.title}</h1>
            <p className={style.content}>{serviceItems.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default listService;
