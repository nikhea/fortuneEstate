import { FC } from "react";
import MainNav from "./Header/MainNav";
import SubNav from "./Header/SubNav";
import NewsLetter from "./Newsletter/newsletter";
import HouseBanner from "../components/HouseBanner/HouseBanner";
import Social from "../components/social";
import Footer from "./footer/footer";
import { Outlet } from "react-router-dom";
interface layout {
  children?: React.ReactNode;
}

const Layout: FC<layout> = ({ children }) => {
  return (
    <div className="">
      <SubNav />
      <MainNav />
      <Outlet />
      <NewsLetter />
      <HouseBanner />
      <Social />
      <Footer />
    </div>
  );
};

export default Layout;
