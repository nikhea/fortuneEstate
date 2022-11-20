import { FC, useState } from "react";
import AuthBG from "../../images/authBG.png";
import Input from "../../components/UI/FormElement/input/input";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import StickyBox from "react-sticky-box";
import NiceModal from "@ebay/nice-modal-react";

const style = {
  container: `flex  `,
  ImgContainer: ` w-[100%] `,
  img: `hidden md:flex h-full `,
  content: `w-full mx-[5%]`,
  text: `text-[#0A2952] text-[2.125rem] uppercase font-bold `,
  header: `flex items-center justify-between w-full mt-[20px] mb-[10px]`,
  form: ` h-[] flex flex-col items-center justify-center`,
  checkbox: `flex items-center [&>*]:mr-[15px] font-light my-[20px]`,
  inputHalf: `flex justify-between `,
  input: `my-[10px] bg-[#f1f1f1] rounded-[25px] py-[15px] px-[23px] text-[#9a9a9a] text-[.9375rem] font-bol w-full outline-none pr-[23px]`,
  btn: `w-[100%] text-white  my-[4px] mx-[5px] py-[0] px-[25px] h-[44px] text-[1rem]  rounded-full  outline-none  bg-gradient-to-r from-cyan-500 to-blue-500 uppercase`,
  forgot: `flex justify-between items-center`,
  forgotpassword: `text-blue-600`,
};
const auth: FC = () => {
  const closeRegisterModal = () => {
    NiceModal.remove("registerModal");
  };
  return (
    <div className={style.container}>
      {/* <StickyBox offsetTop={20} offsetBottom={20}> */}
      <img src={AuthBG} alt={AuthBG} className={style.img} />
      {/* </StickyBox> */}
      {/* REGISTER */}
      <div className={style.content}>
        <div className={style.header}>
          <h2 className={style.text}>register</h2>
          <AiOutlineClose
            size={20}
            onClick={closeRegisterModal}
            style={{ cursor: "pointer" }}
            //   style={{ marginRight: "11px" }}
          />
        </div>
        <form className={style.form}>
          <div>
            <Input
              type="email"
              placeholder="your email*"
              inputFull
              required
              rounded
            />
            <Input
              type="text"
              placeholder="your username*"
              inputFull
              required
              rounded
            />
            <span className={style.inputHalf}>
              <Input
                type="text"
                placeholder="first name*"
                inputHalf
                required
                rounded
              />
              <Input
                type="text"
                placeholder="last name*"
                inputHalf
                required
                rounded
              />
            </span>
            <span className={style.inputHalf}>
              <Input
                type="password"
                placeholder="your password*"
                inputHalf
                required
                rounded
              />
              <Input
                type="password"
                placeholder="retype password*"
                inputHalf
                required
                rounded
              />
            </span>
            <select className={style.input}>
              <option value="" selected disabled>
                user type
              </option>
              <option value="subscriber">subscriber</option>
              <option value="agent">agent</option>
              <option value="agency">agency</option>
            </select>
            <div className={style.checkbox}>
              <input type="checkbox" />
              <span>I Agree To The Terms Of Service</span>
            </div>
          </div>
          <button className={style.btn} type="submit">
            register
          </button>
        </form>
      </div>
    </div>
  );
};

export default auth;
