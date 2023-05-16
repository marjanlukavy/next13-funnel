import { AddNewProjectContext } from "@/providers/AddNewProjectProvider";
import { ContextType } from "@/providers/types";
import { useContext } from "react";

const useAddNewProject = (): ContextType => useContext(AddNewProjectContext);

export default useAddNewProject;
