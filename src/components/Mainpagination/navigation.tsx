import { FC } from "react";
import style from "./styles/paginate.module.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
interface INavigation {
  total: number;
  page: number;
  total_Pages: number;
  nextpage: () => void;
  handlePageClick: (page: number) => void;
  previouspage: () => void;
}
const navigation: FC<INavigation> = ({
  total,
  page,
  total_Pages,
  nextpage,
  handlePageClick,
  previouspage,
}) => {
  return (
    <div className={style.paginationContainer}>
      <span className="flex gap-3">
        {Array.from({ length: total_Pages }, (_, i) => i + 1).map(
          (listPage) => (
            <button
              key={listPage}
              onClick={() => handlePageClick(listPage)}
              className={listPage === page ? style.activeClassName : style.list}
            >
              {listPage}
            </button>
          )
        )}
      </span>
      <div className="flex gap-3">
        <button
          onClick={previouspage}
          disabled={page === 1 || page < 1}
          className={
            page === 1 || page < 1
              ? style.paginationDisabled
              : style.paginationBtn
          }
        >
          <FaArrowLeft />
          previous page
        </button>

        <button
          onClick={nextpage}
          disabled={page === total_Pages || page >= total_Pages}
          className={
            page === total_Pages
              ? style.paginationDisabled
              : style.paginationBtn
          }
        >
          next page
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default navigation;
{
  /* <div className={style.paginationContainer}>
<button
  onClick={nextpage}
  disabled={page === total_Pages || page >= total_Pages}
  className={
    page === total_Pages ? style.paginationDisabled : style.paginationBtn
  }
>
  next
</button>
<span className="flex gap-16">
  {Array.from({ length: total_Pages }, (_, i) => i + 1).map(
    (listPage) => (
      <button
        key={listPage}
        onClick={() => handlePageClick(listPage)}
        className={listPage === page ? style.activeClassName : ""}
      >
        {listPage}
      </button>
    )
  )}
</span>
<button
  onClick={previouspage}
  disabled={page === 1 || page < 1}
  className={
    page === 1 || page < 1
      ? style.paginationDisabled
      : style.paginationBtn
  }
>
  prev
</button>
</div> */
}
