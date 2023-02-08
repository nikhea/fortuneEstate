import { FC, SetStateAction, useState } from "react";
import { useQuery } from "react-query";
import Pagination from "./components/pagination";
import { getAllProperties } from "../../services/api/shared";
import { queryKeys } from "../../utils/queryKey";
import Button from "../../components/UI/FormElement/Button";
import PageLoading from "../../components/UI/Loading/PageLoading";
import MainPagination from "../../components/Mainpagination";
import useFiliters from "../../hooks/useFiliters";
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

  return (
    <div>
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
  );
};

export default allProperties;
interface Props {
  properties?: any;
}
