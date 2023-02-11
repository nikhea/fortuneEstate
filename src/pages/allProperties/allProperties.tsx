import { FC, SetStateAction, useState } from "react";
import { useQuery } from "react-query";
import Pagination from "./components/pagination";
import { getAllProperties } from "../../services/api/shared";
import { queryKeys } from "../../utils/queryKey";
import Button from "../../components/UI/FormElement/Button";
import PageLoading from "../../components/UI/Loading/PageLoading";
import MainPagination from "../../components/Mainpagination";
import useFiliters from "../../hooks/useFiliters";
import PropertieSide from "../../components/PropertieSide";
// import Button from "../UI/FormElement/Button";
const allProperties = () => {
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
    return;
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
  const style = {
    bgContainer: `md:grid md:grid-cols-10`,
    colRight: `col-start-1 col-end-8`,
    colLeft: `col-start-8 col-end-11    `,
  };
  return (
    <div className={style.bgContainer}>
      <div className={style.colRight}>
        <MainPagination
          page={metadata.page}
          total_Pages={metadata.total_Pages}
          nextpage={nextpage}
          handlePageClick={handlePageClick}
          previouspage={previouspage}
          propertiesLength={metadata.total}
          sortProperties={sortProperties}
          setSortProperties={setSortProperties}
        >
          <Pagination properties={propertiesResult} />
        </MainPagination>
      </div>
      <div className={style.colLeft}>
        <PropertieSide />
      </div>
    </div>
  );
};

export default allProperties;
interface Props {
  properties?: any;
}
