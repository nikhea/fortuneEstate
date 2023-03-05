import { useEffect } from "react";
import { queryKeys } from "../../../../../utils/queryKey";
import { useQuery } from "react-query";
import PageLoading from "../../../../../components/UI/Loading/PageLoading";
import { getAllProperties } from "../../../../../services/api/shared";
import { SetStateAction, useState } from "react";
import { MainPaginationDashboard } from "./MainPaginationDashboard";
import PaginationDashBoard from "./PaginationDashBoard";
import useFilitersStore from "../../../../../store/Filiters";
import { toast } from "react-toastify";
const style = {
  container: `w-[95%] m-auto my-[2re] overflow-hidden text-[#11142D]`,
  header: `flex justify-between items-center`,
  h1: ` font-[500] text-[2rem] capitalize`,
  subContainer: ``,
};
const ProperiesData = () => {
  let toastID: any;
  const { filterProperties, setFiliters } = useFilitersStore();
  const [pageNumber, setPageNumber] = useState(1);
  const [limitProperties, setLimitProperties] = useState(10);
  const [sortProperties, setSortProperties] = useState(1);
  // const [filterProperties, setFilterProperties] = useState({});

  useEffect(() => {
    // if (isFetching === true) {
    //   toast.info("fetching data");
    // }
    // if (isFetching === false) {
    //   toast.success("success");
    // }
  }, [filterProperties]);
  const {
    data: properties,
    isLoading,
    isFetching,
  } = useQuery(
    [
      queryKeys.properties,
      pageNumber,
      limitProperties,
      sortProperties,
      filterProperties,
    ],
    () =>
      getAllProperties(
        pageNumber,
        limitProperties,
        sortProperties,
        filterProperties
      ),
    {
      keepPreviousData: true,
    }
  );
  let propertiesList = properties?.data.results[0].data.length;
  if (isLoading) {
    return <PageLoading />;
  }

  if (!properties?.data.results[0].metadata[0]) {
    return null;
  }

  const metadata = properties?.data.results[0].metadata[0];

  const propertiesResult = properties?.data.results[0].data || [];
  const handlePageClick = (page: SetStateAction<number>) => {
    setPageNumber(page);
  };
  const nextpage = () => {
    if (metadata.page < metadata.total_Pages) {
      setPageNumber(metadata.page + 1);
    }
  };
  const previouspage = () => {
    if (metadata.page > 1) {
      setPageNumber(metadata.page - 1);
    }
  };
  // if (isFetching) {
  //   toastID = filterProperties;
  //   toast.success("fetching data", { id: toastID });
  // }
  return (
    <div className={style.container}>
      <div className="dashboardProperties">
        <MainPaginationDashboard
          properties={properties}
          page={metadata.page}
          total_Pages={metadata.total_Pages}
          nextpage={nextpage}
          handlePageClick={handlePageClick}
          previouspage={previouspage}
          propertiesLength={propertiesResult.length}
          sortProperties={sortProperties}
          setSortProperties={setSortProperties}
          // setFilterProperties={setFilterProperties}
          limitProperties={limitProperties}
        >
          <PaginationDashBoard
            propertiesList={propertiesList}
            properties={propertiesResult}
          />
        </MainPaginationDashboard>
      </div>
    </div>
  );
};

export default ProperiesData;
