import { FC, memo } from 'react';

import EDetails from 'components/Business/EDetails';
import FullCard from 'components/Utils/FullCard';

import { IWork } from 'types';


const EWorkDetails: FC<IWork> = (work) => (
  <>
    <FullCard
      image={work.image}
      color={work.light}
    >
      <div>
        <h2>{work.title}</h2>
        <h3 style={{ color: work.color, fontWeight: 'normal' }}>{work.shortDescription}</h3>
      </div>
    </FullCard>
    <div>
      <EDetails work={work} />
    </div>
    <style jsx>{`
    `}</style>
  </>
);

export default memo(EWorkDetails);
