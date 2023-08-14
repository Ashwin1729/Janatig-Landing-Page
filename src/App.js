import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Fact from "./components/Fact";
import WorkDivider from "./components/WorkDivider";

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
    </div>
  );
}

export default App;
