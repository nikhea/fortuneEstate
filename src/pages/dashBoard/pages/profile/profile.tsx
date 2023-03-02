import React from "react";
import { useAuth } from "../../../../lib/auth";
// import "../Style/"
import "../Style/dashboardProfile.css";
import BannerImage from "./components/BannerImage";
import ProfileDetails from "./components/ProfileDetails";

// const TableLsiting =lazy(() => import("../components/Table/table"));

const style = {
  container: `w-[95%] m-auto`,
  profileInfo: `bg-white shadow-lg  rounded-md h-[900px] lg:h-[400px] p-4 my-10`,
  dividerOneColumn: `grid gap-4 grid-cols-1 `,
  dividerTwoColumn: `grid gap-4 grid-cols-12  h-full mb-5`,
  dividerThreeColumn: `grid gap-4 grid-cols-1 lg:grid-cols-3 `,
};

const profile = () => {
  const { user } = useAuth();
  return (
    <div className={style.container}>
      <div className={style.profileInfo}>
        <div className={style.dividerTwoColumn}>
          <span className=" col-span-full lg:col-start-1 lg:col-end-5 h-full bg-red-200 rounded-tl-xl rounded-bl-xl mb-40 lg:mb-0">
            <BannerImage user={user} />
          </span>
          <span className=" col-span-full lg:col-start-5 lg:col-end-13 ml-10 my-10">
            <ProfileDetails user={user} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default profile;
