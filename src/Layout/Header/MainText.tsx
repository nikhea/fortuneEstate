import { FC } from "react";
import Button from "../../components/UI/FormElement/Button";
import { Link } from "react-router-dom";
import { routes } from "../../routes/routes";
import CardFiliter from "./CardFiliter";
import { useQuery } from "react-query";
import { queryKeys } from "../../utils/queryKey";
import { getAllCountry } from "../../services/api/shared";
import { countriesPlaceHolderData } from "../../data/countriesPlaceHolderData";
const style = {
  container: `flex  w-[95%]  m-auto flex-col items-center justify-center h-full text-center  `,
  title: `text-[3rem] lg:text-[5.5rem] font-light`,
  subTitle: `text-5xl lg:text-8xl font-light font-bold`,
  text: `text-lg font-light my-2 tracking-widest`,
  btn: ` mt-5 `,
};
const MainText: FC = () => {
  const { data: countries, isLoading } = useQuery<any>(
    [queryKeys.countries],
    getAllCountry,
    {
      placeholderData: countriesPlaceHolderData,
    }
  );
  return (
    <div className={style.container}>
      <h1
        // data-aos="fade-up"
        // data-aos-easing="ease-in-out"
        // data-aos-duration="1600"
        className={style.title}
      >
        The Largest Real Estate <br />
      </h1>
      <span
        // data-aos="fade-up"
        // data-aos-easing="ease-in-out"
        // data-aos-duration="1700"
        className={style.subTitle}
      >
        Online Marketplace
      </span>
      <span
        // data-aos="fade-up"
        // data-aos-easing="ease-in-out"
        // data-aos-duration="1800"
        className={style.text}
      >
        Find the best property that suits your desires using advanced search
        widget
      </span>
      <CardFiliter countries={countries} />

      {/* <Link
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-duration="2000"
        to={routes.continents}
      >
        <Button linearGradient rounded uppercase primary>
          explore countries
        </Button>
      </Link> */}
    </div>
  );
};

export default MainText;
