import { FC, useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Humburger from "hamburger-react"
import { Link } from "react-router-dom";
import { routes } from "../../routes/routes";
import Button from "../../components/UI/FormElement/Button";
const style = {
  container: ` flex justify-between w-[95%]  m-auto m-0 text-center items-center  `,
  lists: `capitalize hidden md:flex justify-between mr-[100px]`,
  list: ` mx-[35px] text-center items `,
  logo: `w-[200px]`,
  btn: `uppercase  rounded-full `,
  shadow: ``,
  btnadvertising: `hidden md:flex`,
  drawertoggle: `md:hidden absolute z-[999] right-10`,
  drawer: ` md:hidden`,
  listsSM: ` h-full w-full flex flex-col items-center justify-center`,
  listSM: `  w-full h-ful my-5`,
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
          <li className={style.list} >
            <Link to={routes.home}>home</Link>
          </li>
          <li className={style.list}>
            <Link to={routes.continents}>all countries</Link>
          </li>
          <li className={style.list}>
            <Link to={routes.contact}>contact us</Link>
          </li>
          <li className={style.list}>
            <Link to={routes.advertServices}>advert services</Link>
          </li>
          <li className={style.list}>
            <Link to={routes.dashboard}>dashboard</Link>
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
            // className="w-[80vw]"
            style={{width: "80vw"}}
          >
            <ul className={style.listsSM}>
              <li className={style.listSM} onClick={toggleDrawer}>
                <Link to={routes.home}>home</Link>
              </li>
              <li className={style.listSM} onClick={toggleDrawer}>
                <Link to={routes.continents}>all countries</Link>
              </li>
              <li className={style.listSM} onClick={toggleDrawer}>
                <Link to={routes.contact}>contact us</Link>
              </li>
              <li className={style.listSM} onClick={toggleDrawer}>
                <Link to={routes.advertServices}>advert services</Link>
              </li>
              <li className={style.listSM} onClick={CloseDrawer}>
                <Link to={routes.dashboard}>dashboard</Link>
              </li>
            </ul>
          </Drawer>
        </span>
        <button className={style.drawertoggle} onClick={toggleDrawer}>
          <Humburger toggled={isOpen}/>
          {/* <Humburger toggled={isOpen} toggle={setIsOpen}/> */}
        </button>
      </div>
    </div>
  );
};

export default MainNav;
{/* <Humburger toggled={isOpen} toggle={setIsOpen}/> */}
