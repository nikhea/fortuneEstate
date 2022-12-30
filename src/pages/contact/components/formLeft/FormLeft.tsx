import { Link } from "react-router-dom";
import { BiPhoneCall } from "react-icons/bi";
import { BsFillChatDotsFill } from "react-icons/bs";
import { MdVisibility } from "react-icons/md";
const FormLeft = () => {
  const style = {
    container: `my-10`,
    textContainer: `mb-[80px]`,
    title: `text-[2rem] text-[#7f7f7f] font-bold tracking-[1.1px] uppercase`,
    description: `text-[#7f7f7f] font-light tracking-[1.1px] text-justify py-3`,
    link: `text-[#0d304a] flex items-center`,
  };
  //   my-12  font-light tracking-[1.1px] text-justify
  return (
    <div className={style.container}>
      <div className={style.textContainer}>
        <h1 className={style.title}> call us</h1>
        <p className={style.description}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit,
          placeat mollitia. Accusamus voluptatum quasi esse necessitatibus in
          doloremque facere facilis aliquid Lorem ipsum dolor, sit amet
          consectetur adipisicing elit.
        </p>
        <a className={style.link}>
          <BiPhoneCall size={20} style={{ marginRight: "10px" }} /> 833 448 1403
        </a>
      </div>
      <div className={style.textContainer}>
        <h1 className={style.title}> visit us</h1>
        <p className={style.description}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit,
          placeat mollitia. Accusamus voluptatum quasi esse necessitatibus in
          doloremque facere facilis aliquid Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. 
        </p>
        <a className={style.link}>
          <MdVisibility size={20} style={{ marginRight: "10px" }} />{" "}
          <Link to="/">
            visit our website to find more information about us
          </Link>
        </a>
      </div>
      <div className={style.textContainer}>
        <h1 className={style.title}>live chat</h1>
        <p className={style.description}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit,
          placeat mollitia. Accusamus voluptatum quasi esse necessitatibus in
          doloremque facere facilis aliquid Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. 
        </p>
        <a className={style.link}>
          <BsFillChatDotsFill size={20} style={{ marginRight: "10px" }} />
          chat live with us
        </a>
      </div>
    </div>
  );
};

export default FormLeft;
