import { FC, useState } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const style = {
  bgButton: `relative bg-black`,
  button: `fixed w-full left-[95%] bottom-[40px] h-[20px] text-[2rem] z-9 cursor-pointer text-black hover:text-[blue]`,
};
const ScrollButton: FC = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
		in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div className={style.bgButton}>
      <div className={style.button}>
        <BsFillArrowUpCircleFill
          onClick={scrollToTop}
          style={{ display: visible ? "inline" : "none" }}
        />
      </div>
    </div>
  );
};

export default ScrollButton;
