import { FC, useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Humburger from "hamburger-react";
import { Link, NavLink } from "react-router-dom";
import { routes } from "../../routes/routes";
import Button from "../../components/UI/FormElement/Button";
import ImageLogo from "../../../dist/assets/Frame65.png";
import DrawerComponent from "./Drawer/Drawer";

const style = {
  container: ` flex justify-between w-[90%]  m-auto  items-center   `,
  lists: `capitalize hidden md:flex flex-wrap justify-center lg:justify-between lg:mr-[100px] mt-5 `,
  list: ` mx-5  mb-3 text-center items text-[#0D304A]`,
  logo: `w-[200px] mt-5`,
  active: `bg-[#0D304A] to-blue-500 text-white py-2 px-5 rounded-full`,
  activeSM: `text-blue-500 [&+*]:bg-blue-500`,
  btn: `uppercase  rounded-full `,
  shadow: `my-5 flex m-6 items-center bg-white fixe z-[999999999999999999999999999999999999] left-0 right-0`,
  btnadvertising: `hidden md:flex `,
  drawertoggle: `md:hidden absolut z-[] right-10`,
  drawerInsidetoggle: `absolute right-10 top-[50px] cursor-pointer `,
  drawer: ` md:hidden`,
  listsSM: ` h-full w-full  flex flex-col flex-end justify-items-start  uppercase mt-[150px] !w-[80%] m-auto text-sm tracking-widest`,
  listSM: `  w-full h-ful  `,
  hr: `bg-[#181818] h-[1px] w-full my-3`,
  logoBig: `font-extrabold text-transparent text-[20px] lg:text-[20px] bg-clip-text bg-gradient-to-r from-cyan-800 to-purple-400  py-0 tracking-widest`,
};
// px-[1.5em] lg:px-[3em]
const MainNav: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const CloseDrawer = () => {
    setIsOpen(false);
  };
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className={style.shadow}>
      <div className={style.container}>
        <Link
          // data-aos="fade-in"
          // data-aos-easing="ease-in-out"
          // data-aos-duration="6500"
          to={routes.home}
          className={style.logoBig}
        >
          <img
            className="w-50 h-10 object-contain  "
            src={ImageLogo}
            alt="fortune estate"
          />

          {/* FortuneEstate */}
          {/* <img src="https://www.thehouse48.com/wp-content/uploads/2021/11/cropped-H48-1280x400-1.png" /> */}
        </Link>

        <ul
          // data-aos="fade-in"
          // data-aos-easing="ease-in-out"
          // data-aos-duration="6500"
          className={style.lists}
        >
          <li className={style.list}>
            <NavLink
              // className={({ isActive }) => (isActive ? `${style.active}` : "")}
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
        <span
          // data-aos="fade-in"
          // data-aos-easing="ease-in-out"
          // data-aos-duration="6500"
          className={style.btnadvertising}
        >
          <Button primary rounded linearGradient uppercase>
            adverties
          </Button>
        </span>
      </div>
      <DrawerComponent text="#111" />
    </div>
  );
};

export default MainNav;
{
  /* <Humburger toggled={isOpen} toggle={setIsOpen}/> */
}

// <span>
// <Drawer
//   open={isOpen}
//   onClose={toggleDrawer}
//   direction="right"
//   duration={1000}
//   className="md:hidden text-[#0D304A]"
//   style={{ width: "60vw", zIndex: "999" }}
// >
//   <button className={style.drawerInsidetoggle} onClick={toggleDrawer}>
//     <Humburger toggled={isOpen} />
//   </button>
//   <ul className={style.listsSM}>
//     <li className={style.listSM} onClick={toggleDrawer}>
//       <NavLink
//         // className={({ isActive }) =>
//         //   isActive ? `${style.activeSM}` : ""
//         // }
//         to={routes.home}
//       >
//         home
//       </NavLink>
//       <div className={style.hr} />
//     </li>
//     {/* <div className={style.hr}></div> */}
//     <li className={style.listSM} onClick={toggleDrawer}>
//       <NavLink
//         className={({ isActive }) =>
//           isActive ? `${style.activeSM}` : ""
//         }
//         to={routes.continents}
//       >
//         all countries
//       </NavLink>
//       <div className={style.hr} />
//     </li>
//     <li className={style.listSM} onClick={toggleDrawer}>
//       <NavLink
//         className={({ isActive }) =>
//           isActive ? `${style.activeSM}` : ""
//         }
//         to={routes.contact}
//       >
//         contact us
//       </NavLink>
//       <div className={style.hr} />{" "}
//     </li>
//     <li className={style.listSM} onClick={toggleDrawer}>
//       <NavLink
//         className={({ isActive }) =>
//           isActive ? `${style.activeSM}` : ""
//         }
//         to={routes.advertServices}
//       >
//         advert services
//       </NavLink>
//       <div className={style.hr} />{" "}
//     </li>
//     <li className={style.listSM} onClick={CloseDrawer}>
//       <NavLink
//         className={({ isActive }) =>
//           isActive ? `${style.activeSM}` : ""
//         }
//         to={routes.dashboard}
//       >
//         dashboard
//       </NavLink>
//     </li>
//     {/* <div className={style.hr} /> */}
//   </ul>
// </Drawer>
// </span>
// <button className={style.drawertoggle} onClick={toggleDrawer}>
// <Humburger toggled={isOpen} />
// </button>
