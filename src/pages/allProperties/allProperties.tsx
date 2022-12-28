import { FC, useState } from "react";
import { useQuery } from "react-query";
import Pagination from "./components/pagination";
import { getAllProperties } from "../../services/api/shared";
import { queryKeys } from "../../utils/queryKey";
import Button from "../../components/UI/FormElement/Button";
import PageLoading from "../../components/UI/Loading/PageLoading";

// import Button from "../UI/FormElement/Button";
const allProperties = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [limitProperties, setLimitProperties] = useState(2);
  // const propertiesCount = Math.ceil();

  const { data: properties, isLoading } = useQuery(
    [queryKeys.properties, pageNumber, limitProperties],
    () => getAllProperties(pageNumber, limitProperties),
    {
      keepPreviousData: true,
    }
  );
  if (isLoading) {
    return <PageLoading />;
  }
  const propertiesResult = properties?.data.results[0].data || [];
  const propertiesCount = Math.ceil(propertiesResult?.length / pageNumber);
  console.log(propertiesCount, "p");

  const nextpage = () => {
    setPageNumber(pageNumber + 1);
  };
  const previouspage = () => {
    setPageNumber(pageNumber - 1);
  };

  return (
    <div>
      <div>
        <Button onClick={nextpage}>next</Button>
        {pageNumber}
        <Button onClick={previouspage}>prev</Button>
      </div>
      <Pagination properties={propertiesResult} />
    </div>
  );
};

export default allProperties;
interface Props {
  properties?: any;
}
