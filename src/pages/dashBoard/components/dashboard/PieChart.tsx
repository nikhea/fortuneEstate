import { FC } from "react";
import ReactApexChart from "react-apexcharts";

interface IPieChart {
  title: string;
  value: number;
  series: Array<number>;
  colors: Array<string>;
}
const style = {
  container: ` flex flex-1 flex-nowrap bg-white shadow-lg  justify-between flex-row rounded-md py-2  min-height-[110px]`,
  textContainer: `pl-5  flex flex-col`,
  title: `text-[#808191] text-[11px] capitalize`,
  value: `text-[#11142d] font-[400] mt-1 text-[24px]`,
};
// title: `text-[#808191] text-[14px] capitalize`,
// mt-[2rem] flex flex-1 flex-wrap bg-white shadow-lg justify-between flex-row rounded-md py-2 gap-2 min-height-[110px]
const PieChart: FC<IPieChart> = ({ title, value, series, colors }) => {
  return (
    <div className={style.container}>
      <div className={style.textContainer}>
        <h1 className={style.title}>{title}</h1>
        <h1 className={style.value}>{value}</h1>
      </div>
      <ReactApexChart
        options={{
          chart: { type: "donut" },
          colors,
          legend: { show: false },
          dataLabels: { enabled: false },
        }}
        series={series}
        type="donut"
        width="120px"
      />
    </div>
  );
};

export default PieChart;
