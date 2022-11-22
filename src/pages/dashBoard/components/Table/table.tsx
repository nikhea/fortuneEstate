// @ts-ignore
import { useMemo } from "react";
import "./table.css";
import {
  Column,
  useTable,
  useSortBy,
  useGlobalFilter,
  useBlockLayout,
} from "react-table";
import { useSticky } from "react-table-sticky";
import MOCK_DATA from "../../../../data/MOCK_DATA.json";
import { column } from "./colum";
import { FaSortDown, FaSortUp } from "react-icons/fa";
import GlobalFilterInput from "./GlobalFilters";
import { StickyStyles } from "./StyledTable";
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
  const columns = useMemo<Column<DataInterface>[]>(() => column, []);
  const data = useMemo<DataInterface[]>(() => MOCK_DATA, []);
  console.log(data, "data");
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    // @ts-ignore
    state: { globalFilter },
    // @ts-ignore
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    // useBlockLayout,
    // useSticky
  );
  return (
    <>
      <GlobalFilterInput filter={globalFilter} setfilter={setGlobalFilter} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {/* {JSON.stringify(headerGroup.headers)} */}
              {headerGroup.headers.map((column: any) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <FaSortDown
                          color="#fff"
                          size={20}
                          style={{ marginRight: "11px" }}
                        />
                      ) : (
                        <FaSortUp
                          color="#fff"
                          size={20}
                          style={{ marginRight: "11px" }}
                        />
                      )
                    ) : (
                      <FaSortDown
                        color="#fff"
                        size={20}
                        style={{ marginRight: "11px" }}
                      />
                    )}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.slice(0, 50).map((row) => {
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
