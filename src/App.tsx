import { FC, Suspense } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes/routes";
import Spinner from "./components/UI/spinner/spinner";
import Layout from "./Layout/Layout";
import AdvertService from "./pages/advertServices/advertServices";
import Continents from "./pages/Continents/Continents";
import Blog from "./pages/Blog/blog";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Countries from "./pages/Countries/Countries";
import Properties from "./pages/properties/properties";
import Property from "./pages/property/property";

const App: FC = () => {
  return (
    <Layout>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.contact} element={<Contact />} />
          <Route path={routes.advertServices} element={<AdvertService />} />
          <Route path={routes.blog} element={<Blog />} />
          <Route path={routes.continents} element={<Continents />} />
          <Route
            path={`${routes.countries}/:CountinentName/:id`}
            element={<Countries />}
          />
          <Route path={`${routes.properties}/:countryName/:id`} element={<Properties />} />
          <Route path={routes.property} element={<Property />} />

          {/* <Route path="/Continents/:id/Countries/:id/properties/id/property" element={<Property />} /> */}
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
<Route path={`${routes.countries}/:id`} element={<Countries />} />;
