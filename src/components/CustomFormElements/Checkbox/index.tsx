import useAddNewProject from "@/hooks/useAddNewProject";
import { CheckboxProps } from "../types";
import HiddenCheckbox from "./HiddenCheckbox";

const Checkbox = ({ label, id, handleCheckboxChange }: CheckboxProps) => {
  const { projectData } = useAddNewProject();

  const handleChange = () => {
    handleCheckboxChange(!isChecked, id);
  };

  const isChecked = projectData.projectCategory.includes(id);

  return (
    <label
      className={`px-3 py-1 rounded-full
      ${isChecked ? "bg-lightBlue" : "bg-whiteSmoke"}
   text-white cursor-pointer`}
    >
      <HiddenCheckbox isChecked={isChecked} onChange={handleChange} />
      {label}
    </label>
  );
};

export default Checkbox;
