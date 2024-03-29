import { FC, Suspense, lazy, useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes/routes";
import { useAuth } from "./lib/auth";
import AOS from "aos";
import "aos/dist/aos.css";
import Layout from "./Layout/Layout";
import HomePageLayout from "./Layout/HomePageLayout";
import DashBoardLayout from "./Layout/DashBoard/DashBoardLayout";
import AdvertService from "./pages/advertServices/advertServices";
import Continents from "./pages/Continents/Continents";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Countries from "./pages/Countries/Countries";
import Properties from "./pages/properties/properties";
import Property from "./pages/property/property";
import AllProperties from "./pages/allProperties/allProperties";
import DashBoard from "./pages/dashBoard/dashBoard";
import Upload from "./pages/dashBoard/pages/uploads/upload";
import ListingStats from "./pages/dashBoard/pages/ListingStats";
import ListingManager from "./pages/dashBoard/pages/ListingManaga/ListingManager";
import Profile from "./pages/dashBoard/pages/profile/profile";
import Settings from "./pages/dashBoard/pages/settings";
import DashboardProperties from "./pages/dashBoard/pages/Properties/Properties";
import TrackLisiting from "./pages/dashBoard/pages/trackLisiting";
import PageLoading from "./components/UI/Loading/PageLoading";
const App: FC = () => {
  const [Loading, setLoading] = useState(true);
  const { user, logout } = useAuth();
  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 1000);
  // }, []);
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
          <Suspense fallback={<PageLoading />}>
            <Routes>
              <Route path="" element={<HomePageLayout />}>
                <Route path={routes.home} element={<Home />} />
              </Route>
              <Route path="" element={<Layout />}>
                <Route path={routes.contact} element={<Contact />} />
                {/* <Route
                  path={`${routes.properties}`}
                  element={<AllProperties />}
                /> */}

                <Route
                  path={routes.advertServices}
                  element={<AdvertService />}
                />
                <Route path={routes.continents} element={<Continents />} />
                <Route
                  path={`${routes.countries}/:name`}
                  element={<Countries />}
                />
                <Route
                  path={`${routes.properties}/:countryName`}
                  element={
                    <Properties
                      displayproperties={undefined}
                      pageChange={undefined}
                      propertiesPerPage={0}
                      propertiesCount={0}
                    />
                  }
                />
                <Route path={`${routes.property}/:id`} element={<Property />} />
                {/* <Route path="/Continents/:id/Countries/:id/properties/id/property" element={<Property />} /> */}
              </Route>
              {/* {user ? ( */}
              <>
                <Route path="" element={<DashBoardLayout />}>
                  <Route path={routes.dashboard} element={<DashBoard />} />
                  <Route path={routes.upload} element={<Upload />} />
                  <Route
                    path={routes.lisitingManager}
                    element={<ListingManager />}
                  />
                  <Route
                    path={routes.lisitingStat}
                    element={<ListingStats />}
                  />
                  <Route
                    path={routes.tracklisiting}
                    element={<TrackLisiting />}
                  />
                  <Route path={routes.profile} element={<Profile />} />
                  <Route path={routes.settings} element={<Settings />} />
                  <Route
                    path={routes.dashboardProperties}
                    element={<DashboardProperties />}
                  />
                </Route>
              </>
              {/* ) : ( */}
              {/* <Route path="*" element={<HomePageLayout />}>
                <Route path={routes.home} element={<Home />} />
              </Route> */}
              {/* )} */}
            </Routes>
          </Suspense>
        </>
      )}
    </>
  );
};

export default App;
<Route path={`${routes.countries}/:id`} element={<Countries />} />;
