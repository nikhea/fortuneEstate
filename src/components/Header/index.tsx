import { FC } from "react";

import YoutubeVideo from "../youtubeVido/Youtube";

const style = {
  p:`absolute`
}
const index: FC = () => {
  return (
    <div>
        <YoutubeVideo/>

        <h1>Hello</h1>
    </div>
  );
};

export default index;
