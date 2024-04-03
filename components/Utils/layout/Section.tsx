import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FC, memo } from 'react';

import { colors } from 'assets';
import { ISection } from 'types/common.types';

import IconWithText from 'components/Utils/content/IconWithText';

import Pill from '../content/Pill';

const Section: FC<ISection> = ({
  icon, title, caption, content, moreLink,
}) => (
  <>
    <div className="root">
      <IconWithText
        icon={icon}
        title={title}
        caption={caption}
        options={{ size: 1.4 }}
        rightContent={moreLink ? (
          <a target="_blank" href={moreLink} className="moreLink">
            <Pill
              title="See all"
              textColor={colors.grey[1000]}
              icon={{
                source: 'fa',
                icon: faEye,
              }}
              iconColor={colors.grey[800]}
            />
          </a>
        ) : null}
      />
      <div className="content">{content}</div>
    </div>
    <style jsx>{`
      .root {
        margin-top: 2rem;
      }

      .content {
        margin-top: 0.5rem;
        display: flex;
        flex-flow: wrap;
        gap: 1rem;
      }

      .moreLink {
        color: ${colors.grey['800']};
        margin-left: 1rem;
      }
    `}</style>
  </>
);

export default memo(Section);
