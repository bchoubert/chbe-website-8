import Link from "next/link";
import { FC, memo } from "react";

import { colors } from "assets";

import Icon from "components/Utils/Icon";
import { INetwork } from "types/business.types";

const ENetwork: FC<INetwork> = ({ link, newTab, name, icon }) => (
  <>
    <Link href={link} passHref>
      <a
        target={newTab ? "_blank" : undefined}
        title={name}
        className="network"
      >
        <Icon wrapped icon={icon} multiplicator={1.2} />
      </a>
    </Link>
    <style jsx>{`
      .network {
        color: ${colors.grey["800"]};
        align-self: center;
      }
    `}</style>
  </>
);

export default memo(ENetwork);
