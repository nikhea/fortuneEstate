import { FaUserCircle } from "react-icons/fa";
import { MdNotifications } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "rc-dropdown/assets/index.css";
import Dropdown from "rc-dropdown";
import Menu, { Item as MenuItem } from "rc-menu";
import { useAuth } from "../../lib/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import { routes } from "../../routes/routes";
import { RiLogoutCircleRLine } from "react-icons/ri";
const style = {
  container: `hidden md:flex bg-white p-[0em] py-2  overflow-hidden text-[#11142D] border-t-[#E5E5E5] border-solid border-y-4 relative sticky  top-0 bottom-0 left-0 right-0 z-[9999] overflow-hidden`,
  subContainer: `flex justify-between items-center w-[95%] m-auto `,
  colRight: ``,
  colLeft: `flex items-center`,
  header: ``,
  h1: ` text-[#11142D] font-normal text-[.9rem] lg:text-[2rem] capitalize`,
  // agentImage: ` max-w-[35px]  h-[35px] rounded-full flex items-center`,
  img: ` w-full h-full rounded-full`,
  profileImg: `shadow-xl h-[50px] w-[50px] bg-red-500 rounded-full mr-3 border-2 object-cover`,
  thumbnailImage: `h-full w-full bg-red-500 rounded-full object-cover `,
  Menu: `min-w-[150px] mx-auto  flex flex-col rounded-[10px] py-1 mt-2`,
  MenuItem: `mb-2`,
  MenuItemLink: `flex items-center mt-4 mx-3 w-full capitalize`,
  MenuItemLinkText: `text-[1rem] `,
};
const DashBoardHeader = () => {
  const { user, logout } = useAuth();
  const [drop, setDrop] = useState(false);

  let urlImg = user?.profile?.profileImage?.thumbnail_url;
  function onVisibleChange(visible: any) {
    setDrop((prevDrop: any) => !prevDrop);
  }
  const logOutUser = async () => {
    try {
      await logout();
    } catch (error) {}
  };
  const menu = (
    <Menu className={style.Menu}>
      <MenuItem key="0" className={style.MenuItem}>
        <Link to={routes.profileUpdate} className={style.MenuItemLink}>
          <FaUserCircle
            color="#8392A5"
            size={20}
            style={{ marginRight: "5px" }}
          />
          <p className={style.MenuItemLinkText}>edit profile</p>
        </Link>
        <Link to={routes.settings} className={style.MenuItemLink}>
          <IoSettingsSharp
            color="#8392A5"
            size={20}
            style={{ marginRight: "5px" }}
          />
          <p className={style.MenuItemLinkText}>settings</p>
        </Link>
        <Link to="#" onClick={logOutUser} className={style.MenuItemLink}>
          <RiLogoutCircleRLine
            color="#8392A5"
            size={20}
            style={{ marginRight: "5px", fontWeight: 900 }}
          />
          <p className={style.MenuItemLinkText}>log out</p>
        </Link>
      </MenuItem>
    </Menu>
  );
  return (
    <div className={style.container}>
      <div className={style.subContainer}>
        <div className={style.colRight}>
          <h1 className={style.h1}> {user && `welcome ${user?.firstname}`}</h1>
        </div>
        <div className={style.colLeft}>
          <div className="relative flex items-center ">
            <MdNotifications
              color="#8392A5"
              size={20}
              style={{ marginRight: "15px" }}
            />
            <div className="bg-red-800 h-2 w-2 rounded-full absolute left-2 top-[1px]"></div>
          </div>
          <p className="cursor-pointer">
            {urlImg ? (
              <Dropdown
                trigger={["click"]}
                overlay={menu}
                animation="slide-up"
                onVisibleChange={onVisibleChange}
                // onSelect={onSelect}
              >
                <div className={style.profileImg}>
                  <LazyLoadImage
                    className={style.thumbnailImage}
                    src={urlImg}
                  />
                </div>
              </Dropdown>
            ) : (
              <>
                <FaUserCircle
                  color="#8392A5"
                  size={50}
                  style={{ marginRight: "5px" }}
                />
              </>
            )}
          </p>
          <div className=" flex flex-col text-[.7rem] lg:text-[1rem]">
            <h1>{user && ` ${user?.firstname} ${user?.lastname}`}</h1>
            <p>{user && ` ${user?.role}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardHeader;
