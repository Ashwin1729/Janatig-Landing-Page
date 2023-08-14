import React from "react";
import Button from "./utils/Button";

const CallSchedule = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full p-3 mx-3 my-10 font-kamerik-105">
      <div className="font-[700] text-[64px] text-[#333232]">
        Still not convinced?
      </div>
      <div className="font-normal text-xl text-[#5C5C5B] w-[500px] text-center leading-none ">
        Schedule a call to learn more about how we can change the way you view
        sourcing your ads...forever.
      </div>
      <Button
        title="Schedule a call"
        style="flex items-center justify-center p-[16px] my-8 rounded-[10px] w-[180px] h-[50px] [background:linear-gradient(90.38deg,_#ffac75,_#fe6468_74.48%,_#ad71f2)] font-kamerik-105 font-[700] text-[18px] text-white cursor-pointer"
      />
    </div>
  );
};

export default CallSchedule;
