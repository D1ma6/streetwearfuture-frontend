import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.scss";
import ListItems from "../components/ListItems";
import useWindowDimensions from "../utilities/useWindowDimensions";
import Navbar from "./Navbar";

// icons
import { Icon } from "@iconify/react";
import searchIcon from "@iconify/icons-akar-icons/search";
import userAvatar from "@iconify/icons-carbon/user-avatar";

function Header() {
  const [nav, setNav] = useState(false);
  const [list, setList] = useState(null);
  const listNav = useRef(null);
  // width
  const { width } = useWindowDimensions();
  useEffect(() => {
    let lastScrollTop = 0;
    window.addEventListener(
      "scroll",
      () => {
        let st = window.pageYOffset || document.documentElement.scrollTop;
        const header = document.querySelector(`.${styles.header}`);
        const headerInner = document.querySelector(`.${styles.header__inner}`);
        if (st > lastScrollTop && nav == false) {
          if (window.pageYOffset > 120) {
            header.style.top = "-1px";
            header.style.background = "#1b1b1b";
            header.style.borderBottom = "1px solid #8f8f8f";
            headerInner.style.padding = "20px 0";
            header.style.position = "sticky";
          }
        } else {
          if (window.pageYOffset < 120) {
            header.style.top = 0;
            headerInner.style.padding = width < 761 ? "20px 0" : "40px 0";
            header.style.borderBottom = "none";
            header.style.background = "none";
            header.style.position = "relative";
          } else {
            header.style.top = "-1px";
            header.style.position = "sticky";
            header.style.background = "#1b1b1b";
            header.style.borderBottom = "1px solid #8f8f8f";
            headerInner.style.padding = "20px 0";
          }
        }

        lastScrollTop = st <= 0 ? 0 : st;
      },
      false
    );
  });

  return (
    <>
      <header
        style={
          nav || list != null
            ? {
                borderBottom: "1px solid rgba(255, 255, 255, .1)",
              }
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
              {width < 761 ? (
                <div>
                  <a href="#/dashboard" className="snipcart-user-profile">
                    <Icon
                      icon={userAvatar}
                      style={{
                        color: "#ffffff",
                        fontSize: "28px",
                        margin: "0 20px 0 0",
                      }}
                    />
                  </a>
                </div>
              ) : (
                ""
              )}{" "}
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
