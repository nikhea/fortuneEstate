import { FC } from "react";
import "./App.css";
import Header from "./components/Header";
import FilterCard from "./components/card/filterCard";
const App: FC = () => {
  return (
    <div>
      <Header />
      <FilterCard />
    </div>
  );
};

export default App;
