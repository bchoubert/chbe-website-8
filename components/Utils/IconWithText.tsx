import { FC, memo, ReactNode } from "react";

import Icon from "components/Utils/Icon";

import { IIcon } from "types/common.types";

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
      <Icon icon={icon} wrapped multiplicator={options?.size || 1} />
      <div>
        <h2 className="title">{title}</h2>
        {caption && <span className="caption">{caption}</span>}
      </div>
      {rightContent}
    </div>
    <style jsx>{`
      .title {
        margin-top: ${options?.isInline ? 0 : 0.5}rem;
        font-size: ${options?.size || 1}rem;
        font-weight: bold;
      }
      .root {
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        padding-right: 0.5rem;
        ${options?.isWhiteBackground
          ? `
        font-weight: normal;
        background-color: #ffffff;
        `
          : ""}
      }
    `}</style>
  </>
);

export default memo(IconWithText);
