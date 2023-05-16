export type StepProps = {
  index: number;
  label: string;
  isActive: boolean;
  isComplete: boolean;
  isLastStep: boolean;
};

export enum StorageEnum {
  Projects = "projects",
}
