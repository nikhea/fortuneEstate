import { FC } from "react";

interface MainCard {
  children: React.ReactNode;
  width: number;
}

const MainCard: FC<MainCard> = ({ children, width }) => {
  const style = {
    container: `flex  w-full my-[6em]  ml-[2em]`,
    cardContainer: `w-[${width}%]  rounded bg-white shadow-2xl py-[5em] `,
    card: ` w-full `,
    btn: `rounded-full   block uppercase flex bg-gradient-to-r from-cyan-500 to-blue-500 outline-none text-white `,
  };
  return (
    <div className={style.container}>
      <div className={style.cardContainer}>
        <div className={style.card}>{children}</div>
      </div>
    </div>
  );
};

export default MainCard;
