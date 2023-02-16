import { FC } from "react";
import style from "../style/paginate.module.css";
interface INavigation {
  page: number;
  total_Pages: number;
  limitProperties: number;
  propertiesLength: number;
  nextpage: () => void;
  handlePageClick: (page: number) => void;
  previouspage: () => void;
}
const navigation: FC<INavigation> = ({
  page,
  total_Pages,
  limitProperties,
  nextpage,
  handlePageClick,
  previouspage,
  propertiesLength,
}) => {
  return (
    <div className="flex items-center justify-center md:justify-between w-[92%] mx-auto">
      <h1 className="text-gray-500 hidden md:flex">
        Showing 1 to {propertiesLength} Propertys
      </h1>
      <div className={style.paginationContainer}>
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

        <span className="flex gap-6">
          {Array.from({ length: total_Pages }, (_, i) => i + 1).map(
            (listPage) => (
              <button
                key={listPage}
                onClick={() => handlePageClick(listPage)}
                className={
                  listPage === page
                    ? style.activeClassName
                    : style.paginationDItems
                }
              >
                {listPage}
              </button>
            )
          )}
        </span>
        <button
          onClick={nextpage}
          disabled={page === total_Pages || page >= total_Pages}
          // style={{
          //   cursor: page === total_Pages ? "not-allowed" : "pointer",
          // }}
          className={
            page === total_Pages
              ? style.paginationDisabled
              : style.paginationBtn
          }
        >
          next
        </button>
      </div>
    </div>
  );
};

export default navigation;
