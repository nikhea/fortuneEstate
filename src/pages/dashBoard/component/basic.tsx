import { useMemo } from "react";
import "./table.css"
import { Column, useTable } from "react-table";
import MOCK_DATA from "../../../data/MOCK_DATA.json";
import { column } from "./colum";

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
  console.log(columns, "collllll");

  const data = useMemo<DataInterface[]>(() => MOCK_DATA, []);
  console.log(data, "data");
  const TableInstance = useTable({
    columns,
    data,
  });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    TableInstance;
  console.log(headerGroups, "header");

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {/* {JSON.stringify(headerGroup.headers)} */}
            {headerGroup.headers.map((column: any) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.slice(0).map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default basic;
