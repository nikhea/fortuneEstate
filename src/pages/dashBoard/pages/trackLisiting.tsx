import {Suspense,lazy} from "react";
// import TableLsiting from "../components/Table/table";
import "./Style/trackingList.css";
const TableLsiting =lazy(() => import("../components/Table/table"));

const style = {
  container: `w-[99.5%] m-auto bg-gree-500 h-full  flex flex-col`,
};
const trackLisiting = () => {
  return (
    <Suspense fallback={<div><p>Loading...</p></div>}>

    <div className="trackingListLayout">
      <TableLsiting />
    </div>
    </Suspense>
  );
};

export default trackLisiting;
