import { FC, memo, useMemo } from "react";

import {
  IBusinessCommon,
  ISubDetail,
  ISubDetails,
  ISubDetailsImage,
  ISubDetailsText,
  ISubDetailsType,
} from "types";

interface ESubDetailsProps {
  subDetails: ISubDetails;
}

interface ESubDetailProps {
  subDetail: ISubDetail;
}

const ESubDetailsText: FC<ESubDetailProps> = ({ subDetail }) => {
  const subDetailsText = useMemo(
    () => subDetail as ISubDetailsText,
    [subDetail]
  );

  return <div dangerouslySetInnerHTML={{ __html: subDetailsText.text }} />;
};

const ESubDetailsImage: FC<ESubDetailProps> = ({ subDetail }) => {
  const subDetailsImage = useMemo(
    () => subDetail as ISubDetailsImage,
    [subDetail]
  );

  return (
    <amp-img
      height={subDetailsImage.h}
      width={subDetailsImage.w}
      path={subDetailsImage.path}
    />
  );
};

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
