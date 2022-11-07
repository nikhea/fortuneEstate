import { FC } from "react";
import FeaturedListing from "../../components/propertiesList/featuredListing";
import ImageCard from "./components/image";
import TitlePrice from "./components/titlePrice";
import AdditionalDetails from "./components/additionalDetails";
import LocationAddress from "./components/LocationAddress";
import Description from "./components/Description";
import Details from "./components/Details";
import NeighborHood from "./components/neigborhood";
import AboutAuthors from "./components/abountAuthor";

const property: FC = () => {
  const style = {
    bgContainer: `bg-[#F6F6F6] py-[6em]  pl-[2em] overflow-hidden md:grid md:grid-cols-10 grid-row-3`,
    full: ` col-start-1 col-end-11`,
    bgHalf: `col-start-1 col-end-7`,
    bgSmall: `col-start-8 col-end-11`,
  };
  return (
    <div className={style.bgContainer}>
      <div className={style.full}>
        <ImageCard />
      </div>
      <div className={style.full}>
        <TitlePrice />
      </div>
      <div className={style.bgHalf}>
        <AdditionalDetails />
        <LocationAddress />
        <Description />
        <Details />
        <NeighborHood />
        <AboutAuthors />
      </div>
      <div className={style.bgSmall}>
        <FeaturedListing />
      </div>
    </div>
  );
};

export default property;
