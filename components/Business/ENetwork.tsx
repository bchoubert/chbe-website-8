import { FC, memo } from "react";

import { colors } from "assets";

import Icon from "components/Utils/content/Icon";
import { INetwork } from "types/business.types";

const ENetwork: FC<INetwork> = ({ link, newTab, name, icon }) => (
  <>
    <a
      href={link}
      target={newTab ? "_blank" : undefined}
      title={name}
      className="network"
    >
      <Icon icon={icon} options={{ multiplicator: 1.2, wrapped: true }} />
    </a>
    <style jsx>{`
      .network {
        color: ${colors.grey["800"]};
        align-self: center;
      }
    `}</style>
  </>
);

export default memo(ENetwork);
