import { FC } from "react";
import { SEO } from "../../components/seo/seo";

import Header from "../../Layout/Header";
import FilterCard from "../../components/card/filterCard";
import Carousel from "../../components/UI/caroules/carousel";
import CountriesCard from "../../components/CountriesCard";
import GolbalProperties from "../../components/GolbalProperties/golbalProperties";
import PropertieSliderHome from "../../components/propertieSliderHome/propertieSliderHome";
const App: FC = () => {
  return (
    <div className="relative">
      <SEO title="Learning React Helmet" />
      <Header />
      <div className="relative top-[70%] -mt-20">
        <FilterCard />
      </div>
      <Carousel />
      <GolbalProperties />
      <CountriesCard />
      <PropertieSliderHome/>
    </div>
  );
};

export default App;
