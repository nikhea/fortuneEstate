import { FC } from "react";
import { Outlet } from "react-router-dom";
import { routes } from "../routes/routes";
import { Link } from "react-router-dom";
import SideBar from "../pages/dashBoard/sidebar";
import SideBarNav from "../Layout/Header/SideBarNav";
const dashBoard: FC = () => {
  const style = {
    dashBoardLayout: ` border-l-[5px] border-b-[5px] border-t-[5px] h-scree border-[#E5E5E5] bg-[#E5E5E5]  overflow-hidde flex flex-col md:flex-row relative`,
    container: `  w-[95%]  m-auto`,
    sidebar: `hidden md:block md:col-start-1 md:col-end-1 h-full h-scre md:w-[20%] sticky top-0 bottom-0 left-0 right-0`,
    sidebarNav: ` md:hidden`,
    Outlet: `md:col-start-2 md:col-end-11 h-full w-full`,
    logo: `w-[30%]`,
  };
  // dashBoardLayout: ` border-[2px] border-sky-500 bg-[#3e3e3e] h-screen grid grid-cols-10 `,
  // container: `  w-[95%]  m-auto  `,
  // sidebar: `col-start-1 col-end-1 h-full`,
  // Outlet: `col-start-2 col-end-11 h-full`,
  return (
    <div>
      <div className={style.dashBoardLayout}>
        <div className={style.sidebar}>
          <SideBar />
        </div>
        <div className={style.sidebarNav}>
          <SideBarNav />
        </div>
        <div className={style.Outlet}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default dashBoard;
