import { FC } from "react";
// import "./checkbox.css";
interface CheckboxProps {
  toggle: any;
}
const index: FC<CheckboxProps> = ({ toggle }) => {
  return (
    <div className="checkbo">
      <input type="checkbo" id="toggle" {...toggle} />
      <div className="labelDi">
        <label className="labe" htmlFor="toggle"></label>
      </div>
    </div>
  );
};

export default index;
