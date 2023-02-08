import { FC } from "react";

const style = {
  container: `w-[95%] m-auto my-[4em] flex justify-center `,
  logo: `w-[70%] md:max-w-[40%] `,
  img: `w-full`,
  class:
    "font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600",
  logoBig: `text-center font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-cyan-800 to-purple-400 px-[3em] py-0 tracking-widest outline-none min-h-[44px] border-0 `,
};
const HouseBanner: FC = () => {
  return (
    <div className={style.container}>
      <div className={style.logoBig}>Fortune Estate</div>
      {/* <div className={style.logo}>
        Fortune Estate */}
      {/* <img className={style.img} src="https://www.thehouse48.com/wp-content/uploads/2021/11/cropped-H48-1280x400-1.png" /> */}
      {/* </div> */}
    </div>
  );
};

export default HouseBanner;
