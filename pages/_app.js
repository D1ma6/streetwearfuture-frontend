import "../styles/globals.scss";
import Layout from "../components/Layout";

import React, { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";

import FacebookPixel from "../components/FacebookPixel";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <FacebookPixel>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </FacebookPixel>
  );
}

export default MyApp;
