import { FC, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { routes } from "../../routes/routes";
import { IoSettingsSharp } from "react-icons/io5";
import { FaUser, FaCloudUploadAlt, FaMagento } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { BiStats } from "react-icons/bi";
import { SiGoogletagmanager } from "react-icons/si";
import { HiHomeModern } from "react-icons/hi2";
const style = {
  sidBarLayout: ` bg-white overflow-hidde hidden md:flex flex-col h-full py-[1em]`,
  container: ` flex justify-between w-[95%]  m-auto m-0 text-cente items-center  `,
  lists: `capitalize justify-between  mt-8 w-full h-full flex flex-col`,
  list: `  w-full [&>*]:py-2 [&>*]:px-5  [&>*]:w-full my-5 [&>*]:inline-block [&>*]:flex [&>*]:items-center `,
  upNavigation: ``,
  downNavigation: ``,
  logo: `w-[190px]`,
  icon: `text-red-300`,
  active: `bg-[#8392A5] bg-[#E5E5E5] text-white  `,
  btn: `uppercase  rounded-full `,
  shadow: ``,
  btnadvertising: `hidden md:flex`,
  drawertoggle: `md:hidden absolut z-[] right-10`,
  drawerInsidetoggle: `absolute right-10 top-[50px] cursor-pointer `,
  drawer: ` md:hidden`,
  listsSM: ` h-full w-full  flex flex-col flex-end justify-items-start  uppercase mt-[150px] w-[80%] m-auto text-sm tracking-widest`,
  listSM: `  w-full h-ful  `,
  hr: `bg-[#181818] h-[1px] w-full my-3`,
  logoBig: `font-extrabold text-transparent text-[15px]  bg-clip-text bg-gradient-to-r from-cyan-800 to-purple-400 px-[3em] py-0 tracking-widest`,
};
const SideBar: FC = () => {
  return (
    <div className={style.sidBarLayout}>
      <Link to={routes.home} className={style.logoBig}>
        Fortune Estate
        {/* <img src="https://www.thehouse48.com/wp-content/uploads/2021/11/cropped-H48-1280x400-1.png" /> */}
      </Link>
      <ul className={style.lists}>
        <div className={style.upNavigation}>
          <li className={style.list}>
            <NavLink
              className={({ isActive }) => (isActive ? `${style.active}` : "")}
              to={routes.dashboard}
            >
              <MdDashboard
                // color="red"
                size={20}
                style={{ marginRight: "11px" }}
              />
              dashboard
            </NavLink>
          </li>
          <li className={style.list}>
            <NavLink
              className={({ isActive }) => (isActive ? `${style.active}` : "")}
              to={routes.upload}
            >
              <FaCloudUploadAlt
                // color="red"
                size={20}
                style={{ marginRight: "11px" }}
              />
              upload
            </NavLink>
          </li>
          <li className={style.list}>
            <NavLink
              className={({ isActive }) => (isActive ? `${style.active}` : "")}
              to={routes.lisitingManager}
            >
              <SiGoogletagmanager
                // color="red"
                size={20}
                style={{ marginRight: "11px" }}
              />
              listing Manager
            </NavLink>
          </li>

          <li className={style.list}>
            <NavLink
              className={({ isActive }) => (isActive ? `${style.active}` : "")}
              to={routes.lisitingStat}
            >
              <BiStats
                // color="red"
                size={20}
                style={{ marginRight: "11px" }}
              />
              listing Stats
            </NavLink>
          </li>
          <li className={style.list}>
            <NavLink
              className={({ isActive }) => (isActive ? `${style.active}` : "")}
              to={routes.tracklisiting}
            >
              <FaMagento
                // color="red"
                size={20}
                style={{ marginRight: "11px" }}
              />
              track your listing
            </NavLink>
          </li>
          <li className={style.list}>
            <NavLink
              className={({ isActive }) => (isActive ? `${style.active}` : "")}
              to={routes.dashboardProperties}
            >
              <HiHomeModern
                // color="red"
                size={20}
                style={{ marginRight: "11px" }}
              />
              property
            </NavLink>
          </li>
        </div>
        <div className={style.downNavigation}>
          <li className={style.list}>
            <NavLink
              className={({ isActive }) => (isActive ? `${style.active}` : "")}
              to={routes.profile}
            >
              <FaUser
                // color="red"
                size={20}
                style={{ marginRight: "11px" }}
              />
              profile
            </NavLink>
          </li>
          <li className={style.list}>
            <NavLink
              className={({ isActive }) => (isActive ? `${style.active}` : "")}
              to={routes.settings}
            >
              <IoSettingsSharp
                // color="red"
                size={20}
                style={{ marginRight: "11px" }}
              />
              settings
            </NavLink>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default SideBar;
