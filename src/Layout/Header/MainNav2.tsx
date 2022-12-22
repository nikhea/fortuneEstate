import { FC, useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Humburger from "hamburger-react";
import { Link, NavLink } from "react-router-dom";
import { routes } from "../../routes/routes";
import Button from "../../components/UI/FormElement/Button";
const style = {
  container: ` flex justify-between w-[95%]  m-auto m-0 text-cente items-center  `,
  lists: `capitalize hidden md:flex flex-wrap justify-center lg:justify-between lg:mr-[100px] mt-5 `,
  list: ` mx-5 lg:mx-[35px] mb-3 text-center items text-[#0D304A]`,
  // list: `mx-5 lg:mx-[35px] text-center items  text-white mb-3`,
  logo: `w-[200px] mt-5`,
  active: `bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 px-5 rounded-full`,
  activeSM: `text-blue-500 [&+*]:bg-blue-500`,
  btn: `uppercase  rounded-full `,
  shadow: ``,
  btnadvertising: `hidden md:flex mt-5`,
  drawertoggle: `md:hidden absolut z-[] right-10`,
  drawerInsidetoggle: `absolute right-10 top-[50px] cursor-pointer `,
  drawer: ` md:hidden`,
  listsSM: ` h-full w-full  flex flex-col flex-end justify-items-start  uppercase mt-[150px] w-[80%] m-auto text-sm tracking-widest`,
  listSM: `  w-full h-ful  `,
  hr: `bg-[#181818] h-[1px] w-full my-3`,
};
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
        <Link to={routes.home} className={style.logo}>
          <img src="https://www.thehouse48.com/wp-content/uploads/2021/11/cropped-H48-1280x400-1.png" />
        </Link>

        <ul className={style.lists}>
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
        <span className={style.btnadvertising}>
          <Button primary rounded linearGradient uppercase>
            adverties
          </Button>
        </span>
        <span>
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="right"
            duration={1000}
            className="md:hidden text-[#0D304A]"
            style={{ width: "80vw", zIndex: "999" }}
          >
            <button className={style.drawerInsidetoggle} onClick={toggleDrawer}>
              <Humburger toggled={isOpen} />
            </button>
            <ul className={style.listsSM}>
              <li className={style.listSM} onClick={toggleDrawer}>
                <NavLink
                  // className={({ isActive }) =>
                  //   isActive ? `${style.activeSM}` : ""
                  // }
                  to={routes.home}
                >
                  home
                </NavLink>
                <div className={style.hr} />
              </li>
              {/* <div className={style.hr}></div> */}
              <li className={style.listSM} onClick={toggleDrawer}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `${style.activeSM}` : ""
                  }
                  to={routes.continents}
                >
                  all countries
                </NavLink>
                <div className={style.hr} />
              </li>
              <li className={style.listSM} onClick={toggleDrawer}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `${style.activeSM}` : ""
                  }
                  to={routes.contact}
                >
                  contact us
                </NavLink>
                <div className={style.hr} />{" "}
              </li>
              <li className={style.listSM} onClick={toggleDrawer}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `${style.activeSM}` : ""
                  }
                  to={routes.advertServices}
                >
                  advert services
                </NavLink>
                <div className={style.hr} />{" "}
              </li>
              <li className={style.listSM} onClick={CloseDrawer}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `${style.activeSM}` : ""
                  }
                  to={routes.dashboard}
                >
                  dashboard
                </NavLink>
              </li>
              {/* <div className={style.hr} /> */}
            </ul>
          </Drawer>
        </span>
        <button className={style.drawertoggle} onClick={toggleDrawer}>
          <Humburger toggled={isOpen} />
          {/* <Humburger toggled={isOpen} toggle={setIsOpen}/> */}
        </button>
      </div>
    </div>
  );
};

export default MainNav;
{
  /* <Humburger toggled={isOpen} toggle={setIsOpen}/> */
}
