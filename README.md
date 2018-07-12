# next-inline-script



- [Adding GA script tag? ](https://github.com/zeit/next.js/issues/160)
- [False positive error in rehydration of <script dangerouslySetInnerHtml> in combination with react-typekit](https://github.com/zeit/next.js/issues/4211)


## USE

```javascript

import InlineScript from 'next-inline-script';

const GAScript = () => (
  <InlineScript>
    {() => {
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-XXXXXX');
    }}
  </InlineScript>
);

// _document.js

<Head>
  <GAScript />
</Head>

```
