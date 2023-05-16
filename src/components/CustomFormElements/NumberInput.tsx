import useAddNewProject from "@/hooks/useAddNewProject";
import { ProjectKeys } from "./types";

const NumberInput = () => {
  const { projectData, updateProjectData } = useAddNewProject();

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "-" || projectData.workersNumber < 0) {
      event.preventDefault();
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Math.max(parseInt(event.target.value), 0);
    updateProjectData(ProjectKeys.WorkersNumber, newValue);
  };

  const handleIncrement = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    updateProjectData(ProjectKeys.WorkersNumber, projectData.workersNumber + 1);
  };

  const handleDecrement = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    updateProjectData(
      ProjectKeys.WorkersNumber,
      Math.max(projectData.workersNumber - 1, 0)
    );
  };

  return (
    <div className="flex items-center gap-4">
      <button
        className="px-[19px] py-[13px] bg-backButton rounded-md text-white hover:bg-gray-900 transition-colors duration-200"
        onClick={handleDecrement}
      >
        -
      </button>
      <input
        required
        className="w-full py-3 px-4 focus:outline-none bg-dark border border-inputDark rounded-md text-white md:w-24 text-center"
        type="number"
        value={projectData.workersNumber || 1}
        onKeyPress={handleKeyPress}
        onChange={handleInputChange}
      />
      <button
        className="px-[19px] py-[13px] bg-backButton rounded-md text-white hover:bg-gray-900 transition-colors duration-200"
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
};

export default NumberInput;
