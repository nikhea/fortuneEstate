import { FC } from "react";

interface MainCard {
  children: React.ReactNode;
  width: number;
}

const MainCard: FC<MainCard> = ({ children, width }) => {
  const style = {
    container: `flex  w-full `,
    cardContainer: `w-[${width}%]  rounded bg-whit shadow-x py-[5e] bg-[F6F6F6]`,
    card: ` w-full `,
    btn: `rounded-full   block uppercase flex bg-gradient-to-r from-cyan-500 to-blue-500 outline-none text-white `,
  };
  return (
    <div className={style.container}>
      <div style={{ width: `${width}vw` }} className={style.cardContainer}>
        <div className={style.card}>{children}</div>
      </div>
    </div>
  );
};

export default MainCard;
