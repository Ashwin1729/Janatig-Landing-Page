import React from "react";
import Button from "./Button";
import header_logo from "../assets/header_logo.png";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center w-1/2 px-8 my-2 py-2 rounded-[30px] bg-white font-kamerik-105">
      <img src={header_logo} alt="header_logo" />
      <div className="flex justify-end items-center">
        <div className="mx-4 cursor-pointer font-[400] text-[16px]">
          How it works
        </div>
        <div className="mx-4 cursor-pointer">Services</div>
        <div className="mx-4 cursor-pointer">Contact</div>
      </div>
      <Button title="Get Started" />
    </div>
  );
};

export default NavBar;
