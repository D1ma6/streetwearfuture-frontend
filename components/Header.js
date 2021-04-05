import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.scss";
import ListItems from "../components/ListItems";

// icons
import { Icon } from "@iconify/react";
import searchIcon from "@iconify/icons-akar-icons/search";
import Navbar from "./Navbar";

function Header() {
  const [nav, setNav] = useState(false);
  const [list, setList] = useState(null);
  const listNav = useRef(null);

  return (
    <>
      <header
        style={
          nav || list != null
            ? { borderBottom: "1px solid rgba(255, 255, 255, .1)" }
            : {}
        }
        className={`${styles.header}`}
      >
        <div className={"container"}>
          <div className={`${styles.header__inner}`}>
            <div className={styles.navbar}>
              <div
                onClick={() => {
                  setList(null);
                  setNav(!nav);
                }}
                className={styles.menu}
              >
                <span className={styles.menu__span}></span>
                <span className={styles.menu__span}></span>
              </div>
              <nav className={styles.nav}>
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
            <div
              onClick={() => {
                setList(null);
                setNav(false);
              }}
              className={styles.logo}
            >
              <Link href="/">
                <span>
                  <Image
                    src="/streetwearfuture.svg"
                    layout="fixed"
                    width="182"
                    height="18"
                  />
                </span>
              </Link>
            </div>

            <div className={`${styles.account}`}>
              <div className={styles.account__search}>
                <input className={styles.account__search__input} />
                <Icon
                  icon={searchIcon}
                  className={styles.account__search__icon}
                  style={{ color: "#ffffff", fontSize: "16px" }}
                />
              </div>

              <a
                href="#/dashboard"
                className={`${"snipcart-user-profile"} ${
                  styles.account__profile
                }`}
              >
                Account
              </a>

              <a
                href="#"
                className={`${"snipcart-checkout"} ${styles.account__cart}`}
              >
                Cart
              </a>

              <a
                href=""
                className={`${"snipcart-checkout snipcart-items-count"} ${
                  styles.account__basket
                }`}
              >
                0
              </a>
            </div>
          </div>
        </div>
      </header>
      <Navbar list={list} setList={setList} nav={nav} setNav={setNav} />
      <ListItems list={list} listNav={listNav} setList={setList} />
    </>
  );
}

export default Header;
