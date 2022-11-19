import { FC } from "react";
import "./header.css"
import YoutubeVideo from "../../components/youtubeVido/Youtube";

const style = {};
const index: FC = () => {
  return (
    <div className="header">
      <YoutubeVideo />
    </div>
  );
};

export default index;
