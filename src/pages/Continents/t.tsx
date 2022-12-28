import {
  FC,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactFragment,
} from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { routes } from "../../routes/routes";
import { MdLocationPin } from "react-icons/md";
import ContinentBanner from "../../components/ContinentBanner/continentBanner";
import { continent } from "../../data/continent";
import Button from "../../components/UI/FormElement/Button";
import Spinner from "../../components/UI/Loading/spinner";

import { getAllCONTINENTS } from "../../services/api/shared";
const style = {
  container: `w-[90%] m-auto items-center justify-center grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows- my-[4rem]`,
  items: `mx-6 mb-9 leading-[2] fl items-center flex-col `,
  title: ` uppercase text-[1.5rem] text-[#7f7f7f] font-normal tracking-[1.1px] text-center`,
  imgContainer: ``,
  image: ` w-[100vw] bg-black rounded `,
  link: `flex items-center text-center justify-center `,
  discoverContainer: `w-[92%] m-auto bg-[#e6e9efa3] h-[60vh] mb-[7%]`,
  discoverText: `text-center flex items-center h-full justify-center flex-col `,
  discoverTitle: `text-[#7f7f7f] capitalize font-bold text-5xl mb-[1em]`,
  // btn: `bg-[#06c4e5] w-full  text-center text-[0.9rem] tracking-[3px] text-white py-2  capitalize  rounded cursor-not-allowed`,
};
const Continents: FC = () => {
  const {
    data: continents,
    error,
    isLoading,
  } = useQuery(["repoData"], getAllCONTINENTS, {
    staleTime: 123,
  });
  // const p = continents?.data.map((_contin) => {});
  if (isLoading) return <Spinner />;

  return (
    <div>
      <ContinentBanner />
      <div className={style.container}>
        {continents?.data.map(
          (
            continent: {
              attributes: any;
              name:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | ReactFragment
                | null
                | undefined;
              image: string | undefined;
            },
            index: Key | null | undefined
          ) => (
            <div className={style.items} key={index}>
              {/* <img src={continent.image} alt={continent.name} /> */}
              <div className={style.imgContainer}>
                <LazyLoadImage
                  alt={continent.attributes.name}
                  effect="blur"
                  src={continent.attributes.Image}
                  className={style.image}
                />
              </div>
              {/* {console.log(continent.image)} */}
              <h1 className={style.title}>{continent.attributes.name}</h1>
              <Link to={routes.countries}>
                <Button uppercase primary isCurve full disabled>
                  <div className={style.link}>
                    {" "}
                    <MdLocationPin
                      size={20}
                      color="#"
                      style={{ marginRight: "11px" }}
                    />{" "}
                    view continents
                    {/* <Spinner/> */}
                  </div>
                </Button>
              </Link>
            </div>
          )
        )}
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
        <Button primary isCurve margin padding uppercase>
          get in touch
        </Button>
      </div>
    </div>
  );
};

export default Continents;
