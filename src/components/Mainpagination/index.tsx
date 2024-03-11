import { FC, ReactNode } from "react";
import Navigation from "./navigation";
import Header from "./header";
import MainCard from "../card/MainCard";
interface Props {
  children: JSX.Element[] | JSX.Element | ReactNode;
  page: number;
  total: number;
  total_Pages: number;
  nextpage: () => void;
  handlePageClick: (page: number) => void;
  previouspage: () => void;
  propertiesLength: number;
  sortProperties: any;
  setSortProperties: any;
}
const style = {
  container: `w-[95%] m-auto my-10`,
};
const index: FC<Props> = ({
  children,
  page,
  total_Pages,
  total,
  nextpage,
  handlePageClick,
  previouspage,
  propertiesLength,
  sortProperties,
  setSortProperties,
}) => {
  return (
    <MainCard width={100}>
      <div className={style.container}>
        <Header
          propertiesLength={propertiesLength}
          sortProperties={sortProperties}
          setSortProperties={setSortProperties}
        />
        {children}
        <Navigation
          total={total}
          page={page}
          total_Pages={total_Pages}
          nextpage={nextpage}
          handlePageClick={handlePageClick}
          previouspage={previouspage}
        />
      </div>
    </MainCard>
  );
};

export default index;
