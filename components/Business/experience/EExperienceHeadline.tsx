import FullCard from "components/Utils/layout/FullCard";
import IconWithText from "components/Utils/content/IconWithText";
import { FC, memo } from "react";
import { IExperience } from "types/business.types";

interface EExperienceHeadlineProps {
  object: IExperience;
}

const EExperienceHeadline: FC<EExperienceHeadlineProps> = ({ object }) => {
  return (
    <FullCard image={object.image} color={object.light}>
      <div>
        <h2>{object.title}</h2>
        <IconWithText
          icon={object.icon}
          title={object.company}
          options={{
            isInline: true,
            isWhiteBackground: true,
          }}
        />
      </div>
    </FullCard>
  );
};

export default memo(EExperienceHeadline);
