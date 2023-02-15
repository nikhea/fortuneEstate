import React, { FC, ReactNode } from "react";

interface Props {
  children: JSX.Element[] | JSX.Element | ReactNode;
  page: number;
  total_Pages: number;
  nextpage: () => void;
  handlePageClick: (page: number) => void;
  previouspage: () => void;
  propertiesLength: number;
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
  propertiesLength,
  sortProperties,
  setSortProperties,
}) => {
  return (
    <div>
      <div>Header</div>
      {children}
    </div>
  );
};
