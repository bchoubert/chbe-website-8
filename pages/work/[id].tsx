import { FC, memo } from "react";

import Layout from "components/Layout";

import work from "data/work";

import { IWork } from "types";
import { mobileThreshold } from "assets";
import FullCard from "components/Utils/FullCard";
import EDetails from "components/Business/details/EDetails";

export const config = {
  amp: true,
};

interface EWorkDetailsProps {
  object: IWork;
}

const EIdDetails: FC<EWorkDetailsProps> = ({ object }) => {
  return (
    <>
      <Layout color={object.light}>
        <div className="wrapper">
          <FullCard image={object.image} color={object.light}>
            <div>
              <h2>{object.title}</h2>
              <h3 className="shortDescription">{object.shortDescription}</h3>
            </div>
          </FullCard>
          <div>
            <EDetails work={object} />
          </div>
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
};

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
  const id = params.id;
  let object = work.find((w) => w.id === id);

  return {
    props: {
      id,
      object,
    },
  };
};

export default memo(EIdDetails);
