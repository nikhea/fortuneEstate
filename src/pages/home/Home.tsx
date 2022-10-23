import { FC } from "react";
import Header from "../../components/Header";
import FilterCard from "../../components/card/filterCard";
import Carousel from "../../components/caroules/carousel";
import NewsLetter from "../../components/Newsletter/newsletter";
import HouseBanner from "../../components/HouseBanner/HouseBanner";
import Social from '../../components/social'
const style = {
  app: `relative `,
};
const App: FC = () => {
  return (
    <div className={style.app}>
      <Header />
      <FilterCard />
      <Carousel />
      <NewsLetter />
      <HouseBanner />
      <Social />
    </div>
  );
};

export default App;
