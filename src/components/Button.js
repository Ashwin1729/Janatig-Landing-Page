import React from "react";

const Button = ({ title }) => {
  return (
    <div className="flex items-center justify-center p-[16px] rounded-[10px] w-[130px] h-[51px] [background:linear-gradient(90.38deg,_#ffac75,_#fe6468_74.48%,_#ad71f2)] font-kamerik-105 font-[700] text-[16px] text-white">
      {title}
    </div>
  );
};

export default Button;
