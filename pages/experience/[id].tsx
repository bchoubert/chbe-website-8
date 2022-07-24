import { FC, memo } from "react";

import Layout from "components/Layout";

import experience from "data/experience";

import { IExperience } from "types";
import { mobileThreshold } from "assets";
import FullCard from "components/Utils/FullCard";
import EDetails from "components/Business/details/EDetails";

export const config = {
  amp: true,
};

interface EExperienceDetailsProps {
  object: IExperience;
}

const EIdDetails: FC<EExperienceDetailsProps> = ({ object }) => {
  return (
    <>
      <Layout color={object.light}>
        <div className="wrapper">
          <FullCard image={object.image} color={object.light}>
            <div>
              <h2>{object.title}</h2>
              <h3 style={{ color: object.color, fontWeight: "normal" }}>
                {object.company}
              </h3>
            </div>
          </FullCard>
          <EDetails experience={object} />
        </div>
      </Layout>
      <style jsx>{`
        .wrapper {
          width: 80%;
          margin: 0 auto;
        }
        @media screen and (max-width: ${mobileThreshold}px) {
          .wrapper {
            width: 95%;
          }
        }
      `}</style>
    </>
  );
};

export const getStaticPaths = () => ({
  paths: [
    ...experience.map((e) => ({
      params: {
        id: e.id,
      },
    })),
  ],
  fallback: false,
});

export const getStaticProps = ({ params }) => {
  const id = params.id;
  let object = experience.find((e) => e.id === id);

  return {
    props: {
      id,
      object,
    },
  };
};

export default memo(EIdDetails);
