import React, { useState } from "react";
import { ToolkitProps } from "./types";

const ToolkitComponent = ({ message, children }: ToolkitProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="relative group">
      <div
        className={`absolute bg-gray-200 py-2 px-4 rounded shadow-md -top-8 left-0 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {message}
      </div>
      <div
        className="transition-opacity duration-300"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
    </div>
  );
};

export default ToolkitComponent;
