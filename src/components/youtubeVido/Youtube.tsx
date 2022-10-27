import { FC } from "react";
import YoutubeVideo from "../../assets/home.mp4";
import MainNav from "../Header/MainNav";
import MainText from "../Header/MainText";
import SubNav from "../Header/SubNav";

const style = {
  iframeContainer: `w-full h-screen  object-contain overflow-x-hidden relative bg-fixed z-1`,
  video: `h-full w-full object-cover  bg-fixed`,
  container: `h-full`,
  textContainer: `absolute text-white z-[1] w-full`,
  overlay: `h-full w-full top-0 left-0 absolute bg-gradient-to-tl from-black bg-fixed`,
};
const Youtube: FC = () => {
  return (
    <div className={style.iframeContainer}>
      <div className={style.textContainer}>
        <SubNav />
        <MainNav />
        <MainText />
      </div>
      <div className={style.overlay}></div>
      {/* <video className={style.video} src={YoutubeVideo} autoPlay loop muted /> */}
    </div>
  );
};

export default Youtube;
{
  /* <iframe
className={style.iframe}
src={`https://www.youtube.com/embed/W0Y3BCtid9E?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=W0Y3BCtid9E`}
frameBorder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowFullScreen
title="Modern Home Design | Interior Exterior House Tour | Contemporary Architecture - Architectural Style"
/> */
}
