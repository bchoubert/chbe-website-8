import { FC, memo } from 'react';

import { mobileThreshold } from 'assets';
import { IExperience } from 'types/business.types';

import EDetails from 'components/Business/details/EDetails';
import EExperienceHeadline from 'components/Business/experience/EExperienceHeadline';
import Layout from 'components/Utils/layout/Layout';

import experience from 'data/experience';

export const config = {
  amp: true,
};

interface EExperienceDetailsProps {
  object: IExperience;
}

const EIdDetails: FC<EExperienceDetailsProps> = ({ object }) => (
    <>
      <Layout color={object.light}>
        <EExperienceHeadline object={object} />
        <div className="wrapper">
          <EDetails object={object} />
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
  const { id } = params;
  const object = experience.find((e) => e.id === id);

  return {
    props: {
      id,
      object,
    },
  };
};

export default memo(EIdDetails);
