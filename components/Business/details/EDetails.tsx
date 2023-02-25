import { FC, memo, useMemo } from "react";

import ESubDetails from "components/Business/details/subDetails/ESubDetails";

import { IBusinessCommon } from "types/business.types";
import EDetailsCompanyOrProject from "./EDetailsCompanyOrProject";
import EDetailsRole from "./EDetailsRole";
import EDetailsProducts from "./EDetailsProducts";
import ESubDetailsImage from "./subDetails/ESubDetailsImage";
import { imageBorderRadius, mobileThreshold } from "assets";
import EDetailsRealisations from "./EDetailsRealisationsFeatures";

interface EDetailsProps {
  object: IBusinessCommon;
}

const EDetails: FC<EDetailsProps> = ({ object }) => {
  const details = useMemo(() => object.details, [object]);

  if (!details) {
    return null;
  }

  return (
    <>
      <div className="EDetails">
        <div
          className={details.illustration ? "EDetails--withIllustration" : ""}
        >
          <div>
            {(details.company || details.project) && (
              <EDetailsCompanyOrProject details={details} common={object} />
            )}
            {details.role && <EDetailsRole details={details} common={object} />}
            {(details.realisations || details.features) && (
              <EDetailsRealisations details={details} common={object} />
            )}
          </div>
          {details.illustration && (
            <div className="EDetails-illustraton">
              <div className="EDetails-illustration-line" />
              <div className="EDetails-illustration-image">
                <ESubDetailsImage
                  subDetail={details.illustration}
                  layout="fill"
                />
              </div>
            </div>
          )}
        </div>
        {details.products && (
          <EDetailsProducts details={details} common={object} />
        )}
        {details.sub && <ESubDetails subDetails={details} />}
      </div>
      <style jsx>{`
        .EDetails {
          margin-top: 2rem;
          width: 100%;
          position: relative;
        }

        .EDetails--withIllustration {
          display: flex;
          flex-direction: row;
          gap: 5rem;
        }

        .EDetails-illustraton {
          width: 15rem;
          flex: 0 0 15rem;
          height: 15rem;
          display: block;
          position: relative;
        }
        .EDetails-illustration-line {
          height: 14rem;
          width: 14rem;
          display: block;
          position: absolute;
          left: 1rem;
          background-color: ${object.color};
          background-image: linear-gradient(
            75deg,
            white 70%,
            ${object.color} 50%
          );
          border-radius: ${imageBorderRadius};
        }
        .EDetails-illustration-image {
          width: 14rem;
          height: 14rem;
          display: block;
          position: relative;
          top: 1rem;
          border-radius: ${imageBorderRadius};
          overflow: hidden;
        }

        @media screen and (max-width: ${mobileThreshold}px) {
          .EDetails-illustraton {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default memo(EDetails);
