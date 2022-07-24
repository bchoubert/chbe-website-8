import { FC, memo, useMemo } from "react";

import EExperienceDetails from "components/Business/experience/EExperienceDetails";
import EWorkDetails from "components/Business/work/EWorkDetails";
import Layout from "components/Layout";

import experience from "data/experience";
import work from "data/work";

import { IExperience, IWork } from "types";
import { mobileThreshold } from "assets";

export const config = {
  amp: true,
};

interface EIdDetailsProps {
  type: "experience" | "work";
  object: IExperience | IWork;
}

const EIdDetails: FC<EIdDetailsProps> = ({ type, object }) => {
  const body = useMemo(() => {
    switch (type) {
      case "work":
        return <EWorkDetails {...(object as IWork)} />;
      case "experience":
        return <EExperienceDetails {...(object as IExperience)} />;
      default:
        return null;
    }
  }, [object, type]);

  return (
    <>
      <Layout color={object.light}>
        <div className="wrapper">{body}</div>
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
        id: `experience.${e.id}`,
      },
    })),
    ...work.map((w) => ({
      params: {
        id: `work.${w.id}`,
      },
    })),
  ],
  fallback: false,
});

export const getStaticProps = ({ params }) => {
  const [type, id] = params.id.split(".");
  let object = null;

  switch (type) {
    case "experience":
      object = experience.find((e) => e.id === id);
      break;
    case "work":
      object = work.find((w) => w.id === id);
  }

  return {
    props: {
      id,
      type,
      object,
    },
  };
};

export default memo(EIdDetails);
