import { FC } from "react";
import YoutubeVideo from "../../assets/home.mp4";
import MainText from "../../Layout/Header/MainText";
import MainNav from "../../Layout/Header/MainNav";
const style = {
  iframeContainer: `w-full h-screen  object-contain overflow-hidden relative bg-fixed`,
  video: `h-full w-full object-cover  bg-fixed`,
  container: `h-full`,
  test: `absolute  z-[3] w-full h-full`,
  MainNavContainer: `absolute  z-[3] w-full h-full overflow-hidden`,
  textContainer: `text-white  w-full h-full mt-[-100px]`,
  overlay: `h-full w-full top-0 left-0 absolute bg-gradient-to-tl from-black bg-fixed`,
};
const Youtube: FC = () => {
  return (
    <div className={style.iframeContainer}>
      <span className={style.test}>
        {/* <div className={style.MainNavContainer}> */}
        <MainNav />
        {/* </div> */}
        <div className={style.textContainer}>
          <MainText />
        </div>
      </span>
      <div className={style.overlay}></div>
      <video className={style.video} src={YoutubeVideo} autoPlay loop muted />
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
