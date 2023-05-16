import React from "react";
import Title from "../CustomFormElements/Title";
import NavLink from "./NavLink";

const HomePage = () => {
  return (
    <div className="md:p-14 px-4 pt-0 md:pt-24 bg-[#101313] h-screen grow text-white flex flex-col items-start">
      <Title title={"Home"} />
      <div className="flex gap-2">
        <NavLink href={"/add-project"}>Add Project</NavLink>
        <NavLink href={"/list-of-projects"}>List Of Projects</NavLink>
      </div>
    </div>
  );
};

export default HomePage;
