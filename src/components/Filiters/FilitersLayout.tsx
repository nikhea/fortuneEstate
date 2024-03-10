import { FC } from "react";

import { Outlet } from "react-router-dom";
import Footer from "../../Layout/footer/footer";
import SubNav from "../../Layout/Header/SubNav";
import HouseBanner from "../HouseBanner/HouseBanner";
import Social from "../social";
import NewsLetter from "../../Layout/Newsletter/newsletter";
// import FilitersComponents from "./FilitersComponents";
interface layout {
  children?: React.ReactNode;
}

const Layout: FC<layout> = ({ children }) => {
  return (
    <div className="">
      <SubNav />
      {/* <MainNav /> */}
      {/* <FilitersComponents /> */}
      <Outlet />
      <NewsLetter />
      <HouseBanner />
      <Social />
      <Footer />
    </div>
  );
};

export default Layout;
