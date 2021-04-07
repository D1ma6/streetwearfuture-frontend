import Document, { Html, Head, Main, NextScript } from "next/document";
import { GA_TRACKING_ID } from "../lib/gtag";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css"
            rel="stylesheet"
            type="text/css"
          />
          <link rel="preconnect" href="https://app.snipcart.com" />
          <link rel="preconnect" href="https://cdn.snipcart.com" />
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
        </Head>

        <body>
          <Main />

          {/* <script>
      !(function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod
            ? n.callMethod.apply(n, arguments)
            : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = "2.0";
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(
        window,
        document,
        "script",
        "https://connect.facebook.net/en_US/fbevents.js"
      );
      fbq("init", "761362134767053");
      fbq("track", "PageView");
    </script>
    <noscript
      ><img
        height="1"
        width="1"
        style="display: none"
        src="https://www.facebook.com/tr?id=761362134767053&ev=PageView&noscript=1"
    /></noscript> */}

          <script
            dangerouslySetInnerHTML={{
              __html: `!(function (f, b, e, v, n, t, s) {
                if (f.fbq) return;
                n = f.fbq = function () {
                  n.callMethod
                    ? n.callMethod.apply(n, arguments)
                    : n.queue.push(arguments);
                };
                if (!f._fbq) f._fbq = n;
                n.push = n;
                n.loaded = !0;
                n.version = "2.0";
                n.queue = [];
                t = b.createElement(e);
                t.async = !0;
                t.src = v;
                s = b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t, s);
              })(
                window,
                document,
                "script",
                "https://connect.facebook.net/en_US/fbevents.js"
              );
              fbq("init", "761362134767053");
              fbq("track", "PageView");`,
            }}
          />
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<img
              height="1"
              width="1"
              style="display: none"
              src="https://www.facebook.com/tr?id=761362134767053&ev=PageView&noscript=1"
          />`,
            }}
          />

          <script
            src="https://code.jquery.com/jquery-3.4.1.min.js"
            integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
            crossorigin="anonymous"
          ></script>

          <script
            src="https://cdn.snipcart.com/scripts/2.0/snipcart.js"
            data-api-key="OTNlMWUwMDEtMzJhNS00ODdkLWFjZDItNjJjODI2NzRhNzQxNjM3NTA0MDMzNTIyNTEzOTA1"
            id="snipcart"
          ></script>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
