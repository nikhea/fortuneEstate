import { FC } from "react";
import Header from "../../Layout/Header";
import FilterCard from "../../components/card/filterCard";
import Carousel from "../../components/UI/caroules/carousel";
import CountriesCard from "../../components/CountriesCard"
const App: FC = () => {
  return (
    <div className="relative">
      <Header />
      <div className="relative top-[70%] -mt-20">
        <FilterCard />
      </div>
      <Carousel />
      <CountriesCard/>
    </div>
  );
};

export default App;
