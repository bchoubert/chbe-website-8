import { FC, memo } from 'react';

import { IExperience } from 'types/business.types';

import IconWithText from 'components/Utils/content/IconWithText';
import FullCard from 'components/Utils/layout/FullCard';

interface EExperienceHeadlineProps {
  object: IExperience;
}

const EExperienceHeadline: FC<EExperienceHeadlineProps> = ({ object }) => (
    <FullCard image={object.image} color={object.light}>
      <div>
        <h2>{object.title}</h2>
        <IconWithText
          icon={object.icon}
          title={object.company}
          options={{
            isInline: true,
            size: 1.3,
          }}
        />
      </div>
    </FullCard>
);

export default memo(EExperienceHeadline);
