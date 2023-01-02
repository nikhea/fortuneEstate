import React from "react";
import "./style.css";
import { ServicData } from "./services";
const style = {
  containerGrid: ` w-full md:grid grid-cols-1 md:grid-cols-2   md:grid-cols-3 my-20   md:my-20 p-0 gap-[3%]`,
  ListContainer: `   hover:shadow-xl `,
  title: ` uppercase text-sm text-[#7f7f7f] font-normal tracking-[1.1px] text-center my-4`,
  content: `text-[#7f7f7f] font-normal tracking-[1.1px] text-center my-4`,
  icon: `text-[50px]`,
};

interface serviceItemsProps {
  icon: any;
  title: string;
  content: string;
}

const listService = () => {
  return (
    <div className={style.containerGrid}>
      {ServicData?.map((serviceItems: serviceItemsProps, index: number) => (
        <div
          key={index}
          className="listServiceLayout"
          data-aos={
            index === 0
              ? "fade-up"
              : index === 1
              ? "fade-up"
              : index === 2
              ? "fade-up"
              : index === 3
              ? "fade-up"
              : index === 4
              ? "fade-up"
              : index === 5
              ? "fade-up"
              : index === 6
              ? "fade-up"
              : null
          }
          data-aos-easing="ease-in-out"
          data-aos-duration={
            index === 0
              ? "2000"
              : index === 1
              ? "3500"
              : index === 2
              ? "5000"
              : index === 3
              ? "7000"
              : index === 4
              ? "9000"
              : index === 5
              ? "2200"
              : index === 6
              ? "2500"
              : null
          }
        >
          <p className={style.icon}> {serviceItems.icon}</p>
          <h1 className={style.title}>{serviceItems.title}</h1>
          <p className={style.content}>{serviceItems.content}</p>
        </div>
      ))}
    </div>
  );
};

export default listService;
