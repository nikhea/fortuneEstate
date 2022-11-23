import { FC } from "react";
import classnames from "classnames";
interface Button {
  children: React.ReactNode;
  primary?: boolean;
  rounded?: boolean;
  transparent?: boolean;
  margin?: boolean;
  full?: boolean;
  bold?: boolean;
  isCurve?: boolean;
  disabled?: boolean;
  uppercase?: boolean;
  padding?: boolean;
  linearGradient?: boolean;
  border?: boolean;
  marginTop?: boolean;
  types?: any;
  onClick?: any;
}

const Button: FC<Button> = ({
  children,
  primary,
  rounded,
  transparent,
  margin,
  full,
  bold,
  isCurve,
  disabled,
  uppercase,
  padding,
  marginTop,
  linearGradient,
  types,
  border,
  onClick
}) => {
  const style = {
    btn: `border border-solid bg-transparen min-w-[100px] not-italic font-[400] text-[14px] outline-none cursor-pointer my-[2em] mx-0 py-[1.3em] px-0`,
    disabled: `!cursor-not-allowed`,
    primary: `text-white font-bold bg-[#06c4e5] `,
    rounded: `rounded-[40px] `,
    transparent: `bg-transparent border border-[#b9b9b9] border-solid	 text-[#000] `,
    full: `w-full`,
    bold: ``,
    margin: `m-0`,
    marginTop: `m-0 mt-0`,
    curve: `rounded-[8px] `,
    uppercase: `uppercase`,
    padding: `!px-[5em] !py-[1em]`,
    linearGradient: `bg-gradient-to-r from-cyan-500 to-blue-500 px-[3em] py-0 tracking-widest outline-none min-h-[44px] border-0 `,
    border: `  tracking-widest     border-[2px]  `,
  };
  // btn: `bg-[#06c4e5] w-full  text-center text-[0.9rem] tracking-[3px] text-white py-2  capitalize  rounded `,

  let btn = {
    [`${style.btn}`]: true,
    [`${style.curve}`]: isCurve,
    [`${style.rounded}`]: rounded,
    [`${style.primary}`]: primary,
    [`${style.full}`]: full,
    [`${style.margin}`]: margin,
    [`${style.bold}`]: bold,
    [`${style.transparent}`]: transparent,
    [`${style.disabled}`]: disabled,
    [`${style.uppercase}`]: uppercase,
    [`${style.linearGradient}`]: linearGradient,
    [`${style.padding}`]: padding,
    [`${style.border}`]: border,
    [`${style.marginTop}`]: marginTop,
  };
  return <button onClick={onClick} type={types} className={classnames(btn)}>{children}</button>;
};

export default Button;
