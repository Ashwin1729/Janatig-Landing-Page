import React from "react";
import Button from "./Button";
import footer_logo from "../assets/footer_logo.png";

const Footer = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full p-3 mt-20 font-kamerik-105 bg-[#333232] h-[400px]">
        <div className="flex flex-col justify-between items-start w-1/2 h-full p-8 border-r-2 border-solid border-[#666666]">
          <div className="font-[700] text-[40px] text-white">
            <p>Let's Work</p>
            <p>Together</p>
          </div>
          <Button
            title="Get Started"
            style="flex items-center justify-center p-[16px] rounded-[10px] w-[130px] h-[51px] [background:linear-gradient(90.38deg,_#ffac75,_#fe6468_74.48%,_#ad71f2)] font-kamerik-105 font-[700] text-[16px] text-white cursor-pointer"
          />
        </div>
        <div className="flex flex-col justify-between items-start w-1/2 h-full px-14 py-10">
          <div>
            <div className="font-[700] text-[32px] text-white">Menu</div>
            <div className="font-[700] text-lg text-[#CBBFAC] my-1 cursor-pointer">
              How it Works
            </div>
            <div className="font-[700] text-lg text-[#CBBFAC] my-1 cursor-pointer">
              Services
            </div>
            <div className="font-[700] text-lg text-[#CBBFAC] my-1 cursor-pointer">
              Contact
            </div>
          </div>
          <div className="flex justify-start items-center">
            <img src={footer_logo} alt="header_logo" className="w-20 h-20" />
            <div className="font-[700] text-[32px] text-white pt-2 px-2 cursor-pointer">
              X.com
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center font-[700] p-4 text-lg bg-[#212121] text-[#6B6B6B]">
        Made with 🧡 by X.com
      </div>
    </>
  );
};

export default Footer;
