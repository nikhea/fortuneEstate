import { FC, useState } from "react";
import AuthBG from "../../images/authBG.png";
import Input from "../../components/UI/FormElement/input/input";
import Select from "../../components/UI/FormElement/select/select";
import Button from "../../components/UI/FormElement/Button";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import StickyBox from "react-sticky-box";
import NiceModal from "@ebay/nice-modal-react";
import { useForm, useController } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
import { registerSchema } from "./SCHEMA";
import { useAuth } from "../../lib/auth";

const style = {
  container: `grid lg:grid-cols-2 gap-0 h-full`,
  ImgContainer: ` bg-green-200 hidden lg:flex h-full w-full`,
  img: `hidden lg:flex h-full w-full`,
  content: `  w-[90%] m-auto h-full   flex flex-col items-center justify-center`,
  text: `text-[#0A2952] text-[2.125rem] uppercase font-bold `,
  header: `flex items-center justify-between w-full mt-[20px] mb-[10px]`,
  form: ` h-full flex flex-col items-center mt-20 `,
  checkbox: `flex items-center [&>*]:mr-[15px] font-light my-[20px]`,
  inputHalf: `flex justify-between gap-1 my-5`,
  forgot: `flex justify-between items-center`,
  forgotpassword: `text-blue-600`,
  errors: `block `,
};
interface FormData {
  email: string;
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  confirmpassword: string;
  role: string;
}

const auth: FC = () => {
  const { register: userRegistration, user, isRegistering } = useAuth();
  if (isRegistering === true) {
    console.log("registing...");
  }

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(registerSchema),
  });
  const { field } = useController({ name: "role", control });
  const closeRegisterModal = () => {
    NiceModal.remove("registerModal");
  };
  const options = [
    // { value: "user agent", label: "user agent" },
    { value: "SUBSCRIBER", label: "subscriber" },
    { value: "AGENT", label: "agent" },
    // { value: "AGENCY", label: "agency" },
  ];
  // console.log(watch());
  const submitForm = async (data: any) => {
    try {
      await userRegistration(data);
    } catch (err) {
      console.log(err, "err");
    }
  };
  if (user !== null) {
    reset();
    closeRegisterModal();
  }
  const handleSelectChange = (option: any) => {
    field.onChange(option.value);

    return field.onChange(option.value);
  };
  return (
    <div className={style.container}>
      <div className={style.ImgContainer}>
        <img src={AuthBG} alt={AuthBG} className={style.img} />
      </div>
      <div className={style.content}>
        <div className={style.header}>
          <h2 className={style.text}>register</h2>
          <AiOutlineClose
            size={30}
            onClick={closeRegisterModal}
            style={{ cursor: "pointer" }}
          />
        </div>
        <form
          autoComplete="off"
          className={style.form}
          onSubmit={handleSubmit(submitForm)}
        >
          <div>
            <span className={style.inputHalf}>
              <Input
                type="email"
                name="email"
                placeholder="your email*"
                inputFull
                required
                rounded
                errors={errors}
                isWhiteBg
                inputRef={register("email", { required: true })}
              />
              <p className={style.errors}>
                {errors.email?.message && <p>{errors.email?.message}</p>}
              </p>
            </span>
            <span className={style.inputHalf}>
              <Input
                type="text"
                name="username"
                placeholder="your username*"
                inputFull
                required
                rounded
                isWhiteBg
                inputRef={register("username", { required: true })}
              />
              <p className={style.errors}>
                {errors.username?.message && <p>{errors.username?.message}</p>}
              </p>
            </span>
            <span className={style.inputHalf}>
              <Input
                type="text"
                name="firstname"
                placeholder="first name*"
                inputHalf
                required
                rounded
                isWhiteBg
                inputRef={register("firstname", { required: true })}
              />
              <p className={style.errors}>{errors?.firstname?.message}</p>

              <Input
                type="text"
                name="lastname"
                placeholder="last name*"
                inputHalf
                required
                rounded
                isWhiteBg
                inputRef={register("lastname", { required: true })}
              />
              <p className={style.errors}>{errors?.lastname?.message}</p>
            </span>
            <span className={style.inputHalf}>
              <Input
                type="password"
                name="password"
                placeholder="your password*"
                inputHalf
                required
                rounded
                isWhiteBg
                inputRef={register("password", { required: true })}
              />
              <p className={style.errors}>{errors?.password?.message}</p>
              <Input
                type="password"
                name="confirmpassword"
                placeholder="retype password*"
                inputHalf
                required
                rounded
                isWhiteBg
                inputRef={register("confirmpassword", { required: true })}
              />
              <p className={style.errors}>
                {errors.confirmpassword?.message && <p>Passwords must match</p>}
              </p>
            </span>
            <span>
              <Select
                inputFull
                placeholder="user type"
                options={options}
                field={options.find(({ value }) => value === field.value)}
                handleSelectChange={handleSelectChange}
              />
              <p className={style.errors}>{errors.role?.message}</p>
            </span>
            <div className={style.checkbox}>
              <input type="checkbox" />
              <span>I Agree To The Terms Of Service</span>
            </div>
          </div>
          <Button
            padding
            marginTop
            primary
            full
            rounded
            linearGradient
            uppercase
            types="submit"
          >
            register
          </Button>
        </form>
      </div>
    </div>
  );
};

export default auth;
// const style = {
//   container: `grid grid-cols-2 h-full `,
//   ImgContainer: ` w-[100%] `,
//   img: `hidden md:flex h-full `,
//   content: `w-full mx-[-10%]`,
//   text: `text-[#0A2952] text-[2.125rem] uppercase font-bold `,
//   header: `flex items-center justify-between w-full mt-[20px] mb-[10px]`,
//   form: ` h-full flex flex-col items-center justify-center bg-red-200`,
//   checkbox: `flex items-center [&>*]:mr-[15px] font-light my-[20px]`,
//   inputHalf: `flex justify-between gap-1`,
//   forgot: `flex justify-between items-center`,
//   forgotpassword: `text-blue-600`,
//   errors: `block `,
// };
