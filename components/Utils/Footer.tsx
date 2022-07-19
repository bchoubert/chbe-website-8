import { FC, memo } from 'react';

import { colors } from 'assets';

import profile from 'data/profile';

const Footer: FC = () => (
  <>
    <div className="Footer">
      <div className="Footer-wrapper">
        © Bertrand Choubert, {profile.year}
      </div>
    </div>
    <style jsx>{`
    .Footer {
      display: block;
      font-size: 85%;
      margin: 3rem auto 0 auto;
      padding-top: 2rem;
      width: 100%;
      height: 3rem;
      background-color: ${colors.grey['200']}
    }
    .Footer-wrapper {
      width: 80%;
      margin: 0 auto;
    }
    `}</style>
  </>
);

export default memo(Footer);
