import { FC } from "react";

interface HeaderProps {
  step: any;
  setStep: any;
  stepTitle: any;
  setStepTitle: any;
}
const Header: FC<HeaderProps> = ({
  step,
  setStep,
  stepTitle,
  setStepTitle,
}) => {
  const style = {
    headerTitleContainer: ` hidden md:flex justify-between borde mb-16 capitalize md:text-1xl`,
    headerTitle: ``,
  };
  const ys = [0];
  const zs = stepTitle.filter((_: any, i: any) => !ys.includes(i));
  // console.log(zs);
  const handleSubmitButton = (index: any) => {
    setStep(index);
  };
  return (
    <div>
      <div className={style.headerTitleContainer}>
        {stepTitle.map((title: string, index: number) => (
          <h1
            key={index}
            style={{ width: "55%", textAlign: "center", cursor: "pointer" }}
            className={
              step === index
                ? `bg-transparent border-b   border-[#b9b9b9] border-solid	 text-[#000] `
                : ""
            }
            onClick={() => handleSubmitButton(index)}
          >
            {title}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default Header;
