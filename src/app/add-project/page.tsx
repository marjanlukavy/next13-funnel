import AsideBar from "@/components/AsideBar";
import MainSection from "@/components/MainSection";
import { AddNewProjectProvider } from "@/providers/AddNewProjectProvider";
import { StepperProvider } from "@/providers/StepperProvider";
import { Space_Grotesk } from "next/font/google";

export default function AddProject() {
  return (
    <StepperProvider>
      <AddNewProjectProvider>
        <div className={`flex flex-col md:flex-row`}>
          <AsideBar />
          <MainSection />
        </div>
      </AddNewProjectProvider>
    </StepperProvider>
  );
}
