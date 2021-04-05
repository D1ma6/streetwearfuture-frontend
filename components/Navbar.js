import React from "react";
import styles from "../styles/Header.module.scss";
import Link from "next/link";

function Navbar({ nav, setNav, list, setList }) {
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
