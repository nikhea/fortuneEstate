import { FC } from "react";
import style from "./styles/paginate.module.css";
import ReactPaginate from "react-paginate";

interface pagination {
  ItemCount?: any;
  pageChange?: any;
}
const Pagination: FC<pagination> = ({ ItemCount, pageChange }) => {
  return (
    <ReactPaginate
      previousLabel={"previous"}
      nextLabel={"next"}
      pageCount={ItemCount}
      onPageChange={pageChange}
      containerClassName={style.paginationContainer}
      previousLinkClassName={style.previousBtn}
      nextLinkClassName={style.nextBtn}
      disabledLinkClassName={style.paginationDisabled}
      activeClassName={style.activeClassName}
      pageClassName={style.LinkItem}
      breakLabel={"..."}
    />
  );
};

export default Pagination;
