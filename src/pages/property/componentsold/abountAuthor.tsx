import { FC } from "react";
import "./hr.css";
import PropertiesCard from "../../../components/card/PropertyCard";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { IoMdMailOpen } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import RatingStar from "../components/RatingStar/RatingStar";

interface IUser {
  firstname: string;
  lastname: string;
  email: string;
  profile: {
    phone: string;
    profileImage: {
      secure_url: string;
    };
  };
}
const AboutAuthor = ({ user }: any) => {
  const style = {
    header: ` flex items-center  w-full mb-5`,
    title: `ml-5 capitalize font-[600] text-[1.75rem]`,
    details: ` items-center  justify-betwee  flex flex-wrap `,
    image: `rounded-xl w-full`,
    imgContainer: `h-full w-[15%] rounded-xl`,
  };
  return (
    <span>
      {/* <PropertiesCard width={100} height={100}> */}
      <div>
        <header className={style.header}>
          <div className="hr "></div>
          <h1 className={style.title}>Agent information</h1>
        </header>
        <div className="flex gap-5 items-center">
          <div className={style.imgContainer}>
            <LazyLoadImage
              alt={`${user.firstname} ${user.lastname}`}
              src={user.profile?.profileImage?.secure_url}
              className={style.image}
            />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className=" capitalize text-xl font-semibold">
              {user.firstname} {user.lastname}
            </h1>
            <div className="flex gap-2 items-center">
              <RatingStar value={4} size={20} edit={false} />
              <p>4 review</p>
            </div>
            <p className=" text-gray-600 flex items-center gap-2">
              <IoMdMailOpen size={20} />
              {user.email}{" "}
            </p>
            <p className=" text-gray-600 flex items-center gap-2">
              <FaPhone />
              {user.profile?.phone}
            </p>
          </div>
        </div>
      </div>
      {/* </PropertiesCard> */}
    </span>
  );
};

export default AboutAuthor;
const url = `https://res.cloudinary.com/dwtx0sgd6/image/upload/v1677642789/user/profile/imonikhea%20ugbodaga-1677642609137/xavtxl3iebuvgjueo3ks.jpg`;
