import { FC, memo, useMemo } from 'react';

import { IBusinessCommon, ISubDetail, ISubDetails, ISubDetailsImage, ISubDetailsText, ISubDetailsType } from 'types';

interface ESubDetailsProps {
  subDetails: ISubDetails;
  common: IBusinessCommon;
}

interface ESubDetailProps {
  subDetail: ISubDetail;
  common: IBusinessCommon;
}

const ESubDetailsText: FC<ESubDetailProps> = ({
  subDetail,
  common,
}) => {
  const subDetailsText = useMemo(() => subDetail as ISubDetailsText, [subDetail]);
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: subDetailsText.text }} />
    </>
  );
}

const ESubDetailsImage: FC<ESubDetailProps> = ({
  subDetail: subDetails,
  common,
}) => {
  const subDetailsImage = useMemo(() => subDetails as ISubDetailsImage, [subDetails]);
  return (
    <>
      <amp-img
        height={subDetailsImage.h}
        width={subDetailsImage.w}
        path={subDetailsImage.path}
      />
    </>
  );
}

const ESubDetails: FC<ESubDetailsProps> = ({
  subDetails,
  common,
}) => {
  return (
    <>
      <div className="ESubDetails">
        {subDetails.sub.map(s => (
          <>
            {s.subtype === ISubDetailsType.text && (<ESubDetailsText subDetail={s} common={common} />)}
            {s.subtype === ISubDetailsType.image && (<ESubDetailsImage subDetail={s} common={common} />)}
          </>
        ))}
      </div>
      <style jsx>{`
      `}</style>
    </>
  );
}

export default memo(ESubDetails);
