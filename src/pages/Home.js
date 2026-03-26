import React from "react";
import Hero from "../pages/Hero/Hero"; // adjust path if needed
import Features from "./pricing/FeaturesSection/FeaturesSection";
import NetworkStatus from "./MapSection/NetworkStatus";
import MapSection from "./MapSection/MapSection";
import OurServices from "./OurServices/Services";
import Entertainment from "./Entertainment/Entertainment";
import Contact from "./contact/Contact";
const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <OurServices />
      <NetworkStatus />
      <MapSection />
      <Entertainment />
      <Contact />
    </div>
  );
};

export default Home;