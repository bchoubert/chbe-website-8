import React, { FC, memo, useMemo } from 'react';

import { colors } from 'assets';
import { EDetailsPart } from 'types/business.types';
import { IDetailsCompany, IDetailsProject } from 'types/details.types';

import Pill from 'components/Utils/content/Pill';
import PartWithTitle from 'components/Utils/layout/PartWithTitle';

const EDetailsCompanyOrProject: FC<EDetailsPart> = ({ details, common }) => {
  const detailsCompanyOrProjects = useMemo(
    () => details.company || details.project,
    [details],
  );

  const title = useMemo(() => {
    if (details.company) {
      if (details.company.isOrganization) {
        return 'Organization';
      }
      return 'Company';
    }
    return 'Project';
  }, [details]);

  return (
    <PartWithTitle
      title={title}
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
              key={a}
              title={a}
              textColor={colors.grey[1000]}
              icon={{
                source: 'component',
                icon: 'star',
              }}
              iconColor={common.color}
            />
          ))}
        </div>
        <div>
          {(detailsCompanyOrProjects?.links || []).map((l) => (
            <a key={l.title} href={l.link} target="_blank">
              <Pill {...l} textColor={common.color} />
            </a>
          ))}
        </div>
        <div className="d_tech">
          {(
            (detailsCompanyOrProjects as IDetailsProject['project'])
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
          (detailsCompanyOrProjects as IDetailsCompany['company'])?.customers
          || []
        ).length > 0 ? (
          <PartWithTitle
            title="Main Customers"
            options={{ color: common.color, isSubtitle: true }}
          >
            {(
              detailsCompanyOrProjects as IDetailsCompany['company']
            )?.customers.map((customer) => (
              <a key={customer.title} href={customer.link} target="_blank">
                <Pill {...customer} />
              </a>
            ))}
          </PartWithTitle>
          ) : null}
      </div>
    </PartWithTitle>
  );
};

export default memo(EDetailsCompanyOrProject);
