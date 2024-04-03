import { FC, memo } from 'react';

import { styles } from 'assets';
import { IEducation } from 'types/business.types';

import IconWithText from 'components/Utils/content/IconWithText';

const EEducation: FC<IEducation> = (edu) => (
  <>
      <a target="_blank" href={edu.link} className="sectionCard root">
        <IconWithText
          title={edu.title}
          icon={edu.icon}
          caption={`${edu.organization} • ${edu.year}`}
        />
      </a>
      <style jsx>{`
        .root {
          display: block;
          ${styles.br}
        }
      `}</style>
  </>
);

export default memo(EEducation);
