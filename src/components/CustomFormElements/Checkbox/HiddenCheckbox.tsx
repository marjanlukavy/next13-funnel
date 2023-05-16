import { HiddenCheckboxProps } from "../types";

const HiddenCheckbox = ({ isChecked, onChange }: HiddenCheckboxProps) => {
  return (
    <input
      type="checkbox"
      checked={isChecked}
      onChange={onChange}
      style={{ display: "none" }}
    />
  );
};

export default HiddenCheckbox;
