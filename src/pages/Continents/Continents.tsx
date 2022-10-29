import { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import {Link} from "react-router-dom"
import { MdLocationPin } from "react-icons/md";
import ContinentBanner from "../../components/ContinentBanner/continentBanner";
import { continent } from "../../data/continent";
import Spinner from "../../components/UI/spinner/spinner"

const style = {
  container: `w-[90%] m-auto items-center justify-center flex flex-wrap my-[4rem]`,
  items: `mx-6 mb-9 leading-[2]`,
  title: ` uppercase text-[2rem] text-[#7f7f7f] font-normal tracking-[1.1px]`,
  image: ``,
  link: `flex items-center `,
  discoverContainer: `w-[92%] m-auto bg-[#e6e9efa3] h-[60vh] mb-[7%]`,
  discoverText: `text-center flex items-center h-full justify-center flex-col `,
  discoverTitle: `text-[#7f7f7f] capitalize font-bold text-5xl mb-[1em]`,
  btn: `bg-[#06c4e5] text-[0.9rem] tracking-[3px] text-white py-2 px-2 uppercase rounded`,
};
const Continents: FC = () => {
  return (
    <div>
      <ContinentBanner />
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
              <Link to="/1/countries" className={style.link}>
                <MdLocationPin
                  size={20}
                  color="#"
                  style={{ marginRight: "11px" }}
                />{" "}
                view continents
                {/* <Spinner/> */}
              </Link>
            </button>
          </div>
        ))}
      </div>
      <Discover />
    </div>
  );
};

export const Discover = () => {
  return (
    <div className={style.discoverContainer}>
      <div className={style.discoverText}>
        <h1 className={style.discoverTitle}>discover your dream house</h1>
        <button style={{ padding: "10px 12px" }} className={style.btn}>
          get in touch
        </button>
      </div>
    </div>
  );
};

export default Continents;
