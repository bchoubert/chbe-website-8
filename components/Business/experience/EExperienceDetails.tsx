import { FC, memo } from "react";

import EDetails from "components/Business/details/EDetails";
import FullCard from "components/Utils/FullCard";

import { IExperience } from "types";

const EExperienceDetails: FC<IExperience> = (experience) => (
  <>
    <FullCard image={experience.image} color={experience.light}>
      <div>
        <h2>{experience.title}</h2>
        <h3 style={{ color: experience.color, fontWeight: "normal" }}>
          {experience.company}
        </h3>
      </div>
    </FullCard>
    <EDetails experience={experience} />
    <style jsx>{``}</style>
  </>
);

export default memo(EExperienceDetails);
