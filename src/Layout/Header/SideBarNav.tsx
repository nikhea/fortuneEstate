import { FC, useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Humburger from "hamburger-react";
import { Link, NavLink } from "react-router-dom";
import { routes } from "../../routes/routes";
import { IoSettingsSharp } from "react-icons/io5";
import { FaUser, FaCloudUploadAlt } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { BiStats } from "react-icons/bi";
import { SiGoogletagmanager } from "react-icons/si";
import { HiHomeModern } from "react-icons/hi2";
const style = {
  container: `flex justify-between items-center mt-1`,
  drawertoggle: `md:hidden absolut z-[] right-10 mr-4`,
  drawerInsidetoggle: `absolute right-[10px] top-[0px] cursor-pointer `,
  drawerInsidetoggleClose:`absolute right-[10px] top-[10px] cursor-pointer`,
  drawer: ` md:hidden`,
  list: `   w-full [&>*]:py-2 [&>*]:px-5  [&>*]:w-full my-5 [&>*]:inline-block [&>*]:flex [&>*]:items-center  `,
  logo: `w-[150px]`,
  active: `bg-[#8392A5] bg-[#E5E5E5] text-white  `,
  listsSM: ` h-full w-full  flex flex-col justify-betwee  uppercase mt-[50px] mb-[20px] w-full m-auto text-sm tracking-widest`,
  upNavigation: ``,
  downNavigation: `mt-[150px]`,
};
const SideBarNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const CloseDrawer = () => {
    setIsOpen(false);
  };
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className={style.container}>
      <Link to={routes.home} className={style.logo}>
        <img src="https://www.thehouse48.com/wp-content/uploads/2021/11/cropped-H48-1280x400-1.png" />
      </Link>
      <span>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          duration={1000}
          // className="w-[80vw]"
          style={{ width: "80vw", zIndex: "999" }}
        >
          <button className={style.drawerInsidetoggleClose} onClick={toggleDrawer}>
            <Humburger toggled={isOpen} />
          </button>
          <ul className={style.listsSM}>
            <div className={style.upNavigation}>
              <li className={style.list} onClick={toggleDrawer}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `${style.active}` : ""
                  }
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
              <li className={style.list} onClick={toggleDrawer}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `${style.active}` : ""
                  }
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
              <li className={style.list} onClick={toggleDrawer}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `${style.active}` : ""
                  }
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
              <li className={style.list} onClick={toggleDrawer}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `${style.active}` : ""
                  }
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
              <li className={style.list} onClick={toggleDrawer}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `${style.active}` : ""
                  }
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
              <li className={style.list} onClick={toggleDrawer}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `${style.active}` : ""
                  }
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
              <li className={style.list} onClick={toggleDrawer}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `${style.active}` : ""
                  }
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
        </Drawer>
      </span>
      <button className={style.drawertoggle} onClick={toggleDrawer}>
        <Humburger toggled={isOpen} />
      </button>
    </div>
  );
};

export default SideBarNav;
{
  /* <span>
<Drawer
  open={isOpen}
  onClose={toggleDrawer}
  direction="right"
  duration={1000}
  // className="w-[80vw]"
  style={{ width: "80vw", zIndex: "999" }}
>
  <button className={style.drawerInsidetoggle} onClick={toggleDrawer}>
    <Humburger toggled={isOpen} />
  </button>
  <ul className={style.listsSM}>
    <div className={style.upNavigation}>
      <li className={style.list} onClick={toggleDrawer}>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${style.active}` : ""
          }
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
      <li className={style.list} onClick={toggleDrawer}>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${style.active}` : ""
          }
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
      <li className={style.list} onClick={toggleDrawer}>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${style.active}` : ""
          }
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
      <li className={style.list} onClick={toggleDrawer}>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${style.active}` : ""
          }
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
      <li className={style.list} onClick={toggleDrawer}>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${style.active}` : ""
          }
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
      <li className={style.list} onClick={toggleDrawer}>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${style.active}` : ""
          }
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
      <li className={style.list} onClick={toggleDrawer}>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${style.active}` : ""
          }
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
</Drawer>
</span> */
}
