import { FC, memo } from "react";
import Link from "next/link";

import Card from "components/Utils/layout/Card";
import { IExperience } from "types/business.types";

const EEexperience: FC<IExperience> = (exp) => (
  <>
    <Link className="sectionCard" href={`/experience/${exp.id}`}>
      <Card
        image={exp.image}
        title={exp.title}
        icon={exp.icon}
        caption={exp.company}
        color={exp.light}
      />
    </Link>
  </>
);

export default memo(EEexperience);
