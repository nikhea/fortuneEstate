import { FC } from "react";
import MainNav from "../components/Header/MainNav";
import SubNav from "../components/Header/SubNav";
import NewsLetter from "../components/Newsletter/newsletter";
import HouseBanner from "../components/HouseBanner/HouseBanner";
import Social from "../components/social";
import Footer from "../components/footer/footer";
interface layout {
  children: React.ReactNode;
}

const Layout: FC<layout> = ({ children }) => {
  return (
    <div>
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
