import React from "react";
import billboard from "../assets/billboard.png";

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
        <div className="flex justify-between items-center w-3/5">
          <div className="flex justify-center items-center rounded-full w-[97px] h-[97px] border-2 border-black">
            <div className=" font-[400] text-[48px]">01</div>
          </div>
          <div className="flex flex-col justify-center items-start mb-6">
            <div className="font-[700] text-[48px]">apply</div>
            <div className="font-[700] text-[16px] w-[250px]">
              Select a plan and schedule an onboarding call to get started.
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center w-3/5">
          <div className="border-dashed border-l-2 border-black h-[200px] w-full mx-12"></div>
        </div>

        <div className="flex justify-between items-center w-3/5">
          <div className="flex justify-center items-center rounded-full w-[97px] h-[97px] border-2 border-black">
            <div className=" font-[400] text-[48px]">02</div>
          </div>
          <div className="flex flex-col justify-center items-start mb-6">
            <div className="font-[700] text-[48px]">review</div>
            <div className="font-[700] text-[16px] w-[250px]">
              We’ll review your request and get back to you in 2-3 business days
              on average.
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center w-3/5">
          <div className="border-dashed border-l-2 border-black h-[200px] w-full mx-12"></div>
        </div>

        <div className="flex justify-between items-center w-3/5">
          <div className="flex justify-center items-center rounded-full w-[97px] h-[97px] border-2 border-black">
            <div className=" font-[400] text-[48px]">03</div>
          </div>
          <div className="flex flex-col justify-center items-start mb-6">
            <div className="font-[700] text-[48px]">iterate</div>
            <div className="font-[700] text-[16px] w-[250px]">
              We'll revise and continuously iterate to get better results,
              everytime
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisingSteps;
