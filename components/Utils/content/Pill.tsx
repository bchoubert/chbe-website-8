import { FC, memo } from "react";

import { colors, styles } from "assets";

import Icon from "components/Utils/content/Icon";

import { IIcon } from "types/common.types";

interface IPillProps {
  light?: string;
  textColor?: string;
  iconColor?: string;
  title: string;
  icon?: IIcon;
}

const Pill: FC<IPillProps> = ({ light, textColor, iconColor, title, icon }) => (
  <>
    <div className="Pill">
      <div
        className={`Pill-wrapper ${textColor ? "" : "Pill-wrapper--opacity"}`}
      >
        {icon && <Icon icon={icon} options={{ color: iconColor }} />}
        <div dangerouslySetInnerHTML={{ __html: title }} />
      </div>
    </div>
    <style jsx>{`
      .Pill {
        margin: 0.5em 1em 0.5em 0;
        padding: 0.2em 0.5em;
        display: inline-block;
        ${styles.br}
        background-color: ${light || colors.grey["200"]};
        color: ${textColor || "#666666"};
      }
      .Pill-wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.3rem;
      }
      .Pill-wrapper--opacity {
        opacity: 0.65;
      }
    `}</style>
  </>
);

export default memo(Pill);
