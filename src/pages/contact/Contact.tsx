import React from "react";
import FAQ from "./components/faq";
const style = {
  container: `w-[90%] m-auto items-center justify-center   my-[4rem] overflow-hidden`,
  items: `mx-6 mb-9 leading-[2] fl items-center flex-col `,
  title: ` uppercase text-[1.5rem] text-[#7f7f7f] font-normal tracking-[1.1px] text-center`,
  imgContainer: ` flex`,
  image: ` w-[100vw] bg-black rounded-[15px] cursor-pointer `,
  link: `flex items-center text-center justify-center `,
  discoverContainer: `w-[92%] m-auto bg-[#e6e9efa3] h-[60vh] mb-[7%]`,
  discoverText: `text-center flex items-center h-full justify-center flex-col `,
  discoverTitle: `text-[#7f7f7f] capitalize font-bold text-5xl mb-[1em]`,
  btn: `bg-[#06c4e5] w-full  text-center text-[0.9rem] tracking-[3px] text-white py-2  capitalize  rounded`,
};
const Contact = () => {
  return (
    <div className={style.container}>
      <FAQ />
    </div>
  );
};

export default Contact;
