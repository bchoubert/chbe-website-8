import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, memo, ReactNode, useMemo } from "react";

import { colors, styles } from "assets";

import { IIcon } from "types";

interface IconProps {
  icon: IIcon;
  wrapped?: boolean;
  rotated?: boolean;
  multiplicator?: number;
  color?: string;
}

const decorators = {
  wrapped: (content: ReactNode, multiplicator?: number) => (
    <>
      <div className="wrapped">{content}</div>
      <style jsx>{`
        .wrapped {
          height: ${2 * (multiplicator || 1)}em;
          width: ${2 * (multiplicator || 1)}em;
          display: grid;
          place-items: center;
        }
      `}</style>
    </>
  ),
  rotated: (content: ReactNode, multiplicator?: number, color?: string) => (
    <>
      <div className="rotated-parent">
        <div className="rotated-child">{content}</div>
      </div>
      <style jsx>{`
        .rotated-parent {
          transform-origin: 50% 50%;
          height: ${2 * (multiplicator || 1)}em;
          width: ${2 * (multiplicator || 1)}em;
          display: flex;
          justify-content: center;
          align-items: center;
          transform: rotate(20deg);
          ${styles.br}
          background-color: ${color || colors.grey["200"]}
        }
        .rotated-child {
          transform-origin: 50% 50%;
          height: ${2 * (multiplicator || 1)}em;
          width: ${2 * (multiplicator || 1)}em;
          display: flex;
          justify-content: center;
          align-items: center;
          transform: rotate(-20deg);
        }
      `}</style>
    </>
  ),
};

const Icon: FC<IconProps> = ({
  icon,
  wrapped,
  rotated,
  multiplicator,
  color,
}) => {
  const content = useMemo(
    () =>
      icon.source === "fa" ? (
        <span
          style={{
            fontSize: `${multiplicator || 1}rem`,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <FontAwesomeIcon
            className="Icon"
            icon={icon.icon as IconDefinition}
          />
        </span>
      ) : (
        <amp-img
          alt=""
          height={15 * (multiplicator || 1)}
          width={15 * (multiplicator || 1)}
          className="Icon"
          fallback=""
          src={`icons/${icon.icon}.svg`}
        />
      ),
    [multiplicator, icon]
  );

  const decorated = useMemo(() => {
    let initialContent = content;
    if (rotated) {
      initialContent = decorators.rotated(initialContent, multiplicator, color);
    }
    if (wrapped) {
      initialContent = decorators.wrapped(initialContent, multiplicator);
    }
    return initialContent;
  }, [content, wrapped, rotated, color, multiplicator]);

  return decorated;
};

export default memo(Icon);
