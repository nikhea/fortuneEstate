import { FC } from "react";

import ScrollToTop from "../../components/ScrollToTop/scrollToTop";


const style = {
  bgContainer: `bg-[#efefef] `,
  container: `w-[95%] m-auto flex justify-center pt-[27px] pb-[48px]`,
  title:`text-[#212121] leading-[1.5] font-extralight text-[15px]`
};
const footer: FC = () => {
  return (
    <div className={style.bgContainer}>
      <div className={style.container}>
        <h1 className={style.title}>© 2021 - TheHouse48 Inc. All Right Reserved</h1>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default footer;
