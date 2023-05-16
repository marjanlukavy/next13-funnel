import useAddNewProject from "@/hooks/useAddNewProject";
import useStepper from "@/hooks/useStepper";
import { formInputs } from "@/mocks/mockData";
import React, { useState } from "react";
import CustomButton from "../../CustomFormElements/CustomButton";
import CheckboxList from "../../CustomFormElements/CustomCheckbox";
import CustomInput from "../../CustomFormElements/CustomInput";
import CustomTitle from "../../CustomFormElements/SectionTitle";

const AddNewProject = () => {
  const { projectData, updateProjectData } = useAddNewProject();
  const { handleNextStep } = useStepper();
  const [checkboxError, setCheckboxError] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    updateProjectData(name, value || "");
  };

  const handleAddProject = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (projectData.projectCategory.length > 0) {
      handleNextStep();
    } else {
      setCheckboxError("Please check the checkbox");
    }
  };

  return (
    <>
      <CustomTitle
        subTitle="To Create Quest you need firstly create Project"
        title="Add New Project"
      />
      <form onSubmit={handleAddProject}>
        <div className="flex flex-col gap-7">
          {formInputs.map((input) => (
            <CustomInput
              required
              key={input.name}
              name={input.name}
              label={input.label}
              boldLabel={input.boldLabel}
              type={input.type}
              placeholder={input.placeholder}
              onChange={handleInputChange}
              value={projectData[input.name]}
            />
          ))}
          <CheckboxList
            label="(It cannot be changed after creation)"
            errorMessage={checkboxError}
            boldLabel="Project Category"
          />
        </div>

        <CustomButton>Add Project</CustomButton>
      </form>
    </>
  );
};

export default AddNewProject;
