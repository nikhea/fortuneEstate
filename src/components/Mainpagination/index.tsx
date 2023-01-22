import { FC, ReactNode } from "react";
import Navigation from "./navigation";
import Header from "./header";
import MainCard from "../card/MainCard";
interface Props {
  children: JSX.Element[] | JSX.Element | ReactNode;
  page: number;
  total_Pages: number;
  nextpage: () => void;
  handlePageClick: (page: number) => void;
  previouspage: () => void;
  propertiesLength: number;
}
const style = {
  container: `w-[90%] m-auto my-10`,
};
const index: FC<Props> = ({
  children,
  page,
  total_Pages,
  nextpage,
  handlePageClick,
  previouspage,
  propertiesLength,
}) => {
  return (
    <MainCard width={70}>
      <div className={style.container}>
        <Header propertiesLength={propertiesLength} />
        {children}
        <Navigation
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