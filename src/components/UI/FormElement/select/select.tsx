import { FC, useState } from "react";
import "./select.css";
import Select from "react-select";
import classnames from "classnames";
import { Controller, useForm } from "react-hook-form";
export interface optionsProps {
  value: string;
  label: string;
}
interface inputProps {
  // type: any;
  name?: string;
  register?: any;
  placeholder: string;
  required?: boolean;
  inputFull?: boolean;
  inputHalf?: boolean;
  isCurve?: boolean;
  bold?: boolean;
  rounded?: boolean;
  options: optionsProps[];
  field: any;
  handleSelectChange: any;
}

// const options = [
//   { value: "chocolate", label: "Chocolate" },
//   { value: "strawberry", label: "Strawberry" },
//   { value: "vanilla", label: "Vanilla" },
// ];
const style = {
  input: `my-[10px]  bg-[#f1f1f1]  py-[15px] px-[23px] text-[#9a9a9a] text-[.9375rem]  outline-none pr-[23px]`,
  inputHalf: `w-[47%]`,
  inputFull: ` w-full`,
  curve: `rounded-[10px]`,
  rounded: `rounded-[25px]`,
  bold: `font-bold`,
};
const InputSelect: FC<inputProps> = ({
  inputFull,
  inputHalf,
  isCurve,
  rounded,
  bold,
  name,
  register,
  required,
  placeholder,
  options,
  handleSelectChange,
  field,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  let inputSelectContainer = {
    // [`${style.input}`]: true,
    [`${style.inputFull}`]: inputFull,
    [`${style.inputHalf}`]: inputHalf,
    // [`${style.curve}`]: isCurve,
    // [`${style.rounded}`]: rounded,
    // [`${style.bold}`]: bold,
  };
  const customStyles = {
    option: (provided: any, state: { isSelected: any }) => ({
      ...provided,
      // color: state.isSelected ? "yellow" : "black",
      // backgroundColor: state.isSelected ? "green" : "white",
    }),
    control: (provided: any) => ({
      ...provided,
      marginTop: "5%",
    }),
  };
  return (
    <div className={classnames(inputSelectContainer)}>
      <Select
        value={field}
        placeholder={placeholder}
        name={name}
        styles={customStyles}
        className="react-select-container"
        classNamePrefix="react-select"
        // ref={register}
        onChange={handleSelectChange}
        options={options}
        required={required}
      />
    </div>
  );
};
export default InputSelect;
