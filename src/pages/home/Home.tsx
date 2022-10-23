import { FC } from "react";
import Header from "../../components/Header";
import FilterCard from "../../components/card/filterCard";
import Carousel from "../../components/caroules/carousel";

const App: FC = () => {
  return (
    <div>
      <Header />
      <FilterCard />
      <Carousel />
    </div>
  );
};

export default App;
