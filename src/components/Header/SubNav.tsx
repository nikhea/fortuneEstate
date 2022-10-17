import { FC } from "react";
import { MdOutlineMail } from "react-icons/md";
import {
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const style = {
  LinkAuth: `uppercase justify-end`,
  emailText: `flex text-center items-center`,
  container: ` flex justify-between w-[95%]  m-auto  text-xs  items-center`,
  social: `flex mx-[40px] `,
  rightSide: `flex`,
  background:` py-[0.1px] h-[4em] flex`
};
const SubNav: FC = () => {
  return (
    <div className={style.background}>
    <div className={`${style.container}`}>
      <div className={style.emailText}>
        <Link to="" className={style.emailText}>
          <MdOutlineMail color="" size={20} style={{ marginRight: "11px" }} />
          enquiry@thehouse48.com
        </Link>
      </div>

      <div className={style.rightSide}>
        <div className={style.social}>
          <AiOutlineInstagram
            color="#fff"
            size={20}
            style={{ marginRight: "11px" }}
          />
          <AiOutlineYoutube
            color="#fff"
            size={20}
            style={{ marginRight: "11px" }}
          />
          <AiOutlineTwitter
            color="#fff"
            size={20}
            style={{ marginRight: "11px" }}
          />
        </div>
        <div className={style.LinkAuth}>
          <Link to="" style={{ marginRight: "11px" }}>
            Sign up
          </Link>
          /<Link to="">register</Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SubNav;
