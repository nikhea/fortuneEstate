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
          When you need personalized assistance or have pressing inquiries,
          don't hesitate to give us a call. Our team of dedicated real estate
          experts is ready to guide you through the process, provide valuable
          insights, and ensure you make informed decisions.
        </p>
        <a className={style.link}>
          <BiPhoneCall size={20} style={{ marginRight: "10px" }} /> 833 448 1403
        </a>
      </div>
      <div className={style.textContainer}>
        <h1 className={style.title}> visit us</h1>
        <p className={style.description}>
          Drop by our FortuneEstate office. Our welcoming staff will be
          delighted to meet you in person and discuss your unique preferences.
          Explore our diverse property portfolio and discover the opportunities
          that await you in the world of real estate.
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
          Engage in real-time conversations with our experienced representatives
          through our Live Chat feature. No matter where you are, our Live Chat
          is available during business hours to answer your questions, assist
          with property searches, and address any concerns you may have.
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
