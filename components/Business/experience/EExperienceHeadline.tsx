import FullCard from "components/Utils/FullCard";
import IconWithText from "components/Utils/IconWithText";
import { FC, memo } from "react";
import { IExperience } from "types/business.types";

interface EExperienceHeadlineProps {
  object: IExperience;
}

const EExperienceHeadline: FC<EExperienceHeadlineProps> = ({ object }) => {
  return (
    <>
      <FullCard image={object.image} color={object.light}>
        <div>
          <h2>{object.title}</h2>
          <h3 className="company">
            <IconWithText icon={object.icon} title={object.company} isInline />
          </h3>
        </div>
      </FullCard>
      <style jsx>{`
        .company {
          font-weight: normal;
          background-color: #ffffff;
          display: inline-block;
          padding-right: 0.5rem;
        }
      `}</style>
    </>
  );
};

export default memo(EExperienceHeadline);
