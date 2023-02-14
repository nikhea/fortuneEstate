import { FC } from "react";
import Cards from "./components/dashboard/Cards";
import PropertyReferrals from "./components/dashboard/PropertyReferrals";
import TotalRevenue from "./components/dashboard/TotalRevenue";
import AgentDetails from "../../components/AgentCard/AgentDetails";
import { AgentData } from "../../components/AgentCard/AgentData";
import { CustomerData } from "../../components/CustomerCard/CustomerData";
import CustomerDetails from "../../components/CustomerCard/CustomerDetails";
import SaleDetails from "../../components/Sales/SaleDetails";
import { SaleData } from "../../components/Sales/SaleData";
import PageStatistics from "./components/dashboard/PageStatistics";

const style = {
  container: `w-[90%] m-auto my-[2rem] overflow-hidden`,
  h1: `text-[#11142D] font-normal text-[2rem]`,
  dividerOneColumn: `grid gap-4 grid-cols-1 my-[2rem]`,
  dividerTwoColumn: `grid gap-4 grid-cols-12 my-[2rem]`,
  dividerThreeColumn: `grid gap-4 grid-cols-1 lg:grid-cols-3 `,
};
const dashBoard: FC = () => {
  return (
    <div className={style.container}>
      <h1 className={style.h1}>Dashboard</h1>
      <Cards />
      <div className={style.dividerTwoColumn}>
        <span className=" col-span-full lg:col-start-1 lg:col-end-9">
          <TotalRevenue />
        </span>
        <span className=" col-span-full lg:col-start-9 lg:col-end-13 ">
          <PropertyReferrals />
        </span>
      </div>
      <div className={style.dividerThreeColumn}>
        <span>
          <AgentDetails AgentData={AgentData} />
        </span>
        <span>
          <CustomerDetails CustomerData={CustomerData} />
        </span>
        <span>
          <SaleDetails SaleData={SaleData} />
        </span>
      </div>
      <div className={style.dividerOneColumn}>
        <PageStatistics />
      </div>
    </div>
  );
};

export default dashBoard;
