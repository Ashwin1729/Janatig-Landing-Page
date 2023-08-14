import React from "react";

const StepCard = ({ stepNo, title, description }) => {
  return (
    <div className="flex justify-between items-center w-3/5">
      <div className="flex justify-center items-center rounded-full w-[97px] h-[97px] border-2 border-black">
        <div className=" font-[400] text-[48px]">{stepNo}</div>
      </div>
      <div className="flex flex-col justify-center items-start mb-6">
        <div className="font-[700] text-[48px]">{title}</div>
        <div className="font-[700] text-[16px] w-[250px]">{description}</div>
      </div>
    </div>
  );
};

export default StepCard;
