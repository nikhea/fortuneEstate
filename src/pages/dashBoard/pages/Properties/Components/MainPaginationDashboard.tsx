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
}
export const MainPaginationDashboard: FC<Props> = ({
  children,
  page,
  total_Pages,
  nextpage,
  handlePageClick,
  previouspage,
  limitProperties,
  propertiesLength,
  sortProperties,
  setSortProperties,
}) => {
  return (
    <div>
      <Filiters />
      {children}
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
