import { FC } from "react";
import Button from "../../components/UI/FormElement/Button";

const style = {
  container: `text-white  w-[85%] m-auto   flex flex-col lg:flex-row items-center justify-between  pt-[4.5%] pr-[0%] pb-[4%] pl-[0%]`,
  bgContainer: `bg-[#2EA8F2]`,
  textContainer: ``,
  title: `text-3xl leading-[2em] lg:tracking-widest`,
  subText: `text-base lg:tracking-widest`,
  inputContainer: `relative w-[450px] max-w-[96%] mt-[2em]  `,
  emailInput: `w-full outline-none text-black rounded-[30px] py-[15px] px-[32px] bg-[rgba(255,255,255,0.3)] text-[.9375rem] shadow-2xl shadow-[0 3px 35px #00000040]`,
  btn: `z-2 right -top-8 right-0  bottom-0 absolute  h-2 outline-none my-[9px] mx-[5px]   `,
  btns: `my-[4px] mx-[5px] py-[0] px-[25px] h-[44px] text-[1rem]  rounded-full z-2 right-0 absolute outline-none  bg-gradient-to-r from-cyan-500 to-blue-500`,
};
// btn: `my-[4px] mx-[5px] py-[0] px-[25px] h-[44px] text-[1rem]  rounded-full z-2 right-0 absolute outline-none  bg-gradient-to-r from-cyan-500 to-blue-500`,

// 0 3px 35px #00000040
const newsletter: FC = () => {
  return (
    <div className={style.bgContainer}>
      <div className={style.container}>
        <div className={style.textContainer}>
          <h2 className={style.title}>Sign Up For Our Daily Newsletter</h2>
          <p className={style.subText}>
            Sign up for our emails and be the first to know about special
            offers.
          </p>
        </div>
        <form className={style.inputContainer}>
          <input
            className={style.emailInput}
            type="email"
            placeholder="Enter Your Email"
          />
          {/* <input className={style.btns} type="submit" value="SUBMIT" /> */}
          <div className={style.btn}>
            <Button primary rounded linearGradient uppercase>
              submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default newsletter;
