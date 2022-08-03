import { FC, memo, useMemo } from "react";

import ESubDetails from "components/Business/ESubDetails";

import { IBusinessCommon } from "types/business.types";
import EDetailsCompany from "./EDetailsCompany";
import EDetailsRole from "./EDetailsRole";
import EDetailsProducts from "./EDetailsProducts";

interface EDetailsProps {
  object: IBusinessCommon;
}

const EDetails: FC<EDetailsProps> = ({ object }) => {
  const details = useMemo(() => object.details, [object]);

  if (!details) {
    return null;
  }

  return (
    <>
      <div className="EDetails">
        {details.company && (
          <EDetailsCompany details={details} common={object} />
        )}
        {details.role && <EDetailsRole details={details} common={object} />}
        {details.products && (
          <EDetailsProducts details={details} common={object} />
        )}
        {details.sub && <ESubDetails subDetails={details} />}
      </div>
      <style jsx>{`
        .EDetails {
          margin-top: 2rem;
          width: 100%;
          position: relative;
        }
      `}</style>
    </>
  );
};

export default memo(EDetails);
