import Document, { Html, Head, Main, NextScript } from 'next/document'

import { GA_TRACKING_ID } from '../lib/gtag'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=PT+Sans&display=swap" rel="stylesheet"/>

            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="description" content="Jobs in Health Tech is the leading careers community in health technology. Discover jobs in health tech, digital health and life sciences at jobsinhealthtech.com"/>
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

            <meta itemProp="name" content="Jobs in Health Tech | Discover Jobs at Healthcare and lifesciences companies "/>
            <meta itemProp="image" content="https://jobsinhealthtech.com/metaLogo.png"/>

            <meta property="og:type" content="website"/>
            <meta property="og:title" content="Jobs in Health Tech | Discover jobs at innovative healthcare and life sciences companies."/>
            <meta property="og:description" content="Jobs in Health Tech helps you find jobs at the most innovative healthcare and life sciences companies. Get weekly job alerts by signing up to our newsletter."/>
            <meta property="og:image" content="https://jobsinhealthtech.com/metaLogo.png"/>

            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content="Jobs in Health Tech | Discover jobs at innovative healthcare and life sciences companies."/>
            <meta name="twitter:description" content="Jobs in Health Tech helps you find jobs at the most innovative healthcare and life sciences companies. Get weekly job alerts by signing up to our newsletter."/>
            <meta name="twitter:image" content="https://jobsinhealthtech.com/metaLogo.png"/>
            <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
           <script type="text/javascript" dangerouslySetInnerHTML={{ __html: process.env.drift }}></script>
           <base target="_blank"/>
           <script async src="https://js.convertflow.co/production/websites/32482.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
