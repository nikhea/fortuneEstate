import React, { FC } from "react";
import { ISale } from "./SaleData";
const style = {
  // border border-t-0 border-x-0
  container: ` p-1  flex h-full justify-between w-full items-center text-[#808191] capitalize mb-5 lg:mb-1`,
  title: `text-[15px] font-[600] text-[#11142d]`,
  mainFlex: `my-10 flex gap-4 flex-wrap`,
  SubmainFlex: `flex gap-1 flex-nowrap items-center`,
  Imgcontainer: `w-[70px] h-[70px] rounded-md`,
  image: `w-full h-full rounded-md object-cover`,
  textcontainer: `text-[15px] font-[300] text-[#11142d] mx-3 `,
  subTitile: `capitalize text-[14px] text-gray-400`,
  price: `text-[20px] font-[600] text-[#0D304A]`,
};
const SaleCard: FC<ISale> = ({ title, image, price, location }) => {
  return (
    <div className={style.container}>
      <div className={style.SubmainFlex}>
        <div className={style.Imgcontainer}>
          <img src={image} alt={title} className={style.image} />
        </div>
        <div className={style.textcontainer}>
          <h1 className={style.title}>{title}</h1>
          <h2 className={style.subTitile}>{location}</h2>
        </div>
      </div>
      <h1 className={style.price}>+${price}</h1>
    </div>
  );
};

export default SaleCard;
