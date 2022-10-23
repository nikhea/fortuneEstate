import { FC } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NewsLetter from "./components/Newsletter/newsletter";
import HouseBanner from "./components/HouseBanner/HouseBanner";
import Social from "./components/social";
import Footer from "./components/footer/footer"
import AdvertService from "./pages/advertServices/advertServices";
import AllCountries from "./pages/allCountries/allCountries";
import Blog from "./pages/Blog/blog";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";

const App: FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/advertservice" element={<AdvertService />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/allcountries" element={<AllCountries />} />
      </Routes>
      <NewsLetter />
      <HouseBanner />
      <Social />
      <Footer />
    </div>
  );
};

export default App;
