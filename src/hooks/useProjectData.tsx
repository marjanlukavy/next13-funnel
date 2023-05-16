"use client";
import { useEffect, useState } from "react";

type ProjectData = {
  projectName: string;
  projectUrl: string;
  mainGoal: string;
  projectCategory: string[];
  workersNumber: number;
  productType: string;
  contactEmail: string;
};

const useProjectData = (): ProjectData[] => {
  const [data, setData] = useState<ProjectData[]>([]);

  useEffect(() => {
    const storedData = sessionStorage.getItem("projects");

    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setData(parsedData);
    }
  }, []);

  return data;
};

export default useProjectData;
