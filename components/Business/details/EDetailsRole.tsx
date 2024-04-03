import { FC, memo } from 'react';

import { EDetailsPart } from 'types/business.types';

import PartWithTitle from 'components/Utils/layout/PartWithTitle';

const EDetailsRole: FC<EDetailsPart> = ({ details, common }) => (
  <PartWithTitle title="My role" options={{ color: common.color }}>
    <div dangerouslySetInnerHTML={{ __html: details.role.description }} />
  </PartWithTitle>
);

export default memo(EDetailsRole);
