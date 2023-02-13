import React, { FC } from "react";
import { ICustomer } from "./CustomerData";

const style = {
  container: ` h-full w-full flex justify-between items-center mb-10 lg:mb-1  p-10  lg:p-5`,
  title: `text-[1em] font-[400] text-gray-400 `,
  price: `text-[2em] font-[600] text-black`,
  percentage: `text-[1.2em] font-[400] text-green-500`,
  textContainer: `capitalize flex flex-col justify-between`,
  imageContainer: ``,
  image: ``,
};
const CustomerCard: FC<ICustomer> = ({ title, price, percentage, image }) => {
  return (
    <div className={style.container}>
      <div className={style.textContainer}>
        <h1 className={style.title}>{title}</h1>
        <p className={style.price}>{price}</p>
        <p className={style.percentage}>{percentage}</p>
      </div>
      <div className={style.imageContainer}>
        <img src={image} alt={title} className={style.image} />
      </div>
    </div>
  );
};

export default CustomerCard;
