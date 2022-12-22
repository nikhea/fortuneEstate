//@ts-ignore
import { FC, useMemo, forwardRef, useRef, useEffect } from "react";
import CheckBox from "../../../../components/UI/FormElement/CheckBox";

interface toggleTableProps {
  allColumns: any;
  getToggleHideAllColumnsProps: any;
}

const toggleTable: FC<toggleTableProps> = ({
  allColumns,
  getToggleHideAllColumnsProps,
}) => {
  const IndeterminateCheckbox = forwardRef(
    //@ts-ignore
    ({ indeterminate, ...rest }, ref) => {
      const defaultRef = useRef();
      const resolvedRef = ref || defaultRef;

      useEffect(() => {
        //@ts-ignore
        resolvedRef.current.indeterminate = indeterminate;
      }, [resolvedRef, indeterminate]);

      return (
        <div className="cb action">
          <label>
            <input type="checkbox" ref={resolvedRef} {...rest} />
            <span>All</span>
          </label>
        </div>
      );
    }
  );
  return (
    <div>
      <div>
        <IndeterminateCheckbox {...getToggleHideAllColumnsProps()} />
      </div>
      {/* Loop through columns data to create checkbox */}
      {allColumns.map((column: any) => (
        <div className="cb action" key={column.id}>
          <label>
            <input type="checkbox" {...column.getToggleHiddenProps()} />{" "}
            <span>{column.Header}</span>
          </label>
        </div>
      ))}
      <br />
    </div>
  );
};

export default toggleTable;

// const toggleTable: FC<toggleTableProps> = ({ allColumns }) => {
//   return (
//     <div className="grid grid-cols-2 items-center">
//       {allColumns.map((column: any) => (
//         <div className="cb action" key={column.id} >
//           <label className="flex items-center">
//           <h1> {column.id} </h1>
//             <CheckBox toggle={column.getToggleHiddenProps()} />

//           </label>
//         </div>
//       ))}
//       <br />
//     </div>
//   );
// };

{
  /* <div>
<div>
  <IndeterminateCheckbox {...getToggleHideAllColumnsProps()} />
</div> */
}
{
  /* Loop through columns data to create checkbox */
}
// {allColumns.map((column) => (
// <div className="cb action" key={column.id}>
//   <label>
//     <input type="checkbox" {...column.getToggleHiddenProps()} />{" "}
//     <span>{column.Header}</span>
//   </label>
// </div>
// ))}
{
  /* <br />
</div> */
}
