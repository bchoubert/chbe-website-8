import { FC, memo, ReactNode } from 'react';

import { colors } from 'assets';

interface IWhiteEncapsulationProps {
  children: ReactNode;
}

const WhiteEncapsulation: FC<IWhiteEncapsulationProps> = ({
  children,
}) => (
  <>
    <div className="WhiteEncapsulation">
      {children}
    </div>
    <style jsx>{`
      .WhiteEncapsulation {
        display: inline-block;
        background-color: ${colors.grey['0']};
      }
    `}</style>
  </>
);

export default memo(WhiteEncapsulation);
