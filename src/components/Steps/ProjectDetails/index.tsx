import useStepper from "@/hooks/useStepper";
import { PROJECT_DETAILS_OPTIONS } from "@/shared/constants";
import React from "react";
import CustomTitle from "../../CustomFormElements/SectionTitle";
import NavigationButtons from "../../NavigationButtons";
import RadioList from "../../RadioList";

const ProjectDetails = () => {
  const { handlePreviousStep, handleNextStep } = useStepper();

  return (
    <>
      <CustomTitle
        subTitle="Project Details"
        title="What is your main goal with AlphaQuest?"
      />
      <form onSubmit={handleNextStep}>
        <RadioList
          radioBoxKey="mainGoal"
          radioOptions={PROJECT_DETAILS_OPTIONS}
        />
        <NavigationButtons onPrevious={handlePreviousStep} />
      </form>
    </>
  );
};

export default ProjectDetails;
