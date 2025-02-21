import React from "react";
import Navbar from "../components/Global/Navbar";
import Footer from "../components/Global/Footer";
import Hero from "../components/Home/Hero";
import Features from "../components/Home/Features";
import HowItWorks from "../components/Home/HowItWorks";
import AboutUs from "../components/Home/AboutUs";
import Contact from "../components/Home/Contact";
import StartRentingNow from "../components/Home/StartRentingNow";

const Home = () => {
  return (
    <div className="overflow-x-hidden overflow-y-auto">
      <Hero />
      {/* <Features /> */}
      {/* <HowItWorks /> */}
      <AboutUs />
      <Contact />
      {/* <StartRentingNow /> */}
    </div>
  );
};

export default Home;
