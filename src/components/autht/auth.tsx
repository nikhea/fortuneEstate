import { FC } from "react";
import AuthBG from "../../images/authBG.png";
import { AiOutlineClose } from "react-icons/ai";

const style = {
  container: `flex gap-[5%]`,
  img: `hidden md:flex h-full`,
  content: ``,
};
const auth: FC = () => {
  return (
    <div className={style.container}>
      <img src={AuthBG} alt={AuthBG} className={style.img} />
      <div className={style.content}></div>
    </div>
  );
};

export default auth;
