import Document, { Html, Head, Main, NextScript } from 'next/document'

import { GA_TRACKING_ID } from '../lib/gtag'
import Drift from 'react-driftjs'


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
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            
            <meta name="description" content="JobsinHealthTech helps you find jobs at the most innovative healthcare and lifesciences companies. Get weekly job alerts by signing up to our newsletter."/>
            <meta itemProp="name" content="JobsinHealthTech | Discover jobs at innovative healthcare and lifesciences companies."/>
            <meta itemProp="description" content="JobsinHealthTech helps you find jobs at the most innovative healthcare and lifesciences companies. Get weekly job alerts by signing up to our newsletter."/>
            <meta itemProp="image" content="https://jobsinhealthtech.com/metaLogo.png"/>

            <meta property="og:type" content="website"/>
            <meta property="og:title" content="JobsinHealthTech | Discover jobs at innovative healthcare and lifesciences companies."/>
            <meta property="og:description" content="JobsinHealthTech helps you find jobs at the most innovative healthcare and lifesciences companies. Get weekly job alerts by signing up to our newsletter."/>
            <meta property="og:image" content="https://jobsinhealthtech.com/metaLogo.png"/>

            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content="JobsinHealthTech | Discover jobs at innovative healthcare and lifesciences companies."/>
            <meta name="twitter:description" content="JobsinHealthTech helps you find jobs at the most innovative healthcare and lifesciences companies. Get weekly job alerts by signing up to our newsletter."/>
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
          <Drift appId='g6pbdn22f4zm' />
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