"use client";
import useProjectData from "@/hooks/useProjectData";
import { PRODUCT_TABLE_HEADERS } from "@/shared/constants";

const ProjectCard = () => {
  const localProjectData = useProjectData();

  return (
    <div className=" overflow-x-auto">
      <table className="md:w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {PRODUCT_TABLE_HEADERS.map((title, index) => (
              <th key={index} scope="col" className="px-6 py-3">
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.values(localProjectData).map((project, index) => {
            const {
              projectName,
              projectUrl,
              mainGoal,
              projectCategory,
              workersNumber,
              productType,
              contactEmail,
            } = project;

            return (
              <tr
                key={index + workersNumber}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center"
              >
                <td>{index + 1}</td>
                <td className="px-6 py-4">{projectName}</td>
                <td className="px-6 py-4">{projectUrl}</td>
                <td className="px-6 py-4">{mainGoal}</td>
                <td className="px-6 py-4 ">{projectCategory.join(", ")}</td>
                <td className="px-6 py-4">{workersNumber}</td>
                <td className="px-6 py-4">{productType}</td>
                <td className="px-6 py-4">{contactEmail}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectCard;
