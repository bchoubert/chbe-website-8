import Link from "next/link";
import { FC, memo, useMemo } from "react";

import Card from "components/Utils/layout/Card";
import { EDetailsPart } from "types/business.types";
import { IDetailsProject } from "types/details.types";
import PartWithTitle from "components/Utils/layout/PartWithTitle";
import EImageList from "../EImageList";

const EWorkImages: FC<EDetailsPart> = ({ details, common }) => {
  const detailsCompanyOrProjects = useMemo(
    () => details?.company || details?.project,
    [details]
  );

  const images = useMemo(
    () => (detailsCompanyOrProjects as IDetailsProject["project"])?.images,
    []
  );

  if ((images || []).length === 0) {
    return null;
  }

  return (
    <PartWithTitle title="Preview" options={{ color: common.color }}>
      <EImageList
        images={(detailsCompanyOrProjects as IDetailsProject["project"]).images}
      />
    </PartWithTitle>
  );
};

export default memo(EWorkImages);
