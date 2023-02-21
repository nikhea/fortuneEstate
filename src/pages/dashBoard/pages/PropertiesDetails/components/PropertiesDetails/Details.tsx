import { FC } from "react";
import parse from "html-react-parser";
const style = {
  header: ` flex items-center  w-full mb-5`,
  title: `ml-5 capitalize font-[600] text-[1.75rem]`,
  details: ` grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full place-items-center text-[#2B2B2B] capitalize`,
  description: `w-full font-[400]  text-lg lg:text-base flex items-center text-[#2B2B2B]`,
};

interface IDetail {
  description: string;
}
const Details: FC<IDetail> = ({ description }) => {
  console.log(description);

  return (
    <div>
      <header className={style.header}>
        <div className="hr"></div>
        <h1 className={style.title}>description</h1>
      </header>
      <p className={style.description}>{parse(description)}</p>
    </div>
  );
};

export default Details;
