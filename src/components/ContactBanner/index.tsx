import { FC } from "react";
// import { IoPlayCircleOutline } from "react-icons/io5";
import { GrFacebookOption, GrInstagram, GrTwitter } from "react-icons/gr";
import { FaTiktok } from "react-icons/fa";
const style = {
  bgImage: ` md:mt-[2em] w-full h-[40vh] md:h-[440px]  bg-cover bg-center bg-no-repeat relative bg-fixed object-content z-50 bg-[url('https://res.cloudinary.com/djkqaqoj3/image/upload/v1693397026/photo-1683721003111-070bcc053d8b_aro2zx.jpg')]`,
  container: `h-full  w-[85%] m-auto flex flex-col md:flex-row  justify-center md:justify-between md:items-center`,
  textContainer: `text-white z-50   md:text-start mt-5`,
  socialIcons: `flex  lg:justify-between bg-red-20 my-10`,
  title: `text-3xl md:text-7xl font-black uppercase tracking-wider`,
  description: ` my-5 text-sm md:text-[0.9rem] tracking-wide pr-20 md:pr-0`,
  play: `md:mr-[60px] `,
  circle: `border border-2 rounded-full py-2 px-2  ml-4`,
  overlay: `h-full w-full top-0 left-0 absolute bg-black opacity-60 bg-fixed -z-50`,
};

const contactBanner: FC = () => {
  return (
    <div className={style.bgImage}>
      <div className={style.container}>
        <div className={style.textContainer}>
          <h1 className={style.title}>contact us</h1>
        </div>
        <div className={style.socialIcons}>
          <div className={style.circle}>
            <GrFacebookOption color="#fff" size={20} />
          </div>
          <div className={style.circle}>
            <GrInstagram color="#fff" size={20} />
          </div>
          <div className={style.circle}>
            <GrTwitter color="#fff" size={20} />
          </div>
          <div className={style.circle}>
            <FaTiktok color="#fff" size={20} />
          </div>
        </div>
      </div>
      <div className={style.overlay}></div>
    </div>
  );
};

export default contactBanner;
