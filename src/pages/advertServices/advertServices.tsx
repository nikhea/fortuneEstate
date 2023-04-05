import React from "react";
import AdvertBanner from "../../components/AdvertBanner";
import ListService from "./components/listService";
import { SEO } from "../../components/seo/seo";

const advertServices = () => {
  const style = {
    container: `w-[90%] m-auto  overflow-hidden `,
  };
  return (
    <div>
      <SEO title=" advert Services" />

      <AdvertBanner />
      <div className={style.container}>
        <ListService />
      </div>
    </div>
  );
};

export default advertServices;
