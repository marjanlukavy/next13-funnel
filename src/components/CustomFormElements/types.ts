import { InputHTMLAttributes } from "react";

export type onClickHandler = (
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => void;

export interface CustomButtonProps {
  children: React.ReactNode;
  onClick?: onClickHandler;
  className?: string;
}

export type HiddenCheckboxProps = {
  isChecked: boolean;
  onChange: () => void;
};

export type CheckboxProps = {
  label: string;
  id: string;
  handleCheckboxChange: (isChecked: boolean, id: string) => void;
};

export type CheckboxListProps = {
  boldLabel: string;
  label: string;
  setCheckboxes?: () => void;
  errorMessage?: string;
};

export interface CustomInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  boldLabel?: string;
  className?: string;
}

export interface CustomLabelProps {
  title: string;
  boldLabel: string;
  errorMessage?: string;
}

export interface SectionTitleProps {
  subTitle: string;
  title: string;
}

export interface SubtitleProps {
  subTitle: string;
}

export interface TitleProps {
  title: string;
  className?: string;
}
