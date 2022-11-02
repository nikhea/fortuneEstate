import { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import { routes } from "../../routes/routes";
import { countries } from "../../data/countries";
import Button from "../../components/UI/FormElement/Button";
import Spinner from "../../components/UI/spinner/spinner";
const style = {
  container: `w-[90%] m-auto items-center justify-center grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-3 my-[4rem] overflow-hidden`,
  items: `mx-6 mb-9 leading-[2] fl items-center flex-col `,
  title: ` uppercase text-[1.5rem] text-[#7f7f7f] font-normal tracking-[1.1px] text-center`,
  imgContainer: ``,
  image: ` w-[100vw] bg-black  `,
  link: `flex items-center text-center justify-center `,
  discoverContainer: `w-[92%] m-auto bg-[#e6e9efa3] h-[60vh] mb-[7%]`,
  discoverText: `text-center flex items-center h-full justify-center flex-col `,
  discoverTitle: `text-[#7f7f7f] capitalize font-bold text-5xl mb-[1em]`,
  btn: `bg-[#06c4e5] w-full  text-center text-[0.9rem] tracking-[3px] text-white py-2  capitalize  rounded`,
};
import CountrieBanner from "../../components/CountrieBanner/CountrieBanner";
const bg2 =
  "https://www.thehouse48.com/wp-content/uploads/2021/12/chris-barbalis-98731-unsplash.jpg";
const bg =
  "https://www.thehouse48.com/wp-content/uploads/2021/12/chuttersnap-603079-unsplash-e1546425079773.jpg";
const bg3 =
  "https://www.thehouse48.com/wp-content/uploads/elementor/thumbs/architecture-building-canal-804954-pjkp3dtzc7d35m1dy3y1708yg1xkn4k4k5w2xn6uys.jpg";

const Countrie: FC = () => {
  return (
    <div>
      <CountrieBanner CountrieName={`africa`} CountrieBanner={bg2} />
      <div className={style.container}>
        {countries.map((countrie, index) => (
          <div className={style.items} key={index}>
            {/* <img className={style.image} src={countrie.image} alt={countrie.name} /> */}
            <div className={style.imgContainer}>
              <LazyLoadImage
                alt={countrie.name}
                effect="blur"
                src={countrie.image}
                className={style.image}
              />{" "}
            </div>
            {/* {console.log(countries.image)} */}
            <h1 className={style.title}>{countrie.name}</h1>
            <Link to={routes.properties}>
              <Button uppercase primary isCurve full>
                <div className={style.link}>view properties</div>
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countrie;
