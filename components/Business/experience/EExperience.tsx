import Link from 'next/link';
import { FC, memo } from 'react';

import { IExperience } from 'types/business.types';

import Card from 'components/Utils/layout/Card';

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
