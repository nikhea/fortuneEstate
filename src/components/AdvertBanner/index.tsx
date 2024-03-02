import { FC } from "react";
const style = {
  bgImage: `  md:mt-[2em] w-full h-[40vh] md:h-[440px]  bg-cover bg-center bg-no-repeat relative bg-fixed object-content z-50 bg-[url('https://res.cloudinary.com/djkqaqoj3/image/upload/v1693397026/photo-1683721003111-070bcc053d8b_aro2zx.jpg')]`,
  container: `h-full  w-[85%] m-auto flex flex-col md:flex-row  justify-center md:justify-between md:items-center`,
  textContainer: `text-white z-50   md:text-start mt-5 text-center w-full`,
  title: `text-3xl md:text-7xl font-black uppercase tracking-wider text-center`,
  overlay: `h-full w-full top-0 left-0 absolute bg-black opacity-60 bg-fixed -z-50`,
};
// https://res.cloudinary.com/djkqaqoj3/image/upload/v1693397026/photo-1683721003111-070bcc053d8b_aro2zx.jpg
// https://www.thehouse48.com/wp-content/uploads/2021/12/pexels-photo-396303.jpeg
const contactBanner: FC = () => {
  return (
    <div className={style.bgImage}>
      <div className={style.container}>
        <div className={style.textContainer}>
          <h1
            className={style.title}
            // data-aos="fade-up"
            // data-aos-easing="ease-in-out"
            // data-aos-duration="1500"
          >
            adverties
          </h1>
        </div>
      </div>
      <div className={style.overlay}></div>
    </div>
  );
};

export default contactBanner;
