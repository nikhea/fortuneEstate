import { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import { continent } from "../../data/continent";
import Spinner from "../../components/UI/spinner/spinner";
const style = {
  container: `w-[90%] m-auto items-center justify-center flex flex-wrap my-[4rem]`,
  items: `mx-6 mb-9 leading-[2]`,
  title: ` uppercase text-[2rem] text-[#7f7f7f] font-normal tracking-[1.1px]`,
  image: ``,
  link: `flex items-center text-center justify-center `,
  discoverContainer: `w-[92%] m-auto bg-[#e6e9efa3] h-[60vh] mb-[7%]`,
  discoverText: `text-center flex items-center h-full justify-center flex-col `,
  discoverTitle: `text-[#7f7f7f] capitalize font-bold text-5xl mb-[1em]`,
  btn: `bg-[#06c4e5] w-full text-center text-[0.9rem] tracking-[3px] text-white py-2  capitalize  rounded`,
};
import CountrieBanner from "../../components/CountrieBanner/CountrieBanner";
const bg2 =
  "https://www.thehouse48.com/wp-content/uploads/2021/12/chris-barbalis-98731-unsplash.jpg";
const bg =
  "https://www.thehouse48.com/wp-content/uploads/2021/12/chuttersnap-603079-unsplash-e1546425079773.jpg";
  const bg3 = "https://www.thehouse48.com/wp-content/uploads/elementor/thumbs/architecture-building-canal-804954-pjkp3dtzc7d35m1dy3y1708yg1xkn4k4k5w2xn6uys.jpg"

const Countrie: FC = () => {
  return (
    <div>
      <CountrieBanner CountrieName={`africa`} CountrieBanner={bg2} />
      <div className={style.container}>
        {continent.map((continent, index) => (
          <div className={style.items} key={index}>
            {/* <img src={continent.image} alt={continent.name} /> */}
            <LazyLoadImage
              alt={continent.name}
              effect="blur"
              src={continent.image}
            />
            {/* {console.log(continent.image)} */}
            <h1 className={style.title}>{continent.name}</h1>
            <button className={style.btn}>
              <Link to="/:id/properties" className={style.link}>
                view properties
              </Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countrie;
