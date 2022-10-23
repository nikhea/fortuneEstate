import { FC } from "react";
import { GoLocation } from "react-icons/go";
import ContinentBanner from "../../components/ContinentBanner/continentBanner";

const continent = [
  {
    image: `https://www.thehouse48.com/wp-content/uploads/elementor/thumbs/arch-bridge-architecture-boats-705782-pjkp3byayjaiie44934s20q19a6u7qcnvwl3z39nb8.jpg`,
    name: `europe`,
    link: ``,
  },
  {
    image: `https://www.thehouse48.com/wp-content/uploads/elementor/thumbs/architecture-building-canal-804954-pjkp3dtzc7d35m1dy3y1708yg1xkn4k4k5w2xn6uys.jpg`,
    name: `north america`,
    link: ``,
  },
  {
    image: `https://www.thehouse48.com/wp-content/uploads/elementor/thumbs/adult-architecture-building-949219-pjkp3ertj1edh800smcnri0f1fsxutnuwajkex5gsk.jpg`,
    name: `south america`,
    link: ``,
  },
  {
    image: `https://www.thehouse48.com/wp-content/uploads/elementor/thumbs/pexels-julius-silver-870711-pjha6b2l89rm89pjacg7wnqubskls3b7i2fj0oangk.jpg`,
    name: `asia`,
    link: ``,
  },
  {
    image: `https://www.thehouse48.com/wp-content/uploads/elementor/thumbs/pexels-christian-paul-del-rosario-1076240-pjhccrnlpf69chqo4re4jcyzenulajslyetm55ym2s.jpg`,
    name: `oceania`,
    link: ``,
  },
  {
    image: `https://www.thehouse48.com/wp-content/uploads/elementor/thumbs/ne-3-1-pdhigtacej4acirrui0rp7ghym6q37udkz78ahlg04.jpg`,
    name: `africa`,
    link: ``,
  },
];
const style = {
  container: `w-[90%] m-auto flex flex-wrap my-[4rem]`,
  items:`mx-6 mb-9 leading-[2]`,
  title: ` uppercase text-[2rem] text-[#7f7f7f] font-normal tracking-[1.1px]`,
  image:``,
  link: `flex items-center `,
  btn: `bg-[#06c4e5] text-[1.1rem] tracking-[3px] text-white py-3 px-3`,
};
const allCountries: FC = () => {
  return (
    <div>
      <ContinentBanner />
      <div className={style.container}>
        {continent.map((continent, index) => (
          <div className={style.items} key={index}>
            <img src={continent.image} alt={continent.name} />
            <h1 className={style.title}>{continent.name}</h1>
            <button className={style.btn}>
              <a href={continent.link} className={style.link}>
                <GoLocation color="#" style={{ marginRight: "11px" }} /> view continents
              </a>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default allCountries;
