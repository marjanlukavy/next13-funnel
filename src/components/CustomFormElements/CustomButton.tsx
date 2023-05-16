"use client";
import React from "react";
import { CustomButtonProps } from "./types";

const CustomButton = ({ children, onClick, className }: CustomButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`mt-6 md:mt-[41px] w-full max-w-[328px] font-medium rounded-[10px] text-[16px] leading-[22px] py-3 px-6 text-center bg-[#2B8CE6] text-[#101313] hover:bg-[#2b8ce6c2] focus:outline-none ${className} `}
    >
      {children}
    </button>
  );
};

export default CustomButton;
