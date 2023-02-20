import { FC, memo, ReactNode } from "react";

import Icon from "components/Utils/content/Icon";

import { IIcon } from "types/common.types";
import { styles } from "assets";

interface IconCardVProps {
  icon: IIcon;
  title: string;
  color: string;
  light: string;
  caption?: string;
  rightContent?: ReactNode;
}

const IconCardV: FC<IconCardVProps> = ({
  icon,
  title,
  color,
  light,
  caption,
  rightContent,
}) => (
  <>
    <div className="root">
      <div className="content">
        <div className="firstLine">
          <Icon
            icon={icon}
            options={{
              multiplicator: 1,
              wrapped: true,
              color: "white",
              wrapOptions: { color, padding: 6 },
            }}
          />
          <h2 className="title">{title}</h2>
        </div>
        <div>{caption && <span className="caption">{caption}</span>}</div>
        {rightContent}
      </div>
    </div>
    <style jsx>{`
      .root {
        display: block;
        margin: 1rem 0;
        padding: 1rem;
        ${styles.br}
        width: 20rem;
      }
      .firstLine {
        display: flex;
        gap: 1rem;
        margin-bottom: 1rem;
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
        flex-direction: column;
        padding-right: 0.5rem;
      }
    `}</style>
  </>
);

export default memo(IconCardV);
