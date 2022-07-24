import { FC, memo } from "react";

import { colors, styles } from "assets";

import Icon from "components/Utils/Icon";

import { IIcon } from "types";

interface IPillProps {
  light?: string;
  textColor?: string;
  title: string;
  icon?: IIcon;
}

const Pill: FC<IPillProps> = ({ light, textColor, title, icon }) => (
  <>
    <div className="Pill">
      <div
        className={`Pill-wrapper ${textColor ? "" : "Pill-wrapper--opacity"}`}
      >
        {icon && <Icon icon={icon} />}
        {title}
      </div>
    </div>
    <style jsx>{`
      .Pill {
        margin: 0.5em 1em 0.5em 0;
        padding: 0.2em 0.5em;
        display: inline-block;
        ${styles.br}
        background-color: ${light || colors.grey["200"]};
        color: ${textColor};
      }
      .Pill-wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      .Pill-wrapper--opacity {
        opacity: 0.65;
      }
    `}</style>
  </>
);

export default memo(Pill);
