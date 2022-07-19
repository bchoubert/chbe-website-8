import Head from 'next/head'
import { FC, memo, ReactNode } from 'react'

import { colors, styles } from 'assets';

import Footer from 'components/Utils/Footer';
import Navbar from 'components/Utils/Navbar';

import profile from 'data/profile';


interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({
  children,
}) => {
  return (
    <>
      <Head>
        <title>{profile.title}</title>

        <link rel="icon" type="image/png" href="favicon.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- false positive, we can't have a _document file using amp - https://github.com/vercel/next.js/issues/26160 */}
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Display:wght@300;400&display=swap" rel="stylesheet" />
        
        <script async custom-element="amp-youtube" src="https://cdn.ampproject.org/v0/amp-youtube-0.1.js"></script>
      </Head>
      <Navbar />
      <div className="Wrapper">
        {children}
      </div>
      <Footer />
      <style global jsx>{`
        amp-lightbox-gallery {
          z-index: 12;
        }
        body {
          font-family: 'Noto Sans Display', sans-serif;
          color: ${colors.grey['800']};
        }
        html, body {
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
          padding: 0 .2em;
        }
        .Icon-title {
          display: inline-block;
          height: 1em;
          padding: 0 .4em 0 0;
        }
        .Image {
          ${styles.br}
        }
        h1 {
          margin-bottom: 0;
        }
        h2, h3, h4, h5, h6 {
          margin: 0;
        }
        .centralBlock {
          margin: 0 auto;
          width: 50%;
          min-width: 55vw;
        }
        .caption {
          position: relative;
          top: -.4rem;
          font-size: 80%;
          color: ${colors.grey['600']};
        }
      `}</style>
    </>
  )
};

export default memo(Layout);
