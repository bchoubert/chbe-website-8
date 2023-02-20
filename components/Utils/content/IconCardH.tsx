import { FC, memo, ReactNode } from "react";

import Icon from "components/Utils/content/Icon";

import { IIcon } from "types/common.types";
import { styles } from "assets";

interface IconCardHProps {
  icon: IIcon;
  title: string;
  color: string;
  caption?: string;
  rightContent?: ReactNode;
}

const IconCardH: FC<IconCardHProps> = ({
  icon,
  title,
  color,
  caption,
  rightContent,
}) => (
  <>
    <div className="root">
      <div className="content">
        <Icon icon={icon} options={{ wrapped: true, multiplicator: 2.2 }} />
        <div>
          <h2 className="title">{title}</h2>
          {caption && <span className="caption">{caption}</span>}
        </div>
        {rightContent}
      </div>
    </div>
    <style jsx>{`
      .root {
        display: block;
        margin: 1rem 0;
        padding: 1rem;
        ${styles.br}
        background-color: ${color};
      }
      .title {
        margin-top: 0.5rem;
        font-size: 1.2rem;
        font-weight: bold;
      }
      .caption {
        font-size: 0.9rem;
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

export default memo(IconCardH);
