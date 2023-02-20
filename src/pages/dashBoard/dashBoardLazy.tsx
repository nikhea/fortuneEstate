import { FC, Suspense, lazy } from "react";
import PageLoading from "../../components/UI/Loading/PageLoading";
// import Cards from "./components/dashboard/Cards";
// import PropertyReferrals from "./components/dashboard/PropertyReferrals";
// import TotalRevenue from "./components/dashboard/TotalRevenue";
// import AgentDetails from "../../components/AgentCard/AgentDetails";
import { AgentData } from "../../components/AgentCard/AgentData";
import { CustomerData } from "../../components/CustomerCard/CustomerData";
// import CustomerDetails from "../../components/CustomerCard/CustomerDetails";
// import SaleDetails from "../../components/Sales/SaleDetails";
import { SaleData } from "../../components/Sales/SaleData";
// import PageStatistics from "./components/dashboard/PageStatistics";
import { BsThreeDotsVertical } from "react-icons/bs";
const Cards = lazy(() => import("./components/dashboard/Cards"));
const PropertyReferrals = lazy(
  () => import("./components/dashboard/PropertyReferrals")
);
const TotalRevenue = lazy(() => import("./components/dashboard/TotalRevenue"));
const AgentDetails = lazy(
  () => import("../../components/AgentCard/AgentDetails")
);
const CustomerDetails = lazy(
  () => import("../../components/CustomerCard/CustomerDetails")
);
const SaleDetails = lazy(() => import("../../components/Sales/SaleDetails"));
const PageStatistics = lazy(
  () => import("./components/dashboard/PageStatistics")
);

const style = {
  container: `w-[95%] m-auto my-[2rem] overflow-hidden`,
  h1: `text-[#11142D] font-normal text-[2rem]`,
  dividerOneColumn: `grid gap-4 grid-cols-1 my-[2rem]`,
  dividerTwoColumn: `grid gap-4 grid-cols-12 my-[2rem]`,
  dividerThreeColumn: `grid gap-4 grid-cols-1 lg:grid-cols-3 `,
};
const DashBoardLazy: FC = () => {
  return (
    <Suspense fallback={<PageLoading />}>
      <div className={style.container}>
        <div className="flex items-center">
          <h1 className={style.h1}>Dashboard</h1>
          <BsThreeDotsVertical size={25} color="#11142D" />
        </div>
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
    </Suspense>
  );
};

export default DashBoardLazy;
