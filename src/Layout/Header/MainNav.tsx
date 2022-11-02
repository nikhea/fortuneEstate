import { FC } from "react";
import { Link } from "react-router-dom";
import { routes } from "../../routes/routes";
import Button from "../../components/UI/FormElement/Button";
const style = {
  container: ` flex justify-between w-[95%]  m-auto my-3 text-center items-center mt-[4rem]`,
  lists: `capitalize hidden md:flex justify-between mr-[100px]`,
  list: ` mx-[35px] text-center items `,
  logo: `w-[200px]`,
  btn: `uppercase  rounded-full `,
};
const MainNav: FC = () => {
  return (
    <div className={style.container}>
      <Link to={routes.home} className={style.logo}>
        <img src="https://www.thehouse48.com/wp-content/uploads/2021/11/cropped-H48-1280x400-1.png" />
      </Link>

      <ul className={style.lists}>
        <li className={style.list}>
          <Link to={routes.home}>home</Link>
        </li>
        <li className={style.list}>
          <Link to={routes.continents}>all countries</Link>
        </li>
        <li className={style.list}>
          <Link to={routes.contact}>contact us</Link>
        </li>
        <li className={style.list}>
          <Link to={routes.blog}>blog</Link>
        </li>
        <li className={style.list}>
          <Link to={routes.advertServices}>advert services</Link>
        </li>
      </ul>

      <Button primary rounded linearGradient uppercase>
        adverties
      </Button>
    </div>
  );
};

export default MainNav;
