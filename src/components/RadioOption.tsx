import React from "react";
import { RadioOptionProps } from "./types";

const RadioOption = ({ checked, label, onChange }: RadioOptionProps) => {
  return (
    <label className="flex items-center">
      <input
        type="radio"
        name="option"
        value={label}
        checked={checked}
        onChange={onChange}
        className="bg-[#101313] border border-inputDark checked:border-inputDark text-transparent w-6 h-6 focus:ring-0"
      />
      <div className="cursor-pointer">
        <span className="text-white ml-2 text-[16px] leading-[22px]">
          {label}
        </span>
      </div>
    </label>
  );
};

export default RadioOption;
