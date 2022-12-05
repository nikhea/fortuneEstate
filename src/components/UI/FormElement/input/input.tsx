import { FC } from "react";
import classnames from "classnames";
import { useForm } from "react-hook-form";
interface inputProps {
  type: any;
  name: string;
  placeholder: string;
  required?: boolean;
  inputFull?: boolean;
  inputHalf?: boolean;
  isCurve?: boolean;
  bold?: boolean;
  rounded?: boolean;
  registers?: any;
  errors?: any;
  inputRef?: any;
  value?: string;
  onChange?: any;
  multipleFile?: any;
}
const style = {
  input: `my-[10px]  bg-[#f1f1f1]  py-[15px] px-[23px] text-[#9a9a9a] text-[.9375rem]  outline-none pr-[23px]`,
  inputHalf: `w-[47%]`,
  inputFull: ` w-full`,
  curve: `rounded-[10px]`,
  rounded: `rounded-[25px]`,
  bold: `font-bold`,
  errors: ``,
};

const input: FC<inputProps> = (props) => {
  const { register } = useForm();
  const {
    type,
    placeholder,
    required,
    inputHalf,
    inputFull,
    isCurve,
    rounded,
    inputRef,
    registers,
    name,
    bold,
    errors,
    value,
    onChange,
    multipleFile,
    ...rest
  } = props;
  let Input = {
    [`${style.input}`]: true,
    [`${style.inputFull}`]: inputFull,
    [`${style.inputHalf}`]: inputHalf,
    [`${style.curve}`]: isCurve,
    [`${style.rounded}`]: rounded,
    [`${style.bold}`]: bold,
  };
  return (
    <>
      {multipleFile}
      <input
        className={classnames(Input)}
        type={type}
        placeholder={placeholder}
        required={required}
        {...inputRef}
        value={value}
        onChange={onChange}
        // multiple
        // multiple="multiple"
        multiple = "multiple"
      />
      {/* <p className={style.errors}>
        {errors.name?.message && <p>{errors.name?.message}</p>}
      </p> */}
    </>
  );
};

export default input;

// "react-hook-form": "^7.39.4",
