import { FC, memo, ReactNode } from 'react';

import Icon from 'components/Utils/Icon';

import { IIcon } from 'types';

interface IconWithTextPropps {
  icon: IIcon;
  title: string;
  caption: string;
  size?: number;
  rightContent?: ReactNode;
}

const IconWithText: FC<IconWithTextPropps> = ({
  icon,
  title,
  caption,
  size,
  rightContent,
}) => (
  <>
    <div className="root">
      <Icon icon={icon} wrapped multiplicator={size || 1} />
      <div>
        <h2 className="title">{title}</h2>
        <span className="caption">{caption}</span>
      </div>
      {rightContent}
    </div>
    <style jsx>{`
      .title {
        margin-top: .5rem;
        font-size: ${size || 1}rem;
        font-weight: bold;
      }
      .root {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
    `}</style>
  </>
);

export default memo(IconWithText);
