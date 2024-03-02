import { FC } from "react";
import Button from "../../components/UI/FormElement/Button";

// bg-[#e6e9efa3]
const style = {
  discoverContainer: `capitalize text-center w-[92%] lg:w-[50%] m-auto h-[35vh] md:h-[80vh]  lg:h-[40vh] bg-[#0D304A] text-white my-[7%] rounded-[30px]`,
  container: ` flex items-center justify-center  flex-col  h-full  px-4`,
  bgContainer: `bg-[#E5E5E5] `,
  textContainer: ``,
  title: `text-[18px]  lg:text-3xl leading-[2em] `,
  subText: ` text-sm md:text-base lg:tracking-`,
  inputContainer: ` w-[450px] max-w-[96%] mt-[2em] flex flex-col justify-end items-end `,
  emailInput: `w-full outline-none text-black rounded-[30px] py-[15px] px-[32px] outline-none text-[#111]  text-[.9375rem] `,
  btn: ` bg-white my-3 px-[22px] py-[10px] text-[#0D304A] uppercase rounded-[30px]`,
  btns: ``,
};
// text-[#0D304A]  w-[85%] m-auto   flex flex-col lg:flex-row items-center justify-between  pt-[4.5%] pr-[0%] pb-[4%] pl-[0%] sm:mt-0 lg:mt-5
export const Newsletter = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <div className={style.discoverContainer}>
      <div className={style.container}>
        <div className={style.textContainer}>
          <h2 className={style.title}>Sign Up For Our Daily Newsletter</h2>
          <p className={style.subText}>
            Sign up for our emails and be the first to know about special
            offers.
          </p>
        </div>
        <form className={style.inputContainer} onSubmit={handleSubmit}>
          <input
            className={style.emailInput}
            type="email"
            placeholder="Enter Your Email"
          />
          <button className={style.btn}>submit</button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
// const newsletter: FC = () => {
//   return (
//     <div className={style.bgContainer}>
//       <div className={style.container}>
//         <div className={style.textContainer}>
//           <h2 className={style.title}>Sign Up For Our Daily Newsletter</h2>
//           <p className={style.subText}>
//             Sign up for our emails and be the first to know about special
//             offers.
//           </p>
//         </div>
//         <form className={style.inputContainer} onSubmit={handleSubmit}>
//           <input
//             className={style.emailInput}
//             type="email"
//             placeholder="Enter Your Email"
//           />
//           <button className={style.btn}>submit</button>
//         </form>
//       </div>
//     </div>
//   );
// };
// const style = {
//   container: `text-[#0D304A]  w-[85%] m-auto   flex flex-col lg:flex-row items-center justify-between  pt-[4.5%] pr-[0%] pb-[4%] pl-[0%] sm:mt-0 lg:mt-5 `,
//   bgContainer: `bg-[#E5E5E5] `,
//   textContainer: ``,
//   title: `text-3xl leading-[2em] `,
//   subText: `text-base lg:tracking-`,
//   inputContainer: ` w-[450px] max-w-[96%] mt-[2em] flex flex-col justify-end items-end `,
//   emailInput: `w-full outline-none text-black rounded-[30px] py-[15px] px-[32px] outline-none text-[#111] rounded-md   text-[.9375rem] `,
//   btn: ` bg-white my-3 px-[22px] py-[10px] text-[#0D304A] uppercase rounded-[30px]`,
//   btns: ``,
// };
