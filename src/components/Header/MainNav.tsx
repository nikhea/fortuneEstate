import { FC } from "react";
import { Link } from "react-router-dom";
const style = {
  container: ` flex justify-between w-[95%]  m-auto my-3 text-center items-center`,
  lists: `capitalize flex justify-between mr-[100px]`,
  list: ` mx-[35px] text-center items `,
  logo: `w-[200px]`,
  btn:`uppercase bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full px-9 py-2 tracking-widest`

};
const MainNav: FC = () => {
  return (
    <div className={style.container}>
      <div className={style.logo}>
        <img src="https://www.thehouse48.com/wp-content/uploads/2021/11/cropped-H48-1280x400-1.png" />
      </div>

      <ul className={style.lists}>
        <li className={style.list}>
          <Link to="/">home</Link>
        </li>
        <li className={style.list}>
          <Link to="/">all countries</Link>
        </li>
        <li className={style.list}>
          <Link to="/">contact us</Link>
        </li>
        <li className={style.list}>
          <Link to="/">blog</Link>
        </li>
        <li className={style.list}>
          <Link to="/">advert services</Link>
        </li>
      </ul>

      <button className={style.btn}>adverties</button>
    </div>
  );
};

export default MainNav;
