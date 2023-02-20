import { colors } from "assets";
import PartWithTitle from "components/Utils/layout/PartWithTitle";
import { FC, memo } from "react";
import { EDetailsPart } from "types/business.types";

const EDetailsRealisations: FC<EDetailsPart> = ({ details, common }) => (
  <>
    <PartWithTitle title="Realisations" options={{ color: common.color }}>
      <div className="realisations">
        {(details.realisations || []).map((r) => (
          <PartWithTitle
            key={r.title}
            title={r.title}
            options={{
              color: colors.grey["800"],
              isSubtitle: true,
            }}
          >
            <span className="description">{r.description}</span>
          </PartWithTitle>
        ))}
      </div>
    </PartWithTitle>
    <style jsx>{`
      .realisations {
      }
      .realisations .description {
        font-size: 90%;
      }
    `}</style>
  </>
);

export default memo(EDetailsRealisations);
