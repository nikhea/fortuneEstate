import { useMemo } from "react";
import { Column, useTable } from "react-table";
import MOCK_DATA from "../../../data/MOCK_DATA.json";
import { column } from "./colum";

interface DataInterface {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
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
  return <div>basic</div>;
};

export default basic;
