import { FC } from "react";
import { SEO } from "../../components/seo/seo";
import { useMediaQuery } from "react-responsive";
import Header from "../../Layout/Header";
import FilterCard from "../../components/card/filterCard";
import Carousel from "../../components/UI/caroules/carousel";
import CountriesCard from "../../components/CountriesCard";
import GolbalProperties from "../../components/GolbalProperties/golbalProperties";
import PropertieSliderHome from "../../components/propertieSliderHome/propertieSliderHome";
import SimilarProperties from "../../components/SimilarProperties/SimilarProperties";
import ListService from "../advertServices/components/listService";
// import ListService from "./components/listService";

const App: FC = () => {
  const sm = useMediaQuery({ minWidth: 640 });
  const lg = useMediaQuery({ minWidth: 1024 });

  return (
    <div className="relative">
      <SEO title="Learning React Helmet" />
      <Header />
      <div className="relative  -mt-20 z-50">
        <FilterCard />
      </div>
      <Carousel />
      <GolbalProperties />
      <CountriesCard />

      {lg ? <> {/* <PropertieSliderHome />{" "} */}</> : null}
      <ListService />
      <SimilarProperties />
      <div className="mb-10 lg:mb-14"></div>
    </div>
  );
};

export default App;
// top-[70%]
