import React from "react";
import { CustomLabelProps } from "./types";

const CustomLabel = ({ title, boldLabel, errorMessage }: CustomLabelProps) => {
  return (
    <label className="text-white mb-1 text-[16px] leadin-[22px]">
      {errorMessage ? (
        <span className="font-medium text-[red]">{errorMessage}</span>
      ) : (
        <>
          <span className="font-medium">{boldLabel}</span>&nbsp;
          {title}
        </>
      )}
    </label>
  );
};

export default CustomLabel;
