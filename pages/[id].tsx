import { FC, memo, useMemo } from 'react';

import EExperienceDetails from 'components/Business/EExperienceDetails';
import EWorkDetails from 'components/Business/EWorkDetails';
import Layout from 'components/Layout';

import experience from 'data/experience';
import work from 'data/work';

import { IExperience, IWork } from 'types';

export const config = {
  amp: true,
};

interface EIdDetailsProps {
  type: 'experience' | 'work';
  object: IExperience | IWork;
}

const EIdDetails: FC<EIdDetailsProps> = ({
  type,
  object,
}) => {
  return (
    <>
      <Layout>
        <div className="wrapper">
          {
            (type === 'work' ? <EWorkDetails {...object as IWork} /> : null)
          }
          {
            (type === 'experience' ? <EExperienceDetails {...object as IExperience} /> : null)
          }
        </div>
      </Layout>
      <style jsx>{`
      .wrapper {
        width: 80%;
        margin: 0 auto;
      }
      `}</style>
    </>
  );
}

export const getStaticPaths = () => ({
  paths: [
    ...experience.map(e => ({
      params: {
        id: `experience.${e.id}`,
      },
    })),
    ...work.map(w => ({
      params: {
        id: `work.${w.id}`,
      },
    })),
  ],
  fallback: false,
});

export const getStaticProps = ({ params }) => {
  const [type, id] = params.id.split('.');
  let object = null;

  switch(type) {
    case 'experience':
      object = experience.find(e => e.id === id);
      break;
    case 'work':
      object = work.find(w => w.id === id);
  }

  return {
    props: {
      id,
      type,
      object,
    },
  }
}

export default memo(EIdDetails);
