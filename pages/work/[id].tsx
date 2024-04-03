import { FC, memo } from 'react';

import { mobileThreshold } from 'assets';
import { IWork } from 'types/business.types';

import EDetails from 'components/Business/details/EDetails';
import EWorkHeadline from 'components/Business/work/EWorkHeadline';
import Layout from 'components/Utils/layout/Layout';

import work from 'data/work';

export const config = {
  amp: true,
};

interface EWorkDetailsProps {
  object: IWork;
}

const EIdDetails: FC<EWorkDetailsProps> = ({ object }) => (
    <>
      <Layout color={object.light}>
        <EWorkHeadline object={object} />
        <div className="wrapper">
          <EDetails object={object} />
        </div>
      </Layout>
      <style jsx>{`
        .wrapper {
          width: 80%;
          margin: 0 auto;
        }
        .shortDescription {
          color: ${object.color};
          fontweight: normal;
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
    ...work.map((w) => ({
      params: {
        id: w.id,
      },
    })),
  ],
  fallback: false,
});

export const getStaticProps = ({ params }) => {
  const { id } = params;
  const object = work.find((w) => w.id === id);

  return {
    props: {
      id,
      object,
    },
  };
};

export default memo(EIdDetails);
