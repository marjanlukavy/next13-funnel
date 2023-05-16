"use client";
import React from "react";
import useStepper from "../hooks/useStepper";
import Steps from "./Steps";

const MainSection = () => {
  const { currentStep } = useStepper();

  return (
    <div className="md:p-14 px-4 pt-0 md:pt-24 bg-[#101313] h-screen grow">
      <div className="max-w-[680px]">
        <Steps currentStep={currentStep} />
      </div>
    </div>
  );
};

export default MainSection;
