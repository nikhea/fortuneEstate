import React from "react";
import { TotalRevenueOptions, TotalRevenueSeries } from "./config/chart.config";
import { FiArrowUpCircle } from "react-icons/fi";
import ReactApexChart from "react-apexcharts";
import { BsThreeDots } from "react-icons/bs";
const style = {
  container: `bg-white shadow-lg rounded-md p-4   `,
  title: ` text-[25px] font-[400] text-[#11142d] capitalize`,
  mainFlex: `my-10 flex gap-4 flex-wrap ml-16 md:ml-24 `,
  SubmainFlex: `flex gap-1 flex-wrap items-center`,
};
//text-[18px] font-[600] text-[#11142d]
const TotalRevenue = () => {
  return (
    <div className={style.container}>
      <div className="flex flex-nowrap items-center justify-between">
        <h1 className={style.title}>Total Revenue</h1>
        <BsThreeDots size={20} color="#808191" />
      </div>
      <div className="flex-1 flex flex-cols">
        <div className={style.mainFlex}>
          <h1 className="text-[28px] font-[700]  text-[#11142d]">$236,535</h1>
          <div className={style.SubmainFlex}>
            <FiArrowUpCircle
              size={25}
              color="#0D304A"
              style={{ marginRight: "10px" }}
            />
            <div>
              <h1 className="text-[15px]  text-[#0D304A]"> 0.8%</h1>
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
// colors: ["#0D304A", "#8392A5"],
// #475be8
export default TotalRevenue;
{
  /* <ReactApexChart
series={TotalRevenueSeries}
type="bar"
height={310}
options={TotalRevenueOptions}
/> */
}
