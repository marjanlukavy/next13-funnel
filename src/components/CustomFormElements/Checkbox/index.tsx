import useAddNewProject from "@/hooks/useAddNewProject";
import { CheckboxProps } from "../types";
import HiddenCheckbox from "./HiddenCheckbox";

const Checkbox = ({ label, id, handleCheckboxChange }: CheckboxProps) => {
  const { projectData } = useAddNewProject();

  const handleChange = () => {
    handleCheckboxChange(!isChecked, id);
  };

  const isChecked = projectData.projectCategory.includes(id);

  const labelStyle = {
    padding: "6px 12px",
    background: isChecked
      ? "rgba(33, 122, 255, 0.1)"
      : "rgba(250, 250, 250, 0.1)",
    borderRadius: "16px",
    color: "#FAFAFA",
    cursor: "pointer",
  };

  return (
    <label style={labelStyle}>
      <HiddenCheckbox isChecked={isChecked} onChange={handleChange} />
      {label}
    </label>
  );
};

export default Checkbox;
