import { FC, memo, ReactNode } from 'react';

import { colors } from 'assets';

interface SemipageProps {
  children: ReactNode;
}

const Semipage: FC<SemipageProps> = ({ children }) => (
    <>
      <div className="SemiPage">{children}</div>
      <style jsx>{`
        .SemiPage {
          background-color: ${colors.grey['200']};
          height: 80vh;
          width: 100%;
          overflow-x: hideen;
        }
      `}</style>
    </>
);

export default memo(Semipage);
