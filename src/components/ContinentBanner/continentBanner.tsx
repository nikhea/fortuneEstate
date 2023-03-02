import { FC } from "react";
import { IoPlayCircleOutline } from "react-icons/io5";

const style = {
  bgImage: ` md:mt-[2em] w-full h-[60vh] md:h-[340px]  bg-cover bg-center bg-no-repeat relative bg-fixed object-content z-50 bg-[url('https://www.thehouse48.com/wp-content/uploads/2021/12/chuttersnap-603079-unsplash-e1546425079773.jpg')]`,
  container: `h-full  w-[85%] m-auto flex flex-col text-cente md:flex-row  justify-center md:justify-between md:items-center`,
  textContainer: `text-white z-50   md:text-start mt-5`,
  title: `text-5xl md:text-7xl font-black uppercase tracking-wider`,
  description: ` my-5 text-sm md:text-[0.9rem] tracking-wide pr-20 md:pr-0`,
  play: `md:mr-[60px] `,
  overlay: `h-full w-full top-0 left-0 absolute bg-black opacity-60 bg-fixed -z-50`,
};
// bgImage: `mt-[15em] w-full h-[100vh] md:h-[340px]   bg-[url('${imageLink}')] relative bg-fixed object-content bg-cover bg-center bg-no-repeat -z-50`,

const continentBanner: FC = () => {
  return (
    <div className={style.bgImage}>
      <div className={style.container}>
        <div className={style.textContainer}>
          <h1
            className={style.title}
            // data-aos="fade-right"
            // data-aos-easing="ease-in-out"
            // data-aos-duration="1500"
          >
            Fortune Estate <br /> Continents
          </h1>
          <p
            className={style.description}
            // data-aos="fade-right"
            // data-aos-easing="ease-in-out"
            // data-aos-duration="2500"
          >
            Fortune Estate covers all regions of the worlds. Tap on any region
            to view countries available within the area.
          </p>
        </div>

        <div
          className={style.play}
          // data-aos="fade-left"
          // data-aos-easing="ease-in-out"
          // data-aos-duration="2500"
        >
          <IoPlayCircleOutline color="#fff" size={100} />
        </div>
      </div>
      <div className={style.overlay}></div>
    </div>
  );
};

export default continentBanner;
{
  /* <Button
primary
isCurve
margin
padding
uppercase

>
get in touch
</Button> */
}
