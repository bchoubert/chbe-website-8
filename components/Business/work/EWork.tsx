import Link from 'next/link';
import { FC, memo } from 'react';

import { IWork } from 'types/business.types';

import Card from 'components/Utils/layout/Card';

const EWork: FC<IWork> = (work) => (
  <>
    <Link className="sectionCard" href={`/work/${work.id}`}>
      <Card
        image={work.image}
        title={work.title}
        icon={work.icon}
        caption={work.shortDescription}
        color={work.light}
      />
    </Link>
  </>
);

export default memo(EWork);
