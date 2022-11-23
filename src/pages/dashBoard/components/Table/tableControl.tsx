import { FC } from "react";
import "./tableControll.css";
interface tableControlProps {
  pageIndex: any;
  pageSize: any;
  pageOptions: any;
  gotoPage: any;
  setPageSize: any;
  canNextPage: any;
  canPreviousPage: any;
  pageCount: any;
  previousPage: any;
  nextPage: any;
}
const TableControl: FC<tableControlProps> = ({
  pageIndex,
  pageSize,
  pageOptions,
  gotoPage,
  setPageSize,
  canNextPage,
  canPreviousPage,
  pageCount,
  previousPage,
  nextPage,
}) => {
  const options = [5, 10, 15, 25];
  return (
    <div className="controlLayout">
      <button
        className="btn"
        onClick={() => gotoPage(0)}
        disabled={!canPreviousPage}
      >
        {"<<"}
      </button>
      <button
        className="btn"
        onClick={() => previousPage()}
        disabled={!canPreviousPage}
      >
        {"<"}
      </button>
      <div className="innerLayout">
        <span>
          page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <span>
          Go to page : {``}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e: { target: { value: any } }) => {
              const pageNumber = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              gotoPage(pageNumber);
            }}
          />
        </span>
        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {options?.map((pageSize, index) => (
            <option key={pageSize} value={pageSize}>
              show {pageSize}
            </option>
          ))}
        </select>
      </div>
      <button
        className="btn"
        onClick={() => nextPage()}
        disabled={!canNextPage}
      >
        {">"}
      </button>
      <button
        className="btn"
        onClick={() => gotoPage(pageCount - 1)}
        disabled={!canNextPage}
      >
        {">>"}
      </button>
    </div>
  );
};

export default TableControl;
