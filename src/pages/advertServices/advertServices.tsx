import React from "react";
import AdvertBanner from "../../components/AdvertBanner";
import ListService from "./components/listService";

const advertServices = () => {
  const style = {
    container: `w-[90%] m-auto  overflow-hidden `,
  };
  return (
    <div>
      <AdvertBanner />
      <div className={style.container}>
        <ListService />
      </div>
    </div>
  );
};

export default advertServices;
