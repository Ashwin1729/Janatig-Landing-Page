import React from "react";

const HeroText = () => {
  return (
    <div className="flex flex-col w-full my-10">
      <div className="font-[700] text-[64px] -105 ml-[205px] leading-tight">
        We'd love to help
      </div>
      <div className="flex">
        <div className="w-1/2 -105 font-[700] text-[64px] text-end">
          Solve Your
        </div>
        <div className="w-1.2">
          <p className="w-[270px] mx-14 font-[400] text-[16px] text-justify py-1">
            We know that you care about your business as much as we do, and
            we're committed to helping you grow
          </p>
        </div>
      </div>
      <div className="font-[700] text-[64px] -105 ml-[315px] leading-none">
        Outreach Problems
      </div>
    </div>
  );
};

export default HeroText;
