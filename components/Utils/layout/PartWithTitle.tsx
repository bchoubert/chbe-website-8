import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import {
  FC, memo, ReactNode, useMemo,
} from 'react';

import { mobileThreshold, styles } from 'assets';

import IconWithText from '../content/IconWithText';

interface IPartiWithTitlePropsOptions {
  color: string;
  backgroundColor?: string;
  isSubtitle?: boolean;
  padding?: number;
  className?: string;
}

interface IPartiWithTitleProps {
  title: string;
  icon?: IconDefinition;
  children: ReactNode;
  options: IPartiWithTitlePropsOptions;
}

const PartWithTitle: FC<IPartiWithTitleProps> = ({
  title,
  icon,
  children,
  options,
}) => {
  const titleContent = useMemo(
    () => (
      <>
        {icon ? (
          <IconWithText
            title={title}
            icon={{ source: 'fa', icon }}
            options={{ isInline: true }}
          />
        ) : (
          title
        )}
      </>
    ),
    [title, icon],
  );

  return (
    <>
      <div className={`PartWithTitle ${options?.className || ''}`}>
        <div>
          {options?.isSubtitle ? (
            <h2 className="title">{titleContent}</h2>
          ) : (
            <h3 className="title">{titleContent}</h3>
          )}
        </div>
        <div className="content">{children}</div>
      </div>
      <style jsx>{`
        .PartWithTitle {
          padding: 1.5rem ${options?.padding || 0}px ${options?.padding || 0}px
            ${options?.padding || 0}px;
          ${styles.br}
          background-color: ${options?.backgroundColor || 'transparent'};
        }
        .PartWithTitle .title {
          padding: 0
            ${options?.backgroundColor
            || (!options?.isSubtitle && options?.color)
        ? '0.3em'
        : '0'};
          display: inline;
          font-weight: normal;
          ${!options?.isSubtitle
          && `color: #ffffff;
          background-color: ${options?.color};`}
        }
        .PartWithTitle .content {
          ${!options?.isSubtitle && 'margin: 0 0 0 2rem;'}
          padding: 0.5em;
          background-color: #ffffff;
        }

        @media screen and (max-width: ${mobileThreshold}px) {
          .PartWithTitle .content {
            margin: 0;
          }
        }
      `}</style>
    </>
  );
};

export default memo(PartWithTitle);
