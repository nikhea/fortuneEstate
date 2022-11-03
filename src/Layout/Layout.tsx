import { FC } from "react";
import MainNav from "./Header/MainNav";
import SubNav from "./Header/SubNav";
import NewsLetter from "./Newsletter/newsletter";
import HouseBanner from "../components/HouseBanner/HouseBanner";
import Social from "../components/social";
import Footer from "./footer/footer";
interface layout {
  children: React.ReactNode;
}

const Layout: FC<layout> = ({ children }) => {
  return (
    <div className="">
      <SubNav />
      <MainNav />
      {children}
      <NewsLetter />
      <HouseBanner />
      <Social />
      <Footer />
    </div>
  );
};

export default Layout;
