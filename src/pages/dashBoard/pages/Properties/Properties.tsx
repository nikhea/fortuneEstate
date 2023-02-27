import "./style/dashboardProperties.css";
import { Link } from "react-router-dom";
import Button from "../../../../components/UI/FormElement/Button";
import { queryKeys } from "../../../../utils/queryKey";
import { useQuery } from "react-query";
import PageLoading from "../../../../components/UI/Loading/PageLoading";
import { getAllProperties } from "../../../../services/api/shared";
import { SetStateAction, useState } from "react";
import { MainPaginationDashboard } from "./Components/MainPaginationDashboard";
import PaginationDashBoard from "./Components/PaginationDashBoard";
import HeaderNavigation from "./Components/HeaderNavigation";
import ProperiesData from "./Components/Header/ProperiesData";

const style = {
  container: `w-[95%] m-auto my-[2rem] overflow-hidden text-[#11142D]`,
  header: `flex justify-between items-center`,
  h1: ` font-[500] text-[2rem] capitalize`,
  subContainer: ``,
};
const Properties = () => {
  // const [pageNumber, setPageNumber] = useState(1);
  // const [limitProperties, setLimitProperties] = useState(10);
  // const [sortProperties, setSortProperties] = useState(1);

  // const { data: properties, isLoading } = useQuery(
  //   [queryKeys.properties, pageNumber, limitProperties, sortProperties],
  //   () => getAllProperties(pageNumber, limitProperties, sortProperties),
  //   {
  //     keepPreviousData: true,
  //   }
  // );
  // if (isLoading) {
  //   return <PageLoading />;
  // }
  // if (!properties?.data.results[0].metadata[0]) {
  //   return null;
  // }

  // const metadata = properties?.data.results[0].metadata[0];

  // const propertiesResult = properties?.data.results[0].data || [];
  // const handlePageClick = (page: SetStateAction<number>) => {
  //   setPageNumber(page);
  // };
  // const nextpage = () => {
  //   if (metadata.page < metadata.total_Pages) {
  //     setPageNumber(metadata.page + 1);
  //   }
  // };
  // const previouspage = () => {
  //   if (metadata.page > 1) {
  //     setPageNumber(metadata.page - 1);
  //   }
  // };

  return (
    <div className={style.container}>
      <HeaderNavigation />
      <div className="dashboardProperties">
        <ProperiesData />
      </div>
    </div>
  );
};

export default Properties;
