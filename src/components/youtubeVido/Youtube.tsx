import { FC } from "react";
import YoutubeVideo from "../../assets/home.mp4";
const style = {
  iframeContainer: `w-full h-screen bg-blue-500 object-contain overflow-x-hidden`,
  video: `h-full w-full object-cover `,
};
const Youtube: FC = () => {
  return (
    <div className={style.iframeContainer}>
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
