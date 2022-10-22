import { FC } from "react";
import "./App.css";
import Header from "./components/Header";
import FilterCard from "./components/card/filterCard";
import Carousel from "./components/caroules/carousel";
import NewsLetter from "./components/Newsletter/newsletter";
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
    </div>
  );
};

export default App;
