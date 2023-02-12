import { FC } from "react";
import Cards from "./components/dashboard/Cards";

const style = {
  container: `w-[90%] m-auto my-[4rem]`,
  h1: `text-[#11142D] font-normal text-[2rem]`,
};
const dashBoard: FC = () => {
  return (
    <div className={style.container}>
      <h1 className={style.h1}>Dashboard</h1>
      <Cards />
    </div>
  );
};

export default dashBoard;
