import Head from 'next/head';

// https://www.advancedwebranking.com/blog/meta-tags-important-in-seo/

export default function SEO({ title, description = '' }) {
  return (
    <Head>
      {/* general */}
      <title>{title}</title>
      <meta name='author' content='Marcin Antol' />
      <meta name='publisher' content='Marcin Antol' />
      <meta name='application-name' content={title} />
      <meta name='apple-mobile-web-app-title' content={title} />
      <meta name='description' content={description} />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1'
      ></meta>

      {/* Google site verification*/}
      <meta name="google-site-verification" content="18Rk8eHm6UY7WCuyCNSJdjPtbJZrHF_LH9GMN9DPnbg" />

      {/* character encoding for the HTML  */}
      {/* <meta charset='utf-8' /> */}
      {/* <meta http-equiv='content-type' content='text/html; charset=utf-8' /> */}

      {/* Instruct Internet Explorer to use its latest rendering engine */}
      {/* <meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1' /> */}

      {/* Tell search engines that this URL is the main page and avoid indexing other duplicate page URLs */}
      {/* <link rel='canonical' href='https://yourwebsite.com/' />
      <link href="https://moz.com/" rel="home" />
      <meta name='robots' content='index, follow' /> */}

      {/*  Sends referrer information to secure HTTPS sites, but not insecure HTTP sites */}
      {/* <meta name='referrer' content='no-referrer-when-downgrade' /> */}

      {/* Cache next-pwa ??? */}
      <link rel='manifest' href='./manifest.json' />
      <link rel='shortcut icon' href='./favicon.ico' />
      <link rel='icon' type='image/png' href='./favicon.ico' />
      {/* this sets the color of url bar  */}
      <meta name='theme-color' content='#90cdf4' />
      <link rel='apple-touch-icon' href='./favicon.ico' />
      {/* this sets the color of url bar in Apple smatphones   */}
      <meta name='apple-mobile-web-app-status-bar' content='#90cdf4' />

      {/* <meta name='apple-mobile-web-app-capable' content='yes' /> */}
      {/* <meta name='apple-mobile-web-app-status-bar-style' content='default' /> */}
      {/* <meta name='format-detection' content='telephone=no' /> */}
      {/* <meta name='mobile-web-app-capable' content='yes' /> */}
      {/* <meta name="apple-mobile-web-app-title" content="BBC News"></meta> */}

      {/* FB, Linked, Google */}
      {/* <meta property='og:type' content='website' />
      <meta property='og:title' content='TITLE OF YOUR POST OR PAGE' />
      <meta property='og:description' content={description} /> */}
      {/* <meta property='og:image' content='LINK TO THE IMAGE FILE' /> */}
      {/* <meta property='og:url' content='PERMALINK' />
      <meta property='og:site_name' content='SITE NAME' />
      <meta content='en_US' property='og:locale' />
      <meta content='1200' property='og:image:width' />
      <meta content='630' property='og:image:height' /> */}

      {/* Twitter */}
      {/* <meta name='twitter:title' content='TITLE OF POST OR PAGE' />
      <meta name='twitter:description' content='DESCRIPTION OF PAGE CONTENT' />
      <meta name='twitter:image' content='LINK TO IMAGE' />
      <meta name='twitter:site' content='@USERNAME' />
      <meta name='twitter:creator' content='@USERNAME' />
      <meta name='twitter:image:width' content='800' />
      <meta name='twitter:image:height' content='418' />
      <meta name="twitter:image:alt" content="BBC News" />
      <meta name="twitter:domain" content="www.bbc.co.uk" /> */}
    </Head>
  );
}
