import { FC, Suspense, lazy } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes/routes";
import Spinner from "./components/UI/spinner/spinner";
import Layout from "./Layout/Layout";
import HomePageLayout from "./Layout/HomePageLayout";
import DashBoardLayout from "./Layout/DashBoardLayout";

import AdvertService from "./pages/advertServices/advertServices";
import Continents from "./pages/Continents/Continents";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Countries from "./pages/Countries/Countries";
import Properties from "./pages/properties/properties";
import Property from "./pages/property/property";
import DashBoard from "./pages/dashBoard/dashBoard";
import Upload from "./pages/dashBoard/pages/upload";
import ListingStats from "./pages/dashBoard/pages/ListingStats";
import ListingManager from "./pages/dashBoard/pages/ListingManager";
import Profile from "./pages/dashBoard/pages/profile";
import Settings from "./pages/dashBoard/pages/settings";
import DashboardProperties from "./pages/dashBoard/pages/Properties";
// import TrackLisiting from "./pages/dashBoard/pages/trackLisiting";
const TrackLisiting = lazy(
  () => import("./pages/dashBoard/pages/trackLisiting")
);

const App: FC = () => {
  return (
    <>
      {/* <Suspense fallback={<div><p>Loading...</p></div>}> */}
        <Routes>
          <Route path="" element={<HomePageLayout />}>
            <Route path={routes.home} element={<Home />} />
          </Route>
          <Route path="" element={<Layout />}>
            <Route path={routes.contact} element={<Contact />} />
            <Route path={routes.advertServices} element={<AdvertService />} />
            {/* <Route path={routes.dashboard} element={<DashBoard />} /> */}
            <Route path={routes.continents} element={<Continents />} />
            <Route
              path={`${routes.countries}/:CountinentName/:id`}
              element={<Countries />}
            />
            <Route
              path={`${routes.properties}/:countryName/:id`}
              element={<Properties />}
            />
            <Route path={routes.property} element={<Property />} />

            {/* <Route path="/Continents/:id/Countries/:id/properties/id/property" element={<Property />} /> */}
          </Route>
          <Route path="" element={<DashBoardLayout />}>
            <Route path={routes.dashboard} element={<DashBoard />} />
            <Route path={routes.upload} element={<Upload />} />
            <Route path={routes.lisitingManager} element={<ListingManager />} />
            <Route path={routes.lisitingStat} element={<ListingStats />} />
            <Route path={routes.tracklisiting} element={<TrackLisiting />} />
            <Route path={routes.profile} element={<Profile />} />
            <Route path={routes.settings} element={<Settings />} />
            <Route
              path={routes.dashboardProperties}
              element={<DashboardProperties />}
            />
          </Route>
        </Routes>
      {/* </Suspense> */}
    </>
  );
};

export default App;
<Route path={`${routes.countries}/:id`} element={<Countries />} />;
