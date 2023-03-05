import React, { FC, ReactNode } from "react";
import Filiters from "./Header/Filiters";
import Navigation from "./navigation";

interface Props {
  children: JSX.Element[] | JSX.Element | ReactNode;
  page: number;
  total_Pages: number;
  nextpage: () => void;
  handlePageClick: (page: number) => void;
  previouspage: () => void;
  propertiesLength: number;
  limitProperties: number;
  sortProperties: any;
  setSortProperties: any;
  // setFilterProperties: any;
  properties: any;
}
export const MainPaginationDashboard: FC<Props> = ({
  children,
  page,
  total_Pages,
  nextpage,
  handlePageClick,
  previouspage,
  // setFilterProperties,
  limitProperties,
  propertiesLength,
  sortProperties,
  setSortProperties,
  properties,
}) => {
  // if (!properties?.data.results[0].metadata[0]) {
  //   return null;
  // }
  return (
    <div>
      {/* <Filiters setFilterProperties={setFilterProperties} /> */}
      {!properties?.data.results[0].metadata[0] ? null : children}
      {/* {children} */}
      <Navigation
        page={page}
        total_Pages={total_Pages}
        nextpage={nextpage}
        handlePageClick={handlePageClick}
        previouspage={previouspage}
        limitProperties={limitProperties}
        propertiesLength={propertiesLength}
      />
    </div>
  );
};
