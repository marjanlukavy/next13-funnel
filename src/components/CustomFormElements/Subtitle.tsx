import React from "react";
import { SubtitleProps } from "./types";

const Subtitle = ({ subTitle }: SubtitleProps) => {
  return (
    <span className="text-[14px] leading-[20px] md:text-[20px] md:leading-[24px] text-subTitleBlue tracking-tighter">
      {subTitle}
    </span>
  );
};

export default Subtitle;
