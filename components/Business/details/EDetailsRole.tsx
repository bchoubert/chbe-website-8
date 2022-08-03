import PartWithTitle from "components/Utils/PartWithTitle";
import { FC, memo } from "react";
import { EDetailsPart } from "types/business.types";

const EDetailsRole: FC<EDetailsPart> = ({ details, common }) => (
  <PartWithTitle title="My role" color={common.color}>
    <div dangerouslySetInnerHTML={{ __html: details.role.description }} />
  </PartWithTitle>
);

export default memo(EDetailsRole);
