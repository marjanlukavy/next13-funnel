"use client";
import { useContext } from "react";
import { StepperContext } from "../providers/StepperProvider";

const useStepper = () => {
  const context = useContext(StepperContext);
  if (!context) {
    throw new Error("useStepper must be used within a StepperProvider");
  }
  return context;
};

export default useStepper;
