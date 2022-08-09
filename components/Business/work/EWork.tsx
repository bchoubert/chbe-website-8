import Link from "next/link";
import { FC, memo } from "react";

import { mobileThreshold } from "assets";

import Card from "components/Utils/layout/Card";
import { IWork } from "types/business.types";

const EWork: FC<IWork> = (work) => (
  <>
    <Link href={`/work/${work.id}`} passHref>
      <a className="Link">
        <Card
          image={work.image}
          title={work.title}
          icon={work.icon}
          caption={work.shortDescription}
          color={work.light}
        />
      </a>
    </Link>
    <style jsx>{`
      .Link {
        width: calc(33.3% - 0.7rem);
        display: block;
        text-decoration: none;
        color: inherit;
      }
      @media screen and (max-width: ${mobileThreshold}px) {
        .Link {
          width: 100%;
        }
      }
    `}</style>
  </>
);

export default memo(EWork);
