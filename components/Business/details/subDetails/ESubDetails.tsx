import { FC, memo, useMemo } from "react";
import { ISubDetail, ISubDetails, ISubDetailsType } from "types/details.types";
import ESubDetailsImage from "./ESubDetailsImage";
import ESubDetailsText from "./ESubDetailsText";

interface ESubDetailsProps {
  subDetails: ISubDetails;
}

interface ESubDetailProps {
  subDetail: ISubDetail;
}

const ESubDetails: FC<ESubDetailsProps> = ({ subDetails }) => (
  <div className="ESubDetails">
    {subDetails.sub.map((s) => (
      <>
        {s.subtype === ISubDetailsType.text && (
          <ESubDetailsText subDetail={s} />
        )}
        {s.subtype === ISubDetailsType.image && (
          <ESubDetailsImage subDetail={s} />
        )}
      </>
    ))}
  </div>
);

export default memo(ESubDetails);
