import PartWithTitle from "components/Utils/PartWithTitle";
import Pill from "components/Utils/Pill";
import Link from "next/link";
import React, { FC, memo } from "react";
import { EDetailsPart } from "types/business.types";

const EDetailsCompany: FC<EDetailsPart> = ({ details, common }) => (
  <PartWithTitle title="Company" color={common.color}>
    <>
      <div dangerouslySetInnerHTML={{ __html: details.company.description }} />
      {(details.company.links || []).map((l) => (
        <Link passHref href={l.link} key={l.title}>
          <a target="_blank">
            <Pill {...l} textColor={common.color} />
          </a>
        </Link>
      ))}
      {(details.company?.customers || []).length > 0 ? (
        <PartWithTitle title="Main Customers" color={common.color} isSubtitle>
          {details.company.customers.map((customer) => (
            <Link passHref href={customer.link} key={customer.title}>
              <a target="_blank">
                <Pill {...customer} />
              </a>
            </Link>
          ))}
        </PartWithTitle>
      ) : null}
    </>
  </PartWithTitle>
);

export default memo(EDetailsCompany);
