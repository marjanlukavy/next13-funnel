import React from "react";
import { TitleProps } from "./types";

const Title = ({ title, className }: TitleProps) => {
  return (
    <h2
      className={`text-white text-[32px] leading-[38px] font-medium mt-2 ${className}`}
    >
      {title}
    </h2>
  );
};

export default Title;
