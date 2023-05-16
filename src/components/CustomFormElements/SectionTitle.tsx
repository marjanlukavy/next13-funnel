import Subtitle from "./Subtitle";
import Title from "./Title";
import { SectionTitleProps } from "./types";

const SectionTitle = ({ subTitle, title }: SectionTitleProps) => {
  return (
    <div className="mb-7">
      <Subtitle subTitle={subTitle} />
      <Title title={title} />
    </div>
  );
};

export default SectionTitle;
