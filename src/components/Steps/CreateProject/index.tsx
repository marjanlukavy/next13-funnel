import React, { useState } from "react";
import CustomTitle from "../../CustomFormElements/SectionTitle";
import NumberInput from "../../CustomFormElements/NumberInput";
import ProductType from "./ProductType";
import NavigationButtons from "../../NavigationButtons";
import useStepper from "@/hooks/useStepper";
import { useRouter } from "next/navigation";
import useAddNewProject from "@/hooks/useAddNewProject";
import { StorageEnum } from "../types";

const CreateProject = () => {
  const router = useRouter();
  const { handlePreviousStep } = useStepper();
  const { projectData } = useAddNewProject();
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCreateProject = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const existingDataString = sessionStorage.getItem(StorageEnum.Projects);
    const existingData = existingDataString
      ? JSON.parse(existingDataString)
      : [];
    const combinedData = [...existingData, projectData];

    sessionStorage.setItem(StorageEnum.Projects, JSON.stringify(combinedData));
    setIsSuccess(true);

    setTimeout(() => {
      setIsSuccess(false);
      router.push("/");
    }, 800);
  };

  return (
    <div>
      <CustomTitle
        subTitle="Create Project"
        title="How many full-time workers on the project?"
      />
      <form onSubmit={handleCreateProject}>
        <NumberInput />
        <ProductType />
        <NavigationButtons
          onPrevious={handlePreviousStep}
          nextTitle={isSuccess ? "Successful" : "Create Project"}
          className={isSuccess ? "bg-green-500 mt-4 hover:bg-green-500" : ""}
        />
      </form>
    </div>
  );
};

export default CreateProject;
