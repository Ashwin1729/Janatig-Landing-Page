import React from "react";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full p-3 mx-3 my-16 font-kamerik-105">
      <div className="flex justify-between items-center w-full">
        <div className="flex justify-center items-center w-[45%]">
          <FeatureCard
            image="🙅🏻"
            title="Pause"
            content="want to take a break? Pause our services anytime"
          />
        </div>
        <div className="flex flex-col justify-center items-center w-3/5 ">
          <div className="font-[700] text-5xl italic text-[#333232]">
            <p>Why Choose us?</p>
            <p>What makes us different?</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full">
        <div className="flex justify-center items-center">
          <FeatureCard
            image="🏎️"
            title="Super Fast"
            content="See consistent work in action, super fast."
          />
        </div>
        <div className="flex justify-center items-center">
          <FeatureCard
            image="🎯"
            title="Built to perform"
            content="Our experienced team of market strategists make sure to come up with the best strategies"
          />
        </div>
        <div className="flex justify-center items-center">
          <FeatureCard
            image="🛠️"
            title="Tailored for you"
            content="Your experience with us will be customfit and exclusive to you"
          />
        </div>
      </div>
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col justify-center items-center w-3/5 "></div>
        <div className="flex justify-center items-center w-[45%]">
          <FeatureCard
            image="🏆"
            title="Premium quality"
            content="Get your ads run by professionals and revise until you're 100% satisfied"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
