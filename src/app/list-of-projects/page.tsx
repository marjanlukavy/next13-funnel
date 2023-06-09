import NavLink from "@/components/HomePage/NavLink";
import ProjectCard from "@/components/HomePage/ProjectCard";
import React from "react";

const ListOfProjects = () => {
  return (
    <div className="md:p-14 px-4 pt-0 md:pt-24 bg-[#101313] h-screen grow text-white flex flex-col items-start">
      <NavLink href={"/"}>Go Home</NavLink>
      <div className="flex gap-2 flex-col md:items-center justify-center w-full overflow-auto mt-2">
        <ProjectCard />
      </div>
    </div>
  );
};

export default ListOfProjects;
