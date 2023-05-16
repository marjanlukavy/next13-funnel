import useAddNewProject from "@/hooks/useAddNewProject";
import { RADIO_OPTIONS } from "@/shared/constants";
import React from "react";
import CustomInput from "../../CustomFormElements/CustomInput";
import Title from "../../CustomFormElements/Title";
import RadioList from "../../RadioList";

const ProductType = () => {
  const { projectData, updateProjectData } = useAddNewProject();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    updateProjectData("contactEmail", value);
  };
  return (
    <div className="flex flex-col gap-4">
      <Title title={"Are you pre or post product launch?"} className="mt-7" />
      <RadioList
        radioOptions={RADIO_OPTIONS}
        classname="gap-6"
        radioBoxKey="productType"
      />
      <Title title={"Contact Email"} />
      <CustomInput
        required
        pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
        type="email"
        value={projectData.contactEmail}
        placeholder="awesomenft@gmail.com"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default ProductType;
