"use client";
import { createContext, useState } from "react";
import { ContextType, ProjectData } from "./types";

export const AddNewProjectContext = createContext<ContextType>({
  projectData: {
    projectName: "",
    projectUrl: "",
    mainGoal: "",
    projectCategory: [],
    workersNumber: 1,
    productType: "",
    contactEmail: "",
  },
  updateProjectData: () => {},
});

const AddNewProjectProvider = ({ children }: { children: React.ReactNode }) => {
  const [projectData, setProjectData] = useState<ProjectData>({
    projectName: "",
    projectUrl: "",
    mainGoal: "",
    projectCategory: [],
    workersNumber: 1,
    productType: "",
    contactEmail: "",
  });

  const updateProjectData = (
    key: string,
    newValue: string | number | string[]
  ) => {
    setProjectData((prevData) => ({
      ...prevData,
      [key]: newValue,
    }));
  };

  return (
    <AddNewProjectContext.Provider
      value={{
        projectData,
        updateProjectData,
      }}
    >
      {children}
    </AddNewProjectContext.Provider>
  );
};

export { AddNewProjectProvider };
