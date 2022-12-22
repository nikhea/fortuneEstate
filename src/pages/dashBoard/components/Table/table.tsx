// @ts-ignore
import { useMemo } from "react";
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
import MOCK_DATA from "../../../../data/MOCK_DATA.json";
import { column } from "./colum";
import { BiSortAlt2 } from "react-icons/bi";
import { BsSortUp, BsSortDown } from "react-icons/bs";
import GlobalFilterInput from "./GlobalFilters";
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

const basic = () => {
  // @ts-ignore
  const columns = useMemo<Column<DataInterface>[]>(() => column, []);
  const data = useMemo<DataInterface[]>(() => MOCK_DATA, []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    // rows,
    // @ts-ignore
    page, // @ts-ignore
    nextPage, // @ts-ignore
    previousPage, // @ts-ignore
    canNextPage, // @ts-ignore
    canPreviousPage, // @ts-ignore
    pageOptions, // @ts-ignore
    gotoPage, // @ts-ignore
    pageCount, // @ts-ignore
    setPageSize, // @ts-ignore
    prepareRow,
    allColumns,
    getToggleHideAllColumnsProps,
    // @ts-ignore
    state: { globalFilter, pageIndex, pageSize },
    // @ts-ignore
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      // @ts-ignore
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
      <div className="flex flex-col">
        <GlobalFilterInput filter={globalFilter} setfilter={setGlobalFilter} />
        <ToggleTable
          allColumns={allColumns}
          getToggleHideAllColumnsProps={getToggleHideAllColumnsProps}
        />
      </div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
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
