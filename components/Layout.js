import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

import { useRouter } from "next/router";

function Layout({ children }) {
  const router = useRouter();

  return (
    <div
      style={{
        background: `${
          router.asPath == "/privacy-and-cookies" ||
          router.asPath == "/terms-and-conditions" ||
          router.asPath == "/returns-refunds"
            ? "#d7d7d7"
            : "#1b1b1b"
        }`,
      }}
    >
      <Header />
      {children}
      <Footer
        bg={
          router.asPath == "/privacy-and-cookies" ||
          router.asPath == "/terms-and-conditions" ||
          router.asPath == "/returns-refunds"
            ? "#d7d7d7"
            : "#1b1b1b"
        }
      />
    </div>
  );
}

export default Layout;
