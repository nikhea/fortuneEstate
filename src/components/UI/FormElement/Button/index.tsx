import { FC } from "react";
import classnames from "classnames";
interface Button {
  children: React.ReactNode;
  primary?: boolean;
  rounded?: boolean;
  transparent?: boolean;
  margin?: boolean;
  full?: boolean;
  text?: boolean;
  isCurve?: boolean;
  disabled?: boolean;
}

const Button: FC<Button> = ({
  children,
  primary,
  rounded,
  transparent,
  margin,
  full,
  text,
  isCurve,
  disabled,
}) => {
  console.log("curve", isCurve);
  console.log("disabled", disabled);
  const style = {
    btn: `cursor-pointer outline-none `,
    primary: ``,
    transparent: ``,
    text: ``,
    full: ``,
    margin: ``,
    curve: `rounded-[8px] `,
    rounded: `rounded-[40px]`,
  };
  let btn = {
    [`${style.btn}`]: true,
    [`${style.curve}`]: isCurve,
    [`${style.rounded}`]: rounded,
    [`${style.primary}`]: primary,
    [`${style.full}`]: full,
    [`${style.margin}`]: margin,
    [`${style.text}`]: text,
    [`${style.transparent}`]: transparent,
  };
  return <button className={classnames(btn)}>{children}</button>;
};

export default Button;
