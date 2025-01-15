import React from 'react';
import Script from 'next/script';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-8EVDXJH2SJ"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-8EVDXJH2SJ');
        `}
      </Script>

      <Component {...pageProps} />
    </>
  );
};

export default App;