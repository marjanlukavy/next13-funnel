import React from "react";
import Title from "../CustomFormElements/Title";
import AddNewProject from "./AddNewProject";
import CreateProject from "./CreateProject";
import ProjectDetails from "./ProjectDetails";

const Steps = ({ currentStep }: { currentStep: number }) => {
  switch (currentStep) {
    case 1:
      return <AddNewProject />;
    case 2:
      return <ProjectDetails />;
    case 3:
      return <CreateProject />;
  }
};

export default Steps;
