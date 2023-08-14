import React from "react";

const FeatureCard = ({ image, title, content }) => {
  return (
    <div className="flex flex-col justify-between items-start px-8 py-10 border-2 border-black rounded-3xl h-[460px] w-[413px]">
      <div className="w-24 h-24 font-[700] text-8xl">{image}</div>
      <div className="text-[#333232]">
        <div className="font-[700] text-[40px] italic">{title}</div>
        <div className="font-normal text-2xl leading-none">{content}</div>
      </div>
    </div>
  );
};

export default FeatureCard;
