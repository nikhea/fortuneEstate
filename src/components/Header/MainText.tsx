import { FC } from "react";

const style = {
  container: `flex  w-[95%]  m-auto flex-col items-center justify-center h-[29em] text-center `,
  title: `text-[3rem] md:text-[5.5rem] font-light`,
  subTitle: `text-5xl md:text-8xl font-light font-bold`,
  text: `text-lg font-light my-2 tracking-widest`,
  btn:`uppercase bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full px-9 py-2 tracking-widest mt-5 `
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
