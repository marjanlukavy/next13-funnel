"use client";
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

export interface StepperContextType {
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  complete: boolean;
  setComplete: Dispatch<SetStateAction<boolean>>;
  steps: string[];
  handleNextStep: () => void;
  handlePreviousStep: () => void;
}

const StepperContext = createContext<StepperContextType>({
  currentStep: 1,
  setCurrentStep: () => {},
  complete: false,
  setComplete: () => {},
  steps: [],
  handleNextStep: () => {},
  handlePreviousStep: () => {},
});

const StepperProvider = ({ children }: { children: React.ReactNode }) => {
  const steps = ["Start First Project", "Project Details", "Create Project"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

  const handleNextStep = () => {
    setCurrentStep((prev) => prev + 1);
    if (currentStep === steps.length - 1) {
      setComplete(true);
    }
  };

  const handlePreviousStep = () => {
    setCurrentStep((prev) => prev - 1);
    if (complete) {
      setComplete(false);
    }
  };

  const value: StepperContextType = {
    currentStep,
    setCurrentStep,
    complete,
    setComplete,
    steps,
    handleNextStep,
    handlePreviousStep,
  };

  return (
    <StepperContext.Provider value={value}>{children}</StepperContext.Provider>
  );
};

export { StepperContext, StepperProvider };
