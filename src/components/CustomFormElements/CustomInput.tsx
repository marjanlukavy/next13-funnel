import React from "react";
import { CustomInputProps } from "./types";

const CustomInput = ({
  label,
  boldLabel,
  className,
  value,
  ...rest
}: CustomInputProps) => {
  const placeholder = rest.placeholder || "";
  const placeholderParts = placeholder.split("/");
  const firstPart = placeholderParts[0];

  return (
    <div className="flex flex-col">
      {label ? (
        <label className="text-white mb-1 text-[16px] leadin-[22px]">
          <span className="font-medium">{boldLabel}</span> {label}
        </label>
      ) : null}
      <span className="overflow-hidden relative">
        <input
          {...rest}
          value={value}
          placeholder={
            !placeholderParts.slice(1).join("/").length ? rest.placeholder : ""
          }
          className={`w-full bg-[#101313] border border-solid border-white border-opacity-10 outline-none rounded-lg px-4 py-3 text-white text-[16px] leading-[22px] placeholder-transparent ${className}`}
        />
        {typeof value === "string" &&
        value.length === 0 &&
        placeholderParts.slice(1).join("/").length ? (
          <span className="text-placeholderGray absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
            {firstPart}
            {placeholderParts.slice(1).join("/").length ? (
              <span className="text-white">
                /{placeholderParts.slice(1).join("/")}
              </span>
            ) : null}
          </span>
        ) : null}
      </span>
    </div>
  );
};

export default CustomInput;
