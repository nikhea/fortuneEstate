import { Link } from "react-router-dom";
import Button from "../../../../../../components/UI/FormElement/Button";

const style = {
  header: `flex justify-between items-center`,
  h1: ` font-[500] text-[2rem] capitalize`,
};
const HeaderNavigation = () => {
  return (
    <div className={style.header}>
      <h1 className={style.h1}>Property List</h1>
      <Link to="/upload">
        <Button isCurve linearGradient uppercase primary padding full>
          <span className="mx-2"> +Add Property</span>
        </Button>
      </Link>
    </div>
  );
};

export default HeaderNavigation;
