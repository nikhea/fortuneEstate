import { FC, Key, useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";
import { useQuery } from "react-query";
import { routes } from "../../routes/routes";
import { MdLocationPin } from "react-icons/md";
import ContinentBanner from "../../components/ContinentBanner/continentBanner";
import Button from "../../components/UI/FormElement/Button";
import Spinner from "../../components/UI/spinner/spinner";

import { getAllCONTINENTS } from "../../services/api/shared";
import { SEO } from "../../components/seo/seo";
const style = {
  container: `w-[90%] m-auto items-center justify-center grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows- my-[4rem]`,
  items: `fle flex-col  mx-3 my-3`,
  // items: `mx-6 mb-9 leading-[2] fl items-center flex-col `,
  title: ` uppercase text-[1.5rem] text-[#7f7f7f] font-normal tracking-[1.1px] text-center mt-2 mb-1`,
  imgContainer: `flex`,
  image: ` w-[100vw] bg-black rounded-[15px] cursor-pointer`,
  link: `flex items-center text-center justify-center `,
  discoverContainer: `w-[92%] m-auto bg-[#e6e9efa3] h-[60vh] mb-[7%]`,
  discoverText: `text-center flex items-center h-full justify-center flex-col `,
  discoverTitle: `text-[#7f7f7f] capitalize font-bold text-5xl mb-[1em]`,
  // btn: `bg-[#06c4e5] w-full  text-center text-[0.9rem] tracking-[3px] text-white py-2  capitalize  rounded cursor-not-allowed`,
};
interface Props {
  _id: number;
  attributes: any;
  name: string;
  image: string;
}
const Continents: FC = () => {
  const { data: continents, status } = useQuery(
    ["continents"],
    getAllCONTINENTS
  );

  return (
    <div>
      {/* <SEO title="continents" /> */}

      <ContinentBanner />
      <div className={style.container}>
        {continents?.data.map((continent: Props, index: Key) => (
          // <LazyLoadImage>
          <div className={style.items} key={continent._id}>
            <div className={style.imgContainer}>
              <LazyLoadImage
                alt={continent.name}
                effect="blur"
                src={continent.image}
                className={style.image}
              />
            </div>
            <h1 className={style.title}>{continent.name}</h1>
            <Link to={`${routes.countries}/${continent.name}`}>
              <Button uppercase primary isCurve full marginHorizontal>
                <div className={style.link}>
                  <MdLocationPin
                    size={20}
                    color="#"
                    style={{ marginRight: "11px" }}
                  />{" "}
                  view continents
                  {/* <Spinner /> */}
                </div>
              </Button>
            </Link>
          </div>
          // </LazyLoadImage>
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
        <Button primary isCurve margin padding uppercase>
          get in touch
        </Button>
      </div>
    </div>
  );
};
{
  /* <Button uppercase primary isCurve full> */
}
export default Continents;

// const { data: continents, error } = useQuery(["contients"],getAllCONTINENTS );
