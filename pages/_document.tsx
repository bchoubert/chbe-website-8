import {
  Html, Head, Main, NextScript,
} from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- false positive, we can't have a _document file using amp - https://github.com/vercel/next.js/issues/26160 */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Display:wght@300;400&display=swap"
          rel="stylesheet"
        />

        <script
          async
          custom-element="amp-youtube"
          src="https://cdn.ampproject.org/v0/amp-youtube-0.1.js"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
