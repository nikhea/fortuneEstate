import { PieChartData } from "./config/pieChartData";
import PieChart from "./PieChart";

const style = {
  container: `mt-[1rem] grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 `,
};
// flex flex-wrap gap-2
const Cards = () => {
  const PieChartDetails = PieChartData.map((pieChart) => (
    <PieChart
      key={pieChart.title}
      title={pieChart.title}
      value={pieChart.value}
      series={pieChart.series}
      colors={pieChart.colors}
    />
  ));
  return <div className={style.container}>{PieChartDetails}</div>;
};

export default Cards;
