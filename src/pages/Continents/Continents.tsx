import { FC, Key, useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { routes } from "../../routes/routes";
import { MdLocationPin } from "react-icons/md";
import ContinentBanner from "../../components/ContinentBanner/continentBanner";
import Button from "../../components/UI/FormElement/Button";
import Spinner from "../../components/UI/Loading/spinner";
import { getAllCONTINENTS } from "../../services/api/shared";
import { SEO } from "../../components/seo/seo";
import PageLoading from "../../components/UI/Loading/PageLoading";
const style = {
  container: `lg:w-[90%] m-auto items-center justify-center grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows- my-[4rem]`,
  items: `fle flex-col  mx-3 my-3`,
  // items: `mx-6 mb-9 leading-[2] fl items-center flex-col text-[#7f7f7f] `,
  title: ` uppercase text-[1.5rem]  font-normal tracking-[1.1px] text-center text-[#7f7f7f]`,
  imgContainer: `flex h-[300px]`,
  image: ` w-[100vw] bg-black rounded-[15px] cursor-pointer`,
  link: `flex items-center text-center justify-center `,
  discoverContainer: `w-[92%] m-auto bg-[#e6e9efa3] h-[60vh] mb-[7%]`,
  discoverText: `text-center flex items-center h-full justify-center flex-col `,
  discoverTitle: `text-[#7f7f7f] capitalize font-bold text-5xl mb-[1em]`,
  // btn: `bg-[#06c4e5] w-full  text-center text-[0.9rem] tracking-[3px] text-white py-2  capitalize  rounded cursor-not-allowed`,
  overlay: `h-full w-full top-0 left-0 absolute bg-black opacity-60 bg-fixed z-30 rounded-[15px]`,
};
interface Props {
  _id: number;
  attributes: any;
  name: string;
  image: string;
}
const Continents: FC = () => {
  const { data: continents, isLoading } = useQuery(
    ["continents"],
    getAllCONTINENTS
  );
  if (isLoading) {
    return <PageLoading />;
  }
  return (
    <div>
      <SEO title="continents" />
      <ContinentBanner />
      <div className={style.container}>
        {continents?.data.map((continent: Props, index: Key) => (
          <div className={style.items} key={continent._id}>
            <div className={style.imgContainer}>
              <LazyLoadImage
                alt={continent.name}
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
                </div>
              </Button>
            </Link>
          </div>
        ))}
      </div>
      {/* <Discover /> */}
    </div>
  );
};

export const Discover = () => {
  return (
    <div className={style.discoverContainer}>
      <div className={style.discoverText}>
        <h1
          className={style.discoverTitle}
          // data-aos="fade-up"
          // data-aos-easing="ease-in-out"
          // data-aos-duration="3500"
        >
          discover your dream house
        </h1>
        <span
        // data-aos="fade-up"
        // data-aos-easing="ease-in-out"
        // data-aos-duration="4500"
        >
          <Link to={routes.contact}>
            <Button primary isCurve margin padding uppercase>
              get in touch
            </Button>
          </Link>
        </span>
      </div>
    </div>
  );
};
{
  /* <Button uppercase primary isCurve full> */
}
export default Continents;

// <div className={style.imgContainer}>
// <LazyLoadImage
//   alt={continent.name}
//   src={continent.image}
//   className={style.image}
// />
// </div>
// <h1 className={style.title}>{continent.name}</h1>
// <Link to={`${routes.countries}/${continent.name}`}>
// <Button uppercase primary isCurve full marginHorizontal>
//   <div className={style.link}>
//     <MdLocationPin
//       size={20}
//       color="#"
//       style={{ marginRight: "11px" }}
//     />{" "}
//     view continents
//   </div>
// </Button>
// </Link>

// const { data: continents, error } = useQuery(["contients"],getAllCONTINENTS );

// data-aos="fade-up"
// data-aos-easing="ease-in-out"
// data-aos-duration={
// index === 0
//   ? "24000"
// :  : index === 1
// ? "8000"
// : index === 2
// ? "5000"
// : index === 3
// ? "13000"
// : index === 4
// ? "17000"
// : index === 5
// ? "2200"
// : index === 6
// ? "2800"
//       null
// }
// data-aos-delay={
//   index === 0
//     ? "24000"
//     : index === 1
//     ? "8000"
//     : index === 2
//     ? "5000"
//     : index === 3
//     ? "13000"
//     : index === 4
//     ? "17000"
// :
// : index === 5
// ? "2200"
// : index === 6
// ? "2800"
//       null
// }

{
  /* <div className={style.container}>
{continents?.data.map((continent: Props, index: Key) => (
  <div className={style.items} key={continent._id}>
    <div className={style.imgContainer}>
      <LazyLoadImage
        alt={continent.name}
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
        </div>
      </Button>
    </Link>
  </div>
))}
</div> */
}

{
  /* <div className={style.container}>
{continents?.data.map((continent: Props, index: Key) => (
  <Link
    to={`${routes.countries}/${continent.name}`}
    key={continent._id}
  >
    <Tilt>
      <div className="shadow-xl relative flex justify-center items-end">
        <div className={style.imgContainer}>
          <LazyLoadImage
            alt={continent.name}
            src={continent.image}
            className={style.image}
          />
        </div>
        <h1 className={style.title}>{continent.name}</h1>
        <div className={style.overlay}></div>
      </div>
    </Tilt>
  </Link>
))}
</div> */
}

{
  /* <div className={style.container}>
{continents?.data.map((continent: Props, index: Key) => (
  <Link
    to={`${routes.countries}/${continent.name}`}
    key={continent._id}
  >
    <Tilt>
      <div className="shadow-xl relative flex justify-center items-end">
        <div className={style.imgContainer}>
          <LazyLoadImage
            alt={continent.name}
            src={continent.image}
            className={style.image}
          />
        </div>
        <h1 className={style.title}>{continent.name}</h1>
        <div className={style.overlay}></div>
      </div>
    </Tilt>
  </Link>
))} */
}
// </div>
