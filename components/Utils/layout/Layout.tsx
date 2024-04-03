import Head from 'next/head';
import { FC, memo, ReactNode } from 'react';

import { colors, mobileThreshold, styles } from 'assets';

import Footer from 'components/Utils/layout/Footer';
import Navbar from 'components/Utils/layout/Navbar';

import profile from 'data/profile';

interface LayoutProps {
  children: ReactNode;
  color?: string;
}

const Layout: FC<LayoutProps> = ({ children, color }) => (
    <>
      <Head>
        <title>{profile.title}</title>
      </Head>
      <Navbar color={color} />
      <div className="Wrapper">{children}</div>
      <Footer />
      <style global jsx>{`
        amp-lightbox-gallery {
          z-index: 12;
        }
        body {
          font-family: "Noto Sans Display", sans-serif;
          color: ${colors.grey['800']};
        }
        html,
        body {
          height: 100vh;
          width: 100%;
          display: block;
          margin: 0;
          padding: 0;
        }
        .Wrapper {
          width: 100%;
          display: block;
          margin-top: 4rem;
        }
        .Icon {
          display: inline-block;
          height: 1em;
          padding: 0 0.2em;
        }
        .Icon-title {
          display: inline-block;
          height: 1em;
          padding: 0 0.4em 0 0;
        }
        .Image {
          ${styles.br}
        }
        h1 {
          margin-bottom: 0;
        }
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin: 0;
        }
        .centralBlock {
          margin: 0 auto;
          width: 50%;
          min-width: 55vw;
        }
        .caption {
          position: relative;
          top: -0.2em;
          font-size: 80%;
          color: ${colors.grey['600']};
        }
        
        .sectionCard {
          width: calc(33.3% - 0.7rem);
          display: block;
          text-decoration: none;
          color: inherit;
        }

        @media screen and (max-width: ${mobileThreshold}px) {
          .sectionCard {
            width: 100%;
          }
        }
      `}</style>
    </>
);

export default memo(Layout);
