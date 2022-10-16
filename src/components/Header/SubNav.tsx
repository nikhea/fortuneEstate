import { FC } from "react";
import { Link } from "react-router-dom";
const SubNav = () => {
  return (
    <div>
      <p>enquiry@thehouse48.com</p>
      <div>
        <div>
          <Link to={""}>sign in</Link> / <Link to={""}>register</Link>
        </div>
      </div>
    </div>
  );
};

export default SubNav;
