import { colors, imageBorderRadius, mobileThreshold, styles } from "assets";
import PartWithTitle from "components/Utils/layout/PartWithTitle";
import Pill from "components/Utils/content/Pill";
import Link from "next/link";
import React, { FC, memo, useMemo } from "react";
import { EDetailsPart } from "types/business.types";
import { IDetailsCompany, IDetailsProject } from "types/details.types";
import EImageList from "../EImageList";

const EDetailsCompanyOrProject: FC<EDetailsPart> = ({ details, common }) => {
  const detailsCompanyOrProjects = useMemo(
    () => details.company || details.project,
    [details]
  );

  return (
    <PartWithTitle
      title={details.company ? "Company" : "Project"}
      options={{ color: common.color }}
    >
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html: detailsCompanyOrProjects?.description,
          }}
        />
        <div>
          {(detailsCompanyOrProjects?.accomplishments || []).map((a) => (
            <Pill
              title={a}
              textColor={colors.grey[1000]}
              icon={{
                source: "component",
                icon: "star",
              }}
              iconColor={common.color}
            />
          ))}
        </div>
        <div>
          {(detailsCompanyOrProjects?.links || []).map((l) => (
            <Link passHref href={l.link} key={l.title}>
              <a target="_blank">
                <Pill {...l} textColor={common.color} />
              </a>
            </Link>
          ))}
        </div>
        <div className="d_tech">
          {(
            (detailsCompanyOrProjects as IDetailsProject["project"])
              .technologies || []
          ).map((tech, i) => (
            <Pill
              key={`p_${i}`}
              icon={tech.icon}
              light={common.light}
              title={tech.title}
            />
          ))}
        </div>
        {(
          (detailsCompanyOrProjects as IDetailsCompany["company"])?.customers ||
          []
        ).length > 0 ? (
          <PartWithTitle
            title="Main Customers"
            options={{ color: common.color, isSubtitle: true }}
          >
            {(
              detailsCompanyOrProjects as IDetailsCompany["company"]
            )?.customers.map((customer) => (
              <Link passHref href={customer.link} key={customer.title}>
                <a target="_blank">
                  <Pill {...customer} />
                </a>
              </Link>
            ))}
          </PartWithTitle>
        ) : null}
      </div>
    </PartWithTitle>
  );
};

export default memo(EDetailsCompanyOrProject);
