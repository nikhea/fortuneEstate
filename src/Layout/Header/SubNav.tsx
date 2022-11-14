import { FC } from "react";
import { MdOutlineMail } from "react-icons/md";
import {
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import SignupModal from "../../components/UI/modal/signUpModal";
import RegisterModal from "../../components/UI/modal/registerModal";
import NiceModal from "@ebay/nice-modal-react";

NiceModal.register("signUpModal", SignupModal);
NiceModal.register("registerModal", RegisterModal);
const style = {
  LinkAuth: `uppercase justify-end flex`,
  Link: `block cursor-pointer`,
  emailText: `flex text-center items-center`,
  container: ` flex justify-between w-[95%]  m-auto  text-xs  items-center`,
  social: `flex mx-[40px] `,
  rightSide: `flex`,
  background: ` py-[0.1px] h-[3em] flex bg-[#0D304A] `,
  fixed: `  fixed right-0 left-0 top-0 text-white z-[999] bg-[#0D304A] py-[0.1px] h-[3em] flex`,
};

// linear-gradient(271deg, #0D304A, #0D304A);
const SubNav: FC = () => {
  const showSignUpModal = () => {
    NiceModal.show("signUpModal");
  };
  const showregisterModal = () => {
    NiceModal.show("registerModal");
  };
  return (
    <div className={style.background}>
      <div className={style.fixed}>
        <div className={`${style.container}`}>
          <div className={style.emailText}>
            <Link to="" className={style.emailText}>
              <MdOutlineMail
                color=""
                size={20}
                style={{ marginRight: "11px" }}
              />
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
              {/* <Modal /> */}
              <p
                onClick={showSignUpModal}
                className={style.Link}
                style={{ marginRight: "11px" }}
              >
                Sign up
              </p>
              /
              <p onClick={showregisterModal} className={style.Link}>
                register
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubNav;
