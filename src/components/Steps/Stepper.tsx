"use client";
import useStepper from "@/hooks/useStepper";
import Step from "./Step";

const Stepper = () => {
  const { currentStep, complete, steps } = useStepper();

  return (
    <div className="flex flex-row md:flex-col justify-center align-center md:items-start">
      {steps?.map((step, i) => (
        <Step
          key={i}
          index={i}
          label={step}
          isActive={currentStep === i + 1}
          isComplete={i + 1 < currentStep || complete}
          isLastStep={i === steps.length - 1}
        />
      ))}
    </div>
  );
};

export default Stepper;
