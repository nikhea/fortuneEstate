import { FC } from "react";
import "./App.css";

import Footer from "./components/footer/footer";
import Home from "./pages/home/Home";

const style = {
  app: `relative `,
};
const App: FC = () => {
  return (
    <div className={style.app}>
      <Home />
      <Footer />
    </div>
  );
};

export default App;
