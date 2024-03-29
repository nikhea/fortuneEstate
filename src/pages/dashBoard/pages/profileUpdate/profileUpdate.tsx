import React from "react";
import { useAuth } from "../../../../lib/auth";
import BannerImage from "./components/BannerImage";
import UpdateForm from "./components/Form/UpdateForm";
import HeaderNavigation from "./components/HeaderNavigation";

const style = {
  container: `w-[90%] m-auto my-[2rem] overflow-hidden text-[#11142D]`,
  profileInfo: `bg-white shadow-m  rounded-md  my-10`,
  ImgContainer: `rounded-md h-[400px] lg:h-[500px]  mb-20`,
  padding: `p`,
  header: `flex justify-between items-center`,
  h1: ` font-[500] text-[2rem] capitalize`,
  subContainer: ``,
};
const profileUpdate = () => {
  const { user } = useAuth();

  return (
    <div className={style.container}>
      <HeaderNavigation />
      <div className={style.profileInfo}>
        <div className={style.ImgContainer}>
          <BannerImage user={user} />
        </div>

        <div className={style.padding}>
          <h1 className="uppercase mb-5 text-2xl">my details</h1>
          <UpdateForm user={user} />
        </div>
      </div>
    </div>
  );
};

export default profileUpdate;
