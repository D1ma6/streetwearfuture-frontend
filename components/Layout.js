import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styles from "../styles/Layout.module.scss";

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
