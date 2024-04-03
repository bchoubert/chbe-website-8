import { FC, memo } from 'react';

import { IImage } from 'types/common.types';

interface ESubDetailImageProps {
  subDetail: IImage;
  layout?: 'fill';
}

const ESubDetailsImage: FC<ESubDetailImageProps> = ({ subDetail, layout }) => (
  <amp-img
    height={subDetail.h}
    width={subDetail.w}
    src={subDetail.path}
    layout={layout}
  />
);

export default memo(ESubDetailsImage);
