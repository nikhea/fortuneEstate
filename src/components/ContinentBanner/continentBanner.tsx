import { FC } from "react";
import { IoPlayCircleOutline } from "react-icons/io5";
const imageLink =
  "https://www.thehouse48.com/wp-content/uploads/2021/12/chuttersnap-603079-unsplash-e1546425079773.jpg";
// bg-[url(${imageLink})]
console.log(imageLink);
const style = {
  bgImage: `mt-[15em] w-full h-[100vh] md:h-[340px]   bg-[url('${imageLink}')] relative bg-fixed object-content bg-cover bg-center bg-no-repeat -z-50`,
  container: `h-full  w-[85%] m-auto flex flex-col md:flex-row justify-between items-center`,
  textContainer: `text-white z-50 `,
  title: `text-7xl font-black uppercase tracking-wider`,
  description: `text-[0.9rem] tracking-wide`,
  play: ``,
  overlay: `h-full w-full top-0 left-0 absolute bg-black opacity-60 bg-fixed -z-50`,
};
const continentBanner: FC = () => {
  return (
    <div className={style.bgImage}>
      <div className={style.container}>
        <div className={style.textContainer}>
          <h1 className={style.title}>
            House48 <br /> Continents
          </h1>
          <p className={style.description}>
            House48 covers all regions of the worlds. Tap on any region to view
            countries available within the area.
          </p>
        </div>

        <div className={style.play}>
          <IoPlayCircleOutline
            color="#fff"
            size={100}
            style={{ marginRight: "60px" }}
          />
        </div>
      </div>
      <div className={style.overlay}></div>
    </div>
  );
};

export default continentBanner;
