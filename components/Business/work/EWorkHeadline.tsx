import { FC, memo } from 'react';

import { IWork } from 'types/business.types';

import IconWithText from 'components/Utils/content/IconWithText';
import WhiteEncapsulation from 'components/Utils/content/WhiteEncapsulation';
import FullCard from 'components/Utils/layout/FullCard';

interface EWorkHeadlineProps {
  object: IWork;
}

const EWorkHeadline: FC<EWorkHeadlineProps> = ({ object }) => (
    <FullCard image={object.image} color={object.light}>
      <div>
        <WhiteEncapsulation>
          <span className="workTitle">
            <IconWithText
              title={object.title}
              icon={object.icon}
              options={{
                isInline: true,
                size: 1.3,
              }}
              />
          </span>
        </WhiteEncapsulation>
        <h4 className="shortDescription">{object.shortDescription}</h4>
      </div>
    </FullCard>
);

export default memo(EWorkHeadline);
