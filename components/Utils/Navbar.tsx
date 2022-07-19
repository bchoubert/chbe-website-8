import Link from 'next/link';
import { FC, memo } from 'react';

import { colors, mobileThreshold } from 'assets';

import ENetwork from 'components/Business/ENetwork';

import networks from 'data/networks';


const Navbar: FC = () => {
  return (
    <>
      <nav className="Navbar">
        <div className="wrapper">
          <Link href="/#" passHref>
            <a className="logo">
              <amp-img
                alt="home"
                height="25"
                width="25"
                className="Icon"
                fallback=""
                src="icons/bc.svg"
              />
            </a>
          </Link>
          <div className="networks">
            {networks.map(n => (
              <ENetwork
                key={n.id}
                {...n}
              />
            ))}
          </div>
        </div>
      </nav>
      <style jsx>{`
        .Navbar {
          width: calc(100% - 3rem);
          padding: 0 1.5rem;
          height: 4rem;
          background-color: ${colors.grey['0']};
          position: fixed;
          display: flex;
          align-items: center;
          justify-content: space-between;
          top: 0;
          left: 0;
          z-index: 10;
          border-bottom: 10px solid ${colors.grey['200']};
        }
        .logo {
          align-self: center;
          display: flex;
          align-items: center;
        }
        .wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 80%;
          margin: 0 auto;
        }
        h1 {
          font-size: 1rem;
          font-weight: bold;
        }
        .networks {
          display: flex;
          flex-direction: row;
          height: 2rem;
        }
        @media screen and (max-width: ${mobileThreshold}px) {
          .wrapper {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default memo(Navbar);
