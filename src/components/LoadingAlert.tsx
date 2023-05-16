import React from "react";

const LoadingAlert = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-dark">
      <div className="px-3 py-2 text-[36px] font-medium leading-none text-center text-dark animate-pulse dark:text-blue-200">
        Loading...
      </div>
    </div>
  );
};

export default LoadingAlert;
