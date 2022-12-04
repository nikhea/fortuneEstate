import { FC } from "react";
import "../style/upload.css";
import ComponentSwitch from "./ComponentSwitch";
const MultiStepContainer: FC = () => {
  return (
    <div className="uploadLayout">
      <ComponentSwitch />
    </div>
  );
};

export default MultiStepContainer;
