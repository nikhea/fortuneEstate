import { Suspense, lazy } from "react";
// import TableLsiting from "../components/Table/table";
import "./Style/trackingList.css";
const TableLsiting = lazy(() => import("../components/Table/table"));
import PageLoading from "../../../components/UI/Loading/PageLoading";

const style = {
  container: `w-[99.5%] m-auto bg-gree-500 h-full  flex flex-col`,
};
const trackLisiting = () => {
  return (
    <Suspense fallback={<PageLoading />}>
      <div className="trackingListLayout">
        <TableLsiting />
      </div>
    </Suspense>
  );
};

export default trackLisiting;
