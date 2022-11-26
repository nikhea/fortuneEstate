import { FC } from "react";
import { Link } from "react-router-dom";
import {routes} from "../../routes/routes"
import Button from "../../components/UI/FormElement/Button";
interface CountrieProps {
  CountrieName: string | any;
  CountrieBanner: string;
}

const CountrieBanner: FC<CountrieProps> = ({
  CountrieName,
  CountrieBanner,
}) => {
  const style = {
    bgImage: ` mt-[5em]  mb-[5em] w-full h-[100vh] md:h-[60vh]  bg-cover bg-center bg-no-repeat relative bg-fixed object-content z-50`,
    container: `h-full  w-[85%] m-auto flex flex-col  justify-between  text-white`,
    textContainer: `flex  items-center justify-between mb-[5px] `,
    title: `text-7xl font-black uppercase tracking-wider mt-[120px]`,
    description: `text-[0.9rem] font-light tracking-wide uppercase text-2xl`,
    play: ``,
    hr: `bg-white h-[1.2px] w-[15rem]`,
    textInner: `flex  items-center`,
    btn: `uppercase font-light tracking-widest ml-5 bg-blue-500 rounded-full py-[1rem] px-[1rem] border-[2px] leading-[]`,
    overlay: `h-[80%] w-full top-0 left-0 absolute bg-black opacity-60 bg-fixed -z-50`,
  };
  return (
    <div
      className={style.bgImage}
      style={{
        backgroundImage: `url(${CountrieBanner})`,
      }}
    >
      <div className={style.container}>
        <h1 className={style.title}>{CountrieName}</h1>
        <div className={style.textContainer}>
          <p className={style.description}>
            view countries in {CountrieName} below
          </p>

          <div className={style.textInner}>
            <div className={style.hr}></div>
            <Link className={style.btn} to={routes.continents}>
              view all countries
            </Link>
            {/* <Link  to="/Continents">
              <Button linearGradient border padding rounded uppercase > view all countries</Button>
            </Link> */}
          </div>
        </div>
      </div>
      <div className={style.overlay}></div>
    </div>
  );
};

export default CountrieBanner;
