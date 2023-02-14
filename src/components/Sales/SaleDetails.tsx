import React, { FC } from "react";
import AgentCard from "../AgentCard/AgentCard";
import { ISale, ISaleProps } from "./SaleData";
import { Link } from "react-router-dom";
import SaleCard from "./SaleCard";
import { BsArrowRight } from "react-icons/bs";

const style = {
  container: `bg-white shadow-lg rounded-md p-4 h-full w-full flex flex-col  h-full   md:justify-between`,
  title: `text-[25px] font-[400 text-[#11142d] capitalize`,
  mainFlex: `my-10 flex gap-4 flex-wrap`,
  SubmainFlex: `flex gap-1 flex-wrap items-center`,
  link: ``,
};
const SaleDetails: FC<ISaleProps> = ({ SaleData }) => {
  const displaySales = SaleData.map((sale: ISale) => (
    <div key={sale._id}>
      <SaleCard
        title={sale.title}
        image={sale.image}
        price={sale.price}
        location={sale.location}
      />
    </div>
  ));
  return (
    <div className={style.container}>
      <div className="flex justify-between items-center">
        <h1 className={style.title}>latest sales</h1>
        <Link to="#" className={style.link}>
          <BsArrowRight size={30} color="#808191" />
        </Link>
      </div>
      {displaySales}
    </div>
  );
};

export default SaleDetails;
