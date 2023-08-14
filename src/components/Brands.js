import React from "react";
import canon from "../assets/brands/canon.png";
import radisson from "../assets/brands/radisson.png";
import solvv from "../assets/brands/solvv.png";
import butchershop from "../assets/brands/butchershop.png";

const Brands = () => {
  return (
    <div className="flex justify-between items-center w-full px-10 mx-10">
      <div className="font-[700] text-[32px] text-[#CBBFAC] leading-9">
        <p>Brands we've</p>
        <p>supported</p>
      </div>
      <img src={canon} alt="canon_logo" />
      <img src={radisson} alt="radisson_logo" />
      <img src={solvv} alt="solvv_logo" />
      <img src={butchershop} alt="butchershop_logo" />
    </div>
  );
};

export default Brands;
