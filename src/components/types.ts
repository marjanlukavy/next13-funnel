import { Dispatch, SetStateAction, ChangeEvent } from "react";

export type ToolkitProps = {
  message: string;
  children: React.ReactNode;
};

export interface RadioOptionProps {
  checked: boolean;
  label: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

// RadioList types
export type RadioOption = {
  label: string;
};

export type RadioOptions = RadioOption[];

export type RadioListProps = {
  radioOptions: RadioOptions;
  classname?: string;
  radioBoxKey: string;
};

export type RadioList = ({
  radioOptions,
  classname,
  radioBoxKey,
}: RadioListProps) => JSX.Element;

// NavigationButtons types
export interface NavigationButtonsProps {
  isFirstStep?: boolean;
  onPrevious: () => void;
  onNext?: () => void;
  nextTitle?: string;
  className?: string;
}
