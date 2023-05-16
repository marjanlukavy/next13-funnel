export type ProjectData = {
  projectName: string;
  projectUrl: string;
  mainGoal: string;
  projectCategory: string[];
  workersNumber: number;
  productType: string;
  contactEmail: string;
  [key: string]: string | number | string[];
};

export type ContextType = {
  projectData: ProjectData;
  updateProjectData: (
    key: string,
    newValue: string | number | string[]
  ) => void;
};
