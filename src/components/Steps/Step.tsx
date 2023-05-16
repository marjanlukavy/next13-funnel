import React from "react";
import { StepProps } from "./types";

const Step = ({
  index,
  label,
  isActive,
  isComplete,
  isLastStep,
}: StepProps) => (
  <div
    className={`flex flex-row md:flex-col items-center md:items-start ${
      isActive ? "active text-white" : ""
    } ${isComplete && "complete"}`}
  >
    <div className="flex items-center">
      <div
        className={`w-2 h-2 rounded-full ${
          isActive ? "bg-white" : isComplete ? "bg-blue-500" : "bg-step"
        }`}
      ></div>
      <p
        className={`ml-4 text-[14px] leading-[20px] ${
          isActive ? "text-white" : isComplete ? "text-blue-500" : "text-step"
        } hidden md:block`}
      >
        {label}
      </p>
    </div>
    <div className="md:w-2 flex justify-center">
      {!isLastStep && (
        <div
          className={`w-[25px] h-[1px] md:h-[25px] md:w-[1px] mx-1 md:mx-0 ${
            isComplete ? "bg-blue-500" : "bg-step"
          }`}
        ></div>
      )}
    </div>
  </div>
);

export default Step;
