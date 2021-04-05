import React from "react";
import { Icon, InlineIcon } from "@iconify/react";
import robotVacuum from "@iconify/icons-mdi/robot-vacuum";
import Link from "next/link";
import Head from "next/head";

function fourOfour() {
  return (
    <div className="fourOfour">
      <Head>
        <title>Streetwearfuture | 404</title>
        <link
          href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
      </Head>
      <div className="fourOfour__icon">
        <Icon
          icon={robotVacuum}
          style={{ color: "#ffed4f", fontSize: "124px" }}
        />
      </div>
      <h1>Not Found</h1>
      <p>Opps... Looks like the page your looking for is not found</p>
      <Link href="/">
        <a>Go Back</a>
      </Link>
    </div>
  );
}

export default fourOfour;
