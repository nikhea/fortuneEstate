import { SetStateAction, useEffect, useState } from "react";

export default function useFiliters({ metadata }: any) {
  const [pageNumber, setPageNumber] = useState(1);
  const [limitProperties, setLimitProperties] = useState(8);
  const [sortProperties, setSortProperties] = useState(1);

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
  return {
    pageNumber,
    limitProperties,
    sortProperties,
    setSortProperties,
    handlePageClick,
    nextpage,
    previouspage,
  };
}
