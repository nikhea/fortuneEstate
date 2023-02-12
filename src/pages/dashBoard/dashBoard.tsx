import { FC } from "react";
import Cards from "./components/dashboard/Cards";
import PropertyReferrals from "./components/dashboard/PropertyReferrals";
import TotalRevenue from "./components/dashboard/TotalRevenue";

const style = {
  container: `w-[90%] m-auto my-[2rem]`,
  h1: `text-[#11142D] font-normal text-[2rem]`,
  dividerFlex: `grid gap-4 grid-cols-12 my-[2rem]`,
};
const dashBoard: FC = () => {
  return (
    <div className={style.container}>
      <h1 className={style.h1}>Dashboard</h1>
      <Cards />
      <div className={style.dividerFlex}>
        <span className=" col-span-full lg:col-start-1 lg:col-end-9">
          <TotalRevenue />
        </span>
        <span className=" col-span-full lg:col-start-9 lg:col-end-13 ">
          <PropertyReferrals />
        </span>
      </div>
    </div>
  );
};

export default dashBoard;
