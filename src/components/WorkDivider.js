import React from "react";
import leftArrow from "../assets/leftArrow.png";
import rightArrow from "../assets/rightArrow.png";

const WorkDivider = () => {
  return (
    <div className="flex justify-between items-center w-full p-10 mx-3 my-5 font-kamerik-105">
      <div className="font-[700] text-[96px]">how it works</div>
      <div className="flex justify-between items-center">
        <img src={rightArrow} alt="right Arrow" className="mx-4" />
        <img src={leftArrow} alt="left Arrow" className="mx-4" />
      </div>
      <div className="font-[700] text-[96px]">how it works</div>
    </div>
  );
};

export default WorkDivider;
