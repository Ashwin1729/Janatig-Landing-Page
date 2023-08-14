import React from "react";
import billboard from "../assets/billboard.png";
import StepCard from "./utils/StepCard";
import StepDivider from "./utils/StepDivider";

const AdvertisingSteps = () => {
  return (
    <div className="flex justify-center items-center w-full p-3 mx-3 my-20 font-kamerik-105">
      <div className="w-1/2 p-5 m-5">
        <div className="font-[700] text-[64px] leading-none my-10">
          <p>Advertising</p>
          <p>Optimized</p>
        </div>
        <img src={billboard} alt="billboard" className="mt-20" />
      </div>
      <div className="w-1/2 p-5 m-5 mt-20 flex flex-col justify-center items-center">
        <StepCard
          stepNo="01"
          title="apply"
          description="Select a plan and schedule an onboarding call to get started."
        />

        <StepDivider />

        <StepCard
          stepNo="02"
          title="review"
          description="We’ll review your request and get back to you in 2-3 business days
          on average."
        />

        <StepDivider />

        <StepCard
          stepNo="03"
          title="iterate"
          description="We'll revise and continuously iterate to get better results,
          everytime."
        />
      </div>
    </div>
  );
};

export default AdvertisingSteps;
