import React from "react";
import ReactApexChart from "react-apexcharts";
import { PageStatisticsOptions } from "./config/line.config";
import { BsThreeDots } from "react-icons/bs";
const style = {
  container: `bg-white shadow-lg rounded-md p-4   `,
  title: ` text-[25px] font-[400] text-[#11142d] capitalize mb-10`,
  mainFlex: `my-10 flex gap-4 flex-wrap ml-24`,
  SubmainFlex: `flex gap-1 flex-wrap items-center`,
};
//text-[18px] font-[600] text-[#11142d]
const PageStatistics = () => {
  return (
    <div className={style.container}>
      <div className="flex flex-nowrap items-center justify-between">
        <h1 className={style.title}>Properties Statistics</h1>
        {/* <BsThreeDots size={20} color="#808191" /> */}
      </div>

      <ReactApexChart
        options={PageStatisticsOptions.options}
        series={PageStatisticsOptions.series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default PageStatistics;
