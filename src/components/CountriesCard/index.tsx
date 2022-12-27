import { FC } from "react";
import "./countriesContainer.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
// import { useQuery } from "@tanstack/react-query";
import { useQuery } from "react-query";

import { Link } from "react-router-dom";
import { getAllCountry } from "../../services/api/shared";
import { queryKeys } from "../../utils/queryKey";

import { routes } from "../../routes/routes";
import { countries } from "../../data/countries";
const style = {
  container: `w-[80%] m-auto my-10`,
  textContainer: `flex items-center text-center flex-col`,
  gridContainer: `gri grid-cols-1 grid-cols-2 `,
  image: `w-full h-full object-cover relative rounded`,
  title: `text-[36px] tracking-wide `,
  description: `text-[#999] text-[16px] mb-10 mt-5 tracking-widest `,
  gridItem: `relative rounded  h-[400px] object-cover`,
  hr: `m-5`,

  text: `text-white uppercase 
  font-[500] absolute z-50 top-0 bottom-0 
  left-0 right-0 hover:bg-gradient-to-tl 
  from-black 
  bg-fixed flex items-end 
   justify-center transistion 
  ease-out duration-1000 rounded`,
  overlay: `h-full w-full top-0 left-0 absolute bg-gradient-to-tl from-black bg-fixed`,
};
const CountriesCard: FC = () => {
  const { data: countries, error } = useQuery(
    [queryKeys.countries],
    getAllCountry
  );
  const countriesResult = countries?.data || [];
  return (
    <>
      {countriesResult.length !== 0 ? (
        <div className={style.container}>
          <div className={style.textContainer}>
            <h1 className={style.title}>
              Exceptional properties around the world
            </h1>
            <p className={style.description}>
              Great cities or exclusive localities. Choose the luxury that suits
              you.
            </p>
          </div>
          <div className="gridContainer">
            {countriesResult
              .slice(0, 7)
              .map((countries: any, index: number) => (
                <Link
                  to={`${routes.properties}/${countries.name}`}
                  key={countries._id}
                  className="gridItem"
                >
                  {/* <div className="gridItem"> */}
                  <LazyLoadImage
                    src={countries.image}
                    alt={countries.name}
                    className={style.image}
                    
                    data-aos={
                      index === 0
                        ? "fade-right"
                        : index === 1
                        ? "fade-left"
                        : index === 2 
                        ? "zoom-in"
                        : index === 3 
                        ? "zoom-out"
                        : index === 4 
                        ? "zoom-in"
                        : index === 5
                        ? "fade-right"
                        : index === 6
                        ? "fade-left"
                        : null
                    }
                    data-aos-easing="ease-in-out"
                    data-aos-duration={
                      index === 0
                        ? "2000"
                        : index === 1
                        ? "3500"
                        : index === 2
                        ? "5000"
                        : index === 3
                        ? "7000"
                        : index === 4
                        ? "9000"
                        : index === 5
                        ? "2200"
                        : index === 6
                        ? "2500"
                        : null
                    }
                  />
                  <p className={style.text}>
                    <span className={style.hr}>{countries.name}</span>
                  </p>
                  {/* </div> */}
                </Link>
              ))}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CountriesCard;
{
  /* <LazyLoadImage
src={countries.attributes.image}
alt={countries.attributes.name}
className={style.image}
/> */
}
