import { FC, useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Humburger from "hamburger-react";
import { Link, NavLink } from "react-router-dom";
import { routes } from "../../../routes/routes";
import Button from "../../../components/UI/FormElement/Button";

interface IDrawerProps {
  text: string;
  home?: string;
}
const DrawerComponent: FC<IDrawerProps> = ({ text, home }) => {
  const [isOpen, setIsOpen] = useState(false);
  const CloseDrawer = () => {
    setIsOpen(false);
  };
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const style = {
    activeSM: ` text-blue-500 [&+*]:bg-blue-500`,
    drawertoggle: `md:hidden absolut z-[] right-10 text-${text}`,
    drawerInsidetoggle: `absolute right-8 top-[60px] cursor-pointer `,
    listsSM: ` h-full w-full  flex flex-col flex-end justify-items-start  uppercase mt-[150px]    m-auto text-sm tracking-widest`,
    listSM: `  w-full h-ful  `,
    hr: `bg-[#181818] h-[1px] w-full my-3`,
  };
  return (
    <div>
      <span>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          duration={1000}
          className="md:hidden text-[#0D304A]"
          style={{ width: "60vw", zIndex: "999" }}
        >
          <button className={style.drawerInsidetoggle} onClick={toggleDrawer}>
            <Humburger toggled={isOpen} />
          </button>
          <div className="w-[90%] mx-auto h-full">
            <ul className={style.listsSM}>
              <NavLink
                className={({ isActive }) =>
                  isActive && home ? `${style.activeSM}` : ""
                }
                to={routes.home}
              >
                <li className={style.listSM} onClick={toggleDrawer}>
                  home
                </li>
              </NavLink>
              <div className={style.hr} />
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${style.activeSM}` : ""
                }
                to={routes.continents}
              >
                <li className={style.listSM} onClick={toggleDrawer}>
                  all countries
                </li>
              </NavLink>
              <div className={style.hr} />
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${style.activeSM}` : ""
                }
                to={routes.contact}
              >
                <li className={style.listSM} onClick={toggleDrawer}>
                  contact us
                </li>
              </NavLink>
              <div className={style.hr} />
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${style.activeSM}` : ""
                }
                to={routes.advertServices}
              >
                <li className={style.listSM} onClick={toggleDrawer}>
                  advert services
                </li>
              </NavLink>
              <div className={style.hr} />{" "}
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${style.activeSM}` : ""
                }
                to={routes.dashboard}
              >
                <li className={style.listSM} onClick={CloseDrawer}>
                  dashboard
                </li>
              </NavLink>
            </ul>
          </div>
        </Drawer>
      </span>
      <button className={style.drawertoggle} onClick={toggleDrawer}>
        <Humburger toggled={isOpen} />
      </button>
    </div>
  );
};

export default DrawerComponent;
