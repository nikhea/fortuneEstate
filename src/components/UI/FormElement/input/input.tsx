import { FC } from "react";
import classnames from "classnames";

interface inputProps {
  type: any;
  placeholder: string;
  required?: boolean;
  inputFull?: boolean;
  inputHalf?: boolean;
  isCurve?: boolean;
  bold?: boolean;
  rounded?: boolean;
}
const style = {
  input: `my-[10px]  bg-[#f1f1f1]  py-[15px] px-[23px] text-[#9a9a9a] text-[.9375rem]  outline-none pr-[23px]`,
  inputHalf: `w-[47%]`,
  inputFull: ` w-full`,
  curve: `rounded-[10px]`,
  rounded: `rounded-[25px]`,
  bold: `font-bold`,
};

const input: FC<inputProps> = ({
  type,
  placeholder,
  required,
  inputHalf,
  inputFull,
  isCurve,
  rounded,
  bold,
}) => {
  let Input = {
    [`${style.input}`]: true,
    [`${style.inputFull}`]: inputFull,
    [`${style.inputHalf}`]: inputHalf,
    [`${style.curve}`]: isCurve,
    [`${style.rounded}`]: rounded,
    [`${style.bold}`]: bold,
  };
  return (
    <input
      className={classnames(Input)}
      type={type}
      placeholder={placeholder}
      required={required}
    />
  );
};

export default input;
