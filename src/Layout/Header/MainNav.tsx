import { FC, useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Humburger from "hamburger-react";
import { Link, NavLink } from "react-router-dom";
import { routes } from "../../routes/routes";
import Button from "../../components/UI/FormElement/Button";
import ImageLogo from "../../../dist/assets/Frame64.png";
import DrawerComponent from "./Drawer/Drawer";
const style = {
  container: ` flex  justify-between w-[90%]  m-auto items-center  `,
  mainTop: ``,
  lists: `capitalize hidden md:flex flex-wrap justify-center lg:justify-between lg:mr-[100px] mt-5 `,
  // lists: `mt-5 capitalize grid grid-cols-3 lg:mx-[35px]`,
  list: `mx-5  text-center items  text-white mb-3`,
  logo: `w-[200px] mt-5`,
  active: ` bg-[#0D304A] from-cyan-500 to-blue-500 text-white py-2 px-5 rounded-full`,
  btn: `uppercase  rounded-full `,
  activeSM: ` text-blue-500 [&+*]:bg-blue-500`,
  shadow: `my-5 flex mr-6 items-center`,
  btnadvertising: `hidden md:flex `,
  drawertoggle: `md:hidden absolut z-[] right-10 text-white`,
  drawerInsidetoggle: `absolute right-10 top-[50px] cursor-pointer `,
  drawer: ` md:hidden`,
  listsSM: ` h-full w-full  flex flex-col flex-end justify-items-start  uppercase mt-[150px] !w-[80%] m-auto text-sm tracking-widest`,
  listSM: `  w-full h-ful  `,
  hr: `bg-[#181818] h-[1px] w-full my-3`,
  logoBig: `font-extrabold text-transparent text-[20px] lg:text-[20px] bg-clip-text bg-gradient-to-r from-cyan-800 to-purple-400 px-[1.5em] lg:px-[3em] py-0 tracking-widest`,
};
const MainNav: FC = () => {
  return (
    <div className={style.shadow}>
      <div className={style.container}>
        <NavLink to={routes.home} className={style.logoBig}>
          <img
            className="w-50 h-10 object-contain"
            src={ImageLogo}
            alt="fortune estate"
          />
        </NavLink>

        <ul className={style.lists}>
          <li className={style.list}>
            <NavLink
              className={({ isActive }) => (isActive ? `${style.active}` : "")}
              to={routes.home}
            >
              home
            </NavLink>
          </li>
          <li className={style.list}>
            <NavLink
              className={({ isActive }) => (isActive ? `${style.active}` : "")}
              to={routes.continents}
            >
              all countries
            </NavLink>
          </li>
          <li className={style.list}>
            <NavLink
              className={({ isActive }) => (isActive ? `${style.active}` : "")}
              to={routes.contact}
            >
              contact us
            </NavLink>
          </li>
          <li className={style.list}>
            <NavLink
              className={({ isActive }) => (isActive ? `${style.active}` : "")}
              to={routes.advertServices}
            >
              advert services
            </NavLink>
          </li>
          <li className={style.list}>
            <NavLink
              className={({ isActive }) => (isActive ? `${style.active}` : "")}
              to={routes.dashboard}
            >
              dashboard
            </NavLink>
          </li>
        </ul>
        <span className={style.btnadvertising}>
          <Button primary rounded linearGradient uppercase>
            adverties
          </Button>
        </span>
      </div>
      <DrawerComponent text="white" home="home" />
    </div>
  );
};

export default MainNav;
