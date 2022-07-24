import { FC, memo } from "react";

import EDetails from "components/Business/details/EDetails";
import FullCard from "components/Utils/FullCard";

import { IWork } from "types";

const EWorkDetails: FC<IWork> = (work) => (
  <>
    <FullCard image={work.image} color={work.light}>
      <div>
        <h2>{work.title}</h2>
        <h3 className="shortDescription">{work.shortDescription}</h3>
      </div>
    </FullCard>
    <div>
      <EDetails work={work} />
    </div>
    <style jsx>{`
      .shortDescription {
        color: ${work.color};
        fontweight: normal;
      }
    `}</style>
  </>
);

export default memo(EWorkDetails);
