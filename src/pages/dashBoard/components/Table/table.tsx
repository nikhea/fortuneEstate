// @ts-ignore
import { useMemo, forwardRef, useRef, useEffect } from "react";
import "./table.css";
import {
  Column,
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
  useBlockLayout,
  Row,
} from "react-table";
import Switch from "react-switch";
import { useSticky } from "react-table-sticky";
import MOCK_DATA from "../../../../data/MOCK_DATA.json";
import { column } from "./colum";
import { BiSortAlt2 } from "react-icons/bi";
import { BsSortUp, BsSortDown } from "react-icons/bs";

import GlobalFilterInput from "./GlobalFilters";
import { StickyStyles } from "./StyledTable";
import ToggleTable from "./toggleTable";
import TableControl from "./tableControl";
// import IndeterminateCheckbox from "./ IndeterminateCheckbox";
interface DataInterface {
  id: number;
  first_name: string;
  last_name: string;
  // email: string;
  date_of_birth: string;
  age: number;
  countrys: string;
  phone: string;
}
const IndeterminateCheckbox = forwardRef(({ indeterminate, ...rest }, ref) => {
  const defaultRef = useRef();
  const resolvedRef = ref || defaultRef;

  useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);

  return (
    <div class="cb action">
      <label>
        <input type="checkbox" ref={resolvedRef} {...rest} />
        <span>All</span>
      </label>
    </div>
  );
});
const basic = () => {
  const columns = useMemo<Column<DataInterface>[]>(() => column, []);
  const data = useMemo<DataInterface[]>(() => MOCK_DATA, []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    // rows,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
    allColumns,
    getToggleHideAllColumnsProps,
    state: { globalFilter, pageIndex, pageSize },
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 5 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
    // useBlockLayout,
    // useSticky
  );
  return (
    <>
      <div>
        <div>
          <IndeterminateCheckbox {...getToggleHideAllColumnsProps()} />
        </div>
        {/* Loop through columns data to create checkbox */}
        {allColumns.map((column) => (
          <div className="cb action" key={column.id}>
            <label>
              <input type="checkbox" {...column.getToggleHiddenProps()} />{" "}
              <span>{column.Header}</span>
            </label>
          </div>
        ))}
        <br />
      </div>
      {/* <ToggleTable allColumns={allColumns} /> */}
      {/* <GlobalFilterInput filter={globalFilter} setfilter={setGlobalFilter} /> */}
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {/* {JSON.stringify(headerGroup.headers)} */}

              {headerGroup.headers.map((column: any) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  <div className="con">
                    {column.render("Header")}
                    <span>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <BsSortDown
                            // color="#fff"
                            size={20}
                            style={{ marginRight: "11px" }}
                          />
                        ) : (
                          <BsSortUp
                            // color="#fff"
                            size={20}
                            style={{ marginRight: "11px" }}
                          />
                        )
                      ) : (
                        <BiSortAlt2
                          // color="#fff"
                          size={20}
                          style={{ marginRight: "11px" }}
                        />
                      )}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.slice().map((row: Row<DataInterface>) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <TableControl
        pageIndex={pageIndex}
        pageSize={pageSize}
        pageOptions={pageOptions}
        gotoPage={gotoPage}
        setPageSize={setPageSize}
        canNextPage={canNextPage}
        canPreviousPage={canPreviousPage}
        pageCount={pageCount}
        previousPage={previousPage}
        nextPage={nextPage}
      />
    </>
  );
};

export default basic;

// const TableInstance = useTable(
//   {
//     columns,
//     data,
//   },
//   useSortBy,
//   useGlobalFilter
// );
// const {
//   getTableProps,
//   getTableBodyProps,
//   headerGroups,
//   rows,
//   prepareRow,
//   state,
//   setGlobalFilter,
// } = TableInstance;
