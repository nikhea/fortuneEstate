import { FC } from "react";
import Header from "../../Layout/Header";
import FilterCard from "../../components/card/filterCard";
import Carousel from "../../components/UI/caroules/carousel";

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
