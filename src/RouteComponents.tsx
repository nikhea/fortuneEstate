import { Suspense, useEffect } from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import { routes } from "./routes/routes";
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
import SubNav from "./Layout/Header/SubNav";
import Filiters from "./components/Filiters/FilitersLayout";
import PropertiesDetails from "./pages/dashBoard/pages/PropertiesDetails/PropertiesDetails";
import Maps from "./pages/map/Input";
import Agents from "./pages/dashBoard/pages/agents/Agents";
import AgentDetails from "./pages/dashBoard/pages/agentDetails/AgentDetails";
import ProfileUpdate from "./pages/dashBoard/pages/profileUpdate/profileUpdate";

const ScrollToTopPage = () => {
  const { pathname } = useLocation();
  // const location = useLocation();

  // const zoomOut = () => {
  //   document.body.style.transform = "scale(0.91)";
  // };

  // useEffect(() => {
  //   zoomOut();
  // }, [location.pathname]);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      // behavior: "smooth",
    });
  }, [pathname]);
  return null;
};
const RouteComponent = () => {
  return (
    <>
      <ScrollToTopPage />
      <Suspense fallback={<PageLoading />}>
        <Routes>
          <Route path="" element={<HomePageLayout />}>
            <Route path={routes.home} element={<Home />} />
            <Route path="/map" element={<Maps />} />
          </Route>
          <Route path="" element={<Layout />}>
            <Route path={routes.contact} element={<Contact />} />
            {/* <Route path={`${routes.properties}`} element={<AllProperties />} /> */}

            <Route path={routes.advertServices} element={<AdvertService />} />
            <Route path={routes.continents} element={<Continents />} />
            <Route path={`${routes.countries}/:name`} element={<Countries />} />

            <Route path={`${routes.property}/:id`} element={<Property />} />
            {/* <Route path="/Continents/:id/Countries/:id/properties/id/property" element={<Property />} /> */}
          </Route>
          <Route path="" element={<Filiters />}>
            <Route path={`${routes.properties}`} element={<AllProperties />} />
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
              <Route path={routes.lisitingStat} element={<ListingStats />} />
              <Route path={routes.tracklisiting} element={<TrackLisiting />} />
              <Route path={routes.profile} element={<Profile />} />
              <Route path={routes.profileUpdate} element={<ProfileUpdate />} />
              <Route path={routes.settings} element={<Settings />} />
              <Route
                path={routes.dashboardProperties}
                element={<DashboardProperties />}
              />
              <Route
                path={routes.dashboardPropertiesDetails}
                element={<PropertiesDetails />}
              />
              <Route path={routes.dashboardAgents} element={<Agents />} />
              <Route
                path={`${routes.dashboardAgentsDetails}/:AgentId`}
                element={<AgentDetails />}
              />
            </Route>
          </>
          {/* ) : ( */}
          {/* <Route path="*" element={<HomePageLayout />}>
      <Route path={routes.home} element={<Home />} />
    </Route> */}
          {/* )} */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

const NotFound = () => {
  return (
    <div>
      <h1>Oops! You seem to be lost.</h1>
      <p>Here are some helpful links:</p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default RouteComponent;
