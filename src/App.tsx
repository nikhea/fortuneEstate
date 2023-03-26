import { FC, useEffect, useState } from "react";
import "./App.css";
import { useAuth } from "./lib/auth";
import AOS from "aos";
import "aos/dist/aos.css";
import PageLoading from "./components/UI/Loading/PageLoading";
import RouteComponents from "./RouteComponents";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useQueryClient } from "react-query";
import { getAllCountry, getAllProperties } from "./services/api/shared";
import { queryKeys } from "./utils/queryKey";
const App: FC = () => {
  const queryClient = useQueryClient();
  const [Loading, setLoading] = useState(true);
  const { user, logout } = useAuth();
  useEffect(() => {
    const FetchCountry = async () => {
      await queryClient.prefetchQuery([queryKeys.countries], getAllCountry);
    };
    FetchCountry();
  }, []);
  // useEffect(() => {
  //   const FetchProperties = async () => {
  //     await queryClient.prefetchQuery([queryKeys.properties], getAllProperties);
  //   };
  //   FetchProperties();
  // }, []);
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
