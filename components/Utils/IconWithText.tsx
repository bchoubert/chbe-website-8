import { FC, memo, ReactNode } from "react";

import Icon from "components/Utils/Icon";

import { IIcon } from "types/common.types";

interface IconWithTextPropps {
  icon: IIcon;
  title: string;
  caption?: string;
  size?: number;
  rightContent?: ReactNode;
  isInline?: boolean;
}

const IconWithText: FC<IconWithTextPropps> = ({
  icon,
  title,
  caption,
  size,
  rightContent,
  isInline,
}) => (
  <>
    <div className="root">
      <Icon icon={icon} wrapped multiplicator={size || 1} />
      <div>
        <h2 className="title">{title}</h2>
        {caption && <span className="caption">{caption}</span>}
      </div>
      {rightContent}
    </div>
    <style jsx>{`
      .title {
        margin-top: ${isInline ? 0 : 0.5}rem;
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
