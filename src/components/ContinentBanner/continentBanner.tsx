import { FC } from "react";
import { IoPlayCircleOutline } from "react-icons/io5";
const style = {
  bgImage: ` md:mt-[2em] w-full h-[40vh] md:h-[440px]  bg-cover bg-center bg-no-repeat relative bg-fixed object-content z-50 bg-[url('https://res.cloudinary.com/djkqaqoj3/image/upload/v1693392467/Chuttersnap_m4zaoo.jpg')]`,
  overlay: `h-full w-full top-0 left-0 absolute bg-black opacity-60 bg-fixed -z-50`,
  container: `h-full  w-[85%] m-auto flex flex-col text-center lg:text-justify md:flex-row  justify-center md:justify-between md:items-center`,
  textContainer: `text-white z-50   md:text-start mt-5 text-center`,
  title: `text-2xl md:text-6xl font-black uppercase tracking-wider`,
  description: `  my-5 text-sm md:text-[0.9rem] tracking-wide  md:pr-0`,
  play: `md:mr-[60px] hidden md:flex`,
};

const continentBanner: FC = () => {
  return (
    <div className={style.bgImage}>
      <div className={style.container}>
        <div className={style.textContainer}>
          <h1 className={style.title}>
            Fortune Estate
            <br />
            Continents
          </h1>
          <p className={style.description}>
            Fortune Estate covers all regions of the worlds. Tap on any region
            to view countries available within the area.
          </p>
        </div>

        <div className={style.play}>
          <IoPlayCircleOutline color="#fff " size={100} />
        </div>
      </div>
      <div className={style.overlay}></div>
    </div>
  );
};

export default continentBanner;
// const style = {
//   bgImage: ` md:mt-[2em] w-full h-[60vh] md:h-[440px]  bg-cover bg-center bg-no-repeat relative bg-fixed object-content z-50 bg-[url('https://res.cloudinary.com/djkqaqoj3/image/upload/v1693392467/Chuttersnap_m4zaoo.jpg')]`,
//   container: `h-full  w-[85%] m-auto flex flex-col text-cente md:flex-row  justify-center md:justify-between md:items-center`,
//   textContainer: `text-white z-50   md:text-start mt-5 text-center`,
//   title: `text-2xl md:text-6xl font-black uppercase tracking-wider`,
//   description: `  my-5 text-sm md:text-[0.9rem] tracking-wide pr-20 md:pr-0`,
//   play: `md:mr-[60px] `,
//   overlay: `h-full w-full top-0 left-0 absolute bg-black opacity-60 bg-fixed -z-50`,
// };
