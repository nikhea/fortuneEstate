import { FC } from "react";

const style ={
    container: `w-[95%] m-auto flex justify-center `,
    logo:`w-[70%] md:max-w-[40%] `,
    img:`w-full`
}
const HouseBanner: FC = () => {
  return (
    <div className={style.container}>
      <div className={style.logo}>
        <img className={style.img} src="https://www.thehouse48.com/wp-content/uploads/2021/11/cropped-H48-1280x400-1.png" />
      </div>
    </div>
  );
};

export default HouseBanner;
