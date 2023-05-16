import React, { ReactElement } from "react";
import CustomButton from "./CustomFormElements/CustomButton";
import { NavigationButtonsProps } from "./types";

const NavigationButtons = ({
  isFirstStep = true,
  onPrevious,
  onNext,
  nextTitle = "Continue",
  className,
}: NavigationButtonsProps): ReactElement => {
  return (
    <div className="flex md:mt-7">
      {isFirstStep ? (
        <CustomButton
          onClick={onPrevious}
          className="!max-w-[120px] bg-backButton text-whiteTint mr-4 md:mr-8"
        >
          Back
        </CustomButton>
      ) : null}

      <CustomButton onClick={onNext} className={className}>
        {nextTitle}
      </CustomButton>
    </div>
  );
};

export default NavigationButtons;
