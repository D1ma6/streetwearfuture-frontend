import React, { useEffect } from "react";
import styles from "../styles/Header.module.scss";
import Link from "next/link";
import useWindowDimensions from "../utilities/useWindowDimensions";

function Navbar({ nav, setNav, list, setList }) {
  // width
  const { width } = useWindowDimensions();
  useEffect(() => {
    const html = document.querySelector("html");
    const body = document.querySelector("body");
    const header = document.querySelector(`.${styles.header}`);
    const headerInner = document.querySelector(`.${styles.header__inner}`);
    if (nav || list != null) {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
      body.style.position = "relative";

      header.style.top = 0;
      headerInner.style.padding = width < 761 ? "20px 0" : "40px 0";
      header.style.borderBottom = "none";
      header.style.background = "none";
      header.style.position = "fixed";
      header.style.mixBlendMode = "difference";
    } else {
      html.style.overflow = "";
      body.style.overflow = "";

      header.style.position = "";
      header.style.mixBlendMode = "";
      header.style.top = ``;
    }
  }, [nav, list]);
  return (
    <>
      {nav && (
        <div className={`${styles.menuNav} ${styles.nav__open}`}>
          <nav
            className={`${styles.nav} ${styles.nav__open__nav}`}
            style={{ display: "flex" }}
          >
            <Link href="/products">
              <a
                onClick={() => {
                  setList(null);
                  setNav(false);
                }}
                className={styles.nav__link}
              >
                New Arrivals
              </a>
            </Link>
            <a
              onClick={() => {
                if (list != "Men") {
                  setList("Men");
                  setNav(false);
                } else {
                  setList(null);
                }
              }}
              className={`${styles.nav__link} ${
                list == "Men" ? styles.nav__link__active : ""
              }`}
            >
              Men
            </a>

            <a
              onClick={() => {
                if (list != "Women") {
                  setList("Women");
                  setNav(false);
                } else {
                  setList(null);
                }
              }}
              className={`${styles.nav__link} ${
                list == "Women" ? styles.nav__link__active : ""
              }`}
            >
              Women
            </a>
          </nav>
        </div>
      )}
    </>
  );
}

export default Navbar;
