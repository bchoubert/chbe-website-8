import { FC, memo } from 'react';

import { ISubDetailsText } from 'types/details.types';

interface ESubDetailsTextProps {
  subDetail: ISubDetailsText;
}

const ESubDetailsText: FC<ESubDetailsTextProps> = ({ subDetail }) => (
  <div dangerouslySetInnerHTML={{ __html: subDetail.text }} />
);

export default memo(ESubDetailsText);
