import { FC, useEffect, useState } from "react";
import "./App.css";
import { useAuth } from "./lib/auth";
import AOS from "aos";
import "aos/dist/aos.css";
import PageLoading from "./components/UI/Loading/PageLoading";
import RouteComponents from "./RouteComponents";
const App: FC = () => {
  const [Loading, setLoading] = useState(true);
  const { user, logout } = useAuth();
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  useEffect(() => {
    // AOS.init();
    AOS.init({ duration: 2000 });
    AOS.refresh();
  }, []);
  return (
    <>
      {Loading ? (
        <PageLoading />
      ) : (
        <>
          <RouteComponents />
        </>
      )}
    </>
  );
};

export default App;
