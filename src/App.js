import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Fact from "./components/Fact";
import WorkDivider from "./components/WorkDivider";
import AdvertisingSteps from "./components/AdvertisingSteps";
import Features from "./components/Features";

function App() {
  return (
    <div
      className="flex flex-col justify-center items-center p-3 m-3
    "
    >
      <NavBar />
      <HeroSection />
      <Fact />
      <WorkDivider />
      <AdvertisingSteps />
      <Features />
    </div>
  );
}

export default App;
