import { FC } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NewsLetter from "./components/Newsletter/newsletter";
import HouseBanner from "./components/HouseBanner/HouseBanner";
import Social from "./components/social";
import Footer from "./components/footer/footer";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import AdvertService from "./pages/advertServices/advertServices";

const App: FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/advertservice" element={<AdvertService />} />
        <Route path="/advertservice" element={<AdvertService />} />
      </Routes>
      <NewsLetter />
      <HouseBanner />
      <Social />
      <Footer />
    </div>
  );
};

export default App;
