import { FC } from "react";
import { IoPlayCircleOutline } from "react-icons/io5";
import { GrFacebookOption, GrInstagram, GrTwitter } from "react-icons/gr";
import { FaTiktok } from "react-icons/fa";
const style = {
  bgImage: ` md:mt-[2em] w-full h-[60vh] md:h-[340px]  bg-cover bg-center bg-no-repeat relative bg-fixed object-content z-50 bg-[url('https://www.thehouse48.com/wp-content/uploads/2021/12/chuttersnap-603079-unsplash-e1546425079773.jpg')]`,
  container: `h-full  w-[85%] m-auto flex flex-col md:flex-row  justify-center md:justify-between md:items-center`,
  textContainer: `text-white z-50   md:text-start mt-5`,
  socialIcons: `flex  lg:justify-between bg-red-20 my-10`,
  title: `text-3xl md:text-7xl font-black uppercase tracking-wider`,
  description: ` my-5 text-sm md:text-[0.9rem] tracking-wide pr-20 md:pr-0`,
  play: `md:mr-[60px] `,
  circle: `border border-2 rounded-full py-4 px-4 ml-4`,
  overlay: `h-full w-full top-0 left-0 absolute bg-black opacity-60 bg-fixed -z-50`,
};

const contactBanner: FC = () => {
  return (
    <div className={style.bgImage}>
      <div className={style.container}>
        <div className={style.textContainer}>
          <h1
            className={style.title}
            data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-duration="1500"
          >
            contact us
          </h1>
        </div>

        <div
          className={style.socialIcons}
            data-aos="fade-left"
            data-aos-easing="ease-in-out"
            data-aos-duration="2500"
        >
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
