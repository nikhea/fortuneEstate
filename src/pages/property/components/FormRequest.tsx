import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { formRequestchema } from "./formRequestSchema";
import Button from "../../../components/UI/FormElement/Button";
import Input from "../../../components/UI/FormElement/input/input";
import { IoMdMailOpen } from "react-icons/io";
import { FaPhone, FaUser } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";

interface FormData {
  email: string;
  fullName: string;
  phoneNumber: number;
  Date: Date;
  message: string;
}
const style = {
  header: ` flex items-center  w-full mb-5`,
  title: `ml-5 capitalize font-[600] text-[1.75rem]`,
  errors: `block text-red-500`,
  form: ` h-full flex flex-col  `,
  inputHalf: `flex justify-between items-center relative flex-col`,
};
const FormRequest = () => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(formRequestchema),
  });

  const submitForm = async (data: any) => {
    console.log(data);
    reset();
  };
  return (
    <div>
      <header className={style.header}>
        {/* <div className="hr "></div> */}
        <h1 className={style.title}>form request</h1>
      </header>
      <form
        // autoComplete="off"
        className={style.form}
        onSubmit={handleSubmit(submitForm)}
      >
        <div>
          <span className={style.inputHalf}>
            <FaUser
              size={20}
              color="#0D304A"
              className=" absolute top-[28px] left-3 bottom-0 right-0"
            />

            <Input
              type="text"
              name="fullName"
              placeholder="Full Name*"
              inputFull
              required
              //   rounded
              isCurve
              errors={errors}
              isWhiteBg
              ml
              inputRef={register("fullName", { required: true })}
            />
            <p className={style.errors}>
              {errors.fullName?.message && <p>{errors.fullName?.message}</p>}
            </p>
          </span>
          <span className={style.inputHalf}>
            <IoMdMailOpen
              size={20}
              color="#0D304A"
              className=" absolute top-[28px] left-3 bottom-0 right-0"
            />

            <Input
              type="email"
              name="email"
              placeholder="Email Address*"
              inputFull
              required
              //   rounded
              isCurve
              errors={errors}
              isWhiteBg
              ml
              inputRef={register("email", { required: true })}
            />
            <p className={style.errors}>
              {errors.email?.message && <p>{errors.email?.message}</p>}
            </p>
          </span>
          <span className={style.inputHalf}>
            <FaPhone
              size={20}
              color="#0D304A"
              className=" absolute top-[28px] left-3 bottom-0 right-0"
            />

            <Input
              type="number"
              name="phoneNumber"
              placeholder="Phone Number*"
              inputFull
              required
              //   rounded
              isCurve
              errors={errors}
              isWhiteBg
              ml
              inputRef={register("phoneNumber", { required: true })}
            />
            <p className={style.errors}>
              {errors.phoneNumber?.message && (
                <p>{errors.phoneNumber?.message}</p>
              )}
            </p>
          </span>
          <span className={style.inputHalf}>
            <MdDateRange
              size={20}
              color="#0D304A"
              className=" absolute top-[28px] left-3 bottom-0 right-0"
            />

            <Input
              type="date"
              name="Date"
              placeholder="Date*"
              inputFull
              required
              //   rounded
              isCurve
              errors={errors}
              isWhiteBg
              ml
              inputRef={register("Date", { required: true })}
            />
            <p className={style.errors}>
              {errors.Date?.message && <p>{errors.Date?.message}</p>}
            </p>
          </span>
          <span className={style.inputHalf}>
            <textarea
              placeholder="type your message*"
              // name="message"
              className="p-5 rounded-[10px] my-3 w-full h-full min-h-[150px] outline-none border border-[#C4C4C4] border-solid bg-white text-black  focus:outline-none focus:border-[#0D304A]"
              {...register("message", { required: true, maxLength: 1000 })}
            />
            <p className={style.errors}>
              {errors.message?.message && <p>{errors.message?.message}</p>}
            </p>
          </span>
          <div className="mt-5">
            <Button
              padding
              marginTop
              primary
              full
              // rounded
              isCurve
              linearGradient
              uppercase
              types="submit"
            >
              send request
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormRequest;
{
  /* <textarea
className="border border-gray-300 p-2 mt-3 w-full h-36 rounded-[10px]  pl-4"
name="message"
placeholder="Message*"
required
/> */
}
