import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { useAuth } from "../../../../../lib/auth";
import { MdCall, MdEmail, MdLocationPin } from "react-icons/md";

const style = {
  iconMain: `flex w-full gap-3 mt-5`,
  icons: `border py-3 px-2 rounded-xl flex  items-center`,
  iconContainer: `flex flex-col gap-3 flex-1`,
};
const ProfileDetails = ({ user }: any) => {
  return (
    <div>
      <header className="flex justify-between items-center">
        <h1>{user?.firstName && `Mr ${user?.firstname} ${user?.lastname}`} </h1>
        <BsThreeDots size={20} color="#808191" />
      </header>
      <div>{user?.role}</div>
      <div className="w-[80%] my-5">
        <div className="flex flex-col gap-3">
          <h1>location</h1>
          <div className={style.icons}>
            <MdLocationPin size={20} style={{ marginRight: "5px" }} />
            {user?.profile.address}{" "}
          </div>
        </div>
        <div className={style.iconMain}>
          <div className={style.iconContainer}>
            <h1>phone</h1>
            <div className={style.icons}>
              <MdCall size={20} style={{ marginRight: "5px" }} />
              {user?.profile.phone}{" "}
            </div>
          </div>
          <div className={style.iconContainer}>
            <h1>email</h1>
            <div className={style.icons}>
              <MdEmail size={20} style={{ marginRight: "5px" }} />
              {user?.email}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
