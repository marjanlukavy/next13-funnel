import useAddNewProject from "@/hooks/useAddNewProject";
import React, { Dispatch, SetStateAction } from "react";
import { RadioListProps } from "./types";

const RadioList = ({
  radioOptions,
  classname,
  radioBoxKey,
}: RadioListProps) => {
  const { updateProjectData, projectData } = useAddNewProject();

  const handleChange = (label: string): void => {
    updateProjectData(radioBoxKey, label);
  };

  return (
    <div className={`flex flex-col gap-6 ${classname}`}>
      {radioOptions.map((option) => (
        <label className="flex items-center" key={option.label}>
          <input
            required
            type="radio"
            name="option"
            value={option.label}
            checked={projectData[radioBoxKey] === option.label}
            onChange={() => handleChange(option.label)}
            className="bg-[#101313] border border-inputDark checked:border-inputDark text-transparent w-6 h-6 focus:ring-0"
          />
          <div className="cursor-pointer">
            <span className="text-white ml-2 text-[16px] leading-[22px]">
              {option.label}
            </span>
          </div>
        </label>
      ))}
    </div>
  );
};

export default RadioList;
