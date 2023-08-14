import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div
      className="flex flex-col justify-center items-center p-3 m-3
    "
    >
      <NavBar />
      <HeroSection />
    </div>
  );
}

export default App;
