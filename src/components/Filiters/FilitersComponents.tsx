import FilterCard from "../../components/card/filterCard";

const style = {
  bgImage: ` md:mb-[3em] w-full h-[100%] md:h-[100%] lg:h-[440px]  bg-cover bg-center bg-no-repeat relative bg-fixed object-content z-50 bg-[url('https://www.thehouse48.com/wp-content/uploads/2021/12/chuttersnap-603079-unsplash-e1546425079773.jpg')]`,
  container: `h-full z-50 py-10 w-[85%] m-auto flex flex-col text-cente md:flex-row  justify-center md:justify-between md:items-center`,
  textContainer: `text-white   md:text-start mt-5`,
  title: `text-5xl md:text-7xl font-black uppercase tracking-wider`,
  description: ` my-5 text-sm md:text-[0.9rem] tracking-wide pr-20 md:pr-0`,
  play: `md:mr-[60px] `,
  overlay: `h-full w-full top-0 left-0 absolute bg-black opacity-60 bg-fixed -z-50`,
};
const FilitersComponents = () => {
  return (
    <div className={style.bgImage}>
      <div className={style.container}>
        <FilterCard />
      </div>
      <div className={style.overlay}></div>
    </div>
  );
};

export default FilitersComponents;
