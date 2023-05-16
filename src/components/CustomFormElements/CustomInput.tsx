import React from "react";
import { CustomInputProps } from "./types";

const CustomInput = ({
  label,
  boldLabel,
  className,
  ...rest
}: CustomInputProps) => {
  return (
    <div className="flex flex-col">
      {label ? (
        <label className="text-white mb-1 text-[16px] leadin-[22px]">
          <span className="font-medium">{boldLabel}</span> {label}
        </label>
      ) : null}
      <input
        {...rest}
        className={`bg-[#101313] border border-solid border-white border-opacity-10 outline-none rounded-lg px-4 py-3 text-white text-[16px] leading-[22px] placeholder-white ${className}`}
      />
    </div>
  );
};

export default CustomInput;
