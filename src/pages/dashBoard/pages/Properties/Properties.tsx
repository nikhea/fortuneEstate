import "./style/dashboardProperties.css";
import { Link } from "react-router-dom";
import Button from "../../../../components/UI/FormElement/Button";
import { routes } from "../../../../routes/routes";
import { queryKeys } from "../../../../utils/queryKey";
import { useQuery } from "react-query";
import PageLoading from "../../../../components/UI/Loading/PageLoading";
import { getAllProperties } from "../../../../services/api/shared";
import { SetStateAction, useState } from "react";
import Pagination from "../../../allProperties/components/pagination";
import MainPagination from "../../../../components/Mainpagination";
import { MainPaginationDashboard } from "./Components/MainPaginationDashboard";
import PaginationDashBoard from "./Components/PaginationDashBoard";

const style = {
  container: `w-[95%] m-auto my-[2rem] overflow-hidden text-[#11142D]`,
  header: `flex justify-between items-center`,
  h1: ` font-[500] text-[2rem]`,
  subContainer: ``,
};
const Properties = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [limitProperties, setLimitProperties] = useState(8);
  const [sortProperties, setSortProperties] = useState(1);

  const { data: properties, isLoading } = useQuery(
    [queryKeys.properties, pageNumber, limitProperties, sortProperties],
    () => getAllProperties(pageNumber, limitProperties, sortProperties),
    {
      keepPreviousData: true,
    }
  );
  if (!properties?.data.results[0].metadata[0]) {
    return null;
  }
  if (isLoading) {
    return <PageLoading />;
  }
  const metadata = properties?.data.results[0].metadata[0];

  const propertiesResult = properties?.data.results[0].data || [];
  const handlePageClick = (page: SetStateAction<number>) => {
    setPageNumber(page);
    // onPageChange(page);
  };
  const nextpage = () => {
    // setPageNumber(pageNumber + 1);
    if (metadata.page < metadata.total_Pages) {
      setPageNumber(metadata.page + 1);
    }
  };
  const previouspage = () => {
    // setPageNumber(pageNumber - 1);
    if (metadata.page > 1) {
      setPageNumber(metadata.page - 1);
    }
  };
  console.log(propertiesResult);

  return (
    <div className={style.container}>
      <div className={style.header}>
        <h1 className={style.h1}>Property List</h1>
        <Link to="/upload">
          <Button isCurve linearGradient uppercase primary padding full>
            <span className="mx-2"> +Add Property</span>
          </Button>
          {/* isCurve linearGradient uppercase primary padding full */}
        </Link>
      </div>
      <div className="dashboardProperties">
        <MainPaginationDashboard
          page={metadata.page}
          total_Pages={metadata.total_Pages}
          nextpage={nextpage}
          handlePageClick={handlePageClick}
          previouspage={previouspage}
          propertiesLength={metadata.total}
          sortProperties={sortProperties}
          setSortProperties={setSortProperties}
        >
          <PaginationDashBoard properties={propertiesResult} />
        </MainPaginationDashboard>
      </div>
    </div>
  );
};

export default Properties;
