import { FC } from "react";
import CheckBox from "../../../../components/UI/FormElement/CheckBox";

interface toggleTableProps {
  allColumns: any;
}
const toggleTable: FC<toggleTableProps> = ({ allColumns }) => {
  return (
    <div className="grid grid-cols-2 items-center">
      {allColumns.map((column: any) => (
        <div className="cb action" key={column.id} >
          <label className="flex items-center">
          <h1> {column.id} </h1>
            <CheckBox toggle={column.getToggleHiddenProps()} />
            
          </label>
        </div>
      ))}
      <br />
    </div>
  );
};

export default toggleTable;
