import { FC, Suspense } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Spinner from "./components/UI/spinner/spinner";
import Layout from "./Layout/Layout";
import AdvertService from "./pages/advertServices/advertServices";
import Continents from "./pages/Continents/Continents";
import Blog from "./pages/Blog/blog";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Countries from "./pages/Countries/Countries";
import Properties from "./pages/properties/properties";

const App: FC = () => {
  return (
    <Layout>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/advertservice" element={<AdvertService />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/Continents" element={<Continents />} />
          <Route path="/:id/Countries" element={<Countries />} />
          <Route path="/:id/properties" element={<Properties />} />
          {/* <Route path="/Continents/:id/Countries/:id/properties/id/property" element={<Property />} /> */}
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
