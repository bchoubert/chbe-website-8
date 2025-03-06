import { FC, memo, useMemo } from 'react';

import { colors } from 'assets';
import { EDetailsPart } from 'types/business.types';

import PartWithTitle from 'components/Utils/layout/PartWithTitle';

const EDetailsRealisations: FC<EDetailsPart> = ({ details, common }) => {
  const [isFeature, content] = useMemo(() => {
    if (details.realisations) {
      return [false, details.realisations];
    }
    if (details.features) {
      return [true, details.features];
    }
    return [true, []];
  }, [details]);

  return (
    <>
      <PartWithTitle
        title={isFeature ? 'Features' : 'Realisations'}
        options={{ color: common.color, iconColor: common.color }}
      >
        <div className="realisations">
          {content.map((r) => (
            <PartWithTitle
              key={r.title}
              title={r.title}
              icon={r.icon}
              options={{
                color: colors.grey['800'],
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
};

export default memo(EDetailsRealisations);
