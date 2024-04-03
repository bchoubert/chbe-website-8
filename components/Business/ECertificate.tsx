import { FC, memo } from 'react';

import { styles } from 'assets';
import { ICertificate } from 'types/business.types';

import IconWithText from 'components/Utils/content/IconWithText';

const ECertificate: FC<ICertificate> = (cert) => (
  <>
      <a target="_blank" href={cert.link} className="sectionCard root">
        <IconWithText
          title={cert.title}
          icon={cert.icon}
          caption={`${cert.organization} • ${cert.year}`}
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

export default memo(ECertificate);
