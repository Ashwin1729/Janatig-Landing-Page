import React from "react";
import banner_img from "../assets/banner_img.png";
import Brands from "./Brands";
import HeroText from "./HeroText";

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full p-3 mx-3 my-10 font-kamerik-105">
      <HeroText />

      {/* Banner Image */}
      <div className="flex justify-center items-center my-14">
        <img src={banner_img} alt="banner_img" className="w-full" />
      </div>

      <Brands />
    </div>
  );
};

export default HeroSection;
