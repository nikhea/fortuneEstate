import { FC, useState } from "react";
import Input from "../../components/UI/FormElement/input/input";
import AuthBG from "../../images/authBG.png";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import NiceModal from "@ebay/nice-modal-react";
import { useForm, useController } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { SignInSchema } from "./SCHEMA";
import { useAuth } from "../../lib/auth";
import { toast } from "react-toastify";
interface FormData {
  email: string;
  password: string;
}
const style = {
  container: `flex  `,
  img: `hidden md:flex h-full`,
  content: `w-full mx-[5%]`,
  text: `text-[#0A2952] text-[2.125rem] uppercase font-bold `,
  header: `flex items-center justify-between w-full mt-[20px] mb-[10px]`,
  formSignIn: ` h-full md:h-[65%]  flex flex-col items-center justify-center`,
  checkbox: `flex items-center [&>*]:mr-[15px] font-light my-[20px]`,
  inputHalf: `flex justify-between [&>*]:w-[47%]`,
  input: `my-[12px] bg-[#f1f1f1] rounded-[25px] py-[15px] px-[23px] text-[#9a9a9a] text-[.9375rem] font-bol w-full outline-none pr-[23px]`,
  btn: `w-[100%] text-white  my-[4px] mx-[5px] py-[0] px-[25px] h-[44px] text-[1rem]  rounded-full  outline-none  bg-gradient-to-r from-cyan-500 to-blue-500 uppercase`,
  forgot: `flex justify-between items-center`,
  forgotpassword: `text-blue-600`,
  errors: ``,
};
const auth: FC = () => {
  const { login, user, isLoggingIn } = useAuth();

  // if (isLoggingIn) {
  //   toast.warn("Logging");
  // }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(SignInSchema),
  });
  const closeSignInModal = () => {
    NiceModal.remove("signUpModal");
  };
  const submitForm = async (data: any) => {
    try {
      await login(data);
    } catch (err) {
      //@ts-ignore
      toast.error(err?.response?.data.message);
    }
  };
  if (user !== null) {
    reset();
    closeSignInModal();
  }
  return (
    <div className={style.container}>
      <img src={AuthBG} alt={AuthBG} className={style.img} />

      {/* SIGN UP */}
      <div className={style.content}>
        <div className={style.header}>
          <h2 className={style.text}>sign in</h2>
          <AiOutlineClose
            size={20}
            onClick={closeSignInModal}
            style={{ cursor: "pointer" }}
          />
        </div>
        <form
          // autoComplete="off"
          autoComplete="nope"
          className={style.formSignIn}
          onSubmit={handleSubmit(submitForm)}
        >
          <div>
            <Input
              type="email"
              name="email"
              placeholder="your email*"
              inputFull
              required
              rounded
              isWhiteBg
              inputRef={register("email", { required: true })}
            />
            {/* <p className={style.errors}>
              {errors.email?.message && <p>{errors.email?.message}</p>}
            </p> */}
            <Input
              name="password"
              type="password"
              placeholder="your password*"
              inputFull
              rounded
              required
              isWhiteBg
              inputRef={register("password", { required: true })}
            />
            {/* <p className={style.errors}>
              {errors.password?.message && <p>{errors?.password?.message}</p>}
            </p> */}
            <div className={style.forgot}>
              <div className={style.checkbox}>
                <input type="checkbox" />
                <span>Remeber Me</span>
              </div>
              {/* <p className={style.forgotpassword}>
                <Link to="#">Forgot your password?</Link>
              </p> */}
            </div>
          </div>
          <button className={style.btn} type="submit">
            login
          </button>
        </form>
      </div>
    </div>
  );
};

export default auth;

{
  /* REGISTER */
}
{
  /* <div className={style.content}>
        <div className={style.header}>
          <h2 className={style.text}>register</h2>
          <AiOutlineClose
            size={20}
            //   style={{ marginRight: "11px" }}
          />
        </div>
        <form className={style.form}>
          <div>
            <input
              className={style.input}
              type="email"
              placeholder="your email*"
              required
            />
            <input
              className={style.input}
              type="text"
              placeholder="your username*"
              required
            />
            <span className={style.inputHalf}>
              <input
                className={style.input}
                type="text"
                placeholder="first name*"
                required
              />
              <input
                className={style.input}
                type="text"
                placeholder="last name*"
                required
              />
            </span>
            <span className={style.inputHalf}>
              <input
                className={style.input}
                type="password"
                placeholder="your password*"
                required
              />
              <input
                className={style.input}
                type="text"
                placeholder="retype password*"
                required
              />
            </span>
            <select className={style.input}>
              <option value="" selected disabled >user type</option>
              <option value="subscriber">subscriber</option>
              <option value="agent">agent</option>
              <option value="agency">agency</option>
            </select>
            <div className={style.checkbox}>
            <input type="checkbox" />
            <span >I Agree To The Terms Of Service</span>
            </div>
          </div>
          <button className={style.btn} type="submit">
            register
          </button>
        </form> */
}
