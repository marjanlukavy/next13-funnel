"use client";

import useAddNewProject from "@/hooks/useAddNewProject";
import { checkboxListData } from "@/mocks/mockData";
import React from "react";
import Checkbox from "./Checkbox";
import CustomLabel from "./CustomLabel";
import { CheckboxListProps } from "./types";

const CheckboxList = ({
  boldLabel,
  label,
  errorMessage,
}: CheckboxListProps) => {
  const { projectData, updateProjectData } = useAddNewProject();

  const handleCheckboxChange = (isChecked: boolean, id: string) => {
    const newSelectedCheckboxes = isChecked
      ? [...projectData.projectCategory, id]
      : projectData.projectCategory.filter((checkbox) => checkbox !== id);
    console.log(newSelectedCheckboxes);

    updateProjectData("projectCategory", newSelectedCheckboxes);
  };

  return (
    <div className="flex flex-col gap-3">
      <CustomLabel
        title={label}
        boldLabel={boldLabel}
        errorMessage={errorMessage}
      />
      <div className={`flex gap-3 flex-wrap`}>
        {checkboxListData.map(({ id, label }) => (
          <Checkbox
            key={id}
            id={id}
            label={label}
            handleCheckboxChange={handleCheckboxChange}
          />
        ))}
      </div>
    </div>
  );
};

export default CheckboxList;
