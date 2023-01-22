import { FC } from "react";
import style from "./styles/paginate.module.css";
interface INavigation {
  page: number;
  total_Pages: number;
  nextpage: () => void;
  handlePageClick: (page: number) => void;
  previouspage: () => void;
}
const navigation: FC<INavigation> = ({
  page,
  total_Pages,
  nextpage,
  handlePageClick,
  previouspage,
}) => {
  return (
    <div className={style.paginationContainer}>
      <button
        onClick={nextpage}
        disabled={page === total_Pages || page >= total_Pages}
        // style={{
        //   cursor: page === total_Pages ? "not-allowed" : "pointer",
        // }}
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
        // style={{
        //   cursor: page === 1 || page < 1 ? "not-allowed" : "pointer",
        // }}
        className={
          page === 1 || page < 1
            ? style.paginationDisabled
            : style.paginationBtn
        }
      >
        prev
      </button>
    </div>
  );
};

export default navigation;
