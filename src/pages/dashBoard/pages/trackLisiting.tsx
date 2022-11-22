import React from "react";
import TableLsiting from "../component/basic";


const style = {
  container: `w-[99.5%] m-auto bg-gree-500 h-full bg-white`
}
const trackLisiting = () => {
  return (
    <div className={style.container}>
      {/* trackYourLisiting */}
      <TableLsiting />
    </div>
  );
};

export default trackLisiting;
