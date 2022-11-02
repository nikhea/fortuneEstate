import { FC } from "react";
import Button from "../../components/UI/FormElement/Button";
import { Link } from "react-router-dom";
import { routes } from "../../routes/routes";
const style = {
  container: `flex  w-[95%]  m-auto flex-col items-center justify-center h-[29em] text-center `,
  title: `text-[3rem] md:text-[5.5rem] font-light`,
  subTitle: `text-5xl md:text-8xl font-light font-bold`,
  text: `text-lg font-light my-2 tracking-widest`,
  btn: ` mt-5 `,
};
const MainText: FC = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>
        The Largest Real Estate <br />
        <span className={style.subTitle}>Online Marketplace</span>
      </h1>
      <span className={style.text}>
        Find the best property that suits your desires using advanced search
        widget
      </span>
      <Link to="/Continents">
        <Button linearGradient rounded uppercase primary>
          explore countries
        </Button>
      </Link>
    </div>
  );
};

export default MainText;
