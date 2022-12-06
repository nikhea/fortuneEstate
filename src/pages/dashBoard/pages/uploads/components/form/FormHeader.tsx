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
    headerTitleContainer: `flex justify-between border-b mb-16 capitalize md:text-1xl `,
    headerTitle: ``,
  };
  const ys = [0];
  const zs = stepTitle.filter((_: any, i: any) => !ys.includes(i));
  console.log(zs);

  return (
    <div>
      {/* <p>{step}/ 5</p>  */}

      <div className={style.headerTitleContainer}>
        {stepTitle.map((title: string, index: number) => (
          <h1
            style={{ width: "55%", textAlign: "center" }}
            className={
              step === index
                ? `bg-transparent border-b   border-[#b9b9b9] border-solid	 text-[#000] `
                : ""
            }
          >
            {title}
          </h1>
        ))}
      </div>
    </div>
  );
};
// style={{
//   borderBottom: step === index ? `1px solid red` : "",

// }}
export default Header;
{
  /* <p>{step}/ 5</p> */
}
// borderBottom: ${step === index ? '`1px solid red`': null}
