import { FC } from "react";

import ScrollToTop from "../../components/ScrollToTop/scrollToTop";

const style = {
  bgContainer: `bg-[#efefef]`,
  container: `w-[95%] m-auto flex justify-center items-center pt-[27px] pb-[48px] `,
  title: `text-[#212121] leading-[1.5] text-center font-extralight text-[15px] h-[0px] w-full `,
};
const footer: FC = () => {
  return (
    <div className={style.bgContainer}>
      <div
        className={style.container}
        // data-aos="fade-in"
        // data-aos-easing="linear"
        // data-aos-duration="1900"
      >
        <h1
        className={style.title}
        >
          © 2021 - TheHouse48 Inc. All Right Reserved
        </h1>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default footer;
