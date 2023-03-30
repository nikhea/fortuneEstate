import { FC, useEffect } from "react";
import "./countriesContainer.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
// import { useQuery } from "@tanstack/react-query";
import { useQuery, useQueryClient } from "react-query";

import { Link } from "react-router-dom";
import { getAllCountry } from "../../services/api/shared";
import { queryKeys } from "../../utils/queryKey";

import { routes } from "../../routes/routes";
import { countries } from "../../data/countries";
import PageLoading from "../UI/Loading/PageLoading";
import { countriesPlaceHolderData } from "../../data/countriesPlaceHolderData";
import { CountriesPlaceholderData } from "../../interfaces/countries";
const style = {
  container: `w-[95%] lg:w-[90%] m-auto my-10`,
  textContainer: `flex items-center text-center flex-col `,
  gridContainer: `gri grid-cols-1 grid-cols-2 `,
  image: `w-full h-full object-cover relative rounded`,
  title: `text-[25px] lg:text-[36px] tracking-wide `,
  description: `text-[#999] text-[16px] mb-10 mt-5 tracking-widest `,
  gridItem: `relative rounded  h-[400px] object-cover`,
  hr: `m-5`,

  text: `text-white uppercase 
   font-[500] absolute z-50 top-0 bottom-0 
   left-0 right-0 hover:bg-gradient-to-tl 
   from-black 
   bg-fixed flex items-end 
    justify-center transistion 
   ease-out duration-1000 rounded

  `,
  overlay: `h-full w-full top-0 left-0 absolute bg-gradient-to-tl from-black hidden hover:bg-fixed`,
};
// const { data: countries, isLoading } = useQuery(
//   [queryKeys.countries],
//   getAllCountry
// );
const CountriesCard: FC = () => {
  const { data: countries, isLoading } = useQuery<any>(
    [queryKeys.countries],
    getAllCountry,
    {
      placeholderData: countriesPlaceHolderData,
    }
  );
  // if (isLoading) {
  //   return <PageLoading />;
  // }
  const countriesResult = countries?.data || [];
  return (
    <>
      {countriesResult.length !== 0 ? (
        <div className={style.container}>
          <div className={style.textContainer}>
            <h1 className={style.title}>
              Exceptional Properties Around The World
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
                  {" "}
                  <LazyLoadImage
                    src={countries.image}
                    alt={countries.name}
                    className={style.image}
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
