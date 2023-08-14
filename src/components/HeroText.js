import React, { useState, useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";

const text_list = ["Outreach", "Marketing"];

const HeroText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

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
      <div className="flex font-[700] text-[64px] -105 ml-[315px] leading-none">
        <TextTransition springConfig={presets.wobbly}>
          {text_list[index % text_list.length]}
        </TextTransition>
        <div className="mx-4">Problems</div>
      </div>
    </div>
  );
};

export default HeroText;
