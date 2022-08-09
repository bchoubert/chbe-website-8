import Link from "next/link";
import { FC, memo } from "react";

import { mobileThreshold } from "assets";

import Card from "components/Utils/layout/Card";
import { IExperience } from "types/business.types";

const EEexperience: FC<IExperience> = (exp) => (
  <>
    <Link href={`/experience/${exp.id}`} passHref>
      <a className="Link">
        <Card
          image={exp.image}
          title={exp.title}
          icon={exp.icon}
          caption={exp.company}
          color={exp.light}
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

export default memo(EEexperience);
