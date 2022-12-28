import { FC } from "react";
import ReactLoading from "react-loading";

interface spinnerProps {
  type: any;
  color: string;
}
const Spinner: FC<spinnerProps> = ({ type, color }) => (
  <ReactLoading type={type} color={color} height={"20%"} width={"20%"} />
);

export default Spinner;

// import { FC } from "react";
// import "./spinner.css";
// const Spinner: FC = () => {
//   return <span className="loader"></span>;
// };

// export default Spinner;
