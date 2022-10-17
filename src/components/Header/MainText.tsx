import { FC } from "react";

const style = {
  container: `flex  w-[95%] mt-5 m-auto flex-col items-center`,
  title: `text-[5.5rem] font-light`,
  subTitle: `text-8xl font-light font-bold`,
  text: `text-lg font-light my-6 tracking-widest`,
  btn:`uppercase bg-blue-400 rounded-full px-9 py-2 tracking-widest`
};
const MainText: FC = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>
        The Largest Real Estate <br />
        <span className={style.subTitle}>Online Marketplace</span>
      </h1>
      <span className={style.text}>
        Find the best property that suits your desires using advanced search
        widget
      </span>
      <button className={style.btn}>explore countries</button>
    </div>
  );
};

export default MainText;
