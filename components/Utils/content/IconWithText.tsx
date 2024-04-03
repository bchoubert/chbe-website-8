import { FC, memo, ReactNode } from 'react';

import { IIcon } from 'types/common.types';

import Icon from 'components/Utils/content/Icon';

interface IconWithTextPropsOptions {
  isInline?: boolean;
  isWhiteBackground?: boolean;
  size?: number;
}

interface IconWithTextProps {
  icon: IIcon;
  title: string;
  caption?: string;
  rightContent?: ReactNode;
  options?: IconWithTextPropsOptions;
}

const IconWithText: FC<IconWithTextProps> = ({
  icon,
  title,
  caption,
  rightContent,
  options,
}) => (
  <>
    <div className="root">
      <div className="content">
        <Icon
          icon={icon}
          options={{ wrapped: true, multiplicator: options?.size }}
        />
        <div>
          <h2 className="title">{title}</h2>
          {caption && <span className="caption">{caption}</span>}
        </div>
        {rightContent}
      </div>
    </div>
    <style jsx>{`
      .root {
        display: inline-block;
        ${options?.isWhiteBackground
      ? `
        font-weight: normal;
        background-color: #ffffff;
        `
      : ''}
      }
      .title {
        margin-top: ${options?.isInline ? 0 : 0.5}rem;
        font-size: ${options?.size || 1}rem;
        font-weight: bold;
      }
      .caption {
        white-space: nowrap;
        position: relative;
        top: -0.5em;
      }
      .content {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding-right: 0.5rem;
      }
    `}</style>
  </>
);

export default memo(IconWithText);
