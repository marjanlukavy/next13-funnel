import useStepper from "@/hooks/useStepper";
import { projectDetailsOptions } from "@/mocks/mockData";
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
          radioOptions={projectDetailsOptions}
        />
        <NavigationButtons onPrevious={handlePreviousStep} />
      </form>
    </>
  );
};

export default ProjectDetails;
