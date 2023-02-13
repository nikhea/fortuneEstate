import React from "react";
import { TotalRevenueOptions, TotalRevenueSeries } from "./config/chart.config";
import { FiArrowUpCircle } from "react-icons/fi";
import ReactApexChart from "react-apexcharts";
const style = {
  container: `bg-white shadow-lg rounded-md p-4   `,
  title: `text-[25px] font-[400 text-[#11142d]`,
  mainFlex: `my-10 flex gap-4 flex-wrap`,
  SubmainFlex: `flex gap-1 flex-wrap items-center`,
};
//
const TotalRevenue = () => {
  return (
    <div className={style.container}>
      <div className="flex-1 flex flex-cols">
        <h1 className={style.title}>Total Revenue</h1>
        <div className={style.mainFlex}>
          <h1 className="text-[28px] font-[700]  text-[#11142d]">$236,535</h1>
          <div className={style.SubmainFlex}>
            <FiArrowUpCircle
              size={25}
              color="#475be8"
              style={{ marginRight: "10px" }}
            />
            <div>
              <h1 className="text-[15px]  text-[#475be8]"> 0.8%</h1>
              <h1 className="text-[12px]  text-[#808191]"> Than Last Month</h1>
            </div>
          </div>
        </div>
      </div>

      <ReactApexChart
        series={TotalRevenueSeries}
        type="bar"
        height={310}
        options={TotalRevenueOptions}
      />
    </div>
  );
};

export default TotalRevenue;
{
  /* <ReactApexChart
series={TotalRevenueSeries}
type="bar"
height={310}
options={TotalRevenueOptions}
/> */
}
