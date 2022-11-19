import { FC } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../pages/dashBoard/sidebar";
const dashBoard: FC = () => {
  const style = {
    dashBoardLayout: ` border-l-[5px] border-b-[5px] border-t-[5px]  border-[#E5E5E5] bg-[#E5E5E5] h-screen overflow-hidden flex `,
    container: `  w-[95%]  m-auto`,
    sidebar: `col-start-1 col-end-1 h-full w-[15%]`,
    Outlet: `col-start-2 col-end-11 h-full`,
  };
  // dashBoardLayout: ` border-[2px] border-sky-500 bg-[#3e3e3e] h-screen grid grid-cols-10 `,
  // container: `  w-[95%]  m-auto  `,
  // sidebar: `col-start-1 col-end-1 h-full`,
  // Outlet: `col-start-2 col-end-11 h-full`,
  return (
    <div >
      <div className={style.dashBoardLayout}>
        <div className={style.sidebar}>
          <SideBar />
        </div>
        <div className={style.Outlet}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default dashBoard;
